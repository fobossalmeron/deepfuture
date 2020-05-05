webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Frodrigosalmeron%2FSites%2Fdeepfuture%2Fpages%2F_error.js&hotRouterUpdates=true!./":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Frodrigosalmeron%2FSites%2Fdeepfuture%2Fpages%2F_error.js&hotRouterUpdates=true ***!
  \************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_error",
      function () {
        var mod = __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js");
        if (true) {
          module.hot.accept(/*! ./pages/_error.js */ "./pages/_error.js", function () {
            if (!next.router.components["/_error"]) return;
            var updatedPage = __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js");
            next.router.update("/_error", updatedPage);
          });
        }
        return mod;
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error&hotRouterUpdates=true!./":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Error; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Head */ "./components/Head.js");
var _jsxFileName = "/Users/rodrigosalmeron/Sites/deepfuture/pages/_error.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Error(props) {
  var t = props.locale.error_page;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    props.setTitle(t.headerTitle + " " + (props.statusCode ? props.statusCode : "Client"));
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Head__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Acueducto | ".concat(props.statusCode ? props.statusCode : "404"),
    lang: props.lang,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, "404 ERROR"));
}

Error.getInitialProps = function (_ref) {
  var res = _ref.res,
      err = _ref.err;
  var statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return {
    statusCode: statusCode
  };
};

/***/ }),

/***/ 2:
/*!****************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_error&absolutePagePath=%2FUsers%2Frodrigosalmeron%2FSites%2Fdeepfuture%2Fpages%2F_error.js&hotRouterUpdates=true ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F_error&absolutePagePath=%2FUsers%2Frodrigosalmeron%2FSites%2Fdeepfuture%2Fpages%2F_error.js&hotRouterUpdates=true! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Frodrigosalmeron%2FSites%2Fdeepfuture%2Fpages%2F_error.js&hotRouterUpdates=true!./");


/***/ })

})
//# sourceMappingURL=_error.js.82079d3f32853318aa5f.hot-update.js.map