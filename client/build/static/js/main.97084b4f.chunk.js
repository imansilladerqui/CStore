(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){"use strict";a.r(t);var n=a(18),o=Object(n.a)(),c=a(0),r=a.n(c),i=a(146),l=a(46),s=a(152),m=a(36),u=a(10),d=a(7),p=a.n(d),f=a(60),g=[{img:a.n(f).a,name:"google",href:"auth/google",alt:"google-icon",color:"#CB4024",txt:"Registrate con Google"}],E=a(5),b=a(80),v=a(153),h=a(142),y=a(143),x=Object(E.a)({paper:{border:"1px solid #d3d4d5"}})((function(e){return r.a.createElement(b.a,Object.assign({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))})),w=Object(E.a)((function(e){return{root:{"&:focus":{backgroundColor:"#312D5C","& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}}}}))(v.a),N=function(e){var t=e.loggedUser,a=Object(c.useState)(null),n=Object(u.a)(a,2),i=n[0],s=n[1],m=p.a.isEmpty(t)?p.a.find(g,(function(e){return g.name===e.source})):{};return r.a.createElement("div",{style:{float:"right",height:"100%"}},r.a.createElement(h.a,{href:"",style:{color:"white",padding:"0",height:"100%"},onClick:function(e){return s(e.currentTarget)}},r.a.createElement(l.a,null,p.a.isEmpty(t)?"Registro":t.name)),r.a.createElement(x,{anchorEl:i,open:Boolean(i),onClose:function(){return s(null)}},p.a.isEmpty(t)&&r.a.createElement(w,{onClick:function(){return o.push("/")}},r.a.createElement(y.a,{primary:m.txt,onClick:function(){return window.location.href=m.href}})),!p.a.isEmpty(t)&&r.a.createElement(w,{onClick:function(){return o.push("/ultimosmovimientos")}},r.a.createElement(y.a,{primary:"Ultimos Movimientos"})),!p.a.isEmpty(t)&&r.a.createElement(w,{onClick:function(){return window.location.href="/auth/logout"}},r.a.createElement(y.a,{primary:"Cerrar Sesi\xf3n"}))))},O=Object(c.createContext)(null),j=function(e){var t=e.children,a=Object(c.useState)({}),n=Object(u.a)(a,2),o=n[0],i=n[1];return Object(c.useEffect)((function(){p.a.isEmpty(o)&&fetch("/user").then((function(e){return e.json()})).then((function(e){return i(e)})).catch((function(e){throw e}))}),[]),r.a.createElement(O.Provider,{value:o.body},t)};j.context=O;var k=j,F=a(62),C=a.n(F),S=a(45),T=a.n(S),I=function(){var e=Object(c.useContext)(k.context),t=p.a.isEmpty(e)?{}:p.a.find(g,(function(e){return g.name===e.source}));return r.a.createElement("div",{className:"menu-bar"},r.a.createElement(m.b,{className:"btn menu-btn noHover logobox",to:"/",title:"Home"},r.a.createElement("img",{src:T.a,alt:"logo"})),!p.a.isEmpty(e)&&r.a.createElement("div",{className:"btn menu-btn noHover",title:"".concat(e.name," data"),style:{float:"right",paddingTop:0,paddingBottom:0,position:"relative",top:"50%",transform:"translateY(-50%)"}},r.a.createElement("div",{className:"app-icon-container"},r.a.createElement("img",{className:"btn-icon",src:e.imageUrl,alt:t.alt}))),p.a.isEmpty(e)&&r.a.createElement("div",{className:"btn menu-btn noHover",title:"Home",style:{float:"right",paddingTop:0,paddingBottom:0,position:"relative",top:"50%",transform:"translateY(-50%)"}},r.a.createElement("img",{src:C.a,alt:"passport.js logo"})),r.a.createElement(N,{loggedUser:e}))},B=a(145),z=a(147),H=a(150),A=a(148),P=a(144),Q=a(151),W=function(e){var t=e.img,a=e.href,n=e.color,o=e.arsQty;return r.a.createElement("div",{className:"card",style:{boder:"1px solid ".concat(n),borderRadius:2,width:"100%",marginTop:"50px"},onClick:function(){localStorage.setItem("arsQty",o.arsQty),window.location=a}},r.a.createElement("div",{style:{minHeight:50,background:'url("'.concat(t,'") no-repeat center center / 25% ').concat(n)}}))},R=function(e){return g.map((function(t){return r.a.createElement(W,Object.assign({},t,{key:t.name,arsQty:e}))}))},L=a(112);function D(){return Math.round(20*Math.random())-10}function M(){var e=50+D(),t=50+D();return{top:"".concat(e,"%"),left:"".concat(t,"%"),transform:"translate(-".concat(e,"%, -").concat(t,"%)")}}var U=Object(P.a)((function(e){return{paper:{position:"absolute",width:600,backgroundColor:e.palette.background.paper,border:"2px solid #000",padding:"50px"},modalTitle:{textAlign:"center",fontSize:"26px",fontWeight:700},divisor:{marginTop:"50px"},modalText:{marginTop:"30px",fontSize:"20px",fontWeight:500,textAlign:"center"}}})),q=function(e){var t=e.open,a=e.close,n=e.arsQty,o=U(),i=Object(c.useState)(M),s=Object(u.a)(i,1)[0];return r.a.createElement("div",null,r.a.createElement(Q.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:t,onClose:a},r.a.createElement(L.a,{style:s,className:o.paper},r.a.createElement(l.a,{className:o.modalTitle},"\xa1Estas a un solo paso!"),r.a.createElement("hr",{className:o.divisor}),r.a.createElement(l.a,{className:o.modalText},"Por seguridad, para poder realizar la transaccion debes estar registrado"),r.a.createElement(l.a,{className:o.modalText},"Registrate con Google."),r.a.createElement(R,{arsQty:n}))))},V=a(64),J=a.n(V);function G(){return Math.round(20*Math.random())-10}function Y(){var e=50+G(),t=50+G();return{top:"".concat(e,"%"),left:"".concat(t,"%"),transform:"translate(-".concat(e,"%, -").concat(t,"%)")}}var Z=Object(P.a)((function(e){return{paper:{position:"absolute",width:600,backgroundColor:e.palette.background.paper,border:"2px solid #000",padding:"50px"},modalTitle:{textAlign:"center",fontSize:"26px",fontWeight:700},divisor:{marginTop:"50px"},modalText:{marginTop:"30px",fontSize:"20px",fontWeight:500,textAlign:"center"}}})),$=function(e){var t=e.open,a=e.close,n=(e.arsQty,Z()),o=Object(c.useState)(Y),i=Object(u.a)(o,1)[0];return r.a.createElement("div",null,r.a.createElement(Q.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:t,onClose:a},r.a.createElement(L.a,{style:i,className:n.paper},r.a.createElement(l.a,{className:n.modalTitle},"Felicitaciones, la operacion fue realizada con exito"),r.a.createElement("hr",{className:n.divisor}),r.a.createElement(l.a,{className:n.modalText},"Se estaran contactando contigo por la operacion..."))))},K=(a(108),a(65)),X=a.n(K),_=function(e,t){var a=Object(c.useState)(!1),n=Object(u.a)(a,2),o=n[0],r=n[1],i=Object(c.useState)(null),l=Object(u.a)(i,2),s=l[0],m=l[1];return Object(c.useEffect)((function(){r(!0),fetch(e).then((function(e){if(!e.ok)throw new Error("Failed to fetch.");return e.json()})).then((function(e){r(!1),m(e)})).catch((function(e){throw r(!1),e}))}),t),[o,s]},ee={button:{marginTop:20,background:"#FFFFFF",color:"#312D5C",borderRadius:0},input:{textAlign:"right"},moduloCompraTitle:{fontSize:"25px",color:"#FFFFFF",fontWeight:600,lineHeight:"17px",textAlign:"center",paddingBottom:"15px"},moduloCompraSubtitle:{color:"#FFFFFF",fontSize:"15px",fontWeight:300,lineHeight:"15px",textAlign:"center",paddingBottom:"30px",paddingTop:"0"},currencyBox:{paddingLeft:"10px"},currencyTitle:{color:"#FFFFFF",fontSize:"30px",fontWeight:400,letterSpacing:"0.71px",lineHeight:"24px",textAlign:"left",paddingTop:"0",paddingBottom:"10px"},currencySubtitle:{color:"#FFFFFF",fontSize:"15px",fontWeight:300,letterSpacing:"0.29px",lineHeight:"15px",textAlign:"left",paddingTop:"0",paddingBottom:"0"},currencyChevron:{fontSize:"0.8rem",paddingBottom:"3px",color:"#FFFFFF"}},te=function(e){var t=_("/btcvalue",[]),a=Object(u.a)(t,2),n=(a[0],a[1]),s=Object(c.useState)(!1),m=Object(u.a)(s,2),d=m[0],f=m[1],g=Object(c.useState)(!1),E=Object(u.a)(g,2),b=E[0],v=E[1],h=Object(c.useState)(""),y=Object(u.a)(h,2),x=y[0],w=y[1],N=Object(c.useContext)(k.context),O=[];if(n){var j=n.body.attributes.ask;O=.0225*j+j}var F=O.toLocaleString(void 0,{maximumFractionDigits:2}),C=parseFloat(x/O).toFixed(8),S=J.a.parse(e.location.search);Object(c.useEffect)((function(){localStorage.getItem("arsQty")&&(w(localStorage.getItem("arsQty")),localStorage.removeItem("arsQty"))}),[]),Object(c.useEffect)((function(){S.success&&v((function(e){return!e}))}),[S.success]);var T=function(e){var t,a,n,c;e.preventDefault(),p.a.isEmpty(N)?f(!d):(t="POST",a="/operation",n={operationType:"buy",btcValue:O,btcQty:C,arsQty:x,userId:N.id},c="?success=true",fetch(a,{method:t,body:JSON.stringify(n),headers:n?{"Content-Type":"application/json"}:{}}).then((function(e){if(!e.ok)throw new Error("Failed to fetch.");return o.push(c)})).catch((function(e){throw e})))};return r.a.createElement("div",null,r.a.createElement(B.a,{className:"card-container"},r.a.createElement("div",{style:{background:"#312D5C",paddingTop:"20px"}},r.a.createElement(l.a,{style:ee.moduloCompraTitle},"Compr\xe1 tus Bitcoins"),r.a.createElement(l.a,{style:ee.moduloCompraSubtitle},"Ingresa la cantidad de pesos que queres cambiar.")),r.a.createElement("form",{onSubmit:T},r.a.createElement("div",{style:{background:"#312D5C",paddingBottom:"20px",paddingRight:"15px"}},r.a.createElement(i.a,{container:!0},r.a.createElement(i.a,{item:!0,xs:5,container:!0},r.a.createElement(i.a,{item:!0,xs:8,style:ee.currencyBox},r.a.createElement(l.a,{className:"money",style:ee.currencyTitle},"ARS",r.a.createElement(z.a,{className:"money-icon fas fa-chevron-down",style:ee.currencyChevron})),r.a.createElement(l.a,{className:"money-subtitle",style:ee.currencySubtitle},"Pesos Argentinos"))),r.a.createElement(i.a,{item:!0,xs:7,className:"money-input"},r.a.createElement(H.a,{id:"formatted-numberformat-input",placeholder:F.toString(2),label:"Cu\xe1nto tenes que pagar",InputLabelProps:{shrink:!0},value:x,onChange:function(e){w(e.target.value)}}))),r.a.createElement("div",{className:"line-2"}),r.a.createElement(i.a,{container:!0},r.a.createElement(i.a,{item:!0,xs:5,container:!0},r.a.createElement(i.a,{item:!0,xs:8,style:ee.currencyBox},r.a.createElement(l.a,{className:"money",style:ee.currencyTitle},"BTC",r.a.createElement(z.a,{className:"money-icon fas fa-chevron-down",style:ee.currencyChevron})),r.a.createElement(l.a,{className:"money-subtitle",style:ee.currencySubtitle},"Bitcoin"))),r.a.createElement(i.a,{item:!0,xs:7,className:"money-input"},r.a.createElement(H.a,{disabled:!0,id:"money-input-bitcoin",label:"Cu\xe1nto vas a comprar",type:"currency",placeholder:x?C.toString(2):"1",fullWidth:!0,InputLabelProps:{shrink:!0},inputProps:{style:ee.input}})))),r.a.createElement(i.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(i.a,{item:!0,xs:9},r.a.createElement(A.a,{type:"submit",disabled:!x,fullWidth:!0,variant:"contained",color:"primary",style:ee.button},r.a.createElement("img",{src:X.a,alt:"bitcoinLogo",style:{marginRight:"20px"}}),"Comprar Bitcoins"))))),r.a.createElement(q,{open:d,close:T,arsQty:x}),r.a.createElement($,{open:b,close:function(){return v(!b),o.push("/")},arsQty:x}))},ae=a(66),ne=a.n(ae),oe={title:{fontSize:"35px",color:"#FFFFFF",fontWeight:600,lineHeight:"45px",textAlign:"left",marginBottom:"30px"},subTitle:{color:"#FFFFFF",fontSize:"15px",fontWeight:300,lineHeight:"23px",textAlign:"left",marginBottom:"30px",marginTop:"0"}},ce=function(e){var t=Object(c.useContext)(k.context);return r.a.createElement("div",null,r.a.createElement(I,null),r.a.createElement(i.a,{container:!0,className:"homepage backgroundHome"},r.a.createElement(i.a,{item:!0,xs:12,lg:6,container:!0,justify:"center",direction:"column",alignItems:"center",style:{paddingLeft:"5%",paddingRight:"5%",marginTop:"4%"}},r.a.createElement(l.a,{style:oe.title},"Compra tus bitcoins de forma segura"),r.a.createElement(l.a,{style:oe.subTitle},"Cambia tus pesos por bitcoins de una manera rapida, facil y retiralos por nuestro local. ",r.a.createElement("br",null)," Podemos depositarlos en tu billetera virtual o te daremos un dispositivo que contendra los Bitcoins que compraste."),r.a.createElement(te,Object.assign({user:t},e))),r.a.createElement(s.a,{only:["xs","sm","md"]},r.a.createElement(i.a,{item:!0,lg:6,container:!0,justify:"flex-end",direction:"row",alignItems:"center"},r.a.createElement("img",{src:ne.a,alt:"buybtc",style:{maxWidth:"auto",maxHeight:"90%",top:"107px",position:"absolute"}})))))},re=a(12),ie=a(67),le=a.n(ie),se=a(68),me=a.n(se),ue=a(69),de=a.n(ue),pe=a(70),fe=a.n(pe),ge=a(71),Ee=a.n(ge),be=a(72),ve=a.n(be),he=a(73),ye=a.n(he),xe=a(74),we=a.n(xe),Ne=a(75),Oe=a.n(Ne),je=a(76),ke=a.n(je),Fe=a(77),Ce=a.n(Fe),Se=a(78),Te=a.n(Se);a(109);function Ie(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Be(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ie(Object(a),!0).forEach((function(t){Object(re.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ie(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ze=function(){var e=Object(c.useState)({bitcoin:{},ripple:{},litecoin:{},ethereum:{},bitcoinCash:{}}),t=Object(u.a)(e,2),a=t[0],n=t[1],o=Object(c.useState)({dash:{},iota:{},eos:{},zcash:{},xmr:{}}),i=Object(u.a)(o,2),l=i[0],s=i[1];function m(e,t){fetch(e).then((function(e){if(!e.ok)throw new Error("Failed to fetch.");return e.json()})).then((function(e){var a=parseFloat(e.bid),o=parseFloat(e.ask);n((function(e){return Be({},e,Object(re.a)({},t,{bid:parseFloat(a+.04*a).toFixed(2),ask:parseFloat(o+.04*o).toFixed(2)}))}))})).catch((function(e){throw e}))}function d(e,t){fetch(e).then((function(e){if(!e.ok)throw new Error("Failed to fetch.");return e.json()})).then((function(e){var a=parseFloat(.004*e.ticker.price)+parseFloat(e.ticker.price);s((function(e){return Be({},e,Object(re.a)({},t,{bid:parseFloat(a).toFixed(3),ask:parseFloat(a+.001*a).toFixed(3)}))}))})).catch((function(e){throw e}))}return Object(c.useEffect)((function(){m("https://www.bitstamp.net/api/v2/ticker/btcusd/","bitcoin");var e=setInterval((function(){m("https://www.bitstamp.net/api/v2/ticker/btcusd/","bitcoin")}),3e5);return function(){return clearInterval(e)}}),[]),Object(c.useEffect)((function(){m("https://www.bitstamp.net/api/v2/ticker/xrpusd/","ripple");var e=setInterval((function(){m("https://www.bitstamp.net/api/v2/ticker/xrpusd/","ripple")}),3e5);return function(){return clearInterval(e)}}),[]),Object(c.useEffect)((function(){m("https://www.bitstamp.net/api/v2/ticker/ltcusd/","litecoin");var e=setInterval((function(){m("https://www.bitstamp.net/api/v2/ticker/ltcusd/","litecoin")}),3e5);return function(){return clearInterval(e)}}),[]),Object(c.useEffect)((function(){m("https://www.bitstamp.net/api/v2/ticker/ethusd/","ethereum");var e=setInterval((function(){m("https://www.bitstamp.net/api/v2/ticker/ethusd/","ethereum")}),3e5);return function(){return clearInterval(e)}}),[]),Object(c.useEffect)((function(){m("https://www.bitstamp.net/api/v2/ticker/bchusd/","bitcoinCash");var e=setInterval((function(){m("https://www.bitstamp.net/api/v2/ticker/bchusd/","bitcoinCash")}),3e5);return function(){return clearInterval(e)}}),[]),Object(c.useEffect)((function(){d("https://www.cryptonator.com/api/ticker/dash-usd/","dash");var e=setInterval((function(){d("https://www.cryptonator.com/api/ticker/dash-usd/","dash")}),3e5);return function(){return clearInterval(e)}}),[]),Object(c.useEffect)((function(){d("https://www.cryptonator.com/api/ticker/omg-usd/","iota");var e=setInterval((function(){d("https://www.cryptonator.com/api/ticker/omg-usd/","iota")}),3e5);return function(){return clearInterval(e)}}),[]),Object(c.useEffect)((function(){d("https://www.cryptonator.com/api/ticker/eos-usd/","eos");var e=setInterval((function(){d("https://www.cryptonator.com/api/ticker/eos-usd/","eos")}),3e5);return function(){return clearInterval(e)}}),[]),Object(c.useEffect)((function(){d("https://www.cryptonator.com/api/ticker/zec-usd/","zcash");var e=setInterval((function(){d("https://www.cryptonator.com/api/ticker/zec-usd/","zcash")}),3e5);return function(){return clearInterval(e)}}),[]),Object(c.useEffect)((function(){d("https://www.cryptonator.com/api/ticker/xmr-usd/","xmr");var e=setInterval((function(){d("https://www.cryptonator.com/api/ticker/xmr-usd/","xmr")}),3e5);return function(){return clearInterval(e)}}),[]),r.a.createElement("div",null,r.a.createElement("div",{id:"videocont",className:"videoback"},r.a.createElement("video",{id:"video",src:le.a,type:"video/mp4",autoPlay:!0,loop:!0,muted:!0,poster:me.a})),r.a.createElement("div",{className:"backcolor"}),r.a.createElement("div",{className:"rotacion"},r.a.createElement("div",{className:"cabezal"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:T.a,alt:"logocrypto",className:"logoH"})),r.a.createElement("div",{className:"colA"},"COMPRA"),r.a.createElement("div",{className:"colB"},"VENTA")),!p.a.isEmpty(a.bitcoin)&&r.a.createElement("div",{id:"mod1",className:"moduloA"},r.a.createElement("div",{className:"col1"},r.a.createElement("img",{src:de.a,alt:"bitcoin",className:"logoH"})),r.a.createElement("div",{className:"col2"},"BITCOIN"),r.a.createElement("div",{className:"col3"},a.bitcoin.bid),r.a.createElement("div",{className:"col4"},a.bitcoin.ask)),!p.a.isEmpty(a.bitcoinCash)&&r.a.createElement("div",{id:"mod2",className:"moduloB"},r.a.createElement("div",{className:"col1"},r.a.createElement("img",{src:fe.a,alt:"bitcoinCash",className:"logoH"})),r.a.createElement("div",{className:"col2"},"BITCOIN CASH"),r.a.createElement("div",{className:"col3"},a.bitcoinCash.bid),r.a.createElement("div",{className:"col4"},a.bitcoinCash.ask)),!p.a.isEmpty(a.ethereum)&&r.a.createElement("div",{id:"mod3",className:"moduloA"},r.a.createElement("div",{className:"col1"},r.a.createElement("img",{src:Ee.a,alt:"ethereum",className:"logoH"})),r.a.createElement("div",{className:"col2"},"ETHEREUM"),r.a.createElement("div",{className:"col3"},a.ethereum.bid),r.a.createElement("div",{className:"col4"},a.ethereum.ask)),!p.a.isEmpty(a.litecoin)&&r.a.createElement("div",{id:"mod4",className:"moduloB"},r.a.createElement("div",{className:"col1"},r.a.createElement("img",{src:ve.a,alt:"litecoin",className:"logoH"})),r.a.createElement("div",{className:"col2"},"LITECOIN"),r.a.createElement("div",{className:"col3"},a.litecoin.bid),r.a.createElement("div",{className:"col4"},a.litecoin.ask)),!p.a.isEmpty(a.ripple)&&r.a.createElement("div",{id:"mod5",className:"moduloA"},r.a.createElement("div",{className:"col1"},r.a.createElement("img",{src:we.a,alt:"ripple",className:"logoH"})),r.a.createElement("div",{className:"col2"},"RIPPLE"),r.a.createElement("div",{className:"col3"},a.ripple.bid),r.a.createElement("div",{className:"col4"},a.ripple.ask)),!p.a.isEmpty(l.xmr)&&r.a.createElement("div",{id:"mod6",className:"moduloB"},r.a.createElement("div",{className:"col1"},r.a.createElement("img",{src:Oe.a,alt:"monero",className:"logoH"})),r.a.createElement("div",{className:"col2"},"MONERO"),r.a.createElement("div",{className:"col3"},l.xmr.bid),r.a.createElement("div",{className:"col4"},l.xmr.ask)),!p.a.isEmpty(l.zcash)&&r.a.createElement("div",{id:"mod7",className:"moduloA"},r.a.createElement("div",{className:"col1"},r.a.createElement("img",{src:ye.a,alt:"zcash",className:"logoH"})),r.a.createElement("div",{className:"col2"},"ZCASH"),r.a.createElement("div",{className:"col3"},l.zcash.bid),r.a.createElement("div",{className:"col4"},l.zcash.ask)),!p.a.isEmpty(l.eos)&&r.a.createElement("div",{id:"mod8",className:"moduloB"},r.a.createElement("div",{className:"col1"},r.a.createElement("img",{src:ke.a,alt:"eos",className:"logoH"})),r.a.createElement("div",{className:"col2"},"EOS"),r.a.createElement("div",{className:"col3"},l.eos.bid),r.a.createElement("div",{className:"col4"},l.eos.ask)),!p.a.isEmpty(l.dash)&&r.a.createElement("div",{id:"mod9",className:"moduloA"},r.a.createElement("div",{className:"col1"},r.a.createElement("img",{src:Ce.a,alt:"dash",className:"logoH"})),r.a.createElement("div",{className:"col2"},"DASH"),r.a.createElement("div",{className:"col3"},l.dash.bid),r.a.createElement("div",{className:"col4"},l.dash.ask)),!p.a.isEmpty(l.iota)&&r.a.createElement("div",{id:"mod10",className:"moduloB"},r.a.createElement("div",{className:"col1"},r.a.createElement("img",{src:Te.a,alt:"iota",className:"logoH"})),r.a.createElement("div",{className:"col2"},"IOTA"),r.a.createElement("div",{className:"col3"},l.iota.bid),r.a.createElement("div",{className:"col4"},l.iota.ask))))},He=function(){var e,t=Object(c.useContext)(k.context),a=_("/operation/".concat(t.id),[t]),n=Object(u.a)(a,2),o=(n[0],n[1]);return e=p.a.isEmpty(o)?"No tienes operaciones realizadas aun.":o.body.map((function(e){return r.a.createElement("ul",null,r.a.createElement("li",null,"id de la operacion: ",e.id),r.a.createElement("li",null,"id del usuario:",e.userId),r.a.createElement("li",null,"Tipo de operacion: ",e.operationType),r.a.createElement("li",null,"Valor del BTC en pesos: ",e.btcValue),r.a.createElement("li",null,"Cantidad de BTC comprada: ",e.btcQty),r.a.createElement("li",null,"Cantidad de pesos: ",e.arsQty))})),r.a.createElement("div",null,r.a.createElement(I,null),"Mi historial de compra",e)},Ae=a(26),Pe=function(){return r.a.createElement(k,null,r.a.createElement(Ae.b,{history:o},r.a.createElement(Ae.a,{path:"/",exact:!0,component:ce}),r.a.createElement(Ae.a,{path:"/ultimosmovimientos",component:He}),r.a.createElement(Ae.a,{path:"/pizarra",component:ze})))},Qe=a(79),We=a(8),Re=a.n(We),Le=a(149),De=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Me(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(110);var Ue=Object(Qe.a)({typography:{fontFamily:["Quicksand"]}});Re.a.render(r.a.createElement(Le.a,{theme:Ue},r.a.createElement(m.a,null,r.a.createElement(Pe,null))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");De?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Me(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):Me(e)}))}}()},45:function(e,t,a){e.exports=a.p+"static/media/logo.09fb58f8.svg"},60:function(e,t,a){e.exports=a.p+"static/media/google.c90c4788.png"},62:function(e,t,a){e.exports=a.p+"static/media/passport-1.a18f6a63.svg"},65:function(e,t,a){e.exports=a.p+"static/media/bitcoinLogo.42042d35.svg"},66:function(e,t,a){e.exports=a.p+"static/media/home.4f607453.png"},67:function(e,t,a){e.exports=a.p+"static/media/back.67d00ee4.mp4"},68:function(e,t,a){e.exports=a.p+"static/media/pizarra.bc93fda6.jpg"},69:function(e,t,a){e.exports=a.p+"static/media/btc.1492d9a8.svg"},70:function(e,t,a){e.exports=a.p+"static/media/bch.11b9ecfc.svg"},71:function(e,t,a){e.exports=a.p+"static/media/eth.07febb24.svg"},72:function(e,t,a){e.exports=a.p+"static/media/ltc.cfb4243a.svg"},73:function(e,t,a){e.exports=a.p+"static/media/zch.94f4e9a0.svg"},74:function(e,t,a){e.exports=a.p+"static/media/xrp.7c248fe6.svg"},75:function(e,t,a){e.exports=a.p+"static/media/mnr.9ce71274.svg"},76:function(e,t,a){e.exports=a.p+"static/media/eos.b5b47049.svg"},77:function(e,t,a){e.exports=a.p+"static/media/dsh.4988f3b2.svg"},78:function(e,t,a){e.exports=a.p+"static/media/omg.e96f63e9.svg"},87:function(e,t,a){e.exports=a(111)}},[[87,1,2]]]);
//# sourceMappingURL=main.97084b4f.chunk.js.map