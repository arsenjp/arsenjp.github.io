(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{706:function(t,n,e){var content=e(757);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(27).default)("0805982c",content,!0,{sourceMap:!1})},707:function(t,n,e){var content=e(759);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(27).default)("21913ceb",content,!0,{sourceMap:!1})},708:function(t,n,e){var content=e(761);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(27).default)("0d5ec1ab",content,!0,{sourceMap:!1})},718:function(t,n,e){"use strict";e(19),e(8),e(20),e(98),e(43),e(482),e(255),e(100),e(99);var o=e(4);var r,c=e(78);n.a=(r="container",o.a.extend({name:"v-".concat(r),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,n){var e=n.props,data=n.data,o=n.children;data.staticClass="".concat(r," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var n=c[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return e.id&&(data.domProps=data.domProps||{},data.domProps.id=e.id),t(e.tag,data,o)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,n){var e,o=n.props,data=n.data,r=n.children,l=data.attrs;return l&&(data.attrs={},e=Object.keys(l).filter((function(t){if("slot"===t)return!1;var n=l[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}))),o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),t(o.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":o.fluid}).concat(e||[])}),r)}})},738:function(t,n,e){"use strict";e.r(n);e(8),e(112);var o=e(49),r=e(50),c=e(67),l=e(57),d=e(48),f=e(688),m=e.n(f),h=e(689),x=e.n(h),v=(e(690),e(691),e(692)),y=e.n(v),k=e(693),w=e.n(k),j=e(694),I=e.n(j),O=(e(695),e(696),e(697),e(698)),z=e.n(O),F=(e(699),e(41)),_=e(666),R=e(667),S=e(668),P=e(669),B=e(670),M=e(671),C=e(672),L=e(673),T=e(674),W=e(675),A=e(676),E=e(677),J=e(678),U=e(679),Y=e(14),N=e(10),Q=e(680),V=e(254);function $(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,o=Object(d.a)(t);if(n){var r=Object(d.a)(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return Object(l.a)(this,e)}}var D={components:{TiptapVuetify:V.u,IconLinkOff:U.default,IconLink:J.default,IconAddPhoto:E.default,IconRedo:A.default,IconUndo:W.default,IconRemove:T.default,IconFormatQuote:L.default,IconFormatCode:C.default,IconFormatListNumbered:M.default,IconFormatListBulleted:B.default,IconFormatStrikethrough:P.default,IconFormatUnderline:S.default,IconFormatItalic:R.default,IconFormatBold:_.default},props:{value:{type:String,default:""},changed:{type:String,default:""}},watch:{content:function(t){this.$emit("input",t)},value:function(t){this.content=t||this.content}},mounted:function(){this.content=this.value||this.content},data:function(){return{html:"",nativeExtensions:[new(function(t){Object(c.a)(e,t);var n=$(e);function e(){return Object(o.a)(this,e),n.apply(this,arguments)}return Object(r.a)(e,[{key:"keys",value:function(t){return{Tab:Object(N.c)("    "),enter:Object(N.c)("\n")}}}]),e}(Y.e)),new F.f({languages:{javascript:I.a,python:m.a,xml:z.a,plaintext:x.a,java:y.a,cpp:w.a}})],extensions:[V.h,V.e,V.q,V.r,V.s,V.t,V.a,V.l,V.w,V.p,V.k,V.m,V.c,V.n,[V.j,{options:{imageSources:[{component:Q.default,name:"File Selector"}]}}],[V.g,{options:{levels:[1,2,3]}}],V.b,V.d,V.i,V.o,V.f],content:"",content2:'\n      <h1>Most basic use</h1>\n      <p>\n        You can use the buttons above to add different text decorations. For example:\n        <strong>\n          Bold.\n        </strong>\n        <i>\n          Italics.\n        </i>\n      </p>\n      <pre><code>You can even type some code.</code></pre>\n\n      <blockquote>\n        <p>Blockquote is awesome!</p>\n      </blockquote>\n      <p>Try adding a table like the one below:</p>\n      <table>\n        <tr>\n          <th colspan="2" data-colwidth="100,0">Wide header</th>\n        </tr>\n        <tr>\n          <td>One</td>\n          <td>Two</td>\n        </tr>\n        <tr>\n          <td>Three</td>\n          <td>Four</td>\n        </tr>\n      </table>\n      <p>List items:</p>\n      <ol>\n        <li>\n          <p>Item 1</p>\n        </li>\n        <li>\n          <p>Item 2</p>\n        </li>\n      </ol>\n    '}}},G=D,H=(e(756),e(758),e(760),e(85)),component=Object(H.a)(G,(function(){var t=this,n=t._self._c;return n("div",[n("tiptap-vuetify",{staticClass:"tiptap_vuetify",attrs:{extensions:t.extensions,"native-extensions":t.nativeExtensions},model:{value:t.content,callback:function(n){t.content=n},expression:"content"}})],1)}),[],!1,null,null,null);n.default=component.exports},756:function(t,n,e){"use strict";e(706)},757:function(t,n,e){var o=e(26)(!1);o.push([t.i,"body{--text-opacity:1;color:#2d3748;color:rgba(45,55,72,var(--text-opacity));font-size:1rem;font-family:Roboto;font-weight:500;line-height:1.5}h1{font-size:1.6em;padding-top:13px;padding-bottom:18px;line-height:1.3em}h2{font-size:1.3em;padding-top:11px;padding-bottom:13px;line-height:1.2em}h3{font-size:1.2em;padding-top:8px;padding-bottom:11px;line-height:1.1em}code,kbd,pre,samp{font-family:Inconsolata,monospace;font-size:1rem;border-radius:5px!important;color:#000;background-color:#fff!important}pre{margin-bottom:16px;overflow:auto}pre code{background-color:#f2f2f2!important}.content table{border-collapse:collapse;table-layout:fixed;width:100%;margin:0;overflow:hidden}.content table th{font-weight:700;text-align:left}.content table td,.content table th{min-width:1em;border:2px solid grey;padding:3px 5px;vertical-align:top;box-sizing:border-box;position:relative}.content img{-o-object-fit:contain;object-fit:contain;max-width:100%;max-height:350px;display:block;margin-left:auto;margin-right:auto}",""]),t.exports=o},758:function(t,n,e){"use strict";e(707)},759:function(t,n,e){var o=e(26)(!1);o.push([t.i,"body{--text-opacity:1;color:#2d3748;color:rgba(45,55,72,var(--text-opacity));font-size:1rem;font-family:Roboto;font-weight:500;line-height:1.5}h1{font-size:1.6em;padding-top:13px;padding-bottom:18px;line-height:1.3em}h2{font-size:1.3em;padding-top:11px;padding-bottom:13px;line-height:1.2em}h3{font-size:1.2em;padding-top:8px;padding-bottom:11px;line-height:1.1em}code,kbd,pre,samp{font-family:Inconsolata,monospace;font-size:1rem;border-radius:5px!important;color:#000;background-color:#fff!important}pre{margin-bottom:16px;overflow:auto}pre code{background-color:#f2f2f2!important}.v-tab:nth-child(3){display:none}.tiptap_vuetify img{-o-object-fit:contain;object-fit:contain;max-width:100%;max-height:350px;display:block;margin-left:auto;margin-right:auto}",""]),t.exports=o},760:function(t,n,e){"use strict";e(708)},761:function(t,n,e){var o=e(26)(!1);o.push([t.i,"pre code{display:block;overflow-x:auto;padding:.5em;background:#002b36;color:#839496;margin-top:1rem;margin-bottom:1rem}",""]),t.exports=o}}]);