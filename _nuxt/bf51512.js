(window.webpackJsonp=window.webpackJsonp||[]).push([[61,12,14,15,33],{653:function(t,e,n){var content=n(656);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("6333d4fe",content,!0,{sourceMap:!1})},654:function(t,e,n){"use strict";n.r(e);var r={name:"LoadingSpinner"},o=(n(655),n(86)),component=Object(o.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{"margin-top":"10px"}},[t("div",{staticClass:"lds-ring"},[t("div"),t("div"),t("div"),t("div")])])}],!1,null,"6f49ae7c",null);e.default=component.exports},655:function(t,e,n){"use strict";n(653)},656:function(t,e,n){var r=n(26)(!1);r.push([t.i,".lds-ring[data-v-6f49ae7c]{display:inline-block;position:relative;width:80px;height:80px}.lds-ring div[data-v-6f49ae7c]{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:5px;border-radius:50%;-webkit-animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;border:5px solid transparent;border-top-color:#2196f3}.lds-ring div[data-v-6f49ae7c]:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring div[data-v-6f49ae7c]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring div[data-v-6f49ae7c]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]),t.exports=r},693:function(t,e,n){var content=n(724);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("4ae1db0f",content,!0,{sourceMap:!1})},713:function(t,e,n){"use strict";n.r(e);var r=n(742),o=n(121),l=n(238),c=(n(250),n(55),n(35),n(66),n(8),n(16),n(654)),d=n(699),f=n.n(d),h=n(700),m=n.n(h),v=n(664),x=n.n(v),y=n(665),j=n.n(y),w=n(701),_=n.n(w),k=n(702),C=n.n(k),O=(n(703),n(704)),L=n.n(O),S=(n(705),n(706),n(707),n(708)),D=n.n(S),P=(n(709),n(5)),M=n.n(P),T={name:"BlogDetails",layout:"default",components:{Spinner:c.default},data:function(){return{pageLoaded:!1,body:{}}},props:{blog:{type:Object,required:!0},prev:{type:Object,default:null},next:{type:Object,default:null}},computed:{tags:function(){return this.blog.tags?this.blog.tags.slice(0).sort():[]}},methods:{replaceUrls:function(t){return t?t.replace(/href="([^\'\"]+)/g,(function(t){return' target="_blank" '+t})):""},getMinTextLength:function(t,e,n){var r=t&&t.title?t.title.length:0,o=e&&e.title?e.title.length:0,l=Math.min(r,o),c=Math.max(r,o);return c<n?l||c:l>=n?n:l||n},toDateLocal:function(t){return t?M()(t).format("YYYY MMM DD"):""}},mounted:function(){this.pageLoaded=!0,f.a.registerLanguage("javascript",L.a),f.a.registerLanguage("xml",D.a),f.a.registerLanguage("python",_.a),f.a.registerLanguage("java",x.a),f.a.registerLanguage("cpp",j.a),f.a.registerLanguage("bash",C.a),f.a.registerLanguage("plaintext",m.a);var t=document.createElement("html"),e=this.replaceUrls(this.blog.body);t.innerHTML=e,t.querySelectorAll("pre code").forEach((function(t){f.a.highlightElement(t)}));var n=document.createElement("div");n.appendChild(t),this.body=n.innerHTML}},z=(n(723),n(86)),component=Object(z.a)(T,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"blog-container d-flex justify-center align-center py-5 px-2"},[e("div",{staticClass:"blog pa-0"},[e("div",{staticClass:"mb-5"},[e("div",{staticClass:"text-xs uppercase text-gray-600 mb-1 d-flex flex-row flex-wrap"},t._l(t.tags,(function(n){return e(r.a,{key:n,staticClass:"my-1 ml-0 mr-2"},[t._v("\n          "+t._s(n.toUpperCase())+"\n        ")])})),1),t._v(" "),t.blog.title?e("h1",{staticClass:"font-sans text-gray-700 font-light"},[t._v("\n        "+t._s(t.blog.title)+"\n      ")]):t._e(),t._v(" "),e("div",{staticClass:"text-gray-600 text-xs font-light"},[t._v("\n        "+t._s(t.toDateLocal(t.blog.created))+"\n      ")])]),t._v(" "),t.blog.imageUrl?e("figure",{staticClass:"mb-5"},[e(l.a,{staticStyle:{height:"350px",width:"100%"},attrs:{contain:"",src:t.blog.imageUrl,alt:t.blog.imageAlt||t.blog.title}}),t._v(" "),t.blog.imageCaption?e("figcaption",{staticClass:"text-center text-gray-600 text-sm my-2",domProps:{innerHTML:t._s(t.blog.imageCaption)}}):t._e()],1):t._e(),t._v(" "),e("div",{staticClass:"content text-body1",staticStyle:{"word-break":"break-word"},domProps:{innerHTML:t._s(t.body)}}),t._v(" "),e("div",{staticClass:"clearfix mt-10 text-xs font-semibold uppercase"},[t.prev&&t.prev.title?e("nuxt-link",{staticClass:"float-left no-underline col-6 break-normal pr-5",attrs:{to:{name:"blog-id",params:{id:t.prev.id}}}},[e(o.a,{attrs:{color:"primary"}},[t._v("mdi-chevron-left")]),t._v(" "+t._s(t.prev.title.length>t.getMinTextLength(t.prev,t.next,30)?t.prev.title.substring(0,t.getMinTextLength(t.prev,t.next,30))+"…":t.prev.title)+"\n      ")],1):t._e(),t._v(" "),t.next&&t.next.title?e("nuxt-link",{staticClass:"float-right no-underline col-6 break-normal pl-5",staticStyle:{"text-align":"right"},attrs:{to:{name:"blog-id",params:{id:t.next.id}}}},[t._v("\n        "+t._s(t.next.title.length>t.getMinTextLength(t.prev,t.next,30)?t.next.title.substring(0,t.getMinTextLength(t.prev,t.next,30))+"…":t.next.title)+" "),e(o.a,{attrs:{color:"primary"}},[t._v("mdi-chevron-right")])],1):t._e()],1)])])}),[],!1,null,null,null);e.default=component.exports},723:function(t,e,n){"use strict";n(693)},724:function(t,e,n){var r=n(26)(!1);r.push([t.i,"body{--text-opacity:1;color:#2d3748;color:rgba(45,55,72,var(--text-opacity));font-size:1rem;font-family:Roboto;font-weight:500;line-height:1.5}h1{font-size:1.6em;padding-top:13px;padding-bottom:18px;line-height:1.3em}h2{font-size:1.3em;padding-top:11px;padding-bottom:13px;line-height:1.2em}h3{font-size:1.2em;padding-top:8px;padding-bottom:11px;line-height:1.1em}code,kbd,pre,samp{font-family:Inconsolata,monospace;font-size:1rem;border-radius:5px!important;color:#000;background-color:#fff!important}pre{margin-bottom:16px}.hljs{display:block;overflow-x:auto;padding:.5em;color:#383a42;background:#fafafa}.hljs-comment,.hljs-quote{color:#a0a1a7;font-style:italic}.hljs-doctag,.hljs-formula,.hljs-keyword{color:#a626a4}.hljs-deletion,.hljs-name,.hljs-section,.hljs-selector-tag,.hljs-subst{color:#e45649}.hljs-literal{color:#0184bb}.hljs-addition,.hljs-attribute,.hljs-meta-string,.hljs-regexp,.hljs-string{color:#50a14f}.hljs-built_in,.hljs-class .hljs-title{color:#c18401}.hljs-attr,.hljs-number,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-pseudo,.hljs-template-variable,.hljs-type,.hljs-variable{color:#986801}.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-symbol,.hljs-title{color:#4078f2}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.hljs-link{text-decoration:underline}blockquote{border-left:.25em solid #dfe2e5;color:#6a737d;padding-left:1em;margin:20px 0!important}.content table{border-collapse:collapse;table-layout:fixed;width:100%;margin:0;overflow:hidden}.content table th{font-weight:700;text-align:left}.content table td,.content table th{min-width:1em;border:2px solid grey;padding:3px 5px;vertical-align:top;box-sizing:border-box;position:relative}.content img{-o-object-fit:contain;object-fit:contain;max-width:100%;max-height:350px;display:block;margin-left:auto;margin-right:auto}",""]),t.exports=r},736:function(t,e,n){"use strict";n.r(e);var r=n(122),o=n(112),l=n(90),c=n(476),d=n(249),f=n(121),h=n(475),m={components:{CodeDetails:n(713).default},data:function(){return{dialog:!1}},props:{value:{type:Boolean,default:!1},code:{type:Object,default:{}},problem:{type:String,default:""}},watch:{value:function(t){this.dialog=t},dialog:function(t){this.$emit("input",t)}}},v=n(86),component=Object(v.a)(m,(function(){var t=this,e=t._self._c;return e(d.a,{staticStyle:{float:"right",position:"relative"},attrs:{"offset-y":"","content-class":"mx-3",scrollable:"","max-width":"fit-content"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(o.a,{staticClass:"pa-0 pa-sm-0"},[e(r.a,{staticClass:"white--text",staticStyle:{position:"absolute",top:"0",right:"0"},attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[e(f.a,{attrs:{color:"black"}},[t._v("mdi-window-close")])],1),t._v(" "),e(l.b,{staticStyle:{"max-height":"100%"}},[e(h.a,{staticClass:"pa-0"},[e(c.a,{staticClass:"pa-0",attrs:{cols:"12",md:"12"}},[e(l.b,{staticClass:"pa-0"},[t.value?e("CodeDetails",{attrs:{blog:t.code}}):t._e()],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CodeDetails:n(713).default})},768:function(t,e,n){"use strict";n.r(e);var r=n(122),o=n(714),l=n(861),c=n(856),d=n(858),f=n(857),h=n(855),m=n(121),v=(n(55),n(8),n(39),n(70),n(44),n(35),n(17),n(75),n(80),n(47),n(20),n(19),n(23),n(16),n(24),n(3)),x=n(22);n(65);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function j(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(v.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function w(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return _(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw o}}}}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var k={components:{CodeView:n(736).default},data:function(){return{problem:"",code:{},dialog:!1,category:"",categories:[{value:"arraysHashing",text:"Arrays & Hashing"},{value:"slidingWindow",text:"Sliding Window"},{value:"stack",text:"Stack"},{value:"twoPointers",text:"Two Pointers"},{value:"binarySearch",text:"Binary Search"},{value:"linkedList",text:"Linked List"},{value:"trees",text:"Trees"},{value:"tries",text:"Tries"},{value:"heapPriorityQueue",text:"Heap/Priority Queue"},{value:"backtracking",text:"Backtracking"},{value:"graphs",text:"Graphs"},{value:"advancedGraphs",text:"Advanced Graphs"},{value:"1DDynamicProgramming",text:"1-D Dynamic Programming"},{value:"2DDynamicProgramming",text:"2-D Dynamic Programming"},{value:"greedy",text:"Greedy"},{value:"intervals",text:"Intervals"},{value:"mathGeometry",text:"Math & Geometry"},{value:"bitmanipulation",text:"Bit Manipulation"}],codes:{},batchSize:100,isLoading:!1,lastDoc:null}},computed:{user:function(){return this.$store.state.authUser}},methods:{setView:function(t){this.problem=t.title,this.code=t,this.dialog=!0},setCategory:function(t){this.category=t,this.loadBlogs()},loadBlogs:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isLoading&&!t.eof){e.next=2;break}return e.abrupt("return");case 2:return t.lastDoc=null,t.isLoading=!0,n=t.$fire.firestore,r=n.collection("codes").where("published","==",!0).where("category","==",t.category).orderBy("created","desc").limit(t.batchSize),t.lastDoc&&(r=r.startAfter(t.lastDoc)),e.next=9,r.get();case 9:if(o=e.sent,t.eof=o.empty,o.size>0){t.lastDoc=o.docs[o.docs.length-1],l=w(o.docs);try{for(l.s();!(c=l.n()).done;)d=c.value,t.codes.hasOwnProperty(t.category)?t.codes[t.category].push(j({id:d.id},d.data())):t.codes[t.category]=[j({id:d.id},d.data())]}catch(t){l.e(t)}finally{l.f()}}t.$forceUpdate(),t.isLoading=!1;case 14:case"end":return e.stop()}}),e)})))()}}},C=n(86),component=Object(C.a)(k,(function(){var t=this,e=t._self._c;return e(o.a,[e(h.a,{attrs:{multiple:""}},t._l(t.categories,(function(n,i){return e(c.a,{key:i},[e(f.a,{on:{click:function(e){return t.setCategory(n.value)}}},[e("b",[t._v(t._s(n.text))])]),t._v(" "),e(d.a,[e(l.a,{staticClass:"elevation-0",attrs:{"hide-default-footer":"",headers:[{text:"Problem",value:"title"},{text:"Difficulty",value:"difficulty",width:"110px"},{text:"Code",value:"code",width:"110px"}],items:t.codes[n.value],"items-per-page":-1},scopedSlots:t._u([{key:"item.code",fn:function(n){var o=n.item;return[e(r.a,{staticClass:"primary--text",staticStyle:{width:"100%"},attrs:{text:""},on:{click:function(e){return e.stopPropagation(),t.setView(o)}}},[e(m.a,{attrs:{medium:"",color:"primary"}},[t._v("mdi-open-in-new")])],1)]}}],null,!0)}),t._v(" "),e("CodeView",{attrs:{problem:t.problem,code:t.code},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}})],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CodeView:n(736).default})},874:function(t,e,n){"use strict";n.r(e);var r={components:{CodePanels:n(768).default}},o=n(86),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),e("CodePanels")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"d-flex justify-center mt-6 primary--text text-decoration-underline",staticStyle:{width:"100%"}},[t("h2",[this._v("Leet Code")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{CodePanels:n(768).default})}}]);