(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{103:function(e,a,t){},106:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(24),c=t.n(r),o=(t(67),t(16)),s=t(17),m=t(20),u=t(18),i=t(21),d=t(11),E=t(25),p=(t(68),Object(n.createContext)()),b=t(32),h=t.n(b),f=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(p.Consumer,null,(function(e){return l.a.createElement(l.a.Fragment,null,Object.keys(e.personaldata).map((function(a,t){return l.a.createElement("span",{key:t},l.a.createElement("div",{className:"card",style:{border:"unset"}},l.a.createElement("div",{className:"card-header",style:{padding:"unset",border:"unset",backgroundColor:"#e9ecef"}},l.a.createElement("div",{className:"leftPane-div"},l.a.createElement("img",{src:e.personaldata[a].image?e.url+e.personaldata[a].image:h.a,alt:"no pics",className:"rounded img-fluid"})))),l.a.createElement("div",{className:"card current"},l.a.createElement("div",{className:"card-header"},e.personaldata[a].latest_tech)))})))}))}}]),a}(n.Component),g=t(3),v=t(4),y=function(){return l.a.createElement(p.Consumer,null,(function(e){return l.a.createElement(l.a.Fragment,null,Object.keys(e.personaldata).map((function(a){return l.a.createElement("div",{key:a,className:"home"},l.a.createElement("h2",null," Hi ! I'M ",e.personaldata[a].firstname.toUpperCase()),l.a.createElement("br",null),l.a.createElement("h4",null," I'M ",e.personaldata[a].designation.toUpperCase()),l.a.createElement("br",null),l.a.createElement(d.b,{to:"/about",className:"btn btn1",style:{border:"1px solid #fff"}},l.a.createElement(g.a,{icon:v.o})," ","About Me")," ",l.a.createElement("a",{className:"btn btn1",id:"res",style:{border:"1px solid #fff"},href:e.url+e.personaldata[a].resume,target:"_blank",rel:"noopener noreferrer",download:!0},l.a.createElement(g.a,{icon:v.f})," ","My Resume"))})))}))},N=function(){return l.a.createElement(p.Consumer,null,(function(e){return l.a.createElement(l.a.Fragment,null,Object.keys(e.personaldata).map((function(a,t){return l.a.createElement("div",{key:t,className:"card about ab",style:{boxShadow:"0 5px 11px #ccc"}},l.a.createElement("h1",null,"ABOUT ",l.a.createElement("span",null,"ME")),l.a.createElement("hr",{style:{width:"150px",margin:"0 auto"}}),l.a.createElement("br",null),l.a.createElement("h4",null,l.a.createElement(g.a,{icon:v.o}),"\xa0PERSONAL INFO"),l.a.createElement("p",null," ",e.personaldata[a].summary," "),l.a.createElement("table",{className:"table table-responsive"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("p",null,l.a.createElement("b",null," First Name:")," ",e.personaldata[a].firstname)),l.a.createElement("td",null,l.a.createElement("p",null,l.a.createElement("b",null," Phone Number:")," ",e.personaldata[a].phone))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("p",null,l.a.createElement("b",null," Last Name:")," ",e.personaldata[a].lastname)),l.a.createElement("td",null,l.a.createElement("p",null,l.a.createElement("b",null," Address:")," ",e.personaldata[a].address))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("p",null,l.a.createElement("b",null,"Date of Birth:")," ",e.personaldata[a].dateofbirth)),l.a.createElement("td",null,l.a.createElement("p",null,l.a.createElement("b",null," Email:")," ",e.personaldata[a].email))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("p",null,l.a.createElement("b",null," Nationality:")," ",e.personaldata[a].nationality)),l.a.createElement("td",null,l.a.createElement("p",null,l.a.createElement("b",null," Spoken Languages:")," ",e.personaldata[a].spk_lng))))),l.a.createElement("div",{className:"about-btn"},l.a.createElement("a",{className:"btn  btn1",href:e.personaldata[a].blog_url,style:{padding:"6px 15px",marginBottom:"-5px",backgroundColor:"black",color:"#fff"}},l.a.createElement(g.a,{icon:v.a}),"\xa0My Blog ")),l.a.createElement("br",null))})))}))},x=function(){return l.a.createElement(p.Consumer,null,(function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"education"},l.a.createElement("div",{className:"card",style:{boxShadow:"0 5px 11px #ccc",overflow:"auto"}},l.a.createElement("div",{className:"card-header"},l.a.createElement(g.a,{icon:v.h})," ","EDUCATION"),l.a.createElement("span",null,Object.keys(e.education).map((function(a,t){return l.a.createElement("div",{key:t,className:"card-body",style:{paddingBottom:"0"}},l.a.createElement("div",{className:"header1"},l.a.createElement("h6",null,l.a.createElement("span",null,e.education[a].degree.toUpperCase()," "),"- ",e.education[a].course.toUpperCase()),l.a.createElement("p",null,l.a.createElement(g.a,{icon:v.c})," ",e.education[a].pass_year),"Completed my ",e.education[a].degree,"  from "," ",l.a.createElement("h6",null,e.education[a].university)),l.a.createElement("hr",null))}))))))}))},k=function(){return l.a.createElement(p.Consumer,null,(function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"experience"},l.a.createElement("div",{className:"card",style:{boxShadow:"0 5px 11px #ccc",overflow:"auto"}},l.a.createElement("div",{className:"card-header"},l.a.createElement(g.a,{icon:v.n})," ","EXPERIENCE"),Object.keys(e.experience).map((function(a,t){return l.a.createElement("div",{key:t,className:"card-body",style:{paddingBottom:0}},l.a.createElement("div",{className:"header1"},l.a.createElement("h6",null,l.a.createElement("span",null,e.experience[a].designation," "),"- ",e.experience[a].company),l.a.createElement("p",null,l.a.createElement(g.a,{icon:v.c}),"  ",e.experience[a].duration),l.a.createElement("p",null,l.a.createElement(g.a,{icon:v.e})," ","  ",e.experience[a].technology),l.a.createElement("p",null,e.experience[a].summary)),l.a.createElement("hr",null))})))))}))},j=function(){return l.a.createElement(p.Consumer,null,(function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"skills",style:{boxShadow:"0 5px 11px #ccc",maxHeight:"75vh",overflow:"auto"}},l.a.createElement("div",{className:"card",style:{overflow:"auto"}},l.a.createElement("div",{className:"card-header"},l.a.createElement(g.a,{icon:v.m})," ","SKILLS"),l.a.createElement("div",{className:"card-body"},l.a.createElement("table",{className:"table"},l.a.createElement("tbody",{className:"row"},Object.keys(e.skills).map((function(a,t){return l.a.createElement("tr",{key:t,className:"col-6 card",style:{boxSizing:"border-box",boxShadow:"0px 1px 7px 2px #ccc"}},l.a.createElement("td",{align:"center"},l.a.createElement("h6",null,e.skills[a].subject),l.a.createElement("p",null,e.skills[a].stars)))}))))))))}))},O=function(e){var a=e.match;return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,null,l.a.createElement("div",{className:"edu-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-3 col-md-3 col-sm-12 col-xs-12 edu-left"},l.a.createElement("div",{className:"buttons"},l.a.createElement(d.c,{to:"".concat(a.path),exact:!0,className:" btn edu-btn edu-bt1"},l.a.createElement(g.a,{icon:v.h}),"\xa0EDUCATION "),l.a.createElement(d.c,{to:"".concat(a.path,"/experience"),exact:!0,className:"btn edu-btn edu-bt2"},l.a.createElement(g.a,{icon:v.n}),"\xa0EXPERIENCE"),l.a.createElement(d.c,{to:"".concat(a.path,"/skills"),exact:!0,className:"btn edu-btn edu-bt3"},l.a.createElement(g.a,{icon:v.m}),"\xa0SKILLS"))),l.a.createElement("div",{className:"col-lg-9 col-md-9 col-sm-12 col-xs-12"},l.a.createElement("div",{className:"can-education"},l.a.createElement(E.c,null,l.a.createElement(E.a,{exact:!0,path:"".concat(a.path),component:x}),l.a.createElement(E.a,{exact:!0,path:"".concat(a.path,"/experience"),component:k}),l.a.createElement(E.a,{exact:!0,path:"".concat(a.path,"/skills"),component:j}))))))))},C=t(108),S=t(113),w=t(109),M=t(110),F=t(111),I=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).onOpenModal=function(e){t.setState({toggleModal:!0,selectModal:e})},t.onCloseModal=function(){t.setState({toggleModal:!1})},t.state={toggleModal:!1,selectModal:null,loading:!1},t}return Object(i.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(p.Consumer,null,(function(a){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"about",style:{overflow:"auto",backgroundColor:"transparent"}},l.a.createElement("h1",null,"MY"," ",l.a.createElement("span",null,"PORTFOLIO")),l.a.createElement("hr",{style:{width:"200px"}}),Object.keys(a.portfolio).map((function(t,n){return l.a.createElement("div",{key:n,className:"card",style:{marginBottom:"15px",boxShadow:"0 5px 11px #ccc"}},l.a.createElement("div",{className:"card-header",style:{paddingBottom:0,paddingTop:"5px"}},l.a.createElement("h5",null,a.portfolio[t].project_name)),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6 col-md-6"},l.a.createElement("div",{className:"project-img"},l.a.createElement("img",{src:a.portfolio[t].image?a.portfolio[t].image:h.a,alt:"no pics",className:"img-thumbnail"}))),l.a.createElement("div",{className:"col-lg-6 col-md-6"},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("p",null,l.a.createElement(g.a,{icon:v.o}),"\xa0",l.a.createElement("b",null,"Client: ",a.portfolio[t].client)))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("p",null,l.a.createElement(g.a,{icon:v.d}),l.a.createElement("b",null," Duration: ",a.portfolio[t].duration)))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("p",null,l.a.createElement(g.a,{icon:v.e}),l.a.createElement("b",null," Technologies: ",a.portfolio[t].technology)))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("div",{className:"port-btn",style:{textAlign:"right"}},l.a.createElement(C.a,{className:"btn btn1",onClick:function(){return e.onOpenModal(n)},style:{backgroundColor:"#000",color:"#fff"}},"Preview"))))))))),l.a.createElement(S.a,{isOpen:e.state.selectModal===n&&e.state.toggleModal,toggle:e.toggleModal,style:{top:"30%",transform:"translate(0%, -5%)"}},l.a.createElement(w.a,{className:"justify-content-center",style:{backgroundColor:"#dee2e6"},toggle:e.toggleModal},a.portfolio[t].project_name),l.a.createElement(M.a,{style:{backgroundColor:"#dee2e6"}},l.a.createElement("h5",null,"Project Description: "),a.portfolio[t].description),l.a.createElement(F.a,{style:{backgroundColor:"#dee2e6"}},l.a.createElement("a",{className:"btn btn1",href:a.portfolio[t].site_url},"Goto Site")," ",l.a.createElement(C.a,{color:"secondary",onClick:e.onCloseModal},"Cancel"))))}))))}))}}]),a}(n.Component),P=t(55),_=function(){return l.a.createElement(p.Consumer,null,(function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"mylinks"},l.a.createElement("div",{className:"card",style:{boxShadow:"0 5px 11px #ccc"}},l.a.createElement("div",{className:"card-header mylink-header"},l.a.createElement(g.a,{icon:v.j})," ","LINKS"),l.a.createElement("div",{className:"card-body",style:{textAlign:"center",paddingTop:"50px"}},Object.keys(e.links).map((function(a,t){return l.a.createElement("span",{key:t},l.a.createElement(P.SocialIcon,{url:e.links[a].site_url})," ")})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("hr",{style:{width:"150px"}})))))}))},B=t(56),T=t(112),A=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).handleChange=function(e){var a=e.target,n=a.name,l=a.value;t.setState(Object(B.a)({},n,l));var r="";"message"!==n&&"username"!==n&&"subject"!==n||l.length<=5&&(r="Enter your ".concat(n," with atleast 5 character")),t.setState({errorMessage:r})},t.handleSubmit=function(e){e.preventDefault();var a=t.state,n=a.username,l=a.email,r=a.message,c=a.subject;r.length<=5&&t.refmsg.current.focus(),n.length<=5&&t.refuser.current.focus(),l||t.refemail.current.focus(),c.length<=5&&t.refsub.current.focus();var o=e.target.elements.urls.value;n.length>=5&&l&&r.length>=5&&c.length>=5&&fetch(o+"/api/contactus",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n,email:l,message:r,subject:c})}).then((function(e){201===e.status&&t.setState({success:!0,username:"",email:"",message:"",subject:""})}))},t.state={tooltipOpen:!0,success:!1,errorMessage:"",username:"",email:"",message:"",subject:""},t.refmsg=l.a.createRef(),t.refuser=l.a.createRef(),t.refemail=l.a.createRef(),t.refsub=l.a.createRef(),t}return Object(i.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){return e.setState({success:!1})}),5e3)}},{key:"render",value:function(){var e=this,a=null;this.state.success&&(a=l.a.createElement("div",{className:"alert alert-success my-3"},l.a.createElement("strong",null," Message sent! Thank you, will contact you soon! ")));var t=this.state,n=t.username,r=t.email,c=t.message,o=t.subject;return l.a.createElement(p.Consumer,null,(function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"contact",style:{overflow:"auto"}},l.a.createElement("div",{className:"card",style:{boxShadow:"0 5px 11px #ccc"}},l.a.createElement("div",{className:"card-header"},l.a.createElement(g.a,{icon:v.g})," ","CONTACT ME"),l.a.createElement("div",{className:"card-body",style:{background:"#e9ecef"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-8"},l.a.createElement("div",{className:"contact-form"},l.a.createElement("form",{onSubmit:e.handleSubmit,id:"post"},l.a.createElement("textarea",{title:e.state.errorMessage,name:"message",id:"message",cols:"50",rows:"5",placeholder:"Message",className:"form-control",style:{marginBottom:"10px"},onChange:e.handleChange,ref:e.refmsg,value:c}),l.a.createElement(T.a,{placement:"top",isOpen:e.tooltipOpen,target:"message",toggle:e.toggle},"Please enter your message"),l.a.createElement("input",{type:"text",title:e.state.errorMessage,name:"username",placeholder:"Username",className:"form-control",style:{marginRight:"4%"},onChange:e.handleChange,ref:e.refuser,value:n}),l.a.createElement("input",{type:"email",name:"email",placeholder:"Email",className:"form-control",required:!0,onChange:e.handleChange,ref:e.refemail,value:r}),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",title:e.state.errorMessage,name:"subject",placeholder:"Subject",className:"form-control",required:!0,onChange:e.handleChange,ref:e.refsub,value:o})),l.a.createElement("input",{type:"hidden",name:"urls",value:t.url}),l.a.createElement("div",{className:"form-sub port-btn"},l.a.createElement("button",{type:"submit",className:"btn btn1",style:{color:"white",backgroundColor:"black"}},"SEND MESSAGE")),l.a.createElement("span",null)),a)),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement("div",{className:"address"},l.a.createElement("hr",null),Object.keys(t.personaldata).map((function(e,a){return l.a.createElement("span",{key:a},l.a.createElement("p",null,l.a.createElement(g.a,{icon:v.k})," ",t.personaldata[e].address),l.a.createElement("p",null,l.a.createElement(g.a,{icon:v.g})," ",t.personaldata[e].email),l.a.createElement("p",null,l.a.createElement(g.a,{icon:v.l})," ",t.personaldata[e].phone))})),l.a.createElement("hr",null))))))))}))}}]),a}(n.Component),R=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container-sm pt-5"},l.a.createElement("h3",{className:"text-center pt-5"},"Path Not Found!")))},D=(t(103),function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("div",{className:"jumbotron",style:{padding:"30px -1px",marginBottom:"unset"}},l.a.createElement("span",{className:"btn-group"},l.a.createElement(d.c,{className:"btn bt bt1",to:"/",exact:!0},l.a.createElement(g.a,{icon:v.i})),l.a.createElement(d.c,{className:"btn bt bt2",to:"/eduskill"},l.a.createElement(g.a,{icon:v.h})),l.a.createElement(d.c,{className:"btn bt bt3",to:"/portfolio"},l.a.createElement(g.a,{icon:v.b})),l.a.createElement(d.c,{className:"btn bt bt4",to:"/links"},l.a.createElement(g.a,{icon:v.j})),l.a.createElement(d.c,{className:"btn bt bt5",to:"/contact"},l.a.createElement(g.a,{icon:v.g}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-3 col-md-3 col-sm-12"},l.a.createElement(f,null)),l.a.createElement("div",{className:"col-lg-9 col-md-9 col-sm-12"},l.a.createElement("div",{className:"container",style:{padding:"5px"}},l.a.createElement("div",{className:"card",style:L},l.a.createElement("div",{className:"card-header app-header",style:U},l.a.createElement(E.c,null,l.a.createElement(E.a,{exact:!0,path:"/",component:y}),l.a.createElement(E.a,{exact:!0,path:"/about",component:N}),l.a.createElement(E.a,{exact:!0,path:"/portfolio",component:I}),l.a.createElement(E.a,{exact:!0,path:"/links",component:_}),l.a.createElement(E.a,{exact:!0,path:"/contact",component:A}),l.a.createElement(E.a,{path:"/eduskill",component:O}),l.a.createElement(E.a,{component:R})))))))))}}]),a}(n.Component)),L={backgroundColor:"transparent",border:"1px solid #fff"},U={backgroundColor:"transparent",borderBottom:"Unset"},J=t(43),K=t.n(J),q=t(60),G=t(59),H=t(31),X=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={personaldata:[],portfolio:[],links:[],education:[],experience:[],skills:[],name:"ddd",url:"http://127.0.0.1:8000",error:!1},t.fetch_data=t.fetch_data.bind(Object(H.a)(t)),t}return Object(i.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.fetch_data()}},{key:"fetch_data",value:function(){var e=Object(G.a)(K.a.mark((function e(){var a,t,n,l,r,c,o,s,m,u=this;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=["personaldata","projects","mylinks","education","experience","skills"],e.prev=1,e.next=4,Promise.all(a.map((function(e){return fetch(u.state.url+"/api/"+e).then((function(e){return e.json()}))})));case 4:t=e.sent,n=Object(q.a)(t,6),l=n[0],r=n[1],c=n[2],o=n[3],s=n[4],m=n[5],this.setState({personaldata:l,portfolio:r,links:c,education:o,experience:s,skills:m}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),this.setState({error:e.t0});case 18:case"end":return e.stop()}}),e,this,[[1,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement(p.Provider,{value:this.state},this.props.children)}}]),a}(n.Component);var z=function(){return l.a.createElement(X,null,l.a.createElement(D,null))};t(105);c.a.render(l.a.createElement(z,null),document.getElementById("root"))},32:function(e,a,t){e.exports=t.p+"static/media/thumb.88724383.png"},62:function(e,a,t){e.exports=t(106)},67:function(e,a,t){},68:function(e,a,t){}},[[62,1,2]]]);
//# sourceMappingURL=main.c2dd6cf4.chunk.js.map