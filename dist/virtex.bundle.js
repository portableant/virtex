(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.TinyEmitter = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function E () {
	// Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
	on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;

},{}]},{},[1])(1)
});
!function(f){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=f();else if("function"==typeof define&&define.amd)define([],f);else{var g;g="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,g.baseComponent=f()}}(function(){return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){(function(global){var _Components;!function(_Components){function applyMixins(derivedCtor,baseCtors){baseCtors.forEach(function(baseCtor){Object.getOwnPropertyNames(baseCtor.prototype).forEach(function(name){derivedCtor.prototype[name]=baseCtor.prototype[name]})})}var BaseComponent=function(){function BaseComponent(options){this.options=$.extend(this._getDefaultOptions(),options)}return BaseComponent.prototype._init=function(){return this._$element=$(this.options.element),this._$element.length?(this._$element.empty(),!0):(console.warn("element not found"),!1)},BaseComponent.prototype._getDefaultOptions=function(){return{}},BaseComponent.prototype._emit=function(event){for(var args=[],_i=1;_i<arguments.length;_i++)args[_i-1]=arguments[_i];return this.emit(event,args)},BaseComponent.prototype._resize=function(){},BaseComponent.prototype.databind=function(data){},BaseComponent}();_Components.BaseComponent=BaseComponent,_Components.applyMixins=applyMixins,applyMixins(BaseComponent,[TinyEmitter])}(_Components||(_Components={})),function(g){g._Components||(g._Components=_Components)}(global)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1])(1)});
// threejs.org/license
(function(l,na){"object"===typeof exports&&"undefined"!==typeof module?na(exports):"function"===typeof define&&define.amd?define(["exports"],na):na(l.THREE=l.THREE||{})})(this,function(l){function na(){}function B(a,b){this.x=a||0;this.y=b||0}function da(a,b,c,d,e,f,g,h,k,m){Object.defineProperty(this,"id",{value:Me++});this.uuid=S.generateUUID();this.name="";this.image=void 0!==a?a:da.DEFAULT_IMAGE;this.mipmaps=[];this.mapping=void 0!==b?b:da.DEFAULT_MAPPING;this.wrapS=void 0!==c?c:1001;this.wrapT=
void 0!==d?d:1001;this.magFilter=void 0!==e?e:1006;this.minFilter=void 0!==f?f:1008;this.anisotropy=void 0!==k?k:1;this.format=void 0!==g?g:1023;this.type=void 0!==h?h:1009;this.offset=new B(0,0);this.repeat=new B(1,1);this.generateMipmaps=!0;this.premultiplyAlpha=!1;this.flipY=!0;this.unpackAlignment=4;this.encoding=void 0!==m?m:3E3;this.version=0;this.onUpdate=null}function fa(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=void 0!==d?d:1}function Eb(a,b,c){this.uuid=S.generateUUID();this.width=
a;this.height=b;this.scissor=new fa(0,0,a,b);this.scissorTest=!1;this.viewport=new fa(0,0,a,b);c=c||{};void 0===c.minFilter&&(c.minFilter=1006);this.texture=new da(void 0,void 0,c.wrapS,c.wrapT,c.magFilter,c.minFilter,c.format,c.type,c.anisotropy,c.encoding);this.depthBuffer=void 0!==c.depthBuffer?c.depthBuffer:!0;this.stencilBuffer=void 0!==c.stencilBuffer?c.stencilBuffer:!0;this.depthTexture=void 0!==c.depthTexture?c.depthTexture:null}function Fb(a,b,c){Eb.call(this,a,b,c);this.activeMipMapLevel=
this.activeCubeFace=0}function ca(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._w=void 0!==d?d:1}function q(a,b,c){this.x=a||0;this.y=b||0;this.z=c||0}function P(){this.elements=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);0<arguments.length&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}function ab(a,b,c,d,e,f,g,h,k,m){a=void 0!==a?a:[];da.call(this,a,void 0!==b?b:301,c,d,e,f,g,h,k,m);this.flipY=!1}function Gb(a,b,c){var d=a[0];if(0>=
d||0<d)return a;var e=b*c,f=ne[e];void 0===f&&(f=new Float32Array(e),ne[e]=f);if(0!==b)for(d.toArray(f,0),d=1,e=0;d!==b;++d)e+=c,a[d].toArray(f,e);return f}function oe(a,b){var c=pe[b];void 0===c&&(c=new Int32Array(b),pe[b]=c);for(var d=0;d!==b;++d)c[d]=a.allocTextureUnit();return c}function Ne(a,b){a.uniform1f(this.addr,b)}function Oe(a,b){a.uniform1i(this.addr,b)}function Pe(a,b){void 0===b.x?a.uniform2fv(this.addr,b):a.uniform2f(this.addr,b.x,b.y)}function Qe(a,b){void 0!==b.x?a.uniform3f(this.addr,
b.x,b.y,b.z):void 0!==b.r?a.uniform3f(this.addr,b.r,b.g,b.b):a.uniform3fv(this.addr,b)}function Re(a,b){void 0===b.x?a.uniform4fv(this.addr,b):a.uniform4f(this.addr,b.x,b.y,b.z,b.w)}function Se(a,b){a.uniformMatrix2fv(this.addr,!1,b.elements||b)}function Te(a,b){a.uniformMatrix3fv(this.addr,!1,b.elements||b)}function Ue(a,b){a.uniformMatrix4fv(this.addr,!1,b.elements||b)}function Ve(a,b,c){var d=c.allocTextureUnit();a.uniform1i(this.addr,d);c.setTexture2D(b||qe,d)}function We(a,b,c){var d=c.allocTextureUnit();
a.uniform1i(this.addr,d);c.setTextureCube(b||re,d)}function se(a,b){a.uniform2iv(this.addr,b)}function te(a,b){a.uniform3iv(this.addr,b)}function ue(a,b){a.uniform4iv(this.addr,b)}function Xe(a){switch(a){case 5126:return Ne;case 35664:return Pe;case 35665:return Qe;case 35666:return Re;case 35674:return Se;case 35675:return Te;case 35676:return Ue;case 35678:return Ve;case 35680:return We;case 5124:case 35670:return Oe;case 35667:case 35671:return se;case 35668:case 35672:return te;case 35669:case 35673:return ue}}
function Ye(a,b){a.uniform1fv(this.addr,b)}function Ze(a,b){a.uniform1iv(this.addr,b)}function $e(a,b){a.uniform2fv(this.addr,Gb(b,this.size,2))}function af(a,b){a.uniform3fv(this.addr,Gb(b,this.size,3))}function bf(a,b){a.uniform4fv(this.addr,Gb(b,this.size,4))}function cf(a,b){a.uniformMatrix2fv(this.addr,!1,Gb(b,this.size,4))}function df(a,b){a.uniformMatrix3fv(this.addr,!1,Gb(b,this.size,9))}function ef(a,b){a.uniformMatrix4fv(this.addr,!1,Gb(b,this.size,16))}function ff(a,b,c){var d=b.length,
e=oe(c,d);a.uniform1iv(this.addr,e);for(a=0;a!==d;++a)c.setTexture2D(b[a]||qe,e[a])}function gf(a,b,c){var d=b.length,e=oe(c,d);a.uniform1iv(this.addr,e);for(a=0;a!==d;++a)c.setTextureCube(b[a]||re,e[a])}function hf(a){switch(a){case 5126:return Ye;case 35664:return $e;case 35665:return af;case 35666:return bf;case 35674:return cf;case 35675:return df;case 35676:return ef;case 35678:return ff;case 35680:return gf;case 5124:case 35670:return Ze;case 35667:case 35671:return se;case 35668:case 35672:return te;
case 35669:case 35673:return ue}}function jf(a,b,c){this.id=a;this.addr=c;this.setValue=Xe(b.type)}function kf(a,b,c){this.id=a;this.addr=c;this.size=b.size;this.setValue=hf(b.type)}function ve(a){this.id=a;this.seq=[];this.map={}}function bb(a,b,c){this.seq=[];this.map={};this.renderer=c;c=a.getProgramParameter(b,a.ACTIVE_UNIFORMS);for(var d=0;d!==c;++d){var e=a.getActiveUniform(b,d),f=a.getUniformLocation(b,e.name),g=this,h=e.name,k=h.length;for(Hd.lastIndex=0;;){var m=Hd.exec(h),x=Hd.lastIndex,
p=m[1],n=m[3];"]"===m[2]&&(p|=0);if(void 0===n||"["===n&&x+2===k){h=g;e=void 0===n?new jf(p,e,f):new kf(p,e,f);h.seq.push(e);h.map[e.id]=e;break}else n=g.map[p],void 0===n&&(n=new ve(p),p=g,g=n,p.seq.push(g),p.map[g.id]=g),g=n}}}function G(a,b,c){return void 0===b&&void 0===c?this.set(a):this.setRGB(a,b,c)}function gb(a,b,c,d,e,f,g,h,k,m,x,p){da.call(this,null,f,g,h,k,m,d,e,x,p);this.image={data:a,width:b,height:c};this.magFilter=void 0!==k?k:1003;this.minFilter=void 0!==m?m:1003;this.flipY=this.generateMipmaps=
!1;this.unpackAlignment=1}function pc(a,b){this.min=void 0!==a?a:new B(Infinity,Infinity);this.max=void 0!==b?b:new B(-Infinity,-Infinity)}function lf(a,b){var c,d,e,f,g,h,k,m,x,p,n=a.context,r=a.state,w,l,A,t,v,M;this.render=function(y,C,H){if(0!==b.length){y=new q;var E=H.w/H.z,L=.5*H.z,ka=.5*H.w,I=16/H.w,wa=new B(I*E,I),Fa=new q(1,1,0),Ka=new B(1,1),oa=new pc;oa.min.set(H.x,H.y);oa.max.set(H.x+(H.z-16),H.y+(H.w-16));if(void 0===t){var I=new Float32Array([-1,-1,0,0,1,-1,1,0,1,1,1,1,-1,1,0,1]),N=
new Uint16Array([0,1,2,0,2,3]);w=n.createBuffer();l=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,w);n.bufferData(n.ARRAY_BUFFER,I,n.STATIC_DRAW);n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,l);n.bufferData(n.ELEMENT_ARRAY_BUFFER,N,n.STATIC_DRAW);v=n.createTexture();M=n.createTexture();r.bindTexture(n.TEXTURE_2D,v);n.texImage2D(n.TEXTURE_2D,0,n.RGB,16,16,0,n.RGB,n.UNSIGNED_BYTE,null);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);
n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST);r.bindTexture(n.TEXTURE_2D,M);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,16,16,0,n.RGBA,n.UNSIGNED_BYTE,null);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST);var I=A={vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif ( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
fragmentShader:"uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif ( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if ( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"},N=n.createProgram(),O=n.createShader(n.FRAGMENT_SHADER),
Q=n.createShader(n.VERTEX_SHADER),T="precision "+a.getPrecision()+" float;\n";n.shaderSource(O,T+I.fragmentShader);n.shaderSource(Q,T+I.vertexShader);n.compileShader(O);n.compileShader(Q);n.attachShader(N,O);n.attachShader(N,Q);n.linkProgram(N);t=N;x=n.getAttribLocation(t,"position");p=n.getAttribLocation(t,"uv");c=n.getUniformLocation(t,"renderType");d=n.getUniformLocation(t,"map");e=n.getUniformLocation(t,"occlusionMap");f=n.getUniformLocation(t,"opacity");g=n.getUniformLocation(t,"color");h=n.getUniformLocation(t,
"scale");k=n.getUniformLocation(t,"rotation");m=n.getUniformLocation(t,"screenPosition")}n.useProgram(t);r.initAttributes();r.enableAttribute(x);r.enableAttribute(p);r.disableUnusedAttributes();n.uniform1i(e,0);n.uniform1i(d,1);n.bindBuffer(n.ARRAY_BUFFER,w);n.vertexAttribPointer(x,2,n.FLOAT,!1,16,0);n.vertexAttribPointer(p,2,n.FLOAT,!1,16,8);n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,l);r.disable(n.CULL_FACE);r.setDepthWrite(!1);N=0;for(O=b.length;N<O;N++)if(I=16/H.w,wa.set(I*E,I),Q=b[N],y.set(Q.matrixWorld.elements[12],
Q.matrixWorld.elements[13],Q.matrixWorld.elements[14]),y.applyMatrix4(C.matrixWorldInverse),y.applyProjection(C.projectionMatrix),Fa.copy(y),Ka.x=H.x+Fa.x*L+L-8,Ka.y=H.y+Fa.y*ka+ka-8,!0===oa.containsPoint(Ka)){r.activeTexture(n.TEXTURE0);r.bindTexture(n.TEXTURE_2D,null);r.activeTexture(n.TEXTURE1);r.bindTexture(n.TEXTURE_2D,v);n.copyTexImage2D(n.TEXTURE_2D,0,n.RGB,Ka.x,Ka.y,16,16,0);n.uniform1i(c,0);n.uniform2f(h,wa.x,wa.y);n.uniform3f(m,Fa.x,Fa.y,Fa.z);r.disable(n.BLEND);r.enable(n.DEPTH_TEST);n.drawElements(n.TRIANGLES,
6,n.UNSIGNED_SHORT,0);r.activeTexture(n.TEXTURE0);r.bindTexture(n.TEXTURE_2D,M);n.copyTexImage2D(n.TEXTURE_2D,0,n.RGBA,Ka.x,Ka.y,16,16,0);n.uniform1i(c,1);r.disable(n.DEPTH_TEST);r.activeTexture(n.TEXTURE1);r.bindTexture(n.TEXTURE_2D,v);n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0);Q.positionScreen.copy(Fa);Q.customUpdateCallback?Q.customUpdateCallback(Q):Q.updateLensFlares();n.uniform1i(c,2);r.enable(n.BLEND);for(var T=0,xa=Q.lensFlares.length;T<xa;T++){var V=Q.lensFlares[T];.001<V.opacity&&.001<
V.scale&&(Fa.x=V.x,Fa.y=V.y,Fa.z=V.z,I=V.size*V.scale/H.w,wa.x=I*E,wa.y=I,n.uniform3f(m,Fa.x,Fa.y,Fa.z),n.uniform2f(h,wa.x,wa.y),n.uniform1f(k,V.rotation),n.uniform1f(f,V.opacity),n.uniform3f(g,V.color.r,V.color.g,V.color.b),r.setBlending(V.blending,V.blendEquation,V.blendSrc,V.blendDst),a.setTexture2D(V.texture,1),n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0))}}r.enable(n.CULL_FACE);r.enable(n.DEPTH_TEST);r.setDepthWrite(!0);a.resetGLState()}}}function mf(a,b){var c,d,e,f,g,h,k,m,x,p,n,r,w,l,
A,t,v;function M(a,b){return a.renderOrder!==b.renderOrder?a.renderOrder-b.renderOrder:a.z!==b.z?b.z-a.z:b.id-a.id}var y=a.context,C=a.state,H,E,L,ka,I=new q,wa=new ca,Fa=new q;this.render=function(q,oa){if(0!==b.length){if(void 0===L){var N=new Float32Array([-.5,-.5,0,0,.5,-.5,1,0,.5,.5,1,1,-.5,.5,0,1]),O=new Uint16Array([0,1,2,0,2,3]);H=y.createBuffer();E=y.createBuffer();y.bindBuffer(y.ARRAY_BUFFER,H);y.bufferData(y.ARRAY_BUFFER,N,y.STATIC_DRAW);y.bindBuffer(y.ELEMENT_ARRAY_BUFFER,E);y.bufferData(y.ELEMENT_ARRAY_BUFFER,
O,y.STATIC_DRAW);var N=y.createProgram(),O=y.createShader(y.VERTEX_SHADER),Q=y.createShader(y.FRAGMENT_SHADER);y.shaderSource(O,["precision "+a.getPrecision()+" float;","uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n"));
y.shaderSource(Q,["precision "+a.getPrecision()+" float;","uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n"));
y.compileShader(O);y.compileShader(Q);y.attachShader(N,O);y.attachShader(N,Q);y.linkProgram(N);L=N;t=y.getAttribLocation(L,"position");v=y.getAttribLocation(L,"uv");c=y.getUniformLocation(L,"uvOffset");d=y.getUniformLocation(L,"uvScale");e=y.getUniformLocation(L,"rotation");f=y.getUniformLocation(L,"scale");g=y.getUniformLocation(L,"color");h=y.getUniformLocation(L,"map");k=y.getUniformLocation(L,"opacity");m=y.getUniformLocation(L,"modelViewMatrix");x=y.getUniformLocation(L,"projectionMatrix");p=
y.getUniformLocation(L,"fogType");n=y.getUniformLocation(L,"fogDensity");r=y.getUniformLocation(L,"fogNear");w=y.getUniformLocation(L,"fogFar");l=y.getUniformLocation(L,"fogColor");A=y.getUniformLocation(L,"alphaTest");N=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");N.width=8;N.height=8;O=N.getContext("2d");O.fillStyle="white";O.fillRect(0,0,8,8);ka=new da(N);ka.needsUpdate=!0}y.useProgram(L);C.initAttributes();C.enableAttribute(t);C.enableAttribute(v);C.disableUnusedAttributes();
C.disable(y.CULL_FACE);C.enable(y.BLEND);y.bindBuffer(y.ARRAY_BUFFER,H);y.vertexAttribPointer(t,2,y.FLOAT,!1,16,0);y.vertexAttribPointer(v,2,y.FLOAT,!1,16,8);y.bindBuffer(y.ELEMENT_ARRAY_BUFFER,E);y.uniformMatrix4fv(x,!1,oa.projectionMatrix.elements);C.activeTexture(y.TEXTURE0);y.uniform1i(h,0);O=N=0;(Q=q.fog)?(y.uniform3f(l,Q.color.r,Q.color.g,Q.color.b),Q.isFog?(y.uniform1f(r,Q.near),y.uniform1f(w,Q.far),y.uniform1i(p,1),O=N=1):Q.isFogExp2&&(y.uniform1f(n,Q.density),y.uniform1i(p,2),O=N=2)):(y.uniform1i(p,
0),O=N=0);for(var Q=0,T=b.length;Q<T;Q++){var xa=b[Q];xa.modelViewMatrix.multiplyMatrices(oa.matrixWorldInverse,xa.matrixWorld);xa.z=-xa.modelViewMatrix.elements[14]}b.sort(M);for(var V=[],Q=0,T=b.length;Q<T;Q++){var xa=b[Q],z=xa.material;!1!==z.visible&&(y.uniform1f(A,z.alphaTest),y.uniformMatrix4fv(m,!1,xa.modelViewMatrix.elements),xa.matrixWorld.decompose(I,wa,Fa),V[0]=Fa.x,V[1]=Fa.y,xa=0,q.fog&&z.fog&&(xa=O),N!==xa&&(y.uniform1i(p,xa),N=xa),null!==z.map?(y.uniform2f(c,z.map.offset.x,z.map.offset.y),
y.uniform2f(d,z.map.repeat.x,z.map.repeat.y)):(y.uniform2f(c,0,0),y.uniform2f(d,1,1)),y.uniform1f(k,z.opacity),y.uniform3f(g,z.color.r,z.color.g,z.color.b),y.uniform1f(e,z.rotation),y.uniform2fv(f,V),C.setBlending(z.blending,z.blendEquation,z.blendSrc,z.blendDst),C.setDepthTest(z.depthTest),C.setDepthWrite(z.depthWrite),z.map?a.setTexture2D(z.map,0):a.setTexture2D(ka,0),y.drawElements(y.TRIANGLES,6,y.UNSIGNED_SHORT,0))}C.enable(y.CULL_FACE);a.resetGLState()}}}function U(){Object.defineProperty(this,
"id",{value:nf++});this.uuid=S.generateUUID();this.name="";this.type="Material";this.lights=this.fog=!0;this.blending=1;this.side=0;this.shading=2;this.vertexColors=0;this.opacity=1;this.transparent=!1;this.blendSrc=204;this.blendDst=205;this.blendEquation=100;this.blendEquationAlpha=this.blendDstAlpha=this.blendSrcAlpha=null;this.depthFunc=3;this.depthWrite=this.depthTest=!0;this.clippingPlanes=null;this.clipShadows=this.clipIntersection=!1;this.colorWrite=!0;this.precision=null;this.polygonOffset=
!1;this.alphaTest=this.polygonOffsetUnits=this.polygonOffsetFactor=0;this.premultipliedAlpha=!1;this.overdraw=0;this._needsUpdate=this.visible=!0}function Ja(a){U.call(this);this.type="ShaderMaterial";this.defines={};this.uniforms={};this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";this.linewidth=1;this.wireframe=!1;this.wireframeLinewidth=1;this.morphNormals=
this.morphTargets=this.skinning=this.clipping=this.lights=this.fog=!1;this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1};this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]};this.index0AttributeName=void 0;void 0!==a&&(void 0!==a.attributes&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(a))}function cb(a){U.call(this);this.type="MeshDepthMaterial";this.depthPacking=3200;this.morphTargets=
this.skinning=!1;this.displacementMap=this.alphaMap=this.map=null;this.displacementScale=1;this.displacementBias=0;this.wireframe=!1;this.wireframeLinewidth=1;this.lights=this.fog=!1;this.setValues(a)}function za(a,b){this.min=void 0!==a?a:new q(Infinity,Infinity,Infinity);this.max=void 0!==b?b:new q(-Infinity,-Infinity,-Infinity)}function Ha(a,b){this.center=void 0!==a?a:new q;this.radius=void 0!==b?b:0}function Aa(){this.elements=new Float32Array([1,0,0,0,1,0,0,0,1]);0<arguments.length&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}
function la(a,b){this.normal=void 0!==a?a:new q(1,0,0);this.constant=void 0!==b?b:0}function qc(a,b,c,d,e,f){this.planes=[void 0!==a?a:new la,void 0!==b?b:new la,void 0!==c?c:new la,void 0!==d?d:new la,void 0!==e?e:new la,void 0!==f?f:new la]}function we(a,b,c,d){function e(b,c,d,e){var f=b.geometry,g;g=A;var h=b.customDepthMaterial;d&&(g=t,h=b.customDistanceMaterial);h?g=h:(h=!1,c.morphTargets&&(f&&f.isBufferGeometry?h=f.morphAttributes&&f.morphAttributes.position&&0<f.morphAttributes.position.length:
f&&f.isGeometry&&(h=f.morphTargets&&0<f.morphTargets.length)),b=b.isSkinnedMesh&&c.skinning,f=0,h&&(f|=1),b&&(f|=2),g=g[f]);a.localClippingEnabled&&!0===c.clipShadows&&0!==c.clippingPlanes.length&&(f=g.uuid,h=c.uuid,b=v[f],void 0===b&&(b={},v[f]=b),f=b[h],void 0===f&&(f=g.clone(),b[h]=f),g=f);g.visible=c.visible;g.wireframe=c.wireframe;h=c.side;wa.renderSingleSided&&2==h&&(h=0);wa.renderReverseSided&&(0===h?h=1:1===h&&(h=0));g.side=h;g.clipShadows=c.clipShadows;g.clippingPlanes=c.clippingPlanes;g.wireframeLinewidth=
c.wireframeLinewidth;g.linewidth=c.linewidth;d&&void 0!==g.uniforms.lightPos&&g.uniforms.lightPos.value.copy(e);return g}function f(a,b,c){if(!1!==a.visible){0!==(a.layers.mask&b.layers.mask)&&(a.isMesh||a.isLine||a.isPoints)&&a.castShadow&&(!1===a.frustumCulled||!0===k.intersectsObject(a))&&!0===a.material.visible&&(a.modelViewMatrix.multiplyMatrices(c.matrixWorldInverse,a.matrixWorld),l.push(a));a=a.children;for(var d=0,e=a.length;d<e;d++)f(a[d],b,c)}}var g=a.context,h=a.state,k=new qc,m=new P,
x=b.shadows,p=new B,n=new B(d.maxTextureSize,d.maxTextureSize),r=new q,w=new q,l=[],A=Array(4),t=Array(4),v={},M=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],y=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)],C=[new fa,new fa,new fa,new fa,new fa,new fa];b=new cb;b.depthPacking=3201;b.clipping=!0;d=Hb.distanceRGBA;for(var H=Object.assign({},d.uniforms),E=0;4!==E;++E){var L=0!==(E&1),ka=0!==(E&2),I=b.clone();I.morphTargets=L;I.skinning=
ka;A[E]=I;L=new Ja({defines:{USE_SHADOWMAP:""},uniforms:H,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,morphTargets:L,skinning:ka,clipping:!0});t[E]=L}var wa=this;this.enabled=!1;this.autoUpdate=!0;this.needsUpdate=!1;this.type=1;this.renderSingleSided=this.renderReverseSided=!0;this.render=function(b,d){if(!1!==wa.enabled&&(!1!==wa.autoUpdate||!1!==wa.needsUpdate)&&0!==x.length){h.buffers.color.setClear(1,1,1,1);h.disable(g.BLEND);h.setDepthTest(!0);h.setScissorTest(!1);for(var v,
q,t=0,A=x.length;t<A;t++){var H=x[t],E=H.shadow;if(void 0===E)console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");else{var L=E.camera;p.copy(E.mapSize);p.min(n);if(H&&H.isPointLight){v=6;q=!0;var I=p.x,ka=p.y;C[0].set(2*I,ka,I,ka);C[1].set(0,ka,I,ka);C[2].set(3*I,ka,I,ka);C[3].set(I,ka,I,ka);C[4].set(3*I,0,I,ka);C[5].set(I,0,I,ka);p.x*=4;p.y*=2}else v=1,q=!1;null===E.map&&(E.map=new Eb(p.x,p.y,{minFilter:1003,magFilter:1003,format:1023}),L.updateProjectionMatrix());E.isSpotLightShadow&&E.update(H);
E&&E.isRectAreaLightShadow&&E.update(H);I=E.map;E=E.matrix;w.setFromMatrixPosition(H.matrixWorld);L.position.copy(w);a.setRenderTarget(I);a.clear();for(I=0;I<v;I++){q?(r.copy(L.position),r.add(M[I]),L.up.copy(y[I]),L.lookAt(r),h.viewport(C[I])):(r.setFromMatrixPosition(H.target.matrixWorld),L.lookAt(r));L.updateMatrixWorld();L.matrixWorldInverse.getInverse(L.matrixWorld);E.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1);E.multiply(L.projectionMatrix);E.multiply(L.matrixWorldInverse);m.multiplyMatrices(L.projectionMatrix,
L.matrixWorldInverse);k.setFromMatrix(m);l.length=0;f(b,d,L);for(var ka=0,z=l.length;ka<z;ka++){var Ba=l[ka],B=c.update(Ba),Ua=Ba.material;if(Ua&&Ua.isMultiMaterial)for(var F=B.groups,Ua=Ua.materials,Id=0,J=F.length;Id<J;Id++){var G=F[Id],P=Ua[G.materialIndex];!0===P.visible&&(P=e(Ba,P,q,w),a.renderBufferDirect(L,null,B,P,Ba,G))}else P=e(Ba,Ua,q,w),a.renderBufferDirect(L,null,B,P,Ba,null)}}}}v=a.getClearColor();q=a.getClearAlpha();a.setClearColor(v,q);wa.needsUpdate=!1}}}function db(a,b){this.origin=
void 0!==a?a:new q;this.direction=void 0!==b?b:new q}function eb(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._order=d||eb.DefaultOrder}function fd(){this.mask=1}function F(){Object.defineProperty(this,"id",{value:of++});this.uuid=S.generateUUID();this.name="";this.type="Object3D";this.parent=null;this.children=[];this.up=F.DefaultUp.clone();var a=new q,b=new eb,c=new ca,d=new q(1,1,1);b.onChange(function(){c.setFromEuler(b,!1)});c.onChange(function(){b.setFromQuaternion(c,void 0,!1)});Object.defineProperties(this,
{position:{enumerable:!0,value:a},rotation:{enumerable:!0,value:b},quaternion:{enumerable:!0,value:c},scale:{enumerable:!0,value:d},modelViewMatrix:{value:new P},normalMatrix:{value:new Aa}});this.matrix=new P;this.matrixWorld=new P;this.matrixAutoUpdate=F.DefaultMatrixAutoUpdate;this.matrixWorldNeedsUpdate=!1;this.layers=new fd;this.visible=!0;this.receiveShadow=this.castShadow=!1;this.frustumCulled=!0;this.renderOrder=0;this.userData={};this.onBeforeRender=function(){};this.onAfterRender=function(){}}
function ib(a,b){this.start=void 0!==a?a:new q;this.end=void 0!==b?b:new q}function Ca(a,b,c){this.a=void 0!==a?a:new q;this.b=void 0!==b?b:new q;this.c=void 0!==c?c:new q}function ga(a,b,c,d,e,f){this.a=a;this.b=b;this.c=c;this.normal=d&&d.isVector3?d:new q;this.vertexNormals=Array.isArray(d)?d:[];this.color=e&&e.isColor?e:new G;this.vertexColors=Array.isArray(e)?e:[];this.materialIndex=void 0!==f?f:0}function Ma(a){U.call(this);this.type="MeshBasicMaterial";this.color=new G(16777215);this.lightMap=
this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.envMap=this.alphaMap=this.specularMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.lights=this.morphTargets=this.skinning=!1;this.setValues(a)}function z(a,b,c){if(Array.isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.uuid=S.generateUUID();this.array=a;
this.itemSize=b;this.count=void 0!==a?a.length/b:0;this.normalized=!0===c;this.dynamic=!1;this.updateRange={offset:0,count:-1};this.onUploadCallback=function(){};this.version=0}function rc(a,b){z.call(this,new Int8Array(a),b)}function sc(a,b){z.call(this,new Uint8Array(a),b)}function tc(a,b){z.call(this,new Uint8ClampedArray(a),b)}function uc(a,b){z.call(this,new Int16Array(a),b)}function Sa(a,b){z.call(this,new Uint16Array(a),b)}function vc(a,b){z.call(this,new Int32Array(a),b)}function Va(a,b){z.call(this,
new Uint32Array(a),b)}function W(a,b){z.call(this,new Float32Array(a),b)}function wc(a,b){z.call(this,new Float64Array(a),b)}function xe(){this.indices=[];this.vertices=[];this.normals=[];this.colors=[];this.uvs=[];this.uvs2=[];this.groups=[];this.morphTargets={};this.skinWeights=[];this.skinIndices=[];this.boundingSphere=this.boundingBox=null;this.groupsNeedUpdate=this.uvsNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.verticesNeedUpdate=!1}function R(){Object.defineProperty(this,"id",
{value:Jd++});this.uuid=S.generateUUID();this.name="";this.type="Geometry";this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.groupsNeedUpdate=this.lineDistancesNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.uvsNeedUpdate=this.verticesNeedUpdate=this.elementsNeedUpdate=!1}function J(){Object.defineProperty(this,"id",
{value:Jd++});this.uuid=S.generateUUID();this.name="";this.type="BufferGeometry";this.index=null;this.attributes={};this.morphAttributes={};this.groups=[];this.boundingSphere=this.boundingBox=null;this.drawRange={start:0,count:Infinity}}function Da(a,b){F.call(this);this.type="Mesh";this.geometry=void 0!==a?a:new J;this.material=void 0!==b?b:new Ma({color:16777215*Math.random()});this.drawMode=0;this.updateMorphTargets()}function jb(a,b,c,d,e,f){function g(a,b,c,d,e,f,g,k,m,z,B){var oa=f/m,N=g/z,
O=f/2,Q=g/2,T=k/2;g=m+1;for(var F=z+1,V=f=0,G=new q,K=0;K<F;K++)for(var J=K*N-Q,Ba=0;Ba<g;Ba++)G[a]=(Ba*oa-O)*d,G[b]=J*e,G[c]=T,p[w]=G.x,p[w+1]=G.y,p[w+2]=G.z,G[a]=0,G[b]=0,G[c]=0<k?1:-1,n[w]=G.x,n[w+1]=G.y,n[w+2]=G.z,r[l]=Ba/m,r[l+1]=1-K/z,w+=3,l+=2,f+=1;for(K=0;K<z;K++)for(Ba=0;Ba<m;Ba++)a=t+Ba+g*(K+1),b=t+(Ba+1)+g*(K+1),c=t+(Ba+1)+g*K,x[A]=t+Ba+g*K,x[A+1]=a,x[A+2]=c,x[A+3]=a,x[A+4]=b,x[A+5]=c,A+=6,V+=6;h.addGroup(v,V,B);v+=V;t+=f}J.call(this);this.type="BoxBufferGeometry";this.parameters={width:a,
height:b,depth:c,widthSegments:d,heightSegments:e,depthSegments:f};var h=this;d=Math.floor(d)||1;e=Math.floor(e)||1;f=Math.floor(f)||1;var k=function(a,b,c){return a=0+(a+1)*(b+1)*2+(a+1)*(c+1)*2+(c+1)*(b+1)*2}(d,e,f),m=function(a,b,c){a=0+a*b*2+a*c*2+c*b*2;return 6*a}(d,e,f),x=new (65535<m?Uint32Array:Uint16Array)(m),p=new Float32Array(3*k),n=new Float32Array(3*k),r=new Float32Array(2*k),w=0,l=0,A=0,t=0,v=0;g("z","y","x",-1,-1,c,b,a,f,e,0);g("z","y","x",1,-1,c,b,-a,f,e,1);g("x","z","y",1,1,a,c,b,
d,f,2);g("x","z","y",1,-1,a,c,-b,d,f,3);g("x","y","z",1,-1,a,b,c,d,e,4);g("x","y","z",-1,-1,a,b,-c,d,e,5);this.setIndex(new z(x,1));this.addAttribute("position",new z(p,3));this.addAttribute("normal",new z(n,3));this.addAttribute("uv",new z(r,2))}function kb(a,b,c,d){J.call(this);this.type="PlaneBufferGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};var e=a/2,f=b/2;c=Math.floor(c)||1;d=Math.floor(d)||1;var g=c+1,h=d+1,k=a/c,m=b/d;b=new Float32Array(g*h*3);a=new Float32Array(g*
h*3);for(var x=new Float32Array(g*h*2),p=0,n=0,r=0;r<h;r++)for(var w=r*m-f,l=0;l<g;l++)b[p]=l*k-e,b[p+1]=-w,a[p+2]=1,x[n]=l/c,x[n+1]=1-r/d,p+=3,n+=2;p=0;e=new (65535<b.length/3?Uint32Array:Uint16Array)(c*d*6);for(r=0;r<d;r++)for(l=0;l<c;l++)f=l+g*(r+1),h=l+1+g*(r+1),k=l+1+g*r,e[p]=l+g*r,e[p+1]=f,e[p+2]=k,e[p+3]=f,e[p+4]=h,e[p+5]=k,p+=6;this.setIndex(new z(e,1));this.addAttribute("position",new z(b,3));this.addAttribute("normal",new z(a,3));this.addAttribute("uv",new z(x,2))}function ra(){F.call(this);
this.type="Camera";this.matrixWorldInverse=new P;this.projectionMatrix=new P}function Ia(a,b,c,d){ra.call(this);this.type="PerspectiveCamera";this.fov=void 0!==a?a:50;this.zoom=1;this.near=void 0!==c?c:.1;this.far=void 0!==d?d:2E3;this.focus=10;this.aspect=void 0!==b?b:1;this.view=null;this.filmGauge=35;this.filmOffset=0;this.updateProjectionMatrix()}function Ib(a,b,c,d,e,f){ra.call(this);this.type="OrthographicCamera";this.zoom=1;this.view=null;this.left=a;this.right=b;this.top=c;this.bottom=d;this.near=
void 0!==e?e:.1;this.far=void 0!==f?f:2E3;this.updateProjectionMatrix()}function pf(a,b,c){var d,e,f;return{setMode:function(a){d=a},setIndex:function(c){c.array instanceof Uint32Array&&b.get("OES_element_index_uint")?(e=a.UNSIGNED_INT,f=4):(e=a.UNSIGNED_SHORT,f=2)},render:function(b,h){a.drawElements(d,h,e,b*f);c.calls++;c.vertices+=h;d===a.TRIANGLES&&(c.faces+=h/3)},renderInstances:function(g,h,k){var m=b.get("ANGLE_instanced_arrays");null===m?console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."):
(m.drawElementsInstancedANGLE(d,k,e,h*f,g.maxInstancedCount),c.calls++,c.vertices+=k*g.maxInstancedCount,d===a.TRIANGLES&&(c.faces+=g.maxInstancedCount*k/3))}}}function qf(a,b,c){var d;return{setMode:function(a){d=a},render:function(b,f){a.drawArrays(d,b,f);c.calls++;c.vertices+=f;d===a.TRIANGLES&&(c.faces+=f/3)},renderInstances:function(e){var f=b.get("ANGLE_instanced_arrays");if(null===f)console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
else{var g=e.attributes.position,g=g.isInterleavedBufferAttribute?g.data.count:g.count;f.drawArraysInstancedANGLE(d,0,g,e.maxInstancedCount);c.calls++;c.vertices+=g*e.maxInstancedCount;d===a.TRIANGLES&&(c.faces+=e.maxInstancedCount*g/3)}}}}function rf(){var a={};return{get:function(b){if(void 0!==a[b.id])return a[b.id];var c;switch(b.type){case "DirectionalLight":c={direction:new q,color:new G,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new B};break;case "SpotLight":c={position:new q,direction:new q,
color:new G,distance:0,coneCos:0,penumbraCos:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new B};break;case "PointLight":c={position:new q,color:new G,distance:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new B};break;case "HemisphereLight":c={direction:new q,skyColor:new G,groundColor:new G};break;case "RectAreaLight":c={color:new G,position:new q,halfWidth:new q,halfHeight:new q}}return a[b.id]=c}}}function sf(a){a=a.split("\n");for(var b=0;b<a.length;b++)a[b]=
b+1+": "+a[b];return a.join("\n")}function ye(a,b,c){var d=a.createShader(b);a.shaderSource(d,c);a.compileShader(d);!1===a.getShaderParameter(d,a.COMPILE_STATUS)&&console.error("THREE.WebGLShader: Shader couldn't compile.");""!==a.getShaderInfoLog(d)&&console.warn("THREE.WebGLShader: gl.getShaderInfoLog()",b===a.VERTEX_SHADER?"vertex":"fragment",a.getShaderInfoLog(d),sf(c));return d}function ze(a){switch(a){case 3E3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];case 3002:return["RGBE",
"( value )"];case 3004:return["RGBM","( value, 7.0 )"];case 3005:return["RGBM","( value, 16.0 )"];case 3006:return["RGBD","( value, 256.0 )"];case 3007:return["Gamma","( value, float( GAMMA_FACTOR ) )"];default:throw Error("unsupported encoding: "+a);}}function Kd(a,b){var c=ze(b);return"vec4 "+a+"( vec4 value ) { return "+c[0]+"ToLinear"+c[1]+"; }"}function tf(a,b){var c=ze(b);return"vec4 "+a+"( vec4 value ) { return LinearTo"+c[0]+c[1]+"; }"}function uf(a,b){var c;switch(b){case 1:c="Linear";break;
case 2:c="Reinhard";break;case 3:c="Uncharted2";break;case 4:c="OptimizedCineon";break;default:throw Error("unsupported toneMapping: "+b);}return"vec3 "+a+"( vec3 color ) { return "+c+"ToneMapping( color ); }"}function vf(a,b,c){a=a||{};return[a.derivatives||b.envMapCubeUV||b.bumpMap||b.normalMap||b.flatShading?"#extension GL_OES_standard_derivatives : enable":"",(a.fragDepth||b.logarithmicDepthBuffer)&&c.get("EXT_frag_depth")?"#extension GL_EXT_frag_depth : enable":"",a.drawBuffers&&c.get("WEBGL_draw_buffers")?
"#extension GL_EXT_draw_buffers : require":"",(a.shaderTextureLOD||b.envMap)&&c.get("EXT_shader_texture_lod")?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xc).join("\n")}function wf(a){var b=[],c;for(c in a){var d=a[c];!1!==d&&b.push("#define "+c+" "+d)}return b.join("\n")}function xc(a){return""!==a}function Ae(a,b){return a.replace(/NUM_DIR_LIGHTS/g,b.numDirLights).replace(/NUM_SPOT_LIGHTS/g,b.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,b.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,
b.numPointLights).replace(/NUM_HEMI_LIGHTS/g,b.numHemiLights)}function Ld(a){return a.replace(/#include +<([\w\d.]+)>/g,function(a,c){var d=Z[c];if(void 0===d)throw Error("Can not resolve #include <"+c+">");return Ld(d)})}function Be(a){return a.replace(/for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,function(a,c,d,e){a="";for(c=parseInt(c);c<parseInt(d);c++)a+=e.replace(/\[ i \]/g,"[ "+c+" ]");return a})}function xf(a,b,c,d){var e=a.context,f=c.extensions,g=c.defines,h=c.__webglShader.vertexShader,
k=c.__webglShader.fragmentShader,m="SHADOWMAP_TYPE_BASIC";1===d.shadowMapType?m="SHADOWMAP_TYPE_PCF":2===d.shadowMapType&&(m="SHADOWMAP_TYPE_PCF_SOFT");var x="ENVMAP_TYPE_CUBE",p="ENVMAP_MODE_REFLECTION",n="ENVMAP_BLENDING_MULTIPLY";if(d.envMap){switch(c.envMap.mapping){case 301:case 302:x="ENVMAP_TYPE_CUBE";break;case 306:case 307:x="ENVMAP_TYPE_CUBE_UV";break;case 303:case 304:x="ENVMAP_TYPE_EQUIREC";break;case 305:x="ENVMAP_TYPE_SPHERE"}switch(c.envMap.mapping){case 302:case 304:p="ENVMAP_MODE_REFRACTION"}switch(c.combine){case 0:n=
"ENVMAP_BLENDING_MULTIPLY";break;case 1:n="ENVMAP_BLENDING_MIX";break;case 2:n="ENVMAP_BLENDING_ADD"}}var r=0<a.gammaFactor?a.gammaFactor:1,f=vf(f,d,a.extensions),l=wf(g),u=e.createProgram();c.isRawShaderMaterial?(g=[l,"\n"].filter(xc).join("\n"),m=[f,l,"\n"].filter(xc).join("\n")):(g=["precision "+d.precision+" float;","precision "+d.precision+" int;","#define SHADER_NAME "+c.__webglShader.name,l,d.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+r,"#define MAX_BONES "+
d.maxBones,d.map?"#define USE_MAP":"",d.envMap?"#define USE_ENVMAP":"",d.envMap?"#define "+p:"",d.lightMap?"#define USE_LIGHTMAP":"",d.aoMap?"#define USE_AOMAP":"",d.emissiveMap?"#define USE_EMISSIVEMAP":"",d.bumpMap?"#define USE_BUMPMAP":"",d.normalMap?"#define USE_NORMALMAP":"",d.displacementMap&&d.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",d.specularMap?"#define USE_SPECULARMAP":"",d.roughnessMap?"#define USE_ROUGHNESSMAP":"",d.metalnessMap?"#define USE_METALNESSMAP":"",d.alphaMap?
"#define USE_ALPHAMAP":"",d.vertexColors?"#define USE_COLOR":"",d.flatShading?"#define FLAT_SHADED":"",d.skinning?"#define USE_SKINNING":"",d.useVertexTexture?"#define BONE_TEXTURE":"",d.morphTargets?"#define USE_MORPHTARGETS":"",d.morphNormals&&!1===d.flatShading?"#define USE_MORPHNORMALS":"",d.doubleSided?"#define DOUBLE_SIDED":"",d.flipSided?"#define FLIP_SIDED":"","#define NUM_CLIPPING_PLANES "+d.numClippingPlanes,d.shadowMapEnabled?"#define USE_SHADOWMAP":"",d.shadowMapEnabled?"#define "+m:"",
d.sizeAttenuation?"#define USE_SIZEATTENUATION":"",d.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",d.logarithmicDepthBuffer&&a.extensions.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_COLOR","\tattribute vec3 color;","#endif",
"#ifdef USE_MORPHTARGETS","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif","#ifdef USE_SKINNING",
"\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif","\n"].filter(xc).join("\n"),m=[f,"precision "+d.precision+" float;","precision "+d.precision+" int;","#define SHADER_NAME "+c.__webglShader.name,l,d.alphaTest?"#define ALPHATEST "+d.alphaTest:"","#define GAMMA_FACTOR "+r,d.useFog&&d.fog?"#define USE_FOG":"",d.useFog&&d.fogExp?"#define FOG_EXP2":"",d.map?"#define USE_MAP":"",d.envMap?"#define USE_ENVMAP":"",d.envMap?"#define "+x:"",d.envMap?"#define "+p:"",d.envMap?"#define "+n:
"",d.lightMap?"#define USE_LIGHTMAP":"",d.aoMap?"#define USE_AOMAP":"",d.emissiveMap?"#define USE_EMISSIVEMAP":"",d.bumpMap?"#define USE_BUMPMAP":"",d.normalMap?"#define USE_NORMALMAP":"",d.specularMap?"#define USE_SPECULARMAP":"",d.roughnessMap?"#define USE_ROUGHNESSMAP":"",d.metalnessMap?"#define USE_METALNESSMAP":"",d.alphaMap?"#define USE_ALPHAMAP":"",d.vertexColors?"#define USE_COLOR":"",d.gradientMap?"#define USE_GRADIENTMAP":"",d.flatShading?"#define FLAT_SHADED":"",d.doubleSided?"#define DOUBLE_SIDED":
"",d.flipSided?"#define FLIP_SIDED":"","#define NUM_CLIPPING_PLANES "+d.numClippingPlanes,"#define UNION_CLIPPING_PLANES "+(d.numClippingPlanes-d.numClipIntersection),d.shadowMapEnabled?"#define USE_SHADOWMAP":"",d.shadowMapEnabled?"#define "+m:"",d.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",d.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",d.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",d.logarithmicDepthBuffer&&a.extensions.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":
"",d.envMap&&a.extensions.get("EXT_shader_texture_lod")?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;",0!==d.toneMapping?"#define TONE_MAPPING":"",0!==d.toneMapping?Z.tonemapping_pars_fragment:"",0!==d.toneMapping?uf("toneMapping",d.toneMapping):"",d.outputEncoding||d.mapEncoding||d.envMapEncoding||d.emissiveMapEncoding?Z.encodings_pars_fragment:"",d.mapEncoding?Kd("mapTexelToLinear",d.mapEncoding):"",d.envMapEncoding?Kd("envMapTexelToLinear",d.envMapEncoding):
"",d.emissiveMapEncoding?Kd("emissiveMapTexelToLinear",d.emissiveMapEncoding):"",d.outputEncoding?tf("linearToOutputTexel",d.outputEncoding):"",d.depthPacking?"#define DEPTH_PACKING "+c.depthPacking:"","\n"].filter(xc).join("\n"));h=Ld(h,d);h=Ae(h,d);k=Ld(k,d);k=Ae(k,d);c.isShaderMaterial||(h=Be(h),k=Be(k));k=m+k;h=ye(e,e.VERTEX_SHADER,g+h);k=ye(e,e.FRAGMENT_SHADER,k);e.attachShader(u,h);e.attachShader(u,k);void 0!==c.index0AttributeName?e.bindAttribLocation(u,0,c.index0AttributeName):!0===d.morphTargets&&
e.bindAttribLocation(u,0,"position");e.linkProgram(u);d=e.getProgramInfoLog(u);x=e.getShaderInfoLog(h);p=e.getShaderInfoLog(k);r=n=!0;if(!1===e.getProgramParameter(u,e.LINK_STATUS))n=!1,console.error("THREE.WebGLProgram: shader error: ",e.getError(),"gl.VALIDATE_STATUS",e.getProgramParameter(u,e.VALIDATE_STATUS),"gl.getProgramInfoLog",d,x,p);else if(""!==d)console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",d);else if(""===x||""===p)r=!1;r&&(this.diagnostics={runnable:n,material:c,programLog:d,
vertexShader:{log:x,prefix:g},fragmentShader:{log:p,prefix:m}});e.deleteShader(h);e.deleteShader(k);var q;this.getUniforms=function(){void 0===q&&(q=new bb(e,u,a));return q};var t;this.getAttributes=function(){if(void 0===t){for(var a={},b=e.getProgramParameter(u,e.ACTIVE_ATTRIBUTES),c=0;c<b;c++){var d=e.getActiveAttrib(u,c).name;a[d]=e.getAttribLocation(u,d)}t=a}return t};this.destroy=function(){e.deleteProgram(u);this.program=void 0};Object.defineProperties(this,{uniforms:{get:function(){console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms().");
return this.getUniforms()}},attributes:{get:function(){console.warn("THREE.WebGLProgram: .attributes is now .getAttributes().");return this.getAttributes()}}});this.id=yf++;this.code=b;this.usedTimes=1;this.program=u;this.vertexShader=h;this.fragmentShader=k;return this}function zf(a,b){function c(a,b){var c;a?a.isTexture?c=a.encoding:a.isWebGLRenderTarget&&(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),c=
a.texture.encoding):c=3E3;3E3===c&&b&&(c=3007);return c}var d=[],e={MeshDepthMaterial:"depth",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"phong",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points"},f="precision supportsVertexTextures map mapEncoding envMap envMapMode envMapEncoding lightMap aoMap emissiveMap emissiveMapEncoding bumpMap normalMap displacementMap specularMap roughnessMap metalnessMap gradientMap alphaMap combine vertexColors fog useFog fogExp flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights numRectAreaLights shadowMapEnabled shadowMapType toneMapping physicallyCorrectLights alphaTest doubleSided flipSided numClippingPlanes numClipIntersection depthPacking".split(" ");
this.getParameters=function(d,f,k,m,x,p){var n=e[d.type],r;b.floatVertexTextures&&p&&p.skeleton&&p.skeleton.useVertexTexture?r=1024:(r=Math.floor((b.maxVertexUniforms-20)/4),void 0!==p&&p&&p.isSkinnedMesh&&(r=Math.min(p.skeleton.bones.length,r),r<p.skeleton.bones.length&&console.warn("WebGLRenderer: too many bones - "+p.skeleton.bones.length+", this GPU supports just "+r+" (try OpenGL instead of ANGLE)")));var l=a.getPrecision();null!==d.precision&&(l=b.getMaxPrecision(d.precision),l!==d.precision&&
console.warn("THREE.WebGLProgram.getParameters:",d.precision,"not supported, using",l,"instead."));var u=a.getCurrentRenderTarget();return{shaderID:n,precision:l,supportsVertexTextures:b.vertexTextures,outputEncoding:c(u?u.texture:null,a.gammaOutput),map:!!d.map,mapEncoding:c(d.map,a.gammaInput),envMap:!!d.envMap,envMapMode:d.envMap&&d.envMap.mapping,envMapEncoding:c(d.envMap,a.gammaInput),envMapCubeUV:!!d.envMap&&(306===d.envMap.mapping||307===d.envMap.mapping),lightMap:!!d.lightMap,aoMap:!!d.aoMap,
emissiveMap:!!d.emissiveMap,emissiveMapEncoding:c(d.emissiveMap,a.gammaInput),bumpMap:!!d.bumpMap,normalMap:!!d.normalMap,displacementMap:!!d.displacementMap,roughnessMap:!!d.roughnessMap,metalnessMap:!!d.metalnessMap,specularMap:!!d.specularMap,alphaMap:!!d.alphaMap,gradientMap:!!d.gradientMap,combine:d.combine,vertexColors:d.vertexColors,fog:!!k,useFog:d.fog,fogExp:k&&k.isFogExp2,flatShading:1===d.shading,sizeAttenuation:d.sizeAttenuation,logarithmicDepthBuffer:b.logarithmicDepthBuffer,skinning:d.skinning,
maxBones:r,useVertexTexture:b.floatVertexTextures&&p&&p.skeleton&&p.skeleton.useVertexTexture,morphTargets:d.morphTargets,morphNormals:d.morphNormals,maxMorphTargets:a.maxMorphTargets,maxMorphNormals:a.maxMorphNormals,numDirLights:f.directional.length,numPointLights:f.point.length,numSpotLights:f.spot.length,numRectAreaLights:f.rectArea.length,numHemiLights:f.hemi.length,numClippingPlanes:m,numClipIntersection:x,shadowMapEnabled:a.shadowMap.enabled&&p.receiveShadow&&0<f.shadows.length,shadowMapType:a.shadowMap.type,
toneMapping:a.toneMapping,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:d.premultipliedAlpha,alphaTest:d.alphaTest,doubleSided:2===d.side,flipSided:1===d.side,depthPacking:void 0!==d.depthPacking?d.depthPacking:!1}};this.getProgramCode=function(a,b){var c=[];b.shaderID?c.push(b.shaderID):(c.push(a.fragmentShader),c.push(a.vertexShader));if(void 0!==a.defines)for(var d in a.defines)c.push(d),c.push(a.defines[d]);for(d=0;d<f.length;d++)c.push(b[f[d]]);return c.join()};this.acquireProgram=
function(b,c,e){for(var f,x=0,p=d.length;x<p;x++){var n=d[x];if(n.code===e){f=n;++f.usedTimes;break}}void 0===f&&(f=new xf(a,e,b,c),d.push(f));return f};this.releaseProgram=function(a){if(0===--a.usedTimes){var b=d.indexOf(a);d[b]=d[d.length-1];d.pop();a.destroy()}};this.programs=d}function Af(a,b,c){function d(a){var h=a.target;a=f[h.id];null!==a.index&&e(a.index);var k=a.attributes,m;for(m in k)e(k[m]);h.removeEventListener("dispose",d);delete f[h.id];m=b.get(h);m.wireframe&&e(m.wireframe);b["delete"](h);
h=b.get(a);h.wireframe&&e(h.wireframe);b["delete"](a);c.memory.geometries--}function e(c){var d;d=c.isInterleavedBufferAttribute?b.get(c.data).__webglBuffer:b.get(c).__webglBuffer;void 0!==d&&(a.deleteBuffer(d),c.isInterleavedBufferAttribute?b["delete"](c.data):b["delete"](c))}var f={};return{get:function(a){var b=a.geometry;if(void 0!==f[b.id])return f[b.id];b.addEventListener("dispose",d);var e;b.isBufferGeometry?e=b:b.isGeometry&&(void 0===b._bufferGeometry&&(b._bufferGeometry=(new J).setFromObject(a)),
e=b._bufferGeometry);f[b.id]=e;c.memory.geometries++;return e}}}function Bf(a,b,c){function d(c,d){var e=c.isInterleavedBufferAttribute?c.data:c,k=b.get(e);if(void 0===k.__webglBuffer){k.__webglBuffer=a.createBuffer();a.bindBuffer(d,k.__webglBuffer);a.bufferData(d,e.array,e.dynamic?a.DYNAMIC_DRAW:a.STATIC_DRAW);var m=a.FLOAT,x=e.array;x instanceof Float32Array?m=a.FLOAT:x instanceof Float64Array?console.warn("Unsupported data buffer format: Float64Array"):x instanceof Uint16Array?m=a.UNSIGNED_SHORT:
x instanceof Int16Array?m=a.SHORT:x instanceof Uint32Array?m=a.UNSIGNED_INT:x instanceof Int32Array?m=a.INT:x instanceof Int8Array?m=a.BYTE:x instanceof Uint8Array&&(m=a.UNSIGNED_BYTE);k.bytesPerElement=x.BYTES_PER_ELEMENT;k.type=m;k.version=e.version;e.onUploadCallback()}else k.version!==e.version&&(a.bindBuffer(d,k.__webglBuffer),!1===e.dynamic?a.bufferData(d,e.array,a.STATIC_DRAW):-1===e.updateRange.count?a.bufferSubData(d,0,e.array):0===e.updateRange.count?console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually."):
(a.bufferSubData(d,e.updateRange.offset*e.array.BYTES_PER_ELEMENT,e.array.subarray(e.updateRange.offset,e.updateRange.offset+e.updateRange.count)),e.updateRange.count=0),k.version=e.version)}var e=new Af(a,b,c);return{getAttributeBuffer:function(a){return a.isInterleavedBufferAttribute?b.get(a.data).__webglBuffer:b.get(a).__webglBuffer},getAttributeProperties:function(a){return a.isInterleavedBufferAttribute?b.get(a.data):b.get(a)},getWireframeAttribute:function(c){var e=b.get(c);if(void 0!==e.wireframe)return e.wireframe;
var h=[],k=c.index,m=c.attributes;c=m.position;if(null!==k)for(var k=k.array,m=0,x=k.length;m<x;m+=3){var p=k[m+0],n=k[m+1],r=k[m+2];h.push(p,n,n,r,r,p)}else for(k=m.position.array,m=0,x=k.length/3-1;m<x;m+=3)p=m+0,n=m+1,r=m+2,h.push(p,n,n,r,r,p);h=new z(new (65535<c.count?Uint32Array:Uint16Array)(h),1);d(h,a.ELEMENT_ARRAY_BUFFER);return e.wireframe=h},update:function(b){var c=e.get(b);b.geometry.isGeometry&&c.updateFromObject(b);b=c.index;var h=c.attributes;null!==b&&d(b,a.ELEMENT_ARRAY_BUFFER);
for(var k in h)d(h[k],a.ARRAY_BUFFER);b=c.morphAttributes;for(k in b)for(var h=b[k],m=0,x=h.length;m<x;m++)d(h[m],a.ARRAY_BUFFER);return c}}}function Cf(a,b,c,d,e,f,g){function h(a,b){if(a.width>b||a.height>b){var c=b/Math.max(a.width,a.height),d=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");d.width=Math.floor(a.width*c);d.height=Math.floor(a.height*c);d.getContext("2d").drawImage(a,0,0,a.width,a.height,0,0,d.width,d.height);console.warn("THREE.WebGLRenderer: image is too big ("+
a.width+"x"+a.height+"). Resized to "+d.width+"x"+d.height,a);return d}return a}function k(a){return S.isPowerOfTwo(a.width)&&S.isPowerOfTwo(a.height)}function m(b){return 1003===b||1004===b||1005===b?a.NEAREST:a.LINEAR}function x(b){b=b.target;b.removeEventListener("dispose",x);a:{var c=d.get(b);if(b.image&&c.__image__webglTextureCube)a.deleteTexture(c.__image__webglTextureCube);else{if(void 0===c.__webglInit)break a;a.deleteTexture(c.__webglTexture)}d["delete"](b)}q.textures--}function p(b){b=b.target;
b.removeEventListener("dispose",p);var c=d.get(b),e=d.get(b.texture);if(b){void 0!==e.__webglTexture&&a.deleteTexture(e.__webglTexture);b.depthTexture&&b.depthTexture.dispose();if(b.isWebGLRenderTargetCube)for(e=0;6>e;e++)a.deleteFramebuffer(c.__webglFramebuffer[e]),c.__webglDepthbuffer&&a.deleteRenderbuffer(c.__webglDepthbuffer[e]);else a.deleteFramebuffer(c.__webglFramebuffer),c.__webglDepthbuffer&&a.deleteRenderbuffer(c.__webglDepthbuffer);d["delete"](b.texture);d["delete"](b)}q.textures--}function n(b,
g){var m=d.get(b);if(0<b.version&&m.__version!==b.version){var n=b.image;if(void 0===n)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined",b);else if(!1===n.complete)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete",b);else{void 0===m.__webglInit&&(m.__webglInit=!0,b.addEventListener("dispose",x),m.__webglTexture=a.createTexture(),q.textures++);c.activeTexture(a.TEXTURE0+g);c.bindTexture(a.TEXTURE_2D,m.__webglTexture);a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,
b.flipY);a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha);a.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment);var p=h(b.image,e.maxTextureSize);if((1001!==b.wrapS||1001!==b.wrapT||1003!==b.minFilter&&1006!==b.minFilter)&&!1===k(p))if(n=p,n instanceof HTMLImageElement||n instanceof HTMLCanvasElement){var l=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");l.width=S.nearestPowerOfTwo(n.width);l.height=S.nearestPowerOfTwo(n.height);l.getContext("2d").drawImage(n,0,0,
l.width,l.height);console.warn("THREE.WebGLRenderer: image is not power of two ("+n.width+"x"+n.height+"). Resized to "+l.width+"x"+l.height,n);p=l}else p=n;var n=k(p),l=f(b.format),w=f(b.type);r(a.TEXTURE_2D,b,n);var u=b.mipmaps;if(b.isDepthTexture){u=a.DEPTH_COMPONENT;if(1015===b.type){if(!t)throw Error("Float Depth Texture only supported in WebGL2.0");u=a.DEPTH_COMPONENT32F}else t&&(u=a.DEPTH_COMPONENT16);1026===b.format&&u===a.DEPTH_COMPONENT&&1012!==b.type&&1014!==b.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),
b.type=1012,w=f(b.type));1027===b.format&&(u=a.DEPTH_STENCIL,1020!==b.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=1020,w=f(b.type)));c.texImage2D(a.TEXTURE_2D,0,u,p.width,p.height,0,l,w,null)}else if(b.isDataTexture)if(0<u.length&&n){for(var I=0,z=u.length;I<z;I++)p=u[I],c.texImage2D(a.TEXTURE_2D,I,l,p.width,p.height,0,l,w,p.data);b.generateMipmaps=!1}else c.texImage2D(a.TEXTURE_2D,0,l,p.width,p.height,0,l,w,p.data);else if(b.isCompressedTexture)for(I=
0,z=u.length;I<z;I++)p=u[I],1023!==b.format&&1022!==b.format?-1<c.getCompressedTextureFormats().indexOf(l)?c.compressedTexImage2D(a.TEXTURE_2D,I,l,p.width,p.height,0,p.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):c.texImage2D(a.TEXTURE_2D,I,l,p.width,p.height,0,l,w,p.data);else if(0<u.length&&n){I=0;for(z=u.length;I<z;I++)p=u[I],c.texImage2D(a.TEXTURE_2D,I,l,l,w,p);b.generateMipmaps=!1}else c.texImage2D(a.TEXTURE_2D,0,l,l,w,p);
b.generateMipmaps&&n&&a.generateMipmap(a.TEXTURE_2D);m.__version=b.version;if(b.onUpdate)b.onUpdate(b);return}}c.activeTexture(a.TEXTURE0+g);c.bindTexture(a.TEXTURE_2D,m.__webglTexture)}function r(c,g,h){h?(a.texParameteri(c,a.TEXTURE_WRAP_S,f(g.wrapS)),a.texParameteri(c,a.TEXTURE_WRAP_T,f(g.wrapT)),a.texParameteri(c,a.TEXTURE_MAG_FILTER,f(g.magFilter)),a.texParameteri(c,a.TEXTURE_MIN_FILTER,f(g.minFilter))):(a.texParameteri(c,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(c,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),
1001===g.wrapS&&1001===g.wrapT||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.",g),a.texParameteri(c,a.TEXTURE_MAG_FILTER,m(g.magFilter)),a.texParameteri(c,a.TEXTURE_MIN_FILTER,m(g.minFilter)),1003!==g.minFilter&&1006!==g.minFilter&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.",g));!(h=b.get("EXT_texture_filter_anisotropic"))||
1015===g.type&&null===b.get("OES_texture_float_linear")||1016===g.type&&null===b.get("OES_texture_half_float_linear")||!(1<g.anisotropy||d.get(g).__currentAnisotropy)||(a.texParameterf(c,h.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,e.getMaxAnisotropy())),d.get(g).__currentAnisotropy=g.anisotropy)}function l(b,e,g,h){var k=f(e.texture.format),m=f(e.texture.type);c.texImage2D(h,0,k,e.width,e.height,0,k,m,null);a.bindFramebuffer(a.FRAMEBUFFER,b);a.framebufferTexture2D(a.FRAMEBUFFER,g,h,d.get(e.texture).__webglTexture,
0);a.bindFramebuffer(a.FRAMEBUFFER,null)}function u(b,c){a.bindRenderbuffer(a.RENDERBUFFER,b);c.depthBuffer&&!c.stencilBuffer?(a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_COMPONENT16,c.width,c.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,b)):c.depthBuffer&&c.stencilBuffer?(a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_STENCIL,c.width,c.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,b)):a.renderbufferStorage(a.RENDERBUFFER,
a.RGBA4,c.width,c.height);a.bindRenderbuffer(a.RENDERBUFFER,null)}var q=g.memory,t="undefined"!==typeof WebGL2RenderingContext&&a instanceof WebGL2RenderingContext;this.setTexture2D=n;this.setTextureCube=function(b,g){var m=d.get(b);if(6===b.image.length)if(0<b.version&&m.__version!==b.version){m.__image__webglTextureCube||(b.addEventListener("dispose",x),m.__image__webglTextureCube=a.createTexture(),q.textures++);c.activeTexture(a.TEXTURE0+g);c.bindTexture(a.TEXTURE_CUBE_MAP,m.__image__webglTextureCube);
a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY);for(var n=b&&b.isCompressedTexture,p=b.image[0]&&b.image[0].isDataTexture,l=[],w=0;6>w;w++)l[w]=n||p?p?b.image[w].image:b.image[w]:h(b.image[w],e.maxCubemapSize);var u=k(l[0]),t=f(b.format),z=f(b.type);r(a.TEXTURE_CUBE_MAP,b,u);for(w=0;6>w;w++)if(n)for(var B,F=l[w].mipmaps,oa=0,N=F.length;oa<N;oa++)B=F[oa],1023!==b.format&&1022!==b.format?-1<c.getCompressedTextureFormats().indexOf(t)?c.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+w,oa,t,B.width,B.height,
0,B.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+w,oa,t,B.width,B.height,0,t,z,B.data);else p?c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+w,0,t,l[w].width,l[w].height,0,t,z,l[w].data):c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+w,0,t,t,z,l[w]);b.generateMipmaps&&u&&a.generateMipmap(a.TEXTURE_CUBE_MAP);m.__version=b.version;if(b.onUpdate)b.onUpdate(b)}else c.activeTexture(a.TEXTURE0+g),
c.bindTexture(a.TEXTURE_CUBE_MAP,m.__image__webglTextureCube)};this.setTextureCubeDynamic=function(b,e){c.activeTexture(a.TEXTURE0+e);c.bindTexture(a.TEXTURE_CUBE_MAP,d.get(b).__webglTexture)};this.setupRenderTarget=function(b){var e=d.get(b),f=d.get(b.texture);b.addEventListener("dispose",p);f.__webglTexture=a.createTexture();q.textures++;var g=!0===b.isWebGLRenderTargetCube,h=k(b);if(g){e.__webglFramebuffer=[];for(var m=0;6>m;m++)e.__webglFramebuffer[m]=a.createFramebuffer()}else e.__webglFramebuffer=
a.createFramebuffer();if(g){c.bindTexture(a.TEXTURE_CUBE_MAP,f.__webglTexture);r(a.TEXTURE_CUBE_MAP,b.texture,h);for(m=0;6>m;m++)l(e.__webglFramebuffer[m],b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+m);b.texture.generateMipmaps&&h&&a.generateMipmap(a.TEXTURE_CUBE_MAP);c.bindTexture(a.TEXTURE_CUBE_MAP,null)}else c.bindTexture(a.TEXTURE_2D,f.__webglTexture),r(a.TEXTURE_2D,b.texture,h),l(e.__webglFramebuffer,b,a.COLOR_ATTACHMENT0,a.TEXTURE_2D),b.texture.generateMipmaps&&h&&a.generateMipmap(a.TEXTURE_2D),
c.bindTexture(a.TEXTURE_2D,null);if(b.depthBuffer){e=d.get(b);f=!0===b.isWebGLRenderTargetCube;if(b.depthTexture){if(f)throw Error("target.depthTexture not supported in Cube render targets");if(b&&b.isWebGLRenderTargetCube)throw Error("Depth Texture with cube render targets is not supported!");a.bindFramebuffer(a.FRAMEBUFFER,e.__webglFramebuffer);if(!b.depthTexture||!b.depthTexture.isDepthTexture)throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");d.get(b.depthTexture).__webglTexture&&
b.depthTexture.image.width===b.width&&b.depthTexture.image.height===b.height||(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0);n(b.depthTexture,0);e=d.get(b.depthTexture).__webglTexture;if(1026===b.depthTexture.format)a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,e,0);else if(1027===b.depthTexture.format)a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,e,0);else throw Error("Unknown depthTexture format");
}else if(f)for(e.__webglDepthbuffer=[],f=0;6>f;f++)a.bindFramebuffer(a.FRAMEBUFFER,e.__webglFramebuffer[f]),e.__webglDepthbuffer[f]=a.createRenderbuffer(),u(e.__webglDepthbuffer[f],b);else a.bindFramebuffer(a.FRAMEBUFFER,e.__webglFramebuffer),e.__webglDepthbuffer=a.createRenderbuffer(),u(e.__webglDepthbuffer,b);a.bindFramebuffer(a.FRAMEBUFFER,null)}};this.updateRenderTargetMipmap=function(b){var e=b.texture;e.generateMipmaps&&k(b)&&1003!==e.minFilter&&1006!==e.minFilter&&(b=b&&b.isWebGLRenderTargetCube?
a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,e=d.get(e).__webglTexture,c.bindTexture(b,e),a.generateMipmap(b),c.bindTexture(b,null))}}function Df(){var a={};return{get:function(b){b=b.uuid;var c=a[b];void 0===c&&(c={},a[b]=c);return c},"delete":function(b){delete a[b.uuid]},clear:function(){a={}}}}function Ef(a,b,c){function d(b,c,d){var e=new Uint8Array(4),f=a.createTexture();a.bindTexture(b,f);a.texParameteri(b,a.TEXTURE_MIN_FILTER,a.NEAREST);a.texParameteri(b,a.TEXTURE_MAG_FILTER,a.NEAREST);for(b=0;b<d;b++)a.texImage2D(c+
b,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,e);return f}function e(b){!0!==v[b]&&(a.enable(b),v[b]=!0)}function f(b){!1!==v[b]&&(a.disable(b),v[b]=!1)}function g(b,d,g,h,k,m,n,p){0!==b?e(a.BLEND):f(a.BLEND);if(b!==y||p!==wa)2===b?p?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ONE,a.ONE,a.ONE,a.ONE)):(a.blendEquation(a.FUNC_ADD),a.blendFunc(a.SRC_ALPHA,a.ONE)):3===b?p?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ZERO,a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ONE_MINUS_SRC_ALPHA)):
(a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ZERO,a.ONE_MINUS_SRC_COLOR)):4===b?p?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA)):(a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ZERO,a.SRC_COLOR)):p?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA)):(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA)),
y=b,wa=p;if(5===b){k=k||d;m=m||g;n=n||h;if(d!==C||k!==L)a.blendEquationSeparate(c(d),c(k)),C=d,L=k;if(g!==H||h!==E||m!==z||n!==I)a.blendFuncSeparate(c(g),c(h),c(m),c(n)),H=g,E=h,z=m,I=n}else I=z=L=E=H=C=null}function h(a){n.setFunc(a)}function k(b){B!==b&&(b?a.frontFace(a.CW):a.frontFace(a.CCW),B=b)}function m(b){0!==b?(e(a.CULL_FACE),b!==F&&(1===b?a.cullFace(a.BACK):2===b?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):f(a.CULL_FACE);F=b}function x(b){void 0===b&&(b=a.TEXTURE0+T-1);G!==b&&(a.activeTexture(b),
G=b)}var p=new function(){var b=!1,c=new fa,d=null,e=new fa;return{setMask:function(c){d===c||b||(a.colorMask(c,c,c,c),d=c)},setLocked:function(a){b=a},setClear:function(b,d,f,g,h){!0===h&&(b*=g,d*=g,f*=g);c.set(b,d,f,g);!1===e.equals(c)&&(a.clearColor(b,d,f,g),e.copy(c))},reset:function(){b=!1;d=null;e.set(0,0,0,1)}}},n=new function(){var b=!1,c=null,d=null,g=null;return{setTest:function(b){b?e(a.DEPTH_TEST):f(a.DEPTH_TEST)},setMask:function(d){c===d||b||(a.depthMask(d),c=d)},setFunc:function(b){if(d!==
b){if(b)switch(b){case 0:a.depthFunc(a.NEVER);break;case 1:a.depthFunc(a.ALWAYS);break;case 2:a.depthFunc(a.LESS);break;case 3:a.depthFunc(a.LEQUAL);break;case 4:a.depthFunc(a.EQUAL);break;case 5:a.depthFunc(a.GEQUAL);break;case 6:a.depthFunc(a.GREATER);break;case 7:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}else a.depthFunc(a.LEQUAL);d=b}},setLocked:function(a){b=a},setClear:function(b){g!==b&&(a.clearDepth(b),g=b)},reset:function(){b=!1;g=d=c=null}}},r=new function(){var b=!1,c=
null,d=null,g=null,h=null,k=null,m=null,n=null,p=null;return{setTest:function(b){b?e(a.STENCIL_TEST):f(a.STENCIL_TEST)},setMask:function(d){c===d||b||(a.stencilMask(d),c=d)},setFunc:function(b,c,e){if(d!==b||g!==c||h!==e)a.stencilFunc(b,c,e),d=b,g=c,h=e},setOp:function(b,c,d){if(k!==b||m!==c||n!==d)a.stencilOp(b,c,d),k=b,m=c,n=d},setLocked:function(a){b=a},setClear:function(b){p!==b&&(a.clearStencil(b),p=b)},reset:function(){b=!1;p=n=m=k=h=g=d=c=null}}},l=a.getParameter(a.MAX_VERTEX_ATTRIBS),u=new Uint8Array(l),
q=new Uint8Array(l),t=new Uint8Array(l),v={},M=null,y=null,C=null,H=null,E=null,L=null,z=null,I=null,wa=!1,B=null,F=null,oa=null,N=null,O=null,Q=null,T=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),G=null,V={},J=new fa,K=new fa,P={};P[a.TEXTURE_2D]=d(a.TEXTURE_2D,a.TEXTURE_2D,1);P[a.TEXTURE_CUBE_MAP]=d(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6);return{buffers:{color:p,depth:n,stencil:r},init:function(){p.setClear(0,0,0,1);n.setClear(1);r.setClear(0);e(a.DEPTH_TEST);h(3);k(!1);m(1);e(a.CULL_FACE);
e(a.BLEND);g(1)},initAttributes:function(){for(var a=0,b=u.length;a<b;a++)u[a]=0},enableAttribute:function(c){u[c]=1;0===q[c]&&(a.enableVertexAttribArray(c),q[c]=1);0!==t[c]&&(b.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(c,0),t[c]=0)},enableAttributeAndDivisor:function(b,c,d){u[b]=1;0===q[b]&&(a.enableVertexAttribArray(b),q[b]=1);t[b]!==c&&(d.vertexAttribDivisorANGLE(b,c),t[b]=c)},disableUnusedAttributes:function(){for(var b=0,c=q.length;b!==c;++b)q[b]!==u[b]&&(a.disableVertexAttribArray(b),
q[b]=0)},enable:e,disable:f,getCompressedTextureFormats:function(){if(null===M&&(M=[],b.get("WEBGL_compressed_texture_pvrtc")||b.get("WEBGL_compressed_texture_s3tc")||b.get("WEBGL_compressed_texture_etc1")))for(var c=a.getParameter(a.COMPRESSED_TEXTURE_FORMATS),d=0;d<c.length;d++)M.push(c[d]);return M},setBlending:g,setColorWrite:function(a){p.setMask(a)},setDepthTest:function(a){n.setTest(a)},setDepthWrite:function(a){n.setMask(a)},setDepthFunc:h,setStencilTest:function(a){r.setTest(a)},setStencilWrite:function(a){r.setMask(a)},
setStencilFunc:function(a,b,c){r.setFunc(a,b,c)},setStencilOp:function(a,b,c){r.setOp(a,b,c)},setFlipSided:k,setCullFace:m,setLineWidth:function(b){b!==oa&&(a.lineWidth(b),oa=b)},setPolygonOffset:function(b,c,d){if(b){if(e(a.POLYGON_OFFSET_FILL),N!==c||O!==d)a.polygonOffset(c,d),N=c,O=d}else f(a.POLYGON_OFFSET_FILL)},getScissorTest:function(){return Q},setScissorTest:function(b){(Q=b)?e(a.SCISSOR_TEST):f(a.SCISSOR_TEST)},activeTexture:x,bindTexture:function(b,c){null===G&&x();var d=V[G];void 0===
d&&(d={type:void 0,texture:void 0},V[G]=d);if(d.type!==b||d.texture!==c)a.bindTexture(b,c||P[b]),d.type=b,d.texture=c},compressedTexImage2D:function(){try{a.compressedTexImage2D.apply(a,arguments)}catch(b){console.error(b)}},texImage2D:function(){try{a.texImage2D.apply(a,arguments)}catch(b){console.error(b)}},scissor:function(b){!1===J.equals(b)&&(a.scissor(b.x,b.y,b.z,b.w),J.copy(b))},viewport:function(b){!1===K.equals(b)&&(a.viewport(b.x,b.y,b.z,b.w),K.copy(b))},reset:function(){for(var b=0;b<q.length;b++)1===
q[b]&&(a.disableVertexAttribArray(b),q[b]=0);v={};G=M=null;V={};F=B=y=null;p.reset();n.reset();r.reset()}}}function Ff(a,b,c){function d(b){if("highp"===b){if(0<a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision&&0<a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision)return"highp";b="mediump"}return"mediump"===b&&0<a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision&&0<a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision?"mediump":
"lowp"}var e,f=void 0!==c.precision?c.precision:"highp",g=d(f);g!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",g,"instead."),f=g);c=!0===c.logarithmicDepthBuffer&&!!b.get("EXT_frag_depth");var g=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),h=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),k=a.getParameter(a.MAX_TEXTURE_SIZE),m=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),x=a.getParameter(a.MAX_VERTEX_ATTRIBS),p=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),n=a.getParameter(a.MAX_VARYING_VECTORS),
r=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),l=0<h,u=!!b.get("OES_texture_float");return{getMaxAnisotropy:function(){if(void 0!==e)return e;var c=b.get("EXT_texture_filter_anisotropic");return e=null!==c?a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0},getMaxPrecision:d,precision:f,logarithmicDepthBuffer:c,maxTextures:g,maxVertexTextures:h,maxTextureSize:k,maxCubemapSize:m,maxAttributes:x,maxVertexUniforms:p,maxVaryings:n,maxFragmentUniforms:r,vertexTextures:l,floatFragmentTextures:u,floatVertexTextures:l&&
u}}function Gf(a){var b={};return{get:function(c){if(void 0!==b[c])return b[c];var d;switch(c){case "WEBGL_depth_texture":d=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case "EXT_texture_filter_anisotropic":d=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case "WEBGL_compressed_texture_s3tc":d=
a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case "WEBGL_compressed_texture_pvrtc":d=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;case "WEBGL_compressed_texture_etc1":d=a.getExtension("WEBGL_compressed_texture_etc1");break;default:d=a.getExtension(c)}null===d&&console.warn("THREE.WebGLRenderer: "+c+" extension not supported.");
return b[c]=d}}}function Hf(){function a(){m.value!==d&&(m.value=d,m.needsUpdate=0<e);c.numPlanes=e;c.numIntersection=0}function b(a,b,d,e){var f=null!==a?a.length:0,g=null;if(0!==f){g=m.value;if(!0!==e||null===g){e=d+4*f;b=b.matrixWorldInverse;k.getNormalMatrix(b);if(null===g||g.length<e)g=new Float32Array(e);for(e=0;e!==f;++e,d+=4)h.copy(a[e]).applyMatrix4(b,k),h.normal.toArray(g,d),g[d+3]=h.constant}m.value=g;m.needsUpdate=!0}c.numPlanes=f;return g}var c=this,d=null,e=0,f=!1,g=!1,h=new la,k=new Aa,
m={value:null,needsUpdate:!1};this.uniform=m;this.numIntersection=this.numPlanes=0;this.init=function(a,c,g){var h=0!==a.length||c||0!==e||f;f=c;d=b(a,g,0);e=a.length;return h};this.beginShadows=function(){g=!0;b(null)};this.endShadows=function(){g=!1;a()};this.setState=function(c,h,k,r,l,u){if(!f||null===c||0===c.length||g&&!k)g?b(null):a();else{k=g?0:e;var q=4*k,t=l.clippingState||null;m.value=t;t=b(c,r,q,u);for(c=0;c!==q;++c)t[c]=d[c];l.clippingState=t;this.numIntersection=h?this.numPlanes:0;this.numPlanes+=
k}}}function Md(a){function b(){Y.init();Y.scissor(X.copy(ea).multiplyScalar(Ta));Y.viewport(W.copy(ha).multiplyScalar(Ta));Y.buffers.color.setClear(La.r,La.g,La.b,hb,L)}function c(){U=xa=null;S="";K=-1;Y.reset()}function d(a){a.preventDefault();c();b();ga.clear()}function e(a){a=a.target;a.removeEventListener("dispose",e);f(a);ga["delete"](a)}function f(a){var b=ga.get(a).program;a.program=void 0;void 0!==b&&Aa.releaseProgram(b)}function g(a,b){return Math.abs(b[0])-Math.abs(a[0])}function h(a,b){return a.object.renderOrder!==
b.object.renderOrder?a.object.renderOrder-b.object.renderOrder:a.material.program&&b.material.program&&a.material.program!==b.material.program?a.material.program.id-b.material.program.id:a.material.id!==b.material.id?a.material.id-b.material.id:a.z!==b.z?a.z-b.z:a.id-b.id}function k(a,b){return a.object.renderOrder!==b.object.renderOrder?a.object.renderOrder-b.object.renderOrder:a.z!==b.z?b.z-a.z:a.id-b.id}function m(a,b,c,d,e){var f;c.transparent?(d=Ka,f=++oa):(d=B,f=++F);f=d[f];void 0!==f?(f.id=
a.id,f.object=a,f.geometry=b,f.material=c,f.z=ba.z,f.group=e):(f={id:a.id,object:a,geometry:b,material:c,z:ba.z,group:e},d.push(f))}function x(a){if(!ma.intersectsSphere(a))return!1;var b=ca.numPlanes;if(0===b)return!0;var c=T.clippingPlanes,d=a.center;a=-a.radius;var e=0;do if(c[e].distanceToPoint(d)<a)return!1;while(++e!==b);return!0}function p(a,b){if(!1!==a.visible){if(0!==(a.layers.mask&b.layers.mask))if(a.isLight)I.push(a);else if(a.isSprite){var c;(c=!1===a.frustumCulled)||(na.center.set(0,
0,0),na.radius=.7071067811865476,na.applyMatrix4(a.matrixWorld),c=!0===x(na));c&&O.push(a)}else if(a.isLensFlare)Q.push(a);else if(a.isImmediateRenderObject)!0===T.sortObjects&&(ba.setFromMatrixPosition(a.matrixWorld),ba.applyProjection(ra)),m(a,null,a.material,ba.z,null);else if(a.isMesh||a.isLine||a.isPoints)if(a.isSkinnedMesh&&a.skeleton.update(),(c=!1===a.frustumCulled)||(c=a.geometry,null===c.boundingSphere&&c.computeBoundingSphere(),na.copy(c.boundingSphere).applyMatrix4(a.matrixWorld),c=!0===
x(na)),c){var d=a.material;if(!0===d.visible)if(!0===T.sortObjects&&(ba.setFromMatrixPosition(a.matrixWorld),ba.applyProjection(ra)),c=sa.update(a),d.isMultiMaterial)for(var e=c.groups,f=d.materials,d=0,g=e.length;d<g;d++){var h=e[d],k=f[h.materialIndex];!0===k.visible&&m(a,c,k,ba.z,h)}else m(a,c,d,ba.z,null)}c=a.children;d=0;for(g=c.length;d<g;d++)p(c[d],b)}}function n(a,b,c,d){for(var e=0,f=a.length;e<f;e++){var g=a[e],h=g.object,k=g.geometry,m=void 0===d?g.material:d,g=g.group;h.modelViewMatrix.multiplyMatrices(c.matrixWorldInverse,
h.matrixWorld);h.normalMatrix.getNormalMatrix(h.modelViewMatrix);h.onBeforeRender(T,b,c,k,m,g);if(h.isImmediateRenderObject){r(m);var n=l(c,b.fog,m,h);S="";h.render(function(a){T.renderBufferImmediate(a,n,m)})}else T.renderBufferDirect(c,b.fog,k,m,h,g);h.onAfterRender(T,b,c,k,m,g)}}function r(a){2===a.side?Y.disable(D.CULL_FACE):Y.enable(D.CULL_FACE);Y.setFlipSided(1===a.side);!0===a.transparent?Y.setBlending(a.blending,a.blendEquation,a.blendSrc,a.blendDst,a.blendEquationAlpha,a.blendSrcAlpha,a.blendDstAlpha,
a.premultipliedAlpha):Y.setBlending(0);Y.setDepthFunc(a.depthFunc);Y.setDepthTest(a.depthTest);Y.setDepthWrite(a.depthWrite);Y.setColorWrite(a.colorWrite);Y.setPolygonOffset(a.polygonOffset,a.polygonOffsetFactor,a.polygonOffsetUnits)}function l(a,b,c,d){Z=0;var g=ga.get(c);pa&&(ta||a!==U)&&ca.setState(c.clippingPlanes,c.clipIntersection,c.clipShadows,a,g,a===U&&c.id===K);!1===c.needsUpdate&&(void 0===g.program?c.needsUpdate=!0:c.fog&&g.fog!==b?c.needsUpdate=!0:c.lights&&g.lightsHash!==aa.hash?c.needsUpdate=
!0:void 0===g.numClippingPlanes||g.numClippingPlanes===ca.numPlanes&&g.numIntersection===ca.numIntersection||(c.needsUpdate=!0));if(c.needsUpdate){a:{var h=ga.get(c),k=Aa.getParameters(c,aa,b,ca.numPlanes,ca.numIntersection,d),m=Aa.getProgramCode(c,k),n=h.program,p=!0;if(void 0===n)c.addEventListener("dispose",e);else if(n.code!==m)f(c);else if(void 0!==k.shaderID)break a;else p=!1;p&&(k.shaderID?(n=Hb[k.shaderID],h.__webglShader={name:c.type,uniforms:Object.assign({},n.uniforms),vertexShader:n.vertexShader,
fragmentShader:n.fragmentShader}):h.__webglShader={name:c.type,uniforms:c.uniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader},c.__webglShader=h.__webglShader,n=Aa.acquireProgram(c,k,m),h.program=n,c.program=n);k=n.getAttributes();if(c.morphTargets)for(m=c.numSupportedMorphTargets=0;m<T.maxMorphTargets;m++)0<=k["morphTarget"+m]&&c.numSupportedMorphTargets++;if(c.morphNormals)for(m=c.numSupportedMorphNormals=0;m<T.maxMorphNormals;m++)0<=k["morphNormal"+m]&&c.numSupportedMorphNormals++;
k=h.__webglShader.uniforms;if(!c.isShaderMaterial&&!c.isRawShaderMaterial||!0===c.clipping)h.numClippingPlanes=ca.numPlanes,h.numIntersection=ca.numIntersection,k.clippingPlanes=ca.uniform;h.fog=b;h.lightsHash=aa.hash;c.lights&&(k.ambientLightColor.value=aa.ambient,k.directionalLights.value=aa.directional,k.spotLights.value=aa.spot,k.rectAreaLights.value=aa.rectArea,k.pointLights.value=aa.point,k.hemisphereLights.value=aa.hemi,k.directionalShadowMap.value=aa.directionalShadowMap,k.directionalShadowMatrix.value=
aa.directionalShadowMatrix,k.spotShadowMap.value=aa.spotShadowMap,k.spotShadowMatrix.value=aa.spotShadowMatrix,k.pointShadowMap.value=aa.pointShadowMap,k.pointShadowMatrix.value=aa.pointShadowMatrix);m=h.program.getUniforms();k=bb.seqWithValue(m.seq,k);h.uniformsList=k}c.needsUpdate=!1}var x=!1,p=n=!1,h=g.program,k=h.getUniforms(),m=g.__webglShader.uniforms;h.id!==xa&&(D.useProgram(h.program),xa=h.id,p=n=x=!0);c.id!==K&&(K=c.id,n=!0);if(x||a!==U){k.set(D,a,"projectionMatrix");la.logarithmicDepthBuffer&&
k.setValue(D,"logDepthBufFC",2/(Math.log(a.far+1)/Math.LN2));a!==U&&(U=a,p=n=!0);if(c.isShaderMaterial||c.isMeshPhongMaterial||c.isMeshStandardMaterial||c.envMap)x=k.map.cameraPosition,void 0!==x&&x.setValue(D,ba.setFromMatrixPosition(a.matrixWorld));(c.isMeshPhongMaterial||c.isMeshLambertMaterial||c.isMeshBasicMaterial||c.isMeshStandardMaterial||c.isShaderMaterial||c.skinning)&&k.setValue(D,"viewMatrix",a.matrixWorldInverse);k.set(D,T,"toneMappingExposure");k.set(D,T,"toneMappingWhitePoint")}c.skinning&&
(k.setOptional(D,d,"bindMatrix"),k.setOptional(D,d,"bindMatrixInverse"),a=d.skeleton)&&(la.floatVertexTextures&&a.useVertexTexture?(k.set(D,a,"boneTexture"),k.set(D,a,"boneTextureWidth"),k.set(D,a,"boneTextureHeight")):k.setOptional(D,a,"boneMatrices"));if(n){c.lights&&(a=p,m.ambientLightColor.needsUpdate=a,m.directionalLights.needsUpdate=a,m.pointLights.needsUpdate=a,m.spotLights.needsUpdate=a,m.rectAreaLights.needsUpdate=a,m.hemisphereLights.needsUpdate=a);b&&c.fog&&(m.fogColor.value=b.color,b.isFog?
(m.fogNear.value=b.near,m.fogFar.value=b.far):b.isFogExp2&&(m.fogDensity.value=b.density));if(c.isMeshBasicMaterial||c.isMeshLambertMaterial||c.isMeshPhongMaterial||c.isMeshStandardMaterial||c.isMeshDepthMaterial){m.opacity.value=c.opacity;m.diffuse.value=c.color;c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity);m.map.value=c.map;m.specularMap.value=c.specularMap;m.alphaMap.value=c.alphaMap;c.lightMap&&(m.lightMap.value=c.lightMap,m.lightMapIntensity.value=c.lightMapIntensity);
c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity);var r;c.map?r=c.map:c.specularMap?r=c.specularMap:c.displacementMap?r=c.displacementMap:c.normalMap?r=c.normalMap:c.bumpMap?r=c.bumpMap:c.roughnessMap?r=c.roughnessMap:c.metalnessMap?r=c.metalnessMap:c.alphaMap?r=c.alphaMap:c.emissiveMap&&(r=c.emissiveMap);void 0!==r&&(r.isWebGLRenderTarget&&(r=r.texture),b=r.offset,r=r.repeat,m.offsetRepeat.value.set(b.x,b.y,r.x,r.y));m.envMap.value=c.envMap;m.flipEnvMap.value=c.envMap&&c.envMap.isCubeTexture?
-1:1;m.reflectivity.value=c.reflectivity;m.refractionRatio.value=c.refractionRatio}c.isLineBasicMaterial?(m.diffuse.value=c.color,m.opacity.value=c.opacity):c.isLineDashedMaterial?(m.diffuse.value=c.color,m.opacity.value=c.opacity,m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale):c.isPointsMaterial?(m.diffuse.value=c.color,m.opacity.value=c.opacity,m.size.value=c.size*Ta,m.scale.value=.5*yc,m.map.value=c.map,null!==c.map&&(r=c.map.offset,c=c.map.repeat,m.offsetRepeat.value.set(r.x,
r.y,c.x,c.y))):c.isMeshLambertMaterial?c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap):c.isMeshToonMaterial?(u(m,c),c.gradientMap&&(m.gradientMap.value=c.gradientMap)):c.isMeshPhongMaterial?u(m,c):c.isMeshPhysicalMaterial?(m.clearCoat.value=c.clearCoat,m.clearCoatRoughness.value=c.clearCoatRoughness,A(m,c)):c.isMeshStandardMaterial?A(m,c):c.isMeshDepthMaterial?c.displacementMap&&(m.displacementMap.value=c.displacementMap,m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias):
c.isMeshNormalMaterial&&(m.opacity.value=c.opacity);bb.upload(D,g.uniformsList,m,T)}k.set(D,d,"modelViewMatrix");k.set(D,d,"normalMatrix");k.setValue(D,"modelMatrix",d.matrixWorld);return h}function u(a,b){a.specular.value=b.specular;a.shininess.value=Math.max(b.shininess,1E-4);b.emissiveMap&&(a.emissiveMap.value=b.emissiveMap);b.bumpMap&&(a.bumpMap.value=b.bumpMap,a.bumpScale.value=b.bumpScale);b.normalMap&&(a.normalMap.value=b.normalMap,a.normalScale.value.copy(b.normalScale));b.displacementMap&&
(a.displacementMap.value=b.displacementMap,a.displacementScale.value=b.displacementScale,a.displacementBias.value=b.displacementBias)}function A(a,b){a.roughness.value=b.roughness;a.metalness.value=b.metalness;b.roughnessMap&&(a.roughnessMap.value=b.roughnessMap);b.metalnessMap&&(a.metalnessMap.value=b.metalnessMap);b.emissiveMap&&(a.emissiveMap.value=b.emissiveMap);b.bumpMap&&(a.bumpMap.value=b.bumpMap,a.bumpScale.value=b.bumpScale);b.normalMap&&(a.normalMap.value=b.normalMap,a.normalScale.value.copy(b.normalScale));
b.displacementMap&&(a.displacementMap.value=b.displacementMap,a.displacementScale.value=b.displacementScale,a.displacementBias.value=b.displacementBias);b.envMap&&(a.envMapIntensity.value=b.envMapIntensity)}function t(a){var b;if(1E3===a)return D.REPEAT;if(1001===a)return D.CLAMP_TO_EDGE;if(1002===a)return D.MIRRORED_REPEAT;if(1003===a)return D.NEAREST;if(1004===a)return D.NEAREST_MIPMAP_NEAREST;if(1005===a)return D.NEAREST_MIPMAP_LINEAR;if(1006===a)return D.LINEAR;if(1007===a)return D.LINEAR_MIPMAP_NEAREST;
if(1008===a)return D.LINEAR_MIPMAP_LINEAR;if(1009===a)return D.UNSIGNED_BYTE;if(1017===a)return D.UNSIGNED_SHORT_4_4_4_4;if(1018===a)return D.UNSIGNED_SHORT_5_5_5_1;if(1019===a)return D.UNSIGNED_SHORT_5_6_5;if(1010===a)return D.BYTE;if(1011===a)return D.SHORT;if(1012===a)return D.UNSIGNED_SHORT;if(1013===a)return D.INT;if(1014===a)return D.UNSIGNED_INT;if(1015===a)return D.FLOAT;if(1016===a&&(b=ia.get("OES_texture_half_float"),null!==b))return b.HALF_FLOAT_OES;if(1021===a)return D.ALPHA;if(1022===
a)return D.RGB;if(1023===a)return D.RGBA;if(1024===a)return D.LUMINANCE;if(1025===a)return D.LUMINANCE_ALPHA;if(1026===a)return D.DEPTH_COMPONENT;if(1027===a)return D.DEPTH_STENCIL;if(100===a)return D.FUNC_ADD;if(101===a)return D.FUNC_SUBTRACT;if(102===a)return D.FUNC_REVERSE_SUBTRACT;if(200===a)return D.ZERO;if(201===a)return D.ONE;if(202===a)return D.SRC_COLOR;if(203===a)return D.ONE_MINUS_SRC_COLOR;if(204===a)return D.SRC_ALPHA;if(205===a)return D.ONE_MINUS_SRC_ALPHA;if(206===a)return D.DST_ALPHA;
if(207===a)return D.ONE_MINUS_DST_ALPHA;if(208===a)return D.DST_COLOR;if(209===a)return D.ONE_MINUS_DST_COLOR;if(210===a)return D.SRC_ALPHA_SATURATE;if(2001===a||2002===a||2003===a||2004===a)if(b=ia.get("WEBGL_compressed_texture_s3tc"),null!==b){if(2001===a)return b.COMPRESSED_RGB_S3TC_DXT1_EXT;if(2002===a)return b.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(2003===a)return b.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(2004===a)return b.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(2100===a||2101===a||2102===a||2103===a)if(b=ia.get("WEBGL_compressed_texture_pvrtc"),
null!==b){if(2100===a)return b.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(2101===a)return b.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(2102===a)return b.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(2103===a)return b.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(2151===a&&(b=ia.get("WEBGL_compressed_texture_etc1"),null!==b))return b.COMPRESSED_RGB_ETC1_WEBGL;if(103===a||104===a)if(b=ia.get("EXT_blend_minmax"),null!==b){if(103===a)return b.MIN_EXT;if(104===a)return b.MAX_EXT}return 1020===a&&(b=ia.get("WEBGL_depth_texture"),null!==b)?
b.UNSIGNED_INT_24_8_WEBGL:0}console.log("THREE.WebGLRenderer","83dev");a=a||{};var v=void 0!==a.canvas?a.canvas:document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),M=void 0!==a.context?a.context:null,y=void 0!==a.alpha?a.alpha:!1,C=void 0!==a.depth?a.depth:!0,H=void 0!==a.stencil?a.stencil:!0,E=void 0!==a.antialias?a.antialias:!1,L=void 0!==a.premultipliedAlpha?a.premultipliedAlpha:!0,z=void 0!==a.preserveDrawingBuffer?a.preserveDrawingBuffer:!1,I=[],B=[],F=-1,Ka=[],oa=-1,N=new Float32Array(8),
O=[],Q=[];this.domElement=v;this.context=null;this.sortObjects=this.autoClearStencil=this.autoClearDepth=this.autoClearColor=this.autoClear=!0;this.clippingPlanes=[];this.localClippingEnabled=!1;this.gammaFactor=2;this.physicallyCorrectLights=this.gammaOutput=this.gammaInput=!1;this.toneMappingWhitePoint=this.toneMappingExposure=this.toneMapping=1;this.maxMorphTargets=8;this.maxMorphNormals=4;var T=this,xa=null,V=null,R=null,K=-1,S="",U=null,X=new fa,Ua=null,W=new fa,Z=0,La=new G(0),hb=0,da=v.width,
yc=v.height,Ta=1,ea=new fa(0,0,da,yc),ja=!1,ha=new fa(0,0,da,yc),ma=new qc,ca=new Hf,pa=!1,ta=!1,na=new Ha,ra=new P,ba=new q,va=new P,ya=new P,aa={hash:"",ambient:[0,0,0],directional:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],point:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],shadows:[]},qa={calls:0,vertices:0,faces:0,points:0};this.info={render:qa,memory:{geometries:0,textures:0},programs:null};var D;try{y={alpha:y,depth:C,
stencil:H,antialias:E,premultipliedAlpha:L,preserveDrawingBuffer:z};D=M||v.getContext("webgl",y)||v.getContext("experimental-webgl",y);if(null===D){if(null!==v.getContext("webgl"))throw"Error creating WebGL context with your selected attributes.";throw"Error creating WebGL context.";}void 0===D.getShaderPrecisionFormat&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}});v.addEventListener("webglcontextlost",d,!1)}catch(If){console.error("THREE.WebGLRenderer: "+If)}var ia=
new Gf(D);ia.get("WEBGL_depth_texture");ia.get("OES_texture_float");ia.get("OES_texture_float_linear");ia.get("OES_texture_half_float");ia.get("OES_texture_half_float_linear");ia.get("OES_standard_derivatives");ia.get("ANGLE_instanced_arrays");ia.get("OES_element_index_uint")&&(J.MaxIndex=4294967296);var la=new Ff(D,ia,a),Y=new Ef(D,ia,t),ga=new Df,ua=new Cf(D,ia,Y,ga,la,t,this.info),sa=new Bf(D,ga,this.info),Aa=new zf(this,la),Ca=new rf;this.info.programs=Aa.programs;var Na=new qf(D,ia,qa),Oa=new pf(D,
ia,qa),Pa=new Ib(-1,1,1,-1,0,1),Ea=new Ia,Ga=new Da(new kb(2,2),new Ma({depthTest:!1,depthWrite:!1,fog:!1}));a=Hb.cube;var za=new Da(new jb(5,5,5),new Ja({uniforms:a.uniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1}));b();this.context=D;this.capabilities=la;this.extensions=ia;this.properties=ga;this.state=Y;var Qa=new we(this,aa,sa,la);this.shadowMap=Qa;var Ra=new mf(this,O),Sa=new lf(this,Q);this.getContext=function(){return D};this.getContextAttributes=
function(){return D.getContextAttributes()};this.forceContextLoss=function(){ia.get("WEBGL_lose_context").loseContext()};this.getMaxAnisotropy=function(){return la.getMaxAnisotropy()};this.getPrecision=function(){return la.precision};this.getPixelRatio=function(){return Ta};this.setPixelRatio=function(a){void 0!==a&&(Ta=a,this.setSize(ha.z,ha.w,!1))};this.getSize=function(){return{width:da,height:yc}};this.setSize=function(a,b,c){da=a;yc=b;v.width=a*Ta;v.height=b*Ta;!1!==c&&(v.style.width=a+"px",
v.style.height=b+"px");this.setViewport(0,0,a,b)};this.setViewport=function(a,b,c,d){Y.viewport(ha.set(a,b,c,d))};this.setScissor=function(a,b,c,d){Y.scissor(ea.set(a,b,c,d))};this.setScissorTest=function(a){Y.setScissorTest(ja=a)};this.getClearColor=function(){return La};this.setClearColor=function(a,b){La.set(a);hb=void 0!==b?b:1;Y.buffers.color.setClear(La.r,La.g,La.b,hb,L)};this.getClearAlpha=function(){return hb};this.setClearAlpha=function(a){hb=a;Y.buffers.color.setClear(La.r,La.g,La.b,hb,
L)};this.clear=function(a,b,c){var d=0;if(void 0===a||a)d|=D.COLOR_BUFFER_BIT;if(void 0===b||b)d|=D.DEPTH_BUFFER_BIT;if(void 0===c||c)d|=D.STENCIL_BUFFER_BIT;D.clear(d)};this.clearColor=function(){this.clear(!0,!1,!1)};this.clearDepth=function(){this.clear(!1,!0,!1)};this.clearStencil=function(){this.clear(!1,!1,!0)};this.clearTarget=function(a,b,c,d){this.setRenderTarget(a);this.clear(b,c,d)};this.resetGLState=c;this.dispose=function(){Ka=[];oa=-1;B=[];F=-1;v.removeEventListener("webglcontextlost",
d,!1)};this.renderBufferImmediate=function(a,b,c){Y.initAttributes();var d=ga.get(a);a.hasPositions&&!d.position&&(d.position=D.createBuffer());a.hasNormals&&!d.normal&&(d.normal=D.createBuffer());a.hasUvs&&!d.uv&&(d.uv=D.createBuffer());a.hasColors&&!d.color&&(d.color=D.createBuffer());b=b.getAttributes();a.hasPositions&&(D.bindBuffer(D.ARRAY_BUFFER,d.position),D.bufferData(D.ARRAY_BUFFER,a.positionArray,D.DYNAMIC_DRAW),Y.enableAttribute(b.position),D.vertexAttribPointer(b.position,3,D.FLOAT,!1,
0,0));if(a.hasNormals){D.bindBuffer(D.ARRAY_BUFFER,d.normal);if(!c.isMeshPhongMaterial&&!c.isMeshStandardMaterial&&1===c.shading)for(var e=0,f=3*a.count;e<f;e+=9){var g=a.normalArray,h=(g[e+0]+g[e+3]+g[e+6])/3,k=(g[e+1]+g[e+4]+g[e+7])/3,m=(g[e+2]+g[e+5]+g[e+8])/3;g[e+0]=h;g[e+1]=k;g[e+2]=m;g[e+3]=h;g[e+4]=k;g[e+5]=m;g[e+6]=h;g[e+7]=k;g[e+8]=m}D.bufferData(D.ARRAY_BUFFER,a.normalArray,D.DYNAMIC_DRAW);Y.enableAttribute(b.normal);D.vertexAttribPointer(b.normal,3,D.FLOAT,!1,0,0)}a.hasUvs&&c.map&&(D.bindBuffer(D.ARRAY_BUFFER,
d.uv),D.bufferData(D.ARRAY_BUFFER,a.uvArray,D.DYNAMIC_DRAW),Y.enableAttribute(b.uv),D.vertexAttribPointer(b.uv,2,D.FLOAT,!1,0,0));a.hasColors&&0!==c.vertexColors&&(D.bindBuffer(D.ARRAY_BUFFER,d.color),D.bufferData(D.ARRAY_BUFFER,a.colorArray,D.DYNAMIC_DRAW),Y.enableAttribute(b.color),D.vertexAttribPointer(b.color,3,D.FLOAT,!1,0,0));Y.disableUnusedAttributes();D.drawArrays(D.TRIANGLES,0,a.count);a.count=0};this.renderBufferDirect=function(a,b,c,d,e,f){r(d);var h=l(a,b,d,e),k=!1;a=c.id+"_"+h.id+"_"+
d.wireframe;a!==S&&(S=a,k=!0);b=e.morphTargetInfluences;if(void 0!==b){var m=[];a=0;for(var n=b.length;a<n;a++)k=b[a],m.push([k,a]);m.sort(g);8<m.length&&(m.length=8);var p=c.morphAttributes;a=0;for(n=m.length;a<n;a++)k=m[a],N[a]=k[0],0!==k[0]?(b=k[1],!0===d.morphTargets&&p.position&&c.addAttribute("morphTarget"+a,p.position[b]),!0===d.morphNormals&&p.normal&&c.addAttribute("morphNormal"+a,p.normal[b])):(!0===d.morphTargets&&c.removeAttribute("morphTarget"+a),!0===d.morphNormals&&c.removeAttribute("morphNormal"+
a));a=m.length;for(b=N.length;a<b;a++)N[a]=0;h.getUniforms().setValue(D,"morphTargetInfluences",N);k=!0}b=c.index;n=c.attributes.position;m=1;!0===d.wireframe&&(b=sa.getWireframeAttribute(c),m=2);null!==b?(a=Oa,a.setIndex(b)):a=Na;if(k){a:{var k=void 0,x;if(c&&c.isInstancedBufferGeometry&&(x=ia.get("ANGLE_instanced_arrays"),null===x)){console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");break a}void 0===
k&&(k=0);Y.initAttributes();var p=c.attributes,h=h.getAttributes(),u=d.defaultAttributeValues,q;for(q in h){var v=h[q];if(0<=v){var t=p[q];if(void 0!==t){var y=t.normalized,A=t.itemSize,H=sa.getAttributeProperties(t),E=H.__webglBuffer,M=H.type,H=H.bytesPerElement;if(t.isInterleavedBufferAttribute){var C=t.data,L=C.stride,t=t.offset;C&&C.isInstancedInterleavedBuffer?(Y.enableAttributeAndDivisor(v,C.meshPerAttribute,x),void 0===c.maxInstancedCount&&(c.maxInstancedCount=C.meshPerAttribute*C.count)):
Y.enableAttribute(v);D.bindBuffer(D.ARRAY_BUFFER,E);D.vertexAttribPointer(v,A,M,y,L*H,(k*L+t)*H)}else t.isInstancedBufferAttribute?(Y.enableAttributeAndDivisor(v,t.meshPerAttribute,x),void 0===c.maxInstancedCount&&(c.maxInstancedCount=t.meshPerAttribute*t.count)):Y.enableAttribute(v),D.bindBuffer(D.ARRAY_BUFFER,E),D.vertexAttribPointer(v,A,M,y,0,k*A*H)}else if(void 0!==u&&(y=u[q],void 0!==y))switch(y.length){case 2:D.vertexAttrib2fv(v,y);break;case 3:D.vertexAttrib3fv(v,y);break;case 4:D.vertexAttrib4fv(v,
y);break;default:D.vertexAttrib1fv(v,y)}}}Y.disableUnusedAttributes()}null!==b&&D.bindBuffer(D.ELEMENT_ARRAY_BUFFER,sa.getAttributeBuffer(b))}x=0;null!==b?x=b.count:void 0!==n&&(x=n.count);b=c.drawRange.start*m;n=null!==f?f.start*m:0;q=Math.max(b,n);f=Math.max(0,Math.min(x,b+c.drawRange.count*m,n+(null!==f?f.count*m:Infinity))-1-q+1);if(0!==f){if(e.isMesh)if(!0===d.wireframe)Y.setLineWidth(d.wireframeLinewidth*(null===V?Ta:1)),a.setMode(D.LINES);else switch(e.drawMode){case 0:a.setMode(D.TRIANGLES);
break;case 1:a.setMode(D.TRIANGLE_STRIP);break;case 2:a.setMode(D.TRIANGLE_FAN)}else e.isLine?(d=d.linewidth,void 0===d&&(d=1),Y.setLineWidth(d*(null===V?Ta:1)),e.isLineSegments?a.setMode(D.LINES):a.setMode(D.LINE_STRIP)):e.isPoints&&a.setMode(D.POINTS);c&&c.isInstancedBufferGeometry?0<c.maxInstancedCount&&a.renderInstances(c,q,f):a.render(q,f)}};this.render=function(a,b,c,d){if(void 0!==b&&!0!==b.isCamera)console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");else{S=
"";K=-1;U=null;!0===a.autoUpdate&&a.updateMatrixWorld();null===b.parent&&b.updateMatrixWorld();b.matrixWorldInverse.getInverse(b.matrixWorld);ra.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse);ma.setFromMatrix(ra);I.length=0;oa=F=-1;O.length=0;Q.length=0;ta=this.localClippingEnabled;pa=ca.init(this.clippingPlanes,ta,b);p(a,b);B.length=F+1;Ka.length=oa+1;!0===T.sortObjects&&(B.sort(h),Ka.sort(k));pa&&ca.beginShadows();for(var e=I,f=0,g=0,m=e.length;g<m;g++){var x=e[g];x.castShadow&&(aa.shadows[f++]=
x)}aa.shadows.length=f;Qa.render(a,b);for(var e=I,r=x=0,l=0,w,u,q,v,t=b.matrixWorldInverse,y=0,A=0,H=0,E=0,M=0,f=0,g=e.length;f<g;f++)if(m=e[f],w=m.color,u=m.intensity,q=m.distance,v=m.shadow&&m.shadow.map?m.shadow.map.texture:null,m.isAmbientLight)x+=w.r*u,r+=w.g*u,l+=w.b*u;else if(m.isDirectionalLight){var C=Ca.get(m);C.color.copy(m.color).multiplyScalar(m.intensity);C.direction.setFromMatrixPosition(m.matrixWorld);ba.setFromMatrixPosition(m.target.matrixWorld);C.direction.sub(ba);C.direction.transformDirection(t);
if(C.shadow=m.castShadow)C.shadowBias=m.shadow.bias,C.shadowRadius=m.shadow.radius,C.shadowMapSize=m.shadow.mapSize;aa.directionalShadowMap[y]=v;aa.directionalShadowMatrix[y]=m.shadow.matrix;aa.directional[y++]=C}else if(m.isSpotLight){C=Ca.get(m);C.position.setFromMatrixPosition(m.matrixWorld);C.position.applyMatrix4(t);C.color.copy(w).multiplyScalar(u);C.distance=q;C.direction.setFromMatrixPosition(m.matrixWorld);ba.setFromMatrixPosition(m.target.matrixWorld);C.direction.sub(ba);C.direction.transformDirection(t);
C.coneCos=Math.cos(m.angle);C.penumbraCos=Math.cos(m.angle*(1-m.penumbra));C.decay=0===m.distance?0:m.decay;if(C.shadow=m.castShadow)C.shadowBias=m.shadow.bias,C.shadowRadius=m.shadow.radius,C.shadowMapSize=m.shadow.mapSize;aa.spotShadowMap[H]=v;aa.spotShadowMatrix[H]=m.shadow.matrix;aa.spot[H++]=C}else if(m.isRectAreaLight)C=Ca.get(m),C.color.copy(w).multiplyScalar(u/(m.width*m.height)),C.position.setFromMatrixPosition(m.matrixWorld),C.position.applyMatrix4(t),ya.identity(),va.copy(m.matrixWorld),
va.premultiply(t),ya.extractRotation(va),C.halfWidth.set(.5*m.width,0,0),C.halfHeight.set(0,.5*m.height,0),C.halfWidth.applyMatrix4(ya),C.halfHeight.applyMatrix4(ya),aa.rectArea[E++]=C;else if(m.isPointLight){C=Ca.get(m);C.position.setFromMatrixPosition(m.matrixWorld);C.position.applyMatrix4(t);C.color.copy(m.color).multiplyScalar(m.intensity);C.distance=m.distance;C.decay=0===m.distance?0:m.decay;if(C.shadow=m.castShadow)C.shadowBias=m.shadow.bias,C.shadowRadius=m.shadow.radius,C.shadowMapSize=m.shadow.mapSize;
aa.pointShadowMap[A]=v;void 0===aa.pointShadowMatrix[A]&&(aa.pointShadowMatrix[A]=new P);ba.setFromMatrixPosition(m.matrixWorld).negate();aa.pointShadowMatrix[A].identity().setPosition(ba);aa.point[A++]=C}else m.isHemisphereLight&&(C=Ca.get(m),C.direction.setFromMatrixPosition(m.matrixWorld),C.direction.transformDirection(t),C.direction.normalize(),C.skyColor.copy(m.color).multiplyScalar(u),C.groundColor.copy(m.groundColor).multiplyScalar(u),aa.hemi[M++]=C);aa.ambient[0]=x;aa.ambient[1]=r;aa.ambient[2]=
l;aa.directional.length=y;aa.spot.length=H;aa.rectArea.length=E;aa.point.length=A;aa.hemi.length=M;aa.hash=y+","+A+","+H+","+E+","+M+","+aa.shadows.length;pa&&ca.endShadows();qa.calls=0;qa.vertices=0;qa.faces=0;qa.points=0;void 0===c&&(c=null);this.setRenderTarget(c);e=a.background;null===e?Y.buffers.color.setClear(La.r,La.g,La.b,hb,L):e&&e.isColor&&(Y.buffers.color.setClear(e.r,e.g,e.b,1,L),d=!0);(this.autoClear||d)&&this.clear(this.autoClearColor,this.autoClearDepth,this.autoClearStencil);e&&e.isCubeTexture?
(Ea.projectionMatrix.copy(b.projectionMatrix),Ea.matrixWorld.extractRotation(b.matrixWorld),Ea.matrixWorldInverse.getInverse(Ea.matrixWorld),za.material.uniforms.tCube.value=e,za.modelViewMatrix.multiplyMatrices(Ea.matrixWorldInverse,za.matrixWorld),sa.update(za),T.renderBufferDirect(Ea,null,za.geometry,za.material,za,null)):e&&e.isTexture&&(Ga.material.map=e,sa.update(Ga),T.renderBufferDirect(Pa,null,Ga.geometry,Ga.material,Ga,null));a.overrideMaterial?(d=a.overrideMaterial,n(B,a,b,d),n(Ka,a,b,d)):
(Y.setBlending(0),n(B,a,b),n(Ka,a,b));Ra.render(a,b);Sa.render(a,b,W);c&&ua.updateRenderTargetMipmap(c);Y.setDepthTest(!0);Y.setDepthWrite(!0);Y.setColorWrite(!0)}};this.setFaceCulling=function(a,b){Y.setCullFace(a);Y.setFlipSided(0===b)};this.allocTextureUnit=function(){var a=Z;a>=la.maxTextures&&console.warn("WebGLRenderer: trying to use "+a+" texture units while this GPU supports only "+la.maxTextures);Z+=1;return a};this.setTexture2D=function(){var a=!1;return function(b,c){b&&b.isWebGLRenderTarget&&
(a||(console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."),a=!0),b=b.texture);ua.setTexture2D(b,c)}}();this.setTexture=function(){var a=!1;return function(b,c){a||(console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."),a=!0);ua.setTexture2D(b,c)}}();this.setTextureCube=function(){var a=!1;return function(b,c){b&&b.isWebGLRenderTargetCube&&(a||(console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."),
a=!0),b=b.texture);b&&b.isCubeTexture||Array.isArray(b.image)&&6===b.image.length?ua.setTextureCube(b,c):ua.setTextureCubeDynamic(b,c)}}();this.getCurrentRenderTarget=function(){return V};this.setRenderTarget=function(a){(V=a)&&void 0===ga.get(a).__webglFramebuffer&&ua.setupRenderTarget(a);var b=a&&a.isWebGLRenderTargetCube,c;a?(c=ga.get(a),c=b?c.__webglFramebuffer[a.activeCubeFace]:c.__webglFramebuffer,X.copy(a.scissor),Ua=a.scissorTest,W.copy(a.viewport)):(c=null,X.copy(ea).multiplyScalar(Ta),Ua=
ja,W.copy(ha).multiplyScalar(Ta));R!==c&&(D.bindFramebuffer(D.FRAMEBUFFER,c),R=c);Y.scissor(X);Y.setScissorTest(Ua);Y.viewport(W);b&&(b=ga.get(a.texture),D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+a.activeCubeFace,b.__webglTexture,a.activeMipMapLevel))};this.readRenderTargetPixels=function(a,b,c,d,e,f){if(!1===(a&&a.isWebGLRenderTarget))console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");else{var g=ga.get(a).__webglFramebuffer;
if(g){var h=!1;g!==R&&(D.bindFramebuffer(D.FRAMEBUFFER,g),h=!0);try{var k=a.texture,m=k.format,n=k.type;1023!==m&&t(m)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)?console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."):1009===n||t(n)===D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)||1015===n&&(ia.get("OES_texture_float")||ia.get("WEBGL_color_buffer_float"))||1016===n&&ia.get("EXT_color_buffer_half_float")?D.checkFramebufferStatus(D.FRAMEBUFFER)===
D.FRAMEBUFFER_COMPLETE?0<=b&&b<=a.width-d&&0<=c&&c<=a.height-e&&D.readPixels(b,c,d,e,t(m),t(n),f):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete."):console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.")}finally{h&&D.bindFramebuffer(D.FRAMEBUFFER,R)}}}}}function Jb(a,b){this.name="";this.color=new G(a);this.density=void 0!==b?b:2.5E-4}function Kb(a,
b,c){this.name="";this.color=new G(a);this.near=void 0!==b?b:1;this.far=void 0!==c?c:1E3}function lb(){F.call(this);this.type="Scene";this.overrideMaterial=this.fog=this.background=null;this.autoUpdate=!0}function Nd(a,b,c,d,e){F.call(this);this.lensFlares=[];this.positionScreen=new q;this.customUpdateCallback=void 0;void 0!==a&&this.add(a,b,c,d,e)}function mb(a){U.call(this);this.type="SpriteMaterial";this.color=new G(16777215);this.map=null;this.rotation=0;this.lights=this.fog=!1;this.setValues(a)}
function zc(a){F.call(this);this.type="Sprite";this.material=void 0!==a?a:new mb}function Ac(){F.call(this);this.type="LOD";Object.defineProperties(this,{levels:{enumerable:!0,value:[]}})}function gd(a,b,c){this.useVertexTexture=void 0!==c?c:!0;this.identityMatrix=new P;a=a||[];this.bones=a.slice(0);this.useVertexTexture?(a=Math.sqrt(4*this.bones.length),a=S.nextPowerOfTwo(Math.ceil(a)),this.boneTextureHeight=this.boneTextureWidth=a=Math.max(a,4),this.boneMatrices=new Float32Array(this.boneTextureWidth*
this.boneTextureHeight*4),this.boneTexture=new gb(this.boneMatrices,this.boneTextureWidth,this.boneTextureHeight,1023,1015)):this.boneMatrices=new Float32Array(16*this.bones.length);if(void 0===b)this.calculateInverses();else if(this.bones.length===b.length)this.boneInverses=b.slice(0);else for(console.warn("THREE.Skeleton bonInverses is the wrong length."),this.boneInverses=[],b=0,a=this.bones.length;b<a;b++)this.boneInverses.push(new P)}function hd(){F.call(this);this.type="Bone"}function id(a,
b,c){Da.call(this,a,b);this.type="SkinnedMesh";this.bindMode="attached";this.bindMatrix=new P;this.bindMatrixInverse=new P;a=[];if(this.geometry&&void 0!==this.geometry.bones){for(var d,e=0,f=this.geometry.bones.length;e<f;++e)d=this.geometry.bones[e],b=new hd,a.push(b),b.name=d.name,b.position.fromArray(d.pos),b.quaternion.fromArray(d.rotq),void 0!==d.scl&&b.scale.fromArray(d.scl);e=0;for(f=this.geometry.bones.length;e<f;++e)d=this.geometry.bones[e],-1!==d.parent&&null!==d.parent&&void 0!==a[d.parent]?
a[d.parent].add(a[e]):this.add(a[e])}this.normalizeSkinWeights();this.updateMatrixWorld(!0);this.bind(new gd(a,void 0,c),this.matrixWorld)}function ha(a){U.call(this);this.type="LineBasicMaterial";this.color=new G(16777215);this.linewidth=1;this.linejoin=this.linecap="round";this.lights=!1;this.setValues(a)}function Wa(a,b,c){if(1===c)return console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."),new ea(a,b);F.call(this);this.type="Line";this.geometry=
void 0!==a?a:new J;this.material=void 0!==b?b:new ha({color:16777215*Math.random()})}function ea(a,b){Wa.call(this,a,b);this.type="LineSegments"}function Pa(a){U.call(this);this.type="PointsMaterial";this.color=new G(16777215);this.map=null;this.size=1;this.sizeAttenuation=!0;this.lights=!1;this.setValues(a)}function Lb(a,b){F.call(this);this.type="Points";this.geometry=void 0!==a?a:new J;this.material=void 0!==b?b:new Pa({color:16777215*Math.random()})}function Bc(){F.call(this);this.type="Group"}
function jd(a,b,c,d,e,f,g,h,k){function m(){requestAnimationFrame(m);a.readyState>=a.HAVE_CURRENT_DATA&&(x.needsUpdate=!0)}da.call(this,a,b,c,d,e,f,g,h,k);this.generateMipmaps=!1;var x=this;m()}function Mb(a,b,c,d,e,f,g,h,k,m,x,p){da.call(this,null,f,g,h,k,m,d,e,x,p);this.image={width:b,height:c};this.mipmaps=a;this.generateMipmaps=this.flipY=!1}function kd(a,b,c,d,e,f,g,h,k){da.call(this,a,b,c,d,e,f,g,h,k);this.needsUpdate=!0}function Cc(a,b,c,d,e,f,g,h,k,m){m=void 0!==m?m:1026;if(1026!==m&&1027!==
m)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");void 0===c&&1026===m&&(c=1012);void 0===c&&1027===m&&(c=1020);da.call(this,null,d,e,f,g,h,m,c,k);this.image={width:a,height:b};this.magFilter=void 0!==g?g:1003;this.minFilter=void 0!==h?h:1003;this.generateMipmaps=this.flipY=!1}function Nb(a){function b(a,b){return a-b}J.call(this);var c=[0,0],d={},e=["a","b","c"];if(a&&a.isGeometry){var f=a.vertices,g=a.faces,h=0,k=new Uint32Array(6*g.length);a=0;for(var m=
g.length;a<m;a++)for(var x=g[a],p=0;3>p;p++){c[0]=x[e[p]];c[1]=x[e[(p+1)%3]];c.sort(b);var n=c.toString();void 0===d[n]&&(k[2*h]=c[0],k[2*h+1]=c[1],d[n]=!0,h++)}c=new Float32Array(6*h);a=0;for(m=h;a<m;a++)for(p=0;2>p;p++)d=f[k[2*a+p]],h=6*a+3*p,c[h+0]=d.x,c[h+1]=d.y,c[h+2]=d.z;this.addAttribute("position",new z(c,3))}else if(a&&a.isBufferGeometry){if(null!==a.index){m=a.index.array;f=a.attributes.position;e=a.groups;h=0;0===e.length&&a.addGroup(0,m.length);k=new Uint32Array(2*m.length);g=0;for(x=
e.length;g<x;++g){a=e[g];p=a.start;n=a.count;a=p;for(var r=p+n;a<r;a+=3)for(p=0;3>p;p++)c[0]=m[a+p],c[1]=m[a+(p+1)%3],c.sort(b),n=c.toString(),void 0===d[n]&&(k[2*h]=c[0],k[2*h+1]=c[1],d[n]=!0,h++)}c=new Float32Array(6*h);a=0;for(m=h;a<m;a++)for(p=0;2>p;p++)h=6*a+3*p,d=k[2*a+p],c[h+0]=f.getX(d),c[h+1]=f.getY(d),c[h+2]=f.getZ(d)}else for(f=a.attributes.position.array,h=f.length/3,k=h/3,c=new Float32Array(6*h),a=0,m=k;a<m;a++)for(p=0;3>p;p++)h=18*a+6*p,k=9*a+3*p,c[h+0]=f[k],c[h+1]=f[k+1],c[h+2]=f[k+
2],d=9*a+(p+1)%3*3,c[h+3]=f[d],c[h+4]=f[d+1],c[h+5]=f[d+2];this.addAttribute("position",new z(c,3))}}function Ob(a,b,c){J.call(this);this.type="ParametricBufferGeometry";this.parameters={func:a,slices:b,stacks:c};var d=[],e=[],f,g,h,k,m,x=b+1;for(f=0;f<=c;f++)for(m=f/c,g=0;g<=b;g++)k=g/b,h=a(k,m),d.push(h.x,h.y,h.z),e.push(k,m);a=[];var p;for(f=0;f<c;f++)for(g=0;g<b;g++)h=f*x+g,k=f*x+g+1,m=(f+1)*x+g+1,p=(f+1)*x+g,a.push(h,k,p),a.push(k,m,p);this.setIndex(new (65535<a.length?Va:Sa)(a,1));this.addAttribute("position",
new W(d,3));this.addAttribute("uv",new W(e,2));this.computeVertexNormals()}function Dc(a,b,c){R.call(this);this.type="ParametricGeometry";this.parameters={func:a,slices:b,stacks:c};this.fromBufferGeometry(new Ob(a,b,c));this.mergeVertices()}function ya(a,b,c,d){function e(a){h.push(a.x,a.y,a.z)}function f(b,c){var d=3*b;c.x=a[d+0];c.y=a[d+1];c.z=a[d+2]}function g(a,b,c,d){0>d&&1===a.x&&(k[b]=a.x-1);0===c.x&&0===c.z&&(k[b]=d/2/Math.PI+.5)}J.call(this);this.type="PolyhedronBufferGeometry";this.parameters=
{vertices:a,indices:b,radius:c,detail:d};c=c||1;var h=[],k=[];(function(a){for(var c=new q,d=new q,g=new q,h=0;h<b.length;h+=3){f(b[h+0],c);f(b[h+1],d);f(b[h+2],g);var k=c,l=d,A=g,t=Math.pow(2,a),v=[],M,y;for(M=0;M<=t;M++){v[M]=[];var C=k.clone().lerp(A,M/t),H=l.clone().lerp(A,M/t),E=t-M;for(y=0;y<=E;y++)v[M][y]=0===y&&M===t?C:C.clone().lerp(H,y/E)}for(M=0;M<t;M++)for(y=0;y<2*(t-M)-1;y++)k=Math.floor(y/2),0===y%2?(e(v[M][k+1]),e(v[M+1][k]),e(v[M][k])):(e(v[M][k+1]),e(v[M+1][k+1]),e(v[M+1][k]))}})(d||
0);(function(a){for(var b=new q,c=0;c<h.length;c+=3)b.x=h[c+0],b.y=h[c+1],b.z=h[c+2],b.normalize().multiplyScalar(a),h[c+0]=b.x,h[c+1]=b.y,h[c+2]=b.z})(c);(function(){for(var a=new q,b=0;b<h.length;b+=3)a.x=h[b+0],a.y=h[b+1],a.z=h[b+2],k.push(Math.atan2(a.z,-a.x)/2/Math.PI+.5,1-(Math.atan2(-a.y,Math.sqrt(a.x*a.x+a.z*a.z))/Math.PI+.5));for(var a=new q,b=new q,c=new q,d=new q,e=new B,f=new B,l=new B,A=0,t=0;A<h.length;A+=9,t+=6){a.set(h[A+0],h[A+1],h[A+2]);b.set(h[A+3],h[A+4],h[A+5]);c.set(h[A+6],h[A+
7],h[A+8]);e.set(k[t+0],k[t+1]);f.set(k[t+2],k[t+3]);l.set(k[t+4],k[t+5]);d.copy(a).add(b).add(c).divideScalar(3);var v=Math.atan2(d.z,-d.x);g(e,t+0,a,v);g(f,t+2,b,v);g(l,t+4,c,v)}for(a=0;a<k.length;a+=6)b=k[a+0],c=k[a+2],d=k[a+4],e=Math.min(b,c,d),.9<Math.max(b,c,d)&&.1>e&&(.2>b&&(k[a+0]+=1),.2>c&&(k[a+2]+=1),.2>d&&(k[a+4]+=1))})();this.addAttribute("position",new W(h,3));this.addAttribute("normal",new W(h.slice(),3));this.addAttribute("uv",new W(k,2));this.normalizeNormals();this.boundingSphere=
new Ha(new q,c)}function Pb(a,b){ya.call(this,[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],a,b);this.type="TetrahedronBufferGeometry";this.parameters={radius:a,detail:b}}function Ec(a,b){R.call(this);this.type="TetrahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Pb(a,b));this.mergeVertices()}function nb(a,b){ya.call(this,[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],a,b);this.type="OctahedronBufferGeometry";
this.parameters={radius:a,detail:b}}function Fc(a,b){R.call(this);this.type="OctahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new nb(a,b));this.mergeVertices()}function Qb(a,b){var c=(1+Math.sqrt(5))/2;ya.call(this,[-1,c,0,1,c,0,-1,-c,0,1,-c,0,0,-1,c,0,1,c,0,-1,-c,0,1,-c,c,0,-1,c,0,1,-c,0,-1,-c,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],a,b);this.type="IcosahedronBufferGeometry";
this.parameters={radius:a,detail:b}}function Gc(a,b){R.call(this);this.type="IcosahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Qb(a,b));this.mergeVertices()}function Rb(a,b){var c=(1+Math.sqrt(5))/2,d=1/c;ya.call(this,[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-d,-c,0,-d,c,0,d,-c,0,d,c,-d,-c,0,-d,c,0,d,-c,0,d,c,0,-c,0,-d,c,0,-d,-c,0,d,c,0,d],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,
0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],a,b);this.type="DodecahedronBufferGeometry";this.parameters={radius:a,detail:b}}function Hc(a,b){R.call(this);this.type="DodecahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Rb(a,b));this.mergeVertices()}function Ic(a,b,c,d){R.call(this);this.type="PolyhedronGeometry";this.parameters={vertices:a,indices:b,
radius:c,detail:d};this.fromBufferGeometry(new ya(a,b,c,d));this.mergeVertices()}function Sb(a,b,c,d,e){function f(e){var f=a.getPointAt(e/b),m=g.normals[e];e=g.binormals[e];for(p=0;p<=d;p++){var x=p/d*Math.PI*2,l=Math.sin(x),x=-Math.cos(x);k.x=x*m.x+l*e.x;k.y=x*m.y+l*e.y;k.z=x*m.z+l*e.z;k.normalize();r.push(k.x,k.y,k.z);h.x=f.x+c*k.x;h.y=f.y+c*k.y;h.z=f.z+c*k.z;n.push(h.x,h.y,h.z)}}J.call(this);this.type="TubeBufferGeometry";this.parameters={path:a,tubularSegments:b,radius:c,radialSegments:d,closed:e};
b=b||64;c=c||1;d=d||8;e=e||!1;var g=a.computeFrenetFrames(b,e);this.tangents=g.tangents;this.normals=g.normals;this.binormals=g.binormals;var h=new q,k=new q,m=new B,x,p,n=[],r=[],l=[],u=[];for(x=0;x<b;x++)f(x);f(!1===e?b:0);for(x=0;x<=b;x++)for(p=0;p<=d;p++)m.x=x/b,m.y=p/d,l.push(m.x,m.y);(function(){for(p=1;p<=b;p++)for(x=1;x<=d;x++){var a=(d+1)*p+(x-1),c=(d+1)*p+x,e=(d+1)*(p-1)+x;u.push((d+1)*(p-1)+(x-1),a,e);u.push(a,c,e)}})();this.setIndex(new (65535<u.length?Va:Sa)(u,1));this.addAttribute("position",
new W(n,3));this.addAttribute("normal",new W(r,3));this.addAttribute("uv",new W(l,2))}function Jc(a,b,c,d,e,f){R.call(this);this.type="TubeGeometry";this.parameters={path:a,tubularSegments:b,radius:c,radialSegments:d,closed:e};void 0!==f&&console.warn("THREE.TubeGeometry: taper has been removed.");a=new Sb(a,b,c,d,e);this.tangents=a.tangents;this.normals=a.normals;this.binormals=a.binormals;this.fromBufferGeometry(a);this.mergeVertices()}function Tb(a,b,c,d,e,f){function g(a,b,c,d,e){var f=Math.sin(a);
b=c/b*a;c=Math.cos(b);e.x=d*(2+c)*.5*Math.cos(a);e.y=d*(2+c)*f*.5;e.z=d*Math.sin(b)*.5}J.call(this);this.type="TorusKnotBufferGeometry";this.parameters={radius:a,tube:b,tubularSegments:c,radialSegments:d,p:e,q:f};a=a||100;b=b||40;c=Math.floor(c)||64;d=Math.floor(d)||8;e=e||2;f=f||3;var h=(d+1)*(c+1),k=d*c*6,k=new z(new (65535<k?Uint32Array:Uint16Array)(k),1),m=new z(new Float32Array(3*h),3),x=new z(new Float32Array(3*h),3),h=new z(new Float32Array(2*h),2),p,n,r=0,l=0,u=new q,A=new q,t=new B,v=new q,
M=new q,y=new q,C=new q,H=new q;for(p=0;p<=c;++p)for(n=p/c*e*Math.PI*2,g(n,e,f,a,v),g(n+.01,e,f,a,M),C.subVectors(M,v),H.addVectors(M,v),y.crossVectors(C,H),H.crossVectors(y,C),y.normalize(),H.normalize(),n=0;n<=d;++n){var E=n/d*Math.PI*2,L=-b*Math.cos(E),E=b*Math.sin(E);u.x=v.x+(L*H.x+E*y.x);u.y=v.y+(L*H.y+E*y.y);u.z=v.z+(L*H.z+E*y.z);m.setXYZ(r,u.x,u.y,u.z);A.subVectors(u,v).normalize();x.setXYZ(r,A.x,A.y,A.z);t.x=p/c;t.y=n/d;h.setXY(r,t.x,t.y);r++}for(n=1;n<=c;n++)for(p=1;p<=d;p++)a=(d+1)*n+(p-
1),b=(d+1)*n+p,e=(d+1)*(n-1)+p,k.setX(l,(d+1)*(n-1)+(p-1)),l++,k.setX(l,a),l++,k.setX(l,e),l++,k.setX(l,a),l++,k.setX(l,b),l++,k.setX(l,e),l++;this.setIndex(k);this.addAttribute("position",m);this.addAttribute("normal",x);this.addAttribute("uv",h)}function Kc(a,b,c,d,e,f,g){R.call(this);this.type="TorusKnotGeometry";this.parameters={radius:a,tube:b,tubularSegments:c,radialSegments:d,p:e,q:f};void 0!==g&&console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead.");
this.fromBufferGeometry(new Tb(a,b,c,d,e,f));this.mergeVertices()}function Ub(a,b,c,d,e){J.call(this);this.type="TorusBufferGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};a=a||100;b=b||40;c=Math.floor(c)||8;d=Math.floor(d)||6;e=e||2*Math.PI;var f=(c+1)*(d+1),g=c*d*6,g=new (65535<g?Uint32Array:Uint16Array)(g),h=new Float32Array(3*f),k=new Float32Array(3*f),f=new Float32Array(2*f),m=0,x=0,p=0,n=new q,r=new q,l=new q,u,A;for(u=0;u<=c;u++)for(A=0;A<=d;A++){var t=
A/d*e,v=u/c*Math.PI*2;r.x=(a+b*Math.cos(v))*Math.cos(t);r.y=(a+b*Math.cos(v))*Math.sin(t);r.z=b*Math.sin(v);h[m]=r.x;h[m+1]=r.y;h[m+2]=r.z;n.x=a*Math.cos(t);n.y=a*Math.sin(t);l.subVectors(r,n).normalize();k[m]=l.x;k[m+1]=l.y;k[m+2]=l.z;f[x]=A/d;f[x+1]=u/c;m+=3;x+=2}for(u=1;u<=c;u++)for(A=1;A<=d;A++)a=(d+1)*(u-1)+A-1,b=(d+1)*(u-1)+A,e=(d+1)*u+A,g[p]=(d+1)*u+A-1,g[p+1]=a,g[p+2]=e,g[p+3]=a,g[p+4]=b,g[p+5]=e,p+=6;this.setIndex(new z(g,1));this.addAttribute("position",new z(h,3));this.addAttribute("normal",
new z(k,3));this.addAttribute("uv",new z(f,2))}function Lc(a,b,c,d,e){R.call(this);this.type="TorusGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};this.fromBufferGeometry(new Ub(a,b,c,d,e))}function Na(a,b){"undefined"!==typeof a&&(R.call(this),this.type="ExtrudeGeometry",a=Array.isArray(a)?a:[a],this.addShapeList(a,b),this.computeFaceNormals())}function Mc(a,b){b=b||{};var c=b.font;if(!1===(c&&c.isFont))return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),
new R;c=c.generateShapes(a,b.size,b.curveSegments);b.amount=void 0!==b.height?b.height:50;void 0===b.bevelThickness&&(b.bevelThickness=10);void 0===b.bevelSize&&(b.bevelSize=8);void 0===b.bevelEnabled&&(b.bevelEnabled=!1);Na.call(this,c,b);this.type="TextGeometry"}function ob(a,b,c,d,e,f,g){J.call(this);this.type="SphereBufferGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};a=a||50;b=Math.max(3,Math.floor(b)||8);c=Math.max(2,Math.floor(c)||
6);d=void 0!==d?d:0;e=void 0!==e?e:2*Math.PI;f=void 0!==f?f:0;g=void 0!==g?g:Math.PI;for(var h=f+g,k=(b+1)*(c+1),m=new z(new Float32Array(3*k),3),x=new z(new Float32Array(3*k),3),k=new z(new Float32Array(2*k),2),p=0,n=[],l=new q,w=0;w<=c;w++){for(var u=[],A=w/c,t=0;t<=b;t++){var v=t/b,M=-a*Math.cos(d+v*e)*Math.sin(f+A*g),y=a*Math.cos(f+A*g),C=a*Math.sin(d+v*e)*Math.sin(f+A*g);l.set(M,y,C).normalize();m.setXYZ(p,M,y,C);x.setXYZ(p,l.x,l.y,l.z);k.setXY(p,v,1-A);u.push(p);p++}n.push(u)}d=[];for(w=0;w<
c;w++)for(t=0;t<b;t++)e=n[w][t+1],g=n[w][t],p=n[w+1][t],l=n[w+1][t+1],(0!==w||0<f)&&d.push(e,g,l),(w!==c-1||h<Math.PI)&&d.push(g,p,l);this.setIndex(new (65535<m.count?Va:Sa)(d,1));this.addAttribute("position",m);this.addAttribute("normal",x);this.addAttribute("uv",k);this.boundingSphere=new Ha(new q,a)}function Nc(a,b,c,d,e,f,g){R.call(this);this.type="SphereGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};this.fromBufferGeometry(new ob(a,
b,c,d,e,f,g))}function Vb(a,b,c,d,e,f){J.call(this);this.type="RingBufferGeometry";this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:f};a=a||20;b=b||50;e=void 0!==e?e:0;f=void 0!==f?f:2*Math.PI;c=void 0!==c?Math.max(3,c):8;d=void 0!==d?Math.max(1,d):1;var g=(c+1)*(d+1),h=c*d*6,h=new z(new (65535<h?Uint32Array:Uint16Array)(h),1),k=new z(new Float32Array(3*g),3),m=new z(new Float32Array(3*g),3),g=new z(new Float32Array(2*g),2),x=0,p=0,n,l=a,w=(b-a)/
d,u=new q,A=new B,t;for(a=0;a<=d;a++){for(t=0;t<=c;t++)n=e+t/c*f,u.x=l*Math.cos(n),u.y=l*Math.sin(n),k.setXYZ(x,u.x,u.y,u.z),m.setXYZ(x,0,0,1),A.x=(u.x/b+1)/2,A.y=(u.y/b+1)/2,g.setXY(x,A.x,A.y),x++;l+=w}for(a=0;a<d;a++)for(b=a*(c+1),t=0;t<c;t++)e=n=t+b,f=n+c+1,x=n+c+2,n+=1,h.setX(p,e),p++,h.setX(p,f),p++,h.setX(p,x),p++,h.setX(p,e),p++,h.setX(p,x),p++,h.setX(p,n),p++;this.setIndex(h);this.addAttribute("position",k);this.addAttribute("normal",m);this.addAttribute("uv",g)}function Oc(a,b,c,d,e,f){R.call(this);
this.type="RingGeometry";this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:f};this.fromBufferGeometry(new Vb(a,b,c,d,e,f))}function Pc(a,b,c,d){R.call(this);this.type="PlaneGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};this.fromBufferGeometry(new kb(a,b,c,d))}function Wb(a,b,c,d){J.call(this);this.type="LatheBufferGeometry";this.parameters={points:a,segments:b,phiStart:c,phiLength:d};b=Math.floor(b)||12;c=c||0;d=d||
2*Math.PI;d=S.clamp(d,0,2*Math.PI);for(var e=(b+1)*a.length,f=b*a.length*6,g=new z(new (65535<f?Uint32Array:Uint16Array)(f),1),h=new z(new Float32Array(3*e),3),k=new z(new Float32Array(2*e),2),m=0,x=0,p=1/b,n=new q,l=new B,e=0;e<=b;e++)for(var f=c+e*p*d,w=Math.sin(f),u=Math.cos(f),f=0;f<=a.length-1;f++)n.x=a[f].x*w,n.y=a[f].y,n.z=a[f].x*u,h.setXYZ(m,n.x,n.y,n.z),l.x=e/b,l.y=f/(a.length-1),k.setXY(m,l.x,l.y),m++;for(e=0;e<b;e++)for(f=0;f<a.length-1;f++)c=f+e*a.length,m=c+a.length,p=c+a.length+1,n=
c+1,g.setX(x,c),x++,g.setX(x,m),x++,g.setX(x,n),x++,g.setX(x,m),x++,g.setX(x,p),x++,g.setX(x,n),x++;this.setIndex(g);this.addAttribute("position",h);this.addAttribute("uv",k);this.computeVertexNormals();if(d===2*Math.PI)for(d=this.attributes.normal.array,g=new q,h=new q,k=new q,c=b*a.length*3,f=e=0;e<a.length;e++,f+=3)g.x=d[f+0],g.y=d[f+1],g.z=d[f+2],h.x=d[c+f+0],h.y=d[c+f+1],h.z=d[c+f+2],k.addVectors(g,h).normalize(),d[f+0]=d[c+f+0]=k.x,d[f+1]=d[c+f+1]=k.y,d[f+2]=d[c+f+2]=k.z}function Qc(a,b,c,d){R.call(this);
this.type="LatheGeometry";this.parameters={points:a,segments:b,phiStart:c,phiLength:d};this.fromBufferGeometry(new Wb(a,b,c,d));this.mergeVertices()}function fb(a,b){function c(a){var c,h,m=d.length/3;a=a.extractPoints(b);var l=a.shape,u=a.holes;if(!1===pa.isClockWise(l))for(l=l.reverse(),a=0,c=u.length;a<c;a++)h=u[a],!0===pa.isClockWise(h)&&(u[a]=h.reverse());var q=pa.triangulateShape(l,u);a=0;for(c=u.length;a<c;a++)h=u[a],l=l.concat(h);a=0;for(c=l.length;a<c;a++)h=l[a],d.push(h.x,h.y,0),e.push(0,
0,1),f.push(h.x,h.y);a=0;for(c=q.length;a<c;a++)l=q[a],g.push(l[0]+m,l[1]+m,l[2]+m),k+=3}J.call(this);this.type="ShapeBufferGeometry";this.parameters={shapes:a,curveSegments:b};b=b||12;var d=[],e=[],f=[],g=[],h=0,k=0;if(!1===Array.isArray(a))c(a);else for(var m=0;m<a.length;m++)c(a[m]),this.addGroup(h,k,m),h+=k,k=0;this.setIndex(new (65535<g.length?Va:Sa)(g,1));this.addAttribute("position",new W(d,3));this.addAttribute("normal",new W(e,3));this.addAttribute("uv",new W(f,2))}function Xb(a,b){R.call(this);
this.type="ShapeGeometry";"object"===typeof b&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),b=b.curveSegments);this.parameters={shapes:a,curveSegments:b};this.fromBufferGeometry(new fb(a,b));this.mergeVertices()}function Yb(a,b){function c(a,b){return a-b}J.call(this);var d=Math.cos(S.DEG2RAD*(void 0!==b?b:1)),e=[0,0],f={},g=["a","b","c"],h;a.isBufferGeometry?(h=new R,h.fromBufferGeometry(a)):h=a.clone();h.mergeVertices();h.computeFaceNormals();var k=h.vertices;h=h.faces;
for(var m=0,l=h.length;m<l;m++)for(var p=h[m],n=0;3>n;n++){e[0]=p[g[n]];e[1]=p[g[(n+1)%3]];e.sort(c);var r=e.toString();void 0===f[r]?f[r]={vert1:e[0],vert2:e[1],face1:m,face2:void 0}:f[r].face2=m}e=[];for(r in f)if(g=f[r],void 0===g.face2||h[g.face1].normal.dot(h[g.face2].normal)<=d)m=k[g.vert1],e.push(m.x),e.push(m.y),e.push(m.z),m=k[g.vert2],e.push(m.x),e.push(m.y),e.push(m.z);this.addAttribute("position",new z(new Float32Array(e),3))}function Xa(a,b,c,d,e,f,g,h){function k(c){var e,f,k,n=new B,
p=new q,l=0,x=!0===c?a:b,M=!0===c?1:-1;f=t;for(e=1;e<=d;e++)w.setXYZ(t,0,y*M,0),u.setXYZ(t,0,M,0),n.x=.5,n.y=.5,A.setXY(t,n.x,n.y),t++;k=t;for(e=0;e<=d;e++){var z=e/d*h+g,F=Math.cos(z),z=Math.sin(z);p.x=x*z;p.y=y*M;p.z=x*F;w.setXYZ(t,p.x,p.y,p.z);u.setXYZ(t,0,M,0);n.x=.5*F+.5;n.y=.5*z*M+.5;A.setXY(t,n.x,n.y);t++}for(e=0;e<d;e++)n=f+e,p=k+e,!0===c?(r.setX(v,p),v++,r.setX(v,p+1)):(r.setX(v,p+1),v++,r.setX(v,p)),v++,r.setX(v,n),v++,l+=3;m.addGroup(C,l,!0===c?1:2);C+=l}J.call(this);this.type="CylinderBufferGeometry";
this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f,thetaStart:g,thetaLength:h};var m=this;a=void 0!==a?a:20;b=void 0!==b?b:20;c=void 0!==c?c:100;d=Math.floor(d)||8;e=Math.floor(e)||1;f=void 0!==f?f:!1;g=void 0!==g?g:0;h=void 0!==h?h:2*Math.PI;var l=0;!1===f&&(0<a&&l++,0<b&&l++);var p=function(){var a=(d+1)*(e+1);!1===f&&(a+=(d+1)*l+d*l);return a}(),n=function(){var a=d*e*6;!1===f&&(a+=d*l*3);return a}(),r=new z(new (65535<n?Uint32Array:Uint16Array)(n),
1),w=new z(new Float32Array(3*p),3),u=new z(new Float32Array(3*p),3),A=new z(new Float32Array(2*p),2),t=0,v=0,M=[],y=c/2,C=0;(function(){var f,k,n=new q,p=new q,l=0,x=(b-a)/c;for(k=0;k<=e;k++){var z=[],B=k/e,F=B*(b-a)+a;for(f=0;f<=d;f++){var G=f/d,O=G*h+g,Q=Math.sin(O),O=Math.cos(O);p.x=F*Q;p.y=-B*c+y;p.z=F*O;w.setXYZ(t,p.x,p.y,p.z);n.set(Q,x,O).normalize();u.setXYZ(t,n.x,n.y,n.z);A.setXY(t,G,1-B);z.push(t);t++}M.push(z)}for(f=0;f<d;f++)for(k=0;k<e;k++)n=M[k+1][f],p=M[k+1][f+1],x=M[k][f+1],r.setX(v,
M[k][f]),v++,r.setX(v,n),v++,r.setX(v,x),v++,r.setX(v,n),v++,r.setX(v,p),v++,r.setX(v,x),v++,l+=6;m.addGroup(C,l,0);C+=l})();!1===f&&(0<a&&k(!0),0<b&&k(!1));this.setIndex(r);this.addAttribute("position",w);this.addAttribute("normal",u);this.addAttribute("uv",A)}function pb(a,b,c,d,e,f,g,h){R.call(this);this.type="CylinderGeometry";this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f,thetaStart:g,thetaLength:h};this.fromBufferGeometry(new Xa(a,b,c,d,e,
f,g,h));this.mergeVertices()}function Rc(a,b,c,d,e,f,g){pb.call(this,0,a,b,c,d,e,f,g);this.type="ConeGeometry";this.parameters={radius:a,height:b,radialSegments:c,heightSegments:d,openEnded:e,thetaStart:f,thetaLength:g}}function Sc(a,b,c,d,e,f,g){Xa.call(this,0,a,b,c,d,e,f,g);this.type="ConeBufferGeometry";this.parameters={radius:a,height:b,radialSegments:c,heightSegments:d,openEnded:e,thetaStart:f,thetaLength:g}}function Zb(a,b,c,d){J.call(this);this.type="CircleBufferGeometry";this.parameters={radius:a,
segments:b,thetaStart:c,thetaLength:d};a=a||50;b=void 0!==b?Math.max(3,b):8;c=void 0!==c?c:0;d=void 0!==d?d:2*Math.PI;var e=b+2,f=new Float32Array(3*e),g=new Float32Array(3*e),e=new Float32Array(2*e);g[2]=1;e[0]=.5;e[1]=.5;for(var h=0,k=3,m=2;h<=b;h++,k+=3,m+=2){var l=c+h/b*d;f[k]=a*Math.cos(l);f[k+1]=a*Math.sin(l);g[k+2]=1;e[m]=(f[k]/a+1)/2;e[m+1]=(f[k+1]/a+1)/2}c=[];for(k=1;k<=b;k++)c.push(k,k+1,0);this.setIndex(new z(new Uint16Array(c),1));this.addAttribute("position",new z(f,3));this.addAttribute("normal",
new z(g,3));this.addAttribute("uv",new z(e,2));this.boundingSphere=new Ha(new q,a)}function Tc(a,b,c,d){R.call(this);this.type="CircleGeometry";this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};this.fromBufferGeometry(new Zb(a,b,c,d))}function $b(a,b,c,d,e,f){R.call(this);this.type="BoxGeometry";this.parameters={width:a,height:b,depth:c,widthSegments:d,heightSegments:e,depthSegments:f};this.fromBufferGeometry(new jb(a,b,c,d,e,f));this.mergeVertices()}function ac(){Ja.call(this,{uniforms:Object.assign({},
X.lights,{opacity:{value:1}}),vertexShader:Z.shadow_vert,fragmentShader:Z.shadow_frag});this.transparent=this.lights=!0;Object.defineProperties(this,{opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(a){this.uniforms.opacity.value=a}}})}function bc(a){Ja.call(this,a);this.type="RawShaderMaterial"}function Uc(a){this.uuid=S.generateUUID();this.type="MultiMaterial";this.materials=a instanceof Array?a:[];this.visible=!0}function Qa(a){U.call(this);this.defines={STANDARD:""};
this.type="MeshStandardMaterial";this.color=new G(16777215);this.metalness=this.roughness=.5;this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new G(0);this.emissiveIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new B(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.envMap=this.alphaMap=this.metalnessMap=this.roughnessMap=null;this.envMapIntensity=1;this.refractionRatio=
.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}function qb(a){Qa.call(this);this.defines={PHYSICAL:""};this.type="MeshPhysicalMaterial";this.reflectivity=.5;this.clearCoatRoughness=this.clearCoat=0;this.setValues(a)}function Ea(a){U.call(this);this.type="MeshPhongMaterial";this.color=new G(16777215);this.specular=new G(1118481);this.shininess=30;this.lightMap=this.map=null;
this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new G(0);this.emissiveIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new B(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.envMap=this.alphaMap=this.specularMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=
this.morphTargets=this.skinning=!1;this.setValues(a)}function rb(a){Ea.call(this);this.defines={TOON:""};this.type="MeshToonMaterial";this.gradientMap=null;this.setValues(a)}function sb(a){U.call(this,a);this.type="MeshNormalMaterial";this.wireframe=!1;this.wireframeLinewidth=1;this.morphTargets=this.lights=this.fog=!1;this.setValues(a)}function tb(a){U.call(this);this.type="MeshLambertMaterial";this.color=new G(16777215);this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=
1;this.emissive=new G(0);this.emissiveIntensity=1;this.envMap=this.alphaMap=this.specularMap=this.emissiveMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}function ub(a){U.call(this);this.type="LineDashedMaterial";this.color=new G(16777215);this.scale=this.linewidth=1;this.dashSize=3;this.gapSize=1;this.lights=!1;
this.setValues(a)}function Od(a,b,c){var d=this,e=!1,f=0,g=0;this.onStart=void 0;this.onLoad=a;this.onProgress=b;this.onError=c;this.itemStart=function(a){g++;if(!1===e&&void 0!==d.onStart)d.onStart(a,f,g);e=!0};this.itemEnd=function(a){f++;if(void 0!==d.onProgress)d.onProgress(a,f,g);if(f===g&&(e=!1,void 0!==d.onLoad))d.onLoad()};this.itemError=function(a){if(void 0!==d.onError)d.onError(a)}}function Oa(a){this.manager=void 0!==a?a:ua}function Ce(a){this.manager=void 0!==a?a:ua;this._parser=null}
function Pd(a){this.manager=void 0!==a?a:ua;this._parser=null}function Vc(a){this.manager=void 0!==a?a:ua}function Qd(a){this.manager=void 0!==a?a:ua}function ld(a){this.manager=void 0!==a?a:ua}function ma(a,b){F.call(this);this.type="Light";this.color=new G(a);this.intensity=void 0!==b?b:1;this.receiveShadow=void 0}function md(a,b,c){ma.call(this,a,c);this.type="HemisphereLight";this.castShadow=void 0;this.position.copy(F.DefaultUp);this.updateMatrix();this.groundColor=new G(b)}function vb(a){this.camera=
a;this.bias=0;this.radius=1;this.mapSize=new B(512,512);this.map=null;this.matrix=new P}function nd(){vb.call(this,new Ia(50,1,.5,500))}function od(a,b,c,d,e,f){ma.call(this,a,b);this.type="SpotLight";this.position.copy(F.DefaultUp);this.updateMatrix();this.target=new F;Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(a){this.intensity=a/Math.PI}});this.distance=void 0!==c?c:0;this.angle=void 0!==d?d:Math.PI/3;this.penumbra=void 0!==e?e:0;this.decay=void 0!==
f?f:1;this.shadow=new nd}function pd(a,b,c,d){ma.call(this,a,b);this.type="PointLight";Object.defineProperty(this,"power",{get:function(){return 4*this.intensity*Math.PI},set:function(a){this.intensity=a/(4*Math.PI)}});this.distance=void 0!==c?c:0;this.decay=void 0!==d?d:1;this.shadow=new vb(new Ia(90,1,.5,500))}function qd(a){vb.call(this,new Ib(-5,5,5,-5,.5,500))}function rd(a,b){ma.call(this,a,b);this.type="DirectionalLight";this.position.copy(F.DefaultUp);this.updateMatrix();this.target=new F;
this.shadow=new qd}function sd(a,b){ma.call(this,a,b);this.type="AmbientLight";this.castShadow=void 0}function qa(a,b,c,d){this.parameterPositions=a;this._cachedIndex=0;this.resultBuffer=void 0!==d?d:new b.constructor(c);this.sampleValues=b;this.valueSize=c}function td(a,b,c,d){qa.call(this,a,b,c,d);this._offsetNext=this._weightNext=this._offsetPrev=this._weightPrev=-0}function Wc(a,b,c,d){qa.call(this,a,b,c,d)}function ud(a,b,c,d){qa.call(this,a,b,c,d)}function wb(a,b,c,d){if(void 0===a)throw Error("track name is undefined");
if(void 0===b||0===b.length)throw Error("no keyframes in track named "+a);this.name=a;this.times=ba.convertArray(b,this.TimeBufferType);this.values=ba.convertArray(c,this.ValueBufferType);this.setInterpolation(d||this.DefaultInterpolation);this.validate();this.optimize()}function cc(a,b,c,d){wb.call(this,a,b,c,d)}function vd(a,b,c,d){qa.call(this,a,b,c,d)}function Xc(a,b,c,d){wb.call(this,a,b,c,d)}function dc(a,b,c,d){wb.call(this,a,b,c,d)}function wd(a,b,c,d){wb.call(this,a,b,c,d)}function xd(a,
b,c){wb.call(this,a,b,c)}function yd(a,b,c,d){wb.call(this,a,b,c,d)}function xb(a,b,c,d){wb.apply(this,arguments)}function sa(a,b,c){this.name=a;this.tracks=c;this.duration=void 0!==b?b:-1;this.uuid=S.generateUUID();0>this.duration&&this.resetDuration();this.optimize()}function zd(a){this.manager=void 0!==a?a:ua;this.textures={}}function Rd(a){this.manager=void 0!==a?a:ua}function yb(){this.onLoadStart=function(){};this.onLoadProgress=function(){};this.onLoadComplete=function(){}}function Sd(a){"boolean"===
typeof a&&(console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."),a=void 0);this.manager=void 0!==a?a:ua;this.withCredentials=!1}function De(a){this.manager=void 0!==a?a:ua;this.texturePath=""}function va(){}function Ra(a,b){this.v1=a;this.v2=b}function Yc(){this.curves=[];this.autoClose=!1}function Ya(a,b,c,d,e,f,g,h){this.aX=a;this.aY=b;this.xRadius=c;this.yRadius=d;this.aStartAngle=e;this.aEndAngle=f;this.aClockwise=g;this.aRotation=h||0}function zb(a){this.points=
void 0===a?[]:a}function Ab(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d}function Bb(a,b,c){this.v0=a;this.v1=b;this.v2=c}function Za(){Zc.apply(this,arguments);this.holes=[]}function Zc(a){Yc.call(this);this.currentPoint=new B;a&&this.fromPoints(a)}function Td(){this.subPaths=[];this.currentPath=null}function Ud(a){this.data=a}function Ee(a){this.manager=void 0!==a?a:ua}function Vd(a){this.manager=void 0!==a?a:ua}function Wd(a,b,c,d){ma.call(this,a,b);this.type="RectAreaLight";this.position.set(0,
1,0);this.updateMatrix();this.width=void 0!==c?c:10;this.height=void 0!==d?d:10}function Fe(){this.type="StereoCamera";this.aspect=1;this.eyeSep=.064;this.cameraL=new Ia;this.cameraL.layers.enable(1);this.cameraL.matrixAutoUpdate=!1;this.cameraR=new Ia;this.cameraR.layers.enable(2);this.cameraR.matrixAutoUpdate=!1}function Ad(a,b,c){F.call(this);this.type="CubeCamera";var d=new Ia(90,1,a,b);d.up.set(0,-1,0);d.lookAt(new q(1,0,0));this.add(d);var e=new Ia(90,1,a,b);e.up.set(0,-1,0);e.lookAt(new q(-1,
0,0));this.add(e);var f=new Ia(90,1,a,b);f.up.set(0,0,1);f.lookAt(new q(0,1,0));this.add(f);var g=new Ia(90,1,a,b);g.up.set(0,0,-1);g.lookAt(new q(0,-1,0));this.add(g);var h=new Ia(90,1,a,b);h.up.set(0,-1,0);h.lookAt(new q(0,0,1));this.add(h);var k=new Ia(90,1,a,b);k.up.set(0,-1,0);k.lookAt(new q(0,0,-1));this.add(k);this.renderTarget=new Fb(c,c,{format:1022,magFilter:1006,minFilter:1006});this.updateCubeMap=function(a,b){null===this.parent&&this.updateMatrixWorld();var c=this.renderTarget,n=c.texture.generateMipmaps;
c.texture.generateMipmaps=!1;c.activeCubeFace=0;a.render(b,d,c);c.activeCubeFace=1;a.render(b,e,c);c.activeCubeFace=2;a.render(b,f,c);c.activeCubeFace=3;a.render(b,g,c);c.activeCubeFace=4;a.render(b,h,c);c.texture.generateMipmaps=n;c.activeCubeFace=5;a.render(b,k,c);a.setRenderTarget(null)}}function Xd(){F.call(this);this.type="AudioListener";this.context=Yd.getContext();this.gain=this.context.createGain();this.gain.connect(this.context.destination);this.filter=null}function ec(a){F.call(this);this.type=
"Audio";this.context=a.context;this.gain=this.context.createGain();this.gain.connect(a.getInput());this.autoplay=!1;this.buffer=null;this.loop=!1;this.startTime=0;this.playbackRate=1;this.isPlaying=!1;this.hasPlaybackControl=!0;this.sourceType="empty";this.filters=[]}function Zd(a){ec.call(this,a);this.panner=this.context.createPanner();this.panner.connect(this.gain)}function $d(a,b){this.analyser=a.context.createAnalyser();this.analyser.fftSize=void 0!==b?b:2048;this.data=new Uint8Array(this.analyser.frequencyBinCount);
a.getOutput().connect(this.analyser)}function Bd(a,b,c){this.binding=a;this.valueSize=c;a=Float64Array;switch(b){case "quaternion":b=this._slerp;break;case "string":case "bool":a=Array;b=this._select;break;default:b=this._lerp}this.buffer=new a(4*c);this._mixBufferRegion=b;this.referenceCount=this.useCount=this.cumulativeWeight=0}function ja(a,b,c){this.path=b;this.parsedPath=c||ja.parseTrackName(b);this.node=ja.findNode(a,this.parsedPath.nodeName)||a;this.rootNode=a}function ae(a){this.uuid=S.generateUUID();
this._objects=Array.prototype.slice.call(arguments);this.nCachedObjects_=0;var b={};this._indicesByUUID=b;for(var c=0,d=arguments.length;c!==d;++c)b[arguments[c].uuid]=c;this._paths=[];this._parsedPaths=[];this._bindings=[];this._bindingsIndicesByPath={};var e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}function be(a,b,c){this._mixer=a;this._clip=b;this._localRoot=c||null;a=b.tracks;
b=a.length;c=Array(b);for(var d={endingStart:2400,endingEnd:2400},e=0;e!==b;++e){var f=a[e].createInterpolant(null);c[e]=f;f.settings=d}this._interpolantSettings=d;this._interpolants=c;this._propertyBindings=Array(b);this._weightInterpolant=this._timeScaleInterpolant=this._byClipCacheIndex=this._cacheIndex=null;this.loop=2201;this._loopCount=-1;this._startTime=null;this.time=0;this._effectiveWeight=this.weight=this._effectiveTimeScale=this.timeScale=1;this.repetitions=Infinity;this.paused=!1;this.enabled=
!0;this.clampWhenFinished=!1;this.zeroSlopeAtEnd=this.zeroSlopeAtStart=!0}function ce(a){this._root=a;this._initMemoryManager();this.time=this._accuIndex=0;this.timeScale=1}function Cd(a,b){"string"===typeof a&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),a=b);this.value=a}function Cb(){J.call(this);this.type="InstancedBufferGeometry";this.maxInstancedCount=void 0}function de(a,b,c,d){this.uuid=S.generateUUID();this.data=a;this.itemSize=b;this.offset=c;this.normalized=!0===
d}function fc(a,b){this.uuid=S.generateUUID();this.array=a;this.stride=b;this.count=void 0!==a?a.length/b:0;this.dynamic=!1;this.updateRange={offset:0,count:-1};this.onUploadCallback=function(){};this.version=0}function gc(a,b,c){fc.call(this,a,b);this.meshPerAttribute=c||1}function hc(a,b,c){z.call(this,a,b);this.meshPerAttribute=c||1}function ee(a,b,c,d){this.ray=new db(a,b);this.near=c||0;this.far=d||Infinity;this.params={Mesh:{},Line:{},LOD:{},Points:{threshold:1},Sprite:{}};Object.defineProperties(this.params,
{PointCloud:{get:function(){console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points.");return this.Points}}})}function Ge(a,b){return a.distance-b.distance}function fe(a,b,c,d){if(!1!==a.visible&&(a.raycast(b,c),!0===d)){a=a.children;d=0;for(var e=a.length;d<e;d++)fe(a[d],b,c,!0)}}function ge(a){this.autoStart=void 0!==a?a:!0;this.elapsedTime=this.oldTime=this.startTime=0;this.running=!1}function he(a,b,c){this.radius=void 0!==a?a:1;this.phi=void 0!==b?b:0;this.theta=void 0!==
c?c:0;return this}function ta(a,b){Da.call(this,a,b);this.animationsMap={};this.animationsList=[];var c=this.geometry.morphTargets.length;this.createAnimation("__default",0,c-1,c/1);this.setAnimationWeight("__default",1)}function $c(a){F.call(this);this.material=a;this.render=function(a){}}function ad(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;a=void 0!==c?c:16711680;d=void 0!==d?d:1;b=0;(c=this.object.geometry)&&c.isGeometry?b=3*c.faces.length:c&&c.isBufferGeometry&&(b=c.attributes.normal.count);
c=new J;b=new W(6*b,3);c.addAttribute("position",b);ea.call(this,c,new ha({color:a,linewidth:d}));this.matrixAutoUpdate=!1;this.update()}function ic(a){F.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;a=new J;for(var b=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1],c=0,d=1;32>c;c++,d++){var e=c/32*Math.PI*2,f=d/32*Math.PI*2;b.push(Math.cos(e),Math.sin(e),1,Math.cos(f),Math.sin(f),1)}a.addAttribute("position",new W(b,3));b=
new ha({fog:!1});this.cone=new ea(a,b);this.add(this.cone);this.update()}function jc(a){this.bones=this.getBoneList(a);for(var b=new J,c=[],d=[],e=new G(0,0,1),f=new G(0,1,0),g=0;g<this.bones.length;g++){var h=this.bones[g];h.parent&&h.parent.isBone&&(c.push(0,0,0),c.push(0,0,0),d.push(e.r,e.g,e.b),d.push(f.r,f.g,f.b))}b.addAttribute("position",new W(c,3));b.addAttribute("color",new W(d,3));c=new ha({vertexColors:2,depthTest:!1,depthWrite:!1,transparent:!0});ea.call(this,b,c);this.root=a;this.matrix=
a.matrixWorld;this.matrixAutoUpdate=!1;this.update()}function kc(a,b){this.light=a;this.light.updateMatrixWorld();var c=new ob(b,4,2),d=new Ma({wireframe:!0,fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);Da.call(this,c,d);this.matrix=this.light.matrixWorld;this.matrixAutoUpdate=!1}function lc(a){F.call(this);this.light=a;this.light.updateMatrixWorld();this.lightMat=new Ma({color:a.color,fog:!1});this.lightWireMat=new Ma({color:a.color,fog:!1,wireframe:!0});a=this.light.width/
2;var b=this.light.height/2;this.lightShape=new fb(new Za([new q(-a,b,0),new q(a,b,0),new q(a,-b,0),new q(-a,-b,0)]));this.lightMesh=new Da(this.lightShape,this.lightMat);this.lightWireMesh=new Da(this.lightShape,this.lightWireMat);this.add(this.lightMesh);this.add(this.lightWireMesh);this.update()}function mc(a,b){F.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;var c=new nb(b);c.rotateY(.5*Math.PI);var d=new Ma({vertexColors:2,wireframe:!0}),
e=c.getAttribute("position"),e=new Float32Array(3*e.count);c.addAttribute("color",new z(e,3));this.add(new Da(c,d));this.update()}function bd(a,b,c,d){a=a||10;b=b||10;c=new G(void 0!==c?c:4473924);d=new G(void 0!==d?d:8947848);for(var e=b/2,f=2*a/b,g=[],h=[],k=0,m=0,l=-a;k<=b;k++,l+=f){g.push(-a,0,l,a,0,l);g.push(l,0,-a,l,0,a);var p=k===e?c:d;p.toArray(h,m);m+=3;p.toArray(h,m);m+=3;p.toArray(h,m);m+=3;p.toArray(h,m);m+=3}a=new J;a.addAttribute("position",new W(g,3));a.addAttribute("color",new W(h,
3));g=new ha({vertexColors:2});ea.call(this,a,g)}function Dd(a,b,c,d,e,f){a=a||10;b=b||16;c=c||8;d=d||64;e=new G(void 0!==e?e:4473924);f=new G(void 0!==f?f:8947848);var g=[],h=[],k,m,l,p,n;for(l=0;l<=b;l++)m=l/b*2*Math.PI,k=Math.sin(m)*a,m=Math.cos(m)*a,g.push(0,0,0),g.push(k,0,m),n=l&1?e:f,h.push(n.r,n.g,n.b),h.push(n.r,n.g,n.b);for(l=0;l<=c;l++)for(n=l&1?e:f,p=a-a/c*l,b=0;b<d;b++)m=b/d*2*Math.PI,k=Math.sin(m)*p,m=Math.cos(m)*p,g.push(k,0,m),h.push(n.r,n.g,n.b),m=(b+1)/d*2*Math.PI,k=Math.sin(m)*
p,m=Math.cos(m)*p,g.push(k,0,m),h.push(n.r,n.g,n.b);a=new J;a.addAttribute("position",new W(g,3));a.addAttribute("color",new W(h,3));g=new ha({vertexColors:2});ea.call(this,a,g)}function cd(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;a=void 0!==c?c:16776960;d=void 0!==d?d:1;b=0;(c=this.object.geometry)&&c.isGeometry?b=c.faces.length:console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");c=new J;b=new W(6*b,3);c.addAttribute("position",
b);ea.call(this,c,new ha({color:a,linewidth:d}));this.matrixAutoUpdate=!1;this.update()}function nc(a,b){F.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;void 0===b&&(b=1);var c=new J;c.addAttribute("position",new W([-b,b,0,b,b,0,b,-b,0,-b,-b,0,-b,b,0],3));var d=new ha({fog:!1});this.add(new Wa(c,d));c=new J;c.addAttribute("position",new W([0,0,0,0,0,1],3));this.add(new Wa(c,d));this.update()}function dd(a){function b(a,b,d){c(a,d);c(b,d)}
function c(a,b){f.push(0,0,0);g.push(b.r,b.g,b.b);void 0===h[a]&&(h[a]=[]);h[a].push(f.length/3-1)}var d=new J,e=new ha({color:16777215,vertexColors:1}),f=[],g=[],h={},k=new G(16755200),m=new G(16711680),l=new G(43775),p=new G(16777215),n=new G(3355443);b("n1","n2",k);b("n2","n4",k);b("n4","n3",k);b("n3","n1",k);b("f1","f2",k);b("f2","f4",k);b("f4","f3",k);b("f3","f1",k);b("n1","f1",k);b("n2","f2",k);b("n3","f3",k);b("n4","f4",k);b("p","n1",m);b("p","n2",m);b("p","n3",m);b("p","n4",m);b("u1","u2",
l);b("u2","u3",l);b("u3","u1",l);b("c","t",p);b("p","c",n);b("cn1","cn2",n);b("cn3","cn4",n);b("cf1","cf2",n);b("cf3","cf4",n);d.addAttribute("position",new W(f,3));d.addAttribute("color",new W(g,3));ea.call(this,d,e);this.camera=a;this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.pointMap=h;this.update()}function oc(a,b){void 0===b&&(b=16776960);var c=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),
d=new Float32Array(24),e=new J;e.setIndex(new z(c,1));e.addAttribute("position",new z(d,3));ea.call(this,e,new ha({color:b}));void 0!==a&&this.update(a)}function Db(a,b,c,d,e,f){F.call(this);void 0===d&&(d=16776960);void 0===c&&(c=1);void 0===e&&(e=.2*c);void 0===f&&(f=.2*e);this.position.copy(b);this.line=new Wa(He,new ha({color:d}));this.line.matrixAutoUpdate=!1;this.add(this.line);this.cone=new Da(Ie,new Ma({color:d}));this.cone.matrixAutoUpdate=!1;this.add(this.cone);this.setDirection(a);this.setLength(c,
e,f)}function Ed(a){a=a||1;var b=[0,0,0,a,0,0,0,0,0,0,a,0,0,0,0,0,0,a];a=new J;a.addAttribute("position",new W(b,3));a.addAttribute("color",new W([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],3));b=new ha({vertexColors:2});ea.call(this,a,b)}function Fd(a,b,c,d,e,f){Ya.call(this,a,b,c,c,d,e,f)}function Je(a){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");ie.call(this,a);this.type="catmullrom";this.closed=!0}void 0===Number.EPSILON&&(Number.EPSILON=Math.pow(2,
-52));void 0===Math.sign&&(Math.sign=function(a){return 0>a?-1:0<a?1:+a});void 0===Function.prototype.name&&Object.defineProperty(Function.prototype,"name",{get:function(){return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]}});void 0===Object.assign&&function(){Object.assign=function(a){if(void 0===a||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var d=arguments[c];if(void 0!==d&&null!==d)for(var e in d)Object.prototype.hasOwnProperty.call(d,
e)&&(b[e]=d[e])}return b}}();Object.assign(na.prototype,{addEventListener:function(a,b){void 0===this._listeners&&(this._listeners={});var c=this._listeners;void 0===c[a]&&(c[a]=[]);-1===c[a].indexOf(b)&&c[a].push(b)},hasEventListener:function(a,b){if(void 0===this._listeners)return!1;var c=this._listeners;return void 0!==c[a]&&-1!==c[a].indexOf(b)?!0:!1},removeEventListener:function(a,b){if(void 0!==this._listeners){var c=this._listeners[a];if(void 0!==c){var d=c.indexOf(b);-1!==d&&c.splice(d,1)}}},
dispatchEvent:function(a){if(void 0!==this._listeners){var b=this._listeners[a.type];if(void 0!==b){a.target=this;var c=[],d,e=b.length;for(d=0;d<e;d++)c[d]=b[d];for(d=0;d<e;d++)c[d].call(this,a)}}}});var Ke={NoBlending:0,NormalBlending:1,AdditiveBlending:2,SubtractiveBlending:3,MultiplyBlending:4,CustomBlending:5},Le={UVMapping:300,CubeReflectionMapping:301,CubeRefractionMapping:302,EquirectangularReflectionMapping:303,EquirectangularRefractionMapping:304,SphericalReflectionMapping:305,CubeUVReflectionMapping:306,
CubeUVRefractionMapping:307},je={RepeatWrapping:1E3,ClampToEdgeWrapping:1001,MirroredRepeatWrapping:1002},ke={NearestFilter:1003,NearestMipMapNearestFilter:1004,NearestMipMapLinearFilter:1005,LinearFilter:1006,LinearMipMapNearestFilter:1007,LinearMipMapLinearFilter:1008},S={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){var a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),b=Array(36),c=0,d;return function(){for(var e=0;36>e;e++)8===e||13===e||18===e||23===
e?b[e]="-":14===e?b[e]="4":(2>=c&&(c=33554432+16777216*Math.random()|0),d=c&15,c>>=4,b[e]=a[19===e?d&3|8:d]);return b.join("")}}(),clamp:function(a,b,c){return Math.max(b,Math.min(c,a))},euclideanModulo:function(a,b){return(a%b+b)%b},mapLinear:function(a,b,c,d,e){return d+(a-b)*(e-d)/(c-b)},lerp:function(a,b,c){return(1-c)*a+c*b},smoothstep:function(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*(3-2*a)},smootherstep:function(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-
b);return a*a*a*(a*(6*a-15)+10)},randInt:function(a,b){return a+Math.floor(Math.random()*(b-a+1))},randFloat:function(a,b){return a+Math.random()*(b-a)},randFloatSpread:function(a){return a*(.5-Math.random())},degToRad:function(a){return a*S.DEG2RAD},radToDeg:function(a){return a*S.RAD2DEG},isPowerOfTwo:function(a){return 0===(a&a-1)&&0!==a},nearestPowerOfTwo:function(a){return Math.pow(2,Math.round(Math.log(a)/Math.LN2))},nextPowerOfTwo:function(a){a--;a|=a>>1;a|=a>>2;a|=a>>4;a|=a>>8;a|=a>>16;a++;
return a}};B.prototype={constructor:B,isVector2:!0,get width(){return this.x},set width(a){this.x=a},get height(){return this.y},set height(a){this.y=a},set:function(a,b){this.x=a;this.y=b;return this},setScalar:function(a){this.y=this.x=a;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;default:throw Error("index is out of range: "+a);}return this},getComponent:function(a){switch(a){case 0:return this.x;
case 1:return this.y;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y)},copy:function(a){this.x=a.x;this.y=a.y;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;return this},addScalar:function(a){this.x+=a;this.y+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this},
addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;return this},subScalar:function(a){this.x-=a;this.y-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;return this},multiply:function(a){this.x*=a.x;this.y*=a.y;return this},multiplyScalar:function(a){isFinite(a)?(this.x*=a,
this.y*=a):this.y=this.x=0;return this},divide:function(a){this.x/=a.x;this.y/=a.y;return this},divideScalar:function(a){return this.multiplyScalar(1/a)},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);return this},max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);return this},clamp:function(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));return this},clampScalar:function(){var a,b;return function(c,d){void 0===
a&&(a=new B,b=new B);a.set(c,c);b.set(d,d);return this.clamp(a,b)}}(),clampLength:function(a,b){var c=this.length();return this.multiplyScalar(Math.max(a,Math.min(b,c))/c)},floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>
this.y?Math.ceil(this.y):Math.floor(this.y);return this},negate:function(){this.x=-this.x;this.y=-this.y;return this},dot:function(a){return this.x*a.x+this.y*a.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)},normalize:function(){return this.divideScalar(this.length())},angle:function(){var a=Math.atan2(this.y,this.x);0>a&&(a+=2*Math.PI);return a},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},
distanceToSquared:function(a){var b=this.x-a.x;a=this.y-a.y;return b*b+a*a},distanceToManhattan:function(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)},setLength:function(a){return this.multiplyScalar(a/this.length())},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;return this},lerpVectors:function(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a)},equals:function(a){return a.x===this.x&&a.y===this.y},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+
1];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;return a},fromAttribute:function(a,b,c){void 0===c&&(c=0);b=b*a.itemSize+c;this.x=a.array[b];this.y=a.array[b+1];return this},rotateAround:function(a,b){var c=Math.cos(b),d=Math.sin(b),e=this.x-a.x,f=this.y-a.y;this.x=e*c-f*d+a.x;this.y=e*d+f*c+a.y;return this}};var Me=0;da.DEFAULT_IMAGE=void 0;da.DEFAULT_MAPPING=300;da.prototype={constructor:da,isTexture:!0,set needsUpdate(a){!0===a&&this.version++},
clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.image=a.image;this.mipmaps=a.mipmaps.slice(0);this.mapping=a.mapping;this.wrapS=a.wrapS;this.wrapT=a.wrapT;this.magFilter=a.magFilter;this.minFilter=a.minFilter;this.anisotropy=a.anisotropy;this.format=a.format;this.type=a.type;this.offset.copy(a.offset);this.repeat.copy(a.repeat);this.generateMipmaps=a.generateMipmaps;this.premultiplyAlpha=a.premultiplyAlpha;this.flipY=a.flipY;this.unpackAlignment=a.unpackAlignment;this.encoding=
a.encoding;return this},toJSON:function(a){if(void 0!==a.textures[this.uuid])return a.textures[this.uuid];var b={metadata:{version:4.4,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],wrap:[this.wrapS,this.wrapT],minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY};if(void 0!==this.image){var c=this.image;void 0===c.uuid&&(c.uuid=S.generateUUID());
if(void 0===a.images[c.uuid]){var d=a.images,e=c.uuid,f=c.uuid,g;void 0!==c.toDataURL?g=c:(g=document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),g.width=c.width,g.height=c.height,g.getContext("2d").drawImage(c,0,0,c.width,c.height));g=2048<g.width||2048<g.height?g.toDataURL("image/jpeg",.6):g.toDataURL("image/png");d[e]={uuid:f,url:g}}b.image=c.uuid}return a.textures[this.uuid]=b},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(a){if(300===this.mapping){a.multiply(this.repeat);
a.add(this.offset);if(0>a.x||1<a.x)switch(this.wrapS){case 1E3:a.x-=Math.floor(a.x);break;case 1001:a.x=0>a.x?0:1;break;case 1002:a.x=1===Math.abs(Math.floor(a.x)%2)?Math.ceil(a.x)-a.x:a.x-Math.floor(a.x)}if(0>a.y||1<a.y)switch(this.wrapT){case 1E3:a.y-=Math.floor(a.y);break;case 1001:a.y=0>a.y?0:1;break;case 1002:a.y=1===Math.abs(Math.floor(a.y)%2)?Math.ceil(a.y)-a.y:a.y-Math.floor(a.y)}this.flipY&&(a.y=1-a.y)}}};Object.assign(da.prototype,na.prototype);fa.prototype={constructor:fa,isVector4:!0,
set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},setScalar:function(a){this.w=this.z=this.y=this.x=a;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setW:function(a){this.w=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;case 3:this.w=b;break;default:throw Error("index is out of range: "+a);}return this},getComponent:function(a){switch(a){case 0:return this.x;
case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y,this.z,this.w)},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=void 0!==a.w?a.w:1;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;this.w+=a.w;return this},
addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;this.w+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;this.z+=a.z*b;this.w+=a.w*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;this.w-=a.w;return this},subScalar:function(a){this.x-=
a;this.y-=a;this.z-=a;this.w-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;this.w=a.w-b.w;return this},multiplyScalar:function(a){isFinite(a)?(this.x*=a,this.y*=a,this.z*=a,this.w*=a):this.w=this.z=this.y=this.x=0;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z,e=this.w;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12]*e;this.y=a[1]*b+a[5]*c+a[9]*d+a[13]*e;this.z=a[2]*b+a[6]*c+a[10]*d+a[14]*e;this.w=a[3]*b+a[7]*c+a[11]*d+a[15]*e;return this},
divideScalar:function(a){return this.multiplyScalar(1/a)},setAxisAngleFromQuaternion:function(a){this.w=2*Math.acos(a.w);var b=Math.sqrt(1-a.w*a.w);1E-4>b?(this.x=1,this.z=this.y=0):(this.x=a.x/b,this.y=a.y/b,this.z=a.z/b);return this},setAxisAngleFromRotationMatrix:function(a){var b,c,d;a=a.elements;var e=a[0];d=a[4];var f=a[8],g=a[1],h=a[5],k=a[9];c=a[2];b=a[6];var m=a[10];if(.01>Math.abs(d-g)&&.01>Math.abs(f-c)&&.01>Math.abs(k-b)){if(.1>Math.abs(d+g)&&.1>Math.abs(f+c)&&.1>Math.abs(k+b)&&.1>Math.abs(e+
h+m-3))return this.set(1,0,0,0),this;a=Math.PI;e=(e+1)/2;h=(h+1)/2;m=(m+1)/2;d=(d+g)/4;f=(f+c)/4;k=(k+b)/4;e>h&&e>m?.01>e?(b=0,d=c=.707106781):(b=Math.sqrt(e),c=d/b,d=f/b):h>m?.01>h?(b=.707106781,c=0,d=.707106781):(c=Math.sqrt(h),b=d/c,d=k/c):.01>m?(c=b=.707106781,d=0):(d=Math.sqrt(m),b=f/d,c=k/d);this.set(b,c,d,a);return this}a=Math.sqrt((b-k)*(b-k)+(f-c)*(f-c)+(g-d)*(g-d));.001>Math.abs(a)&&(a=1);this.x=(b-k)/a;this.y=(f-c)/a;this.z=(g-d)/a;this.w=Math.acos((e+h+m-1)/2);return this},min:function(a){this.x=
Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);this.z=Math.min(this.z,a.z);this.w=Math.min(this.w,a.w);return this},max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);this.z=Math.max(this.z,a.z);this.w=Math.max(this.w,a.w);return this},clamp:function(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));this.z=Math.max(a.z,Math.min(b.z,this.z));this.w=Math.max(a.w,Math.min(b.w,this.w));return this},clampScalar:function(){var a,b;return function(c,
d){void 0===a&&(a=new fa,b=new fa);a.set(c,c,c,c);b.set(d,d,d,d);return this.clamp(a,b)}}(),floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);this.w=Math.floor(this.w);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);this.w=Math.ceil(this.w);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);this.w=Math.round(this.w);return this},roundToZero:function(){this.x=
0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);this.w=0>this.w?Math.ceil(this.w):Math.floor(this.w);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;this.w=-this.w;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*
this.x+this.y*this.y+this.z*this.z+this.w*this.w)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length())},setLength:function(a){return this.multiplyScalar(a/this.length())},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;this.w+=(a.w-this.w)*b;return this},lerpVectors:function(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a)},equals:function(a){return a.x===
this.x&&a.y===this.y&&a.z===this.z&&a.w===this.w},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];this.w=a[b+3];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;a[b+3]=this.w;return a},fromAttribute:function(a,b,c){void 0===c&&(c=0);b=b*a.itemSize+c;this.x=a.array[b];this.y=a.array[b+1];this.z=a.array[b+2];this.w=a.array[b+3];return this}};Object.assign(Eb.prototype,na.prototype,{isWebGLRenderTarget:!0,
setSize:function(a,b){if(this.width!==a||this.height!==b)this.width=a,this.height=b,this.dispose();this.viewport.set(0,0,a,b);this.scissor.set(0,0,a,b)},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.width=a.width;this.height=a.height;this.viewport.copy(a.viewport);this.texture=a.texture.clone();this.depthBuffer=a.depthBuffer;this.stencilBuffer=a.stencilBuffer;this.depthTexture=a.depthTexture;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});
Fb.prototype=Object.create(Eb.prototype);Fb.prototype.constructor=Fb;Fb.prototype.isWebGLRenderTargetCube=!0;ca.prototype={constructor:ca,get x(){return this._x},set x(a){this._x=a;this.onChangeCallback()},get y(){return this._y},set y(a){this._y=a;this.onChangeCallback()},get z(){return this._z},set z(a){this._z=a;this.onChangeCallback()},get w(){return this._w},set w(a){this._w=a;this.onChangeCallback()},set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._w=d;this.onChangeCallback();return this},
clone:function(){return new this.constructor(this._x,this._y,this._z,this._w)},copy:function(a){this._x=a.x;this._y=a.y;this._z=a.z;this._w=a.w;this.onChangeCallback();return this},setFromEuler:function(a,b){if(!1===(a&&a.isEuler))throw Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");var c=Math.cos(a._x/2),d=Math.cos(a._y/2),e=Math.cos(a._z/2),f=Math.sin(a._x/2),g=Math.sin(a._y/2),h=Math.sin(a._z/2),k=a.order;"XYZ"===k?(this._x=f*d*e+c*g*h,
this._y=c*g*e-f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e-f*g*h):"YXZ"===k?(this._x=f*d*e+c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e+f*g*h):"ZXY"===k?(this._x=f*d*e-c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e-f*g*h):"ZYX"===k?(this._x=f*d*e-c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e+f*g*h):"YZX"===k?(this._x=f*d*e+c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e-f*g*h):"XZY"===k&&(this._x=f*d*e-c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h+f*g*e,
this._w=c*d*e+f*g*h);if(!1!==b)this.onChangeCallback();return this},setFromAxisAngle:function(a,b){var c=b/2,d=Math.sin(c);this._x=a.x*d;this._y=a.y*d;this._z=a.z*d;this._w=Math.cos(c);this.onChangeCallback();return this},setFromRotationMatrix:function(a){var b=a.elements,c=b[0];a=b[4];var d=b[8],e=b[1],f=b[5],g=b[9],h=b[2],k=b[6],b=b[10],m=c+f+b;0<m?(c=.5/Math.sqrt(m+1),this._w=.25/c,this._x=(k-g)*c,this._y=(d-h)*c,this._z=(e-a)*c):c>f&&c>b?(c=2*Math.sqrt(1+c-f-b),this._w=(k-g)/c,this._x=.25*c,this._y=
(a+e)/c,this._z=(d+h)/c):f>b?(c=2*Math.sqrt(1+f-c-b),this._w=(d-h)/c,this._x=(a+e)/c,this._y=.25*c,this._z=(g+k)/c):(c=2*Math.sqrt(1+b-c-f),this._w=(e-a)/c,this._x=(d+h)/c,this._y=(g+k)/c,this._z=.25*c);this.onChangeCallback();return this},setFromUnitVectors:function(){var a,b;return function(c,d){void 0===a&&(a=new q);b=c.dot(d)+1;1E-6>b?(b=0,Math.abs(c.x)>Math.abs(c.z)?a.set(-c.y,c.x,0):a.set(0,-c.z,c.y)):a.crossVectors(c,d);this._x=a.x;this._y=a.y;this._z=a.z;this._w=b;return this.normalize()}}(),
inverse:function(){return this.conjugate().normalize()},conjugate:function(){this._x*=-1;this._y*=-1;this._z*=-1;this.onChangeCallback();return this},dot:function(a){return this._x*a._x+this._y*a._y+this._z*a._z+this._w*a._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var a=this.length();0===a?(this._z=this._y=this._x=0,this._w=
1):(a=1/a,this._x*=a,this._y*=a,this._z*=a,this._w*=a);this.onChangeCallback();return this},multiply:function(a,b){return void 0!==b?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(a,b)):this.multiplyQuaternions(this,a)},premultiply:function(a){return this.multiplyQuaternions(a,this)},multiplyQuaternions:function(a,b){var c=a._x,d=a._y,e=a._z,f=a._w,g=b._x,h=b._y,k=b._z,m=b._w;this._x=c*m+f*g+d*k-e*h;
this._y=d*m+f*h+e*g-c*k;this._z=e*m+f*k+c*h-d*g;this._w=f*m-c*g-d*h-e*k;this.onChangeCallback();return this},slerp:function(a,b){if(0===b)return this;if(1===b)return this.copy(a);var c=this._x,d=this._y,e=this._z,f=this._w,g=f*a._w+c*a._x+d*a._y+e*a._z;0>g?(this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=-a._z,g=-g):this.copy(a);if(1<=g)return this._w=f,this._x=c,this._y=d,this._z=e,this;var h=Math.sqrt(1-g*g);if(.001>Math.abs(h))return this._w=.5*(f+this._w),this._x=.5*(c+this._x),this._y=.5*(d+
this._y),this._z=.5*(e+this._z),this;var k=Math.atan2(h,g),g=Math.sin((1-b)*k)/h,h=Math.sin(b*k)/h;this._w=f*g+this._w*h;this._x=c*g+this._x*h;this._y=d*g+this._y*h;this._z=e*g+this._z*h;this.onChangeCallback();return this},equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w},fromArray:function(a,b){void 0===b&&(b=0);this._x=a[b];this._y=a[b+1];this._z=a[b+2];this._w=a[b+3];this.onChangeCallback();return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===
b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+3]=this._w;return a},onChange:function(a){this.onChangeCallback=a;return this},onChangeCallback:function(){}};Object.assign(ca,{slerp:function(a,b,c,d){return c.copy(a).slerp(b,d)},slerpFlat:function(a,b,c,d,e,f,g){var h=c[d+0],k=c[d+1],m=c[d+2];c=c[d+3];d=e[f+0];var l=e[f+1],p=e[f+2];e=e[f+3];if(c!==e||h!==d||k!==l||m!==p){f=1-g;var n=h*d+k*l+m*p+c*e,r=0<=n?1:-1,w=1-n*n;w>Number.EPSILON&&(w=Math.sqrt(w),n=Math.atan2(w,n*r),f=Math.sin(f*n)/w,
g=Math.sin(g*n)/w);r*=g;h=h*f+d*r;k=k*f+l*r;m=m*f+p*r;c=c*f+e*r;f===1-g&&(g=1/Math.sqrt(h*h+k*k+m*m+c*c),h*=g,k*=g,m*=g,c*=g)}a[b]=h;a[b+1]=k;a[b+2]=m;a[b+3]=c}});q.prototype={constructor:q,isVector3:!0,set:function(a,b,c){this.x=a;this.y=b;this.z=c;return this},setScalar:function(a){this.z=this.y=this.x=a;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=
b;break;case 2:this.z=b;break;default:throw Error("index is out of range: "+a);}return this},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y,this.z)},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;return this},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;this.z+=a.z*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;
return this},subScalar:function(a){this.x-=a;this.y-=a;this.z-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;return this},multiply:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(a,b);this.x*=a.x;this.y*=a.y;this.z*=a.z;return this},multiplyScalar:function(a){isFinite(a)?(this.x*=a,this.y*=a,this.z*=a):this.z=this.y=this.x=0;return this},multiplyVectors:function(a,
b){this.x=a.x*b.x;this.y=a.y*b.y;this.z=a.z*b.z;return this},applyEuler:function(){var a;return function(b){!1===(b&&b.isEuler)&&console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.");void 0===a&&(a=new ca);return this.applyQuaternion(a.setFromEuler(b))}}(),applyAxisAngle:function(){var a;return function(b,c){void 0===a&&(a=new ca);return this.applyQuaternion(a.setFromAxisAngle(b,c))}}(),applyMatrix3:function(a){var b=this.x,c=this.y,d=this.z;
a=a.elements;this.x=a[0]*b+a[3]*c+a[6]*d;this.y=a[1]*b+a[4]*c+a[7]*d;this.z=a[2]*b+a[5]*c+a[8]*d;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12];this.y=a[1]*b+a[5]*c+a[9]*d+a[13];this.z=a[2]*b+a[6]*c+a[10]*d+a[14];return this},applyProjection:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;var e=1/(a[3]*b+a[7]*c+a[11]*d+a[15]);this.x=(a[0]*b+a[4]*c+a[8]*d+a[12])*e;this.y=(a[1]*b+a[5]*c+a[9]*d+a[13])*e;this.z=(a[2]*b+a[6]*
c+a[10]*d+a[14])*e;return this},applyQuaternion:function(a){var b=this.x,c=this.y,d=this.z,e=a.x,f=a.y,g=a.z;a=a.w;var h=a*b+f*d-g*c,k=a*c+g*b-e*d,m=a*d+e*c-f*b,b=-e*b-f*c-g*d;this.x=h*a+b*-e+k*-g-m*-f;this.y=k*a+b*-f+m*-e-h*-g;this.z=m*a+b*-g+h*-f-k*-e;return this},project:function(){var a;return function(b){void 0===a&&(a=new P);a.multiplyMatrices(b.projectionMatrix,a.getInverse(b.matrixWorld));return this.applyProjection(a)}}(),unproject:function(){var a;return function(b){void 0===a&&(a=new P);
a.multiplyMatrices(b.matrixWorld,a.getInverse(b.projectionMatrix));return this.applyProjection(a)}}(),transformDirection:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d;this.y=a[1]*b+a[5]*c+a[9]*d;this.z=a[2]*b+a[6]*c+a[10]*d;return this.normalize()},divide:function(a){this.x/=a.x;this.y/=a.y;this.z/=a.z;return this},divideScalar:function(a){return this.multiplyScalar(1/a)},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);this.z=Math.min(this.z,
a.z);return this},max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);this.z=Math.max(this.z,a.z);return this},clamp:function(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));this.z=Math.max(a.z,Math.min(b.z,this.z));return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new q,b=new q);a.set(c,c,c);b.set(d,d,d);return this.clamp(a,b)}}(),clampLength:function(a,b){var c=this.length();return this.multiplyScalar(Math.max(a,
Math.min(b,c))/c)},floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):
Math.floor(this.z);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length())},setLength:function(a){return this.multiplyScalar(a/
this.length())},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;return this},lerpVectors:function(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a)},cross:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(a,b);var c=this.x,d=this.y,e=this.z;this.x=d*a.z-e*a.y;this.y=e*a.x-c*a.z;this.z=c*a.y-d*a.x;return this},crossVectors:function(a,b){var c=
a.x,d=a.y,e=a.z,f=b.x,g=b.y,h=b.z;this.x=d*h-e*g;this.y=e*f-c*h;this.z=c*g-d*f;return this},projectOnVector:function(a){var b=a.dot(this)/a.lengthSq();return this.copy(a).multiplyScalar(b)},projectOnPlane:function(){var a;return function(b){void 0===a&&(a=new q);a.copy(this).projectOnVector(b);return this.sub(a)}}(),reflect:function(){var a;return function(b){void 0===a&&(a=new q);return this.sub(a.copy(b).multiplyScalar(2*this.dot(b)))}}(),angleTo:function(a){a=this.dot(a)/Math.sqrt(this.lengthSq()*
a.lengthSq());return Math.acos(S.clamp(a,-1,1))},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x,c=this.y-a.y;a=this.z-a.z;return b*b+c*c+a*a},distanceToManhattan:function(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)+Math.abs(this.z-a.z)},setFromSpherical:function(a){var b=Math.sin(a.phi)*a.radius;this.x=b*Math.sin(a.theta);this.y=Math.cos(a.phi)*a.radius;this.z=b*Math.cos(a.theta);return this},setFromMatrixPosition:function(a){return this.setFromMatrixColumn(a,
3)},setFromMatrixScale:function(a){var b=this.setFromMatrixColumn(a,0).length(),c=this.setFromMatrixColumn(a,1).length();a=this.setFromMatrixColumn(a,2).length();this.x=b;this.y=c;this.z=a;return this},setFromMatrixColumn:function(a,b){if("number"===typeof a){console.warn("THREE.Vector3: setFromMatrixColumn now expects ( matrix, index ).");var c=a;a=b;b=c}return this.fromArray(a.elements,4*b)},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z},fromArray:function(a,b){void 0===b&&
(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;return a},fromAttribute:function(a,b,c){void 0===c&&(c=0);b=b*a.itemSize+c;this.x=a.array[b];this.y=a.array[b+1];this.z=a.array[b+2];return this}};P.prototype={constructor:P,isMatrix4:!0,set:function(a,b,c,d,e,f,g,h,k,m,l,p,n,r,w,u){var q=this.elements;q[0]=a;q[4]=b;q[8]=c;q[12]=d;q[1]=e;q[5]=f;q[9]=g;q[13]=h;q[2]=k;q[6]=m;q[10]=l;q[14]=p;q[3]=
n;q[7]=r;q[11]=w;q[15]=u;return this},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this},clone:function(){return(new P).fromArray(this.elements)},copy:function(a){this.elements.set(a.elements);return this},copyPosition:function(a){var b=this.elements;a=a.elements;b[12]=a[12];b[13]=a[13];b[14]=a[14];return this},extractBasis:function(a,b,c){a.setFromMatrixColumn(this,0);b.setFromMatrixColumn(this,1);c.setFromMatrixColumn(this,2);return this},makeBasis:function(a,b,c){this.set(a.x,
b.x,c.x,0,a.y,b.y,c.y,0,a.z,b.z,c.z,0,0,0,0,1);return this},extractRotation:function(){var a;return function(b){void 0===a&&(a=new q);var c=this.elements,d=b.elements,e=1/a.setFromMatrixColumn(b,0).length(),f=1/a.setFromMatrixColumn(b,1).length();b=1/a.setFromMatrixColumn(b,2).length();c[0]=d[0]*e;c[1]=d[1]*e;c[2]=d[2]*e;c[4]=d[4]*f;c[5]=d[5]*f;c[6]=d[6]*f;c[8]=d[8]*b;c[9]=d[9]*b;c[10]=d[10]*b;return this}}(),makeRotationFromEuler:function(a){!1===(a&&a.isEuler)&&console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
var b=this.elements,c=a.x,d=a.y,e=a.z,f=Math.cos(c),c=Math.sin(c),g=Math.cos(d),d=Math.sin(d),h=Math.cos(e),e=Math.sin(e);if("XYZ"===a.order){a=f*h;var k=f*e,m=c*h,l=c*e;b[0]=g*h;b[4]=-g*e;b[8]=d;b[1]=k+m*d;b[5]=a-l*d;b[9]=-c*g;b[2]=l-a*d;b[6]=m+k*d;b[10]=f*g}else"YXZ"===a.order?(a=g*h,k=g*e,m=d*h,l=d*e,b[0]=a+l*c,b[4]=m*c-k,b[8]=f*d,b[1]=f*e,b[5]=f*h,b[9]=-c,b[2]=k*c-m,b[6]=l+a*c,b[10]=f*g):"ZXY"===a.order?(a=g*h,k=g*e,m=d*h,l=d*e,b[0]=a-l*c,b[4]=-f*e,b[8]=m+k*c,b[1]=k+m*c,b[5]=f*h,b[9]=l-a*c,b[2]=
-f*d,b[6]=c,b[10]=f*g):"ZYX"===a.order?(a=f*h,k=f*e,m=c*h,l=c*e,b[0]=g*h,b[4]=m*d-k,b[8]=a*d+l,b[1]=g*e,b[5]=l*d+a,b[9]=k*d-m,b[2]=-d,b[6]=c*g,b[10]=f*g):"YZX"===a.order?(a=f*g,k=f*d,m=c*g,l=c*d,b[0]=g*h,b[4]=l-a*e,b[8]=m*e+k,b[1]=e,b[5]=f*h,b[9]=-c*h,b[2]=-d*h,b[6]=k*e+m,b[10]=a-l*e):"XZY"===a.order&&(a=f*g,k=f*d,m=c*g,l=c*d,b[0]=g*h,b[4]=-e,b[8]=d*h,b[1]=a*e+l,b[5]=f*h,b[9]=k*e-m,b[2]=m*e-k,b[6]=c*h,b[10]=l*e+a);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},makeRotationFromQuaternion:function(a){var b=
this.elements,c=a.x,d=a.y,e=a.z,f=a.w,g=c+c,h=d+d,k=e+e;a=c*g;var m=c*h,c=c*k,l=d*h,d=d*k,e=e*k,g=f*g,h=f*h,f=f*k;b[0]=1-(l+e);b[4]=m-f;b[8]=c+h;b[1]=m+f;b[5]=1-(a+e);b[9]=d-g;b[2]=c-h;b[6]=d+g;b[10]=1-(a+l);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},lookAt:function(){var a,b,c;return function(d,e,f){void 0===a&&(a=new q,b=new q,c=new q);var g=this.elements;c.subVectors(d,e).normalize();0===c.lengthSq()&&(c.z=1);a.crossVectors(f,c).normalize();0===a.lengthSq()&&(c.z+=1E-4,
a.crossVectors(f,c).normalize());b.crossVectors(c,a);g[0]=a.x;g[4]=b.x;g[8]=c.x;g[1]=a.y;g[5]=b.y;g[9]=c.y;g[2]=a.z;g[6]=b.z;g[10]=c.z;return this}}(),multiply:function(a,b){return void 0!==b?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(a,b)):this.multiplyMatrices(this,a)},premultiply:function(a){return this.multiplyMatrices(a,this)},multiplyMatrices:function(a,b){var c=a.elements,d=b.elements,e=this.elements,
f=c[0],g=c[4],h=c[8],k=c[12],m=c[1],l=c[5],p=c[9],n=c[13],r=c[2],w=c[6],q=c[10],A=c[14],t=c[3],v=c[7],M=c[11],c=c[15],y=d[0],C=d[4],H=d[8],E=d[12],L=d[1],z=d[5],I=d[9],B=d[13],F=d[2],G=d[6],J=d[10],N=d[14],O=d[3],Q=d[7],T=d[11],d=d[15];e[0]=f*y+g*L+h*F+k*O;e[4]=f*C+g*z+h*G+k*Q;e[8]=f*H+g*I+h*J+k*T;e[12]=f*E+g*B+h*N+k*d;e[1]=m*y+l*L+p*F+n*O;e[5]=m*C+l*z+p*G+n*Q;e[9]=m*H+l*I+p*J+n*T;e[13]=m*E+l*B+p*N+n*d;e[2]=r*y+w*L+q*F+A*O;e[6]=r*C+w*z+q*G+A*Q;e[10]=r*H+w*I+q*J+A*T;e[14]=r*E+w*B+q*N+A*d;e[3]=t*y+
v*L+M*F+c*O;e[7]=t*C+v*z+M*G+c*Q;e[11]=t*H+v*I+M*J+c*T;e[15]=t*E+v*B+M*N+c*d;return this},multiplyToArray:function(a,b,c){var d=this.elements;this.multiplyMatrices(a,b);c[0]=d[0];c[1]=d[1];c[2]=d[2];c[3]=d[3];c[4]=d[4];c[5]=d[5];c[6]=d[6];c[7]=d[7];c[8]=d[8];c[9]=d[9];c[10]=d[10];c[11]=d[11];c[12]=d[12];c[13]=d[13];c[14]=d[14];c[15]=d[15];return this},multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[4]*=a;b[8]*=a;b[12]*=a;b[1]*=a;b[5]*=a;b[9]*=a;b[13]*=a;b[2]*=a;b[6]*=a;b[10]*=a;b[14]*=a;
b[3]*=a;b[7]*=a;b[11]*=a;b[15]*=a;return this},applyToVector3Array:function(){var a;return function(b,c,d){void 0===a&&(a=new q);void 0===c&&(c=0);void 0===d&&(d=b.length);for(var e=0;e<d;e+=3,c+=3)a.fromArray(b,c),a.applyMatrix4(this),a.toArray(b,c);return b}}(),applyToBuffer:function(){var a;return function(b,c,d){void 0===a&&(a=new q);void 0===c&&(c=0);void 0===d&&(d=b.length/b.itemSize);for(var e=0;e<d;e++,c++)a.x=b.getX(c),a.y=b.getY(c),a.z=b.getZ(c),a.applyMatrix4(this),b.setXYZ(c,a.x,a.y,a.z);
return b}}(),determinant:function(){var a=this.elements,b=a[0],c=a[4],d=a[8],e=a[12],f=a[1],g=a[5],h=a[9],k=a[13],m=a[2],l=a[6],p=a[10],n=a[14];return a[3]*(+e*h*l-d*k*l-e*g*p+c*k*p+d*g*n-c*h*n)+a[7]*(+b*h*n-b*k*p+e*f*p-d*f*n+d*k*m-e*h*m)+a[11]*(+b*k*l-b*g*n-e*f*l+c*f*n+e*g*m-c*k*m)+a[15]*(-d*g*m-b*h*l+b*g*p+d*f*l-c*f*p+c*h*m)},transpose:function(){var a=this.elements,b;b=a[1];a[1]=a[4];a[4]=b;b=a[2];a[2]=a[8];a[8]=b;b=a[6];a[6]=a[9];a[9]=b;b=a[3];a[3]=a[12];a[12]=b;b=a[7];a[7]=a[13];a[13]=b;b=a[11];
a[11]=a[14];a[14]=b;return this},setPosition:function(a){var b=this.elements;b[12]=a.x;b[13]=a.y;b[14]=a.z;return this},getInverse:function(a,b){var c=this.elements,d=a.elements,e=d[0],f=d[1],g=d[2],h=d[3],k=d[4],m=d[5],l=d[6],p=d[7],n=d[8],r=d[9],w=d[10],q=d[11],A=d[12],t=d[13],v=d[14],d=d[15],M=r*v*p-t*w*p+t*l*q-m*v*q-r*l*d+m*w*d,y=A*w*p-n*v*p-A*l*q+k*v*q+n*l*d-k*w*d,C=n*t*p-A*r*p+A*m*q-k*t*q-n*m*d+k*r*d,H=A*r*l-n*t*l-A*m*w+k*t*w+n*m*v-k*r*v,E=e*M+f*y+g*C+h*H;if(0===E){if(!0===b)throw Error("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");
console.warn("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");return this.identity()}E=1/E;c[0]=M*E;c[1]=(t*w*h-r*v*h-t*g*q+f*v*q+r*g*d-f*w*d)*E;c[2]=(m*v*h-t*l*h+t*g*p-f*v*p-m*g*d+f*l*d)*E;c[3]=(r*l*h-m*w*h-r*g*p+f*w*p+m*g*q-f*l*q)*E;c[4]=y*E;c[5]=(n*v*h-A*w*h+A*g*q-e*v*q-n*g*d+e*w*d)*E;c[6]=(A*l*h-k*v*h-A*g*p+e*v*p+k*g*d-e*l*d)*E;c[7]=(k*w*h-n*l*h+n*g*p-e*w*p-k*g*q+e*l*q)*E;c[8]=C*E;c[9]=(A*r*h-n*t*h-A*f*q+e*t*q+n*f*d-e*r*d)*E;c[10]=(k*t*h-A*m*h+A*f*p-e*t*p-k*f*d+e*m*d)*E;c[11]=
(n*m*h-k*r*h-n*f*p+e*r*p+k*f*q-e*m*q)*E;c[12]=H*E;c[13]=(n*t*g-A*r*g+A*f*w-e*t*w-n*f*v+e*r*v)*E;c[14]=(A*m*g-k*t*g-A*f*l+e*t*l+k*f*v-e*m*v)*E;c[15]=(k*r*g-n*m*g+n*f*l-e*r*l-k*f*w+e*m*w)*E;return this},scale:function(a){var b=this.elements,c=a.x,d=a.y;a=a.z;b[0]*=c;b[4]*=d;b[8]*=a;b[1]*=c;b[5]*=d;b[9]*=a;b[2]*=c;b[6]*=d;b[10]*=a;b[3]*=c;b[7]*=d;b[11]*=a;return this},getMaxScaleOnAxis:function(){var a=this.elements;return Math.sqrt(Math.max(a[0]*a[0]+a[1]*a[1]+a[2]*a[2],a[4]*a[4]+a[5]*a[5]+a[6]*a[6],
a[8]*a[8]+a[9]*a[9]+a[10]*a[10]))},makeTranslation:function(a,b,c){this.set(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1);return this},makeRotationX:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1);return this},makeRotationY:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1);return this},makeRotationZ:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1);return this},makeRotationAxis:function(a,b){var c=
Math.cos(b),d=Math.sin(b),e=1-c,f=a.x,g=a.y,h=a.z,k=e*f,m=e*g;this.set(k*f+c,k*g-d*h,k*h+d*g,0,k*g+d*h,m*g+c,m*h-d*f,0,k*h-d*g,m*h+d*f,e*h*h+c,0,0,0,0,1);return this},makeScale:function(a,b,c){this.set(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1);return this},makeShear:function(a,b,c){this.set(1,b,c,0,a,1,c,0,a,b,1,0,0,0,0,1);return this},compose:function(a,b,c){this.makeRotationFromQuaternion(b);this.scale(c);this.setPosition(a);return this},decompose:function(){var a,b;return function(c,d,e){void 0===a&&(a=
new q,b=new P);var f=this.elements,g=a.set(f[0],f[1],f[2]).length(),h=a.set(f[4],f[5],f[6]).length(),k=a.set(f[8],f[9],f[10]).length();0>this.determinant()&&(g=-g);c.x=f[12];c.y=f[13];c.z=f[14];b.elements.set(this.elements);c=1/g;var f=1/h,m=1/k;b.elements[0]*=c;b.elements[1]*=c;b.elements[2]*=c;b.elements[4]*=f;b.elements[5]*=f;b.elements[6]*=f;b.elements[8]*=m;b.elements[9]*=m;b.elements[10]*=m;d.setFromRotationMatrix(b);e.x=g;e.y=h;e.z=k;return this}}(),makeFrustum:function(a,b,c,d,e,f){var g=
this.elements;g[0]=2*e/(b-a);g[4]=0;g[8]=(b+a)/(b-a);g[12]=0;g[1]=0;g[5]=2*e/(d-c);g[9]=(d+c)/(d-c);g[13]=0;g[2]=0;g[6]=0;g[10]=-(f+e)/(f-e);g[14]=-2*f*e/(f-e);g[3]=0;g[7]=0;g[11]=-1;g[15]=0;return this},makePerspective:function(a,b,c,d){a=c*Math.tan(S.DEG2RAD*a*.5);var e=-a;return this.makeFrustum(e*b,a*b,e,a,c,d)},makeOrthographic:function(a,b,c,d,e,f){var g=this.elements,h=1/(b-a),k=1/(c-d),m=1/(f-e);g[0]=2*h;g[4]=0;g[8]=0;g[12]=-((b+a)*h);g[1]=0;g[5]=2*k;g[9]=0;g[13]=-((c+d)*k);g[2]=0;g[6]=0;
g[10]=-2*m;g[14]=-((f+e)*m);g[3]=0;g[7]=0;g[11]=0;g[15]=1;return this},equals:function(a){var b=this.elements;a=a.elements;for(var c=0;16>c;c++)if(b[c]!==a[c])return!1;return!0},fromArray:function(a,b){void 0===b&&(b=0);for(var c=0;16>c;c++)this.elements[c]=a[c+b];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];a[b+9]=c[9];a[b+10]=c[10];a[b+11]=c[11];
a[b+12]=c[12];a[b+13]=c[13];a[b+14]=c[14];a[b+15]=c[15];return a}};ab.prototype=Object.create(da.prototype);ab.prototype.constructor=ab;ab.prototype.isCubeTexture=!0;Object.defineProperty(ab.prototype,"images",{get:function(){return this.image},set:function(a){this.image=a}});var qe=new da,re=new ab,ne=[],pe=[];ve.prototype.setValue=function(a,b){for(var c=this.seq,d=0,e=c.length;d!==e;++d){var f=c[d];f.setValue(a,b[f.id])}};var Hd=/([\w\d_]+)(\])?(\[|\.)?/g;bb.prototype.setValue=function(a,b,c){b=
this.map[b];void 0!==b&&b.setValue(a,c,this.renderer)};bb.prototype.set=function(a,b,c){var d=this.map[c];void 0!==d&&d.setValue(a,b[c],this.renderer)};bb.prototype.setOptional=function(a,b,c){b=b[c];void 0!==b&&this.setValue(a,c,b)};bb.upload=function(a,b,c,d){for(var e=0,f=b.length;e!==f;++e){var g=b[e],h=c[g.id];!1!==h.needsUpdate&&g.setValue(a,h.value,d)}};bb.seqWithValue=function(a,b){for(var c=[],d=0,e=a.length;d!==e;++d){var f=a[d];f.id in b&&c.push(f)}return c};var Z={alphamap_fragment:"#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n",
alphamap_pars_fragment:"#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n",alphatest_fragment:"#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n",aomap_fragment:"#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n",
aomap_pars_fragment:"#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",begin_vertex:"\nvec3 transformed = vec3( position );\n",beginnormal_vertex:"\nvec3 objectNormal = vec3( normal );\n",bsdfs:"float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t\t}\n\t\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 ltcTextureCoords( const in GeometricContext geometry, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = (LUT_SIZE - 1.0)/LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5/LUT_SIZE;\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 P = geometry.position;\n\tfloat theta = acos( dot( N, V ) );\n\tvec2 uv = vec2(\n\t\tsqrt( saturate( roughness ) ),\n\t\tsaturate( theta / ( 0.5 * PI ) ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nvoid clipQuadToHorizon( inout vec3 L[5], out int n ) {\n\tint config = 0;\n\tif ( L[0].z > 0.0 ) config += 1;\n\tif ( L[1].z > 0.0 ) config += 2;\n\tif ( L[2].z > 0.0 ) config += 4;\n\tif ( L[3].z > 0.0 ) config += 8;\n\tn = 0;\n\tif ( config == 0 ) {\n\t} else if ( config == 1 ) {\n\t\tn = 3;\n\t\tL[1] = -L[1].z * L[0] + L[0].z * L[1];\n\t\tL[2] = -L[3].z * L[0] + L[0].z * L[3];\n\t} else if ( config == 2 ) {\n\t\tn = 3;\n\t\tL[0] = -L[0].z * L[1] + L[1].z * L[0];\n\t\tL[2] = -L[2].z * L[1] + L[1].z * L[2];\n\t} else if ( config == 3 ) {\n\t\tn = 4;\n\t\tL[2] = -L[2].z * L[1] + L[1].z * L[2];\n\t\tL[3] = -L[3].z * L[0] + L[0].z * L[3];\n\t} else if ( config == 4 ) {\n\t\tn = 3;\n\t\tL[0] = -L[3].z * L[2] + L[2].z * L[3];\n\t\tL[1] = -L[1].z * L[2] + L[2].z * L[1];\n\t} else if ( config == 5 ) {\n\t\tn = 0;\n\t} else if ( config == 6 ) {\n\t\tn = 4;\n\t\tL[0] = -L[0].z * L[1] + L[1].z * L[0];\n\t\tL[3] = -L[3].z * L[2] + L[2].z * L[3];\n\t} else if ( config == 7 ) {\n\t\tn = 5;\n\t\tL[4] = -L[3].z * L[0] + L[0].z * L[3];\n\t\tL[3] = -L[3].z * L[2] + L[2].z * L[3];\n\t} else if ( config == 8 ) {\n\t\tn = 3;\n\t\tL[0] = -L[0].z * L[3] + L[3].z * L[0];\n\t\tL[1] = -L[2].z * L[3] + L[3].z * L[2];\n\t\tL[2] =  L[3];\n\t} else if ( config == 9 ) {\n\t\tn = 4;\n\t\tL[1] = -L[1].z * L[0] + L[0].z * L[1];\n\t\tL[2] = -L[2].z * L[3] + L[3].z * L[2];\n\t} else if ( config == 10 ) {\n\t\tn = 0;\n\t} else if ( config == 11 ) {\n\t\tn = 5;\n\t\tL[4] = L[3];\n\t\tL[3] = -L[2].z * L[3] + L[3].z * L[2];\n\t\tL[2] = -L[2].z * L[1] + L[1].z * L[2];\n\t} else if ( config == 12 ) {\n\t\tn = 4;\n\t\tL[1] = -L[1].z * L[2] + L[2].z * L[1];\n\t\tL[0] = -L[0].z * L[3] + L[3].z * L[0];\n\t} else if ( config == 13 ) {\n\t\tn = 5;\n\t\tL[4] = L[3];\n\t\tL[3] = L[2];\n\t\tL[2] = -L[1].z * L[2] + L[2].z * L[1];\n\t\tL[1] = -L[1].z * L[0] + L[0].z * L[1];\n\t} else if ( config == 14 ) {\n\t\tn = 5;\n\t\tL[4] = -L[0].z * L[3] + L[3].z * L[0];\n\t\tL[0] = -L[0].z * L[1] + L[1].z * L[0];\n\t} else if ( config == 15 ) {\n\t\tn = 4;\n\t}\n\tif ( n == 3 )\n\t\tL[3] = L[0];\n\tif ( n == 4 )\n\t\tL[4] = L[0];\n}\nfloat integrateLtcBrdfOverRectEdge( vec3 v1, vec3 v2 ) {\n\tfloat cosTheta = dot( v1, v2 );\n\tfloat theta = acos( cosTheta );\n\tfloat res = cross( v1, v2 ).z * ( ( theta > 0.001 ) ? theta / sin( theta ) : 1.0 );\n\treturn res;\n}\nvoid initRectPoints( const in vec3 pos, const in vec3 halfWidth, const in vec3 halfHeight, out vec3 rectPoints[4] ) {\n\trectPoints[0] = pos - halfWidth - halfHeight;\n\trectPoints[1] = pos + halfWidth - halfHeight;\n\trectPoints[2] = pos + halfWidth + halfHeight;\n\trectPoints[3] = pos - halfWidth + halfHeight;\n}\nvec3 integrateLtcBrdfOverRect( const in GeometricContext geometry, const in mat3 brdfMat, const in vec3 rectPoints[4] ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 P = geometry.position;\n\tvec3 T1, T2;\n\tT1 = normalize(V - N * dot( V, N ));\n\tT2 = - cross( N, T1 );\n\tmat3 brdfWrtSurface = brdfMat * transpose( mat3( T1, T2, N ) );\n\tvec3 clippedRect[5];\n\tclippedRect[0] = brdfWrtSurface * ( rectPoints[0] - P );\n\tclippedRect[1] = brdfWrtSurface * ( rectPoints[1] - P );\n\tclippedRect[2] = brdfWrtSurface * ( rectPoints[2] - P );\n\tclippedRect[3] = brdfWrtSurface * ( rectPoints[3] - P );\n\tint n;\n\tclipQuadToHorizon(clippedRect, n);\n\tif ( n == 0 )\n\t\treturn vec3( 0, 0, 0 );\n\tclippedRect[0] = normalize( clippedRect[0] );\n\tclippedRect[1] = normalize( clippedRect[1] );\n\tclippedRect[2] = normalize( clippedRect[2] );\n\tclippedRect[3] = normalize( clippedRect[3] );\n\tclippedRect[4] = normalize( clippedRect[4] );\n\tfloat sum = 0.0;\n\tsum += integrateLtcBrdfOverRectEdge( clippedRect[0], clippedRect[1] );\n\tsum += integrateLtcBrdfOverRectEdge( clippedRect[1], clippedRect[2] );\n\tsum += integrateLtcBrdfOverRectEdge( clippedRect[2], clippedRect[3] );\n\tif (n >= 4)\n\t\tsum += integrateLtcBrdfOverRectEdge( clippedRect[3], clippedRect[4] );\n\tif (n == 5)\n\t\tsum += integrateLtcBrdfOverRectEdge( clippedRect[4], clippedRect[0] );\n\tsum = max( 0.0, sum );\n\tvec3 Lo_i = vec3( sum, sum, sum );\n\treturn Lo_i;\n}\nvec3 Rect_Area_Light_Specular_Reflectance(\n\t\tconst in GeometricContext geometry,\n\t\tconst in vec3 lightPos, const in vec3 lightHalfWidth, const in vec3 lightHalfHeight,\n\t\tconst in float roughness,\n\t\tconst in sampler2D ltcMat, const in sampler2D ltcMag ) {\n\tvec3 rectPoints[4];\n\tinitRectPoints( lightPos, lightHalfWidth, lightHalfHeight, rectPoints );\n\tvec2 uv = ltcTextureCoords( geometry, roughness );\n\tvec4 brdfLtcApproxParams, t;\n\tbrdfLtcApproxParams = texture2D( ltcMat, uv );\n\tt = texture2D( ltcMat, uv );\n\tfloat brdfLtcScalar = texture2D( ltcMag, uv ).a;\n\tmat3 brdfLtcApproxMat = mat3(\n\t\tvec3(   1,   0, t.y ),\n\t\tvec3(   0, t.z,   0 ),\n\t\tvec3( t.w,   0, t.x )\n\t);\n\tvec3 specularReflectance = integrateLtcBrdfOverRect( geometry, brdfLtcApproxMat, rectPoints );\n\tspecularReflectance *= brdfLtcScalar;\n\treturn specularReflectance;\n}\nvec3 Rect_Area_Light_Diffuse_Reflectance(\n\t\tconst in GeometricContext geometry,\n\t\tconst in vec3 lightPos, const in vec3 lightHalfWidth, const in vec3 lightHalfHeight ) {\n\tvec3 rectPoints[4];\n\tinitRectPoints( lightPos, lightHalfWidth, lightHalfHeight, rectPoints );\n\tmat3 diffuseBrdfMat = mat3(1);\n\tvec3 diffuseReflectance = integrateLtcBrdfOverRect( geometry, diffuseBrdfMat, rectPoints );\n\treturn diffuseReflectance;\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",
bumpmap_pars_fragment:"#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n",
clipping_planes_fragment:"#if NUM_CLIPPING_PLANES > 0\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; ++ i ) {\n\t\tvec4 plane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t\t\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; ++ i ) {\n\t\t\tvec4 plane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t\n\t#endif\n#endif\n",
clipping_planes_pars_fragment:"#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n",clipping_planes_pars_vertex:"#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvarying vec3 vViewPosition;\n#endif\n",clipping_planes_vertex:"#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n",
color_fragment:"#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",color_pars_fragment:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n",color_pars_vertex:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",color_vertex:"#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",common:"#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transpose( const in mat3 v ) {\n\tmat3 tmp;\n\ttmp[0] = vec3(v[0].x, v[1].x, v[2].x);\n\ttmp[1] = vec3(v[0].y, v[1].y, v[2].y);\n\ttmp[2] = vec3(v[0].z, v[1].z, v[2].z);\n\treturn tmp;\n}\n",
cube_uv_reflection_fragment:"#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n",
defaultnormal_vertex:"#ifdef FLIP_SIDED\n\tobjectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;\n",displacementmap_pars_vertex:"#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n",displacementmap_vertex:"#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",emissivemap_fragment:"#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n",
emissivemap_pars_fragment:"#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n",encodings_fragment:"  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",encodings_pars_fragment:"\nvec4 LinearToLinear( in vec4 value ) {\n  return value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n  return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n  return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n  return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n  float maxComponent = max( max( value.r, value.g ), value.b );\n  float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n  return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n  return vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n  float maxRGB = max( value.x, max( value.g, value.b ) );\n  float M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n  M            = ceil( M * 255.0 ) / 255.0;\n  return vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n    return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n    float maxRGB = max( value.x, max( value.g, value.b ) );\n    float D      = max( maxRange / maxRGB, 1.0 );\n    D            = min( floor( D ) / 255.0, 1.0 );\n    return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n  vec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n  Xp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n  vec4 vResult;\n  vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n  float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n  vResult.w = fract(Le);\n  vResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n  return vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n  float Le = value.z * 255.0 + value.w;\n  vec3 Xp_Y_XYZp;\n  Xp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n  Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n  Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n  vec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n  return vec4( max(vRGB, 0.0), 1.0 );\n}\n",
envmap_fragment:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\tvec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n",
envmap_pars_fragment:"#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntenstiy;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n",
envmap_pars_vertex:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n",envmap_vertex:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n",
fog_fragment:"#ifdef USE_FOG\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\t#else\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\t#endif\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * depth * depth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n",fog_pars_fragment:"#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
gradientmap_pars_fragment:"#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif\n",lightmap_fragment:"#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",
lightmap_pars_fragment:"#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",lights_lambert_vertex:"vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n",
lights_pars:"uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltcMat;\tuniform sampler2D ltcMag;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\t#include <normal_flip>\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = flipNormal * vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = flipNormal * vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\t#include <normal_flip>\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n",
lights_phong_fragment:"BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",lights_phong_pars_fragment:"varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\n#if NUM_RECT_AREA_LIGHTS > 0\n    void RE_Direct_RectArea_BlinnPhong( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n        vec3 matDiffColor = material.diffuseColor;\n        vec3 matSpecColor = material.specularColor;\n        vec3 lightColor   = rectAreaLight.color;\n        float roughness = BlinnExponentToGGXRoughness( material.specularShininess );\n        vec3 spec = Rect_Area_Light_Specular_Reflectance(\n                geometry,\n                rectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight,\n                roughness,\n                ltcMat, ltcMag );\n        vec3 diff = Rect_Area_Light_Diffuse_Reflectance(\n                geometry,\n                rectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight );\n        reflectedLight.directSpecular += lightColor * matSpecColor * spec / PI2;\n        reflectedLight.directDiffuse  += lightColor * matDiffColor * diff / PI2;\n    }\n#endif\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n",
lights_physical_fragment:"PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n",
lights_physical_pars_fragment:"struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n    void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n        vec3 matDiffColor = material.diffuseColor;\n        vec3 matSpecColor = material.specularColor;\n        vec3 lightColor   = rectAreaLight.color;\n        float roughness = material.specularRoughness;\n        vec3 spec = Rect_Area_Light_Specular_Reflectance(\n                geometry,\n                rectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight,\n                roughness,\n                ltcMat, ltcMag );\n        vec3 diff = Rect_Area_Light_Diffuse_Reflectance(\n                geometry,\n                rectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight );\n        reflectedLight.directSpecular += lightColor * matSpecColor * spec;\n        reflectedLight.directDiffuse  += lightColor * matDiffColor * diff;\n    }\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",
lights_template:"\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t \tirradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n\t#endif\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tvec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n\t#ifndef STANDARD\n\t\tvec3 clearCoatRadiance = getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\n\t#else\n\t\tvec3 clearCoatRadiance = vec3( 0.0 );\n\t#endif\n\t\t\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n",
logdepthbuf_fragment:"#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n#endif",logdepthbuf_pars_fragment:"#ifdef USE_LOGDEPTHBUF\n\tuniform float logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n#endif\n",logdepthbuf_pars_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n\tuniform float logDepthBufFC;\n#endif",logdepthbuf_vertex:"#ifdef USE_LOGDEPTHBUF\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\t#endif\n#endif\n",
map_fragment:"#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n",map_pars_fragment:"#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n",map_particle_fragment:"#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n",map_particle_pars_fragment:"#ifdef USE_MAP\n\tuniform vec4 offsetRepeat;\n\tuniform sampler2D map;\n#endif\n",
metalnessmap_fragment:"float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.r;\n#endif\n",metalnessmap_pars_fragment:"#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",morphnormal_vertex:"#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n",
morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",morphtarget_vertex:"#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n",
normal_flip:"#ifdef DOUBLE_SIDED\n\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n#else\n\tfloat flipNormal = 1.0;\n#endif\n",normal_fragment:"#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal ) * flipNormal;\n#endif\n#ifdef USE_NORMALMAP\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",
normalmap_pars_fragment:"#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif\n",
packing:"vec3 packNormalToRGB( const in vec3 normal ) {\n  return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n  return 1.0 - 2.0 * rgb.xyz;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n  return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n  return linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n  return (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n  return ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",
premultiplied_alpha_fragment:"#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n",project_vertex:"#ifdef USE_SKINNING\n\tvec4 mvPosition = modelViewMatrix * skinned;\n#else\n\tvec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;\n",roughnessmap_fragment:"float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.r;\n#endif\n",
roughnessmap_pars_fragment:"#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",shadowmap_pars_fragment:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n    #if NUM_RECT_AREA_LIGHTS > 0\n    #endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn 1.0;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\tfloat dp = ( length( lightToPosition ) - shadowBias ) / 1000.0;\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n",
shadowmap_pars_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n    #if NUM_RECT_AREA_LIGHTS > 0\n    #endif\n#endif\n",
shadowmap_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n    #if NUM_RECT_AREA_LIGHTS > 0\n    #endif\n#endif\n",
shadowmask_pars_fragment:"float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_RECT_AREA_LIGHTS > 0\n\t#endif\n\t#endif\n\treturn shadow;\n}\n",
skinbase_vertex:"#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",skinning_pars_vertex:"#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureWidth;\n\t\tuniform int boneTextureHeight;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureWidth ) );\n\t\t\tfloat y = floor( j / float( boneTextureWidth ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureWidth );\n\t\t\tfloat dy = 1.0 / float( boneTextureHeight );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n",
skinning_vertex:"#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n#endif\n",skinnormal_vertex:"#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n",
specularmap_fragment:"float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",specularmap_pars_fragment:"#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",tonemapping_fragment:"#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n",tonemapping_pars_fragment:"#define saturate(a) clamp( a, 0.0, 1.0 )\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n  return toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  return saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  color = max( vec3( 0.0 ), color - 0.004 );\n  return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n",
uv_pars_fragment:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif",uv_pars_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n#endif\n",
uv_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif",uv2_pars_fragment:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",uv2_pars_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",
uv2_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",worldpos_vertex:"#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( PHYSICAL ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\t#ifdef USE_SKINNING\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\t#else\n\t\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n\t#endif\n#endif\n",cube_frag:"uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n",
cube_vert:"varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",depth_frag:"#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n",
depth_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
distanceRGBA_frag:"uniform vec3 lightPos;\nvarying vec4 vWorldPosition;\n#include <common>\n#include <packing>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tgl_FragColor = packDepthToRGBA( length( vWorldPosition.xyz - lightPos.xyz ) / 1000.0 );\n}\n",distanceRGBA_vert:"varying vec4 vWorldPosition;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition;\n}\n",
equirect_frag:"uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n",equirect_vert:"varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",
linedashed_frag:"uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
linedashed_vert:"uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",meshbasic_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
meshbasic_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n}\n",
meshlambert_frag:"uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
meshlambert_vert:"#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n}\n",
meshphong_frag:"#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
meshphong_vert:"#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n}\n",
meshphysical_frag:"#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nuniform float envMapIntensity;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
meshphysical_vert:"#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n",
normal_frag:"uniform float opacity;\nvarying vec3 vNormal;\n#include <common>\n#include <packing>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tgl_FragColor = vec4( packNormalToRGB( vNormal ), opacity );\n\t#include <logdepthbuf_fragment>\n}\n",normal_vert:"varying vec3 vNormal;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvNormal = normalize( normalMatrix * normal );\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
points_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
points_vert:"uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n",
shadow_frag:"uniform float opacity;\n#include <common>\n#include <packing>\n#include <bsdfs>\n#include <lights_pars>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( 0.0, 0.0, 0.0, opacity * ( 1.0  - getShadowMask() ) );\n}\n",shadow_vert:"#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n"};G.prototype={constructor:G,
isColor:!0,r:1,g:1,b:1,set:function(a){a&&a.isColor?this.copy(a):"number"===typeof a?this.setHex(a):"string"===typeof a&&this.setStyle(a);return this},setScalar:function(a){this.b=this.g=this.r=a;return this},setHex:function(a){a=Math.floor(a);this.r=(a>>16&255)/255;this.g=(a>>8&255)/255;this.b=(a&255)/255;return this},setRGB:function(a,b,c){this.r=a;this.g=b;this.b=c;return this},setHSL:function(){function a(a,c,d){0>d&&(d+=1);1<d&&--d;return d<1/6?a+6*(c-a)*d:.5>d?c:d<2/3?a+6*(c-a)*(2/3-d):a}return function(b,
c,d){b=S.euclideanModulo(b,1);c=S.clamp(c,0,1);d=S.clamp(d,0,1);0===c?this.r=this.g=this.b=d:(c=.5>=d?d*(1+c):d+c-d*c,d=2*d-c,this.r=a(d,c,b+1/3),this.g=a(d,c,b),this.b=a(d,c,b-1/3));return this}}(),setStyle:function(a){function b(b){void 0!==b&&1>parseFloat(b)&&console.warn("THREE.Color: Alpha component of "+a+" will be ignored.")}var c;if(c=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(a)){var d=c[2];switch(c[1]){case "rgb":case "rgba":if(c=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))return this.r=
Math.min(255,parseInt(c[1],10))/255,this.g=Math.min(255,parseInt(c[2],10))/255,this.b=Math.min(255,parseInt(c[3],10))/255,b(c[5]),this;if(c=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))return this.r=Math.min(100,parseInt(c[1],10))/100,this.g=Math.min(100,parseInt(c[2],10))/100,this.b=Math.min(100,parseInt(c[3],10))/100,b(c[5]),this;break;case "hsl":case "hsla":if(c=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)){var d=parseFloat(c[1])/
360,e=parseInt(c[2],10)/100,f=parseInt(c[3],10)/100;b(c[5]);return this.setHSL(d,e,f)}}}else if(c=/^\#([A-Fa-f0-9]+)$/.exec(a)){c=c[1];d=c.length;if(3===d)return this.r=parseInt(c.charAt(0)+c.charAt(0),16)/255,this.g=parseInt(c.charAt(1)+c.charAt(1),16)/255,this.b=parseInt(c.charAt(2)+c.charAt(2),16)/255,this;if(6===d)return this.r=parseInt(c.charAt(0)+c.charAt(1),16)/255,this.g=parseInt(c.charAt(2)+c.charAt(3),16)/255,this.b=parseInt(c.charAt(4)+c.charAt(5),16)/255,this}a&&0<a.length&&(c=Jf[a],void 0!==
c?this.setHex(c):console.warn("THREE.Color: Unknown color "+a));return this},clone:function(){return new this.constructor(this.r,this.g,this.b)},copy:function(a){this.r=a.r;this.g=a.g;this.b=a.b;return this},copyGammaToLinear:function(a,b){void 0===b&&(b=2);this.r=Math.pow(a.r,b);this.g=Math.pow(a.g,b);this.b=Math.pow(a.b,b);return this},copyLinearToGamma:function(a,b){void 0===b&&(b=2);var c=0<b?1/b:1;this.r=Math.pow(a.r,c);this.g=Math.pow(a.g,c);this.b=Math.pow(a.b,c);return this},convertGammaToLinear:function(){var a=
this.r,b=this.g,c=this.b;this.r=a*a;this.g=b*b;this.b=c*c;return this},convertLinearToGamma:function(){this.r=Math.sqrt(this.r);this.g=Math.sqrt(this.g);this.b=Math.sqrt(this.b);return this},getHex:function(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(a){a=a||{h:0,s:0,l:0};var b=this.r,c=this.g,d=this.b,e=Math.max(b,c,d),f=Math.min(b,c,d),g,h=(f+e)/2;if(f===e)f=g=0;else{var k=e-f,f=.5>=h?k/(e+f):
k/(2-e-f);switch(e){case b:g=(c-d)/k+(c<d?6:0);break;case c:g=(d-b)/k+2;break;case d:g=(b-c)/k+4}g/=6}a.h=g;a.s=f;a.l=h;return a},getStyle:function(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},offsetHSL:function(a,b,c){var d=this.getHSL();d.h+=a;d.s+=b;d.l+=c;this.setHSL(d.h,d.s,d.l);return this},add:function(a){this.r+=a.r;this.g+=a.g;this.b+=a.b;return this},addColors:function(a,b){this.r=a.r+b.r;this.g=a.g+b.g;this.b=a.b+b.b;return this},addScalar:function(a){this.r+=
a;this.g+=a;this.b+=a;return this},sub:function(a){this.r=Math.max(0,this.r-a.r);this.g=Math.max(0,this.g-a.g);this.b=Math.max(0,this.b-a.b);return this},multiply:function(a){this.r*=a.r;this.g*=a.g;this.b*=a.b;return this},multiplyScalar:function(a){this.r*=a;this.g*=a;this.b*=a;return this},lerp:function(a,b){this.r+=(a.r-this.r)*b;this.g+=(a.g-this.g)*b;this.b+=(a.b-this.b)*b;return this},equals:function(a){return a.r===this.r&&a.g===this.g&&a.b===this.b},fromArray:function(a,b){void 0===b&&(b=
0);this.r=a[b];this.g=a[b+1];this.b=a[b+2];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.r;a[b+1]=this.g;a[b+2]=this.b;return a},toJSON:function(){return this.getHex()}};var Jf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,
cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,
floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,
lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,
moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,
silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};gb.prototype=Object.create(da.prototype);gb.prototype.constructor=gb;gb.prototype.isDataTexture=!0;var X={common:{diffuse:{value:new G(15658734)},opacity:{value:1},map:{value:null},offsetRepeat:{value:new fa(0,
0,1,1)},specularMap:{value:null},alphaMap:{value:null},envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new B(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},
roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:2.5E-4},fogNear:{value:1},fogFar:{value:2E3},fogColor:{value:new G(16777215)}},lights:{ambientLightColor:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},
direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},
width:{},height:{}}}},points:{diffuse:{value:new G(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},offsetRepeat:{value:new fa(0,0,1,1)}}},Hb={basic:{uniforms:Object.assign({},X.common,X.aomap,X.lightmap,X.fog),vertexShader:Z.meshbasic_vert,fragmentShader:Z.meshbasic_frag},lambert:{uniforms:Object.assign({},X.common,X.aomap,X.lightmap,X.emissivemap,X.fog,X.lights,{emissive:{value:new G(0)}}),vertexShader:Z.meshlambert_vert,fragmentShader:Z.meshlambert_frag},phong:{uniforms:Object.assign({},
X.common,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.gradientmap,X.fog,X.lights,{emissive:{value:new G(0)},specular:{value:new G(1118481)},shininess:{value:30}}),vertexShader:Z.meshphong_vert,fragmentShader:Z.meshphong_frag},standard:{uniforms:Object.assign({},X.common,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.roughnessmap,X.metalnessmap,X.fog,X.lights,{emissive:{value:new G(0)},roughness:{value:.5},metalness:{value:0},envMapIntensity:{value:1}}),
vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag},points:{uniforms:Object.assign({},X.points,X.fog),vertexShader:Z.points_vert,fragmentShader:Z.points_frag},dashed:{uniforms:Object.assign({},X.common,X.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}),vertexShader:Z.linedashed_vert,fragmentShader:Z.linedashed_frag},depth:{uniforms:Object.assign({},X.common,X.displacementmap),vertexShader:Z.depth_vert,fragmentShader:Z.depth_frag},normal:{uniforms:{opacity:{value:1}},
vertexShader:Z.normal_vert,fragmentShader:Z.normal_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Z.cube_vert,fragmentShader:Z.cube_frag},equirect:{uniforms:{tEquirect:{value:null},tFlip:{value:-1}},vertexShader:Z.equirect_vert,fragmentShader:Z.equirect_frag},distanceRGBA:{uniforms:{lightPos:{value:new q}},vertexShader:Z.distanceRGBA_vert,fragmentShader:Z.distanceRGBA_frag}};Hb.physical={uniforms:Object.assign({},Hb.standard.uniforms,{clearCoat:{value:0},
clearCoatRoughness:{value:0}}),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag};pc.prototype={constructor:pc,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new B;return function(b,c){var d=a.copy(c).multiplyScalar(.5);this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),clone:function(){return(new this.constructor).copy(this)},
copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=Infinity;this.max.x=this.max.y=-Infinity;return this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},getCenter:function(a){a=a||new B;return this.isEmpty()?a.set(0,0):a.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(a){a=a||new B;return this.isEmpty()?a.set(0,0):a.subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);
return this},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y?!0:!1},getParameter:function(a,b){return(b||new B).set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-
this.min.y))},intersectsBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y?!1:!0},clampPoint:function(a,b){return(b||new B).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new B;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},translate:function(a){this.min.add(a);
this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)}};var nf=0;U.prototype={constructor:U,isMaterial:!0,get needsUpdate(){return this._needsUpdate},set needsUpdate(a){!0===a&&this.update();this._needsUpdate=a},setValues:function(a){if(void 0!==a)for(var b in a){var c=a[b];if(void 0===c)console.warn("THREE.Material: '"+b+"' parameter is undefined.");else{var d=this[b];void 0===d?console.warn("THREE."+this.type+": '"+b+"' is not a property of this material."):
d&&d.isColor?d.set(c):d&&d.isVector3&&c&&c.isVector3?d.copy(c):this[b]="overdraw"===b?Number(c):c}}},toJSON:function(a){function b(a){var b=[],c;for(c in a){var d=a[c];delete d.metadata;b.push(d)}return b}var c=void 0===a;c&&(a={textures:{},images:{}});var d={metadata:{version:4.4,type:"Material",generator:"Material.toJSON"}};d.uuid=this.uuid;d.type=this.type;""!==this.name&&(d.name=this.name);this.color&&this.color.isColor&&(d.color=this.color.getHex());void 0!==this.roughness&&(d.roughness=this.roughness);
void 0!==this.metalness&&(d.metalness=this.metalness);this.emissive&&this.emissive.isColor&&(d.emissive=this.emissive.getHex());this.specular&&this.specular.isColor&&(d.specular=this.specular.getHex());void 0!==this.shininess&&(d.shininess=this.shininess);void 0!==this.clearCoat&&(d.clearCoat=this.clearCoat);void 0!==this.clearCoatRoughness&&(d.clearCoatRoughness=this.clearCoatRoughness);this.map&&this.map.isTexture&&(d.map=this.map.toJSON(a).uuid);this.alphaMap&&this.alphaMap.isTexture&&(d.alphaMap=
this.alphaMap.toJSON(a).uuid);this.lightMap&&this.lightMap.isTexture&&(d.lightMap=this.lightMap.toJSON(a).uuid);this.bumpMap&&this.bumpMap.isTexture&&(d.bumpMap=this.bumpMap.toJSON(a).uuid,d.bumpScale=this.bumpScale);this.normalMap&&this.normalMap.isTexture&&(d.normalMap=this.normalMap.toJSON(a).uuid,d.normalScale=this.normalScale.toArray());this.displacementMap&&this.displacementMap.isTexture&&(d.displacementMap=this.displacementMap.toJSON(a).uuid,d.displacementScale=this.displacementScale,d.displacementBias=
this.displacementBias);this.roughnessMap&&this.roughnessMap.isTexture&&(d.roughnessMap=this.roughnessMap.toJSON(a).uuid);this.metalnessMap&&this.metalnessMap.isTexture&&(d.metalnessMap=this.metalnessMap.toJSON(a).uuid);this.emissiveMap&&this.emissiveMap.isTexture&&(d.emissiveMap=this.emissiveMap.toJSON(a).uuid);this.specularMap&&this.specularMap.isTexture&&(d.specularMap=this.specularMap.toJSON(a).uuid);this.envMap&&this.envMap.isTexture&&(d.envMap=this.envMap.toJSON(a).uuid,d.reflectivity=this.reflectivity);
this.gradientMap&&this.gradientMap.isTexture&&(d.gradientMap=this.gradientMap.toJSON(a).uuid);void 0!==this.size&&(d.size=this.size);void 0!==this.sizeAttenuation&&(d.sizeAttenuation=this.sizeAttenuation);1!==this.blending&&(d.blending=this.blending);2!==this.shading&&(d.shading=this.shading);0!==this.side&&(d.side=this.side);0!==this.vertexColors&&(d.vertexColors=this.vertexColors);1>this.opacity&&(d.opacity=this.opacity);!0===this.transparent&&(d.transparent=this.transparent);d.depthFunc=this.depthFunc;
d.depthTest=this.depthTest;d.depthWrite=this.depthWrite;0<this.alphaTest&&(d.alphaTest=this.alphaTest);!0===this.premultipliedAlpha&&(d.premultipliedAlpha=this.premultipliedAlpha);!0===this.wireframe&&(d.wireframe=this.wireframe);1<this.wireframeLinewidth&&(d.wireframeLinewidth=this.wireframeLinewidth);"round"!==this.wireframeLinecap&&(d.wireframeLinecap=this.wireframeLinecap);"round"!==this.wireframeLinejoin&&(d.wireframeLinejoin=this.wireframeLinejoin);d.skinning=this.skinning;d.morphTargets=this.morphTargets;
c&&(c=b(a.textures),a=b(a.images),0<c.length&&(d.textures=c),0<a.length&&(d.images=a));return d},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.name=a.name;this.fog=a.fog;this.lights=a.lights;this.blending=a.blending;this.side=a.side;this.shading=a.shading;this.vertexColors=a.vertexColors;this.opacity=a.opacity;this.transparent=a.transparent;this.blendSrc=a.blendSrc;this.blendDst=a.blendDst;this.blendEquation=a.blendEquation;this.blendSrcAlpha=a.blendSrcAlpha;this.blendDstAlpha=
a.blendDstAlpha;this.blendEquationAlpha=a.blendEquationAlpha;this.depthFunc=a.depthFunc;this.depthTest=a.depthTest;this.depthWrite=a.depthWrite;this.colorWrite=a.colorWrite;this.precision=a.precision;this.polygonOffset=a.polygonOffset;this.polygonOffsetFactor=a.polygonOffsetFactor;this.polygonOffsetUnits=a.polygonOffsetUnits;this.alphaTest=a.alphaTest;this.premultipliedAlpha=a.premultipliedAlpha;this.overdraw=a.overdraw;this.visible=a.visible;this.clipShadows=a.clipShadows;this.clipIntersection=a.clipIntersection;
a=a.clippingPlanes;var b=null;if(null!==a)for(var c=a.length,b=Array(c),d=0;d!==c;++d)b[d]=a[d].clone();this.clippingPlanes=b;return this},update:function(){this.dispatchEvent({type:"update"})},dispose:function(){this.dispatchEvent({type:"dispose"})}};Object.assign(U.prototype,na.prototype);Ja.prototype=Object.create(U.prototype);Ja.prototype.constructor=Ja;Ja.prototype.isShaderMaterial=!0;Ja.prototype.copy=function(a){U.prototype.copy.call(this,a);this.fragmentShader=a.fragmentShader;this.vertexShader=
a.vertexShader;this.uniforms=Object.assign({},a.uniforms);this.defines=a.defines;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.lights=a.lights;this.clipping=a.clipping;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;this.extensions=a.extensions;return this};Ja.prototype.toJSON=function(a){a=U.prototype.toJSON.call(this,a);a.uniforms=this.uniforms;a.vertexShader=this.vertexShader;a.fragmentShader=this.fragmentShader;return a};
cb.prototype=Object.create(U.prototype);cb.prototype.constructor=cb;cb.prototype.isMeshDepthMaterial=!0;cb.prototype.copy=function(a){U.prototype.copy.call(this,a);this.depthPacking=a.depthPacking;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.map=a.map;this.alphaMap=a.alphaMap;this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;return this};
za.prototype={constructor:za,isBox3:!0,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromArray:function(a){for(var b=Infinity,c=Infinity,d=Infinity,e=-Infinity,f=-Infinity,g=-Infinity,h=0,k=a.length;h<k;h+=3){var m=a[h],l=a[h+1],p=a[h+2];m<b&&(b=m);l<c&&(c=l);p<d&&(d=p);m>e&&(e=m);l>f&&(f=l);p>g&&(g=p)}this.min.set(b,c,d);this.max.set(e,f,g)},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=
new q;return function(b,c){var d=a.copy(c).multiplyScalar(.5);this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),setFromObject:function(){var a=new q;return function(b){var c=this;b.updateMatrixWorld(!0);this.makeEmpty();b.traverse(function(b){var e=b.geometry;if(void 0!==e)if(e.isGeometry)for(var e=e.vertices,f=0,g=e.length;f<g;f++)a.copy(e[f]),a.applyMatrix4(b.matrixWorld),c.expandByPoint(a);else if(e.isBufferGeometry&&(g=e.attributes.position,void 0!==g)){var h;g.isInterleavedBufferAttribute?
(e=g.data.array,f=g.offset,h=g.data.stride):(e=g.array,f=0,h=3);for(g=e.length;f<g;f+=h)a.fromArray(e,f),a.applyMatrix4(b.matrixWorld),c.expandByPoint(a)}});return this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=this.min.z=Infinity;this.max.x=this.max.y=this.max.z=-Infinity;return this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<
this.min.z},getCenter:function(a){a=a||new q;return this.isEmpty()?a.set(0,0,0):a.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(a){a=a||new q;return this.isEmpty()?a.set(0,0,0):a.subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||
a.x>this.max.x||a.y<this.min.y||a.y>this.max.y||a.z<this.min.z||a.z>this.max.z?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z?!0:!1},getParameter:function(a,b){return(b||new q).set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z))},intersectsBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<
this.min.y||a.min.y>this.max.y||a.max.z<this.min.z||a.min.z>this.max.z?!1:!0},intersectsSphere:function(){var a;return function(b){void 0===a&&(a=new q);this.clampPoint(b.center,a);return a.distanceToSquared(b.center)<=b.radius*b.radius}}(),intersectsPlane:function(a){var b,c;0<a.normal.x?(b=a.normal.x*this.min.x,c=a.normal.x*this.max.x):(b=a.normal.x*this.max.x,c=a.normal.x*this.min.x);0<a.normal.y?(b+=a.normal.y*this.min.y,c+=a.normal.y*this.max.y):(b+=a.normal.y*this.max.y,c+=a.normal.y*this.min.y);
0<a.normal.z?(b+=a.normal.z*this.min.z,c+=a.normal.z*this.max.z):(b+=a.normal.z*this.max.z,c+=a.normal.z*this.min.z);return b<=a.constant&&c>=a.constant},clampPoint:function(a,b){return(b||new q).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new q;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),getBoundingSphere:function(){var a=new q;return function(b){b=b||new Ha;this.getCenter(b.center);b.radius=.5*this.getSize(a).length();return b}}(),intersect:function(a){this.min.max(a.min);
this.max.min(a.max);this.isEmpty()&&this.makeEmpty();return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},applyMatrix4:function(){var a=[new q,new q,new q,new q,new q,new q,new q,new q];return function(b){if(this.isEmpty())return this;a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(b);a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(b);a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(b);a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(b);
a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(b);a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(b);a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(b);a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(b);this.setFromPoints(a);return this}}(),translate:function(a){this.min.add(a);this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)}};Ha.prototype={constructor:Ha,set:function(a,b){this.center.copy(a);this.radius=b;return this},
setFromPoints:function(){var a=new za;return function(b,c){var d=this.center;void 0!==c?d.copy(c):a.setFromPoints(b).getCenter(d);for(var e=0,f=0,g=b.length;f<g;f++)e=Math.max(e,d.distanceToSquared(b[f]));this.radius=Math.sqrt(e);return this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.center.copy(a.center);this.radius=a.radius;return this},empty:function(){return 0>=this.radius},containsPoint:function(a){return a.distanceToSquared(this.center)<=this.radius*
this.radius},distanceToPoint:function(a){return a.distanceTo(this.center)-this.radius},intersectsSphere:function(a){var b=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=b*b},intersectsBox:function(a){return a.intersectsSphere(this)},intersectsPlane:function(a){return Math.abs(this.center.dot(a.normal)-a.constant)<=this.radius},clampPoint:function(a,b){var c=this.center.distanceToSquared(a),d=b||new q;d.copy(a);c>this.radius*this.radius&&(d.sub(this.center).normalize(),d.multiplyScalar(this.radius).add(this.center));
return d},getBoundingBox:function(a){a=a||new za;a.set(this.center,this.center);a.expandByScalar(this.radius);return a},applyMatrix4:function(a){this.center.applyMatrix4(a);this.radius*=a.getMaxScaleOnAxis();return this},translate:function(a){this.center.add(a);return this},equals:function(a){return a.center.equals(this.center)&&a.radius===this.radius}};Aa.prototype={constructor:Aa,isMatrix3:!0,set:function(a,b,c,d,e,f,g,h,k){var m=this.elements;m[0]=a;m[1]=d;m[2]=g;m[3]=b;m[4]=e;m[5]=h;m[6]=c;m[7]=
f;m[8]=k;return this},identity:function(){this.set(1,0,0,0,1,0,0,0,1);return this},clone:function(){return(new this.constructor).fromArray(this.elements)},copy:function(a){a=a.elements;this.set(a[0],a[3],a[6],a[1],a[4],a[7],a[2],a[5],a[8]);return this},setFromMatrix4:function(a){a=a.elements;this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]);return this},applyToVector3Array:function(){var a;return function(b,c,d){void 0===a&&(a=new q);void 0===c&&(c=0);void 0===d&&(d=b.length);for(var e=0;e<
d;e+=3,c+=3)a.fromArray(b,c),a.applyMatrix3(this),a.toArray(b,c);return b}}(),applyToBuffer:function(){var a;return function(b,c,d){void 0===a&&(a=new q);void 0===c&&(c=0);void 0===d&&(d=b.length/b.itemSize);for(var e=0;e<d;e++,c++)a.x=b.getX(c),a.y=b.getY(c),a.z=b.getZ(c),a.applyMatrix3(this),b.setXYZ(c,a.x,a.y,a.z);return b}}(),multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[3]*=a;b[6]*=a;b[1]*=a;b[4]*=a;b[7]*=a;b[2]*=a;b[5]*=a;b[8]*=a;return this},determinant:function(){var a=this.elements,
b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],g=a[5],h=a[6],k=a[7],a=a[8];return b*f*a-b*g*k-c*e*a+c*g*h+d*e*k-d*f*h},getInverse:function(a,b){a&&a.isMatrix4&&console.error("THREE.Matrix3.getInverse no longer takes a Matrix4 argument.");var c=a.elements,d=this.elements,e=c[0],f=c[1],g=c[2],h=c[3],k=c[4],m=c[5],l=c[6],p=c[7],c=c[8],n=c*k-m*p,r=m*l-c*h,q=p*h-k*l,u=e*n+f*r+g*q;if(0===u){if(!0===b)throw Error("THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0");console.warn("THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0");
return this.identity()}u=1/u;d[0]=n*u;d[1]=(g*p-c*f)*u;d[2]=(m*f-g*k)*u;d[3]=r*u;d[4]=(c*e-g*l)*u;d[5]=(g*h-m*e)*u;d[6]=q*u;d[7]=(f*l-p*e)*u;d[8]=(k*e-f*h)*u;return this},transpose:function(){var a,b=this.elements;a=b[1];b[1]=b[3];b[3]=a;a=b[2];b[2]=b[6];b[6]=a;a=b[5];b[5]=b[7];b[7]=a;return this},getNormalMatrix:function(a){return this.setFromMatrix4(a).getInverse(this).transpose()},transposeIntoArray:function(a){var b=this.elements;a[0]=b[0];a[1]=b[3];a[2]=b[6];a[3]=b[1];a[4]=b[4];a[5]=b[7];a[6]=
b[2];a[7]=b[5];a[8]=b[8];return this},fromArray:function(a,b){void 0===b&&(b=0);for(var c=0;9>c;c++)this.elements[c]=a[c+b];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];return a}};la.prototype={constructor:la,set:function(a,b){this.normal.copy(a);this.constant=b;return this},setComponents:function(a,b,c,d){this.normal.set(a,b,c);this.constant=d;return this},
setFromNormalAndCoplanarPoint:function(a,b){this.normal.copy(a);this.constant=-b.dot(this.normal);return this},setFromCoplanarPoints:function(){var a=new q,b=new q;return function(c,d,e){d=a.subVectors(e,d).cross(b.subVectors(c,d)).normalize();this.setFromNormalAndCoplanarPoint(d,c);return this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.normal.copy(a.normal);this.constant=a.constant;return this},normalize:function(){var a=1/this.normal.length();this.normal.multiplyScalar(a);
this.constant*=a;return this},negate:function(){this.constant*=-1;this.normal.negate();return this},distanceToPoint:function(a){return this.normal.dot(a)+this.constant},distanceToSphere:function(a){return this.distanceToPoint(a.center)-a.radius},projectPoint:function(a,b){return this.orthoPoint(a,b).sub(a).negate()},orthoPoint:function(a,b){var c=this.distanceToPoint(a);return(b||new q).copy(this.normal).multiplyScalar(c)},intersectLine:function(){var a=new q;return function(b,c){var d=c||new q,e=
b.delta(a),f=this.normal.dot(e);if(0===f){if(0===this.distanceToPoint(b.start))return d.copy(b.start)}else return f=-(b.start.dot(this.normal)+this.constant)/f,0>f||1<f?void 0:d.copy(e).multiplyScalar(f).add(b.start)}}(),intersectsLine:function(a){var b=this.distanceToPoint(a.start);a=this.distanceToPoint(a.end);return 0>b&&0<a||0>a&&0<b},intersectsBox:function(a){return a.intersectsPlane(this)},intersectsSphere:function(a){return a.intersectsPlane(this)},coplanarPoint:function(a){return(a||new q).copy(this.normal).multiplyScalar(-this.constant)},
applyMatrix4:function(){var a=new q,b=new Aa;return function(c,d){var e=this.coplanarPoint(a).applyMatrix4(c),f=d||b.getNormalMatrix(c),f=this.normal.applyMatrix3(f).normalize();this.constant=-e.dot(f);return this}}(),translate:function(a){this.constant-=a.dot(this.normal);return this},equals:function(a){return a.normal.equals(this.normal)&&a.constant===this.constant}};qc.prototype={constructor:qc,set:function(a,b,c,d,e,f){var g=this.planes;g[0].copy(a);g[1].copy(b);g[2].copy(c);g[3].copy(d);g[4].copy(e);
g[5].copy(f);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){for(var b=this.planes,c=0;6>c;c++)b[c].copy(a.planes[c]);return this},setFromMatrix:function(a){var b=this.planes,c=a.elements;a=c[0];var d=c[1],e=c[2],f=c[3],g=c[4],h=c[5],k=c[6],m=c[7],l=c[8],p=c[9],n=c[10],r=c[11],q=c[12],u=c[13],A=c[14],c=c[15];b[0].setComponents(f-a,m-g,r-l,c-q).normalize();b[1].setComponents(f+a,m+g,r+l,c+q).normalize();b[2].setComponents(f+d,m+h,r+p,c+u).normalize();b[3].setComponents(f-
d,m-h,r-p,c-u).normalize();b[4].setComponents(f-e,m-k,r-n,c-A).normalize();b[5].setComponents(f+e,m+k,r+n,c+A).normalize();return this},intersectsObject:function(){var a=new Ha;return function(b){var c=b.geometry;null===c.boundingSphere&&c.computeBoundingSphere();a.copy(c.boundingSphere).applyMatrix4(b.matrixWorld);return this.intersectsSphere(a)}}(),intersectsSprite:function(){var a=new Ha;return function(b){a.center.set(0,0,0);a.radius=.7071067811865476;a.applyMatrix4(b.matrixWorld);return this.intersectsSphere(a)}}(),
intersectsSphere:function(a){var b=this.planes,c=a.center;a=-a.radius;for(var d=0;6>d;d++)if(b[d].distanceToPoint(c)<a)return!1;return!0},intersectsBox:function(){var a=new q,b=new q;return function(c){for(var d=this.planes,e=0;6>e;e++){var f=d[e];a.x=0<f.normal.x?c.min.x:c.max.x;b.x=0<f.normal.x?c.max.x:c.min.x;a.y=0<f.normal.y?c.min.y:c.max.y;b.y=0<f.normal.y?c.max.y:c.min.y;a.z=0<f.normal.z?c.min.z:c.max.z;b.z=0<f.normal.z?c.max.z:c.min.z;var g=f.distanceToPoint(a),f=f.distanceToPoint(b);if(0>
g&&0>f)return!1}return!0}}(),containsPoint:function(a){for(var b=this.planes,c=0;6>c;c++)if(0>b[c].distanceToPoint(a))return!1;return!0}};db.prototype={constructor:db,set:function(a,b){this.origin.copy(a);this.direction.copy(b);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.origin.copy(a.origin);this.direction.copy(a.direction);return this},at:function(a,b){return(b||new q).copy(this.direction).multiplyScalar(a).add(this.origin)},lookAt:function(a){this.direction.copy(a).sub(this.origin).normalize();
return this},recast:function(){var a=new q;return function(b){this.origin.copy(this.at(b,a));return this}}(),closestPointToPoint:function(a,b){var c=b||new q;c.subVectors(a,this.origin);var d=c.dot(this.direction);return 0>d?c.copy(this.origin):c.copy(this.direction).multiplyScalar(d).add(this.origin)},distanceToPoint:function(a){return Math.sqrt(this.distanceSqToPoint(a))},distanceSqToPoint:function(){var a=new q;return function(b){var c=a.subVectors(b,this.origin).dot(this.direction);if(0>c)return this.origin.distanceToSquared(b);
a.copy(this.direction).multiplyScalar(c).add(this.origin);return a.distanceToSquared(b)}}(),distanceSqToSegment:function(){var a=new q,b=new q,c=new q;return function(d,e,f,g){a.copy(d).add(e).multiplyScalar(.5);b.copy(e).sub(d).normalize();c.copy(this.origin).sub(a);var h=.5*d.distanceTo(e),k=-this.direction.dot(b),m=c.dot(this.direction),l=-c.dot(b),p=c.lengthSq(),n=Math.abs(1-k*k),r;0<n?(d=k*l-m,e=k*m-l,r=h*n,0<=d?e>=-r?e<=r?(h=1/n,d*=h,e*=h,k=d*(d+k*e+2*m)+e*(k*d+e+2*l)+p):(e=h,d=Math.max(0,-(k*
e+m)),k=-d*d+e*(e+2*l)+p):(e=-h,d=Math.max(0,-(k*e+m)),k=-d*d+e*(e+2*l)+p):e<=-r?(d=Math.max(0,-(-k*h+m)),e=0<d?-h:Math.min(Math.max(-h,-l),h),k=-d*d+e*(e+2*l)+p):e<=r?(d=0,e=Math.min(Math.max(-h,-l),h),k=e*(e+2*l)+p):(d=Math.max(0,-(k*h+m)),e=0<d?h:Math.min(Math.max(-h,-l),h),k=-d*d+e*(e+2*l)+p)):(e=0<k?-h:h,d=Math.max(0,-(k*e+m)),k=-d*d+e*(e+2*l)+p);f&&f.copy(this.direction).multiplyScalar(d).add(this.origin);g&&g.copy(b).multiplyScalar(e).add(a);return k}}(),intersectSphere:function(){var a=new q;
return function(b,c){a.subVectors(b.center,this.origin);var d=a.dot(this.direction),e=a.dot(a)-d*d,f=b.radius*b.radius;if(e>f)return null;f=Math.sqrt(f-e);e=d-f;d+=f;return 0>e&&0>d?null:0>e?this.at(d,c):this.at(e,c)}}(),intersectsSphere:function(a){return this.distanceToPoint(a.center)<=a.radius},distanceToPlane:function(a){var b=a.normal.dot(this.direction);if(0===b)return 0===a.distanceToPoint(this.origin)?0:null;a=-(this.origin.dot(a.normal)+a.constant)/b;return 0<=a?a:null},intersectPlane:function(a,
b){var c=this.distanceToPlane(a);return null===c?null:this.at(c,b)},intersectsPlane:function(a){var b=a.distanceToPoint(this.origin);return 0===b||0>a.normal.dot(this.direction)*b?!0:!1},intersectBox:function(a,b){var c,d,e,f,g;d=1/this.direction.x;f=1/this.direction.y;g=1/this.direction.z;var h=this.origin;0<=d?(c=(a.min.x-h.x)*d,d*=a.max.x-h.x):(c=(a.max.x-h.x)*d,d*=a.min.x-h.x);0<=f?(e=(a.min.y-h.y)*f,f*=a.max.y-h.y):(e=(a.max.y-h.y)*f,f*=a.min.y-h.y);if(c>f||e>d)return null;if(e>c||c!==c)c=e;
if(f<d||d!==d)d=f;0<=g?(e=(a.min.z-h.z)*g,g*=a.max.z-h.z):(e=(a.max.z-h.z)*g,g*=a.min.z-h.z);if(c>g||e>d)return null;if(e>c||c!==c)c=e;if(g<d||d!==d)d=g;return 0>d?null:this.at(0<=c?c:d,b)},intersectsBox:function(){var a=new q;return function(b){return null!==this.intersectBox(b,a)}}(),intersectTriangle:function(){var a=new q,b=new q,c=new q,d=new q;return function(e,f,g,h,k){b.subVectors(f,e);c.subVectors(g,e);d.crossVectors(b,c);f=this.direction.dot(d);if(0<f){if(h)return null;h=1}else if(0>f)h=
-1,f=-f;else return null;a.subVectors(this.origin,e);e=h*this.direction.dot(c.crossVectors(a,c));if(0>e)return null;g=h*this.direction.dot(b.cross(a));if(0>g||e+g>f)return null;e=-h*a.dot(d);return 0>e?null:this.at(e/f,k)}}(),applyMatrix4:function(a){this.direction.add(this.origin).applyMatrix4(a);this.origin.applyMatrix4(a);this.direction.sub(this.origin);this.direction.normalize();return this},equals:function(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction)}};eb.RotationOrders=
"XYZ YZX ZXY XZY YXZ ZYX".split(" ");eb.DefaultOrder="XYZ";eb.prototype={constructor:eb,isEuler:!0,get x(){return this._x},set x(a){this._x=a;this.onChangeCallback()},get y(){return this._y},set y(a){this._y=a;this.onChangeCallback()},get z(){return this._z},set z(a){this._z=a;this.onChangeCallback()},get order(){return this._order},set order(a){this._order=a;this.onChangeCallback()},set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._order=d||this._order;this.onChangeCallback();return this},
clone:function(){return new this.constructor(this._x,this._y,this._z,this._order)},copy:function(a){this._x=a._x;this._y=a._y;this._z=a._z;this._order=a._order;this.onChangeCallback();return this},setFromRotationMatrix:function(a,b,c){var d=S.clamp,e=a.elements;a=e[0];var f=e[4],g=e[8],h=e[1],k=e[5],m=e[9],l=e[2],p=e[6],e=e[10];b=b||this._order;"XYZ"===b?(this._y=Math.asin(d(g,-1,1)),.99999>Math.abs(g)?(this._x=Math.atan2(-m,e),this._z=Math.atan2(-f,a)):(this._x=Math.atan2(p,k),this._z=0)):"YXZ"===
b?(this._x=Math.asin(-d(m,-1,1)),.99999>Math.abs(m)?(this._y=Math.atan2(g,e),this._z=Math.atan2(h,k)):(this._y=Math.atan2(-l,a),this._z=0)):"ZXY"===b?(this._x=Math.asin(d(p,-1,1)),.99999>Math.abs(p)?(this._y=Math.atan2(-l,e),this._z=Math.atan2(-f,k)):(this._y=0,this._z=Math.atan2(h,a))):"ZYX"===b?(this._y=Math.asin(-d(l,-1,1)),.99999>Math.abs(l)?(this._x=Math.atan2(p,e),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-f,k))):"YZX"===b?(this._z=Math.asin(d(h,-1,1)),.99999>Math.abs(h)?(this._x=
Math.atan2(-m,k),this._y=Math.atan2(-l,a)):(this._x=0,this._y=Math.atan2(g,e))):"XZY"===b?(this._z=Math.asin(-d(f,-1,1)),.99999>Math.abs(f)?(this._x=Math.atan2(p,k),this._y=Math.atan2(g,a)):(this._x=Math.atan2(-m,e),this._y=0)):console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: "+b);this._order=b;if(!1!==c)this.onChangeCallback();return this},setFromQuaternion:function(){var a;return function(b,c,d){void 0===a&&(a=new P);a.makeRotationFromQuaternion(b);return this.setFromRotationMatrix(a,
c,d)}}(),setFromVector3:function(a,b){return this.set(a.x,a.y,a.z,b||this._order)},reorder:function(){var a=new ca;return function(b){a.setFromEuler(this);return this.setFromQuaternion(a,b)}}(),equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order},fromArray:function(a){this._x=a[0];this._y=a[1];this._z=a[2];void 0!==a[3]&&(this._order=a[3]);this.onChangeCallback();return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=
this._y;a[b+2]=this._z;a[b+3]=this._order;return a},toVector3:function(a){return a?a.set(this._x,this._y,this._z):new q(this._x,this._y,this._z)},onChange:function(a){this.onChangeCallback=a;return this},onChangeCallback:function(){}};fd.prototype={constructor:fd,set:function(a){this.mask=1<<a},enable:function(a){this.mask|=1<<a},toggle:function(a){this.mask^=1<<a},disable:function(a){this.mask&=~(1<<a)},test:function(a){return 0!==(this.mask&a.mask)}};var of=0;F.DefaultUp=new q(0,1,0);F.DefaultMatrixAutoUpdate=
!0;Object.assign(F.prototype,na.prototype,{isObject3D:!0,applyMatrix:function(a){this.matrix.multiplyMatrices(a,this.matrix);this.matrix.decompose(this.position,this.quaternion,this.scale)},setRotationFromAxisAngle:function(a,b){this.quaternion.setFromAxisAngle(a,b)},setRotationFromEuler:function(a){this.quaternion.setFromEuler(a,!0)},setRotationFromMatrix:function(a){this.quaternion.setFromRotationMatrix(a)},setRotationFromQuaternion:function(a){this.quaternion.copy(a)},rotateOnAxis:function(){var a=
new ca;return function(b,c){a.setFromAxisAngle(b,c);this.quaternion.multiply(a);return this}}(),rotateX:function(){var a=new q(1,0,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateY:function(){var a=new q(0,1,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateZ:function(){var a=new q(0,0,1);return function(b){return this.rotateOnAxis(a,b)}}(),translateOnAxis:function(){var a=new q;return function(b,c){a.copy(b).applyQuaternion(this.quaternion);this.position.add(a.multiplyScalar(c));
return this}}(),translateX:function(){var a=new q(1,0,0);return function(b){return this.translateOnAxis(a,b)}}(),translateY:function(){var a=new q(0,1,0);return function(b){return this.translateOnAxis(a,b)}}(),translateZ:function(){var a=new q(0,0,1);return function(b){return this.translateOnAxis(a,b)}}(),localToWorld:function(a){return a.applyMatrix4(this.matrixWorld)},worldToLocal:function(){var a=new P;return function(b){return b.applyMatrix4(a.getInverse(this.matrixWorld))}}(),lookAt:function(){var a=
new P;return function(b){a.lookAt(b,this.position,this.up);this.quaternion.setFromRotationMatrix(a)}}(),add:function(a){if(1<arguments.length){for(var b=0;b<arguments.length;b++)this.add(arguments[b]);return this}if(a===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",a),this;a&&a.isObject3D?(null!==a.parent&&a.parent.remove(a),a.parent=this,a.dispatchEvent({type:"added"}),this.children.push(a)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",
a);return this},remove:function(a){if(1<arguments.length)for(var b=0;b<arguments.length;b++)this.remove(arguments[b]);b=this.children.indexOf(a);-1!==b&&(a.parent=null,a.dispatchEvent({type:"removed"}),this.children.splice(b,1))},getObjectById:function(a){return this.getObjectByProperty("id",a)},getObjectByName:function(a){return this.getObjectByProperty("name",a)},getObjectByProperty:function(a,b){if(this[a]===b)return this;for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c].getObjectByProperty(a,
b);if(void 0!==e)return e}},getWorldPosition:function(a){a=a||new q;this.updateMatrixWorld(!0);return a.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(){var a=new q,b=new q;return function(c){c=c||new ca;this.updateMatrixWorld(!0);this.matrixWorld.decompose(a,c,b);return c}}(),getWorldRotation:function(){var a=new ca;return function(b){b=b||new eb;this.getWorldQuaternion(a);return b.setFromQuaternion(a,this.rotation.order,!1)}}(),getWorldScale:function(){var a=new q,b=new ca;
return function(c){c=c||new q;this.updateMatrixWorld(!0);this.matrixWorld.decompose(a,b,c);return c}}(),getWorldDirection:function(){var a=new ca;return function(b){b=b||new q;this.getWorldQuaternion(a);return b.set(0,0,1).applyQuaternion(a)}}(),raycast:function(){},traverse:function(a){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].traverse(a)},traverseVisible:function(a){if(!1!==this.visible){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].traverseVisible(a)}},traverseAncestors:function(a){var b=
this.parent;null!==b&&(a(b),b.traverseAncestors(a))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale);this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(a){!0===this.matrixAutoUpdate&&this.updateMatrix();if(!0===this.matrixWorldNeedsUpdate||!0===a)null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].updateMatrixWorld(a)},
toJSON:function(a){function b(a){var b=[],c;for(c in a){var d=a[c];delete d.metadata;b.push(d)}return b}var c=void 0===a||""===a,d={};c&&(a={geometries:{},materials:{},textures:{},images:{}},d.metadata={version:4.4,type:"Object",generator:"Object3D.toJSON"});var e={};e.uuid=this.uuid;e.type=this.type;""!==this.name&&(e.name=this.name);"{}"!==JSON.stringify(this.userData)&&(e.userData=this.userData);!0===this.castShadow&&(e.castShadow=!0);!0===this.receiveShadow&&(e.receiveShadow=!0);!1===this.visible&&
(e.visible=!1);e.matrix=this.matrix.toArray();void 0!==this.geometry&&(void 0===a.geometries[this.geometry.uuid]&&(a.geometries[this.geometry.uuid]=this.geometry.toJSON(a)),e.geometry=this.geometry.uuid);void 0!==this.material&&(void 0===a.materials[this.material.uuid]&&(a.materials[this.material.uuid]=this.material.toJSON(a)),e.material=this.material.uuid);if(0<this.children.length){e.children=[];for(var f=0;f<this.children.length;f++)e.children.push(this.children[f].toJSON(a).object)}if(c){var c=
b(a.geometries),f=b(a.materials),g=b(a.textures);a=b(a.images);0<c.length&&(d.geometries=c);0<f.length&&(d.materials=f);0<g.length&&(d.textures=g);0<a.length&&(d.images=a)}d.object=e;return d},clone:function(a){return(new this.constructor).copy(this,a)},copy:function(a,b){void 0===b&&(b=!0);this.name=a.name;this.up.copy(a.up);this.position.copy(a.position);this.quaternion.copy(a.quaternion);this.scale.copy(a.scale);this.matrix.copy(a.matrix);this.matrixWorld.copy(a.matrixWorld);this.matrixAutoUpdate=
a.matrixAutoUpdate;this.matrixWorldNeedsUpdate=a.matrixWorldNeedsUpdate;this.visible=a.visible;this.castShadow=a.castShadow;this.receiveShadow=a.receiveShadow;this.frustumCulled=a.frustumCulled;this.renderOrder=a.renderOrder;this.userData=JSON.parse(JSON.stringify(a.userData));if(!0===b)for(var c=0;c<a.children.length;c++)this.add(a.children[c].clone());return this}});ib.prototype={constructor:ib,set:function(a,b){this.start.copy(a);this.end.copy(b);return this},clone:function(){return(new this.constructor).copy(this)},
copy:function(a){this.start.copy(a.start);this.end.copy(a.end);return this},getCenter:function(a){return(a||new q).addVectors(this.start,this.end).multiplyScalar(.5)},delta:function(a){return(a||new q).subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(a,b){var c=b||new q;return this.delta(c).multiplyScalar(a).add(this.start)},closestPointToPointParameter:function(){var a=new q,
b=new q;return function(c,d){a.subVectors(c,this.start);b.subVectors(this.end,this.start);var e=b.dot(b),e=b.dot(a)/e;d&&(e=S.clamp(e,0,1));return e}}(),closestPointToPoint:function(a,b,c){a=this.closestPointToPointParameter(a,b);c=c||new q;return this.delta(c).multiplyScalar(a).add(this.start)},applyMatrix4:function(a){this.start.applyMatrix4(a);this.end.applyMatrix4(a);return this},equals:function(a){return a.start.equals(this.start)&&a.end.equals(this.end)}};Ca.normal=function(){var a=new q;return function(b,
c,d,e){e=e||new q;e.subVectors(d,c);a.subVectors(b,c);e.cross(a);b=e.lengthSq();return 0<b?e.multiplyScalar(1/Math.sqrt(b)):e.set(0,0,0)}}();Ca.barycoordFromPoint=function(){var a=new q,b=new q,c=new q;return function(d,e,f,g,h){a.subVectors(g,e);b.subVectors(f,e);c.subVectors(d,e);d=a.dot(a);e=a.dot(b);f=a.dot(c);var k=b.dot(b);g=b.dot(c);var m=d*k-e*e;h=h||new q;if(0===m)return h.set(-2,-1,-1);m=1/m;k=(k*f-e*g)*m;d=(d*g-e*f)*m;return h.set(1-k-d,d,k)}}();Ca.containsPoint=function(){var a=new q;
return function(b,c,d,e){b=Ca.barycoordFromPoint(b,c,d,e,a);return 0<=b.x&&0<=b.y&&1>=b.x+b.y}}();Ca.prototype={constructor:Ca,set:function(a,b,c){this.a.copy(a);this.b.copy(b);this.c.copy(c);return this},setFromPointsAndIndices:function(a,b,c,d){this.a.copy(a[b]);this.b.copy(a[c]);this.c.copy(a[d]);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.a.copy(a.a);this.b.copy(a.b);this.c.copy(a.c);return this},area:function(){var a=new q,b=new q;return function(){a.subVectors(this.c,
this.b);b.subVectors(this.a,this.b);return.5*a.cross(b).length()}}(),midpoint:function(a){return(a||new q).addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},normal:function(a){return Ca.normal(this.a,this.b,this.c,a)},plane:function(a){return(a||new la).setFromCoplanarPoints(this.a,this.b,this.c)},barycoordFromPoint:function(a,b){return Ca.barycoordFromPoint(a,this.a,this.b,this.c,b)},containsPoint:function(a){return Ca.containsPoint(a,this.a,this.b,this.c)},closestPointToPoint:function(){var a,
b,c,d;return function(e,f){void 0===a&&(a=new la,b=[new ib,new ib,new ib],c=new q,d=new q);var g=f||new q,h=Infinity;a.setFromCoplanarPoints(this.a,this.b,this.c);a.projectPoint(e,c);if(!0===this.containsPoint(c))g.copy(c);else{b[0].set(this.a,this.b);b[1].set(this.b,this.c);b[2].set(this.c,this.a);for(var k=0;k<b.length;k++){b[k].closestPointToPoint(c,!0,d);var m=c.distanceToSquared(d);m<h&&(h=m,g.copy(d))}}return g}}(),equals:function(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&a.c.equals(this.c)}};
ga.prototype={constructor:ga,clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.a=a.a;this.b=a.b;this.c=a.c;this.normal.copy(a.normal);this.color.copy(a.color);this.materialIndex=a.materialIndex;for(var b=0,c=a.vertexNormals.length;b<c;b++)this.vertexNormals[b]=a.vertexNormals[b].clone();b=0;for(c=a.vertexColors.length;b<c;b++)this.vertexColors[b]=a.vertexColors[b].clone();return this}};Ma.prototype=Object.create(U.prototype);Ma.prototype.constructor=Ma;Ma.prototype.isMeshBasicMaterial=
!0;Ma.prototype.copy=function(a){U.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;
this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;return this};z.prototype={constructor:z,isBufferAttribute:!0,set needsUpdate(a){!0===a&&this.version++},setArray:function(a){if(Array.isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.count=void 0!==a?a.length/this.itemSize:0;this.array=a},setDynamic:function(a){this.dynamic=a;return this},copy:function(a){this.array=new a.array.constructor(a.array);this.itemSize=
a.itemSize;this.count=a.count;this.normalized=a.normalized;this.dynamic=a.dynamic;return this},copyAt:function(a,b,c){a*=this.itemSize;c*=b.itemSize;for(var d=0,e=this.itemSize;d<e;d++)this.array[a+d]=b.array[c+d];return this},copyArray:function(a){this.array.set(a);return this},copyColorsArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",d),f=new G);b[c++]=f.r;b[c++]=f.g;b[c++]=f.b}return this},
copyIndicesArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];b[c++]=f.a;b[c++]=f.b;b[c++]=f.c}return this},copyVector2sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",d),f=new B);b[c++]=f.x;b[c++]=f.y}return this},copyVector3sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",
d),f=new q);b[c++]=f.x;b[c++]=f.y;b[c++]=f.z}return this},copyVector4sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",d),f=new fa);b[c++]=f.x;b[c++]=f.y;b[c++]=f.z;b[c++]=f.w}return this},set:function(a,b){void 0===b&&(b=0);this.array.set(a,b);return this},getX:function(a){return this.array[a*this.itemSize]},setX:function(a,b){this.array[a*this.itemSize]=b;return this},getY:function(a){return this.array[a*
this.itemSize+1]},setY:function(a,b){this.array[a*this.itemSize+1]=b;return this},getZ:function(a){return this.array[a*this.itemSize+2]},setZ:function(a,b){this.array[a*this.itemSize+2]=b;return this},getW:function(a){return this.array[a*this.itemSize+3]},setW:function(a,b){this.array[a*this.itemSize+3]=b;return this},setXY:function(a,b,c){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;return this},setXYZ:function(a,b,c,d){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;this.array[a+2]=
d;return this},setXYZW:function(a,b,c,d,e){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;this.array[a+2]=d;this.array[a+3]=e;return this},onUpload:function(a){this.onUploadCallback=a;return this},clone:function(){return(new this.constructor).copy(this)}};rc.prototype=Object.create(z.prototype);rc.prototype.constructor=rc;sc.prototype=Object.create(z.prototype);sc.prototype.constructor=sc;tc.prototype=Object.create(z.prototype);tc.prototype.constructor=tc;uc.prototype=Object.create(z.prototype);
uc.prototype.constructor=uc;Sa.prototype=Object.create(z.prototype);Sa.prototype.constructor=Sa;vc.prototype=Object.create(z.prototype);vc.prototype.constructor=vc;Va.prototype=Object.create(z.prototype);Va.prototype.constructor=Va;W.prototype=Object.create(z.prototype);W.prototype.constructor=W;wc.prototype=Object.create(z.prototype);wc.prototype.constructor=wc;Object.assign(xe.prototype,{computeGroups:function(a){var b,c=[],d;a=a.faces;for(var e=0;e<a.length;e++){var f=a[e];f.materialIndex!==d&&
(d=f.materialIndex,void 0!==b&&(b.count=3*e-b.start,c.push(b)),b={start:3*e,materialIndex:d})}void 0!==b&&(b.count=3*e-b.start,c.push(b));this.groups=c},fromGeometry:function(a){var b=a.faces,c=a.vertices,d=a.faceVertexUvs,e=d[0]&&0<d[0].length,f=d[1]&&0<d[1].length,g=a.morphTargets,h=g.length,k;if(0<h){k=[];for(var m=0;m<h;m++)k[m]=[];this.morphTargets.position=k}var l=a.morphNormals,p=l.length,n;if(0<p){n=[];for(m=0;m<p;m++)n[m]=[];this.morphTargets.normal=n}for(var r=a.skinIndices,q=a.skinWeights,
u=r.length===c.length,A=q.length===c.length,m=0;m<b.length;m++){var t=b[m];this.vertices.push(c[t.a],c[t.b],c[t.c]);var v=t.vertexNormals;3===v.length?this.normals.push(v[0],v[1],v[2]):(v=t.normal,this.normals.push(v,v,v));v=t.vertexColors;3===v.length?this.colors.push(v[0],v[1],v[2]):(v=t.color,this.colors.push(v,v,v));!0===e&&(v=d[0][m],void 0!==v?this.uvs.push(v[0],v[1],v[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",m),this.uvs.push(new B,new B,new B)));!0===f&&
(v=d[1][m],void 0!==v?this.uvs2.push(v[0],v[1],v[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",m),this.uvs2.push(new B,new B,new B)));for(v=0;v<h;v++){var M=g[v].vertices;k[v].push(M[t.a],M[t.b],M[t.c])}for(v=0;v<p;v++)M=l[v].vertexNormals[m],n[v].push(M.a,M.b,M.c);u&&this.skinIndices.push(r[t.a],r[t.b],r[t.c]);A&&this.skinWeights.push(q[t.a],q[t.b],q[t.c])}this.computeGroups(a);this.verticesNeedUpdate=a.verticesNeedUpdate;this.normalsNeedUpdate=a.normalsNeedUpdate;
this.colorsNeedUpdate=a.colorsNeedUpdate;this.uvsNeedUpdate=a.uvsNeedUpdate;this.groupsNeedUpdate=a.groupsNeedUpdate;return this}});Object.assign(R.prototype,na.prototype,{isGeometry:!0,applyMatrix:function(a){for(var b=(new Aa).getNormalMatrix(a),c=0,d=this.vertices.length;c<d;c++)this.vertices[c].applyMatrix4(a);c=0;for(d=this.faces.length;c<d;c++){a=this.faces[c];a.normal.applyMatrix3(b).normalize();for(var e=0,f=a.vertexNormals.length;e<f;e++)a.vertexNormals[e].applyMatrix3(b).normalize()}null!==
this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere();this.normalsNeedUpdate=this.verticesNeedUpdate=!0;return this},rotateX:function(){var a;return function(b){void 0===a&&(a=new P);a.makeRotationX(b);this.applyMatrix(a);return this}}(),rotateY:function(){var a;return function(b){void 0===a&&(a=new P);a.makeRotationY(b);this.applyMatrix(a);return this}}(),rotateZ:function(){var a;return function(b){void 0===a&&(a=new P);a.makeRotationZ(b);this.applyMatrix(a);
return this}}(),translate:function(){var a;return function(b,c,d){void 0===a&&(a=new P);a.makeTranslation(b,c,d);this.applyMatrix(a);return this}}(),scale:function(){var a;return function(b,c,d){void 0===a&&(a=new P);a.makeScale(b,c,d);this.applyMatrix(a);return this}}(),lookAt:function(){var a;return function(b){void 0===a&&(a=new F);a.lookAt(b);a.updateMatrix();this.applyMatrix(a.matrix)}}(),fromBufferGeometry:function(a){function b(a,b,d,e){var f=void 0!==g?[l[a].clone(),l[b].clone(),l[d].clone()]:
[],r=void 0!==h?[c.colors[a].clone(),c.colors[b].clone(),c.colors[d].clone()]:[];e=new ga(a,b,d,f,r,e);c.faces.push(e);void 0!==k&&c.faceVertexUvs[0].push([p[a].clone(),p[b].clone(),p[d].clone()]);void 0!==m&&c.faceVertexUvs[1].push([n[a].clone(),n[b].clone(),n[d].clone()])}var c=this,d=null!==a.index?a.index.array:void 0,e=a.attributes,f=e.position.array,g=void 0!==e.normal?e.normal.array:void 0,h=void 0!==e.color?e.color.array:void 0,k=void 0!==e.uv?e.uv.array:void 0,m=void 0!==e.uv2?e.uv2.array:
void 0;void 0!==m&&(this.faceVertexUvs[1]=[]);for(var l=[],p=[],n=[],r=e=0;e<f.length;e+=3,r+=2)c.vertices.push(new q(f[e],f[e+1],f[e+2])),void 0!==g&&l.push(new q(g[e],g[e+1],g[e+2])),void 0!==h&&c.colors.push(new G(h[e],h[e+1],h[e+2])),void 0!==k&&p.push(new B(k[r],k[r+1])),void 0!==m&&n.push(new B(m[r],m[r+1]));if(void 0!==d)if(f=a.groups,0<f.length)for(e=0;e<f.length;e++)for(var w=f[e],u=w.start,A=w.count,r=u,u=u+A;r<u;r+=3)b(d[r],d[r+1],d[r+2],w.materialIndex);else for(e=0;e<d.length;e+=3)b(d[e],
d[e+1],d[e+2]);else for(e=0;e<f.length/3;e+=3)b(e,e+1,e+2);this.computeFaceNormals();null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());return this},center:function(){this.computeBoundingBox();var a=this.boundingBox.getCenter().negate();this.translate(a.x,a.y,a.z);return a},normalize:function(){this.computeBoundingSphere();var a=this.boundingSphere.center,b=this.boundingSphere.radius,b=0===b?1:1/b,c=new P;c.set(b,
0,0,-b*a.x,0,b,0,-b*a.y,0,0,b,-b*a.z,0,0,0,1);this.applyMatrix(c);return this},computeFaceNormals:function(){for(var a=new q,b=new q,c=0,d=this.faces.length;c<d;c++){var e=this.faces[c],f=this.vertices[e.a],g=this.vertices[e.b];a.subVectors(this.vertices[e.c],g);b.subVectors(f,g);a.cross(b);a.normalize();e.normal.copy(a)}},computeVertexNormals:function(a){void 0===a&&(a=!0);var b,c,d;d=Array(this.vertices.length);b=0;for(c=this.vertices.length;b<c;b++)d[b]=new q;if(a){var e,f,g,h=new q,k=new q;a=
0;for(b=this.faces.length;a<b;a++)c=this.faces[a],e=this.vertices[c.a],f=this.vertices[c.b],g=this.vertices[c.c],h.subVectors(g,f),k.subVectors(e,f),h.cross(k),d[c.a].add(h),d[c.b].add(h),d[c.c].add(h)}else for(this.computeFaceNormals(),a=0,b=this.faces.length;a<b;a++)c=this.faces[a],d[c.a].add(c.normal),d[c.b].add(c.normal),d[c.c].add(c.normal);b=0;for(c=this.vertices.length;b<c;b++)d[b].normalize();a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],e=c.vertexNormals,3===e.length?(e[0].copy(d[c.a]),
e[1].copy(d[c.b]),e[2].copy(d[c.c])):(e[0]=d[c.a].clone(),e[1]=d[c.b].clone(),e[2]=d[c.c].clone());0<this.faces.length&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){var a,b,c;this.computeFaceNormals();a=0;for(b=this.faces.length;a<b;a++){c=this.faces[a];var d=c.vertexNormals;3===d.length?(d[0].copy(c.normal),d[1].copy(c.normal),d[2].copy(c.normal)):(d[0]=c.normal.clone(),d[1]=c.normal.clone(),d[2]=c.normal.clone())}0<this.faces.length&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){var a,
b,c,d,e;c=0;for(d=this.faces.length;c<d;c++)for(e=this.faces[c],e.__originalFaceNormal?e.__originalFaceNormal.copy(e.normal):e.__originalFaceNormal=e.normal.clone(),e.__originalVertexNormals||(e.__originalVertexNormals=[]),a=0,b=e.vertexNormals.length;a<b;a++)e.__originalVertexNormals[a]?e.__originalVertexNormals[a].copy(e.vertexNormals[a]):e.__originalVertexNormals[a]=e.vertexNormals[a].clone();var f=new R;f.faces=this.faces;a=0;for(b=this.morphTargets.length;a<b;a++){if(!this.morphNormals[a]){this.morphNormals[a]=
{};this.morphNormals[a].faceNormals=[];this.morphNormals[a].vertexNormals=[];e=this.morphNormals[a].faceNormals;var g=this.morphNormals[a].vertexNormals,h,k;c=0;for(d=this.faces.length;c<d;c++)h=new q,k={a:new q,b:new q,c:new q},e.push(h),g.push(k)}g=this.morphNormals[a];f.vertices=this.morphTargets[a].vertices;f.computeFaceNormals();f.computeVertexNormals();c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],h=g.faceNormals[c],k=g.vertexNormals[c],h.copy(e.normal),k.a.copy(e.vertexNormals[0]),k.b.copy(e.vertexNormals[1]),
k.c.copy(e.vertexNormals[2])}c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],e.normal=e.__originalFaceNormal,e.vertexNormals=e.__originalVertexNormals},computeLineDistances:function(){for(var a=0,b=this.vertices,c=0,d=b.length;c<d;c++)0<c&&(a+=b[c].distanceTo(b[c-1])),this.lineDistances[c]=a},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new za);this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=
new Ha);this.boundingSphere.setFromPoints(this.vertices)},merge:function(a,b,c){if(!1===(a&&a.isGeometry))console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",a);else{var d,e=this.vertices.length,f=this.vertices,g=a.vertices,h=this.faces,k=a.faces,m=this.faceVertexUvs[0],l=a.faceVertexUvs[0],p=this.colors,n=a.colors;void 0===c&&(c=0);void 0!==b&&(d=(new Aa).getNormalMatrix(b));a=0;for(var r=g.length;a<r;a++){var q=g[a].clone();void 0!==b&&q.applyMatrix4(b);f.push(q)}a=
0;for(r=n.length;a<r;a++)p.push(n[a].clone());a=0;for(r=k.length;a<r;a++){var g=k[a],u=g.vertexNormals,n=g.vertexColors,p=new ga(g.a+e,g.b+e,g.c+e);p.normal.copy(g.normal);void 0!==d&&p.normal.applyMatrix3(d).normalize();b=0;for(f=u.length;b<f;b++)q=u[b].clone(),void 0!==d&&q.applyMatrix3(d).normalize(),p.vertexNormals.push(q);p.color.copy(g.color);b=0;for(f=n.length;b<f;b++)q=n[b],p.vertexColors.push(q.clone());p.materialIndex=g.materialIndex+c;h.push(p)}a=0;for(r=l.length;a<r;a++)if(c=l[a],d=[],
void 0!==c){b=0;for(f=c.length;b<f;b++)d.push(c[b].clone());m.push(d)}}},mergeMesh:function(a){!1===(a&&a.isMesh)?console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",a):(a.matrixAutoUpdate&&a.updateMatrix(),this.merge(a.geometry,a.matrix))},mergeVertices:function(){var a={},b=[],c=[],d,e=Math.pow(10,4),f,g;f=0;for(g=this.vertices.length;f<g;f++)d=this.vertices[f],d=Math.round(d.x*e)+"_"+Math.round(d.y*e)+"_"+Math.round(d.z*e),void 0===a[d]?(a[d]=f,b.push(this.vertices[f]),
c[f]=b.length-1):c[f]=c[a[d]];a=[];f=0;for(g=this.faces.length;f<g;f++)for(e=this.faces[f],e.a=c[e.a],e.b=c[e.b],e.c=c[e.c],e=[e.a,e.b,e.c],d=0;3>d;d++)if(e[d]===e[(d+1)%3]){a.push(f);break}for(f=a.length-1;0<=f;f--)for(e=a[f],this.faces.splice(e,1),c=0,g=this.faceVertexUvs.length;c<g;c++)this.faceVertexUvs[c].splice(e,1);f=this.vertices.length-b.length;this.vertices=b;return f},sortFacesByMaterialIndex:function(){for(var a=this.faces,b=a.length,c=0;c<b;c++)a[c]._id=c;a.sort(function(a,b){return a.materialIndex-
b.materialIndex});var d=this.faceVertexUvs[0],e=this.faceVertexUvs[1],f,g;d&&d.length===b&&(f=[]);e&&e.length===b&&(g=[]);for(c=0;c<b;c++){var h=a[c]._id;f&&f.push(d[h]);g&&g.push(e[h])}f&&(this.faceVertexUvs[0]=f);g&&(this.faceVertexUvs[1]=g)},toJSON:function(){function a(a,b,c){return c?a|1<<b:a&~(1<<b)}function b(a){var b=a.x.toString()+a.y.toString()+a.z.toString();if(void 0!==m[b])return m[b];m[b]=k.length/3;k.push(a.x,a.y,a.z);return m[b]}function c(a){var b=a.r.toString()+a.g.toString()+a.b.toString();
if(void 0!==p[b])return p[b];p[b]=l.length;l.push(a.getHex());return p[b]}function d(a){var b=a.x.toString()+a.y.toString();if(void 0!==r[b])return r[b];r[b]=n.length/2;n.push(a.x,a.y);return r[b]}var e={metadata:{version:4.4,type:"Geometry",generator:"Geometry.toJSON"}};e.uuid=this.uuid;e.type=this.type;""!==this.name&&(e.name=this.name);if(void 0!==this.parameters){var f=this.parameters,g;for(g in f)void 0!==f[g]&&(e[g]=f[g]);return e}f=[];for(g=0;g<this.vertices.length;g++){var h=this.vertices[g];
f.push(h.x,h.y,h.z)}var h=[],k=[],m={},l=[],p={},n=[],r={};for(g=0;g<this.faces.length;g++){var q=this.faces[g],u=void 0!==this.faceVertexUvs[0][g],A=0<q.normal.length(),t=0<q.vertexNormals.length,v=1!==q.color.r||1!==q.color.g||1!==q.color.b,M=0<q.vertexColors.length,y=0,y=a(y,0,0),y=a(y,1,!0),y=a(y,2,!1),y=a(y,3,u),y=a(y,4,A),y=a(y,5,t),y=a(y,6,v),y=a(y,7,M);h.push(y);h.push(q.a,q.b,q.c);h.push(q.materialIndex);u&&(u=this.faceVertexUvs[0][g],h.push(d(u[0]),d(u[1]),d(u[2])));A&&h.push(b(q.normal));
t&&(A=q.vertexNormals,h.push(b(A[0]),b(A[1]),b(A[2])));v&&h.push(c(q.color));M&&(q=q.vertexColors,h.push(c(q[0]),c(q[1]),c(q[2])))}e.data={};e.data.vertices=f;e.data.normals=k;0<l.length&&(e.data.colors=l);0<n.length&&(e.data.uvs=[n]);e.data.faces=h;return e},clone:function(){return(new R).copy(this)},copy:function(a){this.vertices=[];this.faces=[];this.faceVertexUvs=[[]];this.colors=[];for(var b=a.vertices,c=0,d=b.length;c<d;c++)this.vertices.push(b[c].clone());b=a.colors;c=0;for(d=b.length;c<d;c++)this.colors.push(b[c].clone());
b=a.faces;c=0;for(d=b.length;c<d;c++)this.faces.push(b[c].clone());c=0;for(d=a.faceVertexUvs.length;c<d;c++){b=a.faceVertexUvs[c];void 0===this.faceVertexUvs[c]&&(this.faceVertexUvs[c]=[]);for(var e=0,f=b.length;e<f;e++){for(var g=b[e],h=[],k=0,m=g.length;k<m;k++)h.push(g[k].clone());this.faceVertexUvs[c].push(h)}}return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});var Jd=0;Object.assign(J.prototype,na.prototype,{isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(a){this.index=
a},addAttribute:function(a,b,c){if(!1===(b&&b.isBufferAttribute)&&!1===(b&&b.isInterleavedBufferAttribute))console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.addAttribute(a,new z(b,c));else if("index"===a)console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(b);else return this.attributes[a]=b,this},getAttribute:function(a){return this.attributes[a]},removeAttribute:function(a){delete this.attributes[a];return this},
addGroup:function(a,b,c){this.groups.push({start:a,count:b,materialIndex:void 0!==c?c:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(a,b){this.drawRange.start=a;this.drawRange.count=b},applyMatrix:function(a){var b=this.attributes.position;void 0!==b&&(a.applyToVector3Array(b.array),b.needsUpdate=!0);b=this.attributes.normal;void 0!==b&&((new Aa).getNormalMatrix(a).applyToVector3Array(b.array),b.needsUpdate=!0);null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&
this.computeBoundingSphere();return this},rotateX:function(){var a;return function(b){void 0===a&&(a=new P);a.makeRotationX(b);this.applyMatrix(a);return this}}(),rotateY:function(){var a;return function(b){void 0===a&&(a=new P);a.makeRotationY(b);this.applyMatrix(a);return this}}(),rotateZ:function(){var a;return function(b){void 0===a&&(a=new P);a.makeRotationZ(b);this.applyMatrix(a);return this}}(),translate:function(){var a;return function(b,c,d){void 0===a&&(a=new P);a.makeTranslation(b,c,d);
this.applyMatrix(a);return this}}(),scale:function(){var a;return function(b,c,d){void 0===a&&(a=new P);a.makeScale(b,c,d);this.applyMatrix(a);return this}}(),lookAt:function(){var a;return function(b){void 0===a&&(a=new F);a.lookAt(b);a.updateMatrix();this.applyMatrix(a.matrix)}}(),center:function(){this.computeBoundingBox();var a=this.boundingBox.getCenter().negate();this.translate(a.x,a.y,a.z);return a},setFromObject:function(a){var b=a.geometry;if(a.isPoints||a.isLine){a=new W(3*b.vertices.length,
3);var c=new W(3*b.colors.length,3);this.addAttribute("position",a.copyVector3sArray(b.vertices));this.addAttribute("color",c.copyColorsArray(b.colors));b.lineDistances&&b.lineDistances.length===b.vertices.length&&(a=new W(b.lineDistances.length,1),this.addAttribute("lineDistance",a.copyArray(b.lineDistances)));null!==b.boundingSphere&&(this.boundingSphere=b.boundingSphere.clone());null!==b.boundingBox&&(this.boundingBox=b.boundingBox.clone())}else a.isMesh&&b&&b.isGeometry&&this.fromGeometry(b);
return this},updateFromObject:function(a){var b=a.geometry;if(a.isMesh){var c=b.__directGeometry;!0===b.elementsNeedUpdate&&(c=void 0,b.elementsNeedUpdate=!1);if(void 0===c)return this.fromGeometry(b);c.verticesNeedUpdate=b.verticesNeedUpdate;c.normalsNeedUpdate=b.normalsNeedUpdate;c.colorsNeedUpdate=b.colorsNeedUpdate;c.uvsNeedUpdate=b.uvsNeedUpdate;c.groupsNeedUpdate=b.groupsNeedUpdate;b.verticesNeedUpdate=!1;b.normalsNeedUpdate=!1;b.colorsNeedUpdate=!1;b.uvsNeedUpdate=!1;b.groupsNeedUpdate=!1;
b=c}!0===b.verticesNeedUpdate&&(c=this.attributes.position,void 0!==c&&(c.copyVector3sArray(b.vertices),c.needsUpdate=!0),b.verticesNeedUpdate=!1);!0===b.normalsNeedUpdate&&(c=this.attributes.normal,void 0!==c&&(c.copyVector3sArray(b.normals),c.needsUpdate=!0),b.normalsNeedUpdate=!1);!0===b.colorsNeedUpdate&&(c=this.attributes.color,void 0!==c&&(c.copyColorsArray(b.colors),c.needsUpdate=!0),b.colorsNeedUpdate=!1);b.uvsNeedUpdate&&(c=this.attributes.uv,void 0!==c&&(c.copyVector2sArray(b.uvs),c.needsUpdate=
!0),b.uvsNeedUpdate=!1);b.lineDistancesNeedUpdate&&(c=this.attributes.lineDistance,void 0!==c&&(c.copyArray(b.lineDistances),c.needsUpdate=!0),b.lineDistancesNeedUpdate=!1);b.groupsNeedUpdate&&(b.computeGroups(a.geometry),this.groups=b.groups,b.groupsNeedUpdate=!1);return this},fromGeometry:function(a){a.__directGeometry=(new xe).fromGeometry(a);return this.fromDirectGeometry(a.__directGeometry)},fromDirectGeometry:function(a){var b=new Float32Array(3*a.vertices.length);this.addAttribute("position",
(new z(b,3)).copyVector3sArray(a.vertices));0<a.normals.length&&(b=new Float32Array(3*a.normals.length),this.addAttribute("normal",(new z(b,3)).copyVector3sArray(a.normals)));0<a.colors.length&&(b=new Float32Array(3*a.colors.length),this.addAttribute("color",(new z(b,3)).copyColorsArray(a.colors)));0<a.uvs.length&&(b=new Float32Array(2*a.uvs.length),this.addAttribute("uv",(new z(b,2)).copyVector2sArray(a.uvs)));0<a.uvs2.length&&(b=new Float32Array(2*a.uvs2.length),this.addAttribute("uv2",(new z(b,
2)).copyVector2sArray(a.uvs2)));0<a.indices.length&&(b=new (65535<a.vertices.length?Uint32Array:Uint16Array)(3*a.indices.length),this.setIndex((new z(b,1)).copyIndicesArray(a.indices)));this.groups=a.groups;for(var c in a.morphTargets){for(var b=[],d=a.morphTargets[c],e=0,f=d.length;e<f;e++){var g=d[e],h=new W(3*g.length,3);b.push(h.copyVector3sArray(g))}this.morphAttributes[c]=b}0<a.skinIndices.length&&(c=new W(4*a.skinIndices.length,4),this.addAttribute("skinIndex",c.copyVector4sArray(a.skinIndices)));
0<a.skinWeights.length&&(c=new W(4*a.skinWeights.length,4),this.addAttribute("skinWeight",c.copyVector4sArray(a.skinWeights)));null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());return this},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new za);var a=this.attributes.position.array;void 0!==a?this.boundingBox.setFromArray(a):this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||
isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){var a=new za,b=new q;return function(){null===this.boundingSphere&&(this.boundingSphere=new Ha);var c=this.attributes.position;if(c){var c=c.array,d=this.boundingSphere.center;a.setFromArray(c);a.getCenter(d);for(var e=0,f=0,g=c.length;f<g;f+=3)b.fromArray(c,f),e=Math.max(e,d.distanceToSquared(b));
this.boundingSphere.radius=Math.sqrt(e);isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}}(),computeFaceNormals:function(){},computeVertexNormals:function(){var a=this.index,b=this.attributes,c=this.groups;if(b.position){var d=b.position.array;if(void 0===b.normal)this.addAttribute("normal",new z(new Float32Array(d.length),3));else for(var e=b.normal.array,f=0,g=e.length;f<
g;f++)e[f]=0;var e=b.normal.array,h,k,m,l=new q,p=new q,n=new q,r=new q,w=new q;if(a){a=a.array;0===c.length&&this.addGroup(0,a.length);for(var u=0,A=c.length;u<A;++u)for(f=c[u],g=f.start,h=f.count,f=g,g+=h;f<g;f+=3)h=3*a[f+0],k=3*a[f+1],m=3*a[f+2],l.fromArray(d,h),p.fromArray(d,k),n.fromArray(d,m),r.subVectors(n,p),w.subVectors(l,p),r.cross(w),e[h]+=r.x,e[h+1]+=r.y,e[h+2]+=r.z,e[k]+=r.x,e[k+1]+=r.y,e[k+2]+=r.z,e[m]+=r.x,e[m+1]+=r.y,e[m+2]+=r.z}else for(f=0,g=d.length;f<g;f+=9)l.fromArray(d,f),p.fromArray(d,
f+3),n.fromArray(d,f+6),r.subVectors(n,p),w.subVectors(l,p),r.cross(w),e[f]=r.x,e[f+1]=r.y,e[f+2]=r.z,e[f+3]=r.x,e[f+4]=r.y,e[f+5]=r.z,e[f+6]=r.x,e[f+7]=r.y,e[f+8]=r.z;this.normalizeNormals();b.normal.needsUpdate=!0}},merge:function(a,b){if(!1===(a&&a.isBufferGeometry))console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",a);else{void 0===b&&(b=0);var c=this.attributes,d;for(d in c)if(void 0!==a.attributes[d])for(var e=c[d].array,f=a.attributes[d],g=f.array,
h=0,f=f.itemSize*b;h<g.length;h++,f++)e[f]=g[h];return this}},normalizeNormals:function(){for(var a=this.attributes.normal.array,b,c,d,e=0,f=a.length;e<f;e+=3)b=a[e],c=a[e+1],d=a[e+2],b=1/Math.sqrt(b*b+c*c+d*d),a[e]*=b,a[e+1]*=b,a[e+2]*=b},toNonIndexed:function(){if(null===this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;var a=new J,b=this.index.array,c=this.attributes,d;for(d in c){for(var e=c[d],f=e.array,e=e.itemSize,g=new f.constructor(b.length*
e),h,k=0,m=0,l=b.length;m<l;m++){h=b[m]*e;for(var p=0;p<e;p++)g[k++]=f[h++]}a.addAttribute(d,new z(g,e))}return a},toJSON:function(){var a={metadata:{version:4.4,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};a.uuid=this.uuid;a.type=this.type;""!==this.name&&(a.name=this.name);if(void 0!==this.parameters){var b=this.parameters,c;for(c in b)void 0!==b[c]&&(a[c]=b[c]);return a}a.data={attributes:{}};var d=this.index;null!==d&&(b=Array.prototype.slice.call(d.array),a.data.index={type:d.array.constructor.name,
array:b});d=this.attributes;for(c in d){var e=d[c],b=Array.prototype.slice.call(e.array);a.data.attributes[c]={itemSize:e.itemSize,type:e.array.constructor.name,array:b,normalized:e.normalized}}c=this.groups;0<c.length&&(a.data.groups=JSON.parse(JSON.stringify(c)));c=this.boundingSphere;null!==c&&(a.data.boundingSphere={center:c.center.toArray(),radius:c.radius});return a},clone:function(){return(new J).copy(this)},copy:function(a){var b=a.index;null!==b&&this.setIndex(b.clone());var b=a.attributes,
c;for(c in b)this.addAttribute(c,b[c].clone());a=a.groups;c=0;for(b=a.length;c<b;c++){var d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});J.MaxIndex=65535;Da.prototype=Object.assign(Object.create(F.prototype),{constructor:Da,isMesh:!0,setDrawMode:function(a){this.drawMode=a},copy:function(a){F.prototype.copy.call(this,a);this.drawMode=a.drawMode;return this},updateMorphTargets:function(){var a=this.geometry.morphTargets;
if(void 0!==a&&0<a.length){this.morphTargetInfluences=[];this.morphTargetDictionary={};for(var b=0,c=a.length;b<c;b++)this.morphTargetInfluences.push(0),this.morphTargetDictionary[a[b].name]=b}},raycast:function(){function a(a,b,c,d,e,f,g){Ca.barycoordFromPoint(a,b,c,d,u);e.multiplyScalar(u.x);f.multiplyScalar(u.y);g.multiplyScalar(u.z);e.add(f).add(g);return e.clone()}function b(a,b,c,d,e,f,g){var h=a.material;if(null===(1===h.side?c.intersectTriangle(f,e,d,!0,g):c.intersectTriangle(d,e,f,2!==h.side,
g)))return null;t.copy(g);t.applyMatrix4(a.matrixWorld);c=b.ray.origin.distanceTo(t);return c<b.near||c>b.far?null:{distance:c,point:t.clone(),object:a}}function c(c,d,e,f,m,l,p,q){g.fromArray(f,3*l);h.fromArray(f,3*p);k.fromArray(f,3*q);if(c=b(c,d,e,g,h,k,A))m&&(n.fromArray(m,2*l),r.fromArray(m,2*p),w.fromArray(m,2*q),c.uv=a(A,g,h,k,n,r,w)),c.face=new ga(l,p,q,Ca.normal(g,h,k)),c.faceIndex=l;return c}var d=new P,e=new db,f=new Ha,g=new q,h=new q,k=new q,m=new q,l=new q,p=new q,n=new B,r=new B,w=
new B,u=new q,A=new q,t=new q;return function(q,u){var t=this.geometry,C=this.material,H=this.matrixWorld;if(void 0!==C&&(null===t.boundingSphere&&t.computeBoundingSphere(),f.copy(t.boundingSphere),f.applyMatrix4(H),!1!==q.ray.intersectsSphere(f)&&(d.getInverse(H),e.copy(q.ray).applyMatrix4(d),null===t.boundingBox||!1!==e.intersectsBox(t.boundingBox)))){var E,L;if(t.isBufferGeometry){var z,I,C=t.index,H=t.attributes,t=H.position.array;void 0!==H.uv&&(E=H.uv.array);if(null!==C)for(var H=C.array,B=
0,F=H.length;B<F;B+=3){if(C=H[B],z=H[B+1],I=H[B+2],L=c(this,q,e,t,E,C,z,I))L.faceIndex=Math.floor(B/3),u.push(L)}else for(B=0,F=t.length;B<F;B+=9)if(C=B/3,z=C+1,I=C+2,L=c(this,q,e,t,E,C,z,I))L.index=C,u.push(L)}else if(t.isGeometry){var G,J,H=C&&C.isMultiMaterial,B=!0===H?C.materials:null,F=t.vertices;z=t.faces;I=t.faceVertexUvs[0];0<I.length&&(E=I);for(var N=0,O=z.length;N<O;N++){var Q=z[N];L=!0===H?B[Q.materialIndex]:C;if(void 0!==L){I=F[Q.a];G=F[Q.b];J=F[Q.c];if(!0===L.morphTargets){L=t.morphTargets;
var T=this.morphTargetInfluences;g.set(0,0,0);h.set(0,0,0);k.set(0,0,0);for(var P=0,V=L.length;P<V;P++){var S=T[P];if(0!==S){var K=L[P].vertices;g.addScaledVector(m.subVectors(K[Q.a],I),S);h.addScaledVector(l.subVectors(K[Q.b],G),S);k.addScaledVector(p.subVectors(K[Q.c],J),S)}}g.add(I);h.add(G);k.add(J);I=g;G=h;J=k}if(L=b(this,q,e,I,G,J,A))E&&(T=E[N],n.copy(T[0]),r.copy(T[1]),w.copy(T[2]),L.uv=a(A,I,G,J,n,r,w)),L.face=Q,L.faceIndex=N,u.push(L)}}}}}}(),clone:function(){return(new this.constructor(this.geometry,
this.material)).copy(this)}});jb.prototype=Object.create(J.prototype);jb.prototype.constructor=jb;kb.prototype=Object.create(J.prototype);kb.prototype.constructor=kb;ra.prototype=Object.create(F.prototype);ra.prototype.constructor=ra;ra.prototype.isCamera=!0;ra.prototype.getWorldDirection=function(){var a=new ca;return function(b){b=b||new q;this.getWorldQuaternion(a);return b.set(0,0,-1).applyQuaternion(a)}}();ra.prototype.lookAt=function(){var a=new P;return function(b){a.lookAt(this.position,b,
this.up);this.quaternion.setFromRotationMatrix(a)}}();ra.prototype.clone=function(){return(new this.constructor).copy(this)};ra.prototype.copy=function(a){F.prototype.copy.call(this,a);this.matrixWorldInverse.copy(a.matrixWorldInverse);this.projectionMatrix.copy(a.projectionMatrix);return this};Ia.prototype=Object.assign(Object.create(ra.prototype),{constructor:Ia,isPerspectiveCamera:!0,copy:function(a){ra.prototype.copy.call(this,a);this.fov=a.fov;this.zoom=a.zoom;this.near=a.near;this.far=a.far;
this.focus=a.focus;this.aspect=a.aspect;this.view=null===a.view?null:Object.assign({},a.view);this.filmGauge=a.filmGauge;this.filmOffset=a.filmOffset;return this},setFocalLength:function(a){a=.5*this.getFilmHeight()/a;this.fov=2*S.RAD2DEG*Math.atan(a);this.updateProjectionMatrix()},getFocalLength:function(){var a=Math.tan(.5*S.DEG2RAD*this.fov);return.5*this.getFilmHeight()/a},getEffectiveFOV:function(){return 2*S.RAD2DEG*Math.atan(Math.tan(.5*S.DEG2RAD*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*
Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(a,b,c,d,e,f){this.aspect=a/b;this.view={fullWidth:a,fullHeight:b,offsetX:c,offsetY:d,width:e,height:f};this.updateProjectionMatrix()},clearViewOffset:function(){this.view=null;this.updateProjectionMatrix()},updateProjectionMatrix:function(){var a=this.near,b=a*Math.tan(.5*S.DEG2RAD*this.fov)/this.zoom,c=2*b,d=this.aspect*c,e=-.5*d,f=this.view;if(null!==f)var g=f.fullWidth,h=f.fullHeight,
e=e+f.offsetX*d/g,b=b-f.offsetY*c/h,d=f.width/g*d,c=f.height/h*c;f=this.filmOffset;0!==f&&(e+=a*f/this.getFilmWidth());this.projectionMatrix.makeFrustum(e,e+d,b-c,b,a,this.far)},toJSON:function(a){a=F.prototype.toJSON.call(this,a);a.object.fov=this.fov;a.object.zoom=this.zoom;a.object.near=this.near;a.object.far=this.far;a.object.focus=this.focus;a.object.aspect=this.aspect;null!==this.view&&(a.object.view=Object.assign({},this.view));a.object.filmGauge=this.filmGauge;a.object.filmOffset=this.filmOffset;
return a}});Ib.prototype=Object.assign(Object.create(ra.prototype),{constructor:Ib,isOrthographicCamera:!0,copy:function(a){ra.prototype.copy.call(this,a);this.left=a.left;this.right=a.right;this.top=a.top;this.bottom=a.bottom;this.near=a.near;this.far=a.far;this.zoom=a.zoom;this.view=null===a.view?null:Object.assign({},a.view);return this},setViewOffset:function(a,b,c,d,e,f){this.view={fullWidth:a,fullHeight:b,offsetX:c,offsetY:d,width:e,height:f};this.updateProjectionMatrix()},clearViewOffset:function(){this.view=
null;this.updateProjectionMatrix()},updateProjectionMatrix:function(){var a=(this.right-this.left)/(2*this.zoom),b=(this.top-this.bottom)/(2*this.zoom),c=(this.right+this.left)/2,d=(this.top+this.bottom)/2,e=c-a,c=c+a,a=d+b,b=d-b;if(null!==this.view)var c=this.zoom/(this.view.width/this.view.fullWidth),b=this.zoom/(this.view.height/this.view.fullHeight),f=(this.right-this.left)/this.view.width,d=(this.top-this.bottom)/this.view.height,e=e+this.view.offsetX/c*f,c=e+this.view.width/c*f,a=a-this.view.offsetY/
b*d,b=a-this.view.height/b*d;this.projectionMatrix.makeOrthographic(e,c,a,b,this.near,this.far)},toJSON:function(a){a=F.prototype.toJSON.call(this,a);a.object.zoom=this.zoom;a.object.left=this.left;a.object.right=this.right;a.object.top=this.top;a.object.bottom=this.bottom;a.object.near=this.near;a.object.far=this.far;null!==this.view&&(a.object.view=Object.assign({},this.view));return a}});var yf=0;Jb.prototype.isFogExp2=!0;Jb.prototype.clone=function(){return new Jb(this.color.getHex(),this.density)};
Jb.prototype.toJSON=function(a){return{type:"FogExp2",color:this.color.getHex(),density:this.density}};Kb.prototype.isFog=!0;Kb.prototype.clone=function(){return new Kb(this.color.getHex(),this.near,this.far)};Kb.prototype.toJSON=function(a){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}};lb.prototype=Object.create(F.prototype);lb.prototype.constructor=lb;lb.prototype.copy=function(a,b){F.prototype.copy.call(this,a,b);null!==a.background&&(this.background=a.background.clone());
null!==a.fog&&(this.fog=a.fog.clone());null!==a.overrideMaterial&&(this.overrideMaterial=a.overrideMaterial.clone());this.autoUpdate=a.autoUpdate;this.matrixAutoUpdate=a.matrixAutoUpdate;return this};lb.prototype.toJSON=function(a){var b=F.prototype.toJSON.call(this,a);null!==this.background&&(b.object.background=this.background.toJSON(a));null!==this.fog&&(b.object.fog=this.fog.toJSON());return b};Nd.prototype=Object.assign(Object.create(F.prototype),{constructor:Nd,isLensFlare:!0,copy:function(a){F.prototype.copy.call(this,
a);this.positionScreen.copy(a.positionScreen);this.customUpdateCallback=a.customUpdateCallback;for(var b=0,c=a.lensFlares.length;b<c;b++)this.lensFlares.push(a.lensFlares[b]);return this},add:function(a,b,c,d,e,f){void 0===b&&(b=-1);void 0===c&&(c=0);void 0===f&&(f=1);void 0===e&&(e=new G(16777215));void 0===d&&(d=1);c=Math.min(c,Math.max(0,c));this.lensFlares.push({texture:a,size:b,distance:c,x:0,y:0,z:0,scale:1,rotation:0,opacity:f,color:e,blending:d})},updateLensFlares:function(){var a,b=this.lensFlares.length,
c,d=2*-this.positionScreen.x,e=2*-this.positionScreen.y;for(a=0;a<b;a++)c=this.lensFlares[a],c.x=this.positionScreen.x+d*c.distance,c.y=this.positionScreen.y+e*c.distance,c.wantedRotation=c.x*Math.PI*.25,c.rotation+=.25*(c.wantedRotation-c.rotation)}});mb.prototype=Object.create(U.prototype);mb.prototype.constructor=mb;mb.prototype.copy=function(a){U.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.rotation=a.rotation;return this};zc.prototype=Object.assign(Object.create(F.prototype),
{constructor:zc,isSprite:!0,raycast:function(){var a=new q;return function(b,c){a.setFromMatrixPosition(this.matrixWorld);var d=b.ray.distanceSqToPoint(a);d>this.scale.x*this.scale.y/4||c.push({distance:Math.sqrt(d),point:this.position,face:null,object:this})}}(),clone:function(){return(new this.constructor(this.material)).copy(this)}});Ac.prototype=Object.assign(Object.create(F.prototype),{constructor:Ac,copy:function(a){F.prototype.copy.call(this,a,!1);a=a.levels;for(var b=0,c=a.length;b<c;b++){var d=
a[b];this.addLevel(d.object.clone(),d.distance)}return this},addLevel:function(a,b){void 0===b&&(b=0);b=Math.abs(b);for(var c=this.levels,d=0;d<c.length&&!(b<c[d].distance);d++);c.splice(d,0,{distance:b,object:a});this.add(a)},getObjectForDistance:function(a){for(var b=this.levels,c=1,d=b.length;c<d&&!(a<b[c].distance);c++);return b[c-1].object},raycast:function(){var a=new q;return function(b,c){a.setFromMatrixPosition(this.matrixWorld);var d=b.ray.origin.distanceTo(a);this.getObjectForDistance(d).raycast(b,
c)}}(),update:function(){var a=new q,b=new q;return function(c){var d=this.levels;if(1<d.length){a.setFromMatrixPosition(c.matrixWorld);b.setFromMatrixPosition(this.matrixWorld);c=a.distanceTo(b);d[0].object.visible=!0;for(var e=1,f=d.length;e<f;e++)if(c>=d[e].distance)d[e-1].object.visible=!1,d[e].object.visible=!0;else break;for(;e<f;e++)d[e].object.visible=!1}}}(),toJSON:function(a){a=F.prototype.toJSON.call(this,a);a.object.levels=[];for(var b=this.levels,c=0,d=b.length;c<d;c++){var e=b[c];a.object.levels.push({object:e.object.uuid,
distance:e.distance})}return a}});Object.assign(gd.prototype,{calculateInverses:function(){this.boneInverses=[];for(var a=0,b=this.bones.length;a<b;a++){var c=new P;this.bones[a]&&c.getInverse(this.bones[a].matrixWorld);this.boneInverses.push(c)}},pose:function(){for(var a,b=0,c=this.bones.length;b<c;b++)(a=this.bones[b])&&a.matrixWorld.getInverse(this.boneInverses[b]);b=0;for(c=this.bones.length;b<c;b++)if(a=this.bones[b])a.parent&&a.parent.isBone?(a.matrix.getInverse(a.parent.matrixWorld),a.matrix.multiply(a.matrixWorld)):
a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale)},update:function(){var a=new P;return function(){for(var b=0,c=this.bones.length;b<c;b++)a.multiplyMatrices(this.bones[b]?this.bones[b].matrixWorld:this.identityMatrix,this.boneInverses[b]),a.toArray(this.boneMatrices,16*b);this.useVertexTexture&&(this.boneTexture.needsUpdate=!0)}}(),clone:function(){return new gd(this.bones,this.boneInverses,this.useVertexTexture)}});hd.prototype=Object.assign(Object.create(F.prototype),
{constructor:hd,isBone:!0});id.prototype=Object.assign(Object.create(Da.prototype),{constructor:id,isSkinnedMesh:!0,bind:function(a,b){this.skeleton=a;void 0===b&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),b=this.matrixWorld);this.bindMatrix.copy(b);this.bindMatrixInverse.getInverse(b)},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){if(this.geometry&&this.geometry.isGeometry)for(var a=0;a<this.geometry.skinWeights.length;a++){var b=this.geometry.skinWeights[a],
c=1/b.lengthManhattan();Infinity!==c?b.multiplyScalar(c):b.set(1,0,0,0)}else if(this.geometry&&this.geometry.isBufferGeometry)for(var b=new fa,d=this.geometry.attributes.skinWeight,a=0;a<d.count;a++)b.x=d.getX(a),b.y=d.getY(a),b.z=d.getZ(a),b.w=d.getW(a),c=1/b.lengthManhattan(),Infinity!==c?b.multiplyScalar(c):b.set(1,0,0,0),d.setXYZW(a,b.x,b.y,b.z,b.w)},updateMatrixWorld:function(a){Da.prototype.updateMatrixWorld.call(this,!0);"attached"===this.bindMode?this.bindMatrixInverse.getInverse(this.matrixWorld):
"detached"===this.bindMode?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh unrecognized bindMode: "+this.bindMode)},clone:function(){return(new this.constructor(this.geometry,this.material,this.skeleton.useVertexTexture)).copy(this)}});ha.prototype=Object.create(U.prototype);ha.prototype.constructor=ha;ha.prototype.isLineBasicMaterial=!0;ha.prototype.copy=function(a){U.prototype.copy.call(this,a);this.color.copy(a.color);this.linewidth=a.linewidth;this.linecap=a.linecap;
this.linejoin=a.linejoin;return this};Wa.prototype=Object.assign(Object.create(F.prototype),{constructor:Wa,isLine:!0,raycast:function(){var a=new P,b=new db,c=new Ha;return function(d,e){var f=d.linePrecision,f=f*f,g=this.geometry,h=this.matrixWorld;null===g.boundingSphere&&g.computeBoundingSphere();c.copy(g.boundingSphere);c.applyMatrix4(h);if(!1!==d.ray.intersectsSphere(c)){a.getInverse(h);b.copy(d.ray).applyMatrix4(a);var k=new q,m=new q,h=new q,l=new q,p=this&&this.isLineSegments?2:1;if(g.isBufferGeometry){var n=
g.index,r=g.attributes.position.array;if(null!==n)for(var n=n.array,g=0,w=n.length-1;g<w;g+=p){var u=n[g+1];k.fromArray(r,3*n[g]);m.fromArray(r,3*u);u=b.distanceSqToSegment(k,m,l,h);u>f||(l.applyMatrix4(this.matrixWorld),u=d.ray.origin.distanceTo(l),u<d.near||u>d.far||e.push({distance:u,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this}))}else for(g=0,w=r.length/3-1;g<w;g+=p)k.fromArray(r,3*g),m.fromArray(r,3*g+3),u=b.distanceSqToSegment(k,m,l,h),u>f||(l.applyMatrix4(this.matrixWorld),
u=d.ray.origin.distanceTo(l),u<d.near||u>d.far||e.push({distance:u,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this}))}else if(g.isGeometry)for(k=g.vertices,m=k.length,g=0;g<m-1;g+=p)u=b.distanceSqToSegment(k[g],k[g+1],l,h),u>f||(l.applyMatrix4(this.matrixWorld),u=d.ray.origin.distanceTo(l),u<d.near||u>d.far||e.push({distance:u,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this}))}}}(),clone:function(){return(new this.constructor(this.geometry,
this.material)).copy(this)}});ea.prototype=Object.assign(Object.create(Wa.prototype),{constructor:ea,isLineSegments:!0});Pa.prototype=Object.create(U.prototype);Pa.prototype.constructor=Pa;Pa.prototype.isPointsMaterial=!0;Pa.prototype.copy=function(a){U.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.size=a.size;this.sizeAttenuation=a.sizeAttenuation;return this};Lb.prototype=Object.assign(Object.create(F.prototype),{constructor:Lb,isPoints:!0,raycast:function(){var a=new P,
b=new db,c=new Ha;return function(d,e){function f(a,c){var f=b.distanceSqToPoint(a);if(f<l){var h=b.closestPointToPoint(a);h.applyMatrix4(k);var m=d.ray.origin.distanceTo(h);m<d.near||m>d.far||e.push({distance:m,distanceToRay:Math.sqrt(f),point:h.clone(),index:c,face:null,object:g})}}var g=this,h=this.geometry,k=this.matrixWorld,m=d.params.Points.threshold;null===h.boundingSphere&&h.computeBoundingSphere();c.copy(h.boundingSphere);c.applyMatrix4(k);if(!1!==d.ray.intersectsSphere(c)){a.getInverse(k);
b.copy(d.ray).applyMatrix4(a);var m=m/((this.scale.x+this.scale.y+this.scale.z)/3),l=m*m,m=new q;if(h.isBufferGeometry){var p=h.index,h=h.attributes.position.array;if(null!==p)for(var n=p.array,p=0,r=n.length;p<r;p++){var w=n[p];m.fromArray(h,3*w);f(m,w)}else for(p=0,n=h.length/3;p<n;p++)m.fromArray(h,3*p),f(m,p)}else for(m=h.vertices,p=0,n=m.length;p<n;p++)f(m[p],p)}}}(),clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)}});Bc.prototype=Object.assign(Object.create(F.prototype),
{constructor:Bc});jd.prototype=Object.create(da.prototype);jd.prototype.constructor=jd;Mb.prototype=Object.create(da.prototype);Mb.prototype.constructor=Mb;Mb.prototype.isCompressedTexture=!0;kd.prototype=Object.create(da.prototype);kd.prototype.constructor=kd;Cc.prototype=Object.create(da.prototype);Cc.prototype.constructor=Cc;Cc.prototype.isDepthTexture=!0;Nb.prototype=Object.create(J.prototype);Nb.prototype.constructor=Nb;Ob.prototype=Object.create(J.prototype);Ob.prototype.constructor=Ob;Dc.prototype=
Object.create(R.prototype);Dc.prototype.constructor=Dc;ya.prototype=Object.create(J.prototype);ya.prototype.constructor=ya;Pb.prototype=Object.create(ya.prototype);Pb.prototype.constructor=Pb;Ec.prototype=Object.create(R.prototype);Ec.prototype.constructor=Ec;nb.prototype=Object.create(ya.prototype);nb.prototype.constructor=nb;Fc.prototype=Object.create(R.prototype);Fc.prototype.constructor=Fc;Qb.prototype=Object.create(ya.prototype);Qb.prototype.constructor=Qb;Gc.prototype=Object.create(R.prototype);
Gc.prototype.constructor=Gc;Rb.prototype=Object.create(ya.prototype);Rb.prototype.constructor=Rb;Hc.prototype=Object.create(R.prototype);Hc.prototype.constructor=Hc;Ic.prototype=Object.create(R.prototype);Ic.prototype.constructor=Ic;Sb.prototype=Object.create(J.prototype);Sb.prototype.constructor=Sb;Jc.prototype=Object.create(R.prototype);Jc.prototype.constructor=Jc;Tb.prototype=Object.create(J.prototype);Tb.prototype.constructor=Tb;Kc.prototype=Object.create(R.prototype);Kc.prototype.constructor=
Kc;Ub.prototype=Object.create(J.prototype);Ub.prototype.constructor=Ub;Lc.prototype=Object.create(R.prototype);Lc.prototype.constructor=Lc;var pa={area:function(a){for(var b=a.length,c=0,d=b-1,e=0;e<b;d=e++)c+=a[d].x*a[e].y-a[e].x*a[d].y;return.5*c},triangulate:function(){return function(a,b){var c=a.length;if(3>c)return null;var d=[],e=[],f=[],g,h,k;if(0<pa.area(a))for(h=0;h<c;h++)e[h]=h;else for(h=0;h<c;h++)e[h]=c-1-h;var m=2*c;for(h=c-1;2<c;){if(0>=m--){console.warn("THREE.ShapeUtils: Unable to triangulate polygon! in triangulate()");
break}g=h;c<=g&&(g=0);h=g+1;c<=h&&(h=0);k=h+1;c<=k&&(k=0);var l;a:{var p,n,r,q,u,A,t,v;p=a[e[g]].x;n=a[e[g]].y;r=a[e[h]].x;q=a[e[h]].y;u=a[e[k]].x;A=a[e[k]].y;if(0>=(r-p)*(A-n)-(q-n)*(u-p))l=!1;else{var M,y,C,H,E,z,B,I,F,G;M=u-r;y=A-q;C=p-u;H=n-A;E=r-p;z=q-n;for(l=0;l<c;l++)if(t=a[e[l]].x,v=a[e[l]].y,!(t===p&&v===n||t===r&&v===q||t===u&&v===A)&&(B=t-p,I=v-n,F=t-r,G=v-q,t-=u,v-=A,F=M*G-y*F,B=E*I-z*B,I=C*v-H*t,F>=-Number.EPSILON&&I>=-Number.EPSILON&&B>=-Number.EPSILON)){l=!1;break a}l=!0}}if(l){d.push([a[e[g]],
a[e[h]],a[e[k]]]);f.push([e[g],e[h],e[k]]);g=h;for(k=h+1;k<c;g++,k++)e[g]=e[k];c--;m=2*c}}return b?f:d}}(),triangulateShape:function(a,b){function c(a){var b=a.length;2<b&&a[b-1].equals(a[0])&&a.pop()}function d(a,b,c){return a.x!==b.x?a.x<b.x?a.x<=c.x&&c.x<=b.x:b.x<=c.x&&c.x<=a.x:a.y<b.y?a.y<=c.y&&c.y<=b.y:b.y<=c.y&&c.y<=a.y}function e(a,b,c,e,f){var g=b.x-a.x,h=b.y-a.y,k=e.x-c.x,m=e.y-c.y,l=a.x-c.x,n=a.y-c.y,p=h*k-g*m,q=h*l-g*n;if(Math.abs(p)>Number.EPSILON){if(0<p){if(0>q||q>p)return[];k=m*l-k*
n;if(0>k||k>p)return[]}else{if(0<q||q<p)return[];k=m*l-k*n;if(0<k||k<p)return[]}if(0===k)return!f||0!==q&&q!==p?[a]:[];if(k===p)return!f||0!==q&&q!==p?[b]:[];if(0===q)return[c];if(q===p)return[e];f=k/p;return[{x:a.x+f*g,y:a.y+f*h}]}if(0!==q||m*l!==k*n)return[];h=0===g&&0===h;k=0===k&&0===m;if(h&&k)return a.x!==c.x||a.y!==c.y?[]:[a];if(h)return d(c,e,a)?[a]:[];if(k)return d(a,b,c)?[c]:[];0!==g?(a.x<b.x?(g=a,k=a.x,h=b,a=b.x):(g=b,k=b.x,h=a,a=a.x),c.x<e.x?(b=c,p=c.x,m=e,c=e.x):(b=e,p=e.x,m=c,c=c.x)):
(a.y<b.y?(g=a,k=a.y,h=b,a=b.y):(g=b,k=b.y,h=a,a=a.y),c.y<e.y?(b=c,p=c.y,m=e,c=e.y):(b=e,p=e.y,m=c,c=c.y));return k<=p?a<p?[]:a===p?f?[]:[b]:a<=c?[b,h]:[b,m]:k>c?[]:k===c?f?[]:[g]:a<=c?[g,h]:[g,m]}function f(a,b,c,d){var e=b.x-a.x,f=b.y-a.y;b=c.x-a.x;c=c.y-a.y;var g=d.x-a.x;d=d.y-a.y;a=e*c-f*b;e=e*d-f*g;return Math.abs(a)>Number.EPSILON?(b=g*c-d*b,0<a?0<=e&&0<=b:0<=e||0<=b):0<e}c(a);b.forEach(c);var g,h,k,m,l,p={};k=a.concat();g=0;for(h=b.length;g<h;g++)Array.prototype.push.apply(k,b[g]);g=0;for(h=
k.length;g<h;g++)l=k[g].x+":"+k[g].y,void 0!==p[l]&&console.warn("THREE.ShapeUtils: Duplicate point",l,g),p[l]=g;g=function(a,b){function c(a,b){var d=h.length-1,e=a-1;0>e&&(e=d);var g=a+1;g>d&&(g=0);d=f(h[a],h[e],h[g],k[b]);if(!d)return!1;d=k.length-1;e=b-1;0>e&&(e=d);g=b+1;g>d&&(g=0);return(d=f(k[b],k[e],k[g],h[a]))?!0:!1}function d(a,b){var c,f;for(c=0;c<h.length;c++)if(f=c+1,f%=h.length,f=e(a,b,h[c],h[f],!0),0<f.length)return!0;return!1}function g(a,c){var d,f,h,k;for(d=0;d<m.length;d++)for(f=
b[m[d]],h=0;h<f.length;h++)if(k=h+1,k%=f.length,k=e(a,c,f[h],f[k],!0),0<k.length)return!0;return!1}var h=a.concat(),k,m=[],l,n,p,q,x,z=[],B,F,G,J=0;for(l=b.length;J<l;J++)m.push(J);B=0;for(var N=2*m.length;0<m.length;){N--;if(0>N){console.log("Infinite Loop! Holes left:"+m.length+", Probably Hole outside Shape!");break}for(n=B;n<h.length;n++){p=h[n];l=-1;for(J=0;J<m.length;J++)if(q=m[J],x=p.x+":"+p.y+":"+q,void 0===z[x]){k=b[q];for(F=0;F<k.length;F++)if(q=k[F],c(n,F)&&!d(p,q)&&!g(p,q)){l=F;m.splice(J,
1);B=h.slice(0,n+1);q=h.slice(n);F=k.slice(l);G=k.slice(0,l+1);h=B.concat(F).concat(G).concat(q);B=n;break}if(0<=l)break;z[x]=!0}if(0<=l)break}}return h}(a,b);var n=pa.triangulate(g,!1);g=0;for(h=n.length;g<h;g++)for(m=n[g],k=0;3>k;k++)l=m[k].x+":"+m[k].y,l=p[l],void 0!==l&&(m[k]=l);return n.concat()},isClockWise:function(a){return 0>pa.area(a)},b2:function(){return function(a,b,c,d){var e=1-a;return e*e*b+2*(1-a)*a*c+a*a*d}}(),b3:function(){return function(a,b,c,d,e){var f=1-a,g=1-a;return f*f*f*
b+3*g*g*a*c+3*(1-a)*a*a*d+a*a*a*e}}()};Na.prototype=Object.create(R.prototype);Na.prototype.constructor=Na;Na.prototype.addShapeList=function(a,b){for(var c=a.length,d=0;d<c;d++)this.addShape(a[d],b)};Na.prototype.addShape=function(a,b){function c(a,b,c){b||console.error("THREE.ExtrudeGeometry: vec does not exist");return b.clone().multiplyScalar(c).add(a)}function d(a,b,c){var d,e,f;e=a.x-b.x;f=a.y-b.y;d=c.x-a.x;var g=c.y-a.y,h=e*e+f*f;if(Math.abs(e*g-f*d)>Number.EPSILON){var k=Math.sqrt(h),m=Math.sqrt(d*
d+g*g),h=b.x-f/k;b=b.y+e/k;g=((c.x-g/m-h)*g-(c.y+d/m-b)*d)/(e*g-f*d);d=h+e*g-a.x;e=b+f*g-a.y;f=d*d+e*e;if(2>=f)return new B(d,e);f=Math.sqrt(f/2)}else a=!1,e>Number.EPSILON?d>Number.EPSILON&&(a=!0):e<-Number.EPSILON?d<-Number.EPSILON&&(a=!0):Math.sign(f)===Math.sign(g)&&(a=!0),a?(d=-f,f=Math.sqrt(h)):(d=e,e=f,f=Math.sqrt(h/2));return new B(d/f,e/f)}function e(a,b){var c,d;for(K=a.length;0<=--K;){c=K;d=K-1;0>d&&(d=a.length-1);var e,f=r+2*l;for(e=0;e<f;e++){var g=U*e,h=U*(e+1),k=b+c+g,g=b+d+g,m=b+d+
h,h=b+c+h,k=k+I,g=g+I,m=m+I,h=h+I;G.faces.push(new ga(k,g,h,null,null,1));G.faces.push(new ga(g,m,h,null,null,1));k=t.generateSideWallUV(G,k,g,m,h);G.faceVertexUvs[0].push([k[0],k[1],k[3]]);G.faceVertexUvs[0].push([k[1],k[2],k[3]])}}}function f(a,b,c){G.vertices.push(new q(a,b,c))}function g(a,b,c){a+=I;b+=I;c+=I;G.faces.push(new ga(a,b,c,null,null,0));a=t.generateTopUV(G,a,b,c);G.faceVertexUvs[0].push(a)}var h=void 0!==b.amount?b.amount:100,k=void 0!==b.bevelThickness?b.bevelThickness:6,m=void 0!==
b.bevelSize?b.bevelSize:k-2,l=void 0!==b.bevelSegments?b.bevelSegments:3,p=void 0!==b.bevelEnabled?b.bevelEnabled:!0,n=void 0!==b.curveSegments?b.curveSegments:12,r=void 0!==b.steps?b.steps:1,w=b.extrudePath,u,A=!1,t=void 0!==b.UVGenerator?b.UVGenerator:Na.WorldUVGenerator,v,z,y,C;w&&(u=w.getSpacedPoints(r),A=!0,p=!1,v=void 0!==b.frames?b.frames:w.computeFrenetFrames(r,!1),z=new q,y=new q,C=new q);p||(m=k=l=0);var H,E,F,G=this,I=this.vertices.length,w=a.extractPoints(n),n=w.shape,J=w.holes;if(w=!pa.isClockWise(n)){n=
n.reverse();E=0;for(F=J.length;E<F;E++)H=J[E],pa.isClockWise(H)&&(J[E]=H.reverse());w=!1}var P=pa.triangulateShape(n,J),S=n;E=0;for(F=J.length;E<F;E++)H=J[E],n=n.concat(H);var R,N,O,Q,T,U=n.length,V,W=P.length,w=[],K=0;O=S.length;R=O-1;for(N=K+1;K<O;K++,R++,N++)R===O&&(R=0),N===O&&(N=0),w[K]=d(S[K],S[R],S[N]);var X=[],Z,ba=w.concat();E=0;for(F=J.length;E<F;E++){H=J[E];Z=[];K=0;O=H.length;R=O-1;for(N=K+1;K<O;K++,R++,N++)R===O&&(R=0),N===O&&(N=0),Z[K]=d(H[K],H[R],H[N]);X.push(Z);ba=ba.concat(Z)}for(R=
0;R<l;R++){O=R/l;Q=k*Math.cos(O*Math.PI/2);N=m*Math.sin(O*Math.PI/2);K=0;for(O=S.length;K<O;K++)T=c(S[K],w[K],N),f(T.x,T.y,-Q);E=0;for(F=J.length;E<F;E++)for(H=J[E],Z=X[E],K=0,O=H.length;K<O;K++)T=c(H[K],Z[K],N),f(T.x,T.y,-Q)}N=m;for(K=0;K<U;K++)T=p?c(n[K],ba[K],N):n[K],A?(y.copy(v.normals[0]).multiplyScalar(T.x),z.copy(v.binormals[0]).multiplyScalar(T.y),C.copy(u[0]).add(y).add(z),f(C.x,C.y,C.z)):f(T.x,T.y,0);for(O=1;O<=r;O++)for(K=0;K<U;K++)T=p?c(n[K],ba[K],N):n[K],A?(y.copy(v.normals[O]).multiplyScalar(T.x),
z.copy(v.binormals[O]).multiplyScalar(T.y),C.copy(u[O]).add(y).add(z),f(C.x,C.y,C.z)):f(T.x,T.y,h/r*O);for(R=l-1;0<=R;R--){O=R/l;Q=k*Math.cos(O*Math.PI/2);N=m*Math.sin(O*Math.PI/2);K=0;for(O=S.length;K<O;K++)T=c(S[K],w[K],N),f(T.x,T.y,h+Q);E=0;for(F=J.length;E<F;E++)for(H=J[E],Z=X[E],K=0,O=H.length;K<O;K++)T=c(H[K],Z[K],N),A?f(T.x,T.y+u[r-1].y,u[r-1].x+Q):f(T.x,T.y,h+Q)}(function(){if(p){var a=0*U;for(K=0;K<W;K++)V=P[K],g(V[2]+a,V[1]+a,V[0]+a);a=U*(r+2*l);for(K=0;K<W;K++)V=P[K],g(V[0]+a,V[1]+a,V[2]+
a)}else{for(K=0;K<W;K++)V=P[K],g(V[2],V[1],V[0]);for(K=0;K<W;K++)V=P[K],g(V[0]+U*r,V[1]+U*r,V[2]+U*r)}})();(function(){var a=0;e(S,a);a+=S.length;E=0;for(F=J.length;E<F;E++)H=J[E],e(H,a),a+=H.length})()};Na.WorldUVGenerator={generateTopUV:function(a,b,c,d){a=a.vertices;b=a[b];c=a[c];d=a[d];return[new B(b.x,b.y),new B(c.x,c.y),new B(d.x,d.y)]},generateSideWallUV:function(a,b,c,d,e){a=a.vertices;b=a[b];c=a[c];d=a[d];e=a[e];return.01>Math.abs(b.y-c.y)?[new B(b.x,1-b.z),new B(c.x,1-c.z),new B(d.x,1-d.z),
new B(e.x,1-e.z)]:[new B(b.y,1-b.z),new B(c.y,1-c.z),new B(d.y,1-d.z),new B(e.y,1-e.z)]}};Mc.prototype=Object.create(Na.prototype);Mc.prototype.constructor=Mc;ob.prototype=Object.create(J.prototype);ob.prototype.constructor=ob;Nc.prototype=Object.create(R.prototype);Nc.prototype.constructor=Nc;Vb.prototype=Object.create(J.prototype);Vb.prototype.constructor=Vb;Oc.prototype=Object.create(R.prototype);Oc.prototype.constructor=Oc;Pc.prototype=Object.create(R.prototype);Pc.prototype.constructor=Pc;Wb.prototype=
Object.create(J.prototype);Wb.prototype.constructor=Wb;Qc.prototype=Object.create(R.prototype);Qc.prototype.constructor=Qc;fb.prototype=Object.create(J.prototype);fb.prototype.constructor=fb;Xb.prototype=Object.create(R.prototype);Xb.prototype.constructor=Xb;Yb.prototype=Object.create(J.prototype);Yb.prototype.constructor=Yb;Xa.prototype=Object.create(J.prototype);Xa.prototype.constructor=Xa;pb.prototype=Object.create(R.prototype);pb.prototype.constructor=pb;Rc.prototype=Object.create(pb.prototype);
Rc.prototype.constructor=Rc;Sc.prototype=Object.create(Xa.prototype);Sc.prototype.constructor=Sc;Zb.prototype=Object.create(J.prototype);Zb.prototype.constructor=Zb;Tc.prototype=Object.create(R.prototype);Tc.prototype.constructor=Tc;$b.prototype=Object.create(R.prototype);$b.prototype.constructor=$b;var Ga=Object.freeze({WireframeGeometry:Nb,ParametricGeometry:Dc,ParametricBufferGeometry:Ob,TetrahedronGeometry:Ec,TetrahedronBufferGeometry:Pb,OctahedronGeometry:Fc,OctahedronBufferGeometry:nb,IcosahedronGeometry:Gc,
IcosahedronBufferGeometry:Qb,DodecahedronGeometry:Hc,DodecahedronBufferGeometry:Rb,PolyhedronGeometry:Ic,PolyhedronBufferGeometry:ya,TubeGeometry:Jc,TubeBufferGeometry:Sb,TorusKnotGeometry:Kc,TorusKnotBufferGeometry:Tb,TorusGeometry:Lc,TorusBufferGeometry:Ub,TextGeometry:Mc,SphereBufferGeometry:ob,SphereGeometry:Nc,RingGeometry:Oc,RingBufferGeometry:Vb,PlaneBufferGeometry:kb,PlaneGeometry:Pc,LatheGeometry:Qc,LatheBufferGeometry:Wb,ShapeGeometry:Xb,ShapeBufferGeometry:fb,ExtrudeGeometry:Na,EdgesGeometry:Yb,
ConeGeometry:Rc,ConeBufferGeometry:Sc,CylinderGeometry:pb,CylinderBufferGeometry:Xa,CircleBufferGeometry:Zb,CircleGeometry:Tc,BoxBufferGeometry:jb,BoxGeometry:$b});ac.prototype=Object.create(Ja.prototype);ac.prototype.constructor=ac;ac.prototype.isShadowMaterial=!0;bc.prototype=Object.create(Ja.prototype);bc.prototype.constructor=bc;bc.prototype.isRawShaderMaterial=!0;Uc.prototype={constructor:Uc,isMultiMaterial:!0,toJSON:function(a){for(var b={metadata:{version:4.2,type:"material",generator:"MaterialExporter"},
uuid:this.uuid,type:this.type,materials:[]},c=this.materials,d=0,e=c.length;d<e;d++){var f=c[d].toJSON(a);delete f.metadata;b.materials.push(f)}b.visible=this.visible;return b},clone:function(){for(var a=new this.constructor,b=0;b<this.materials.length;b++)a.materials.push(this.materials[b].clone());a.visible=this.visible;return a}};Qa.prototype=Object.create(U.prototype);Qa.prototype.constructor=Qa;Qa.prototype.isMeshStandardMaterial=!0;Qa.prototype.copy=function(a){U.prototype.copy.call(this,a);
this.defines={STANDARD:""};this.color.copy(a.color);this.roughness=a.roughness;this.metalness=a.metalness;this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;
this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.roughnessMap=a.roughnessMap;this.metalnessMap=a.metalnessMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.envMapIntensity=a.envMapIntensity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=
a.morphNormals;return this};qb.prototype=Object.create(Qa.prototype);qb.prototype.constructor=qb;qb.prototype.isMeshPhysicalMaterial=!0;qb.prototype.copy=function(a){Qa.prototype.copy.call(this,a);this.defines={PHYSICAL:""};this.reflectivity=a.reflectivity;this.clearCoat=a.clearCoat;this.clearCoatRoughness=a.clearCoatRoughness;return this};Ea.prototype=Object.create(U.prototype);Ea.prototype.constructor=Ea;Ea.prototype.isMeshPhongMaterial=!0;Ea.prototype.copy=function(a){U.prototype.copy.call(this,
a);this.color.copy(a.color);this.specular.copy(a.specular);this.shininess=a.shininess;this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=
a.displacementScale;this.displacementBias=a.displacementBias;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};rb.prototype=
Object.create(Ea.prototype);rb.prototype.constructor=rb;rb.prototype.isMeshToonMaterial=!0;rb.prototype.copy=function(a){Ea.prototype.copy.call(this,a);this.gradientMap=a.gradientMap;return this};sb.prototype=Object.create(U.prototype);sb.prototype.constructor=sb;sb.prototype.isMeshNormalMaterial=!0;sb.prototype.copy=function(a){U.prototype.copy.call(this,a);this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;return this};tb.prototype=Object.create(U.prototype);tb.prototype.constructor=
tb;tb.prototype.isMeshLambertMaterial=!0;tb.prototype.copy=function(a){U.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;
this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};ub.prototype=Object.create(U.prototype);ub.prototype.constructor=ub;ub.prototype.isLineDashedMaterial=!0;ub.prototype.copy=function(a){U.prototype.copy.call(this,a);this.color.copy(a.color);this.linewidth=
a.linewidth;this.scale=a.scale;this.dashSize=a.dashSize;this.gapSize=a.gapSize;return this};var Kf=Object.freeze({ShadowMaterial:ac,SpriteMaterial:mb,RawShaderMaterial:bc,ShaderMaterial:Ja,PointsMaterial:Pa,MultiMaterial:Uc,MeshPhysicalMaterial:qb,MeshStandardMaterial:Qa,MeshPhongMaterial:Ea,MeshToonMaterial:rb,MeshNormalMaterial:sb,MeshLambertMaterial:tb,MeshDepthMaterial:cb,MeshBasicMaterial:Ma,LineDashedMaterial:ub,LineBasicMaterial:ha,Material:U}),le={enabled:!1,files:{},add:function(a,b){!1!==
this.enabled&&(this.files[a]=b)},get:function(a){if(!1!==this.enabled)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}},ua=new Od;Object.assign(Oa.prototype,{load:function(a,b,c,d){void 0===a&&(a="");void 0!==this.path&&(a=this.path+a);var e=this,f=le.get(a);if(void 0!==f)return e.manager.itemStart(a),setTimeout(function(){b&&b(f);e.manager.itemEnd(a)},0),f;var g=a.match(/^data:(.*?)(;base64)?,(.*)$/);if(g){var h=g[1],k=!!g[2],g=g[3],g=window.decodeURIComponent(g);
k&&(g=window.atob(g));try{var m,l=(this.responseType||"").toLowerCase();switch(l){case "arraybuffer":case "blob":m=new ArrayBuffer(g.length);for(var p=new Uint8Array(m),k=0;k<g.length;k++)p[k]=g.charCodeAt(k);"blob"===l&&(m=new Blob([m],{type:h}));break;case "document":m=(new DOMParser).parseFromString(g,h);break;case "json":m=JSON.parse(g);break;default:m=g}window.setTimeout(function(){b&&b(m);e.manager.itemEnd(a)},0)}catch(q){window.setTimeout(function(){d&&d(q);e.manager.itemError(a)},0)}}else{var n=
new XMLHttpRequest;n.open("GET",a,!0);n.addEventListener("load",function(c){var f=c.target.response;le.add(a,f);200===this.status?(b&&b(f),e.manager.itemEnd(a)):0===this.status?(console.warn("THREE.FileLoader: HTTP Status 0 received."),b&&b(f),e.manager.itemEnd(a)):(d&&d(c),e.manager.itemError(a))},!1);void 0!==c&&n.addEventListener("progress",function(a){c(a)},!1);n.addEventListener("error",function(b){d&&d(b);e.manager.itemError(a)},!1);void 0!==this.responseType&&(n.responseType=this.responseType);
void 0!==this.withCredentials&&(n.withCredentials=this.withCredentials);n.overrideMimeType&&n.overrideMimeType(void 0!==this.mimeType?this.mimeType:"text/plain");n.send(null)}e.manager.itemStart(a);return n},setPath:function(a){this.path=a;return this},setResponseType:function(a){this.responseType=a;return this},setWithCredentials:function(a){this.withCredentials=a;return this},setMimeType:function(a){this.mimeType=a;return this}});Object.assign(Ce.prototype,{load:function(a,b,c,d){function e(e){k.load(a[e],
function(a){a=f._parser(a,!0);g[e]={width:a.width,height:a.height,format:a.format,mipmaps:a.mipmaps};m+=1;6===m&&(1===a.mipmapCount&&(h.minFilter=1006),h.format=a.format,h.needsUpdate=!0,b&&b(h))},c,d)}var f=this,g=[],h=new Mb;h.image=g;var k=new Oa(this.manager);k.setPath(this.path);k.setResponseType("arraybuffer");if(Array.isArray(a))for(var m=0,l=0,p=a.length;l<p;++l)e(l);else k.load(a,function(a){a=f._parser(a,!0);if(a.isCubemap)for(var c=a.mipmaps.length/a.mipmapCount,d=0;d<c;d++){g[d]={mipmaps:[]};
for(var e=0;e<a.mipmapCount;e++)g[d].mipmaps.push(a.mipmaps[d*a.mipmapCount+e]),g[d].format=a.format,g[d].width=a.width,g[d].height=a.height}else h.image.width=a.width,h.image.height=a.height,h.mipmaps=a.mipmaps;1===a.mipmapCount&&(h.minFilter=1006);h.format=a.format;h.needsUpdate=!0;b&&b(h)},c,d);return h},setPath:function(a){this.path=a;return this}});Object.assign(Pd.prototype,{load:function(a,b,c,d){var e=this,f=new gb,g=new Oa(this.manager);g.setResponseType("arraybuffer");g.load(a,function(a){if(a=
e._parser(a))void 0!==a.image?f.image=a.image:void 0!==a.data&&(f.image.width=a.width,f.image.height=a.height,f.image.data=a.data),f.wrapS=void 0!==a.wrapS?a.wrapS:1001,f.wrapT=void 0!==a.wrapT?a.wrapT:1001,f.magFilter=void 0!==a.magFilter?a.magFilter:1006,f.minFilter=void 0!==a.minFilter?a.minFilter:1008,f.anisotropy=void 0!==a.anisotropy?a.anisotropy:1,void 0!==a.format&&(f.format=a.format),void 0!==a.type&&(f.type=a.type),void 0!==a.mipmaps&&(f.mipmaps=a.mipmaps),1===a.mipmapCount&&(f.minFilter=
1006),f.needsUpdate=!0,b&&b(f,a)},c,d);return f}});Object.assign(Vc.prototype,{load:function(a,b,c,d){var e=this,f=document.createElementNS("http://www.w3.org/1999/xhtml","img");f.onload=function(){f.onload=null;URL.revokeObjectURL(f.src);b&&b(f);e.manager.itemEnd(a)};f.onerror=d;if(0===a.indexOf("data:"))f.src=a;else if(void 0!==this.crossOrigin)f.crossOrigin=this.crossOrigin,f.src=a;else{var g=new Oa;g.setPath(this.path);g.setResponseType("blob");g.setWithCredentials(this.withCredentials);g.load(a,
function(a){f.src=URL.createObjectURL(a)},c,d)}e.manager.itemStart(a);return f},setCrossOrigin:function(a){this.crossOrigin=a;return this},setWithCredentials:function(a){this.withCredentials=a;return this},setPath:function(a){this.path=a;return this}});Object.assign(Qd.prototype,{load:function(a,b,c,d){function e(c){g.load(a[c],function(a){f.images[c]=a;h++;6===h&&(f.needsUpdate=!0,b&&b(f))},void 0,d)}var f=new ab,g=new Vc(this.manager);g.setCrossOrigin(this.crossOrigin);g.setPath(this.path);var h=
0;for(c=0;c<a.length;++c)e(c);return f},setCrossOrigin:function(a){this.crossOrigin=a;return this},setPath:function(a){this.path=a;return this}});Object.assign(ld.prototype,{load:function(a,b,c,d){var e=new da,f=new Vc(this.manager);f.setCrossOrigin(this.crossOrigin);f.setWithCredentials(this.withCredentials);f.setPath(this.path);f.load(a,function(c){var d=0<a.search(/\.(jpg|jpeg)$/)||0===a.search(/^data\:image\/jpeg/);e.format=d?1022:1023;e.image=c;e.needsUpdate=!0;void 0!==b&&b(e)},c,d);return e},
setCrossOrigin:function(a){this.crossOrigin=a;return this},setWithCredentials:function(a){this.withCredentials=a;return this},setPath:function(a){this.path=a;return this}});ma.prototype=Object.assign(Object.create(F.prototype),{constructor:ma,isLight:!0,copy:function(a){F.prototype.copy.call(this,a);this.color.copy(a.color);this.intensity=a.intensity;return this},toJSON:function(a){a=F.prototype.toJSON.call(this,a);a.object.color=this.color.getHex();a.object.intensity=this.intensity;void 0!==this.groundColor&&
(a.object.groundColor=this.groundColor.getHex());void 0!==this.distance&&(a.object.distance=this.distance);void 0!==this.angle&&(a.object.angle=this.angle);void 0!==this.decay&&(a.object.decay=this.decay);void 0!==this.penumbra&&(a.object.penumbra=this.penumbra);void 0!==this.shadow&&(a.object.shadow=this.shadow.toJSON());return a}});md.prototype=Object.assign(Object.create(ma.prototype),{constructor:md,isHemisphereLight:!0,copy:function(a){ma.prototype.copy.call(this,a);this.groundColor.copy(a.groundColor);
return this}});Object.assign(vb.prototype,{copy:function(a){this.camera=a.camera.clone();this.bias=a.bias;this.radius=a.radius;this.mapSize.copy(a.mapSize);return this},clone:function(){return(new this.constructor).copy(this)},toJSON:function(){var a={};0!==this.bias&&(a.bias=this.bias);1!==this.radius&&(a.radius=this.radius);if(512!==this.mapSize.x||512!==this.mapSize.y)a.mapSize=this.mapSize.toArray();a.camera=this.camera.toJSON(!1).object;delete a.camera.matrix;return a}});nd.prototype=Object.assign(Object.create(vb.prototype),
{constructor:nd,isSpotLightShadow:!0,update:function(a){var b=2*S.RAD2DEG*a.angle,c=this.mapSize.width/this.mapSize.height;a=a.distance||500;var d=this.camera;if(b!==d.fov||c!==d.aspect||a!==d.far)d.fov=b,d.aspect=c,d.far=a,d.updateProjectionMatrix()}});od.prototype=Object.assign(Object.create(ma.prototype),{constructor:od,isSpotLight:!0,copy:function(a){ma.prototype.copy.call(this,a);this.distance=a.distance;this.angle=a.angle;this.penumbra=a.penumbra;this.decay=a.decay;this.target=a.target.clone();
this.shadow=a.shadow.clone();return this}});pd.prototype=Object.assign(Object.create(ma.prototype),{constructor:pd,isPointLight:!0,copy:function(a){ma.prototype.copy.call(this,a);this.distance=a.distance;this.decay=a.decay;this.shadow=a.shadow.clone();return this}});qd.prototype=Object.assign(Object.create(vb.prototype),{constructor:qd});rd.prototype=Object.assign(Object.create(ma.prototype),{constructor:rd,isDirectionalLight:!0,copy:function(a){ma.prototype.copy.call(this,a);this.target=a.target.clone();
this.shadow=a.shadow.clone();return this}});sd.prototype=Object.assign(Object.create(ma.prototype),{constructor:sd,isAmbientLight:!0});var ba={arraySlice:function(a,b,c){return ba.isTypedArray(a)?new a.constructor(a.subarray(b,c)):a.slice(b,c)},convertArray:function(a,b,c){return!a||!c&&a.constructor===b?a:"number"===typeof b.BYTES_PER_ELEMENT?new b(a):Array.prototype.slice.call(a)},isTypedArray:function(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)},getKeyframeOrder:function(a){for(var b=
a.length,c=Array(b),d=0;d!==b;++d)c[d]=d;c.sort(function(b,c){return a[b]-a[c]});return c},sortedArray:function(a,b,c){for(var d=a.length,e=new a.constructor(d),f=0,g=0;g!==d;++f)for(var h=c[f]*b,k=0;k!==b;++k)e[g++]=a[h+k];return e},flattenJSON:function(a,b,c,d){for(var e=1,f=a[0];void 0!==f&&void 0===f[d];)f=a[e++];if(void 0!==f){var g=f[d];if(void 0!==g)if(Array.isArray(g)){do g=f[d],void 0!==g&&(b.push(f.time),c.push.apply(c,g)),f=a[e++];while(void 0!==f)}else if(void 0!==g.toArray){do g=f[d],
void 0!==g&&(b.push(f.time),g.toArray(c,c.length)),f=a[e++];while(void 0!==f)}else{do g=f[d],void 0!==g&&(b.push(f.time),c.push(g)),f=a[e++];while(void 0!==f)}}}};qa.prototype={constructor:qa,evaluate:function(a){var b=this.parameterPositions,c=this._cachedIndex,d=b[c],e=b[c-1];a:{b:{c:{d:if(!(a<d)){for(var f=c+2;;){if(void 0===d){if(a<e)break d;this._cachedIndex=c=b.length;return this.afterEnd_(c-1,a,e)}if(c===f)break;e=d;d=b[++c];if(a<d)break b}d=b.length;break c}if(a>=e)break a;else{f=b[1];a<f&&
(c=2,e=f);for(f=c-2;;){if(void 0===e)return this._cachedIndex=0,this.beforeStart_(0,a,d);if(c===f)break;d=e;e=b[--c-1];if(a>=e)break b}d=c;c=0}}for(;c<d;)e=c+d>>>1,a<b[e]?d=e:c=e+1;d=b[c];e=b[c-1];if(void 0===e)return this._cachedIndex=0,this.beforeStart_(0,a,d);if(void 0===d)return this._cachedIndex=c=b.length,this.afterEnd_(c-1,e,a)}this._cachedIndex=c;this.intervalChanged_(c,e,d)}return this.interpolate_(c,e,a,d)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||
this.DefaultSettings_},copySampleValue_:function(a){var b=this.resultBuffer,c=this.sampleValues,d=this.valueSize;a*=d;for(var e=0;e!==d;++e)b[e]=c[a+e];return b},interpolate_:function(a,b,c,d){throw Error("call to abstract method");},intervalChanged_:function(a,b,c){}};Object.assign(qa.prototype,{beforeStart_:qa.prototype.copySampleValue_,afterEnd_:qa.prototype.copySampleValue_});td.prototype=Object.assign(Object.create(qa.prototype),{constructor:td,DefaultSettings_:{endingStart:2400,endingEnd:2400},
intervalChanged_:function(a,b,c){var d=this.parameterPositions,e=a-2,f=a+1,g=d[e],h=d[f];if(void 0===g)switch(this.getSettings_().endingStart){case 2401:e=a;g=2*b-c;break;case 2402:e=d.length-2;g=b+d[e]-d[e+1];break;default:e=a,g=c}if(void 0===h)switch(this.getSettings_().endingEnd){case 2401:f=a;h=2*c-b;break;case 2402:f=1;h=c+d[1]-d[0];break;default:f=a-1,h=b}a=.5*(c-b);d=this.valueSize;this._weightPrev=a/(b-g);this._weightNext=a/(h-c);this._offsetPrev=e*d;this._offsetNext=f*d},interpolate_:function(a,
b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;var h=a-g,k=this._offsetPrev,m=this._offsetNext,l=this._weightPrev,p=this._weightNext,n=(c-b)/(d-b);c=n*n;d=c*n;b=-l*d+2*l*c-l*n;l=(1+l)*d+(-1.5-2*l)*c+(-.5+l)*n+1;n=(-1-p)*d+(1.5+p)*c+.5*n;p=p*d-p*c;for(c=0;c!==g;++c)e[c]=b*f[k+c]+l*f[h+c]+n*f[a+c]+p*f[m+c];return e}});Wc.prototype=Object.assign(Object.create(qa.prototype),{constructor:Wc,interpolate_:function(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;
a*=g;var h=a-g;b=(c-b)/(d-b);c=1-b;for(d=0;d!==g;++d)e[d]=f[h+d]*c+f[a+d]*b;return e}});ud.prototype=Object.assign(Object.create(qa.prototype),{constructor:ud,interpolate_:function(a,b,c,d){return this.copySampleValue_(a-1)}});var $a;$a={TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:2301,InterpolantFactoryMethodDiscrete:function(a){return new ud(this.times,this.values,this.getValueSize(),a)},InterpolantFactoryMethodLinear:function(a){return new Wc(this.times,this.values,
this.getValueSize(),a)},InterpolantFactoryMethodSmooth:function(a){return new td(this.times,this.values,this.getValueSize(),a)},setInterpolation:function(a){var b;switch(a){case 2300:b=this.InterpolantFactoryMethodDiscrete;break;case 2301:b=this.InterpolantFactoryMethodLinear;break;case 2302:b=this.InterpolantFactoryMethodSmooth}if(void 0===b){b="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(void 0===this.createInterpolant)if(a!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);
else throw Error(b);console.warn(b)}else this.createInterpolant=b},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}},getValueSize:function(){return this.values.length/this.times.length},shift:function(a){if(0!==a)for(var b=this.times,c=0,d=b.length;c!==d;++c)b[c]+=a;return this},scale:function(a){if(1!==a)for(var b=this.times,c=
0,d=b.length;c!==d;++c)b[c]*=a;return this},trim:function(a,b){for(var c=this.times,d=c.length,e=0,f=d-1;e!==d&&c[e]<a;)++e;for(;-1!==f&&c[f]>b;)--f;++f;if(0!==e||f!==d)e>=f&&(f=Math.max(f,1),e=f-1),d=this.getValueSize(),this.times=ba.arraySlice(c,e,f),this.values=ba.arraySlice(this.values,e*d,f*d);return this},validate:function(){var a=!0,b=this.getValueSize();0!==b-Math.floor(b)&&(console.error("invalid value size in track",this),a=!1);var c=this.times,b=this.values,d=c.length;0===d&&(console.error("track is empty",
this),a=!1);for(var e=null,f=0;f!==d;f++){var g=c[f];if("number"===typeof g&&isNaN(g)){console.error("time is not a valid number",this,f,g);a=!1;break}if(null!==e&&e>g){console.error("out of order keys",this,f,g,e);a=!1;break}e=g}if(void 0!==b&&ba.isTypedArray(b))for(f=0,c=b.length;f!==c;++f)if(d=b[f],isNaN(d)){console.error("value is not a valid number",this,f,d);a=!1;break}return a},optimize:function(){for(var a=this.times,b=this.values,c=this.getValueSize(),d=2302===this.getInterpolation(),e=1,
f=a.length-1,g=1;g<f;++g){var h=!1,k=a[g];if(k!==a[g+1]&&(1!==g||k!==k[0]))if(d)h=!0;else for(var m=g*c,l=m-c,p=m+c,k=0;k!==c;++k){var n=b[m+k];if(n!==b[l+k]||n!==b[p+k]){h=!0;break}}if(h){if(g!==e)for(a[e]=a[g],h=g*c,m=e*c,k=0;k!==c;++k)b[m+k]=b[h+k];++e}}if(0<f){a[e]=a[f];h=f*c;m=e*c;for(k=0;k!==c;++k)b[m+k]=b[h+k];++e}e!==a.length&&(this.times=ba.arraySlice(a,0,e),this.values=ba.arraySlice(b,0,e*c));return this}};cc.prototype=Object.assign(Object.create($a),{constructor:cc,ValueTypeName:"vector"});
vd.prototype=Object.assign(Object.create(qa.prototype),{constructor:vd,interpolate_:function(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;b=(c-b)/(d-b);for(c=a+g;a!==c;a+=4)ca.slerpFlat(e,0,f,a-g,f,a,b);return e}});Xc.prototype=Object.assign(Object.create($a),{constructor:Xc,ValueTypeName:"quaternion",DefaultInterpolation:2301,InterpolantFactoryMethodLinear:function(a){return new vd(this.times,this.values,this.getValueSize(),a)},InterpolantFactoryMethodSmooth:void 0});
dc.prototype=Object.assign(Object.create($a),{constructor:dc,ValueTypeName:"number"});wd.prototype=Object.assign(Object.create($a),{constructor:wd,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});xd.prototype=Object.assign(Object.create($a),{constructor:xd,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});
yd.prototype=Object.assign(Object.create($a),{constructor:yd,ValueTypeName:"color"});xb.prototype=$a;$a.constructor=xb;Object.assign(xb,{parse:function(a){if(void 0===a.type)throw Error("track type undefined, can not parse");var b=xb._getTrackTypeForValueTypeName(a.type);if(void 0===a.times){var c=[],d=[];ba.flattenJSON(a.keys,c,d,"value");a.times=c;a.values=d}return void 0!==b.parse?b.parse(a):new b(a.name,a.times,a.values,a.interpolation)},toJSON:function(a){var b=a.constructor;if(void 0!==b.toJSON)b=
b.toJSON(a);else{var b={name:a.name,times:ba.convertArray(a.times,Array),values:ba.convertArray(a.values,Array)},c=a.getInterpolation();c!==a.DefaultInterpolation&&(b.interpolation=c)}b.type=a.ValueTypeName;return b},_getTrackTypeForValueTypeName:function(a){switch(a.toLowerCase()){case "scalar":case "double":case "float":case "number":case "integer":return dc;case "vector":case "vector2":case "vector3":case "vector4":return cc;case "color":return yd;case "quaternion":return Xc;case "bool":case "boolean":return xd;
case "string":return wd}throw Error("Unsupported typeName: "+a);}});sa.prototype={constructor:sa,resetDuration:function(){for(var a=0,b=0,c=this.tracks.length;b!==c;++b)var d=this.tracks[b],a=Math.max(a,d.times[d.times.length-1]);this.duration=a},trim:function(){for(var a=0;a<this.tracks.length;a++)this.tracks[a].trim(0,this.duration);return this},optimize:function(){for(var a=0;a<this.tracks.length;a++)this.tracks[a].optimize();return this}};Object.assign(sa,{parse:function(a){for(var b=[],c=a.tracks,
d=1/(a.fps||1),e=0,f=c.length;e!==f;++e)b.push(xb.parse(c[e]).scale(d));return new sa(a.name,a.duration,b)},toJSON:function(a){var b=[],c=a.tracks;a={name:a.name,duration:a.duration,tracks:b};for(var d=0,e=c.length;d!==e;++d)b.push(xb.toJSON(c[d]));return a},CreateFromMorphTargetSequence:function(a,b,c,d){for(var e=b.length,f=[],g=0;g<e;g++){var h=[],k=[];h.push((g+e-1)%e,g,(g+1)%e);k.push(0,1,0);var m=ba.getKeyframeOrder(h),h=ba.sortedArray(h,1,m),k=ba.sortedArray(k,1,m);d||0!==h[0]||(h.push(e),
k.push(k[0]));f.push((new dc(".morphTargetInfluences["+b[g].name+"]",h,k)).scale(1/c))}return new sa(a,-1,f)},findByName:function(a,b){var c=a;Array.isArray(a)||(c=a.geometry&&a.geometry.animations||a.animations);for(var d=0;d<c.length;d++)if(c[d].name===b)return c[d];return null},CreateClipsFromMorphTargetSequences:function(a,b,c){for(var d={},e=/^([\w-]*?)([\d]+)$/,f=0,g=a.length;f<g;f++){var h=a[f],k=h.name.match(e);if(k&&1<k.length){var m=k[1];(k=d[m])||(d[m]=k=[]);k.push(h)}}a=[];for(m in d)a.push(sa.CreateFromMorphTargetSequence(m,
d[m],b,c));return a},parseAnimation:function(a,b){if(!a)return console.error("  no animation in JSONLoader data"),null;for(var c=function(a,b,c,d,e){if(0!==c.length){var f=[],g=[];ba.flattenJSON(c,f,g,d);0!==f.length&&e.push(new a(b,f,g))}},d=[],e=a.name||"default",f=a.length||-1,g=a.fps||30,h=a.hierarchy||[],k=0;k<h.length;k++){var m=h[k].keys;if(m&&0!==m.length)if(m[0].morphTargets){for(var f={},l=0;l<m.length;l++)if(m[l].morphTargets)for(var p=0;p<m[l].morphTargets.length;p++)f[m[l].morphTargets[p]]=
-1;for(var n in f){for(var q=[],w=[],p=0;p!==m[l].morphTargets.length;++p){var u=m[l];q.push(u.time);w.push(u.morphTarget===n?1:0)}d.push(new dc(".morphTargetInfluence["+n+"]",q,w))}f=f.length*(g||1)}else l=".bones["+b[k].name+"]",c(cc,l+".position",m,"pos",d),c(Xc,l+".quaternion",m,"rot",d),c(cc,l+".scale",m,"scl",d)}return 0===d.length?null:new sa(e,f,d)}});Object.assign(zd.prototype,{load:function(a,b,c,d){var e=this;(new Oa(e.manager)).load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},setTextures:function(a){this.textures=
a},parse:function(a){function b(a){void 0===c[a]&&console.warn("THREE.MaterialLoader: Undefined texture",a);return c[a]}var c=this.textures,d=new Kf[a.type];void 0!==a.uuid&&(d.uuid=a.uuid);void 0!==a.name&&(d.name=a.name);void 0!==a.color&&d.color.setHex(a.color);void 0!==a.roughness&&(d.roughness=a.roughness);void 0!==a.metalness&&(d.metalness=a.metalness);void 0!==a.emissive&&d.emissive.setHex(a.emissive);void 0!==a.specular&&d.specular.setHex(a.specular);void 0!==a.shininess&&(d.shininess=a.shininess);
void 0!==a.clearCoat&&(d.clearCoat=a.clearCoat);void 0!==a.clearCoatRoughness&&(d.clearCoatRoughness=a.clearCoatRoughness);void 0!==a.uniforms&&(d.uniforms=a.uniforms);void 0!==a.vertexShader&&(d.vertexShader=a.vertexShader);void 0!==a.fragmentShader&&(d.fragmentShader=a.fragmentShader);void 0!==a.vertexColors&&(d.vertexColors=a.vertexColors);void 0!==a.fog&&(d.fog=a.fog);void 0!==a.shading&&(d.shading=a.shading);void 0!==a.blending&&(d.blending=a.blending);void 0!==a.side&&(d.side=a.side);void 0!==
a.opacity&&(d.opacity=a.opacity);void 0!==a.transparent&&(d.transparent=a.transparent);void 0!==a.alphaTest&&(d.alphaTest=a.alphaTest);void 0!==a.depthTest&&(d.depthTest=a.depthTest);void 0!==a.depthWrite&&(d.depthWrite=a.depthWrite);void 0!==a.colorWrite&&(d.colorWrite=a.colorWrite);void 0!==a.wireframe&&(d.wireframe=a.wireframe);void 0!==a.wireframeLinewidth&&(d.wireframeLinewidth=a.wireframeLinewidth);void 0!==a.wireframeLinecap&&(d.wireframeLinecap=a.wireframeLinecap);void 0!==a.wireframeLinejoin&&
(d.wireframeLinejoin=a.wireframeLinejoin);void 0!==a.skinning&&(d.skinning=a.skinning);void 0!==a.morphTargets&&(d.morphTargets=a.morphTargets);void 0!==a.size&&(d.size=a.size);void 0!==a.sizeAttenuation&&(d.sizeAttenuation=a.sizeAttenuation);void 0!==a.map&&(d.map=b(a.map));void 0!==a.alphaMap&&(d.alphaMap=b(a.alphaMap),d.transparent=!0);void 0!==a.bumpMap&&(d.bumpMap=b(a.bumpMap));void 0!==a.bumpScale&&(d.bumpScale=a.bumpScale);void 0!==a.normalMap&&(d.normalMap=b(a.normalMap));if(void 0!==a.normalScale){var e=
a.normalScale;!1===Array.isArray(e)&&(e=[e,e]);d.normalScale=(new B).fromArray(e)}void 0!==a.displacementMap&&(d.displacementMap=b(a.displacementMap));void 0!==a.displacementScale&&(d.displacementScale=a.displacementScale);void 0!==a.displacementBias&&(d.displacementBias=a.displacementBias);void 0!==a.roughnessMap&&(d.roughnessMap=b(a.roughnessMap));void 0!==a.metalnessMap&&(d.metalnessMap=b(a.metalnessMap));void 0!==a.emissiveMap&&(d.emissiveMap=b(a.emissiveMap));void 0!==a.emissiveIntensity&&(d.emissiveIntensity=
a.emissiveIntensity);void 0!==a.specularMap&&(d.specularMap=b(a.specularMap));void 0!==a.envMap&&(d.envMap=b(a.envMap));void 0!==a.reflectivity&&(d.reflectivity=a.reflectivity);void 0!==a.lightMap&&(d.lightMap=b(a.lightMap));void 0!==a.lightMapIntensity&&(d.lightMapIntensity=a.lightMapIntensity);void 0!==a.aoMap&&(d.aoMap=b(a.aoMap));void 0!==a.aoMapIntensity&&(d.aoMapIntensity=a.aoMapIntensity);void 0!==a.gradientMap&&(d.gradientMap=b(a.gradientMap));if(void 0!==a.materials)for(var e=0,f=a.materials.length;e<
f;e++)d.materials.push(this.parse(a.materials[e]));return d}});Object.assign(Rd.prototype,{load:function(a,b,c,d){var e=this;(new Oa(e.manager)).load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},parse:function(a){var b=new J,c=a.data.index,d={Int8Array:Int8Array,Uint8Array:Uint8Array,Uint8ClampedArray:Uint8ClampedArray,Int16Array:Int16Array,Uint16Array:Uint16Array,Int32Array:Int32Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array};void 0!==c&&(c=new d[c.type](c.array),
b.setIndex(new z(c,1)));var e=a.data.attributes,f;for(f in e){var g=e[f],c=new d[g.type](g.array);b.addAttribute(f,new z(c,g.itemSize,g.normalized))}d=a.data.groups||a.data.drawcalls||a.data.offsets;if(void 0!==d)for(f=0,c=d.length;f!==c;++f)e=d[f],b.addGroup(e.start,e.count,e.materialIndex);a=a.data.boundingSphere;void 0!==a&&(d=new q,void 0!==a.center&&d.fromArray(a.center),b.boundingSphere=new Ha(d,a.radius));return b}});yb.prototype={constructor:yb,crossOrigin:void 0,extractUrlBase:function(a){a=
a.split("/");if(1===a.length)return"./";a.pop();return a.join("/")+"/"},initMaterials:function(a,b,c){for(var d=[],e=0;e<a.length;++e)d[e]=this.createMaterial(a[e],b,c);return d},createMaterial:function(){var a,b,c;return function(d,e,f){function g(a,c,d,g,k){a=e+a;var m=yb.Handlers.get(a);null!==m?a=m.load(a):(b.setCrossOrigin(f),a=b.load(a));void 0!==c&&(a.repeat.fromArray(c),1!==c[0]&&(a.wrapS=1E3),1!==c[1]&&(a.wrapT=1E3));void 0!==d&&a.offset.fromArray(d);void 0!==g&&("repeat"===g[0]&&(a.wrapS=
1E3),"mirror"===g[0]&&(a.wrapS=1002),"repeat"===g[1]&&(a.wrapT=1E3),"mirror"===g[1]&&(a.wrapT=1002));void 0!==k&&(a.anisotropy=k);c=S.generateUUID();h[c]=a;return c}void 0===a&&(a=new G);void 0===b&&(b=new ld);void 0===c&&(c=new zd);var h={},k={uuid:S.generateUUID(),type:"MeshLambertMaterial"},m;for(m in d){var l=d[m];switch(m){case "DbgColor":case "DbgIndex":case "opticalDensity":case "illumination":break;case "DbgName":k.name=l;break;case "blending":k.blending=Ke[l];break;case "colorAmbient":case "mapAmbient":console.warn("THREE.Loader.createMaterial:",
m,"is no longer supported.");break;case "colorDiffuse":k.color=a.fromArray(l).getHex();break;case "colorSpecular":k.specular=a.fromArray(l).getHex();break;case "colorEmissive":k.emissive=a.fromArray(l).getHex();break;case "specularCoef":k.shininess=l;break;case "shading":"basic"===l.toLowerCase()&&(k.type="MeshBasicMaterial");"phong"===l.toLowerCase()&&(k.type="MeshPhongMaterial");"standard"===l.toLowerCase()&&(k.type="MeshStandardMaterial");break;case "mapDiffuse":k.map=g(l,d.mapDiffuseRepeat,d.mapDiffuseOffset,
d.mapDiffuseWrap,d.mapDiffuseAnisotropy);break;case "mapDiffuseRepeat":case "mapDiffuseOffset":case "mapDiffuseWrap":case "mapDiffuseAnisotropy":break;case "mapEmissive":k.emissiveMap=g(l,d.mapEmissiveRepeat,d.mapEmissiveOffset,d.mapEmissiveWrap,d.mapEmissiveAnisotropy);break;case "mapEmissiveRepeat":case "mapEmissiveOffset":case "mapEmissiveWrap":case "mapEmissiveAnisotropy":break;case "mapLight":k.lightMap=g(l,d.mapLightRepeat,d.mapLightOffset,d.mapLightWrap,d.mapLightAnisotropy);break;case "mapLightRepeat":case "mapLightOffset":case "mapLightWrap":case "mapLightAnisotropy":break;
case "mapAO":k.aoMap=g(l,d.mapAORepeat,d.mapAOOffset,d.mapAOWrap,d.mapAOAnisotropy);break;case "mapAORepeat":case "mapAOOffset":case "mapAOWrap":case "mapAOAnisotropy":break;case "mapBump":k.bumpMap=g(l,d.mapBumpRepeat,d.mapBumpOffset,d.mapBumpWrap,d.mapBumpAnisotropy);break;case "mapBumpScale":k.bumpScale=l;break;case "mapBumpRepeat":case "mapBumpOffset":case "mapBumpWrap":case "mapBumpAnisotropy":break;case "mapNormal":k.normalMap=g(l,d.mapNormalRepeat,d.mapNormalOffset,d.mapNormalWrap,d.mapNormalAnisotropy);
break;case "mapNormalFactor":k.normalScale=[l,l];break;case "mapNormalRepeat":case "mapNormalOffset":case "mapNormalWrap":case "mapNormalAnisotropy":break;case "mapSpecular":k.specularMap=g(l,d.mapSpecularRepeat,d.mapSpecularOffset,d.mapSpecularWrap,d.mapSpecularAnisotropy);break;case "mapSpecularRepeat":case "mapSpecularOffset":case "mapSpecularWrap":case "mapSpecularAnisotropy":break;case "mapMetalness":k.metalnessMap=g(l,d.mapMetalnessRepeat,d.mapMetalnessOffset,d.mapMetalnessWrap,d.mapMetalnessAnisotropy);
break;case "mapMetalnessRepeat":case "mapMetalnessOffset":case "mapMetalnessWrap":case "mapMetalnessAnisotropy":break;case "mapRoughness":k.roughnessMap=g(l,d.mapRoughnessRepeat,d.mapRoughnessOffset,d.mapRoughnessWrap,d.mapRoughnessAnisotropy);break;case "mapRoughnessRepeat":case "mapRoughnessOffset":case "mapRoughnessWrap":case "mapRoughnessAnisotropy":break;case "mapAlpha":k.alphaMap=g(l,d.mapAlphaRepeat,d.mapAlphaOffset,d.mapAlphaWrap,d.mapAlphaAnisotropy);break;case "mapAlphaRepeat":case "mapAlphaOffset":case "mapAlphaWrap":case "mapAlphaAnisotropy":break;
case "flipSided":k.side=1;break;case "doubleSided":k.side=2;break;case "transparency":console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity");k.opacity=l;break;case "depthTest":case "depthWrite":case "colorWrite":case "opacity":case "reflectivity":case "transparent":case "visible":case "wireframe":k[m]=l;break;case "vertexColors":!0===l&&(k.vertexColors=2);"face"===l&&(k.vertexColors=1);break;default:console.error("THREE.Loader.createMaterial: Unsupported",m,l)}}"MeshBasicMaterial"===
k.type&&delete k.emissive;"MeshPhongMaterial"!==k.type&&delete k.specular;1>k.opacity&&(k.transparent=!0);c.setTextures(h);return c.parse(k)}}()};yb.Handlers={handlers:[],add:function(a,b){this.handlers.push(a,b)},get:function(a){for(var b=this.handlers,c=0,d=b.length;c<d;c+=2){var e=b[c+1];if(b[c].test(a))return e}return null}};Object.assign(Sd.prototype,{load:function(a,b,c,d){var e=this,f=this.texturePath&&"string"===typeof this.texturePath?this.texturePath:yb.prototype.extractUrlBase(a),g=new Oa(this.manager);
g.setWithCredentials(this.withCredentials);g.load(a,function(c){c=JSON.parse(c);var d=c.metadata;if(void 0!==d&&(d=d.type,void 0!==d)){if("object"===d.toLowerCase()){console.error("THREE.JSONLoader: "+a+" should be loaded with THREE.ObjectLoader instead.");return}if("scene"===d.toLowerCase()){console.error("THREE.JSONLoader: "+a+" should be loaded with THREE.SceneLoader instead.");return}}c=e.parse(c,f);b(c.geometry,c.materials)},c,d)},setTexturePath:function(a){this.texturePath=a},parse:function(a,
b){var c=new R,d=void 0!==a.scale?1/a.scale:1;(function(b){var d,g,h,k,m,l,p,n,r,w,u,A,t,v=a.faces;l=a.vertices;var z=a.normals,y=a.colors,C=0;if(void 0!==a.uvs){for(d=0;d<a.uvs.length;d++)a.uvs[d].length&&C++;for(d=0;d<C;d++)c.faceVertexUvs[d]=[]}k=0;for(m=l.length;k<m;)d=new q,d.x=l[k++]*b,d.y=l[k++]*b,d.z=l[k++]*b,c.vertices.push(d);k=0;for(m=v.length;k<m;)if(b=v[k++],r=b&1,h=b&2,d=b&8,p=b&16,w=b&32,l=b&64,b&=128,r){r=new ga;r.a=v[k];r.b=v[k+1];r.c=v[k+3];u=new ga;u.a=v[k+1];u.b=v[k+2];u.c=v[k+
3];k+=4;h&&(h=v[k++],r.materialIndex=h,u.materialIndex=h);h=c.faces.length;if(d)for(d=0;d<C;d++)for(A=a.uvs[d],c.faceVertexUvs[d][h]=[],c.faceVertexUvs[d][h+1]=[],g=0;4>g;g++)n=v[k++],t=A[2*n],n=A[2*n+1],t=new B(t,n),2!==g&&c.faceVertexUvs[d][h].push(t),0!==g&&c.faceVertexUvs[d][h+1].push(t);p&&(p=3*v[k++],r.normal.set(z[p++],z[p++],z[p]),u.normal.copy(r.normal));if(w)for(d=0;4>d;d++)p=3*v[k++],w=new q(z[p++],z[p++],z[p]),2!==d&&r.vertexNormals.push(w),0!==d&&u.vertexNormals.push(w);l&&(l=v[k++],
l=y[l],r.color.setHex(l),u.color.setHex(l));if(b)for(d=0;4>d;d++)l=v[k++],l=y[l],2!==d&&r.vertexColors.push(new G(l)),0!==d&&u.vertexColors.push(new G(l));c.faces.push(r);c.faces.push(u)}else{r=new ga;r.a=v[k++];r.b=v[k++];r.c=v[k++];h&&(h=v[k++],r.materialIndex=h);h=c.faces.length;if(d)for(d=0;d<C;d++)for(A=a.uvs[d],c.faceVertexUvs[d][h]=[],g=0;3>g;g++)n=v[k++],t=A[2*n],n=A[2*n+1],t=new B(t,n),c.faceVertexUvs[d][h].push(t);p&&(p=3*v[k++],r.normal.set(z[p++],z[p++],z[p]));if(w)for(d=0;3>d;d++)p=3*
v[k++],w=new q(z[p++],z[p++],z[p]),r.vertexNormals.push(w);l&&(l=v[k++],r.color.setHex(y[l]));if(b)for(d=0;3>d;d++)l=v[k++],r.vertexColors.push(new G(y[l]));c.faces.push(r)}})(d);(function(){var b=void 0!==a.influencesPerVertex?a.influencesPerVertex:2;if(a.skinWeights)for(var d=0,g=a.skinWeights.length;d<g;d+=b)c.skinWeights.push(new fa(a.skinWeights[d],1<b?a.skinWeights[d+1]:0,2<b?a.skinWeights[d+2]:0,3<b?a.skinWeights[d+3]:0));if(a.skinIndices)for(d=0,g=a.skinIndices.length;d<g;d+=b)c.skinIndices.push(new fa(a.skinIndices[d],
1<b?a.skinIndices[d+1]:0,2<b?a.skinIndices[d+2]:0,3<b?a.skinIndices[d+3]:0));c.bones=a.bones;c.bones&&0<c.bones.length&&(c.skinWeights.length!==c.skinIndices.length||c.skinIndices.length!==c.vertices.length)&&console.warn("When skinning, number of vertices ("+c.vertices.length+"), skinIndices ("+c.skinIndices.length+"), and skinWeights ("+c.skinWeights.length+") should match.")})();(function(b){if(void 0!==a.morphTargets)for(var d=0,g=a.morphTargets.length;d<g;d++){c.morphTargets[d]={};c.morphTargets[d].name=
a.morphTargets[d].name;c.morphTargets[d].vertices=[];for(var h=c.morphTargets[d].vertices,k=a.morphTargets[d].vertices,m=0,l=k.length;m<l;m+=3){var p=new q;p.x=k[m]*b;p.y=k[m+1]*b;p.z=k[m+2]*b;h.push(p)}}if(void 0!==a.morphColors&&0<a.morphColors.length)for(console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.'),b=c.faces,h=a.morphColors[0].colors,d=0,g=b.length;d<g;d++)b[d].color.fromArray(h,3*d)})(d);(function(){var b=[],d=[];void 0!==a.animation&&d.push(a.animation);
void 0!==a.animations&&(a.animations.length?d=d.concat(a.animations):d.push(a.animations));for(var g=0;g<d.length;g++){var h=sa.parseAnimation(d[g],c.bones);h&&b.push(h)}c.morphTargets&&(d=sa.CreateClipsFromMorphTargetSequences(c.morphTargets,10),b=b.concat(d));0<b.length&&(c.animations=b)})();c.computeFaceNormals();c.computeBoundingSphere();if(void 0===a.materials||0===a.materials.length)return{geometry:c};d=yb.prototype.initMaterials(a.materials,b,this.crossOrigin);return{geometry:c,materials:d}}});
Object.assign(De.prototype,{load:function(a,b,c,d){""===this.texturePath&&(this.texturePath=a.substring(0,a.lastIndexOf("/")+1));var e=this;(new Oa(e.manager)).load(a,function(c){var d=null;try{d=JSON.parse(c)}catch(h){console.error("THREE:ObjectLoader: Can't parse "+a+".",h.message);return}c=d.metadata;void 0===c||void 0===c.type||"geometry"===c.type.toLowerCase()?console.error("THREE.ObjectLoader: Can't load "+a+". Use THREE.JSONLoader instead."):e.parse(d,b)},c,d)},setTexturePath:function(a){this.texturePath=
a},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a,b){var c=this.parseGeometries(a.geometries),d=this.parseImages(a.images,function(){void 0!==b&&b(e)}),d=this.parseTextures(a.textures,d),d=this.parseMaterials(a.materials,d),e=this.parseObject(a.object,c,d);a.animations&&(e.animations=this.parseAnimations(a.animations));void 0!==a.images&&0!==a.images.length||void 0===b||b(e);return e},parseGeometries:function(a){var b={};if(void 0!==a)for(var c=new Sd,d=new Rd,e=0,f=a.length;e<f;e++){var g,
h=a[e];switch(h.type){case "PlaneGeometry":case "PlaneBufferGeometry":g=new Ga[h.type](h.width,h.height,h.widthSegments,h.heightSegments);break;case "BoxGeometry":case "BoxBufferGeometry":case "CubeGeometry":g=new Ga[h.type](h.width,h.height,h.depth,h.widthSegments,h.heightSegments,h.depthSegments);break;case "CircleGeometry":case "CircleBufferGeometry":g=new Ga[h.type](h.radius,h.segments,h.thetaStart,h.thetaLength);break;case "CylinderGeometry":case "CylinderBufferGeometry":g=new Ga[h.type](h.radiusTop,
h.radiusBottom,h.height,h.radialSegments,h.heightSegments,h.openEnded,h.thetaStart,h.thetaLength);break;case "ConeGeometry":case "ConeBufferGeometry":g=new Ga[h.type](h.radius,h.height,h.radialSegments,h.heightSegments,h.openEnded,h.thetaStart,h.thetaLength);break;case "SphereGeometry":case "SphereBufferGeometry":g=new Ga[h.type](h.radius,h.widthSegments,h.heightSegments,h.phiStart,h.phiLength,h.thetaStart,h.thetaLength);break;case "DodecahedronGeometry":case "IcosahedronGeometry":case "OctahedronGeometry":case "TetrahedronGeometry":g=
new Ga[h.type](h.radius,h.detail);break;case "RingGeometry":case "RingBufferGeometry":g=new Ga[h.type](h.innerRadius,h.outerRadius,h.thetaSegments,h.phiSegments,h.thetaStart,h.thetaLength);break;case "TorusGeometry":case "TorusBufferGeometry":g=new Ga[h.type](h.radius,h.tube,h.radialSegments,h.tubularSegments,h.arc);break;case "TorusKnotGeometry":case "TorusKnotBufferGeometry":g=new Ga[h.type](h.radius,h.tube,h.tubularSegments,h.radialSegments,h.p,h.q);break;case "LatheGeometry":case "LatheBufferGeometry":g=
new Ga[h.type](h.points,h.segments,h.phiStart,h.phiLength);break;case "BufferGeometry":g=d.parse(h);break;case "Geometry":g=c.parse(h.data,this.texturePath).geometry;break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+h.type+'"');continue}g.uuid=h.uuid;void 0!==h.name&&(g.name=h.name);b[h.uuid]=g}return b},parseMaterials:function(a,b){var c={};if(void 0!==a){var d=new zd;d.setTextures(b);for(var e=0,f=a.length;e<f;e++){var g=d.parse(a[e]);c[g.uuid]=g}}return c},parseAnimations:function(a){for(var b=
[],c=0;c<a.length;c++){var d=sa.parse(a[c]);b.push(d)}return b},parseImages:function(a,b){function c(a){d.manager.itemStart(a);return g.load(a,function(){d.manager.itemEnd(a)},void 0,function(){d.manager.itemError(a)})}var d=this,e={};if(void 0!==a&&0<a.length){var f=new Od(b),g=new Vc(f);g.setCrossOrigin(this.crossOrigin);for(var f=0,h=a.length;f<h;f++){var k=a[f],m=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(k.url)?k.url:d.texturePath+k.url;e[k.uuid]=c(m)}}return e},parseTextures:function(a,b){function c(a,
b){if("number"===typeof a)return a;console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",a);return b[a]}var d={};if(void 0!==a)for(var e=0,f=a.length;e<f;e++){var g=a[e];void 0===g.image&&console.warn('THREE.ObjectLoader: No "image" specified for',g.uuid);void 0===b[g.image]&&console.warn("THREE.ObjectLoader: Undefined image",g.image);var h=new da(b[g.image]);h.needsUpdate=!0;h.uuid=g.uuid;void 0!==g.name&&(h.name=g.name);void 0!==g.mapping&&(h.mapping=c(g.mapping,Le));
void 0!==g.offset&&h.offset.fromArray(g.offset);void 0!==g.repeat&&h.repeat.fromArray(g.repeat);void 0!==g.wrap&&(h.wrapS=c(g.wrap[0],je),h.wrapT=c(g.wrap[1],je));void 0!==g.minFilter&&(h.minFilter=c(g.minFilter,ke));void 0!==g.magFilter&&(h.magFilter=c(g.magFilter,ke));void 0!==g.anisotropy&&(h.anisotropy=g.anisotropy);void 0!==g.flipY&&(h.flipY=g.flipY);d[g.uuid]=h}return d},parseObject:function(){var a=new P;return function(b,c,d){function e(a){void 0===c[a]&&console.warn("THREE.ObjectLoader: Undefined geometry",
a);return c[a]}function f(a){if(void 0!==a)return void 0===d[a]&&console.warn("THREE.ObjectLoader: Undefined material",a),d[a]}var g;switch(b.type){case "Scene":g=new lb;void 0!==b.background&&Number.isInteger(b.background)&&(g.background=new G(b.background));void 0!==b.fog&&("Fog"===b.fog.type?g.fog=new Kb(b.fog.color,b.fog.near,b.fog.far):"FogExp2"===b.fog.type&&(g.fog=new Jb(b.fog.color,b.fog.density)));break;case "PerspectiveCamera":g=new Ia(b.fov,b.aspect,b.near,b.far);void 0!==b.focus&&(g.focus=
b.focus);void 0!==b.zoom&&(g.zoom=b.zoom);void 0!==b.filmGauge&&(g.filmGauge=b.filmGauge);void 0!==b.filmOffset&&(g.filmOffset=b.filmOffset);void 0!==b.view&&(g.view=Object.assign({},b.view));break;case "OrthographicCamera":g=new Ib(b.left,b.right,b.top,b.bottom,b.near,b.far);break;case "AmbientLight":g=new sd(b.color,b.intensity);break;case "DirectionalLight":g=new rd(b.color,b.intensity);break;case "PointLight":g=new pd(b.color,b.intensity,b.distance,b.decay);break;case "SpotLight":g=new od(b.color,
b.intensity,b.distance,b.angle,b.penumbra,b.decay);break;case "HemisphereLight":g=new md(b.color,b.groundColor,b.intensity);break;case "Mesh":g=e(b.geometry);var h=f(b.material);g=g.bones&&0<g.bones.length?new id(g,h):new Da(g,h);break;case "LOD":g=new Ac;break;case "Line":g=new Wa(e(b.geometry),f(b.material),b.mode);break;case "LineSegments":g=new ea(e(b.geometry),f(b.material));break;case "PointCloud":case "Points":g=new Lb(e(b.geometry),f(b.material));break;case "Sprite":g=new zc(f(b.material));
break;case "Group":g=new Bc;break;default:g=new F}g.uuid=b.uuid;void 0!==b.name&&(g.name=b.name);void 0!==b.matrix?(a.fromArray(b.matrix),a.decompose(g.position,g.quaternion,g.scale)):(void 0!==b.position&&g.position.fromArray(b.position),void 0!==b.rotation&&g.rotation.fromArray(b.rotation),void 0!==b.quaternion&&g.quaternion.fromArray(b.quaternion),void 0!==b.scale&&g.scale.fromArray(b.scale));void 0!==b.castShadow&&(g.castShadow=b.castShadow);void 0!==b.receiveShadow&&(g.receiveShadow=b.receiveShadow);
b.shadow&&(void 0!==b.shadow.bias&&(g.shadow.bias=b.shadow.bias),void 0!==b.shadow.radius&&(g.shadow.radius=b.shadow.radius),void 0!==b.shadow.mapSize&&g.shadow.mapSize.fromArray(b.shadow.mapSize),void 0!==b.shadow.camera&&(g.shadow.camera=this.parseObject(b.shadow.camera)));void 0!==b.visible&&(g.visible=b.visible);void 0!==b.userData&&(g.userData=b.userData);if(void 0!==b.children)for(var k in b.children)g.add(this.parseObject(b.children[k],c,d));if("LOD"===b.type)for(b=b.levels,h=0;h<b.length;h++){var m=
b[h];k=g.getObjectByProperty("uuid",m.object);void 0!==k&&g.addLevel(k,m.distance)}return g}}()});va.prototype={constructor:va,getPoint:function(a){console.warn("THREE.Curve: Warning, getPoint() not implemented!");return null},getPointAt:function(a){a=this.getUtoTmapping(a);return this.getPoint(a)},getPoints:function(a){a||(a=5);for(var b=[],c=0;c<=a;c++)b.push(this.getPoint(c/a));return b},getSpacedPoints:function(a){a||(a=5);for(var b=[],c=0;c<=a;c++)b.push(this.getPointAt(c/a));return b},getLength:function(){var a=
this.getLengths();return a[a.length-1]},getLengths:function(a){a||(a=this.__arcLengthDivisions?this.__arcLengthDivisions:200);if(this.cacheArcLengths&&this.cacheArcLengths.length===a+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var b=[],c,d=this.getPoint(0),e,f=0;b.push(0);for(e=1;e<=a;e++)c=this.getPoint(e/a),f+=c.distanceTo(d),b.push(f),d=c;return this.cacheArcLengths=b},updateArcLengths:function(){this.needsUpdate=!0;this.getLengths()},getUtoTmapping:function(a,b){var c=
this.getLengths(),d,e=c.length,f;f=b?b:a*c[e-1];for(var g=0,h=e-1,k;g<=h;)if(d=Math.floor(g+(h-g)/2),k=c[d]-f,0>k)g=d+1;else if(0<k)h=d-1;else{h=d;break}d=h;if(c[d]===f)return d/(e-1);g=c[d];return(d+(f-g)/(c[d+1]-g))/(e-1)},getTangent:function(a){var b=a-1E-4;a+=1E-4;0>b&&(b=0);1<a&&(a=1);b=this.getPoint(b);return this.getPoint(a).clone().sub(b).normalize()},getTangentAt:function(a){a=this.getUtoTmapping(a);return this.getTangent(a)},computeFrenetFrames:function(a,b){var c=new q,d=[],e=[],f=[],g=
new q,h=new P,k,m;for(k=0;k<=a;k++)m=k/a,d[k]=this.getTangentAt(m),d[k].normalize();e[0]=new q;f[0]=new q;k=Number.MAX_VALUE;m=Math.abs(d[0].x);var l=Math.abs(d[0].y),p=Math.abs(d[0].z);m<=k&&(k=m,c.set(1,0,0));l<=k&&(k=l,c.set(0,1,0));p<=k&&c.set(0,0,1);g.crossVectors(d[0],c).normalize();e[0].crossVectors(d[0],g);f[0].crossVectors(d[0],e[0]);for(k=1;k<=a;k++)e[k]=e[k-1].clone(),f[k]=f[k-1].clone(),g.crossVectors(d[k-1],d[k]),g.length()>Number.EPSILON&&(g.normalize(),c=Math.acos(S.clamp(d[k-1].dot(d[k]),
-1,1)),e[k].applyMatrix4(h.makeRotationAxis(g,c))),f[k].crossVectors(d[k],e[k]);if(!0===b)for(c=Math.acos(S.clamp(e[0].dot(e[a]),-1,1)),c/=a,0<d[0].dot(g.crossVectors(e[0],e[a]))&&(c=-c),k=1;k<=a;k++)e[k].applyMatrix4(h.makeRotationAxis(d[k],c*k)),f[k].crossVectors(d[k],e[k]);return{tangents:d,normals:e,binormals:f}}};va.create=function(a,b){a.prototype=Object.create(va.prototype);a.prototype.constructor=a;a.prototype.getPoint=b;return a};Ra.prototype=Object.create(va.prototype);Ra.prototype.constructor=
Ra;Ra.prototype.isLineCurve=!0;Ra.prototype.getPoint=function(a){if(1===a)return this.v2.clone();var b=this.v2.clone().sub(this.v1);b.multiplyScalar(a).add(this.v1);return b};Ra.prototype.getPointAt=function(a){return this.getPoint(a)};Ra.prototype.getTangent=function(a){return this.v2.clone().sub(this.v1).normalize()};Yc.prototype=Object.assign(Object.create(va.prototype),{constructor:Yc,add:function(a){this.curves.push(a)},closePath:function(){var a=this.curves[0].getPoint(0),b=this.curves[this.curves.length-
1].getPoint(1);a.equals(b)||this.curves.push(new Ra(b,a))},getPoint:function(a){var b=a*this.getLength(),c=this.getCurveLengths();for(a=0;a<c.length;){if(c[a]>=b)return b=c[a]-b,a=this.curves[a],c=a.getLength(),a.getPointAt(0===c?0:1-b/c);a++}return null},getLength:function(){var a=this.getCurveLengths();return a[a.length-1]},updateArcLengths:function(){this.needsUpdate=!0;this.cacheLengths=null;this.getLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;
for(var a=[],b=0,c=0,d=this.curves.length;c<d;c++)b+=this.curves[c].getLength(),a.push(b);return this.cacheLengths=a},getSpacedPoints:function(a){a||(a=40);for(var b=[],c=0;c<=a;c++)b.push(this.getPoint(c/a));this.autoClose&&b.push(b[0]);return b},getPoints:function(a){a=a||12;for(var b=[],c,d=0,e=this.curves;d<e.length;d++)for(var f=e[d],f=f.getPoints(f&&f.isEllipseCurve?2*a:f&&f.isLineCurve?1:f&&f.isSplineCurve?a*f.points.length:a),g=0;g<f.length;g++){var h=f[g];c&&c.equals(h)||(b.push(h),c=h)}this.autoClose&&
1<b.length&&!b[b.length-1].equals(b[0])&&b.push(b[0]);return b},createPointsGeometry:function(a){a=this.getPoints(a);return this.createGeometry(a)},createSpacedPointsGeometry:function(a){a=this.getSpacedPoints(a);return this.createGeometry(a)},createGeometry:function(a){for(var b=new R,c=0,d=a.length;c<d;c++){var e=a[c];b.vertices.push(new q(e.x,e.y,e.z||0))}return b}});Ya.prototype=Object.create(va.prototype);Ya.prototype.constructor=Ya;Ya.prototype.isEllipseCurve=!0;Ya.prototype.getPoint=function(a){for(var b=
2*Math.PI,c=this.aEndAngle-this.aStartAngle,d=Math.abs(c)<Number.EPSILON;0>c;)c+=b;for(;c>b;)c-=b;c<Number.EPSILON&&(c=d?0:b);!0!==this.aClockwise||d||(c=c===b?-b:c-b);b=this.aStartAngle+a*c;a=this.aX+this.xRadius*Math.cos(b);var e=this.aY+this.yRadius*Math.sin(b);0!==this.aRotation&&(b=Math.cos(this.aRotation),c=Math.sin(this.aRotation),d=a-this.aX,e-=this.aY,a=d*b-e*c+this.aX,e=d*c+e*b+this.aY);return new B(a,e)};var ed={tangentQuadraticBezier:function(a,b,c,d){return 2*(1-a)*(c-b)+2*a*(d-c)},tangentCubicBezier:function(a,
b,c,d,e){return-3*b*(1-a)*(1-a)+3*c*(1-a)*(1-a)-6*a*c*(1-a)+6*a*d*(1-a)-3*a*a*d+3*a*a*e},tangentSpline:function(a,b,c,d,e){return 6*a*a-6*a+(3*a*a-4*a+1)+(-6*a*a+6*a)+(3*a*a-2*a)},interpolate:function(a,b,c,d,e){a=.5*(c-a);d=.5*(d-b);var f=e*e;return(2*b-2*c+a+d)*e*f+(-3*b+3*c-2*a-d)*f+a*e+b}};zb.prototype=Object.create(va.prototype);zb.prototype.constructor=zb;zb.prototype.isSplineCurve=!0;zb.prototype.getPoint=function(a){var b=this.points;a*=b.length-1;var c=Math.floor(a);a-=c;var d=b[0===c?c:
c-1],e=b[c],f=b[c>b.length-2?b.length-1:c+1],b=b[c>b.length-3?b.length-1:c+2],c=ed.interpolate;return new B(c(d.x,e.x,f.x,b.x,a),c(d.y,e.y,f.y,b.y,a))};Ab.prototype=Object.create(va.prototype);Ab.prototype.constructor=Ab;Ab.prototype.getPoint=function(a){var b=pa.b3;return new B(b(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x),b(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y))};Ab.prototype.getTangent=function(a){var b=ed.tangentCubicBezier;return(new B(b(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x),b(a,this.v0.y,
this.v1.y,this.v2.y,this.v3.y))).normalize()};Bb.prototype=Object.create(va.prototype);Bb.prototype.constructor=Bb;Bb.prototype.getPoint=function(a){var b=pa.b2;return new B(b(a,this.v0.x,this.v1.x,this.v2.x),b(a,this.v0.y,this.v1.y,this.v2.y))};Bb.prototype.getTangent=function(a){var b=ed.tangentQuadraticBezier;return(new B(b(a,this.v0.x,this.v1.x,this.v2.x),b(a,this.v0.y,this.v1.y,this.v2.y))).normalize()};var me=Object.assign(Object.create(Yc.prototype),{fromPoints:function(a){this.moveTo(a[0].x,
a[0].y);for(var b=1,c=a.length;b<c;b++)this.lineTo(a[b].x,a[b].y)},moveTo:function(a,b){this.currentPoint.set(a,b)},lineTo:function(a,b){var c=new Ra(this.currentPoint.clone(),new B(a,b));this.curves.push(c);this.currentPoint.set(a,b)},quadraticCurveTo:function(a,b,c,d){a=new Bb(this.currentPoint.clone(),new B(a,b),new B(c,d));this.curves.push(a);this.currentPoint.set(c,d)},bezierCurveTo:function(a,b,c,d,e,f){a=new Ab(this.currentPoint.clone(),new B(a,b),new B(c,d),new B(e,f));this.curves.push(a);
this.currentPoint.set(e,f)},splineThru:function(a){var b=[this.currentPoint.clone()].concat(a),b=new zb(b);this.curves.push(b);this.currentPoint.copy(a[a.length-1])},arc:function(a,b,c,d,e,f){this.absarc(a+this.currentPoint.x,b+this.currentPoint.y,c,d,e,f)},absarc:function(a,b,c,d,e,f){this.absellipse(a,b,c,c,d,e,f)},ellipse:function(a,b,c,d,e,f,g,h){this.absellipse(a+this.currentPoint.x,b+this.currentPoint.y,c,d,e,f,g,h)},absellipse:function(a,b,c,d,e,f,g,h){a=new Ya(a,b,c,d,e,f,g,h);0<this.curves.length&&
(b=a.getPoint(0),b.equals(this.currentPoint)||this.lineTo(b.x,b.y));this.curves.push(a);a=a.getPoint(1);this.currentPoint.copy(a)}});Za.prototype=Object.assign(Object.create(me),{constructor:Za,getPointsHoles:function(a){for(var b=[],c=0,d=this.holes.length;c<d;c++)b[c]=this.holes[c].getPoints(a);return b},extractAllPoints:function(a){return{shape:this.getPoints(a),holes:this.getPointsHoles(a)}},extractPoints:function(a){return this.extractAllPoints(a)}});Zc.prototype=me;me.constructor=Zc;Td.prototype=
{moveTo:function(a,b){this.currentPath=new Zc;this.subPaths.push(this.currentPath);this.currentPath.moveTo(a,b)},lineTo:function(a,b){this.currentPath.lineTo(a,b)},quadraticCurveTo:function(a,b,c,d){this.currentPath.quadraticCurveTo(a,b,c,d)},bezierCurveTo:function(a,b,c,d,e,f){this.currentPath.bezierCurveTo(a,b,c,d,e,f)},splineThru:function(a){this.currentPath.splineThru(a)},toShapes:function(a,b){function c(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c],f=new Za;f.curves=e.curves;b.push(f)}return b}
function d(a,b){for(var c=b.length,d=!1,e=c-1,f=0;f<c;e=f++){var g=b[e],h=b[f],k=h.x-g.x,l=h.y-g.y;if(Math.abs(l)>Number.EPSILON){if(0>l&&(g=b[f],k=-k,h=b[e],l=-l),!(a.y<g.y||a.y>h.y))if(a.y===g.y){if(a.x===g.x)return!0}else{e=l*(a.x-g.x)-k*(a.y-g.y);if(0===e)return!0;0>e||(d=!d)}}else if(a.y===g.y&&(h.x<=a.x&&a.x<=g.x||g.x<=a.x&&a.x<=h.x))return!0}return d}var e=pa.isClockWise,f=this.subPaths;if(0===f.length)return[];if(!0===b)return c(f);var g,h,k,m=[];if(1===f.length)return h=f[0],k=new Za,k.curves=
h.curves,m.push(k),m;var l=!e(f[0].getPoints()),l=a?!l:l;k=[];var p=[],n=[],q=0,w;p[q]=void 0;n[q]=[];for(var u=0,A=f.length;u<A;u++)h=f[u],w=h.getPoints(),g=e(w),(g=a?!g:g)?(!l&&p[q]&&q++,p[q]={s:new Za,p:w},p[q].s.curves=h.curves,l&&q++,n[q]=[]):n[q].push({h:h,p:w[0]});if(!p[0])return c(f);if(1<p.length){u=!1;h=[];e=0;for(f=p.length;e<f;e++)k[e]=[];e=0;for(f=p.length;e<f;e++)for(g=n[e],l=0;l<g.length;l++){q=g[l];w=!0;for(A=0;A<p.length;A++)d(q.p,p[A].p)&&(e!==A&&h.push({froms:e,tos:A,hole:l}),w?
(w=!1,k[A].push(q)):u=!0);w&&k[e].push(q)}0<h.length&&(u||(n=k))}u=0;for(e=p.length;u<e;u++)for(k=p[u].s,m.push(k),h=n[u],f=0,g=h.length;f<g;f++)k.holes.push(h[f].h);return m}};Object.assign(Ud.prototype,{isFont:!0,generateShapes:function(a,b,c){void 0===b&&(b=100);void 0===c&&(c=4);var d=this.data;a=String(a).split("");var e=b/d.resolution,f=0;b=[];for(var g=0;g<a.length;g++){var h;h=e;var k=f,l=d.glyphs[a[g]]||d.glyphs["?"];if(l){var q=new Td,p=[],n=pa.b2,r=pa.b3,w,u,A,t,v,z,y,C;if(l.o)for(var B=
l._cachedOutline||(l._cachedOutline=l.o.split(" ")),E=0,F=B.length;E<F;)switch(B[E++]){case "m":w=B[E++]*h+k;u=B[E++]*h;q.moveTo(w,u);break;case "l":w=B[E++]*h+k;u=B[E++]*h;q.lineTo(w,u);break;case "q":w=B[E++]*h+k;u=B[E++]*h;v=B[E++]*h+k;z=B[E++]*h;q.quadraticCurveTo(v,z,w,u);if(t=p[p.length-1]){A=t.x;t=t.y;for(var G=1;G<=c;G++){var I=G/c;n(I,A,v,w);n(I,t,z,u)}}break;case "b":if(w=B[E++]*h+k,u=B[E++]*h,v=B[E++]*h+k,z=B[E++]*h,y=B[E++]*h+k,C=B[E++]*h,q.bezierCurveTo(v,z,y,C,w,u),t=p[p.length-1])for(A=
t.x,t=t.y,G=1;G<=c;G++)I=G/c,r(I,A,v,y,w),r(I,t,z,C,u)}h={offset:l.ha*h,path:q}}else h=void 0;f+=h.offset;b.push(h.path)}c=[];d=0;for(a=b.length;d<a;d++)Array.prototype.push.apply(c,b[d].toShapes());return c}});Object.assign(Ee.prototype,{load:function(a,b,c,d){var e=this;(new Oa(this.manager)).load(a,function(a){var c;try{c=JSON.parse(a)}catch(d){console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),c=JSON.parse(a.substring(65,a.length-2))}a=e.parse(c);
b&&b(a)},c,d)},parse:function(a){return new Ud(a)}});var Gd,Yd={getContext:function(){void 0===Gd&&(Gd=new (window.AudioContext||window.webkitAudioContext));return Gd},setContext:function(a){Gd=a}};Object.assign(Vd.prototype,{load:function(a,b,c,d){var e=new Oa(this.manager);e.setResponseType("arraybuffer");e.load(a,function(a){Yd.getContext().decodeAudioData(a,function(a){b(a)})},c,d)}});Wd.prototype=Object.assign(Object.create(ma.prototype),{constructor:Wd,isRectAreaLight:!0,copy:function(a){ma.prototype.copy.call(this,
a);this.width=a.width;this.height=a.height;return this}});Object.assign(Fe.prototype,{update:function(){var a,b,c,d,e,f,g,h=new P,k=new P;return function(l){if(a!==this||b!==l.focus||c!==l.fov||d!==l.aspect*this.aspect||e!==l.near||f!==l.far||g!==l.zoom){a=this;b=l.focus;c=l.fov;d=l.aspect*this.aspect;e=l.near;f=l.far;g=l.zoom;var q=l.projectionMatrix.clone(),p=this.eyeSep/2,n=p*e/b,r=e*Math.tan(S.DEG2RAD*c*.5)/g,w;k.elements[12]=-p;h.elements[12]=p;p=-r*d+n;w=r*d+n;q.elements[0]=2*e/(w-p);q.elements[8]=
(w+p)/(w-p);this.cameraL.projectionMatrix.copy(q);p=-r*d-n;w=r*d-n;q.elements[0]=2*e/(w-p);q.elements[8]=(w+p)/(w-p);this.cameraR.projectionMatrix.copy(q)}this.cameraL.matrixWorld.copy(l.matrixWorld).multiply(k);this.cameraR.matrixWorld.copy(l.matrixWorld).multiply(h)}}()});Ad.prototype=Object.create(F.prototype);Ad.prototype.constructor=Ad;Xd.prototype=Object.assign(Object.create(F.prototype),{constructor:Xd,getInput:function(){return this.gain},removeFilter:function(){null!==this.filter&&(this.gain.disconnect(this.filter),
this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null)},getFilter:function(){return this.filter},setFilter:function(a){null!==this.filter?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination);this.filter=a;this.gain.connect(this.filter);this.filter.connect(this.context.destination)},getMasterVolume:function(){return this.gain.gain.value},setMasterVolume:function(a){this.gain.gain.value=
a},updateMatrixWorld:function(){var a=new q,b=new ca,c=new q,d=new q;return function(e){F.prototype.updateMatrixWorld.call(this,e);e=this.context.listener;var f=this.up;this.matrixWorld.decompose(a,b,c);d.set(0,0,-1).applyQuaternion(b);e.positionX?(e.positionX.setValueAtTime(a.x,this.context.currentTime),e.positionY.setValueAtTime(a.y,this.context.currentTime),e.positionZ.setValueAtTime(a.z,this.context.currentTime),e.forwardX.setValueAtTime(d.x,this.context.currentTime),e.forwardY.setValueAtTime(d.y,
this.context.currentTime),e.forwardZ.setValueAtTime(d.z,this.context.currentTime),e.upX.setValueAtTime(f.x,this.context.currentTime),e.upY.setValueAtTime(f.y,this.context.currentTime),e.upZ.setValueAtTime(f.z,this.context.currentTime)):(e.setPosition(a.x,a.y,a.z),e.setOrientation(d.x,d.y,d.z,f.x,f.y,f.z))}}()});ec.prototype=Object.assign(Object.create(F.prototype),{constructor:ec,getOutput:function(){return this.gain},setNodeSource:function(a){this.hasPlaybackControl=!1;this.sourceType="audioNode";
this.source=a;this.connect();return this},setBuffer:function(a){this.buffer=a;this.sourceType="buffer";this.autoplay&&this.play();return this},play:function(){if(!0===this.isPlaying)console.warn("THREE.Audio: Audio is already playing.");else if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else{var a=this.context.createBufferSource();a.buffer=this.buffer;a.loop=this.loop;a.onended=this.onEnded.bind(this);a.playbackRate.setValueAtTime(this.playbackRate,
this.startTime);a.start(0,this.startTime);this.isPlaying=!0;this.source=a;return this.connect()}},pause:function(){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.source.stop(),this.startTime=this.context.currentTime,this.isPlaying=!1,this},stop:function(){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.source.stop(),this.startTime=0,this.isPlaying=!1,this},connect:function(){if(0<
this.filters.length){this.source.connect(this.filters[0]);for(var a=1,b=this.filters.length;a<b;a++)this.filters[a-1].connect(this.filters[a]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this},disconnect:function(){if(0<this.filters.length){this.source.disconnect(this.filters[0]);for(var a=1,b=this.filters.length;a<b;a++)this.filters[a-1].disconnect(this.filters[a]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());
return this},getFilters:function(){return this.filters},setFilters:function(a){a||(a=[]);!0===this.isPlaying?(this.disconnect(),this.filters=a,this.connect()):this.filters=a;return this},getFilter:function(){return this.getFilters()[0]},setFilter:function(a){return this.setFilters(a?[a]:[])},setPlaybackRate:function(a){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.playbackRate=a,!0===this.isPlaying&&this.source.playbackRate.setValueAtTime(this.playbackRate,
this.context.currentTime),this},getPlaybackRate:function(){return this.playbackRate},onEnded:function(){this.isPlaying=!1},getLoop:function(){return!1===this.hasPlaybackControl?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop},setLoop:function(a){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.loop=a,!0===this.isPlaying&&(this.source.loop=this.loop),this},getVolume:function(){return this.gain.gain.value},
setVolume:function(a){this.gain.gain.value=a;return this}});Zd.prototype=Object.assign(Object.create(ec.prototype),{constructor:Zd,getOutput:function(){return this.panner},getRefDistance:function(){return this.panner.refDistance},setRefDistance:function(a){this.panner.refDistance=a},getRolloffFactor:function(){return this.panner.rolloffFactor},setRolloffFactor:function(a){this.panner.rolloffFactor=a},getDistanceModel:function(){return this.panner.distanceModel},setDistanceModel:function(a){this.panner.distanceModel=
a},getMaxDistance:function(){return this.panner.maxDistance},setMaxDistance:function(a){this.panner.maxDistance=a},updateMatrixWorld:function(){var a=new q;return function(b){F.prototype.updateMatrixWorld.call(this,b);a.setFromMatrixPosition(this.matrixWorld);this.panner.setPosition(a.x,a.y,a.z)}}()});Object.assign($d.prototype,{getFrequencyData:function(){this.analyser.getByteFrequencyData(this.data);return this.data},getAverageFrequency:function(){for(var a=0,b=this.getFrequencyData(),c=0;c<b.length;c++)a+=
b[c];return a/b.length}});Bd.prototype={constructor:Bd,accumulate:function(a,b){var c=this.buffer,d=this.valueSize,e=a*d+d,f=this.cumulativeWeight;if(0===f){for(f=0;f!==d;++f)c[e+f]=c[f];f=b}else f+=b,this._mixBufferRegion(c,e,0,b/f,d);this.cumulativeWeight=f},apply:function(a){var b=this.valueSize,c=this.buffer;a=a*b+b;var d=this.cumulativeWeight,e=this.binding;this.cumulativeWeight=0;1>d&&this._mixBufferRegion(c,a,3*b,1-d,b);for(var d=b,f=b+b;d!==f;++d)if(c[d]!==c[d+b]){e.setValue(c,a);break}},
saveOriginalState:function(){var a=this.buffer,b=this.valueSize,c=3*b;this.binding.getValue(a,c);for(var d=b;d!==c;++d)a[d]=a[c+d%b];this.cumulativeWeight=0},restoreOriginalState:function(){this.binding.setValue(this.buffer,3*this.valueSize)},_select:function(a,b,c,d,e){if(.5<=d)for(d=0;d!==e;++d)a[b+d]=a[c+d]},_slerp:function(a,b,c,d,e){ca.slerpFlat(a,b,a,b,a,c,d)},_lerp:function(a,b,c,d,e){for(var f=1-d,g=0;g!==e;++g){var h=b+g;a[h]=a[h]*f+a[c+g]*d}}};ja.prototype={constructor:ja,getValue:function(a,
b){this.bind();this.getValue(a,b)},setValue:function(a,b){this.bind();this.setValue(a,b)},bind:function(){var a=this.node,b=this.parsedPath,c=b.objectName,d=b.propertyName,e=b.propertyIndex;a||(this.node=a=ja.findNode(this.rootNode,b.nodeName)||this.rootNode);this.getValue=this._getValue_unavailable;this.setValue=this._setValue_unavailable;if(a){if(c){var f=b.objectIndex;switch(c){case "materials":if(!a.material){console.error("  can not bind to material as node does not have a material",this);return}if(!a.material.materials){console.error("  can not bind to material.materials as node.material does not have a materials array",
this);return}a=a.material.materials;break;case "bones":if(!a.skeleton){console.error("  can not bind to bones as node does not have a skeleton",this);return}a=a.skeleton.bones;for(c=0;c<a.length;c++)if(a[c].name===f){f=c;break}break;default:if(void 0===a[c]){console.error("  can not bind to objectName of node, undefined",this);return}a=a[c]}if(void 0!==f){if(void 0===a[f]){console.error("  trying to bind to objectIndex of objectName, but is undefined:",this,a);return}a=a[f]}}f=a[d];if(void 0===f)console.error("  trying to update property for track: "+
b.nodeName+"."+d+" but it wasn't found.",a);else{b=this.Versioning.None;void 0!==a.needsUpdate?(b=this.Versioning.NeedsUpdate,this.targetObject=a):void 0!==a.matrixWorldNeedsUpdate&&(b=this.Versioning.MatrixWorldNeedsUpdate,this.targetObject=a);c=this.BindingType.Direct;if(void 0!==e){if("morphTargetInfluences"===d){if(!a.geometry){console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry",this);return}if(!a.geometry.morphTargets){console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry.morphTargets",
this);return}for(c=0;c<this.node.geometry.morphTargets.length;c++)if(a.geometry.morphTargets[c].name===e){e=c;break}}c=this.BindingType.ArrayElement;this.resolvedProperty=f;this.propertyIndex=e}else void 0!==f.fromArray&&void 0!==f.toArray?(c=this.BindingType.HasFromToArray,this.resolvedProperty=f):void 0!==f.length?(c=this.BindingType.EntireArray,this.resolvedProperty=f):this.propertyName=d;this.getValue=this.GetterByBindingType[c];this.setValue=this.SetterByBindingTypeAndVersioning[c][b]}}else console.error("  trying to update node for track: "+
this.path+" but it wasn't found.")},unbind:function(){this.node=null;this.getValue=this._getValue_unbound;this.setValue=this._setValue_unbound}};Object.assign(ja.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},_getValue_unbound:ja.prototype.getValue,_setValue_unbound:ja.prototype.setValue,BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(a,b){a[b]=this.node[this.propertyName]},
function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)a[b++]=c[d]},function(a,b){a[b]=this.resolvedProperty[this.propertyIndex]},function(a,b){this.resolvedProperty.toArray(a,b)}],SetterByBindingTypeAndVersioning:[[function(a,b){this.node[this.propertyName]=a[b]},function(a,b){this.node[this.propertyName]=a[b];this.targetObject.needsUpdate=!0},function(a,b){this.node[this.propertyName]=a[b];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(a,b){for(var c=this.resolvedProperty,
d=0,e=c.length;d!==e;++d)c[d]=a[b++]},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++];this.targetObject.needsUpdate=!0},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(a,b){this.resolvedProperty[this.propertyIndex]=a[b]},function(a,b){this.resolvedProperty[this.propertyIndex]=a[b];this.targetObject.needsUpdate=!0},function(a,b){this.resolvedProperty[this.propertyIndex]=a[b];
this.targetObject.matrixWorldNeedsUpdate=!0}],[function(a,b){this.resolvedProperty.fromArray(a,b)},function(a,b){this.resolvedProperty.fromArray(a,b);this.targetObject.needsUpdate=!0},function(a,b){this.resolvedProperty.fromArray(a,b);this.targetObject.matrixWorldNeedsUpdate=!0}]]});ja.Composite=function(a,b,c){c=c||ja.parseTrackName(b);this._targetGroup=a;this._bindings=a.subscribe_(b,c)};ja.Composite.prototype={constructor:ja.Composite,getValue:function(a,b){this.bind();var c=this._bindings[this._targetGroup.nCachedObjects_];
void 0!==c&&c.getValue(a,b)},setValue:function(a,b){for(var c=this._bindings,d=this._targetGroup.nCachedObjects_,e=c.length;d!==e;++d)c[d].setValue(a,b)},bind:function(){for(var a=this._bindings,b=this._targetGroup.nCachedObjects_,c=a.length;b!==c;++b)a[b].bind()},unbind:function(){for(var a=this._bindings,b=this._targetGroup.nCachedObjects_,c=a.length;b!==c;++b)a[b].unbind()}};ja.create=function(a,b,c){return a&&a.isAnimationObjectGroup?new ja.Composite(a,b,c):new ja(a,b,c)};ja.parseTrackName=function(a){var b=
/^((?:\w+[\/:])*)(\w+)?(?:\.(\w+)(?:\[(.+)\])?)?\.(\w+)(?:\[(.+)\])?$/.exec(a);if(!b)throw Error("cannot parse trackName at all: "+a);b={nodeName:b[2],objectName:b[3],objectIndex:b[4],propertyName:b[5],propertyIndex:b[6]};if(null===b.propertyName||0===b.propertyName.length)throw Error("can not parse propertyName from trackName: "+a);return b};ja.findNode=function(a,b){if(!b||""===b||"root"===b||"."===b||-1===b||b===a.name||b===a.uuid)return a;if(a.skeleton){var c=function(a){for(var c=0;c<a.bones.length;c++){var d=
a.bones[c];if(d.name===b)return d}return null}(a.skeleton);if(c)return c}if(a.children){var d=function(a){for(var c=0;c<a.length;c++){var g=a[c];if(g.name===b||g.uuid===b||(g=d(g.children)))return g}return null};if(c=d(a.children))return c}return null};ae.prototype={constructor:ae,isAnimationObjectGroup:!0,add:function(a){for(var b=this._objects,c=b.length,d=this.nCachedObjects_,e=this._indicesByUUID,f=this._paths,g=this._parsedPaths,h=this._bindings,k=h.length,l=0,q=arguments.length;l!==q;++l){var p=
arguments[l],n=p.uuid,r=e[n];if(void 0===r){r=c++;e[n]=r;b.push(p);for(var n=0,w=k;n!==w;++n)h[n].push(new ja(p,f[n],g[n]))}else if(r<d){var u=b[r],A=--d,w=b[A];e[w.uuid]=r;b[r]=w;e[n]=A;b[A]=p;n=0;for(w=k;n!==w;++n){var t=h[n],v=t[r];t[r]=t[A];void 0===v&&(v=new ja(p,f[n],g[n]));t[A]=v}}else b[r]!==u&&console.error("Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes...")}this.nCachedObjects_=d},remove:function(a){for(var b=this._objects,
c=this.nCachedObjects_,d=this._indicesByUUID,e=this._bindings,f=e.length,g=0,h=arguments.length;g!==h;++g){var k=arguments[g],l=k.uuid,q=d[l];if(void 0!==q&&q>=c){var p=c++,n=b[p];d[n.uuid]=q;b[q]=n;d[l]=p;b[p]=k;k=0;for(l=f;k!==l;++k){var n=e[k],r=n[q];n[q]=n[p];n[p]=r}}}this.nCachedObjects_=c},uncache:function(a){for(var b=this._objects,c=b.length,d=this.nCachedObjects_,e=this._indicesByUUID,f=this._bindings,g=f.length,h=0,k=arguments.length;h!==k;++h){var l=arguments[h].uuid,q=e[l];if(void 0!==
q)if(delete e[l],q<d){var l=--d,p=b[l],n=--c,r=b[n];e[p.uuid]=q;b[q]=p;e[r.uuid]=l;b[l]=r;b.pop();p=0;for(r=g;p!==r;++p){var w=f[p],u=w[n];w[q]=w[l];w[l]=u;w.pop()}}else for(n=--c,r=b[n],e[r.uuid]=q,b[q]=r,b.pop(),p=0,r=g;p!==r;++p)w=f[p],w[q]=w[n],w.pop()}this.nCachedObjects_=d},subscribe_:function(a,b){var c=this._bindingsIndicesByPath,d=c[a],e=this._bindings;if(void 0!==d)return e[d];var f=this._paths,g=this._parsedPaths,h=this._objects,k=this.nCachedObjects_,l=Array(h.length),d=e.length;c[a]=
d;f.push(a);g.push(b);e.push(l);c=k;for(d=h.length;c!==d;++c)l[c]=new ja(h[c],a,b);return l},unsubscribe_:function(a){var b=this._bindingsIndicesByPath,c=b[a];if(void 0!==c){var d=this._paths,e=this._parsedPaths,f=this._bindings,g=f.length-1,h=f[g];b[a[g]]=c;f[c]=h;f.pop();e[c]=e[g];e.pop();d[c]=d[g];d.pop()}}};be.prototype={constructor:be,play:function(){this._mixer._activateAction(this);return this},stop:function(){this._mixer._deactivateAction(this);return this.reset()},reset:function(){this.paused=
!1;this.enabled=!0;this.time=0;this._loopCount=-1;this._startTime=null;return this.stopFading().stopWarping()},isRunning:function(){return this.enabled&&!this.paused&&0!==this.timeScale&&null===this._startTime&&this._mixer._isActiveAction(this)},isScheduled:function(){return this._mixer._isActiveAction(this)},startAt:function(a){this._startTime=a;return this},setLoop:function(a,b){this.loop=a;this.repetitions=b;return this},setEffectiveWeight:function(a){this.weight=a;this._effectiveWeight=this.enabled?
a:0;return this.stopFading()},getEffectiveWeight:function(){return this._effectiveWeight},fadeIn:function(a){return this._scheduleFading(a,0,1)},fadeOut:function(a){return this._scheduleFading(a,1,0)},crossFadeFrom:function(a,b,c){a.fadeOut(b);this.fadeIn(b);if(c){c=this._clip.duration;var d=a._clip.duration,e=c/d;a.warp(1,d/c,b);this.warp(e,1,b)}return this},crossFadeTo:function(a,b,c){return a.crossFadeFrom(this,b,c)},stopFading:function(){var a=this._weightInterpolant;null!==a&&(this._weightInterpolant=
null,this._mixer._takeBackControlInterpolant(a));return this},setEffectiveTimeScale:function(a){this.timeScale=a;this._effectiveTimeScale=this.paused?0:a;return this.stopWarping()},getEffectiveTimeScale:function(){return this._effectiveTimeScale},setDuration:function(a){this.timeScale=this._clip.duration/a;return this.stopWarping()},syncWith:function(a){this.time=a.time;this.timeScale=a.timeScale;return this.stopWarping()},halt:function(a){return this.warp(this._effectiveTimeScale,0,a)},warp:function(a,
b,c){var d=this._mixer,e=d.time,f=this._timeScaleInterpolant,g=this.timeScale;null===f&&(this._timeScaleInterpolant=f=d._lendControlInterpolant());d=f.parameterPositions;f=f.sampleValues;d[0]=e;d[1]=e+c;f[0]=a/g;f[1]=b/g;return this},stopWarping:function(){var a=this._timeScaleInterpolant;null!==a&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(a));return this},getMixer:function(){return this._mixer},getClip:function(){return this._clip},getRoot:function(){return this._localRoot||
this._mixer._root},_update:function(a,b,c,d){var e=this._startTime;if(null!==e){b=(a-e)*c;if(0>b||0===c)return;this._startTime=null;b*=c}b*=this._updateTimeScale(a);c=this._updateTime(b);a=this._updateWeight(a);if(0<a){b=this._interpolants;for(var e=this._propertyBindings,f=0,g=b.length;f!==g;++f)b[f].evaluate(c),e[f].accumulate(d,a)}},_updateWeight:function(a){var b=0;if(this.enabled){var b=this.weight,c=this._weightInterpolant;if(null!==c){var d=c.evaluate(a)[0],b=b*d;a>c.parameterPositions[1]&&
(this.stopFading(),0===d&&(this.enabled=!1))}}return this._effectiveWeight=b},_updateTimeScale:function(a){var b=0;if(!this.paused){var b=this.timeScale,c=this._timeScaleInterpolant;if(null!==c){var d=c.evaluate(a)[0],b=b*d;a>c.parameterPositions[1]&&(this.stopWarping(),0===b?this.paused=!0:this.timeScale=b)}}return this._effectiveTimeScale=b},_updateTime:function(a){var b=this.time+a;if(0===a)return b;var c=this._clip.duration,d=this.loop,e=this._loopCount;if(2200===d)a:{if(-1===e&&(this.loopCount=
0,this._setEndings(!0,!0,!1)),b>=c)b=c;else if(0>b)b=0;else break a;this.clampWhenFinished?this.paused=!0:this.enabled=!1;this._mixer.dispatchEvent({type:"finished",action:this,direction:0>a?-1:1})}else{d=2202===d;-1===e&&(0<=a?(e=0,this._setEndings(!0,0===this.repetitions,d)):this._setEndings(0===this.repetitions,!0,d));if(b>=c||0>b){var f=Math.floor(b/c),b=b-c*f,e=e+Math.abs(f),g=this.repetitions-e;0>g?(this.clampWhenFinished?this.paused=!0:this.enabled=!1,b=0<a?c:0,this._mixer.dispatchEvent({type:"finished",
action:this,direction:0<a?1:-1})):(0===g?(a=0>a,this._setEndings(a,!a,d)):this._setEndings(!1,!1,d),this._loopCount=e,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:f}))}if(d&&1===(e&1))return this.time=b,c-b}return this.time=b},_setEndings:function(a,b,c){var d=this._interpolantSettings;c?(d.endingStart=2401,d.endingEnd=2401):(d.endingStart=a?this.zeroSlopeAtStart?2401:2400:2402,d.endingEnd=b?this.zeroSlopeAtEnd?2401:2400:2402)},_scheduleFading:function(a,b,c){var d=this._mixer,e=d.time,
f=this._weightInterpolant;null===f&&(this._weightInterpolant=f=d._lendControlInterpolant());d=f.parameterPositions;f=f.sampleValues;d[0]=e;f[0]=b;d[1]=e+a;f[1]=c;return this}};Object.assign(ce.prototype,na.prototype,{clipAction:function(a,b){var c=b||this._root,d=c.uuid,e="string"===typeof a?sa.findByName(c,a):a,c=null!==e?e.uuid:a,f=this._actionsByClip[c],g=null;if(void 0!==f){g=f.actionByRoot[d];if(void 0!==g)return g;g=f.knownActions[0];null===e&&(e=g._clip)}if(null===e)return null;e=new be(this,
e,b);this._bindAction(e,g);this._addInactiveAction(e,c,d);return e},existingAction:function(a,b){var c=b||this._root,d=c.uuid,c="string"===typeof a?sa.findByName(c,a):a,c=this._actionsByClip[c?c.uuid:a];return void 0!==c?c.actionByRoot[d]||null:null},stopAllAction:function(){for(var a=this._actions,b=this._nActiveActions,c=this._bindings,d=this._nActiveBindings,e=this._nActiveBindings=this._nActiveActions=0;e!==b;++e)a[e].reset();for(e=0;e!==d;++e)c[e].useCount=0;return this},update:function(a){a*=
this.timeScale;for(var b=this._actions,c=this._nActiveActions,d=this.time+=a,e=Math.sign(a),f=this._accuIndex^=1,g=0;g!==c;++g){var h=b[g];h.enabled&&h._update(d,a,e,f)}a=this._bindings;b=this._nActiveBindings;for(g=0;g!==b;++g)a[g].apply(f);return this},getRoot:function(){return this._root},uncacheClip:function(a){var b=this._actions;a=a.uuid;var c=this._actionsByClip,d=c[a];if(void 0!==d){for(var d=d.knownActions,e=0,f=d.length;e!==f;++e){var g=d[e];this._deactivateAction(g);var h=g._cacheIndex,
k=b[b.length-1];g._cacheIndex=null;g._byClipCacheIndex=null;k._cacheIndex=h;b[h]=k;b.pop();this._removeInactiveBindingsForAction(g)}delete c[a]}},uncacheRoot:function(a){a=a.uuid;var b=this._actionsByClip,c;for(c in b){var d=b[c].actionByRoot[a];void 0!==d&&(this._deactivateAction(d),this._removeInactiveAction(d))}c=this._bindingsByRootAndName[a];if(void 0!==c)for(var e in c)a=c[e],a.restoreOriginalState(),this._removeInactiveBinding(a)},uncacheAction:function(a,b){var c=this.existingAction(a,b);
null!==c&&(this._deactivateAction(c),this._removeInactiveAction(c))}});Object.assign(ce.prototype,{_bindAction:function(a,b){var c=a._localRoot||this._root,d=a._clip.tracks,e=d.length,f=a._propertyBindings,g=a._interpolants,h=c.uuid,k=this._bindingsByRootAndName,l=k[h];void 0===l&&(l={},k[h]=l);for(k=0;k!==e;++k){var q=d[k],p=q.name,n=l[p];if(void 0===n){n=f[k];if(void 0!==n){null===n._cacheIndex&&(++n.referenceCount,this._addInactiveBinding(n,h,p));continue}n=new Bd(ja.create(c,p,b&&b._propertyBindings[k].binding.parsedPath),
q.ValueTypeName,q.getValueSize());++n.referenceCount;this._addInactiveBinding(n,h,p)}f[k]=n;g[k].resultBuffer=n.buffer}},_activateAction:function(a){if(!this._isActiveAction(a)){if(null===a._cacheIndex){var b=(a._localRoot||this._root).uuid,c=a._clip.uuid,d=this._actionsByClip[c];this._bindAction(a,d&&d.knownActions[0]);this._addInactiveAction(a,c,b)}b=a._propertyBindings;c=0;for(d=b.length;c!==d;++c){var e=b[c];0===e.useCount++&&(this._lendBinding(e),e.saveOriginalState())}this._lendAction(a)}},
_deactivateAction:function(a){if(this._isActiveAction(a)){for(var b=a._propertyBindings,c=0,d=b.length;c!==d;++c){var e=b[c];0===--e.useCount&&(e.restoreOriginalState(),this._takeBackBinding(e))}this._takeBackAction(a)}},_initMemoryManager:function(){this._actions=[];this._nActiveActions=0;this._actionsByClip={};this._bindings=[];this._nActiveBindings=0;this._bindingsByRootAndName={};this._controlInterpolants=[];this._nActiveControlInterpolants=0;var a=this;this.stats={actions:{get total(){return a._actions.length},
get inUse(){return a._nActiveActions}},bindings:{get total(){return a._bindings.length},get inUse(){return a._nActiveBindings}},controlInterpolants:{get total(){return a._controlInterpolants.length},get inUse(){return a._nActiveControlInterpolants}}}},_isActiveAction:function(a){a=a._cacheIndex;return null!==a&&a<this._nActiveActions},_addInactiveAction:function(a,b,c){var d=this._actions,e=this._actionsByClip,f=e[b];void 0===f?(f={knownActions:[a],actionByRoot:{}},a._byClipCacheIndex=0,e[b]=f):(b=
f.knownActions,a._byClipCacheIndex=b.length,b.push(a));a._cacheIndex=d.length;d.push(a);f.actionByRoot[c]=a},_removeInactiveAction:function(a){var b=this._actions,c=b[b.length-1],d=a._cacheIndex;c._cacheIndex=d;b[d]=c;b.pop();a._cacheIndex=null;var c=a._clip.uuid,d=this._actionsByClip,e=d[c],f=e.knownActions,g=f[f.length-1],h=a._byClipCacheIndex;g._byClipCacheIndex=h;f[h]=g;f.pop();a._byClipCacheIndex=null;delete e.actionByRoot[(b._localRoot||this._root).uuid];0===f.length&&delete d[c];this._removeInactiveBindingsForAction(a)},
_removeInactiveBindingsForAction:function(a){a=a._propertyBindings;for(var b=0,c=a.length;b!==c;++b){var d=a[b];0===--d.referenceCount&&this._removeInactiveBinding(d)}},_lendAction:function(a){var b=this._actions,c=a._cacheIndex,d=this._nActiveActions++,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_takeBackAction:function(a){var b=this._actions,c=a._cacheIndex,d=--this._nActiveActions,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_addInactiveBinding:function(a,b,c){var d=this._bindingsByRootAndName,
e=d[b],f=this._bindings;void 0===e&&(e={},d[b]=e);e[c]=a;a._cacheIndex=f.length;f.push(a)},_removeInactiveBinding:function(a){var b=this._bindings,c=a.binding,d=c.rootNode.uuid,c=c.path,e=this._bindingsByRootAndName,f=e[d],g=b[b.length-1];a=a._cacheIndex;g._cacheIndex=a;b[a]=g;b.pop();delete f[c];a:{for(var h in f)break a;delete e[d]}},_lendBinding:function(a){var b=this._bindings,c=a._cacheIndex,d=this._nActiveBindings++,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_takeBackBinding:function(a){var b=
this._bindings,c=a._cacheIndex,d=--this._nActiveBindings,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_lendControlInterpolant:function(){var a=this._controlInterpolants,b=this._nActiveControlInterpolants++,c=a[b];void 0===c&&(c=new Wc(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),c.__cacheIndex=b,a[b]=c);return c},_takeBackControlInterpolant:function(a){var b=this._controlInterpolants,c=a.__cacheIndex,d=--this._nActiveControlInterpolants,e=b[d];a.__cacheIndex=
d;b[d]=a;e.__cacheIndex=c;b[c]=e},_controlInterpolantsResultBuffer:new Float32Array(1)});Cd.prototype.clone=function(){return new Cd(void 0===this.value.clone?this.value:this.value.clone())};Cb.prototype=Object.create(J.prototype);Cb.prototype.constructor=Cb;Cb.prototype.isInstancedBufferGeometry=!0;Cb.prototype.addGroup=function(a,b,c){this.groups.push({start:a,count:b,materialIndex:c})};Cb.prototype.copy=function(a){var b=a.index;null!==b&&this.setIndex(b.clone());var b=a.attributes,c;for(c in b)this.addAttribute(c,
b[c].clone());a=a.groups;c=0;for(b=a.length;c<b;c++){var d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}return this};de.prototype={constructor:de,isInterleavedBufferAttribute:!0,get count(){return this.data.count},get array(){return this.data.array},setX:function(a,b){this.data.array[a*this.data.stride+this.offset]=b;return this},setY:function(a,b){this.data.array[a*this.data.stride+this.offset+1]=b;return this},setZ:function(a,b){this.data.array[a*this.data.stride+this.offset+2]=b;return this},
setW:function(a,b){this.data.array[a*this.data.stride+this.offset+3]=b;return this},getX:function(a){return this.data.array[a*this.data.stride+this.offset]},getY:function(a){return this.data.array[a*this.data.stride+this.offset+1]},getZ:function(a){return this.data.array[a*this.data.stride+this.offset+2]},getW:function(a){return this.data.array[a*this.data.stride+this.offset+3]},setXY:function(a,b,c){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;return this},setXYZ:function(a,
b,c,d){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;this.data.array[a+2]=d;return this},setXYZW:function(a,b,c,d,e){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;this.data.array[a+2]=d;this.data.array[a+3]=e;return this}};fc.prototype={constructor:fc,isInterleavedBuffer:!0,set needsUpdate(a){!0===a&&this.version++},setArray:function(a){if(Array.isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
this.count=void 0!==a?a.length/this.stride:0;this.array=a},setDynamic:function(a){this.dynamic=a;return this},copy:function(a){this.array=new a.array.constructor(a.array);this.count=a.count;this.stride=a.stride;this.dynamic=a.dynamic;return this},copyAt:function(a,b,c){a*=this.stride;c*=b.stride;for(var d=0,e=this.stride;d<e;d++)this.array[a+d]=b.array[c+d];return this},set:function(a,b){void 0===b&&(b=0);this.array.set(a,b);return this},clone:function(){return(new this.constructor).copy(this)},onUpload:function(a){this.onUploadCallback=
a;return this}};gc.prototype=Object.create(fc.prototype);gc.prototype.constructor=gc;gc.prototype.isInstancedInterleavedBuffer=!0;gc.prototype.copy=function(a){fc.prototype.copy.call(this,a);this.meshPerAttribute=a.meshPerAttribute;return this};hc.prototype=Object.create(z.prototype);hc.prototype.constructor=hc;hc.prototype.isInstancedBufferAttribute=!0;hc.prototype.copy=function(a){z.prototype.copy.call(this,a);this.meshPerAttribute=a.meshPerAttribute;return this};ee.prototype={constructor:ee,linePrecision:1,
set:function(a,b){this.ray.set(a,b)},setFromCamera:function(a,b){b&&b.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(b.matrixWorld),this.ray.direction.set(a.x,a.y,.5).unproject(b).sub(this.ray.origin).normalize()):b&&b.isOrthographicCamera?(this.ray.origin.set(a.x,a.y,(b.near+b.far)/(b.near-b.far)).unproject(b),this.ray.direction.set(0,0,-1).transformDirection(b.matrixWorld)):console.error("THREE.Raycaster: Unsupported camera type.")},intersectObject:function(a,b){var c=[];fe(a,this,c,
b);c.sort(Ge);return c},intersectObjects:function(a,b){var c=[];if(!1===Array.isArray(a))return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),c;for(var d=0,e=a.length;d<e;d++)fe(a[d],this,c,b);c.sort(Ge);return c}};ge.prototype={constructor:ge,start:function(){this.oldTime=this.startTime=(performance||Date).now();this.elapsedTime=0;this.running=!0},stop:function(){this.getElapsedTime();this.running=!1},getElapsedTime:function(){this.getDelta();return this.elapsedTime},
getDelta:function(){var a=0;this.autoStart&&!this.running&&this.start();if(this.running){var b=(performance||Date).now(),a=(b-this.oldTime)/1E3;this.oldTime=b;this.elapsedTime+=a}return a}};he.prototype={constructor:he,set:function(a,b,c){this.radius=a;this.phi=b;this.theta=c;return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.radius=a.radius;this.phi=a.phi;this.theta=a.theta;return this},makeSafe:function(){this.phi=Math.max(1E-6,Math.min(Math.PI-1E-6,this.phi));
return this},setFromVector3:function(a){this.radius=a.length();0===this.radius?this.phi=this.theta=0:(this.theta=Math.atan2(a.x,a.z),this.phi=Math.acos(S.clamp(a.y/this.radius,-1,1)));return this}};ta.prototype=Object.create(Da.prototype);ta.prototype.constructor=ta;ta.prototype.createAnimation=function(a,b,c,d){b={start:b,end:c,length:c-b+1,fps:d,duration:(c-b)/d,lastFrame:0,currentFrame:0,active:!1,time:0,direction:1,weight:1,directionBackwards:!1,mirroredLoop:!1};this.animationsMap[a]=b;this.animationsList.push(b)};
ta.prototype.autoCreateAnimations=function(a){for(var b=/([a-z]+)_?(\d+)/i,c,d={},e=this.geometry,f=0,g=e.morphTargets.length;f<g;f++){var h=e.morphTargets[f].name.match(b);if(h&&1<h.length){var k=h[1];d[k]||(d[k]={start:Infinity,end:-Infinity});h=d[k];f<h.start&&(h.start=f);f>h.end&&(h.end=f);c||(c=k)}}for(k in d)h=d[k],this.createAnimation(k,h.start,h.end,a);this.firstAnimation=c};ta.prototype.setAnimationDirectionForward=function(a){if(a=this.animationsMap[a])a.direction=1,a.directionBackwards=
!1};ta.prototype.setAnimationDirectionBackward=function(a){if(a=this.animationsMap[a])a.direction=-1,a.directionBackwards=!0};ta.prototype.setAnimationFPS=function(a,b){var c=this.animationsMap[a];c&&(c.fps=b,c.duration=(c.end-c.start)/c.fps)};ta.prototype.setAnimationDuration=function(a,b){var c=this.animationsMap[a];c&&(c.duration=b,c.fps=(c.end-c.start)/c.duration)};ta.prototype.setAnimationWeight=function(a,b){var c=this.animationsMap[a];c&&(c.weight=b)};ta.prototype.setAnimationTime=function(a,
b){var c=this.animationsMap[a];c&&(c.time=b)};ta.prototype.getAnimationTime=function(a){var b=0;if(a=this.animationsMap[a])b=a.time;return b};ta.prototype.getAnimationDuration=function(a){var b=-1;if(a=this.animationsMap[a])b=a.duration;return b};ta.prototype.playAnimation=function(a){var b=this.animationsMap[a];b?(b.time=0,b.active=!0):console.warn("THREE.MorphBlendMesh: animation["+a+"] undefined in .playAnimation()")};ta.prototype.stopAnimation=function(a){if(a=this.animationsMap[a])a.active=!1};
ta.prototype.update=function(a){for(var b=0,c=this.animationsList.length;b<c;b++){var d=this.animationsList[b];if(d.active){var e=d.duration/d.length;d.time+=d.direction*a;if(d.mirroredLoop){if(d.time>d.duration||0>d.time)d.direction*=-1,d.time>d.duration&&(d.time=d.duration,d.directionBackwards=!0),0>d.time&&(d.time=0,d.directionBackwards=!1)}else d.time%=d.duration,0>d.time&&(d.time+=d.duration);var f=d.start+S.clamp(Math.floor(d.time/e),0,d.length-1),g=d.weight;f!==d.currentFrame&&(this.morphTargetInfluences[d.lastFrame]=
0,this.morphTargetInfluences[d.currentFrame]=1*g,this.morphTargetInfluences[f]=0,d.lastFrame=d.currentFrame,d.currentFrame=f);e=d.time%e/e;d.directionBackwards&&(e=1-e);d.currentFrame!==d.lastFrame?(this.morphTargetInfluences[d.currentFrame]=e*g,this.morphTargetInfluences[d.lastFrame]=(1-e)*g):this.morphTargetInfluences[d.currentFrame]=g}}};$c.prototype=Object.create(F.prototype);$c.prototype.constructor=$c;$c.prototype.isImmediateRenderObject=!0;ad.prototype=Object.create(ea.prototype);ad.prototype.constructor=
ad;ad.prototype.update=function(){var a=new q,b=new q,c=new Aa;return function(){var d=["a","b","c"];this.object.updateMatrixWorld(!0);c.getNormalMatrix(this.object.matrixWorld);var e=this.object.matrixWorld,f=this.geometry.attributes.position,g=this.object.geometry;if(g&&g.isGeometry)for(var h=g.vertices,k=g.faces,l=g=0,q=k.length;l<q;l++)for(var p=k[l],n=0,r=p.vertexNormals.length;n<r;n++){var w=p.vertexNormals[n];a.copy(h[p[d[n]]]).applyMatrix4(e);b.copy(w).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a);
f.setXYZ(g,a.x,a.y,a.z);g+=1;f.setXYZ(g,b.x,b.y,b.z);g+=1}else if(g&&g.isBufferGeometry)for(d=g.attributes.position,h=g.attributes.normal,n=g=0,r=d.count;n<r;n++)a.set(d.getX(n),d.getY(n),d.getZ(n)).applyMatrix4(e),b.set(h.getX(n),h.getY(n),h.getZ(n)),b.applyMatrix3(c).normalize().multiplyScalar(this.size).add(a),f.setXYZ(g,a.x,a.y,a.z),g+=1,f.setXYZ(g,b.x,b.y,b.z),g+=1;f.needsUpdate=!0;return this}}();ic.prototype=Object.create(F.prototype);ic.prototype.constructor=ic;ic.prototype.dispose=function(){this.cone.geometry.dispose();
this.cone.material.dispose()};ic.prototype.update=function(){var a=new q,b=new q;return function(){var c=this.light.distance?this.light.distance:1E3,d=c*Math.tan(this.light.angle);this.cone.scale.set(d,d,c);a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);this.cone.lookAt(b.sub(a));this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)}}();jc.prototype=Object.create(ea.prototype);jc.prototype.constructor=jc;jc.prototype.getBoneList=
function(a){var b=[];a&&a.isBone&&b.push(a);for(var c=0;c<a.children.length;c++)b.push.apply(b,this.getBoneList(a.children[c]));return b};jc.prototype.update=function(){var a=new q,b=new P,c=new P;return function(){var d=this.geometry,e=d.getAttribute("position");c.getInverse(this.root.matrixWorld);for(var f=0,g=0;f<this.bones.length;f++){var h=this.bones[f];h.parent&&h.parent.isBone&&(b.multiplyMatrices(c,h.matrixWorld),a.setFromMatrixPosition(b),e.setXYZ(g,a.x,a.y,a.z),b.multiplyMatrices(c,h.parent.matrixWorld),
a.setFromMatrixPosition(b),e.setXYZ(g+1,a.x,a.y,a.z),g+=2)}d.getAttribute("position").needsUpdate=!0}}();kc.prototype=Object.create(Da.prototype);kc.prototype.constructor=kc;kc.prototype.dispose=function(){this.geometry.dispose();this.material.dispose()};kc.prototype.update=function(){this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)};lc.prototype=Object.create(F.prototype);lc.prototype.constructor=lc;lc.prototype.dispose=function(){this.lightMesh.geometry.dispose();
this.lightMesh.material.dispose();this.lightWireMesh.geometry.dispose();this.lightWireMesh.material.dispose()};lc.prototype.update=function(){var a=new q,b=new q;this.light.target&&(a.setFromMatrixPosition(this.light.matrixWorld),b.setFromMatrixPosition(this.light.target.matrixWorld),a=b.clone().sub(a),this.lightMesh.lookAt(a),this.lightWireMesh.lookAt(a));this.lightMesh.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.lightWireMesh.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);
var a=this.lightShape,b=this.light.width/2,c=this.light.height/2;this.lightShape=new fb(new Za([new q(-b,c,0),new q(b,c,0),new q(b,-c,0),new q(-b,-c,0)]));this.lightMesh.geometry=this.lightShape;this.lightWireMesh.geometry=this.lightShape;a.dispose()};mc.prototype=Object.create(F.prototype);mc.prototype.constructor=mc;mc.prototype.dispose=function(){this.children[0].geometry.dispose();this.children[0].material.dispose()};mc.prototype.update=function(){var a=new q,b=new G,c=new G;return function(){var d=
this.children[0],e=d.geometry.getAttribute("color");b.copy(this.light.color).multiplyScalar(this.light.intensity);c.copy(this.light.groundColor).multiplyScalar(this.light.intensity);for(var f=0,g=e.count;f<g;f++){var h=f<g/2?b:c;e.setXYZ(f,h.r,h.g,h.b)}d.lookAt(a.setFromMatrixPosition(this.light.matrixWorld).negate());e.needsUpdate=!0}}();bd.prototype=Object.create(ea.prototype);bd.prototype.constructor=bd;Dd.prototype=Object.create(ea.prototype);Dd.prototype.constructor=Dd;cd.prototype=Object.create(ea.prototype);
cd.prototype.constructor=cd;cd.prototype.update=function(){var a=new q,b=new q,c=new Aa;return function(){this.object.updateMatrixWorld(!0);c.getNormalMatrix(this.object.matrixWorld);for(var d=this.object.matrixWorld,e=this.geometry.attributes.position,f=this.object.geometry,g=f.vertices,f=f.faces,h=0,k=0,l=f.length;k<l;k++){var q=f[k],p=q.normal;a.copy(g[q.a]).add(g[q.b]).add(g[q.c]).divideScalar(3).applyMatrix4(d);b.copy(p).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a);e.setXYZ(h,
a.x,a.y,a.z);h+=1;e.setXYZ(h,b.x,b.y,b.z);h+=1}e.needsUpdate=!0;return this}}();nc.prototype=Object.create(F.prototype);nc.prototype.constructor=nc;nc.prototype.dispose=function(){var a=this.children[0],b=this.children[1];a.geometry.dispose();a.material.dispose();b.geometry.dispose();b.material.dispose()};nc.prototype.update=function(){var a=new q,b=new q,c=new q;return function(){a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);c.subVectors(b,
a);var d=this.children[0],e=this.children[1];d.lookAt(c);d.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);e.lookAt(c);e.scale.z=c.length()}}();dd.prototype=Object.create(ea.prototype);dd.prototype.constructor=dd;dd.prototype.update=function(){function a(a,g,h,k){d.set(g,h,k).unproject(e);a=c[a];if(void 0!==a)for(g=b.getAttribute("position"),h=0,k=a.length;h<k;h++)g.setXYZ(a[h],d.x,d.y,d.z)}var b,c,d=new q,e=new ra;return function(){b=this.geometry;c=this.pointMap;e.projectionMatrix.copy(this.camera.projectionMatrix);
a("c",0,0,-1);a("t",0,0,1);a("n1",-1,-1,-1);a("n2",1,-1,-1);a("n3",-1,1,-1);a("n4",1,1,-1);a("f1",-1,-1,1);a("f2",1,-1,1);a("f3",-1,1,1);a("f4",1,1,1);a("u1",.7,1.1,-1);a("u2",-.7,1.1,-1);a("u3",0,2,-1);a("cf1",-1,0,1);a("cf2",1,0,1);a("cf3",0,-1,1);a("cf4",0,1,1);a("cn1",-1,0,-1);a("cn2",1,0,-1);a("cn3",0,-1,-1);a("cn4",0,1,-1);b.getAttribute("position").needsUpdate=!0}}();oc.prototype=Object.create(ea.prototype);oc.prototype.constructor=oc;oc.prototype.update=function(){var a=new za;return function(b){b&&
b.isBox3?a.copy(b):a.setFromObject(b);if(!a.isEmpty()){b=a.min;var c=a.max,d=this.geometry.attributes.position,e=d.array;e[0]=c.x;e[1]=c.y;e[2]=c.z;e[3]=b.x;e[4]=c.y;e[5]=c.z;e[6]=b.x;e[7]=b.y;e[8]=c.z;e[9]=c.x;e[10]=b.y;e[11]=c.z;e[12]=c.x;e[13]=c.y;e[14]=b.z;e[15]=b.x;e[16]=c.y;e[17]=b.z;e[18]=b.x;e[19]=b.y;e[20]=b.z;e[21]=c.x;e[22]=b.y;e[23]=b.z;d.needsUpdate=!0;this.geometry.computeBoundingSphere()}}}();var He=new J;He.addAttribute("position",new W([0,0,0,0,1,0],3));var Ie=new Xa(0,.5,1,5,1);
Ie.translate(0,-.5,0);Db.prototype=Object.create(F.prototype);Db.prototype.constructor=Db;Db.prototype.setDirection=function(){var a=new q,b;return function(c){.99999<c.y?this.quaternion.set(0,0,0,1):-.99999>c.y?this.quaternion.set(1,0,0,0):(a.set(c.z,0,-c.x).normalize(),b=Math.acos(c.y),this.quaternion.setFromAxisAngle(a,b))}}();Db.prototype.setLength=function(a,b,c){void 0===b&&(b=.2*a);void 0===c&&(c=.2*b);this.line.scale.set(1,Math.max(0,a-b),1);this.line.updateMatrix();this.cone.scale.set(c,
b,c);this.cone.position.y=a;this.cone.updateMatrix()};Db.prototype.setColor=function(a){this.line.material.color.copy(a);this.cone.material.color.copy(a)};Ed.prototype=Object.create(ea.prototype);Ed.prototype.constructor=Ed;var ie=function(){function a(){}var b=new q,c=new a,d=new a,e=new a;a.prototype.init=function(a,b,c,d){this.c0=a;this.c1=c;this.c2=-3*a+3*b-2*c-d;this.c3=2*a-2*b+c+d};a.prototype.initNonuniformCatmullRom=function(a,b,c,d,e,l,p){this.init(b,c,((b-a)/e-(c-a)/(e+l)+(c-b)/l)*l,((c-
b)/l-(d-b)/(l+p)+(d-c)/p)*l)};a.prototype.initCatmullRom=function(a,b,c,d,e){this.init(b,c,e*(c-a),e*(d-b))};a.prototype.calc=function(a){var b=a*a;return this.c0+this.c1*a+this.c2*b+this.c3*b*a};return va.create(function(a){this.points=a||[];this.closed=!1},function(a){var g=this.points,h,k;k=g.length;2>k&&console.log("duh, you need at least 2 points");a*=k-(this.closed?0:1);h=Math.floor(a);a-=h;this.closed?h+=0<h?0:(Math.floor(Math.abs(h)/g.length)+1)*g.length:0===a&&h===k-1&&(h=k-2,a=1);var l,
x,p;this.closed||0<h?l=g[(h-1)%k]:(b.subVectors(g[0],g[1]).add(g[0]),l=b);x=g[h%k];p=g[(h+1)%k];this.closed||h+2<k?g=g[(h+2)%k]:(b.subVectors(g[k-1],g[k-2]).add(g[k-1]),g=b);if(void 0===this.type||"centripetal"===this.type||"chordal"===this.type){var n="chordal"===this.type?.5:.25;k=Math.pow(l.distanceToSquared(x),n);h=Math.pow(x.distanceToSquared(p),n);n=Math.pow(p.distanceToSquared(g),n);1E-4>h&&(h=1);1E-4>k&&(k=h);1E-4>n&&(n=h);c.initNonuniformCatmullRom(l.x,x.x,p.x,g.x,k,h,n);d.initNonuniformCatmullRom(l.y,
x.y,p.y,g.y,k,h,n);e.initNonuniformCatmullRom(l.z,x.z,p.z,g.z,k,h,n)}else"catmullrom"===this.type&&(k=void 0!==this.tension?this.tension:.5,c.initCatmullRom(l.x,x.x,p.x,g.x,k),d.initCatmullRom(l.y,x.y,p.y,g.y,k),e.initCatmullRom(l.z,x.z,p.z,g.z,k));return new q(c.calc(a),d.calc(a),e.calc(a))})}(),Lf=va.create(function(a){console.warn("THREE.SplineCurve3 will be deprecated. Please use THREE.CatmullRomCurve3");this.points=void 0===a?[]:a},function(a){var b=this.points;a*=b.length-1;var c=Math.floor(a);
a-=c;var d=b[0==c?c:c-1],e=b[c],f=b[c>b.length-2?b.length-1:c+1],b=b[c>b.length-3?b.length-1:c+2],c=ed.interpolate;return new q(c(d.x,e.x,f.x,b.x,a),c(d.y,e.y,f.y,b.y,a),c(d.z,e.z,f.z,b.z,a))}),Mf=va.create(function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d},function(a){var b=pa.b3;return new q(b(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x),b(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y),b(a,this.v0.z,this.v1.z,this.v2.z,this.v3.z))}),Nf=va.create(function(a,b,c){this.v0=a;this.v1=b;this.v2=c},
function(a){var b=pa.b2;return new q(b(a,this.v0.x,this.v1.x,this.v2.x),b(a,this.v0.y,this.v1.y,this.v2.y),b(a,this.v0.z,this.v1.z,this.v2.z))}),Of=va.create(function(a,b){this.v1=a;this.v2=b},function(a){if(1===a)return this.v2.clone();var b=new q;b.subVectors(this.v2,this.v1);b.multiplyScalar(a);b.add(this.v1);return b});Fd.prototype=Object.create(Ya.prototype);Fd.prototype.constructor=Fd;Je.prototype=Object.create(ie.prototype);bd.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};
Object.assign(pc.prototype,{center:function(a){console.warn("THREE.Box2: .center() has been renamed to .getCenter().");return this.getCenter(a)},empty:function(){console.warn("THREE.Box2: .empty() has been renamed to .isEmpty().");return this.isEmpty()},isIntersectionBox:function(a){console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a)},size:function(a){console.warn("THREE.Box2: .size() has been renamed to .getSize().");return this.getSize(a)}});
Object.assign(za.prototype,{center:function(a){console.warn("THREE.Box3: .center() has been renamed to .getCenter().");return this.getCenter(a)},empty:function(){console.warn("THREE.Box3: .empty() has been renamed to .isEmpty().");return this.isEmpty()},isIntersectionBox:function(a){console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a)},isIntersectionSphere:function(a){console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().");
return this.intersectsSphere(a)},size:function(a){console.warn("THREE.Box3: .size() has been renamed to .getSize().");return this.getSize(a)}});ib.prototype.center=function(a){console.warn("THREE.Line3: .center() has been renamed to .getCenter().");return this.getCenter(a)};S.random16=function(){console.warn("THREE.Math.random16() has been deprecated. Use Math.random() instead.");return Math.random()};Object.assign(Aa.prototype,{flattenToArrayOffset:function(a,b){console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");
return this.toArray(a,b)},multiplyVector3:function(a){console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");return a.applyMatrix3(this)},multiplyVector3Array:function(a){console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");return this.applyToVector3Array(a)}});Object.assign(P.prototype,{extractPosition:function(a){console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().");
return this.copyPosition(a)},flattenToArrayOffset:function(a,b){console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");return this.toArray(a,b)},getPosition:function(){var a;return function(){void 0===a&&(a=new q);console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");return a.setFromMatrixColumn(this,3)}}(),setRotationFromQuaternion:function(a){console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");
return this.makeRotationFromQuaternion(a)},multiplyVector3:function(a){console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead.");return a.applyProjection(this)},multiplyVector4:function(a){console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},multiplyVector3Array:function(a){console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");
return this.applyToVector3Array(a)},rotateAxis:function(a){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");a.transformDirection(this)},crossVector:function(a){console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},
rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")}});la.prototype.isIntersectionLine=function(a){console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().");return this.intersectsLine(a)};ca.prototype.multiplyVector3=function(a){console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");
return a.applyQuaternion(this)};Object.assign(db.prototype,{isIntersectionBox:function(a){console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a)},isIntersectionPlane:function(a){console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().");return this.intersectsPlane(a)},isIntersectionSphere:function(a){console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().");return this.intersectsSphere(a)}});
Object.assign(Za.prototype,{extrude:function(a){console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead.");return new Na(this,a)},makeGeometry:function(a){console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead.");return new Xb(this,a)}});Object.assign(q.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},
getPositionFromMatrix:function(a){console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");return this.setFromMatrixPosition(a)},getScaleFromMatrix:function(a){console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");return this.setFromMatrixScale(a)},getColumnFromMatrix:function(a,b){console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");return this.setFromMatrixColumn(b,
a)}});R.prototype.computeTangents=function(){console.warn("THREE.Geometry: .computeTangents() has been removed.")};Object.assign(F.prototype,{getChildByName:function(a){console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");return this.getObjectByName(a)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(a,b){console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");
return this.translateOnAxis(b,a)}});Object.defineProperties(F.prototype,{eulerOrder:{get:function(){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");return this.rotation.order},set:function(a){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");this.rotation.order=a}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});
Object.defineProperties(Ac.prototype,{objects:{get:function(){console.warn("THREE.LOD: .objects has been renamed to .levels.");return this.levels}}});Ia.prototype.setLens=function(a,b){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup.");void 0!==b&&(this.filmGauge=b);this.setFocalLength(a)};Object.defineProperties(ma.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(a){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov.");
this.shadow.camera.fov=a}},shadowCameraLeft:{set:function(a){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left.");this.shadow.camera.left=a}},shadowCameraRight:{set:function(a){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right.");this.shadow.camera.right=a}},shadowCameraTop:{set:function(a){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top.");this.shadow.camera.top=a}},shadowCameraBottom:{set:function(a){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.");
this.shadow.camera.bottom=a}},shadowCameraNear:{set:function(a){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near.");this.shadow.camera.near=a}},shadowCameraFar:{set:function(a){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far.");this.shadow.camera.far=a}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(a){console.warn("THREE.Light: .shadowBias is now .shadow.bias.");
this.shadow.bias=a}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(a){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.");this.shadow.mapSize.width=a}},shadowMapHeight:{set:function(a){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.");this.shadow.mapSize.height=a}}});Object.defineProperties(z.prototype,{length:{get:function(){console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead.");
return this.array.length}}});Object.assign(J.prototype,{addIndex:function(a){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().");this.setIndex(a)},addDrawCall:function(a,b,c){void 0!==c&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.");console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup().");this.addGroup(a,b)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().");
this.clearGroups()},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")}});Object.defineProperties(J.prototype,{drawcalls:{get:function(){console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups.");return this.groups}},offsets:{get:function(){console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups.");return this.groups}}});
Object.defineProperties(Cd.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead.");return this}}});Object.defineProperties(U.prototype,{wrapAround:{get:function(){console.warn("THREE."+this.type+": .wrapAround has been removed.")},set:function(){console.warn("THREE."+this.type+": .wrapAround has been removed.")}},
wrapRGB:{get:function(){console.warn("THREE."+this.type+": .wrapRGB has been removed.");return new G}}});Object.defineProperties(Ea.prototype,{metal:{get:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead.");return!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}});Object.defineProperties(Ja.prototype,{derivatives:{get:function(){console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");
return this.extensions.derivatives},set:function(a){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");this.extensions.derivatives=a}}});na.prototype=Object.assign(Object.create({constructor:na,apply:function(a){console.warn("THREE.EventDispatcher: .apply is deprecated, just inherit or Object.assign the prototype to mix-in.");Object.assign(a,this)}}),na.prototype);Object.assign(Md.prototype,{supportsFloatTextures:function(){console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' ).");
return this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' ).");return this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' ).");return this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' ).");
return this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' ).");return this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' ).");return this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures.");
return this.capabilities.vertexTextures},supportsInstancedArrays:function(){console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' ).");return this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(a){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().");this.setScissorTest(a)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},
addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")}});Object.defineProperties(Md.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.");this.shadowMap.enabled=a}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.");
this.shadowMap.type=a}},shadowMapCullFace:{get:function(){return this.shadowMap.cullFace},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace.");this.shadowMap.cullFace=a}}});Object.defineProperties(we.prototype,{cullFace:{get:function(){return this.renderReverseSided?2:1},set:function(a){a=1!==a;console.warn("WebGLRenderer: .shadowMap.cullFace is deprecated. Set .shadowMap.renderReverseSided to "+a+".");this.renderReverseSided=a}}});Object.defineProperties(Eb.prototype,
{wrapS:{get:function(){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");return this.texture.wrapS},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");this.texture.wrapS=a}},wrapT:{get:function(){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");return this.texture.wrapT},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");this.texture.wrapT=a}},magFilter:{get:function(){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");
return this.texture.magFilter},set:function(a){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");this.texture.magFilter=a}},minFilter:{get:function(){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");return this.texture.minFilter},set:function(a){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");this.texture.minFilter=a}},anisotropy:{get:function(){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");
return this.texture.anisotropy},set:function(a){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");this.texture.anisotropy=a}},offset:{get:function(){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");return this.texture.offset},set:function(a){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");this.texture.offset=a}},repeat:{get:function(){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");return this.texture.repeat},
set:function(a){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");this.texture.repeat=a}},format:{get:function(){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");return this.texture.format},set:function(a){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");this.texture.format=a}},type:{get:function(){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");return this.texture.type},set:function(a){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");
this.texture.type=a}},generateMipmaps:{get:function(){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");return this.texture.generateMipmaps},set:function(a){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");this.texture.generateMipmaps=a}}});ec.prototype.load=function(a){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");var b=this;(new Vd).load(a,function(a){b.setBuffer(a)});return this};
$d.prototype.getData=function(){console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData().");return this.getFrequencyData()};l.WebGLRenderTargetCube=Fb;l.WebGLRenderTarget=Eb;l.WebGLRenderer=Md;l.ShaderLib=Hb;l.UniformsLib=X;l.ShaderChunk=Z;l.FogExp2=Jb;l.Fog=Kb;l.Scene=lb;l.LensFlare=Nd;l.Sprite=zc;l.LOD=Ac;l.SkinnedMesh=id;l.Skeleton=gd;l.Bone=hd;l.Mesh=Da;l.LineSegments=ea;l.Line=Wa;l.Points=Lb;l.Group=Bc;l.VideoTexture=jd;l.DataTexture=gb;l.CompressedTexture=Mb;l.CubeTexture=ab;
l.CanvasTexture=kd;l.DepthTexture=Cc;l.Texture=da;l.CompressedTextureLoader=Ce;l.BinaryTextureLoader=Pd;l.DataTextureLoader=Pd;l.CubeTextureLoader=Qd;l.TextureLoader=ld;l.ObjectLoader=De;l.MaterialLoader=zd;l.BufferGeometryLoader=Rd;l.DefaultLoadingManager=ua;l.LoadingManager=Od;l.JSONLoader=Sd;l.ImageLoader=Vc;l.FontLoader=Ee;l.FileLoader=Oa;l.Loader=yb;l.Cache=le;l.AudioLoader=Vd;l.SpotLightShadow=nd;l.SpotLight=od;l.PointLight=pd;l.RectAreaLight=Wd;l.HemisphereLight=md;l.DirectionalLightShadow=
qd;l.DirectionalLight=rd;l.AmbientLight=sd;l.LightShadow=vb;l.Light=ma;l.StereoCamera=Fe;l.PerspectiveCamera=Ia;l.OrthographicCamera=Ib;l.CubeCamera=Ad;l.Camera=ra;l.AudioListener=Xd;l.PositionalAudio=Zd;l.AudioContext=Yd;l.AudioAnalyser=$d;l.Audio=ec;l.VectorKeyframeTrack=cc;l.StringKeyframeTrack=wd;l.QuaternionKeyframeTrack=Xc;l.NumberKeyframeTrack=dc;l.ColorKeyframeTrack=yd;l.BooleanKeyframeTrack=xd;l.PropertyMixer=Bd;l.PropertyBinding=ja;l.KeyframeTrack=xb;l.AnimationUtils=ba;l.AnimationObjectGroup=
ae;l.AnimationMixer=ce;l.AnimationClip=sa;l.Uniform=Cd;l.InstancedBufferGeometry=Cb;l.BufferGeometry=J;l.GeometryIdCount=function(){return Jd++};l.Geometry=R;l.InterleavedBufferAttribute=de;l.InstancedInterleavedBuffer=gc;l.InterleavedBuffer=fc;l.InstancedBufferAttribute=hc;l.Face3=ga;l.Object3D=F;l.Raycaster=ee;l.Layers=fd;l.EventDispatcher=na;l.Clock=ge;l.QuaternionLinearInterpolant=vd;l.LinearInterpolant=Wc;l.DiscreteInterpolant=ud;l.CubicInterpolant=td;l.Interpolant=qa;l.Triangle=Ca;l.Spline=
function(a){function b(a,b,c,d,e,f,g){a=.5*(c-a);d=.5*(d-b);return(2*(b-c)+a+d)*g+(-3*(b-c)-2*a-d)*f+a*e+b}this.points=a;var c=[],d={x:0,y:0,z:0},e,f,g,h,k,l,x,p,n;this.initFromArray=function(a){this.points=[];for(var b=0;b<a.length;b++)this.points[b]={x:a[b][0],y:a[b][1],z:a[b][2]}};this.getPoint=function(a){e=(this.points.length-1)*a;f=Math.floor(e);g=e-f;c[0]=0===f?f:f-1;c[1]=f;c[2]=f>this.points.length-2?this.points.length-1:f+1;c[3]=f>this.points.length-3?this.points.length-1:f+2;l=this.points[c[0]];
x=this.points[c[1]];p=this.points[c[2]];n=this.points[c[3]];h=g*g;k=g*h;d.x=b(l.x,x.x,p.x,n.x,g,h,k);d.y=b(l.y,x.y,p.y,n.y,g,h,k);d.z=b(l.z,x.z,p.z,n.z,g,h,k);return d};this.getControlPointsArray=function(){var a,b,c=this.points.length,d=[];for(a=0;a<c;a++)b=this.points[a],d[a]=[b.x,b.y,b.z];return d};this.getLength=function(a){var b,c,d,e=0,f=new q,g=new q,h=[],k=0;h[0]=0;a||(a=100);c=this.points.length*a;f.copy(this.points[0]);for(a=1;a<c;a++)b=a/c,d=this.getPoint(b),g.copy(d),k+=g.distanceTo(f),
f.copy(d),b*=this.points.length-1,b=Math.floor(b),b!==e&&(h[b]=k,e=b);h[h.length]=k;return{chunks:h,total:k}};this.reparametrizeByArcLength=function(a){var b,c,d,e,f,g,h=[],k=new q,l=this.getLength();h.push(k.copy(this.points[0]).clone());for(b=1;b<this.points.length;b++){c=l.chunks[b]-l.chunks[b-1];g=Math.ceil(a*c/l.total);e=(b-1)/(this.points.length-1);f=b/(this.points.length-1);for(c=1;c<g-1;c++)d=e+1/g*c*(f-e),d=this.getPoint(d),h.push(k.copy(d).clone());h.push(k.copy(this.points[b]).clone())}this.points=
h}};l.Math=S;l.Spherical=he;l.Plane=la;l.Frustum=qc;l.Sphere=Ha;l.Ray=db;l.Matrix4=P;l.Matrix3=Aa;l.Box3=za;l.Box2=pc;l.Line3=ib;l.Euler=eb;l.Vector4=fa;l.Vector3=q;l.Vector2=B;l.Quaternion=ca;l.Color=G;l.MorphBlendMesh=ta;l.ImmediateRenderObject=$c;l.VertexNormalsHelper=ad;l.SpotLightHelper=ic;l.SkeletonHelper=jc;l.PointLightHelper=kc;l.RectAreaLightHelper=lc;l.HemisphereLightHelper=mc;l.GridHelper=bd;l.PolarGridHelper=Dd;l.FaceNormalsHelper=cd;l.DirectionalLightHelper=nc;l.CameraHelper=dd;l.BoxHelper=
oc;l.ArrowHelper=Db;l.AxisHelper=Ed;l.CatmullRomCurve3=ie;l.SplineCurve3=Lf;l.CubicBezierCurve3=Mf;l.QuadraticBezierCurve3=Nf;l.LineCurve3=Of;l.ArcCurve=Fd;l.EllipseCurve=Ya;l.SplineCurve=zb;l.CubicBezierCurve=Ab;l.QuadraticBezierCurve=Bb;l.LineCurve=Ra;l.Shape=Za;l.ShapePath=Td;l.Path=Zc;l.Font=Ud;l.CurvePath=Yc;l.Curve=va;l.ShapeUtils=pa;l.SceneUtils={createMultiMaterialObject:function(a,b){for(var c=new Bc,d=0,e=b.length;d<e;d++)c.add(new Da(a,b[d]));return c},detach:function(a,b,c){a.applyMatrix(b.matrixWorld);
b.remove(a);c.add(a)},attach:function(a,b,c){var d=new P;d.getInverse(c.matrixWorld);a.applyMatrix(d);b.remove(a);c.add(a)}};l.CurveUtils=ed;l.WireframeGeometry=Nb;l.ParametricGeometry=Dc;l.ParametricBufferGeometry=Ob;l.TetrahedronGeometry=Ec;l.TetrahedronBufferGeometry=Pb;l.OctahedronGeometry=Fc;l.OctahedronBufferGeometry=nb;l.IcosahedronGeometry=Gc;l.IcosahedronBufferGeometry=Qb;l.DodecahedronGeometry=Hc;l.DodecahedronBufferGeometry=Rb;l.PolyhedronGeometry=Ic;l.PolyhedronBufferGeometry=ya;l.TubeGeometry=
Jc;l.TubeBufferGeometry=Sb;l.TorusKnotGeometry=Kc;l.TorusKnotBufferGeometry=Tb;l.TorusGeometry=Lc;l.TorusBufferGeometry=Ub;l.TextGeometry=Mc;l.SphereBufferGeometry=ob;l.SphereGeometry=Nc;l.RingGeometry=Oc;l.RingBufferGeometry=Vb;l.PlaneBufferGeometry=kb;l.PlaneGeometry=Pc;l.LatheGeometry=Qc;l.LatheBufferGeometry=Wb;l.ShapeGeometry=Xb;l.ShapeBufferGeometry=fb;l.ExtrudeGeometry=Na;l.EdgesGeometry=Yb;l.ConeGeometry=Rc;l.ConeBufferGeometry=Sc;l.CylinderGeometry=pb;l.CylinderBufferGeometry=Xa;l.CircleBufferGeometry=
Zb;l.CircleGeometry=Tc;l.BoxBufferGeometry=jb;l.BoxGeometry=$b;l.ShadowMaterial=ac;l.SpriteMaterial=mb;l.RawShaderMaterial=bc;l.ShaderMaterial=Ja;l.PointsMaterial=Pa;l.MultiMaterial=Uc;l.MeshPhysicalMaterial=qb;l.MeshStandardMaterial=Qa;l.MeshPhongMaterial=Ea;l.MeshToonMaterial=rb;l.MeshNormalMaterial=sb;l.MeshLambertMaterial=tb;l.MeshDepthMaterial=cb;l.MeshBasicMaterial=Ma;l.LineDashedMaterial=ub;l.LineBasicMaterial=ha;l.Material=U;l.Float64BufferAttribute=wc;l.Float32BufferAttribute=W;l.Uint32BufferAttribute=
Va;l.Int32BufferAttribute=vc;l.Uint16BufferAttribute=Sa;l.Int16BufferAttribute=uc;l.Uint8ClampedBufferAttribute=tc;l.Uint8BufferAttribute=sc;l.Int8BufferAttribute=rc;l.BufferAttribute=z;l.REVISION="83dev";l.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2};l.CullFaceNone=0;l.CullFaceBack=1;l.CullFaceFront=2;l.CullFaceFrontBack=3;l.FrontFaceDirectionCW=0;l.FrontFaceDirectionCCW=1;l.BasicShadowMap=0;l.PCFShadowMap=1;l.PCFSoftShadowMap=2;l.FrontSide=0;l.BackSide=1;l.DoubleSide=2;l.FlatShading=1;l.SmoothShading=2;l.NoColors=
0;l.FaceColors=1;l.VertexColors=2;l.NoBlending=0;l.NormalBlending=1;l.AdditiveBlending=2;l.SubtractiveBlending=3;l.MultiplyBlending=4;l.CustomBlending=5;l.BlendingMode=Ke;l.AddEquation=100;l.SubtractEquation=101;l.ReverseSubtractEquation=102;l.MinEquation=103;l.MaxEquation=104;l.ZeroFactor=200;l.OneFactor=201;l.SrcColorFactor=202;l.OneMinusSrcColorFactor=203;l.SrcAlphaFactor=204;l.OneMinusSrcAlphaFactor=205;l.DstAlphaFactor=206;l.OneMinusDstAlphaFactor=207;l.DstColorFactor=208;l.OneMinusDstColorFactor=
209;l.SrcAlphaSaturateFactor=210;l.NeverDepth=0;l.AlwaysDepth=1;l.LessDepth=2;l.LessEqualDepth=3;l.EqualDepth=4;l.GreaterEqualDepth=5;l.GreaterDepth=6;l.NotEqualDepth=7;l.MultiplyOperation=0;l.MixOperation=1;l.AddOperation=2;l.NoToneMapping=0;l.LinearToneMapping=1;l.ReinhardToneMapping=2;l.Uncharted2ToneMapping=3;l.CineonToneMapping=4;l.UVMapping=300;l.CubeReflectionMapping=301;l.CubeRefractionMapping=302;l.EquirectangularReflectionMapping=303;l.EquirectangularRefractionMapping=304;l.SphericalReflectionMapping=
305;l.CubeUVReflectionMapping=306;l.CubeUVRefractionMapping=307;l.TextureMapping=Le;l.RepeatWrapping=1E3;l.ClampToEdgeWrapping=1001;l.MirroredRepeatWrapping=1002;l.TextureWrapping=je;l.NearestFilter=1003;l.NearestMipMapNearestFilter=1004;l.NearestMipMapLinearFilter=1005;l.LinearFilter=1006;l.LinearMipMapNearestFilter=1007;l.LinearMipMapLinearFilter=1008;l.TextureFilter=ke;l.UnsignedByteType=1009;l.ByteType=1010;l.ShortType=1011;l.UnsignedShortType=1012;l.IntType=1013;l.UnsignedIntType=1014;l.FloatType=
1015;l.HalfFloatType=1016;l.UnsignedShort4444Type=1017;l.UnsignedShort5551Type=1018;l.UnsignedShort565Type=1019;l.UnsignedInt248Type=1020;l.AlphaFormat=1021;l.RGBFormat=1022;l.RGBAFormat=1023;l.LuminanceFormat=1024;l.LuminanceAlphaFormat=1025;l.RGBEFormat=1023;l.DepthFormat=1026;l.DepthStencilFormat=1027;l.RGB_S3TC_DXT1_Format=2001;l.RGBA_S3TC_DXT1_Format=2002;l.RGBA_S3TC_DXT3_Format=2003;l.RGBA_S3TC_DXT5_Format=2004;l.RGB_PVRTC_4BPPV1_Format=2100;l.RGB_PVRTC_2BPPV1_Format=2101;l.RGBA_PVRTC_4BPPV1_Format=
2102;l.RGBA_PVRTC_2BPPV1_Format=2103;l.RGB_ETC1_Format=2151;l.LoopOnce=2200;l.LoopRepeat=2201;l.LoopPingPong=2202;l.InterpolateDiscrete=2300;l.InterpolateLinear=2301;l.InterpolateSmooth=2302;l.ZeroCurvatureEnding=2400;l.ZeroSlopeEnding=2401;l.WrapAroundEnding=2402;l.TrianglesDrawMode=0;l.TriangleStripDrawMode=1;l.TriangleFanDrawMode=2;l.LinearEncoding=3E3;l.sRGBEncoding=3001;l.GammaEncoding=3007;l.RGBEEncoding=3002;l.LogLuvEncoding=3003;l.RGBM7Encoding=3004;l.RGBM16Encoding=3005;l.RGBDEncoding=3006;
l.BasicDepthPacking=3200;l.RGBADepthPacking=3201;l.CubeGeometry=$b;l.Face4=function(a,b,c,d,e,f,g){console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");return new ga(a,b,c,e,f,g)};l.LineStrip=0;l.LinePieces=1;l.MeshFaceMaterial=function(a){console.warn("THREE.MeshFaceMaterial has been renamed to THREE.MultiMaterial.");return new Uc(a)};l.PointCloud=function(a,b){console.warn("THREE.PointCloud has been renamed to THREE.Points.");return new Lb(a,b)};l.Particle=function(a){console.warn("THREE.Particle has been renamed to THREE.Sprite.");
return new zc(a)};l.ParticleSystem=function(a,b){console.warn("THREE.ParticleSystem has been renamed to THREE.Points.");return new Lb(a,b)};l.PointCloudMaterial=function(a){console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial.");return new Pa(a)};l.ParticleBasicMaterial=function(a){console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial.");return new Pa(a)};l.ParticleSystemMaterial=function(a){console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial.");
return new Pa(a)};l.Vertex=function(a,b,c){console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead.");return new q(a,b,c)};l.DynamicBufferAttribute=function(a,b){console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead.");return(new z(a,b)).setDynamic(!0)};l.Int8Attribute=function(a,b){console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead.");return new rc(a,b)};l.Uint8Attribute=
function(a,b){console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead.");return new sc(a,b)};l.Uint8ClampedAttribute=function(a,b){console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead.");return new tc(a,b)};l.Int16Attribute=function(a,b){console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead.");return new uc(a,b)};l.Uint16Attribute=function(a,b){console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead.");
return new Sa(a,b)};l.Int32Attribute=function(a,b){console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead.");return new vc(a,b)};l.Uint32Attribute=function(a,b){console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead.");return new Va(a,b)};l.Float32Attribute=function(a,b){console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead.");return new W(a,b)};l.Float64Attribute=
function(a,b){console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead.");return new wc(a,b)};l.ClosedSplineCurve3=Je;l.BoundingBoxHelper=function(a,b){console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead.");return new oc(a,b)};l.EdgesHelper=function(a,b){console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead.");return new ea(new Yb(a.geometry),new ha({color:void 0!==b?b:16777215}))};l.WireframeHelper=
function(a,b){console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead.");return new ea(new Nb(a.geometry),new ha({color:void 0!==b?b:16777215}))};l.XHRLoader=function(a){console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader.");return new Oa(a)};l.GeometryUtils={merge:function(a,b,c){console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");var d;b.isMesh&&(b.matrixAutoUpdate&&
b.updateMatrix(),d=b.matrix,b=b.geometry);a.merge(b,d,c)},center:function(a){console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");return a.center()}};l.ImageUtils={crossOrigin:void 0,loadTexture:function(a,b,c,d){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");var e=new ld;e.setCrossOrigin(this.crossOrigin);a=e.load(a,c,void 0,d);b&&(a.mapping=b);return a},loadTextureCube:function(a,b,c,d){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
var e=new Qd;e.setCrossOrigin(this.crossOrigin);a=e.load(a,c,void 0,d);b&&(a.mapping=b);return a},loadCompressedTexture:function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},loadCompressedTextureCube:function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")}};l.UniformsUtils={merge:function(a){console.warn("THREE.UniformsUtils.merge() has been deprecated. Use Object.assign() instead.");
for(var b={},c=0;c<a.length;c++){var d=this.clone(a[c]),e;for(e in d)b[e]=d[e]}return b},clone:function(a){console.warn("THREE.UniformsUtils.clone() has been deprecated.");var b={},c;for(c in a){b[c]={};for(var d in a[c]){var e=a[c][d];e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture)?b[c][d]=e.clone():Array.isArray(e)?b[c][d]=e.slice():b[c][d]=e}}return b}};l.Projector=function(){console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js.");
this.projectVector=function(a,b){console.warn("THREE.Projector: .projectVector() is now vector.project().");a.project(b)};this.unprojectVector=function(a,b){console.warn("THREE.Projector: .unprojectVector() is now vector.unproject().");a.unproject(b)};this.pickingRay=function(){console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")}};l.CanvasRenderer=function(){console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js");this.domElement=
document.createElementNS("http://www.w3.org/1999/xhtml","canvas");this.clear=function(){};this.render=function(){};this.setClearColor=function(){};this.setSize=function(){}};Object.defineProperty(l,"__esModule",{value:!0})});

/**
 * @author dmarcos / https://github.com/dmarcos
 * @author mrdoob / http://mrdoob.com
 */

THREE.VRControls = function ( object, onError ) {

	var scope = this;

	var vrDisplay, vrDisplays;

	var standingMatrix = new THREE.Matrix4();

	var frameData = null;

	if ( 'VRFrameData' in window ) {

		frameData = new VRFrameData();

	}

	function gotVRDisplays( displays ) {

		vrDisplays = displays;

		if ( displays.length > 0 ) {

			vrDisplay = displays[ 0 ];

		} else {

			if ( onError ) onError( 'VR input not available.' );

		}

	}

	if ( navigator.getVRDisplays ) {

		navigator.getVRDisplays().then( gotVRDisplays ).catch ( function () {

			console.warn( 'THREE.VRControls: Unable to get VR Displays' );

		} );

	}

	// the Rift SDK returns the position in meters
	// this scale factor allows the user to define how meters
	// are converted to scene units.

	this.scale = 1;

	// If true will use "standing space" coordinate system where y=0 is the
	// floor and x=0, z=0 is the center of the room.
	this.standing = false;

	// Distance from the users eyes to the floor in meters. Used when
	// standing=true but the VRDisplay doesn't provide stageParameters.
	this.userHeight = 1.6;

	this.getVRDisplay = function () {

		return vrDisplay;

	};

	this.setVRDisplay = function ( value ) {

		vrDisplay = value;

	};

	this.getVRDisplays = function () {

		console.warn( 'THREE.VRControls: getVRDisplays() is being deprecated.' );
		return vrDisplays;

	};

	this.getStandingMatrix = function () {

		return standingMatrix;

	};

	this.update = function () {

		if ( vrDisplay ) {

			var pose;

			if ( vrDisplay.getFrameData ) {

				vrDisplay.getFrameData( frameData );
				pose = frameData.pose;

			} else if ( vrDisplay.getPose ) {

				pose = vrDisplay.getPose();

			}

			if ( pose.orientation !== null ) {

				object.quaternion.fromArray( pose.orientation );

			}

			if ( pose.position !== null ) {

				object.position.fromArray( pose.position );

			} else {

				object.position.set( 0, 0, 0 );

			}

			if ( this.standing ) {

				if ( vrDisplay.stageParameters ) {

					object.updateMatrix();

					standingMatrix.fromArray( vrDisplay.stageParameters.sittingToStandingTransform );
					object.applyMatrix( standingMatrix );

				} else {

					object.position.setY( object.position.y + this.userHeight );

				}

			}

			object.position.multiplyScalar( scope.scale );

		}

	};

	this.resetPose = function () {

		if ( vrDisplay ) {

			vrDisplay.resetPose();

		}

	};

	this.resetSensor = function () {

		console.warn( 'THREE.VRControls: .resetSensor() is now .resetPose().' );
		this.resetPose();

	};

	this.zeroSensor = function () {

		console.warn( 'THREE.VRControls: .zeroSensor() is now .resetPose().' );
		this.resetPose();

	};

	this.dispose = function () {

		vrDisplay = null;

	};

};

/**
 * @author dmarcos / https://github.com/dmarcos
 * @author mrdoob / http://mrdoob.com
 *
 * WebVR Spec: http://mozvr.github.io/webvr-spec/webvr.html
 *
 * Firefox: http://mozvr.com/downloads/
 * Chromium: https://webvr.info/get-chrome
 *
 */

THREE.VREffect = function( renderer, onError ) {

	var vrDisplay, vrDisplays;
	var eyeTranslationL = new THREE.Vector3();
	var eyeTranslationR = new THREE.Vector3();
	var renderRectL, renderRectR;

	var frameData = null;

	if ( 'VRFrameData' in window ) {

		frameData = new window.VRFrameData();

	}

	function gotVRDisplays( displays ) {

		vrDisplays = displays;

		if ( displays.length > 0 ) {

			vrDisplay = displays[ 0 ];

		} else {

			if ( onError ) onError( 'HMD not available' );

		}

	}

	if ( navigator.getVRDisplays ) {

		navigator.getVRDisplays().then( gotVRDisplays ).catch( function() {

			console.warn( 'THREE.VREffect: Unable to get VR Displays' );

		} );

	}

	//

	this.isPresenting = false;
	this.scale = 1;

	var scope = this;

	var rendererSize = renderer.getSize();
	var rendererUpdateStyle = false;
	var rendererPixelRatio = renderer.getPixelRatio();

	this.getVRDisplay = function() {

		return vrDisplay;

	};

	this.setVRDisplay = function( value ) {

		vrDisplay = value;

	};

	this.getVRDisplays = function() {

		console.warn( 'THREE.VREffect: getVRDisplays() is being deprecated.' );
		return vrDisplays;

	};

	this.setSize = function( width, height, updateStyle ) {

		rendererSize = { width: width, height: height };
		rendererUpdateStyle = updateStyle;

		if ( scope.isPresenting ) {

			var eyeParamsL = vrDisplay.getEyeParameters( 'left' );
			renderer.setPixelRatio( 1 );
			renderer.setSize( eyeParamsL.renderWidth * 2, eyeParamsL.renderHeight, false );

		} else {

			renderer.setPixelRatio( rendererPixelRatio );
			renderer.setSize( width, height, updateStyle );

		}

	};

	// VR presentation

	var canvas = renderer.domElement;
	var defaultLeftBounds = [ 0.0, 0.0, 0.5, 1.0 ];
	var defaultRightBounds = [ 0.5, 0.0, 0.5, 1.0 ];

	function onVRDisplayPresentChange() {

		var wasPresenting = scope.isPresenting;
		scope.isPresenting = vrDisplay !== undefined && vrDisplay.isPresenting;

		if ( scope.isPresenting ) {

			var eyeParamsL = vrDisplay.getEyeParameters( 'left' );
			var eyeWidth = eyeParamsL.renderWidth;
			var eyeHeight = eyeParamsL.renderHeight;

			if ( ! wasPresenting ) {

				rendererPixelRatio = renderer.getPixelRatio();
				rendererSize = renderer.getSize();

				renderer.setPixelRatio( 1 );
				renderer.setSize( eyeWidth * 2, eyeHeight, false );

			}

		} else if ( wasPresenting ) {

			renderer.setPixelRatio( rendererPixelRatio );
			renderer.setSize( rendererSize.width, rendererSize.height, rendererUpdateStyle );

		}

	}

	window.addEventListener( 'vrdisplaypresentchange', onVRDisplayPresentChange, false );

	this.setFullScreen = function( boolean ) {

		return new Promise( function( resolve, reject ) {

			if ( vrDisplay === undefined ) {

				reject( new Error( 'No VR hardware found.' ) );
				return;

			}

			if ( scope.isPresenting === boolean ) {

				resolve();
				return;

			}

			if ( boolean ) {

				resolve( vrDisplay.requestPresent( [ { source: canvas } ] ) );

			} else {

				resolve( vrDisplay.exitPresent() );

			}

		} );

	};

	this.requestPresent = function() {

		return this.setFullScreen( true );

	};

	this.exitPresent = function() {

		return this.setFullScreen( false );

	};

	this.requestAnimationFrame = function( f ) {

		if ( vrDisplay !== undefined ) {

			return vrDisplay.requestAnimationFrame( f );

		} else {

			return window.requestAnimationFrame( f );

		}

	};

	this.cancelAnimationFrame = function( h ) {

		if ( vrDisplay !== undefined ) {

			vrDisplay.cancelAnimationFrame( h );

		} else {

			window.cancelAnimationFrame( h );

		}

	};

	this.submitFrame = function() {

		if ( vrDisplay !== undefined && scope.isPresenting ) {

			vrDisplay.submitFrame();

		}

	};

	this.autoSubmitFrame = true;

	// render

	var cameraL = new THREE.PerspectiveCamera();
	cameraL.layers.enable( 1 );

	var cameraR = new THREE.PerspectiveCamera();
	cameraR.layers.enable( 2 );

	this.render = function( scene, camera, renderTarget, forceClear ) {

		if ( vrDisplay && scope.isPresenting ) {

			var autoUpdate = scene.autoUpdate;

			if ( autoUpdate ) {

				scene.updateMatrixWorld();
				scene.autoUpdate = false;

			}

			var eyeParamsL = vrDisplay.getEyeParameters( 'left' );
			var eyeParamsR = vrDisplay.getEyeParameters( 'right' );

			eyeTranslationL.fromArray( eyeParamsL.offset );
			eyeTranslationR.fromArray( eyeParamsR.offset );

			if ( Array.isArray( scene ) ) {

				console.warn( 'THREE.VREffect.render() no longer supports arrays. Use object.layers instead.' );
				scene = scene[ 0 ];

			}

			// When rendering we don't care what the recommended size is, only what the actual size
			// of the backbuffer is.
			var size = renderer.getSize();
			var layers = vrDisplay.getLayers();
			var leftBounds;
			var rightBounds;

			if ( layers.length ) {

				var layer = layers[ 0 ];

				leftBounds = layer.leftBounds !== null && layer.leftBounds.length === 4 ? layer.leftBounds : defaultLeftBounds;
				rightBounds = layer.rightBounds !== null && layer.rightBounds.length === 4 ? layer.rightBounds : defaultRightBounds;

			} else {

				leftBounds = defaultLeftBounds;
				rightBounds = defaultRightBounds;

			}

			renderRectL = {
				x: Math.round( size.width * leftBounds[ 0 ] ),
				y: Math.round( size.height * leftBounds[ 1 ] ),
				width: Math.round( size.width * leftBounds[ 2 ] ),
				height: Math.round( size.height * leftBounds[ 3 ] )
			};
			renderRectR = {
				x: Math.round( size.width * rightBounds[ 0 ] ),
				y: Math.round( size.height * rightBounds[ 1 ] ),
				width: Math.round( size.width * rightBounds[ 2 ] ),
				height: Math.round( size.height * rightBounds[ 3 ] )
			};

			if ( renderTarget ) {

				renderer.setRenderTarget( renderTarget );
				renderTarget.scissorTest = true;

			} else {

				renderer.setRenderTarget( null );
				renderer.setScissorTest( true );

			}

			if ( renderer.autoClear || forceClear ) renderer.clear();

			if ( camera.parent === null ) camera.updateMatrixWorld();

			camera.matrixWorld.decompose( cameraL.position, cameraL.quaternion, cameraL.scale );
			camera.matrixWorld.decompose( cameraR.position, cameraR.quaternion, cameraR.scale );

			var scale = this.scale;
			cameraL.translateOnAxis( eyeTranslationL, scale );
			cameraR.translateOnAxis( eyeTranslationR, scale );

			if ( vrDisplay.getFrameData ) {

				vrDisplay.depthNear = camera.near;
				vrDisplay.depthFar = camera.far;

				vrDisplay.getFrameData( frameData );

				cameraL.projectionMatrix.elements = frameData.leftProjectionMatrix;
				cameraR.projectionMatrix.elements = frameData.rightProjectionMatrix;

			} else {

				cameraL.projectionMatrix = fovToProjection( eyeParamsL.fieldOfView, true, camera.near, camera.far );
				cameraR.projectionMatrix = fovToProjection( eyeParamsR.fieldOfView, true, camera.near, camera.far );

			}

			// render left eye
			if ( renderTarget ) {

				renderTarget.viewport.set( renderRectL.x, renderRectL.y, renderRectL.width, renderRectL.height );
				renderTarget.scissor.set( renderRectL.x, renderRectL.y, renderRectL.width, renderRectL.height );

			} else {

				renderer.setViewport( renderRectL.x, renderRectL.y, renderRectL.width, renderRectL.height );
				renderer.setScissor( renderRectL.x, renderRectL.y, renderRectL.width, renderRectL.height );

			}
			renderer.render( scene, cameraL, renderTarget, forceClear );

			// render right eye
			if ( renderTarget ) {

				renderTarget.viewport.set( renderRectR.x, renderRectR.y, renderRectR.width, renderRectR.height );
				renderTarget.scissor.set( renderRectR.x, renderRectR.y, renderRectR.width, renderRectR.height );

			} else {

				renderer.setViewport( renderRectR.x, renderRectR.y, renderRectR.width, renderRectR.height );
				renderer.setScissor( renderRectR.x, renderRectR.y, renderRectR.width, renderRectR.height );

			}
			renderer.render( scene, cameraR, renderTarget, forceClear );

			if ( renderTarget ) {

				renderTarget.viewport.set( 0, 0, size.width, size.height );
				renderTarget.scissor.set( 0, 0, size.width, size.height );
				renderTarget.scissorTest = false;
				renderer.setRenderTarget( null );

			} else {

				renderer.setViewport( 0, 0, size.width, size.height );
				renderer.setScissorTest( false );

			}

			if ( autoUpdate ) {

				scene.autoUpdate = true;

			}

			if ( scope.autoSubmitFrame ) {

				scope.submitFrame();

			}

			return;

		}

		// Regular render mode if not HMD

		renderer.render( scene, camera, renderTarget, forceClear );

	};

	this.dispose = function() {

		window.removeEventListener( 'vrdisplaypresentchange', onVRDisplayPresentChange, false );

	};

	//

	function fovToNDCScaleOffset( fov ) {

		var pxscale = 2.0 / ( fov.leftTan + fov.rightTan );
		var pxoffset = ( fov.leftTan - fov.rightTan ) * pxscale * 0.5;
		var pyscale = 2.0 / ( fov.upTan + fov.downTan );
		var pyoffset = ( fov.upTan - fov.downTan ) * pyscale * 0.5;
		return { scale: [ pxscale, pyscale ], offset: [ pxoffset, pyoffset ] };

	}

	function fovPortToProjection( fov, rightHanded, zNear, zFar ) {

		rightHanded = rightHanded === undefined ? true : rightHanded;
		zNear = zNear === undefined ? 0.01 : zNear;
		zFar = zFar === undefined ? 10000.0 : zFar;

		var handednessScale = rightHanded ? - 1.0 : 1.0;

		// start with an identity matrix
		var mobj = new THREE.Matrix4();
		var m = mobj.elements;

		// and with scale/offset info for normalized device coords
		var scaleAndOffset = fovToNDCScaleOffset( fov );

		// X result, map clip edges to [-w,+w]
		m[ 0 * 4 + 0 ] = scaleAndOffset.scale[ 0 ];
		m[ 0 * 4 + 1 ] = 0.0;
		m[ 0 * 4 + 2 ] = scaleAndOffset.offset[ 0 ] * handednessScale;
		m[ 0 * 4 + 3 ] = 0.0;

		// Y result, map clip edges to [-w,+w]
		// Y offset is negated because this proj matrix transforms from world coords with Y=up,
		// but the NDC scaling has Y=down (thanks D3D?)
		m[ 1 * 4 + 0 ] = 0.0;
		m[ 1 * 4 + 1 ] = scaleAndOffset.scale[ 1 ];
		m[ 1 * 4 + 2 ] = - scaleAndOffset.offset[ 1 ] * handednessScale;
		m[ 1 * 4 + 3 ] = 0.0;

		// Z result (up to the app)
		m[ 2 * 4 + 0 ] = 0.0;
		m[ 2 * 4 + 1 ] = 0.0;
		m[ 2 * 4 + 2 ] = zFar / ( zNear - zFar ) * - handednessScale;
		m[ 2 * 4 + 3 ] = ( zFar * zNear ) / ( zNear - zFar );

		// W result (= Z in)
		m[ 3 * 4 + 0 ] = 0.0;
		m[ 3 * 4 + 1 ] = 0.0;
		m[ 3 * 4 + 2 ] = handednessScale;
		m[ 3 * 4 + 3 ] = 0.0;

		mobj.transpose();

		return mobj;

	}

	function fovToProjection( fov, rightHanded, zNear, zFar ) {

		var DEG2RAD = Math.PI / 180.0;

		var fovPort = {
			upTan: Math.tan( fov.upDegrees * DEG2RAD ),
			downTan: Math.tan( fov.downDegrees * DEG2RAD ),
			leftTan: Math.tan( fov.leftDegrees * DEG2RAD ),
			rightTan: Math.tan( fov.rightDegrees * DEG2RAD )
		};

		return fovPortToProjection( fovPort, rightHanded, zNear, zFar );

	}

};

// stats.js - http://github.com/mrdoob/stats.js
var Stats=function(){function h(a){c.appendChild(a.dom);return a}function k(a){for(var d=0;d<c.children.length;d++)c.children[d].style.display=d===a?"block":"none";l=a}var l=0,c=document.createElement("div");c.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";c.addEventListener("click",function(a){a.preventDefault();k(++l%c.children.length)},!1);var g=(performance||Date).now(),e=g,a=0,r=h(new Stats.Panel("FPS","#0ff","#002")),f=h(new Stats.Panel("MS","#0f0","#020"));
if(self.performance&&self.performance.memory)var t=h(new Stats.Panel("MB","#f08","#201"));k(0);return{REVISION:16,dom:c,addPanel:h,showPanel:k,begin:function(){g=(performance||Date).now()},end:function(){a++;var c=(performance||Date).now();f.update(c-g,200);if(c>e+1E3&&(r.update(1E3*a/(c-e),100),e=c,a=0,t)){var d=performance.memory;t.update(d.usedJSHeapSize/1048576,d.jsHeapSizeLimit/1048576)}return c},update:function(){g=this.end()},domElement:c,setMode:k}};
Stats.Panel=function(h,k,l){var c=Infinity,g=0,e=Math.round,a=e(window.devicePixelRatio||1),r=80*a,f=48*a,t=3*a,u=2*a,d=3*a,m=15*a,n=74*a,p=30*a,q=document.createElement("canvas");q.width=r;q.height=f;q.style.cssText="width:80px;height:48px";var b=q.getContext("2d");b.font="bold "+9*a+"px Helvetica,Arial,sans-serif";b.textBaseline="top";b.fillStyle=l;b.fillRect(0,0,r,f);b.fillStyle=k;b.fillText(h,t,u);b.fillRect(d,m,n,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d,m,n,p);return{dom:q,update:function(f,
v){c=Math.min(c,f);g=Math.max(g,f);b.fillStyle=l;b.globalAlpha=1;b.fillRect(0,0,r,m);b.fillStyle=k;b.fillText(e(f)+" "+h+" ("+e(c)+"-"+e(g)+")",t,u);b.drawImage(q,d+a,m,n-a,p,d,m,n-a,p);b.fillRect(d+n-a,m,a,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d+n-a,m,a,e((1-f/v)*p))}}};"object"===typeof module&&(module.exports=Stats);

/**
 * @author Rich Tibbett / https://github.com/richtr
 * @author mrdoob / http://mrdoob.com/
 * @author Tony Parisi / http://www.tonyparisi.com/
 */

THREE.GLTFLoader = ( function () {

	function GLTFLoader( manager ) {

		this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

	}

	GLTFLoader.prototype = {

		constructor: GLTFLoader,

		load: function ( url, onLoad, onProgress, onError ) {

			var scope = this;

			var path = this.path && ( typeof this.path === "string" ) ? this.path : THREE.Loader.prototype.extractUrlBase( url );

			var loader = new THREE.FileLoader( scope.manager );
			loader.load( url, function ( text ) {

				scope.parse( JSON.parse( text ), onLoad, path );

			}, onProgress, onError );

		},

		setCrossOrigin: function ( value ) {

			this.crossOrigin = value;

		},

		setPath: function ( value ) {

			this.path = value;

		},

		parse: function ( json, callback, path ) {

			console.time( 'GLTFLoader' );

			var parser = new GLTFParser( json, {

				path: path || this.path,
				crossOrigin: !! this.crossOrigin

			} );

			parser.parse( function ( scene, cameras, animations ) {

				console.timeEnd( 'GLTFLoader' );

				var glTF = {
					"scene": scene,
					"cameras": cameras,
					"animations": animations
				};

				callback( glTF );

			} );

		}

	};

	/* GLTFREGISTRY */

	function GLTFRegistry() {

		var objects = {};

		return	{

			get: function ( key ) {

				return objects[ key ];

			},

			add: function ( key, object ) {

				objects[ key ] = object;

			},

			remove: function ( key ) {

				delete objects[ key ];

			},

			removeAll: function () {

				objects = {};

			},

			update: function ( scene, camera ) {

				for ( var name in objects ) {

					var object = objects[ name ];

					if ( object.update ) {

						object.update( scene, camera );

					}

				}

			}

		};

	}

	/* GLTFSHADERS */

	GLTFLoader.Shaders = new GLTFRegistry();

	/* GLTFSHADER */

	function GLTFShader( targetNode, allNodes ) {

		var scope = this;

		this.boundUniforms = {};

		// bind each uniform to its source node

		var uniforms = targetNode.material.uniforms;

		for ( var uniformId in uniforms ) {

			var uniform = uniforms[ uniformId ];

			if ( uniform.semantic ) {

				var sourceNodeRef = uniform.node;

				var sourceNode = targetNode;

				if ( sourceNodeRef ) {

					sourceNode = allNodes[ sourceNodeRef ];

				}

				scope.boundUniforms[ uniformId ] = {
					semantic: uniform.semantic,
					sourceNode: sourceNode,
					targetNode: targetNode,
					uniform: uniform
				};

			}

		}

		this._m4 = new THREE.Matrix4();

	}

	// Update - update all the uniform values
	GLTFShader.prototype.update = function ( scene, camera ) {

		// update scene graph

		scene.updateMatrixWorld();

		// update camera matrices and frustum

		camera.updateMatrixWorld();
		camera.matrixWorldInverse.getInverse( camera.matrixWorld );

		var boundUniforms = this.boundUniforms;

		for ( var name in boundUniforms ) {

			var boundUniform = boundUniforms[ name ];

			switch ( boundUniform.semantic ) {

				case "MODELVIEW":

					var m4 = boundUniform.uniform.value;
					m4.multiplyMatrices( camera.matrixWorldInverse, boundUniform.sourceNode.matrixWorld );
					break;

				case "MODELVIEWINVERSETRANSPOSE":

					var m3 = boundUniform.uniform.value;
					this._m4.multiplyMatrices( camera.matrixWorldInverse, boundUniform.sourceNode.matrixWorld );
					m3.getNormalMatrix( this._m4 );
					break;

				case "PROJECTION":

					var m4 = boundUniform.uniform.value;
					m4.copy( camera.projectionMatrix );
					break;

				case "JOINTMATRIX":

					var m4v = boundUniform.uniform.value;

					for ( var mi = 0; mi < m4v.length; mi ++ ) {

						// So it goes like this:
						// SkinnedMesh world matrix is already baked into MODELVIEW;
						// ransform joints to local space,
						// then transform using joint's inverse
						m4v[ mi ]
							.getInverse( boundUniform.sourceNode.matrixWorld )
							.multiply( boundUniform.targetNode.skeleton.bones[ mi ].matrixWorld )
							.multiply( boundUniform.targetNode.skeleton.boneInverses[ mi ] );

					}

					break;

				default :

					console.warn( "Unhandled shader semantic: " + boundUniform.semantic );
					break;

			}

		}

	};


	/* GLTFANIMATION */

	GLTFLoader.Animations = new GLTFRegistry();

	// Construction/initialization
	function GLTFAnimation( interps ) {

		this.running = false;
		this.loop = false;
		this.duration = 0;
		this.startTime = 0;
		this.interps = [];

		this.uuid = THREE.Math.generateUUID();

		if ( interps ) {

			this.createInterpolators( interps );

		}

	}

	GLTFAnimation.prototype.createInterpolators = function ( interps ) {

		for ( var i = 0, len = interps.length; i < len; i ++ ) {

			var interp = new GLTFInterpolator( interps[ i ] );
			this.interps.push( interp );
			this.duration = Math.max( this.duration, interp.duration );

		}

	};

	// Start/stop
	GLTFAnimation.prototype.play = function () {

		if ( this.running )
			return;

		this.startTime = Date.now();
		this.running = true;
		GLTFLoader.Animations.add( this.uuid, this );

	};

	GLTFAnimation.prototype.stop = function () {

		this.running = false;
		GLTFLoader.Animations.remove( this.uuid );

	};

	// Update - drive key frame evaluation
	GLTFAnimation.prototype.update = function () {

		if ( ! this.running ) return;

		var now = Date.now();
		var deltat = ( now - this.startTime ) / 1000;
		var t = deltat % this.duration;
		var nCycles = Math.floor( deltat / this.duration );
		var interps = this.interps;

		if ( nCycles >= 1 && ! this.loop ) {

			this.running = false;

			for ( var i = 0, l = interps.length; i < l; i ++ ) {

				interps[ i ].interp( this.duration );

			}

			this.stop();

		} else {

			for ( var i = 0, l = interps.length; i < l; i ++ ) {

				interps[ i ].interp( t );

			}

		}

	};

	/* GLTFINTERPOLATOR */

	function GLTFInterpolator( param ) {

		this.keys = param.keys;
		this.values = param.values;
		this.count = param.count;
		this.type = param.type;
		this.path = param.path;
		this.isRot = false;

		var node = param.target;
		node.updateMatrix();
		node.matrixAutoUpdate = true;
		this.targetNode = node;

		switch ( param.path ) {

			case "translation" :

				this.target = node.position;
				this.originalValue = node.position.clone();
				break;

			case "rotation" :

				this.target = node.quaternion;
				this.originalValue = node.quaternion.clone();
				this.isRot = true;
				break;

			case "scale" :

				this.target = node.scale;
				this.originalValue = node.scale.clone();
				break;

		}

		this.duration = this.keys[ this.count - 1 ];

		this.vec1 = new THREE.Vector3();
		this.vec2 = new THREE.Vector3();
		this.vec3 = new THREE.Vector3();
		this.quat1 = new THREE.Quaternion();
		this.quat2 = new THREE.Quaternion();
		this.quat3 = new THREE.Quaternion();

	}

	//Interpolation and tweening methods
	GLTFInterpolator.prototype.interp = function ( t ) {

		if ( t == this.keys[ 0 ] ) {

			if ( this.isRot ) {

				this.quat3.fromArray( this.values );

			} else {

				this.vec3.fromArray( this.values );

			}

		} else if ( t < this.keys[ 0 ] ) {

			if ( this.isRot ) {

				this.quat1.copy( this.originalValue );
				this.quat2.fromArray( this.values );
				THREE.Quaternion.slerp( this.quat1, this.quat2, this.quat3, t / this.keys[ 0 ] );

			} else {

				this.vec3.copy( this.originalValue );
				this.vec2.fromArray( this.values );
				this.vec3.lerp( this.vec2, t / this.keys[ 0 ] );

			}

		} else if ( t >= this.keys[ this.count - 1 ] ) {

			if ( this.isRot ) {

				this.quat3.fromArray( this.values, ( this.count - 1 ) * 4 );

			} else {

				this.vec3.fromArray( this.values, ( this.count - 1 ) * 3 );

			}

		} else {

			for ( var i = 0; i < this.count - 1; i ++ ) {

				var key1 = this.keys[ i ];
				var key2 = this.keys[ i + 1 ];

				if ( t >= key1 && t <= key2 ) {

					if ( this.isRot ) {

						this.quat1.fromArray( this.values, i * 4 );
						this.quat2.fromArray( this.values, ( i + 1 ) * 4 );
						THREE.Quaternion.slerp( this.quat1, this.quat2, this.quat3, ( t - key1 ) / ( key2 - key1 ) );

					} else {

						this.vec3.fromArray( this.values, i * 3 );
						this.vec2.fromArray( this.values, ( i + 1 ) * 3 );
						this.vec3.lerp( this.vec2, ( t - key1 ) / ( key2 - key1 ) );

					}

				}

			}

		}

		if ( this.target ) {

			if ( this.isRot ) {

				this.target.copy( this.quat3 );

			} else {

				this.target.copy( this.vec3 );

			}

		}

	};


	/*********************************/
	/********** INTERNALS ************/
	/*********************************/

	/* CONSTANTS */

	var WEBGL_CONSTANTS = {
		FLOAT: 5126,
		//FLOAT_MAT2: 35674,
		FLOAT_MAT3: 35675,
		FLOAT_MAT4: 35676,
		FLOAT_VEC2: 35664,
		FLOAT_VEC3: 35665,
		FLOAT_VEC4: 35666,
		LINEAR: 9729,
		REPEAT: 10497,
		SAMPLER_2D: 35678,
		TRIANGLES: 4,
		UNSIGNED_BYTE: 5121,
		UNSIGNED_SHORT: 5123,

		VERTEX_SHADER: 35633,
		FRAGMENT_SHADER: 35632
	};

	var WEBGL_TYPE = {
		5126: Number,
		//35674: THREE.Matrix2,
		35675: THREE.Matrix3,
		35676: THREE.Matrix4,
		35664: THREE.Vector2,
		35665: THREE.Vector3,
		35666: THREE.Vector4,
		35678: THREE.Texture
	};

	var WEBGL_COMPONENT_TYPES = {
		5120: Int8Array,
		5121: Uint8Array,
		5122: Int16Array,
		5123: Uint16Array,
		5125: Uint32Array,
		5126: Float32Array
	};

	var WEBGL_FILTERS = {
		9728: THREE.NearestFilter,
		9729: THREE.LinearFilter,
		9984: THREE.NearestMipMapNearestFilter,
		9985: THREE.LinearMipMapNearestFilter,
		9986: THREE.NearestMipMapLinearFilter,
		9987: THREE.LinearMipMapLinearFilter
	};

	var WEBGL_WRAPPINGS = {
		33071: THREE.ClampToEdgeWrapping,
		33648: THREE.MirroredRepeatWrapping,
		10497: THREE.RepeatWrapping
	};

	var WEBGL_TYPE_SIZES = {
		'SCALAR': 1,
		'VEC2': 2,
		'VEC3': 3,
		'VEC4': 4,
		'MAT2': 4,
		'MAT3': 9,
		'MAT4': 16
	};

	/* UTILITY FUNCTIONS */

	function _each( object, callback, thisObj ) {

		if ( !object ) {
			return Promise.resolve();
		}

		var results;
		var fns = [];

		if ( Object.prototype.toString.call( object ) === '[object Array]' ) {

			results = [];

			var length = object.length;
			for ( var idx = 0; idx < length; idx ++ ) {
				var value = callback.call( thisObj || this, object[ idx ], idx );
				if ( value ) {
					fns.push( value );
					if ( value instanceof Promise ) {
						value.then( function( key, value ) {
							results[ idx ] = value;
						}.bind( this, key ));
					} else {
						results[ idx ] = value;
					}
				}
			}

		} else {

			results = {};

			for ( var key in object ) {
				if ( object.hasOwnProperty( key ) ) {
					var value = callback.call( thisObj || this, object[ key ], key );
					if ( value ) {
						fns.push( value );
						if ( value instanceof Promise ) {
							value.then( function( key, value ) {
								results[ key ] = value;
							}.bind( this, key ));
						} else {
							results[ key ] = value;
						}
					}
				}
			}

		}

		return Promise.all( fns ).then( function() {
			return results;
		});

	}

	function resolveURL( url, path ) {

		// Invalid URL
		if ( typeof url !== 'string' || url === '' )
			return '';

		// Absolute URL
		if ( /^https?:\/\//i.test( url ) ) {

			return url;

		}

		// Data URI
		if ( /^data:.*,.*$/i.test( url ) ) {

			return url;

		}

		// Relative URL
		return ( path || '' ) + url;

	}

	// Three.js seems too dependent on attribute names so globally
	// replace those in the shader code
	function replaceTHREEShaderAttributes( shaderText, technique ) {

		// Expected technique attributes
		var attributes = {};

		for ( var attributeId in technique.attributes ) {

			var pname = technique.attributes[ attributeId ];

			var param = technique.parameters[ pname ];
			var atype = param.type;
			var semantic = param.semantic;

			attributes[ attributeId ] = {
				type: atype,
				semantic: semantic
			};

		}

		// Figure out which attributes to change in technique

		var shaderParams = technique.parameters;
		var shaderAttributes = technique.attributes;
		var params = {};

		for ( var attributeId in attributes ) {

			var pname = shaderAttributes[ attributeId ];
			var shaderParam = shaderParams[ pname ];
			var semantic = shaderParam.semantic;
			if ( semantic ) {

				params[ attributeId ] = shaderParam;

			}

		}

		for ( var pname in params ) {

			var param = params[ pname ];
			var semantic = param.semantic;

			var regEx = new RegExp( "\\b" + pname + "\\b", "g" );

			switch ( semantic ) {

				case "POSITION":

					shaderText = shaderText.replace( regEx, 'position' );
					break;

				case "NORMAL":

					shaderText = shaderText.replace( regEx, 'normal' );
					break;

				case 'TEXCOORD_0':
				case 'TEXCOORD0':
				case 'TEXCOORD':

					shaderText = shaderText.replace( regEx, 'uv' );
					break;

				case "WEIGHT":

					shaderText = shaderText.replace( regEx, 'skinWeight' );
					break;

				case "JOINT":

					shaderText = shaderText.replace( regEx, 'skinIndex' );
					break;

			}

		}

		return shaderText;

	}

	// Deferred constructor for RawShaderMaterial types
	function DeferredShaderMaterial( params ) {

		this.isDeferredShaderMaterial = true;

		this.params = params;

	}

	DeferredShaderMaterial.prototype.create = function () {

		var uniforms = THREE.UniformsUtils.clone( this.params.uniforms );

		for ( var uniformId in this.params.uniforms ) {

			var originalUniform = this.params.uniforms[ uniformId ];

			if ( originalUniform.value instanceof THREE.Texture ) {

				uniforms[ uniformId ].value = originalUniform.value;
				uniforms[ uniformId ].value.needsUpdate = true;

			}

			uniforms[ uniformId ].semantic = originalUniform.semantic;
			uniforms[ uniformId ].node = originalUniform.node;

		}

		this.params.uniforms = uniforms;

		return new THREE.RawShaderMaterial( this.params );

	};

	/* GLTF PARSER */

	function GLTFParser( json, options ) {

		this.json = json || {};
		this.options = options || {};

		// loader object cache
		this.cache = new GLTFRegistry();

	}

	GLTFParser.prototype._withDependencies = function ( dependencies ) {

		var _dependencies = {};

		for ( var i = 0; i < dependencies.length; i ++ ) {

			var dependency = dependencies[ i ];
			var fnName = "load" + dependency.charAt( 0 ).toUpperCase() + dependency.slice( 1 );

			var cached = this.cache.get( dependency );

			if ( cached !== undefined ) {

				_dependencies[ dependency ] = cached;

			} else if ( this[ fnName ] ) {

				var fn = this[ fnName ]();
				this.cache.add( dependency, fn );

				_dependencies[ dependency ] = fn;

			}

		}

		return _each( _dependencies, function ( dependency ) {

			return dependency;

		} );

	};

	GLTFParser.prototype.parse = function ( callback ) {

		// Clear the loader cache
		this.cache.removeAll();

		// Fire the callback on complete
		this._withDependencies( [

			"scenes",
			"cameras",
			"animations"

		] ).then( function ( dependencies ) {

			var scene = dependencies.scenes[ this.json.scene ];

			var cameras = [];

			for ( var name in dependencies.cameras ) {

				var camera = dependencies.cameras[ name ];
				cameras.push( camera );

			}

			var animations = [];

			for ( var name in dependencies.animations ) {

				var animation = dependencies.animations[ name ];
				animations.push( animation );

			}

			callback( scene, cameras, animations );

		}.bind( this ) );

	};

	GLTFParser.prototype.loadShaders = function () {

		return _each( this.json.shaders, function ( shader ) {

			return new Promise( function ( resolve ) {

				var loader = new THREE.FileLoader();
				loader.responseType = 'text';
				loader.load( resolveURL( shader.uri, this.options.path ), function ( shaderText ) {

					resolve( shaderText );

				} );

			}.bind( this ) );

		}.bind( this ) );

	};

	GLTFParser.prototype.loadBuffers = function () {

		return _each( this.json.buffers, function ( buffer ) {

			if ( buffer.type === 'arraybuffer' ) {

				return new Promise( function ( resolve ) {

					var loader = new THREE.FileLoader();
					loader.responseType = 'arraybuffer';
					loader.load( resolveURL( buffer.uri, this.options.path ), function ( buffer ) {

						resolve( buffer );

					} );

				}.bind( this ) );

			}

		}.bind( this ) );

	};

	GLTFParser.prototype.loadBufferViews = function () {

		return this._withDependencies( [

			"buffers"

		] ).then( function ( dependencies ) {

			return _each( this.json.bufferViews, function ( bufferView ) {

				var arraybuffer = dependencies.buffers[ bufferView.buffer ];

				return arraybuffer.slice( bufferView.byteOffset, bufferView.byteOffset + bufferView.byteLength );

			} );

		}.bind( this ) );

	};

	GLTFParser.prototype.loadAccessors = function () {

		return this._withDependencies( [

			"bufferViews"

		] ).then( function ( dependencies ) {

			return _each( this.json.accessors, function ( accessor ) {

				var arraybuffer = dependencies.bufferViews[ accessor.bufferView ];
				var itemSize = WEBGL_TYPE_SIZES[ accessor.type ];
				var TypedArray = WEBGL_COMPONENT_TYPES[ accessor.componentType ];

				// For VEC3: itemSize is 3, elementBytes is 4, itemBytes is 12.
				var elementBytes = TypedArray.BYTES_PER_ELEMENT;
				var itemBytes = elementBytes * itemSize;

				// The buffer is not interleaved if the stride is the item size in bytes.
				if ( accessor.byteStride && accessor.byteStride !== itemBytes ) {

					// Use the full buffer if it's interleaved.
					var array = new TypedArray( arraybuffer );

					// Integer parameters to IB/IBA are in array elements, not bytes.
					var ib = new THREE.InterleavedBuffer( array, accessor.byteStride / elementBytes );

					return new THREE.InterleavedBufferAttribute( ib, itemSize, accessor.byteOffset / elementBytes );

				} else {

					array = new TypedArray( arraybuffer, accessor.byteOffset, accessor.count * itemSize );

					return new THREE.BufferAttribute( array, itemSize );

				}

			} );

		}.bind( this ) );

	};

	GLTFParser.prototype.loadTextures = function () {

		return _each( this.json.textures, function ( texture ) {

			if ( texture.source ) {

				return new Promise( function ( resolve ) {

					var source = this.json.images[ texture.source ];

					var textureLoader = THREE.Loader.Handlers.get( source.uri );

					if ( textureLoader === null ) {

						textureLoader = new THREE.TextureLoader();

					}

					textureLoader.crossOrigin = this.options.crossOrigin || false;

					textureLoader.load( resolveURL( source.uri, this.options.path ), function ( _texture ) {

						_texture.flipY = false;

						if ( texture.sampler ) {

							var sampler = this.json.samplers[ texture.sampler ];

							_texture.magFilter = WEBGL_FILTERS[ sampler.magFilter ];
							_texture.minFilter = WEBGL_FILTERS[ sampler.minFilter ];
							_texture.wrapS = WEBGL_WRAPPINGS[ sampler.wrapS ];
							_texture.wrapT = WEBGL_WRAPPINGS[ sampler.wrapT ];

						}

						resolve( _texture );

					}.bind( this ) );

				}.bind( this ) );

			}

		}.bind( this ) );

	};

	GLTFParser.prototype.loadMaterials = function () {

		return this._withDependencies( [

			"shaders",
			"textures"

		] ).then( function ( dependencies ) {

			return _each( this.json.materials, function ( material ) {

				var materialType;
				var materialValues = {};
				var materialParams = {};

				var khr_material;

				if ( material.extensions && material.extensions.KHR_materials_common ) {

					khr_material = material.extensions.KHR_materials_common;

				} else if ( this.json.extensions && this.json.extensions.KHR_materials_common ) {

					khr_material = this.json.extensions.KHR_materials_common;

				}

				if ( khr_material ) {

					switch ( khr_material.technique ) {

						case 'BLINN' :
						case 'PHONG' :
							materialType = THREE.MeshPhongMaterial;
							break;

						case 'LAMBERT' :
							materialType = THREE.MeshLambertMaterial;
							break;

						case 'CONSTANT' :
						default :
							materialType = THREE.MeshBasicMaterial;
							break;

					}

					Object.assign( materialValues, khr_material.values );

					if ( khr_material.doubleSided || materialValues.doubleSided ) {

						materialParams.side = THREE.DoubleSide;

					}

					if ( khr_material.transparent || materialValues.transparent ) {

						materialParams.transparent = true;
						materialParams.opacity = ( materialValues.transparency !== undefined ) ? materialValues.transparency : 1;

					}

				} else if ( material.technique === undefined ) {

					materialType = THREE.MeshPhongMaterial;

					Object.assign( materialValues, material.values );

				} else {

					materialType = DeferredShaderMaterial;

					var technique = this.json.techniques[ material.technique ];

					materialParams.uniforms = {};

					var program = this.json.programs[ technique.program ];

					if ( program ) {

						materialParams.fragmentShader = dependencies.shaders[ program.fragmentShader ];

						if ( ! materialParams.fragmentShader ) {

							console.warn( "ERROR: Missing fragment shader definition:", program.fragmentShader );
							materialType = THREE.MeshPhongMaterial;

						}

						var vertexShader = dependencies.shaders[ program.vertexShader ];

						if ( ! vertexShader ) {

							console.warn( "ERROR: Missing vertex shader definition:", program.vertexShader );
							materialType = THREE.MeshPhongMaterial;

						}

						// IMPORTANT: FIX VERTEX SHADER ATTRIBUTE DEFINITIONS
						materialParams.vertexShader = replaceTHREEShaderAttributes( vertexShader, technique );

						var uniforms = technique.uniforms;

						for ( var uniformId in uniforms ) {

							var pname = uniforms[ uniformId ];
							var shaderParam = technique.parameters[ pname ];

							var ptype = shaderParam.type;

							if ( WEBGL_TYPE[ ptype ] ) {

								var pcount = shaderParam.count;
								var value = material.values[ pname ];

								var uvalue = new WEBGL_TYPE[ ptype ]();
								var usemantic = shaderParam.semantic;
								var unode = shaderParam.node;

								switch ( ptype ) {

									case WEBGL_CONSTANTS.FLOAT:

										uvalue = shaderParam.value;

										if ( pname == "transparency" ) {

											materialParams.transparent = true;

										}

										if ( value !== undefined ) {

											uvalue = value;

										}

										break;

									case WEBGL_CONSTANTS.FLOAT_VEC2:
									case WEBGL_CONSTANTS.FLOAT_VEC3:
									case WEBGL_CONSTANTS.FLOAT_VEC4:
									case WEBGL_CONSTANTS.FLOAT_MAT3:

										if ( shaderParam && shaderParam.value ) {

											uvalue.fromArray( shaderParam.value );

										}

										if ( value ) {

											uvalue.fromArray( value );

										}

										break;

									case WEBGL_CONSTANTS.FLOAT_MAT2:

										// what to do?
										console.warn( "FLOAT_MAT2 is not a supported uniform type" );
										break;

									case WEBGL_CONSTANTS.FLOAT_MAT4:

										if ( pcount ) {

											uvalue = new Array( pcount );

											for ( var mi = 0; mi < pcount; mi ++ ) {

												uvalue[ mi ] = new WEBGL_TYPE[ ptype ]();

											}

											if ( shaderParam && shaderParam.value ) {

												var m4v = shaderParam.value;
												uvalue.fromArray( m4v );

											}

											if ( value ) {

												uvalue.fromArray( value );

											}

										}	else {

											if ( shaderParam && shaderParam.value ) {

												var m4 = shaderParam.value;
												uvalue.fromArray( m4 );

											}

											if ( value ) {

												uvalue.fromArray( value );

											}

										}

										break;

									case WEBGL_CONSTANTS.SAMPLER_2D:

										uvalue = value ? dependencies.textures[ value ] : null;

										break;

								}

								materialParams.uniforms[ uniformId ] = {
									value: uvalue,
									semantic: usemantic,
									node: unode
								};

							} else {

								throw new Error( "Unknown shader uniform param type: " + ptype );

							}

						}

					}

				}

				if ( Array.isArray( materialValues.diffuse ) ) {

					materialParams.color = new THREE.Color().fromArray( materialValues.diffuse );

				} else if ( typeof( materialValues.diffuse ) === 'string' ) {

					materialParams.map = dependencies.textures[ materialValues.diffuse ];

				}

				delete materialParams.diffuse;

				if ( typeof( materialValues.reflective ) === 'string' ) {

					materialParams.envMap = dependencies.textures[ materialValues.reflective ];

				}

				if ( typeof( materialValues.bump ) === 'string' ) {

					materialParams.bumpMap = dependencies.textures[ materialValues.bump ];

				}

				if ( Array.isArray( materialValues.emission ) ) {

					materialParams.emissive = new THREE.Color().fromArray( materialValues.emission );

				}

				if ( Array.isArray( materialValues.specular ) ) {

					materialParams.specular = new THREE.Color().fromArray( materialValues.specular );

				}

				if ( materialValues.shininess !== undefined ) {

					materialParams.shininess = materialValues.shininess;

				}

				var _material = new materialType( materialParams );
				_material.name = material.name;

				return _material;

			}.bind( this ) );

		}.bind( this ) );

	};

	GLTFParser.prototype.loadMeshes = function () {

		return this._withDependencies( [

			"accessors",
			"materials"

		] ).then( function ( dependencies ) {

			return _each( this.json.meshes, function ( mesh ) {

				var group = new THREE.Object3D();
				group.name = mesh.name;

				var primitives = mesh.primitives;

				for ( var name in primitives ) {

					var primitive = primitives[ name ];

					if ( primitive.mode === WEBGL_CONSTANTS.TRIANGLES || primitive.mode === undefined ) {

						var geometry = new THREE.BufferGeometry();

						var attributes = primitive.attributes;

						for ( var attributeId in attributes ) {

							var attributeEntry = attributes[ attributeId ];

							if ( ! attributeEntry ) return;

							var bufferAttribute = dependencies.accessors[ attributeEntry ];

							switch ( attributeId ) {

								case 'POSITION':
									geometry.addAttribute( 'position', bufferAttribute );
									break;

								case 'NORMAL':
									geometry.addAttribute( 'normal', bufferAttribute );
									break;

								case 'TEXCOORD_0':
								case 'TEXCOORD0':
								case 'TEXCOORD':
									geometry.addAttribute( 'uv', bufferAttribute );
									break;

								case 'WEIGHT':
									geometry.addAttribute( 'skinWeight', bufferAttribute );
									break;

								case 'JOINT':
									geometry.addAttribute( 'skinIndex', bufferAttribute );
									break;

							}

						}

						if ( primitive.indices ) {

							var indexArray = dependencies.accessors[ primitive.indices ];

							geometry.setIndex( indexArray );

							var offset = {
								start: 0,
								index: 0,
								count: indexArray.count
							};

							geometry.groups.push( offset );

							geometry.computeBoundingSphere();

						}


						var material = dependencies.materials[ primitive.material ];

						var meshNode = new THREE.Mesh( geometry, material );
						meshNode.castShadow = true;

						group.add( meshNode );

					} else {

						console.warn( "Non-triangular primitives are not supported" );

					}

				}

				return group;

			} );

		}.bind( this ) );

	};

	GLTFParser.prototype.loadCameras = function () {

		return _each( this.json.cameras, function ( camera ) {

			if ( camera.type == "perspective" && camera.perspective ) {

				var yfov = camera.perspective.yfov;
				var xfov = camera.perspective.xfov;
				var aspect_ratio = camera.perspective.aspect_ratio || 1;

				// According to COLLADA spec...
				// aspect_ratio = xfov / yfov
				xfov = ( xfov === undefined && yfov ) ? yfov * aspect_ratio : xfov;

				// According to COLLADA spec...
				// aspect_ratio = xfov / yfov
				// yfov = ( yfov === undefined && xfov ) ? xfov / aspect_ratio : yfov;

				var _camera = new THREE.PerspectiveCamera( THREE.Math.radToDeg( xfov ), aspect_ratio, camera.perspective.znear || 1, camera.perspective.zfar || 2e6 );
				_camera.name = camera.name;

				return _camera;

			} else if ( camera.type == "orthographic" && camera.orthographic ) {

				var _camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, camera.orthographic.znear, camera.orthographic.zfar );
				_camera.name = camera.name;

				return _camera;

			}

		}.bind( this ) );

	};

	GLTFParser.prototype.loadSkins = function () {

		var scope = this;

		return this._withDependencies( [

			"accessors"

		] ).then( function ( dependencies ) {

			return _each( scope.json.skins, function ( skin ) {

				var _skin = {
					bindShapeMatrix: new THREE.Matrix4().fromArray( skin.bindShapeMatrix ),
					jointNames: skin.jointNames,
					inverseBindMatrices: dependencies.accessors[ skin.inverseBindMatrices ]
				};

				return _skin;

			} );

		} );

	};

	GLTFParser.prototype.loadAnimations = function () {

		var scope = this;

		return this._withDependencies( [

			"accessors",
			"nodes"

		] ).then( function ( dependencies ) {

			return _each( scope.json.animations, function ( animation, animationId ) {

				var interps = [];

				for ( var channelId in animation.channels ) {

					var channel = animation.channels[ channelId ];
					var sampler = animation.samplers[ channel.sampler ];

					if ( sampler && animation.parameters ) {

						var target = channel.target;
						var name = target.id;
						var input = animation.parameters[ sampler.input ];
						var output = animation.parameters[ sampler.output ];

						var inputAccessor = dependencies.accessors[ input ];
						var outputAccessor = dependencies.accessors[ output ];

						var node = dependencies.nodes[ name ];

						if ( node ) {

							var interp = {
								keys: inputAccessor.array,
								values: outputAccessor.array,
								count: inputAccessor.count,
								target: node,
								path: target.path,
								type: sampler.interpolation
							};

							interps.push( interp );

						}

					}

				}

				var _animation = new GLTFAnimation( interps );
				_animation.name = "animation_" + animationId;

				return _animation;

			} );

		} );

	};

	GLTFParser.prototype.loadNodes = function () {

		return _each( this.json.nodes, function ( node ) {

			var matrix = new THREE.Matrix4();

			var _node;

			if ( node.jointName ) {

				_node = new THREE.Bone();
				_node.jointName = node.jointName;

			} else {

				_node = new THREE.Object3D();

			}

			_node.name = node.name;

			_node.matrixAutoUpdate = false;

			if ( node.matrix !== undefined ) {

				matrix.fromArray( node.matrix );
				_node.applyMatrix( matrix );

			} else {

				if ( node.translation !== undefined ) {

					_node.position.fromArray( node.translation );

				}

				if ( node.rotation !== undefined ) {

					_node.quaternion.fromArray( node.rotation );

				}

				if ( node.scale !== undefined ) {

					_node.scale.fromArray( node.scale );

				}

			}

			return _node;

		}.bind( this ) ).then( function ( __nodes ) {

			return this._withDependencies( [

				"meshes",
				"skins",
				"cameras",
				"extensions"

			] ).then( function ( dependencies ) {

				return _each( __nodes, function ( _node, nodeId ) {

					var node = this.json.nodes[ nodeId ];

					if ( node.meshes !== undefined ) {

						for ( var meshId in node.meshes ) {

							var mesh = node.meshes[ meshId ];
							var group = dependencies.meshes[ mesh ];

							for ( var childrenId in group.children ) {

								var child = group.children[ childrenId ];

								// clone Mesh to add to _node

								var originalMaterial = child.material;
								var originalGeometry = child.geometry;

								var material;

								if ( originalMaterial.isDeferredShaderMaterial ) {

									originalMaterial = material = originalMaterial.create();

								} else {

									material = originalMaterial;

								}

								child = new THREE.Mesh( originalGeometry, material );
								child.castShadow = true;

								var skinEntry;

								if ( node.skin ) {

									skinEntry = dependencies.skins[ node.skin ];

								}

								// Replace Mesh with SkinnedMesh in library
								if ( skinEntry ) {

									var geometry = originalGeometry;
									var material = originalMaterial;
									material.skinning = true;

									child = new THREE.SkinnedMesh( geometry, material, false );
									child.castShadow = true;

									var bones = [];
									var boneInverses = [];

									for ( var i = 0, l = skinEntry.jointNames.length; i < l; i ++ ) {

										var jointId = skinEntry.jointNames[ i ];
										var jointNode = __nodes[ jointId ];

										if ( jointNode ) {

											jointNode.skin = child;
											bones.push( jointNode );

											var m = skinEntry.inverseBindMatrices.array;
											var mat = new THREE.Matrix4().fromArray( m, i * 16 );
											boneInverses.push( mat );

										} else {

											console.warn( "WARNING: joint: ''" + jointId + "' could not be found" );

										}

									}

									child.bind( new THREE.Skeleton( bones, boneInverses, false ), skinEntry.bindShapeMatrix );

								}

								_node.add( child );

							}

						}

					}

					if ( node.camera !== undefined ) {

						var camera = dependencies.cameras[ node.camera ];

						_node.add( camera );

					}

					if ( node.extensions && node.extensions.KHR_materials_common && node.extensions.KHR_materials_common.light ) {

						var light = dependencies.extensions.KHR_materials_common.lights[ node.extensions.KHR_materials_common.light ];

						_node.add( light );

					}

					return _node;

				}.bind( this ) );

			}.bind( this ) );

		}.bind( this ) );

	};

	GLTFParser.prototype.loadExtensions = function () {

		return _each( this.json.extensions, function ( extension, extensionId ) {

			switch ( extensionId ) {

				case "KHR_materials_common":

					var extensionNode = {
						lights: {}
					};

					var lights = extension.lights;

					for ( var lightId in lights ) {

						var light = lights[ lightId ];
						var lightNode;

						var lightParams = light[ light.type ];
						var color = new THREE.Color().fromArray( lightParams.color );

						switch ( light.type ) {

							case "directional":
								lightNode = new THREE.DirectionalLight( color );
								lightNode.position.set( 0, 0, 1 );
								break;

							case "point":
								lightNode = new THREE.PointLight( color );
								break;

							case "spot ":
								lightNode = new THREE.SpotLight( color );
								lightNode.position.set( 0, 0, 1 );
								break;

							case "ambient":
								lightNode = new THREE.AmbientLight( color );
								break;

						}

						if ( lightNode ) {

							extensionNode.lights[ lightId ] = lightNode;

						}

					}

					return extensionNode;

					break;

			}

		} );

	};

	GLTFParser.prototype.loadScenes = function () {

		var scope = this;

		// scene node hierachy builder

		function buildNodeHierachy( nodeId, parentObject, allNodes ) {

			var _node = allNodes[ nodeId ];
			parentObject.add( _node );

			var node = scope.json.nodes[ nodeId ];

			if ( node.children ) {

				var children = node.children;

				for ( var i = 0, l = children.length; i < l; i ++ ) {

					var child = children[ i ];
					buildNodeHierachy( child, _node, allNodes );

				}

			}

		}

		return this._withDependencies( [

			"nodes"

		] ).then( function ( dependencies ) {

			return _each( scope.json.scenes, function ( scene ) {

				var _scene = new THREE.Scene();
				_scene.name = scene.name;

				var nodes = scene.nodes;

				for ( var i = 0, l = nodes.length; i < l; i ++ ) {

					var nodeId = nodes[ i ];
					buildNodeHierachy( nodeId, _scene, dependencies.nodes );

				}

				_scene.traverse( function ( child ) {

					// Register raw material meshes with GLTFLoader.Shaders
					if ( child.material && child.material.isRawShaderMaterial ) {

						var xshader = new GLTFShader( child, dependencies.nodes );
						GLTFLoader.Shaders.add( child.uuid, xshader );

					}

				} );

				return _scene;

			} );

		} );

	};

	return GLTFLoader;

} )();

/**
 * @author alteredq / http://alteredqualia.com/
 * @author mr.doob / http://mrdoob.com/
 */

var Detector = {

	canvas: !! window.CanvasRenderingContext2D,
	webgl: ( function () {

		try {

			var canvas = document.createElement( 'canvas' ); return !! ( window.WebGLRenderingContext && ( canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ) ) );

		} catch ( e ) {

			return false;

		}

	} )(),
	workers: !! window.Worker,
	fileapi: window.File && window.FileReader && window.FileList && window.Blob,

	getWebGLErrorMessage: function () {

		var element = document.createElement( 'div' );
		element.id = 'webgl-error-message';
		element.style.fontFamily = 'monospace';
		element.style.fontSize = '13px';
		element.style.fontWeight = 'normal';
		element.style.textAlign = 'center';
		element.style.background = '#fff';
		element.style.color = '#000';
		element.style.padding = '1.5em';
		element.style.width = '400px';
		element.style.margin = '5em auto 0';

		if ( ! this.webgl ) {

			element.innerHTML = window.WebGLRenderingContext ? [
				'Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />',
				'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'
			].join( '\n' ) : [
				'Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>',
				'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'
			].join( '\n' );

		}

		return element;

	},

	addGetWebGLMessage: function ( parameters ) {

		var parent, id, element;

		parameters = parameters || {};

		parent = parameters.parent !== undefined ? parameters.parent : document.body;
		id = parameters.id !== undefined ? parameters.id : 'oldie';

		element = Detector.getWebGLErrorMessage();
		element.id = id;

		parent.appendChild( element );

	}

};

// browserify support
if ( typeof module === 'object' ) {

	module.exports = Detector;

}

var KeyCodes;
(function (KeyCodes) {
    var KeyDown;
    (function (KeyDown) {
        KeyDown.Backspace = 8;
        KeyDown.Tab = 9;
        KeyDown.Enter = 13;
        KeyDown.Shift = 16;
        KeyDown.Ctrl = 17;
        KeyDown.Alt = 18;
        KeyDown.PauseBreak = 19;
        KeyDown.CapsLock = 20;
        KeyDown.Escape = 27;
        KeyDown.Spacebar = 32;
        KeyDown.PageUp = 33;
        KeyDown.PageDown = 34;
        KeyDown.End = 35;
        KeyDown.Home = 36;
        KeyDown.LeftArrow = 37;
        KeyDown.UpArrow = 38;
        KeyDown.RightArrow = 39;
        KeyDown.DownArrow = 40;
        KeyDown.PrintScrn = 44;
        KeyDown.Insert = 45;
        KeyDown.Delete = 46;
        KeyDown.Zero = 48;
        KeyDown.One = 49;
        KeyDown.Two = 50;
        KeyDown.Three = 51;
        KeyDown.Four = 52;
        KeyDown.Five = 53;
        KeyDown.Six = 54;
        KeyDown.Seven = 55;
        KeyDown.Eight = 56;
        KeyDown.Nine = 57;
        KeyDown.a = 65;
        KeyDown.b = 66;
        KeyDown.c = 67;
        KeyDown.d = 68;
        KeyDown.e = 69;
        KeyDown.f = 70;
        KeyDown.g = 71;
        KeyDown.h = 72;
        KeyDown.i = 73;
        KeyDown.j = 74;
        KeyDown.k = 75;
        KeyDown.l = 76;
        KeyDown.m = 77;
        KeyDown.n = 78;
        KeyDown.o = 79;
        KeyDown.p = 80;
        KeyDown.q = 81;
        KeyDown.r = 82;
        KeyDown.s = 83;
        KeyDown.t = 84;
        KeyDown.u = 85;
        KeyDown.v = 86;
        KeyDown.w = 87;
        KeyDown.x = 88;
        KeyDown.y = 89;
        KeyDown.z = 90;
        KeyDown.LeftWindowKey = 91;
        KeyDown.RightWindowKey = 92;
        KeyDown.SelectKey = 93;
        KeyDown.Numpad0 = 96;
        KeyDown.Numpad1 = 97;
        KeyDown.Numpad2 = 98;
        KeyDown.Numpad3 = 99;
        KeyDown.Numpad4 = 100;
        KeyDown.Numpad5 = 101;
        KeyDown.Numpad6 = 102;
        KeyDown.Numpad7 = 103;
        KeyDown.Numpad8 = 104;
        KeyDown.Numpad9 = 105;
        KeyDown.Multiply = 106;
        KeyDown.NumpadPlus = 107;
        KeyDown.NumpadMinus = 109;
        KeyDown.DecimalPoint = 110;
        KeyDown.Divide = 111;
        KeyDown.F1 = 112;
        KeyDown.F2 = 113;
        KeyDown.F3 = 114;
        KeyDown.F4 = 115;
        KeyDown.F5 = 116;
        KeyDown.F6 = 117;
        KeyDown.F7 = 118;
        KeyDown.F8 = 119;
        KeyDown.F9 = 120;
        KeyDown.F10 = 121;
        KeyDown.F11 = 122;
        KeyDown.F12 = 123;
        KeyDown.NumLock = 144;
        KeyDown.ScrollLock = 145;
        KeyDown.Semicolon = 186;
        KeyDown.Equals = 187;
        KeyDown.Comma = 188;
        KeyDown.LessThan = 188;
        KeyDown.Dash = 189;
        KeyDown.Period = 190;
        KeyDown.GreaterThan = 190;
        KeyDown.ForwardSlash = 191;
        KeyDown.QuestionMark = 191;
        KeyDown.GraveAccent = 192;
        KeyDown.Tilde = 192;
        KeyDown.OpenCurlyBracket = 219;
        KeyDown.OpenSquareBracket = 219;
        KeyDown.BackSlash = 220;
        KeyDown.VerticalPipe = 220;
        KeyDown.CloseCurlyBracket = 221;
        KeyDown.CloseSquareBracket = 221;
        KeyDown.Quote = 222;
        KeyDown.CommandFF = 224;
    })(KeyDown = KeyCodes.KeyDown || (KeyCodes.KeyDown = {}));
})(KeyCodes || (KeyCodes = {}));
var KeyCodes;
(function (KeyCodes) {
    var KeyPress;
    (function (KeyPress) {
        KeyPress.Backspace = 8;
        KeyPress.Enter = 13;
        KeyPress.Spacebar = 32;
        KeyPress.Hash = 35;
        KeyPress.GraveAccent = 39;
        KeyPress.ForwardSlash = 32;
        KeyPress.Asterisk = 42;
        KeyPress.Plus = 43;
        KeyPress.Comma = 44;
        KeyPress.Minus = 45;
        KeyPress.Period = 46;
        KeyPress.ForwardSlash = 47;
        KeyPress.Zero = 48;
        KeyPress.One = 49;
        KeyPress.Two = 50;
        KeyPress.Three = 51;
        KeyPress.Four = 52;
        KeyPress.Five = 53;
        KeyPress.Six = 54;
        KeyPress.Seven = 55;
        KeyPress.Eight = 56;
        KeyPress.Nine = 57;
        KeyPress.Colon = 58;
        KeyPress.Semicolon = 59;
        KeyPress.LessThan = 60;
        KeyPress.Equals = 61;
        KeyPress.GreaterThan = 62;
        KeyPress.QuestionMark = 63;
        KeyPress.At = 64;
        KeyPress.OpenSquareBracket = 91;
        KeyPress.BackSlash = 92;
        KeyPress.CloseSquareBracket = 93;
        KeyPress.a = 97;
        KeyPress.b = 98;
        KeyPress.c = 99;
        KeyPress.d = 100;
        KeyPress.e = 101;
        KeyPress.f = 102;
        KeyPress.g = 103;
        KeyPress.h = 104;
        KeyPress.i = 105;
        KeyPress.j = 106;
        KeyPress.k = 107;
        KeyPress.l = 108;
        KeyPress.m = 109;
        KeyPress.n = 110;
        KeyPress.o = 111;
        KeyPress.p = 112;
        KeyPress.q = 113;
        KeyPress.r = 114;
        KeyPress.s = 115;
        KeyPress.t = 116;
        KeyPress.u = 117;
        KeyPress.v = 118;
        KeyPress.w = 119;
        KeyPress.x = 120;
        KeyPress.y = 121;
        KeyPress.z = 122;
        KeyPress.OpenCurlyBracket = 123;
        KeyPress.VerticalPipe = 124;
        KeyPress.CloseCurlyBracket = 125;
        KeyPress.Tilde = 126;
    })(KeyPress = KeyCodes.KeyPress || (KeyCodes.KeyPress = {}));
})(KeyCodes || (KeyCodes = {}));

!function(f){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=f();else if("function"==typeof define&&define.amd)define([],f);else{var g;g="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,g.virtex=f()}}(function(){return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){var Virtex;!function(Virtex){var StringValue=function(){function StringValue(value){this.value="",value&&(this.value=value.toLowerCase())}return StringValue.prototype.toString=function(){return this.value},StringValue}();Virtex.StringValue=StringValue}(Virtex||(Virtex={}));var Virtex,__extends=this&&this.__extends||function(d,b){function __(){this.constructor=d}for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p]);d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)};!function(Virtex){var FileType=function(_super){function FileType(){_super.apply(this,arguments)}return __extends(FileType,_super),FileType.GLTF=new FileType("model/gltf+json"),FileType.THREEJS=new FileType("application/vnd.threejs+json"),FileType}(Virtex.StringValue);Virtex.FileType=FileType}(Virtex||(Virtex={}));var Virtex,__extends=this&&this.__extends||function(d,b){function __(){this.constructor=d}for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p]);d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)},requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){window.setTimeout(callback,5)}}();!function(Virtex){var Viewport=function(_super){function Viewport(options){_super.call(this,options),this._viewportCenter=new THREE.Vector2,this._isFullscreen=!1,this._isMouseDown=!1,this._isVRMode=!1,this._mousePos=new THREE.Vector2,this._mousePosOnMouseDown=new THREE.Vector2,this._pinchStart=new THREE.Vector2,this._targetRotationOnMouseDown=new THREE.Vector2,this._targetRotation=new THREE.Vector2,this._vrEnabled=!0;var success=this._init();this._resize(),success&&this._tick()}return __extends(Viewport,_super),Viewport.prototype._init=function(){var success=_super.prototype._init.call(this);return success?Detector.webgl?(this._$element.append('<div class="viewport"></div><div class="loading"><div class="bar"></div></div>'),this._$viewport=this._$element.find(".viewport"),this._$loading=this._$element.find(".loading"),this._$loadingBar=this._$loading.find(".bar"),this._$loading.hide(),this._scene=new THREE.Scene,this._objectGroup=new THREE.Object3D,this._scene.add(this._objectGroup),this._createLights(),this._createCamera(),this._createControls(),this._createRenderer(),this._createEventListeners(),this._loadObject(this.options.file),this.options.showStats&&(this._stats=new Stats,this._stats.domElement.style.position="absolute",this._stats.domElement.style.top="0px",this._$viewport.append(this._stats.domElement)),!0):(Detector.addGetWebGLMessage(),this._$oldie=$("#oldie"),this._$oldie.appendTo(this._$element),!1):(console.error("Virtex failed to initialise"),!1)},Viewport.prototype._getDefaultOptions=function(){return{ambientLightColor:13684944,ambientLightIntensity:1,cameraZ:4.5,directionalLight1Color:16777215,directionalLight1Intensity:.75,directionalLight2Color:10584,directionalLight2Intensity:.5,doubleSided:!0,fadeSpeed:1750,far:1e4,file:null,fitFovToObject:!0,fov:45,fullscreenEnabled:!0,maxZoom:10,minZoom:2,near:.05,shading:THREE.SmoothShading,showStats:!1,type:Virtex.FileType.THREEJS,vrBackgroundColor:0,zoomSpeed:1}},Viewport.prototype._getVRDisplay=function(){return new Promise(function(resolve,reject){navigator.getVRDisplays().then(function(devices){for(var i=0;i<devices.length;i++)if(devices[i]instanceof VRDisplay){resolve(devices[i]);break}resolve(null)},function(){resolve(null)})})},Viewport.prototype._createLights=function(){this._lightGroup=new THREE.Object3D,this._scene.add(this._lightGroup);var light1=new THREE.DirectionalLight(this.options.directionalLight1Color,this.options.directionalLight1Intensity);light1.position.set(1,1,1),this._lightGroup.add(light1);var light2=new THREE.DirectionalLight(this.options.directionalLight2Color,this.options.directionalLight2Intensity);light2.position.set(-1,-1,-1),this._lightGroup.add(light2);var ambientLight=new THREE.AmbientLight(this.options.ambientLightColor);this._lightGroup.add(ambientLight)},Viewport.prototype._createCamera=function(){this._camera=new THREE.PerspectiveCamera(this._getFov(),this._getAspectRatio(),this.options.near,this.options.far);var cameraZ=this._getCameraZ();console.log(cameraZ),this._camera.position.z=this._targetZoom=cameraZ},Viewport.prototype._createRenderer=function(){this._renderer=new THREE.WebGLRenderer({antialias:!0,alpha:!0}),this._isVRMode?(this._renderer.setClearColor(this.options.vrBackgroundColor),this._vrEffect=new THREE.VREffect(this._renderer),this._vrEffect.setSize(this._$viewport.width(),this._$viewport.height())):(this._renderer.setClearColor(this.options.vrBackgroundColor,0),this._renderer.setSize(this._$viewport.width(),this._$viewport.height())),this._$viewport.empty().append(this._renderer.domElement)},Viewport.prototype._createControls=function(){this._isVRMode&&(this._vrControls=new THREE.VRControls(this._camera))},Viewport.prototype._createEventListeners=function(){var _this=this;this.options.fullscreenEnabled&&$(document).on("webkitfullscreenchange mozfullscreenchange fullscreenchange",function(e){_this._fullscreenChanged()}),this._$element.on("mousedown",function(e){_this._onMouseDown(e.originalEvent)}),this._$element.on("mousemove",function(e){_this._onMouseMove(e.originalEvent)}),this._$element.on("mouseup",function(e){_this._onMouseUp(e.originalEvent)}),this._$element.on("mouseout",function(e){_this._onMouseOut(e.originalEvent)}),this._$element.on("mousewheel",function(e){_this._onMouseWheel(e.originalEvent)}),this._$element.on("DOMMouseScroll",function(e){_this._onMouseWheel(e.originalEvent)}),this._$element.on("touchstart",function(e){_this._onTouchStart(e.originalEvent)}),this._$element.on("touchmove",function(e){_this._onTouchMove(e.originalEvent)}),this._$element.on("touchend",function(e){_this._onTouchEnd(e.originalEvent)}),window.addEventListener("resize",function(){return _this._resize()},!1)},Viewport.prototype._loadObject=function(object){var _this=this;this._$loading.show();var loader;loader=this._isGLTF()?new THREE.GLTFLoader:new THREE.ObjectLoader,loader.setCrossOrigin("anonymous"),loader.load(object,function(obj){if(_this._isGLTF()){if(_this._objectGroup.add(obj.scene),obj.animations)for(var animations=obj.animations,i=0,l=animations.length;i<l;i++){var animation=animations[i];animation.loop=!0,animation.play()}_this._scene=obj.scene,obj.cameras&&obj.cameras.length&&(_this._camera=obj.cameras[0])}else _this._objectGroup.add(obj),_this._createCamera();_this._$loading.fadeOut(_this.options.fadeSpeed),_this._emit(Virtex.Events.LOADED,obj)},function(e){e.lengthComputable&&_this._loadProgress(e.loaded/e.total)},function(e){console.error(e)})},Viewport.prototype._getBoundingBox=function(){return(new THREE.Box3).setFromObject(this._objectGroup)},Viewport.prototype._getBoundingWidth=function(){return this._getBoundingBox().getSize().x},Viewport.prototype._getBoundingHeight=function(){return this._getBoundingBox().getSize().y},Viewport.prototype._getDistanceToObject=function(){return this._camera.position.distanceTo(this._objectGroup.position)},Viewport.prototype._getCameraZ=function(){return this._getBoundingWidth()*this.options.cameraZ},Viewport.prototype._getFov=function(){if(this.options.fitFovToObject&&this._camera){var width=this._getBoundingWidth(),height=this._getBoundingHeight(),dist=this._getCameraZ()-width,fov=2*Math.atan(height/(2*dist))*(180/Math.PI);return fov}return this.options.fov},Viewport.prototype._isGLTF=function(){return this.options.type.toString()===Virtex.FileType.GLTF.toString()},Viewport.prototype._isThreeJs=function(){return this.options.type.toString()===Virtex.FileType.THREEJS.toString()},Viewport.prototype._loadProgress=function(progress){var fullWidth=this._$loading.width(),width=Math.floor(fullWidth*progress);this._$loadingBar.width(width)},Viewport.prototype._fullscreenChanged=function(){this._isFullscreen?(this.exitFullscreen(),this._$element.width(this._lastWidth),this._$element.height(this._lastHeight)):(this._lastWidth=this._getWidth(),this._lastHeight=this._getHeight()),this._isFullscreen=!this._isFullscreen,this._resize()},Viewport.prototype._onMouseDown=function(event){event.preventDefault(),this._isMouseDown=!0,this._mousePosOnMouseDown.x=event.clientX-this._viewportCenter.x,this._targetRotationOnMouseDown.x=this._targetRotation.x,this._mousePosOnMouseDown.y=event.clientY-this._viewportCenter.y,this._targetRotationOnMouseDown.y=this._targetRotation.y},Viewport.prototype._onMouseMove=function(event){this._mousePos.x=event.clientX-this._viewportCenter.x,this._mousePos.y=event.clientY-this._viewportCenter.y,this._isMouseDown&&(this._targetRotation.y=this._targetRotationOnMouseDown.y+.02*(this._mousePos.y-this._mousePosOnMouseDown.y),this._targetRotation.x=this._targetRotationOnMouseDown.x+.02*(this._mousePos.x-this._mousePosOnMouseDown.x))},Viewport.prototype._onMouseUp=function(event){this._isMouseDown=!1},Viewport.prototype._onMouseOut=function(event){this._isMouseDown=!1},Viewport.prototype._onMouseWheel=function(event){event.preventDefault(),event.stopPropagation();var delta=0;void 0!==event.wheelDelta?delta=event.wheelDelta:void 0!==event.detail&&(delta=-event.detail),delta>0?this.zoomIn():delta<0&&this.zoomOut()},Viewport.prototype._onTouchStart=function(event){var touches=event.touches;1===touches.length&&(this._isMouseDown=!0,event.preventDefault(),this._mousePosOnMouseDown.x=touches[0].pageX-this._viewportCenter.x,this._targetRotationOnMouseDown.x=this._targetRotation.x,this._mousePosOnMouseDown.y=touches[0].pageY-this._viewportCenter.y,this._targetRotationOnMouseDown.y=this._targetRotation.y)},Viewport.prototype._onTouchMove=function(event){event.preventDefault(),event.stopPropagation();var touches=event.touches;switch(touches.length){case 1:event.preventDefault(),this._mousePos.x=touches[0].pageX-this._viewportCenter.x,this._targetRotation.x=this._targetRotationOnMouseDown.x+.05*(this._mousePos.x-this._mousePosOnMouseDown.x),this._mousePos.y=touches[0].pageY-this._viewportCenter.y,this._targetRotation.y=this._targetRotationOnMouseDown.y+.05*(this._mousePos.y-this._mousePosOnMouseDown.y);break;case 2:var dx=touches[0].pageX-touches[1].pageX,dy=touches[0].pageY-touches[1].pageY,distance=Math.sqrt(dx*dx+dy*dy),pinchEnd=new THREE.Vector2(0,distance),pinchDelta=new THREE.Vector2;pinchDelta.subVectors(pinchEnd,this._pinchStart),pinchDelta.y>0?this.zoomIn():pinchDelta.y<0&&this.zoomOut(),this._pinchStart.copy(pinchEnd);break;case 3:}},Viewport.prototype._onTouchEnd=function(event){this._isMouseDown=!1},Viewport.prototype._tick=function(){var _this=this;requestAnimFrame(function(){return _this._tick()}),this._update(),this._draw(),this.options.showStats&&this._stats.update()},Viewport.prototype.rotateY=function(radians){var rotation=this._objectGroup.rotation.y+radians;this._objectGroup.rotation.y=rotation},Viewport.prototype._update=function(){if(this._isGLTF()&&(THREE.GLTFLoader.Animations.update(),THREE.GLTFLoader.Shaders.update(this._scene,this._camera)),this._isVRMode)this._vrControls.update();else{this.rotateY(.1*(this._targetRotation.x-this._objectGroup.rotation.y));var finalRotationY=this._targetRotation.y-this._objectGroup.rotation.x;this._objectGroup.rotation.x<=1&&this._objectGroup.rotation.x>=-1&&(this._objectGroup.rotation.x+=.1*finalRotationY),this._objectGroup.rotation.x>1?this._objectGroup.rotation.x=1:this._objectGroup.rotation.x<-1&&(this._objectGroup.rotation.x=-1);var zoomDelta=.1*(this._targetZoom-this._camera.position.z);this._camera.position.z+=zoomDelta}},Viewport.prototype._draw=function(){this._isVRMode?this._vrEffect.render(this._scene,this._camera):this._renderer.render(this._scene,this._camera)},Viewport.prototype._getWidth=function(){return this._isFullscreen?window.innerWidth:this._$element.width()},Viewport.prototype._getHeight=function(){return this._isFullscreen?window.innerHeight:this._$element.height()},Viewport.prototype._getZoomSpeed=function(){return this._getBoundingWidth()*this.options.zoomSpeed},Viewport.prototype._getMaxZoom=function(){return this._getBoundingWidth()*this.options.maxZoom},Viewport.prototype._getMinZoom=function(){return this._getBoundingWidth()*this.options.minZoom},Viewport.prototype.zoomIn=function(){var targetZoom=this._camera.position.z-this._getZoomSpeed();targetZoom>this._getMinZoom()?this._targetZoom=targetZoom:this._targetZoom=this._getMinZoom()},Viewport.prototype.zoomOut=function(){var targetZoom=this._camera.position.z+this._getZoomSpeed();targetZoom<this._getMaxZoom()?this._targetZoom=targetZoom:this._targetZoom=this._getMaxZoom()},Viewport.prototype.enterVR=function(){var _this=this;this._vrEnabled&&(this._isVRMode=!0,this._prevCameraPosition=this._camera.position.clone(),this._prevCameraRotation=this._camera.rotation.clone(),this._createControls(),this._createRenderer(),this._getVRDisplay().then(function(display){display&&(_this._vrEffect.setVRDisplay(display),_this._vrControls.setVRDisplay(display),_this._vrEffect.setFullScreen(!0))}))},Viewport.prototype.exitVR=function(){this._vrEnabled&&(this._isVRMode=!1,this._camera.position.copy(this._prevCameraPosition),this._camera.rotation.copy(this._prevCameraRotation),this._createRenderer())},Viewport.prototype.toggleVR=function(){this._vrEnabled&&(this._isVRMode?this.exitVR():this.enterVR())},Viewport.prototype.enterFullscreen=function(){if(this.options.fullscreenEnabled){var elem=this._$element[0],requestFullScreen=this._getRequestFullScreen(elem);requestFullScreen&&requestFullScreen.call(elem)}},Viewport.prototype.exitFullscreen=function(){var exitFullScreen=this._getExitFullScreen();exitFullScreen&&exitFullScreen.call(document)},Viewport.prototype._getRequestFullScreen=function(elem){return elem.requestFullscreen?elem.requestFullscreen:elem.msRequestFullscreen?elem.msRequestFullscreen:elem.mozRequestFullScreen?elem.mozRequestFullScreen:!!elem.webkitRequestFullscreen&&elem.webkitRequestFullscreen},Viewport.prototype._getExitFullScreen=function(){return document.exitFullscreen?document.exitFullscreen:document.msExitFullscreen?document.msExitFullscreen:document.mozCancelFullScreen?document.mozCancelFullScreen:!!document.webkitExitFullscreen&&document.webkitExitFullscreen},Viewport.prototype._getAspectRatio=function(){return this._$viewport.width()/this._$viewport.height()},Viewport.prototype._resize=function(){this._$element&&this._$viewport?(this._$element.width(this._getWidth()),this._$element.height(this._getHeight()),this._$viewport.width(this._getWidth()),this._$viewport.height(this._getHeight()),this._viewportCenter.x=this._$viewport.width()/2,this._viewportCenter.y=this._$viewport.height()/2,this._camera.aspect=this._getAspectRatio(),this._camera.updateProjectionMatrix(),this._isVRMode?this._vrEffect.setSize(this._$viewport.width(),this._$viewport.height()):this._renderer.setSize(this._$viewport.width(),this._$viewport.height()),this._$loading.css({left:this._viewportCenter.x-this._$loading.width()/2,top:this._viewportCenter.y-this._$loading.height()/2})):this._$oldie&&this._$oldie.css({left:this._$element.width()/2-this._$oldie.outerWidth()/2,top:this._$element.height()/2-this._$oldie.outerHeight()/2})},Viewport}(_Components.BaseComponent);Virtex.Viewport=Viewport}(Virtex||(Virtex={}));var Virtex;!function(Virtex){var Events=function(){function Events(){}return Events.LOADED="loaded",Events}();Virtex.Events=Events}(Virtex||(Virtex={})),function(w){w.Virtex||(w.Virtex=Virtex)}(window)},{}]},{},[1])(1)});