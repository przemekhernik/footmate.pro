!function(e){var t={};function s(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=t,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(o,r,function(t){return e[t]}.bind(null,r));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=299)}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){function s(){return e.exports=s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,s.apply(this,arguments)}e.exports=s,e.exports.default=e.exports,e.exports.__esModule=!0},105:function(e,t,s){"use strict";s.d(t,"b",(function(){return u}));var o=s(0),r=s(1),n=s(33),a=s(2),i=s.n(a),l=s(4),c=s(50),d=s(22);const u=e=>{let t=!0;if("blur"===e.type){const{relatedTarget:s}=e;if(s){const e=["media-modal","wp-core-ui"];t=Object(l.intersection)(e,Array.from(s.classList)).length!==e.length}}return t},p=e=>{let{id:t,postTypeName:s,children:a,title:i,isOpen:l,close:p,open:b,shouldCloseOnClickOutside:m,showChangesWarning:h,SuffixHeroIcon:g}=e;const y=Object(o.useCallback)(e=>{u(e)&&p()},[p]);return Object(o.createElement)(o.Fragment,null,l&&Object(o.createElement)(d.LocationProvider,{value:"modal"},Object(o.createElement)(n.a,{title:i,onRequestClose:y,additionalClassName:"yoast-collapsible-modal yoast-post-settings-modal",id:"id",shouldCloseOnClickOutside:m},Object(o.createElement)("div",{className:"yoast-content-container"},Object(o.createElement)("div",{className:"yoast-modal-content"},a)),Object(o.createElement)("div",{className:"yoast-notice-container"},Object(o.createElement)("hr",null),Object(o.createElement)("div",{className:"yoast-button-container"},h&&Object(o.createElement)("p",null,
/* Translators: %s translates to the Post Label in singular form */
Object(r.sprintf)(Object(r.__)("Make sure to save your %s for changes to take effect","wordpress-seo"),s)),Object(o.createElement)("button",{className:"yoast-button yoast-button--primary yoast-button--post-settings-modal",type:"button",onClick:y},
/* Translators: %s translates to the Post Label in singular form */
Object(r.sprintf)(Object(r.__)("Return to your %s","wordpress-seo"),s)))))),Object(o.createElement)(c.a,{id:t+"-open-button",title:i,SuffixHeroIcon:g,suffixIcon:!g&&{size:"20px",icon:"pencil-square"},onClick:b}))};p.propTypes={id:i.a.string.isRequired,postTypeName:i.a.string.isRequired,children:i.a.oneOfType([i.a.node,i.a.arrayOf(i.a.node)]).isRequired,title:i.a.string.isRequired,isOpen:i.a.bool.isRequired,open:i.a.func.isRequired,close:i.a.func.isRequired,shouldCloseOnClickOutside:i.a.bool,showChangesWarning:i.a.bool,SuffixHeroIcon:i.a.object},p.defaultProps={shouldCloseOnClickOutside:!0,showChangesWarning:!0},t.a=p},11:function(e,t){e.exports=window.yoast.helpers},113:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));var o,r,n=s(3);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o])}return e}).apply(this,arguments)}function i(e){return n.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 425 456.27","aria-hidden":"true"},e),o||(o=n.createElement("path",{d:"M73 405.26a66.79 66.79 0 01-6.54-1.7 64.75 64.75 0 01-6.28-2.31c-1-.42-2-.89-3-1.37-1.49-.72-3-1.56-4.77-2.56-1.5-.88-2.71-1.64-3.83-2.39-.9-.61-1.8-1.26-2.68-1.92a70.154 70.154 0 01-5.08-4.19 69.21 69.21 0 01-8.4-9.17c-.92-1.2-1.68-2.25-2.35-3.24a70.747 70.747 0 01-3.44-5.64 68.29 68.29 0 01-8.29-32.55V142.13a68.26 68.26 0 018.29-32.55c1-1.92 2.21-3.82 3.44-5.64s2.55-3.58 4-5.27a69.26 69.26 0 0114.49-13.25C50.37 84.19 52.27 83 54.2 82A67.59 67.59 0 0173 75.09a68.75 68.75 0 0113.75-1.39h169.66L263 55.39H86.75A86.84 86.84 0 000 142.13v196.09A86.84 86.84 0 0086.75 425h11.32v-18.35H86.75A68.75 68.75 0 0173 405.26zM368.55 60.85l-1.41-.53-6.41 17.18 1.41.53a68.06 68.06 0 018.66 4c1.93 1 3.82 2.2 5.65 3.43A69.19 69.19 0 01391 98.67c1.4 1.68 2.72 3.46 3.95 5.27s2.39 3.72 3.44 5.64a68.29 68.29 0 018.29 32.55v264.52H233.55l-.44.76c-3.07 5.37-6.26 10.48-9.49 15.19L222 425h203V142.13a87.2 87.2 0 00-56.45-81.28z"})),r||(r=n.createElement("path",{d:"M119.8 408.28v46c28.49-1.12 50.73-10.6 69.61-29.58 19.45-19.55 36.17-50 52.61-96L363.94 1.9H305l-98.25 272.89-48.86-153h-54l71.7 184.18a75.67 75.67 0 010 55.12c-7.3 18.68-20.25 40.66-55.79 47.19z",stroke:"#000",strokeMiterlimit:10,strokeWidth:3.81})))}},139:function(e,t,s){"use strict";var o=s(0),r=s(1),n=s(2),a=s.n(n),i=s(72);const l=e=>{const t=[Object(r.__)("Create content faster: Use AI to create titles & meta descriptions","wordpress-seo"),Object(r.__)("Get extra SEO checks with the Premium SEO analysis","wordpress-seo"),Object(r.__)("Avoid dead links on your site","wordpress-seo"),Object(r.__)("Easily improve the structure of your site","wordpress-seo"),Object(r.__)("Preview how your content looks when shared on social","wordpress-seo"),Object(r.__)("Get guidance & save time on routine SEO tasks","wordpress-seo")];return Object(o.createElement)(i.a,{title:Object(r.__)("Reach a wider audience","wordpress-seo"),description:Object(r.__)("Get help optimizing for up to 5 related keyphrases. This helps you reach a wider audience and get more traffic.","wordpress-seo"),benefitsTitle:Object(r.__)("What’s more in Yoast SEO Premium?","wordpress-seo"),benefits:t,upsellButtonText:Object(r.sprintf)(
/* translators: %s expands to 'Yoast SEO Premium'. */
Object(r.__)("Unlock with %s","wordpress-seo"),"Yoast SEO Premium"),upsellButton:{href:e.buyLink,className:"yoast-button-upsell",rel:null,"data-ctb-id":"f6a84663-465f-4cb5-8ba5-f7a6d72224b2","data-action":"load-nfd-ctb"},upsellButtonLabel:Object(r.__)("1 year free support and updates included!","wordpress-seo")})};l.propTypes={buyLink:a.a.string.isRequired},t.a=l},14:function(e,t){e.exports=window.wp.url},15:function(e,t){e.exports=window.yoast.analysis},16:function(e,t){e.exports=window.yoast.styleGuide},165:function(e,t,s){"use strict";var o=s(0),r=s(8),n=s(2),a=s.n(n),i=s(63),l=s(77);const c=e=>{let{target:t,scoreIndicator:s}=e;return Object(o.createElement)(l.a,{target:t},Object(o.createElement)(r.SvgIcon,Object(i.getIconForScore)(s)))};c.propTypes={target:a.a.string.isRequired,scoreIndicator:a.a.string.isRequired},t.a=c},168:function(e,t,s){"use strict";var o=s(5),r=s(20),n=s(0),a=s(1),i=s(40),l=s(2),c=s.n(l),d=s(175),u=s(4),p=s(15),b=s(63);class m extends n.Component{constructor(e){super(e);const t=this.props.results;this.state={mappedResults:{}},null!==t&&(this.state={mappedResults:Object(b.default)(t,this.props.keywordKey)}),this.handleMarkButtonClick=this.handleMarkButtonClick.bind(this),this.handleEditButtonClick=this.handleEditButtonClick.bind(this),this.handleResultsChange=this.handleResultsChange.bind(this)}componentDidUpdate(e){null!==this.props.results&&this.props.results!==e.results&&this.setState({mappedResults:Object(b.default)(this.props.results,this.props.keywordKey)})}deactivateMarker(){this.props.setActiveMarker(null),this.props.setMarkerPauseStatus(!1),this.removeMarkers()}activateMarker(e,t){this.props.setActiveMarker(e),t()}handleMarkButtonClick(e,t){const s=this.props.keywordKey.length>0?`${this.props.keywordKey}:${e}`:e;s===this.props.activeMarker?this.deactivateMarker():this.activateMarker(s,t)}handleResultsChange(e,t,s){const o=this.props.keywordKey.length>0?`${this.props.keywordKey}:${e}`:e;o===this.props.activeMarker&&(s?Object(u.isUndefined)(t)||this.activateMarker(o,t):this.deactivateMarker())}focusOnKeyphraseField(e){const t=this.props.keywordKey,s=""===t?"focus-keyword-input-"+e:"yoast-keyword-input-"+t+"-"+e,o=document.getElementById(s);o.focus(),o.scrollIntoView({behavior:"auto",block:"center",inline:"center"})}focusOnGooglePreviewField(e,t){let s;s="metaDescriptionKeyword"===e||"metaDescriptionLength"===e?"description":"titleWidth"===e||"keyphraseInSEOTitle"===e?"title":"slug";const o=document.getElementById("yoast-google-preview-"+s+"-"+t);o.focus(),o.scrollIntoView({behavior:"auto",block:"center",inline:"center"})}handleEditButtonClick(e){const t=this.props.location;"functionWordsInKeyphrase"!==e&&"keyphraseLength"!==e?(["metaDescriptionKeyword","metaDescriptionLength","titleWidth","keyphraseInSEOTitle","slugKeyword"].includes(e)&&this.handleGooglePreviewFocus(t,e),Object(i.doAction)("yoast.focus.input",e)):this.focusOnKeyphraseField(t)}handleGooglePreviewFocus(e,t){if("sidebar"===e)document.getElementById("yoast-search-appearance-modal-open-button").click(),setTimeout(()=>this.focusOnGooglePreviewField(t,"modal"),500);else{const s=document.getElementById("yoast-snippet-editor-metabox");s&&"false"===s.getAttribute("aria-expanded")?(s.click(),setTimeout(()=>this.focusOnGooglePreviewField(t,e),100)):this.focusOnGooglePreviewField(t,e)}}removeMarkers(){window.YoastSEO.analysis.applyMarks(new p.Paper("",{}),[])}render(){const{mappedResults:e}=this.state,{errorsResults:t,improvementsResults:s,goodResults:o,considerationsResults:r,problemsResults:i}=e,{upsellResults:l,resultCategoryLabels:c}=this.props,u={errors:Object(a.__)("Errors","wordpress-seo"),problems:Object(a.__)("Problems","wordpress-seo"),improvements:Object(a.__)("Improvements","wordpress-seo"),considerations:Object(a.__)("Considerations","wordpress-seo"),goodResults:Object(a.__)("Good results","wordpress-seo")},p=Object.assign(u,c);return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(d.ContentAnalysis,{errorsResults:t,problemsResults:i,upsellResults:l,improvementsResults:s,considerationsResults:r,goodResults:o,activeMarker:this.props.activeMarker,onMarkButtonClick:this.handleMarkButtonClick,onEditButtonClick:this.handleEditButtonClick,marksButtonClassName:this.props.marksButtonClassName,editButtonClassName:this.props.editButtonClassName,marksButtonStatus:this.props.marksButtonStatus,headingLevel:3,keywordKey:this.props.keywordKey,isPremium:this.props.isPremium,resultCategoryLabels:p,onResultChange:this.handleResultsChange}))}}m.propTypes={results:c.a.array,upsellResults:c.a.array,marksButtonClassName:c.a.string,editButtonClassName:c.a.string,marksButtonStatus:c.a.string,setActiveMarker:c.a.func.isRequired,setMarkerPauseStatus:c.a.func.isRequired,activeMarker:c.a.string,keywordKey:c.a.string,location:c.a.string,isPremium:c.a.bool,resultCategoryLabels:c.a.shape({errors:c.a.string,problems:c.a.string,improvements:c.a.string,considerations:c.a.string,goodResults:c.a.string})},m.defaultProps={results:null,upsellResults:[],marksButtonStatus:"enabled",marksButtonClassName:"",editButtonClassName:"",activeMarker:null,keywordKey:"",location:"",isPremium:!1,resultCategoryLabels:{}};var h=m;t.a=Object(r.compose)([Object(o.withSelect)(e=>{const{getActiveMarker:t,getIsPremium:s}=e("yoast-seo/editor");return{activeMarker:t(),isPremium:s()}}),Object(o.withDispatch)(e=>{const{setActiveMarker:t,setMarkerPauseStatus:s}=e("yoast-seo/editor");return{setActiveMarker:t,setMarkerPauseStatus:s}})])(h)},175:function(e,t){e.exports=window.yoast.analysisReport},18:function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));var o=s(4);function r(){return Object(o.get)(window,"wpseoScriptData.metabox",{intl:{},isRtl:!1})}},19:function(e,t){e.exports=window.wp.components},2:function(e,t){e.exports=window.yoast.propTypes},20:function(e,t){e.exports=window.wp.compose},22:function(e,t){e.exports=window.yoast.externals.contexts},26:function(e,t){e.exports=window.wp.apiFetch},299:function(e,t,s){"use strict";s.r(t);var o=s(0),r=s(1),n=s(19),a=s(8),i=s(11),l=s(2),c=s.n(l),d=s(9),u=s.n(d);const p=u.a.div`
	display: flex;
	margin-top: 8px;
`;class b extends o.Component{render(){return Object(o.createElement)(p,null,Object(o.createElement)(a.Toggle,{id:this.props.id,labelText:Object(r.__)("Mark as cornerstone content","wordpress-seo"),isEnabled:this.props.isEnabled,onSetToggleState:this.props.onToggle,onToggleDisabled:this.props.onToggleDisabled}))}}b.propTypes={id:c.a.string,isEnabled:c.a.bool,onToggle:c.a.func,onToggleDisabled:c.a.func},b.defaultProps={id:"cornerstone-toggle",isEnabled:!0,onToggle:()=>{},onToggleDisabled:()=>{}};var m=b,h=s(66),g=s(90);const y=Object(i.makeOutboundLink)();function O(e){let{isCornerstone:t,onChange:s,learnMoreUrl:l,location:c}=e;const d="metabox"===c?h.a:g.a;return Object(o.createElement)(d,{id:Object(i.join)(["yoast-cornerstone-collapsible",c]),title:Object(r.__)("Cornerstone content","wordpress-seo")},Object(o.createElement)(a.HelpText,null,Object(r.__)("Cornerstone content should be the most important and extensive articles on your site.","wordpress-seo")+" ",Object(o.createElement)(y,{href:l},Object(r.__)("Learn more about Cornerstone Content.","wordpress-seo"))),Object(o.createElement)(m,{id:Object(i.join)(["yoast-cornerstone",c]),isEnabled:t,onToggle:s}),Object(o.createElement)(n.Slot,{name:"YoastAfterCornerstoneToggle"}))}O.propTypes={isCornerstone:c.a.bool,onChange:c.a.func,learnMoreUrl:c.a.string.isRequired,location:c.a.string},O.defaultProps={isCornerstone:!0,onChange:()=>{},location:""};var f=s(20),w=s(5),j=s(22),k=s(26),x=s.n(k),_=s(55),v=s(33),E=s(113),C=s(105);class R extends o.Component{constructor(e){super(e),this.onModalOpen=this.onModalOpen.bind(this),this.onModalClose=this.onModalClose.bind(this),this.onLinkClick=this.onLinkClick.bind(this),this.listenToMessages=this.listenToMessages.bind(this)}onModalOpen(){this.props.keyphrase.trim()?this.props.onOpen(this.props.location):this.props.onOpenWithNoKeyphrase()}onModalClose(e){Object(C.b)(e)&&this.props.onClose()}onLinkClick(e){if(e.preventDefault(),!this.props.keyphrase.trim())return void this.props.onOpenWithNoKeyphrase();const t=e.target.href,s=["top="+(window.top.outerHeight/2+window.top.screenY-285),"left="+(window.top.outerWidth/2+window.top.screenX-170),"width=340","height=570","resizable=1","scrollbars=1","status=0"];this.popup&&!this.popup.closed||(this.popup=window.open(t,"SEMrush_login",s.join(","))),this.popup&&this.popup.focus(),window.addEventListener("message",this.listenToMessages,!1)}async listenToMessages(e){const{data:t,source:s,origin:o}=e;"https://oauth.semrush.com"===o&&this.popup===s&&("semrush:oauth:success"===t.type&&(this.popup.close(),window.removeEventListener("message",this.listenToMessages,!1),await this.performAuthenticationRequest(t)),"semrush:oauth:denied"===t.type&&(this.popup.close(),window.removeEventListener("message",this.listenToMessages,!1),this.props.onAuthentication(!1)))}async performAuthenticationRequest(e){try{const t=new URL(e.url).searchParams.get("code"),s=await x()({path:"yoast/v1/semrush/authenticate",method:"POST",data:{code:t}});200===s.status?(this.props.onAuthentication(!0),this.onModalOpen(),this.popup.close()):console.error(s.error)}catch(e){console.error(e.message)}}render(){const{keyphrase:e,location:t,whichModalOpen:s,isLoggedIn:i,shouldCloseOnClickOutside:l}=this.props;return Object(o.createElement)(o.Fragment,null,i&&Object(o.createElement)("div",{className:"yoast"},Object(o.createElement)(a.NewButton,{variant:"secondary",id:"yoast-get-related-keyphrases-"+t,onClick:this.onModalOpen},Object(r.__)("Get related keyphrases","wordpress-seo"))),e&&s===t&&Object(o.createElement)(v.a,{title:Object(r.__)("Related keyphrases","wordpress-seo"),onRequestClose:this.onModalClose,icon:Object(o.createElement)(E.a,null),additionalClassName:"yoast-related-keyphrases-modal",shouldCloseOnClickOutside:l},Object(o.createElement)(_.a,{className:"yoast-gutenberg-modal__content yoast-related-keyphrases-modal__content"},Object(o.createElement)(n.Slot,{name:"YoastRelatedKeyphrases"}))),!i&&Object(o.createElement)("div",{className:"yoast"},Object(o.createElement)(a.ButtonStyledLink,{variant:"secondary",id:"yoast-get-related-keyphrases-"+t,href:"https://oauth.semrush.com/oauth2/authorize?ref=1513012826&client_id=yoast&redirect_uri=https%3A%2F%2Foauth.semrush.com%2Foauth2%2Fyoast%2Fsuccess&response_type=code&scope=user.id",onClick:this.onLinkClick},Object(r.__)("Get related keyphrases","wordpress-seo"),Object(o.createElement)("span",{className:"screen-reader-text"},
/* translators: Hidden accessibility text. */
Object(r.__)("(Opens in a new browser tab)","wordpress-seo")))))}}R.propTypes={keyphrase:c.a.string,location:c.a.string,whichModalOpen:c.a.oneOf(["none","metabox","sidebar"]),isLoggedIn:c.a.bool,onOpen:c.a.func.isRequired,onOpenWithNoKeyphrase:c.a.func.isRequired,onClose:c.a.func.isRequired,onAuthentication:c.a.func.isRequired,shouldCloseOnClickOutside:c.a.bool},R.defaultProps={keyphrase:"",location:"",whichModalOpen:"none",isLoggedIn:!1,shouldCloseOnClickOutside:!0};var S=R,N=Object(f.compose)([Object(w.withSelect)(e=>{const{getSEMrushModalOpen:t,getSEMrushLoginStatus:s,getIsElementorEditor:o}=e("yoast-seo/editor");return{whichModalOpen:t(),isLoggedIn:s(),shouldCloseOnClickOutside:!o()}}),Object(w.withDispatch)(e=>{const{setSEMrushNoKeyphraseMessage:t,setSEMrushOpenModal:s,setSEMrushDismissModal:o,setSEMrushLoginStatus:r}=e("yoast-seo/editor");return{onOpenWithNoKeyphrase:()=>{t()},onOpen:e=>{s(e)},onClose:()=>{o()},onAuthentication:e=>{r(e)}}})])(S),B=s(71),I=s(4),M=s(16);const T=M.colors.$color_bad,L=M.colors.$palette_error_background,P=M.colors.$color_grey_text_light,A=M.colors.$palette_error_text,F=u.a.div`
	display: flex;
	flex-direction: column;
`,K=u.a.label`
	font-size: var(--yoast-font-size-default);
	font-weight: var(--yoast-font-weight-bold);
	${Object(i.getDirectionalStyle)("margin-right: 4px","margin-left: 4px")};
`,$=u.a.span`
	margin-bottom: 0.5em;
`,q=u()(a.InputField)`
	flex: 1 !important;
	box-sizing: border-box;
	max-width: 100%;
	margin: 0; // Reset margins inherited from WordPress.

	// Hide native X in Edge and IE11.
	&::-ms-clear {
		display: none;
	}

	&.has-error {
		border-color: ${T} !important;
		background-color: ${L} !important;

		&:focus {
			box-shadow: 0 0 2px ${T} !important;
		}
	}
`,U=u.a.ul`
	color: ${A};
	list-style-type: disc;
	list-style-position: outside;
	margin: 0;
	margin-left: 1.2em;
`,z=u.a.li`
	color: ${A};
	margin: 0 0 0.5em 0;
`,D=Object(a.addFocusStyle)(u.a.button`
		border: 1px solid transparent;
		box-shadow: none;
		background: none;
		flex: 0 0 32px;
		height: 32px;
		max-width: 32px;
		padding: 0;
		cursor: pointer;
	`);D.propTypes={type:c.a.string,focusColor:c.a.string,focusBackgroundColor:c.a.string,focusBorderColor:c.a.string},D.defaultProps={type:"button",focusColor:M.colors.$color_button_text_hover,focusBackgroundColor:"transparent",focusBorderColor:M.colors.$color_blue};const W=u()(a.SvgIcon)`
	margin-top: 4px;
`,G=u.a.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	&.has-remove-keyword-button {
		${q} {
			${Object(i.getDirectionalStyle)("padding-right: 40px","padding-left: 40px")};
		}

		${D} {
			${Object(i.getDirectionalStyle)("margin-left: -32px","margin-right: -32px")};
		}
	}
`;class H extends o.Component{constructor(e){super(e),this.handleChange=this.handleChange.bind(this)}handleChange(e){this.props.onChange(e.target.value)}renderLabel(){const{id:e,label:t,helpLink:s}=this.props;return Object(o.createElement)($,null,Object(o.createElement)(K,{htmlFor:e},t),s)}renderErrorMessages(){const e=[...this.props.errorMessages];return!Object(I.isEmpty)(e)&&Object(o.createElement)(U,null,e.map((e,t)=>Object(o.createElement)(z,{key:t},Object(o.createElement)("span",{role:"alert"},e))))}render(){const{id:e,showLabel:t,keyword:s,onRemoveKeyword:r,onBlurKeyword:n,onFocusKeyword:a,hasError:i}=this.props,l=!t,c=r!==I.noop;return Object(o.createElement)(F,null,t&&this.renderLabel(),i&&this.renderErrorMessages(),Object(o.createElement)(G,{className:c?"has-remove-keyword-button":null},Object(o.createElement)(q,{"aria-label":l?this.props.label:null,type:"text",id:e,className:i?"has-error":null,onChange:this.handleChange,onFocus:a,onBlur:n,value:s,autoComplete:"off"}),c&&Object(o.createElement)(D,{onClick:r,focusBoxShadowColor:"#084A67"},Object(o.createElement)(W,{size:"18px",icon:"times-circle",color:P}))))}}H.propTypes={id:c.a.string.isRequired,showLabel:c.a.bool,keyword:c.a.string,onChange:c.a.func.isRequired,onRemoveKeyword:c.a.func,onBlurKeyword:c.a.func,onFocusKeyword:c.a.func,label:c.a.string.isRequired,helpLink:c.a.node,hasError:c.a.bool,errorMessages:c.a.arrayOf(c.a.string)},H.defaultProps={showLabel:!0,keyword:"",onRemoveKeyword:I.noop,onBlurKeyword:I.noop,onFocusKeyword:I.noop,helpLink:null,hasError:!1,errorMessages:[]};var Y=H;const Q=u.a.div`
	padding: 16px;
	/* Necessary to compensate negative top margin of the collapsible after the keyword input. */
	border-bottom: 1px solid transparent;
`;class V extends o.Component{constructor(e){super(e),this.validate=this.validate.bind(this)}static renderHelpLink(){return Object(o.createElement)(B.a,{href:wpseoAdminL10n["shortlinks.focus_keyword_info"],className:"dashicons"},Object(o.createElement)("span",{className:"screen-reader-text"},
/* translators: Hidden accessibility text. */
Object(r.__)("Help on choosing the perfect focus keyphrase","wordpress-seo")))}validate(){const e=[...this.props.errors];return 0===this.props.keyword.trim().length&&this.props.displayNoKeyphraseMessage&&e.push(Object(r.__)("Please enter a focus keyphrase first to get related keyphrases","wordpress-seo")),0===this.props.keyword.trim().length&&this.props.displayNoKeyphrasForTrackingMessage&&e.push(Object(r.__)("Please enter a focus keyphrase first to track keyphrase performance","wordpress-seo")),this.props.keyword.includes(",")&&e.push(Object(r.__)("Are you trying to use multiple keyphrases? You should add them separately below.","wordpress-seo")),this.props.keyword.length>191&&e.push(Object(r.__)("Your keyphrase is too long. It can be a maximum of 191 characters.","wordpress-seo")),e}render(){const e=this.validate();return Object(o.createElement)(j.LocationConsumer,null,t=>Object(o.createElement)("div",{style:"sidebar"===t?{borderBottom:"1px solid #f0f0f0"}:{}},Object(o.createElement)(Q,{location:t},Object(o.createElement)(Y,{id:"focus-keyword-input-"+t,onChange:this.props.onFocusKeywordChange,keyword:this.props.keyword,label:Object(r.__)("Focus keyphrase","wordpress-seo"),helpLink:V.renderHelpLink(),onBlurKeyword:this.props.onBlurKeyword,onFocusKeyword:this.props.onFocusKeyword,hasError:e.length>0,errorMessages:e}),this.props.isSEMrushIntegrationActive&&Object(o.createElement)(N,{location:t,keyphrase:this.props.keyword})),Object(o.createElement)(n.Slot,{name:"YoastAfterKeywordInput"+(t.charAt(0).toUpperCase()+t.slice(1))})))}}V.propTypes={keyword:c.a.string,onFocusKeywordChange:c.a.func.isRequired,onFocusKeyword:c.a.func.isRequired,onBlurKeyword:c.a.func.isRequired,isSEMrushIntegrationActive:c.a.bool,displayNoKeyphraseMessage:c.a.bool,displayNoKeyphrasForTrackingMessage:c.a.bool,errors:c.a.arrayOf(c.a.string)},V.defaultProps={keyword:"",isSEMrushIntegrationActive:!1,displayNoKeyphraseMessage:!1,displayNoKeyphrasForTrackingMessage:!1,errors:[]};var J=Object(f.compose)([Object(w.withSelect)(e=>{const{getFocusKeyphrase:t,getSEMrushNoKeyphraseMessage:s,hasWincherNoKeyphrase:o,getFocusKeyphraseErrors:r}=e("yoast-seo/editor");return{keyword:t(),displayNoKeyphraseMessage:s(),displayNoKeyphrasForTrackingMessage:o(),errors:r()}}),Object(w.withDispatch)(e=>{const{setFocusKeyword:t,setMarkerPauseStatus:s}=e("yoast-seo/editor");return{onFocusKeywordChange:t,onFocusKeyword:()=>s(!0),onBlurKeyword:()=>s(!1)}})])(V),X=s(165),Z=s(168),ee=s(46),te=s(63),se=s(77);function oe(e){let{target:t,children:s}=e;return Object(o.createElement)(se.a,{target:t},s)}oe.propTypes={target:c.a.string.isRequired,children:c.a.node.isRequired};var re=s(15),ne=s(14);const ae=u.a.span`
	font-size: 1em;
	font-weight: bold;
	margin: 0 0 8px;
	display: block;
`,ie=u.a.div`
	padding: 16px;
`,le=u()(B.a)`
	margin: -8px 0 -4px 4px;
`;class ce extends o.Component{renderResults(e){return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(ae,null,Object(r.__)("Analysis results","wordpress-seo"),Object(o.createElement)(le,{href:wpseoAdminL10n["shortlinks.readability_analysis_info"],className:"dashicons"},Object(o.createElement)("span",{className:"screen-reader-text"},
/* translators: Hidden accessibility text. */
Object(r.__)("Learn more about the readability analysis","wordpress-seo")))),Object(o.createElement)(Z.a,{results:this.props.results,upsellResults:e,marksButtonClassName:"yoast-tooltip yoast-tooltip-w",marksButtonStatus:this.props.marksButtonStatus}))}getUpsellResults(e,t){let s=wpseoAdminL10n["shortlinks.upsell.metabox.word_complexity"];return"sidebar"===e&&(s=wpseoAdminL10n["shortlinks.upsell.sidebar.word_complexity"]),s=Object(ne.addQueryArgs)(s,{context:t}),function(){const e=re.helpers.getLanguagesWithWordComplexity(),t=window.wpseoScriptData.metabox.contentLocale,s=re.languageProcessing.getLanguage(t);return e.includes(s)}()?[{score:0,rating:"upsell",hasMarks:!1,id:"wordComplexity",text:Object(r.sprintf)(
/* Translators: %1$s is a span tag that adds styling to 'Word complexity', %2$s is a closing span tag.
       %3$s is an anchor tag with a link to yoast.com, %4$s is a closing anchor tag.*/
Object(r.__)("%1$sWord complexity%2$s: Is your vocabulary suited for a larger audience? %3$sYoast SEO Premium will tell you!%4$s","wordpress-seo"),"<span style='text-decoration: underline'>","</span>",`<a href="${s}" data-action="load-nfd-ctb" data-ctb-id="f6a84663-465f-4cb5-8ba5-f7a6d72224b2" target="_blank">`,"</a>"),markerId:"wordComplexity"}]:[]}render(){const e=Object(ee.a)(this.props.overallScore);return Object(I.isNil)(this.props.overallScore)&&(e.className="loading"),Object(o.createElement)(j.LocationConsumer,null,t=>Object(o.createElement)(j.RootContext.Consumer,null,s=>{let{locationContext:n}=s,a=[];return this.props.shouldUpsell&&(a=this.getUpsellResults(t,n)),"sidebar"===t?Object(o.createElement)(g.a,{title:Object(r.__)("Readability analysis","wordpress-seo"),titleScreenReaderText:e.screenReaderReadabilityText,prefixIcon:Object(te.getIconForScore)(e.className),prefixIconCollapsed:Object(te.getIconForScore)(e.className),id:"yoast-readability-analysis-collapsible-"+t},this.renderResults(a)):"metabox"===t?Object(o.createElement)(oe,{target:"wpseo-metabox-readability-root"},Object(o.createElement)(ie,null,Object(o.createElement)(X.a,{target:"wpseo-readability-score-icon",scoreIndicator:e.className}),this.renderResults(a))):void 0}))}}ce.propTypes={results:c.a.array.isRequired,marksButtonStatus:c.a.string.isRequired,overallScore:c.a.number,shouldUpsell:c.a.bool},ce.defaultProps={overallScore:null,shouldUpsell:!1};var de=Object(w.withSelect)(e=>{const{getReadabilityResults:t,getMarkButtonStatus:s}=e("yoast-seo/editor");return{...t(),marksButtonStatus:s()}})(ce),ue=s(18);const pe=u.a.p`
	color: ${M.colors.$color_upsell_text};
	margin: 0;
	padding-right: 8px;
`,be=u.a.div`
	font-size: 1em;
	display: flex;
	flex-direction: ${e=>"horizontal"===e.alignment?"row":"column"};
	${Object(i.getDirectionalStyle)("border-left","border-right")}: 4px solid ${M.colors.$color_pink_dark};
	margin: 16px 0;
	padding: 0 0 0 8px;
	max-width: 600px;

	> ${pe} {
		margin-bottom: ${e=>"vertical"===e.alignment&&"16px"};
	}
`,me=u()(a.SvgIcon)`
	margin: ${Object(i.getDirectionalStyle)("0 0 0 4px","0 4px 0 0")};
	transform: ${Object(i.getDirectionalStyle)("rotate(0deg)","rotate(180deg)")};
`,he=Object(i.makeOutboundLink)(a.UpsellLinkButton),ge=e=>{const{alignment:t,url:s}=e;return Object(o.createElement)(be,{alignment:t},Object(o.createElement)(pe,null,Object(r.sprintf)(
/* translators: %s expands to Yoast SEO Premium */
Object(r.__)("Did you know %s also analyzes the different word forms of your keyphrase, like plurals and past tenses?","wordpress-seo"),"Yoast SEO Premium")),Object(o.createElement)("div",null,Object(o.createElement)(he,{href:s,className:"UpsellLinkButton","data-action":"load-nfd-ctb","data-ctb-id":"f6a84663-465f-4cb5-8ba5-f7a6d72224b2"},Object(r.sprintf)(
/* translators: %s expands to Premium */
Object(r.__)("Go %s!","wordpress-seo"),"Premium"),Object(o.createElement)(me,{icon:"arrow-right",size:"8px",color:M.colors.$color_black}))))};ge.propTypes={alignment:c.a.oneOf(["horizontal","vertical"]),url:c.a.string.isRequired},ge.defaultProps={alignment:"vertical"};var ye=ge,Oe=s(72);const fe=e=>{const t=[Object(r.__)("Create content faster: Use AI to create titles & meta descriptions","wordpress-seo"),Object(r.__)("Get extra SEO checks with the Premium SEO analysis","wordpress-seo"),Object(r.__)("Avoid dead links on your site","wordpress-seo"),Object(r.__)("Easily improve the structure of your site","wordpress-seo"),Object(r.__)("Preview how your content looks when shared on social","wordpress-seo"),Object(r.__)("Get guidance & save time on routine SEO tasks","wordpress-seo")];return Object(o.createElement)(Oe.a,{title:Object(r.__)("Write more natural and engaging content","wordpress-seo"),description:Object(r.sprintf)(
/* translators: %s expands to "Yoast SEO Premium" */
Object(r.__)("Synonyms help users understand your copy better. It’s easier to read for both users and Google. In %s, you can add synonyms for your focus keyphrase, and we’ll help you optimize for them.","wordpress-seo"),"Yoast SEO Premium"),benefitsTitle:Object(r.__)("What’s more in Yoast SEO Premium?","wordpress-seo"),benefits:t,upsellButtonText:Object(r.sprintf)(
/* translators: %s expands to 'Yoast SEO Premium'. */
Object(r.__)("Unlock with %s","wordpress-seo"),"Yoast SEO Premium"),upsellButton:{href:e.buyLink,className:"yoast-button-upsell",rel:null,"data-ctb-id":"f6a84663-465f-4cb5-8ba5-f7a6d72224b2","data-action":"load-nfd-ctb"},upsellButtonLabel:Object(r.__)("1 year free support and updates included!","wordpress-seo")})};fe.propTypes={buyLink:c.a.string.isRequired};var we=fe,je=s(139);const ke=u.a.button`
	// Increase specificity to override WP rules.
	&& {
		display: flex;
		align-items: center;
	}

	.yoast-svg-icon {
		margin: 1px 7px 0 0;
		fill: currentColor;
	}
`,xe={open:Object(r.__)("Open","wordpress-seo"),heading:"",closeIconButton:Object(r.__)("Close","wordpress-seo"),closeButton:""},_e=e=>{const[t,s]=Object(o.useState)(!1),r=Object.assign({},xe,e.labels),n=Object(o.useCallback)(()=>s(!1),[]),i=Object(o.useCallback)(()=>s(!0),[]);return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(ke,{type:"button",onClick:i,className:e.classes.openButton+" yoast-modal__button-open"},e.openButtonIcon&&Object(o.createElement)(a.SvgIcon,{icon:e.openButtonIcon,size:"13px"}),r.open),t&&Object(o.createElement)(v.a,{onRequestClose:n,className:e.className,title:r.heading},e.children))};_e.propTypes={openButtonIcon:c.a.string,labels:c.a.shape({open:c.a.string,modalAriaLabel:c.a.string.isRequired,heading:c.a.string,closeIconButton:c.a.string,closeButton:c.a.string}).isRequired,classes:c.a.shape({openButton:c.a.string,closeIconButton:c.a.string,closeButton:c.a.string}),className:c.a.string,children:c.a.any.isRequired},_e.defaultProps={className:v.b,openButtonIcon:"",classes:{}};var ve=_e;function Ee(e){let{location:t}=e;return Object(o.createElement)(n.Slot,{name:"yoast-synonyms-"+t})}Ee.propTypes={location:c.a.string.isRequired};const Ce=u.a.span`
	font-size: 1em;
	font-weight: bold;
	margin: 1.5em 0 1em;
	display: block;
`;class Re extends o.Component{renderSynonymsUpsell(e,t){const s={className:v.b+" yoast-gutenberg-modal__box yoast-gutenberg-modal__no-padding",classes:{openButton:"wpseo-keyword-synonyms button-link"},labels:{open:"+ "+Object(r.__)("Add synonyms","wordpress-seo"),modalAriaLabel:Object(r.__)("Add synonyms","wordpress-seo"),heading:Object(r.__)("Add synonyms","wordpress-seo")}},n=wpseoAdminL10n["sidebar"===e.toLowerCase()?"shortlinks.upsell.sidebar.focus_keyword_synonyms_button":"shortlinks.upsell.metabox.focus_keyword_synonyms_button"];return Object(o.createElement)(ve,s,Object(o.createElement)(_.b,null,Object(o.createElement)(we,{buyLink:Object(ne.addQueryArgs)(n,{context:t})})))}renderMultipleKeywordsUpsell(e,t){const s={className:v.b+" yoast-gutenberg-modal__box yoast-gutenberg-modal__no-padding",classes:{openButton:"wpseo-multiple-keywords button-link"},labels:{open:"+ "+Object(r.__)("Add related keyphrase","wordpress-seo"),modalAriaLabel:Object(r.__)("Add related keyphrases","wordpress-seo"),heading:Object(r.__)("Add related keyphrases","wordpress-seo")}},n=wpseoAdminL10n["sidebar"===e.toLowerCase()?"shortlinks.upsell.sidebar.focus_keyword_additional_button":"shortlinks.upsell.metabox.focus_keyword_additional_button"];return Object(o.createElement)(ve,s,Object(o.createElement)(_.b,null,Object(o.createElement)(je.a,{buyLink:Object(ne.addQueryArgs)(n,{context:t})})))}renderWordFormsUpsell(e,t){let s="sidebar"===e?wpseoAdminL10n["shortlinks.upsell.sidebar.morphology_upsell_sidebar"]:wpseoAdminL10n["shortlinks.upsell.sidebar.morphology_upsell_metabox"];return s=Object(ne.addQueryArgs)(s,{context:t}),Object(o.createElement)(ye,{url:s,alignment:"sidebar"===e?"vertical":"horizontal"})}renderTabIcon(e,t){return"metabox"!==e?null:Object(o.createElement)(X.a,{target:"wpseo-seo-score-icon",scoreIndicator:t})}getUpsellResults(e,t){let s=wpseoAdminL10n["shortlinks.upsell.metabox.keyphrase_distribution"];return"sidebar"===e&&(s=wpseoAdminL10n["shortlinks.upsell.sidebar.keyphrase_distribution"]),s=Object(ne.addQueryArgs)(s,{context:t}),[{score:0,rating:"upsell",hasMarks:!1,hasJumps:!1,id:"keyphraseDistribution",text:Object(r.sprintf)(
/* Translators: %1$s is a span tag that adds styling to 'Keyphrase distribution', %2$s is a closing span tag.
     %3%s is an anchor tag with a link to yoast.com, %4$s is a closing anchor tag.*/
Object(r.__)("%1$sKeyphrase distribution%2$s: Have you evenly distributed your focus keyphrase throughout the whole text? %3$sYoast SEO Premium will tell you!%4$s","wordpress-seo"),"<span style='text-decoration: underline'>","</span>",`<a href="${s}" data-action="load-nfd-ctb" data-ctb-id="f6a84663-465f-4cb5-8ba5-f7a6d72224b2" target="_blank">`,"</a>"),markerId:"keyphraseDistribution"}]}render(){const e=Object(ee.a)(this.props.overallScore),t=Object(ue.a)().isPremium;return"loading"!==e.className&&""===this.props.keyword&&(e.className="na",e.screenReaderReadabilityText=Object(r.__)("Enter a focus keyphrase to calculate the SEO score","wordpress-seo")),Object(o.createElement)(j.LocationConsumer,null,s=>Object(o.createElement)(j.RootContext.Consumer,null,n=>{let{locationContext:a}=n;const i="metabox"===s?h.a:g.a;let l=[];return this.props.shouldUpsell&&(l=this.getUpsellResults(s,a)),Object(o.createElement)(o.Fragment,null,Object(o.createElement)(i,{title:t?Object(r.__)("Premium SEO analysis","wordpress-seo"):Object(r.__)("SEO analysis","wordpress-seo"),titleScreenReaderText:e.screenReaderReadabilityText,prefixIcon:Object(te.getIconForScore)(e.className),prefixIconCollapsed:Object(te.getIconForScore)(e.className),subTitle:this.props.keyword,id:"yoast-seo-analysis-collapsible-"+s},Object(o.createElement)(Ee,{location:s}),this.props.shouldUpsell&&Object(o.createElement)(o.Fragment,null,this.renderSynonymsUpsell(s,a),this.renderMultipleKeywordsUpsell(s,a)),this.props.shouldUpsellWordFormRecognition&&this.renderWordFormsUpsell(s,a),Object(o.createElement)(Ce,null,Object(r.__)("Analysis results","wordpress-seo")),Object(o.createElement)(Z.a,{results:this.props.results,upsellResults:l,marksButtonClassName:"yoast-tooltip yoast-tooltip-w",editButtonClassName:"yoast-tooltip yoast-tooltip-w",marksButtonStatus:this.props.marksButtonStatus,location:s})),this.renderTabIcon(s,e.className))}))}}Re.propTypes={results:c.a.array,marksButtonStatus:c.a.string,keyword:c.a.string,shouldUpsell:c.a.bool,shouldUpsellWordFormRecognition:c.a.bool,overallScore:c.a.number},Re.defaultProps={results:[],marksButtonStatus:null,keyword:"",shouldUpsell:!1,shouldUpsellWordFormRecognition:!1,overallScore:null};var Se=Object(w.withSelect)((e,t)=>{const{getFocusKeyphrase:s,getMarksButtonStatus:o,getResultsForKeyword:r}=e("yoast-seo/editor"),n=s();return{...r(n),marksButtonStatus:t.hideMarksButtons?"disabled":o(),keyword:n}})(Re);function Ne(){const e=Object(ue.a)();return Object(I.get)(e,"multilingualPluginActive",!1)}const Be=u.a.span`
	font-size: 1em;
	font-weight: bold;
	margin: 0 0 8px;
	display: block;
`,Ie=u.a.div`
	padding: 16px;
`,Me=u()(B.a)`
	margin: -8px 0 -4px 4px;
`,Te=u.a.p`
	min-height: 24px;
	margin: 12px 0 0 0;
	padding: 0;
	display: flex;
	align-items: flex-start;
`,Le=u()(a.SvgIcon)`
	margin: 3px 11px 0 0; // icon 13 + 11 right margin = 24 for the 8px grid.
`,Pe=e=>{const t=wpseoAdminL10n["shortlinks.inclusive_language_analysis_info"];function s(){return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(Be,null,Object(r.__)("Analysis results","wordpress-seo"),Object(o.createElement)(Me,{href:t,className:"dashicons"},Object(o.createElement)("span",{className:"screen-reader-text"},
/* translators: Hidden accessibility text. */
Object(r.__)("Learn more about the inclusive language analysis","wordpress-seo")))),Object(o.createElement)(Z.a,{results:e.results,marksButtonClassName:"yoast-tooltip yoast-tooltip-w",marksButtonStatus:e.marksButtonStatus,resultCategoryLabels:{problems:Object(r.__)("Non-inclusive phrases","wordpress-seo"),improvements:Object(r.__)("Potentially non-inclusive phrases","wordpress-seo")}}))}const n=Object(o.createInterpolateElement)(Object(r.sprintf)(
/* Translators: %1$s expands to a link on yoast.com, %2$s expands to the anchor end tag. */
Object(r.__)("%1$sInclusive language%2$s: We haven't detected any potentially non-inclusive phrases. Great work!","wordpress-seo"),"<a>","</a>"),{a:Object(o.createElement)("a",{href:t,target:"_blank",rel:"noreferrer"})});function i(){const e=Object(r.__)("We noticed that you are using a multilingual plugin. Please be aware that this analysis feedback is intended only for texts written in English.","wordpress-seo");return Object(o.createElement)(a.Alert,{type:"info"},e)}function l(){return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(Be,null,Object(r.__)("Analysis results","wordpress-seo"),Object(o.createElement)(Me,{href:t,className:"dashicons"},Object(o.createElement)("span",{className:"screen-reader-text"},
/* translators: Hidden accessibility text. */
Object(r.__)("Learn more about the inclusive language analysis","wordpress-seo")))),Object(o.createElement)(Te,null,Object(o.createElement)(Le,{icon:"circle",color:"#7ad03a",size:"13px"}),Object(o.createElement)("span",null,n)))}const c=Object(ee.a)(e.overallScore);return Object(I.isNil)(e.overallScore)&&(c.className="loading"),Object(o.createElement)(j.LocationConsumer,null,t=>{return"sidebar"===t?(n=e.results,a=c,Object(o.createElement)(g.a,{title:Object(r.__)("Inclusive language","wordpress-seo"),titleScreenReaderText:a.screenReaderInclusiveLanguageText,prefixIcon:Object(te.getIconForScore)(a.className),prefixIconCollapsed:Object(te.getIconForScore)(a.className),id:"yoast-inclusive-language-analysis-collapsible-sidebar"},Ne()?i():null,n.length>=1?s():l())):"metabox"===t?function(e,t){return Object(o.createElement)(se.a,{target:"wpseo-metabox-inclusive-language-root"},Object(o.createElement)(Ie,null,Object(o.createElement)(X.a,{target:"wpseo-inclusive-language-score-icon",scoreIndicator:t.className}),Ne()?i():null,e.length>=1?s():l()))}(e.results,c):void 0;var n,a})};Pe.propTypes={results:c.a.array,marksButtonStatus:c.a.oneOf(["enabled","disabled","hidden"]).isRequired,overallScore:c.a.number},Pe.defaultProps={results:[],overallScore:null};var Ae=Object(w.withSelect)(e=>{const{getInclusiveLanguageResults:t,getMarkButtonStatus:s}=e("yoast-seo/editor");return{...t(),marksButtonStatus:s()}})(Pe);window.yoast=window.yoast||{},window.yoast.externals=window.yoast.externals||{},window.yoast.externals.components={CollapsibleCornerstone:O,KeywordInput:J,ReadabilityAnalysis:de,SeoAnalysis:Se,InclusiveLanguageAnalysis:Ae}},3:function(e,t){e.exports=window.React},33:function(e,t,s){"use strict";s.d(t,"b",(function(){return c}));var o=s(10),r=s.n(o),n=s(0),a=s(2),i=s.n(a),l=s(19);const c="yoast yoast-gutenberg-modal",d=e=>{const{title:t,className:s,showYoastIcon:o,additionalClassName:a,...i}=e,c=o?Object(n.createElement)("span",{className:"yoast-icon"}):null;return Object(n.createElement)(l.Modal,r()({title:t,className:`${s} ${a}`,icon:c},i),e.children)};d.propTypes={title:i.a.string,className:i.a.string,showYoastIcon:i.a.bool,children:i.a.oneOfType([i.a.node,i.a.arrayOf(i.a.node)]),additionalClassName:i.a.string},d.defaultProps={title:"Yoast SEO",className:c,showYoastIcon:!0,children:null,additionalClassName:""},t.a=d},4:function(e,t){e.exports=window.lodash},40:function(e,t){e.exports=window.wp.hooks},46:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var o=s(1),r=s(15),n=s(4);function a(e){return Object(n.isNil)(e)||(e/=10),function(e){switch(e){case"feedback":return{className:"na",screenReaderText:Object(o.__)("Feedback","wordpress-seo"),screenReaderReadabilityText:"",screenReaderInclusiveLanguageText:""};case"bad":return{className:"bad",screenReaderText:Object(o.__)("Needs improvement","wordpress-seo"),screenReaderReadabilityText:Object(o.__)("Needs improvement","wordpress-seo"),screenReaderInclusiveLanguageText:Object(o.__)("Needs improvement","wordpress-seo")};case"ok":return{className:"ok",screenReaderText:Object(o.__)("OK SEO score","wordpress-seo"),screenReaderReadabilityText:Object(o.__)("OK","wordpress-seo"),screenReaderInclusiveLanguageText:Object(o.__)("Potentially non-inclusive","wordpress-seo")};case"good":return{className:"good",screenReaderText:Object(o.__)("Good SEO score","wordpress-seo"),screenReaderReadabilityText:Object(o.__)("Good","wordpress-seo"),screenReaderInclusiveLanguageText:Object(o.__)("Good","wordpress-seo")};default:return{className:"loading",screenReaderText:"",screenReaderReadabilityText:"",screenReaderInclusiveLanguageText:""}}}(r.interpreters.scoreToRating(e))}},5:function(e,t){e.exports=window.wp.data},50:function(e,t,s){"use strict";var o=s(0),r=s(8),n=s(2),a=s.n(n);const i=e=>Object(o.createElement)("div",{className:"yoast components-panel__body"},Object(o.createElement)("h2",{className:"components-panel__body-title"},Object(o.createElement)("button",{id:e.id,onClick:e.onClick,className:"components-button components-panel__body-toggle"},e.prefixIcon&&Object(o.createElement)("span",{className:"yoast-icon-span",style:{fill:""+(e.prefixIcon&&e.prefixIcon.color||"")}},Object(o.createElement)(r.SvgIcon,{size:e.prefixIcon.size,icon:e.prefixIcon.icon})),Object(o.createElement)("span",{className:"yoast-title-container"},Object(o.createElement)("div",{className:"yoast-title"},e.title),Object(o.createElement)("div",{className:"yoast-subtitle"},e.subTitle)),e.children,e.suffixIcon&&Object(o.createElement)(r.SvgIcon,{size:e.suffixIcon.size,icon:e.suffixIcon.icon}),e.SuffixHeroIcon)));t.a=i,i.propTypes={onClick:a.a.func.isRequired,title:a.a.string.isRequired,id:a.a.string,subTitle:a.a.string,suffixIcon:a.a.object,SuffixHeroIcon:a.a.object,prefixIcon:a.a.object,children:a.a.node},i.defaultProps={id:"",suffixIcon:null,SuffixHeroIcon:null,prefixIcon:null,subTitle:"",children:null}},55:function(e,t,s){"use strict";s.d(t,"a",(function(){return i})),s.d(t,"b",(function(){return l}));var o=s(9),r=s.n(o),n=s(8),a=s(11);const i=r.a.div`
	min-width: 600px;

	@media screen and ( max-width: 680px ) {
		min-width: 0;
		width: 86vw;
	}
`,l=r.a.div`
	@media screen and ( min-width: 600px ) {
		max-width: 420px;
	}
`;r()(n.Icon)`
	float: ${Object(a.getDirectionalStyle)("right","left")};
	margin: ${Object(a.getDirectionalStyle)("0 0 16px 16px","0 16px 16px 0")};

	&& {
		width: 150px;
		height: 150px;

		@media screen and ( max-width: 680px ) {
			width: 80px;
			height: 80px;
		}
	}
`},63:function(e,t,s){"use strict";s.r(t),s.d(t,"getIconForScore",(function(){return i})),s.d(t,"default",(function(){return l}));var o=s(16),r=s(15);function n(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const s=e.getIdentifier(),o={score:e.score,rating:r.interpreters.scoreToRating(e.score),hasMarks:e.hasMarks(),marker:e.getMarker(),id:s,text:e.text,markerId:t.length>0?`${t}:${s}`:s,hasBetaBadge:e.hasBetaBadge(),hasJumps:e.hasJumps(),editFieldName:e.editFieldName};return"ok"===o.rating&&(o.rating="OK"),o}function a(e,t){switch(e.rating){case"error":t.errorsResults.push(e);break;case"feedback":t.considerationsResults.push(e);break;case"bad":t.problemsResults.push(e);break;case"OK":t.improvementsResults.push(e);break;case"good":t.goodResults.push(e)}return t}function i(e){switch(e){case"loading":return{icon:"loading-spinner",color:o.colors.$color_green_medium_light};case"not-set":return{icon:"seo-score-none",color:o.colors.$color_score_icon};case"noindex":return{icon:"seo-score-none",color:o.colors.$color_noindex};case"good":return{icon:"seo-score-good",color:o.colors.$color_green_medium};case"ok":return{icon:"seo-score-ok",color:o.colors.$color_ok};default:return{icon:"seo-score-bad",color:o.colors.$color_red}}}function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s={errorsResults:[],problemsResults:[],improvementsResults:[],goodResults:[],considerationsResults:[]};if(!e)return s;for(let o=0;o<e.length;o++){const r=e[o];r.text&&(s=a(n(r,t),s))}return s}},66:function(e,t,s){"use strict";var o=s(10),r=s.n(o),n=s(0),a=s(8),i=s(9);const l=s.n(i)()(a.Collapsible)`
	h2 > button {
		padding-left: 24px;
		padding-top: 16px;

		&:hover {
			background-color: #f0f0f0;
		}
	}

	div[class^="collapsible_content"] {
		padding: 24px 0;
		margin: 0 24px;
		border-top: 1px solid rgba(0,0,0,0.2);
	}

`;t.a=e=>Object(n.createElement)(l,r()({hasPadding:!0,hasSeparator:!0},e))},71:function(e,t,s){"use strict";var o=s(16),r=s(11),n=s(9),a=s.n(n);const i=Object(r.makeOutboundLink)(a.a.a`
	display: inline-block;
	position: relative;
	outline: none;
	text-decoration: none;
	border-radius: 100%;
	width: 24px;
	height: 24px;
	margin: -4px 0;
	vertical-align: middle;

	color: ${o.colors.$color_help_text};
	
	&:hover,
	&:focus {
		color: ${o.colors.$color_snippet_focus};	
	}
	
	// Overwrite the default blue active color for links.
	&:active {
		color: ${o.colors.$color_help_text};	
	}

	&::before {
		position: absolute;
		top: 0;
		left: 0;
		padding: 2px;
		content: "\f223";
	}
`);t.a=i},72:function(e,t,s){"use strict";var o=s(0),r=s(5),n=s(11),a=s(2),i=s.n(a),l=s(9),c=s.n(l),d=s(1);const u=c.a.div`
  padding: 25px 32px 32px;
  color: #303030;
`,p=c.a.ul`
  margin: 0;
  padding: 0;

  li {
    list-style-image: var(--yoast-svg-icon-check);
    margin: 0.5rem 0 0 1.5rem;
    line-height: 1.4em;

    &::marker {
      font-size: 1.5rem;
    }
  }
`,b=c.a.span`
  display: block;
  margin-top: 4px;
`,m=c.a.h2`
  margin-top: 0;
  margin-bottom: 0.25rem;
  color: #303030;
  font-size: 0.8125rem;
  font-weight: 600;
`,h=c.a.p`
  display: block;
  margin: 0.25rem 0 1rem 0 !important;
  max-width: 420px;
`,g=c.a.hr`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  border-top: 0;
  border-bottom: 1px solid #E2E8F0;
`,y=c.a.div`
  text-align: center;
`,O=c.a.a`
  width: 100%;
`,f=Object(n.makeOutboundLink)(O);class w extends o.Component{constructor(e){super(e),this.state={defaultPrice:"99"}}createBenefitsList(e){return e.length>0&&Object(o.createElement)(p,{role:"list"},e.map((e,t)=>Object(o.createElement)("li",{key:"upsell-benefit-"+t},Object(o.createInterpolateElement)(e.replace("<strong>","{{strong}}").replace("</strong>","{{/strong}}"),{strong:Object(o.createElement)("strong",null)}))))}render(){const e=Object(r.select)("yoast-seo/editor").isPromotionActive("black-friday-2023-promotion"),{defaultPrice:t}=this.state,s=e?"69.30":null,n=s||t;return Object(o.createElement)(o.Fragment,null,e&&Object(o.createElement)("div",{className:"yst-flex yst-justify-between yst-items-center yst-text-lg yst-content-between yst-bg-black yst-text-amber-300 yst-h-9 yst-border-amber-300 yst-border-y yst-border-x-0 yst-border-solid yst-px-6"},Object(o.createElement)("div",null,Object(d.__)("BLACK FRIDAY","wordpress-seo")),Object(o.createElement)("div",null,Object(d.__)("30% OFF","wordpress-seo"))),Object(o.createElement)(u,null,Object(o.createElement)(m,null,this.props.title),Object(o.createElement)(h,null,this.props.description),Object(o.createElement)(y,null,Object(o.createElement)(f,this.props.upsellButton,this.props.upsellButtonText,this.props.upsellButtonHasCaret&&Object(o.createElement)("span",{"aria-hidden":"true",className:"yoast-button-upsell__caret"})),Object(o.createElement)("div",{className:"yst-text-slate-600 yst-my-4"},s&&Object(o.createElement)(o.Fragment,null,Object(o.createElement)("span",{className:"yst-text-slate-500 yst-line-through"},t)," "),Object(o.createElement)("span",{className:"yst-text-slate-900 yst-text-2xl yst-font-bold"},n)," ",Object(d.__)("$ USD / € EUR / £ GBP per year (ex. VAT)","wordpress-seo")),Object(o.createElement)(b,{id:this.props.upsellButton["aria-describedby"]},this.props.upsellButtonLabel)),Object(o.createElement)(g,null),Object(o.createElement)(m,null,this.props.benefitsTitle),this.createBenefitsList(this.props.benefits)))}}w.propTypes={title:i.a.node,benefits:i.a.array,benefitsTitle:i.a.node,description:i.a.node,upsellButton:i.a.object,upsellButtonText:i.a.string.isRequired,upsellButtonLabel:i.a.string,upsellButtonHasCaret:i.a.bool},w.defaultProps={title:null,description:null,benefits:[],benefitsTitle:null,upsellButton:{href:"",className:"button button-primary"},upsellButtonLabel:"",upsellButtonHasCaret:!0},t.a=w},77:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var o=s(0),r=s(2),n=s.n(r);function a(e){let{target:t,children:s}=e,r=t;return"string"==typeof t&&(r=document.getElementById(t)),r?Object(o.createPortal)(s,r):null}a.propTypes={target:n.a.oneOfType([n.a.string,n.a.object]).isRequired,children:n.a.node.isRequired}},8:function(e,t){e.exports=window.yoast.componentsNew},9:function(e,t){e.exports=window.yoast.styledComponents},90:function(e,t,s){"use strict";var o=s(0),r=s(8),n=s(2),a=s.n(n);const i=e=>{const[t,s]=Object(o.useState)(!1),{prefixIcon:n}=e;return Object(o.createElement)("div",{className:"yoast components-panel__body "+(t?"is-opened":"")},Object(o.createElement)("h2",{className:"components-panel__body-title"},Object(o.createElement)("button",{onClick:function(){s(!t)},className:"components-button components-panel__body-toggle"},Object(o.createElement)("span",{className:"yoast-icon-span",style:{fill:""+(n&&n.color||"")}},n&&Object(o.createElement)(r.SvgIcon,{icon:n.icon,color:n.color,size:n.size})),Object(o.createElement)("span",{className:"yoast-title-container"},Object(o.createElement)("div",{className:"yoast-title"},e.title),Object(o.createElement)("div",{className:"yoast-subtitle"},e.subTitle)),e.hasBetaBadgeLabel&&Object(o.createElement)(r.BetaBadge,null),Object(o.createElement)("span",{className:"yoast-chevron","aria-hidden":"true"}))),t&&e.children)};t.a=i,i.propTypes={title:a.a.string.isRequired,children:a.a.oneOfType([a.a.node,a.a.arrayOf(a.a.node)]).isRequired,prefixIcon:a.a.object,subTitle:a.a.string,hasBetaBadgeLabel:a.a.bool},i.defaultProps={prefixIcon:null,subTitle:"",hasBetaBadgeLabel:!1}}});