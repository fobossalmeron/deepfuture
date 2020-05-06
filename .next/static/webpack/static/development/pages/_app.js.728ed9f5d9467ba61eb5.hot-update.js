webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-top-loading-bar */ "./node_modules/react-top-loading-bar/dist/index.es.js");
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/layout */ "./components/layout.js");
/* harmony import */ var styles_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! styles/theme */ "./styles/theme.js");
/* harmony import */ var js_cookie_dist_js_cookie__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! js-cookie/dist/js.cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var public_locales_es_common_json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! public/locales/es/common.json */ "./public/locales/es/common.json");
var public_locales_es_common_json__WEBPACK_IMPORTED_MODULE_16___namespace = /*#__PURE__*/__webpack_require__.t(/*! public/locales/es/common.json */ "./public/locales/es/common.json", 1);
/* harmony import */ var utils_LangContext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! utils/LangContext */ "./utils/LangContext.js");
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.mjs");








var _jsxFileName = "/Users/rodrigosalmeron/Sites/deepfuture/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








 // import en from "public/locales/en/common.json";






var MyApp = /*#__PURE__*/function (_App) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp, _App);

  var _super = _createSuper(MyApp);

  function MyApp(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MyApp);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "toggleLang", function (lang) {
      var language = lang === "en" ? en : public_locales_es_common_json__WEBPACK_IMPORTED_MODULE_16__;
      js_cookie_dist_js_cookie__WEBPACK_IMPORTED_MODULE_15__["default"].set("chosenLang", lang);

      _this.setState({
        locale: language
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleRouteComplete", function (url) {
      var _myself = Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this);

      setTimeout(function () {
        _myself.LoadingBar.complete();
      }, 300);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleRouteStart", function (url) {
      _this.LoadingBar.continuousStart();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleRouteError", function (err, url) {
      var _myself = Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this);

      setTimeout(function () {
        if (err.cancelled) {
          console.log("".concat(err, " on route to ").concat(url));
        }

        _myself.LoadingBar.complete();
      }, 300);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "checkForConsent", function () {
      // Check if cookie message has been closed before
      var _C = js_cookie_dist_js_cookie__WEBPACK_IMPORTED_MODULE_15__["default"].get("showCookieMessage");

      if (_C === undefined) {
        _this.setState({
          hasToConsent: true
        });
      } else if (_C === "false") {
        _this.setState({
          hasToConsent: false
        });
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "consentToCookies", function () {
      js_cookie_dist_js_cookie__WEBPACK_IMPORTED_MODULE_15__["default"].set("showCookieMessage", "false");

      _this.setState({
        hasToConsent: false
      });
    });

    _this.state = {
      // locale: props.router.route.includes("/en") ? en : es,
      locale: public_locales_es_common_json__WEBPACK_IMPORTED_MODULE_16__,
      hasToConsent: false,
      //return hasLoaded to false
      hasLoaded: true,
      readyToScroll: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp, [{
    key: "authenticate",
    value: function authenticate() {
      return new Promise(function (resolve) {
        return setTimeout(resolve, 1500);
      }); //1500
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // Disable scroll
      // Esto es importante para el loading icon
      var targetElement = document.querySelector("#logo"); //dummy

      Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_18__["disableBodyScroll"])(targetElement); // Load Animation

      this.authenticate().then(function () {
        var bordered = document.getElementById("bordered");
        var logo = document.getElementById("logo");
        var revealer = document.getElementById("revealer");

        if (bordered) {
          setTimeout(function () {
            // transition out
            bordered.classList.add("hidden");
            logo.style.opacity = "0"; // bordered.style.transform = "scale(1)";
            // bordered.style.borderWidth = "2px";

            setTimeout(function () {
              revealer.style.opacity = "0";
              revealer.style.pointerEvents = "none";

              _this2.setState({
                hasLoaded: true
              }, function () {
                return console.log("Page hasLoaded");
              }, Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_18__["enableBodyScroll"])(targetElement));
            }, 500);
            setTimeout(function () {
              // remove from DOM
              bordered.remove();
              revealer.remove();
              logo.remove();
            }, 3000);
          }, 500);
        }
      }); // router event listeners for loadingBar

      next_router__WEBPACK_IMPORTED_MODULE_10___default.a.events.on("routeChangeStart", this.handleRouteStart);
      next_router__WEBPACK_IMPORTED_MODULE_10___default.a.events.on("routeChangeComplete", this.handleRouteComplete);
      next_router__WEBPACK_IMPORTED_MODULE_10___default.a.events.on("routeChangeError", this.handleRouteError);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      next_router__WEBPACK_IMPORTED_MODULE_10___default.a.events.off("routeChangeStart", this.handleRouteStart);
      next_router__WEBPACK_IMPORTED_MODULE_10___default.a.events.off("routeChangeComplete", this.handleRouteComplete);
      next_router__WEBPACK_IMPORTED_MODULE_10___default.a.events.off("routeChangeError", this.handleRouteError);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_11__["ThemeProvider"], {
        theme: styles_theme__WEBPACK_IMPORTED_MODULE_14__["default"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 7
        }
      }, __jsx(utils_LangContext__WEBPACK_IMPORTED_MODULE_17__["LangProvider"], {
        value: this.state.locale,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 9
        }
      }, __jsx(react_top_loading_bar__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onRef: function onRef(ref) {
          return _this3.LoadingBar = ref;
        },
        height: 3,
        color: styles_theme__WEBPACK_IMPORTED_MODULE_14__["default"].colors.accent,
        className: "TopBar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }
      }), __jsx(components_layout__WEBPACK_IMPORTED_MODULE_13__["default"], {
        locale: this.state.locale,
        checkForConsent: this.checkForConsent,
        consentToCookies: this.consentToCookies,
        hasToConsent: this.state.hasToConsent,
        hasLoaded: this.state.hasLoaded,
        toggleLang: this.toggleLang,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }
      }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        locale: this.state.locale
      }, pageProps, {
        lang: this.state.locale.lang,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 13
        }
      })))));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_9___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(MyApp));

/***/ })

})
//# sourceMappingURL=_app.js.728ed9f5d9467ba61eb5.hot-update.js.map