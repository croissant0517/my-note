(this["webpackJsonpmy-note"]=this["webpackJsonpmy-note"]||[]).push([[0],{29:function(t,e,n){},30:function(t,e,n){},32:function(t,e,n){},33:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n(7),o=n.n(i),r=(n(29),n(10)),a=n(11),j=n(5),l=(n(30),n(2));var u=function(){return Object(l.jsxs)("header",{children:[Object(l.jsx)("h1",{children:"My Note"}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/vicchang0517/",target:"_blank",rel:"noreferrer",children:"CONTACT ME"})]})};n(32);var s=function(){var t=(new Date).getFullYear();return Object(l.jsx)("footer",{children:Object(l.jsxs)("p",{children:["Copyright \u24d2 ",t]})})},b=n(21),O=n.n(b);n(33);var d=function(t){return Object(l.jsxs)("div",{className:"note",children:[Object(l.jsx)("h1",{children:t.title}),Object(l.jsx)("p",{children:t.content}),Object(l.jsx)("button",{onClick:function(){t.onDelete(t.id)},children:Object(l.jsx)(O.a,{})}),Object(l.jsx)("p",{children:t.time})]})},f=n(6),h=n(62);n(42);var x=function(t){var e=Object(c.useState)(!1),n=Object(j.a)(e,2),i=n[0],o=n[1],r=Object(c.useState)({title:"",content:""}),u=Object(j.a)(r,2),s=u[0],b=u[1];function O(t){var e=t.target,n=e.name,c=e.value;b((function(t){return Object(a.a)(Object(a.a)({},t),{},Object(f.a)({},n,c))}))}return console.log(s),Object(l.jsx)("div",{children:Object(l.jsxs)("form",{className:"create-note",children:[i?Object(l.jsx)("input",{name:"title",onChange:O,value:s.title,placeholder:"Enter a title"}):null,Object(l.jsx)("textarea",{onClick:function(){o(!0)},name:"content",onChange:O,value:s.content,placeholder:"Take a note...",rows:i?"12":"1"}),Object(l.jsx)(h.a,{in:i,children:Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),s.title.length>0&&s.content.length>0&&(b({title:"",content:""}),t.onAdd(s))},children:"Add"})})]})})},v=(n(43),function(){var t=(new Date).toLocaleTimeString(),e=Object(c.useState)(t),n=Object(j.a)(e,2),i=n[0],o=n[1];return setInterval((function(){!function(){var t=(new Date).toLocaleTimeString();o(t)}()}),1e3),Object(l.jsx)("div",{className:"time",children:Object(l.jsx)("h1",{children:i})})});n(44);var m=function(){var t=Object(c.useState)([]),e=Object(j.a)(t,2),n=e[0],i=e[1];function o(t){i((function(e){return e.filter((function(e,n){return n!==t}))}))}return console.log(n),Object(l.jsxs)("div",{children:[Object(l.jsx)(u,{}),Object(l.jsx)(v,{}),Object(l.jsx)(x,{onAdd:function(t){var e=Object(a.a)(Object(a.a)({},t),{},{time:(new Date).toLocaleTimeString()});i((function(t){return[].concat(Object(r.a)(t),[e])}))}}),n.map((function(t,e){return Object(l.jsx)(d,{id:e,title:t.title,content:t.content,onDelete:o,time:t.time},e)})),Object(l.jsx)(s,{})]})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),c(t),i(t),o(t),r(t)}))};o.a.render(Object(l.jsx)(m,{}),document.getElementById("root")),g()}},[[46,1,2]]]);
//# sourceMappingURL=main.723ebca3.chunk.js.map