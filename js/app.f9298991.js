(function(t){function e(e){for(var a,o,l=e[0],c=e[1],p=e[2],u=0,h=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&h.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);s&&s(e);while(h.length)h.shift()();return i.push.apply(i,p||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var s=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("3c47"),r=n.n(a);r.a},"3c47":function(t,e,n){var a=n("59d6");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("499e").default;r("2dfc81c2",a,!0,{sourceMap:!1,shadowMode:!1})},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("playfair")]),n("el-input",{staticStyle:{"max-width":"600px"},attrs:{placeholder:"请输入关键字"},on:{input:t.handleKeyChange},model:{value:t.key,callback:function(e){t.key=e},expression:"key"}},[n("template",{slot:"prepend"},[t._v("关键字")])],2),n("br"),n("el-input",{staticStyle:{"max-width":"600px"},attrs:{placeholder:"请输入明文"},on:{input:t.handleCtextChange},model:{value:t.ctext,callback:function(e){t.ctext=e},expression:"ctext"}},[n("template",{slot:"prepend"},[t._v("明文")])],2),n("br"),n("el-input",{staticStyle:{"max-width":"600px"},attrs:{placeholder:"请输入密文"},on:{input:t.handlePtextChange},model:{value:t.ptext,callback:function(e){t.ptext=e},expression:"ptext"}},[n("template",{slot:"prepend"},[t._v("密文")])],2),n("h3",[t._v("关键字矩阵")]),n("div",{staticClass:"container"},[n("el-table",{attrs:{data:t.martix,stripe:"",size:"mini","show-header":!1,fit:!1,align:"center"}},[n("el-table-column",{attrs:{prop:"0",label:"0",align:"center",width:"40px"}}),n("el-table-column",{attrs:{prop:"1",label:"1",align:"center",width:"40px"}}),n("el-table-column",{attrs:{prop:"2",label:"2",align:"center",width:"40px"}}),n("el-table-column",{attrs:{prop:"3",label:"3",align:"center",width:"40px"}}),n("el-table-column",{attrs:{prop:"4",label:"4",align:"center",width:"40px"}})],1)],1),n("h2",[t._v("凯撒密码")]),n("el-input",{staticStyle:{"max-width":"600px"},attrs:{placeholder:"请输入关键字"},on:{input:t.handleCKeyChange},model:{value:t.Ckey,callback:function(e){t.Ckey=e},expression:"Ckey"}},[n("template",{slot:"prepend"},[t._v("k值")])],2),n("br"),n("el-input",{staticStyle:{"max-width":"600px"},attrs:{placeholder:"请输入明文"},on:{input:t.handleCCtextChange},model:{value:t.Cctext,callback:function(e){t.Cctext=e},expression:"Cctext"}},[n("template",{slot:"prepend"},[t._v("明文")])],2),n("br"),n("el-input",{staticStyle:{"max-width":"600px"},attrs:{placeholder:"请输入密文"},on:{input:t.handleCPtextChange},model:{value:t.Cptext,callback:function(e){t.Cptext=e},expression:"Cptext"}},[n("template",{slot:"prepend"},[t._v("密文")])],2)],1)},i=[],o=(n("99af"),n("4160"),n("c975"),n("a15b"),n("d81d"),n("ac1f"),n("5319"),n("1276"),n("159b"),{props:{},data:function(){return{key:"monarchy",ctext:"",ptext:"",martix:[],Ckey:3,Cctext:"",Cptext:""}},computed:{},created:function(){this.genM()},mounted:function(){},watch:{},methods:{genM:function(){var t=this.genKeyMatrix(this.key);console.log(this.ctext),""!==this.ctext&&(this.ptext=this.playfair(this.key,this.ctext));for(var e=1;e<5;e++)t[e].forEach((function(t,e,n){"I"==n[e]&&(n[e]="I/J")}));console.log(t),this.martix=t},genKeyMatrix:function(t){t=t.toUpperCase().replace(/\s/gi,"");for(var e={},n=0;n<26;n++){var a=String.fromCharCode(n+65);"I"==a&&n++,e[a]=!1}for(var r=[[],[],[],[],[]],i=0,o=0,l=0;l<t.length;l++)e[t[l]]||(e[t[l]]=!0,r[parseInt(o/5)][o%5]=t[l],o++,i=parseInt(o/5));for(var c in o%=5,e)if(!e[c]){if(o>=5){if(i++,i>=5)break;o%=5}r[i][o]=c,o++}return r},getPosition:function(t,e){var n=[].concat(e);return n.forEach((function(e,n,a){for(var r,i,o=0;o<t.length;o++){var l=t[o].join("");-1!==l.indexOf(e[0])&&(r=""+o+l.indexOf(e[0])),-1!==l.indexOf(e[1])&&(i=""+o+l.indexOf(e[1]))}a[n]=""+r+i})),n},playfair:function(t,e){var n=this.genKeyMatrix(t);e=e.toUpperCase().replace(/\s/g,"");for(var a=[],r=0;r<e.length;r++)e[r]!==e[r+1]&&e[r+1]?(a.push(e[r]+e[r+1]),r+=1):a.push(e[r]+"K");return a=a.join(",").replace(/J/gi,"I").split(","),console.log(a),a=this.getPosition(n,a),a.forEach((function(t,e,a){var r=+t[0],i=+t[1],o=+t[2],l=+t[3];a[e]=r==o?n[r][(i+1)%5]+n[o][(l+1)%5]:i==l?n[(r+1)%5][i]+n[(o+1)%5][l]:n[r][l]+n[o][i]})),a.join(" ")},playfairE:function(t,e){console.log(t),console.log(e),e=e.toUpperCase().replace(/\s/gi,""),e=e.replace(/(.{2})/g,"$1 ");var n=e.split(" ");n.pop("");var a=this.genKeyMatrix(t);return console.log(a),n=this.getPosition(a,n),n.forEach((function(t,e,n){var r=+t[0],i=+t[1],o=+t[2],l=+t[3];r==o?(i=i-1<0?4:i-1,l=l-1<0?4:l-1,n[e]=a[r][i]+a[o][l]):i==l?(r=r-1<0?4:r-1,o=o-1<0?4:o-1,n[e]=a[r][i]+a[o][l]):n[e]=a[r][l]+a[o][i]})),n.join(" ")},Caesar:function(t,e){return t.toLowerCase().split("").map((function(t){return e%=26,e=e<0?26+e:e,String.fromCharCode((t.charCodeAt()-97+e)%26+97)})).join("")},handleKeyChange:function(){this.genM()},handleCtextChange:function(){""==this.ctext&&(this.ptext=""),this.ptext=this.playfair(this.key,this.ctext)},handlePtextChange:function(){""==this.ptext&&(this.ctext=""),this.ctext=this.playfairE(this.key,this.ptext)},handleCCtextChange:function(){this.Cptext=this.Caesar(this.Cctext,this.Ckey)},handleCPtextChange:function(){this.Cctext=this.Caesar(this.Cptext,-this.Ckey)},handleCKeyChange:function(){this.Cptext=this.Caesar(this.Cctext,this.Ckey)}},components:{}}),l=o,c=(n("034f"),n("2877")),p=Object(c["a"])(l,r,i,!1,null,null,null),s=p.exports,u=n("5c96"),h=n.n(u);n("0fae");a["default"].use(h.a),a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(s)}}).$mount("#app")},"59d6":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#2c3e50;margin-top:30px;text-align:center}.el-input{margin-bottom:20px}",""]),t.exports=e}});
//# sourceMappingURL=app.f9298991.js.map