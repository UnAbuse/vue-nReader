webpackJsonp([6],{283:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(25);e.default={name:"Ranklist",data:function(){return{}},computed:{headTitle:function(){return this.$store.state.headTitle}},beforeRouteLeave:function(t,e,n){this.$store.commit(a.b,"排行"),n()}}},294:function(t,e,n){e=t.exports=n(73)(!0),e.push([t.i,"ul[data-v-19196cd8]{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;width:100vw;background:#fff}.rank-tab[data-v-19196cd8]{position:fixed;top:2rem;left:0;z-index:10;border-bottom:1px solid #ccc}li[data-v-19196cd8]{text-align:center;line-height:2.5rem;width:33.3%}.active[data-v-19196cd8]{border-bottom:2px solid #04b1ff}","",{version:3,sources:["/home/runner/work/vue-nReader/vue-nReader/src/components/ranklist/Ranklist.vue"],names:[],mappings:"AACA,oBACC,oBAAqB,AACrB,aAAc,AACd,uBAAwB,AACpB,mBAAoB,AACxB,sBAAuB,AACnB,8BAA+B,AACnC,YAAa,AACb,eAAiB,CACjB,AACD,2BACC,eAAgB,AAChB,SAAU,AACV,OAAQ,AACR,WAAY,AACZ,4BAA8B,CAC9B,AACD,oBACC,kBAAmB,AACnB,mBAAoB,AACpB,WAAa,CACb,AACD,yBACC,+BAAiC,CACjC",file:"Ranklist.vue",sourcesContent:["\nul[data-v-19196cd8] {\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-direction: row;\n\t    flex-direction: row;\n\t-ms-flex-pack: justify;\n\t    justify-content: space-between;\n\twidth: 100vw;\n\tbackground: #fff;\n}\n.rank-tab[data-v-19196cd8] {\n\tposition: fixed;\n\ttop: 2rem;\n\tleft: 0;\n\tz-index: 10;\n\tborder-bottom: 1px solid #ccc;\n}\nli[data-v-19196cd8] {\n\ttext-align: center;\n\tline-height: 2.5rem;\n\twidth: 33.3%;\n}\n.active[data-v-19196cd8] {\n\tborder-bottom: 2px #04b1ff solid;\n}\n"],sourceRoot:""}])},306:function(t,e,n){var a=n(294);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(74)("52449a16",a,!0)},331:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mt-header",{attrs:{fixed:"",title:t.headTitle}},[n("router-link",{attrs:{slot:"left",to:"/"},slot:"left"},[n("mt-button",{attrs:{icon:"back"}},[t._v("返回")])],1)],1),t._v(" "),n("ul",{staticClass:"rank-tab"},[n("router-link",{attrs:{tag:"li",to:"/ranklist/weekRank","active-class":"active",exact:""}},[t._v("周榜")]),t._v(" "),n("router-link",{attrs:{tag:"li",to:"/ranklist/monthRank","active-class":"active",exact:""}},[t._v("月榜")]),t._v(" "),n("router-link",{attrs:{tag:"li",to:"/ranklist/totalRank","active-class":"active",exact:""}},[t._v("总榜")])],1),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},80:function(t,e,n){n(306);var a=n(24)(n(283),n(331),"data-v-19196cd8",null);t.exports=a.exports}});
//# sourceMappingURL=6.80d8a94e85c3abf9631a.js.map