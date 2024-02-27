(()=>{var e={4184:(e,t)=>{var o;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var s=typeof o;if("string"===s||"number"===s)e.push(o);else if(Array.isArray(o)&&o.length){var a=n.apply(null,o);a&&e.push(a)}else if("object"===s)for(var l in o)r.call(o,l)&&o[l]&&e.push(l)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(o=function(){return n}.apply(t,[]))||(e.exports=o)}()},8875:(e,t,o)=>{var r;!function(){"use strict";var n=!("undefined"==typeof window||!window.document||!window.document.createElement),s={canUseDOM:n,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:n&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:n&&!!window.screen};void 0===(r=function(){return s}.call(t,o,t,e))||(e.exports=r)}()},139:e=>{"use strict";function t(e){return function(){return e}}var o=function(){};o.thatReturns=t,o.thatReturnsFalse=t(!1),o.thatReturnsTrue=t(!0),o.thatReturnsNull=t(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},3759:e=>{"use strict";e.exports=function(e,t,o,r,n,s,a,l){if(!e){var i;if(void 0===t)i=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[o,r,n,s,a,l],d=0;(i=new Error(t.replace(/%s/g,(function(){return c[d++]})))).name="Invariant Violation"}throw i.framesToPop=1,i}}},3620:(e,t,o)=>{"use strict";var r=o(139);e.exports=r},6746:(e,t,o)=>{"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=l(o(9196)),s=l(o(9156)),a=l(o(6743));function l(e){return e&&e.__esModule?e:{default:e}}var i=void 0;function c(e,t){var o,a,l,d,p,u,h,m,f=[],g={};for(u=0;u<e.length;u++)if("string"!==(p=e[u]).type){if(!t.hasOwnProperty(p.value)||void 0===t[p.value])throw new Error("Invalid interpolation, missing component node: `"+p.value+"`");if("object"!==r(t[p.value]))throw new Error("Invalid interpolation, component node must be a ReactElement or null: `"+p.value+"`","\n> "+i);if("componentClose"===p.type)throw new Error("Missing opening component token: `"+p.value+"`");if("componentOpen"===p.type){o=t[p.value],l=u;break}f.push(t[p.value])}else f.push(p.value);return o&&(d=function(e,t){var o,r,n=t[e],s=0;for(r=e+1;r<t.length;r++)if((o=t[r]).value===n.value){if("componentOpen"===o.type){s++;continue}if("componentClose"===o.type){if(0===s)return r;s--}}throw new Error("Missing closing component token `"+n.value+"`")}(l,e),h=c(e.slice(l+1,d),t),a=n.default.cloneElement(o,{},h),f.push(a),d<e.length-1&&(m=c(e.slice(d+1),t),f=f.concat(m))),1===f.length?f[0]:(f.forEach((function(e,t){e&&(g["interpolation-child-"+t]=e)})),(0,s.default)(g))}t.Z=function(e){var t=e.mixedString,o=e.components,n=e.throwErrors;if(i=t,!o)return t;if("object"!==(void 0===o?"undefined":r(o))){if(n)throw new Error("Interpolation Error: unable to process `"+t+"` because components is not an object");return t}var s=(0,a.default)(t);try{return c(s,o)}catch(e){if(n)throw new Error("Interpolation Error: unable to process `"+t+"` because of error `"+e.message+"`");return t}}},6743:e=>{"use strict";function t(e){return e.match(/^\{\{\//)?{type:"componentClose",value:e.replace(/\W/g,"")}:e.match(/\/\}\}$/)?{type:"componentSelfClosing",value:e.replace(/\W/g,"")}:e.match(/^\{\{/)?{type:"componentOpen",value:e.replace(/\W/g,"")}:{type:"string",value:e}}e.exports=function(e){return e.split(/(\{\{\/?\s*\w+\s*\/?\}\})/g).map(t)}},9156:(e,t,o)=>{"use strict";var r=o(9196),n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,s=o(139),a=o(3759),l=o(3620),i=".",c=":",d="function"==typeof Symbol&&Symbol.iterator,p="@@iterator";function u(e,t){return e&&"object"==typeof e&&null!=e.key?(o=e.key,r={"=":"=0",":":"=2"},"$"+(""+o).replace(/[=:]/g,(function(e){return r[e]}))):t.toString(36);var o,r}function h(e,t,o,r){var s,l=typeof e;if("undefined"!==l&&"boolean"!==l||(e=null),null===e||"string"===l||"number"===l||"object"===l&&e.$$typeof===n)return o(r,e,""===t?i+u(e,0):t),1;var m=0,f=""===t?i:t+c;if(Array.isArray(e))for(var g=0;g<e.length;g++)m+=h(s=e[g],f+u(s,g),o,r);else{var b=function(e){var t=e&&(d&&e[d]||e[p]);if("function"==typeof t)return t}(e);if(b)for(var y,v=b.call(e),x=0;!(y=v.next()).done;)m+=h(s=y.value,f+u(s,x++),o,r);else if("object"===l){var C=""+e;a(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===C?"object with keys {"+Object.keys(e).join(", ")+"}":C,"")}}return m}var m=/\/+/g;function f(e){return(""+e).replace(m,"$&/")}var g,b,y=v,v=function(e){var t=this;if(t.instancePool.length){var o=t.instancePool.pop();return t.call(o,e),o}return new t(e)};function x(e,t,o,r){this.result=e,this.keyPrefix=t,this.func=o,this.context=r,this.count=0}function C(e,t,o){var n,a,l=e.result,i=e.keyPrefix,c=e.func,d=e.context,p=c.call(d,t,e.count++);Array.isArray(p)?w(p,l,o,s.thatReturnsArgument):null!=p&&(r.isValidElement(p)&&(n=p,a=i+(!p.key||t&&t.key===p.key?"":f(p.key)+"/")+o,p=r.cloneElement(n,{key:a},void 0!==n.props?n.props.children:void 0)),l.push(p))}function w(e,t,o,r,n){var s="";null!=o&&(s=f(o)+"/");var a=x.getPooled(t,s,r,n);!function(e,t,o){null==e||h(e,"",t,o)}(e,C,a),x.release(a)}x.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},g=function(e,t,o,r){var n=this;if(n.instancePool.length){var s=n.instancePool.pop();return n.call(s,e,t,o,r),s}return new n(e,t,o,r)},(b=x).instancePool=[],b.getPooled=g||y,b.poolSize||(b.poolSize=10),b.release=function(e){var t=this;a(e instanceof t,"Trying to release an instance into a pool of a different type."),e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)},e.exports=function(e){if("object"!=typeof e||!e||Array.isArray(e))return l(!1,"React.addons.createFragment only accepts a single object. Got: %s",e),e;if(r.isValidElement(e))return l(!1,"React.addons.createFragment does not accept a ReactElement without a wrapper object."),e;a(1!==e.nodeType,"React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.");var t=[];for(var o in e)w(e[o],t,o,s.thatReturnsArgument);return t}},6871:(e,t,o)=>{"use strict";function r(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function n(e){this.setState(function(t){var o=this.constructor.getDerivedStateFromProps(e,t);return null!=o?o:null}.bind(this))}function s(e,t){try{var o=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,r)}finally{this.props=o,this.state=r}}function a(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var o=null,a=null,l=null;if("function"==typeof t.componentWillMount?o="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(o="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?a="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(a="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?l="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(l="UNSAFE_componentWillUpdate"),null!==o||null!==a||null!==l){var i=e.displayName||e.name,c="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+i+" uses "+c+" but also contains the following legacy lifecycles:"+(null!==o?"\n  "+o:"")+(null!==a?"\n  "+a:"")+(null!==l?"\n  "+l:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=r,t.componentWillReceiveProps=n),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=s;var d=t.componentDidUpdate;t.componentDidUpdate=function(e,t,o){var r=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:o;d.call(this,e,t,r)}}return e}o.r(t),o.d(t,{polyfill:()=>a}),r.__suppressDeprecationWarning=!0,n.__suppressDeprecationWarning=!0,s.__suppressDeprecationWarning=!0},9983:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bodyOpenClassName=t.portalClassName=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},n=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),s=o(9196),a=m(s),l=m(o(1850)),i=m(o(5890)),c=m(o(8747)),d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}(o(7149)),p=o(1112),u=m(p),h=o(6871);function m(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var g=t.portalClassName="ReactModalPortal",b=t.bodyOpenClassName="ReactModal__Body--open",y=p.canUseDOM&&void 0!==l.default.createPortal,v=function(){return y?l.default.createPortal:l.default.unstable_renderSubtreeIntoContainer};function x(e){return e()}var C=function(e){function t(){var e,o,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var s=arguments.length,i=Array(s),d=0;d<s;d++)i[d]=arguments[d];return o=n=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.removePortal=function(){!y&&l.default.unmountComponentAtNode(n.node);var e=x(n.props.parentSelector);e&&e.contains(n.node)?e.removeChild(n.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},n.portalRef=function(e){n.portal=e},n.renderPortal=function(e){var o=v()(n,a.default.createElement(c.default,r({defaultStyles:t.defaultStyles},e)),n.node);n.portalRef(o)},f(n,o)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidMount",value:function(){p.canUseDOM&&(y||(this.node=document.createElement("div")),this.node.className=this.props.portalClassName,x(this.props.parentSelector).appendChild(this.node),!y&&this.renderPortal(this.props))}},{key:"getSnapshotBeforeUpdate",value:function(e){return{prevParent:x(e.parentSelector),nextParent:x(this.props.parentSelector)}}},{key:"componentDidUpdate",value:function(e,t,o){if(p.canUseDOM){var r=this.props,n=r.isOpen,s=r.portalClassName;e.portalClassName!==s&&(this.node.className=s);var a=o.prevParent,l=o.nextParent;l!==a&&(a.removeChild(this.node),l.appendChild(this.node)),(e.isOpen||n)&&!y&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(p.canUseDOM&&this.node&&this.portal){var e=this.portal.state,t=Date.now(),o=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);o?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,o-t)):this.removePortal()}}},{key:"render",value:function(){return p.canUseDOM&&y?(!this.node&&y&&(this.node=document.createElement("div")),v()(a.default.createElement(c.default,r({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:function(e){d.setElement(e)}}]),t}(s.Component);C.propTypes={isOpen:i.default.bool.isRequired,style:i.default.shape({content:i.default.object,overlay:i.default.object}),portalClassName:i.default.string,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,className:i.default.oneOfType([i.default.string,i.default.shape({base:i.default.string.isRequired,afterOpen:i.default.string.isRequired,beforeClose:i.default.string.isRequired})]),overlayClassName:i.default.oneOfType([i.default.string,i.default.shape({base:i.default.string.isRequired,afterOpen:i.default.string.isRequired,beforeClose:i.default.string.isRequired})]),appElement:i.default.instanceOf(u.default),onAfterOpen:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,ariaHideApp:i.default.bool,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,parentSelector:i.default.func,aria:i.default.object,data:i.default.object,role:i.default.string,contentLabel:i.default.string,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func},C.defaultProps={isOpen:!1,portalClassName:g,bodyOpenClassName:b,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,t){return a.default.createElement("div",e,t)},contentElement:function(e,t){return a.default.createElement("div",e,t)}},C.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,h.polyfill)(C),t.default=C},8747:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),a=o(9196),l=f(o(5890)),i=m(o(9685)),c=f(o(8338)),d=m(o(7149)),p=m(o(2409)),u=f(o(1112)),h=f(o(9623));function m(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function f(e){return e&&e.__esModule?e:{default:e}}o(5063);var g={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},b=0,y=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.setOverlayRef=function(e){o.overlay=e,o.props.overlayRef&&o.props.overlayRef(e)},o.setContentRef=function(e){o.content=e,o.props.contentRef&&o.props.contentRef(e)},o.afterClose=function(){var e=o.props,t=e.appElement,r=e.ariaHideApp,n=e.htmlOpenClassName,s=e.bodyOpenClassName;s&&p.remove(document.body,s),n&&p.remove(document.getElementsByTagName("html")[0],n),r&&b>0&&0==(b-=1)&&d.show(t),o.props.shouldFocusAfterRender&&(o.props.shouldReturnFocusAfterClose?(i.returnFocus(o.props.preventScroll),i.teardownScopedFocus()):i.popWithoutFocus()),o.props.onAfterClose&&o.props.onAfterClose(),h.default.deregister(o)},o.open=function(){o.beforeOpen(),o.state.afterOpen&&o.state.beforeClose?(clearTimeout(o.closeTimer),o.setState({beforeClose:!1})):(o.props.shouldFocusAfterRender&&(i.setupScopedFocus(o.node),i.markForFocusLater()),o.setState({isOpen:!0},(function(){o.setState({afterOpen:!0}),o.props.isOpen&&o.props.onAfterOpen&&o.props.onAfterOpen({overlayEl:o.overlay,contentEl:o.content})})))},o.close=function(){o.props.closeTimeoutMS>0?o.closeWithTimeout():o.closeWithoutTimeout()},o.focusContent=function(){return o.content&&!o.contentHasFocus()&&o.content.focus({preventScroll:!0})},o.closeWithTimeout=function(){var e=Date.now()+o.props.closeTimeoutMS;o.setState({beforeClose:!0,closesAt:e},(function(){o.closeTimer=setTimeout(o.closeWithoutTimeout,o.state.closesAt-Date.now())}))},o.closeWithoutTimeout=function(){o.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},o.afterClose)},o.handleKeyDown=function(e){9===e.keyCode&&(0,c.default)(o.content,e),o.props.shouldCloseOnEsc&&27===e.keyCode&&(e.stopPropagation(),o.requestClose(e))},o.handleOverlayOnClick=function(e){null===o.shouldClose&&(o.shouldClose=!0),o.shouldClose&&o.props.shouldCloseOnOverlayClick&&(o.ownerHandlesClose()?o.requestClose(e):o.focusContent()),o.shouldClose=null},o.handleContentOnMouseUp=function(){o.shouldClose=!1},o.handleOverlayOnMouseDown=function(e){o.props.shouldCloseOnOverlayClick||e.target!=o.overlay||e.preventDefault()},o.handleContentOnClick=function(){o.shouldClose=!1},o.handleContentOnMouseDown=function(){o.shouldClose=!1},o.requestClose=function(e){return o.ownerHandlesClose()&&o.props.onRequestClose(e)},o.ownerHandlesClose=function(){return o.props.onRequestClose},o.shouldBeClosed=function(){return!o.state.isOpen&&!o.state.beforeClose},o.contentHasFocus=function(){return document.activeElement===o.content||o.content.contains(document.activeElement)},o.buildClassName=function(e,t){var r="object"===(void 0===t?"undefined":n(t))?t:{base:g[e],afterOpen:g[e]+"--after-open",beforeClose:g[e]+"--before-close"},s=r.base;return o.state.afterOpen&&(s=s+" "+r.afterOpen),o.state.beforeClose&&(s=s+" "+r.beforeClose),"string"==typeof t&&t?s+" "+t:s},o.attributesFromObject=function(e,t){return Object.keys(t).reduce((function(o,r){return o[e+"-"+r]=t[r],o}),{})},o.state={afterOpen:!1,beforeClose:!1},o.shouldClose=null,o.moveFromContentToOverlay=null,o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(e,t){this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,o=e.ariaHideApp,r=e.htmlOpenClassName,n=e.bodyOpenClassName;n&&p.add(document.body,n),r&&p.add(document.getElementsByTagName("html")[0],r),o&&(b+=1,d.hide(t)),h.default.register(this)}},{key:"render",value:function(){var e=this.props,t=e.id,o=e.className,n=e.overlayClassName,s=e.defaultStyles,a=e.children,l=o?{}:s.content,i=n?{}:s.overlay;if(this.shouldBeClosed())return null;var c={ref:this.setOverlayRef,className:this.buildClassName("overlay",n),style:r({},i,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},d=r({id:t,ref:this.setContentRef,style:r({},l,this.props.style.content),className:this.buildClassName("content",o),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",r({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),p=this.props.contentElement(d,a);return this.props.overlayElement(c,p)}}]),t}(a.Component);y.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},y.propTypes={isOpen:l.default.bool.isRequired,defaultStyles:l.default.shape({content:l.default.object,overlay:l.default.object}),style:l.default.shape({content:l.default.object,overlay:l.default.object}),className:l.default.oneOfType([l.default.string,l.default.object]),overlayClassName:l.default.oneOfType([l.default.string,l.default.object]),bodyOpenClassName:l.default.string,htmlOpenClassName:l.default.string,ariaHideApp:l.default.bool,appElement:l.default.instanceOf(u.default),onAfterOpen:l.default.func,onAfterClose:l.default.func,onRequestClose:l.default.func,closeTimeoutMS:l.default.number,shouldFocusAfterRender:l.default.bool,shouldCloseOnOverlayClick:l.default.bool,shouldReturnFocusAfterClose:l.default.bool,preventScroll:l.default.bool,role:l.default.string,contentLabel:l.default.string,aria:l.default.object,data:l.default.object,children:l.default.node,shouldCloseOnEsc:l.default.bool,overlayRef:l.default.func,contentRef:l.default.func,id:l.default.string,overlayElement:l.default.func,contentElement:l.default.func,testId:l.default.string},t.default=y,e.exports=t.default},7149:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.assertNodeList=l,t.setElement=function(e){var t=e;if("string"==typeof t&&s.canUseDOM){var o=document.querySelectorAll(t);l(o,t),t="length"in o?o[0]:o}return a=t||a},t.validateElement=i,t.hide=function(e){i(e)&&(e||a).setAttribute("aria-hidden","true")},t.show=function(e){i(e)&&(e||a).removeAttribute("aria-hidden")},t.documentNotReadyOrSSRTesting=function(){a=null},t.resetForTesting=function(){a=null};var r,n=(r=o(3799))&&r.__esModule?r:{default:r},s=o(1112),a=null;function l(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function i(e){return!(!e&&!a&&((0,n.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),1))}},5063:(e,t,o)=>{"use strict";var r,n=(r=o(9623))&&r.__esModule?r:{default:r},s=void 0,a=void 0,l=[];function i(){0!==l.length&&l[l.length-1].focusContent()}n.default.subscribe((function(e,t){s&&a||((s=document.createElement("div")).setAttribute("data-react-modal-body-trap",""),s.style.position="absolute",s.style.opacity="0",s.setAttribute("tabindex","0"),s.addEventListener("focus",i),(a=s.cloneNode()).addEventListener("focus",i)),(l=t).length>0?(document.body.firstChild!==s&&document.body.insertBefore(s,document.body.firstChild),document.body.lastChild!==a&&document.body.appendChild(a)):(s.parentElement&&s.parentElement.removeChild(s),a.parentElement&&a.parentElement.removeChild(a))}))},2409:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dumpClassLists=function(){};var o={},r={};t.add=function(e,t){return n=e.classList,s="html"==e.nodeName.toLowerCase()?o:r,void t.split(" ").forEach((function(e){!function(e,t){e[t]||(e[t]=0),e[t]+=1}(s,e),n.add(e)}));var n,s},t.remove=function(e,t){return n=e.classList,s="html"==e.nodeName.toLowerCase()?o:r,void t.split(" ").forEach((function(e){!function(e,t){e[t]&&(e[t]-=1)}(s,e),0===s[e]&&n.remove(e)}));var n,s}},9685:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handleBlur=i,t.handleFocus=c,t.markForFocusLater=function(){s.push(document.activeElement)},t.returnFocus=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=null;try{return void(0!==s.length&&(t=s.pop()).focus({preventScroll:e}))}catch(e){console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}},t.popWithoutFocus=function(){s.length>0&&s.pop()},t.setupScopedFocus=function(e){a=e,window.addEventListener?(window.addEventListener("blur",i,!1),document.addEventListener("focus",c,!0)):(window.attachEvent("onBlur",i),document.attachEvent("onFocus",c))},t.teardownScopedFocus=function(){a=null,window.addEventListener?(window.removeEventListener("blur",i),document.removeEventListener("focus",c)):(window.detachEvent("onBlur",i),document.detachEvent("onFocus",c))};var r,n=(r=o(7845))&&r.__esModule?r:{default:r},s=[],a=null,l=!1;function i(){l=!0}function c(){if(l){if(l=!1,!a)return;setTimeout((function(){a.contains(document.activeElement)||((0,n.default)(a)[0]||a).focus()}),0)}}},9623:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=new function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.register=function(e){-1===t.openInstances.indexOf(e)&&(t.openInstances.push(e),t.emit("register"))},this.deregister=function(e){var o=t.openInstances.indexOf(e);-1!==o&&(t.openInstances.splice(o,1),t.emit("deregister"))},this.subscribe=function(e){t.subscribers.push(e)},this.emit=function(e){t.subscribers.forEach((function(o){return o(e,t.openInstances.slice())}))},this.openInstances=[],this.subscribers=[]};t.default=o,e.exports=t.default},1112:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=void 0;var r,n=((r=o(8875))&&r.__esModule?r:{default:r}).default,s=n.canUseDOM?window.HTMLElement:{};t.canUseDOM=n.canUseDOM,t.default=s},8338:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var o=(0,n.default)(e);if(o.length){var r=void 0,s=t.shiftKey,a=o[0],l=o[o.length-1];if(e===document.activeElement){if(!s)return;r=l}if(l!==document.activeElement||s||(r=a),a===document.activeElement&&s&&(r=l),r)return t.preventDefault(),void r.focus();var i=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null!=i&&"Chrome"!=i[1]&&null==/\biPod\b|\biPad\b/g.exec(navigator.userAgent)){var c=o.indexOf(document.activeElement);if(c>-1&&(c+=s?-1:1),void 0===(r=o[c]))return t.preventDefault(),void(r=s?l:a).focus();t.preventDefault(),r.focus()}}else t.preventDefault()};var r,n=(r=o(7845))&&r.__esModule?r:{default:r};e.exports=t.default},7845:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return[].slice.call(e.querySelectorAll("*"),0).filter(n)};var o=/input|select|textarea|button|object/;function r(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return!0;var o=window.getComputedStyle(e);return t?"visible"!==o.getPropertyValue("overflow")||e.scrollWidth<=0&&e.scrollHeight<=0:"none"==o.getPropertyValue("display")}function n(e){var t=e.getAttribute("tabindex");null===t&&(t=void 0);var n=isNaN(t);return(n||t>=0)&&function(e,t){var n=e.nodeName.toLowerCase();return(o.test(n)&&!e.disabled||"a"===n&&e.href||t)&&function(e){for(var t=e;t&&t!==document.body;){if(r(t))return!1;t=t.parentNode}return!0}(e)}(e,!n)}e.exports=t.default},3253:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n=(r=o(9983))&&r.__esModule?r:{default:r};t.default=n.default,e.exports=t.default},3799:e=>{"use strict";e.exports=function(){}},9196:e=>{"use strict";e.exports=window.React},1850:e=>{"use strict";e.exports=window.ReactDOM},5890:e=>{"use strict";e.exports=window.yoast.propTypes}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,o),s.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{"use strict";o.r(r),o.d(r,{Alert:()=>fe,ArticleList:()=>yt,BaseButton:()=>R,BetaBadge:()=>We,Button:()=>P,ButtonStyledLink:()=>F,Card:()=>qt,CardBanner:()=>Ct,Checkbox:()=>re,CloseButton:()=>H,Collapsible:()=>ct,CollapsibleStateless:()=>lt,CourseDetails:()=>Dt,DataModel:()=>le,DurationInput:()=>_e,ErrorBoundary:()=>Yt,FieldGroup:()=>oe,FullHeightCard:()=>Ot,Heading:()=>p,HelpIcon:()=>G,HelpText:()=>Xt,IFrame:()=>lo,Icon:()=>eo,IconButton:()=>Vt,IconButtonToggle:()=>ro,IconCTAEditButton:()=>ao,IconLabeledButton:()=>Ht,IconsButton:()=>Ke,ImageSelect:()=>be,ImageSelectButtons:()=>ce,Input:()=>co,InputField:()=>lr,InsightsCard:()=>ke,KeywordSuggestions:()=>fo,Label:()=>yo,LanguageNotice:()=>Co,LinkButton:()=>B,ListTable:()=>On,Loader:()=>ko,Logo:()=>Pr,Modal:()=>Dr,MultiSelect:()=>Fe,MultiStepProgress:()=>Ro,NewBadge:()=>Z,NewButton:()=>A,Notification:()=>Fo,Paper:()=>Bo,PremiumBadge:()=>J,ProgressBar:()=>Uo,RadioButtonGroup:()=>Re,Row:()=>Rn,ScoreAssessments:()=>er,ScreenReaderShortcut:()=>Bn,ScreenReaderText:()=>Ze,Section:()=>h,SectionTitle:()=>et,Select:()=>je,SimulatedLabel:()=>go,SingleSelect:()=>Ae,StackedProgressBar:()=>nr,StarRating:()=>He,StyledContainer:()=>ot,StyledContainerTopLevel:()=>rt,StyledHeading:()=>y,StyledIconsButton:()=>nt,StyledSection:()=>w,StyledSectionBase:()=>x,SvgIcon:()=>b,SynonymsInput:()=>ur,Tabs:()=>gn,TextInput:()=>ve,Textarea:()=>mr,Textfield:()=>gr,Toggle:()=>_r,UpsellButton:()=>Or,UpsellLinkButton:()=>Nr,VariableEditorInputContainer:()=>sr,Warning:()=>En,WordList:()=>Tn,WordOccurrenceInsights:()=>fo,WordOccurrences:()=>ho,YoastButton:()=>$r,YoastLinkButton:()=>Rr,YoastSeoIcon:()=>Ar,YouTubeVideo:()=>$n,ZebrafiedListTable:()=>Nn,addActiveStyle:()=>O,addBaseStyle:()=>S,addButtonStyles:()=>N,addFocusStyle:()=>T,addHoverStyle:()=>q,helpIconDefaultProps:()=>V,helpIconProps:()=>W,icons:()=>g,languageNoticePropType:()=>wo,wrapInHeading:()=>st});var e=o(9196),t=o.n(e),n=o(5890),s=o.n(n);const a=window.yoast.styledComponents;var l=o.n(a);const i=window.yoast.styleGuide,c=window.yoast.helpers,d=t=>{const o=`h${t.level}`;return(0,e.createElement)(o,{className:t.className},t.children)};d.propTypes={level:s().number,className:s().string,children:s().any},d.defaultProps={level:1};const p=d,u=t=>(0,e.createElement)("section",{className:t.className},t.headingText&&(0,e.createElement)(p,{level:t.headingLevel,className:t.headingClassName},t.headingText),t.children);u.propTypes={className:s().string,headingText:s().string,headingLevel:s().number,headingClassName:s().string,children:s().any},u.defaultProps={headingLevel:1};const h=u,m=l().svg`
	width: ${e=>e.size};
	height: ${e=>e.size};
	flex: none;

	animation: loadingSpinnerRotator 1.4s linear infinite;

	& .path {
		stroke: ${e=>e.fill};
		stroke-dasharray: 187;
		stroke-dashoffset: 0;
		transform-origin: center;
		animation: loadingSpinnerDash 1.4s ease-in-out infinite;
	}

	@keyframes loadingSpinnerRotator {
		0% { transform: rotate( 0deg ); }
		100% { transform: rotate( 270deg ); }
	}

	@keyframes loadingSpinnerDash {
		0% { stroke-dashoffset: 187; }
		50% {
			stroke-dashoffset: 47;
			transform:rotate( 135deg );
		}
		100% {
			stroke-dashoffset: 187;
			transform: rotate( 450deg );
		}
	}
`,f="0 0 1792 1792",g={"chevron-down":{viewbox:"0 0 24 24",width:"24px",path:[(0,e.createElement)("g",{key:"1"},(0,e.createElement)("path",{fill:"none",d:"M0,0h24v24H0V0z"})),(0,e.createElement)("g",{key:"2"},(0,e.createElement)("path",{d:"M7.41,8.59L12,13.17l4.59-4.58L18,10l-6,6l-6-6L7.41,8.59z"}))]},"chevron-up":{viewbox:"0 0 24 24",width:"24px",path:[(0,e.createElement)("g",{key:"1"},(0,e.createElement)("path",{fill:"none",d:"M0,0h24v24H0V0z"})),(0,e.createElement)("g",{key:"2"},(0,e.createElement)("path",{d:"M12,8l-6,6l1.41,1.41L12,10.83l4.59,4.58L18,14L12,8z"}))]},clipboard:{viewbox:f,path:"M768 1664h896v-640h-416q-40 0-68-28t-28-68v-416h-384v1152zm256-1440v-64q0-13-9.5-22.5t-22.5-9.5h-704q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h704q13 0 22.5-9.5t9.5-22.5zm256 672h299l-299-299v299zm512 128v672q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-160h-544q-40 0-68-28t-28-68v-1344q0-40 28-68t68-28h1088q40 0 68 28t28 68v328q21 13 36 28l408 408q28 28 48 76t20 88z"},check:{viewbox:f,path:"M249.2,431.2c-23,0-45.6,9.4-61.8,25.6L25.6,618.6C9.4,634.8,0,657.4,0,680.4c0,23,9.4,45.6,25.6,61.8 l593.1,593.1c16.2,16.2,38.8,25.6,61.8,25.6c23,0,45.6-9.4,61.8-25.6L1766.4,311c16.2-16.2,25.6-38.8,25.6-61.8 s-9.4-45.6-25.6-61.8L1604.5,25.6C1588.3,9.4,1565.8,0,1542.8,0c-23,0-45.6,9.4-61.8,25.6L680.4,827L311,456.3 C294.8,440.5,272.3,431.2,249.2,431.2z"},"angle-down":{viewbox:f,path:"M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"},"angle-left":{viewbox:f,path:"M1203 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z"},"angle-right":{viewbox:f,path:"M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"},"angle-up":{viewbox:f,path:"M1395 1184q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z"},"arrow-down":{viewbox:f,path:"M896 1791L120.91 448.5L1671.09 448.5z"},"arrow-left":{viewbox:f,path:"M1343.5 1671.09L1 896L1343.5 120.91z"},"arrow-right":{viewbox:f,path:"M1791 896L448.5 1671.09L448.5 120.91z"},"arrow-up":{viewbox:f,path:"M1671.09 1343.5L120.91 1343.5L896 1z"},"caret-right":{viewbox:"0 0 192 512",path:"M 0 384.662 V 127.338 c 0 -17.818 21.543 -26.741 34.142 -14.142 l 128.662 128.662 c 7.81 7.81 7.81 20.474 0 28.284 L 34.142 398.804 C 21.543 411.404 0 402.48 0 384.662 Z"},circle:{viewbox:f,path:"M1664 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"},desktop:{viewbox:f,path:"M1728 992v-832q0-13-9.5-22.5t-22.5-9.5h-1600q-13 0-22.5 9.5t-9.5 22.5v832q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5zm128-832v1088q0 66-47 113t-113 47h-544q0 37 16 77.5t32 71 16 43.5q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45q0-14 16-44t32-70 16-78h-544q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1600q66 0 113 47t47 113z"},edit:{viewbox:f,path:"M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"},eye:{viewbox:f,path:"M1664 960q-152-236-381-353 61 104 61 225 0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-121 61-225-229 117-381 353 133 205 333.5 326.5t434.5 121.5 434.5-121.5 333.5-326.5zm-720-384q0-20-14-34t-34-14q-125 0-214.5 89.5t-89.5 214.5q0 20 14 34t34 14 34-14 14-34q0-86 61-147t147-61q20 0 34-14t14-34zm848 384q0 34-20 69-140 230-376.5 368.5t-499.5 138.5-499.5-139-376.5-368q-20-35-20-69t20-69q140-229 376.5-368t499.5-139 499.5 139 376.5 368q20 35 20 69z"},"exclamation-triangle":{viewbox:f,path:"M1024 1375v-190q0-14-9.5-23.5T992 1152H800q-13 0-22.5 9.5T768 1185v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11H786q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17H128q-34 0-63.5-17T18 1601q-37-63-2-126L784 67q17-31 47-49t65-18 65 18 47 49z"},"file-text":{viewbox:f,path:"M1596 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zm-444-244v376h376q-10-29-22-41l-313-313q-12-12-41-22zm384 1528v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zm-1024-864q0-14 9-23t23-9h704q14 0 23 9t9 23v64q0 14-9 23t-23 9h-704q-14 0-23-9t-9-23v-64zm736 224q14 0 23 9t9 23v64q0 14-9 23t-23 9h-704q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h704zm0 256q14 0 23 9t9 23v64q0 14-9 23t-23 9h-704q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h704z"},gear:{viewbox:f,path:"M1800 800h-218q-26 -107 -81 -193l154 -154l-210 -210l-154 154q-88 -55 -191 -79v-218h-300v218q-103 24 -191 79l-154 -154l-212 212l154 154q-55 88 -79 191h-218v297h217q23 101 80 194l-154 154l210 210l154 -154q85 54 193 81v218h300v-218q103 -24 191 -79 l154 154l212 -212l-154 -154q57 -93 80 -194h217v-297zM950 650q124 0 212 88t88 212t-88 212t-212 88t-212 -88t-88 -212t88 -212t212 -88z"},key:{viewbox:f,path:"M832 512q0-80-56-136t-136-56-136 56-56 136q0 42 19 83-41-19-83-19-80 0-136 56t-56 136 56 136 136 56 136-56 56-136q0-42-19-83 41 19 83 19 80 0 136-56t56-136zm851 704q0 17-49 66t-66 49q-9 0-28.5-16t-36.5-33-38.5-40-24.5-26l-96 96 220 220q28 28 28 68 0 42-39 81t-81 39q-40 0-68-28l-671-671q-176 131-365 131-163 0-265.5-102.5t-102.5-265.5q0-160 95-313t248-248 313-95q163 0 265.5 102.5t102.5 265.5q0 189-131 365l355 355 96-96q-3-3-26-24.5t-40-38.5-33-36.5-16-28.5q0-17 49-66t66-49q13 0 23 10 6 6 46 44.5t82 79.5 86.5 86 73 78 28.5 41z"},list:{viewbox:f,path:"M384 1408q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm0-512q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm-1408-928q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z"},"loading-spinner":{viewbox:"0 0 66 66",CustomComponent:m,path:[(0,e.createElement)("circle",{key:"5",className:"path",fill:"none",strokeWidth:"6",strokeLinecap:"round",cx:"33",cy:"33",r:"30"})]},mobile:{viewbox:f,path:"M976 1408q0-33-23.5-56.5t-56.5-23.5-56.5 23.5-23.5 56.5 23.5 56.5 56.5 23.5 56.5-23.5 23.5-56.5zm208-160v-704q0-13-9.5-22.5t-22.5-9.5h-512q-13 0-22.5 9.5t-9.5 22.5v704q0 13 9.5 22.5t22.5 9.5h512q13 0 22.5-9.5t9.5-22.5zm-192-848q0-16-16-16h-160q-16 0-16 16t16 16h160q16 0 16-16zm288-16v1024q0 52-38 90t-90 38h-512q-52 0-90-38t-38-90v-1024q0-52 38-90t90-38h512q52 0 90 38t38 90z"},"pencil-square":{viewbox:f,path:"M888 1184l116-116-152-152-116 116v56h96v96h56zm440-720q-16-16-33 1l-350 350q-17 17-1 33t33-1l350-350q17-17 1-33zm80 594v190q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-14 14-32 8-23-6-45-6h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-126q0-13 9-22l64-64q15-15 35-7t20 29zm-96-738l288 288-672 672h-288v-288zm444 132l-92 92-288-288 92-92q28-28 68-28t68 28l152 152q28 28 28 68t-28 68z"},plus:{viewbox:f,path:"M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"},"plus-circle":{viewbox:f,path:"M1344 960v-128q0-26-19-45t-45-19h-256v-256q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v256h-256q-26 0-45 19t-19 45v128q0 26 19 45t45 19h256v256q0 26 19 45t45 19h128q26 0 45-19t19-45v-256h256q26 0 45-19t19-45zm320-64q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"},"question-circle":{viewbox:f,path:"M1024 1376v-192q0-14-9-23t-23-9h-192q-14 0-23 9t-9 23v192q0 14 9 23t23 9h192q14 0 23-9t9-23zm256-672q0-88-55.5-163t-138.5-116-170-41q-243 0-371 213-15 24 8 42l132 100q7 6 19 6 16 0 25-12 53-68 86-92 34-24 86-24 48 0 85.5 26t37.5 59q0 38-20 61t-68 45q-63 28-115.5 86.5t-52.5 125.5v36q0 14 9 23t23 9h192q14 0 23-9t9-23q0-19 21.5-49.5t54.5-49.5q32-18 49-28.5t46-35 44.5-48 28-60.5 12.5-81zm384 192q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"},search:{viewbox:f,path:"M1216 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z"},"seo-score-bad":{viewbox:"0 0 496 512",path:"M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8z M328 176c17.7 0 32 14.3 32 32 s-14.3 32-32 32s-32-14.3-32-32S310.3 176 328 176z M168 176c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32S150.3 176 168 176 z M338.2 394.2C315.8 367.4 282.9 352 248 352s-67.8 15.4-90.2 42.2c-13.5 16.3-38.1-4.2-24.6-20.5C161.7 339.6 203.6 320 248 320 s86.3 19.6 114.7 53.8C376.3 390 351.7 410.5 338.2 394.2L338.2 394.2z"},"seo-score-good":{viewbox:"0 0 496 512",path:"M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8z M328 176c17.7 0 32 14.3 32 32 s-14.3 32-32 32s-32-14.3-32-32S310.3 176 328 176z M168 176c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32S150.3 176 168 176 z M362.8 346.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5c22.4 26.9 55.2 42.2 90.2 42.2 s67.8-15.4 90.2-42.2C351.6 309.5 376.3 329.9 362.8 346.2L362.8 346.2z"},"seo-score-none":{viewbox:"0 0 496 512",path:"M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8z"},"seo-score-ok":{viewbox:"0 0 496 512",path:"M248 8c137 0 248 111 248 248S385 504 248 504S0 393 0 256S111 8 248 8z M360 208c0-17.7-14.3-32-32-32 s-32 14.3-32 32s14.3 32 32 32S360 225.7 360 208z M344 368c21.2 0 21.2-32 0-32H152c-21.2 0-21.2 32 0 32H344z M200 208 c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32S200 225.7 200 208z"},times:{viewbox:f,path:"M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"},"times-circle":{viewbox:"0 0 20 20",path:"M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm5 11l-3-3 3-3-2-2-3 3-3-3-2 2 3 3-3 3 2 2 3-3 3 3z"},"alert-info":{viewbox:"0 0 512 512",path:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},"alert-error":{viewbox:"0 0 512 512",path:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"},"alert-success":{viewbox:"0 0 512 512",path:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},"alert-warning":{viewbox:"0 0 576 512",path:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},"chart-square-bar":{viewbox:"0 0 24 24",path:[(0,e.createElement)("path",{key:"1",fill:"#ffffff",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})]}},b=(0,c.createSvgIconComponent)(g),y=l()(p)`
	margin-left: ${(0,c.getDirectionalStyle)("0","20px")};
	padding: ${(0,c.getDirectionalStyle)("0","20px")};
`,v=l()(b)``,x=l()(h)`
	box-shadow: ${e=>e.hasPaperStyle?`0 1px 2px ${(0,i.rgba)(i.colors.$color_black,.2)}`:"none"};
	background-color: ${e=>e.hasPaperStyle?i.colors.$color_white:"transparent"};
	padding-right: ${e=>e.hasPaperStyle?"20px":"0"};
	padding-left: ${e=>e.hasPaperStyle?"20px":"0"};
	padding-bottom: ${e=>e.headingText?"0":"10px"};
	padding-top: ${e=>e.headingText?"0":"10px"};

	*, & {
		box-sizing: border-box;

		&:before, &:after {
			box-sizing: border-box;
		}
	}

	& ${y} {
		display: flex;
		align-items: center;
		padding: 8px 0 0;
		font-size: 1rem;
		line-height: 1.5;
		margin: 0 0 16px;
		font-family: "Open Sans", sans-serif;
		font-weight: 300;
		color: ${e=>e.headingColor?e.headingColor:`${i.colors.$color_grey_dark}`};
	}

	& ${v} {
		flex: 0 0 auto;
		${(0,c.getDirectionalStyle)("margin-right","margin-left")}: 8px;
	}
`,C=t=>(0,e.createElement)(x,{className:t.className,headingColor:t.headingColor,hasPaperStyle:t.hasPaperStyle},t.headingText&&(0,e.createElement)(y,{level:t.headingLevel,className:t.headingClassName},t.headingIcon&&(0,e.createElement)(v,{icon:t.headingIcon,color:t.headingIconColor,size:t.headingIconSize}),t.headingText),t.children);C.propTypes={className:s().string,headingLevel:s().number,headingClassName:s().string,headingColor:s().string,headingIcon:s().string,headingIconColor:s().string,headingIconSize:s().string,headingText:s().string,hasPaperStyle:s().bool,children:s().any},C.defaultProps={className:"yoast-section",headingLevel:2,hasPaperStyle:!0};const w=C,_=window.lodash.flow;var E=o.n(_);const k={minHeight:32,verticalPadding:4,borderWidth:1},$=k.minHeight-2*k.verticalPadding-2*k.borderWidth;function S(e){return l()(e)`
		display: inline-flex;
		align-items: center;
		justify-content: center;
		vertical-align: middle;
		border-width: ${`${k.borderWidth}px`};
		border-style: solid;
		margin: 0;
		padding: ${`${k.verticalPadding}px`} 10px;
		border-radius: 3px;
		cursor: pointer;
		box-sizing: border-box;
		font-size: inherit;
		font-family: inherit;
		font-weight: inherit;
		text-align: ${(0,c.getDirectionalStyle)("left","right")};
		overflow: visible;
		min-height: ${`${k.minHeight}px`};
		transition: var(--yoast-transition-default);

		svg {
			// Safari 10
			align-self: center;
		}

		// Only needed for IE 10+. Don't add spaces within brackets for this to work.
		@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
			::after {
				display: inline-block;
				content: "";
				min-height: ${`${$}px`};
			}
		}
	`}function T(e){return l()(e)`
		&::-moz-focus-inner {
			border-width: 0;
		}

		&:focus {
			outline: none;
			border-color: ${e=>e.focusBorderColor};
			color: ${e=>e.focusColor};
			background-color: ${e=>e.focusBackgroundColor};
			box-shadow: 0 0 3px ${e=>(0,i.rgba)(e.focusBoxShadowColor,.8)}
		}
	`}function q(e){return l()(e)`
		&:hover {
			color: ${e=>e.hoverColor};
			background-color: ${e=>e.hoverBackgroundColor};
			border-color: var(--yoast-color-border--default);
		}
	`}function O(e){return l()(e)`
		&:active {
			color: ${e=>e.activeColor};
			background-color: ${e=>e.activeBackgroundColor};
			border-color: ${e=>e.hoverBorderColor};
			box-shadow: inset 0 2px 5px -3px ${e=>(0,i.rgba)(e.activeBorderColor,.5)}
		}
	`}const N=E()([O,T,q,S]),R=N(l().button`
		color: ${e=>e.textColor};
		border-color: ${e=>e.borderColor};
		background: ${e=>e.backgroundColor};
		box-shadow: 0 1px 0 ${e=>(0,i.rgba)(e.boxShadowColor,1)};
	`);R.propTypes={type:s().string,backgroundColor:s().string,textColor:s().string,borderColor:s().string,boxShadowColor:s().string,hoverColor:s().string,hoverBackgroundColor:s().string,activeColor:s().string,activeBackgroundColor:s().string,activeBorderColor:s().string,focusColor:s().string,focusBackgroundColor:s().string,focusBorderColor:s().string,focusBoxShadowColor:s().string},R.defaultProps={type:"button",backgroundColor:i.colors.$color_button,textColor:i.colors.$color_button_text,borderColor:i.colors.$color_button_border,boxShadowColor:i.colors.$color_button_border,hoverColor:i.colors.$color_button_text_hover,hoverBackgroundColor:i.colors.$color_button_hover,activeColor:i.colors.$color_button_text_hover,activeBackgroundColor:i.colors.$color_button,activeBorderColor:i.colors.$color_button_border_active,focusColor:i.colors.$color_button_text_hover,focusBackgroundColor:i.colors.$color_white,focusBorderColor:i.colors.$color_blue,focusBoxShadowColor:i.colors.$color_blue_dark};const P=R,B=N(l().a`
		text-decoration: none;
		color: ${e=>e.textColor};
		border-color: ${e=>e.borderColor};
		background: ${e=>e.backgroundColor};
		box-shadow: 0 1px 0 ${e=>(0,i.rgba)(e.boxShadowColor,1)};
	`);B.propTypes={backgroundColor:s().string,textColor:s().string,borderColor:s().string,boxShadowColor:s().string,hoverColor:s().string,hoverBackgroundColor:s().string,hoverBorderColor:s().string,activeColor:s().string,activeBackgroundColor:s().string,activeBorderColor:s().string,focusColor:s().string,focusBackgroundColor:s().string,focusBorderColor:s().string,focusBoxShadowColor:s().string},B.defaultProps={backgroundColor:i.colors.$color_button,textColor:i.colors.$color_button_text,borderColor:i.colors.$color_button_border,boxShadowColor:i.colors.$color_button_border,hoverColor:i.colors.$color_button_text_hover,hoverBackgroundColor:i.colors.$color_button_hover,hoverBorderColor:i.colors.$color_button_border_hover,activeColor:i.colors.$color_button_text_hover,activeBackgroundColor:i.colors.$color_button,activeBorderColor:i.colors.$color_button_border_hover,focusColor:i.colors.$color_button_text_hover,focusBackgroundColor:i.colors.$color_white,focusBorderColor:i.colors.$color_blue,focusBoxShadowColor:i.colors.$color_blue_dark};const I="yoast-button yoast-button--",z={buy:{iconAfter:"yoast-button--buy__caret"},edit:{iconBefore:"yoast-button--edit"},upsell:{iconAfter:"yoast-button--buy__caret"}},M={primary:I+"primary",secondary:I+"secondary",buy:I+"buy",hide:"yoast-hide",remove:"yoast-remove",upsell:I+"buy",purple:I+"primary",grey:I+"secondary",yellow:I+"buy",edit:I+"primary"},L=(e,t)=>{let o=M[e];return t&&(o+=" yoast-button--small"),o},D=e=>z[e]||null,A=t=>{const{children:o,className:r,variant:n,small:s,type:a,buttonRef:l,...i}=t,c=D(n),d=c&&c.iconBefore,p=c&&c.iconAfter;return(0,e.createElement)("button",{ref:l,className:r||L(n,s),type:a,...i},!!d&&(0,e.createElement)("span",{className:d}),o,!!p&&(0,e.createElement)("span",{className:p}))};A.propTypes={onClick:s().func,type:s().string,className:s().string,buttonRef:s().object,small:s().bool,variant:s().oneOf(Object.keys(M)),children:s().oneOfType([s().node,s().arrayOf(s().node)])},A.defaultProps={className:"",type:"button",variant:"primary",small:!1,children:null,onClick:null,buttonRef:null};const F=t=>{const{children:o,className:r,variant:n,small:s,buttonRef:a,...l}=t,i=D(n),c=i&&i.iconBefore,d=i&&i.iconAfter;return(0,e.createElement)("a",{className:r||L(n,s),ref:a,...l},!!c&&(0,e.createElement)("span",{className:c}),o,!!d&&(0,e.createElement)("span",{className:d}))};F.propTypes={href:s().string.isRequired,variant:s().oneOf(Object.keys(M)),small:s().bool,className:s().string,buttonRef:s().object,children:s().oneOfType([s().node,s().arrayOf(s().node)])},F.defaultProps={className:"",variant:"primary",small:!1,children:null,buttonRef:null};const j=window.wp.i18n,U=(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512",role:"img","aria-hidden":"true",focusable:"false"},(0,e.createElement)("path",{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"})),H=t=>(0,e.createElement)("button",{className:"yoast-close","aria-label":(0,j.__)("Close","wordpress-seo"),type:"button",...t},U);H.propTypes={onClick:s().func.isRequired};const W={linkTo:s().string,linkText:s().string},V={linkTo:"",linkText:""},K=({linkTo:t,linkText:o})=>(0,e.createElement)("a",{className:"yoast-help",target:"_blank",href:t,rel:"noopener noreferrer"},(0,e.createElement)("span",{className:"yoast-help__icon"},(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 12",role:"img","aria-hidden":"true",focusable:"false"},(0,e.createElement)("path",{d:"M12 6A6 6 0 110 6a6 6 0 0112 0zM6.2 2C4.8 2 4 2.5 3.3 3.5l.1.4.8.7.4-.1c.5-.5.8-.9 1.4-.9.5 0 1.1.4 1.1.8s-.3.6-.7.9C5.8 5.6 5 6 5 7c0 .2.2.4.3.4h1.4L7 7c0-.8 2-.8 2-2.6C9 3 7.5 2 6.2 2zM6 8a1.1 1.1 0 100 2.2A1.1 1.1 0 006 8z"}))),(0,e.createElement)("span",{className:"screen-reader-text"},o),(0,e.createElement)("span",{className:"screen-reader-text"},/* translators: Hidden accessibility text. */
(0,j.__)("(Opens in a new browser tab)","wordpress-seo")));K.propTypes=W,K.defaultProps=V;const G=K,Y=({inLabel:t})=>(0,e.createElement)("span",{className:t?"yoast-badge yoast-badge__in-label yoast-new-badge":"yoast-badge yoast-new-badge"},(0,j.__)("New","wordpress-seo"));Y.propTypes={inLabel:s().bool},Y.defaultProps={inLabel:!1};const Z=Y,X=({inLabel:t})=>(0,e.createElement)("span",{className:t?"yoast-badge yoast-badge__in-label yoast-premium-badge":"yoast-badge yoast-premium-badge"},"Premium");X.propTypes={inLabel:s().bool},X.defaultProps={inLabel:!1};const J=X,Q=({htmlFor:t,label:o,linkTo:r,linkText:n,description:s,children:a,wrapperClassName:l,titleClassName:i,hasNewBadge:c,hasPremiumBadge:d})=>{const p=t?(0,e.createElement)("label",{htmlFor:t},o):(0,e.createElement)("b",null,o);return(0,e.createElement)("div",{className:l},""!==o&&(0,e.createElement)("div",{className:i},p,d&&(0,e.createElement)(J,{inLabel:!0}),c&&(0,e.createElement)(Z,{inLabel:!0}),""!==r&&(0,e.createElement)(G,{linkTo:r,linkText:n})),""!==s&&(0,e.createElement)("p",{className:"field-group-description"},s),a)},ee={label:s().string,description:s().string,children:s().oneOfType([s().node,s().arrayOf(s().node)]),wrapperClassName:s().string,titleClassName:s().string,htmlFor:s().string,...W},te={label:"",description:"",children:[],wrapperClassName:"yoast-field-group",titleClassName:"yoast-field-group__title",htmlFor:"",...V};Q.propTypes=ee,Q.defaultProps=te;const oe=Q;function re(t){const o=(0,e.useCallback)((e=>{t.onChange(e.target.value)}),[t.onChange]);return(0,e.createElement)(oe,{wrapperClassName:"yoast-field-group yoast-field-group__checkbox"},(0,e.createElement)("input",{type:"checkbox",id:t.id,checked:t.checked,onChange:o}),(0,e.createElement)("label",{htmlFor:t.id},t.label))}re.propTypes={id:s().string.isRequired,label:s().oneOfType([s().string,s().arrayOf(s().node),s().node]).isRequired,checked:s().bool,onChange:s().func.isRequired},re.defaultProps={checked:!1};const ne={width:s().number.isRequired,name:s().string.isRequired,number:s().number.isRequired},se=t=>{
/* translators: Hidden accessibility text; %d expands to number of occurrences. */
const o=(0,j.sprintf)((0,j.__)("%d occurrences","wordpress-seo"),t.number);return(0,e.createElement)("li",{key:t.name+"_dataItem",style:{"--yoast-width":`${t.width}%`}},t.name,(0,e.createElement)("span",null,t.number),(0,e.createElement)("span",{className:"screen-reader-text"},o))};se.propTypes=ne;const ae=t=>(0,e.createElement)("ul",{className:"yoast-data-model","aria-label":(0,j.__)("Prominent words","wordpress-seo")},t.items.map(se));ae.propTypes={items:s().arrayOf(s().shape(ne))},ae.defaultProps={items:[]};const le=ae,ie=t=>{const{imageSelected:o,onClick:r,onRemoveImageClick:n,selectImageButtonId:s,replaceImageButtonId:a,removeImageButtonId:l,isDisabled:i}=t,c=(0,e.useCallback)((e=>{e.target.previousElementSibling.focus(),n()}),[n]);return(0,e.createElement)("div",{className:"yoast-image-select-buttons"},(0,e.createElement)(A,{variant:"secondary",id:o?a:s,onClick:r,disabled:i},o?(0,j.__)("Replace image","wordpress-seo"):(0,j.__)("Select image","wordpress-seo")),o&&(0,e.createElement)(A,{variant:"remove",id:l,onClick:c,disabled:i},(0,j.__)("Remove image","wordpress-seo")))},ce=ie;ie.propTypes={imageSelected:s().bool,onClick:s().func,onRemoveImageClick:s().func,selectImageButtonId:s().string,replaceImageButtonId:s().string,removeImageButtonId:s().string,isDisabled:s().bool},ie.defaultProps={imageSelected:!1,onClick:()=>{},onRemoveImageClick:()=>{},selectImageButtonId:"",replaceImageButtonId:"",removeImageButtonId:"",isDisabled:!1};const de=l().div`
	display: flex;
	align-items: flex-start;
	font-size: 13px;
	line-height: 1.5;
	border: 1px solid rgba(0, 0, 0, 0.2);
	padding: 16px;
	color: ${e=>e.alertColor};
	background: ${e=>e.alertBackground};
	margin-bottom: 20px;
`,pe=l().div`
	flex-grow: 1;

	a {
		color: ${i.colors.$color_alert_link_text};
	}

	p {
		margin-top: 0;
	}
`,ue=l()(b)`
	margin-top: 0.1rem;
	${(0,c.getDirectionalStyle)("margin-right: 8px","margin-left: 8px")};
`,he=l()(P)`
	${(0,c.getDirectionalStyle)("margin: -8px -12px -8px 8px","margin: -8px 8px -12px -8px")};
	font-size: 24px;
	line-height: 1.4;
	color: ${e=>e.alertDismissColor};
	flex-shrink: 0;
	min-width: 36px;
	height: 36px;

	// Override the base button style: get rid of the button styling.
	padding: 0;

	&, &:hover, &:active {
		/* Inherits box-sizing: border-box so this doesn't change the rendered size. */
		border: 2px solid transparent;
		background: transparent;
		box-shadow: none;
		color: ${e=>e.alertDismissColor};
	}

	/* Inherits focus style from the Button component. */
	&:focus {
		background: transparent;
		color: ${e=>e.alertDismissColor};
		border-color: ${i.colors.$color_yoast_focus};
		box-shadow: 0px 0px 0px 3px ${i.colors.$color_yoast_focus_outer};
	}
`;class me extends t().Component{getTypeDisplayOptions(e){switch(e){case"error":return{color:i.colors.$color_alert_error_text,background:i.colors.$color_alert_error_background,icon:"alert-error"};case"info":return{color:i.colors.$color_alert_info_text,background:i.colors.$color_alert_info_background,icon:"alert-info"};case"success":return{color:i.colors.$color_alert_success_text,background:i.colors.$color_alert_success_background,icon:"alert-success"};case"warning":return{color:i.colors.$color_alert_warning_text,background:i.colors.$color_alert_warning_background,icon:"alert-warning"}}}render(){if(!0===this.props.isAlertDismissed)return null;const t=this.getTypeDisplayOptions(this.props.type),o=this.props.dismissAriaLabel||(0,j.__)("Dismiss this alert","wordpress-seo");
/* translators: Hidden accessibility text. */return(0,e.createElement)(de,{alertColor:t.color,alertBackground:t.background,className:this.props.className},(0,e.createElement)(ue,{icon:t.icon,color:t.color}),(0,e.createElement)(pe,null,this.props.children),"function"==typeof this.props.onDismissed?(0,e.createElement)(he,{alertDismissColor:t.color,onClick:this.props.onDismissed,"aria-label":o},"×"):null)}}me.propTypes={children:s().any.isRequired,type:s().oneOf(["error","info","success","warning"]).isRequired,onDismissed:s().func,isAlertDismissed:s().bool,dismissAriaLabel:s().string,className:s().string},me.defaultProps={onDismissed:null,isAlertDismissed:!1,dismissAriaLabel:"",className:""};const fe=me;function ge(t){const o=!1===t.usingFallback&&""!==t.imageUrl,r=t.imageUrl||t.defaultImageUrl||"",n=t.warnings.length>0&&o;let s=n?"yoast-image-select__preview yoast-image-select__preview-has-warnings":"yoast-image-select__preview";""===r&&(s="yoast-image-select__preview yoast-image-select__preview--no-preview");const a={imageSelected:o,onClick:t.onClick,onRemoveImageClick:t.onRemoveImageClick,selectImageButtonId:t.selectImageButtonId,replaceImageButtonId:t.replaceImageButtonId,removeImageButtonId:t.removeImageButtonId,isDisabled:t.isDisabled};return(0,e.createElement)("div",{className:"yoast-image-select",onMouseEnter:t.onMouseEnter,onMouseLeave:t.onMouseLeave},(0,e.createElement)(oe,{label:t.label,hasNewBadge:t.hasNewBadge,hasPremiumBadge:t.hasPremiumBadge},t.hasPreview&&(0,e.createElement)("button",{className:s,onClick:t.onClick,type:"button",disabled:t.isDisabled},""!==r&&(0,e.createElement)("img",{src:r,alt:t.imageAltText,className:"yoast-image-select__preview--image"}),(0,e.createElement)((()=>(0,e.createElement)("span",{className:"screen-reader-text"},o?(0,j.__)("Replace image","wordpress-seo"):(0,j.__)("Select image","wordpress-seo"))),null)),n&&(0,e.createElement)("div",{role:"alert"},t.warnings.map(((t,o)=>(0,e.createElement)(fe,{key:`warning${o}`,type:"warning"},t)))),(0,e.createElement)(ce,{...a})))}const be=ge;ge.propTypes={defaultImageUrl:s().string,imageUrl:s().string,imageAltText:s().string,hasPreview:s().bool.isRequired,label:s().string.isRequired,onClick:s().func,onMouseEnter:s().func,onMouseLeave:s().func,onRemoveImageClick:s().func,selectImageButtonId:s().string,replaceImageButtonId:s().string,removeImageButtonId:s().string,warnings:s().arrayOf(s().string),hasNewBadge:s().bool,isDisabled:s().bool,usingFallback:s().bool,hasPremiumBadge:s().bool},ge.defaultProps={defaultImageUrl:"",imageUrl:"",imageAltText:"",onClick:()=>{},onMouseEnter:()=>{},onMouseLeave:()=>{},onRemoveImageClick:()=>{},selectImageButtonId:"",replaceImageButtonId:"",removeImageButtonId:"",warnings:[],hasNewBadge:!1,isDisabled:!1,usingFallback:!1,hasPremiumBadge:!1};const ye=t=>{const o={...t};return t.id&&(o.htmlFor=t.id),(0,e.createElement)(oe,{...o},(0,e.createElement)("input",{id:t.id,name:t.name,value:t.value,type:t.type,className:"yoast-field-group__inputfield","aria-describedby":t.ariaDescribedBy,placeholder:t.placeholder,readOnly:t.readOnly,min:t.min,max:t.max,step:t.step,onChange:(r=t.onChange,e=>{r(e.target.value)})}));var r};ye.propTypes={id:s().string,name:s().string,value:s().string,type:s().oneOf(["text","color","date","datetime-local","email","hidden","month","number","password","search","tel","time","url","week","range"]),ariaDescribedBy:s().string,placeholder:s().string,readOnly:s().bool,min:s().number,max:s().number,step:s().number,onChange:s().func,...ee},ye.defaultProps={id:"",name:"",value:"",ariaDescribedBy:"",readOnly:!1,type:"text",placeholder:void 0,min:void 0,max:void 0,step:void 0,onChange:void 0,...te};const ve=ye,xe=window.lodash;function Ce(e){return{hours:Math.floor(e/3600),minutes:Math.floor(e%3600/60),seconds:e%3600%60}}class we extends t().Component{constructor(e){super(e),this.state={...Ce(e.duration)},this.onHoursChange=this.onHoursChange.bind(this),this.onMinutesChange=this.onMinutesChange.bind(this),this.onSecondsChange=this.onSecondsChange.bind(this)}formatValue(e,t=Number.MIN_VALUE,o=Number.MAX_VALUE){const r=parseInt(e.target.value,10)||0;return(0,xe.clamp)(r,t,o)}onHoursChange(e){this.props.onChange(3600*this.formatValue(e,0)+60*this.state.minutes+this.state.seconds)}onMinutesChange(e){this.props.onChange(3600*this.state.hours+60*this.formatValue(e,0,59)+this.state.seconds)}onSecondsChange(e){this.props.onChange(3600*this.state.hours+60*this.state.minutes+this.formatValue(e,0,59))}static getDerivedStateFromProps(e,t){const o=Ce(e.duration);return(0,xe.isEqual)(o,t)?null:{...o}}render(){const t=this.props,o=t.id;return(0,e.createElement)(oe,{...t},(0,e.createElement)("div",{className:"duration-inputs__wrapper"},(0,e.createElement)("div",{className:"duration-inputs__input-wrapper"},(0,e.createElement)("label",{htmlFor:o+"-hours"},(0,j.__)("hours","wordpress-seo")),(0,e.createElement)("input",{id:o+"-hours",name:"hours",value:this.state.hours,type:"number",className:"yoast-field-group__inputfield duration-inputs__input","aria-describedby":t.hoursAriaDescribedBy,readOnly:t.readOnly,min:0,onChange:this.onHoursChange})),(0,e.createElement)("div",{className:"duration-inputs__input-wrapper"},(0,e.createElement)("label",{htmlFor:o+"-minutes"},(0,j.__)("minutes","wordpress-seo")),(0,e.createElement)("input",{id:o+"-minutes",name:"minutes",value:this.state.minutes,type:"number",className:"yoast-field-group__inputfield duration-inputs__input","aria-describedby":t.minutesAriaDescribedBy,readOnly:t.readOnly,min:0,max:59,onChange:this.onMinutesChange})),(0,e.createElement)("div",{className:"duration-inputs__input-wrapper"},(0,e.createElement)("label",{htmlFor:o+"-seconds"},(0,j.__)("seconds","wordpress-seo")),(0,e.createElement)("input",{id:o+"-seconds",name:"seconds",value:this.state.seconds,type:"number",className:"yoast-field-group__inputfield duration-inputs__input","aria-describedby":t.secondsAriaDescribedBy,readOnly:t.readOnly,min:0,max:59,onChange:this.onSecondsChange}))))}}we.propTypes={duration:s().number.isRequired,hoursAriaDescribedBy:s().string,minutesAriaDescribedBy:s().string,secondsAriaDescribedBy:s().string,id:s().string.isRequired,...ee},we.defaultProps={hoursAriaDescribedBy:"",minutesAriaDescribedBy:"",secondsAriaDescribedBy:"",...te};const _e=we;class Ee extends t().Component{getInsightsCardContent(){return(0,e.createElement)("div",{className:"yoast-insights-card__content"},(0,e.createElement)("p",{className:"yoast-insights-card__score"},(0,e.createElement)("span",{className:"yoast-insights-card__amount"},this.props.amount),this.props.unit),this.props.description&&(0,e.createElement)("div",{className:"yoast-insights-card__description"},this.props.description))}render(){return(0,e.createElement)(oe,{label:this.props.title,linkTo:this.props.linkTo,linkText:this.props.linkText,wrapperClassName:"yoast-insights-card"},this.getInsightsCardContent())}}const ke=Ee;Ee.propTypes={title:s().string,amount:s().oneOfType([s().number,s().oneOf(["?"])]).isRequired,description:s().element,unit:s().string,linkTo:s().string,linkText:s().string},Ee.defaultProps={title:"",description:null,unit:"",linkTo:"",linkText:""};const $e={options:s().array.isRequired,onChange:s().func.isRequired,groupName:s().string.isRequired,id:s().string.isRequired,selected:s().oneOfType([s().string,s().number])},Se={selected:null},Te=({value:t,label:o,checked:r,onChange:n,groupName:s,id:a})=>(0,e.createElement)(e.Fragment,null,(0,e.createElement)("input",{type:"radio",name:s,id:a,value:t,onChange:n,checked:r}),(0,e.createElement)("label",{htmlFor:a},o));Te.propTypes={value:s().oneOfType([s().string,s().number]).isRequired,label:s().string.isRequired,checked:s().bool,groupName:s().string.isRequired,onChange:s().func,id:s().string.isRequired},Te.defaultProps={checked:!1,onChange:xe.noop};const qe=({options:t,onChange:o,groupName:r,id:n,selected:s})=>(0,e.createElement)("div",{className:"yoast-field-group__radiobutton"},t.map((t=>(0,e.createElement)(Te,{key:t.value,groupName:r,checked:s===t.value,onChange:o,id:`${n}_${t.value}`,...t}))));qe.propTypes=$e,qe.defaultProps=Se;const Oe=({options:t,onChange:o,groupName:r,id:n,selected:s})=>(0,e.createElement)("div",{onChange:o},t.map((t=>(0,e.createElement)("div",{className:"yoast-field-group__radiobutton yoast-field-group__radiobutton--vertical",key:t.value},(0,e.createElement)(Te,{groupName:r,checked:s===t.value,id:`${n}_${t.value}`,...t})))));Oe.propTypes=$e,Oe.defaultProps=Se;const Ne=t=>{const{id:o,options:r,groupName:n,onChange:s,vertical:a,selected:l,...i}=t,c=(e=>e||Math.random().toString(36).substr(2,6))(o),d={options:r,groupName:n,selected:l,onChange:e=>s(e.target.value),id:c};return(0,e.createElement)(oe,{...i},a?(0,e.createElement)(Oe,{...d}):(0,e.createElement)(qe,{...d}))};Ne.propTypes={id:s().string,groupName:s().string.isRequired,options:s().arrayOf(s().shape({value:s().oneOfType([s().string,s().number]).isRequired,label:s().string.isRequired})).isRequired,selected:s().oneOfType([s().string,s().number]),onChange:s().func,vertical:s().bool,...ee},Ne.defaultProps={id:"",vertical:!1,selected:null,onChange:()=>{},...te};const Re=Ne,Pe=window.yoast.reactSelect;var Be=o.n(Pe);const Ie=s().shape({name:s().string,value:s().string}),ze={id:s().string.isRequired,name:s().string,options:s().arrayOf(Ie).isRequired,selected:s().oneOfType([s().arrayOf(s().string),s().string]),onChange:s().func,disabled:s().bool,...ee},Me={name:"",selected:[],onChange:()=>{},disabled:!1,...te},Le=({name:t,value:o})=>(0,e.createElement)("option",{key:o,value:o},t);Le.propTypes={name:s().string.isRequired,value:s().string.isRequired};const De=t=>{const{id:o,isMulti:r,isSearchable:n,inputId:s,selected:a,options:l,name:i,onChange:c,...d}=t,p=Array.isArray(a)?a:[a],u=(e=>e.map((e=>({value:e.value,label:e.name}))))(l),h=u.filter((e=>p.includes(e.value)));return(0,e.createElement)(oe,{...d,htmlFor:s},(0,e.createElement)(Be(),{isMulti:r,id:o,name:i,inputId:s,value:h,options:u,hideSelectedOptions:!1,onChange:c,className:"yoast-select-container",classNamePrefix:"yoast-select",isClearable:!1,isSearchable:n,placeholder:""}))};De.propTypes=ze,De.defaultProps=Me;const Ae=t=>{const{onChange:o}=t,r=(0,e.useCallback)((e=>o(e.value)));return(0,e.createElement)(De,{...t,isMulti:!1,isSearchable:!0,onChange:r})};Ae.propTypes=ze,Ae.defaultProps=Me;const Fe=t=>{const{onChange:o}=t,r=(0,e.useCallback)((e=>{e||(e=[]),o(e.map((e=>e.value)))}));return(0,e.createElement)(De,{...t,isMulti:!0,isSearchable:!1,onChange:r})};Fe.propTypes=ze,Fe.defaultProps=Me;class je extends t().Component{constructor(e){super(e),this.onBlurHandler=this.onBlurHandler.bind(this),this.onInputHandler=this.onInputHandler.bind(this),this.state={selected:this.props.selected}}onBlurHandler(e){this.props.onChange(e.target.value)}onInputHandler(e){this.setState({selected:e.target.value}),this.props.onOptionFocus&&this.props.onOptionFocus(e.target.name,e.target.value)}componentDidUpdate(e){e.selected!==this.props.selected&&this.setState({selected:this.props.selected})}render(){const{id:t,options:o,name:r,disabled:n,...s}=this.props;return(0,e.createElement)(oe,{...s,htmlFor:t},(0,e.createElement)("select",{id:t,name:r,value:this.state.selected,onBlur:this.onBlurHandler,onInput:this.onInputHandler,onChange:xe.noop,disabled:n},o.map(Le)))}}function Ue(t){let o=t.rating;o<0&&(o=0),o>5&&(o=5);const r=20*o;return(0,e.createElement)("div",{"aria-hidden":"true",className:"yoast-star-rating"},(0,e.createElement)("span",{className:"yoast-star-rating__placeholder",role:"img"},(0,e.createElement)("span",{className:"yoast-star-rating__fill",style:{width:r+"%"}})))}je.propTypes={...ze,onOptionFocus:s().func},je.defaultProps={...Me,onOptionFocus:null};const He=Ue;Ue.propTypes={rating:s().number.isRequired};const We=()=>(0,e.createElement)("span",{className:"yoast-badge yoast-beta-badge"},(0,j.__)("Beta","wordpress-seo")),Ve=t=>{const{children:o,className:r,prefixIcon:n,suffixIcon:s,...a}=t;return(0,e.createElement)(P,{className:r,...a},n&&n.icon&&(0,e.createElement)(b,{icon:n.icon,color:n.color,size:n.size}),o,s&&s.icon&&(0,e.createElement)(b,{icon:s.icon,color:s.color,size:s.size}))};Ve.propTypes={className:s().string,prefixIcon:s().shape({icon:s().string,color:s().string,size:s().string}),suffixIcon:s().shape({icon:s().string,color:s().string,size:s().string}),children:s().oneOfType([s().arrayOf(s().node),s().node,s().string])};const Ke=Ve,Ge={ScreenReaderText:{default:{clip:"rect(1px, 1px, 1px, 1px)",position:"absolute",height:"1px",width:"1px",overflow:"hidden"},focused:{clip:"auto",display:"block",left:"5px",top:"5px",height:"auto",width:"auto",zIndex:"100000",position:"absolute",backgroundColor:"#eeeeee ",padding:"10px"}}},Ye=t=>(0,e.createElement)("span",{className:"screen-reader-text",style:Ge.ScreenReaderText.default},t.children);Ye.propTypes={children:s().string.isRequired};const Ze=Ye,Xe=l().span`
	flex-grow: 1;
	overflow-x: hidden;
	line-height: normal; // Avoid vertical scrollbar in IE 11 when rendered in the WP sidebar.
`,Je=l().span`
	display: block;
	line-height: 1.5; 
	text-overflow: ellipsis;
	overflow: hidden;
	color: ${i.colors.$color_headings};
`,Qe=l().span`
	display: block;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	font-size: 0.8125rem;
	margin-top: 2px;
`,et=t=>(0,e.createElement)(Xe,null,(0,e.createElement)(Je,null,t.title,t.titleScreenReaderText&&(0,e.createElement)(Ze,null," "+t.titleScreenReaderText)),t.subTitle&&(0,e.createElement)(Qe,null,t.subTitle));et.propTypes={title:s().string.isRequired,titleScreenReaderText:s().string,subTitle:s().string};const tt=l().div`
	padding: 0 16px;
	margin-bottom: 16px;
`,ot=l().div`
	background-color: ${i.colors.$color_white};
`,rt=l()(ot)`
	border-top: var(--yoast-border-default);
`,nt=l()(Ke)`
	width: 100%;
	background-color: ${i.colors.$color_white};
	padding: 16px;
	justify-content: flex-start;
	border-color: transparent;
	border: none;
	border-radius: 0;
	box-shadow: none;
	font-weight: normal;

	:focus {
		outline: 1px solid ${i.colors.$color_blue};
		outline-offset: -1px;
	}

	:active {
		box-shadow: none;
		background-color: ${i.colors.$color_white};
	}

	svg {
		${e=>e.hasSubTitle?"align-self: flex-start;":""}
		&:first-child {
			${(0,c.getDirectionalStyle)("margin-right: 8px","margin-left: 8px")};
		}
		&:last-child {
			${(0,c.getDirectionalStyle)("margin-left: 8px","margin-right: 8px")};
		}
	}
`;function st(t,o){const r=`h${o.level}`,n=l()(r)`
		margin: 0 !important;
		padding: 0 !important;
		font-size: ${o.fontSize} !important;
		font-weight: ${o.fontWeight} !important;
		color: ${o.color} !important;

		${Je} {
			font-weight: ${o.fontWeight};
			color: ${o.color};
		}
	`;return function(o){return(0,e.createElement)(n,null,(0,e.createElement)(t,{...o}))}}const at=st(nt,{level:2,fontSize:"1rem",fontWeight:"normal"});function lt(t){const{children:o,className:r,hasPadding:n,hasSeparator:s,Heading:a,id:l,isOpen:i,onToggle:c,prefixIcon:d,prefixIconCollapsed:p,suffixIcon:u,suffixIconCollapsed:h,subTitle:m,title:f,titleScreenReaderText:g}=t;let b=o;i&&n&&(b=(0,e.createElement)(tt,{className:"collapsible_content"},o));const y=s?rt:ot;return(0,e.createElement)(y,{className:r},(0,e.createElement)(a,{id:l,"aria-expanded":i,onClick:c,prefixIcon:i?d:p,suffixIcon:i?u:h,hasSubTitle:!!m},(0,e.createElement)(et,{title:f,titleScreenReaderText:g,subTitle:m})),b)}lt.propTypes={children:s().oneOfType([s().arrayOf(s().node),s().node]),className:s().string,Heading:s().func,isOpen:s().bool.isRequired,hasSeparator:s().bool,hasPadding:s().bool,onToggle:s().func.isRequired,prefixIcon:s().shape({icon:s().string,color:s().string,size:s().string}),prefixIconCollapsed:s().shape({icon:s().string,color:s().string,size:s().string}),subTitle:s().string,suffixIcon:s().shape({icon:s().string,color:s().string,size:s().string}),suffixIconCollapsed:s().shape({icon:s().string,color:s().string,size:s().string}),title:s().string.isRequired,titleScreenReaderText:s().string,id:s().string},lt.defaultProps={Heading:at,id:null,children:null,className:null,subTitle:null,titleScreenReaderText:null,hasSeparator:!1,hasPadding:!1,prefixIcon:null,prefixIconCollapsed:null,suffixIcon:null,suffixIconCollapsed:null};class it extends t().Component{constructor(e){super(e),this.state={isOpen:e.initialIsOpen,headingProps:e.headingProps,Heading:st(nt,e.headingProps)},this.toggleCollapse=this.toggleCollapse.bind(this)}static getDerivedStateFromProps(e,t){return e.headingProps.level!==t.headingProps.level||e.headingProps.fontSize!==t.headingProps.fontSize||e.headingProps.fontWeight!==t.headingProps.fontWeight||e.headingProps.color!==t.headingProps.color?{...t,headingProps:e.headingProps,Heading:st(nt,e.headingProps)}:null}toggleCollapse(){const{isOpen:e}=this.state,{onToggle:t}=this.props;t&&!1===t(e)||this.setState({isOpen:!e})}render(){const{isOpen:t}=this.state,{children:o}=this.props,r=(0,xe.omit)(this.props,["children","onToggle"]);return(0,e.createElement)(lt,{Heading:this.state.Heading,isOpen:t,onToggle:this.toggleCollapse,...r},t&&o)}}it.propTypes={children:s().oneOfType([s().arrayOf(s().node),s().node]),className:s().string,initialIsOpen:s().bool,hasSeparator:s().bool,hasPadding:s().bool,prefixIcon:s().shape({icon:s().string,color:s().string,size:s().string}),prefixIconCollapsed:s().shape({icon:s().string,color:s().string,size:s().string}),suffixIcon:s().shape({icon:s().string,color:s().string,size:s().string}),suffixIconCollapsed:s().shape({icon:s().string,color:s().string,size:s().string}),title:s().string.isRequired,titleScreenReaderText:s().string,subTitle:s().string,headingProps:s().shape({level:s().number,fontSize:s().string,fontWeight:s().string,color:s().string}),onToggle:s().func},it.defaultProps={hasSeparator:!1,hasPadding:!1,initialIsOpen:!1,subTitle:null,titleScreenReaderText:null,children:null,className:null,prefixIcon:null,prefixIconCollapsed:null,suffixIcon:{icon:"chevron-up",color:i.colors.$black,size:"24px"},suffixIconCollapsed:{icon:"chevron-down",color:i.colors.$black,size:"24px"},headingProps:{level:2,fontSize:"1rem",fontWeight:"normal",color:i.colors.$color_headings},onToggle:null};const ct=it,dt=l().div`
	box-sizing: border-box;

	p {
		margin: 0;
		font-size: 14px;
	}
`,pt=l().h3`
	margin: 8px 0;
	font-size: 1em;
`,ut=l().ul`
	margin: 0;
	list-style: none;
	padding: 0;
`,ht=(0,c.makeOutboundLink)(l().a`
	display: inline-block;
	margin-bottom: 4px;
	font-size: 14px;
`),mt=l().li`
	margin: 8px 0;
`,ft=l().div`
	a {
		margin: 8px 0 0;
	}
`,gt=t=>(0,e.createElement)(mt,{className:t.className},(0,e.createElement)(ht,{className:`${t.className}-link`,href:t.link},t.title),(0,e.createElement)("p",{className:`${t.className}-description`},t.description));gt.propTypes={className:s().string.isRequired,title:s().string.isRequired,link:s().string.isRequired,description:s().string.isRequired};const bt=t=>(0,e.createElement)(dt,{className:t.className},(0,e.createElement)(pt,{className:`${t.className}__header`},t.title?t.title:t.feed.title),(0,e.createElement)(ut,{className:`${t.className}__posts`,role:"list"},t.feed.items.map((o=>(0,e.createElement)(gt,{className:`${t.className}__post`,key:o.link,title:o.title,link:o.link,description:o.description})))),t.footerLinkText&&(0,e.createElement)(ft,{className:`${t.className}__footer`},(0,e.createElement)(ht,{className:`${t.className}__footer-link`,href:t.feedLink?t.feedLink:t.feed.link},t.footerLinkText)));bt.propTypes={className:s().string,feed:s().object.isRequired,title:s().string,footerLinkText:s().string,feedLink:s().string},bt.defaultProps={className:"articlelist-feed"};const yt=bt,vt=l().span`
	position: absolute;
	
	top: 8px;
	left: -8px;
	
	font-weight: 500;
	color: ${e=>e.textColor};
	line-height: 16px;
	
	background-color: ${e=>e.backgroundColor};
	padding: 8px 16px;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`,xt=l().span`
	position: absolute;
	
	top: 40px;
	left: -8px;
	
	/* This code makes the triangle. */
	border-top: 8px solid ${i.colors.$color_purple_dark};
	border-left: 8px solid transparent;
`;function Ct(t){return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(vt,{backgroundColor:t.backgroundColor,textColor:t.textColor},t.children),(0,e.createElement)(xt,null))}Ct.propTypes={backgroundColor:s().string,textColor:s().string,children:s().any},Ct.defaultProps={backgroundColor:i.colors.$color_pink_dark,textColor:i.colors.$color_white,children:null};const wt=l().div`
	position: relative;
	display: flex;
	flex-direction: column;
	background-color: ${i.colors.$color_white};
	width: 100%;
	box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
`,_t=l().img`
	width: 100%;
	vertical-align: bottom;
`,Et=l().div`
	padding: 12px 16px;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
`,kt=l().a`
	text-decoration: none;
	color: ${i.colors.$color_pink_dark};
	/* IE11 bug header image height see https://github.com/philipwalton/flexbugs#flexbug-5 */
	overflow: hidden;

	&:hover,
	&:focus,
	&:active {
		text-decoration: underline;
		color: ${i.colors.$color_pink_dark};
	}

	&:focus,
	&:active {
		box-shadow: none;
	}
`,$t=l().h2`
	margin: 16px 16px 0 16px;
	font-weight: 400;
	font-size: 1.5em;
	line-height: 1.2;
	color: currentColor;
`,St=(0,c.makeOutboundLink)(kt);class Tt extends t().Component{getHeader(){return this.props.header?this.props.header.link?(0,e.createElement)(St,{href:this.props.header.link},(0,e.createElement)(_t,{src:this.props.header.image,alt:""}),(0,e.createElement)($t,null,this.props.header.title)):(0,e.createElement)(e.Fragment,null,(0,e.createElement)(_t,{src:this.props.header.image,alt:""}),";",(0,e.createElement)($t,null,this.props.header.title)):null}getBanner(){return this.props.banner?(0,e.createElement)(Ct,{...this.props.banner},this.props.banner.text):null}render(){return(0,e.createElement)(wt,{className:this.props.className,id:this.props.id},this.getHeader(),this.getBanner(),(0,e.createElement)(Et,null,this.props.children))}}const qt=Tt,Ot=l()(Tt)`
	height: 100%;
`;Tt.propTypes={className:s().string,id:s().string,header:s().shape({title:s().string,image:s().string.isRequired,link:s().string}),banner:s().shape({text:s().string.isRequired,textColor:s().string,backgroundColor:s().string}),children:s().any},Tt.defaultProps={className:"",id:"",header:null,banner:null,children:null};const Nt=l().a`
	color: ${i.colors.$color_black};
	white-space: nowrap;
	display: block;
	border-radius: 4px;
	background-color: ${i.colors.$color_grey_cta};
	padding: 12px 16px;
	box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.2);
	border: none;
	text-decoration: none;
	font-weight: bold;
	font-size: inherit;
	margin-bottom: 8px;

	&:hover,
	&:focus,
	&:active {
		color: ${i.colors.$color_black};
		background-color: ${i.colors.$color_grey_hover};
	}

	&:active {
		background-color: ${i.colors.$color_grey_hover};
		transform: translateY( 1px );
		box-shadow: none;
		filter: none;
	}
`,Rt=l().a`
	cursor: pointer;
	color: ${i.colors.$color_black};
	white-space: nowrap;
	display: block;
	border-radius: 4px;
	background-color: ${i.colors.$color_button_upsell};
	padding: 12px 16px;
	box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.2);
	border: none;
	text-decoration: none;
	font-weight: bold;
	font-size: inherit;
	margin-top: 0;
	margin-bottom: 8px;

	&:hover,
	&:focus,
	&:active {
		color: ${i.colors.$color_black};
		background: ${i.colors.$color_button_upsell_hover};
	}

	&:active {
		background-color: ${i.colors.$color_button_hover_upsell};
		transform: translateY( 1px );
		box-shadow: none;
		filter: none;
	}
`,Pt=l().a`
	font-weight: bold;
`,Bt=(0,c.makeOutboundLink)(Pt),It=l().div`
	text-align: center;
`,zt=l().div`
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	li {
		position: relative;
		${(0,c.getDirectionalStyle)("margin-left","margin-right")}: 16px;

		&:before {
			content: "✓";
			color: ${i.colors.$color_green};
			position: absolute;
			font-weight: bold;
			display: inline-block;
			${(0,c.getDirectionalStyle)("left","right")}: -16px;
		}
	}
`,Mt=l().div`
	margin-bottom: 12px;
	border-bottom: 1px ${i.colors.$color_grey} solid;
	flex-grow: 1;
`;class Lt extends t().Component{getActionBlock(t,o){const r=(0,c.makeOutboundLink)(t);return"true"===o?(0,e.createElement)(It,null,(0,e.createElement)(r,{href:this.props.courseUrl},this.props.ctaButtonData.ctaButtonCopy)):(0,e.createElement)(It,null,(0,e.createElement)(r,{href:this.props.ctaButtonData.ctaButtonUrl},this.props.ctaButtonData.ctaButtonCopy),(0,e.createElement)(Bt,{href:this.props.courseUrl},this.props.readMoreLinkText))}render(){const t="regular"===this.props.ctaButtonData.ctaButtonType?Nt:Rt;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(Mt,null,(0,e.createElement)(zt,{dangerouslySetInnerHTML:{__html:this.props.description}})),this.getActionBlock(t,this.props.isBundle))}}const Dt=Lt;Lt.propTypes={description:s().string,courseUrl:s().string,ctaButtonData:s().object,readMoreLinkText:s().string,isBundle:s().string},Lt.defaultProps={description:"",courseUrl:"",ctaButtonData:{},readMoreLinkText:"",isBundle:""};const At=window.lodash.omit;var Ft=o.n(At);const jt=E()([O,T,q])(l().button`
		display: inline-flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		box-sizing: border-box;
		border: 1px solid transparent;
		margin: 0;
		padding: 8px;
		overflow: visible;
		font-family: inherit;
		font-weight: inherit;
		color: ${e=>e.textColor};
		background: ${e=>e.backgroundColor};
		font-size: ${e=>e.textFontSize};

		svg {
			margin: 0 0 8px;
			flex-shrink: 0;
			fill: currentColor;
			// Safari 10
			align-self: center;
		}

		&:active {
			box-shadow: none;
		}
	`),Ut=t=>{const{children:o,icon:r,textColor:n}=t,s=Ft()(t,"icon");return(0,e.createElement)(jt,{...s},(0,e.createElement)(b,{icon:r,color:n}),o)};Ut.propTypes={type:s().string,icon:s().string.isRequired,textColor:s().string,textFontSize:s().string,backgroundColor:s().string,borderColor:s().string,hoverColor:s().string,hoverBackgroundColor:s().string,hoverBorderColor:s().string,activeColor:s().string,activeBackgroundColor:s().string,activeBorderColor:s().string,focusColor:s().string,focusBackgroundColor:s().string,focusBorderColor:s().string,focusBoxShadowColor:s().string,children:s().oneOfType([s().arrayOf(s().node),s().node,s().string]).isRequired},Ut.defaultProps={type:"button",textColor:i.colors.$color_blue,textFontSize:"inherit",backgroundColor:"transparent",borderColor:"transparent",hoverColor:i.colors.$color_white,hoverBackgroundColor:i.colors.$color_blue,hoverBorderColor:i.colors.$color_button_border_hover,activeColor:i.colors.$color_white,activeBackgroundColor:i.colors.$color_blue,activeBorderColor:i.colors.$color_button_border_active,focusColor:i.colors.$color_white,focusBackgroundColor:i.colors.$color_blue,focusBorderColor:i.colors.$color_blue,focusBoxShadowColor:i.colors.$color_blue_dark};const Ht=Ut,Wt=t=>{const{children:o,icon:r,iconColor:n}=t;let s=b;o&&(s=function(e){return l()(e)`
		margin: ${(0,c.getDirectionalStyle)("0 8px 0 0","0 0 0 8px")};
		flex-shrink: 0;
	`}(s));const a=Ft()(t,"icon");return(0,e.createElement)(P,{...a},(0,e.createElement)(s,{icon:r,color:n}),o)};Wt.propTypes={icon:s().string.isRequired,iconColor:s().string,children:s().oneOfType([s().arrayOf(s().node),s().node,s().string])},Wt.defaultProps={iconColor:"#000"};const Vt=Wt,Kt=window.wp.a11y,Gt=l().p`
	text-align: center;
	margin: 0 0 16px;
	padding: 16px 16px 8px 16px;
	border-bottom: 4px solid ${i.colors.$color_bad};
	background: ${i.colors.$color_white};
`;class Yt extends t().Component{constructor(e){super(e),this.state={hasError:!1}}componentDidCatch(){this.setState({hasError:!0})}render(){if(this.state.hasError){const t=(0,j.__)("Something went wrong. Please reload the page.","wordpress-seo");return(0,Kt.speak)(t,"assertive"),(0,e.createElement)(Gt,null,t)}return this.props.children}}Yt.propTypes={children:s().any},Yt.defaultProps={children:null};const Zt=l().p`
	color: ${e=>e.textColor};
	font-size: ${e=>e.textFontSize};
	margin-top: 0;
`;class Xt extends e.PureComponent{render(){const{children:t,textColor:o,textFontSize:r}=this.props;return(0,e.createElement)(Zt,{textColor:o,textFontSize:r},t)}}const Jt={children:s().oneOfType([s().string,s().array]),textColor:s().string,textFontSize:s().string};Xt.propTypes={...Jt,children:Jt.children.isRequired},Xt.defaultProps={textColor:i.colors.$color_help_text};const Qt=t=>{const o=l()(t.icon)`
		width: ${t.width};
		height: ${t.height};
		${t.color?`fill: ${t.color};`:""}
		flex: 0 0 auto;
	`,r=Ft()(t,["icon","width","height","color"]);return(0,e.createElement)(o,{role:"img","aria-hidden":"true",focusable:"false",...r})};Qt.propTypes={icon:s().func.isRequired,width:s().string,height:s().string,color:s().string},Qt.defaultProps={width:"16px",height:"16px"};const eo=Qt,to=l().button`
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	min-width: 32px;
	display: inline-flex;
	border: 1px solid ${i.colors.$color_button_border};
	background-color: ${e=>e.pressed?e.pressedBackground:e.unpressedBackground};
	box-shadow: ${e=>e.pressed?`inset 0 2px 0 ${(0,i.rgba)(e.pressedBoxShadowColor,.7)}`:`0 1px 0 ${(0,i.rgba)(e.unpressedBoxShadowColor,.7)}`};
	border-radius: 3px;
	cursor: pointer;
	padding: 0;
	height: ${e=>e.pressed?"23px":"24px"};

	&:hover {
		border-color: ${e=>e.hoverBorderColor};
	}
	&:disabled {
		background-color: ${e=>e.unpressedBackground};
		box-shadow: none;
		border: none;
		cursor: default;
	}
`,oo=function(t){const o="disabled"===t.marksButtonStatus;let r;return r=o?t.disabledIconColor:t.pressed?t.pressedIconColor:t.unpressedIconColor,(0,e.createElement)(to,{disabled:o,type:"button",onClick:t.onClick,pressed:t.pressed,unpressedBoxShadowColor:t.unpressedBoxShadowColor,pressedBoxShadowColor:t.pressedBoxShadowColor,pressedBackground:t.pressedBackground,unpressedBackground:t.unpressedBackground,id:t.id,"aria-label":t.ariaLabel,"aria-pressed":t.pressed,unpressedIconColor:o?t.disabledIconColor:t.unpressedIconColor,pressedIconColor:t.pressedIconColor,hoverBorderColor:t.hoverBorderColor,className:t.className},(0,e.createElement)(b,{icon:t.icon,color:r,size:"18px"}))};oo.propTypes={id:s().string.isRequired,ariaLabel:s().string.isRequired,onClick:s().func.isRequired,unpressedBoxShadowColor:s().string,pressedBoxShadowColor:s().string,pressedBackground:s().string,unpressedBackground:s().string,pressedIconColor:s().string,unpressedIconColor:s().string,icon:s().string.isRequired,pressed:s().bool.isRequired,hoverBorderColor:s().string,marksButtonStatus:s().string,disabledIconColor:s().string,className:s().string},oo.defaultProps={unpressedBoxShadowColor:i.colors.$color_button_border,pressedBoxShadowColor:i.colors.$color_purple,pressedBackground:i.colors.$color_pink_dark,unpressedBackground:i.colors.$color_button,pressedIconColor:i.colors.$color_white,unpressedIconColor:i.colors.$color_button_text,hoverBorderColor:i.colors.$color_white,marksButtonStatus:"enabled",disabledIconColor:i.colors.$color_grey};const ro=oo,no=l().button`
	box-sizing: border-box;
	min-width: 32px;
	display: inline-block;
	border: 1px solid ${i.colors.$color_button_border};
	background-color: ${e=>e.background};
	box-shadow: ${e=>e.boxShadowColor};
	border-radius: 3px;
	cursor: pointer;
	padding: 0;
	height: "24px";
	&:hover {
		border-color: ${e=>e.hoverBorderColor};
	}
`,so=function(t){return(0,e.createElement)(no,{type:"button",onClick:t.onClick,boxShadowColor:t.boxShadowColor,background:t.background,id:t.id,"aria-label":t.ariaLabel,iconColor:t.iconColor,hoverBorderColor:t.hoverBorderColor,className:t.className},(0,e.createElement)(b,{icon:t.icon,color:t.iconColor,size:"18px"}))};so.propTypes={id:s().string.isRequired,ariaLabel:s().string.isRequired,onClick:s().func.isRequired,boxShadowColor:s().string,background:s().string,iconColor:s().string,icon:s().string.isRequired,hoverBorderColor:s().string,className:s().string},so.defaultProps={boxShadowColor:i.colors.$color_button_border,background:i.colors.$color_button,iconColor:i.colors.$color_button_text,hoverBorderColor:i.colors.$color_white};const ao=so;function lo(t){return(0,e.createElement)("iframe",{title:t.title,...t})}lo.propTypes={title:s().string.isRequired};class io extends t().Component{constructor(e){super(e),this.setReference=this.setReference.bind(this)}componentDidUpdate(){this.props.hasFocus&&this.ref.focus()}setReference(e){this.ref=e}render(){return(0,e.createElement)("input",{ref:this.setReference,type:this.props.type,name:this.props.name,defaultValue:this.props.value,onChange:this.props.onChange,autoComplete:this.props.autoComplete,className:this.props.className,...this.props.optionalAttributes})}}io.propTypes={name:s().string,type:s().oneOf(["button","checkbox","number","password","progress","radio","submit","text"]),value:s().any,onChange:s().func,optionalAttributes:s().object,hasFocus:s().bool,autoComplete:s().string,className:s().string},io.defaultProps={name:"input",type:"text",value:"",hasFocus:!1,className:"",onChange:null,optionalAttributes:{},autoComplete:null};const co=io;var po=o(6746);class uo extends t().Component{constructor(e){super(e),this.state={words:[]}}static getDerivedStateFromProps(e){const t=[...e.words];t.sort(((e,t)=>t.getOccurrences()-e.getOccurrences()));const o=t.map((e=>e.getOccurrences())),r=Math.max(...o);return{words:t.map((e=>{const t=e.getOccurrences();return{name:e.getWord(),number:t,width:t/r*100}}))}}render(){return(0,e.createElement)("div",null,this.props.header,this.props.introduction,(0,e.createElement)(le,{items:this.state.words}),this.props.footer)}}uo.propTypes={words:s().array.isRequired,header:s().element,introduction:s().element,footer:s().element},uo.defaultProps={header:null,introduction:null,footer:null};const ho=uo,mo=({words:t,researchArticleLink:o})=>{const r=(0,e.createElement)("p",{className:"yoast-field-group__title"},(0,j.__)("Prominent words","wordpress-seo")),n=(0,e.createElement)("p",null,0===t.length?(0,j.__)("Once you add a bit more copy, we'll give you a list of words that occur the most in the content. These give an indication of what your content focuses on.","wordpress-seo"):(0,j.__)("The following words occur the most in the content. These give an indication of what your content focuses on. If the words differ a lot from your topic, you might want to rewrite your content accordingly. ","wordpress-seo")),s=(0,e.createElement)("p",null,(t=>{const o=(0,j.sprintf)((0,j.__)("Read our %1$sultimate guide to keyword research%2$s to learn more about keyword research and keyword strategy.","wordpress-seo"),"{{a}}","{{/a}}");return(0,po.Z)({mixedString:o,components:{a:(0,e.createElement)("a",{href:t,target:"_blank",rel:"noreferrer"})}})})(o));return(0,e.createElement)(ho,{words:t,header:r,introduction:n,footer:s})};mo.propTypes={words:s().arrayOf(s().object).isRequired,researchArticleLink:s().string.isRequired};const fo=mo,go=l().div`
	cursor: pointer;
	font-size: 14px;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
	margin: 4px 0;
	color: #303030;
	font-weight: 500;
`,bo=t=>(0,e.createElement)("label",{htmlFor:t.for,className:t.className,...t.optionalAttributes},t.children);bo.propTypes={for:s().string.isRequired,optionalAttributes:s().shape({"aria-label":s().string,onClick:s().func,className:s().string}),children:s().any.isRequired,className:s().string},bo.defaultProps={className:"",optionalAttributes:{}};const yo=bo,vo=l().p`
	margin: 1em 0;
`,xo=(0,c.makeOutboundLink)(l().a`
	margin-left: 4px;
`);class Co extends e.PureComponent{render(){const{changeLanguageLink:t,canChangeLanguage:o,language:r,showLanguageNotice:n}=this.props;if(!n)return null;
/* Translators: %s expands to the actual language. */let s=(0,j.__)("Your site language is set to %s. ","wordpress-seo");return o||(
/* Translators: %s expands to the actual language. */
s=(0,j.__)("Your site language is set to %s. If this is not correct, contact your site administrator.","wordpress-seo")),s=(0,j.sprintf)(s,`{{strong}}${r}{{/strong}}`),s=(0,po.Z)({mixedString:s,components:{strong:(0,e.createElement)("strong",null)}}),(0,e.createElement)(vo,null,s,o&&(0,e.createElement)(xo,{href:t},(0,j.__)("Change language","wordpress-seo")))}}const wo={changeLanguageLink:s().string.isRequired,canChangeLanguage:s().bool,language:s().string.isRequired,showLanguageNotice:s().bool};Co.propTypes=wo,Co.defaultProps={canChangeLanguage:!1,showLanguageNotice:!1};const _o=({className:t})=>(""!==t&&(t+=" "),t+="yoast-loader",(0,e.createElement)("svg",{version:"1.1",id:"Y__x2B__bg",x:"0px",y:"0px",viewBox:"0 0 500 500",className:t},(0,e.createElement)("g",null,(0,e.createElement)("g",null,(0,e.createElement)("linearGradient",{id:"SVGID_1_",gradientUnits:"userSpaceOnUse",x1:"250",y1:"428.6121",x2:"250",y2:"77.122"},(0,e.createElement)("stop",{offset:"0",style:{stopColor:"#570732"}}),(0,e.createElement)("stop",{offset:"2.377558e-02",style:{stopColor:"#5D0936"}}),(0,e.createElement)("stop",{offset:"0.1559",style:{stopColor:"#771549"}}),(0,e.createElement)("stop",{offset:"0.3019",style:{stopColor:"#8B1D58"}}),(0,e.createElement)("stop",{offset:"0.4669",style:{stopColor:"#992362"}}),(0,e.createElement)("stop",{offset:"0.6671",style:{stopColor:"#A12768"}}),(0,e.createElement)("stop",{offset:"1",style:{stopColor:"#A4286A"}})),(0,e.createElement)("path",{fill:"url(#SVGID_1_)",d:"M454.7,428.6H118.4c-40.2,0-73.2-32.9-73.2-73.2V150.3c0-40.2,32.9-73.2,73.2-73.2h263.1 c40.2,0,73.2,32.9,73.2,73.2V428.6z"})),(0,e.createElement)("g",null,(0,e.createElement)("g",null,(0,e.createElement)("g",null,(0,e.createElement)("g",null,(0,e.createElement)("path",{fill:"#A4286A",d:"M357.1,102.4l-43.8,9.4L239.9,277l-47.2-147.8h-70.2l78.6,201.9c6.7,17.2,6.7,36.3,0,53.5 c-6.7,17.2,45.1-84.1,24.7-75.7c0,0,34.9,97.6,36.4,94.5c7-14.3,13.7-30.3,20.2-48.5L387.4,72 C387.4,72,358.4,102.4,357.1,102.4z"}))))),(0,e.createElement)("g",null,(0,e.createElement)("linearGradient",{id:"SVGID_2_",gradientUnits:"userSpaceOnUse",x1:"266.5665",y1:"-6.9686",x2:"266.5665",y2:"378.4586"},(0,e.createElement)("stop",{offset:"0",style:{stopColor:"#77B227"}}),(0,e.createElement)("stop",{offset:"0.4669",style:{stopColor:"#75B027"}}),(0,e.createElement)("stop",{offset:"0.635",style:{stopColor:"#6EAB27"}}),(0,e.createElement)("stop",{offset:"0.7549",style:{stopColor:"#63A027"}}),(0,e.createElement)("stop",{offset:"0.8518",style:{stopColor:"#529228"}}),(0,e.createElement)("stop",{offset:"0.9339",style:{stopColor:"#3C7F28"}}),(0,e.createElement)("stop",{offset:"1",style:{stopColor:"#246B29"}})),(0,e.createElement)("path",{fill:"url(#SVGID_2_)",d:"M337,6.1l-98.6,273.8l-47.2-147.8H121L199.6,334c6.7,17.2,6.7,36.3,0,53.5 c-8.8,22.5-23.4,41.8-59,46.6v59.9c69.4,0,106.9-42.6,140.3-136.1L412.1,6.1H337z"}),(0,e.createElement)("path",{fill:"#FFFFFF",d:"M140.6,500h-6.1v-71.4l5.3-0.7c34.8-4.7,46.9-24.2,54.1-42.7c6.2-15.8,6.2-33.2,0-49l-81.9-210.3h83.7 l43.1,134.9L332.7,0h88.3L286.7,359.9c-17.9,50-36.4,83.4-58.1,105.3C205,488.9,177,500,140.6,500z M146.7,439.2v48.3 c29.9-1.2,53.3-11.1,73.1-31.1c20.4-20.5,38-52.6,55.3-100.9L403.2,12.3h-61.9L238.1,299l-51.3-160.8H130l75.3,193.5 c7.3,18.7,7.3,39.2,0,57.9C197.7,409.3,184.1,432.4,146.7,439.2z"})))));_o.propTypes={className:s().string},_o.defaultProps={className:""};const Eo=a.keyframes`
	0%   { transform: scale( 0.70 ); opacity: 0.4; }
	80%  { opacity: 1 }
	100%  { transform: scale( 0.95 ); opacity: 1 }
`,ko=l()(_o)`
	animation: ${Eo} 1.15s infinite;
	animation-direction: alternate;
	animation-timing-function: cubic-bezier(0.96, 0.02, 0.63, 0.86);
`,$o=l().div`
	padding: 8px;
`,So=l().ol`
	padding: 0;
	margin: 0;

	list-style: none;
	counter-reset: multi-step-progress-counter;

	li {
		counter-increment: multi-step-progress-counter;
	}
`,To=l().li`
	display: flex;
	align-items: baseline;

	margin: 8px 0;

	:first-child {
		margin-top: 0;
	}

	:last-child {
		margin-bottom: 0;
	}

	span {
		margin: 0 8px;
	}

	svg {
		position: relative;
		top: 2px;
	}

	::before {
		content: counter( multi-step-progress-counter );
		font-size: 12px;
		background: ${i.colors.$color_pink_dark};
		border-radius: 50%;
		min-width: 16px;
		height: 16px;
		padding: 4px;
		color: ${i.colors.$color_white};
		text-align: center;
	}
`,qo=l()(To)`
	span {
		color: ${i.colors.$palette_grey_text_light};
	}

	::before {
		background-color: ${i.colors.$palette_grey_medium_dark};
	}
`,Oo=l()(To)`
	::before {
		background-color: ${i.colors.$palette_grey_medium_dark};
	}
`;class No extends t().Component{render(){return(0,e.createElement)($o,{role:"status","aria-live":"polite","aria-relevant":"additions text","aria-atomic":!0},(0,e.createElement)(So,null,this.props.steps.map((e=>{switch(e.status){case"running":return this.renderRunningState(e);case"failed":return this.renderFailedState(e);case"finished":return this.renderFinishedState(e);default:return this.renderPendingState(e)}}))))}renderPendingState(t){return(0,e.createElement)(qo,{key:t.id},(0,e.createElement)("span",null,t.text))}renderRunningState(t){return(0,e.createElement)(Oo,{key:t.id},(0,e.createElement)("span",null,t.text),(0,e.createElement)(b,{icon:"loading-spinner"}))}renderFinishedState(t){return(0,e.createElement)(To,{key:t.id},(0,e.createElement)("span",null,t.text),(0,e.createElement)(b,{icon:"check",color:i.colors.$color_green_medium_light}))}renderFailedState(t){return(0,e.createElement)(To,{key:t.id},(0,e.createElement)("span",null,t.text),(0,e.createElement)(b,{icon:"times",color:i.colors.$color_red}))}}No.defaultProps={steps:[]},No.propTypes={steps:s().arrayOf(s().shape({status:s().oneOf(["pending","running","finished","failed"]).isRequired,text:s().string.isRequired,id:s().string.isRequired}))};const Ro=No,Po=l().div`
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
	background-color: ${e=>e.backgroundColor};
	min-height: ${e=>e.minHeight};
`;Po.propTypes={backgroundColor:s().string,minHeight:s().string},Po.defaultProps={backgroundColor:i.colors.$color_white,minHeight:"0"};const Bo=Po,Io=l().div`
	display: flex;
	align-items: center;
	padding: 24px;

	h1, h2, h3, h4, h5, h6 {
		font-size: 1.4em;
		line-height: 1;
		margin: 0 0 4px 0;

		@media screen and ( max-width: ${i.breakpoints.mobile} ) {
			${e=>e.isDismissable?"margin-right: 30px;":""}
		}
	}

	p:last-child {
		margin: 0;
	}

	@media screen and ( max-width: ${i.breakpoints.mobile} ) {
		display: block;
		position: relative;
		padding: 16px;
	}
`,zo=l().img`
	flex: 0 0 ${e=>e.imageWidth?e.imageWidth:"auto"};
	height: ${e=>e.imageHeight?e.imageHeight:"auto"};
	margin-right: 24px;

	@media screen and ( max-width: ${i.breakpoints.mobile} ) {
		display: none;
	}
`,Mo=l().div`
	flex: 1 1 auto;
`,Lo=l().button`
	flex: 0 0 40px;
	height: 40px;
	border: 0;
	margin: 0 0 0 10px;
	padding: 0;
	background: transparent;
	cursor: pointer;

	@media screen and ( max-width: ${i.breakpoints.mobile} ) {
		width: 40px;
		position: absolute;
		top: 5px;
		right: 5px;
		margin: 0;
	}
`,Do=l()(b)`
	vertical-align: middle;
`;function Ao(t){const o=`${t.headingLevel}`;return(0,e.createElement)(Bo,null,(0,e.createElement)(Io,{isDismissable:t.isDismissable},t.imageSrc&&(0,e.createElement)(zo,{src:t.imageSrc,imageWidth:t.imageWidth,imageHeight:t.imageHeight,alt:""}),(0,e.createElement)(Mo,null,(0,e.createElement)(o,null,t.title),(0,e.createElement)("p",{className:"prova",dangerouslySetInnerHTML:{__html:t.html}})),t.isDismissable&&(0,e.createElement)(Lo,{onClick:t.onClick,type:"button","aria-label":(0,j.__)("Dismiss this notice","wordpress-seo")},(0,e.createElement)(Do,{icon:"times",color:i.colors.$color_grey_text,size:"24px"}))))}Ao.propTypes={imageSrc:s().string,imageWidth:s().string,imageHeight:s().string,title:s().string,html:s().string,isDismissable:s().bool,onClick:s().func,headingLevel:s().string},Ao.defaultProps={isDismissable:!1,headingLevel:"h3"};const Fo=Ao,jo=l().progress`
	box-sizing: border-box;
	width: 100%;
	height: 8px;
	display: block;
	margin-top: 8px;
	appearance: none;
	background-color: ${e=>e.backgroundColor};
	border: 1px solid ${e=>e.borderColor};

	::-webkit-progress-bar {
	   	background-color: ${e=>e.backgroundColor};
	}

	::-webkit-progress-value {
		background-color: ${e=>e.progressColor};
		transition: width 250ms;
	}

	::-moz-progress-bar {
		background-color: ${e=>e.progressColor};
	}
	
	::-ms-fill {
		background-color: ${e=>e.progressColor};
		border: 0;
	}
`;jo.defaultProps={max:1,value:0,progressColor:i.colors.$color_good,backgroundColor:i.colors.$color_background_light,borderColor:i.colors.$color_input_border,"aria-hidden":"true"},jo.propTypes={max:s().number,value:s().number,progressColor:s().string,backgroundColor:s().string,borderColor:s().string,"aria-hidden":s().string};const Uo=jo,{stripTagsFromHtmlString:Ho}=c.strings,Wo=["a","b","strong","em","i","span","p","ul","ol","li","div"],Vo=l().li`
	display: table-row;
	font-size: 14px;
`,Ko=l().span`
	display: table-cell;
	padding: 2px;
`,Go=l()(Ko)`
	position: relative;
	top: 1px;
	display: inline-block;
	height: 8px;
	width: 8px;
	border-radius: 50%;
	background-color: ${e=>e.scoreColor};
`;Go.propTypes={scoreColor:s().string.isRequired};const Yo=l()(Ko)`
	padding-left: 8px;
	width: 100%;
`,Zo=l()(Ko)`
	font-weight: 600;
	text-align: right;
	padding-left: 16px;
`,Xo=t=>(0,e.createElement)(Vo,{className:`${t.className}`},(0,e.createElement)(Go,{className:`${t.className}-bullet`,scoreColor:t.scoreColor}),(0,e.createElement)(Yo,{className:`${t.className}-text`,dangerouslySetInnerHTML:{__html:Ho(t.html,Wo)}}),t.value&&(0,e.createElement)(Zo,{className:`${t.className}-score`},t.value));Xo.propTypes={className:s().string.isRequired,scoreColor:s().string.isRequired,html:s().string.isRequired,value:s().number};const Jo=l().ul`
	display: table;
	box-sizing: border-box;
	list-style: none;
	max-width: 100%;
	min-width: 200px;
	margin: 8px 0;
	padding: 0 8px;
`,Qo=t=>(0,e.createElement)(Jo,{className:t.className,role:"list"},t.items.map(((o,r)=>(0,e.createElement)(Xo,{className:`${t.className}__item`,key:r,scoreColor:o.color,html:o.html,value:o.value}))));Qo.propTypes={className:s().string,items:s().arrayOf(s().shape({color:s().string.isRequired,html:s().string.isRequired,value:s().number}))},Qo.defaultProps={className:"score-assessments"};const er=Qo,tr=l().div`
	margin: 8px 0;
	height: ${e=>e.barHeight};
	overflow: hidden;
`,or=l().span`
	display: inline-block;
	vertical-align: top;
	width: ${e=>`${e.progressWidth}%`};
	background-color: ${e=>e.progressColor};
	height: 100%;
`;or.propTypes={progressWidth:s().number.isRequired,progressColor:s().string.isRequired};const rr=t=>{let o=0;for(let e=0;e<t.items.length;e++)t.items[e].value=Math.max(t.items[e].value,0),o+=t.items[e].value;return o<=0?null:(0,e.createElement)(tr,{className:t.className,barHeight:t.barHeight},t.items.map(((r,n)=>(0,e.createElement)(or,{className:`${t.className}__part`,key:n,progressColor:r.color,progressWidth:r.value/o*100}))))};rr.propTypes={className:s().string,items:s().arrayOf(s().shape({value:s().number.isRequired,color:s().string.isRequired})),barHeight:s().string},rr.defaultProps={className:"stacked-progress-bar",barHeight:"24px"};const nr=rr,sr=l().div.attrs({})`
	flex: 0 1 100%;
	border: 1px solid ${e=>e.isActive?"#5b9dd9":"#ddd"};
	padding: 4px 5px;
	box-sizing: border-box;
	box-shadow: ${e=>e.isActive?"0 0 2px rgba(30,140,190,.8);":"inset 0 1px 2px rgba(0,0,0,.07)"};
	background-color: #fff;
	color: #32373c;
	outline: 0;
	transition: 50ms border-color ease-in-out;
	position: relative;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
	font-size: 14px;
	cursor: text;
`,ar=l().div`
	display: flex;
	flex-direction: column;
	margin: 1em 0;
`,lr=l().input`
	&&& {
		padding: 0 8px;
		min-height: 34px;
		font-size: 1em;
		box-shadow: inset 0 1px 2px ${(0,i.rgba)(i.colors.$color_black,.07)};
		border: 1px solid ${i.colors.$color_input_border};
		border-radius: 0;

		&:focus {
			border-color: #5b9dd9;
			box-shadow: 0 0 2px ${(0,i.rgba)(i.colors.$color_snippet_focus,.8)};
		}
	}
`,ir=l().label`
	font-size: 1em;
	font-weight: bold;
	margin-bottom: 0.5em;
	display: block;
`,cr=l().span`
	margin-bottom: 0.5em;
`,dr=l()(ir)`
	display: inline-block;
	margin-bottom: 0;
	${(0,c.getDirectionalStyle)("margin-right: 4px","margin-left: 4px")};
`,pr=t=>{const{label:o,helpLink:r,...n}=t;return(0,e.createElement)(ar,null,(0,e.createElement)(cr,null,(0,e.createElement)(dr,{htmlFor:n.id},o),r),(0,e.createElement)(lr,{...n,autoComplete:"off"}))};pr.propTypes={type:s().string,id:s().string.isRequired,label:s().string,helpLink:s().node},pr.defaultProps={type:"text",label:"",helpLink:null};const ur=pr;class hr extends t().Component{constructor(e){super(e),this.setReference=this.setReference.bind(this)}render(){return(0,e.createElement)("textarea",{ref:this.setReference,name:this.props.name,value:this.props.value,onChange:this.props.onChange,...this.props.optionalAttributes})}setReference(e){this.ref=e}componentDidUpdate(){this.props.hasFocus&&this.ref.focus()}}hr.propTypes={name:s().string,value:s().string,onChange:s().func,optionalAttributes:s().object,hasFocus:s().bool},hr.defaultProps={name:"textarea",value:"",hasFocus:!1,onChange:null,optionalAttributes:{}};const mr=hr;class fr extends t().Component{constructor(e){super(e),this.optionalAttributes=this.parseOptionalAttributes()}render(){return this.optionalAttributes=this.parseOptionalAttributes(),this.props.class&&(this.optionalAttributes.container.className=this.props.class),(0,e.createElement)("div",{...this.optionalAttributes.container},(0,e.createElement)(yo,{for:this.props.name,optionalAttributes:this.optionalAttributes.label},this.props.label),this.getTextField())}getTextField(){return!0===this.props.multiline?(0,e.createElement)("div",null,(0,e.createElement)(mr,{name:this.props.name,id:this.props.name,onChange:this.props.onChange,optionalAttributes:this.optionalAttributes.field,hasFocus:this.props.hasFocus,value:this.props.value}),this.props.explanation&&(0,e.createElement)("p",null,this.props.explanation)):(0,e.createElement)("div",null,(0,e.createElement)(co,{name:this.props.name,id:this.props.name,type:"text",onChange:this.props.onChange,value:this.props.value,hasFocus:this.props.hasFocus,autoComplete:this.props.autoComplete,optionalAttributes:this.optionalAttributes.field}),this.props.explanation&&(0,e.createElement)("p",null,this.props.explanation))}parseOptionalAttributes(){const e={},t={},o={id:this.props.name};return Object.keys(this.props).forEach(function(r){r.startsWith("label-")&&(t[r.split("-").pop()]=this.props[r]),r.startsWith("field-")&&(o[r.split("-").pop()]=this.props[r]),r.startsWith("container-")&&(e[r.split("-").pop()]=this.props[r])}.bind(this)),{label:t,field:o,container:e}}}fr.propTypes={label:s().string.isRequired,name:s().string.isRequired,onChange:s().func.isRequired,value:s().string,optionalAttributes:s().object,multiline:s().bool,hasFocus:s().bool,class:s().string,explanation:s().string,autoComplete:s().string},fr.defaultProps={optionalAttributes:{},multiline:!1,hasFocus:!1,value:null,class:null,explanation:!1,autoComplete:null};const gr=fr,br=l().div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	position: relative;
`,yr=l().span`
	${(0,c.getDirectionalStyle)("margin-right","margin-left")}: 16px;
	flex: 1;
	cursor: pointer;
`,vr=l().div`
	background-color: ${e=>e.isEnabled?"#a5d6a7":i.colors.$color_button_border};
	border-radius: 7px;
	height: 14px;
	width: 30px;
	cursor: pointer;
	margin: 0;
	outline: 0;
	&:focus > span {
		box-shadow: inset 0 0 0 1px ${i.colors.$color_white}, 0 0 0 1px #5b9dd9, 0 0 2px 1px rgba(30, 140, 190, .8);
	}
`,xr=l().span`
	background-color: ${e=>e.isEnabled?i.colors.$color_green_medium_light:i.colors.$color_grey_medium_dark};
	${e=>e.isEnabled?(0,c.getDirectionalStyle)("margin-left: 12px;","margin-right: 12px;"):(0,c.getDirectionalStyle)("margin-left: -2px;","margin-right: -2px;")};
	box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.1);
	border-radius: 100%;
	height: 20px;
	width: 20px;
	position: absolute;
	margin-top: -3px;
`,Cr=l().span`
	font-size: 14px;
	line-height: 20px;
	${(0,c.getDirectionalStyle)("margin-left","margin-right")}: 8px;
	font-style: italic;
`;class wr extends t().Component{constructor(e){super(e),this.onClick=this.props.onToggleDisabled,this.onKeyUp=this.props.onToggleDisabled,this.setToggleState=this.setToggleState.bind(this),this.handleOnKeyDown=this.handleOnKeyDown.bind(this),!0!==e.disable&&(this.onClick=this.setToggleState.bind(this),this.onKeyUp=this.setToggleState.bind(this))}setToggleState(e){"keyup"===e.type&&32!==e.keyCode||this.props.onSetToggleState(!this.props.isEnabled)}handleOnKeyDown(e){32===e.keyCode&&e.preventDefault()}render(){return(0,e.createElement)(br,null,this.props.labelText&&(0,e.createElement)(yr,{id:this.props.id,onClick:this.onClick},this.props.labelText),(0,e.createElement)(vr,{isEnabled:this.props.isEnabled,onKeyDown:this.handleOnKeyDown,onClick:this.onClick,onKeyUp:this.onKeyUp,tabIndex:"0",role:"checkbox","aria-labelledby":this.props.id,"aria-checked":this.props.isEnabled,"aria-disabled":this.props.disable},(0,e.createElement)(xr,{isEnabled:this.props.isEnabled})),this.props.showToggleStateLabel&&(0,e.createElement)(Cr,{"aria-hidden":"true"},this.props.isEnabled?(0,j.__)("On","wordpress-seo"):(0,j.__)("Off","wordpress-seo")))}}wr.propTypes={isEnabled:s().bool,onSetToggleState:s().func,disable:s().bool,onToggleDisabled:s().func,id:s().string.isRequired,labelText:s().string,showToggleStateLabel:s().bool},wr.defaultProps={isEnabled:!1,onSetToggleState:()=>{},labelText:"",disable:!1,onToggleDisabled:()=>{},showToggleStateLabel:!0};const _r=wr;function Er(e){return l()(e)`
		display: inline-flex;
		align-items: center;
		justify-content: center;
		vertical-align: middle;
		min-height: ${"48px"};
		margin: 0;
		padding: 0 16px;
		padding: ${"0px"} 16px;
		border: 0;
		border-radius: 4px;
		box-sizing: border-box;
		font: 400 14px/24px "Open Sans", sans-serif;
		text-transform: uppercase;
		box-shadow: 0 2px 8px 0 ${(0,i.rgba)(i.colors.$color_black,.3)};
		transition: box-shadow 150ms ease-out;

		&:hover,
		&:focus,
		&:active {
			box-shadow:
				0 4px 10px 0 ${(0,i.rgba)(i.colors.$color_black,.2)},
				inset 0 0 0 100px ${(0,i.rgba)(i.colors.$color_black,.1)};
			color: ${e=>e.textColor};
		}

		&:active {
			transform: translateY( 1px );
			box-shadow: none;
		}

		// Only needed for IE 10+. Don't add spaces within brackets for this to work.
		@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
			::after {
				display: inline-block;
				content: "";
				min-height: ${"48px"};
			}
		}
	`}const kr=({className:t,onClick:o,type:r,children:n,isExpanded:s})=>(0,e.createElement)("button",{className:t,onClick:o,type:r,"aria-expanded":s},(0,e.createElement)("span",null,n));kr.propTypes={className:s().string,onClick:s().func,type:s().string,isExpanded:s().bool,children:s().oneOfType([s().arrayOf(s().node),s().node,s().string])},kr.defaultProps={type:"button"};const $r=Er(l()(kr)`
		color: ${e=>e.textColor};
		background: ${e=>e.backgroundColor};
		min-width: 152px;
		${e=>e.withTextShadow?`text-shadow: 0 0 2px ${i.colors.$color_black}`:""};
		overflow: visible;
		cursor: pointer;

		&::-moz-focus-inner {
			border-width: 0;
		}

		// Only needed for Safari 10 and only for buttons.
		span {
			display: inherit;
			align-items: inherit;
			justify-content: inherit;
			width: 100%;
		}
	`);$r.propTypes={backgroundColor:s().string,textColor:s().string,withTextShadow:s().bool},$r.defaultProps={backgroundColor:i.colors.$color_green_medium_light,textColor:i.colors.$color_white,withTextShadow:!0};const Sr=l()(b)`
		margin: 2px 4px 0 4px;
		flex-shrink: 0;
`,Tr=(qr=l()(kr)`
		color: ${e=>e.textColor};
		background: ${e=>e.backgroundColor};
		overflow: visible;
		cursor: pointer;

		&::-moz-focus-inner {
			border-width: 0;
		}

		// Only needed for Safari 10 and only for buttons.
		span {
			display: inherit;
			align-items: inherit;
			justify-content: inherit;
			width: 100%;
		}
	`,l()(qr)`
		display: inline-flex;
		align-items: center;
		justify-content: center;
		vertical-align: middle;
		min-height: ${"48px"};
		margin: 0;
		overflow: auto;
		min-width: 152px;
		padding: 0 16px;
		padding: ${"8px"} 8px ${"8px"} 16px;
		border: 0;
		border-radius: 4px;
		box-sizing: border-box;
		font: 400 16px/24px "Open Sans", sans-serif;
		box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.2);
		filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
		transition: box-shadow 150ms ease-out;

		&:hover,
		&:focus,
		&:active {
			background: ${i.colors.$color_button_upsell_hover};
		}

		&:active {
			transform: translateY( 1px );
			box-shadow: none;
			filter: none;
		}

		// Only needed for IE 10+. Don't add spaces within brackets for this to work.
		@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
			::after {
				display: inline-block;
				content: "";
				min-height: ${"32px"};
			}
		}
	`);var qr;Tr.propTypes={backgroundColor:s().string,hoverColor:s().string,textColor:s().string},Tr.defaultProps={backgroundColor:i.colors.$color_button_upsell,hoverColor:i.colors.$color_button_hover_upsell,textColor:i.colors.$color_black};const Or=t=>{const{children:o}=t;return(0,e.createElement)(Tr,{...t},o,(0,e.createElement)(Sr,{icon:"caret-right",color:i.colors.$color_black,size:"16px"}))};Or.propTypes={backgroundColor:s().string,hoverColor:s().string,textColor:s().string,children:s().oneOfType([s().arrayOf(s().node),s().node])};const Nr=l().a`
	align-items: center;
	justify-content: center;
	vertical-align: middle;
	color: ${i.colors.$color_black};
	white-space: nowrap;
	display: inline-flex;
	border-radius: 4px;
	background-color: ${i.colors.$color_button_upsell};
	padding: 4px 8px 8px;
	box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.2);
	border: none;
	text-decoration: none;
	font-size: inherit;

	&:hover,
	&:focus,
	&:active {
		color: ${i.colors.$color_black};
		background: ${i.colors.$color_button_upsell_hover};
	}

	&:active {
		background-color: ${i.colors.$color_button_hover_upsell};
		transform: translateY( 1px );
		box-shadow: none;
		filter: none;
	}
`,Rr=Er(l().a`
		text-decoration: none;
		color: ${e=>e.textColor};
		background: ${e=>e.backgroundColor};
		min-width: 152px;
		${e=>e.withTextShadow?`text-shadow: 0 0 2px ${i.colors.$color_black}`:""};
	`);Rr.propTypes={backgroundColor:s().string,textColor:s().string,withTextShadow:s().bool},Rr.defaultProps={backgroundColor:i.colors.$color_green_medium_light,textColor:i.colors.$color_white,withTextShadow:!0};const Pr=t=>(0,e.createElement)("svg",{...t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 520 240"},(0,e.createElement)("linearGradient",{id:"a",gradientUnits:"userSpaceOnUse",x1:"476.05",y1:"194.48",x2:"476.05",y2:"36.513"},(0,e.createElement)("stop",{offset:"0",style:{stopColor:"#570732"}}),(0,e.createElement)("stop",{offset:".038",style:{stopColor:"#610b39"}}),(0,e.createElement)("stop",{offset:".155",style:{stopColor:"#79164b"}}),(0,e.createElement)("stop",{offset:".287",style:{stopColor:"#8c1e59"}}),(0,e.createElement)("stop",{offset:".44",style:{stopColor:"#9a2463"}}),(0,e.createElement)("stop",{offset:".633",style:{stopColor:"#a22768"}}),(0,e.createElement)("stop",{offset:"1",style:{stopColor:"#a4286a"}})),(0,e.createElement)("path",{fill:"url(#a)",d:"M488.7 146.1v-56h20V65.9h-20V36.5h-30.9v29.3h-15.7v24.3h15.7v52.8c0 30 20.9 47.8 43 51.5l9.2-24.8c-12.9-1.6-21.2-11.2-21.3-23.5z"}),(0,e.createElement)("linearGradient",{id:"b",gradientUnits:"userSpaceOnUse",x1:"287.149",y1:"172.553",x2:"287.149",y2:"61.835"},(0,e.createElement)("stop",{offset:"0",style:{stopColor:"#570732"}}),(0,e.createElement)("stop",{offset:".038",style:{stopColor:"#610b39"}}),(0,e.createElement)("stop",{offset:".155",style:{stopColor:"#79164b"}}),(0,e.createElement)("stop",{offset:".287",style:{stopColor:"#8c1e59"}}),(0,e.createElement)("stop",{offset:".44",style:{stopColor:"#9a2463"}}),(0,e.createElement)("stop",{offset:".633",style:{stopColor:"#a22768"}}),(0,e.createElement)("stop",{offset:"1",style:{stopColor:"#a4286a"}})),(0,e.createElement)("path",{fill:"url(#b)",d:"M332.8 137.3V95.2c0-1.5-.1-3-.2-4.4-2.7-34-51-33.9-88.3-20.9L255 91.7c24.3-11.6 38.9-8.6 44-2.9l.4.4v.1c2.6 3.5 2 9 2 13.4-31.8 0-65.7 4.2-65.7 39.1 0 26.5 33.2 43.6 68 18.3l5.2 12.4h29.8c-2.8-14.5-5.9-27-5.9-35.2zm-31.2-.3c-24.5 27.4-46.9 1.6-23.9-9.6 6.8-2.3 15.9-2.4 23.9-2.4v12z"}),(0,e.createElement)("linearGradient",{id:"c",gradientUnits:"userSpaceOnUse",x1:"390.54",y1:"172.989",x2:"390.54",y2:"61.266"},(0,e.createElement)("stop",{offset:"0",style:{stopColor:"#570732"}}),(0,e.createElement)("stop",{offset:".038",style:{stopColor:"#610b39"}}),(0,e.createElement)("stop",{offset:".155",style:{stopColor:"#79164b"}}),(0,e.createElement)("stop",{offset:".287",style:{stopColor:"#8c1e59"}}),(0,e.createElement)("stop",{offset:".44",style:{stopColor:"#9a2463"}}),(0,e.createElement)("stop",{offset:".633",style:{stopColor:"#a22768"}}),(0,e.createElement)("stop",{offset:"1",style:{stopColor:"#a4286a"}})),(0,e.createElement)("path",{fill:"url(#c)",d:"M380.3 92.9c0-10.4 16.6-15.2 42.8-3.3l9.1-22C397 57 348.9 56 348.6 92.8c-.1 17.7 11.2 27.2 27.5 33.2 11.3 4.2 27.6 6.4 27.6 15.4-.1 11.8-25.3 13.6-48.4-2.3l-9.3 23.8c31.4 15.6 89.7 16.1 89.4-23.1-.4-38.5-55.1-31.9-55.1-46.9z"}),(0,e.createElement)("linearGradient",{id:"d",gradientUnits:"userSpaceOnUse",x1:"76.149",y1:"3.197",x2:"76.149",y2:"178.39"},(0,e.createElement)("stop",{offset:"0",style:{stopColor:"#77b227"}}),(0,e.createElement)("stop",{offset:".467",style:{stopColor:"#75b027"}}),(0,e.createElement)("stop",{offset:".635",style:{stopColor:"#6eab27"}}),(0,e.createElement)("stop",{offset:".755",style:{stopColor:"#63a027"}}),(0,e.createElement)("stop",{offset:".852",style:{stopColor:"#529228"}}),(0,e.createElement)("stop",{offset:".934",style:{stopColor:"#3c7f28"}}),(0,e.createElement)("stop",{offset:"1",style:{stopColor:"#246b29"}})),(0,e.createElement)("path",{fill:"url(#d)",d:"M108.2 9.2L63.4 133.6 41.9 66.4H10l35.7 91.8c3 7.8 3 16.5 0 24.3-4 10.2-10.6 19-26.8 21.2v27.2c31.5 0 48.6-19.4 63.8-61.9L142.3 9.2h-34.1z"}),(0,e.createElement)("linearGradient",{id:"e",gradientUnits:"userSpaceOnUse",x1:"175.228",y1:"172.923",x2:"175.228",y2:"62.17"},(0,e.createElement)("stop",{offset:"0",style:{stopColor:"#570732"}}),(0,e.createElement)("stop",{offset:".038",style:{stopColor:"#610b39"}}),(0,e.createElement)("stop",{offset:".155",style:{stopColor:"#79164b"}}),(0,e.createElement)("stop",{offset:".287",style:{stopColor:"#8c1e59"}}),(0,e.createElement)("stop",{offset:".44",style:{stopColor:"#9a2463"}}),(0,e.createElement)("stop",{offset:".633",style:{stopColor:"#a22768"}}),(0,e.createElement)("stop",{offset:"1",style:{stopColor:"#a4286a"}})),(0,e.createElement)("path",{fill:"url(#e)",d:"M175.2 62.2c-38.6 0-54 27.3-54 56.2 0 30 15.1 54.6 54 54.6 38.7 0 54.1-27.6 54-54.6-.1-33-16.8-56.2-54-56.2zm0 87.1c-15.7 0-23.4-11.7-23.4-30.9s8.3-32.9 23.4-32.9c15 0 23.2 13.7 23.2 32.9s-7.5 30.9-23.2 30.9z"}));var Br=o(3253),Ir=o.n(Br);const zr=l().h1`
	float: left;
	margin: -4px 0 2rem;
	font-size: 1rem;
`,Mr=l().button`
	float: right;
	width: 44px;
	height: 44px;
	background: transparent;
	border: 0;
	margin: -16px -16px 0 0;
	padding: 0;
	cursor: pointer;
`;class Lr extends t().Component{constructor(e){super(e)}render(){return(0,e.createElement)(Ir(),{isOpen:this.props.isOpen,onRequestClose:this.props.onClose,role:"dialog",contentLabel:this.props.modalAriaLabel,overlayClassName:`yoast-modal__overlay ${this.props.className}`,className:`yoast-modal__content ${this.props.className}`,appElement:this.props.appElement,bodyOpenClassName:"yoast-modal_is-open"},(0,e.createElement)("div",null,this.props.heading&&(0,e.createElement)(zr,{className:"yoast-modal__title"},this.props.heading),this.props.closeIconButton&&(0,e.createElement)(Mr,{type:"button",onClick:this.props.onClose,className:`yoast-modal__button-close-icon ${this.props.closeIconButtonClassName}`,"aria-label":this.props.closeIconButton},(0,e.createElement)(b,{icon:"times",color:i.colors.$color_grey_text}))),(0,e.createElement)("div",{className:"yoast-modal__inside"},this.props.children),this.props.closeButton&&(0,e.createElement)("div",{className:"yoast-modal__actions"},(0,e.createElement)("button",{type:"button",onClick:this.props.onClose,className:`yoast-modal__button-close ${this.props.closeButtonClassName}`},this.props.closeButton)))}}Lr.propTypes={children:s().any,className:s().string,isOpen:s().bool,onClose:s().func.isRequired,modalAriaLabel:s().string.isRequired,appElement:s().object.isRequired,heading:s().string,closeIconButton:s().string,closeIconButtonClassName:s().string,closeButton:s().string,closeButtonClassName:s().string},Lr.defaultProps={children:null,className:"",heading:"",closeIconButton:"",closeIconButtonClassName:"",closeButton:"",closeButtonClassName:"",isOpen:!1};const Dr=l()(Lr)`
	&.yoast-modal__overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.6);
		transition: background 100ms ease-out;
		z-index: 999999;
	}

	&.yoast-modal__content {
		position: absolute;
		top: 50%;
		left: 50%;
		right: auto;
		bottom: auto;
		width: auto;
		max-width: 90%;
		max-height: 90%;
		border: 0;
		border-radius: 0;
		margin-right: -50%;
		padding: 24px;
		transform: translate(-50%, -50%);
		background-color: #fff;
		outline: none;

		@media screen and ( max-width: 500px ) {
			overflow-y: auto;
		}

		@media screen and ( max-height: 640px ) {
			overflow-y: auto;
		}
	}

	.yoast-modal__inside {
		clear: both;
	}

	.yoast-modal__actions {
		text-align: right;
	}

	.yoast-modal__actions button {
		margin: 24px 0 0 8px;
	}
`,Ar=t=>(0,e.createElement)("svg",{...t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 500 500"},(0,e.createElement)("path",{d:"M80,0H420a80,80,0,0,1,80,80V500a0,0,0,0,1,0,0H80A80,80,0,0,1,0,420V80A80,80,0,0,1,80,0Z",fill:"#a4286a"}),(0,e.createElement)("path",{d:"M437.61,2,155.89,500H500V80A80,80,0,0,0,437.61,2Z",fill:"#6c2548"}),(0,e.createElement)("path",{d:"M74.4,337.3v34.9c21.6-.9,38.5-8,52.8-22.5s27.4-38,39.9-72.9l92.6-248H214.9L140.3, 236l-37-116.2h-41l54.4,139.8a57.54,57.54,0,0,1,0,41.8C111.2,315.6,101.3,332.3,74.4,337.3Z",fill:"#fff"}),(0,e.createElement)("circle",{cx:"368.33",cy:"124.68",r:"97.34",transform:"translate(19.72 296.97) rotate(-45)",fill:"#9fda4f"}),(0,e.createElement)("path",{d:"M416.2,39.93,320.46,209.44A97.34,97.34,0,1,0,416.2,39.93Z",fill:"#77b227"}),(0,e.createElement)("path",{d:"M294.78,254.75h0l-.15-.08-.13-.07h0a63.6,63.6,0,0,0-62.56,110.76h0l.07,0,.06,0h0a63.6,63.6,0,0,0,62.71-110.67Z",fill:"#fec228"}),(0,e.createElement)("path",{d:"M294.5,254.59,231.94,365.35A63.6,63.6,0,1,0,294.5,254.59Z",fill:"#f49a00"}),(0,e.createElement)("path",{d:"M222.31,450.07A38.16,38.16,0,0,0,203,416.83h0l0,0h0a38.18,38.18,0,1,0,19.41,33.27Z",fill:"#ff4e47"}),(0,e.createElement)("path",{d:"M202.9,416.8l-37.54,66.48A38.17,38.17,0,0,0,202.9,416.8Z",fill:"#ed261f"}));function Fr(e){return e.type&&"Tab"===e.type.tabsRole}function jr(e){return e.type&&"TabPanel"===e.type.tabsRole}function Ur(e){return e.type&&"TabList"===e.type.tabsRole}function Hr(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function Wr(t,o){return e.Children.map(t,(function(t){return null===t?null:function(e){return Fr(e)||Ur(e)||jr(e)}(t)?o(t):t.props&&t.props.children&&"object"==typeof t.props.children?(0,e.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),r.forEach((function(t){Hr(e,t,o[t])}))}return e}({},t.props,{children:Wr(t.props.children,o)})):t}))}function Vr(t,o){return e.Children.forEach(t,(function(e){null!==e&&(Fr(e)||jr(e)?o(e):e.props&&e.props.children&&"object"==typeof e.props.children&&(Ur(e)&&o(e),Vr(e.props.children,o)))}))}var Kr,Gr=o(4184),Yr=o.n(Gr),Zr=0;function Xr(){return"react-tabs-"+Zr++}function Jr(e){var t=0;return Vr(e,(function(e){Fr(e)&&t++})),t}function Qr(){return Qr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},Qr.apply(this,arguments)}function en(e){return e&&"getAttribute"in e}function tn(e){return en(e)&&"tab"===e.getAttribute("role")}function on(e){return en(e)&&"true"===e.getAttribute("aria-disabled")}try{Kr=!("undefined"==typeof window||!window.document||!window.document.activeElement)}catch(e){Kr=!1}var rn=function(o){var r,n;function s(){for(var e,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return(e=o.call.apply(o,[this].concat(r))||this).tabNodes=[],e.handleKeyDown=function(t){if(e.isTabFromContainer(t.target)){var o=e.props.selectedIndex,r=!1,n=!1;32!==t.keyCode&&13!==t.keyCode||(r=!0,n=!1,e.handleClick(t)),37===t.keyCode||38===t.keyCode?(o=e.getPrevTab(o),r=!0,n=!0):39===t.keyCode||40===t.keyCode?(o=e.getNextTab(o),r=!0,n=!0):35===t.keyCode?(o=e.getLastTab(),r=!0,n=!0):36===t.keyCode&&(o=e.getFirstTab(),r=!0,n=!0),r&&t.preventDefault(),n&&e.setSelected(o,t)}},e.handleClick=function(t){var o=t.target;do{if(e.isTabFromContainer(o)){if(on(o))return;var r=[].slice.call(o.parentNode.children).filter(tn).indexOf(o);return void e.setSelected(r,t)}}while(null!=(o=o.parentNode))},e}n=o,(r=s).prototype=Object.create(n.prototype),r.prototype.constructor=r,r.__proto__=n;var a=s.prototype;return a.setSelected=function(e,t){if(!(e<0||e>=this.getTabsCount())){var o=this.props;(0,o.onSelect)(e,o.selectedIndex,t)}},a.getNextTab=function(e){for(var t=this.getTabsCount(),o=e+1;o<t;o++)if(!on(this.getTab(o)))return o;for(var r=0;r<e;r++)if(!on(this.getTab(r)))return r;return e},a.getPrevTab=function(e){for(var t=e;t--;)if(!on(this.getTab(t)))return t;for(t=this.getTabsCount();t-- >e;)if(!on(this.getTab(t)))return t;return e},a.getFirstTab=function(){for(var e=this.getTabsCount(),t=0;t<e;t++)if(!on(this.getTab(t)))return t;return null},a.getLastTab=function(){for(var e=this.getTabsCount();e--;)if(!on(this.getTab(e)))return e;return null},a.getTabsCount=function(){return Jr(this.props.children)},a.getPanelsCount=function(){return e=this.props.children,t=0,Vr(e,(function(e){jr(e)&&t++})),t;var e,t},a.getTab=function(e){return this.tabNodes["tabs-"+e]},a.getChildren=function(){var o=this,r=0,n=this.props,s=n.children,a=n.disabledTabClassName,l=n.focus,i=n.forceRenderTabPanel,c=n.selectedIndex,d=n.selectedTabClassName,p=n.selectedTabPanelClassName;this.tabIds=this.tabIds||[],this.panelIds=this.panelIds||[];for(var u=this.tabIds.length-this.getTabsCount();u++<0;)this.tabIds.push(Xr()),this.panelIds.push(Xr());return Wr(s,(function(n){var s=n;if(Ur(n)){var u=0,h=!1;Kr&&(h=t().Children.toArray(n.props.children).filter(Fr).some((function(e,t){return document.activeElement===o.getTab(t)}))),s=(0,e.cloneElement)(n,{children:Wr(n.props.children,(function(t){var r="tabs-"+u,n=c===u,s={tabRef:function(e){o.tabNodes[r]=e},id:o.tabIds[u],panelId:o.panelIds[u],selected:n,focus:n&&(l||h)};return d&&(s.selectedClassName=d),a&&(s.disabledClassName=a),u++,(0,e.cloneElement)(t,s)}))})}else if(jr(n)){var m={id:o.panelIds[r],tabId:o.tabIds[r],selected:c===r};i&&(m.forceRender=i),p&&(m.selectedClassName=p),r++,s=(0,e.cloneElement)(n,m)}return s}))},a.isTabFromContainer=function(e){if(!tn(e))return!1;var t=e.parentElement;do{if(t===this.node)return!0;if(t.getAttribute("data-tabs"))break;t=t.parentElement}while(t);return!1},a.render=function(){var e=this,o=this.props,r=(o.children,o.className),n=(o.disabledTabClassName,o.domRef),s=(o.focus,o.forceRenderTabPanel,o.onSelect,o.selectedIndex,o.selectedTabClassName,o.selectedTabPanelClassName,function(e,t){if(null==e)return{};var o,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(o,["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName"]));return t().createElement("div",Qr({},s,{className:Yr()(r),onClick:this.handleClick,onKeyDown:this.handleKeyDown,ref:function(t){e.node=t,n&&n(t)},"data-tabs":!0}),this.getChildren())},s}(e.Component);rn.defaultProps={className:"react-tabs",focus:!1},rn.propTypes={};var nn=function(e){var o,r;function n(t){var o;return(o=e.call(this,t)||this).handleSelected=function(e,t,r){var s=o.props.onSelect;if("function"!=typeof s||!1!==s(e,t,r)){var a={focus:"keydown"===r.type};n.inUncontrolledMode(o.props)&&(a.selectedIndex=e),o.setState(a)}},o.state=n.copyPropsToState(o.props,{},t.defaultFocus),o}r=e,(o=n).prototype=Object.create(r.prototype),o.prototype.constructor=o,o.__proto__=r;var s=n.prototype;return s.componentWillReceiveProps=function(e){this.setState((function(t){return n.copyPropsToState(e,t)}))},n.inUncontrolledMode=function(e){return null===e.selectedIndex},n.copyPropsToState=function(e,t,o){void 0===o&&(o=!1);var r={focus:o};if(n.inUncontrolledMode(e)){var s,a=Jr(e.children)-1;s=null!=t.selectedIndex?Math.min(t.selectedIndex,a):e.defaultIndex||0,r.selectedIndex=s}return r},s.render=function(){var e=this.props,o=e.children,r=(e.defaultIndex,e.defaultFocus,function(e,t){if(null==e)return{};var o,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,["children","defaultIndex","defaultFocus"])),n=this.state,s=n.focus,a=n.selectedIndex;return r.focus=s,r.onSelect=this.handleSelected,null!=a&&(r.selectedIndex=a),t().createElement(rn,r,o)},n}(e.Component);function sn(){return sn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},sn.apply(this,arguments)}nn.defaultProps={defaultFocus:!1,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null},nn.propTypes={},nn.tabsRole="Tabs";var an=function(e){var o,r;function n(){return e.apply(this,arguments)||this}return r=e,(o=n).prototype=Object.create(r.prototype),o.prototype.constructor=o,o.__proto__=r,n.prototype.render=function(){var e=this.props,o=e.children,r=e.className,n=function(e,t){if(null==e)return{};var o,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,["children","className"]);return t().createElement("ul",sn({},n,{className:Yr()(r),role:"tablist"}),o)},n}(e.Component);function ln(){return ln=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},ln.apply(this,arguments)}an.defaultProps={className:"react-tabs__tab-list"},an.propTypes={},an.tabsRole="TabList";var cn="react-tabs__tab",dn=function(e){var o,r;function n(){return e.apply(this,arguments)||this}r=e,(o=n).prototype=Object.create(r.prototype),o.prototype.constructor=o,o.__proto__=r;var s=n.prototype;return s.componentDidMount=function(){this.checkFocus()},s.componentDidUpdate=function(){this.checkFocus()},s.checkFocus=function(){var e=this.props,t=e.selected,o=e.focus;t&&o&&this.node.focus()},s.render=function(){var e,o=this,r=this.props,n=r.children,s=r.className,a=r.disabled,l=r.disabledClassName,i=(r.focus,r.id),c=r.panelId,d=r.selected,p=r.selectedClassName,u=r.tabIndex,h=r.tabRef,m=function(e,t){if(null==e)return{};var o,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(r,["children","className","disabled","disabledClassName","focus","id","panelId","selected","selectedClassName","tabIndex","tabRef"]);return t().createElement("li",ln({},m,{className:Yr()(s,(e={},e[p]=d,e[l]=a,e)),ref:function(e){o.node=e,h&&h(e)},role:"tab",id:i,"aria-selected":d?"true":"false","aria-disabled":a?"true":"false","aria-controls":c,tabIndex:u||(d?"0":null)}),n)},n}(e.Component);function pn(){return pn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},pn.apply(this,arguments)}dn.defaultProps={className:cn,disabledClassName:cn+"--disabled",focus:!1,id:null,panelId:null,selected:!1,selectedClassName:cn+"--selected"},dn.propTypes={},dn.tabsRole="Tab";var un="react-tabs__tab-panel",hn=function(e){var o,r;function n(){return e.apply(this,arguments)||this}return r=e,(o=n).prototype=Object.create(r.prototype),o.prototype.constructor=o,o.__proto__=r,n.prototype.render=function(){var e,o=this.props,r=o.children,n=o.className,s=o.forceRender,a=o.id,l=o.selected,i=o.selectedClassName,c=o.tabId,d=function(e,t){if(null==e)return{};var o,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(o,["children","className","forceRender","id","selected","selectedClassName","tabId"]);return t().createElement("div",pn({},d,{className:Yr()(n,(e={},e[i]=l,e)),role:"tabpanel",id:a,"aria-labelledby":c}),s||l?r:null)},n}(e.Component);hn.defaultProps={className:un,forceRender:!1,selectedClassName:un+"--selected"},hn.propTypes={},hn.tabsRole="TabPanel";const mn=l().div`
	font-size: 1em;

	.react-tabs__tab-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		list-style: none;
		padding: 0;
		margin: 0;
		border-bottom: 4px solid ${i.colors.$color_grey_light};
	}

	.react-tabs__tab {
		flex: 0 1 ${e=>e.tabsBaseWidth};
		text-align: center;
		margin: 0 16px;
		padding: 16px 0;
		cursor: pointer;
		font-family: "Open Sans", sans-serif;
		font-size: ${e=>e.tabsFontSize};
		line-height: 1.33333333;
		font-weight: ${e=>e.tabsFontWeight};
		color: ${e=>e.tabsTextColor};
		text-transform: ${e=>e.tabsTextTransform};

		&.react-tabs__tab--selected {
			box-shadow: 0 4px 0 0 ${i.colors.$color_pink_dark};
		}
	}

	.react-tabs__tab-panel {
		display: none;
		padding: 24px 40px;

		@media screen and ( max-width: ${i.breakpoints.mobile} ) {
			padding: 16px 16px;
		}

		:focus {
			outline: none;
		}

		&.react-tabs__tab-panel--selected {
			display: block;
		}
	}
`;mn.propTypes={tabsTextColor:s().string,tabsTextTransform:s().string,tabsFontSize:s().string,tabsFontWeight:s().string,tabsBaseWidth:s().string};class fn extends t().Component{getTabs(){return this.props.items.map((t=>(0,e.createElement)(dn,{key:t.id},t.label)))}getTabPanels(){return this.props.items.map((t=>(0,e.createElement)(hn,{key:t.id,tabIndex:"0"},t.content)))}render(){return(0,e.createElement)(mn,{tabsTextColor:this.props.tabsTextColor,tabsTextTransform:this.props.tabsTextTransform,tabsFontSize:this.props.tabsFontSize,tabsFontWeight:this.props.tabsFontWeight,tabsBaseWidth:this.props.tabsBaseWidth},(0,e.createElement)(nn,{onSelect:this.props.onTabSelect},(0,e.createElement)(an,null,this.getTabs()),this.getTabPanels()))}componentDidMount(){this.props.onTabsMounted()}}fn.propTypes={items:s().arrayOf(s().shape({id:s().string.isRequired,label:s().string.isRequired,content:s().object.isRequired})),tabsTextColor:s().string,tabsTextTransform:s().string,tabsFontSize:s().string,tabsFontWeight:s().string,tabsBaseWidth:s().string,onTabSelect:s().func,onTabsMounted:s().func},fn.defaultProps={items:[],tabsTextColor:i.colors.$color_grey_dark,tabsTextTransform:"none",tabsFontSize:"1.5em",tabsFontWeight:"200",tabsBaseWidth:"200px",onTabSelect:()=>{},onTabsMounted:()=>{}};const gn=fn,bn=window.lodash.isEmpty;var yn=o.n(bn);const vn=l().div`
	display: flex;
	padding: 16px;
	background: ${i.colors.$color_alert_warning_background};
	color: ${i.colors.$color_alert_warning_text};
`,xn=l()(b)`
	margin-top: 2px;
`,Cn=l().div`
	margin: ${(0,c.getDirectionalStyle)("0 0 0 8px","0 8px 0 0")};
`;class wn extends t().Component{render(){const{message:t}=this.props;return yn()(t)?null:(0,e.createElement)(vn,null,(0,e.createElement)(xn,{icon:"exclamation-triangle",size:"16px"}),(0,e.createElement)(Cn,null,t))}}wn.propTypes={message:s().array},wn.defaultProps={message:[]};const En=wn,kn=l().div`
	position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	height: 0;
	overflow: hidden;

	iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
`;function $n(t){return(0,e.createElement)(kn,null,(0,e.createElement)(lo,{...t}))}$n.propTypes={width:s().number,height:s().number,src:s().string.isRequired,title:s().string.isRequired,frameBorder:s().number,allowFullScreen:s().bool},$n.defaultProps={width:560,height:315,frameBorder:0,allowFullScreen:!0};const Sn=t=>{console.warn("The WordList component has been deprecated and will be removed in a future release.");const{title:o,classNamePrefix:r,words:n,header:s,footer:a}=t,l=(0,e.createElement)("ol",{className:r+"__list"},n.map((t=>(0,e.createElement)("li",{key:t,className:r+"__item"},t))));return(0,e.createElement)("div",{className:r},(0,e.createElement)("p",null,(0,e.createElement)("strong",null,o)),s,l,a)};Sn.propTypes={words:s().array.isRequired,title:s().string.isRequired,header:s().string,footer:s().string,classNamePrefix:s().string},Sn.defaultProps={classNamePrefix:"",header:"",footer:""};const Tn=Sn,qn=l().ul`
	margin: 0;
 	padding: 0;
 	list-style: none;
 	position: relative;
 	width: 100%;

 	li:first-child {
		& > span::before {
			left: auto;
		}
	}
`;qn.propTypes={children:s().any};class On extends t().Component{constructor(e){super(e)}getChildren(){return 1===this.props.children?[this.props.children]:this.props.children}render(){const t=this.getChildren();return(0,e.createElement)(qn,{role:"list"},t)}}class Nn extends On{constructor(e){super(e),this.zebraProps=Object.assign({},e)}zebrafyChildren(){let e=this.props.children;this.props.children.map||(e=[e]),this.zebraProps.children=e.map(((e,o)=>t().cloneElement(e,{background:o%2==1?i.colors.$color_white:i.colors.$color_background_light,key:o})))}render(){return this.zebrafyChildren(),(0,e.createElement)(qn,{role:"list",...this.zebraProps})}}On.propTypes={children:s().oneOfType([s().arrayOf(s().node),s().node])},On.defaultProps={children:[]};const Rn=l().li`
	background: ${e=>e.background};
	display: flex;
	min-height: ${e=>e.rowHeight};
	align-items: center;
	justify-content: space-between;
`;Rn.propTypes={background:s().string,hasHeaderLabels:s().bool,rowHeight:s().string},Rn.defaultProps={background:i.colors.$color_white,hasHeaderLabels:!0},l()(Rn)`
	@media screen and ( max-width: 800px ) {
		flex-wrap: wrap;
		align-items: flex-start;

		&:first-child {
			margin-top: ${e=>e.hasHeaderLabels?"24px":"0"};
		}

		// Use the column headers (if any) as labels.
		& > span::before {
			position: static;
			display: inline-block;
			padding-right: 0.5em;
			font-size: inherit;
		}
		& > span {
			padding-left: 0;
		}
	}
`;class Pn extends t().Component{constructor(){super(),this.focus=this.focus.bind(this),this.blur=this.blur.bind(this),this.state={focused:!1}}focus(){this.setState({focused:!0})}blur(){this.setState({focused:!1})}getStyles(){return!0===this.state.focused?Ge.ScreenReaderText.focused:Ge.ScreenReaderText.default}render(){return(0,e.createElement)("a",{href:"#"+this.props.anchor,className:"screen-reader-shortcut",style:this.getStyles(),onFocus:this.focus,onBlur:this.blur},this.props.children)}}Pn.propTypes={anchor:s().string.isRequired,children:s().string.isRequired};const Bn=Pn})(),(window.yoast=window.yoast||{}).componentsNew=r})();