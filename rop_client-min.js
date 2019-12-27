var ROP=function(){var e="mqtt.dms.aodianyun.com",t="//cdn.aodianyun.com/dms/";function n(){this.callback_map_={}}n.prototype.On=function(e,t){if("function"!=typeof t||"string"!=typeof e)throw new Error("error arguments ");arr=this.callback_map_[e],null==arr&&(arr=this.callback_map_[e]=new Array),arr.push(t)},n.prototype.Emit=function(e,t,n){var i=this.callback_map_[e];if(null!=i)for(var a in i)try{i[a]&&i[a](t,n)}catch(t){window.console&&window.console.log("catch err at "+e+" callback",t)}};var i=new n,a=[];return window.WebSocket?function(){var n=null,o=null,r=null,l=!1,s=0,c=4,u=5,f=6,d=7,p=s,v=1e3,h=v,m=null,y=0,g=null;function w(){null==m&&(p!=u&&p!=d||(p=d,m=setTimeout(S,h),h+=v,h=Math.min(h,5e3)))}function b(e,t){p==u&&(isNaN(t)&&(t=0),r.subscribe(e,{qos:t}))}function E(e){p==u&&r.unsubscribe(e)}function S(){if(m=null,p==d&&i.Emit("reconnect"),null==g&&(console.log(g),g="ws2-"+Paho.MQTT.NewGuid()),l?(port_=8300,e="mqttdms.aodianyun.com"):port_=8e3,r)try{r.disconnect()}catch(e){}(r=new Paho.MQTT.Client(e,port_,g)).onConnectionLost=function(e){0!==e.errorCode&&(i.Emit("offline",e.errorMessage),w())},r.onMessageArrived=function(e){if("__sys__"==e.destinationName)try{if("kill"==JSON.parse(e.payloadString).cmd)return i.Emit("connectold"),i.Emit("losed"),void _()}catch(e){}i.Emit("publish_data",e.payloadString,e.destinationName)};try{r.connect({timeout:10,userName:n,password:o,keepAliveInterval:60,cleanSession:!0,useSSL:l,onSuccess:function(){p=u,h=v;for(var e=0;e<a.length;e++)b(a[e].topic,a[e].qos);i.Emit("enter_suc")},onFailure:function(e){p==c?(console.log(e),y++>=3?(p=f,y=0,i.Emit("enter_fail",e.errorMessage),_()):setTimeout(S,1e3)):p==d&&(console.log(e),i.Emit("offline",e.errorMessage),w())}})}catch(e){console.log(e),w()}}function _(){p=s,y=0,clearTimeout(h);try{r&&r.disconnect()}catch(e){}}return{Enter:function(e,a,r,u){p==s&&(p=c,n=e,l=!!u,null==(o=a)&&(o=e),null!=r&&(g=r),"undefined"==typeof Paho?function(e){var n=document.createElement("script");n.type="text/javascript",n.async=!1,n.src=t+"ws.js?v=2.0.0",n.charset="UTF-8",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(n);var i=100,a=setInterval((function(){"undefined"!=typeof Paho&&(clearInterval(a),e()),--i<=0&&(clearInterval(a),e("load ws fail"))}),10)}((function(e){null==e?S():i.Emit("enter_fail",e)})):S())},Leave:_,On:function(e,t){i.On(e,t)},Publish:function(e,t,n,i){if(p==u){var a=new Paho.MQTT.Message(e);a.destinationName=t,isNaN(Number(n))?a.qos=0:a.qos=Number(n),a.retained=Boolean(i),r.send(a)}},Subscribe:function(e,t){if(e=e.toString(),null==(t=Number(t))&&(t=0),isNaN(t)&&(t=0),t>2&&(t=2),t<0&&(t=0),e&&0!=e.length){for(var n=0;n<a.length;n++)if(a[n].topic==e)return;a.push({topic:e,qos:t}),b(e,t)}},UnSubscribe:function(e){if((e=e.toString())&&0!=e.length)for(var t=0;t<a.length;t++)if(a[t].topic==e)return a.splice(t,1),void E(e)}}}():function(){var n=function(){var e,t,i,a,o,r,l="undefined",s="object",c="Shockwave Flash",u="application/x-shockwave-flash",f="SWFObjectExprInst",d="onreadystatechange",p=window,v=document,h=navigator,m=!1,y=[],g=[],w=[],b=[],E=!1,S=!1,_=!0,N=!1,T=function(){var e=typeof v.getElementById!=l&&typeof v.getElementsByTagName!=l&&typeof v.createElement!=l,t=h.userAgent.toLowerCase(),n=h.platform.toLowerCase(),i=/win/.test(n||t),a=/mac/.test(n||t),o=!!/webkit/.test(t)&&parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")),r="Microsoft Internet Explorer"===h.appName,f=[0,0,0],d=null;if(typeof h.plugins!=l&&typeof h.plugins[c]==s)(d=h.plugins[c].description)&&typeof h.mimeTypes!=l&&h.mimeTypes[u]&&h.mimeTypes[u].enabledPlugin&&(m=!0,r=!1,d=d.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),f[0]=V(d.replace(/^(.*)\..*$/,"$1")),f[1]=V(d.replace(/^.*\.(.*)\s.*$/,"$1")),f[2]=/[a-zA-Z]/.test(d)?V(d.replace(/^.*[a-zA-Z]+(.*)$/,"$1")):0);else if(typeof p.ActiveXObject!=l)try{var y=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");y&&(d=y.GetVariable("$version"))&&(r=!0,f=[V((d=d.split(" ")[1].split(","))[0]),V(d[1]),V(d[2])])}catch(e){}return{w3:e,pv:f,wk:o,ie:r,win:i,mac:a}}();T.w3&&((typeof v.readyState!=l&&("complete"===v.readyState||"interactive"===v.readyState)||typeof v.readyState==l&&(v.getElementsByTagName("body")[0]||v.body))&&C(),E||(typeof v.addEventListener!=l&&v.addEventListener("DOMContentLoaded",C,!1),T.ie&&(v.attachEvent(d,(function e(){"complete"==v.readyState&&(v.detachEvent(d,e),C())})),p==top&&function e(){if(!E){try{v.documentElement.doScroll("left")}catch(t){return void setTimeout(e,0)}C()}}()),T.wk&&function e(){E||(/loaded|complete/.test(v.readyState)?C():setTimeout(e,0))}()));function C(){if(!E&&document.getElementsByTagName("body")[0]){try{var e,t=$("span");t.style.display="none",(e=v.getElementsByTagName("body")[0].appendChild(t)).parentNode.removeChild(e),e=null,t=null}catch(e){return}E=!0;for(var n=y.length,i=0;i<n;i++)y[i]()}}function O(e){E?e():y[y.length]=e}function P(){var e=g.length;if(e>0)for(var t=0;t<e;t++){var n=g[t].id,i=g[t].callbackFn,a={success:!1,id:n};if(T.pv[0]>0){var o=j(n);if(o)if(!q(g[t].swfVersion)||T.wk&&T.wk<312)if(g[t].expressInstall&&I()){var r={};r.data=g[t].expressInstall,r.width=o.getAttribute("width")||"0",r.height=o.getAttribute("height")||"0",o.getAttribute("class")&&(r.styleclass=o.getAttribute("class")),o.getAttribute("align")&&(r.align=o.getAttribute("align"));for(var s={},c=o.getElementsByTagName("param"),u=c.length,f=0;f<u;f++)"movie"!=c[f].getAttribute("name").toLowerCase()&&(s[c[f].getAttribute("name")]=c[f].getAttribute("value"));R(r,s,n,i)}else k(o),i&&i(a);else D(n,!0),i&&(a.success=!0,a.ref=A(n),a.id=n,i(a))}else if(D(n,!0),i){var d=A(n);d&&typeof d.SetVariable!=l&&(a.success=!0,a.ref=d,a.id=d.id),i(a)}}}function A(e){var t=null,n=j(e);return n&&"OBJECT"===n.nodeName.toUpperCase()&&(t=typeof n.SetVariable!==l?n:n.getElementsByTagName(s)[0]||n),t}function I(){return!S&&q("6.0.65")&&(T.win||T.mac)&&!(T.wk&&T.wk<312)}function R(n,o,r,s){var c=j(r);if(r=U(r),S=!0,i=s||null,a={success:!1,id:r},c){"OBJECT"==c.nodeName.toUpperCase()?(e=B(c),t=null):(e=c,t=r),n.id=f,(typeof n.width==l||!/%$/.test(n.width)&&V(n.width)<310)&&(n.width="310"),(typeof n.height==l||!/%$/.test(n.height)&&V(n.height)<137)&&(n.height="137");var u=T.ie?"ActiveX":"PlugIn",d="MMredirectURL="+encodeURIComponent(p.location.toString().replace(/&/g,"%26"))+"&MMplayerType="+u+"&MMdoctitle="+encodeURIComponent(v.title.slice(0,47)+" - Flash Player Installation");if(typeof o.flashvars!=l?o.flashvars+="&"+d:o.flashvars=d,T.ie&&4!=c.readyState){var h=$("div");r+="SWFObjectNew",h.setAttribute("id",r),c.parentNode.insertBefore(h,c),c.style.display="none",x(c)}L(n,o,r)}}function k(e){if(T.ie&&4!=e.readyState){e.style.display="none";var t=$("div");e.parentNode.insertBefore(t,e),t.parentNode.replaceChild(B(e),t),x(e)}else e.parentNode.replaceChild(B(e),e)}function B(e){var t=$("div");if(T.win&&T.ie)t.innerHTML=e.innerHTML;else{var n=e.getElementsByTagName(s)[0];if(n){var i=n.childNodes;if(i)for(var a=i.length,o=0;o<a;o++)1==i[o].nodeType&&"PARAM"==i[o].nodeName||8==i[o].nodeType||t.appendChild(i[o].cloneNode(!0))}}return t}function L(e,t,n){var i,a=j(n);if(n=U(n),T.wk&&T.wk<312)return i;if(a){var o,r,c,f=T.ie?$("div"):$(s);for(c in typeof e.id==l&&(e.id=n),t)t.hasOwnProperty(c)&&"movie"!==c.toLowerCase()&&M(f,c,t[c]);for(o in T.ie&&(f=function(e,t){var n=$("div");return n.innerHTML="<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'><param name='movie' value='"+e+"'>"+t+"</object>",n.firstChild}(e.data,f.innerHTML)),e)e.hasOwnProperty(o)&&("styleclass"===(r=o.toLowerCase())?f.setAttribute("class",e[o]):"classid"!==r&&"data"!==r&&f.setAttribute(o,e[o]));T.ie?w[w.length]=e.id:(f.setAttribute("type",u),f.setAttribute("data",e.data)),a.parentNode.replaceChild(f,a),i=f}return i}function M(e,t,n){var i=$("param");i.setAttribute("name",t),i.setAttribute("value",n),e.appendChild(i)}function x(e){var t=j(e);t&&"OBJECT"==t.nodeName.toUpperCase()&&(T.ie?(t.style.display="none",function e(){if(4==t.readyState){for(var n in t)"function"==typeof t[n]&&(t[n]=null);t.parentNode.removeChild(t)}else setTimeout(e,10)}()):t.parentNode.removeChild(t))}function F(e){return e&&e.nodeType&&1===e.nodeType}function U(e){return F(e)?e.id:e}function j(e){if(F(e))return e;var t=null;try{t=v.getElementById(e)}catch(e){}return t}function $(e){return v.createElement(e)}function V(e){return parseInt(e,10)}function q(e){e+="";var t=T.pv,n=e.split(".");return n[0]=V(n[0]),n[1]=V(n[1])||0,n[2]=V(n[2])||0,t[0]>n[0]||t[0]==n[0]&&t[1]>n[1]||t[0]==n[0]&&t[1]==n[1]&&t[2]>=n[2]}function W(e,t,n,i){var a=v.getElementsByTagName("head")[0];if(a){var s="string"==typeof n?n:"screen";if(i&&(o=null,r=null),!o||r!=s){var c=$("style");c.setAttribute("type","text/css"),c.setAttribute("media",s),o=a.appendChild(c),T.ie&&typeof v.styleSheets!=l&&v.styleSheets.length>0&&(o=v.styleSheets[v.styleSheets.length-1]),r=s}o&&(typeof o.addRule!=l?o.addRule(e,t):typeof v.createTextNode!=l&&o.appendChild(v.createTextNode(e+" {"+t+"}")))}}function D(e,t){if(_){var n=t?"visible":"hidden",i=j(e);E&&i?i.style.visibility=n:"string"==typeof e&&W("#"+e,"visibility:"+n)}}function H(e){return null!=/[\\\"<>\.;]/.exec(e)&&typeof encodeURIComponent!=l?encodeURIComponent(e):e}y[0]=function(){m?function(){var e=v.getElementsByTagName("body")[0],t=$(s);t.setAttribute("style","visibility: hidden;"),t.setAttribute("type",u);var n=e.appendChild(t);if(n){var i=0;!function a(){if(typeof n.GetVariable!=l)try{var o=n.GetVariable("$version");o&&(o=o.split(" ")[1].split(","),T.pv=[V(o[0]),V(o[1]),V(o[2])])}catch(e){T.pv=[8,0,0]}else if(i<10)return i++,void setTimeout(a,10);e.removeChild(t),n=null,P()}()}else P()}():P()};T.ie&&window.attachEvent("onunload",(function(){for(var e=b.length,t=0;t<e;t++)b[t][0].detachEvent(b[t][1],b[t][2]);for(var i=w.length,a=0;a<i;a++)x(w[a]);for(var o in T)T[o]=null;for(var r in T=null,n)n[r]=null;n=null}));return{registerObject:function(e,t,n,i){if(T.w3&&e&&t){var a={};a.id=e,a.swfVersion=t,a.expressInstall=n,a.callbackFn=i,g[g.length]=a,D(e,!1)}else i&&i({success:!1,id:e})},getObjectById:function(e){if(T.w3)return A(e)},embedSWF:function(e,t,n,i,a,o,r,c,u,f){var d=U(t),p={success:!1,id:d};T.w3&&!(T.wk&&T.wk<312)&&e&&t&&n&&i&&a?(D(d,!1),O((function(){n+="",i+="";var v={};if(u&&typeof u===s)for(var h in u)v[h]=u[h];v.data=e,v.width=n,v.height=i;var m={};if(c&&typeof c===s)for(var y in c)m[y]=c[y];if(r&&typeof r===s)for(var g in r)if(r.hasOwnProperty(g)){var w=N?encodeURIComponent(g):g,b=N?encodeURIComponent(r[g]):r[g];typeof m.flashvars!=l?m.flashvars+="&"+w+"="+b:m.flashvars=w+"="+b}if(q(a)){var E=L(v,m,t);v.id==d&&D(d,!0),p.success=!0,p.ref=E,p.id=E.id}else{if(o&&I())return v.data=o,void R(v,m,t,f);D(d,!0)}f&&f(p)}))):f&&f(p)},switchOffAutoHideShow:function(){_=!1},enableUriEncoding:function(e){N=typeof e===l||e},ua:T,getFlashPlayerVersion:function(){return{major:T.pv[0],minor:T.pv[1],release:T.pv[2]}},hasFlashPlayerVersion:q,createSWF:function(e,t,n){return T.w3?L(e,t,n):void 0},showExpressInstall:function(e,t,n,i){T.w3&&I()&&R(e,t,n,i)},removeSWF:function(e){T.w3&&x(e)},createCSS:function(e,t,n,i){T.w3&&W(e,t,n,i)},addDomLoadEvent:O,addLoadEvent:function(e){if(typeof p.addEventListener!=l)p.addEventListener("load",e,!1);else if(typeof v.addEventListener!=l)v.addEventListener("load",e,!1);else if(typeof p.attachEvent!=l)!function(e,t,n){e.attachEvent(t,n),b[b.length]=[e,t,n]}(p,"onload",e);else if("function"==typeof p.onload){var t=p.onload;p.onload=function(){t(),e()}}else p.onload=e},getQueryParamValue:function(e){var t=v.location.search||v.location.hash;if(t){if(/\?/.test(t)&&(t=t.split("?")[1]),null==e)return H(t);for(var n=t.split("&"),i=0;i<n.length;i++)if(n[i].substring(0,n[i].indexOf("="))==e)return H(n[i].substring(n[i].indexOf("=")+1))}return""},expressInstallCallback:function(){if(S){var n=j(f);n&&e&&(n.parentNode.replaceChild(e,n),t&&(D(t,!0),T.ie&&(e.style.display="block")),i&&i(a)),S=!1}},version:"2.3"}}(),o=!1,r=!0,l=null,s=null,c="",u=null,f=0,d=!1;function p(){f++>500?i.Emit("enter_fail","flash load fail"):(u=n.getObjectById("ROP_client"))&&u.flash_Init&&r?(d=!0,u.flash_Init(e,1883),""!=l&&null!=l||(l="----"),u.flash_Enter(l,s,c)):setTimeout(p,10)}return window.ROP_OnPublish=function(e,t){i.Emit("publish_data",e,t)},window.ROP_EnterFail=function(e){i.Emit("enter_fail",e)},window.ROP_EnterSuc=function(){for(var e=0;e<a.length;e++)d&&u&&u.flash_Subscribe(a[e].topic,a[e].qos);i.Emit("enter_suc")},window.ROP_SwfReady=function(){r=!0},window.ROP_Offline=function(){i.Emit("offline")},window.ROP_Reconnecting=function(){i.Emit("reconnect")},window.ROP_PageReady=function(){return!0},window.ROP_Losed=function(){i.Emit("losed")},window.ROP_ConnectOld=function(){i.Emit("connectold")},{Enter:function(e,a,r){l=e,s=a,null==a&&(s=e),null!=r&&(c=r),o?d&&u&&u.flash_Enter(l,s,c):(o=!0,function(e){if(null==n.getObjectById("ROP_client")){if(!document.getElementById("rop_context")){var i=document.createElement("div");i.id="rop_context",document.getElementsByTagName("body")[0].appendChild(i)}n.embedSWF(t+"ROPClient.swf","rop_context","0","0","11.0.0","playerProductInstall.swf",{id:"ROP_client"},{AllowScriptAccess:"always",wmode:"Transparent"},{id:"ROP_client",name:"ROP_client"},e)}else e({success:!0})}((function(e){e.success?p():i.Emit("enter_fail","flash_init_fail")})))},Leave:function(){d&&u&&u.flash_Leave()},On:function(e,t){i.On(e,t)},Publish:function(e,t,n,i){d&&u&&u.flash_Publish(e,t,n,i)},Subscribe:function(e,t){if(null==(t=Number(t))&&(t=0),isNaN(t)&&(t=0),t>2&&(t=2),t<0&&(t=0),(e=e.toString())&&0!=e.length){for(var n=0;n<a.length;n++)if(a[n].topic==e)return;a.push({topic:e,qos:t}),d&&u&&u.flash_Subscribe(e,t)}},UnSubscribe:function(e){if((e=e.toString())&&0!=e.length)for(var t=0;t<a.length;t++)if(a[t].topic==e)return a.splice(t,1),void(d&&u&&u.flash_UnSubscribe(e))}}}()}();