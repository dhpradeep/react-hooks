(this.webpackJsonplearnhooks=this.webpackJsonplearnhooks||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(1),j=c.n(n),r=c(14),s=c.n(r),u=(c(19),c(20),c(2)),o=c(0),i=function(e){var t=e.returnComment;return Object(n.useEffect)((function(){console.log("Function was called!")}),[t]),Object(o.jsx)("div",{children:t("Pradip")})},b=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),c=t[0],j=t[1],r=Object(n.useState)("Hi, there"),s=Object(u.a)(r,1)[0],b=Object(n.useCallback)((function(e){return"".concat(s,", ").concat(e)}),[s]);return Object(o.jsxs)("div",{children:[Object(o.jsx)(i,{returnComment:b}),Object(o.jsx)("button",{onClick:function(){return j(!c)},children:"Toggle"}),c&&Object(o.jsx)("span",{children:"Toggle"})]})},a=Object(n.createContext)(null),l=function(){var e=Object(n.useContext)(a).username;return Object(o.jsx)("div",{children:Object(o.jsxs)("h1",{children:["User: ",e]})})},O=function(){var e=Object(n.useContext)(a).setUsername;return Object(o.jsx)("div",{children:Object(o.jsx)("input",{type:"text",onChange:function(t){return e(t.target.value)}})})},x=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),c=t[0],j=t[1];return Object(o.jsxs)(a.Provider,{value:{username:c,setUsername:j},children:[Object(o.jsx)(O,{}),Object(o.jsx)(l,{})]})},d=c(4),h=c.n(d),f=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],j=t[1];return Object(n.useEffect)((function(){h.a.get("https://jsonplaceholder.typicode.com/comments").then((function(e){j(e.data.slice(0,5))}))}),[]),Object(o.jsxs)("div",{children:["Hello world",Object(o.jsx)("table",{children:Object(o.jsx)("tbody",{children:Object(o.jsx)("tr",{children:c.map((function(e){return Object(o.jsx)("td",{style:{border:"2px solid #ccc"},children:e.name},e.id)}))})})})]})},m=Object(n.forwardRef)((function(e,t){var c=Object(n.useState)(!1),j=Object(u.a)(c,2),r=j[0],s=j[1];return Object(n.useImperativeHandle)(t,(function(){return{alterToggle:function(){s(!r)}}})),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("button",{children:"Button from child"}),r&&Object(o.jsx)("span",{children:"Toggle"})]})})),v=function(){var e=Object(n.useRef)(null);return Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:function(){e.current.alterToggle()},children:"Button from parent"}),Object(o.jsx)("br",{}),Object(o.jsx)(m,{ref:e})]})},p=function(){var e=Object(n.useRef)(null);return Object(n.useLayoutEffect)((function(){console.log("useLayoutEffect:",e.current.value)}),[]),Object(n.useEffect)((function(){e.current.value="Else"}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Hi"}),Object(o.jsx)("h1",{children:"Hi 2"})," ",Object(o.jsx)("input",{type:"text",defaultValue:"first",placeholder:"example...",ref:e})]})},g=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],j=t[1],r=Object(n.useState)(!1),s=Object(u.a)(r,2),i=s[0],b=s[1];Object(n.useEffect)((function(){h.a.get("https://jsonplaceholder.typicode.com/comments").then((function(e){j(e.data)}))}),[]);var a=Object(n.useMemo)((function(){return function(e){if(!e)return null;for(var t="",c=0;c<e.length;c++){var n=e[c].name;n.length>t.length&&(t=n)}return console.log("COMPUTED!!"),t}(c)}),[c]);return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:a}),Object(o.jsx)("button",{onClick:function(){return b(!i)},children:"Toggle"}),i&&Object(o.jsx)("span",{children:"Toggle"})]})},T=function(e,t){switch(t.type){case"INCREMENT":return{count:e.count+1,showText:e.showText};case"TOGGLESHOWTEXT":return{showText:!e.showText,count:e.count};default:return e}},C=function(){var e=Object(n.useReducer)(T,{count:0,showText:!0}),t=Object(u.a)(e,2),c=t[0],j=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:c.count}),Object(o.jsx)("button",{onClick:function(){j({type:"INCREMENT"}),j({type:"TOGGLESHOWTEXT"})},children:"Click Here"}),c.showText&&Object(o.jsx)("p",{children:"This is a text!!!"})]})},E=function(){var e=Object(n.useRef)(null);return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Pradip"}),Object(o.jsx)("input",{type:"text",placeholder:"example...",ref:e}),Object(o.jsx)("button",{onClick:function(t){e.current.value="",e.current.focus()},children:"Focus input"})]})},y=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),c=t[0],j=t[1];return Object(o.jsxs)("div",{children:[c,Object(o.jsx)("button",{onClick:function(){j(c+1)},children:"Increment"})]})},k=function(e){var t=e.name;return Object(o.jsx)("h4",{children:t})};var U=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(k,{name:"Use State"}),Object(o.jsx)(y,{}),Object(o.jsx)("hr",{}),Object(o.jsx)(k,{name:"Use Reducer"}),Object(o.jsx)(C,{}),Object(o.jsx)("hr",{}),Object(o.jsx)(k,{name:"Use Effect"}),Object(o.jsx)(f,{}),Object(o.jsx)("hr",{}),Object(o.jsx)(k,{name:"Use Ref"}),Object(o.jsx)(E,{}),Object(o.jsx)("hr",{}),Object(o.jsx)(k,{name:"Use Layout Effect"}),Object(o.jsx)(p,{}),Object(o.jsx)("hr",{}),Object(o.jsx)(k,{name:"Use ImperativeHandle"}),Object(o.jsx)(v,{}),Object(o.jsx)("hr",{}),Object(o.jsx)(k,{name:"Use Context"}),Object(o.jsx)(x,{}),Object(o.jsx)("hr",{}),Object(o.jsx)(k,{name:"Use Memo"}),Object(o.jsx)(g,{}),Object(o.jsx)("hr",{}),Object(o.jsx)(k,{name:"Use Callback"}),Object(o.jsx)(b,{}),Object(o.jsx)("br",{})]})};s.a.render(Object(o.jsx)(j.a.StrictMode,{children:Object(o.jsx)(U,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.8a20395c.chunk.js.map