"use strict";(self.webpackChunk_dts_stn_service_canada_design_system=self.webpackChunk_dts_stn_service_canada_design_system||[]).push([[1873],{"./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-styling/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Media/styles.css":function(module,__webpack_exports__,__webpack_require__){var _node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'input[type="range"] {\n  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n  width: 100%; /* Specific width is required for Firefox. */\n  background: transparent; /* Otherwise white in Chrome */\n}\n\ninput[type="range"]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n}\n\ninput[type="range"]:focus {\n  outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n}\n\ninput[type="range"]::-ms-track {\n  width: 100%;\n  cursor: pointer;\n\n  /* Hides the slider so custom styles can be added */\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\n\n/* Special styling for WebKit/Blink */\ninput[type="range"]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  border: 1px solid #000000;\n  height: 26px;\n  width: 12px;\n  border-radius: 3px;\n  background: #ffffff;\n  cursor: pointer;\n  margin-top: -10px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; /* Add cool effects to your sliders! */\n}\n\n/* All the same stuff for Firefox */\ninput[type="range"]::-moz-range-thumb {\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  border: 1px solid #000000;\n  height: 26px;\n  width: 12px;\n  border-radius: 3px;\n  background: #ffffff;\n  cursor: pointer;\n}\n\n/* All the same stuff for IE */\ninput[type="range"]::-ms-thumb {\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  border: 1px solid #000000;\n  height: 26px;\n  width: 12px;\n  border-radius: 3px;\n  background: #ffffff;\n  cursor: pointer;\n}\n\ninput[type="range"]::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 8.4px;\n  cursor: pointer;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  background: #989da6;\n  border-radius: 1.3px;\n  border: 0.2px solid #010101;\n}\n\ninput[type="range"]::-moz-range-track {\n  width: 100%;\n  height: 8.4px;\n  cursor: pointer;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  background: #989da6;\n  border-radius: 1.3px;\n  border: 0.2px solid #010101;\n}\n\ninput[type="range"]::-ms-track {\n  width: 100%;\n  height: 8.4px;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  border-width: 12px 0;\n  color: transparent;\n}\n\ninput[type="range"] {\n  background: #989da6;\n}\n\ninput[type="range"]:focus::-ms-fill-upper {\n  background: #989da6;\n}\n\n.pauseScreen {\n  background-color: transparent;\n}\n\nprogress::-webkit-progress-value {\n  background: #2572b4;\n  border-radius: 12px;\n}\nprogress::-moz-progress-bar {\n  background: #2572b4;\n  border-radius: 12px;\n}\n\nprogress[value]::-webkit-progress-bar {\n  background-color: #ffffff;\n  border-radius: 12px;\n}\n\n.ds-playback-font {\n  color: white;\n  font-weight: bolder;\n}\n\n.capIndicator {\n  position: absolute;\n  bottom: 15px;\n  right: 106px;\n  height: 4px;\n  width: 18px;\n  border-radius: 4px;\n}\n\n@media (max-width: 550px) {\n  .newLayout {\n    position: absolute;\n    margin-top: -40px;\n    left: 0;\n  }\n\n  .progressBar {\n    margin-bottom: 18px;\n  }\n\n  .bottomControls {\n    padding-top: 10px;\n  }\n\n  .menuPos {\n    position: absolute;\n    bottom: 126px;\n    right: 47px;\n    border: 1px solid grey;\n  }\n\n  .volumePos {\n    position: absolute;\n    padding: 4px;\n    padding-bottom: 8px;\n    bottom: 119px;\n    width: 120px;\n    left: 127px;\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n  }\n\n  .desPos {\n    padding-top: 123px;\n  }\n  .timePos {\n    order: -1;\n  }\n}\n\n@media (min-width: 550px) {\n  .menuPos {\n    position: absolute;\n    bottom: 100px;\n    right: 47px;\n    border: 1px solid grey;\n  }\n\n  .volumePos {\n    position: absolute;\n    padding: 4px;\n    padding-bottom: 8px;\n    bottom: 152px;\n    left: 96px;\n    border: 1px solid grey;\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n  }\n\n  .desPos {\n    padding-top: 97px;\n  }\n\n  .timePos {\n    order: 1;\n  }\n}\n',"",{version:3,sources:["webpack://./src/components/Media/styles.css"],names:[],mappings:"AAAA;EACE,wBAAwB,EAAE,uDAAuD;EACjF,WAAW,EAAE,4CAA4C;EACzD,uBAAuB,EAAE,8BAA8B;AACzD;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,aAAa,EAAE,iHAAiH;AAClI;;AAEA;EACE,WAAW;EACX,eAAe;;EAEf,mDAAmD;EACnD,uBAAuB;EACvB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA,qCAAqC;AACrC;EACE,wBAAwB;EACxB,yBAAyB;EACzB,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,iBAAiB,EAAE,kFAAkF;EACrG,oDAAoD,EAAE,sCAAsC;AAC9F;;AAEA,mCAAmC;AACnC;EACE,oDAAoD;EACpD,yBAAyB;EACzB,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;AACjB;;AAEA,8BAA8B;AAC9B;EACE,oDAAoD;EACpD,yBAAyB;EACzB,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,eAAe;EACf,oDAAoD;EACpD,mBAAmB;EACnB,oBAAoB;EACpB,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,aAAa;EACb,eAAe;EACf,oDAAoD;EACpD,mBAAmB;EACnB,oBAAoB;EACpB,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,yBAAyB;EACzB,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,WAAW;EACX,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE;IACE,kBAAkB;IAClB,iBAAiB;IACjB,OAAO;EACT;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,kBAAkB;IAClB,aAAa;IACb,WAAW;IACX,sBAAsB;EACxB;;EAEA;IACE,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,WAAW;IACX,iCAAyB;YAAzB,yBAAyB;EAC3B;;EAEA;IACE,kBAAkB;EACpB;EACA;IACE,SAAS;EACX;AACF;;AAEA;EACE;IACE,kBAAkB;IAClB,aAAa;IACb,WAAW;IACX,sBAAsB;EACxB;;EAEA;IACE,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,UAAU;IACV,sBAAsB;IACtB,iCAAyB;YAAzB,yBAAyB;EAC3B;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,QAAQ;EACV;AACF",sourcesContent:['input[type="range"] {\n  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n  width: 100%; /* Specific width is required for Firefox. */\n  background: transparent; /* Otherwise white in Chrome */\n}\n\ninput[type="range"]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n}\n\ninput[type="range"]:focus {\n  outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n}\n\ninput[type="range"]::-ms-track {\n  width: 100%;\n  cursor: pointer;\n\n  /* Hides the slider so custom styles can be added */\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\n\n/* Special styling for WebKit/Blink */\ninput[type="range"]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  border: 1px solid #000000;\n  height: 26px;\n  width: 12px;\n  border-radius: 3px;\n  background: #ffffff;\n  cursor: pointer;\n  margin-top: -10px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; /* Add cool effects to your sliders! */\n}\n\n/* All the same stuff for Firefox */\ninput[type="range"]::-moz-range-thumb {\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  border: 1px solid #000000;\n  height: 26px;\n  width: 12px;\n  border-radius: 3px;\n  background: #ffffff;\n  cursor: pointer;\n}\n\n/* All the same stuff for IE */\ninput[type="range"]::-ms-thumb {\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  border: 1px solid #000000;\n  height: 26px;\n  width: 12px;\n  border-radius: 3px;\n  background: #ffffff;\n  cursor: pointer;\n}\n\ninput[type="range"]::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 8.4px;\n  cursor: pointer;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  background: #989da6;\n  border-radius: 1.3px;\n  border: 0.2px solid #010101;\n}\n\ninput[type="range"]::-moz-range-track {\n  width: 100%;\n  height: 8.4px;\n  cursor: pointer;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  background: #989da6;\n  border-radius: 1.3px;\n  border: 0.2px solid #010101;\n}\n\ninput[type="range"]::-ms-track {\n  width: 100%;\n  height: 8.4px;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  border-width: 12px 0;\n  color: transparent;\n}\n\ninput[type="range"] {\n  background: #989da6;\n}\n\ninput[type="range"]:focus::-ms-fill-upper {\n  background: #989da6;\n}\n\n.pauseScreen {\n  background-color: transparent;\n}\n\nprogress::-webkit-progress-value {\n  background: #2572b4;\n  border-radius: 12px;\n}\nprogress::-moz-progress-bar {\n  background: #2572b4;\n  border-radius: 12px;\n}\n\nprogress[value]::-webkit-progress-bar {\n  background-color: #ffffff;\n  border-radius: 12px;\n}\n\n.ds-playback-font {\n  color: white;\n  font-weight: bolder;\n}\n\n.capIndicator {\n  position: absolute;\n  bottom: 15px;\n  right: 106px;\n  height: 4px;\n  width: 18px;\n  border-radius: 4px;\n}\n\n@media (max-width: 550px) {\n  .newLayout {\n    position: absolute;\n    margin-top: -40px;\n    left: 0;\n  }\n\n  .progressBar {\n    margin-bottom: 18px;\n  }\n\n  .bottomControls {\n    padding-top: 10px;\n  }\n\n  .menuPos {\n    position: absolute;\n    bottom: 126px;\n    right: 47px;\n    border: 1px solid grey;\n  }\n\n  .volumePos {\n    position: absolute;\n    padding: 4px;\n    padding-bottom: 8px;\n    bottom: 119px;\n    width: 120px;\n    left: 127px;\n    transform: rotate(-90deg);\n  }\n\n  .desPos {\n    padding-top: 123px;\n  }\n  .timePos {\n    order: -1;\n  }\n}\n\n@media (min-width: 550px) {\n  .menuPos {\n    position: absolute;\n    bottom: 100px;\n    right: 47px;\n    border: 1px solid grey;\n  }\n\n  .volumePos {\n    position: absolute;\n    padding: 4px;\n    padding-bottom: 8px;\n    bottom: 152px;\n    left: 96px;\n    border: 1px solid grey;\n    transform: rotate(-90deg);\n  }\n\n  .desPos {\n    padding-top: 97px;\n  }\n\n  .timePos {\n    order: 1;\n  }\n}\n'],sourceRoot:""}]),__webpack_exports__.Z=___CSS_LOADER_EXPORT___},"./src/components/Media/styles.css":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){var _node_modules_storybook_addon_styling_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_storybook_addon_styling_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_addon_styling_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_addon_styling_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_storybook_addon_styling_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_storybook_addon_styling_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_storybook_addon_styling_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_storybook_addon_styling_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_storybook_addon_styling_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_storybook_addon_styling_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_storybook_addon_styling_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_storybook_addon_styling_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_storybook_addon_styling_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_storybook_addon_styling_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_storybook_addon_styling_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_storybook_addon_styling_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_storybook_addon_styling_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_storybook_addon_styling_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_storybook_addon_styling_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_node_modules_storybook_addon_styling_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-styling/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Media/styles.css"),options={};options.styleTagTransform=_node_modules_storybook_addon_styling_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_storybook_addon_styling_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_storybook_addon_styling_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_storybook_addon_styling_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_storybook_addon_styling_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_storybook_addon_styling_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_node_modules_storybook_addon_styling_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__.Z,options),_node_modules_storybook_addon_styling_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_node_modules_storybook_addon_styling_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__.Z&&_node_modules_storybook_addon_styling_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_node_modules_storybook_addon_styling_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__.Z.locals&&_node_modules_storybook_addon_styling_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_node_modules_storybook_addon_styling_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__.Z.locals},"./src/components/Media/YoutubePlayer/YoutubePlayer.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Youtube:function(){return Youtube},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return YoutubePlayer_stories}});var _Youtube$parameters,_Youtube$parameters2,prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/react-player/lib/index.js"),playBtn=__webpack_require__("./src/assets/playBtn.svg"),pauseIcon=__webpack_require__("./src/assets/pauseIcon.svg"),assets_volume=__webpack_require__("./src/assets/volume.svg"),volumeNone=__webpack_require__("./src/assets/volumeNone.svg"),assets_caption=__webpack_require__("./src/assets/caption.svg"),captionClosed=__webpack_require__("./src/assets/captionClosed.svg"),backward_fast_solid=__webpack_require__("./src/assets/backward-fast-solid.svg"),forward_fast=__webpack_require__("./src/assets/forward-fast.svg"),expand_solid=__webpack_require__("./src/assets/expand-solid.svg"),compress_solid=__webpack_require__("./src/assets/compress-solid.svg"),index_modern=__webpack_require__("./node_modules/react-full-screen/dist/index.modern.js"),Image=__webpack_require__("./src/components/Image/Image.js"),jsx_runtime=(__webpack_require__("./src/components/Media/styles.css"),__webpack_require__("./node_modules/react/jsx-runtime.js"));function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function YoutubePlayer(props){var id=props.id,videoURL=props.videoURL,description=props.description,_React$useState2=_slicedToArray(react.useState({pausePlay:!1,mute:!1,volume:.5,caption:!1,time:0,curTimeDisplay:"00:00:00",totalTimeDisplay:"00:00:00",totalTime:0,screen:!1,speed:1,speedViewState:!1,volumeViewState:!1}),2),state=_React$useState2[0],setState=_React$useState2[1],pausePlay=state.pausePlay,mute=state.mute,volume=state.volume,caption=state.caption,time=state.time,totalTime=state.totalTime,curTimeDisplay=state.curTimeDisplay,totalTimeDisplay=state.totalTimeDisplay,screen=state.screen,speed=state.speed,speedViewState=state.speedViewState,volumeViewState=state.volumeViewState,playerRef1=react.useRef(null),playerRef2=react.useRef(null),focusRef=react.useRef(null),focusSpeedRef=react.useRef(null),fullScreen=(0,index_modern.r)(),handleTime=function handleTime(e){setState(_objectSpread(_objectSpread({},state),{},{time:parseFloat(parseInt(e.playedSeconds)/totalTime),curTimeDisplay:new Date(1e3*e.playedSeconds).toISOString().substring(11,19)}))},handleEnd=function handleEnd(){setState(_objectSpread(_objectSpread({},state),{},{pausePlay:!1}))};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(index_modern.I,{handle:fullScreen,onChange:function onChange(){setState(_objectSpread(_objectSpread({},state),{},{screen:!state.screen}))},children:(0,jsx_runtime.jsxs)("div",{id:id,className:"ds-relative ds-w-full ds-pt-56.25% ds-border ds-border-solid ds-border-multi-neutrals-grey85a",children:[(0,jsx_runtime.jsx)("div",{className:"".concat(caption?"":"ds-hidden"," "),children:(0,jsx_runtime.jsx)(lib.Z,{ref:playerRef1,className:"ds-absolute ds-top-0 ds-left-0 ",url:videoURL,playing:pausePlay,width:"100%",height:"100%",volume:caption?volume:0,muted:mute,playbackRate:speed,onPlay:function onPlay(){setState(_objectSpread(_objectSpread({},state),{},{pausePlay:!0}))},onPause:function onPause(){setState(_objectSpread(_objectSpread({},state),{},{pausePlay:!1}))},onProgress:handleTime,onDuration:function onDuration(e){var time="";time=isNaN(e)?"00:00:00":new Date(1e3*(e-1)).toISOString().substring(11,19),setState(_objectSpread(_objectSpread({},state),{},{totalTime:e-1,totalTimeDisplay:time}))},onEnded:handleEnd,config:{youtube:{playerVars:{cc_load_policy:1,showinfo:1}}}})}),(0,jsx_runtime.jsx)("div",{className:"".concat(caption?"ds-hidden":""," "),children:(0,jsx_runtime.jsx)(lib.Z,{ref:playerRef2,className:"ds-absolute ds-top-0 ds-left-0",url:videoURL,playing:pausePlay,width:"100%",height:"100%",volume:caption?0:volume,muted:mute,playbackRate:speed,onPlay:function onPlay(){setState(_objectSpread(_objectSpread({},state),{},{pausePlay:!0}))},onPause:function onPause(){setState(_objectSpread(_objectSpread({},state),{},{pausePlay:!1}))},onProgress:handleTime,onDuration:function onDuration(e){var time="";time=isNaN(e)?"00:00:00":new Date(1e3*(e-1)).toISOString().substring(11,19),setState(_objectSpread(_objectSpread({},state),{},{totalTime:e-1,totalTimeDisplay:time}))},onEnded:handleEnd,config:{youtube:{playerVars:{cc_load_policy:0,showinfo:1}}}})}),(0,jsx_runtime.jsxs)("div",{className:"ds-absolute ds-w-full ds-bg-multi-neutrals-grey100 ds-pb-10px ds-h-fit",children:[(0,jsx_runtime.jsx)("section",{className:"ds-p-8px progressBar",children:(0,jsx_runtime.jsx)("progress",{id:"vidProgressBar",className:"ds-w-full ds-h-10px ds-border-2 ds-rounded-2xl ds-border-multi-neutrals-white ds-bg-multi-neutrals-white",tabIndex:"0","aria-live":"off",max:"100",value:100*time,onMouseDown:function changeTime(e){var totalWidth=document.getElementById("vidProgressBar").offsetWidth,timeRatio=e.pageX/totalWidth;setState(_objectSpread(_objectSpread({},state),{},{time:parseFloat(timeRatio)})),playerRef1.current.seekTo(parseFloat(timeRatio)),playerRef2.current.seekTo(parseFloat(timeRatio))}})}),(0,jsx_runtime.jsxs)("section",{className:"bottomControls ds-flex",children:[(0,jsx_runtime.jsxs)("div",{className:"ds-flex",children:[(0,jsx_runtime.jsx)("button",{onClick:function handleRewind(){playerRef1.current.seekTo(playerRef1.current.getCurrentTime()-5),playerRef2.current.seekTo(playerRef2.current.getCurrentTime()-5)},className:"ds-media-player-buttons ds-p-12px",children:(0,jsx_runtime.jsx)(Image.E,{alt:"Default Image",id:"image",className:"ds-filter ds-w-23px ds-h-23px",src:backward_fast_solid})}),(0,jsx_runtime.jsx)("button",{onClick:function handlePausePlay(){setState(_objectSpread(_objectSpread({},state),{},{pausePlay:!state.pausePlay}))},className:"ds-media-player-buttons ds-p-12px",children:(0,jsx_runtime.jsx)(Image.E,{alt:"Default Image",id:"image",className:"ds-filter ds-w-23px ds-h-23px",src:!1===pausePlay?playBtn:pauseIcon})}),(0,jsx_runtime.jsx)("button",{onClick:function handleFastForward(){playerRef1.current.seekTo(playerRef1.current.getCurrentTime()+5),playerRef2.current.seekTo(playerRef2.current.getCurrentTime()+5)},className:"ds-media-player-buttons ds-p-12px",children:(0,jsx_runtime.jsx)(Image.E,{alt:"Default Image",id:"image",className:"ds-filter ds-w-23px ds-h-23px",src:forward_fast})})]}),(0,jsx_runtime.jsxs)("div",{className:"newLayout ds-flex",children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("button",{onClick:function handleOpenVolume(){setState(_objectSpread(_objectSpread({},state),{},{volumeViewState:!state.volumeViewState})),setTimeout((function(){focusRef.current.focus()}))},className:"ds-media-player-buttons ds-p-12px",children:(0,jsx_runtime.jsx)(Image.E,{alt:"Default Image",id:"image",className:"ds-filter ds-w-23px ds-h-23px",src:!0===mute?volumeNone:assets_volume})}),(0,jsx_runtime.jsxs)("div",{className:volumeViewState?"volumePos ds-volume-bar ds-bg-multi-neutrals-grey90":"ds-hidden",children:[(0,jsx_runtime.jsx)("p",{id:"wb-auto-2-md-vlm-lbl",className:"ds-hidden",children:"Volume"}),(0,jsx_runtime.jsx)("input",{ref:focusRef,type:"range",className:"volume","aria-label":"Volume slider","aria-controls":"wb-auto-2-md","aria-labelledby":"wb-auto-2-md","aria-describedby":"wb-auto-2-md-vlm-lbl",title:"Volume",min:"0",max:"100",step:"5",onChange:function handleVolumeChange(e){setState(_objectSpread(_objectSpread({},state),{},{mute:"0"===e.target.value,volume:parseFloat(parseInt(e.target.value)/100)}))}})]})]}),(0,jsx_runtime.jsxs)("div",{className:"timePos  ds-m-12px ds-ml-10px ds-text-multi-neutrals-white ds-flex",children:[(0,jsx_runtime.jsxs)("p",{children:[(0,jsx_runtime.jsx)("span",{className:"ds-hidden",children:"Current position:"}),(0,jsx_runtime.jsx)("span",{children:curTimeDisplay})]}),(0,jsx_runtime.jsx)("p",{className:"ds-pl-2px ds-pr-2px",children:"/"}),(0,jsx_runtime.jsxs)("p",{children:[(0,jsx_runtime.jsx)("span",{className:"ds-hidden",children:"Total time:"}),(0,jsx_runtime.jsx)("span",{children:totalTimeDisplay})]})]})]}),(0,jsx_runtime.jsxs)("div",{className:"ds-flex ds-ml-auto ds-flex-end",children:[(0,jsx_runtime.jsxs)("button",{onClick:function handleCaption(){setState(_objectSpread(_objectSpread({},state),{},{caption:!state.caption}))},className:"ds-media-player-buttons ds-p-10px",children:[(0,jsx_runtime.jsx)(Image.E,{alt:"Default Image",id:"image",className:"ds-filter ds-w-25px ds-h-25px",src:!1===caption?captionClosed:assets_caption}),(0,jsx_runtime.jsx)("span",{className:"ds-hidden",children:"Show closed captioning"})]}),(0,jsx_runtime.jsx)("div",{className:caption?"capIndicator ds-bg-multi-blue-blue15":""}),(0,jsx_runtime.jsx)("button",{onClick:function handleOpenSpeeds(){setState(_objectSpread(_objectSpread({},state),{},{speedViewState:!state.speedViewState})),setTimeout((function(){focusSpeedRef.current.focus()}))},className:"ds-playbackButton  ds-py-12px ds-px-6px ds-playback-font",children:(0,jsx_runtime.jsxs)("p",{className:"ds-w-33px ds-h-23px",children:[speed,"x"]})}),(0,jsx_runtime.jsx)("div",{ref:focusSpeedRef,className:speedViewState?"menuPos ds-playback-font ds-bg-multi-neutrals-grey90a ds-flex ds-flex-col":"ds-hidden",children:[2,1.5,1,.5].map((function(rate){return(0,jsx_runtime.jsxs)("button",{onClick:function onClick(){setState(_objectSpread(_objectSpread({},state),{},{speed:rate}))},className:rate===speed?"ds-w-44px ds-h-30px ds-bg-multi-blue-blue15 ds-text-multi-neutrals-grey100":"ds-w-44px ds-h-30px",children:[rate,"x"]})}))}),(0,jsx_runtime.jsx)("button",{onClick:function handleScreen(){screen?fullScreen.enter():fullScreen.exit()},className:"ds-media-player-buttons ds-p-12px",children:(0,jsx_runtime.jsx)(Image.E,{alt:"Default Image",id:"image",className:"ds-filter ds-w-23px ds-h-23px",src:screen?expand_solid:compress_solid})})]})]})]})]})}),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:description?(0,jsx_runtime.jsx)("div",{className:"desPos",children:(0,jsx_runtime.jsx)("figcaption",{className:"ds-body",children:description})}):null})]})}function YoutubePlayer_stories_typeof(obj){return YoutubePlayer_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},YoutubePlayer_stories_typeof(obj)}function YoutubePlayer_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function YoutubePlayer_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?YoutubePlayer_stories_ownKeys(Object(source),!0).forEach((function(key){YoutubePlayer_stories_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):YoutubePlayer_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function YoutubePlayer_stories_defineProperty(obj,key,value){return(key=function YoutubePlayer_stories_toPropertyKey(arg){var key=function YoutubePlayer_stories_toPrimitive(input,hint){if("object"!==YoutubePlayer_stories_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==YoutubePlayer_stories_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===YoutubePlayer_stories_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}YoutubePlayer.propTypes={id:prop_types_default().string,videoURL:prop_types_default().string,description:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().element,prop_types_default().arrayOf(prop_types_default().element)])},YoutubePlayer.__docgenInfo={description:"",methods:[],displayName:"YoutubePlayer",props:{id:{description:"component id",type:{name:"string"},required:!1},videoURL:{description:"The url of the given Youtube video",type:{name:"string"},required:!1},description:{description:"Description of the given video",type:{name:"union",value:[{name:"string"},{name:"element"},{name:"arrayOf",value:{name:"element"}}]},required:!1}}};var YoutubePlayer_stories={title:"Components/Media/YoutubePlayer",component:YoutubePlayer},Template=function Template(args){return(0,jsx_runtime.jsx)(YoutubePlayer,YoutubePlayer_stories_objectSpread({},args))};Template.displayName="Template";var Youtube=Template.bind({});Youtube.args={id:"youtube",videoURL:"https://www.youtube.com/watch?v=LLg-UsTr7us",description:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)("p",{children:["Suspect (",(0,jsx_runtime.jsx)("a",{href:"https://healthycanadians.gc.ca/video/suspect-eng.php#trans",children:"Transcript"}),")"]})},1)]},Youtube.parameters=YoutubePlayer_stories_objectSpread(YoutubePlayer_stories_objectSpread({},Youtube.parameters),{},{docs:YoutubePlayer_stories_objectSpread(YoutubePlayer_stories_objectSpread({},null===(_Youtube$parameters=Youtube.parameters)||void 0===_Youtube$parameters?void 0:_Youtube$parameters.docs),{},{source:YoutubePlayer_stories_objectSpread({originalSource:"args => <YoutubePlayer {...args} />"},null===(_Youtube$parameters2=Youtube.parameters)||void 0===_Youtube$parameters2||null===(_Youtube$parameters2=_Youtube$parameters2.docs)||void 0===_Youtube$parameters2?void 0:_Youtube$parameters2.source)})});var __namedExportsOrder=["Youtube"]},"./src/components/Image/Image.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{E:function(){return Image}});var prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));function Image(props){var src=props.src,alt=props.alt,_props$rounded=props.rounded,rounded=void 0===_props$rounded?"":_props$rounded,_props$className=props.className,className=void 0===_props$className?"":_props$className;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{src:src,alt:alt,className:"".concat(className," ds-").concat(rounded)})})}Image.propTypes={id:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,alt:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,src:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,rounded:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,dataTestId:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string},Image.__docgenInfo={description:"",methods:[],displayName:"Image",props:{id:{description:"The text that the image tag will display",type:{name:"string"},required:!1},alt:{description:"Alternate text will be displayed in place of an image.",type:{name:"string"},required:!1},src:{description:"Identify source of image",type:{name:"string"},required:!0},className:{description:"css overrides for image",type:{name:"string"},required:!1},rounded:{description:"Enables rounded corners for image",type:{name:"string"},required:!1},dataTestId:{description:"Test id for unit test",type:{name:"string"},required:!1}}}},"./src/assets/backward-fast-solid.svg":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/backward-fast-solid.710f317c.svg"},"./src/assets/caption.svg":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/caption.ecc90762.svg"},"./src/assets/captionClosed.svg":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/captionClosed.00114aa8.svg"},"./src/assets/compress-solid.svg":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/compress-solid.c8e6e836.svg"},"./src/assets/expand-solid.svg":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/expand-solid.842d7a73.svg"},"./src/assets/forward-fast.svg":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/forward-fast.5f0d5a5c.svg"},"./src/assets/pauseIcon.svg":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/pauseIcon.7541f24b.svg"},"./src/assets/playBtn.svg":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/playBtn.652355b0.svg"},"./src/assets/volume.svg":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/volume.f5cf026c.svg"},"./src/assets/volumeNone.svg":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/volumeNone.5e58a6e7.svg"}}]);