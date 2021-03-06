require("dotenv").config();

const moment = require("moment");
const today = moment(new Date()).format("MM/DD/YYYY");

const MailShakeApi = require("./Mailshake");
const AirtableApi = require("./Airtable");

const Airtable = new AirtableApi(process.env.AIRTABLE_API_KEY);

const { liveCampaigns, campaignsToRun, mapContact } = require("./helpers");

module.exports = async () => {
    try {
        const getCampaigns = await Airtable.getCampaigns();
        let campaigns = liveCampaigns(getCampaigns);
        campaigns = campaignsToRun(campaigns);

        for (let campaign of campaigns) {
            let view = "First Lines";

            if ("Tag" in campaign) {
                view = `First Lines - ${campaign.Tag}`;
            }

            const contacts = await Airtable.getContacts(campaign["Base ID"], view);

            if (contacts) {
                const Mailshake = new MailShakeApi(campaign["API Token"]);

                // format contacts for mailshake
                const mailshakeContacts = mapContact(contacts);

                await Mailshake.addToCampaign(campaign["Campaign ID"], mailshakeContacts);

                await Airtable.updateCampaign(campaign.recordID, { "Last Updated": today });

                const updatedFields = {
                    "In Campaign": true,
                    Campaign: campaign.Campaign,
                };

                for (let contact of contacts) {
                    await new Promise((resolve) => {
                        setTimeout(resolve, 500);
                    });

                    await Airtable.updateContact(
                        campaign["Base ID"],
                        contact.recordID,
                        updatedFields
                    );
                }
            } else {
                // update campaign
                await Airtable.updateCampaign(campaign.recordID, {
                    "Campaign Status": "Need More Contacts",
                    "Last Updated": today,
                });
            }
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ campaigns }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ msg: "Error" }),
        };
    }
};
