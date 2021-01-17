(this.webpackJsonpplusmore=this.webpackJsonpplusmore||[]).push([[0],{131:function(e,t,n){},132:function(e,t,n){},157:function(e,t){},243:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(1),s=n.n(a),c=n(120),r=n.n(c),o=(n(131),n(2)),l=n(5),u=n(4),d=n(3),h=(n(132),n(38)),j=n.n(h),p=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={residence:{name:"Residence",icon:"fas fa-thumbtack",content:"Taipei, Taiwan"},hometown:{name:"Hometown",icon:"fas fa-search-location",content:"Taichung, Taiwan"},birthplace:{name:"Birthplace",icon:"fas fa-map-marked-alt",content:"Auckland, New Zealand"},email:{icon:"far fa-envelope",content:"pyhuang97@gmail.com",url:"mailto:pyhuang97@gmail.com"},bio:["Hi! I am Pin-Yen, you can also call me Jason.","I'm a M.S. student in Computer Science and Information Engineering at the National Taiwan University (NTU), advised by Prof. <a href='https://www.csie.ntu.edu.tw/~htlin/'>Hsuan-Tien Lin</a>. My research focuses on <b>artificial intelligence</b> and <b>machine learning</b>."]},i}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"bio",children:[Object(i.jsx)("h2",{className:"header",children:"Introduction"}),Object(i.jsxs)("div",{className:"content",children:[Object(i.jsxs)("div",{className:"info",children:[this.renderInfoBlock(this.state.residence),this.renderInfoBlock(this.state.hometown),this.renderInfoBlock(this.state.birthplace),this.renderInfoBlock(this.state.email)]}),Object(i.jsx)("div",{className:"paragraph",children:this.state.bio.map((function(e,t){return Object(i.jsx)("div",{children:j()(e)},t)}))})]})]})}},{key:"renderInfoBlock",value:function(e){return Object(i.jsx)(b,{icon:e.icon,name:e.name,content:e.content,url:e.url})}}]),n}(a.Component);function b(e){return Object(i.jsxs)("div",{className:"info-block",children:[Object(i.jsx)("i",{className:e.icon+" icon"}),Object(i.jsxs)("span",{children:[e.name?e.name+": ":"",e.url?Object(i.jsx)("a",{href:e.url,children:e.content}):e.content]})]})}var f=n.p+"static/media/ntu_logo.1701240b.webp",v=n.p+"static/media/nccu_logo.368c0923.webp",m=n.p+"static/media/ncnu_logo.50889c83.webp",O=n.p+"static/media/tcssh_logo.2193e933.webp",g=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={ntu:{name:"National Taiwan University",degree:"Master of Science",department:"Computer Science and Information Engineering",period:"2020.9 - Present",logo:f,status:"current"},nccu:{name:"National Chengchi University",degree:"Bachelor of Science",department:"Computer Science",period:"2018.9 - 2020.6",logo:v,status:"before"},ncnu:{name:"National Chi Nan University",degree:"Bachelor of Science",department:"Computer Science and Information Engineering",period:"2016.9 - 2018.6",logo:m,status:"before"},tcssh:{name:"Taichung Second Senior High School",degree:"Senior High School",department:"Regular",period:"2013.9 - 2016.6",logo:O,status:"before"}},i}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"education",children:[Object(i.jsx)("h2",{className:"header",children:"Education"}),Object(i.jsx)("div",{className:"content",children:Object(i.jsx)("div",{className:"timeline-container",children:Object(i.jsxs)("div",{className:"edu-timeline",children:[this.renderEdu(this.state.ntu),this.renderEdu(this.state.nccu),this.renderEdu(this.state.ncnu),this.renderEdu(this.state.tcssh)]})})})]})}},{key:"renderEdu",value:function(e){return Object(i.jsx)(x,{status:e.status,name:e.name,degree:e.degree,department:e.department,period:e.period,logo:e.logo})}}]),n}(a.Component);function x(e){return Object(i.jsx)("div",{className:"container "+e.status,children:Object(i.jsxs)("div",{className:"content",children:[Object(i.jsxs)("div",{className:"school",children:[Object(i.jsx)("img",{src:e.logo,alt:"logo"}),Object(i.jsx)("span",{children:e.name})]}),Object(i.jsxs)("div",{className:"major",children:[Object(i.jsxs)("div",{children:[e.degree,", ",e.department]}),Object(i.jsx)("div",{children:e.period})]})]})})}var k=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{id:"intro",className:"section",children:[Object(i.jsx)(g,{}),Object(i.jsx)(p,{})]})}}]),n}(a.Component),y=n(11),N=n(62),S=n(20),w=(n(56),n.p+"static/media/python_logo.41433130.webp"),L=n.p+"static/media/cpp_logo.8782fc29.webp",C=n.p+"static/media/javascript_logo.16d28473.webp",_=n.p+"static/media/lisp_logo.2fd3d1d2.webp",B=n.p+"static/media/pytorch_logo.a5963e20.webp",M=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={skillsText:[{name:"programming languages",icon:"fas fa-code",content:"<b>(proficient):</b> Python, C/C++, JavaScript, Lisp, Shell Script <br><b>(familiar):</b> R, Matlab"},{name:"tools",icon:"fas fa-wrench",content:"VSCode, Vim, Emacs, Git, Github, Google Cloud"},{name:"others",icon:"fas fa-server",content:"Linux/Unix, Arduino, Raspberry Pi, PyTorch, Keras, HTML/CSS, Markdown, LaTeX"}],skillsLevel:[{name:"Python",level:92,logo:w},{name:"C/C++",level:93,logo:L},{name:"Javascript",level:90,logo:C},{name:"Lisp",level:88,logo:_},{name:"PyTorch",level:91,logo:B}],activeSkillsLevel:!1},i.contentRef=s.a.createRef(),i.handleScroll=i.handleScroll.bind(Object(y.a)(i)),i}return Object(l.a)(n,[{key:"handleScroll",value:function(){var e=this.contentRef.current.getBoundingClientRect().top;e>=0&&e<window.innerHeight?this.setState({activeSkillsLevel:!0}):this.setState({activeSkillsLevel:!1})}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this;return Object(i.jsxs)("div",{className:"section",id:"skills",children:[Object(i.jsx)("h2",{className:"header",children:"Skills"}),Object(i.jsxs)("div",{className:"content",ref:this.contentRef,children:[Object(i.jsx)(S.a,{className:"details",children:this.state.skillsText.map((function(t,n){return e.renderSkillsTextBlock(t)}))}),Object(i.jsx)("ul",{children:this.state.skillsLevel.map((function(t,n){return e.renderSkillsLevelBlock(t)}))})]})]})}},{key:"renderSkillsTextBlock",value:function(e){return Object(i.jsx)(T,{name:e.name,icon:e.icon,content:e.content})}},{key:"renderSkillsLevelBlock",value:function(e){var t=e.level;return Object(i.jsx)(I,{name:e.name,logo:e.logo,level:t,active:!0})}}]),n}(a.Component);function T(e){return Object(i.jsxs)("div",{children:[Object(i.jsxs)("h3",{children:[Object(i.jsx)("i",{className:e.icon+" icon"}),Object(i.jsx)("span",{children:e.name})]}),Object(i.jsx)("div",{children:j()(e.content)})]})}function I(e){var t=Object(N.b)({from:{percent:0},to:{percent:e.level}});return Object(i.jsxs)("li",{children:[Object(i.jsx)("div",{className:"logo-wrapper",children:Object(i.jsx)("img",{src:e.logo,alt:"logo"})}),Object(i.jsx)("span",{children:e.name}),Object(i.jsx)(N.a.div,{style:t,className:"progress-bar",children:function(e){var t=e.percent;return Object(i.jsx)("div",{className:"progress-bar-fill",style:{width:"".concat(t,"%")}})}})]})}var E=n.p+"static/media/pm2.718fff4f.jpeg",P=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={},i}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"section",id:"profile",children:Object(i.jsxs)("div",{className:"header",children:[Object(i.jsx)("div",{className:"profile-img",children:Object(i.jsx)("img",{src:E,alt:"Profile"})}),Object(i.jsx)("div",{className:"basic-info",children:Object(i.jsxs)("div",{className:"title-box",children:[Object(i.jsxs)("span",{className:"name",children:[Object(i.jsx)("div",{className:"main",children:"\u9ec3\u54c1\u786f"}),Object(i.jsx)("div",{className:"alt",children:"Pin-Yen (Jason) Huang"})]}),Object(i.jsxs)("span",{className:"title",children:[Object(i.jsx)("a",{href:"https://learner.csie.ntu.edu.tw",children:"CLLab"}),"\u2022National Taiwan University"]}),Object(i.jsxs)("div",{className:"info",children:[Object(i.jsx)("a",{href:"https://www.linkedin.com/in/PM-Huang","data-tootik":"LinkedIn","data-tootik-conf":"bottom",children:Object(i.jsx)("i",{className:"fab fa-linkedin"})}),Object(i.jsx)("a",{href:"https://scholar.google.com.tw/citations?user=nQdpH2MAAAAJ","data-tootik":"Google Scholar","data-tootik-conf":"bottom",children:Object(i.jsx)("i",{className:"fas fa-graduation-cap"})}),Object(i.jsx)("a",{href:"resource/cv_v3.pdf","data-tootik":"R\xe9sum\xe9","data-tootik-conf":"bottom",children:Object(i.jsx)("i",{className:"far fa-id-badge"})}),Object(i.jsx)("a",{href:"https://github.com/PM25","data-tootik":"Github","data-tootik-conf":"bottom",children:Object(i.jsx)("i",{className:"fab fa-github"})}),Object(i.jsx)("a",{href:"https://www.facebook.com/pyhuang97","data-tootik":"Facebook","data-tootik-conf":"bottom",children:Object(i.jsx)("i",{className:"fab fa-facebook-square"})})]})]})})]})})}}]),n}(a.Component),R=n.p+"static/media/uiuc_logo.fc614b52.webp",U=n.p+"static/media/ut_logo.d077088c.webp",H=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={experiences:[{title:"Undergraduate Summer Research Internship",organization:"University of Illinois Urbana-Champaign (UIUC)",supervisor:"Advisor: Prof. Douglas L. Jones",period:"July 2019 - Sep 2019",logo:R,description:["Developed onset & offset detection algorithms for specific type of audio signals by python.","Built a system to automate the process of trim and labeling audio data."]},{title:"Research Scholarship from Ministry of Science and Technology",organization:"National Chengchi University",supervisor:"Advisor: Prof. Chao-Lin Liu",period:"July 2019 - Feb 2020",logo:v,description:["Developed a named-entity recognition (NER) system for Literary Chinese.","Improve the F1 score by 9% by applying machine learning technique(LSTM-CRF).","Built an optical character recognition (OCR) system for Literary Chinese with machine learning.","Applied self-organizing map & clustering aggregation to increase the speed of labeling data by human by 12x."]},{title:"Undergraduate Research Assistant",organization:"University of Taipei",supervisor:"Advisor: Prof. Cheng-Ying Yang",period:"Sep 2017 - Present",logo:U,description:["Improved the performance of encryption algorithm in IoT devices.","Used greedy algorithm to get secured encryption even with poor computing resources.","Analysised and visualized the performance and published final results to journal."]}],focusBlockIdx:0},i}return Object(l.a)(n,[{key:"onMouseEnter",value:function(e){this.setState({focusBlockIdx:e})}},{key:"render",value:function(){var e=this;return Object(i.jsxs)("div",{id:"exp",className:"section",children:[Object(i.jsx)("h2",{className:"header",children:"Experiences"}),Object(i.jsxs)("div",{className:"content",children:[Object(i.jsx)("div",{className:"title-list",children:Object(i.jsx)(S.a,{forceVisible:"y",autoHide:!1,style:{maxHeight:"100%"},children:this.state.experiences.map((function(t,n){return e.renderExperienceBlock(t,n===e.state.focusBlockIdx,(function(){return e.onMouseEnter(n)}))}))})}),this.renderInfoBlock()]})]})}},{key:"renderExperienceBlock",value:function(e,t,n,a){return Object(i.jsx)(A,{logo:e.logo,title:e.title,focus:t,organization:e.organization,onMouseEnter:n})}},{key:"renderInfoBlock",value:function(){var e=this.state.focusBlockIdx,t=this.state.experiences[e];return Object(i.jsxs)(S.a,{style:{maxHeight:"100%"},className:"info",children:[Object(i.jsx)("div",{className:"period",children:Object(i.jsx)("i",{children:t.period})}),Object(i.jsx)("div",{className:"supervisor",children:t.supervisor}),Object(i.jsx)("ul",{className:"description",children:t.description.map((function(e,t){return Object(i.jsx)("li",{children:e})}))})]})}}]),n}(a.Component);function A(e){return Object(i.jsxs)("div",{className:e.focus?"item focus-light":"item",onMouseEnter:function(){return e.onMouseEnter()},children:[Object(i.jsx)("img",{src:e.logo,alt:"logo"}),Object(i.jsxs)("div",{className:"title",children:[Object(i.jsx)("div",{children:e.title}),Object(i.jsx)("div",{children:e.organization})]})]})}var D=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"about",children:[Object(i.jsx)(P,{}),Object(i.jsx)(k,{}),Object(i.jsx)(H,{}),Object(i.jsx)(M,{})]})}}]),n}(a.Component),J=n(6),z=(n(57),n(123)),q=n.n(z),G=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(i.jsx)("li",{className:"btn "+this.props.classList.join(" "),onClick:function(){return e.props.onClick()},children:this.props.url?Object(i.jsx)("a",{href:this.props.url,children:Object(i.jsx)("i",{className:this.props.icon})}):Object(i.jsx)("i",{className:this.props.icon})})}}]),n}(a.Component),F=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(i.jsx)("li",{className:"btn icons "+this.props.classList.join(" "),onClick:function(){return e.props.onClick()},onMouseDown:function(){return e.props.onMouseDown()},children:Object(i.jsx)("i",{className:this.props.icon,children:Object(i.jsx)("div",{className:this.props.ripple_status?"ripple-effect":""})})})}}]),n}(a.Component),Y=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={sidenav:{icon:"fas fa-bars sidenav-btn ripple",classList:[],ripple_effect:!0,ripple_status:!1},home:{icon:"fas fa-home",classList:[],url:"/c/homepage",active:!1},language:{icon:"fas fa-language",classList:[],active:!1,active_effect:!0},music:{icon:"fas fa-music",classList:[],active:!1,active_effect:!0},toolbar:{icon:"fas fa-caret-right",classList:[],active:!1,list:["language","music"]}},i.collapse_toolbar(),i}return Object(l.a)(n,[{key:"SidenavOn",value:function(){this.setState((function(e){return{sidenav:Object(J.a)(Object(J.a)({},e.sidenav),{},{ripple_status:!0})}}))}},{key:"toggleSidenav",value:function(){var e=this;this.props.toggleSidenav(),setTimeout((function(){e.setState((function(e){return{sidenav:Object(J.a)(Object(J.a)({},e.sidenav),{},{ripple_status:!1})}}))}),200)}},{key:"toggleMusic",value:function(){var e=this;this.setState((function(t){return{music:Object(J.a)(Object(J.a)({},t.music),{},{active:!e.state.music.active})}}))}},{key:"toggleLanguage",value:function(){var e=this;this.setState((function(t){return{language:Object(J.a)(Object(J.a)({},t.language),{},{active:!e.state.language.active})}}))}},{key:"toggleToolbar",value:function(){var e=!this.state.toolbar.active;this.setState((function(t){return{toolbar:Object(J.a)(Object(J.a)({},t.toolbar),{},{icon:e?"fas fa-caret-left":"fas fa-caret-right",active:e})}})),e?this.expand_toolbar():this.collapse_toolbar()}},{key:"expand_toolbar",value:function(){var e=this;this.state.toolbar.list.forEach((function(t){var n=e.state[t].classList.indexOf("toolbar");-1!==n&&e.state[t].classList.splice(n,1)}))}},{key:"collapse_toolbar",value:function(){var e=this;this.state.toolbar.list.forEach((function(t){e.state[t].classList.push("toolbar")}))}},{key:"render",value:function(){var e=this;return Object(i.jsxs)("nav",{id:"home-nav",children:[Object(i.jsxs)("ul",{children:[this.renderButton(this.state.sidenav,(function(){return e.toggleSidenav()}),(function(){return e.SidenavOn()})),this.renderButton(this.state.home),this.renderButton(this.state.music,(function(){return e.toggleMusic()})),this.renderButton(this.state.language,(function(){return e.toggleLanguage()})),this.renderButton(this.state.toolbar,(function(){return e.toggleToolbar()}))]}),this.renderMusicPlayer()]})}},{key:"renderButton",value:function(e,t,n){var a=e.classList.slice();return e.active_effect&&e.active&&a.push("active"),e.ripple_effect?Object(i.jsx)(F,{icon:e.icon,classList:a,active:e.active,ripple_status:e.ripple_status,onClick:t,onMouseDown:n}):Object(i.jsx)(G,{icon:e.icon,classList:a,url:e.url,active:e.active,onClick:t})}},{key:"renderMusicPlayer",value:function(){return Object(i.jsx)("div",{id:"music-player",className:this.state.music.active?"show":"",children:Object(i.jsx)(q.a,{url:"https://soundcloud.com/jason-huang-200883547/sets/plusmore",width:"100%",height:"80px",config:{soundcloud:{options:{start_track:0,download:!1,sharing:!1,buying:!1,show_artwork:!1,show_playcount:!1,show_user:!1,single_active:!0,show_reposts:!1,show_teaser:!1,visual:!1}}}})})}}]),n}(a.Component),V=n.p+"static/media/profile.1adce55a.jpeg",K=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)("li",{children:Object(i.jsxs)("a",{href:this.props.url,target:this.props.tab?"_blank":"",rel:"noreferrer",children:[Object(i.jsx)("i",{className:this.props.icon+" icon"}),Object(i.jsx)("span",{children:this.props.text})]})})}}]),n}(a.Component),Q=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(i.jsx)("div",{className:"btn "+this.props.classList.join(" "),onClick:function(){return e.props.onClick()},onMouseDown:function(){return e.props.onMouseDown()},children:Object(i.jsx)("i",{className:this.props.icon,children:Object(i.jsx)("div",{className:this.props.ripple_status?"ripple-effect":""})})})}}]),n}(a.Component),W=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"profile",children:[Object(i.jsx)("img",{id:"profile-img",src:this.props.profile,alt:"Profile"}),Object(i.jsxs)("span",{id:"profile-name",children:[" ",this.props.name," "]}),Object(i.jsxs)("span",{id:"profile-quote",children:[" ",this.props.quote," "]})]})}}]),n}(a.Component),X=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={sidenav:{icon:"fas fa-bars sidenav-btn ripple",classList:[],ripple_effect:!0,ripple_status:!1},homepage:{text:"\u9996\u9801",icon:"fas fa-home",url:"/c/homepage"},projects:{text:"\u5c08\u6848",icon:"fas fa-flask",url:"/c/projects"},articles:{text:"\u6587\u7ae0",icon:"fas fa-book",url:"/c/articles"},about:{text:"\u95dc\u65bc\u6211",icon:"far fa-user-circle",url:"/"},comments:{text:"\u7559\u8a00",icon:"far fa-comment",url:"/c/comment"},reports:{text:"\u932f\u8aa4\u56de\u5831",icon:"fas fa-bug",url:"https://github.com/PM25/pm25.github.io/issues",tab:!0}},i}return Object(l.a)(n,[{key:"SidenavOn",value:function(){this.setState((function(e){return{sidenav:Object(J.a)(Object(J.a)({},e.sidenav),{},{ripple_status:!0})}}))}},{key:"toggleSidenav",value:function(){var e=this;this.props.toggleSidenav(),setTimeout((function(){e.setState((function(e){return{sidenav:Object(J.a)(Object(J.a)({},e.sidenav),{},{ripple_status:!1})}}))}),200)}},{key:"render",value:function(){var e=this;return Object(i.jsxs)("div",{id:"side-nav",className:this.props.show?"show-sidenav":"",children:[Object(i.jsx)("div",{className:"sidenav-btn-wrapper",children:this.renderRippleButton(this.state.sidenav,(function(){return e.toggleSidenav()}),(function(){return e.SidenavOn()}))}),Object(i.jsx)(W,{profile:V,name:"\u9ec3\u54c1\u786f",quote:"Don't Think, Imagine!"}),Object(i.jsx)(S.a,{className:"category",children:Object(i.jsxs)("ul",{children:[this.renderLinkButton(this.state.homepage),this.renderLinkButton(this.state.projects),this.renderLinkButton(this.state.articles),this.renderLinkButton(this.state.about),this.renderLinkButton(this.state.comments),this.renderLinkButton(this.state.reports)]})})]})}},{key:"renderLinkButton",value:function(e){return Object(i.jsx)(K,{text:e.text,icon:e.icon,url:e.url,tab:e.tab})}},{key:"renderRippleButton",value:function(e,t,n){return Object(i.jsx)(Q,{icon:e.icon,classList:e.classList,active:e.active,ripple_status:e.ripple_status,onClick:t,onMouseDown:n})}}]),n}(a.Component),Z=n(124),$=n.n(Z),ee=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={sidenav:{active:!1}},i.toggleSidenav=i.toggleSidenav.bind(Object(y.a)(i)),i}return Object(l.a)(n,[{key:"toggleSidenav",value:function(){var e=this.state.sidenav.active;this.setState((function(t){return{sidenav:Object(J.a)(Object(J.a)({},t),{},{active:!e})}}))}},{key:"closeSidenav",value:function(){this.setState((function(e){return{sidenav:Object(J.a)(Object(J.a)({},e),{},{active:!1})}}))}},{key:"render",value:function(){var e=this;return Object(i.jsx)($.a,{onOutsideClick:function(){e.closeSidenav()},children:Object(i.jsxs)("div",{name:"navigator",children:[Object(i.jsx)(Y,{toggleSidenav:function(){return e.toggleSidenav()}}),Object(i.jsx)(X,{show:this.state.sidenav.active,toggleSidenav:function(){return e.toggleSidenav()}})]})})}}]),n}(a.Component);r.a.render(Object(i.jsxs)(s.a.StrictMode,{children:[Object(i.jsx)(ee,{}),Object(i.jsx)(D,{})]}),document.getElementById("root"))},57:function(e,t,n){}},[[243,13,14]]]);
//# sourceMappingURL=main.892359ca.chunk.js.map