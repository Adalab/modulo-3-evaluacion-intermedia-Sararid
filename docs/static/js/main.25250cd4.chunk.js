(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],{13:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t(6),s=t.n(c),r=t(8),o=t(2),l=(t(13),t(7)),i=t(0);var b=function(){var e=Object(a.useState)(""),n=Object(o.a)(e,2),t=n[0],c=n[1],s=Object(a.useState)(""),b=Object(o.a)(s,2),d=b[0],j=b[1],u=Object(a.useState)(l),O=Object(o.a)(u,2),p=O[0],h=O[1],k=Object(a.useState)(!1),x=Object(o.a)(k,2),m=x[0],f=x[1],v=Object(a.useState)(!1),y=Object(o.a)(v,2),g=y[0],W=y[1],w=function(e){console.log(e.target.id),"weekday"===e.target.id?f(e.target.checked):W(e.target.checked)};return Object(i.jsxs)("div",{children:[Object(i.jsxs)("header",{children:[Object(i.jsx)("h1",{children:"Mis clubs"}),Object(i.jsxs)("label",{children:["Mostrar",Object(i.jsxs)("select",{name:"option",id:"option",onChange:function(e){console.log(e.target.value);var n=e.target.value;return c(n),p.filter((function(e){return e.openOnWeekdays===t}))},children:[Object(i.jsx)("option",{value:"todos",children:"todos"}),Object(i.jsx)("option",{value:"weekDays",children:"los que abren entre semana"}),Object(i.jsx)("option",{value:"weekEnds",children:"los que abren el fin de semana"})]})]})]}),Object(i.jsx)("div",{children:Object(i.jsxs)("ul",{children:[" ",p.map((function(e,n){return Object(i.jsxs)("li",{children:[Object(i.jsxs)("p",{children:["#0 ",e.name," "]}),Object(i.jsx)("i",{className:"far fa-times-circle"}),Object(i.jsxs)("p",{children:["abierto entre semana: ",e.openOnWeekdays?"s\xed":"no"]}),Object(i.jsxs)("p",{children:["abierto el fin de semana: ",e.openOnWeekend?"s\xed":"no"]})]},n)}))," "]})}),Object(i.jsx)("h2",{children:"A\xf1adir un nuevo club"}),Object(i.jsxs)("label",{children:["Nombre del club",Object(i.jsx)("input",{type:"text",name:"newClubName",id:"newClubName",value:d,onChange:function(e){var n=e.currentTarget.value;j(n)}})]}),Object(i.jsxs)("label",{children:["Abre entre semana?",Object(i.jsx)("input",{type:"checkbox",name:"weekDay",id:"weekday",checked:m,onChange:w})]}),Object(i.jsxs)("label",{children:["Abre los fines de semana?",Object(i.jsx)("input",{type:"checkbox",name:"weeKend",id:"weekend",checked:g,onChange:w})]}),Object(i.jsx)("input",{type:"submit",value:"A\xf1adir un nuevo club",onClick:function(e){e.preventDefault();var n={name:d,openOnWeekdays:m,openOnWeekend:g};h([].concat(Object(r.a)(p),[n])),j(""),f(!1),W(!1)}})]})};s.a.render(Object(i.jsx)(b,{}),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('[{"name":"Book club","openOnWeekdays":true,"openOnWeekend":true},{"name":"Chess club","openOnWeekdays":false,"openOnWeekend":true},{"name":"Escape room club","openOnWeekdays":false,"openOnWeekend":false},{"name":"Debate club","openOnWeekdays":true,"openOnWeekend":false}]')}},[[15,1,2]]]);
//# sourceMappingURL=main.25250cd4.chunk.js.map