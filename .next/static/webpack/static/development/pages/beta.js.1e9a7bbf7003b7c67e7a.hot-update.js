webpackHotUpdate("static/development/pages/beta.js",{

/***/ "./components/LandBg.js":
/*!******************************!*\
  !*** ./components/LandBg.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");

var _jsxFileName = "/Users/rodrigosalmeron/Sites/deepfuture/components/LandBg.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var calc = function calc(x, y) {
  return [x - window.innerWidth / 2, y - window.innerHeight / 2];
};

var trans1 = function trans1(x, y) {
  return "translate3d(".concat(x / 10, "px,").concat(y / 10, "px,0)");
};

var trans2 = function trans2(x, y) {
  return "translate3d(".concat(x / 8 + 35, "px,").concat(y / 8 - 230, "px,0)");
};

var trans3 = function trans3(x, y) {
  return "translate3d(".concat(x / 6 - 250, "px,").concat(y / 6 - 200, "px,0)");
};

var trans4 = function trans4(x, y) {
  return "translate3d(".concat(x / 3.5, "px,").concat(y / 3.5, "px,0)");
};

function LandBg() {
  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__["useSpring"])(function () {
    return {
      xy: [0, 0],
      config: {
        mass: 10,
        tension: 550,
        friction: 140
      }
    };
  }),
      _useSpring2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useSpring, 2),
      props = _useSpring2[0],
      set = _useSpring2[1];

  return __jsx(Bg, {
    onMouseMove: function onMouseMove(_ref) {
      var x = _ref.clientX,
          y = _ref.clientY;
      return set({
        xy: calc(x, y)
      });
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].div, {
    style: {
      transform: props.xy.interpolate(trans1)
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].div, {
    style: {
      transform: props.xy.interpolate(trans2)
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].div, {
    style: {
      transform: props.xy.interpolate(trans3)
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].div, {
    style: {
      transform: props.xy.interpolate(trans4)
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (LandBg);
var Bg = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "LandBg__Bg",
  componentId: "sc-1tfgvoe-0"
})(["width:100%;height:100%;position:absolute;div{box-shadow:", ";border-radius:50%;position:absolute;:nth-of-type(1){width:37%;height:0;padding-bottom:37%;background-color:", ";top:5%;left:24%;}:nth-of-type(2){width:20%;height:0;padding-bottom:20%;background-color:", ";top:10%;right:13%;}}"], function (props) {
  return "-10px -10px 20px ".concat(props.theme.colors.darklight, ", \n    10px 10px 20px ").concat(props.theme.colors.darkshadow);
}, function (props) {
  return props.theme.colors.background;
}, function (props) {
  return props.theme.colors.background;
});

/***/ })

})
//# sourceMappingURL=beta.js.1e9a7bbf7003b7c67e7a.hot-update.js.map