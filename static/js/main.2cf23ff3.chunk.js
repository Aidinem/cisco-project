(this["webpackJsonpcisco-project"]=this["webpackJsonpcisco-project"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r=n(2),s=n.n(r),c=n(12),a=n.n(c),o=(n(22),n(13)),i=n(14),u=n(17),h=n(16),l=(n(23),n(24),n(25),n(0)),d=function(e){var t=e.users;return Object(l.jsx)("a",{href:"https://google.com",children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("img",{alt:"users",src:"https://robohash.org/".concat(t.id,"?set=set2&size=180x180")}),Object(l.jsx)("h2",{children:t.name}),Object(l.jsx)("p",{children:t.email})]})})},j=function(e){var t=e.users;return Object(l.jsx)("div",{className:"card-list",children:t.map((function(e){return Object(l.jsx)(d,{users:e},e.id)}))})},p=n(15),f=n.n(p),b=(n(45),function(e){var t=e.placeholder,n=e.handleChange;return Object(l.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),v=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={users:[],searchField:"",errors:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://jsonplaceholder.typicode.com/users").then((function(t){var n=t.data;e.setState({users:n})})).catch((function(t){400===t.response.status&&e.setState({errors:t.response.data.error})}))}},{key:"searchHandle",value:function(e){this.setState({searchField:e.target.value})}},{key:"render",value:function(){var e=this,t=this.state,n=t.users,r=t.searchField,s=n.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Monster Roledex"}),Object(l.jsx)(b,{placeholder:"search monster",handleChange:function(t){return e.searchHandle(t)}}),Object(l.jsx)(j,{users:s})]})}}]),n}(r.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),c(e),a(e)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),O()}},[[46,1,2]]]);
//# sourceMappingURL=main.2cf23ff3.chunk.js.map