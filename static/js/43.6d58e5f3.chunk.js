(this.webpackJsonpCondution=this.webpackJsonpCondution||[]).push([[43],{392:function(o,t,n){"use strict";n.r(t),n.d(t,"ion_backdrop",(function(){return c}));var a=n(23),i=n(38),r=n(87),c=function(){function o(o){Object(a.q)(this,o),this.ionBackdropTap=Object(a.i)(this,"ionBackdropTap",7),this.blocker=r.a.createBlocker({disableScroll:!0}),this.visible=!0,this.tappable=!0,this.stopPropagation=!0}return o.prototype.connectedCallback=function(){this.stopPropagation&&this.blocker.block()},o.prototype.disconnectedCallback=function(){this.blocker.unblock()},o.prototype.onMouseDown=function(o){this.emitTap(o)},o.prototype.emitTap=function(o){this.stopPropagation&&(o.preventDefault(),o.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()},o.prototype.render=function(){var o,t=Object(i.b)(this);return Object(a.l)(a.c,{tabindex:"-1",class:(o={},o[t]=!0,o["backdrop-hide"]=!this.visible,o["backdrop-no-tappable"]=!this.tappable,o)})},o}();c.style={ios:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}",md:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}"}}}]);
//# sourceMappingURL=43.6d58e5f3.chunk.js.map