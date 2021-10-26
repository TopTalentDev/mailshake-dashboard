require("dotenv").config();

const { responseStatus, slackNotification } = require("./helpers");

const AirtableApi = require("./airtable");
const Airtable = new AirtableApi(process.env.AIRTABLE_API_KEY);

module.exports = async (event) => {
    try {
        const res = JSON.parse(event.body);
        const { full_name, campaign, message, contact_id } = res;

        const textCampaigns = await Airtable.getCampaign(campaign.name);

        for (let textCampaign of textCampaigns) {
            const contact = await Airtable.findTextContact(
                textCampaign["Base ID"],
                full_name,
                campaign.name
            );

            let contact = await Airtable.findTextContactByID(textCampaign["Base ID"], contact_id);

            if (!contact) {
                contact = await Airtable.findTextContact(
                    textCampaign["Base ID"],
                    full_name,
                    campaign.name
                );
            }

            if (contact && !("Responded" in contact)) {
                const Status = responseStatus(message.body);

                const updatedFields = {
                    Responded: true,
                    Response: message.body,
                    "Response Date": new Date(),
                    Status,
                };

                await Airtable.updateContact(
                    textCampaign["Base ID"],
                    contact.recordID,
                    updatedFields
                );

                console.log(
                    `\nClient: ${textCampaign.Client}\nCampaign: ${campaign.name} \nFrom: ${full_name} \nResponse: ${message.body}\n`
                );

                Status === null &&
                    (await slackNotification(
                        process.env.SLACK_TEXT_NOTIFICATIONS,
                        `\n*Client:* ${textCampaign.Client}\n*Campaign:* ${campaign.name} \n*From:* ${full_name} \n*Response:* ${message.body}\n`
                    ));
            }
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ res }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ msg: error }),
        };
    }
};
