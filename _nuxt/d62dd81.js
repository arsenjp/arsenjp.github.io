(window.webpackJsonp=window.webpackJsonp||[]).push([[0,28,30],{653:function(t,e,r){var content=r(656);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("6333d4fe",content,!0,{sourceMap:!1})},654:function(t,e,r){"use strict";r.r(e);var o={name:"LoadingSpinner"},n=(r(655),r(86)),component=Object(n.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{"margin-top":"10px"}},[t("div",{staticClass:"lds-ring"},[t("div"),t("div"),t("div"),t("div")])])}],!1,null,"6f49ae7c",null);e.default=component.exports},655:function(t,e,r){"use strict";r(653)},656:function(t,e,r){var o=r(26)(!1);o.push([t.i,".lds-ring[data-v-6f49ae7c]{display:inline-block;position:relative;width:80px;height:80px}.lds-ring div[data-v-6f49ae7c]{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:5px;border-radius:50%;-webkit-animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;border:5px solid transparent;border-top-color:#2196f3}.lds-ring div[data-v-6f49ae7c]:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring div[data-v-6f49ae7c]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring div[data-v-6f49ae7c]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]),t.exports=o},670:function(t,e,r){"use strict";r.r(e);r(55),r(8),r(39),r(70),r(44),r(35),r(16),r(75),r(79),r(47),r(20),r(19),r(23),r(17),r(24);var o=r(3),n=r(22),c=(r(65),r(734));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function d(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,n=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw n}}}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var f={components:{LoadingSpinner:r(654).default,Teaser:c.default},props:{category:{type:String,required:!0},type:{type:String,required:!0},pageTitle:{type:String,required:!0}},data:function(){return{teasers:[],eof:!1,isLoading:!1,lastDoc:null,batchSize:10,pageLoaded:!1}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadBlogs();case 2:window.addEventListener("scroll",t.loadMore);case 3:case"end":return e.stop()}}),e)})))()},destroyed:function(){window.removeEventListener("scroll",this.loadMore)},methods:{loadBlogs:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,o,n,c,l,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isLoading&&!t.eof){e.next=2;break}return e.abrupt("return");case 2:return t.isLoading=!0,r=t.$fire.firestore,o=r.collection("blogTeasers").where("published","==",!0).where(t.type,"==",t.category).orderBy("created","desc").limit(t.batchSize),t.lastDoc&&(o=o.startAfter(t.lastDoc)),e.next=8,o.get();case 8:if(n=e.sent,t.eof=n.empty,n.size>0){t.lastDoc=n.docs[n.docs.length-1],c=d(n.docs);try{for(c.s();!(l=c.n()).done;)v=l.value,t.teasers.push(h({id:v.id},v.data()))}catch(t){c.e(t)}finally{c.f()}}t.isLoading=!1,t.pageLoaded=!0;case 13:case"end":return e.stop()}}),e)})))()},loadMore:function(){!(this.$el.getBoundingClientRect().bottom<=(window.innerHeight||document.documentElement.clientHeight)+100)||this.isLoading||this.eof||this.loadBlogs()}}},m=(r(769),r(86)),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"fluid d-flex justify-center align-center blogs-container-outer"},[e("div",{staticClass:"blogs-container"},[e("div",{staticClass:"d-flex justify-center mt-6 primary--text text-decoration-underline",staticStyle:{width:"100%"}},[t.pageLoaded?e("h2",[t._v(t._s(this.pageTitle))]):t._e()]),t._v(" "),t._l(t.teasers,(function(r){return e("teaser",{directives:[{name:"show",rawName:"v-show",value:t.pageLoaded,expression:"pageLoaded"}],key:r.id,staticClass:"my-10",attrs:{teaser:r}})})),t._v(" "),t.pageLoaded?e("div",{staticClass:"d-flex justify-center",staticStyle:{width:"100%"}},[t.teasers.length?t._e():e("span",{staticClass:"py-5"},[t._v("No Contents yet. Coming Soon!")])]):t._e(),t._v(" "),t.isLoading?e("loading-spinner"):t._e()],2)])}),[],!1,null,"04e5637a",null);e.default=component.exports;installComponents(component,{Teaser:r(734).default,LoadingSpinner:r(654).default})},687:function(t,e,r){var content=r(688);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("197fcea4",content,!0,{sourceMap:!1})},688:function(t,e,r){var o=r(26)(!1);o.push([t.i,'body{--text-opacity:1;color:#2d3748;color:rgba(45,55,72,var(--text-opacity));font-size:1rem;font-family:Roboto;font-weight:500;line-height:1.5}h1{font-size:1.6em;padding-bottom:20px;line-height:1.3em}h2{font-size:1.3em;padding-bottom:15px;line-height:1.2em}h3{font-size:12em;padding-bottom:12px;line-height:1.1em}code,kbd,pre,samp{font-family:Inconsolata,monospace;font-size:1rem;border-radius:5px!important;color:#fff;background:#282b2e}.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:"";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}',""]),t.exports=o},699:function(t,e,r){"use strict";r(20),r(16),r(23),r(17),r(24);var o=r(31),n=r(3),c=(r(8),r(19),r(687),r(9)),l=r(145),h=r(87),d=r(38),v=r(124),f=r(29),m=r(101),x=r(93),y=r(169),w=r(13);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(c.a)(d.a,y.a,x.a,f.a,Object(v.a)("chipGroup"),Object(m.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return k(k(k(k({"v-chip":!0},x.a.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(x.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(e){var r=Object(o.a)(e,2),n=r[0],c=r[1];t.$attrs.hasOwnProperty(n)&&Object(w.a)(n,c,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(h.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(l.b,t)},genClose:function(){var t=this;return this.$createElement(h.a,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],r=this.generateRouteLink(),o=r.tag,data=r.data;data.attrs=k(k({},data.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var n=this.textColor||this.outlined&&this.color;return t(o,this.setTextColor(n,data),e)}})},734:function(t,e,r){"use strict";r.r(e);var o=r(112),n=r(699),c=r(476),l=r(238),h=r(475),d=(r(251),r(55),r(5)),v=r.n(d),f={name:"Teaser",props:{teaser:{type:Object,required:!0}},computed:{tags:function(){return this.teaser.tags.slice(0).sort()}},methods:{toDateLocal:function(t){return t?v()(t).format("YYYY MMM DD"):""}}},m=r(86),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e(o.a,{attrs:{nuxt:"",to:{name:"blog-id",params:{id:t.teaser.id}}}},[e(h.a,{staticClass:"d-flex pa-5 justify-space-between"},[e(c.a,{staticClass:"flex-grow mr-2",attrs:{cols:t.teaser.imageUrl?8:12}},[e("h2",{staticClass:"mb-2"},[t._v("\n          "+t._s(t.teaser.title)+"\n        ")]),t._v(" "),e("div",{staticClass:"mb-2"},[t._v(t._s(t.teaser.body))]),t._v(" "),e("div",{staticClass:"text-xs text-gray-600 font-light"},[t._v("\n        "+t._s(t.toDateLocal(t.teaser.created))+"\n      ")]),t._v(" "),e("div",{staticClass:"text-xs uppercase text-gray-600 mt-3 d-flex flex-row flex-wrap"},t._l(t.tags,(function(r){return e(n.a,{key:r,staticClass:"my-1 ml-0 mr-2"},[t._v("\n          "+t._s(r.toUpperCase())+"\n        ")])})),1)]),t._v(" "),t.teaser.imageUrl?e(c.a,{staticClass:"flex-shrink-1",attrs:{cols:t.teaser.imageUrl?3:0}},[e(l.a,{staticClass:"w-24 h-auto object-cover",attrs:{src:t.teaser.imageUrl,alt:t.teaser.imageAlt||t.teaser.title}})],1):t._e()],1)],1)}),[],!1,null,"08f514b0",null);e.default=component.exports},743:function(t,e,r){var content=r(770);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("f588757c",content,!0,{sourceMap:!1})},769:function(t,e,r){"use strict";r(743)},770:function(t,e,r){var o=r(26)(!1);o.push([t.i,"body[data-v-04e5637a]{--text-opacity:1;color:#2d3748;color:rgba(45,55,72,var(--text-opacity));font-size:1rem;font-family:Roboto;font-weight:500;line-height:1.5}h1[data-v-04e5637a]{font-size:1.6em;padding-bottom:20px;line-height:1.3em}h2[data-v-04e5637a]{font-size:1.3em;padding-bottom:15px;line-height:1.2em}h3[data-v-04e5637a]{font-size:12em;padding-bottom:12px;line-height:1.1em}code[data-v-04e5637a],kbd[data-v-04e5637a],pre[data-v-04e5637a],samp[data-v-04e5637a]{font-family:Inconsolata,monospace;font-size:1rem;border-radius:5px!important;color:#fff;background:#282b2e}.blogs-container[data-v-04e5637a]{width:min(calc(100% - 30px),800px)}",""]),t.exports=o}}]);