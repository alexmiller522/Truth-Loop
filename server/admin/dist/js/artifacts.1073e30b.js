(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["artifacts"],{"950d":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{"data-app":"",id:"artifact-table"}},[a("v-card",[a("v-card-title",[e._v(" All Artifacts "),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-data-table",{staticClass:"elevation-24",attrs:{headers:e.headers,items:this.items,"item-key":"id","sort-by":["date_introduced"],"sort-desc":[!0],search:e.search,"show-expand":"",dense:"","group-desc":"","show-group-by":"","multi-sort":""},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogEdit,callback:function(t){e.dialogEdit=t},expression:"dialogEdit"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("Edit Item")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Title"},model:{value:e.editedItem.title,callback:function(t){e.$set(e.editedItem,"title",t)},expression:"editedItem.title"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Summary"},model:{value:e.editedItem.summary,callback:function(t){e.$set(e.editedItem,"summary",t)},expression:"editedItem.summary"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}}),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}})],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.cancel}},[e._v(" Cancel ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v(" Save ")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v(" Are you sure you want to delete this item? ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),a("v-spacer")],1)],1)],1)]},proxy:!0},{key:"item.link_to_full_text",fn:function(t){var i=t.item;return[a("v-btn",{attrs:{icon:"",disabled:!e.isUrl(i.link_to_full_text),href:i.link_to_full_text}},[a("v-icon",{attrs:{left:""}},[e._v("mdi-open-in-new")])],1)]}},{key:"item.date_introduced",fn:function(t){var a=t.item;return[e._v(" "+e._s(new Date(a.date_introduced).toLocaleDateString())+" ")]}},{key:"expanded-item",fn:function(t){var i=t.headers,n=t.item;return[a("td",{attrs:{colspan:i.length}},[e._v(" "+e._s(n.summary)+" ")])]}},{key:"item.actions",fn:function(t){var i=t.item;return[a("v-icon",{attrs:{small:""},on:{click:function(t){return e.editItem(i)}}},[e._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteDialog(i)}}},[e._v(" mdi-delete ")])]}}])})],1)],1)},n=[],l=(a("c975"),a("a434"),a("d3b7"),a("2ca0"),a("5530")),r=(a("96cf"),a("1da1")),s={name:"artifact-table",data:function(){return{items:[],dialogEdit:!1,dialogDelete:!1,editedIndex:-1,editedItem:{},cachedItem:{},search:"",headers:[{text:"ID",value:"id",filterable:!0,groupable:!1},{text:"Title",value:"title",filterable:!0,groupable:!1},{text:"URL",value:"link_to_full_text",filterable:!0,groupable:!1},{text:"Status",value:"status",filterable:!0},{text:"Date Introduced",value:"date_introduced",filterable:!0,groupable:!1},{text:"Channel ID",value:"channel_id",filterable:!0,groupable:!1},{text:"Actions",value:"actions",filterable:!1,groupable:!1}]}},mounted:function(){this.getItems()},methods:{isUrl:function(e){return!!e&&e.length>7&&e.startsWith("http")},getItems:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/api/v1/legislativeArtifacts");case 3:return a=t.sent,t.next=6,a.json();case 6:e.items=t.sent,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},editMode:function(e){this.cachedItem=Object(l["a"])({},e)},cancelEdit:function(e){Object.assign(e,this.cachedItem),this.items.splice(this.editedIndex,1,this.cachedItem),this.dialogEdit=!1},editItem:function(e){this.editMode(e),this.editedIndex=this.items.indexOf(e),this.editedItem=e,this.dialogEdit=!0},deleteItem:function(e){return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,console.log("deleteItem..."),t.next=4,fetch("/api/v1/legislativeArtifacts/fullDetail/".concat(e),{method:"DELETE"});case 4:return a=t.sent,console.log("RESPONSE:",a),t.next=8,a.json();case 8:i=t.sent,console.log("DATA:",i),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](0),console.error(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))()},deleteDialog:function(e){this.editedIndex=this.items.indexOf(e),this.dialogDelete=!0},deleteItemConfirm:function(){var e=this.items[this.editedIndex];this.deleteItem(e.id),this.items.splice(this.editedIndex,1),this.closeDelete()},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedIndex=-1}))},save:function(){this.updateItem(this.items[this.editedIndex]),this.dialogEdit=!1},cancel:function(e){this.cancelEdit(e)},open:function(){console.log("open()")},close:function(){console.log("Dialog closed"),this.dialogEdit=!1,console.log("close()")},updateItem:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch("/api/v1/legislativeArtifacts/".concat(e.id),{method:"PUT",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}});case 3:t.items.splice(t.editedIndex,1,e),a.next=9;break;case 6:a.prev=6,a.t0=a["catch"](0),console.error(a.t0);case 9:case"end":return a.stop()}}),a,null,[[0,6]])})))()}}},c=s,o=a("2877"),d=a("6544"),u=a.n(d),m=a("8336"),v=a("b0af"),f=a("99d9"),h=a("62ad"),p=a("a523"),x=a("8fea"),b=a("169a"),g=a("132d"),I=a("0fd9"),k=a("2fa4"),_=a("8654"),w=Object(o["a"])(c,i,n,!1,null,null,null);t["default"]=w.exports;u()(w,{VBtn:m["a"],VCard:v["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VCol:h["a"],VContainer:p["a"],VDataTable:x["a"],VDialog:b["a"],VIcon:g["a"],VRow:I["a"],VSpacer:k["a"],VTextField:_["a"]})}}]);
//# sourceMappingURL=artifacts.1073e30b.js.map