(function(){"use strict";var t={8917:function(t,e,r){var n=r(6369),i=function(){var t=this,e=t._self._c;return e("div",[e("StoriesList")],1)},o=[],l=function(){var t=this,e=t._self._c;return e("b-container",[e("b-row",[e("b-col",{attrs:{lg:"6"}},[e("b-form-group",{staticClass:"mb-0",attrs:{"label-for":"filter-input","label-cols-sm":"3","label-align-sm":"right","label-size":"sm"}},[e("b-input-group",{attrs:{size:"sm"}},[e("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Pesquisar título"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1)],1)],1)],1),e("b-table",{staticClass:"mt-3",attrs:{striped:"",hover:"",items:t.items,fields:t.fields,busy:t.isBusy,outlined:"",filter:t.filter,"filter-included-fields":t.filterOn},on:{filtered:t.onFiltered},scopedSlots:t._u([{key:"table-busy",fn:function(){return[e("div",{staticClass:"text-center text-danger my-2"},[e("b-spinner",{staticClass:"align-middle"})],1)]},proxy:!0},{key:"cell(favorite)",fn:function(r){return[e("span",{staticClass:"align-center",on:{click:function(e){return t.handleFavorite(r)}}},[r.item.favorite?e("b-icon-star-fill"):e("b-icon-star")],1)]}},{key:"cell(show_details)",fn:function(r){return[e("b-button",{staticClass:"mr-2",attrs:{size:"sm"},on:{click:r.toggleDetails}},[t._v(" "+t._s(r.detailsShowing?"Esconder":"Mostrar")+" Detalhes ")])]}},{key:"row-details",fn:function(r){return[e("b-card",[e("b-row",{staticClass:"mb-2"},[e("b-col",{staticClass:"text-sm-right"},[e("b",[t._v("Conteúdo: ")]),e("a",{attrs:{href:r.item.url}},[t._v(t._s(r.item.url))])])],1)],1)]}}])})],1)},s=[],a=r(6265),u=r.n(a);const c=" https://hacker-news.firebaseio.com/v0/";class f{async getAllTopStoriesId(t){return await u().get(c+`topstories.json?print=pretty&limitToFirst=${t}&orderBy="$key"`).then((t=>t.data))}async getStorieById(t){return await u().get(c+`item/${t}.json?print=pretty`).then((t=>t.data))}async getAllTopStories(t=500){let e=await this.getAllTopStoriesId(t),r=await Promise.all(e.map((async t=>await this.getStorieById(t).then((t=>{if("story"===t.type)return t})))));return r}}var d=r(8752);const p=new f;var b={components:{BIconStar:d.rWC,BIconStarFill:d.z76},data(){return{fields:[{key:"id"},{key:"title",label:"Título",filterByFormatted:!0},{key:"type",label:"Tipo"},{key:"by",label:"Criado por"},{key:"favorite",label:"Favoritar"},{key:"show_details",label:"Detalhes"}],isBusy:!0,items:[],filter:null,filterOn:[]}},methods:{toggleBusy(){this.isBusy=!this.isBusy},handleFavorite(t){let e={...t.item,favorite:!t.item.favorite};this.items[t.index].favorite=e.favorite}},mounted(){p.getAllTopStories(100).then((t=>{this.items=t.map((t=>({...t,favorite:!1}))),console.log(t),this.toggleBusy()}))}},y=b,h=r(1001),m=(0,h.Z)(y,l,s,!1,null,null,null),v=m.exports,g={name:"App",components:{StoriesList:v}},w=g,k=(0,h.Z)(w,i,o,!1,null,null,null),_=k.exports,S=r(5996),O=r(9425);r(7024);n["default"].use(S.XG7),n["default"].use(O.A7),new n["default"]({render:t=>t(_)}).$mount("#app")}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}r.m=t,function(){var t=[];r.O=function(e,n,i,o){if(!n){var l=1/0;for(c=0;c<t.length;c++){n=t[c][0],i=t[c][1],o=t[c][2];for(var s=!0,a=0;a<n.length;a++)(!1&o||l>=o)&&Object.keys(r.O).every((function(t){return r.O[t](n[a])}))?n.splice(a--,1):(s=!1,o<l&&(l=o));if(s){t.splice(c--,1);var u=i();void 0!==u&&(e=u)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[n,i,o]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,o,l=n[0],s=n[1],a=n[2],u=0;if(l.some((function(e){return 0!==t[e]}))){for(i in s)r.o(s,i)&&(r.m[i]=s[i]);if(a)var c=a(r)}for(e&&e(n);u<l.length;u++)o=l[u],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(c)},n=self["webpackChunklist_challenge"]=self["webpackChunklist_challenge"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(8917)}));n=r.O(n)})();
//# sourceMappingURL=app.6c2e77f5.js.map