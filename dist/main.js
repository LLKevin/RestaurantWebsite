/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/img/Macarons.jpg":
/*!******************************!*\
  !*** ./src/img/Macarons.jpg ***!
  \******************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"10a3d88a1f88ebec704a.jpg\";\n\n//# sourceURL=webpack://Restaurant/./src/img/Macarons.jpg?");

/***/ }),

/***/ "./src/img/cremeBrulee.jpg":
/*!*********************************!*\
  !*** ./src/img/cremeBrulee.jpg ***!
  \*********************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a13d2c78b7a1eb4f5f02.jpg\";\n\n//# sourceURL=webpack://Restaurant/./src/img/cremeBrulee.jpg?");

/***/ }),

/***/ "./src/img/cupcake.jpg":
/*!*****************************!*\
  !*** ./src/img/cupcake.jpg ***!
  \*****************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"bbf9c825af41cd3047bf.jpg\";\n\n//# sourceURL=webpack://Restaurant/./src/img/cupcake.jpg?");

/***/ }),

/***/ "./src/img/ice-cream.jpg":
/*!*******************************!*\
  !*** ./src/img/ice-cream.jpg ***!
  \*******************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"5968d049266c423e04c1.jpg\";\n\n//# sourceURL=webpack://Restaurant/./src/img/ice-cream.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_initial_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/initial-load.js */ \"./src/modules/initial-load.js\");\n/* harmony import */ var _modules_initial_load_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_initial_load_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _img_cremeBrulee_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/cremeBrulee.jpg */ \"./src/img/cremeBrulee.jpg\");\n/* harmony import */ var _img_cupcake_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/cupcake.jpg */ \"./src/img/cupcake.jpg\");\n/* harmony import */ var _img_Macarons_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/Macarons.jpg */ \"./src/img/Macarons.jpg\");\n/* harmony import */ var _img_ice_cream_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/ice-cream.jpg */ \"./src/img/ice-cream.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet images = [_img_cremeBrulee_jpg__WEBPACK_IMPORTED_MODULE_1__, _img_cupcake_jpg__WEBPACK_IMPORTED_MODULE_2__, _img_Macarons_jpg__WEBPACK_IMPORTED_MODULE_3__, _img_ice_cream_jpg__WEBPACK_IMPORTED_MODULE_4__];\r\n_modules_initial_load_js__WEBPACK_IMPORTED_MODULE_0__.Hero.createHero();\r\n_modules_initial_load_js__WEBPACK_IMPORTED_MODULE_0__.Hero.createHeroContent();\r\n(0,_modules_initial_load_js__WEBPACK_IMPORTED_MODULE_0__.createTitle)();\r\n(0,_modules_initial_load_js__WEBPACK_IMPORTED_MODULE_0__.createNavBar)();\r\n\r\n//menu \r\n_modules_initial_load_js__WEBPACK_IMPORTED_MODULE_0__.Menu.createMenuSection();\r\n_modules_initial_load_js__WEBPACK_IMPORTED_MODULE_0__.Menu.createMenu(images);\r\n//contact form\r\n\r\n_modules_initial_load_js__WEBPACK_IMPORTED_MODULE_0__.ContactForm.createContactSection();\r\n_modules_initial_load_js__WEBPACK_IMPORTED_MODULE_0__.ContactForm.createContactForm();\n\n//# sourceURL=webpack://Restaurant/./src/index.js?");

/***/ }),

/***/ "./src/modules/initial-load.js":
/*!*************************************!*\
  !*** ./src/modules/initial-load.js ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

eval("/*The Purpose of this module is to create and append \r\nall the html elements once the page has loaded */\r\n\r\nlet content = document.querySelector('#content');\r\n\r\nconst Hero = (() => {\r\n  let heroContent;\r\n  const createHero = () => {\r\n    let hero = document.createElement('section');\r\n    hero.id = \"hero\";\r\n    content.appendChild(hero);\r\n  }\r\n  const getHero = () => hero;\r\n  const createHeroContent = () => {\r\n    heroContent = document.createElement('div');\r\n    heroContent.id = \"hero-content\";\r\n    Hero.getHero().appendChild(heroContent);\r\n  }\r\n  const getHeroContent = () => heroContent;\r\n  return {\r\n    getHero,\r\n    getHeroContent,\r\n    createHero,\r\n    createHeroContent,\r\n  }\r\n})();\r\n\r\nfunction createNavBar() {\r\n\r\n  let navbar = document.createElement('ul');\r\n  Hero.getHeroContent().appendChild(navbar);\r\n  navbar.id = \"navbar\";\r\n\r\n  createNavLinks('Order Online', navbar)\r\n  createNavLinks('Menu', navbar);\r\n  createNavLinks('About', navbar);\r\n  createNavLinks('Contact', navbar);\r\n};\r\n\r\nfunction createNavLinks(linkName, navbar) {\r\n  let listItem = document.createElement('il');\r\n  let anchor = document.createElement('a');\r\n  anchor.textContent = linkName;\r\n  anchor.href = \"#\";\r\n  listItem.id = linkName;\r\n  listItem.appendChild(anchor);\r\n  navbar.appendChild(listItem);\r\n}\r\n\r\nfunction createTitle() {\r\n  let title = document.createElement('H1');\r\n  let titleText = document.createTextNode('Le pâtisserie boutique');\r\n  title.appendChild(titleText);\r\n  title.id = 'restaurant-title';\r\n  Hero.getHeroContent().appendChild(title);\r\n\r\n}\r\n\r\n\r\n//------------End of Hero Creation-------------//\r\n//-----------Beginning of Menu Creation---------//\r\nconst Menu = (() => {\r\n  let menuSection;\r\n  let currency = \"$\";\r\n  const getMenuSection = () => menuSection;\r\n  const createMenuSection = () => {\r\n    menuSection = document.createElement('section');\r\n    menuSection.id = \"menu-wrapper\";\r\n    content.appendChild(menuSection);\r\n  }\r\n  const createMenu = (images) => {\r\n    let cremeMenu = MenuItems();\r\n    let cupcake = MenuItems();\r\n    let icecream = MenuItems();\r\n    let macaron = MenuItems();\r\n\r\n\r\n    let menuTitle = document.createElement('H1');\r\n    menuTitle.textContent = \"What's On the Menu!?\";\r\n    menuTitle.id = \"menuTitle\";\r\n    menuSection.appendChild(menuTitle);\r\n\r\n    cremeMenu.createMenuItemsContainers('creme-brulee');\r\n    cupcake.createMenuItemsContainers('cupcake');\r\n    icecream.createMenuItemsContainers('icecream');\r\n    macaron.createMenuItemsContainers('macarons');\r\n\r\n    cremeMenu.createMenuItem('Creme Brulee', images[0], `is a dessert consisting of a rich custard base topped with a texturally contrasting layer of hardened caramelized sugar.`, currency + 5.25);\r\n    cupcake.createMenuItem('Cupcake', images[1], 'This recipe is the gold standard when it comes to classic cupcakes. We frosted these with Easy White Icing, but you could use our Chocolate Glaze for an even richer dessert.', currency + 5.25);\r\n    macaron.createMenuItem('Macarons', images[2], 'Parisian-style macarons presented with a french-vanilla buttercream sandwiched between two cookies made out of almond flour', `${currency}9.00 for 9 pieces`);\r\n    icecream.createMenuItem('Ice cream', images[3], 'Vanilla Icecream served with your choices of chocolate or cookie piece', currency + 5.25);\r\n\r\n  }\r\n  return {\r\n    createMenuSection,\r\n    createMenu,\r\n    getMenuSection,\r\n  }\r\n})();\r\nconst MenuItems = () => {\r\n  //let menuItem;\r\n  let menuItemContainer;\r\n  let menuItemDes;\r\n\r\n  const getMenuItemContainer = () => menuItemContainer;\r\n  const getMenuItemDes = () => menuItemDes;\r\n  const createMenuItemsContainers = (name) => {\r\n\r\n    menuItemContainer = document.createElement('div');\r\n    menuItemContainer.className = \"menu-item-wrapper\";\r\n    menuItemContainer.id = name;\r\n\r\n    menuItemDes = document.createElement('div');\r\n    menuItemDes.className = \"menu-item-description\";\r\n    menuItemDes.id = name + \"Description\";\r\n\r\n    Menu.getMenuSection().appendChild(menuItemContainer);\r\n    menuItemContainer.appendChild(menuItemDes);\r\n\r\n  };\r\n  const createMenuItem = (name, img, description, price) => {\r\n    let image = document.createElement('img');\r\n    image.src = img;\r\n\r\n    let menuItemTitle = document.createElement('H1');\r\n    menuItemTitle.textContent = name;\r\n\r\n    let menuDescription = document.createElement('p');\r\n    menuDescription.textContent = description;\r\n\r\n    let menuItemPrice = document.createElement('H3');\r\n    menuItemPrice.textContent = price;\r\n\r\n    menuItemContainer.appendChild(image);\r\n    menuItemDes.appendChild(menuItemTitle);\r\n    menuItemDes.appendChild(menuDescription);\r\n    menuItemDes.appendChild(menuItemPrice);\r\n  }\r\n\r\n  return {\r\n    getMenuItemContainer,\r\n    getMenuItemDes,\r\n    createMenuItemsContainers,\r\n    createMenuItem,\r\n  }\r\n};\r\n\r\n//-----------Ending of Menu Creation---------//\r\n//-----------Beginning Of Contact Form--------------//\r\nconst ContactForm = (() => {\r\n  let contactSection;\r\n  const createContactSection = () => {\r\n    contactSection = document.createElement(\"section\");\r\n    contactSection.className = \"contact-section\";\r\n    content.appendChild(contactSection);\r\n  }\r\n  const createContactForm = () => {\r\n    //section title, name,email, message, submit button,\r\n    let contactTitle = document.createElement('H1');\r\n    let contactForm = document.createElement('form');\r\n    let name = document.createElement('input');\r\n    let email = document.createElement('input');\r\n    let message = document.createElement('textarea');\r\n    let submit = document.createElement('input');\r\n\r\n    contactTitle.className = 'contact-title';\r\n    contactTitle.textContent = 'Contact Us!';\r\n\r\n    name.type = 'text';\r\n    name.className = \"txtName\";\r\n    name.placeholder = \"Enter Your Name\";\r\n\r\n    email.type = 'email';\r\n    email.className = \"txtEmail\";\r\n    email.placeholder = \"Enter Your Email Address\";\r\n\r\n    message.className = \"message\";\r\n    message.placeholder = \"Write Us A Message\";\r\n    message.rows = 15;\r\n    message.cols = 15;\r\n\r\n    submit.type = 'submit';\r\n    submit.className = \"btnSubmit\";\r\n    submit.value = \"Send\";\r\n\r\n\r\n    contactForm.appendChild(name);\r\n    contactForm.appendChild(email);\r\n    contactForm.appendChild(message);\r\n    contactForm.appendChild(submit);\r\n    contactSection.appendChild(contactTitle);\r\n    contactSection.appendChild(contactForm);\r\n  }\r\n  return {\r\n    createContactForm,\r\n    createContactSection\r\n  }\r\n})();\r\n//-----------End of Contact Form--------------//\r\n\r\n\r\n\r\n\r\n\r\nmodule.exports = {\r\n  Hero,\r\n  Menu,\r\n  ContactForm,\r\n  createNavBar,\r\n  createTitle,\r\n  MenuItems,\r\n}\n\n//# sourceURL=webpack://Restaurant/./src/modules/initial-load.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;