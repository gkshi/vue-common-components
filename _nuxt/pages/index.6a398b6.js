(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{250:function(t,e,n){var content=n(253);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("970bc56c",content,!0,{sourceMap:!1})},252:function(t,e,n){"use strict";var o=n(250);n.n(o).a},253:function(t,e,n){(e=n(3)(!1)).push([t.i,".code-component[data-v-70327f4a]{max-width:100%;margin:0 auto}.code-component code[data-v-70327f4a]{display:block;margin:15px auto;padding:15px 30px 17px;background:#f3f3f5;font-family:monospace;font-size:16px;line-height:21px;border-radius:5px;max-height:270px;overflow:auto}",""]),t.exports=e},255:function(t,e,n){var content=n(260);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("c075778c",content,!0,{sourceMap:!1})},256:function(t,e,n){"use strict";var o={name:"code-component",props:{data:{type:String,default:""}},methods:{select:function(){if(document.selection){var t=document.body.createTextRange();t.moveToElementText(this.$refs.code),t.select()}else if(window.getSelection){var e=document.createRange();e.selectNode(this.$refs.code),window.getSelection().removeAllRanges(),window.getSelection().addRange(e)}}}},c=(n(252),n(2)),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{staticClass:"code-component",on:{click:this.select}},[e("code",{ref:"code"},[this.data?e("div",[this._v(this._s(this.data))]):this._t("default")],2)])}),[],!1,null,"70327f4a",null);e.a=component.exports},259:function(t,e,n){"use strict";var o=n(255);n.n(o).a},260:function(t,e,n){(e=n(3)(!1)).push([t.i,".page.index[data-v-cf37d7b8]{margin-top:60px;margin-bottom:100px}.page.index .heading[data-v-cf37d7b8]{margin-bottom:40px}.page.index .component-list[data-v-cf37d7b8]{width:900px;max-width:100%;margin:50px auto 100px}.page.index .component-list>*[data-v-cf37d7b8]{margin:8px}.page.index .in-dev-list[data-v-cf37d7b8]{margin-top:-70px;margin-bottom:100px;font-size:15px;line-height:19px;color:#aaa;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.page.index .in-dev-list .flex>*[data-v-cf37d7b8]{margin:4px 6px}.page.index .component[data-v-cf37d7b8]{display:block;background:#f3f3f5;color:#323232;padding:10px 32px 12px;border-radius:30px;text-decoration:none;transition:all .2s ease}.page.index .component[data-v-cf37d7b8]:hover{background:#ebebee}.page.index section[data-v-cf37d7b8]{margin-bottom:50px}.page.index .pagination[data-v-cf37d7b8]{margin-top:100px}",""]),t.exports=e},261:function(t,e,n){"use strict";n.r(e);n(38),n(21),n(12),n(9),n(17);var o=n(15),c=n(117),code=n(256);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d=n(143).description,l={components:{vCode:code.a},data:function(){return{description:d,codes:{yarn_install:"yarn add --dev vue-common-components",npm_install:"npm i vue-common-components",vue_init:"import Vue from 'vue'\nimport VueCommonComponents from 'vue-common-components'\nVue.use(VueCommonComponents, {\n  // manual options here\n})",nuxt_init:"export default {\n  plugins: [\n    'node_modules/vue-common-components'\n  ],\n  commonComponents: {\n    // manual options here\n  }\n}",using:'<template>\n  <div class="your-any-component">\n    <common-button>Button</common-button>\n  </div>\n</template>\n\n<script>\nexport default {\n  // No need to import common components\n}\n< /script>',init_options:"{\n  components: ['button', 'input', 'textarea'],\n  nameCasing: 'camelCase'\n}"}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({components:function(t){return t.components},inDev:function(t){return t.inDev}}))},m=(n(259),n(2)),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page index"},[n("div",{staticClass:"flex column center"},[n("div",{staticClass:"wrapper narrow flex column center"},[n("h1",[t._v("Common components")]),n("h2",{staticClass:"text-regular"},[t._v(t._s(t.description)+".")])]),n("div",{staticClass:"component-list flex center wrap"},t._l(t.components,(function(component){return component.hidden?t._e():n("nuxt-link",{key:component.id,staticClass:"component",attrs:{to:"/docs?component="+component.id}},[t._v(t._s(component.title))])})),1),n("div",{staticClass:"in-dev-list flex column center"},[n("div",[t._v("Coming soon:")]),n("div",{staticClass:"flex center"},t._l(t.inDev,(function(component){return n("div",{key:component},[t._v(t._s(component))])})),0)])]),n("div",{staticClass:"wrapper narrow",attrs:{id:"get_started"}},[n("div",{staticClass:"h1 heading flex center"},[t._v("Getting started")]),n("div",{staticClass:"block"},[t._m(0),n("vCode",{attrs:{data:t.codes.yarn_install}}),n("vCode",{attrs:{data:t.codes.npm_install}})],1),n("div",{staticClass:"block less-margin"},[n("div",{staticClass:"h3"},[t._v("2. Init the plugin.")]),n("div",[t._v("For Vue.js project: use it in your main.js file:")]),n("vCode",{attrs:{data:t.codes.vue_init}})],1),n("div",{staticClass:"block"},[n("div",[t._v("For Nuxt.js project: the plugin inits automatically, just add it in nuxt.config.js:")]),n("vCode",{attrs:{data:t.codes.nuxt_init}})],1),n("div",{staticClass:"block more-margin"},[n("div",{staticClass:"h3"},[t._v("3. Use common components everywhere in project:")]),n("div",[t._v("All common components will register globally.")]),n("div",[t._v("Just use them in your other components or pages.")]),n("vCode",{attrs:{data:t.codes.using}})],1),n("div",{staticClass:"block"},[n("div",{staticClass:"h1 flex center"},[t._v("Manual options")]),n("vCode",{attrs:{data:t.codes.init_options}}),n("div",{staticClass:"h3"},[t._v("components")]),n("div",[t._v("An array of the components to be registered. All of them by default.")]),n("div",{staticClass:"space"}),n("div",{staticClass:"space"}),n("div",{staticClass:"h3"},[t._v("nameCasing")]),n("div",[t._v("Name casing you prefer.")]),n("div",[t._v("camelCase (by default), PascalCase, kebab-case or snake_case.")])],1)]),n("div",{staticClass:"pagination wrapper narrow flex a-center j-end"},[n("div",[t._v("Next: ")]),n("div",[n("nuxt-link",{attrs:{to:"/docs"}},[t._v("Documentation →")])],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"h3"},[e("span",[this._v("1. Install the dependency via")]),this._v(" "),e("u",[this._v("yarn")]),this._v(" "),e("span",[this._v("or")]),this._v(" "),e("u",[this._v("npm.")])])}],!1,null,"cf37d7b8",null);e.default=component.exports}}]);