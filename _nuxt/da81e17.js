(window.webpackJsonp=window.webpackJsonp||[]).push([[43,10,33],{653:function(t,e,n){var content=n(656);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("6333d4fe",content,!0,{sourceMap:!1})},654:function(t,e,n){"use strict";n.r(e);var r={name:"LoadingSpinner"},o=(n(655),n(86)),component=Object(o.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{"margin-top":"10px"}},[t("div",{staticClass:"lds-ring"},[t("div"),t("div"),t("div"),t("div")])])}],!1,null,"6f49ae7c",null);e.default=component.exports},655:function(t,e,n){"use strict";n(653)},656:function(t,e,n){var r=n(26)(!1);r.push([t.i,".lds-ring[data-v-6f49ae7c]{display:inline-block;position:relative;width:80px;height:80px}.lds-ring div[data-v-6f49ae7c]{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:5px;border-radius:50%;-webkit-animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;border:5px solid transparent;border-top-color:#2196f3}.lds-ring div[data-v-6f49ae7c]:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring div[data-v-6f49ae7c]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring div[data-v-6f49ae7c]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]),t.exports=r},669:function(t,e,n){var content=n(712);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("3423deba",content,!0,{sourceMap:!1})},691:function(t,e,n){"use strict";n.r(e);var r=n(742),o=n(121),l=n(238),c=(n(250),n(55),n(35),n(66),n(8),n(16),n(654)),d=n(700),f=n.n(d),m=(n(701),n(664),n(665),n(702),n(703),n(704),n(705),n(706),n(707),n(708),n(709),n(710),n(5)),x=n.n(m),h={name:"BlogDetails",layout:"default",components:{Spinner:c.default},data:function(){return{pageLoaded:!1,body:{}}},props:{blog:{type:Object,required:!0},prev:{type:Object,default:null},next:{type:Object,default:null}},computed:{tags:function(){return this.blog.tags?this.blog.tags.slice(0).sort():[]}},methods:{replaceUrls:function(t){return t?t.replace(/href="([^\'\"]+)/g,(function(t){return' target="_blank" '+t})):""},getMinTextLength:function(t,e,n){var r=t&&t.title?t.title.length:0,o=e&&e.title?e.title.length:0,l=Math.min(r,o),c=Math.max(r,o);return c<n?l||c:l>=n?n:l||n},toDateLocal:function(t){return t?x()(t).format("YYYY MMM DD"):""}},mounted:function(){this.pageLoaded=!0;var t=document.createElement("html"),e=this.replaceUrls(this.blog.body);t.innerHTML=e,t.querySelectorAll("pre code").forEach((function(t){f.a.highlightElement(t)}));var n=document.createElement("div");n.appendChild(t),this.body=n.innerHTML}},v=(n(711),n(86)),component=Object(v.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"blog-container d-flex justify-center align-center py-5 px-2",staticStyle:{"max-width":"min(100%,800px)"}},[e("div",{staticClass:"blog pa-5",staticStyle:{width:"calc(100vw-30px)","max-width":"min(100%,800px)"}},[e("div",{staticClass:"mb-5"},[e("div",{staticClass:"text-xs uppercase text-gray-600 mb-1 d-flex flex-row flex-wrap"},t._l(t.tags,(function(n){return e(r.a,{key:n,staticClass:"my-1 ml-0 mr-2"},[t._v("\n          "+t._s(n.toUpperCase())+"\n        ")])})),1),t._v(" "),t.blog.title?e("h1",{staticClass:"font-sans text-gray-700 font-light"},[t._v("\n        "+t._s(t.blog.title)+"\n      ")]):t._e(),t._v(" "),e("div",{staticClass:"text-gray-600 text-xs font-light"},[t._v("\n        "+t._s(t.toDateLocal(t.blog.created))+"\n      ")])]),t._v(" "),t.blog.imageUrl?e("figure",{staticClass:"mb-5"},[e(l.a,{staticStyle:{height:"350px",width:"100%"},attrs:{contain:"",src:t.blog.imageUrl,alt:t.blog.imageAlt||t.blog.title}}),t._v(" "),t.blog.imageCaption?e("figcaption",{staticClass:"text-center text-gray-600 text-sm my-2",domProps:{innerHTML:t._s(t.blog.imageCaption)}}):t._e()],1):t._e(),t._v(" "),e("div",{staticClass:"content text-body1",staticStyle:{"word-break":"break-word"},domProps:{innerHTML:t._s(t.body)}}),t._v(" "),e("div",{staticClass:"clearfix mt-10 text-xs font-semibold uppercase"},[t.prev&&t.prev.title?e("nuxt-link",{staticClass:"float-left no-underline col-6 break-normal pr-5",attrs:{to:{name:"blog-id",params:{id:t.prev.id}}}},[e(o.a,{attrs:{color:"primary"}},[t._v("mdi-chevron-left")]),t._v(" "+t._s(t.prev.title.length>t.getMinTextLength(t.prev,t.next,30)?t.prev.title.substring(0,t.getMinTextLength(t.prev,t.next,30))+"…":t.prev.title)+"\n      ")],1):t._e(),t._v(" "),t.next&&t.next.title?e("nuxt-link",{staticClass:"float-right no-underline col-6 break-normal pl-5",staticStyle:{"text-align":"right"},attrs:{to:{name:"blog-id",params:{id:t.next.id}}}},[t._v("\n        "+t._s(t.next.title.length>t.getMinTextLength(t.prev,t.next,30)?t.next.title.substring(0,t.getMinTextLength(t.prev,t.next,30))+"…":t.next.title)+" "),e(o.a,{attrs:{color:"primary"}},[t._v("mdi-chevron-right")])],1):t._e()],1)])])}),[],!1,null,null,null);e.default=component.exports},711:function(t,e,n){"use strict";n(669)},712:function(t,e,n){var r=n(26)(!1);r.push([t.i,"body{--text-opacity:1;color:#2d3748;color:rgba(45,55,72,var(--text-opacity));font-size:1rem;font-family:Roboto;font-weight:500;line-height:1.5}h1{font-size:1.6em;padding-top:13px;padding-bottom:18px;line-height:1.3em}h2{font-size:1.3em;padding-top:11px;padding-bottom:13px;line-height:1.2em}h3{font-size:1.2em;padding-top:8px;padding-bottom:11px;line-height:1.1em}code,kbd,pre,samp{font-family:Inconsolata,monospace;font-size:1rem;border-radius:5px!important;color:#000;background-color:#fff!important}pre{margin-bottom:16px;border:1px solid #000}blockquote{border-left:.25em solid #dfe2e5;color:#6a737d;padding-left:1em;margin:20px 0!important}.content table{border-collapse:collapse;table-layout:fixed;width:100%;margin:0;overflow:hidden}.content table th{font-weight:700;text-align:left}.content table td,.content table th{min-width:1em;border:2px solid grey;padding:3px 5px;vertical-align:top;box-sizing:border-box;position:relative}.content img{-o-object-fit:contain;object-fit:contain;max-width:100%;max-height:350px;display:block;margin-left:auto;margin-right:auto}",""]),t.exports=r},885:function(t,e,n){"use strict";n.r(e);n(20),n(17),n(19),n(8),n(23),n(16),n(24);var r=n(3),o=n(22);n(65);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"BlogPreviewPage",middleware:"auth",components:{BlogDetails:n(691).default},data:function(){return{blog:null}},validate:function(t){return void 0!==t.params.id},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$fire.firestore,e.prev=1,e.next=4,n.collection("blogs").doc(t.$route.params.id).get();case 4:if((r=e.sent).exists){e.next=8;break}return t.$nuxt.error({statusCode:404,message:"Blog not found"}),e.abrupt("return");case 8:t.blog=c({id:r.id},r.data()),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0),t.$nuxt.error({statusCode:404,message:"Blog not found"});case 15:case"end":return e.stop()}}),e,null,[[1,11]])})))()}},f=n(86),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return t.blog?e("BlogDetails",{attrs:{blog:t.blog}}):t._e()}),[],!1,null,"2dc57c2e",null);e.default=component.exports;installComponents(component,{BlogDetails:n(691).default})}}]);