(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{182:function(t,n,e){var content=e(189);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(18).default)("36a94ffe",content,!0,{sourceMap:!1})},188:function(t,n,e){"use strict";var o=e(182);e.n(o).a},189:function(t,n,e){(n=e(17)(!1)).push([t.i,".common-button-component{display:block}.common-button-component>*{display:inline-flex;background:#ccc;color:#fff;text-decoration:none;outline:none;cursor:pointer}.common-button-component>button{font-family:inherit;font-size:inherit;line-height:inherit;font-weight:inherit}",""]),t.exports=n},66:function(t,n,e){"use strict";e.r(n);var o=!1;try{o=!!e(112).default}catch(t){}var r={props:{type:{type:String,default:"default"},size:{type:String,default:"default"},native:{type:String,default:"button"},form:String,href:String,to:String,target:{type:String,default:"_self"},disabled:Boolean},computed:{tagName:function(){return this.href?"a":this.to?o?"nuxt-link":"router-link":"button"},classList:function(){return"common-button-type-".concat(this.type," common-button-size-").concat(this.size)}},methods:{click:function(t){if(this.disabled)return t;this.$emit("click",t)}}},c=(e(188),e(8)),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"common-button-component",on:{click:t.click}},[e(t.tagName,{tag:"component",class:t.classList,attrs:{role:"button",type:"button"===t.tagName&&t.native,form:"button"===t.tagName&&t.form,to:t.to,href:t.href,target:!!t.href&&t.target,disabled:t.disabled},on:{focus:function(n){return t.$emit("focus")},blur:function(n){return t.$emit("blur")}}},[t.$slots.default?t._t("default"):e("div",[t._v("\n      Button\n    ")])],2)],1)}),[],!1,null,null,null);n.default=component.exports}}]);