var e=function(e,t,n,r,i,o,s,a,l,d){"boolean"!=typeof s&&(l=a,a=s,s=!1);var u,c="function"==typeof n?n.options:n;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,i&&(c.functional=!0)),r&&(c._scopeId=r),o?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=u):t&&(u=s?function(){t.call(this,d(this.$root.$options.shadowRoot))}:function(e){t.call(this,a(e))}),u)if(c.functional){var p=c.render;c.render=function(e,t){return u.call(t),p(e,t)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,u):[u]}return n}({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"repo-searchable-select-vue"},[n("input",e._b({class:[{error:e.hasError},{success:!e.hasError}],attrs:{type:"text",autocomplete:"off",list:"repo--results-"+e.componentInternalID,id:"repo--search-"+e.componentInternalID},domProps:{value:e.selectedValue},on:{focus:e.onInputFocus,change:function(t){return e.onInputChange(t.currentTarget.value)}}},"input",e.$attrs,!1)),e._v(" "),n("datalist",{attrs:{id:"repo--results-"+e.componentInternalID}},e._l(e.options,function(t){return n("option",{key:"option-"+t.id,attrs:{"data-value":t.id},domProps:{selected:t.id==e.selected}},[e._v(e._s(t.value))])}),0),e._v(" "),n("input",{attrs:{type:"hidden",name:e.name,id:e.id||e.name},domProps:{value:e.selectedID}})])},staticRenderFns:[]},void 0,{name:"RepoSearchableSelect",inheritAttrs:!1,props:{name:{type:String,required:!0},id:{type:String,required:!1},options:{type:Array,required:!0},value:{type:String,required:!1,default:""},additionalclass:{type:String,required:!1,default:""}},data:function(){return{componentInternalID:Math.random().toString(36).substring(2,9),selectedID:null,selectedValue:null,hasError:!1}},computed:{classes:function(){return console.log("aa",this.additionalclass.split(" ")),this.additionalclass.split(" ")}},methods:{onInputFocus:function(e){e.currentTarget.select()},onInputChange:function(e){return void 0===e&&(e=""),this.selectedID=this.options.filter(function(t){return t.value.toString().toLowerCase()==e.toString().toLowerCase()}).map(function(e){return e.id})[0]||null,this.getSelectedName(this.selectedID),this.hasError=void 0!==this.$attrs.required&&"false"!=this.$attrs.required&&!this.selectedID,this.selectedID},getSelectedName:function(e){return void 0===e&&(e=null),this.selectedValue=this.options.filter(function(t){return t.id==e}).map(function(e){return e.value})[0]||null,this.selectedValue}},created:function(){this.options.length&&this.value&&this.onInputChange(this.value)},updated:function(){this.$emit("change",this.selectedID?{id:this.selectedID,value:this.selectedValue,refer:"#"+this.id}:null)}},void 0,!1,void 0,void 0,void 0);function t(n){t.installed||(t.installed=!0,n.component("RepoSearchableSelect",e))}var n={install:t},r=null;"undefined"!=typeof window?r=window.Vue:"undefined"!=typeof global&&(r=global.Vue),r&&r.use(n),e.install=t;export default e;
