(this["webpackJsonpmailshake-dashboard"]=this["webpackJsonpmailshake-dashboard"]||[]).push([[0],{34:function(t,e,n){n(70).config(),t.exports=[{client:"Summa Media",api:"726811af-7c60-4fa4-8cb4-85c443779855"},{client:"Just Roofs And Gutters",api:"98e96a35-4444-41b3-850d-02c0c38e1561"},{client:"Truox",api:"53ddc331-f8c0-46f3-bdfc-8d5439d0264c"},{client:"Integrity",api:"1c9d7258-42d0-4ea7-b66c-f601a291c272"},{client:"Farha",api:"5f971535-ae9c-4287-a688-75933c3bede1"},{client:"Rooftek",api:"5c5486f2-2237-4363-8ccf-2e862b54f687"},{client:"Custom Installations",api:"22dcdc93-0929-4ee8-9e92-26ee2abe5e0e"}]},65:function(t,e,n){},89:function(t,e,n){"use strict";n.r(e);var l=n(5),o=n(0),i=n.n(o),a=n(8),s=n.n(a),c=(n(65),n(25)),p=n.n(c),r=n(26),g=n(39),f=n(24),d=n(139),u=n(126),C=n(136),y=n(91),b={button:{display:"block"},formControl:{minWidth:"120px",padding:"10px"},label:{padding:" 7px 0 0 10px"}};var h=Object(y.a)(b)((function(t){var e=t.classes,n=t.label,i=t.handleChange,a=t.menuItems,s=t.value,c=Object(o.useState)(!1),p=Object(f.a)(c,2),r=p[0],g=p[1];return Object(l.jsx)("div",{children:Object(l.jsxs)(u.a,{className:e.formControl,children:[Object(l.jsx)(d.a,{className:e.label,id:"demo-controlled-open-select-label",children:n}),Object(l.jsx)(C.a,{labelId:"demo-controlled-open-select-label",id:"demo-controlled-open-select",open:r,onClose:function(){g(!1)},onOpen:function(){g(!0)},value:s,onChange:i,children:a})]})})})),j=n(130),E=n(131),x=n(132),m=n(54),O=n.n(m),F={card:{height:"150px",minHeight:"100px",minWidth:"100px",width:"150px",backgroundColor:"#3f51b5",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"10px",color:"white"},score:{fontSize:38},title:{fontSize:14,color:"white",textTransform:"uppercase"},percent:{fontSize:12,color:"white"}};var v=Object(y.a)(F)((function(t){var e=t.classes,n=t.score,o=t.title,i=t.percent,a=t.isFetching;return Object(l.jsx)(j.a,{className:e.card,children:a?Object(l.jsx)(O.a,{type:"spinningBubbles",color:"#fff"}):Object(l.jsxs)(E.a,{children:[Object(l.jsx)(x.a,{className:e.score,component:"h1",style:{textAlign:"center"},children:n}),"Recipients"!==o&&Object(l.jsx)(x.a,{className:e.percent,color:"textSecondary",style:{textAlign:"center"},children:i}),Object(l.jsx)(x.a,{className:e.title,color:"textSecondary",style:{textAlign:"center"},children:o})]})})})),D={row:{display:"flex",justifyContent:"space-around",marginTop:"4em"}};var A=Object(y.a)(D)((function(t){var e=t.mailshakeTotals,n=t.isFetching,o=t.classes,i=e.map((function(t){return Object(l.jsx)(v,{score:t.score,title:t.title,percent:t.percent,isFetching:n},t.title)}));return Object(l.jsx)("div",{className:o.row,children:i})})),w=n(137),k=n(34),S=n.n(k),I={dashboard:{width:"1024px",margin:"0 auto",height:"636px",display:"grid",gridTemplateColumns:" auto",gridTemplateRows:"10em auto",background:"rgba( 255, 255, 255, 0.25 )",boxShadow:"0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",backdropFilter:"blur( 7.5px )",borderRadius:"50px"}},T=n(43),R=n.n(T);var N=Object(y.a)(I)((function(t){var e=t.classes,n=Object(o.useState)({client:"",campaigns:[]}),i=Object(f.a)(n,2),a=i[0],s=i[1],c=Object(o.useState)({client:"",campaignID:"",totals:[{title:"Recipients",score:0,percent:"0%"},{title:"Sent",score:0,percent:"0%"},{title:"Opened",score:0,percent:"0%"},{title:"Clicked",score:0,percent:"0%"},{title:"Replied",score:0,percent:"0%"},{title:"Bounced",score:0,percent:"0%"}],isFetching:!1}),d=Object(f.a)(c,2),u=d[0],C=d[1],y=function(){var t=Object(g.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=s,t.t1=e.target.value,t.next=4,j(e);case 4:t.t2=t.sent,t.t3={client:t.t1,campaigns:t.t2},(0,t.t0)(t.t3),C(Object(r.a)(Object(r.a)({},u),{},{client:e.target.value}));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=Object(g.a)(p.a.mark((function t(e){var n,l,o,i,s;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return C(Object(r.a)(Object(r.a)({},u),{},{isFetching:!0})),n=S.a.filter((function(t){return t.client===a.client})),l=Object(f.a)(n,1),o=l[0],t.next=4,R.a.post("/.netlify/functions/getCampaignTotals",{client:o.api,campaignID:e.target.value});case 4:i=t.sent,s=i.data,C(Object(r.a)(Object(r.a)({},u),{},{campaignID:e.target.value,totals:s.totals,isFetching:!1}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(g.a)(p.a.mark((function t(e){var n,l,o,i,a,s;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.target.value,l=S.a.filter((function(t){return t.client===n})),o=Object(f.a)(l,1),i=o[0],t.next=4,R.a.post("/.netlify/functions/getCampaigns",{client:i.api});case 4:return a=t.sent,s=a.data,t.abrupt("return",s.campaigns);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),E=S.a.map((function(t){return Object(l.jsx)(w.a,{value:t.client,children:t.client},t.client)}));return Object(l.jsxs)("div",{className:e.dashboard,children:[Object(l.jsxs)("div",{style:{display:"flex",padding:"20px 20px"},children:[Object(l.jsx)(h,{label:"Client",menuItems:E,handleChange:y,value:a.client,style:{paddingRight:"20px"}},"client"),a.campaigns.length>0&&Object(l.jsx)(h,{label:"Campaign",menuItems:a.campaigns.map((function(t){return Object(l.jsx)(w.a,{value:t.id,children:t.title},t.id)})),handleChange:b,value:u.campaignID},"campaign")]}),Object(l.jsx)("div",{children:u.totals.length>0&&Object(l.jsx)(A,{mailshakeTotals:u.totals,isFetching:u.isFetching})})]})})),B=n(55),z=n(133),U=n(134),G=n(135),H={mailshake:{padding:0,margin:0,height:"100vh",backgroundColor:"#F5F5F5",backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(240)'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%23f5f5f5'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='540' height='450' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.03'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E\")",backgroundAttachment:"fixed",backgroundSize:"cover"}};var J=Object(y.a)(H)((function(t){var e=t.classes;return Object(l.jsxs)(B.a,{className:e.mailshake,elevation:0,children:[Object(l.jsx)(z.a,{color:"primary",position:"static",style:{height:"64px"},children:Object(l.jsx)(U.a,{children:Object(l.jsx)(x.a,{color:"inherit",children:"MAILSHAKE DASHBOARD"})})}),Object(l.jsx)(G.a,{container:!0,justify:"center",style:{marginTop:"4rem"},children:Object(l.jsx)(G.a,{item:!0,xs:11,md:8,lg:8,children:Object(l.jsx)(N,{})})})]})}));var L=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(J,{})})},M=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,140)).then((function(e){var n=e.getCLS,l=e.getFID,o=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),l(t),o(t),i(t),a(t)}))};s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(L,{})}),document.getElementById("root")),M()}},[[89,1,2]]]);
//# sourceMappingURL=main.f6669db1.chunk.js.map