(this["webpackJsonpreact-hw-01-components"]=this["webpackJsonpreact-hw-01-components"]||[]).push([[0],[,function(a,e,t){a.exports={profile:"Profile_profile__3YAVs",description:"Profile_description__2oFtB",location:"Profile_location__1UCk4",stats:"Profile_stats__2BKWu",avatar:"Profile_avatar__3QaKj",quantity:"Profile_quantity__1L6M_",label:"Profile_label__aVBY6",name:"Profile_name__3pcPU"}},function(a,e,t){a.exports={statistics:"Statistics_statistics__1MvmD",title:"Statistics_title__2fNbj",stat_list:"Statistics_stat_list__1Tnk3"}},function(a){a.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(a,e,t){a.exports={friend_list:"FriendList_friend_list__3l6rO",item:"FriendList_item__3L9KE",status:"FriendList_status__2_cD9",avatar:"FriendList_avatar__1-p4a"}},,,function(a){a.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},,function(a){a.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},function(a){a.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(a,e,t){a.exports={transaction_history:"TransactionHistory_transaction_history__3nTj1"}},,,,,,,function(a,e,t){"use strict";t.r(e);var c=t(5),s=t.n(c),i=t(8),n=t.n(i),r=t(9),l=t(3),d=t(7),o=t(10),b=t(4),j=t.n(b),m=t(0),u=function(a){var e=a.friends;return Object(m.jsx)("ul",{className:j.a.friend_list,children:e.map((function(a){var e=a.avatar,t=a.name,c=a.isOnline,s=a.id;return Object(m.jsxs)("li",{className:j.a.item,children:[Object(m.jsx)("span",{className:j.a.status,style:{background:c?"green":"red"}}),Object(m.jsx)("img",{className:j.a.avatar,src:e,alt:t}),Object(m.jsx)("p",{className:j.a.name,children:t})]},s)}))})},p=t(1),f=t.n(p),h=function(a){var e=a.tag,t=a.name,c=a.location,s=a.avatar,i=a.stats;return Object(m.jsxs)("div",{className:f.a.profile,children:[Object(m.jsxs)("div",{className:f.a.description,children:[Object(m.jsx)("img",{src:s,alt:t,className:f.a.avatar}),Object(m.jsx)("p",{className:f.a.name,children:t}),Object(m.jsxs)("p",{className:f.a.tag,children:["@",e]}),Object(m.jsx)("p",{className:f.a.location,children:c})]}),Object(m.jsxs)("ul",{className:f.a.stats,children:[Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{className:f.a.label,children:"Followers"}),Object(m.jsx)("span",{className:f.a.quantity,children:i.followers})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{className:f.a.label,children:"Views"}),Object(m.jsx)("span",{className:f.a.quantity,children:i.views})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{className:f.a.label,children:"Likes"}),Object(m.jsx)("span",{className:f.a.quantity,children:i.likes})]})]})]})},y=t(2),O=t.n(y);var _=function(a){var e=a.title,t=a.stats;return Object(m.jsxs)("section",{className:O.a.statistics,children:[e&&Object(m.jsx)("h2",{className:O.a.title,children:"Upload stats"}),Object(m.jsx)("ul",{className:O.a.stat_list,children:t.map((function(a){var e=a.id,t=a.label,c=a.percentage;return Object(m.jsxs)("li",{className:O.a.item,style:{background:"rgb("+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+")"},children:[Object(m.jsx)("span",{className:O.a.label,children:t}),Object(m.jsxs)("span",{className:O.a.percentage,children:[c,"%"]})]},e)}))})]})},v=t(11),x=t.n(v),w=function(a){var e=a.items;return Object(m.jsxs)("table",{className:x.a.transaction_history,children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Type"}),Object(m.jsx)("th",{children:"Amount"}),Object(m.jsx)("th",{children:"Currency"})]})}),Object(m.jsx)("tbody",{children:e.map((function(a){var e=a.type,t=a.amount,c=a.currency,s=a.id;return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e}),Object(m.jsx)("td",{children:t}),Object(m.jsx)("td",{children:c})]},s)}))})]})},g=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(h,{name:l.name,tag:l.tag,location:l.location,avatar:l.avatar,stats:l.stats}),Object(m.jsx)(u,{friends:r}),Object(m.jsx)(_,{title:"Upload stats",stats:d}),Object(m.jsx)(_,{stats:d}),Object(m.jsx)(w,{items:o})]})};t(17);n.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.ef4fe162.chunk.js.map