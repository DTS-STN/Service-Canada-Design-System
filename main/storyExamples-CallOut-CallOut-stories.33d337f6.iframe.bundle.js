"use strict";(self.webpackChunk_dts_stn_service_canada_design_system=self.webpackChunk_dts_stn_service_canada_design_system||[]).push([[3349],{"./src/storyExamples/CallOut/CallOut.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CheckboxForm:function(){return CheckboxForm},Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return CallOut_stories}});var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function CallOut(props){var exampleCode=props.exampleCode;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:exampleCode})}CallOut.propTypes={exampleCode:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().element,prop_types_default().arrayOf(prop_types_default().element)])},CallOut.__docgenInfo={description:'The following are coding examples of how you would implement a consequential call out,\nusing our components within your own project repo. To view code example click on\n"Show code" button located to the bottom right, within a given canvas below.',methods:[],displayName:"CallOut",props:{exampleCode:{description:'Refer to "Show code" option within each canvas example',type:{name:"union",value:[{name:"string"},{name:"element"},{name:"arrayOf",value:{name:"element"}}]},required:!1}}};var _Default$parameters,_Default$parameters2,_CheckboxForm$paramet,_CheckboxForm$paramet2,CheckBox=__webpack_require__("./src/components/CheckBox/CheckBox.js"),FormCheckBox=__webpack_require__("./src/components/FormCheckBox/FormCheckBox.js"),ContextualAlert=__webpack_require__("./src/components/ContextualAlert/ContextualAlert.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var CallOut_stories={title:"Examples/Consequential CallOut",parameters:{viewMode:"docs",previewTabs:{canvas:{hidden:!0}}},component:CallOut},Template=function Template(){var _React$useState2=_slicedToArray(react.useState(!1),2),errorState=_React$useState2[0],setErrorState=_React$useState2[1],exampleCode=[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(CheckBox.J,{id:"checkbox1",label:"Not sure what my annual net income is",name:"ChexBox1",onChange:function onChange(){setErrorState(!errorState)},value:"IsChecked"}),errorState?(0,jsx_runtime.jsx)("div",{className:"ds-mt-34px",children:(0,jsx_runtime.jsx)(ContextualAlert.n,{alert_icon_alt_text:"warning",alert_icon_id:"warning icon",id:"warning",message_body:"If you don’t know your net income, you will still be  able to view your eligibility results. To get more  accurate results, you can find your net income on  line 23600 of your T1 tax form. You can find  instructions on how to access these tax  documents here. ",message_heading:"Not sure what your annual net income is?",type:"warning"})}):null]})];return(0,jsx_runtime.jsx)(CallOut,{id:"test",exampleCode:exampleCode})};Template.displayName="Template";var Default=Template.bind({});Default.args={};var Template2=function Template2(){var _React$useState4=_slicedToArray(react.useState(!1),2),errorState=_React$useState4[0],setErrorState=_React$useState4[1],_React$useState6=_slicedToArray(react.useState(!1),2),errorState2=_React$useState6[0],setErrorState2=_React$useState6[1],onSubmit=react.useCallback((function(){return!0}),[]),exampleCode=[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(FormCheckBox.Q,{checkBoxList:[{id:"checkbox1",label:"Option 1",name:"ChexBox1",value:"IsChecked",onChange:function onChange(){setErrorState(!errorState)}},{id:"checkbox2",label:"Option 2",name:"ChexBox2",value:"IsChecked",onChange:function onChange(){setErrorState2(!errorState2)}}],formErrorProps:{errorMessage:"This is how form error will be displayed",hasError:!1,id:"formErrorId"},formLabelProps:{helpText:"Help text that is always visible under the label to provide users with primary information needed to fill in the form field. Limit of 2 sentences",id:"requiredWithInfo",infoText:"Required label style with information icon. You can hide by clicking on icon again.",label:"Required Label",required:!0},id:"temp",onSubmit:onSubmit}),errorState?(0,jsx_runtime.jsx)("div",{className:"ds-mt-34px",children:(0,jsx_runtime.jsx)(ContextualAlert.n,{alert_icon_alt_text:"danger icon",alert_icon_id:"danger icon",id:"danger",message_body:"Find out about new support for Canadians during the COVID-19 pandemic and how Service Canada’s services are affectedFind out about new support for Canadians during the COVID-19 pandemic and how Service Canada’s services are affected",message_heading:"COVID-19 New services and service changes",type:"danger"})}):null,errorState2?(0,jsx_runtime.jsx)("div",{className:"ds-mt-34px",children:(0,jsx_runtime.jsx)(ContextualAlert.n,{alert_icon_alt_text:"success icon",alert_icon_id:"success icon",id:"success",message_body:"Find out about new support for Canadians during the COVID-19 pandemic and how Service Canada’s services are affectedFind out about new support for Canadians during the COVID-19 pandemic and how Service Canada’s services are affected",message_heading:"COVID-19 New services and service changes",type:"success"})}):null]})];return(0,jsx_runtime.jsx)(CallOut,{id:"test",exampleCode:exampleCode})};Template2.displayName="Template2";var CheckboxForm=Template2.bind({});CheckboxForm.args={},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'() => {\n  const [errorState, setErrorState] = React.useState(false);\n  const exampleCode = [<div>\n      <CheckBox id="checkbox1" label="Not sure what my annual net income is" name="ChexBox1" onChange={() => {\n      setErrorState(!errorState);\n    }} value="IsChecked" />\n      {errorState ? <div className="ds-mt-34px">\n          <ContextualAlert alert_icon_alt_text="warning" alert_icon_id="warning icon" id="warning" message_body="If you don’t know your net income, you will still be \n            able to view your eligibility results. To get more \n            accurate results, you can find your net income on \n            line 23600 of your T1 tax form. You can find \n            instructions on how to access these tax \n            documents here. " message_heading="Not sure what your annual net income is?" type="warning" />\n        </div> : null}\n    </div>];\n  return <CallOut id="test" exampleCode={exampleCode} />;\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),CheckboxForm.parameters=_objectSpread(_objectSpread({},CheckboxForm.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_CheckboxForm$paramet=CheckboxForm.parameters)||void 0===_CheckboxForm$paramet?void 0:_CheckboxForm$paramet.docs),{},{source:_objectSpread({originalSource:'() => {\n  const [errorState, setErrorState] = React.useState(false);\n  const [errorState2, setErrorState2] = React.useState(false);\n  const onSubmit = React.useCallback(() => true, []);\n  const exampleCode = [<div>\n      <FormCheckBox checkBoxList={[{\n      id: "checkbox1",\n      label: "Option 1",\n      name: "ChexBox1",\n      value: "IsChecked",\n      onChange: () => {\n        setErrorState(!errorState);\n      }\n    }, {\n      id: "checkbox2",\n      label: "Option 2",\n      name: "ChexBox2",\n      value: "IsChecked",\n      onChange: () => {\n        setErrorState2(!errorState2);\n      }\n    }]} formErrorProps={{\n      errorMessage: "This is how form error will be displayed",\n      hasError: false,\n      id: "formErrorId"\n    }} formLabelProps={{\n      helpText: "Help text that is always visible under the label to provide users with primary information needed to fill in the form field. Limit of 2 sentences",\n      id: "requiredWithInfo",\n      infoText: "Required label style with information icon. You can hide by clicking on icon again.",\n      label: "Required Label",\n      required: true\n    }} id="temp" onSubmit={onSubmit} />\n      {errorState ? <div className="ds-mt-34px">\n          <ContextualAlert alert_icon_alt_text="danger icon" alert_icon_id="danger icon" id="danger" message_body="Find out about new support for Canadians during the COVID-19 pandemic and how Service Canada’s services are affectedFind out about new support for Canadians during the COVID-19 pandemic and how Service Canada’s services are affected" message_heading="COVID-19 New services and service changes" type="danger" />\n        </div> : null}\n      {errorState2 ? <div className="ds-mt-34px">\n          <ContextualAlert alert_icon_alt_text="success icon" alert_icon_id="success icon" id="success" message_body="Find out about new support for Canadians during the COVID-19 pandemic and how Service Canada’s services are affectedFind out about new support for Canadians during the COVID-19 pandemic and how Service Canada’s services are affected" message_heading="COVID-19 New services and service changes" type="success" />\n        </div> : null}\n    </div>];\n  return <CallOut id="test" exampleCode={exampleCode} />;\n}'},null===(_CheckboxForm$paramet2=CheckboxForm.parameters)||void 0===_CheckboxForm$paramet2||null===(_CheckboxForm$paramet2=_CheckboxForm$paramet2.docs)||void 0===_CheckboxForm$paramet2?void 0:_CheckboxForm$paramet2.source)})});var __namedExportsOrder=["Default","CheckboxForm"]},"./src/components/ContextualAlert/ContextualAlert.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{n:function(){return ContextualAlert}});var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),success_img_namespaceObject=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__.p+"static/media/success_img.6cb3a2c4.svg"),warning_img_namespaceObject=__webpack_require__.p+"static/media/warning_img.9ae1bf45.svg",danger_img_namespaceObject=__webpack_require__.p+"static/media/danger_img.e6f4d30d.svg",info_img_namespaceObject=__webpack_require__.p+"static/media/info_img.0ca84d9d.svg",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ContextualAlert(props){var message_heading=props.message_heading,message_body=props.message_body,id=props.id,type=props.type,alert_icon_id=props.alert_icon_id,alert_icon_alt_text=props.alert_icon_alt_text,asHtml=props.asHtml,whiteBG=props.whiteBG,alert_type="warning"===type?warning_img_namespaceObject:"danger"===type?danger_img_namespaceObject:"info"===type?info_img_namespaceObject:success_img_namespaceObject,alert_color="warning"===type?"ds-warning-color":"danger"===type?"ds-danger-color":"info"===type?"ds-info-color":"ds-success-color",white_BG=whiteBG?"ds-bg-multi-neutrals-white":" ";return(0,jsx_runtime.jsxs)("div",{id:id,className:"ds-relative ds-min-w-290px sm:ds-pl-24px ds-pl-16px ".concat(white_BG),children:[(0,jsx_runtime.jsx)("div",{className:"ds-absolute ds-top-3 sm:ds-left-3.5 ds-left-1.5 ds-bg-multi-neutrals-white ds-py-4px",children:(0,jsx_runtime.jsx)("img",{id:alert_icon_id,src:alert_type,alt:alert_icon_alt_text})}),(0,jsx_runtime.jsxs)("div",{className:"ds-overflow-auto ds-border-l-6 ".concat(alert_color," ds-pl-[24px] ds-py-[17px] ds-leading-8"),children:[asHtml?(0,jsx_runtime.jsx)("h3",{className:"ds-heading3 ds-ml-1",dangerouslySetInnerHTML:{__html:message_heading}}):(0,jsx_runtime.jsx)("h3",{className:"ds-heading3 ds-ml-1",children:message_heading}),asHtml?(0,jsx_runtime.jsx)("div",{className:"ds-body ds-ml-0.5",dangerouslySetInnerHTML:{__html:message_body}}):(0,jsx_runtime.jsx)("div",{className:"ds-body ds-ml-0.5",children:message_body})]})]})}ContextualAlert.displayName="ContextualAlert",ContextualAlert.propTypes={id:prop_types_default().string.isRequired,type:prop_types_default().oneOf(["warning","info","success","danger"]).isRequired,alert_icon_id:prop_types_default().string.isRequired,alert_icon_alt_text:prop_types_default().string.isRequired,message_heading:prop_types_default().string.isRequired,message_body:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().element,prop_types_default().arrayOf(prop_types_default().element)]).isRequired,asHtml:prop_types_default().bool,whiteBG:prop_types_default().bool},ContextualAlert.__docgenInfo={description:"",methods:[],displayName:"ContextualAlert",props:{id:{description:"component id",type:{name:"string"},required:!0},type:{description:"alert type",type:{name:"enum",value:[{value:'"warning"',computed:!1},{value:'"info"',computed:!1},{value:'"success"',computed:!1},{value:'"danger"',computed:!1}]},required:!0},alert_icon_id:{description:"id for the alert icon",type:{name:"string"},required:!0},alert_icon_alt_text:{description:"Alternate text for the alert icon",type:{name:"string"},required:!0},message_heading:{description:"heading text",type:{name:"string"},required:!0},message_body:{description:"body text",type:{name:"union",value:[{name:"string"},{name:"element"},{name:"arrayOf",value:{name:"element"}}]},required:!0},asHtml:{description:"HTML toggle. Determines if text is parsed as plain text or HTML.",type:{name:"bool"},required:!1},whiteBG:{description:"If true the background will be white, default is transparent.",type:{name:"bool"},required:!1}}}}}]);