(window.webpackJsonp=window.webpackJsonp||[]).push([[38,9,28],{653:function(t,e,n){var content=n(656);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("6333d4fe",content,!0,{sourceMap:!1})},654:function(t,e,n){"use strict";n.r(e);var r={name:"LoadingSpinner"},o=(n(655),n(86)),component=Object(o.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{"margin-top":"10px"}},[t("div",{staticClass:"lds-ring"},[t("div"),t("div"),t("div"),t("div")])])}],!1,null,"6f49ae7c",null);e.default=component.exports},655:function(t,e,n){"use strict";n(653)},656:function(t,e,n){var r=n(26)(!1);r.push([t.i,".lds-ring[data-v-6f49ae7c]{display:inline-block;position:relative;width:80px;height:80px}.lds-ring div[data-v-6f49ae7c]{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:5px;border-radius:50%;-webkit-animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;border:5px solid transparent;border-top-color:#2196f3}.lds-ring div[data-v-6f49ae7c]:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring div[data-v-6f49ae7c]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring div[data-v-6f49ae7c]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]),t.exports=r},671:function(t,e,n){var content=n(704);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("00c8dd2e",content,!0,{sourceMap:!1})},699:function(t,e,n){"use strict";n.r(e);var r=n(112),o=n(701),l=n(121),c=n(238),d=(n(251),n(55),n(35),n(66),n(8),n(17),n(654)),h=n(729),f=n.n(h),m=n(730),v=n.n(m),x=n(669),y=n.n(x),j=n(670),w=n.n(j),_=n(731),k=n.n(_),O=(n(732),n(733),n(734)),C=n.n(O),S=(n(735),n(736),n(737),n(738)),L=n.n(S),M=(n(739),n(5)),D=n.n(M),B={name:"BlogDetails",layout:"default",components:{Spinner:d.default},data:function(){return{pageLoaded:!1,body:{}}},props:{blog:{type:Object,required:!0},prev:{type:Object,default:null},next:{type:Object,default:null}},computed:{tags:function(){return this.blog.tags?this.blog.tags.slice(0).sort():[]}},methods:{replaceUrls:function(t){return t?t.replace(/href="([^\'\"]+)/g,(function(t){return' target="_blank" '+t})):""},getMinTextLength:function(t,e,n){var r=t&&t.title?t.title.length:0,o=e&&e.title?e.title.length:0,l=Math.min(r,o),c=Math.max(r,o);return c<n?l||c:l>=n?n:l||n},toDateLocal:function(t){return t?D()(t).format("YYYY MMM DD"):""}},mounted:function(){this.pageLoaded=!0,f.a.registerLanguage("javascript",C.a),f.a.registerLanguage("xml",L.a),f.a.registerLanguage("python",k.a),f.a.registerLanguage("java",y.a),f.a.registerLanguage("cpp",w.a),f.a.registerLanguage("plaintext",v.a);var t=document.createElement("html"),e=this.replaceUrls(this.blog.body);t.innerHTML=e,t.querySelectorAll("pre code").forEach((function(t){f.a.highlightElement(t)}));var n=document.createElement("div");n.appendChild(t),this.body=n.innerHTML}},P=(n(703),n(86)),component=Object(P.a)(B,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"blog-container d-flex justify-center align-center py-5 px-2",staticStyle:{"max-width":"min(100%,800px)"}},[e(r.a,{staticClass:"blog pa-5",staticStyle:{width:"calc(100vw-30px)","max-width":"min(100%,800px)"}},[e("div",{staticClass:"mb-5"},[e("div",{staticClass:"text-xs uppercase text-gray-600 mb-1 d-flex flex-row flex-wrap"},t._l(t.tags,(function(n){return e(o.a,{key:n,staticClass:"my-1 ml-0 mr-2"},[t._v("\n          "+t._s(n.toUpperCase())+"\n        ")])})),1),t._v(" "),t.blog.lead?e("h2",{staticClass:"font-sans text-gray-700 font-light"},[t._v("\n        "+t._s(t.blog.lead)+"\n      ")]):t._e(),t._v(" "),e("div",{staticClass:"text-gray-600 text-xs font-light"},[t._v("\n        "+t._s(t.toDateLocal(t.blog.created))+"\n      ")])]),t._v(" "),t.blog.imageUrl?e("figure",{staticClass:"mb-5"},[e(c.a,{staticStyle:{height:"350px",width:"100%"},attrs:{contain:"",src:t.blog.imageUrl,alt:t.blog.imageAlt||t.blog.title}}),t._v(" "),t.blog.imageCaption?e("figcaption",{staticClass:"text-center text-gray-600 text-sm my-2",domProps:{innerHTML:t._s(t.blog.imageCaption)}}):t._e()],1):t._e(),t._v(" "),e("div",{staticClass:"content text-body1",staticStyle:{"word-break":"break-word"},domProps:{innerHTML:t._s(t.body)}}),t._v(" "),e("div",{staticClass:"clearfix mt-10 text-xs font-semibold uppercase"},[t.prev&&t.prev.title?e("nuxt-link",{staticClass:"float-left no-underline col-6 break-normal pr-5",attrs:{to:{name:"blog-id",params:{id:t.prev.id}}}},[e(l.a,{attrs:{color:"primary"}},[t._v("mdi-chevron-left")]),t._v(" "+t._s(t.prev.title.length>t.getMinTextLength(t.prev,t.next,30)?t.prev.title.substring(0,t.getMinTextLength(t.prev,t.next,30))+"…":t.prev.title)+"\n      ")],1):t._e(),t._v(" "),t.next&&t.next.title?e("nuxt-link",{staticClass:"float-right no-underline col-6 break-normal pl-5",staticStyle:{"text-align":"right"},attrs:{to:{name:"blog-id",params:{id:t.next.id}}}},[t._v("\n        "+t._s(t.next.title.length>t.getMinTextLength(t.prev,t.next,30)?t.next.title.substring(0,t.getMinTextLength(t.prev,t.next,30))+"…":t.next.title)+" "),e(l.a,{attrs:{color:"primary"}},[t._v("mdi-chevron-right")])],1):t._e()],1)])],1)}),[],!1,null,null,null);e.default=component.exports},703:function(t,e,n){"use strict";n(671)},704:function(t,e,n){var r=n(26)(!1);r.push([t.i,"body{--text-opacity:1;color:#2d3748;color:rgba(45,55,72,var(--text-opacity));font-size:1rem;font-family:Roboto;font-weight:500;line-height:1.5}h1{font-size:1.6em;padding-top:13px;padding-bottom:18px;line-height:1.3em}h2{font-size:1.3em;padding-top:11px;padding-bottom:13px;line-height:1.2em}h3{font-size:1.2em;padding-top:8px;padding-bottom:11px;line-height:1.1em}code,kbd,pre,samp{font-family:Inconsolata,monospace;font-size:1rem;border-radius:5px!important;color:#fff;background:#282b2e}pre{margin-bottom:16px}.hljs{display:block;overflow-x:auto;padding:.5em;color:#abb2bf;background:#282c34}.hljs-comment,.hljs-quote{color:#5c6370;font-style:italic}.hljs-doctag,.hljs-formula,.hljs-keyword{color:#c678dd}.hljs-deletion,.hljs-name,.hljs-section,.hljs-selector-tag,.hljs-subst{color:#e06c75}.hljs-literal{color:#56b6c2}.hljs-addition,.hljs-attribute,.hljs-meta-string,.hljs-regexp,.hljs-string{color:#98c379}.hljs-built_in,.hljs-class .hljs-title{color:#e6c07b}.hljs-attr,.hljs-number,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-pseudo,.hljs-template-variable,.hljs-type,.hljs-variable{color:#d19a66}.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-symbol,.hljs-title{color:#61aeee}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.hljs-link{text-decoration:underline}.content table{border-collapse:collapse;table-layout:fixed;width:100%;margin:0;overflow:hidden}.content table th{font-weight:700;text-align:left}.content table td,.content table th{min-width:1em;border:2px solid grey;padding:3px 5px;vertical-align:top;box-sizing:border-box;position:relative}.content img{-o-object-fit:contain;object-fit:contain;max-width:100%;max-height:350px;display:block;margin-left:auto;margin-right:auto}",""]),t.exports=r},844:function(t,e,n){"use strict";n.r(e);n(55),n(39),n(70),n(35),n(79),n(20),n(19),n(23),n(17),n(24);var r=n(3),o=n(22),l=(n(65),n(8),n(44),n(47),n(16),n(75),n(654));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function h(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var m={name:"BlogPage",components:{BlogDetails:n(699).default,Spinner:l.default},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$fire.firestore,e.prev=1,e.next=4,n.collection("blogs").doc(t.$route.params.id).get();case 4:if((r=e.sent).exists){e.next=8;break}return error({statusCode:404,message:"Blog not found"}),e.abrupt("return");case 8:return o=n.collection("blogs").where("published","==",!0).orderBy("created","desc").limit(1).startAfter(r).get(),l=n.collection("blogs").where("published","==",!0).orderBy("created","asc").limit(1).startAfter(r).get(),e.next=12,Promise.all([o,l]).then((function(t){var e,n=[],r=h(t);try{for(r.s();!(e=r.n()).done;){var o=e.value;if(o.empty)n.push(null);else{var l=o.docs[0];n.push({id:l.id,title:l.get("title")})}}}catch(t){r.e(t)}finally{r.f()}return n}));case 12:c=e.sent,t.blog=d({id:r.id},r.data()),t.prev=c[0],t.next=c[1],t.isBlog=!0,e.next=22;break;case 18:e.prev=18,e.t0=e.catch(1),console.error(e.t0),error({statusCode:404,message:"Blog not found"});case 22:case"end":return e.stop()}}),e,null,[[1,18]])})))()},data:function(){return{isBlog:!1,blog:{},prev:{},next:{}}},head:function(){if(this.blog.id){var t="https://arsenjp.github.io/blog/".concat(this.blog.id),e=new Date(1e3*parseInt(this.blog.created)),n=new Date(1e3*parseInt(this.blog.changed)),r={"@type":"Article",datePublished:e.toISOString(),dateModified:n.toISOString(),headline:this.blog.title,image:this.blog.imageUrl},head={title:this.blog.title,link:[{rel:"canonical",href:t}],script:[{type:"application/ld+json",json:r}],meta:[{hid:"og:url",name:"og:url",property:"og:url",content:t},{hid:"og:title",name:"og:title",property:"og:title",content:"".concat(this.blog.title," - Don Lalicon - Codesmith")}]};return this.blog.description&&head.meta.push({hid:"description",name:"description",content:this.blog.description},{hid:"og:description",name:"og:description",property:"og:description",content:this.blog.description}),this.blog.imageUrl&&head.meta.push({hid:"og:image",name:"og:image",property:"og:image",content:this.blog.imageUrl}),head}},validate:function(t){return void 0!==t.params.id}},v=n(86),component=Object(v.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex justify-center align-center flex-column",staticStyle:{width:"100%"}},[t.isBlog?t._e():e("Spinner",{attrs:{color:"blue"}}),t._v(" "),t.isBlog?e("BlogDetails",{attrs:{blog:t.blog,prev:t.prev,next:t.next}}):t._e()],1)}),[],!1,null,"1cb093fe",null);e.default=component.exports;installComponents(component,{BlogDetails:n(699).default})}}]);