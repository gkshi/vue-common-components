(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{205:function(t,e,n){var content=n(208);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("dd08351a",content,!0,{sourceMap:!1})},207:function(t,e,n){"use strict";var o=n(205);n.n(o).a},208:function(t,e,n){(e=n(3)(!1)).push([t.i,".code-component[data-v-f5839a70]{max-width:100%;margin:0 auto}.code-component code[data-v-f5839a70]{display:block;margin:15px auto;padding:15px 30px 17px;background:#f3f3f5;font-family:monospace;font-size:16px;line-height:21px;border-radius:5px;max-height:250px;overflow:auto}",""]),t.exports=e},210:function(t,e,n){var content=n(215);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("34171ee3",content,!0,{sourceMap:!1})},211:function(t,e,n){"use strict";var o={name:"code-component",props:{data:{type:String,default:""}},methods:{select(){if(document.selection){var t=document.body.createTextRange();t.moveToElementText(this.$refs.code),t.select()}else if(window.getSelection){var e=document.createRange();e.selectNode(this.$refs.code),window.getSelection().removeAllRanges(),window.getSelection().addRange(e)}}}},c=(n(207),n(2)),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{staticClass:"code-component",on:{click:this.select}},[e("code",{ref:"code"},[this.data?e("div",[this._v(this._s(this.data))]):this._t("default")],2)])}),[],!1,null,"f5839a70",null);e.a=component.exports},214:function(t,e,n){"use strict";var o=n(210);n.n(o).a},215:function(t,e,n){(e=n(3)(!1)).push([t.i,".page.index[data-v-f6821bd0]{margin-top:60px;margin-bottom:100px}.page.index .heading[data-v-f6821bd0]{margin-bottom:40px}.page.index .counters[data-v-f6821bd0]>:not(:last-child){margin-right:10px}.page.index .component-list[data-v-f6821bd0]{width:840px;max-width:100%;margin:50px auto 100px}.page.index .component-list>*[data-v-f6821bd0]{margin:8px}.page.index .in-dev-list[data-v-f6821bd0]{margin-top:-70px;margin-bottom:100px;font-size:15px;line-height:19px;color:#aaa;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.page.index .in-dev-list .flex>*[data-v-f6821bd0]{margin:4px 6px}.page.index .component[data-v-f6821bd0]{display:block;background:#f3f3f5;color:#323232;padding:10px 32px 12px;border-radius:30px;text-decoration:none;transition:all .2s ease}.page.index .component[data-v-f6821bd0]:hover{background:#ebebee}.page.index section[data-v-f6821bd0]{margin-bottom:50px}.page.index .pagination[data-v-f6821bd0]{margin-top:100px}",""]),t.exports=e},216:function(t,e,n){"use strict";n.r(e);n(21),n(6);var o=n(9),c=n(89),code=n(211);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d=n(105).description,l={components:{vCode:code.a},data:()=>({description:d,codes:{yarn_install:"yarn add --dev vue-common-components",npm_install:"npm i vue-common-components",vue_init:"import Vue from 'vue'\nimport VueCommonComponents from 'vue-common-components'\nVue.use(VueCommonComponents, {\n  // manual options here\n})",nuxt_init:"export default {\n  plugins: [\n    'node_modules/vue-common-components'\n  ],\n  commonComponents: {\n    // manual options here\n  }\n}",using:'<template>\n  <div class="your-any-component">\n    <common-button>Button</common-button>\n  </div>\n</template>\n\n<script>\nexport default {\n  // No need to import common components\n}\n< /script>',init_options:"{\n  components: ['button', 'input', 'textarea'],\n  nameCasing: 'camelCase'\n}"}}),computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({components:t=>t.components,inDev:t=>t.inDev}))},m=(n(214),n(2)),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page index"},[n("div",{staticClass:"flex column center"},[n("div",{staticClass:"wrapper narrow flex column center"},[n("h1",[t._v("Common components")]),n("h2",{staticClass:"text-regular"},[t._v(t._s(t.description)+".")])]),t._m(0),n("div",{staticClass:"component-list flex center wrap"},t._l(t.components,(function(component){return component.hidden?t._e():n("nuxt-link",{key:component.id,staticClass:"component",attrs:{to:"/docs?component="+component.id}},[t._v(t._s(component.title))])})),1),n("div",{staticClass:"in-dev-list flex column center"},[n("div",[t._v("Coming soon:")]),n("div",{staticClass:"flex center"},t._l(t.inDev,(function(component){return n("div",{key:component},[t._v(t._s(component))])})),0)])]),n("div",{staticClass:"wrapper narrow",attrs:{id:"get_started"}},[n("div",{staticClass:"h1 heading flex center"},[t._v("Getting started")]),n("div",{staticClass:"block"},[t._m(1),n("vCode",{attrs:{data:t.codes.yarn_install}}),n("vCode",{attrs:{data:t.codes.npm_install}})],1),n("div",{staticClass:"block less-margin"},[n("div",{staticClass:"h3"},[t._v("2. Init the plugin.")]),n("div",[t._v("For Vue.js project: use it in your main.js file:")]),n("vCode",{attrs:{data:t.codes.vue_init}})],1),n("div",{staticClass:"block"},[n("div",[t._v("For Nuxt.js project: the plugin inits automatically, just add it in nuxt.config.js:")]),n("vCode",{attrs:{data:t.codes.nuxt_init}})],1),n("div",{staticClass:"block more-margin"},[n("div",{staticClass:"h3"},[t._v("3. Use common components everywhere in project:")]),n("div",[t._v("All common components will register globally.")]),n("div",[t._v("Just use them in your other components or pages.")]),n("vCode",{attrs:{data:t.codes.using}})],1),n("div",{staticClass:"block"},[n("div",{staticClass:"h1 flex center"},[t._v("Manual options")]),n("vCode",{attrs:{data:t.codes.init_options}}),n("div",{staticClass:"h3"},[t._v("components")]),n("div",[t._v("An array of the components to be registered. All of them by default.")]),n("div",{staticClass:"space"}),n("div",{staticClass:"space"}),n("div",{staticClass:"h3"},[t._v("nameCasing")]),n("div",[t._v("Name casing you prefer.")]),n("div",[t._v("camelCase (by default), PascalCase, kebab-case or snake_case.")])],1)]),n("div",{staticClass:"pagination wrapper narrow flex a-center j-end"},[n("div",[t._v("Next: ")]),n("div",[n("nuxt-link",{attrs:{to:"/docs"}},[t._v("Documentation →")])],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"counters flex a-center"},[e("a",{attrs:{href:"https://www.npmjs.com/package/vue-common-components",target:"_blank"}},[e("img",{attrs:{src:"https://img.shields.io/npm/v/vue-common-components.svg"}})]),e("a",{attrs:{href:"https://npm-stat.com/charts.html?package=vue-common-components",target:"_blank"}},[e("img",{attrs:{src:"https://img.shields.io/npm/dm/vue-common-components.svg"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"h3"},[e("span",[this._v("1. Install the dependency via")]),this._v(" "),e("u",[this._v("yarn")]),this._v(" "),e("span",[this._v("or")]),this._v(" "),e("u",[this._v("npm.")])])}],!1,null,"f6821bd0",null);e.default=component.exports}}]);