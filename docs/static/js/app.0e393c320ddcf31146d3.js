webpackJsonp([1],{"6Hrc":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),s=[{itemId:6,image:"vscode.png",demo:"sample.gif",url:"https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag",title:"Auto Close Tag",categorys:[{id:4,name:"Visual Studio Code"},{id:5,name:"coding"}],text:"HTMLでタグを書き換えるとそれに対応したタグも自動的に切り替えてくれるvscodeの拡張機能。これがあればタグの書き換え忘れやタイプミスが減る。",date:2019.05},{itemId:5,image:"vscode.png",demo:"sample.gif",url:"https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces",title:"Trailing Spaces",categorys:[{id:4,name:"Visual Studio Code"},{id:5,name:"coding"}],text:"余分な空白を表示してくれるvscodeの拡張機能。これがあれば空白ミスに時間を取られる心配はない。",date:2019.05},{itemId:4,image:"chrome.png",demo:"sample.gif",url:"https://chrome.google.com/webstore/detail/pixelparallel-by-htmlburg/iffnoibnepbcloaaagchjonfplimpkob?hl=ja",title:"PixelParallel by htmlBurger",categorys:[{id:2,name:"Google Chrom"},{id:5,name:"coding"}],text:"画像をブラウザに重ねてレイアウトを確認できる。コーディングの効率が上がる。",date:2019.05},{itemId:3,image:"liveserver.png",demo:"liveserver.gif",url:"https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer",title:"Live Server",categorys:[{id:4,name:"Visual Studio Code"},{id:5,name:"coding"}],text:"ファイルを保存するとブラウザを自動でリロードしてくれる。コーディングの効率が上がる。",date:2019.05},{itemId:2,image:"chrome.png",demo:"sample.gif",url:"https://chrome.google.com/webstore/detail/website-ip/ghbmhlgniedlklkpimlibbaoomlpacmk?hl=ja",title:"Website IP",categorys:[{id:2,name:"Google Chrom"},{id:3,name:"IP"}],text:"webサイトのipアドレスをブラウザの下部に表示してくれる拡張機能。",date:2019.05},{itemId:1,image:"sousetree.jpeg",demo:"sample.gif",url:"https://www.sourcetreeapp.com/",title:"Source Tree",categorys:[{id:1,name:"Git"}],text:"Gitでのバージョン管理をローカルで行えるアプリケーション。",date:2019.05}],r=[];s.forEach(function(t){t.categorys.forEach(function(t){r.push(t)})});var n=r.filter(function(t,e,i){return i.findIndex(function(e){return t.id===e.id})===e}),o=function(){return s},c=function(t){return s.find(function(e){return e.itemId===t})},l=function(t){return s.filter(function(e){return e.categorys.find(function(e){return e.id===t})})},m=function(t){return s.filter(function(e){return e.text.toUpperCase().includes(t)||e.title.toUpperCase().includes(t)})},u=function(){return s.slice(0,3)},d=function(){return n},p={name:"Items",props:{id:Number,searchWord:String},data:function(){return{items:[],noItem:null}},created:function(){if(this.id)return this.items=l(this.id);if(this.searchWord){var t=m(this.searchWord.toUpperCase());return t.length?this.items=t:this.noItem=this.searchWord+" の検索結果はありませんでした。"}this.items=o()},watch:{id:function(t){var e=this;this.noItem="",t&&(this.items=[],setTimeout(function(){e.items=l(t)},1e3))},searchWord:function(t){var e=this;t&&(this.noItem="",this.items=[],setTimeout(function(){var i=m(t.toUpperCase());if(!i.length)return e.noItem=t+" の検索結果はありませんでした。";e.items=i},1e3))},$route:function(t){var e=this;"/all"===t.path&&(this.noItem="",this.items=[],setTimeout(function(){e.items=o()},1e3))}}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"items"},[t.items.length?i("div",{key:"item",staticClass:"item-content"},t._l(t.items,function(e){var a=e.itemId,s=e.title,r=e.image,n=e.categorys,o=e.text;return i("router-link",{key:a,staticClass:"item",attrs:{to:"/item/"+a}},[i("div",{staticClass:"item-image"},[i("img",{attrs:{src:"./static/image/"+r,alt:""}})]),t._v(" "),i("div",{staticClass:"item-detail"},[i("div",{staticClass:"item-detail-category"},t._l(n,function(e){var a=e.id,s=e.name;return i("span",{key:a,staticClass:"item-detail-category-inner"},[t._v(t._s(s))])}),0),t._v(" "),i("h2",{staticClass:"item-detail-title"},[t._v(t._s(s))]),t._v(" "),i("div",{staticClass:"item-detail-content"},[t._v(t._s(o))])])])}),1):t.noItem?i("div",{staticClass:"no-item"},[t._v(t._s(t.noItem))]):i("div",{key:"loading",staticClass:"load"},[t._v("Loading...")])])},staticRenderFns:[]};var v=i("VU/8")(p,h,!1,function(t){i("eoQA")},null,null).exports,f={name:"Sidebar",data:function(){return{categorys:[],searchWord:"",currentPost:[],itemId:""}},created:function(){this.categorys=d(),this.currentPost=u()},methods:{search:function(){this.searchWord}},watch:{$route:function(t){t.query.searchWord||(this.searchWord="")}}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"sidebar"},[i("div",{staticClass:"panel"},[i("div",{staticClass:"panel-search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.searchWord,expression:"searchWord"}],staticClass:"panel-search-input",attrs:{required:"",type:"text",placeholder:"キーワード検索"},domProps:{value:t.searchWord},on:{input:function(e){e.target.composing||(t.searchWord=e.target.value)}}}),t._v(" "),i("router-link",{staticClass:"panel-search-btn",attrs:{to:{name:"ItemKeyword",query:{searchWord:t.searchWord}}}},[i("font-awesome-icon",{staticClass:"icon",attrs:{icon:"search"}})],1)],1)]),t._v(" "),i("div",{staticClass:"panel"},[i("h2",{staticClass:"panel-title"},[t._v("カテゴリ")]),t._v(" "),i("div",{staticClass:"panel-category"},[i("router-link",{staticClass:"panel-category-inner",attrs:{to:"/all"}},[t._v("All")]),t._v(" "),t._l(t.categorys,function(e){var a=e.id,s=e.name;return i("router-link",{key:a,staticClass:"panel-category-inner",attrs:{to:"/"+a}},[t._v(t._s(s))])})],2)]),t._v(" "),i("div",{staticClass:"panel"},[i("h2",{staticClass:"panel-title"},[t._v("最近の投稿")]),t._v(" "),i("ul",{staticClass:"panel-recently"},t._l(t.currentPost,function(e){var a=e.itemId,s=e.title;return i("li",{key:a},[i("router-link",{staticClass:"item-link",attrs:{to:"/item/"+a}},[t._v(t._s(s))])],1)}),0)])])},staticRenderFns:[]};var _={name:"App",components:{Items:v,Sidebar:i("VU/8")(f,g,!1,function(t){i("zeqs")},"data-v-06bc0c76",null).exports}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("header",{staticClass:"header"},[e("h1",{staticClass:"header-site-title"},[e("router-link",{staticClass:"header-site-title-link",attrs:{to:"/all"}},[this._v("AWESOME TOOLS")])],1)]),this._v(" "),e("main",{staticClass:"main"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"item-area"},[e("transition",{attrs:{name:"item"}},[e("router-view")],1)],1),this._v(" "),e("Sidebar")],1)]),this._v(" "),e("footer",{staticClass:"footer"},[this._v("\n    © AWESOME TOOLS\n  ")])])},staticRenderFns:[]};var y=i("VU/8")(_,C,!1,function(t){i("6Hrc")},null,null).exports,b=i("/ocq"),I={name:"ItemDetail",props:{itemId:Number},data:function(){return{item:null}},watch:{itemId:function(t){var e=this;this.item=null,setTimeout(function(){e.item=c(t)},1e3)}},created:function(){this.item=c(this.itemId)}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"abouts"},[t.item?i("section",{staticClass:"about"},[i("div",{staticClass:"about-image"},[i("img",{attrs:{src:"./static/image/"+t.item.demo,alt:""}})]),t._v(" "),i("div",{staticClass:"about-category"},t._l(t.item.categorys,function(e){var a=e.id,s=e.name;return i("router-link",{key:a,staticClass:"about-category-inner",attrs:{to:"/"+a}},[t._v(t._s(s))])}),1),t._v(" "),i("a",{staticClass:"about-title",attrs:{target:"_blank",href:t.item.url}},[t._v(t._s(t.item.title))]),t._v(" "),i("div",{staticClass:"about-content"},[t._v(t._s(t.item.text))]),t._v(" "),i("div",{staticClass:"about-date"},[t._v(t._s(t.item.date))])]):i("div",{staticClass:"load"},[t._v("Loading...")]),t._v(" "),i("router-link",{staticClass:"back",attrs:{to:"/"}},[t._v("< Top")])],1)},staticRenderFns:[]};var W=i("VU/8")(I,k,!1,function(t){i("mIl8")},null,null).exports;a.a.use(b.a);var w=new b.a({routes:[{path:"/",name:"Items",component:v},{path:"/all",component:v},{path:"/:id",name:"ItemCategory",component:v,props:function(t){return{id:Number(t.params.id)}}},{path:"/",name:"ItemKeyword",component:v,props:function(t){return{searchWord:String(t.query.searchWord)}}},{path:"/item/:itemId",name:"ItemDetail",component:W,props:function(t){return{itemId:Number(t.params.itemId)}}}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),x=i("C/JF"),S=i("fhbW"),T=i("1e6/");x.c.add(S.a),a.a.component("font-awesome-icon",T.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:w,components:{App:y},template:"<App/>"})},eoQA:function(t,e){},mIl8:function(t,e){},zeqs:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0e393c320ddcf31146d3.js.map