(function(e){function t(t){for(var n,s,o=t[0],l=t[1],c=t[2],u=0,f=[];u<o.length;u++)s=o[u],r[s]&&f.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},i=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Component1"),a("Component2")],1)},i=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v('"bruh"')])},o=[],l={},c=l,d=a("2877"),u=Object(d["a"])(c,s,o,!1,null,null,null),f=u.exports,m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[e._v("My CRUD")]),a("v-divider",{staticClass:"mx-2",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-dialog",{scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-btn",e._g({staticClass:"mb-2",attrs:{color:"primary",dark:""}},n),[e._v("New Item")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"Dessert name"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"Calories"},model:{value:e.editedItem.calories,callback:function(t){e.$set(e.editedItem,"calories",t)},expression:"editedItem.calories"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"Fat (g)"},model:{value:e.editedItem.fat,callback:function(t){e.$set(e.editedItem,"fat",t)},expression:"editedItem.fat"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"Carbs (g)"},model:{value:e.editedItem.carbs,callback:function(t){e.$set(e.editedItem,"carbs",t)},expression:"editedItem.carbs"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"Protein (g)"},model:{value:e.editedItem.protein,callback:function(t){e.$set(e.editedItem,"protein",t)},expression:"editedItem.protein"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:e.close}},[e._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.desserts},scopedSlots:e._u([{key:"items",fn:function(t){return[a("td",[e._v(e._s(t.item.name))]),a("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.calories))]),a("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.fat))]),a("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.carbs))]),a("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.protein))]),a("td",{staticClass:"justify-center layout px-0"},[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(a){return e.editItem(t.item)}}},[e._v("\n          edit\n        ")]),a("v-icon",{attrs:{small:""},on:{click:function(a){return e.deleteItem(t.item)}}},[e._v("\n          delete\n        ")])],1)]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v("Reset")])]},proxy:!0}])})],1)},v=[],p=a("5176"),b=a.n(p),x={data:function(){return{dialog:!1,headers:[{text:"Dessert (100g serving)",align:"left",sortable:!1,value:"name"},{text:"Calories",value:"calories"},{text:"Fat (g)",value:"fat"},{text:"Carbs (g)",value:"carbs"},{text:"Protein (g)",value:"protein"},{text:"Actions",value:"name",sortable:!1}],desserts:[],editedIndex:-1,editedItem:{name:"",calories:0,fat:0,carbs:0,protein:0},defaultItem:{name:"",calories:0,fat:0,carbs:0,protein:0}}},computed:{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}},watch:{dialog:function(e){e||this.close()}},created:function(){this.initialize()},methods:{initialize:function(){this.desserts=[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3},{name:"Eclair",calories:262,fat:16,carbs:23,protein:6},{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9},{name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0},{name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0},{name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5},{name:"Donut",calories:452,fat:25,carbs:51,protein:4.9},{name:"KitKat",calories:518,fat:26,carbs:65,protein:7}]},editItem:function(e){this.editedIndex=this.desserts.indexOf(e),this.editedItem=b()({},e),this.dialog=!0},deleteItem:function(e){var t=this.desserts.indexOf(e);confirm("Are you sure you want to delete this item?")&&this.desserts.splice(t,1)},close:function(){var e=this;this.dialog=!1,setTimeout(function(){e.editedItem=b()({},e.defaultItem),e.editedIndex=-1},300)},save:function(){this.editedIndex>-1?b()(this.desserts[this.editedIndex],this.editedItem):this.desserts.push(this.editedItem),this.close()}}},h=x,g=Object(d["a"])(h,m,v,!1,null,null,null),I=g.exports,_={name:"app",components:{Component1:f,Component2:I}},y=_,k=(a("034f"),Object(d["a"])(y,r,i,!1,null,null,null)),C=k.exports,w=a("ce5b"),O=a.n(w);a("bf40");n["default"].use(O.a),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(C)}}).$mount("#app")},"64a9":function(e,t,a){}});
//# sourceMappingURL=app.8b755fab.js.map