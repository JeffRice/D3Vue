(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71bed9f6"],{"0968":function(t,n,a){},9396:function(t,n,a){"use strict";a("0968")},c506:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("section",[a("p",[t._v("Here the same line chart component is rendered 3 times, but each one is given a different data input. Then a similar component renders the data again only changing the line color.")]),t._l(t.data.linesList,(function(t){return a("LineChart",{key:t.id,staticStyle:{width:"30%"},attrs:{data:t.array}})})),t._l(t.data.linesList,(function(t){return a("LineChart2",{key:t.id,staticStyle:{width:"30%"},attrs:{data:t.array}})}))],2)},i=[],r=a("4bd8"),s=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("svg",{staticClass:"line-chart",attrs:{viewBox:t.viewBox}},[a("g",{attrs:{transform:"translate(0, 10)"}},[a("path",{staticClass:"line-chart__linealt",attrs:{d:t.line}})])])},c=[],u=(a("a9e3"),a("99af"),a("898b")),d={name:"LineChart2",props:{data:{required:!0,type:Array},width:{default:500,type:Number},height:{default:270,type:Number}},data:function(){return{padding:60}},computed:{rangeX:function(){var t=this.width-this.padding;return[0,t]},rangeY:function(){var t=this.height-this.padding;return[t,0]},path:function(){var t=u["f"]().range(this.rangeX),n=u["f"]().range(this.rangeY);return u["a"]().scale(t),u["b"]().scale(n),t.domain(u["c"](this.data,(function(t,n){return n}))),n.domain([0,u["e"](this.data,(function(t){return t}))]),u["d"]().x((function(n,a){return t(a)})).y((function(t){return n(t)}))},line:function(){return this.path(this.data)},viewBox:function(){return"0 0 ".concat(this.width," ").concat(this.height)},scale:function(){return this.path(this.data)}}},h=d,o=(a("9396"),a("2877")),l=Object(o["a"])(h,s,c,!1,null,"4619bce8",null),f=l.exports,p={components:{LineChart:r["a"],LineChart2:f},data:function(){return{data:{linesList:[{id:0,array:[1,10,28,25,36,42,33,55,71,99,105]},{id:1,array:[19,71,7,2,3,9,3,25,11,99,105]},{id:2,array:[199,171,78,75,36,42,33,25,11,9,10]}]}}}},g=p,m=Object(o["a"])(g,e,i,!1,null,null,null);n["default"]=m.exports}}]);
//# sourceMappingURL=chunk-71bed9f6.96353256.js.map