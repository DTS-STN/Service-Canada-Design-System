/*! For license information please see components-TopNav-TopNav-stories.960bd6a6.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_dts_stn_service_canada_design_system=self.webpackChunk_dts_stn_service_canada_design_system||[]).push([[4237],{"./src/components/TopNav/TopNav.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TopNavEN:function(){return TopNavEN},TopNavFR:function(){return TopNavFR},__namedExportsOrder:function(){return __namedExportsOrder}});__webpack_require__("./node_modules/react/index.js");var _TopNavEN$parameters,_TopNavEN$parameters2,_TopNavFR$parameters,_TopNavFR$parameters2,_TopNav__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/TopNav/TopNav.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_exports__.default={title:"Components/TopNav",component:_TopNav__WEBPACK_IMPORTED_MODULE_1__.t};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TopNav__WEBPACK_IMPORTED_MODULE_1__.t,_objectSpread({},args))};Template.displayName="Template";var TopNavEN=Template.bind({}),TopNavFR=Template.bind({});TopNavEN.args={lang:"en",skipToMainPath:"#wb-cont",skipToAboutPath:"#wb-info",switchToBasicPath:"/basic-en.html",displayAlternateLink:!1},TopNavFR.args={lang:"fr",skipToMainPath:"#wb-cont",skipToAboutPath:"#wb-info",switchToBasicPath:"/basic-fr.html",displayAlternateLink:!1},TopNavEN.parameters=_objectSpread(_objectSpread({},TopNavEN.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_TopNavEN$parameters=TopNavEN.parameters)||void 0===_TopNavEN$parameters?void 0:_TopNavEN$parameters.docs),{},{source:_objectSpread({originalSource:"args => <TopNav {...args} />"},null===(_TopNavEN$parameters2=TopNavEN.parameters)||void 0===_TopNavEN$parameters2||null===(_TopNavEN$parameters2=_TopNavEN$parameters2.docs)||void 0===_TopNavEN$parameters2?void 0:_TopNavEN$parameters2.source)})}),TopNavFR.parameters=_objectSpread(_objectSpread({},TopNavFR.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_TopNavFR$parameters=TopNavFR.parameters)||void 0===_TopNavFR$parameters?void 0:_TopNavFR$parameters.docs),{},{source:_objectSpread({originalSource:"args => <TopNav {...args} />"},null===(_TopNavFR$parameters2=TopNavFR.parameters)||void 0===_TopNavFR$parameters2||null===(_TopNavFR$parameters2=_TopNavFR$parameters2.docs)||void 0===_TopNavFR$parameters2?void 0:_TopNavFR$parameters2.source)})});var __namedExportsOrder=["TopNavEN","TopNavFR"]},"./src/components/TopNav/TopNav.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{t:function(){return TopNav}});var prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),_translations_en_json__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/translations/en.json")),_translations_fr_json__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/translations/fr.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function TopNav(props){var lang=props.lang,skipToMainPath=props.skipToMainPath,skipToAboutPath=props.skipToAboutPath,switchToBasicPath=props.switchToBasicPath,displayAlternateLink=props.displayAlternateLink;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("nav",{role:"navigation","aria-label":"topNavigation",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul",{id:"TopNavLinks",className:"ds-z-10",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li",{className:"ds-left-0 ds-top-2 ds-absolute ds-text-center ds-box-border ds-w-full -ds-z-50 focus-within:ds-z-50 ",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a",{className:"focus:ds-bg-multi-blue-blue70 ds-font-bold ds-p-1 ds-text-white",href:skipToMainPath,children:"fr"===lang?_translations_fr_json__WEBPACK_IMPORTED_MODULE_2__.skipToMain:_translations_en_json__WEBPACK_IMPORTED_MODULE_1__.skipToMain})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li",{className:"ds-left-0 ds-top-2 ds-absolute ds-text-center ds-box-border ds-w-full -ds-z-50 focus-within:ds-z-50 ",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a",{className:"focus:ds-bg-multi-blue-blue70 ds-font-bold ds-p-1 ds-text-white",href:skipToAboutPath,children:"fr"===lang?_translations_fr_json__WEBPACK_IMPORTED_MODULE_2__.skipToAbout:_translations_en_json__WEBPACK_IMPORTED_MODULE_1__.skipToAbout})}),displayAlternateLink?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li",{className:"ds-left-0 ds-top-2 ds-absolute ds-text-center ds-box-border ds-w-full -ds-z-50 focus-within:ds-z-50 ",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a",{className:"focus:ds-bg-multi-blue-blue70 ds-font-bold ds-p-1 ds-text-white",href:switchToBasicPath,rel:"alternate",children:"fr"===lang?_translations_fr_json__WEBPACK_IMPORTED_MODULE_2__.switchToBasic:_translations_en_json__WEBPACK_IMPORTED_MODULE_1__.switchToBasic})}):""]})})})}TopNav.defaultProps={lang:"en",displayAlternateLink:!1,skipToMainPath:"/",skipToAboutPath:"/",switchToBasicPath:"/"},TopNav.propTypes={lang:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired,displayAlternateLink:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool.isRequired,skipToMainPath:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired,skipToAboutPath:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired,switchToBasicPath:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired},TopNav.__docgenInfo={description:"TopNav component",methods:[],displayName:"TopNav",props:{lang:{defaultValue:{value:'"en"',computed:!1},description:"Language code.",type:{name:"string"},required:!1},displayAlternateLink:{defaultValue:{value:"false",computed:!1},description:"Bool to display or not the alternate page link",type:{name:"bool"},required:!1},skipToMainPath:{defaultValue:{value:'"/"',computed:!1},description:"href anchor, which navigates to the H1 of the page",type:{name:"string"},required:!1},skipToAboutPath:{defaultValue:{value:'"/"',computed:!1},description:"href anchor, which navigates to the Footer Id",type:{name:"string"},required:!1},switchToBasicPath:{defaultValue:{value:'"/"',computed:!1},description:"href path, which redirects to the alternate HTML only page",type:{name:"string"},required:!1}}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/translations/en.json":function(module){module.exports=JSON.parse('{"landscapeLinks":{"text":{"contacts":"All contacts","departments":"Departments and agencies","about":"About government","jobs":"Jobs","taxes":"Taxes","canadaAndWorld":"Canada and the world","immigration":"Immigration and citizenship","environment":"Environment and natural resources","finance":"Money and finance","travel":"Travel and tourism","nationalSecurity":"National security and defence","innovation":"Science and innovation","business":"Business","culture":"Culture, history and sport","indigenous":"Indigenous peoples","benefit":"Benefits","policing":"Policing, justice and emergencies","veterans":"Veterans and military","health":"Health","transport":"Transport and infrastructure","youth":"Youth"},"link":{"contacts":"https://www.canada.ca/en/contact.html","departments":"https://www.canada.ca/en/government/dept.html","about":"https://www.canada.ca/en/government/system.html","jobs":"https://www.canada.ca/en/services/jobs.html","taxes":"https://www.canada.ca/en/services/taxes.html","canadaAndWorld":"https://international.gc.ca/world-monde/index.aspx?lang=eng","immigration":"https://www.canada.ca/en/services/immigration-citizenship.html","environment":"https://www.canada.ca/en/services/environment.html","finance":"https://www.canada.ca/en/services/finance.html","travel":"https://travel.gc.ca/","nationalSecurity":"https://www.canada.ca/en/services/defence.html","innovation":"https://www.canada.ca/en/services/science.html","business":"https://www.canada.ca/en/services/business.html","culture":"https://www.canada.ca/en/services/culture.html","indigenous":"https://www.canada.ca/en/services/indigenous-peoples.html","benefit":"https://www.canada.ca/en/services/benefits.html","policing":"https://www.canada.ca/en/services/policing.html","veterans":"https://www.canada.ca/en/services/veterans-military.html","health":"https://www.canada.ca/en/services/health.html","transport":"https://www.canada.ca/en/services/transport.html","youth":"https://www.canada.ca/en/services/youth.html"}},"aboutGovernment":"About Government","aboutSite":"About this site","ENlandscapeLinks":{"aboutGovernment":"About Government","aboutSite":"About this site","link1":"Contact us","link2":"News","link3":"Prime Minister","link4":"Departments and agencies","link5":"Treaties, laws and regulations","link6":"About government","link7":"Public service and military","link8":"Government-wide reporting","link9":"Open government","link1link":"https://www.canada.ca/en/contact.html","link2link":"https://www.canada.ca/en/news.html","link3link":"https://pm.gc.ca/en","link4link":"https://www.canada.ca/en/government/dept.html","link5link":"https://www.canada.ca/en/government/system/laws.html","link6link":"https://www.canada.ca/en/government/system.html","link7link":"https://www.canada.ca/en/government/publicservice.html","link8link":"https://www.canada.ca/en/transparency/reporting.html","link9link":"https://open.canada.ca/en"},"ENbrandLinks":{"link1":"Social media","link2":"Mobile applications","link3":"About Canada.ca","link4":"Terms and conditions","link5":"Privacy","link1link":"https://www.canada.ca/en/social.html","link2link":"https://www.canada.ca/en/mobile.html","link3link":"https://www.canada.ca/en/government/about.html","link4link":"https://www.canada.ca/en/transparency/terms.html","link5link":"https://www.canada.ca/en/transparency/privacy.html"},"mscaFooterHeading":"My Service Canada Account","mscaContactUs":{"mscaFooterContactUsText":"Contact Us","mscaFooterContactUsLink":"/"},"footerTitle":"Government of Canada","footerTopOfPageButtonText":"Top of page","errorPageHeadingTitle404":"We couldn’t find that web page","errorPageHeadingTitle500":"We\'re having a problem with that page","errorPageHeadingTitle503":"This service is currently not available","errorPageErrorText404":"We\'re sorry you ended up here. Sometimes a page gets moved or deleted, but hopefully we can help you find what you\'re looking for.","errorPageErrorText500":"We expect the problem to be fixed shortly. It\'s not your computer or Internet connection but a problem with our website\'s server. We apologize for the inconvenience.","errorPageErrorText503":"The web server that provides this service is currently overloaded, or may be temporarily down for maintenance. We apologize for the inconvenience. ","errorPageNextText":" What next?","errorTextLinkCommon":"• Go to the ","errorTextLinkCommon_2":" Service Canada home page","errorTextLinkCommonLink":"https://www.canada.ca/en/employment-social-development/corporate/portfolio/service-canada.html","errorAuthTextLinkCommon":"• Go to your ","errorAuthTextLinkCommon_2":"My Service Canada Account dashboard","errorAuthTextLinkCommonLink":"https://www.canada.ca/en/employment-social-development/services/my-account.html","error500TextLink":"• Try refreshing the page or try again later","error503TextLink":"• Try again later","errorPageType":"Error","reportAProblem":"Report a problem or mistake on this page","footerReportProblemButtonString":"Report a problem or mistake on this page","footerReportProblem":"Experiencing an issue with this product or have you spotted an error?","reportAProblemTitle":"Report a problem or mistake on this page","reportAProblemCheckAllThatApply":"Check all the issues that apply","reportAProblemIncorrectInformation":"Incorrect Information","reportAProblemUnclearInformation":"Unclear Information","reportAProblemDidNotFindWhatYoureLookingFor":"You didn’t find what you were looking for","reportAProblemPageDoesNotWorkWithAdaptiveTechnology":"Page does not work with your adaptive technologies","reportAProblemYoureWorriedAboutYourPrivacy":"You’re worried about your privacy","reportAProblemNoWhereElseToGo":"You don’t know where else to go for help","reportAProblemOther":"Other","reportAProblemProvideMoreDetails":"Provide more details","reportAProblemNoReply":"You will not receive a reply.","reportAProblemEnquiries":"For enquiries, please contact","reportAProblemNoPersonalInfo":"Do not include any personal information","reportAProblemNoPersonalInfoDetails":"such as your name, social insurance number (SIN), home or business address or any case or file numbers","reportAProblemMoreInfo":"For more information about this tool","reportAProblemMoreInfoDetails":"please refer to our terms and conditions","reportAProblemMoreInfoLink":"https://www.canada.ca/en/transparency/terms.html","reportAProblemMoreInfoLinkText":"terms and conditions","reportAProblemThankYouForYourHelp":"Thank you for your help!","reportAProblemYouWillNotBeContacted":"You will not receive a reply. For enquiries, please contact us at","reportAProblemPrivacyStatement":"Review the privacy policy","reportAProblemPrivacyStatementLink":"https://www.canada.ca/en/transparency/privacy.html","reportAProblemFeedbackConfidential":"Your feedback will be confidential.","phaseBannerTag":"TEST SITE","reportAProblemSubmit":"Submit","backProjects":"Back to projects","giveFeedback":"Give feedback to help improve this website","thankYouFeedback":"Thank you for your feedback!","sorryFeedback":"Sorry, we\'re unable to receive your message right now. If the problem persists, please contact","close":"Close","improveService":"Help us improve this service","doBetter":"How can we do better?","maximum2000":"Maximum of 2000 characters","confidential":"Your feedback is confidential and anonymous.","feedbackRequired":"Feedback - This field is required","breadCrumbsHref2":"https://alpha.service.canada.ca/projects","menuHeaderTitle":"My Service Canada Account","menuButtonTitle":"Account","menuItems1":"Services","menuItems2":"Life events","menuItems3":"Contact us","myAccountTitle":"My Service Canada Account","myDashboard":"My dashboard","mySecurity":"Security Settings","myProfile":"Profile","myCRA":"Switch to CRA My Account","mySignOut":"Sign out","skipToMain":"Skip to main content","skipToAbout":"Skip to \'About government\'","switchToBasic":"Switch to basic HTML version","accordionStep":"step","accordionExpanded":"expanded","accordionCollapsed":"collapsed","datePicker":{"month":"Month","year":"Year","day":"Day","months":{"1":"January","2":"February","3":"March","4":"April","5":"May","6":"June","7":"July","8":"August","9":"September","10":"October","11":"November","12":"December"}},"searchPlaceholderText":"Search Canada.ca","searchButtonHoverText":"Search bar button","monthDropdownPlaceholder":"Select month"}')},"./src/translations/fr.json":function(module){module.exports=JSON.parse('{"landscapeLinks":{"text":{"contacts":"Toutes les coordonnées","departments":"Ministères et organismes","about":"À propos du gouvernement","jobs":"Emplois","taxes":"Impôts","canadaAndWorld":"Le Canada et le monde","immigration":"Immigration et citoyenneté","environment":"Environnement et ressources naturelles","finance":"Argent et finance","travel":"Voyage et tourisme","nationalSecurity":"Sécurité nationale et défense","innovation":"Science et innovation","business":"Entreprises","culture":"Culture, histoire et sport","indigenous":"Autochtones","benefit":"Prestations","policing":"Services de police, justice et urgences","veterans":"Vétérans et militaires","health":"Santé","transport":"Transport et infrastructure","youth":"Jeunesse"},"link":{"contacts":"https://www.canada.ca/fr/contact.html","departments":"https://www.canada.ca/fr/gouvernement/min.html","about":"https://www.canada.ca/fr/gouvernement/systeme.html","jobs":"https://www.canada.ca/fr/services/emplois.html","taxes":"https://www.canada.ca/fr/services/impots.html","canadaAndWorld":"https://www.international.gc.ca/world-monde/index.aspx?lang=fra","immigration":"https://www.canada.ca/fr/services/immigration-citoyennete.html","environment":"https://www.canada.ca/fr/services/environnement.html","finance":"https://www.international.gc.ca/world-monde/index.aspx?lang=fra","travel":"https://voyage.gc.ca/","nationalSecurity":"https://www.canada.ca/fr/services/defense.html","innovation":"https://www.canada.ca/fr/services/science.html","business":"https://www.canada.ca/fr/services/entreprises.html","culture":"https://www.canada.ca/fr/services/culture.html","indigenous":"https://www.canada.ca/fr/services/autochtones.html","benefit":"https://www.canada.ca/fr/services/prestations.html","policing":"https://www.canada.ca/fr/services/police.html","veterans":"https://www.canada.ca/fr/services/veterans-militaire.html","health":"https://www.canada.ca/fr/services/sante.html","transport":"https://www.canada.ca/fr/services/transport.html","youth":"https://www.canada.ca/fr/services/jeunesse.html"}},"aboutGovernment":"Au sujet du gouvernement","aboutSite":"À propos de ce site","FRlandscapeLinks":{"aboutGovernment":"Au sujet du gouvernement","aboutSite":"À propos de ce site","link1":"Contactez-nous","link4":"Ministères et organismes","link7":"Fonction publique et force militaire","link2":"Nouvelles","link5":"Traités, lois et règlements","link8":"Rapports à l\'échelle du gouvernement","link3":"Premier ministre","link6":"À propos du gouvernement","link9":"Gouvernement ouvert","link1link":"https://www.canada.ca/fr/contact.html","link4link":"https://www.canada.ca/fr/gouvernement/min.html","link7link":"https://www.canada.ca/fr/gouvernement/fonctionpublique.html","link2link":"https://www.canada.ca/fr/nouvelles.html","link5link":"https://www.canada.ca/fr/gouvernement/systeme/lois.html","link8link":"https://www.canada.ca/fr/transparence/rapports.html","link3link":"https://pm.gc.ca/fr","link6link":"https://www.canada.ca/fr/gouvernement/systeme.html","link9link":"https://open.canada.ca/fr"},"FRbrandLinks":{"link1":"Médias sociaux","link2":"Applications mobiles","link3":"À propos de Canada.ca","link4":"Avis","link5":"Confidentialité","link1link":"https://www.canada.ca/fr/sociaux.html","link2link":"https://www.canada.ca/fr/mobile.html","link3link":"https://www.canada.ca/fr/gouvernement/a-propos.html","link4link":"https://www.canada.ca/fr/transparence/avis.html","link5link":"https://www.canada.ca/fr/transparence/confidentialite.html"},"mscaFooterHeading":"Mon dossier Service Canada","mscaContactUs":{"mscaFooterContactUsText":"Contactez-nous","mscaFooterContactUsLink":"/"},"footerTitle":"Gouvernement du Canada","footerTopOfPageButtonText":"Haut de la page","errorPageHeadingTitle404":"Nous ne pouvons trouver cette page Web","errorPageHeadingTitle500":"Nous éprouvons des difficultés avec cette page","errorPageHeadingTitle503":"Le service est actuellement indisponible","errorPageErrorText404":"Nous sommes désolés que vous ayez abouti ici. Il arrive parfois qu\'une page ait été déplacée ou supprimée. Heureusement, nous pouvons vous aider à trouver ce que vous cherchez.","errorPageErrorText500":"Nous espérons résoudre le problème sous peu. Il ne s’agit pas d’un problème avec votre ordinateur ou Internet, mais plutôt avec le serveur de notre site Web. Nous nous excusons de cet inconvénient.","errorPageErrorText503":"Le serveur Web auquel vous tentez d’accéder est actuellement surchargé ou pourrait être temporairement hors service à des fins d’entretien. Nous nous excusons de cet inconvénient. ","errorPageNextText":"Que faire?","errorTextLinkCommon":"• Accéder à la ","errorTextLinkCommon_2":"page d\'accueil de Service Canada","errorTextLinkCommonLink":"https://www.canada.ca/fr/emploi-developpement-social/ministere/portefeuille/service-canada.html","errorAuthTextLinkCommon":"• Accéder au ","errorAuthTextLinkCommon_2":"tableau de bord de mon compte Mon dossier Service Canada","errorAuthTextLinkCommonLink":"https://www.canada.ca/fr/emploi-developpement-social/services/mon-dossier.html","error500TextLink":"• Actualisez la page ou réessayez plus tard","error503TextLink":"• Réessayez plus tard","errorPageType":"Erreur","reportAProblem":"Signaler un problème ou une erreur sur cette page","footerReportProblemButtonString":"Signaler un problème ou une erreur sur cette page","footerReportProblem":"Vous rencontrez un problème avec ce produit ou avez-vous repéré une erreur?","reportAProblemTitle":"Signaler un problème ou une erreur sur cette page","reportAProblemCheckAllThatApply":"Cochez toutes les options qui s’appliquent","reportAProblemIncorrectInformation":"Informations incorrectes","reportAProblemUnclearInformation":"Informations imprécises","reportAProblemDidNotFindWhatYoureLookingFor":"Vous n’avez pas trouvé ce que vous cherchiez","reportAProblemPageDoesNotWorkWithAdaptiveTechnology":"La page ne fonctionne pas avec vos technologies d’adaptation","reportAProblemYoureWorriedAboutYourPrivacy":"Vous êtes inquiet pour votre vie privée","reportAProblemNoWhereElseToGo":"Vous ne savez pas où trouver de l’aide","reportAProblemOther":"Autres","reportAProblemProvideMoreDetails":"Fournir plus de détails","reportAProblemNoReply":"Vous ne recevrez pas de réponse.","reportAProblemEnquiries":"Pour toute demande de renseignements, veuillez contacter","reportAProblemNoPersonalInfo":"N’incluez pas d’informations personnelles","reportAProblemNoPersonalInfoDetails":"tels que votre nom, votre numéro d’assurance sociale (NAS), votre adresse personnelle ou professionnelle ou tout numéro de dossier ou d’affaire","reportAProblemMoreInfo":"Pour plus d’information sur cet outil","reportAProblemMoreInfoDetails":"veuillez vous référer à nos termes et conditions","reportAProblemMoreInfoLink":"https://www.canada.ca/fr/transparence/avis.html","reportAProblemThankYouForYourHelp":"Merci pour votre aide !","reportAProblemYouWillNotBeContacted":"Vous ne recevrez pas de réponse. Pour toute question, veuillez nous contacter à l’adresse suivante","reportAProblemMoreInfoLinkText":"termes et conditions","reportAProblemPrivacyStatement":"Lire la politique en matière de protection des renseignements personnels","reportAProblemPrivacyStatementLink":"https://www.canada.ca/fr/transparence/confidentialite.html","reportAProblemFeedbackConfidential":"Vos commentaires sont confidentiels.","reportAProblemSubmit":"Soumettre","phaseBannerTag":"SITE D’ESSAI","backProjects":"Retour aux projets","giveFeedback":"Donnez vos commentaires pour aider à améliorer ce service","thankYouFeedback":"Merci de vos commentaires!","sorryFeedback":"Désolé, nous ne sommes pas en mesure de recevoir votre message pour le moment. Si le problème persiste, veuillez communiquer avec","close":"Fermer","improveService":"Aidez-nous à améliorer ce service","doBetter":"Comment pouvons-nous faire mieux?","maximum2000":"Maximum de 2000 caractères","confidential":"Vos commentaires sont confidentiels et anonymes.","feedbackRequired":"Ce champ est obligatoire","breadCrumbsHref2":"https://alpha.service.canada.ca/fr/projects","menuHeaderTitle":"Mon dossier Service Canada","menuButtonTitle":"Compte","menuItems1":"Services","menuItems2":"Événements de la vie","menuItems3":"Contactez-nous","myAccountTitle":"Mon dossier Service Canada","myDashboard":"Mon tableau de bord","mySecurity":"Paramètres de sécurité","myProfile":"Profil","myCRA":"Aller à Mon dossier de l\'ARC","mySignOut":"Fermez la session","skipToMain":"Passer au contenu principal","skipToAbout":"Passer à « Au sujet du gouvernement »","switchToBasic":"Passer à la version HTML simplifiée","accordionStep":"étape","accordionExpanded":"affiché","accordionCollapsed":"masqué","datePicker":{"month":"Mois","year":"Année","day":"Jour","months":{"1":"janvier","2":"février","3":"mars","4":"avril","5":"mai","6":"juin","7":"juillet","8":"août","9":"septembre","10":"octobre","11":"novembre","12":"décembre"}},"searchPlaceholderText":"Rechercher dans Canada.ca","searchButtonHoverText":"Bouton du champ de recherche","monthDropdownPlaceholder":"Sélectionner le mois"}')}}]);