(this.webpackJsonpplusmore=this.webpackJsonpplusmore||[]).push([[20],{314:function(e,t,n){},391:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var a=n(58),c=n(1),i=n(0),r=n(15),s=n(2),l=n(33),o=(n(314),n(22)),u=n(23),d=n(25),j=n(24),h=n(221),b=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={title:[["green","print"],["white","("],["red",'"Hello, World!"'],["white",")"]],color:{green:"#31a09e",red:"#db3c41",white:"#fff"}},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(c.jsx)("div",{className:"header",children:Object(c.jsx)("div",{className:"title-box",children:Object(c.jsx)("div",{className:"title typing-animation",children:this.state.title.map((function(t,n){var a=e.state.color[t[0]];return Object(c.jsx)("span",{style:{color:a},children:t[1]},n)}))})})})}}]),n}(i.PureComponent),O=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={source:"https://pm25.github.io/my-articles/list.json",articles:null,error:null,isLoaded:!1},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch(this.state.source).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,articles:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){return this.state.isLoaded?[Object(c.jsx)(h.a,{children:Object(c.jsx)("title",{children:"Article - PlusMore"})}),Object(c.jsx)(b,{}),Object(c.jsx)("div",{className:"content",children:this.state.articles.map((function(e,t){return Object(c.jsx)(f,{id:t,name:e.name,date:e.date,url:e.name.replaceAll(" ","-"),preview:e.preview})}))})]:Object(c.jsx)("div",{className:"content"})}}]),n}(i.PureComponent);function f(e){return Object(c.jsx)("div",{className:"article-block",children:Object(c.jsxs)(r.b,{to:"/article/"+e.url,children:[Object(c.jsxs)("div",{className:"title-date",children:[Object(c.jsxs)("span",{className:"title",children:[" ",e.name," "]}),Object(c.jsx)("span",{className:"date",children:e.date})]}),Object(c.jsxs)("div",{className:"preview",children:[" ",e.preview," "]})]})},e.id)}var v=n(315),m=n.n(v);function p(e){return Object(c.jsx)("div",{className:"header",style:{height:"13em"},children:Object(c.jsxs)("div",{className:"title-box",children:[Object(c.jsx)("div",{className:"title",style:{fontSize:"3em"},children:e.title}),Object(c.jsxs)("div",{className:"date",children:[Object(c.jsx)("a",{href:"https://pm25.github.io",children:"Pin-Yen"}),"\u30fb",e.date]})]})})}l.a.initialize("UA-129342449-2");var x=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={base:"https://pm25.github.io/my-articles/",source:"https://pm25.github.io/my-articles/dict.json",sourceData:null,error:null,isLoaded:!1,title:null},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.name.replaceAll("-"," ");this.setState({title:t}),fetch(this.state.source).then((function(e){return e.json()})).then((function(n){e.setState({isLoaded:!0,sourceData:n[t]})}),(function(t){e.setState({isLoaded:!0,error:t})})),l.a.pageview(window.location.pathname+window.location.search)}},{key:"render",value:function(){return this.state.isLoaded&&null==this.state.error?[Object(c.jsx)(h.a,{children:Object(c.jsxs)("title",{children:[" ",this.state.title," - PlusMore"]})}),this.renderHeader(this.state.sourceData),this.renderArticleContent(this.state.sourceData)]:Object(c.jsx)("div",{})}},{key:"renderHeader",value:function(e){return Object(c.jsx)(p,{title:e.name,date:e.date})}},{key:"renderArticleContent",value:function(e){return Object(c.jsx)(N,{url:this.state.base+e.path})}}]),n}(i.PureComponent),N=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={url:a.props.url,content:null,error:null,isLoaded:!1},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch(this.state.url).then((function(e){return e.text()})).then((function(t){e.setState({isLoaded:!0,content:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){return this.state.isLoaded&&null==this.state.error?Object(c.jsx)("div",{className:"content article",children:Object(c.jsx)(m.a,{allowDangerousHtml:!0,linkTarget:"_blank",children:this.state.content})}):Object(c.jsx)("div",{className:"content article"})}}]),n}(i.PureComponent);function w(){return Object(c.jsx)(r.a,{children:Object(c.jsx)("div",{id:"article",className:"main",children:Object(c.jsxs)(s.c,{children:[Object(c.jsx)(s.a,{exact:!0,path:"/",children:Object(c.jsx)(y,{})}),Object(c.jsx)(s.a,{exact:!0,path:"/article",children:Object(c.jsx)(y,{})}),Object(c.jsx)(s.a,{path:"/article/:id",children:Object(c.jsx)(g,{})})]})})})}function y(){return k(),Object(c.jsx)(O,{})}function g(){k();var e=Object(s.g)().id;return Object(c.jsx)(x,{name:e})}var k=function(){var e=Object(s.f)();console.log(e);var t=Object(i.useState)(!1),n=Object(a.a)(t,2),c=n[0],r=n[1];Object(i.useEffect)((function(){l.a.initialize("UA-129342449-2"),r(!0)}),[]),Object(i.useEffect)((function(){c&&l.a.pageview(e.pathname+e.search)}),[c,e])}}}]);
//# sourceMappingURL=20.0a7f9ecd.chunk.js.map