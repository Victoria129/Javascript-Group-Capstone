(()=>{"use strict";var n={402:(n,e,t)=>{t.d(e,{Z:()=>p});var o=t(81),i=t.n(o),r=t(645),a=t.n(r),s=t(667),c=t.n(s),l=new URL(t(713),t.b),d=a()(i()),m=c()(l);d.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 60px;\n  z-index: 1;\n}\n\n.nav-container {\n  background-color: rgb(21, 21, 20);\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  height: 100%;\n}\n\nnav ul {\n  display: flex;\n  justify-content: space-around;\n  align-items: inherit;\n  list-style: none;\n}\n\nli {\n  list-style: none;\n}\n\nnav ul li {\n  margin-right: 40px;\n}\n\nnav ul li a {\n  background: #fff;\n  padding: 8px;\n  border-radius: 6px;\n  text-decoration: none;\n  color: black;\n}\n\nnav a:hover {\n  transition: 0.3s;\n  background: black;\n  color: #fff;\n}\n\n.logo {\n  width: 100px;\n  height: 40px;\n  border-radius: 50px;\n  background: url("+m+") center center/cover no-repeat;\n}\n\n.main-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  top: 60px;\n  margin: 20px 15px 200px 5px;\n}\n\n.main-container-sup {\n  width: 270px;\n  border: 5px solid rgb(145, 93, 93);\n  margin-left: 10px;\n  margin-bottom: 20px;\n  border-radius: 15px;\n}\n\n.new-comment-form button {\n  width: 70%;\n  align-self: center;\n  cursor: pointer;\n}\n\n.movie-banner {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 10px;\n}\n\n.like-movies {\n  width: 40px;\n  margin-right: 10px;\n  transition: 1s;\n  margin-bottom: 10px;\n}\n\n.like-movies i {\n  font-size: 24px;\n  margin-top: 10px;\n}\n\n.modal-image {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 500px;\n  margin: 70px auto 40px auto;\n}\n\n.movie-banner img {\n  width: 250px;\n  height: 300px;\n  border: 3px solid rgb(121, 94, 94);\n  border-radius: 15px;\n}\n\n.modal-image img {\n  width: 300px;\n  height: 300px;\n  border: 1px solid black;\n  border-radius: 10px;\n}\n\n.movie-banner img:hover {\n  border: 5px solid rgb(227, 30, 30);\n}\n\n.details-info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.details-info h2 {\n  font-size: 24px;\n  font-family: 'Times New Roman', Times, serif;\n  font-weight: 700;\n  margin: 10px 10px;\n}\n\n.like-doc {\n  display: flex;\n  justify-content: flex-end;\n  margin-right: 20px;\n  margin-top: -10px;\n  margin-bottom: 5px;\n  font-size: 16px;\n  color: rgb(255, 42, 0);\n}\n\n.fa-solid {\n  color: red;\n}\n\n.comment-rese {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 10px 20px;\n}\n\n.comment-rese button {\n  background: #fff;\n  border: 1px solid blue;\n  color: blue;\n  padding: 8px 12px;\n  font-size: 16px;\n  border-radius: 12px;\n  transition: 0.5s;\n}\n\n.add-comment button {\n  background: #fff;\n  padding: 8px 12px;\n  border: 1px solid blue;\n  width: auto;\n  margin: 5px 0 40px 0;\n  font-size: 18px;\n  border-radius: 15px;\n}\n\n.comment-rese button:hover {\n  background: blue;\n  color: #fff;\n}\n\nfooter {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  background: rgb(40, 38, 38);\n}\n\n.footer p {\n  transition: 1s;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 16px;\n  color: #fff;\n}\n\n.footer p:hover {\n  font-size: 24px;\n}\n\n.modal-wraper {\n  display: none;\n  width: 100%;\n}\n\n.popup-top-section {\n  display: block;\n}\n\n.mani-Pop-up {\n  position: relative;\n  width: 95%;\n  border: 5px solid rgb(34, 30, 30);\n  margin: 20px auto;\n  border-radius: 15px;\n  display: grid;\n  grid-template-rows: auto;\n  background-color: rgb(242, 231, 231);\n}\n\n.mclose-btn {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  top: 30px;\n  right: 30px;\n  border: 1px solid black;\n  font-size: 30px;\n  border-radius: 8px;\n}\n\n.mclose-btn:hover {\n  background-color: black;\n  color: #fff;\n}\n\n.comment-li {\n  margin: 0.6rem 0;\n}\n\n.summary {\n  font-size: 14px;\n  line-height: 1.2;\n  font-family: 'Times New Roman', Times, serif;\n}\n\n.comm-node {\n  margin: 5px auto;\n  font-size: 16px;\n  color: rgb(201, 95, 95);\n}\n\n.comment-display {\n  width: auto;\n  background-color: white;\n  font-size: 14px;\n  margin: 0 auto;\n  border: black solid 1px;\n}\n\n.comment-display li {\n  margin: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.movie-attributes {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.comment-display li:nth-child(even) {\n  background-color: rgb(232, 218, 218);\n}\n\n.movie-attributes span {\n  font-size: 16px;\n  font-weight: 800;\n  color: rgb(237, 25, 25);\n}\n\n.modal-head {\n  padding: 20px;\n  margin: 30px auto;\n  font-size: 24px;\n  font-family: 'Times New Roman', Times, serif;\n  font-weight: 500;\n  line-height: 1.5;\n}\n\n.comment-li span {\n  display: flex;\n  font-size: 1.1rem;\n  margin-left: 1.5rem;\n}\n\n#comments-section {\n  width: 100%;\n  display: block;\n  background: #fff;\n}\n\n.comment-display ul:nth-child(even) {\n  border: 1px solid red;\n  background: rgb(142, 142, 131);\n}\n\n.add-comment {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.add-comment h2 {\n  margin: 10px;\n  text-align: center;\n  font-weight: 500;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.new-comment-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  width: 50%;\n}\n\n.new-comment-form textarea {\n  resize: vertical;\n  border-radius: 15px;\n  padding: 12px;\n}\n\n.add-comment input {\n  padding: 10px 15px;\n  border-radius: 15px;\n  font-size: 16px;\n}\n\n.comments-form {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.add-comment button:hover {\n  background-color: blue;\n  color: #fff;\n}\n\n.hide {\n  opacity: 0.3;\n}",""]);const p=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,i,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&a[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},a=[],s=0;s<n.length;s++){var c=n[s],l=o.base?c[0]+o.base:c[0],d=r[l]||0,m="".concat(l," ").concat(d);r[l]=d+1;var p=t(m),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var f=i(u,o);o.byIndex=s,e.splice(s,0,{identifier:m,updater:f,references:1})}a.push(m)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var r=o(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var s=t(r[a]);e[s].references--}for(var c=o(n,i),l=0;l<r.length;l++){var d=t(r[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},713:(n,e,t)=>{n.exports=t.p+"774e8c1632ac9433608b.png"}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),i=t.n(o),r=t(569),a=t.n(r),s=t(565),c=t.n(s),l=t(216),d=t.n(l),m=t(589),p=t.n(m),u=t(402),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=d(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals,t(713);const g="https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/4dyq58hiPupb0utce3OK/comments",h=async n=>{const e=document.createElement("ul");e.id="comments-section",e.innerHTML="";const t=await(async n=>{const e=await fetch(`${g}?item_id=${n}`),t=await e.json();return e.ok?t:null})(n);if(null===t){const n=document.createElement("li");n.className="no_comment_li",n.textContent="Be the first to comment",e.append(n)}else t.forEach((n=>{e.append((({creation_date:n,comment:e,username:t})=>{const o=n,i=document.createElement("li");return i.className="comment-li",i.innerHTML=`\n   <span>${t}<span><span>${e}<span><span>${o}<span>\n  `,i})(n))}));return e},v=()=>document.querySelectorAll(".comment-li").length,x=document.querySelector(".for-close-poup"),b=async n=>{const e=document.querySelector(".modal-wraper");e.innerHTML="";const t=await(async n=>await fetch(`https://api.tvmaze.com/shows/${n}`).then((n=>n.json())))(n);e.append((n=>{const e=document.createElement("div");return e.className="movie-pop-up",e.innerHTML=`\n  <div class="mani-Pop-up">\n  <div class="mclose-btn">\n  <span class="close-span">X</span>  \n  </div>\n\n  \n  <div class="popup-top-section">\n  <div class= 'modal-image'>\n  <img\n  src="${n.image.medium}";\n  alt="cover image"\n  id="modal-cover"\n  />\n  </div>\n  <div class= "modal-head">\n      <div class = "summary">${n.summary}</div>\n  </div>\n  </div>\n\n  \n  <div class = "movie-attributes">\n      <ul>\n      <li><span>Name:  </span>${n.name}</li>\n      <li><span>Language:  </span>${n.language}</li>\n      </ul>\n      <ul>\n      <li><span>Genre:  </span>${n.genres[0]}</li>\n      <li><span>Premiered:  </span>${n.premiered}</li>\n      </ul>\n  </div>\n  <div class="comm-node">\n  <h2>Comments<span class="comment-count"></span></h2>\n  </div>\n  <div class= "comment-display">\n  </div>\n  \n  <div class="add-comment">\n  <h2>Add Comment</h2>\n\n  <div class="comments-form">\n  <form class="new-comment-form">\n  <input type="text" id="user" placeholder="name" required>\n  <textarea cols="30" rows="10" placeholder="comment" id="comment" required></textarea>\n  <button type="submit" class="submit-btn" id="${n.id}">Add Comment</button>\n  </form>\n  </div>\n  </div>\n  </div>\n`,e})(t));const o=document.querySelector(".comment-display"),i=document.querySelector(".comment-count"),r=await h(n);o.append(r);const a=v();i.textContent=`(${a})`,e.style.display="flex",(async()=>{const n=document.querySelector(".new-comment-form"),e=document.querySelector(".submit-btn");n.addEventListener("submit",(async t=>{t.preventDefault();const{user:o}=n.elements,{comment:i}=n.elements;await(async(n,e,t)=>{const o={item_id:n,username:e,comment:t};return await fetch(`${g}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})})(e.id,o.value,i.value);const r=document.querySelector(".comment-display"),a=document.querySelector(".comment-count"),s=await h(e.id);r.innerHTML="",r.append(s);const c=v();a.textContent=`(${c})`,n.reset()}))})(),document.querySelector(".mclose-btn").addEventListener("click",(()=>{document.querySelector(".modal-wraper").style.display="none",x.classList.remove("hide")}))},y=()=>{document.querySelectorAll(".commentBtn").forEach((n=>n.addEventListener("click",(e=>{e.preventDefault(),b(n.id),x.classList.add("hide")}))))},w=async n=>{const e={item_id:n},t=await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LyNZhUk1YhHRRwENddml/likes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});await t},k=async n=>{const e=await(async()=>{const n=await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LyNZhUk1YhHRRwENddml/likes",{method:"GET"});return await n.json()})();let t=0;return e.forEach((e=>{Number(e.item_id)===Number(n)&&(t=e.likes)})),t};(async()=>{const n=await fetch(`https://api.tvmaze.com/search/shows?q=${Math.floor(10*Math.random())}`),e=await n.json();document.querySelector("#length-of-move").insertAdjacentHTML("afterend",`(${e.length})`);const t=document.querySelector(".main-container");for(let n=0;n<e.length;n+=1){let{name:o}=e[n].show;const i=e[n].show.id;o.length>15&&(o=`${o.substring(0,15)}...`);const r=JSON.stringify(e[n].show.image);let a="https://static.tvmaze.com/uploads/images/medium_portrait/206/515082.jpg";"null"!==r&&(a=e[n].show.image.medium);let s=0;k(i).then((n=>{s=n,t.innerHTML+=`\n    <div class="main-container-sup">\n        <div class="movie-banner">\n            <img class="movie-banner-img"\n            src="${a}"\n            alt="${o} Banner" />\n        </div>\n        <div class="details-info">\n            <div class="title-info">\n                <h2>${o}</h2>\n            </div>\n            <div class="like-movies">\n            <i  id="${i}" class="liked_btn fa-regular fa-heart"></i>\n            </div>\n        </div>\n        <div class="like-doc">\n            <p><span id="_${i}">${s}</span>  likes</p>\n        </div>\n        <div class="comment-rese">\n            <button class="commentBtn" id="${i}" data="_${i}">comment</button>\n            <button id="reservation" data="${i}">Reservation</button>\n        </div>\n    </div>\n`,document.querySelectorAll(".liked_btn").forEach((n=>{n.addEventListener("click",(e=>{if(n.classList.toggle("fa-regular"),n.classList.toggle("fa-solid"),n.classList.contains("fa-solid")){const n=document.getElementById(`_${e.target.id}`);let t=Number(n.innerHTML);t+=1,n.innerHTML=t,w(e.target.id)}else{const n=document.getElementById(`_${e.target.id}`);let t=Number(n.innerHTML);t-=1,n.innerHTML=t}}))}))})).then(y)}})()})()})();