window.yoast=window.yoast||{},window.yoast.searchMetadataPreviews=function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=402)}({0:function(e,t){e.exports=window.yoast.propTypes},1:function(e,t){e.exports=window.wp.element},10:function(e,t){e.exports=window.yoast.helpers},116:function(e,t,n){"use strict";t.__esModule=!0,t.default=t.EXITING=t.ENTERED=t.ENTERING=t.EXITED=t.UNMOUNTED=void 0;var i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};i.get||i.set?Object.defineProperty(t,n,i):t[n]=e[n]}return t.default=e,t}(n(0)),o=a(n(3)),r=a(n(34)),s=n(72);function a(e){return e&&e.__esModule?e:{default:e}}n(117),t.UNMOUNTED="unmounted",t.EXITED="exited",t.ENTERING="entering",t.ENTERED="entered",t.EXITING="exiting";var l=function(e){var t,n;function i(t,n){var i;i=e.call(this,t,n)||this;var o,r=n.transitionGroup,s=r&&!r.isMounting?t.enter:t.appear;return i.appearStatus=null,t.in?s?(o="exited",i.appearStatus="entering"):o="entered":o=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",i.state={status:o},i.nextCallback=null,i}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=i.prototype;return s.getChildContext=function(){return{transitionGroup:null}},i.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null},s.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},s.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},s.componentWillUnmount=function(){this.cancelNextCallback()},s.getTimeouts=function(){var e,t,n,i=this.props.timeout;return e=t=n=i,null!=i&&"number"!=typeof i&&(e=i.exit,t=i.enter,n=void 0!==i.appear?i.appear:t),{exit:e,enter:t,appear:n}},s.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=r.default.findDOMNode(this);"entering"===t?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},s.performEnter=function(e,t){var n=this,i=this.props.enter,o=this.context.transitionGroup?this.context.transitionGroup.isMounting:t,r=this.getTimeouts(),s=o?r.appear:r.enter;t||i?(this.props.onEnter(e,o),this.safeSetState({status:"entering"},(function(){n.props.onEntering(e,o),n.onTransitionEnd(e,s,(function(){n.safeSetState({status:"entered"},(function(){n.props.onEntered(e,o)}))}))}))):this.safeSetState({status:"entered"},(function(){n.props.onEntered(e)}))},s.performExit=function(e){var t=this,n=this.props.exit,i=this.getTimeouts();n?(this.props.onExit(e),this.safeSetState({status:"exiting"},(function(){t.props.onExiting(e),t.onTransitionEnd(e,i.exit,(function(){t.safeSetState({status:"exited"},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:"exited"},(function(){t.props.onExited(e)}))},s.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},s.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},s.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(i){n&&(n=!1,t.nextCallback=null,e(i))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},s.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var i=null==t&&!this.props.addEndListener;e&&!i?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},s.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,i=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["children"]);if(delete i.in,delete i.mountOnEnter,delete i.unmountOnExit,delete i.appear,delete i.enter,delete i.exit,delete i.timeout,delete i.addEndListener,delete i.onEnter,delete i.onEntering,delete i.onEntered,delete i.onExit,delete i.onExiting,delete i.onExited,"function"==typeof n)return n(e,i);var r=o.default.Children.only(n);return o.default.cloneElement(r,i)},i}(o.default.Component);function c(){}l.contextTypes={transitionGroup:i.object},l.childContextTypes={transitionGroup:function(){}},l.propTypes={},l.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:c,onEntering:c,onEntered:c,onExit:c,onExiting:c,onExited:c},l.UNMOUNTED=0,l.EXITED=1,l.ENTERING=2,l.ENTERED=3,l.EXITING=4;var p=(0,s.polyfill)(l);t.default=p},117:function(e,t,n){"use strict";var i;t.__esModule=!0,t.classNamesShape=t.timeoutsShape=void 0,(i=n(0))&&i.__esModule,t.timeoutsShape=null,t.classNamesShape=null},118:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var i=a(n(0)),o=a(n(3)),r=n(72),s=n(220);function a(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},d=function(e){var t,n;function i(t,n){var i,o=(i=e.call(this,t,n)||this).handleExited.bind(c(c(i)));return i.state={handleExited:o,firstRender:!0},i}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r=i.prototype;return r.getChildContext=function(){return{transitionGroup:{isMounting:!this.appeared}}},r.componentDidMount=function(){this.appeared=!0,this.mounted=!0},r.componentWillUnmount=function(){this.mounted=!1},i.getDerivedStateFromProps=function(e,t){var n=t.children,i=t.handleExited;return{children:t.firstRender?(0,s.getInitialChildMapping)(e,i):(0,s.getNextChildMapping)(e,n,i),firstRender:!1}},r.handleExited=function(e,t){var n=(0,s.getChildMapping)(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=l({},t.children);return delete n[e.key],{children:n}})))},r.render=function(){var e=this.props,t=e.component,n=e.childFactory,i=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["component","childFactory"]),r=p(this.state.children).map(n);return delete i.appear,delete i.enter,delete i.exit,null===t?r:o.default.createElement(t,i,r)},i}(o.default.Component);d.childContextTypes={transitionGroup:i.default.object.isRequired},d.propTypes={},d.defaultProps={component:"div",childFactory:function(e){return e}};var u=(0,r.polyfill)(d);t.default=u,e.exports=t.default},12:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},16:function(e,t){e.exports=window.yoast.replacementVariableEditor},186:function(e,t,n){"use strict";var i=a(n(214)),o=a(n(219)),r=a(n(118)),s=a(n(116));function a(e){return e&&e.__esModule?e:{default:e}}e.exports={Transition:s.default,TransitionGroup:r.default,ReplaceTransition:o.default,CSSTransition:i.default}},187:function(e,t){e.exports=window.lodash.truncate},2:function(e,t){e.exports=window.lodash},214:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0,function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};i.get||i.set?Object.defineProperty(t,n,i):t[n]=e[n]}t.default=e}(n(0));var i=a(n(215)),o=a(n(218)),r=a(n(3)),s=a(n(116));function a(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}n(117);var c=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return(0,i.default)(e,t)}))},p=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return(0,o.default)(e,t)}))},d=function(e){var t,n;function i(){for(var t,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))||this).onEnter=function(e,n){var i=t.getClassNames(n?"appear":"enter").className;t.removeClasses(e,"exit"),c(e,i),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var i=t.getClassNames(n?"appear":"enter").activeClassName;t.reflowAndAddClass(e,i),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var i=t.getClassNames("appear").doneClassName,o=t.getClassNames("enter").doneClassName,r=n?i+" "+o:o;t.removeClasses(e,n?"appear":"enter"),c(e,r),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.getClassNames("exit").className;t.removeClasses(e,"appear"),t.removeClasses(e,"enter"),c(e,n),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.getClassNames("exit").activeClassName;t.reflowAndAddClass(e,n),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.getClassNames("exit").doneClassName;t.removeClasses(e,"exit"),c(e,n),t.props.onExited&&t.props.onExited(e)},t.getClassNames=function(e){var n=t.props.classNames,i="string"==typeof n,o=i?(i&&n?n+"-":"")+e:n[e];return{className:o,activeClassName:i?o+"-active":n[e+"Active"],doneClassName:i?o+"-done":n[e+"Done"]}},t}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=i.prototype;return o.removeClasses=function(e,t){var n=this.getClassNames(t),i=n.className,o=n.activeClassName,r=n.doneClassName;i&&p(e,i),o&&p(e,o),r&&p(e,r)},o.reflowAndAddClass=function(e,t){t&&(e&&e.scrollTop,c(e,t))},o.render=function(){var e=l({},this.props);return delete e.classNames,r.default.createElement(s.default,l({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},i}(r.default.Component);d.defaultProps={classNames:""},d.propTypes={};var u=d;t.default=u,e.exports=t.default},215:function(e,t,n){"use strict";var i=n(216);t.__esModule=!0,t.default=function(e,t){e.classList?e.classList.add(t):(0,o.default)(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))};var o=i(n(217));e.exports=t.default},216:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},217:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")},e.exports=t.default},218:function(e,t,n){"use strict";function i(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}e.exports=function(e,t){e.classList?e.classList.remove(t):"string"==typeof e.className?e.className=i(e.className,t):e.setAttribute("class",i(e.className&&e.className.baseVal||"",t))}},219:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0,s(n(0));var i=s(n(3)),o=n(34),r=s(n(118));function s(e){return e&&e.__esModule?e:{default:e}}var a=function(e){var t,n;function s(){for(var t,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))||this).handleEnter=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return t.handleLifecycle("onEnter",0,n)},t.handleEntering=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return t.handleLifecycle("onEntering",0,n)},t.handleEntered=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return t.handleLifecycle("onEntered",0,n)},t.handleExit=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return t.handleLifecycle("onExit",1,n)},t.handleExiting=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return t.handleLifecycle("onExiting",1,n)},t.handleExited=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return t.handleLifecycle("onExited",1,n)},t}n=e,(t=s).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=s.prototype;return a.handleLifecycle=function(e,t,n){var r,s=this.props.children,a=i.default.Children.toArray(s)[t];a.props[e]&&(r=a.props)[e].apply(r,n),this.props[e]&&this.props[e]((0,o.findDOMNode)(this))},a.render=function(){var e=this.props,t=e.children,n=e.in,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["children","in"]),s=i.default.Children.toArray(t),a=s[0],l=s[1];return delete o.onEnter,delete o.onEntering,delete o.onEntered,delete o.onExit,delete o.onExiting,delete o.onExited,i.default.createElement(r.default,o,n?i.default.cloneElement(a,{key:"first",onEnter:this.handleEnter,onEntering:this.handleEntering,onEntered:this.handleEntered}):i.default.cloneElement(l,{key:"second",onEnter:this.handleExit,onEntering:this.handleExiting,onEntered:this.handleExited}))},s}(i.default.Component);a.propTypes={};var l=a;t.default=l,e.exports=t.default},220:function(e,t,n){"use strict";t.__esModule=!0,t.getChildMapping=o,t.mergeChildMappings=r,t.getInitialChildMapping=function(e,t){return o(e.children,(function(n){return(0,i.cloneElement)(n,{onExited:t.bind(null,n),in:!0,appear:s(n,"appear",e),enter:s(n,"enter",e),exit:s(n,"exit",e)})}))},t.getNextChildMapping=function(e,t,n){var a=o(e.children),l=r(t,a);return Object.keys(l).forEach((function(o){var r=l[o];if((0,i.isValidElement)(r)){var c=o in t,p=o in a,d=t[o],u=(0,i.isValidElement)(d)&&!d.props.in;!p||c&&!u?p||!c||u?p&&c&&(0,i.isValidElement)(d)&&(l[o]=(0,i.cloneElement)(r,{onExited:n.bind(null,r),in:d.props.in,exit:s(r,"exit",e),enter:s(r,"enter",e)})):l[o]=(0,i.cloneElement)(r,{in:!1}):l[o]=(0,i.cloneElement)(r,{onExited:n.bind(null,r),in:!0,exit:s(r,"exit",e),enter:s(r,"enter",e)})}})),l};var i=n(3);function o(e,t){var n=Object.create(null);return e&&i.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,i.isValidElement)(e)?t(e):e}(e)})),n}function r(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var i,o=Object.create(null),r=[];for(var s in e)s in t?r.length&&(o[s]=r,r=[]):r.push(s);var a={};for(var l in t){if(o[l])for(i=0;i<o[l].length;i++){var c=o[l][i];a[o[l][i]]=n(c)}a[l]=n(l)}for(i=0;i<r.length;i++)a[r[i]]=n(r[i]);return a}function s(e,t,n){return null!=n[t]?n[t]:e.props[t]}},26:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=a(n(3)),r=a(n(53)),s=a(n(56));function a(e){return e&&e.__esModule?e:{default:e}}var l=void 0;t.default=function(e){var t=e.mixedString,n=e.components,a=e.throwErrors;if(l=t,!n)return t;if("object"!==(void 0===n?"undefined":i(n))){if(a)throw new Error("Interpolation Error: unable to process `"+t+"` because components is not an object");return t}var c=(0,s.default)(t);try{return function e(t,n){var s,a,c,p,d,u,h,g,f=[],m={};for(u=0;u<t.length;u++)if("string"!==(d=t[u]).type){if(!n.hasOwnProperty(d.value)||void 0===n[d.value])throw new Error("Invalid interpolation, missing component node: `"+d.value+"`");if("object"!==i(n[d.value]))throw new Error("Invalid interpolation, component node must be a ReactElement or null: `"+d.value+"`","\n> "+l);if("componentClose"===d.type)throw new Error("Missing opening component token: `"+d.value+"`");if("componentOpen"===d.type){s=n[d.value],c=u;break}f.push(n[d.value])}else f.push(d.value);return s&&(p=function(e,t){var n,i,o=t[e],r=0;for(i=e+1;i<t.length;i++)if((n=t[i]).value===o.value){if("componentOpen"===n.type){r++;continue}if("componentClose"===n.type){if(0===r)return i;r--}}throw new Error("Missing closing component token `"+o.value+"`")}(c,t),h=e(t.slice(c+1,p),n),a=o.default.cloneElement(s,{},h),f.push(a),p<t.length-1&&(g=e(t.slice(p+1),n),f=f.concat(g))),1===f.length?f[0]:(f.forEach((function(e,t){e&&(m["interpolation-child-"+t]=e)})),(0,r.default)(m))}(c,n)}catch(e){if(a)throw new Error("Interpolation Error: unable to process `"+t+"` because of error `"+e.message+"`");return t}}},3:function(e,t){e.exports=window.React},30:function(e,t){e.exports=window.yoast.analysis},34:function(e,t){e.exports=window.ReactDOM},37:function(e,t,n){"use strict";function i(e){return function(){return e}}var o=function(){};o.thatReturns=i,o.thatReturnsFalse=i(!1),o.thatReturnsTrue=i(!0),o.thatReturnsNull=i(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},4:function(e,t){e.exports=window.wp.i18n},402:function(e,t,n){"use strict";n.r(t),n.d(t,"FixedWidthContainer",(function(){return b})),n.d(t,"HelpTextWrapper",(function(){return P})),n.d(t,"SnippetPreview",(function(){return Ce})),n.d(t,"ReplacementVariableEditor",(function(){return Re.ReplacementVariableEditor})),n.d(t,"replacementVariablesShape",(function(){return Re.replacementVariablesShape})),n.d(t,"recommendedReplacementVariablesShape",(function(){return Re.recommendedReplacementVariablesShape})),n.d(t,"SettingsSnippetEditor",(function(){return Re.SettingsSnippetEditor})),n.d(t,"SnippetEditor",(function(){return Ge})),n.d(t,"lengthProgressShape",(function(){return Te})),n.d(t,"getDescriptionProgress",(function(){return Me})),n.d(t,"getTitleProgress",(function(){return _e}));var i=n(1),o=n(3),r=n.n(o),s=n(5),a=n.n(s),l=n(0),c=n.n(l),p=n(65),d=n.n(p),u=n(4);const h=a.a.div`
	overflow: auto;
	width: ${e=>e.widthValue}px;
	padding: 0 ${e=>e.paddingValue}px;
	max-width: 100%;
	box-sizing: border-box;
`,g=a.a.div`
	width: ${e=>e.widthValue}px;
`,f=a.a.div`
	text-align: center;
	margin: 1em 0 5px;
`,m=a.a.div`
	display: inline-block;
	box-sizing: border-box;

	&:before{
		display: inline-block;
		margin-right: 10px;
		font-size: 20px;
		line-height: inherit;
		vertical-align: text-top;
		content: "\\21c4";
		box-sizing: border-box;
	}
`;class b extends o.Component{constructor(e){super(e),this.state={showScrollHint:!1},this.setContainerRef=this.setContainerRef.bind(this),this.determineSize=d()(this.determineSize.bind(this),100)}setContainerRef(e){if(!e)return null;this._container=e,this.determineSize(),window.addEventListener("resize",this.determineSize)}determineSize(){const e=this._container.offsetWidth;this.setState({showScrollHint:e<this.props.width})}componentWillUnmount(){window.removeEventListener("resize",this.determineSize)}render(){const{width:e,padding:t,children:n,className:o,id:s}=this.props,a=e-2*t;return Object(i.createElement)(r.a.Fragment,null,Object(i.createElement)(h,{id:s,className:o,widthValue:e,paddingValue:t,ref:this.setContainerRef},Object(i.createElement)(g,{widthValue:a},n)),this.state.showScrollHint&&Object(i.createElement)(f,null,Object(i.createElement)(m,null,Object(u.__)("Scroll to see the preview content.","wordpress-seo"))))}}b.propTypes={id:c.a.string,width:c.a.number.isRequired,padding:c.a.number,children:c.a.node.isRequired,className:c.a.string},b.defaultProps={id:"",padding:0,className:""};var v=n(51),x=n.n(v),E=n(9),y=n(10),w=n(6),O=n(186);const j=a.a.div`
	& > :first-child {
		overflow: hidden;
		transition: height ${e=>e.duration+"ms"} ease-out;
	}
`;class S extends r.a.Component{resetHeight(e){e.style.height="0"}setHeight(e){const t=function(e){return Math.max(e.clientHeight,e.offsetHeight,e.scrollHeight)}(e);e.style.height=t+"px"}removeHeight(e){e.style.height=null}render(){return Object(i.createElement)(j,{duration:this.props.duration},Object(i.createElement)(O.CSSTransition,{in:this.props.isOpen,timeout:this.props.duration,classNames:"slide",unmountOnExit:!0,onEnter:this.resetHeight,onEntering:this.setHeight,onEntered:this.removeHeight,onExit:this.setHeight,onExiting:this.resetHeight},this.props.children))}}S.propTypes={isOpen:c.a.bool.isRequired,duration:c.a.number,children:c.a.node},S.defaultProps={duration:300,children:[]};const C=a.a.div`
	max-width: 600px;
	font-weight: normal;
	// Don't apply a bottom margin to avoid "jumpiness".
	margin: ${Object(y.getDirectionalStyle)("0 20px 0 25px","0 20px 0 15px")};
`,R=a.a.div`
	max-width: ${e=>e.panelMaxWidth};
`,_=a()(E.Button)`
	min-width: 14px;
	min-height: 14px;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	border: 1px solid transparent;
	box-shadow: none;
	display: block;
	margin: -44px -10px 10px 0;
	background-color: transparent;
	float: ${Object(y.getDirectionalStyle)("right","left")};
	padding: ${Object(y.getDirectionalStyle)("3px 0 0 6px","3px 0 0 5px")};

	&:hover {
		color: ${w.colors.$color_blue};
	}
	&:focus {
		border: 1px solid ${w.colors.$color_blue};
		outline: none;
		box-shadow: 0 0 3px ${Object(w.rgba)(w.colors.$color_blue_dark,.8)};

		svg {
			fill: ${w.colors.$color_blue};
			color: ${w.colors.$color_blue};
		}
	}
	&:active {
		box-shadow: none;
	}
`,M=a()(E.SvgIcon)`
	&:hover {
		fill: ${w.colors.$color_blue};
	}
`;class T extends r.a.Component{constructor(e){super(e),this.state={isExpanded:!1},this.uniqueId=x()("yoast-help-"),this.onButtonClick=this.onButtonClick.bind(this)}onButtonClick(){this.setState(e=>({isExpanded:!e.isExpanded}))}render(){const e=this.uniqueId+"-panel",{isExpanded:t}=this.state;return Object(i.createElement)(C,{className:this.props.className},Object(i.createElement)(_,{className:this.props.className+"__button",onClick:this.onButtonClick,"aria-expanded":t,"aria-controls":t?e:null,"aria-label":this.props.helpTextButtonLabel},Object(i.createElement)(M,{size:"16px",color:w.colors.$color_grey_text,icon:"question-circle"})),Object(i.createElement)(S,{isOpen:t},Object(i.createElement)(R,{id:e,className:this.props.className+"__panel",panelMaxWidth:this.props.panelMaxWidth},Object(i.createElement)(E.HelpText,null,this.props.helpText))))}}T.propTypes={className:c.a.string,helpTextButtonLabel:c.a.string.isRequired,panelMaxWidth:c.a.string,helpText:c.a.oneOfType([c.a.string,c.a.array])},T.defaultProps={className:"yoast-help",panelMaxWidth:null,helpText:""};var P=T,F=n(12),k=n.n(F),A=n(26),D=n.n(A),N=n(187),I=n.n(N),V=n(30),L=n(2);const U=a.a.span`
	color: #70757a;
	line-height: 1.7;
`;function B(e){const{shoppingData:t}=e,n=Object(u.sprintf)(Object(u.__)("Rating: %s","wordpress-seo"),Object(L.round)(2*t.rating,1)+"/10"),r=Object(u.sprintf)(Object(u.__)("%s reviews","wordpress-seo"),t.reviewCount);
/* Translators: %s expands to the actual rating, e.g. 8/10. */return Object(i.createElement)(U,null,t.reviewCount>0&&Object(i.createElement)(o.Fragment,null,Object(i.createElement)(E.StarRating,{rating:t.rating}),Object(i.createElement)("span",null," ",n," · "),Object(i.createElement)("span",null,r," · ")),t.price&&Object(i.createElement)(o.Fragment,null,Object(i.createElement)("span",{dangerouslySetInnerHTML:{__html:t.price}})),t.availability&&Object(i.createElement)("span",null," · "+Object(L.capitalize)(t.availability)))}var $=B;B.propTypes={shoppingData:c.a.shape({rating:c.a.number,reviewCount:c.a.number,availability:c.a.string,price:c.a.string}).isRequired};const z=a.a.div`
	display: flex;
	margin-top: -16px;
	line-height: 1.6;
`,W=a.a.div`
	flex: 1;
	max-width: 50%;
`,H=a.a.div`
	flex: 1;
	max-width: 25%;
`,q=a.a.div`
	color: #70757a;
`;function G(e){const{shoppingData:t}=e;return Object(i.createElement)(z,null,t.rating>0&&Object(i.createElement)(W,{className:"yoast-shopping-data-preview__column"},Object(i.createElement)("div",{className:"yoast-shopping-data-preview__upper"},Object(u.__)("Rating","wordpress-seo")),Object(i.createElement)(q,{className:"yoast-shopping-data-preview__lower"},Object(i.createElement)("span",null,Object(L.round)(2*t.rating,1),"/10 "),Object(i.createElement)(E.StarRating,{rating:t.rating}),Object(i.createElement)("span",null," (",t.reviewCount,")"))),t.price&&Object(i.createElement)(H,{className:"yoast-shopping-data-preview__column"},Object(i.createElement)("div",{className:"yoast-shopping-data-preview__upper"},Object(u.__)("Price","wordpress-seo")),Object(i.createElement)(q,{className:"yoast-shopping-data-preview__lower",dangerouslySetInnerHTML:{__html:t.price}})),t.availability&&Object(i.createElement)(H,{className:"yoast-shopping-data-preview__column"},Object(i.createElement)("div",{className:"yoast-shopping-data-preview__upper"},Object(u.__)("Availability","wordpress-seo")),Object(i.createElement)(q,{className:"yoast-shopping-data-preview__lower"},Object(L.capitalize)(t.availability))))}var Q=G;G.propTypes={shoppingData:c.a.shape({rating:c.a.number,reviewCount:c.a.number,availability:c.a.string,price:c.a.string}).isRequired};const K=["desktop","mobile"],{transliterate:X,createRegexFromArray:Y,replaceDiacritics:J}=V.languageProcessing,Z=a()(b)`
	background-color: #fff;
	font-family: arial, sans-serif;
	box-sizing: border-box;
`,ee=a.a.div`
	border-bottom: 1px hidden #fff;
	border-radius: 8px;
	box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
	font-family: Arial, Roboto-Regular, HelveticaNeue, sans-serif;
	max-width: ${400}px;
	box-sizing: border-box;
	font-size: 14px;
`,te=a.a.div`
	cursor: pointer;
	position: relative;
`;function ne(e,t,n){return a()(e)`
		&::before {
			display: block;
			position: absolute;
			top: 0;
			${Object(y.getDirectionalStyle)("left","right")}: ${()=>"desktop"===n?"-22px":"-40px"};
			width: 22px;
			height: 22px;
			background-image: url( ${Object(y.getDirectionalStyle)(Object(w.angleRight)(t),Object(w.angleLeft)(t))} );
			background-size: 24px;
			background-repeat: no-repeat;
			background-position: center;
			content: "";
		}
	`}const ie=a.a.div`
	color: ${e=>"desktop"===e.screenMode?"#1a0dab":"#1558d6"};
	text-decoration: none;
	font-size: ${e=>(e.screenMode,"20px")};
	line-height: ${e=>"desktop"===e.screenMode?"1.3":"26px"};
	font-weight: normal;
	margin: 0;
	display: inline-block;
	overflow: hidden;
	max-width: ${600}px;
	vertical-align: top;
	text-overflow: ellipsis;
`,oe=a()(ie)`
	max-width: ${600}px;
	vertical-align: top;
	text-overflow: ellipsis;
`,re=a.a.span`
	display: inline-block;
	max-width: ${e=>"desktop"===e.screenMode?240:100}px;
	overflow: hidden;
	vertical-align: top;

	text-overflow: ellipsis;
	margin-left: 4px;
`,se=a.a.span`
	white-space: nowrap;
`,ae=a.a.span`
	display: inline-block;
	max-height: 52px; // max two lines of text
	padding-top: 1px;
	vertical-align: top;
	overflow: hidden;
	text-overflow: ellipsis;
`,le=a.a.div`
	display: inline-block;
	cursor: pointer;
	position: relative;
	width: calc( 100% + 7px );
	white-space: nowrap;
	font-size: 14px;
	line-height: 16px;
	vertical-align: top;
`;le.displayName="BaseUrl";const ce=a()(le)`
	display: flex;
	align-items: center;
	overflow: hidden;
	justify-content: space-between;
	text-overflow: ellipsis;
	max-width: 100%;
	margin-bottom: 12px;
	padding-top: 1px;
	line-height: 20px;
	vertical-align: bottom;
`;ce.displayName="BaseUrlOverflowContainer";const pe=a.a.span`
	font-size: ${e=>"desktop"===e.screenMode?"14px":"12px"};
	line-height: ${e=>"desktop"===e.screenMode?"1.3":"20px"};
	color: ${e=>"desktop"===e.screenMode?"#4d5156":"#3c4043"};
	flex-grow: 1;
`,de=a.a.span`
	color: ${e=>"desktop"===e.screenMode?"#4d5156":"#70757a"};
`,ue=a.a.div`
width: 28px;
height: 28px;
margin-right: 12px;
border-radius: 50px;
display: flex;
align-items: center;
justify-content: center;
background: #f1f3f4;
min-width: 28px;
`;ce.displayName="SnippetPreview__BaseUrlOverflowContainer";const he=a.a.div`
	color: ${e=>(e.isDescriptionPlaceholder,"#4d5156")};
	cursor: pointer;
	position: relative;
	max-width: ${600}px;
	padding-top: ${e=>"desktop"===e.screenMode?"0":"1px"};
	font-size: 14px;
	line-height: 1.58;
`,ge=a.a.div`
	color: ${"#3c4043"};
	font-size: 14px;
	cursor: pointer;
	position: relative;
	line-height: 1.4;
	max-width: ${600}px;

	/* Clearing pseudo element to contain the floated image. */
	&:after {
		display: table;
		content: "";
		clear: both;
	}
`,fe=a.a.div`
	float: right;
	width: 104px;
	height: 104px;
	margin: 4px 0 4px 16px;
	border-radius: 8px;
	overflow: hidden;
`,me=a.a.img`
	/* Higher specificity is necessary to make sure inherited CSS rules don't alter the image ratio. */
	&&& {
		display: block;
		width: 104px;
		height: 104px;
		object-fit: cover;
	}
`,be=a.a.div`
	padding: 12px 16px;

	&:first-child {
		margin-bottom: -16px;
	}
`,ve=a.a.div`
	line-height: 18x; 
	font-size: 14px; 
	color: black;
	max-width: ${e=>"desktop"===e.screenMode?"100%":"300px"};
	overflow: hidden;
`,xe=a.a.div`
`,Ee=a.a.span`
	display: inline-block;
	height: 18px;
	line-height: 18px;
	padding-left: 8px;
	vertical-align:bottom;
`,ye=a.a.span`
	color: ${e=>"desktop"===e.screenMode?"#777":"#70757a"};
`,we=a.a.img`
	width: 18px;
	height: 18px;
	margin: 0 5px;
	vertical-align: middle;
`,Oe=a.a.div`
	background-size: 100% 100%;
	display: inline-block;
	height: 12px;
	width: 12px;
	margin-bottom: -1px;
	opacity: 0.46;
	margin-right: 6px;
	background-image: url( ${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAABr0lEQVR4AbWWJYCUURhFD04Zi7hrLzgFd4nzV9x6wKHinmYb7g4zq71gIw2LWBnZ3Q8df/fh96Tn/t2HVIw4CVKk+fSFNCkSxInxW1pFkhLmoMRjVvFLmkEX5ocuZuBVPw5jv8hh+iEU5QEmuMK+prz7RN3dPMMEGQYzxpH/lGjzou5jgl7mAvOdZfcbF+jbm3MAbFZ7VX9SJnlL1D8UMyjLe+BrAYDb+jJUr59JrlNWRtcqX9GkrPCR4QBAf4qYJAkQoyQrbKKs8RiaEjEI0GvvQ1mLMC9xaBFFBaZS1TbMSwJSomg39erDF+TxpCCNOXjGQJTCvG6qn4ZPzkcxA61Tjhaf4KMj+6Q3XvW6Lopraa8IozRQxIi0a7NXorULc5JyHX/3F3q+0PsFYytVTaGgjz/AvCyiegE69IUsPxHNBMpa738i6tGWlzkAABjKe/+j9YeRHGVd9oWRnwe2ewDASp/L/UqoPQ5AmFeYZMavBP8dAJz0GWWDHQlzXApMdz4KYUfKICcxkKeOfGmQyrIPcgE9m+g/+kT812/Nr3+0kqzitxQjoKXh6xfor99nlEdFjyvH15gAAAAASUVORK5CYII="} );
`,je=e=>{try{return decodeURI(e)}catch(t){return e}},Se=e=>{let{screenMode:t}=e;return Object(i.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"desktop"===t?"#4d5156":"#70757a",style:{width:"18px"}},Object(i.createElement)("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}))};Se.propTypes={screenMode:c.a.string.isRequired};class Ce extends o.PureComponent{constructor(e){super(e),this.state={title:e.title,description:e.description,isDescriptionPlaceholder:!0},this.setTitleRef=this.setTitleRef.bind(this),this.setDescriptionRef=this.setDescriptionRef.bind(this)}setTitleRef(e){this._titleElement=e}setDescriptionRef(e){this._descriptionElement=e}hasOverflowedContent(e){return Math.abs(e.clientHeight-e.scrollHeight)>=2}fitTitle(){const e=this._titleElement;if(this.hasOverflowedContent(e)){let t=this.state.title;const n=e.clientWidth/3;t.length>n&&(t=t.substring(0,n));const i=this.dropLastWord(t);this.setState({title:i})}}dropLastWord(e){const t=e.split(" ");return t.pop(),t.join(" ")}getTitle(){return this.props.title!==this.state.title?this.state.title+" ...":this.props.title}getDescription(){return this.props.description?I()(this.props.description,{length:156,separator:" ",omission:" ..."}):Object(u.__)("Please provide a meta description by editing the snippet below. If you don’t, Google will try to find a relevant part of your post to show in the search results.","wordpress-seo")}renderDate(){const e="desktop"===this.props.mode?"—":"－";return this.props.date&&Object(i.createElement)(ye,{screenMode:this.props.mode},this.props.date," ",e," ")}addCaretStyles(e,t){const{mode:n,hoveredField:i,activeField:o}=this.props;return o===e?ne(t,w.colors.$color_snippet_active,n):i===e?ne(t,w.colors.$color_snippet_hover,n):t}getBreadcrumbs(e){const{breadcrumbs:t}=this.props;let n;try{n=new URL(e)}catch(t){return{hostname:e,breadcrumbs:""}}const i=je(n.hostname);let o=t||n.pathname.split("/");return o=o.filter(e=>Boolean(e)).map(e=>je(e)),{hostname:i,breadcrumbs:" › "+o.join(" › ")}}renderUrl(){const{url:e,onMouseUp:t,onMouseEnter:n,onMouseLeave:o,mode:s,faviconSrc:a,siteName:l}=this.props,c="mobile"===s,{hostname:p,breadcrumbs:d}=this.getBreadcrumbs(e),h=this.addCaretStyles("url",le);return Object(i.createElement)(r.a.Fragment,null,Object(i.createElement)(E.ScreenReaderText,null,
/* translators: Hidden accessibility text. */
Object(u.__)("Url preview","wordpress-seo")+":"),Object(i.createElement)(h,null,Object(i.createElement)(ce,{onMouseUp:t.bind(null,"url"),onMouseEnter:n.bind(null,"url"),onMouseLeave:o.bind(null),screenMode:s},Object(i.createElement)(ue,null,Object(i.createElement)(we,{src:a||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABs0lEQVR4AWL4//8/RRjO8Iucx+noO0MWUDo16FYABMGP6ZfUcRnWtm27jVPbtm3bttuH2t3eFPcY9pLz7NxiLjCyVd87pKnHyqXyxtCs8APd0rnyxiu4qSeA3QEDrAwBDrT1s1Rc/OrjLZwqVmOSu6+Lamcpp2KKMA9PH1BYXMe1mUP5qotvXTywsOEEYHXxrY+3cqk6TMkYpNr2FeoY3KIr0RPtn9wQ2unlA+GMkRw6+9TFw4YTwDUzx/JVvARj9KaedXRO8P5B1Du2S32smzqUrcKGEyA+uAgQjKX7zf0boWHGfn71jIKj2689gxp7OAGShNcBUmLMPVjZuiKcA2vuWHHDCQxMCz629kXAIU4ApY15QwggAFbfOP9DhgBJ+nWVJ1AZAfICAj1pAlY6hCADZnveQf7bQIwzVONGJonhLIlS9gr5mFg44Xd+4S3XHoGNPdJl1INIwKyEgHckEhgTe1bGiFY9GSFBYUwLh1IkiJUbY407E7syBSFxKTszEoiE/YdrgCEayDmtaJwCI9uu8TKMuZSVfSa4BpGgzvomBR/INhLGzrqDotp01ZR8pn/1L0JN9d9XNyx0AAAAAElFTkSuQmCC",alt:""})),Object(i.createElement)(pe,{screenMode:s},Object(i.createElement)(ve,{screenMode:s},l),Object(i.createElement)(de,{screenMode:s},p),Object(i.createElement)(re,{screenMode:s},d),!c&&Object(i.createElement)(Ee,null,Object(i.createElement)(Se,{screenMode:s}))),c&&Object(i.createElement)(Se,{screenMode:s}))))}componentWillReceiveProps(e){const t={};this.props.title!==e.title&&(t.title=e.title),this.props.description!==e.description&&(t.description=e.description),this.setState(t)}componentDidUpdate(){this.setState({isDescriptionPlaceholder:!this.props.description}),"mobile"===this.props.mode&&(clearTimeout(this.fitTitleTimeout),this.fitTitleTimeout=setTimeout(()=>{this.fitTitle()},10))}componentDidMount(){this.setState({isDescriptionPlaceholder:!this.props.description})}componentWillUnmount(){clearTimeout(this.fitTitleTimeout)}renderDescription(){const{wordsToHighlight:e,locale:t,onMouseUp:n,onMouseLeave:o,onMouseEnter:r,mode:s,mobileImageSrc:a}=this.props,l=this.renderDate(),c={isDescriptionPlaceholder:this.state.isDescriptionPlaceholder,onMouseUp:n.bind(null,"description"),onMouseEnter:r.bind(null,"description"),onMouseLeave:o.bind(null)};if("desktop"===s){const n=this.addCaretStyles("description",he);return Object(i.createElement)(n,k()({},c,{ref:this.setDescriptionRef}),l,function(e,t,n,o){if(0===t.length)return n;let r=n;const s=[];t.forEach((function(t){t=t,s.push(t);const n=X(t,e);n!==t&&s.push(n)}));const a=Y(s,!1,"",!1);return r=r.replace(a,(function(e){return`{{strong}}${e}{{/strong}}`})),D()({mixedString:r,components:{strong:Object(i.createElement)("strong",null)}})}(t,e,this.getDescription()))}if("mobile"===s){const e=this.addCaretStyles("description",ge);return Object(i.createElement)(e,c,Object(i.createElement)(ge,{isDescriptionPlaceholder:this.state.isDescriptionPlaceholder,ref:this.setDescriptionRef},a&&Object(i.createElement)(fe,null,Object(i.createElement)(me,{src:a,alt:""})),l,this.getDescription()))}return null}renderProductData(e){const{mode:t,shoppingData:n}=this.props;if(0===Object.values(n).length)return null;const o={availability:n.availability||"",price:n.price?Object(y.decodeHTML)(n.price):"",rating:n.rating||0,reviewCount:n.reviewCount||0};return"desktop"===t?Object(i.createElement)(e,{className:"yoast-shopping-data-preview--desktop"},Object(i.createElement)(E.ScreenReaderText,null,
/* translators: Hidden accessibility text. */
Object(u.__)("Shopping data preview:","wordpress-seo")),Object(i.createElement)($,{shoppingData:o})):"mobile"===t?Object(i.createElement)(e,{className:"yoast-shopping-data-preview--mobile"},Object(i.createElement)(E.ScreenReaderText,null,
/* translators: Hidden accessibility text. */
Object(u.__)("Shopping data preview:","wordpress-seo")),Object(i.createElement)(Q,{shoppingData:o})):null}render(){const{onMouseUp:e,onMouseLeave:t,onMouseEnter:n,mode:o,isAmp:r}=this.props,{PartContainer:s,Container:a,TitleUnbounded:l,SnippetTitle:c}=this.getPreparedComponents(o),p="desktop"===o,d=p||!r?null:Object(i.createElement)(Oe,null);return Object(i.createElement)("section",null,Object(i.createElement)(a,{id:"yoast-snippet-preview-container",width:p?640:null,padding:20},Object(i.createElement)(s,null,this.renderUrl(),Object(i.createElement)(E.ScreenReaderText,null,Object(u.__)("SEO title preview","wordpress-seo")+":"),Object(i.createElement)(c,{onMouseUp:e.bind(null,"title"),onMouseEnter:n.bind(null,"title"),onMouseLeave:t.bind(null)},Object(i.createElement)(oe,{screenMode:o},Object(i.createElement)(l,{ref:this.setTitleRef},this.getTitle()))),d),Object(i.createElement)(s,null,Object(i.createElement)(E.ScreenReaderText,null,Object(u.__)("Meta description preview:","wordpress-seo")),this.renderDescription()),this.renderProductData(s)))}getPreparedComponents(e){return{PartContainer:"desktop"===e?xe:be,Container:"desktop"===e?Z:ee,TitleUnbounded:"desktop"===e?se:ae,SnippetTitle:this.addCaretStyles("title",te)}}}Ce.propTypes={title:c.a.string.isRequired,url:c.a.string.isRequired,siteName:c.a.string.isRequired,description:c.a.string.isRequired,date:c.a.string,breadcrumbs:c.a.array,hoveredField:c.a.string,activeField:c.a.string,keyword:c.a.string,wordsToHighlight:c.a.array,locale:c.a.string,mode:c.a.oneOf(K),isAmp:c.a.bool,faviconSrc:c.a.string,mobileImageSrc:c.a.string,shoppingData:c.a.object,onMouseUp:c.a.func.isRequired,onHover:c.a.func,onMouseEnter:c.a.func,onMouseLeave:c.a.func},Ce.defaultProps={date:"",keyword:"",wordsToHighlight:[],breadcrumbs:null,locale:"en",hoveredField:"",activeField:"",mode:"mobile",isAmp:!1,faviconSrc:"",mobileImageSrc:"",shoppingData:{},onHover:()=>{},onMouseEnter:()=>{},onMouseLeave:()=>{}};var Re=n(16);const _e=e=>{const t=V.helpers.measureTextWidth(e),n=new V.assessments.seo.PageTitleWidthAssessment({scores:{widthTooShort:9}},!0),i=n.calculateScore(t);return{max:n.getMaximumLength(),actual:t,score:i}},Me=(e,t,n,i,o)=>{const r=V.languageProcessing.countMetaDescriptionLength(t,e),s=n&&!i?new V.assessments.seo.MetaDescriptionLengthAssessment({scores:{tooLong:3,tooShort:3}}):new V.assessments.seo.MetaDescriptionLengthAssessment,a=s.calculateScore(r,o);return{max:s.getMaximumLength(o),actual:r,score:a}},Te=c.a.shape({max:c.a.number,actual:c.a.number,score:c.a.number}),Pe=a.a.input`
	border: none;
	width: 100%;
	height: inherit;
	line-height: 1.71428571; // 24px based on 14px font-size
	font-family: inherit;
	font-size: inherit;
	color: inherit;

	&:focus {
		outline: 0;
	}
`,Fe=Object(w.withCaretStyles)(E.VariableEditorInputContainer);class ke extends r.a.Component{constructor(e){super(e),this.elements={title:null,slug:null,description:null},this.uniqueId=x()("snippet-editor-field-"),this.setRef=this.setRef.bind(this),this.setTitleRef=this.setTitleRef.bind(this),this.setSlugRef=this.setSlugRef.bind(this),this.setDescriptionRef=this.setDescriptionRef.bind(this),this.triggerReplacementVariableSuggestions=this.triggerReplacementVariableSuggestions.bind(this),this.onFocusTitle=this.onFocusTitle.bind(this),this.onChangeTitle=this.onChangeTitle.bind(this),this.onFocusSlug=this.onFocusSlug.bind(this),this.focusSlug=this.focusSlug.bind(this),this.onChangeSlug=this.onChangeSlug.bind(this),this.onFocusDescription=this.onFocusDescription.bind(this),this.onChangeDescription=this.onChangeDescription.bind(this)}setRef(e,t){this.elements[e]=t}setTitleRef(e){this.setRef("title",e)}setSlugRef(e){this.setRef("slug",e)}setDescriptionRef(e){this.setRef("description",e)}componentDidUpdate(e){e.activeField!==this.props.activeField&&this.focusOnActiveFieldChange()}focusOnActiveFieldChange(){const{activeField:e}=this.props,t=e?this.elements[e]:null;t&&t.focus()}triggerReplacementVariableSuggestions(e){this.elements[e].triggerReplacementVariableSuggestions()}onFocusTitle(){this.props.onFocus("title")}onChangeTitle(e){this.props.onChange("title",e)}onFocusSlug(){this.props.onFocus("slug")}focusSlug(){this.elements.slug.focus()}onChangeSlug(e){this.props.onChange("slug",e.target.value)}onFocusDescription(){this.props.onFocus("description")}onChangeDescription(e){this.props.onChange("description",e)}render(){const{activeField:e,hoveredField:t,onReplacementVariableSearchChange:n,replacementVariables:o,recommendedReplacementVariables:r,titleLengthProgress:s,descriptionLengthProgress:a,onBlur:l,descriptionEditorFieldPlaceholder:c,data:{title:p,slug:d,description:h},containerPadding:g,titleInputId:f,slugInputId:m,descriptionInputId:b}=this.props,v=this.uniqueId+"-slug";return Object(i.createElement)(Re.StyledEditor,{padding:g},Object(i.createElement)(Re.ReplacementVariableEditor,{withCaret:!0,label:Object(u.__)("SEO title","wordpress-seo"),onFocus:this.onFocusTitle,onBlur:l,isActive:"title"===e,isHovered:"title"===t,editorRef:this.setTitleRef,replacementVariables:o,recommendedReplacementVariables:r,content:p,onChange:this.onChangeTitle,onSearchChange:n,fieldId:f,type:"title"}),Object(i.createElement)(E.ProgressBar,{max:s.max,value:s.actual,progressColor:this.getProgressColor(s.score)}),Object(i.createElement)(E.SimulatedLabel,{id:v,onClick:this.onFocusSlug},Object(u.__)("Slug","wordpress-seo")),Object(i.createElement)(Fe,{onClick:this.focusSlug,isActive:"slug"===e,isHovered:"slug"===t},Object(i.createElement)(Pe,{value:d,onChange:this.onChangeSlug,onFocus:this.onFocusSlug,onBlur:l,ref:this.setSlugRef,"aria-labelledby":this.uniqueId+"-slug",id:m})),Object(i.createElement)(Re.ReplacementVariableEditor,{withCaret:!0,type:"description",placeholder:c,label:Object(u.__)("Meta description","wordpress-seo"),onFocus:this.onFocusDescription,onBlur:l,isActive:"description"===e,isHovered:"description"===t,editorRef:this.setDescriptionRef,replacementVariables:o,recommendedReplacementVariables:r,content:h,onChange:this.onChangeDescription,onSearchChange:n,fieldId:b}),Object(i.createElement)(E.ProgressBar,{max:a.max,value:a.actual,progressColor:this.getProgressColor(a.score)}))}getProgressColor(e){return e>=7?w.colors.$color_good:e>=5?w.colors.$color_ok:w.colors.$color_bad}}ke.propTypes={replacementVariables:Re.replacementVariablesShape,recommendedReplacementVariables:Re.recommendedReplacementVariablesShape,onChange:c.a.func.isRequired,onFocus:c.a.func,onBlur:c.a.func,onReplacementVariableSearchChange:c.a.func,data:c.a.shape({title:c.a.string.isRequired,slug:c.a.string.isRequired,description:c.a.string.isRequired}).isRequired,activeField:c.a.oneOf(["title","slug","description"]),hoveredField:c.a.oneOf(["title","slug","description"]),titleLengthProgress:Te,descriptionLengthProgress:Te,descriptionEditorFieldPlaceholder:c.a.string,containerPadding:c.a.string,titleInputId:c.a.string,slugInputId:c.a.string,descriptionInputId:c.a.string},ke.defaultProps={replacementVariables:[],recommendedReplacementVariables:[],onFocus:()=>{},onBlur:()=>{},onReplacementVariableSearchChange:null,activeField:null,hoveredField:null,titleLengthProgress:{max:600,actual:0,score:0},descriptionLengthProgress:{max:156,actual:0,score:0},descriptionEditorFieldPlaceholder:null,containerPadding:"0 20px",titleInputId:"yoast-google-preview-title",slugInputId:"yoast-google-preview-slug",descriptionInputId:"yoast-google-preview-description"};var Ae=ke;const De=a.a.fieldset`
	border: 0;
	padding: 0;
	margin: 0 0 16px;
`,Ne=a.a.legend`
	margin: 8px 0;
	padding: 0;
	color: ${w.colors.$color_headings};
	font-size: 14px;
	font-weight: 600;
`,Ie=a()(E.Label)`
	${Object(y.getDirectionalStyle)("margin-right: 16px","margin-left: 16px")};
	color: inherit;
	font-size: 14px;
	line-height: 1.71428571;
	cursor: pointer;
	/* Helps RTL in Chrome */
	display: inline-block;
`,Ve=a()(E.Input)`
	&& {
		${Object(y.getDirectionalStyle)("margin: 0 8px 0 0","margin: 0 0 0 8px")};
		cursor: pointer;
	}
`;class Le extends o.Component{constructor(e){super(e),this.switchToMobile=this.props.onChange.bind(this,"mobile"),this.switchToDesktop=this.props.onChange.bind(this,"desktop")}render(){const{active:e,mobileModeInputId:t,desktopModeInputId:n}=this.props,o=t.length>0?t:"yoast-google-preview-mode-mobile",r=n.length>0?n:"yoast-google-preview-mode-desktop";return Object(i.createElement)(De,null,Object(i.createElement)(Ne,null,Object(u.__)("Preview as:","wordpress-seo")),Object(i.createElement)(Ve,{onChange:this.switchToMobile,type:"radio",name:"screen",value:"mobile",optionalAttributes:{id:o,checked:"mobile"===e}}),Object(i.createElement)(Ie,{for:o},Object(u.__)("Mobile result","wordpress-seo")),Object(i.createElement)(Ve,{onChange:this.switchToDesktop,type:"radio",name:"screen",value:"desktop",optionalAttributes:{id:r,checked:"desktop"===e}}),Object(i.createElement)(Ie,{for:r},Object(u.__)("Desktop result","wordpress-seo")))}}Le.propTypes={onChange:c.a.func.isRequired,active:c.a.oneOf(K),mobileModeInputId:c.a.string,desktopModeInputId:c.a.string},Le.defaultProps={active:"mobile",mobileModeInputId:"",desktopModeInputId:""};var Ue=Le;const Be=a.a.legend`
	margin: 0 0 16px;
	padding: 0;
	color: ${w.colors.$color_headings};
	font-size: 12px;
	font-weight: 300;
`,$e=a()(E.Button)`
	height: 33px;
	border: 1px solid #dbdbdb;
	box-shadow: none;
	font-family: Arial, Roboto-Regular, HelveticaNeue, sans-serif;
`,ze=a()($e)`
	margin: ${Object(y.getDirectionalStyle)("10px 0 0 4px","10px 4px 0 0")};
	fill: ${w.colors.$color_grey_dark};
	padding-left: 8px;

	& svg {
		${Object(y.getDirectionalStyle)("margin-right","margin-left")}: 7px;
	}
`,We=a()($e)`
	margin-top: 24px;
`,He=new RegExp("(%%sep%%|%%sitename%%)","g");class qe extends r.a.Component{constructor(e){super(e);const t=this.mapDataToMeasurements(e.data);this.state={isOpen:!e.showCloseButton,activeField:null,hoveredField:null,titleLengthProgress:_e(t.filteredSEOTitle),descriptionLengthProgress:Me(t.description,this.props.date,this.props.isCornerstone,this.props.isTaxonomy,this.props.locale)},this.setFieldFocus=this.setFieldFocus.bind(this),this.unsetFieldFocus=this.unsetFieldFocus.bind(this),this.onChangeMode=this.onChangeMode.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onMouseEnter=this.onMouseEnter.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this),this.open=this.open.bind(this),this.close=this.close.bind(this),this.setEditButtonRef=this.setEditButtonRef.bind(this),this.handleChange=this.handleChange.bind(this),this.haveReplaceVarsChanged=this.haveReplaceVarsChanged.bind(this)}shallowCompareData(e,t){let n=!1;return e.data.description===t.data.description&&e.data.slug===t.data.slug&&e.data.title===t.data.title&&e.isCornerstone===t.isCornerstone&&e.isTaxonomy===t.isTaxonomy&&e.locale===t.locale||(n=!0),this.haveReplaceVarsChanged(e.replacementVariables,t.replacementVariables)&&(n=!0),n}haveReplaceVarsChanged(e,t){return JSON.stringify(e)!==JSON.stringify(t)}componentWillReceiveProps(e){if(this.shallowCompareData(this.props,e)){const t=this.mapDataToMeasurements(e.data,e.replacementVariables);this.setState({titleLengthProgress:_e(t.filteredSEOTitle),descriptionLengthProgress:Me(t.description,e.date,e.isCornerstone,e.isTaxonomy,e.locale)}),this.props.onChangeAnalysisData(t)}}handleChange(e,t){this.props.onChange(e,t);const n=this.mapDataToMeasurements({...this.props.data,[e]:t});this.props.onChangeAnalysisData(n)}renderEditor(){const{data:e,descriptionEditorFieldPlaceholder:t,onReplacementVariableSearchChange:n,replacementVariables:o,recommendedReplacementVariables:s,hasPaperStyle:a,showCloseButton:l,idSuffix:c}=this.props,{activeField:p,hoveredField:d,isOpen:h,titleLengthProgress:g,descriptionLengthProgress:f}=this.state;return h?Object(i.createElement)(r.a.Fragment,null,Object(i.createElement)(Ae,{data:e,activeField:p,hoveredField:d,onChange:this.handleChange,onFocus:this.setFieldFocus,onBlur:this.unsetFieldFocus,onReplacementVariableSearchChange:n,replacementVariables:o,recommendedReplacementVariables:s,titleLengthProgress:g,descriptionLengthProgress:f,descriptionEditorFieldPlaceholder:t,containerPadding:a?"0 20px":"0",titleInputId:Object(y.join)(["yoast-google-preview-title",c]),slugInputId:Object(y.join)(["yoast-google-preview-slug",c]),descriptionInputId:Object(y.join)(["yoast-google-preview-description",c])}),l&&Object(i.createElement)(We,{onClick:this.close},Object(u.__)("Close snippet editor","wordpress-seo"))):null}setFieldFocus(e){e=this.mapFieldToEditor(e),this.setState({activeField:e})}unsetFieldFocus(){this.setState({activeField:null})}onChangeMode(e){this.props.onChange("mode",e)}onMouseUp(e){this.state.isOpen?this.setFieldFocus(e):this.open().then(this.setFieldFocus.bind(this,e))}onMouseEnter(e){this.setState({hoveredField:this.mapFieldToEditor(e)})}onMouseLeave(){this.setState({hoveredField:null})}open(){return new Promise(e=>{this.setState({isOpen:!0},e)})}close(){this.setState({isOpen:!1,activeField:null},()=>{this._editButton.focus()})}processReplacementVariables(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.props.replacementVariables;if(this.props.applyReplacementVariables)return this.props.applyReplacementVariables(e);for(const{name:n,value:i}of t)e=e.replace(new RegExp("%%"+Object(L.escapeRegExp)(n)+"%%","g"),i);return e}mapDataToMeasurements(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.props.replacementVariables;const{baseUrl:n,mapEditorDataToPreview:i}=this.props;let o=this.processReplacementVariables(e.description,t);o=V.languageProcessing.stripSpaces(o);const r=n.replace(/^https?:\/\//i,""),s=e.title.replace(He,""),a={title:this.processReplacementVariables(e.title,t),url:n+e.slug,description:o,filteredSEOTitle:this.processReplacementVariables(s,t)};return i?i(a,{shortenedBaseUrl:r}):a}mapDataToPreview(e){return{title:e.title,url:e.url,description:e.description}}mapFieldToPreview(e){return"slug"===e&&(e="url"),e}mapFieldToEditor(e){return"url"===e&&(e="slug"),e}setEditButtonRef(e){this._editButton=e}render(){const{data:e,mode:t,date:n,locale:o,keyword:r,wordsToHighlight:s,showCloseButton:a,faviconSrc:l,mobileImageSrc:c,idSuffix:p,shoppingData:d,siteName:h}=this.props,{activeField:g,hoveredField:f,isOpen:m}=this.state,b=this.mapDataToMeasurements(e),v=this.mapDataToPreview(b);return Object(i.createElement)(E.ErrorBoundary,null,Object(i.createElement)("div",null,Object(i.createElement)(Be,null,Object(u.__)("Determine how your post should look in the search results.","wordpress-seo")),Object(i.createElement)(Ue,{onChange:this.onChangeMode,active:t,mobileModeInputId:Object(y.join)(["yoast-google-preview-mode-mobile",p]),desktopModeInputId:Object(y.join)(["yoast-google-preview-mode-desktop",p])}),Object(i.createElement)(Ce,k()({keyword:r,wordsToHighlight:s,mode:t,date:n,siteName:h,activeField:this.mapFieldToPreview(g),hoveredField:this.mapFieldToPreview(f),onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,onMouseUp:this.onMouseUp,locale:o,faviconSrc:l,mobileImageSrc:c,shoppingData:d},v)),a&&Object(i.createElement)(ze,{onClick:m?this.close:this.open,"aria-expanded":m,ref:this.setEditButtonRef},Object(i.createElement)(E.SvgIcon,{icon:"edit"}),Object(u.__)("Edit snippet","wordpress-seo")),this.renderEditor()))}}qe.propTypes={onReplacementVariableSearchChange:c.a.func,replacementVariables:Re.replacementVariablesShape,recommendedReplacementVariables:Re.recommendedReplacementVariablesShape,data:c.a.shape({title:c.a.string.isRequired,slug:c.a.string.isRequired,description:c.a.string.isRequired}).isRequired,descriptionEditorFieldPlaceholder:c.a.string,baseUrl:c.a.string.isRequired,mode:c.a.oneOf(K),date:c.a.string,onChange:c.a.func.isRequired,onChangeAnalysisData:c.a.func,titleLengthProgress:Te,descriptionLengthProgress:Te,applyReplacementVariables:c.a.func,mapEditorDataToPreview:c.a.func,keyword:c.a.string,wordsToHighlight:c.a.array,locale:c.a.string,hasPaperStyle:c.a.bool,showCloseButton:c.a.bool,faviconSrc:c.a.string,mobileImageSrc:c.a.string,idSuffix:c.a.string,shoppingData:c.a.object,isCornerstone:c.a.bool,isTaxonomy:c.a.bool,siteName:c.a.string.isRequired},qe.defaultProps={mode:"mobile",date:"",wordsToHighlight:[],onReplacementVariableSearchChange:null,replacementVariables:[],recommendedReplacementVariables:[],titleLengthProgress:{max:600,actual:0,score:0},descriptionLengthProgress:{max:156,actual:0,score:0},applyReplacementVariables:null,mapEditorDataToPreview:null,keyword:"",locale:"en",descriptionEditorFieldPlaceholder:"",onChangeAnalysisData:L.noop,hasPaperStyle:!0,showCloseButton:!0,faviconSrc:"",mobileImageSrc:"",idSuffix:"",shoppingData:{},isCornerstone:!1,isTaxonomy:!1};var Ge=qe},5:function(e,t){e.exports=window.yoast.styledComponents},51:function(e,t){e.exports=window.lodash.uniqueId},53:function(e,t,n){"use strict";var i=n(3),o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,r=n(37),s=n(54),a=n(55),l="function"==typeof Symbol&&Symbol.iterator;function c(e,t){return e&&"object"==typeof e&&null!=e.key?(n=e.key,i={"=":"=0",":":"=2"},"$"+(""+n).replace(/[=:]/g,(function(e){return i[e]}))):t.toString(36);var n,i}var p=/\/+/g;function d(e){return(""+e).replace(p,"$&/")}var u,h,g=f,f=function(e){if(this.instancePool.length){var t=this.instancePool.pop();return this.call(t,e),t}return new this(e)};function m(e,t,n,i){this.result=e,this.keyPrefix=t,this.func=n,this.context=i,this.count=0}function b(e,t,n){var o,s,a=e.result,l=e.keyPrefix,c=e.func,p=e.context,u=c.call(p,t,e.count++);Array.isArray(u)?v(u,a,n,r.thatReturnsArgument):null!=u&&(i.isValidElement(u)&&(o=u,s=l+(!u.key||t&&t.key===u.key?"":d(u.key)+"/")+n,u=i.cloneElement(o,{key:s},void 0!==o.props?o.props.children:void 0)),a.push(u))}function v(e,t,n,i,r){var a="";null!=n&&(a=d(n)+"/");var p=m.getPooled(t,a,i,r);!function(e,t,n){null==e||function e(t,n,i,r){var a,p=typeof t;if("undefined"!==p&&"boolean"!==p||(t=null),null===t||"string"===p||"number"===p||"object"===p&&t.$$typeof===o)return i(r,t,""===n?"."+c(t,0):n),1;var d=0,u=""===n?".":n+":";if(Array.isArray(t))for(var h=0;h<t.length;h++)d+=e(a=t[h],u+c(a,h),i,r);else{var g=function(e){var t=e&&(l&&e[l]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(g)for(var f,m=g.call(t),b=0;!(f=m.next()).done;)d+=e(a=f.value,u+c(a,b++),i,r);else if("object"===p){var v=""+t;s(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===v?"object with keys {"+Object.keys(t).join(", ")+"}":v,"")}}return d}(e,"",t,n)}(e,b,p),m.release(p)}m.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},u=function(e,t,n,i){if(this.instancePool.length){var o=this.instancePool.pop();return this.call(o,e,t,n,i),o}return new this(e,t,n,i)},(h=m).instancePool=[],h.getPooled=u||g,h.poolSize||(h.poolSize=10),h.release=function(e){s(e instanceof this,"Trying to release an instance into a pool of a different type."),e.destructor(),this.instancePool.length<this.poolSize&&this.instancePool.push(e)},e.exports=function(e){if("object"!=typeof e||!e||Array.isArray(e))return a(!1,"React.addons.createFragment only accepts a single object. Got: %s",e),e;if(i.isValidElement(e))return a(!1,"React.addons.createFragment does not accept a ReactElement without a wrapper object."),e;s(1!==e.nodeType,"React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.");var t=[];for(var n in e)v(e[n],t,n,r.thatReturnsArgument);return t}},54:function(e,t,n){"use strict";e.exports=function(e,t,n,i,o,r,s,a){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,i,o,r,s,a],p=0;(l=new Error(t.replace(/%s/g,(function(){return c[p++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},55:function(e,t,n){"use strict";var i=n(37);e.exports=i},56:function(e,t,n){"use strict";function i(e){return e.match(/^\{\{\//)?{type:"componentClose",value:e.replace(/\W/g,"")}:e.match(/\/\}\}$/)?{type:"componentSelfClosing",value:e.replace(/\W/g,"")}:e.match(/^\{\{/)?{type:"componentOpen",value:e.replace(/\W/g,"")}:{type:"string",value:e}}e.exports=function(e){return e.split(/(\{\{\/?\s*\w+\s*\/?\}\})/g).map(i)}},6:function(e,t){e.exports=window.yoast.styleGuide},65:function(e,t){e.exports=window.lodash.debounce},72:function(e,t,n){"use strict";function i(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function o(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}.bind(this))}function r(e,t){try{var n=this.props,i=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,i)}finally{this.props=n,this.state=i}}function s(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var n=null,s=null,a=null;if("function"==typeof t.componentWillMount?n="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?s="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(s="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?a="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(a="UNSAFE_componentWillUpdate"),null!==n||null!==s||null!==a){var l=e.displayName||e.name,c="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+l+" uses "+c+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==s?"\n  "+s:"")+(null!==a?"\n  "+a:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=i,t.componentWillReceiveProps=o),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=r;var p=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var i=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;p.call(this,e,t,i)}}return e}n.r(t),n.d(t,"polyfill",(function(){return s})),i.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0},9:function(e,t){e.exports=window.yoast.componentsNew}});