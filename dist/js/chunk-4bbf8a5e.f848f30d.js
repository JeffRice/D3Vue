(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bbf8a5e"],{"0e65":function(t,e,r){},"4cca":function(t,e,r){"use strict";r("7c25")},"7c25":function(t,e,r){},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(N){c=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var a=e&&e.prototype instanceof m?e:m,i=Object.create(a.prototype),o=new S(n||[]);return i._invoke=A(t,r,o),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(N){return{type:"throw",arg:N}}}t.wrap=h;var l="suspendedStart",f="suspendedYield",d="executing",p="completed",g={};function m(){}function v(){}function y(){}var x={};c(x,i,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(k([])));b&&b!==r&&n.call(b,i)&&(x=b);var _=y.prototype=m.prototype=Object.create(x);function L(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(a,i,o,s){var c=u(t[a],t,i);if("throw"!==c.type){var h=c.arg,l=h.value;return l&&"object"===typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,o,s)}),(function(t){r("throw",t,o,s)})):e.resolve(l).then((function(t){h.value=t,o(h)}),(function(t){return r("throw",t,o,s)}))}s(c.arg)}var a;function i(t,n){function i(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(i,i):i()}this._invoke=i}function A(t,e,r){var n=l;return function(a,i){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===a)throw i;return z()}r.method=a,r.arg=i;while(1){var o=r.delegate;if(o){var s=C(o,r);if(s){if(s===g)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var c=u(t,e,r);if("normal"===c.type){if(n=r.done?p:f,c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}function C(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,C(t,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var a=u(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function k(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function r(){while(++a<t.length)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}return{next:z}}function z(){return{value:e,done:!0}}return v.prototype=y,c(_,"constructor",y),c(y,"constructor",v),v.displayName=c(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},L(E.prototype),c(E.prototype,o,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,a,i){void 0===i&&(i=Promise);var o=new E(h(e,r,n,a),i);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},L(_),c(_,s,"Generator"),c(_,i,(function(){return this})),c(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return s.type="throw",s.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),h=n.call(o,"finallyLoc");if(c&&h){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=n}catch(a){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},a9ca:function(t,e,r){"use strict";r("0e65")},aeeb:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("LargeLineChartAxes"),r("SmallLineChartAxes"),r("plotWithXandY",{attrs:{height:400}})],1)},a=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("p",[t._v("Here we are using the exact same code to create a Linechart similar to the one above it. The only difference is giving it different data and giving it's container a different width. The axes are automatically scaled to the new data and it all responds to the container size. Resizing the browser will scale everything in the visualization.")]),r("h3",[t._v(t._s(t.data))]),r("LineChartAxes2",t._b({staticStyle:{width:"50%",border:"1px solid #ccc"}},"LineChartAxes2",{data:t.data},!1))],1)},o=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticClass:"line-chart2",attrs:{viewBox:t.viewBox}},[r("g",{attrs:{transform:"translate(30, 10)"}},[r("path",{staticClass:"line-chart__line",attrs:{d:t.line}})])])},c=[];r("d3b7");function h(t,e,r,n,a,i,o){try{var s=t[i](o),c=s.value}catch(h){return void r(h)}s.done?e(c):Promise.resolve(c).then(n,a)}function u(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function o(t){h(i,n,a,o,s,"next",t)}function s(t){h(i,n,a,o,s,"throw",t)}o(void 0)}))}}r("96cf"),r("a9e3"),r("99af");var l=r("898b"),f={name:"LineChartAxes2",props:{data:{required:!0,type:Array},width:{default:500,type:Number},height:{default:270,type:Number}},data:function(){return{padding:30}},computed:{rangeX:function(){var t=this.width-this.padding;return[0,t]},rangeY:function(){var t=this.height-this.padding;return[t,0]},path:function(){var t=l["g"]().range(this.rangeX),e=l["g"]().range(this.rangeY);return l["b"]().scale(t),l["c"]().scale(e),t.domain(l["d"](this.data,(function(t,e){return e}))),e.domain([0,l["f"](this.data,(function(t){return t}))]),l["e"]().x((function(e,r){return t(r)})).y((function(t){return e(t)}))},line:function(){return this.path(this.data)},viewBox:function(){return"0 0 ".concat(this.width," ").concat(this.height)},scale:function(){return this.path(this.data)}},mounted:function(){var t=this;return u(regeneratorRuntime.mark((function e(){var r,n,a,i,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=l["h"](".line-chart2"),n=r.append("g").attr("transform","translate(0, 0)"),a=t.data,i=a.length,console.log("this set for the first chart: ",a),console.log("number of: ",i),o=l["g"]().domain([0,l["f"](a)]).range([t.height-t.padding,0]),s=l["g"]().domain([0,i]).range([0,t.width+t.padding]),n.append("g").attr("transform","translate("+t.padding+","+(t.height-t.padding+10)+")").call(l["a"](s).ticks(7)).append("text").attr("transform","translate(80, -20)").attr("fill","#000").attr("y",6).attr("dy","0.60em").attr("text-anchor","end").text("X-axis (index)"),n.append("g").attr("transform","translate("+t.padding+",10)").call(l["b"](o)).append("text").attr("fill","#000").attr("transform","rotate(-90)").attr("y",6).attr("dy","0.60em").attr("text-anchor","end").text("Y-axis ($)"),console.log(r),console.log(n);case 12:case"end":return e.stop()}}),e)})))()}},d=f,p=(r("4cca"),r("2877")),g=Object(p["a"])(d,s,c,!1,null,"0d952493",null),m=g.exports,v={name:"SmallLineChartAxes",components:{LineChartAxes2:m},data:function(){return{data:[14,18,78,25,36,64,0,25,11]}}},y=v,x=Object(p["a"])(y,i,o,!1,null,null,null),w=x.exports,b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("p",[t._v("We have shown that a line can be scaled to fit it's parent container, but what about axis lines? Here we are defining the axes based on the data passed to the visualization. If the amount of values change or the range within the values the axis will change and be responsive to the container.")]),r("h3",[t._v(t._s(t.data))]),r("LineChartAxes",t._b({staticStyle:{width:"80%",border:"1px solid #ccc"}},"LineChartAxes",{data:t.data},!1))],1)},_=[],L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticClass:"line-chart1",attrs:{viewBox:t.viewBox}},[r("g",{attrs:{transform:"translate(30, 10)"}},[r("path",{staticClass:"line-chart__line",attrs:{d:t.line}})])])},E=[],A={name:"LineChartAxes",props:{data:{required:!0,type:Array},width:{default:500,type:Number},height:{default:270,type:Number}},data:function(){return{padding:30}},computed:{rangeX:function(){var t=this.width-this.padding;return[0,t]},rangeY:function(){var t=this.height-this.padding;return[t,0]},path:function(){var t=l["g"]().range(this.rangeX),e=l["g"]().range(this.rangeY);return l["b"]().scale(t),l["c"]().scale(e),t.domain(l["d"](this.data,(function(t,e){return e}))),e.domain([0,l["f"](this.data,(function(t){return t}))]),l["e"]().x((function(e,r){return t(r)})).y((function(t){return e(t)}))},line:function(){return this.path(this.data)},viewBox:function(){return"0 0 ".concat(this.width," ").concat(this.height)},scale:function(){return this.path(this.data)}},mounted:function(){var t=this;return u(regeneratorRuntime.mark((function e(){var r,n,a,i,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=l["h"](".line-chart1"),n=r.append("g").attr("transform","translate(0, 0)"),a=t.data,i=a.length,console.log("this set for the first chart: ",a),console.log("number of: ",i),o=l["g"]().domain([0,l["f"](a)]).range([t.height-t.padding,0]),s=l["g"]().domain([0,i]).range([0,t.width]),n.append("g").attr("transform","translate("+t.padding+","+(t.height-t.padding+10)+")").call(l["a"](s).ticks(7)).append("text").attr("transform","translate(80, -20)").attr("fill","#000").attr("y",6).attr("dy","0.60em").attr("text-anchor","end").text("X-axis (index)"),n.append("g").attr("transform","translate("+t.padding+",10)").call(l["b"](o)).append("text").attr("fill","#000").attr("transform","rotate(-90)").attr("y",6).attr("dy","0.60em").attr("text-anchor","end").text("Y-axis ($)"),console.log(r),console.log(n);case 12:case"end":return e.stop()}}),e)})))()}},C=A,j=(r("a9ca"),Object(p["a"])(C,L,E,!1,null,"69bf09f2",null)),O=j.exports,S={name:"LargeLineChartAxes",components:{LineChartAxes:O},data:function(){return{data:[15,14,19,12,15,18,199,17,78,25,36,92,0,25,11,99,105]}}},k=S,z=Object(p["a"])(k,b,_,!1,null,null,null),N=z.exports,Y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"plot-container"},[r("svg",{attrs:{width:t.size.width+t.margin.left+t.margin.right,height:t.size.height+t.margin.top+t.margin.bottom}},[r("g",{attrs:{transform:"translate("+t.margin.left+", 10)"}},[r("g",{staticClass:"plot__axes"},[r("g",{staticClass:"plot__axes__x",attrs:{transform:"translate(0, "+t.size.height+")"}}),r("g",{staticClass:"plot__axes__y"})])])])])},T=[],X={name:"plotWithXandY",data:function(){return{size:{width:0,height:0},margin:{top:20,bottom:10,left:20,right:10},scales:{x:null,y:null}}},props:{data:{type:Array,required:!1},height:{type:Number}},methods:{setSizes:function(){var t=this.margin,e=t.left,r=t.right,n=t.top,a=t.bottom,i=document.querySelector(".plot-container");this.size.width=i.offsetWidth-e-r,this.size.height=this.height||i.offsetHeight-n-a},setScales:function(){this.scales.x=l["g"]().domain([0,100]).range([0,this.size.width]),this.scales.y=l["g"]().domain([0,100]).range([this.size.height,0])},renderAxes:function(){var t=this.scales,e=t.x,r=t.y;l["h"](".plot__axes__x").call(l["a"](e)),l["h"](".plot__axes__y").call(l["b"](r))},render:function(){this.setSizes(),this.setScales(),this.renderAxes()}},mounted:function(){this.render()}},G=X,P=Object(p["a"])(G,Y,T,!1,null,"12189283",null),R=P.exports,$={name:"AxesExamples",components:{plotWithXandY:R,SmallLineChartAxes:w,LargeLineChartAxes:N},data:function(){return{}}},B=$,F=Object(p["a"])(B,n,a,!1,null,null,null);e["default"]=F.exports}}]);
//# sourceMappingURL=chunk-4bbf8a5e.f848f30d.js.map