(this.webpackJsonpplusmore=this.webpackJsonpplusmore||[]).push([[2],{247:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!==typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(1)),o=r(39),u=r(125);function a(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=d(e);if(t){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return y(this,r)}}function y(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v="https://connect.facebook.net/en_US/sdk.js",m="fbAsyncInit",g="facebook-player-",P=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(i,e);var t,r,u,a=p(i);function i(){var e;c(this,i);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return h(b(e=a.call.apply(a,[this].concat(r))),"callPlayer",o.callPlayer),h(b(e),"playerID",e.props.config.playerId||"".concat(g).concat((0,o.randomString)())),h(b(e),"mute",(function(){e.callPlayer("mute")})),h(b(e),"unmute",(function(){e.callPlayer("unmute")})),e}return t=i,(r=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e,t){var r=this;t?(0,o.getSDK)(v,"FB",m).then((function(e){return e.XFBML.parse()})):(0,o.getSDK)(v,"FB",m).then((function(e){e.init({appId:r.props.config.appId,xfbml:!0,version:r.props.config.version}),e.Event.subscribe("xfbml.render",(function(e){r.props.onLoaded()})),e.Event.subscribe("xfbml.ready",(function(e){"video"===e.type&&e.id===r.playerID&&(r.player=e.instance,r.player.subscribe("startedPlaying",r.props.onPlay),r.player.subscribe("paused",r.props.onPause),r.player.subscribe("finishedPlaying",r.props.onEnded),r.player.subscribe("startedBuffering",r.props.onBuffer),r.player.subscribe("finishedBuffering",r.props.onBufferEnd),r.player.subscribe("error",r.props.onError),r.props.muted||r.callPlayer("unmute"),r.props.onReady(),document.getElementById(r.playerID).querySelector("iframe").style.visibility="visible")}))}))}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){this.callPlayer("seek",e)}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",e)}},{key:"getDuration",value:function(){return this.callPlayer("getDuration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("getCurrentPosition")}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){var e=this.props.config.attributes;return n.default.createElement("div",l({style:{width:"100%",height:"100%"},id:this.playerID,className:"fb-video","data-href":this.props.url,"data-autoplay":this.props.playing?"true":"false","data-allowfullscreen":"true","data-controls":this.props.controls?"true":"false"},e))}}])&&s(t.prototype,r),u&&s(t,u),i}(n.Component);t.default=P,h(P,"displayName","Facebook"),h(P,"canPlay",u.canPlay.facebook),h(P,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerFacebook.f0ceb6de.chunk.js.map