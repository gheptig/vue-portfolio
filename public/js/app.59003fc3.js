(function(t){function e(e){for(var s,n,l=e[0],o=e[1],c=e[2],d=0,m=[];d<l.length;d++)n=l[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&m.push(r[n][0]),r[n]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,l=1;l<a.length;l++){var o=a[l];0!==r[o]&&(s=!1)}s&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},r={app:0},i=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),r=a.n(s);r.a},"0c9f":function(t,e,a){},1109:function(t,e,a){},1483:function(t,e,a){"use strict";var s=a("a8e7"),r=a.n(s);r.a},"1df7":function(t,e,a){"use strict";var s=a("0c9f"),r=a.n(s);r.a},"2f86":function(t,e,a){"use strict";var s=a("97dc"),r=a.n(s);r.a},"429f":function(t,e,a){"use strict";var s=a("4ffd"),r=a.n(s);r.a},"448b":function(t,e,a){"use strict";var s=a("1109"),r=a.n(s);r.a},"484b":function(t,e,a){t.exports=a.p+"img/SeekPng.com_sea-vector-png_8291017.1e53209d.png"},"4ffd":function(t,e,a){},"51ff":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Navbar"),a("StartHeader"),a("About"),a("ProjectsWrapper"),a("ContactForm"),a("ContactInfo"),a("Footer")],1)},i=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{directives:[{name:"b-scrollspy",rawName:"v-b-scrollspy"}],staticClass:"navbar navbar-expand-lg navbar-light fixed-top ",class:{"navbar-shrink":t.moreThan100},attrs:{id:"mainNav"},on:{scroll:t.handleScroll}},[a("div",{staticClass:"container"},[a("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:1200},expression:"{ duration: 1200 }"}],staticClass:"navbar-brand js-scroll-trigger",attrs:{href:"#page-top"}},[t._v("Augustus Heptig")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[a("ul",{staticClass:"navbar-nav ml-auto "},[a("li",{staticClass:"nav-item"},[a("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:1200},expression:"{ duration: 1200 }"}],staticClass:"nav-link js-scroll-trigger",attrs:{href:"#about"}},[t._v("About")])]),a("li",{staticClass:"nav-item"},[a("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:1200},expression:"{ duration: 1200 }"}],staticClass:"nav-link js-scroll-trigger",attrs:{href:"#projects"}},[t._v("Projects")])]),a("li",{staticClass:"nav-item"},[a("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:1200},expression:"{ duration: 1200 }"}],staticClass:"nav-link js-scroll-trigger",attrs:{href:"#contact"}},[t._v("Contact")])])])])])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler navbar-toggler-right",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[t._v(" Menu "),a("i",{staticClass:"fas fa-bars"})])}],o={name:"Navbar",data:function(){return{moreThan100:!1}},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=window.scrollY;this.moreThan100=t>100,console.log(window.scrollY)}}},c=o,u=(a("429f"),a("2877")),d=Object(u["a"])(c,n,l,!1,null,"0e23b456",null),m=d.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"startHeader",attrs:{id:"page-top"}},[a("div",{staticClass:"container d-flex h-100 align-items-center"},[a("div",{staticClass:"mx-auto text-center"},[a("h1",{staticClass:"mx-auto my-0",attrs:{id:"welcome"}},[t._v("WELCOME!")]),a("h2",{staticClass:"text-white-50 mx-auto mt-2 mb-5"},[t._v("This is my personal portfolio")]),a("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:1200},expression:"{ duration: 1200 }"}],staticClass:"btn js-scroll-trigger",attrs:{href:"#about"}},[t._v("START")])])])])},h=[],v={name:"StartHeader"},p=v,g=(a("952f"),Object(u["a"])(p,f,h,!1,null,"5f12365f",null)),b=g.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"about-section text-center",attrs:{id:"about","data-spy":"scroll","data-target":"#mainNav","data-offset":"0"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-8 mx-auto"},[s("div",{staticClass:"circular-portrait"},[s("img",{staticClass:"img-fluid",attrs:{src:a("df57"),alt:"headshot"}})]),s("h2",{staticClass:"text-white mb-4"},[t._v("Hello, my name is Augustus Heptig")]),s("p",{staticClass:"text-white-50"},[t._v(" I am a aspiring full-stack developer located in the southern Maine area. I am drawn to reading and writing code because it is collaborative, systematic, and involves a lot of problem solving. In my free time I enjoy DIY projects, going to the movies, and being around the ocean. ")]),s("p",{staticClass:"text-white-50"},[t._v(" As my experience grows, so will my GitHub profile, so please stay tuned. Please feel free to reach out, as any contact is welcomed. Thank You! ")])])]),s("img",{staticClass:"img-fluid",attrs:{src:a("484b"),alt:"banksy-png"}})])])}],_={name:"About"},w=_,j=(a("d69a"),Object(u["a"])(w,C,x,!1,null,"61173bc6",null)),y=j.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"projects-section",attrs:{id:"projects","data-spy":"scroll","data-target":"#mainNav","data-offset":"100"}},[a("div",{staticClass:"container"},[a("ProjectOne"),a("ProjectTwo"),a("ProjectThree"),a("ProjectFour"),a("ProjectFive")],1)])},P=[],E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row align-items-center no-gutters mb-4 mb-lg-5"},[a("div",{staticClass:"col-xl-8 col-lg-7"},[a("a",{attrs:{href:"",target:"_blank"}},[a("img",{staticClass:"img-fluid mb-3 mb-lg-0",attrs:{id:"project-image-ge",src:"",alt:""}})])]),a("div",{staticClass:"col-xl-4 col-lg-5"},[a("div",{staticClass:"featured-text text-center text-lg-left"},[a("h4",{staticClass:"text-white"},[t._v("Featured Project")]),a("p",{staticClass:"text-white-50 mb-0"},[t._v(" This is a full-stack application that allows users to create a unique profile and build a social environment for all things video games. This is a great all-in-one tool that features user authentication, a game search/library, chart data based on game preferences, profile finder, and much more. ")]),a("h6",{staticClass:"mt-1"},[a("a",{staticClass:"text-light",attrs:{id:"repo-link",href:"https://github.com/MariaKhantech/gamerevolution",target:"_blank"}},[t._v("REPO LINK")])])])])])}],N={name:"ProjectOne"},T=N,$=(a("d5f7"),Object(u["a"])(T,E,O,!1,null,"6ecd67b8",null)),S=$.exports,F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center no-gutters mb-5 mb-lg-0"},[a("div",{staticClass:"col-lg-6"},[a("a",{attrs:{href:"https://gheptig.github.io/project-1/",target:"_blank"}},[a("img",{staticClass:"img-fluid",attrs:{src:"",id:"project-image-mp",alt:""}})])]),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"bg-black text-center h-100 project"},[a("div",{staticClass:"d-flex h-100"},[a("div",{staticClass:"project-text w-100 my-auto text-center text-lg-left"},[a("h4",{staticClass:"text-white"},[t._v("Featured 2")]),a("p",{staticClass:"text-white-50"},[t._v(" Created for movie and food lovers alike, this is a front-end application that returns a movie/food/drink combination based on a user's preferences and tastes. ")]),a("hr",{staticClass:"d-none d-lg-block ml-0"}),a("h6",{staticClass:"mt-1"},[a("a",{staticClass:"text-light",attrs:{id:"repo-link",href:"https://github.com/gheptig/project-1",target:"_blank"}},[t._v("REPO LINK")])])])])])])])}],M={name:"ProjectTwo"},A=M,R=(a("2f86"),Object(u["a"])(A,F,I,!1,null,"449cb5a1",null)),H=R.exports,L=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center no-gutters"},[a("div",{staticClass:"col-lg-6"},[a("a",{attrs:{href:"https://murmuring-fortress-42483.herokuapp.com/",target:"_blank"}},[a("img",{staticClass:"img-fluid",attrs:{src:"",id:"project-image-burg",alt:""}})])]),a("div",{staticClass:"col-lg-6 order-lg-first"},[a("div",{staticClass:"bg-black text-center h-100 project"},[a("div",{staticClass:"d-flex h-100"},[a("div",{staticClass:"project-text w-100 my-auto text-center text-lg-right"},[a("h4",{staticClass:"text-white"},[t._v("Featured 3")]),a("p",{staticClass:"text-white-50"},[t._v(" This is a simple full-stack application that demonstrates the CRUD operators by allowing a user to add (create), display (read), devour (update), and eject (delete) burgers they have eaten (or not eaten). ")]),a("hr",{staticClass:"d-none d-lg-block mr-0"}),a("h6",{staticClass:"mt-1"},[a("a",{staticClass:"text-light",attrs:{id:"repo-link",href:"https://github.com/gheptig/burger",target:"_blank"}},[t._v("REPO LINK")])])])])])])])}],K={name:"ProjectThree"},U=K,W=(a("1df7"),Object(u["a"])(U,L,q,!1,null,"5dcdd06c",null)),Y=W.exports,z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center no-gutters mb-5 mb-lg-0"},[a("div",{staticClass:"col-lg-6"},[a("a",{attrs:{href:"https://gheptig.github.io/weather-dashboard/",target:"_blank"}},[a("img",{staticClass:"img-fluid",attrs:{src:"",id:"project-image-wd",alt:""}})])]),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"bg-black text-center h-100 project"},[a("div",{staticClass:"d-flex h-100"},[a("div",{staticClass:"project-text w-100 my-auto text-center text-lg-left"},[a("h4",{staticClass:"text-white"},[t._v("Featured 4")]),a("p",{staticClass:"text-white-50"},[t._v(" This is a basic front-end U.S. city weather dashboard for displaying a city's current weather and 5-day forecast. Using Bootstrap, jQuery, OpenWeather API, and Moment.JS a user is able to input an American city that will then be displayed to the page and detail items such as, temperature, UV index , and humidity. ")]),a("hr",{staticClass:"d-none d-lg-block ml-0"}),a("h6",{staticClass:"mt-1"},[a("a",{staticClass:"text-light",attrs:{id:"repo-link",href:"https://github.com/gheptig/weather-dashboard",target:"_blank"}},[t._v("REPO LINK")])])])])])])])}],B={name:"ProjectFour"},D=B,G=(a("6d0d"),Object(u["a"])(D,z,J,!1,null,"15a20bf0",null)),Q=G.exports,V=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},X=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center no-gutters"},[a("div",{staticClass:"col-lg-6"},[a("a",{attrs:{href:"https://gheptig.github.io/timed-quiz/",target:"_blank"}},[a("img",{staticClass:"img-fluid",attrs:{src:"",id:"project-image-bq",alt:""}})])]),a("div",{staticClass:"col-lg-6 order-lg-first"},[a("div",{staticClass:"bg-black text-center h-100 project"},[a("div",{staticClass:"d-flex h-100"},[a("div",{staticClass:"project-text w-100 my-auto text-center text-lg-right"},[a("h4",{staticClass:"text-white"},[t._v("Fetured 5")]),a("p",{staticClass:"text-white-50"},[t._v(" This is a responsive timed-quiz front-end application that presents a user to answer a series of questions about baseball in a given amount of time. ")]),a("hr",{staticClass:"d-none d-lg-block mr-0"}),a("h6",{staticClass:"mt-1"},[a("a",{staticClass:"text-light",attrs:{id:"repo-link",href:"https://github.com/gheptig/timed-quiz",target:"_blank"}},[t._v("REPO LINK")])])])])])])])}],Z={name:"ProjectFive"},tt=Z,et=(a("72d4"),Object(u["a"])(tt,V,X,!1,null,"520bd35a",null)),at=et.exports,st={name:"ProjectsWrapper",components:{ProjectOne:S,ProjectTwo:H,ProjectThree:Y,ProjectFour:Q,ProjectFive:at}},rt=st,it=(a("448b"),Object(u["a"])(rt,k,P,!1,null,"410d1cec",null)),nt=it.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"message-section",attrs:{id:"contact","data-spy":"scroll","data-target":"#mainNav","data-offset":"100"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-10 col-lg-8 mx-auto text-center",attrs:{id:"message-area"}},[a("i",{staticClass:"far fa-paper-plane fa-2x mb-2 text-white"}),a("h2",{staticClass:"text-white mb-4"},[t._v("Message & Contact")]),a("form",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0",attrs:{id:"inputName",type:"name",placeholder:"Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control flex-fill mt-3 mr-0 mr-sm-2 mb-3 mb-sm-0",attrs:{id:"inputEmail",type:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.note,expression:"note"}],staticClass:"form-control flex-fill mt-3 mr-0 mr-sm-2 mb-3 mb-sm-0",attrs:{id:"inputNote",rows:"6",type:"text",placeholder:"Message"},domProps:{value:t.note},on:{input:function(e){e.target.composing||(t.note=e.target.value)}}}),a("button",{staticClass:"btn btn-lg mt-3",attrs:{type:"button",id:"submit-btn"},on:{click:t.submitMessage}},[t._v(" SUBMIT ")])])])])])])},ot=[],ct=(a("b0c0"),a("7338")),ut=a.n(ct),dt={name:"ContactForm",data:function(){return{name:"",email:"",note:""}},methods:{submitMessage:function(){var t=this;ut.a.post("api/newmessage",{name:this.name,email:this.email,note:this.note}).then((function(e){console.log(e),t.name="",t.email="",t.note=""})).catch((function(t){return console.log(t)}))}}},mt=dt,ft=(a("a38f"),Object(u["a"])(mt,lt,ot,!1,null,"48cf5138",null)),ht=ft.exports,vt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},pt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"contact-section bg-black"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4 mb-3 mb-md-0"},[a("div",{staticClass:"card py-4 h-100"},[a("div",{staticClass:"card-body text-center"},[a("i",{staticClass:"fas fa fa-address-card fa-2x text-dark mb-2"}),a("h4",{staticClass:"m-0"},[a("a",{staticClass:"text-decoration-none text-dark",attrs:{id:"resume",href:"assets/pdf/heptig_augustus_resume.pdf",target:"_blank"}},[t._v("RESUME")])]),a("hr",{staticClass:"my-4"}),a("div",{staticClass:"small text-black-50"})])])]),a("div",{staticClass:"col-md-4 mb-3 mb-md-0"},[a("div",{staticClass:"card py-4 h-100"},[a("div",{staticClass:"card-body text-center"},[a("i",{staticClass:"fas fa-envelope fa-2x text-dark mb-2"}),a("h4",{staticClass:"m-0"},[a("a",{staticClass:"text-decoration-none text-dark",attrs:{id:"email",href:"#"}},[t._v("EMAIL")])]),a("hr",{staticClass:"my-4"}),a("div",{staticClass:"small text-black-50"},[a("a",{attrs:{href:"#!"}})])])])]),a("div",{staticClass:"col-md-4 mb-3 mb-md-0"},[a("div",{staticClass:"card py-4 h-100"},[a("div",{staticClass:"card-body text-center"},[a("i",{staticClass:"fas fa-mobile-alt fa-2x text-dark mb-2"}),a("h4",{staticClass:"m-0"},[a("a",{staticClass:"text-decoration-none text-dark",attrs:{id:"phone",href:"#"}},[t._v("PHONE")])]),a("hr",{staticClass:"my-4"}),a("div",{staticClass:"small text-black-50"})])])])]),a("div",{staticClass:"social d-flex justify-content-center"},[a("a",{staticClass:"mx-2",attrs:{href:"https://github.com/gheptig",target:"_blank"}},[a("i",{staticClass:"fab fa-github"})]),a("a",{staticClass:"mx-2",attrs:{href:"https://www.linkedin.com/in/augustus-h/",target:"_blank"}},[a("i",{staticClass:"fab fa-linkedin"})])])])])}],gt={name:"ContactInfo"},bt=gt,Ct=(a("1483"),Object(u["a"])(bt,vt,pt,!1,null,"13813868",null)),xt=Ct.exports,_t=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},wt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer bg-black small text-center text-white-50"},[a("div",{staticClass:"container"},[t._v("Copyright © 2020 Augustus Heptig")])])}],jt={name:"Footer"},yt=jt,kt=(a("79bf"),Object(u["a"])(yt,_t,wt,!1,null,"7fd49cb0",null)),Pt=kt.exports,Et={name:"App",components:{Navbar:m,StartHeader:b,About:y,ProjectsWrapper:nt,ContactForm:ht,ContactInfo:xt,Footer:Pt}},Ot=Et,Nt=(a("034f"),Object(u["a"])(Ot,r,i,!1,null,null,null)),Tt=Nt.exports,$t=a("7e05");a("5b3d"),a("7db1");s["a"].use($t["a"]);var St=a("45e3");s["a"].use(St["a"]),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(Tt)}}).$mount("#app")},"6d0d":function(t,e,a){"use strict";var s=a("79db"),r=a.n(s);r.a},"72d4":function(t,e,a){"use strict";var s=a("e309"),r=a.n(s);r.a},"79bf":function(t,e,a){"use strict";var s=a("7b9d"),r=a.n(s);r.a},"79db":function(t,e,a){},"7b9d":function(t,e,a){},"85ec":function(t,e,a){},"90f8":function(t,e,a){},"952f":function(t,e,a){"use strict";var s=a("90f8"),r=a.n(s);r.a},"97dc":function(t,e,a){},a38f:function(t,e,a){"use strict";var s=a("d4a5"),r=a.n(s);r.a},a8e7:function(t,e,a){},b65e:function(t,e,a){},d4a5:function(t,e,a){},d5f7:function(t,e,a){"use strict";var s=a("51ff"),r=a.n(s);r.a},d69a:function(t,e,a){"use strict";var s=a("b65e"),r=a.n(s);r.a},df57:function(t,e,a){t.exports=a.p+"img/photo.24ddccf1.jpg"},e309:function(t,e,a){}});
//# sourceMappingURL=app.59003fc3.js.map