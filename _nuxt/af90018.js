(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{709:function(t,o,e){var content=e(763);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(27).default)("59e99dbd",content,!0,{sourceMap:!1})},710:function(t,o,e){var content=e(765);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(27).default)("1350cbc8",content,!0,{sourceMap:!1})},711:function(t,o,e){var content=e(767);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(27).default)("da74d30a",content,!0,{sourceMap:!1})},712:function(t,o,e){var content=e(769);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(27).default)("3de18f82",content,!0,{sourceMap:!1})},718:function(t,o,e){"use strict";e(19),e(8),e(20),e(98),e(43),e(482),e(255),e(100),e(99);var n=e(4);var r,c=e(78);o.a=(r="container",n.a.extend({name:"v-".concat(r),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,o){var e=o.props,data=o.data,n=o.children;data.staticClass="".concat(r," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var d=Object.keys(c).filter((function(t){if("slot"===t)return!1;var o=c[t];return t.startsWith("data-")?(data.attrs[t]=o,!1):o||"string"==typeof o}));d.length&&(data.staticClass+=" ".concat(d.join(" ")))}return e.id&&(data.domProps=data.domProps||{},data.domProps.id=e.id),t(e.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,o){var e,n=o.props,data=o.data,r=o.children,d=data.attrs;return d&&(data.attrs={},e=Object.keys(d).filter((function(t){if("slot"===t)return!1;var o=d[t];return t.startsWith("data-")?(data.attrs[t]=o,!1):o||"string"==typeof o}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(e||[])}),r)}})},739:function(t,o,e){"use strict";e.r(o);e(8),e(112);var n=e(49),r=e(50),c=e(67),d=e(57),l=e(48),f=(e(688),e(689),e(690),e(691),e(692),e(693),e(694),e(695),e(696),e(697),e(698),e(699),e(666)),m=e(667),h=e(668),x=e(669),v=e(670),y=e(671),k=e(672),w=e(673),I=e(674),j=e(675),_=e(676),z=e(677),O=e(678),F=e(679),R=e(14),M=e(10),S=e(680),P=e(254);function B(t){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=Object(l.a)(t);if(o){var r=Object(l.a)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return Object(d.a)(this,e)}}var C={components:{TiptapVuetify:P.u,IconLinkOff:F.default,IconLink:O.default,IconAddPhoto:z.default,IconRedo:_.default,IconUndo:j.default,IconRemove:I.default,IconFormatQuote:w.default,IconFormatCode:k.default,IconFormatListNumbered:y.default,IconFormatListBulleted:v.default,IconFormatStrikethrough:x.default,IconFormatUnderline:h.default,IconFormatItalic:m.default,IconFormatBold:f.default},props:{value:{type:String,default:""},changed:{type:String,default:""}},watch:{content:function(t){this.$emit("input",t)},value:function(t){this.content=t||this.content}},mounted:function(){this.content=this.value||this.content},data:function(){return{html:"",nativeExtensions:[new(function(t){Object(c.a)(e,t);var o=B(e);function e(){return Object(n.a)(this,e),o.apply(this,arguments)}return Object(r.a)(e,[{key:"keys",value:function(t){return{Tab:Object(M.c)("    "),enter:Object(M.c)("\n")}}}]),e}(R.e))],extensions:[P.h,P.e,P.q,P.r,P.s,P.t,P.a,P.l,P.w,P.p,P.k,P.m,P.c,P.n,[P.j,{options:{imageSources:[{component:S.default,name:"File Selector"}]}}],[P.g,{options:{levels:[1,2,3]}}],P.b,P.d,P.i,P.o,P.f],content:"",content2:'\n      <h1>Most basic use</h1>\n      <p>\n        You can use the buttons above to add different text decorations. For example:\n        <strong>\n          Bold.\n        </strong>\n        <i>\n          Italics.\n        </i>\n      </p>\n      <pre><code>You can even type some code.</code></pre>\n\n      <blockquote>\n        <p>Blockquote is awesome!</p>\n      </blockquote>\n      <p>Try adding a table like the one below:</p>\n      <table>\n        <tr>\n          <th colspan="2" data-colwidth="100,0">Wide header</th>\n        </tr>\n        <tr>\n          <td>One</td>\n          <td>Two</td>\n        </tr>\n        <tr>\n          <td>Three</td>\n          <td>Four</td>\n        </tr>\n      </table>\n      <p>List items:</p>\n      <ol>\n        <li>\n          <p>Item 1</p>\n        </li>\n        <li>\n          <p>Item 2</p>\n        </li>\n      </ol>\n    '}}},L=C,T=(e(762),e(764),e(766),e(768),e(85)),component=Object(T.a)(L,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"code_editor"},[o("tiptap-vuetify",{staticClass:"tiptap_vuetify",attrs:{extensions:t.extensions,"native-extensions":t.nativeExtensions},model:{value:t.content,callback:function(o){t.content=o},expression:"content"}})],1)}),[],!1,null,null,null);o.default=component.exports},762:function(t,o,e){"use strict";e(709)},763:function(t,o,e){var n=e(26)(!1);n.push([t.i,"body{--text-opacity:1;color:#2d3748;color:rgba(45,55,72,var(--text-opacity));font-size:1rem;font-family:Roboto;font-weight:500;line-height:1.5}h1{font-size:1.6em;padding-top:13px;padding-bottom:18px;line-height:1.3em}h2{font-size:1.3em;padding-top:11px;padding-bottom:13px;line-height:1.2em}h3{font-size:1.2em;padding-top:8px;padding-bottom:11px;line-height:1.1em}code,kbd,pre,samp{font-family:Inconsolata,monospace;font-size:1rem;border-radius:5px!important;color:#000;background-color:#fff!important}pre{margin-bottom:16px;overflow:auto}pre code{background-color:#f2f2f2!important}.code_editor .tiptap-vuetify-editor__toolbar{position:sticky!important;top:0!important;z-index:10!important}@media screen and (min-width:601px){.code_editor .v-card{height:calc(100vh - 270px)!important;overflow:auto}}.code_editor .tiptap-vuetify-editor{height:100%!important}",""]),t.exports=n},764:function(t,o,e){"use strict";e(710)},765:function(t,o,e){var n=e(26)(!1);n.push([t.i,"body{--text-opacity:1;color:#2d3748;color:rgba(45,55,72,var(--text-opacity));font-size:1rem;font-family:Roboto;font-weight:500;line-height:1.5}h1{font-size:1.6em;padding-top:13px;padding-bottom:18px;line-height:1.3em}h2{font-size:1.3em;padding-top:11px;padding-bottom:13px;line-height:1.2em}h3{font-size:1.2em;padding-top:8px;padding-bottom:11px;line-height:1.1em}code,kbd,pre,samp{font-family:Inconsolata,monospace;font-size:1rem;border-radius:5px!important;color:#000;background-color:#fff!important}pre{margin-bottom:16px;overflow:auto}pre code{background-color:#f2f2f2!important}.content table{border-collapse:collapse;table-layout:fixed;width:100%;margin:0;overflow:hidden}.content table th{font-weight:700;text-align:left}.content table td,.content table th{min-width:1em;border:2px solid grey;padding:3px 5px;vertical-align:top;box-sizing:border-box;position:relative}.content img{-o-object-fit:contain;object-fit:contain;max-width:100%;max-height:350px;display:block;margin-left:auto;margin-right:auto}",""]),t.exports=n},766:function(t,o,e){"use strict";e(711)},767:function(t,o,e){var n=e(26)(!1);n.push([t.i,"body{--text-opacity:1;color:#2d3748;color:rgba(45,55,72,var(--text-opacity));font-size:1rem;font-family:Roboto;font-weight:500;line-height:1.5}h1{font-size:1.6em;padding-top:13px;padding-bottom:18px;line-height:1.3em}h2{font-size:1.3em;padding-top:11px;padding-bottom:13px;line-height:1.2em}h3{font-size:1.2em;padding-top:8px;padding-bottom:11px;line-height:1.1em}code,kbd,pre,samp{font-family:Inconsolata,monospace;font-size:1rem;border-radius:5px!important;color:#000;background-color:#fff!important}pre{margin-bottom:16px;overflow:auto}pre code{background-color:#f2f2f2!important}.v-tab:nth-child(3){display:none}.tiptap_vuetify img{-o-object-fit:contain;object-fit:contain;max-width:100%;max-height:350px;display:block;margin-left:auto;margin-right:auto}",""]),t.exports=n},768:function(t,o,e){"use strict";e(712)},769:function(t,o,e){var n=e(26)(!1);n.push([t.i,"pre code{display:block;overflow-x:auto;padding:.5em;background:#002b36;color:#839496;margin-top:1rem;margin-bottom:1rem}",""]),t.exports=n}}]);