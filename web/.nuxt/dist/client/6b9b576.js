(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{474:function(t,e,n){var content=n(480);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("34988026",content,!0,{sourceMap:!1})},479:function(t,e,n){"use strict";n(474)},480:function(t,e,n){var r=n(42)(!1);r.push([t.i,".item[data-v-4b1c7bf2]{padding:10px 0}.item .meta[data-v-4b1c7bf2]{font-size:.8em;color:#2b8200;padding:5px 0}.item .files[data-v-4b1c7bf2]{font-size:.8em;color:#555}.el-pagination[data-v-4b1c7bf2]{margin:30px 0 10px}.total-meta[data-v-4b1c7bf2]{margin:0 0 10px}",""]),t.exports=r},488:function(t,e,n){"use strict";n.r(e);n(13),n(27),n(45),n(46),n(47);var r=n(5);n(56),n(26),n(338),n(70),n(31),n(44),n(337);function o(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,f=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){f=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(f)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var c={layout:"search",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l,c,f,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query,r=t.$axios,e.prev=1,console.log(new Date,"search",n.q),l=parseInt(n.p||1),c={keyword:n.q,detail:1,start:10*(l-1),count:10},e.next=7,r.$get("/apis/search",{params:c});case 7:return f=e.sent,(data={items:f.items,meta:f.meta,keyword:n.q,currentPage:l,words:n.q.replace(/。|，|,|！|…|!|《|》|<|>|\"|'|:|：|？|\?|、|\||“|”|‘|’|；|—|（|）|·|\(|\)|　|\.|【|】|『|』|@|&|%|\^|\*|\+|\||<|>|~|`|\[|\]/g," ").split(" ").filter((function(t){return""!=t}))}).items.forEach((function(t){t.files||(t.files=[{path:t.name,length:t.len}]),t.files.sort((function(a,b){return b.length-a.length})),t.files=t.files.slice(0,5),t.files.forEach((function(s){var t,e=o(data.words);try{for(e.s();!(t=e.n()).done;){var n=t.value;s.path=s.path.replace(new RegExp(n,"ig"),(function(t){return'<span class="highlight">'+t+"</span>"}))}}catch(t){e.e(t)}finally{e.f()}}))})),e.abrupt("return",data);case 13:e.prev=13,e.t0=e.catch(1),console.error(new Date,n,e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})))()},methods:{handleChangePage:function(t){var e=this.$route.query;window.location="/search?q="+encodeURIComponent(e.q)+"&p="+t}},head:function(){return{title:this.$route.query.q+" - Gen"}}},f=(n(479),n(18)),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"total-meta"},[t._v("\n\t\tFound "+t._s(t.meta.total_found)+" items for "+t._s(t.keyword)+" in "+t._s(t.meta.time)+"s.\n\t")]),t._v(" "),n("div",{staticClass:"list"},t._l(t.items,(function(e){return n("div",{staticClass:"item"},[n("div",{staticClass:"name"},[n("a",{attrs:{href:"/h/"+e.id}},[t._v(t._s(e.name))])]),t._v(" "),n("div",{staticClass:"meta"},[t._v("\n\t\t\t\t"+t._s(e.files.length)+" files, "+t._s(t._f("size")(e.len))+", "+t._s(e.reqs)+" requests, logged "+t._s(t._f("time")(e.atime))+" ago\n\t\t\t")]),t._v(" "),n("div",{staticClass:"files"},[t._l(e.files.slice(0,5),(function(e){return n("div",[n("p",[n("span",{domProps:{innerHTML:t._s(e.path)}}),t._v(" "+t._s(t._f("size")(e.length)))])])})),t._v(" "),n("p",[t._v("....")])],2)])})),0),t._v(" "),n("div",[n("el-pagination",{attrs:{background:"",layout:"prev, pager, next","current-page":t.currentPage,"page-size":10,total:Math.min(t.meta.total,t.meta.total_found)},on:{"current-change":t.handleChangePage}})],1)])}),[],!1,null,"4b1c7bf2",null);e.default=component.exports}}]);