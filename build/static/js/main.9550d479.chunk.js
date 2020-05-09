(this["webpackJsonpsorting-algorithm-visualizer"]=this["webpackJsonpsorting-algorithm-visualizer"]||[]).push([[0],[,,,,,,,function(t,e,n){t.exports=n(16)},,,,,function(t,e,n){},function(t,e,n){t.exports=n.p+"static/media/logo.ee7cd8ed.svg"},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(2),i=n.n(o),u=(n(12),n(13),n(3)),l=n(4),c=n(6),s=n(5);function h(t){var e=[];return t.length<=1||function t(e,n,r,a){if(n<r){var o=Math.floor(n+(r-n)/2);t(e,n,o,a),t(e,o+1,r,a),function(t,e,n,r,a){var o=n+1;if(t[n]<=t[o])return;for(;e<=n&&o<=r;)if(g(a,!0,e,o),g(a,!0,e,o),t[e]<=t[o])e++;else{for(var i=t[o],u=o;u!==e;)g(a,!0,u,u-1),t[u]=t[u-1],g(a,!1,u,u-1),g(a,!0,u,u-1),u--;t[e]=i,e++,n++,o++}}(e,n,o,r,a)}}(t,0,t.length-1,e),e}function f(t,e,n,r){var a=n,o=2*n+1,i=2*(n+1);o<e&&t[o]>t[a]&&(g(r,!0,o,a),g(r,!0,o,a=o)),i<e&&t[i]>t[a]&&(g(r,!0,i,a),g(r,!0,i,a=i)),a!==n&&(g(r,!0,a,n),v(t,a,n),g(r,!1,a,n),g(r,!0,a,n),f(t,e,a,r))}function m(t){var e=[];return function t(e,n,r,a){if(n<r){var o=function(t,e,n,r){for(var a=t[n],o=e-1,i=e;i<n;i++)g(r,!0,i,n),t[i]<a&&(o++,g(r,!1,o,i),v(t,o,i)),g(r,!0,i,n);return g(r,!0,o+1,n),v(t,o+1,n),g(r,!1,o+1,n),g(r,!0,o+1,n),o+1}(e,n,r,a);t(e,n,o-1,a),t(e,o+1,r,a)}}(t,0,t.length-1,e),e}function v(t,e,n){var r=t[e];t[e]=t[n],t[n]=r}function g(t,e,n,r){t.push({colorChange:e,indexOne:n,indexTwo:r})}n(14);var d=function(t){Object(c.a)(n,t);var e=Object(s.a)(n);function n(t){var r;return Object(u.a)(this,n),(r=e.call(this,t)).state={array:[]},r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.resetArray()}},{key:"resetArray",value:function(){for(var t=[],e=0;e<16;e++)t.push(this.randomInt(1,64));this.setState({array:t});for(var n=document.getElementsByClassName("button"),r=1;r<n.length;r++)n[r].removeAttribute("disabled"),n[r].style.color="white"}},{key:"bubbleSort",value:function(){this.animate(function(t){var e=[];if(t.lenth<=1)return t;for(var n=t.length-1;n>0;n--)for(var r=0;r<n;r++)e.push({colorChange:!0,indexOne:r,indexTwo:r+1}),t[r]>t[r+1]&&(v(t,r,r+1),e.push({colorChange:!1,indexOne:r,indexTwo:r+1})),e.push({colorChange:!0,indexOne:r,indexTwo:r+1});return e}(this.state.array))}},{key:"mergeSort",value:function(){this.animate(h(this.state.array))}},{key:"heapSort",value:function(){this.animate(function(t){for(var e=[],n=t.length/2-1;n>=0;n--)f(t,t.length,n,e);for(var r=t.length-1;r>=0;r--)g(e,!0,0,r),v(t,0,r),g(e,!1,0,r),g(e,!0,0,r),f(t,r,0,e);return e}(this.state.array))}},{key:"quickSort",value:function(){this.animate(m(this.state.array))}},{key:"cocktailSort",value:function(){this.animate(function(t){for(var e=[],n=!0,r=0,a=t.length;n;){n=!1;for(var o=r;o<a-1;o++)g(e,!0,o,o+1),t[o]>t[o+1]&&(v(t,o,o+1),g(e,!1,o,o+1),n=!0),g(e,!0,o,o+1);if(!n)break;n=!1;for(var i=(a-=1)-1;i>=r;i--)g(e,!0,i,i+1),t[i]>t[i+1]&&(v(t,i,i+1),g(e,!1,i,i+1),n=!0),g(e,!0,i,i+1);r++}return e}(this.state.array))}},{key:"animate",value:function(t){for(var e=document.getElementsByClassName("button"),n=0;n<e.length;n++)e[n].setAttribute("disabled",!0),e[n].style.color="black";for(var r=0,a=function(e){var n=document.getElementsByClassName("array-bar");if(t[e].colorChange){var a=n[t[e].indexOne].style,o=n[t[e].indexTwo].style,i=r++%2===0?"aqua":"lightgreen";setTimeout((function(){a.backgroundColor=i,o.backgroundColor=i}),8*e)}else setTimeout((function(){var r=n[t[e].indexOne].style,a=n[t[e].indexTwo].style,o=r.height;r.height=a.height,a.height=o}),8*e)},o=0;o<t.length;o++)a(o);setTimeout((function(){e[0].removeAttribute("disabled"),e[0].style.color="white"}),8*t.length)}},{key:"testSortingAlgorithms",value:function(){var t=this.state.array.sort((function(t,e){return t-e})),e=this.heapSort();console.log(this.areArraysEqual(e,t))}},{key:"render",value:function(){var t=this,e=this.state.array;return a.a.createElement("div",null,a.a.createElement("div",{className:"array-buttons"},a.a.createElement("button",{className:"button",onClick:function(){return t.resetArray()}},"Generate New Array"),a.a.createElement("div",{className:"seperator"},"------"),a.a.createElement("button",{className:"button",onClick:function(){return t.bubbleSort()}},"Bubble Sort"),a.a.createElement("button",{className:"button",onClick:function(){return t.mergeSort()}},"Merge Sort"),a.a.createElement("button",{className:"button",onClick:function(){return t.heapSort()}},"Heap Sort"),a.a.createElement("button",{className:"button",onClick:function(){return t.quickSort()}},"Quick Sort"),a.a.createElement("button",{className:"button",onClick:function(){return t.cocktailSort()}},"Cocktail Sort")),a.a.createElement("div",{className:"array"},e.map((function(t,e){return a.a.createElement("div",{className:"array-bar",key:e,style:{backgroundColor:"lightgreen",height:"".concat(t,"px")}})}))))}},{key:"areArraysEqual",value:function(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(t[n]!==e[n])return!1;return!0}},{key:"randomInt",value:function(t,e){return Math.floor(Math.random()*(e-t+1)+t)}}]),n}(a.a.Component);n(15);var y=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.9550d479.chunk.js.map