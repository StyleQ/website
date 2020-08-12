module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/divider-four.svg":
/*!*********************************!*\
  !*** ./assets/divider-four.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? {} : _ref$styles,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["styles"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    clipRule: "evenodd",
    fillRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: "2",
    viewBox: "0 0 3015 363",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M0-.001v346.107C10.153 336.024 530.047 144.35 727.225 71.15c573.016 96.98 1324.556 227.415 1716.796 291.28 243.74-152.18 368.74-230.22 570.78-362.43z",
    fill: "#fff"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("g", {
    fill: "#f3e9f1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M0 208.391l126.363-69.1 125.987 107.79L0 345.211zM1609.52 222.311l722.841-167.95 424.01 112.17-312.07 195.9z"
  })));
});

/***/ }),

/***/ "./assets/divider-one.svg":
/*!********************************!*\
  !*** ./assets/divider-one.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? {} : _ref$styles,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["styles"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    clipRule: "evenodd",
    fillRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: "2",
    viewBox: "0 0 3015 331",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M3014.817.005s-410.88 462.625-1599.269 175.5C487.02-48.835.157.575.002 328.723c1247.053 3.369 2415.99 1.181 3014.815.024z",
    fill: "#fff"
  }));
});

/***/ }),

/***/ "./assets/divider-three.svg":
/*!**********************************!*\
  !*** ./assets/divider-three.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? {} : _ref$styles,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["styles"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    clipRule: "evenodd",
    fillRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: "2",
    viewBox: "0 0 3015 257",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M0-.001c999.978 236.531 2342.081 434.228 3014.801 0z",
    fill: "#6f325b"
  }));
});

/***/ }),

/***/ "./assets/divider-two.svg":
/*!********************************!*\
  !*** ./assets/divider-two.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? {} : _ref$styles,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["styles"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    clipRule: "evenodd",
    fillRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: "2",
    viewBox: "0 0 3015 257",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M3014.81 256.781C2014.83 20.251 672.728-177.447.008 256.781z",
    fill: "#6f325b"
  }));
});

/***/ }),

/***/ "./assets/icons/android.svg":
/*!**********************************!*\
  !*** ./assets/icons/android.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? {} : _ref$styles,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["styles"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M28 12c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2v-8c0-1.1-.9-2-2-2zM4 12c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2v-8c0-1.1-.9-2-2-2zm3 11a3 3 0 003 3v4c0 1.1.9 2 2 2s2-.9 2-2v-4h4v4c0 1.1.9 2 2 2s2-.9 2-2v-4a3 3 0 003-3V12H7v11zM24.944 10a8.994 8.994 0 00-4.051-6.551l1.001-2.001a1 1 0 00-1.789-.895l-1.004 2.009-.261-.104C17.947 2.161 16.992 2 16 2s-1.947.161-2.84.458l-.261.104L11.895.553a1 1 0 00-1.789.895l1.001 2.001A8.996 8.996 0 007.056 10v1H25v-1h-.056zM13 8a1 1 0 01-.002-2h.005a1 1 0 01-.002 2zm6 0a1 1 0 01-.002-2h.005a1 1 0 01-.002 2z"
  }));
});

/***/ }),

/***/ "./assets/icons/booked.svg":
/*!*********************************!*\
  !*** ./assets/icons/booked.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? {} : _ref$styles,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["styles"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 80"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M57 10h-5V6c0-2.206-1.794-4-4-4s-4 1.794-4 4v4H20V6c0-2.206-1.794-4-4-4s-4 1.794-4 4v4H7c-2.757 0-5 2.243-5 5v42c0 2.757 2.243 5 5 5h50c2.757 0 5-2.243 5-5V15c0-2.757-2.243-5-5-5zM46 6c0-1.103.897-2 2-2s2 .897 2 2v8c0 1.103-.897 2-2 2s-2-.897-2-2V6zM14 6c0-1.103.897-2 2-2s2 .897 2 2v8c0 1.103-.897 2-2 2s-2-.897-2-2V6zm-7 6h5v2c0 2.206 1.794 4 4 4s4-1.794 4-4v-2h24v2c0 2.206 1.794 4 4 4s4-1.794 4-4v-2h5c1.654 0 3 1.346 3 3v7H4v-7c0-1.654 1.346-3 3-3zm50 48H7c-1.654 0-3-1.346-3-3V24h56v33c0 1.654-1.346 3-3 3z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M31 18h2v2h-2zM35 18h2v2h-2zM27 18h2v2h-2zM17 29H8a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1v-9a1 1 0 00-1-1zm-1 9H9v-7h7v7zM30 29h-9a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1v-9a1 1 0 00-1-1zm-1 9h-7v-7h7v7zM43 29h-9a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1v-9a1 1 0 00-1-1zm-5.914 5.5L35 36.586v-4.172l2.086 2.086zm-.672-3.5h4.172L38.5 33.086 36.414 31zm2.086 4.914L40.586 38h-4.172l2.086-2.086zm1.414-1.414L42 32.414v4.172L39.914 34.5zM56 29h-9a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1v-9a1 1 0 00-1-1zm-1 9h-7v-7h7v7zM17 43H8a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1v-9a1 1 0 00-1-1zm-1 9H9v-7h7v7zM30 43h-9a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1v-9a1 1 0 00-1-1zm-1 9h-7v-7h7v7zM43 43h-9a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1v-9a1 1 0 00-1-1zm-1 9h-7v-7h7v7zM56 43h-9a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1v-9a1 1 0 00-1-1zm-1 9h-7v-7h7v7z"
  }));
});

/***/ }),

/***/ "./assets/icons/facebook.svg":
/*!***********************************!*\
  !*** ./assets/icons/facebook.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? {} : _ref$styles,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["styles"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    viewBox: "0 0 24 28"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M19.5 2C21.984 2 24 4.016 24 6.5v15c0 2.484-2.016 4.5-4.5 4.5h-2.938v-9.297h3.109l.469-3.625h-3.578v-2.312c0-1.047.281-1.75 1.797-1.75L20.265 9V5.766c-.328-.047-1.469-.141-2.781-.141-2.766 0-4.672 1.687-4.672 4.781v2.672H9.687v3.625h3.125V26H4.499a4.502 4.502 0 01-4.5-4.5v-15c0-2.484 2.016-4.5 4.5-4.5h15z"
  }));
});

/***/ }),

/***/ "./assets/icons/hair-stylist.svg":
/*!***************************************!*\
  !*** ./assets/icons/hair-stylist.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? {} : _ref$styles,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["styles"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 255.261 313.61"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M149.297 1.999h74.666v104.667h-34.334v6.168h39.667v-5.667h-3.333V0h-78.667v89.834h2.001z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M170.594 62.105l30.216-30.242 1.367 1.366-30.215 30.242zM171.125 53.98L192.7 32.423l1.366 1.367-21.576 21.557zM178.725 61.577l21.566-21.566 1.368 1.368-21.566 21.565zM94.232 169.834h59.397v5H94.232zM168.629 169.834h85.334v5h-85.334zM88.232 128.967c-10.011 4.243-19.915 6.969-28.526 8.718.636 6.168-19.951 23.266-25.565 17.242v83.598c0 6.83 5.537 12.363 12.363 12.363 6.828 0 12.365-5.533 12.365-12.363v-90.271h4.635v90.271c0 6.83 5.537 12.363 12.363 12.363 6.828 0 12.365-5.533 12.365-12.363V128.967zM46.128 119.167a3.504 3.504 0 00-3.5-3.502 3.507 3.507 0 00-3.499 3.502 3.504 3.504 0 003.499 3.5 3.503 3.503 0 003.5-3.5zM53.294 128.499a3.505 3.505 0 003.501-3.498 3.507 3.507 0 00-3.501-3.501 3.504 3.504 0 00-3.498 3.501 3.502 3.502 0 003.498 3.498zM61.186 58.705c4.81 0 9.266-1.515 12.923-4.086 5.79-4.07 9.577-10.798 9.577-18.414 0-12.427-10.072-22.5-22.5-22.5-12.426 0-22.5 10.073-22.5 22.5 0 7.617 3.789 14.346 9.581 18.416a22.386 22.386 0 0012.919 4.084z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M0 185.778l1.76 1.401L12.8 173.3l.177 17.732 2.249-.021-.204-20.504 3.528-4.436 1.727-2.17c.213.225.438.441.688.64a6.553 6.553 0 002.237 1.149c.617.183 1.25.29 1.882.29h.008a6.612 6.612 0 003.05-.756 6.609 6.609 0 002.13-1.744 6.63 6.63 0 00-1.056-9.309 6.658 6.658 0 00-1.538-.891 7.987 7.987 0 00.068-1.62c-.391-6.65-.567-12.707-.567-18.223-.035-24.214 3.495-37.817 6.964-44.918v35.143a101.473 101.473 0 006.176 4.283l.416-3.625a5.494 5.494 0 01-3.604-5.156 5.5 5.5 0 1110.998 0 5.494 5.494 0 01-5.419 5.494l-.512 4.458a78.778 78.778 0 004.042 2.297l3.28-2.425a5.476 5.476 0 01-1.723-3.99 5.5 5.5 0 1111.001 0 5.499 5.499 0 01-5.502 5.499c-.69 0-1.35-.133-1.959-.365l-3.101 2.292c1.2.58 2.418 1.119 3.636 1.593 10.209-1.622 23.331-4.707 36.362-10.507V88.562a43.349 43.349 0 011.779 4.237c2.819 7.813 5.191 20.631 5.182 40.641 0 5.513-.178 11.57-.565 18.223a7.999 7.999 0 007.994 8.465 8 8 0 007.98-7.534c.404-6.932.592-13.298.592-19.153-.041-30.184-4.861-46.889-11.435-56.934-3.284-4.985-7.128-8.183-10.678-9.953-3.391-1.711-6.369-2.106-8.178-2.133-.134-.008-.265-.02-.399-.02h-4.921C75.192 76.679 61.187 89.68 61.187 89.68S47.183 76.679 46.792 64.403h-4.923c-.122 0-.24.013-.361.018-1.805.022-4.805.412-8.219 2.133-5.38 2.666-11.178 8.502-15.236 18.842-4.106 10.379-6.863 25.385-6.876 48.043 0 4.572.118 9.467.362 14.688a6.6 6.6 0 00-5.814 3.723 6.58 6.58 0 00-.674 2.896c0 .054.003.088.003.107.024 2.519 1.486 4.704 3.607 5.789a6.615 6.615 0 003.015.73h.059c.322-.004.637-.037.946-.085l.029 2.92.055 5.522L0 185.778zm27.969-30.041a4.615 4.615 0 011.74 3.623 4.599 4.599 0 01-1.003 2.877 4.635 4.635 0 01-3.623 1.745 4.588 4.588 0 01-2.874-1.006c-.945-.753-1.492-1.794-1.668-2.895a7.987 7.987 0 006.588-4.862c.291.143.575.307.84.518zm-16.244 3.638l-.021-.002-.027.002a4.626 4.626 0 01-4.623-4.581l-.002-.047a4.625 4.625 0 014.581-4.623h.011c.043.825.079 1.633.129 2.475a7.969 7.969 0 002.87 5.671 4.59 4.59 0 01-2.918 1.105zm3.245 5.898l-.048-4.754a6.595 6.595 0 001.481-1.135 7.923 7.923 0 002.094.638c.065.648.233 1.284.487 1.891l-2.948 3.705-1.05 1.321-.016-1.666zM120.285 129.917h5.666V146a4.994 4.994 0 003.92 4.875 1.67 1.67 0 00-.102.539c0 3.641 12.436 6.63 28.333 6.968v22.593l-30.751 9.901v5.959h4v-3.044l26.751-8.615v1.908h6v-1.907l26.749 8.614v3.044h4.002l-.003-5.959-30.748-9.9v-22.594c15.897-.338 28.333-3.327 28.333-6.968 0-.182-.041-.36-.102-.538a5.001 5.001 0 003.92-4.875v-16.084h5.666a3 3 0 003-3v-3a3 3 0 00-3-3h-10.166a2.99 2.99 0 00-2.125.883 2.99 2.99 0 00-.875 2.117v3c0 .826.334 1.574.875 2.117a2.99 2.99 0 002.125.883h.5l-.002 16.084a.955.955 0 01-.061.302c-1.142-2.077-6.355-3.874-13.809-4.978a27.207 27.207 0 01-17.279 6.173 27.202 27.202 0 01-17.28-6.173c-7.456 1.104-12.67 2.9-13.811 4.98a.997.997 0 01-.061-.305v-16.083h.501a3 3 0 003-3v-3a3 3 0 00-3-3h-10.167a3 3 0 00-3 3v3a3.002 3.002 0 003.001 3z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("circle", {
    cx: "161.103",
    cy: "120.165",
    r: "25.333"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M231.66 127.316l.047.06.004.006.005.005 13.096 16.727a3.001 3.001 0 004.212.513l1.574-1.233a3 3 0 00.513-4.211l-8.492-10.847a7.497 7.497 0 002.245-7.51l6.011-3.251a2.804 2.804 0 001.213-3.628c.106-.06.214-.117.321-.182 1.326-.817 2.803-1.898 2.853-3.49.003-.821-.472-1.625-1.411-2.338-.725-.547-1.711-.797-2.848-.799-3.156.008-7.607 1.938-11.072 6.279l.785.622c3.274-4.126 7.525-5.909 10.287-5.899.992-.003 1.771.227 2.24.592.797.617 1.017 1.124 1.02 1.543.048.822-1.084 1.894-2.365 2.631a16.53 16.53 0 01-.38.216 2.803 2.803 0 00-3.317-.494l-6.786 3.669a7.497 7.497 0 00-8.421.557c-3.219 2.521-3.813 7.143-1.373 10.398.014.02.023.044.039.064zm3.182-8.101a4.504 4.504 0 016.318.768 4.508 4.508 0 01-.77 6.32 4.506 4.506 0 01-6.318-.771 4.506 4.506 0 01.77-6.317zM216.765 146.865v-10h-10v10h4.53v3.469c.042 6.555 6.993 10.853 13.7 10.855 3.23 0 6.455-.997 8.879-3.281 2.429-2.284 4.004-5.839 4.002-10.801 0-2.047-.265-4.336-.843-6.884a51.873 51.873 0 01-.965-5.59l-.992.114c.204 1.798.525 3.698.981 5.694.564 2.488.818 4.705.818 6.665-.04 9.481-5.827 13.035-11.881 13.083-3.156.002-6.365-1.025-8.754-2.778-2.389-1.755-3.944-4.196-3.946-7.078v-3.469h4.471zm-7.813-3.187v-3.625a1 1 0 011-1h3.625a1 1 0 011 1v3.625a1 1 0 01-1 1h-3.625c-.552 0-1-.449-1-1z"
  }));
});

/***/ }),

/***/ "./assets/icons/instagram.svg":
/*!************************************!*\
  !*** ./assets/icons/instagram.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? {} : _ref$styles,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["styles"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 28"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M16 14c0-2.203-1.797-4-4-4s-4 1.797-4 4 1.797 4 4 4 4-1.797 4-4zm2.156 0c0 3.406-2.75 6.156-6.156 6.156S5.844 17.406 5.844 14 8.594 7.844 12 7.844s6.156 2.75 6.156 6.156zm1.688-6.406c0 .797-.641 1.437-1.437 1.437S16.97 8.39 16.97 7.594s.641-1.437 1.437-1.437 1.437.641 1.437 1.437zM12 4.156c-1.75 0-5.5-.141-7.078.484-.547.219-.953.484-1.375.906s-.688.828-.906 1.375c-.625 1.578-.484 5.328-.484 7.078s-.141 5.5.484 7.078c.219.547.484.953.906 1.375s.828.688 1.375.906c1.578.625 5.328.484 7.078.484s5.5.141 7.078-.484c.547-.219.953-.484 1.375-.906s.688-.828.906-1.375c.625-1.578.484-5.328.484-7.078s.141-5.5-.484-7.078c-.219-.547-.484-.953-.906-1.375s-.828-.688-1.375-.906C17.5 4.015 13.75 4.156 12 4.156zM24 14c0 1.656.016 3.297-.078 4.953-.094 1.922-.531 3.625-1.937 5.031s-3.109 1.844-5.031 1.937c-1.656.094-3.297.078-4.953.078s-3.297.016-4.953-.078c-1.922-.094-3.625-.531-5.031-1.937S.173 20.875.08 18.953C-.014 17.297.002 15.656.002 14s-.016-3.297.078-4.953c.094-1.922.531-3.625 1.937-5.031s3.109-1.844 5.031-1.937c1.656-.094 3.297-.078 4.953-.078s3.297-.016 4.953.078c1.922.094 3.625.531 5.031 1.937s1.844 3.109 1.937 5.031C24.016 10.703 24 12.344 24 14z"
  }));
});

/***/ }),

/***/ "./assets/icons/map.svg":
/*!******************************!*\
  !*** ./assets/icons/map.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? {} : _ref$styles,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["styles"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 125"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M75.7 4.6H24.1c-10.6 0-19.2 8.6-19.2 19.2v51.6c0 10.6 8.6 19.2 19.2 19.2h51.6c10.6 0 19.2-8.6 19.2-19.2V23.8c0-10.6-8.6-19.2-19.2-19.2zm14.2 19.2v34.7H62.4c-1.5-.7-3.2-1.4-5.1-2.2-.9-.4-1.9-.7-2.9-1.1-6.3-2.6-8.9-4.2-11.3-7.3V9.6h32.6c7.8 0 14.2 6.4 14.2 14.2zM72.8 89.6h-13c-1.7-12-3.2-17.7-18.4-23.1-8.1-2.9-9.5-4.6-15.7-15.2-2.9-5-8.2-9-15.9-12V23.8v-.3c6.5 3.6 17.9 10.3 21.8 16.3 1.3 2 2.4 3.6 3.3 5.1 4.9 7.8 6.6 10.4 17.5 14.9 1 .4 2 .8 2.9 1.2 2.1.8 3.9 1.6 5.5 2.4v.2h.3c6.6 3.2 9.1 7.8 11.7 26zM43.1 72.4c9.2 3.8 10.4 7.5 11.7 17.2H43.1V72.4zM9.9 44.7c5.5 2.5 9.5 5.6 11.5 9.1 1.1 1.8 2 3.3 2.9 4.7H9.9V44.7zM24.1 9.6h14v30.8c-.7-1-1.4-2.2-2.2-3.4-4.8-7.3-18.4-15.1-24.9-18.6 2.1-5.2 7.2-8.8 13.1-8.8zM9.9 75.4V63.5h17.9c2.8 3.4 5.5 5.2 10.3 7v19.1h-14c-7.8 0-14.2-6.4-14.2-14.2zm68 14c-2.1-14.5-4.3-21.6-8.2-25.9H90v11.9c-.1 7.1-5.3 13-12.1 14z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M65.6 50s5.7-10.1 9.1-17.5c3.5-7.4-1.2-14.8-9.1-14.8-7.4 0-12.6 7.4-9.1 14.8 3.4 7.4 9.1 17.5 9.1 17.5zm0-25.6c2 0 3.7 1.7 3.7 3.7 0 2.1-1.7 3.7-3.7 3.7s-3.7-1.7-3.7-3.7 1.7-3.7 3.7-3.7z"
  }));
});

/***/ }),

/***/ "./assets/icons/simple-formula.svg":
/*!*****************************************!*\
  !*** ./assets/icons/simple-formula.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? {} : _ref$styles,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["styles"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    viewBox: "0 0 100 100",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M71.33 47.174a7.43 7.43 0 00-.134-.764c-.37-1.372-1.261-2.448-2.442-2.853l-.286-.1c.007-.043-2.144-.779-3.27-1.13 0 0-1.282-.427-2.6-.862-4.573-8.56-10.035-17.116-11.952-20.067a325.114 325.114 0 00-4.96 7.898h-.002l-.148.246a321.772 321.772 0 00-2.376 3.977c-.253-.16-.485-.316-.707-.472.73-1.245 1.449-2.452 2.137-3.588-.961.149-1.826.298-2.556.447-.66.134-1.338.611-1.682 1.08-.007.001-.014-.003-.021.001-.396 2.143-.848 4.813-.848 4.813 0 1.054.29 2.022.781 2.79-2.083 3.75-4.08 7.613-5.629 11.127a60.182 60.182 0 00-1.618 4.006l-.753-.375a60.51 60.51 0 011.398-3.485c-.814.126-1.557.252-2.194.377-.694.137-1.412.63-1.76 1.108-.501 2.313-1.073 5.197-1.073 5.197 0 2.115 1.245 3.913 3.11 4.568.448 5.798 3.516 10.866 8.016 14.034 2.913 1.985 6.416 3.285 10.274 3.431.19.006.377.023.568.024.068 0 .135-.002.202-.003 5.497-.046 10.444-2.439 13.882-6.227.276.137.533.271.766.4a20.021 20.021 0 01-3.548 3.124c3.357-.642 5.657-1.176 5.95-1.476a.28.28 0 00.164-.197c.229-1.072.739-3.38.739-3.38.045-.165.094-.442.134-.696.068-.438.074-.88.01-1.318a6.954 6.954 0 00-.168-.826 4.867 4.867 0 00-.55-1.16 18.855 18.855 0 001.424-7.202c0-1.762-.665-4.198-1.735-6.987h.005c-.383-1-.833-2.057-1.31-3.136l1.189.632c.372.869.673 1.597.981 2.412l1.684-.18-.004-.008c.097-.005.19-.074.213-.204.181-.993.584-3.13.584-3.13.036-.153.075-.41.106-.645a4.76 4.76 0 00.009-1.22zM46.735 30.553l.137-.265c.143-.275.28-.539.419-.803 1.944-3.732 3.355-6.415 3.355-6.415s-2.26 5.26-4.917 11.88c-.35-.176-.684-.35-1.005-.523.697-1.346 1.376-2.654 2.01-3.874zm-10.71 21.335a8.54 8.54 0 01.149-.378l.045-.106c.06-.14.125-.29.202-.462l.024-.054c.19-.421.43-.931.709-1.514 1.102-2.298 2.84-5.741 4.709-9.392.36.14.98.371 1.642.61-2.21 5.712-4.348 11.62-5.434 15.678-.298-.12-.573-.239-.858-.358a79.333 79.333 0 01-1.073-.457 52.217 52.217 0 01-1.174-.527c.313-.977.672-1.985 1.058-3.04zm-2.177 9.954c.858.221 1.726.448 2.61.684l.965.285c.514 6.842 2.988 10.544 2.988 10.544-4.575-4.441-6.335-8.003-6.563-11.513zm33.394 12.612l-.029.005.03-.018c-.002.004 0 .009 0 .013zm.627-6.894l.01.015c.115.207.204.428.276.657.024.081.037.168.057.252.039.163.077.327.095.499.005.042.005.085.01.127.014.21.012.423-.004.64l-.352 1.654-.005.022-.28 1.317-.03.141-.127.593-.004-.001c-.414-.41-.99-.837-1.692-1.274-5.5-3.43-19.038-7.527-28.59-10.109l-5.096-1.505c-.152-.045-.293-.108-.435-.168a3.91 3.91 0 01-.51-.264l-.037-.021a3.84 3.84 0 01-.842-.71c-.032-.036-.061-.073-.092-.11a3.937 3.937 0 01-.263-.353c-.038-.058-.07-.118-.106-.177a4.1 4.1 0 01-.185-.347c-.04-.085-.07-.174-.105-.262-.04-.106-.083-.209-.115-.319-.036-.122-.06-.25-.085-.377-.018-.086-.041-.168-.054-.256a4.775 4.775 0 01-.05-.68l.832-3.904c.142.141.306.284.484.429l.012.01c.027.023.061.046.09.068.014.012.032.023.047.035.14.11.287.22.447.331.012.008.02.016.033.024l.055.036c.029.02.063.04.093.06.165.111.336.223.519.335.022.014.04.027.062.04l.004.003.139.08c.184.11.374.22.574.332l.103.06c.046.025.098.05.145.076.216.117.439.234.67.352.092.047.182.094.276.14.248.124.505.248.77.373.058.028.112.056.172.084l.059.026c.364.17.738.34 1.128.51h.008c.618.27 1.257.542 1.934.815 2.58 1.039 5.541 2.083 8.613 3.081v.001l.046.014a271.542 271.542 0 009.468 2.869l9.505 2.88c.991.29 1.814.95 2.323 1.856zm2.994-19.532l-.628 3.453c-2.75-3.196-14.184-7.395-22.624-10.118a140.206 140.206 0 00-1.311-.42l-.017-.005-2.57-.89-1.46-.505c-.047-.016-.089-.042-.135-.06a3.002 3.002 0 01-.892-.559 3.273 3.273 0 01-.367-.39l-.007-.01c-.11-.14-.213-.29-.304-.449a4.415 4.415 0 01-.535-1.67h.001a5.206 5.206 0 01-.038-.605l.658-3.616c.112.13.244.263.384.397l.111.101c.122.111.253.223.394.336.03.025.059.05.09.074.177.14.362.28.564.421l.002-.001c.222.156.458.313.709.472.24.152.49.304.754.458l.008.004c.258.15.527.301.806.453l.018.01c1.932 1.048 4.344 2.126 6.947 3.17l.022.01c.353.141.71.282 1.068.422l.019.008c.365.142.733.284 1.103.425l.037.014c2.49.947 5.065 1.85 7.488 2.656l1.875.665 5.642 2.001c.789.27 1.444.886 1.846 1.734.09.191.161.396.218.608.019.075.029.156.045.233.03.152.06.304.075.462.004.039.004.08.007.118.012.194.01.392-.003.593z"
  }));
});

/***/ }),

/***/ "./assets/icons/twitter.svg":
/*!**********************************!*\
  !*** ./assets/icons/twitter.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? {} : _ref$styles,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["styles"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 28"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M20 9.531a6.887 6.887 0 01-1.891.531 3.313 3.313 0 001.453-1.828 6.547 6.547 0 01-2.094.797A3.253 3.253 0 0015.077 8a3.28 3.28 0 00-3.281 3.281c0 .25.016.516.078.75a9.324 9.324 0 01-6.781-3.437 3.33 3.33 0 00-.453 1.656c0 1.141.531 2.141 1.422 2.734-.547-.016-1.062-.172-1.563-.406v.031c0 1.594 1.203 2.922 2.703 3.219-.281.078-.5.125-.797.125-.203 0-.406-.031-.609-.063a3.3 3.3 0 003.063 2.281A6.607 6.607 0 014 19.53a9.351 9.351 0 005.031 1.469c6.031 0 9.344-5 9.344-9.344 0-.141 0-.281-.016-.422A6.31 6.31 0 0020 9.53zM24 6.5v15c0 2.484-2.016 4.5-4.5 4.5h-15A4.502 4.502 0 010 21.5v-15C0 4.016 2.016 2 4.5 2h15C21.984 2 24 4.016 24 6.5z"
  }));
});

/***/ }),

/***/ "./assets/styleq-logo.svg":
/*!********************************!*\
  !*** ./assets/styleq-logo.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? {} : _ref$styles,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["styles"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    clipRule: "evenodd",
    fillRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: "2",
    viewBox: "0 0 500 165",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("g", {
    fillRule: "nonzero"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M103.307 126.628a16.103 16.103 0 002.308-1.864c7.228-7.022 11.493-13.078 11.875-25.92.308-10.427-4.183-19.411-9.398-24.78C102.107 67.9 93.144 62.69 81.865 56.82c-8.313-4.322-13.338-5.998-18.792-9.72-1.942-1.326-3.75-2.878-5.125-4.787-2.546-3.541-3.705-7.712-3.898-12.584-.02-4.5 1.196-10.043 5.821-15.038 9.41-10.163 26.604-8.93 34.642 4.758S93.05 45.348 93.05 45.348s11.151-8.532 4.933-24.924C91.765 4.033 66.996-3.07 51.507 12.212c-9.597 9.47-8.369 22.088-6.892 28.504.954 4.91 3.086 8.858 6.273 12.8 4.44 5.497 12.605 11.376 24.008 17.244 9.478 4.869 15.735 10.882 19.637 15.813 3.899 4.934 5.479 9.433 5.376 15.164-.007.472-.036.949-.075 1.429-.714 6.212-3.78 16.783-15.909 23.082-17.022 8.837-38.74-.668-42.807-22.272-4.066-21.602 15.196-36.3 15.196-36.3s-19.691 9.13-19.262 33.405c.269 15.242 10.663 28.46 25.035 33.655-14.202 2.886-17.696 14.043-17.696 14.043s9.972-13.212 34.64-2.293c34.138 15.112 37.372-15.027 37.372-15.027s-2.115 13.478-31.692 5.023c-.307-.086-.608-.166-.911-.25a43.877 43.877 0 006.76-1.967c5.222-1.984 9.398-4.641 12.747-7.637"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M36.585 79.536C23.396 84.675 8.539 78.146 3.4 64.956c13.19-5.136 28.047 1.39 33.185 14.58",
    fill: "#dd3686"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M36.25 86.059c-10.391-4.564-22.515.157-27.079 10.548 10.391 4.565 22.514-.157 27.079-10.548M41.337 74.48C30.947 69.913 26.225 57.79 30.79 47.4c10.39 4.566 15.112 16.689 10.547 27.08",
    fill: "#f398c0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M175.035 112.26c-.68 2.95-1.532 5.644-2.553 8.08-1.02 2.44-2.381 4.539-4.082 6.295-1.701 1.76-3.828 3.119-6.38 4.083-2.552.963-5.588 1.446-9.102 1.446-5.558 0-9.952-1.333-13.184-3.997-3.233-2.664-4.849-6.946-4.849-12.844V66.836h-11.058l.68-5.104c5.216-1.021 9.413-3.998 12.59-8.932 3.173-4.934 5.443-10.632 6.805-17.097l5.274-.681V60.2h13.439c1.587 0 3.034-.123 4.338-.372a37.65 37.65 0 003.488-.82v7.827h-21.265v44.743c0 1.36.056 2.696.17 3.998.111 1.306.425 2.526.935 3.658.511 1.135 1.332 2.042 2.467 2.722 1.132.68 2.722 1.022 4.764 1.022 3.288 0 6.236-1.134 8.847-3.404 2.607-2.267 4.195-5.16 4.763-8.676zM192.218 72.109c-1.59-4.423-4.822-6.635-9.698-6.635V60.37h35.046v5.104h-3.402c-4.197 0-6.295 1.305-6.295 3.913.111.341.226.795.341 1.361.111.569.226 1.22.339 1.957.113.738.282 1.56.511 2.467l17.523 37.598 13.611-35.047c.451-2.153.791-3.769 1.02-4.848.226-1.077.34-1.842.34-2.297 0-3.403-3.687-5.104-11.059-5.104V60.37h29.092v5.104c-4.763 0-7.995 1.93-9.697 5.784l-20.585 51.72c-.568 1.134-1.361 2.806-2.382 5.018a265.568 265.568 0 01-3.572 7.4 124.362 124.362 0 01-4.594 8.337 46.928 46.928 0 01-5.784 7.741c-2.156 2.323-4.482 4.224-6.975 5.698-2.496 1.473-5.163 2.212-7.996 2.212-6.013 0-9.017-2.781-9.017-8.336 0-5.672 2.153-8.506 6.464-8.506 2.042 0 3.403.481 4.083 1.446a9.312 9.312 0 011.447 3.148 22.554 22.554 0 001.02 3.147c.397.962 1.277 1.446 2.637 1.446.793 0 1.872-.739 3.233-2.212 1.362-1.474 2.748-3.317 4.168-5.529 1.417-2.212 2.749-4.652 3.998-7.316 1.247-2.666 2.153-5.247 2.722-7.74z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M260.437 129.612v-5.104c7.712 0 11.568-2.608 11.568-7.825V30.428c0-5.556-4.368-8.336-13.1-8.336V17.5l27.391-5.104v104.968c0 4.764 4.308 7.145 12.93 7.145v5.104zM349.752 86.23c4.65 0 6.975-2.383 6.975-7.146-.338-4.309-1.786-8.081-4.337-11.313-2.551-3.233-6.269-4.849-11.143-4.849-2.611 0-4.993.596-7.146 1.787a17.787 17.787 0 00-5.529 4.763c-1.531 1.986-2.696 4.253-3.488 6.805a26.443 26.443 0 00-1.191 7.911c0 1.361 1.247 2.042 3.743 2.042zm23.139 26.54c-2.952 6.353-6.92 11.286-11.91 14.801-4.993 3.514-10.888 5.274-17.692 5.274-5.673 0-10.664-.966-14.973-2.892-4.312-1.928-7.91-4.535-10.801-7.827-2.893-3.287-5.079-7.201-6.55-11.738-1.477-4.535-2.214-9.357-2.214-14.462 0-5.103.793-9.978 2.383-14.631 1.587-4.648 3.827-8.788 6.721-12.419a32.873 32.873 0 0110.461-8.676c4.083-2.153 8.619-3.232 13.61-3.232 3.063 0 6.265.369 9.614 1.106 3.344.739 6.489 2.185 9.441 4.338 2.949 2.155 5.5 5.247 7.655 9.272 2.155 4.026 3.573 9.33 4.255 15.907 0 1.361-.172 2.611-.51 3.743h-45.256c-2.154 0-3.232.85-3.232 2.551 0 4.083.568 7.941 1.701 11.57 1.133 3.63 2.722 6.804 4.764 9.526 2.041 2.723 4.536 4.849 7.485 6.381 2.948 1.53 6.236 2.296 9.867 2.296 4.765 0 8.875-1.362 12.334-4.083a46.875 46.875 0 009.104-9.528zM476.07 94.191c-1.42 6.284-3.603 11.75-6.55 16.391-2.95 4.645-6.692 8.296-11.227 10.958-4.537 2.66-9.983 3.99-16.332 3.99-6.466 0-12.08-1.359-16.843-4.076-4.765-2.716-8.676-6.454-11.739-11.209-3.062-4.756-5.332-10.363-6.807-16.817-1.474-6.454-2.21-13.419-2.21-20.894 0-6.792.597-13.3 1.785-19.53 1.192-6.228 3.175-11.72 5.955-16.475 2.78-4.756 6.405-8.549 10.89-11.38 4.477-2.83 9.951-4.248 16.417-4.248 7.031 0 13.013 1.501 17.946 4.5 4.934 3.001 8.933 6.965 11.996 11.891 3.061 4.925 5.299 10.558 6.719 16.9 1.416 6.343 2.126 12.91 2.126 19.703 0 7.246-.71 14.012-2.126 20.296m17.268-44.539c-2.836-7.03-6.778-13.126-11.825-18.289-5.047-5.159-11.057-9.186-18.033-12.079-6.975-2.89-14.602-4.338-22.883-4.338-8.392 0-16.02 1.675-22.88 5.02-6.864 3.346-12.734 7.77-17.608 13.27-4.878 5.502-8.62 11.796-11.229 18.883-2.61 7.09-3.913 14.376-3.913 21.862 0 8.054 1.388 15.625 4.168 22.711 2.779 7.09 6.635 13.27 11.569 18.545 4.933 5.274 10.804 9.415 17.608 12.42a51.408 51.408 0 006.039 2.205c-12.064 3.586-15.139 13.363-15.139 13.363s9.936-13.166 34.52-2.284c34.023 15.061 37.244-14.977 37.244-14.977s-2.066 13.033-30.346 5.342c4.761-.833 9.249-2.266 13.447-4.33 7.031-3.46 13.015-7.997 17.949-13.61s8.761-11.995 11.483-19.14c2.721-7.145 4.083-14.347 4.083-21.606 0-8.278-1.42-15.934-4.254-22.968"
  })));
});

/***/ }),

/***/ "./components/BurgerMenu.jsx":
/*!***********************************!*\
  !*** ./components/BurgerMenu.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button.withConfig({
  displayName: "BurgerMenu__Wrapper",
  componentId: "sc-1t1wc40-0"
})(["position:relative;width:3.5rem;height:4rem;padding:0;vertical-align:top;cursor:pointer;border:0;background-color:transparent;span{display:block;position:relative;width:100%;height:.4rem;font-size:0;text-indent:-9999px;background:var(--color-brand-1);border-radius:var(--round-radius-1);transition:background-color .2s var(--animation-easing);&::before,&::after{content:'';display:block;position:absolute;width:100%;height:.4rem;border-radius:var(--round-radius-1);background:var(--color-brand-1);transition:transform .3s var(--animation-easing);}&::before{top:-1.2rem;transform-origin:top left;}&::after{bottom:-1.2rem;transform-origin:bottom left;}}", ""], function (_ref) {
  var navbarOpen = _ref.navbarOpen;
  return navbarOpen && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["span{background-color:transparent;&::before{transform:rotate(45deg);}&::after{transform:rotate(-45deg);}}"]);
});

var BurgerMenu = function BurgerMenu(_ref2) {
  var navbarState = _ref2.navbarState,
      handleNavbar = _ref2.handleNavbar;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    "aria-expanded": navbarState,
    "aria-controls": "menu",
    onClick: handleNavbar,
    navbarOpen: navbarState
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Menu"));
};

BurgerMenu.propTypes = {
  navbarState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  handleNavbar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (BurgerMenu);

/***/ }),

/***/ "./components/Button.jsx":
/*!*******************************!*\
  !*** ./components/Button.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);


var variantStyle = function variantStyle(variant) {
  var variants = {
    primary: "\n      background: var(--color-brand-1);\n      color: #fff;\n      font-weight: bold;\n      box-shadow: .2rem .5rem .4rem 0 rgba(0,0,0,.04),\n                  .2rem .5rem .5rem 0 rgba(0,0,0,.12);\n      &:hover, &:focus{\n        color: #fff;\n        transform: scale(1.02);\n        box-shadow: rgba(0,0,0,.41) 0 1.4rem 2.6rem -1.2rem,\n                    rgba(0,0,0,.11) 0 .4rem 2.3rem 0,\n                    rgba(0,0,0,.2) 0 .8rem 1rem -.5rem;\n      }\n    ",
    wrapped: "\n      position: absolute;\n      top: 0;\n      right: 0;\n      height: inherit;\n      margin: 0;\n      padding: .5rem 1rem;\n      background: var(--color-brand-1);\n      color: #fff;\n      font-weight: bold;\n      border-radius: 0 var(--round-radius-1) var(--round-radius-1) 0;\n    "
  };
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["", ""], variants[variant]);
};

var Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "Button",
  componentId: "sc-1kw9xbm-0"
})(["--button-bg:rgba(0,0,0,.2);--button-fg:#222;display:inline-block;min-width:10rem;margin:0 1rem 1rem 0;padding:1.5rem 2rem;border:0;border-radius:var(--round-radius-1);background:var(--button-bg);color:var(--button-fg);font-size:1.4rem;text-align:center;cursor:pointer;transition:all .2s var(--animation-easing);svg{width:2.5rem;margin-right:1rem;fill:currentColor;vertical-align:bottom;}&:focus{box-shadow:0 0 .3rem var(--color-focus);}", " ", " ", ""], function (_ref) {
  var variant = _ref.variant;
  return variant && variantStyle(variant);
}, function (_ref2) {
  var responsive = _ref2.responsive;
  return responsive && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["display:block;width:100%;@media(min-width:720px){display:inline-block;width:auto;}"]);
}, function (_ref3) {
  var size = _ref3.size;
  return size === 'large' && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["padding:2rem 5rem;"]);
});
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/CollapseMenu.jsx":
/*!*************************************!*\
  !*** ./components/CollapseMenu.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



var Nav = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.nav.withConfig({
  displayName: "CollapseMenu__Nav",
  componentId: "sc-1hw318g-0"
})(["background:#ffffff;position:fixed;top:7.0rem;left:0;right:0;border-top:solid thin #eee;opacity:0;transform:scaleY(0);transform-origin:top;transition:all .3s var(--animation-easing);", " a{display:block;padding:2rem;transition:background-color .2s ease;&:hover{background-color:#f4f4f4;}}"], function (_ref) {
  var navbarOpen = _ref.navbarOpen;
  return navbarOpen && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["opacity:1;transform:scaleY(1);"]);
});

var CollapseMenu = function CollapseMenu(_ref2) {
  var navbarState = _ref2.navbarState;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Nav, {
    navbarOpen: navbarState,
    id: "menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, "Become a Stylist"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://blog.bookstyleq.com"
  }, "Our Blog"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://my.setmore.com/bookanappointmentv3.do?uniqueKey=dc195bd4-0d63-451f-84ac-4b4ec3ecf5ca"
  }, "Get Started"));
};

CollapseMenu.propTypes = {
  navbarState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CollapseMenu);

/***/ }),

/***/ "./components/Container.jsx":
/*!**********************************!*\
  !*** ./components/Container.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Container",
  componentId: "o4lyum-0"
})(["width:90%;max-width:var(--site-width);margin:auto;"]);
/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./components/Footer.jsx":
/*!*******************************!*\
  !*** ./components/Footer.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Typography */ "./components/Typography.jsx");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Container */ "./components/Container.jsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button */ "./components/Button.jsx");
/* harmony import */ var _Forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Forms */ "./components/Forms.jsx");
/* harmony import */ var _assets_icons_android_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icons/android.svg */ "./assets/icons/android.svg");
/* harmony import */ var _assets_icons_facebook_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/icons/facebook.svg */ "./assets/icons/facebook.svg");
/* harmony import */ var _assets_icons_twitter_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/icons/twitter.svg */ "./assets/icons/twitter.svg");
/* harmony import */ var _assets_icons_instagram_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/icons/instagram.svg */ "./assets/icons/instagram.svg");










var TopFooter = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__TopFooter",
  componentId: "sc-178ijcf-0"
})(["padding:5rem 0;background:var(--color-brand-2);color:#fff;p{margin-bottom:.2rem;font-size:1.8rem;color:var(--color-brand-3);}h3{margin:.2rem 0 2rem;}@media(min-width:920px){", "{display:flex;justify-content:space-between;align-items:center;}}"], _Container__WEBPACK_IMPORTED_MODULE_3__["default"]);
var BottomFooter = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.footer.withConfig({
  displayName: "Footer__BottomFooter",
  componentId: "sc-178ijcf-1"
})(["padding:5rem 0;h4{margin-top:0;}.social svg{width:3rem;margin:2rem 1rem 2rem 0;fill:var(--color-brand-1);transition:transform .3s var(--animation-easing);&:hover{transform:scale3d(1.1,1.1,1)}}.copyright{display:block;margin-top:2rem;color:#999;}@media(min-width:920px){", "{display:flex;justify-content:space-between;}}"], _Container__WEBPACK_IMPORTED_MODULE_3__["default"]);

var Footer = function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TopFooter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], null, "Ready to start having quick and quality styling done?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    as: "h3"
  }, "Create an account with us")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    as: "a",
    variant: "primary",
    responsive: true,
    href: "https://my.setmore.com/bookanappointmentv3.do?uniqueKey=dc195bd4-0d63-451f-84ac-4b4ec3ecf5ca"
  }, "GET STARTED"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BottomFooter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    action: "https://bookstyleq.us4.list-manage.com/subscribe/post?u=ca7d77d8dd73f52e49e56d814&id=646b5bfa5e",
    method: "post",
    id: "mc-embedded-subscribe-form",
    name: "mc-embedded-subscribe-form",
    noValidate: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    as: "h4"
  }, "Subscribe to us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], null, "Stay updated on what StyleQ has to offer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: 'absolute',
      left: '-5000px'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "b_ca7d77d8dd73f52e49e56d814_646b5bfa5e",
    tabIndex: "-1"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Forms__WEBPACK_IMPORTED_MODULE_5__["Label"], {
    variant: "wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Forms__WEBPACK_IMPORTED_MODULE_5__["TextBox"], {
    name: "EMAIL",
    type: "email",
    id: "mce-EMAIL",
    placeholder: "Enter your email address",
    autocomplete: "off",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "wrapped"
  }, "Subscribe"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    as: "small",
    className: "copyright"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Contact StyleQ Support - (262) 345-2127"), "\xA9 ", new Date().getFullYear(), " StyleQ. All rights reserved")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    as: "a",
    variant: "primary",
    href: "https://play.google.com/store/apps/details?id=ubitrix.styleq&hl=en_US"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_icons_android_svg__WEBPACK_IMPORTED_MODULE_6__["default"], null), "Get the app on android")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "social"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.facebook.com/BookStyleQ/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_icons_facebook_svg__WEBPACK_IMPORTED_MODULE_7__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://twitter.com/bookstyleq"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_icons_twitter_svg__WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.instagram.com/intostyleq/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_icons_instagram_svg__WEBPACK_IMPORTED_MODULE_9__["default"], null)))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Forms.jsx":
/*!******************************!*\
  !*** ./components/Forms.jsx ***!
  \******************************/
/*! exports provided: TextBox, TextArea, Checkbox, Radio, Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextBox", function() { return TextBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextArea", function() { return TextArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return Radio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);





var TextBoxStyle = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.input.withConfig({
  displayName: "Forms__TextBoxStyle",
  componentId: "sc-1fvz26f-0"
})(["height:4rem;padding:1rem;border:solid thin var(--color-brand-1);border-radius:var(--round-radius-1);background:#fff;&:focus{box-shadow:0 0 .3rem var(--color-focus);}", ""], function (_ref) {
  var display = _ref.display;
  return display === 'block' && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["display:block;width:100%;margin-bottom:1.5rem;"]);
});
var TextBox = function TextBox(_ref2) {
  var _ref2$type = _ref2.type,
      type = _ref2$type === void 0 ? 'text' : _ref2$type,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref2, ["type"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextBoxStyle, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    type: type
  }, props));
};
TextBox.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired
};
var TextArea = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.textarea.withConfig({
  displayName: "Forms__TextArea",
  componentId: "sc-1fvz26f-1"
})([""]);
var Checkbox = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.input.withConfig({
  displayName: "Forms__Checkbox",
  componentId: "sc-1fvz26f-2"
})([""]);
var Radio = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.input.withConfig({
  displayName: "Forms__Radio",
  componentId: "sc-1fvz26f-3"
})([""]);
var LabelStyle = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.label.withConfig({
  displayName: "Forms__LabelStyle",
  componentId: "sc-1fvz26f-4"
})(["", ""], function (_ref3) {
  var variant = _ref3.variant;
  return variant === 'wrapper' && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["display:block;position:relative;width:100%;height:4rem;font-size:1.4rem;input{width:100%;box-shadow:.2rem .5rem .4rem 0 rgba(0,0,0,.04),.2rem .5rem .5rem 0 rgba(0,0,0,.12);padding-right:40%;}"]);
});
var Label = function Label(_ref4) {
  var _ref4$variant = _ref4.variant,
      variant = _ref4$variant === void 0 ? 'default' : _ref4$variant,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref4, ["variant"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LabelStyle, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    variant: variant
  }, props));
};
Label.propTypes = {
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired
};

/***/ }),

/***/ "./components/GlobalStyle.jsx":
/*!************************************!*\
  !*** ./components/GlobalStyle.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n*{\n  box-sizing: border-box;\n  &:focus{\n    outline: 0;\n  }\n}\n:root{\n  --color-brand-1: #a43f6a;\n  --color-brand-2: #6f325b;\n  --color-brand-3: #f3aacb;\n  --color-brand-4: #bf88b9;\n  --color-brand-5: #b7457b;\n  --color-brand-6: #f9f3f8;\n  --color-bg: #fff;\n  --color-fg: #222;\n  --color-link: var(--color-brand-1);\n  --color-focus: var(--color-brand-3);\n  --color-highlight: #ffbfda;\n  --color-error: #BC1717;\n  --color-success: #F5F5F8;\n  --color-warning: #E06811;\n  --font-primary: system-ui, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\n  --font-secondary: 'Roboto', sans-serif;\n  --font-tertiary: 'Bebas Neue', cursive;\n  --round-radius-1: .4rem;\n  --round-radius-2: 1.2rem;\n  --drop-shadow-1: .1rem .1rem .2rem rgba(0, 0, 0, .05);\n  --drop-shadow-2: 0 .1rem .2rem rgba(0, 0, 0, .3);\n  --drop-shadow-3: 0 4.4px 12.5px rgba(0, 0, 0, 0.035),\n                0 35px 100px rgba(0, 0, 0, 0.07);\n  --animation-easing: cubic-bezier(0.5, 0, 0.5, 1);\n  --site-width: 1100px;\n  font-size: 62.5%;\n  scroll-behavior: smooth;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n}\nbody{\n  width: 100%;\n  margin: 0;\n  background: var(--color-bg);\n  color: var(--color-fg);\n  font: 1.8rem/1.5 var(--font-secondary);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  overflow-x: hidden;\n}\n::selection{\n  background: var(--color-highlight);\n}\na{\n  text-decoration: none;\n  background-color: transparent;\n  color: var(--color-link);\n  &:hover, &:focus{\n    color: var(--color-brand-2);\n  }\n}\nimg{\n  max-width: 100%;\n  border-style: none;\n}\nbutton, input, select, textarea{\n  font: inherit;\n}\nmain{\n  display: block;\n}\n.intro{\n  color: var(--color-brand-4);\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

/***/ }),

/***/ "./components/Grid.jsx":
/*!*****************************!*\
  !*** ./components/Grid.jsx ***!
  \*****************************/
/*! exports provided: Grid, Column */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return Column; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
 // 1 Dimension grids

var Grid = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Grid",
  componentId: "sc-19tduhj-0"
})(["display:grid;", " ", ""], function (_ref) {
  var responsive = _ref.responsive,
      _ref$columns = _ref.columns,
      columns = _ref$columns === void 0 ? 1 : _ref$columns;
  return responsive !== 'fixed' && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["@media(min-width:720px){grid-template-columns:repeat(", ",1fr);}@media(min-width:1020px){grid-template-columns:repeat(", ",1fr);}@media(min-width:1240px){grid-template-columns:repeat(", ",1fr);}"], Math.floor(columns / 2), Math.floor(columns / 2 + 1), columns);
}, function (_ref2) {
  var _ref2$gap = _ref2.gap,
      gap = _ref2$gap === void 0 ? '30px' : _ref2$gap;
  return gap && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["grid-gap:", ";"], gap);
});
var Column = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Grid__Column",
  componentId: "sc-19tduhj-1"
})([""]);

/***/ }),

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_styleq_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/styleq-logo.svg */ "./assets/styleq-logo.svg");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button */ "./components/Button.jsx");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Container */ "./components/Container.jsx");
/* harmony import */ var _BurgerMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BurgerMenu */ "./components/BurgerMenu.jsx");
/* harmony import */ var _CollapseMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CollapseMenu */ "./components/CollapseMenu.jsx");








var Root = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.header.withConfig({
  displayName: "Header__Root",
  componentId: "sc-1to18tt-0"
})(["display:flex;align-items:center;position:fixed;top:0;z-index:99999;width:100%;padding:1.5rem 0;background:#fff;box-shadow:0 .2rem .2rem rgba(0,0,0,.08);img{display:block;width:10rem;}> ", "{display:flex;align-items:center;justify-content:space-between;}+ *{margin-top:6.5rem;}svg{width:10rem;vertical-align:middle;}a,button{margin:0;}"], _Container__WEBPACK_IMPORTED_MODULE_5__["default"]);
var Nav = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.nav.withConfig({
  displayName: "Header__Nav",
  componentId: "sc-1to18tt-1"
})(["justify-self:end;list-style-type:none;margin:auto 0;a{margin:0 1.5rem;}@media (max-width:768px){display:none;}"]);
var BurgerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Header__BurgerWrapper",
  componentId: "sc-1to18tt-2"
})(["margin:auto 0;@media (min-width:769px){display:none;}"]);

var Header = function Header() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      navBarOpen = _useState2[0],
      setnavBarOpen = _useState2[1];

  var handleNavbar = function handleNavbar() {
    return setnavBarOpen(!navBarOpen);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Root, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_assets_styleq_logo_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    "aria-label": "StyleQ logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Nav, {
    role: "navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://styleqpro.typeform.com/to/fR7u79"
  }, "Become a stylist"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://blog.bookstyleq.com"
  }, "Our blog"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "primary",
    as: "a",
    href: "https://my.setmore.com/bookanappointmentv3.do?uniqueKey=dc195bd4-0d63-451f-84ac-4b4ec3ecf5ca"
  }, "Get started")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BurgerWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BurgerMenu__WEBPACK_IMPORTED_MODULE_6__["default"], {
    navbarState: navBarOpen,
    handleNavbar: handleNavbar
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CollapseMenu__WEBPACK_IMPORTED_MODULE_7__["default"], {
    navbarState: navBarOpen,
    handleNavbar: handleNavbar
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Pin.jsx":
/*!****************************!*\
  !*** ./components/Pin.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



var Root = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Pin__Root",
  componentId: "sc-1amaw0l-0"
})(["display:flex;align-items:center;justify-content:center;width:8rem;height:8rem;margin:2rem 0;border-radius:50%;svg{width:4.5rem;vertical-align:middle;fill:#fff;}", " ", ""], function (_ref) {
  var centered = _ref.centered;
  return centered && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["margin:2rem auto;"]);
}, function (_ref2) {
  var bg = _ref2.bg;
  return bg && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["background:", ";"], bg);
});

var Pin = function Pin(_ref3) {
  var children = _ref3.children,
      _ref3$color = _ref3.color,
      color = _ref3$color === void 0 ? 'var(--color-brand-4)' : _ref3$color,
      centered = _ref3.centered;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Root, {
    bg: color,
    centered: centered
  }, children);
};

Pin.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  centered: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Pin.defaultProps = {
  color: 'var(--color-brand-4)',
  centered: false
};
/* harmony default export */ __webpack_exports__["default"] = (Pin);

/***/ }),

/***/ "./components/SectionA.jsx":
/*!*********************************!*\
  !*** ./components/SectionA.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Typography */ "./components/Typography.jsx");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Container */ "./components/Container.jsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button */ "./components/Button.jsx");
/* harmony import */ var _assets_divider_one_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/divider-one.svg */ "./assets/divider-one.svg");






var Root = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "SectionA__Root",
  componentId: "wpvmpo-0"
})(["position:relative;padding:3rem 2rem 1rem 1rem;background:var(--color-brand-6);background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg clip-rule='evenodd' fill-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2' viewBox='0 0 682 574' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f3e9f1'%3E%3Cpath d='M618.895 0H465.646L-.003 558.455l278.618 14.91zM681.466 228.12V56.043L369.833 573.365l191.823-29.609z'/%3E%3C/g%3E%3C/svg%3E\");background-repeat:no-repeat;background-size:300%;background-position:top right;text-align:center;overflow:hidden;", " >:first-child{margin:10rem 0 2rem;}p{max-width:50rem;margin:1rem auto 3rem;font-size:2.4rem;}img{position:relative;bottom:-2rem;@media(min-width:720px){bottom:-1rem;}}> svg{display:none;@media(min-width:720px){display:block;position:absolute;left:0;width:100vw;bottom:-1rem;}}@media(min-width:920px){background-size:90%;text-align:left;", "{display:flex;justify-content:space-between;}}"], _Container__WEBPACK_IMPORTED_MODULE_3__["default"], _Container__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Root, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    as: "h1"
  }, "Treat yourself."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], null, "Have a last minute event but your stylist is booked solid? StyleQ has you covered by finding hair stylists near you with same-day availability."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    responsive: true,
    variant: "primary",
    as: "a",
    href: "https://my.setmore.com/bookanappointmentv3.do?uniqueKey=dc195bd4-0d63-451f-84ac-4b4ec3ecf5ca"
  }, "BOOK YOUR SPOT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://res.cloudinary.com/strich/image/upload/v1586322560/model_ips1pp.png",
    alt: "StyleQ Model"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_divider_one_svg__WEBPACK_IMPORTED_MODULE_5__["default"], null));
});

/***/ }),

/***/ "./components/SectionB.jsx":
/*!*********************************!*\
  !*** ./components/SectionB.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Typography */ "./components/Typography.jsx");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Container */ "./components/Container.jsx");
/* harmony import */ var _assets_icons_map_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/map.svg */ "./assets/icons/map.svg");
/* harmony import */ var _assets_icons_booked_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icons/booked.svg */ "./assets/icons/booked.svg");
/* harmony import */ var _assets_icons_hair_stylist_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icons/hair-stylist.svg */ "./assets/icons/hair-stylist.svg");
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Grid */ "./components/Grid.jsx");
/* harmony import */ var _assets_divider_two_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/divider-two.svg */ "./assets/divider-two.svg");









var Root = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "SectionB__Root",
  componentId: "sc-1rkbp2z-0"
})(["position:relative;padding:10rem 0 25rem;text-align:center;overflow:hidden;", " svg{width:6rem;fill:var(--color-brand-1);vertical-align:bottom;}> svg{position:absolute;left:0;bottom:-.1rem;width:100vw;}h2{margin-bottom:4rem;}h4{margin-top:0;}", "{padding:4rem;border-radius:var(--round-radius-2);box-shadow:var(--drop-shadow-3);;}"], _Container__WEBPACK_IMPORTED_MODULE_3__["default"], _Grid__WEBPACK_IMPORTED_MODULE_7__["Column"]);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Root, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    as: "strong",
    className: "intro"
  }, "How it works"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    as: "h2"
  }, "WHERE THE MAGIC HAPPENS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    columns: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_7__["Column"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_icons_map_svg__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    as: "h5"
  }, "Select a Service"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], null, "Wherever you go and whenever you need one, you can easily select from our pool of skilled stylists nearest to you.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_7__["Column"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_icons_booked_svg__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    as: "h5"
  }, "Book instantly"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], null, "Booking an appointment through StyleQ is done with the click of a button. You no longer have to wait weeks for an appointment.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_7__["Column"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_icons_hair_stylist_svg__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    as: "h5"
  }, "Enjoy a great service"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], null, "We make sure you are happy every step of the way. Your joy is what inspires us.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_divider_two_svg__WEBPACK_IMPORTED_MODULE_8__["default"], null));
});

/***/ }),

/***/ "./components/SectionC.jsx":
/*!*********************************!*\
  !*** ./components/SectionC.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Container */ "./components/Container.jsx");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Typography */ "./components/Typography.jsx");
/* harmony import */ var _assets_icons_simple_formula_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/simple-formula.svg */ "./assets/icons/simple-formula.svg");
/* harmony import */ var _Pin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pin */ "./components/Pin.jsx");
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Grid */ "./components/Grid.jsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Button */ "./components/Button.jsx");








var dropExpose = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["0%{transform:scale(0.9);opacity:.6;}"]);
var Root = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "SectionC__Root",
  componentId: "sc-84qqge-0"
})(["padding:10rem 0;background:var(--color-brand-2);color:#fff;h4{color:var(--color-brand-5);}svg{transform-origin:center;animation:", " 1s linear infinite;animation-direction:alternate;}", ":first-child{display:flex;align-items:center;}"], dropExpose, _Grid__WEBPACK_IMPORTED_MODULE_6__["Grid"]);
var Video = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.video.withConfig({
  displayName: "SectionC__Video",
  componentId: "sc-84qqge-1"
})(["width:100%;margin:0;border-radius:var(--round-radius-2);box-shadow:0 4.4px 12.5px rgba(0,0,0,0.035),0 35px 100px rgba(0,0,0,0.07);object-fit:cover;"]);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Root, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    columns: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_6__["Column"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pin__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "var(--color-brand-5)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_icons_simple_formula_svg__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    as: "h4"
  }, "WE PUT THE \u201CS\u201D IN SIMPLICITY"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], null, "StyleQ is bridging the gap between professional stylists and customers. We help you find experienced, local stylists last minute while helping stylists fill empty chairs."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], null, "Hectic schedules shouldn't prevent you from looking your best! Let StyleQ make booking your next service simple and stress-free."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    responsive: true,
    variant: "primary",
    as: "a",
    href: "https://app.engati.com/static/standalone/bot.html?bot_key=5e26745e9b794e60"
  }, "Chat with Us")));
});

/***/ }),

/***/ "./components/SectionCovid.jsx":
/*!*************************************!*\
  !*** ./components/SectionCovid.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Container */ "./components/Container.jsx");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Typography */ "./components/Typography.jsx");
/* harmony import */ var _assets_icons_simple_formula_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/simple-formula.svg */ "./assets/icons/simple-formula.svg");
/* harmony import */ var _Pin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pin */ "./components/Pin.jsx");
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Grid */ "./components/Grid.jsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Button */ "./components/Button.jsx");








var dropExpose = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["0%{transform:scale(0.9);opacity:.6;}"]);
var Root = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "SectionCovid__Root",
  componentId: "nqty7b-0"
})(["padding:10rem 0;background:var(--color-brand-2);color:#fff;h4{color:var(--color-brand-5);}svg{transform-origin:center;animation:", " 1s linear infinite;animation-direction:alternate;}", ":first-child{display:flex;align-items:center;}"], dropExpose, _Grid__WEBPACK_IMPORTED_MODULE_6__["Grid"]);
var Video = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.video.withConfig({
  displayName: "SectionCovid__Video",
  componentId: "nqty7b-1"
})(["width:100%;margin:0;border-radius:var(--round-radius-2);box-shadow:0 4.4px 12.5px rgba(0,0,0,0.035),0 35px 100px rgba(0,0,0,0.07);object-fit:cover;"]);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Root, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    columns: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_6__["Column"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    as: "h4"
  }, "Work with the top beauty professionals in your city."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Full Background Check"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "2+ Years Experience"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Certified in COVID-19 Safety Protocols")))))));
});

/***/ }),

/***/ "./components/SectionD.jsx":
/*!*********************************!*\
  !*** ./components/SectionD.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Container */ "./components/Container.jsx");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Typography */ "./components/Typography.jsx");
/* harmony import */ var _assets_divider_three_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/divider-three.svg */ "./assets/divider-three.svg");
/* harmony import */ var _Pin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pin */ "./components/Pin.jsx");
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Service */ "./components/Service.jsx");
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Grid */ "./components/Grid.jsx");








var heartRelease = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["0%{transform:translateY(-3rem) scale(.2);opacity:1;}100%{transform:scale(1) translateY(-2rem);opacity:0;}"]);
var Root = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "SectionD__Root",
  componentId: "sc-1y5ws3u-0"
})(["position:relative;padding:25rem 0 0;text-align:center;overflow:hidden;> svg{position:absolute;top:-.1rem;left:0;width:100vw;}#heart-path{transform-origin:bottom;animation:", " 1s linear infinite;}@media not all and (min-resolution:.001dpcm){@media{#heart-path{animation:none;}}}", "{margin:12rem 0;}"], heartRelease, _Grid__WEBPACK_IMPORTED_MODULE_7__["Grid"]);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Root, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_divider_three_svg__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pin__WEBPACK_IMPORTED_MODULE_5__["default"], {
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    viewBox: "0 0 100 100",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "heart-path",
    d: "m59.873 39.484 6.635 6.585c.634.625 1.652.622 2.281-.006l6.61-6.61 6.609-6.61c4.247-4.248 4.394-11.091.108-15.35l-.089-.095c-.017-.018-.034-.034-.051-.051-1.978-1.961-4.499-2.972-7.064-3.077-2.566-.105-5.175.485-7.324 2.148-4.31-3.304-10.447-3.418-14.388.582h-.2v.424c-4 4.271-4.155 11.219.135 15.476z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m98.553 58.714c-.992-2.347-2.951-3.423-4.477-3.646-1.525-.224-2.779.208-2.779.208-.058.018-.117.039-.173.063l-17.234 8c.021-.214.069-.475.069-.693 0-3.635-3.012-6.646-6.661-6.646h-14.363c-.062 0-.132-.209-.189-.312-.257-.464-.535-.884-.834-1.319-.6-.869-1.282-1.661-2.035-2.399-3.015-2.953-7.444-4.764-12.038-4.764l-17.839.014v-1.921c0-.894-.207-1.299-1.101-1.299h-8.088-8.088c-.894 0-1.723.405-1.723 1.298v32.354c0 .895.829 1.348 1.723 1.348h8.088 8.088c.894 0 1.101-.453 1.101-1.348v-3.185l32.872 10.825c.035.012.2.021.237.031 3.471.881 7.53.365 10.585-1.63l31.452-17.075c.007-.006.048-.013.054-.019l.8-.436c0-.003 0-.005 0-.007 2-1.475 3.718-4.685 2.553-7.442zm-4.184 4.633-.758.429-31.412 17.068c-.041.023-.082.049-.121.076-2.13 1.431-5.441 1.908-8.031 1.258l-33.592-11.066c-.065-.021-.455-.038-.455-.05v-20.614l17.833-.006c3.743 0 7.222 1.473 9.646 3.849.606.594 1.221 1.242 1.702 1.939.24.349.497.709.702 1.081.254.459.441.563.578.882l.432.807h1.422 14.982c1.938 0 3.425 1.648 3.425 3.522 0 1.367-.808 2.6-1.99 3.126l-.151.112c-.396.153-.724.269-1.187.269 0 0-16.395.027-22.395.027-1 0-1 2.943 0 2.943h22.292c.652 0 1.272.021 1.87-.153.215-.021.423-.011.613-.112l.044.017c.061-.025.117-.038.177-.064l22.352-10.354c.015-.016.563-.172 1.244-.071.695.102 1.355.294 1.953 1.709.534 1.259.057 2.675-1.175 3.376z"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    as: "strong",
    className: "intro"
  }, "Top Services We Offer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    as: "h2"
  }, "SERVING SATISFACTION AND BEYOND"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    columns: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_7__["Column"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Service__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "BARBERING",
    image: "https://res.cloudinary.com/strich/image/upload/v1586812341/styleq-barber_qdzqvx.jpg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_7__["Column"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Service__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "HAIRCUTS/TRIMS",
    image: "https://res.cloudinary.com/strich/image/upload/v1586812341/styleq-hairstylist_ekzegg.jpg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_7__["Column"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Service__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "BRAIDS/LOCKS",
    image: "https://res.cloudinary.com/strich/image/upload/v1586812341/styleq-braids_urotsx.jpg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_7__["Column"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Service__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "BLOWOUTS",
    image: "https://res.cloudinary.com/dnk42vfsu/image/upload/v1594331972/website/photo-of-woman-wearing-white-tank-top-3696351_cbla75.jpg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_7__["Column"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Service__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "TWISTOUTS",
    image: "https://res.cloudinary.com/strich/image/upload/v1586812341/styleq-natural_zku8ba.jpg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_7__["Column"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Service__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "EXTENTIONS/SEW-INS",
    image: "https://res.cloudinary.com/dnk42vfsu/image/upload/v1594335130/website/woman-in-black-and-white-checked-mini-skirt-and-brown-coat-3597932_mtgbg4.jpg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_7__["Column"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Service__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "MAKEUP",
    image: "https://res.cloudinary.com/dnk42vfsu/image/upload/v1594329766/website/oz-seyrek-8_8zPKmKe0k-unsplash_1_zdcknv.jpg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_7__["Column"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Service__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "MANICURES/PEDICURES",
    image: "https://res.cloudinary.com/dnk42vfsu/image/upload/v1594333262/website/person-in-black-gloves-massaging-fingers-3997383_pbmwby.jpg"
  })))));
});

/***/ }),

/***/ "./components/SectionE.jsx":
/*!*********************************!*\
  !*** ./components/SectionE.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Container */ "./components/Container.jsx");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Typography */ "./components/Typography.jsx");
/* harmony import */ var _assets_divider_four_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/divider-four.svg */ "./assets/divider-four.svg");
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Grid */ "./components/Grid.jsx");
/* harmony import */ var _Testimonial__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Testimonial */ "./components/Testimonial.jsx");







var Root = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "SectionE__Root",
  componentId: "ve0p36-0"
})(["position:relative;padding:30rem 0 15rem;background:var(--color-brand-6);overflow:hidden;> svg{position:absolute;top:-.1rem;left:0;width:100vw;}", "{display:flex;justify-content:center;flex-direction:column;}"], _Grid__WEBPACK_IMPORTED_MODULE_5__["Column"]);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Root, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_divider_four_svg__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    columns: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_5__["Column"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    as: "h2"
  }, "CUSTOMERS STAY HAPPY"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], null, "We build long and lasting relationships that make you want to come back. See what our happy customers have to say.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_5__["Column"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Testimonial__WEBPACK_IMPORTED_MODULE_6__["default"], null)))));
});

/***/ }),

/***/ "./components/Service.jsx":
/*!********************************!*\
  !*** ./components/Service.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



var Figure = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.figure.withConfig({
  displayName: "Service__Figure",
  componentId: "twoql8-0"
})(["margin:0;box-shadow:var(--drop-shadow-3);border-radius:var(--round-radius-2);"]);
var Figcaption = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.figcaption.withConfig({
  displayName: "Service__Figcaption",
  componentId: "twoql8-1"
})(["padding:2rem;"]);
var Img = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "Service__Img",
  componentId: "twoql8-2"
})(["border-top-left-radius:var(--round-radius-2);border-top-right-radius:var(--round-radius-2);width:100%;height:25.25rem;object-fit:cover;"]);

var Service = function Service(_ref) {
  var name = _ref.name,
      image = _ref.image;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Figure, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Img, {
    src: image,
    alt: name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Figcaption, null, name));
};

Service.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  image: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Service);

/***/ }),

/***/ "./components/Testimonial.jsx":
/*!************************************!*\
  !*** ./components/Testimonial.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Typography */ "./components/Typography.jsx");




var sliderSettings = {
  arrows: false,
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
var Root = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Testimonial__Root",
  componentId: "sc-13gsy52-0"
})(["position:relative;width:80vw;max-width:50rem;margin:2rem auto;.slick-list{border-radius:var(--round-radius-2);box-shadow:var(--drop-shadow-3);}"]);
var Quote = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Testimonial__Quote",
  componentId: "sc-13gsy52-1"
})(["height:27rem;padding:4rem;background:#fff;> ", "{height:60%;}div{text-align:right;img,", "{display:inline-block;text-align:right;}}img{vertical-align:middle;width:4rem;height:4rem;margin-left:1rem;border-radius:var(--round-radius-1);object-fit:cover;}"], _Typography__WEBPACK_IMPORTED_MODULE_3__["default"], _Typography__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Root, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, sliderSettings, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Quote, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: "2.2rem"
  }, "StyleQ connects me so easily with clients and gives me an opportunity to build my network."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    as: "h6"
  }, "Alivia"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://res.cloudinary.com/strich/image/upload/v1588015226/reviewer-6_kewzvm.jpg",
    alt: "Alivia"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Quote, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: "2.2rem"
  }, "Alivia did a fantastic job. She asked a lot of questions to make sure we were on the same page, and then executed perfection."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    as: "h6"
  }, "Molly"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://res.cloudinary.com/strich/image/upload/v1588015226/reviewer-2_j6wgob.jpg",
    alt: "Molly"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Quote, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: "2.2rem"
  }, "Going into my appointment, I wasn't sure what to expect. However, after the consultation process, my needs were met and exceeded."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    as: "h6"
  }, "Matt"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://res.cloudinary.com/strich/image/upload/v1588015226/reviewer-3_pxddgc.jpg",
    alt: "Matt"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Quote, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: "2.2rem"
  }, "Zoe does a great job with my haircut as always."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    as: "h6"
  }, "Que"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://res.cloudinary.com/styleq/image/upload/v1594256033/Que-1_eezxbo.jpg",
    alt: "Que"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Quote, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: "2.2rem"
  }, "Even with this pandemic I love how I can still connect with others virtually and the energy/vibe is still fun and the same virtually as if I was still in the treatment room."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    as: "h6"
  }, "Breanna"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://res.cloudinary.com/styleq/image/upload/v1594256245/Breanna.jpg",
    alt: "Breanna"
  })))));
});

/***/ }),

/***/ "./components/Typography.jsx":
/*!***********************************!*\
  !*** ./components/Typography.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var textStyle = function textStyle(element) {
  return {
    h1: function h1() {
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-size:4.2rem;color:var(--color-brand-1);line-height:1.2;@media(min-width:520px){font-size:6.4rem;}"]);
    },
    h2: function h2() {
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-size:2.8rem;color:var(--color-brand-1);@media(min-width:720px){font-size:4rem;}"]);
    },
    h3: function h3() {
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-size:3.6rem;"]);
    },
    h4: function h4() {
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-size:2.8rem;color:var(--color-brand-1);"]);
    },
    h5: function h5() {
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-size:2.2rem;color:var(--color-brand-1);"]);
    },
    h6: function h6() {
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-size:1.8rem;color:var(--color-brand-1);"]);
    },
    p: function p() {
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-size:1.8rem;"]);
    },
    span: function span() {
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["margin:0;"]);
    },
    strong: function strong() {
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["margin:0;font-weight:bolder;"]);
    },
    em: function em() {
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["margin:0;font-style:italic;"]);
    },
    small: function small() {
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-size:1.4rem;"]);
    }
  }[element]();
};

var Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "Typography__Text",
  componentId: "bjxfwk-0"
})(["margin:1rem 0;line-height:1.5;", " ", " ", " ", " ", " ", " ", ""], function (_ref) {
  var as = _ref.as;
  return as && textStyle(as);
}, function (_ref2) {
  var transform = _ref2.transform;
  return transform && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["text-transform:", ";"], transform);
}, function (_ref3) {
  var align = _ref3.align;
  return align && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["text-align:", ";"], align);
}, function (_ref4) {
  var size = _ref4.size;
  return size && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-size:", ";"], size);
}, function (_ref5) {
  var weight = _ref5.weight;
  return weight && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-weight:", ";"], weight);
}, function (_ref6) {
  var truncate = _ref6.truncate;
  return truncate === 'break' && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["word-break:break-word;"]);
}, function (_ref7) {
  var truncate = _ref7.truncate;
  return truncate === 'ellipsis' && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["width:100%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;"]);
});
Text.propTypes = {
  as: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  transform: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  align: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

module.exports = _taggedTemplateLiteral;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _templates_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/Layout */ "./templates/Layout.jsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.jsx");
/* harmony import */ var _components_SectionA__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SectionA */ "./components/SectionA.jsx");
/* harmony import */ var _components_SectionB__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SectionB */ "./components/SectionB.jsx");
/* harmony import */ var _components_SectionC__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SectionC */ "./components/SectionC.jsx");
/* harmony import */ var _components_SectionD__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SectionD */ "./components/SectionD.jsx");
/* harmony import */ var _components_SectionE__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SectionE */ "./components/SectionE.jsx");
/* harmony import */ var _components_SectionCovid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SectionCovid */ "./components/SectionCovid.jsx");









function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_templates_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SectionA__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SectionB__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SectionC__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SectionD__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SectionCovid__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SectionE__WEBPACK_IMPORTED_MODULE_7__["default"], null));
}

/***/ }),

/***/ "./templates/Layout.jsx":
/*!******************************!*\
  !*** ./templates/Layout.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/GlobalStyle */ "./components/GlobalStyle.jsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.jsx");






var Layout = function Layout(_ref) {
  var children = _ref.children,
      title = _ref.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "apple-touch-icon",
    href: "/apple-touch-icon.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "mask-icon",
    color: "#a43f6a",
    href: "/safari-pinned-tab.svg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "manifest",
    crossOrigin: "use-credentials",
    href: "/site.webmanifest"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "msapplication-TileColor",
    content: "a43f6a"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "theme-color",
    content: "#ffffff"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: "StyleQ connects users to beauty and wellness professionals, instantly. StyleQ empowers local salons and independent stylists to generate profitable appointments during gaps in their schedules, and allows users to book appointments on the spot."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_GlobalStyle__WEBPACK_IMPORTED_MODULE_3__["default"], null), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));
};

Layout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Layout.defaultProps = {
  title: 'StyleQ - Find professional stylists'
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nike9\Documents\GitHub\website\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map