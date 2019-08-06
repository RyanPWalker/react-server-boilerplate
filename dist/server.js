/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "http://localhost:3000";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, fileName, description, version, main, author, license, sideEffects, repository, keywords, scripts, nodemonConfig, config, prepush, jest, devDependencies, dependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"react-server-boilerplate\",\"fileName\":\"react-server-boilerplate\",\"description\":\"node-react server setup\",\"version\":\"0.0.0\",\"main\":\"server.js\",\"author\":\"Ryan Walker <ryanprestonwalker@gmail.com>\",\"license\":\"UNLICENSED\",\"sideEffects\":false,\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/RyanPWalker/react-server-boilerplate.git\"},\"keywords\":[\"Ryan Preston Walker\",\"Ryan Walker\",\"FED\",\"Front End Developer\",\"React\",\"JavaScript\",\"Web Developer\"],\"scripts\":{\"bounce\":\"rm -rf /node_modules && yarn\",\"build\":\"webpack --config webpack.config.js --progress\",\"build:prod\":\"webpack --config webpack.config.prod.js --progress\",\"dev\":\"rm -rf dist && yarn build && cp ./src/local/index.dev.html dist/ && concurrently -n 'server,client' -c 'bgBlue.bold,bgGreen.bold' 'yarn run:server' 'webpack --watch'\",\"dev:prod\":\"rm -rf dist && yarn build:prod && cp ./src/local/index.html dist/ && concurrently -n 'server,client' -c 'bgBlue.bold,bgGreen.bold' 'yarn run:prodServer' 'webpack --watch'\",\"run:server\":\"nodemon -e js,html --watch dist --ignore dist/client.js ./dist/server.js\",\"deploy\":\"source $HOME/.nvm/nvm.sh && nvm use && rm -rf ./node_modules && yarn && yarn build:prod\",\"analyze\":\"yarn build && yarn preAnalyze && webpack-bundle-analyzer webpack-build-log.json dist\",\"preAnalyze\":\"webpack -p --json --progress --profile > webpack-build-log.json\",\"lint\":\"eslint ./src --fix\",\"jest\":\"clear && jest --coverage\",\"test\":\"yarn lint && jest\"},\"nodemonConfig\":{\"delay\":\"750\"},\"config\":{\"startupFile\":\"dist/server.js\",\"port\":80,\"devPort\":3000},\"prepush\":\"test\",\"jest\":{\"globals\":{}},\"devDependencies\":{\"@babel/cli\":\"^7.5.5\",\"@babel/core\":\"^7.5.5\",\"@babel/plugin-proposal-object-rest-spread\":\"^7.5.5\",\"@babel/plugin-syntax-dynamic-import\":\"^7.2.0\",\"@babel/plugin-transform-object-assign\":\"^7.2.0\",\"@babel/plugin-transform-react-inline-elements\":\"^7.2.0\",\"@babel/plugin-transform-runtime\":\"^7.5.5\",\"@babel/preset-env\":\"^7.5.5\",\"@babel/preset-react\":\"^7.0.0\",\"babel-eslint\":\"^10.0.2\",\"babel-jest\":\"^24.8.0\",\"babel-loader\":\"8.0.6\",\"babel-plugin-react-remove-prop-types\":\"^3.0.0\",\"babelify\":\"10.0.0\",\"concurrently\":\"^4.1.1\",\"css-loader\":\"^3.1.0\",\"eslint\":\"^6.1.0\",\"eslint-config-react-app\":\"^4.0.1\",\"eslint-loader\":\"^2.1.2\",\"eslint-plugin-import\":\"^2.18.2\",\"eslint-plugin-react\":\"^7.14.3\",\"extract-text-webpack-plugin\":\"^4.0.0-beta.0\",\"fs\":\"^0.0.1-security\",\"glob\":\"^7.1.4\",\"html-webpack-plugin\":\"3.2.0\",\"husky\":\"^3.0.2\",\"incstr\":\"^1.2.3\",\"inquirer\":\"^6.4.1\",\"jest\":\"^24.8.0\",\"less\":\"3.9.0\",\"less-loader\":\"^5.0.0\",\"mini-css-extract-plugin\":\"^0.8.0\",\"nodemon\":\"^1.19.1\",\"prop-types\":\"^15.7.2\",\"purgecss\":\"^1.2.0\",\"purgecss-webpack-plugin\":\"^1.4.0\",\"style-loader\":\"0.23.1\",\"uglifyjs-webpack-plugin\":\"2.2.0\",\"webpack\":\"4.39.1\",\"webpack-bundle-analyzer\":\"^3.4.1\",\"webpack-bundle-size-analyzer\":\"^3.0.0\",\"webpack-cli\":\"3.3.6\",\"webpack-common-shake\":\"^2.1.0\",\"webpack-dev-server\":\"3.7.2\",\"webpack-node-externals\":\"^1.7.2\"},\"dependencies\":{\"body-parser\":\"^1.19.0\",\"csso-webpack-plugin\":\"^1.0.0-beta.12\",\"deep-get-set\":\"^1.1.0\",\"express\":\"^4.17.1\",\"path\":\"^0.12.7\",\"promise\":\"^8.0.3\",\"react\":\"^16.8.6\",\"react-dom\":\"^16.8.6\",\"react-hook-form\":\"^3.21.7\",\"react-redux\":\"7.1.0\",\"redux\":\"^4.0.1\",\"redux-promise-middleware\":\"^6.1.1\",\"redux-thunk\":\"^2.3.0\",\"reselect\":\"^4.0.0\"}}");

/***/ }),

/***/ "./server/fakeData.json":
/*!******************************!*\
  !*** ./server/fakeData.json ***!
  \******************************/
/*! exports provided: putReduxInitHere, parameters, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"putReduxInitHere\":true,\"parameters\":{}}");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/jsx */ "@babel/runtime/helpers/jsx");
/* harmony import */ var _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var redux_promise_middleware__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux-promise-middleware */ "redux-promise-middleware");
/* harmony import */ var redux_promise_middleware__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(redux_promise_middleware__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _src_js_redux_reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/js/redux/reducers */ "./src/js/redux/reducers/index.js");
/* harmony import */ var _src_js_App__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/js/App */ "./src/js/App.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ "./package.json", 1);
/* harmony import */ var _src_js_redux_actions_initialState__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../src/js/redux/actions/initialState */ "./src/js/redux/actions/initialState.js");
/* harmony import */ var _fakeData__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fakeData */ "./server/fakeData.json");
var _fakeData__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./fakeData */ "./server/fakeData.json", 1);
















var middleware = [Object(redux_promise_middleware__WEBPACK_IMPORTED_MODULE_10__["createPromise"])(), // default action suffixes are ['PENDING', 'FULFILLED', 'REJECTED']
redux_thunk__WEBPACK_IMPORTED_MODULE_9___default.a];
var middlewareParam = redux__WEBPACK_IMPORTED_MODULE_7__["applyMiddleware"].apply(void 0, middleware);
var server = express__WEBPACK_IMPORTED_MODULE_1___default()();

if (true) {
  server.use('/dist', express__WEBPACK_IMPORTED_MODULE_1___default.a["static"]('dist'));
}

server.use(body_parser__WEBPACK_IMPORTED_MODULE_8___default.a.json({
  limit: '50mb'
}));
server.use(body_parser__WEBPACK_IMPORTED_MODULE_8___default.a.urlencoded({
  extended: true
})); // support encoded bodies

if (true) {
  server.get('/', function (request, response) {
    // create new store for each request
    // add fake data from reducers here
    var store = Object(redux__WEBPACK_IMPORTED_MODULE_7__["createStore"])(_src_js_redux_reducers__WEBPACK_IMPORTED_MODULE_11__["default"], middlewareParam); // organize data with our reducers

    store.dispatch(Object(_src_js_redux_actions_initialState__WEBPACK_IMPORTED_MODULE_14__["initialLoadServerData"])(_fakeData__WEBPACK_IMPORTED_MODULE_15__)); // WITH header and footer

    var htmlPage = fs__WEBPACK_IMPORTED_MODULE_3___default.a.readFileSync(path__WEBPACK_IMPORTED_MODULE_4___default.a.join(__dirname, '../src/local/index.dev.html')).toString();
    response.send(htmlPage.replace( // '__REACT__', ReactDOMServer.renderToString( // USE 'hydrate' ON CLIENT
    '__REACT__', react_dom_server__WEBPACK_IMPORTED_MODULE_5___default.a.renderToStaticMarkup( // USE 'render' ON CLIENT
    _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"], {
      store: store
    }, void 0, _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_src_js_App__WEBPACK_IMPORTED_MODULE_12__["default"], {})))).replace( // JSON.stringify(store.getState()).replace(/</g, '\\u003c')
    '__INITIAL_STATE__', JSON.stringify(store.getState())));
  });
} else {}

server.use(express__WEBPACK_IMPORTED_MODULE_1___default.a["static"](__dirname));
var DEFAULT_PORT =  true ? _package_json__WEBPACK_IMPORTED_MODULE_13__.config.devPort : undefined;
var expressServer = server.listen(DEFAULT_PORT, function () {
  console.log("\u26A1\u26A1\u26A1 Server now listening on ".concat(DEFAULT_PORT));
});

if (true) {
  // cleans up server before restarting it
  process.on('uncaughtException', function () {
    expressServer.close();
  });
  process.on('SIGTERM', function () {
    expressServer.close();
  });
}

/***/ }),

/***/ "./src/js/App.js":
/*!***********************!*\
  !*** ./src/js/App.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/jsx */ "@babel/runtime/helpers/jsx");
/* harmony import */ var _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var App = function App() {
  return _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {}, void 0, "Hello World");
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/js/redux/actions/initialState.js":
/*!**********************************************!*\
  !*** ./src/js/redux/actions/initialState.js ***!
  \**********************************************/
/*! exports provided: INITIAL_SERVER_DATA_LOAD, INITIAL_CLIENT_DATA_LOAD, initialLoadServerData, initialLoadClientData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_SERVER_DATA_LOAD", function() { return INITIAL_SERVER_DATA_LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_CLIENT_DATA_LOAD", function() { return INITIAL_CLIENT_DATA_LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialLoadServerData", function() { return initialLoadServerData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialLoadClientData", function() { return initialLoadClientData; });
var INITIAL_SERVER_DATA_LOAD = 'INITIAL_SERVER_DATA_LOAD';
var INITIAL_CLIENT_DATA_LOAD = 'INITIAL_CLIENT_DATA_LOAD';
var initialLoadServerData = function initialLoadServerData(contextObject) {
  return {
    type: INITIAL_SERVER_DATA_LOAD,
    payload: contextObject
  };
};
var initialLoadClientData = function initialLoadClientData(serializedState) {
  return {
    type: INITIAL_CLIENT_DATA_LOAD,
    payload: serializedState
  };
};

/***/ }),

/***/ "./src/js/redux/reducers/index.js":
/*!****************************************!*\
  !*** ./src/js/redux/reducers/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialState */ "./src/js/redux/reducers/initialState.js");


var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  appData: _initialState__WEBPACK_IMPORTED_MODULE_1__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/js/redux/reducers/initialState.js":
/*!***********************************************!*\
  !*** ./src/js/redux/reducers/initialState.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_initialState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/initialState */ "./src/js/redux/actions/initialState.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_initialState__WEBPACK_IMPORTED_MODULE_1__["INITIAL_SERVER_DATA_LOAD"]:
      {
        return _objectSpread({}, action.payload);
      }

    case _actions_initialState__WEBPACK_IMPORTED_MODULE_1__["INITIAL_CLIENT_DATA_LOAD"]:
      {
        return _objectSpread({}, action.payload.appData);
      }

    default:
      return state;
  }
});

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./server/server.js */"./server/server.js");


/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/jsx":
/*!*********************************************!*\
  !*** external "@babel/runtime/helpers/jsx" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/jsx");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-promise-middleware":
/*!*******************************************!*\
  !*** external "redux-promise-middleware" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-promise-middleware");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map