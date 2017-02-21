require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_carl_dev_gram_server_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_carl_dev_gram_server_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_carl_dev_gram_server_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_instagram__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cors__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_cors__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





var session = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_instagram__["a" /* getSession */])();
var locationId = '218676665'; // Göteborg

var app = __WEBPACK_IMPORTED_MODULE_1_express___default()();
app.use(__WEBPACK_IMPORTED_MODULE_3_cors___default()());

app.get('/images', function () {
  var _ref = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__home_carl_dev_gram_server_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var media, imageSize, images;
    return __WEBPACK_IMPORTED_MODULE_0__home_carl_dev_gram_server_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_instagram__["b" /* getNearbyMedia */])(session, locationId);

          case 3:
            media = _context.sent;
            imageSize = 4;
            images = media.map(function (m) {
              return m._params.images[imageSize];
            });
            return _context.abrupt('return', res.json(images));

          case 9:
            _context.prev = 9;
            _context.t0 = _context['catch'](0);
            return _context.abrupt('return', res.json({ error: _context.t0.message }));

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[0, 9]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var port = process.env.PORT || 8000;

app.listen(port, function (err) {
  if (err) {
    console.error(err);
  }

  if (true) {
    console.log('> in development');
  }

  console.log('> listening on port ' + port);
});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_carl_dev_gram_server_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_carl_dev_gram_server_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_carl_dev_gram_server_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ramda__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return getSession; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return getNearbyMedia; });


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



var Client = __webpack_require__(5).V1;
var cookiePath = __dirname + '/cookies/account.json';

var getSession = function getSession() {
    var device = new Client.Device('thegreatgram');
    var storage = new Client.CookieFileStorage(cookiePath);

    return new Client.Session(device, storage);
    // TODO: Check if session is valid before we create another one
    // Client.Session.create(device, storage, 'thegreatgram', `wqR'9,B[D+;XcSaJ`);
};

var getNearbyMedia = function () {
    var _ref = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__home_carl_dev_gram_server_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(session, locationId) {
        return __WEBPACK_IMPORTED_MODULE_0__home_carl_dev_gram_server_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        return _context.abrupt('return', new Client.Feed.LocationMedia(session, locationId).get());

                    case 1:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, _this);
    }));

    return function getNearbyMedia(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();
/* WEBPACK VAR INJECTION */}.call(exports, "src/api"))

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("cors");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("instagram-private-api");

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("ramda");

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }
/******/ ]);
//# sourceMappingURL=main.map