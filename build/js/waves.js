!function(t){"use strict";function e(t){return null!==t&&t===t.window}function n(t){return e(t)?t:9===t.nodeType&&t.defaultView}function i(t){var e,i,a={top:0,left:0},r=t&&t.ownerDocument;return e=r.documentElement,"undefined"!=typeof t.getBoundingClientRect&&(a=t.getBoundingClientRect()),i=n(r),{top:a.top+i.pageYOffset-e.clientTop,left:a.left+i.pageXOffset-e.clientLeft}}function a(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e+=n+":"+t[n]+";");return e}var r=r||{},o=document.querySelectorAll.bind(document),s={duration:700,show:function(t){if(2===t.button)return!1;var e=this,n=document.createElement("div");n.className="waves-ripple",e.appendChild(n);var r=i(e),o=t.pageY-r.top,s=t.pageX-r.left,u="scale("+e.clientWidth/100*22+")";"touches"in t&&(o=t.touches[0].pageY-r.top,s=t.touches[0].pageX-r.left),n.setAttribute("data-hold",Date.now()),n.setAttribute("data-scale",u),n.setAttribute("data-x",s),n.setAttribute("data-y",o);var c={top:o+"px",left:s+"px"};n.className=n.className+" waves-notransition",n.setAttribute("style",a(c)),n.className=n.className.replace("waves-notransition",""),c["-webkit-transform"]=u,c["-moz-transform"]=u,c["-ms-transform"]=u,c["-o-transform"]=u,c.transform=u,c.opacity="1",c["-webkit-transition-duration"]="cubic-bezier(0.215, 0.610, 0.355, 1.000)",c["-moz-transition-duration"]="cubic-bezier(0.215, 0.610, 0.355, 1.000)",c["-o-transition-duration"]="cubic-bezier(0.215, 0.610, 0.355, 1.000)",c["transition-duration"]="cubic-bezier(0.215, 0.610, 0.355, 1.000)",c["-webkit-transition-timing-function"]="cubic-bezier(0.215, 0.610, 0.355, 1.000)",c["-moz-transition-timing-function"]="cubic-bezier(0.215, 0.610, 0.355, 1.000)",c["-o-transition-timing-function"]="cubic-bezier(0.215, 0.610, 0.355, 1.000)",c["transition-timing-function"]="cubic-bezier(0.215, 0.610, 0.355, 1.000)",n.setAttribute("style",a(c))},hide:function(){for(var t=this,e=(1.4*t.clientWidth,null),n=t.children.length,i=0;n>i;i++)-1===t.children[i].className.indexOf("waves-ripple")||(e=t.children[i]);if(!e)return!1;var r=e.getAttribute("data-x"),o=e.getAttribute("data-y"),u=e.getAttribute("data-scale"),c=Date.now()-Number(e.getAttribute("data-hold")),d=500-c;0>d&&(d=0),setTimeout(function(){var n={top:o+"px",left:r+"px",opacity:"0","-webkit-transition-duration":s.duration+"ms","-moz-transition-duration":s.duration+"ms","-o-transition-duration":s.duration+"ms","transition-duration":s.duration+"ms","-webkit-transform":u,"-moz-transform":u,"-ms-transform":u,"-o-transform":u,transform:u};e.setAttribute("style",a(n)),setTimeout(function(){try{t.removeChild(e)}catch(n){return!1}},s.duration)},d)},wrapInput:function(t){for(var e=0;e<t.length;e++){var n=t[e];if("input"===n.tagName.toLowerCase()){var i=n.parentNode;if("i"===i.tagName.toLowerCase()&&-1!==i.className.indexOf("waves-effect"))return!1;var a=document.createElement("i");a.className=n.className+" waves-input-wrapper";var r=n.getAttribute("style");r||(r=""),a.setAttribute("style",r),n.className="waves-button-input",n.removeAttribute("style"),i.replaceChild(a,n),a.appendChild(n)}}}};r.displayEffect=function(e){e=e||{},"duration"in e&&(s.duration=e.duration),s.wrapInput(o(".waves-effect")),Array.prototype.forEach.call(o(".waves-effect"),function(e){"ontouchstart"in t&&(e.addEventListener("mouseup",s.hide,!1),e.addEventListener("touchstart",s.show,!1),e.addEventListener("mouseleave",s.hide,!1),e.addEventListener("touchend",s.hide,!1),e.addEventListener("touchcancel",s.hide,!1)),e.addEventListener("mousedown",s.show,!1),e.addEventListener("mouseup",s.hide,!1),e.addEventListener("mouseleave",s.hide,!1)})},t.Waves=r,$(document).ready(function(){r.displayEffect()})}(window);