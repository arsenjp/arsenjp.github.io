(window.webpackJsonp=window.webpackJsonp||[]).push([[61,12,14,33],{653:function(t,e,n){var content=n(656);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("6333d4fe",content,!0,{sourceMap:!1})},654:function(t,e,n){"use strict";n.r(e);var r={name:"LoadingSpinner"},o=(n(655),n(86)),component=Object(o.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{"margin-top":"10px"}},[t("div",{staticClass:"lds-ring"},[t("div"),t("div"),t("div"),t("div")])])}],!1,null,"6f49ae7c",null);e.default=component.exports},655:function(t,e,n){"use strict";n(653)},656:function(t,e,n){var r=n(26)(!1);r.push([t.i,".lds-ring[data-v-6f49ae7c]{display:inline-block;position:relative;width:80px;height:80px}.lds-ring div[data-v-6f49ae7c]{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:5px;border-radius:50%;-webkit-animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;border:5px solid transparent;border-top-color:#2196f3}.lds-ring div[data-v-6f49ae7c]:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring div[data-v-6f49ae7c]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring div[data-v-6f49ae7c]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]),t.exports=r},693:function(t,e,n){var content=n(724);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("7a258ec9",content,!0,{sourceMap:!1})},714:function(t,e,n){"use strict";n.r(e);var r=n(742),o=n(238),l=(n(250),n(55),n(35),n(66),n(8),n(16),n(654)),c=n(700),d=n.n(c),f=n(701),h=n.n(f),m=n(664),v=n.n(m),y=n(665),x=n.n(y),w=n(702),j=n.n(w),_=n(703),k=n.n(_),C=(n(704),n(705)),S=n.n(C),O=(n(706),n(707),n(708),n(709)),L=n.n(O),D=(n(710),n(5)),P=n.n(D),M={name:"BlogDetails",layout:"default",components:{Spinner:l.default},data:function(){return{pageLoaded:!1,body:{}}},props:{blog:{type:Object,required:!0},prev:{type:Object,default:null},next:{type:Object,default:null}},computed:{tags:function(){return this.blog.tags?this.blog.tags.slice(0).sort():[]}},methods:{replaceUrls:function(t){return t?t.replace(/href="([^\'\"]+)/g,(function(t){return' target="_blank" '+t})):""},getMinTextLength:function(t,e,n){var r=t&&t.title?t.title.length:0,o=e&&e.title?e.title.length:0,l=Math.min(r,o),c=Math.max(r,o);return c<n?l||c:l>=n?n:l||n},toDateLocal:function(t){return t?P()(t).format("YYYY MMM DD"):""}},mounted:function(){this.pageLoaded=!0,d.a.registerLanguage("javascript",S.a),d.a.registerLanguage("xml",L.a),d.a.registerLanguage("python",j.a),d.a.registerLanguage("java",v.a),d.a.registerLanguage("cpp",x.a),d.a.registerLanguage("bash",k.a),d.a.registerLanguage("plaintext",h.a);var t=document.createElement("html"),e=this.replaceUrls(this.blog.body);t.innerHTML=e,t.querySelectorAll("pre code").forEach((function(t){d.a.highlightElement(t)}));var n=document.createElement("div");n.appendChild(t),this.body=n.innerHTML}},z=(n(723),n(86)),component=Object(z.a)(M,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex justify-center align-center pt-5 px-2",staticStyle:{"max-width":"min(100%,800px)"}},[e("div",{staticClass:"pa-0",staticStyle:{width:"calc(100vw-30px)","max-width":"min(100%,800px)"}},[e("div",{staticClass:"pa-5 mb-5",staticStyle:{width:"100%"}},[e("div",{staticClass:"text-xs uppercase text-gray-600 mb-1 d-flex flex-row flex-wrap"},t._l(t.tags,(function(n){return e(r.a,{key:n,staticClass:"my-1 ml-0 mr-2"},[t._v("\n          "+t._s(n.toUpperCase())+"\n        ")])})),1),t._v(" "),t.blog.title?e("h1",{staticClass:"font-sans text-gray-700 font-light"},[t._v("\n        "+t._s(t.blog.title)+"\n      ")]):t._e(),t._v(" "),e("div",{staticClass:"text-gray-600 text-xs font-light"},[t._v("\n        "+t._s(t.toDateLocal(t.blog.created))+"\n      ")])]),t._v(" "),t.blog.imageUrl?e("figure",{staticClass:"mb-5"},[e(o.a,{staticStyle:{height:"350px",width:"100%"},attrs:{contain:"",src:t.blog.imageUrl,alt:t.blog.imageAlt||t.blog.title}}),t._v(" "),t.blog.imageCaption?e("figcaption",{staticClass:"text-center text-gray-600 text-sm my-2",domProps:{innerHTML:t._s(t.blog.imageCaption)}}):t._e()],1):t._e(),t._v(" "),e("div",{staticClass:"content pa-5 pr-0",staticStyle:{"word-break":"break-word",width:"100%"},domProps:{innerHTML:t._s(t.body)}})])])}),[],!1,null,null,null);e.default=component.exports},723:function(t,e,n){"use strict";n(693)},724:function(t,e,n){var r=n(26)(!1);r.push([t.i,"body{--text-opacity:1;color:#2d3748;color:rgba(45,55,72,var(--text-opacity));font-size:1rem;font-family:Roboto;font-weight:500;line-height:1.5}h1{font-size:1.6em;padding-top:13px;padding-bottom:18px;line-height:1.3em}h2{font-size:1.3em;padding-top:11px;padding-bottom:13px;line-height:1.2em}h3{font-size:1.2em;padding-top:8px;padding-bottom:11px;line-height:1.1em}code,kbd,pre,samp{font-family:Inconsolata,monospace;font-size:1rem;border-radius:5px!important;color:#000;background-color:#fff!important}pre{margin-bottom:16px}@media screen and (min-width:601px){pre{border:1px solid #000}}@media screen and (max-width:600px){pre code{background-color:#f2f2f2!important}}.hljs{display:block;background:#fff;padding:.5em;color:#333;overflow-x:auto}.hljs-comment,.hljs-meta{color:#969896}.hljs-emphasis,.hljs-quote,.hljs-strong,.hljs-template-variable,.hljs-variable{color:#df5000}.hljs-keyword,.hljs-selector-tag,.hljs-type{color:#d73a49}.hljs-attribute,.hljs-bullet,.hljs-literal,.hljs-symbol{color:#0086b3}.hljs-name,.hljs-section{color:#63a35c}.hljs-tag{color:#333}.hljs-attr,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-selector-pseudo,.hljs-title{color:#6f42c1}.hljs-addition{color:#55a532;background-color:#eaffea}.hljs-deletion{color:#bd2c00;background-color:#ffecec}.hljs-link{text-decoration:underline}.hljs-number{color:#005cc5}.hljs-string{color:#032f62}blockquote{border-left:.25em solid #dfe2e5;color:#6a737d;padding-left:1em;margin:20px 0!important}.content{font-size:1rem!important}.content table{border-collapse:collapse;table-layout:fixed;width:100%;margin:0;overflow:hidden}.content table th{font-weight:700;text-align:left}.content table td,.content table th{min-width:1em;border:2px solid grey;padding:3px 5px;vertical-align:top;box-sizing:border-box;position:relative}.content img{-o-object-fit:contain;object-fit:contain;max-width:100%;max-height:350px;display:block;margin-left:auto;margin-right:auto}",""]),t.exports=r},736:function(t,e,n){"use strict";n.r(e);var r=n(122),o=n(112),l=n(90),c=n(476),d=n(697),f=n(249),h=n(121),m=n(475),v={components:{CodeDetails:n(714).default},data:function(){return{dialog:!1}},props:{value:{type:Boolean,default:!1},code:{type:Object,default:{}},problem:{type:String,default:""}},computed:{isMobileScreen:function(){return!(window.innerWidth>600)}},watch:{value:function(t){this.dialog=t},dialog:function(t){this.$emit("input",t)}}},y=n(86),component=Object(y.a)(v,(function(){var t=this,e=t._self._c;return e(f.a,{staticStyle:{float:"right",position:"relative"},attrs:{fullscreen:t.isMobileScreen,"offset-y":"",scrollable:"","max-width":"fit-content"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(o.a,{staticClass:"pa-0 pa-sm-0",staticStyle:{width:"fit-content",overflow:"scroll"}},[e(r.a,{staticClass:"white--text",staticStyle:{position:"absolute",top:"0",right:"0"},attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[e(h.a,{attrs:{color:"black"}},[t._v("mdi-window-close")])],1),t._v(" "),e(l.b,{staticClass:"pa-0"},[e(d.a,{staticClass:"pa-0",staticStyle:{width:"100vw"}},[e(m.a,{staticClass:"pa-0",staticStyle:{width:"100%"}},[e(c.a,{staticClass:"pa-0",staticStyle:{width:"100%"}},[e(l.b,{staticClass:"pa-0 d-flex justify-center",staticStyle:{width:"100%",color:"black"}},[t.value?e("CodeDetails",{attrs:{blog:t.code}}):t._e()],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CodeDetails:n(714).default})},768:function(t,e,n){"use strict";n.r(e);var r=n(122),o=n(697),l=n(861),c=n(856),d=n(858),f=n(857),h=n(855),m=n(121),v=(n(55),n(8),n(39),n(70),n(44),n(35),n(17),n(75),n(80),n(47),n(20),n(19),n(23),n(16),n(24),n(3)),y=n(22),x=(n(65),n(56),n(736)),w=n(654);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(v.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function k(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return C(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw o}}}}function C(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var S={components:{CodeView:x.default,Spinner:w.default},data:function(){return{problem:"",code:{},dialog:!1,category:"",categories:[{value:"arraysHashing",text:"Arrays & Hashing"},{value:"slidingWindow",text:"Sliding Window"},{value:"stack",text:"Stack"},{value:"twoPointers",text:"Two Pointers"},{value:"binarySearch",text:"Binary Search"},{value:"linkedList",text:"Linked List"},{value:"trees",text:"Trees"},{value:"tries",text:"Tries"},{value:"heapPriorityQueue",text:"Heap/Priority Queue"},{value:"backtracking",text:"Backtracking"},{value:"graphs",text:"Graphs"},{value:"advancedGraphs",text:"Advanced Graphs"},{value:"1DDynamicProgramming",text:"1-D Dynamic Programming"},{value:"2DDynamicProgramming",text:"2-D Dynamic Programming"},{value:"greedy",text:"Greedy"},{value:"intervals",text:"Intervals"},{value:"mathGeometry",text:"Math & Geometry"},{value:"bitmanipulation",text:"Bit Manipulation"}],codes:{},batchSize:100,isLoading:!1,lastDoc:null,pageLoaded:!1}},computed:{user:function(){return this.$store.state.authUser}},mounted:function(){var t=this;setTimeout((function(){t.pageLoaded=!0}),500)},methods:{setView:function(t){this.problem=t.title,this.code=t,this.dialog=!0},setCategory:function(t){this.category=t,this.loadBlogs()},loadBlogs:function(){var t=this;return Object(y.a)(regeneratorRuntime.mark((function e(){var n,r,o,data,l,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.codes.hasOwnProperty(t.category)){e.next=4;break}return t.$forceUpdate(),t.isLoading=!1,e.abrupt("return");case 4:if(!t.isLoading&&!t.eof){e.next=6;break}return e.abrupt("return");case 6:return t.lastDoc=null,t.isLoading=!0,n=t.$fire.firestore,r=n.collection("codes").where("published","==",!0).where("category","==",t.category).orderBy("created","desc").limit(t.batchSize),t.lastDoc&&(r=r.startAfter(t.lastDoc)),e.next=13,r.get();case 13:if((o=e.sent).size>0){t.lastDoc=o.docs[o.docs.length-1],data=[],l=k(o.docs);try{for(l.s();!(c=l.n()).done;)d=c.value,data.push(_({id:d.id},d.data()))}catch(t){l.e(t)}finally{l.f()}t.codes[t.category]=data}t.$forceUpdate(),t.isLoading=!1;case 17:case"end":return e.stop()}}),e)})))()}}},O=n(86),component=Object(O.a)(S,(function(){var t=this,e=t._self._c;return e("div",[t.pageLoaded?e(o.a,[e(h.a,{attrs:{multiple:""}},t._l(t.categories,(function(n,i){return e(c.a,{key:i},[e(f.a,{on:{click:function(e){return t.setCategory(n.value)}}},[e("b",[t._v(t._s(n.text))])]),t._v(" "),e(d.a,[e(l.a,{staticClass:"elevation-0",attrs:{"disable-sort":"","hide-default-footer":"",headers:[{text:"Problem",value:"title"},{text:"Difficulty",value:"difficulty",width:"110px"},{text:"Code",value:"code",width:"110px"}],items:t.codes[n.value],"items-per-page":-1},scopedSlots:t._u([{key:"item.code",fn:function(n){var o=n.item;return[e(r.a,{staticClass:"primary--text",staticStyle:{width:"100%"},attrs:{text:""},on:{click:function(e){return e.stopPropagation(),t.setView(o)}}},[e(m.a,{attrs:{medium:"",color:"primary"}},[t._v("mdi-open-in-new")])],1)]}}],null,!0)})],1)],1)})),1),t._v(" "),e("CodeView",{attrs:{problem:t.problem,code:t.code},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}})],1):e("Spinner",{attrs:{color:"white"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CodeView:n(736).default})},875:function(t,e,n){"use strict";n.r(e);var r={components:{CodePanels:n(768).default}},o=n(86),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),e("CodePanels")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"d-flex justify-center mt-6 primary--text text-decoration-underline",staticStyle:{width:"100%"}},[t("h2",[this._v("Leet Code")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{CodePanels:n(768).default})}}]);