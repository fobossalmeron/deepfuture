webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./components/Head.js":
/*!****************************!*\
  !*** ./components/Head.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/rodrigosalmeron/Sites/deepfuture/components/Head.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Meta = function Meta(props) {
  var es_default = "Meta Description";
  var en_default = "";
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("meta", {
    charSet: "utf-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, props.title), props.description && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("meta", {
    name: "description",
    content: props.description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }), __jsx("meta", {
    name: "og:description",
    property: "og:description",
    content: props.description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  })), !props.description && (props.lang === "es" ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("meta", {
    name: "description",
    content: es_default,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "og:description",
    property: "og:description",
    content: es_default,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("meta", {
    name: "description",
    content: en_default,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "og:description",
    property: "og:description",
    content: en_default,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }))), __jsx("meta", {
    name: "og:title",
    property: "og:title",
    content: props.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }), props.lang === "es" ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("meta", {
    property: "og:locale",
    content: "es_MX",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "og:locale:alternate",
    content: "en_US",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("meta", {
    property: "og:locale",
    content: "en_US",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "og:locale:alternate",
    content: "es_MX",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  })), __jsx("meta", {
    property: "og:site_name",
    content: "Acueducto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }), props.image ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("meta", {
    property: "og:image",
    content: "https://deepfuture.institute/assets/img/og/".concat(props.image),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "og:image:alt",
    content: props.lang === "es" ? "Alt de imagen" : "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("meta", {
    property: "og:image",
    content: "https://deepfuture.institute/assets/img/og/og_main.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "og:image:alt",
    content: "DFI logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  })), props.canonical && (props.lang == "es" ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("link", {
    rel: "canonical",
    href: props.canonical,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "alternate",
    hrefLang: "en",
    href: props.en_canonical,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "alternate",
    href: props.en_canonical,
    hrefLang: "x-default",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }), __jsx("meta", {
    property: "og:url",
    content: props.canonical,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("link", {
    rel: "canonical",
    href: props.en_canonical,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "alternate",
    hrefLang: "es",
    href: props.canonical,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "alternate",
    href: props.en_canonical,
    hrefLang: "x-default",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }), __jsx("meta", {
    property: "og:url",
    content: props.canonical,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Meta);

/***/ }),

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

/***/ 1:
/*!****************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_error&absolutePagePath=%2FUsers%2Frodrigosalmeron%2FSites%2Fdeepfuture%2Fpages%2F_error.js&hotRouterUpdates=true ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F_error&absolutePagePath=%2FUsers%2Frodrigosalmeron%2FSites%2Fdeepfuture%2Fpages%2F_error.js&hotRouterUpdates=true! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Frodrigosalmeron%2FSites%2Fdeepfuture%2Fpages%2F_error.js&hotRouterUpdates=true!./");


/***/ })

})
//# sourceMappingURL=_error.js.c1a0f848df4f3998c27a.hot-update.js.map