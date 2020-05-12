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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/CookieMessage.js":
/*!*************************************!*\
  !*** ./components/CookieMessage.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var public_assets_img_layout_cross_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! public/assets/img/layout/cross.svg */ "./public/assets/img/layout/cross.svg");
var _jsxFileName = "/Users/salmeron/Sites/deepfuture/components/CookieMessage.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const CookieMessage = props => {
  let t = props.locale.cookie_message;
  return __jsx(Wrapper, {
    clickable: props.hasToConsent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(Border, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(Button, {
    onClick: props.doConsentToCookies,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, t.title)), __jsx(CrossContainer, {
    onClick: props.doConsentToCookies,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(public_assets_img_layout_cross_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  })), __jsx(Divider, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, t.p, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/cookies",
    passHref: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }, t.link)), t.p_continued))));
};

/* harmony default export */ __webpack_exports__["default"] = (CookieMessage);
const Border = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CookieMessage__Border",
  componentId: "krtr03-0"
})(["background-color:", ";padding:15px 25px 20px;border-radius:3px;"], props => props.theme.colors.background);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "CookieMessage__Button",
  componentId: "krtr03-1"
})(["padding:14px 0%;text-align:center;width:calc(100% - 50px);background-color:", ";color:", ";border:0;font-size:1.8rem;cursor:pointer;transition:0.3s ease all;@media (hover:hover) and (pointer:fine){&:hover{background-color:", ";span{background-size:0 0;}}}"], props => props.theme.colors.accent, props => props.theme.colors.foreground, props => props.theme.colors.success);
const Divider = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CookieMessage__Divider",
  componentId: "krtr03-2"
})(["display:flex;"]);
const CrossContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CookieMessage__CrossContainer",
  componentId: "krtr03-3"
})(["width:79px;height:84px;padding:15px 25px;margin:0;display:flex;position:absolute;top:0;right:0;svg{width:100%;cursor:pointer;}"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CookieMessage__Wrapper",
  componentId: "krtr03-4"
})(["pointer-events:", ";opacity:", ";max-width:590px;width:80%;bottom:5%;left:50%;transform:translateX(-50%) ", ";position:fixed;transition:opacity 0.4s ease,transform 0.5s ease;z-index:12;p{font-size:1.3rem;padding-top:10px;width:100%;text-align:center;}@media (max-width:600px){left:0;transform:none;width:calc(100% - 36px);margin-left:18px;margin-right:18px;bottom:18px;z-index:100;}"], props => props.clickable ? "auto" : "none", props => props.clickable ? "1" : "0", props => props.clickable ? "translateY(0%)" : "translateY(5%)");

/***/ }),

/***/ "./components/MercadoPago.js":
/*!***********************************!*\
  !*** ./components/MercadoPago.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_shared_Forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/shared/Forms */ "./components/shared/Forms.js");
/* harmony import */ var js_cookie_dist_js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie/dist/js.cookie */ "js-cookie/dist/js.cookie");
/* harmony import */ var js_cookie_dist_js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie_dist_js_cookie__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/salmeron/Sites/deepfuture/components/MercadoPago.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // import mercadopago from "mercadopago";

const MercadoPagu = tier => {
  const {
    0: displayMessage,
    1: setMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: showMessage,
    1: setShowMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: status,
    1: setStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: readyToPay,
    1: isReadyToPay
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  let email;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {// mercadopago.configure({
    //   access_token:
    //     "TEST-6846732972230100-051121-140a3e7c6e98731335172f00639b3a59-566499606",
    // });
    // let preference = {
    //   items: [
    //     {
    //       title: "Taller autogestivo",
    //       unit_price: 1400,
    //       quantity: 1,
    //     },
    //   ],
    // };
    // mercadopago.preferences
    //   .create(preference)
    //   .then(function (response) {
    //     // Este valor reemplazará el string "$$init_point$$" en tu HTML
    //     console.log(response);
    //     // global.init_point = response.body.init_point;
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }, []);

  const call = async () => {
    setStatus("sending");
    let requestOptions = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": "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"
      },
      body: JSON.stringify({
        updateEnabled: true,
        email: email.value,
        listIds: [7],
        attributes: {
          Tier1: true
        }
      })
    };
    const response = await fetch("https://api.sendinblue.com/v3/contacts", requestOptions);
    const data = await response;
    console.log(data);
    data.status !== 400 ? (setMessage("Gracias por comprar! Te llegará un email con tu producto"), setStatus("success")) : (setMessage("Algo salió mal"), setStatus("error"));
  };

  const validate = () => {
    console.log("validate called");

    if (!email.value) {
      setShowMessage(true), isReadyToPay(false), setMessage("Ingresa tu email");
      return false;
    } else if (!components_shared_Forms__WEBPACK_IMPORTED_MODULE_2__["isEmail"].test(email.value)) {
      setShowMessage(true), isReadyToPay(false), setMessage("Email en formato incorrecto");
      return false;
    } else {
      setShowMessage(false), isReadyToPay(true);
      return true;
    }
  };

  const submit = () => {
    validate() && js_cookie_dist_js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("comprarTier1", "true");
    js_cookie_dist_js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("userEmail", email.value);
    window.location.href = "https://www.mercadopago.com.mx/checkout/v1/redirect?pref_id=566499606-ea18cbbb-bcfb-4dc5-9dc1-1061975d01fc";
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Warning, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, "Escribe tu email", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, "Escr\xEDbelo con especial atenci\xF3n ya que a este correo enviaremos tu producto una vez realizada la compra."))), status === "sending" && __jsx(components_shared_Forms__WEBPACK_IMPORTED_MODULE_2__["Message"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 32
    }
  }, "Enviando correo..."), showMessage ? __jsx(components_shared_Forms__WEBPACK_IMPORTED_MODULE_2__["Message"], {
    error: true,
    dangerouslySetInnerHTML: {
      __html: displayMessage
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }) : null, status === "error" && __jsx(components_shared_Forms__WEBPACK_IMPORTED_MODULE_2__["Message"], {
    error: true,
    dangerouslySetInnerHTML: {
      __html: displayMessage
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }), status === "success" && __jsx(components_shared_Forms__WEBPACK_IMPORTED_MODULE_2__["Message"], {
    success: true,
    dangerouslySetInnerHTML: {
      __html: displayMessage
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }), status !== "success" && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(components_shared_Forms__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }, "email"), __jsx(components_shared_Forms__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    ref: node => email = node,
    type: "email",
    placeholder: "Email*",
    onChange: validate,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  })), __jsx(components_shared_Forms__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    disabled: !readyToPay,
    onClick: submit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  }, "Ir al pago")));
};

/* harmony default export */ __webpack_exports__["default"] = (MercadoPagu);
const Warning = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  margin-bottom: 10px;

  span {
    opacity: 0.8;
    font-size: 1.5rem;
    line-height: 100%;
  }
`;

/***/ }),

/***/ "./components/NewsletterPopup.js":
/*!***************************************!*\
  !*** ./components/NewsletterPopup.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var public_assets_img_layout_cross_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! public/assets/img/layout/cross.svg */ "./public/assets/img/layout/cross.svg");
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-scroll-lock */ "body-scroll-lock");
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_scroll_lock__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_SalesForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/SalesForm */ "./components/SalesForm.js");
var _jsxFileName = "/Users/salmeron/Sites/deepfuture/components/NewsletterPopup.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const NewsletterPopup = ({
  setShowPopup
}) => {
  const {
    0: internalShowPopup,
    1: setInternalShowPopup
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    popupShow();
  }, []);

  const popupShow = () => {
    // Disable scroll
    const targetElement = document.querySelector("#NewsletterPopup"); //dummy

    Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_3__["disableBodyScroll"])(targetElement);
    setInternalShowPopup(true);
  };

  const unlockScreen = () => {
    const targetElement = document.querySelector("#NewsletterPopup"); //dummy

    Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_3__["enableBodyScroll"])(targetElement);
    setInternalShowPopup(false);
    setShowPopup(false);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Wrapper, {
    clickable: internalShowPopup,
    id: "NewsletterPopup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(components_SalesForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx(CrossContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(public_assets_img_layout_cross_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: unlockScreen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }))), __jsx(Background, {
    visible: internalShowPopup,
    onClick: unlockScreen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (NewsletterPopup);
const Background = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "NewsletterPopup__Background",
  componentId: "ad5xhy-0"
})(["opacity:", ";position:fixed;pointer-events:", ";left:0;bottom:0;right:0;top:0;z-index:13;transition:opacity 0.4s ease;background-color:rgba(0,0,0,0.6);"], props => props.visible ? 0.6 : 0, props => props.visible ? "auto" : "none");
const CrossContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "NewsletterPopup__CrossContainer",
  componentId: "ad5xhy-1"
})(["width:50px;height:50px;padding:12px;position:absolute;top:2%;right:1%;svg{width:100%;cursor:pointer;}"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "NewsletterPopup__Wrapper",
  componentId: "ad5xhy-2"
})(["pointer-events:", ";opacity:", ";width:80%;max-width:1000px;top:50%;left:50%;transform:translateX(-50%) translateY(-50%) ", ";position:fixed;transition:opacity 0.4s ease,transform 0.5s ease;z-index:14;"], props => props.clickable ? "auto" : "none", props => props.clickable ? "1" : "0", props => props.clickable ? "translateY(0%)" : "translateY(5%)");

/***/ }),

/***/ "./components/PayPopup.js":
/*!********************************!*\
  !*** ./components/PayPopup.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var public_assets_img_layout_cross_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! public/assets/img/layout/cross.svg */ "./public/assets/img/layout/cross.svg");
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-scroll-lock */ "body-scroll-lock");
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_scroll_lock__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_shared_Dangerously__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/shared/Dangerously */ "./components/shared/Dangerously.js");
/* harmony import */ var components_shared_PayCollector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/shared/PayCollector */ "./components/shared/PayCollector.js");
/* harmony import */ var components_MercadoPago__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/MercadoPago */ "./components/MercadoPago.js");
/* harmony import */ var public_assets_img_layout_logos_mercadopago_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! public/assets/img/layout/logos/mercadopago.svg */ "./public/assets/img/layout/logos/mercadopago.svg");
var _jsxFileName = "/Users/salmeron/Sites/deepfuture/components/PayPopup.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const PayPopup = ({
  setShowPay,
  product
}) => {
  const {
    0: internalShowPopup,
    1: setInternalShowPopup
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    popupShow();
    console.log(product);
  }, []);

  const popupShow = () => {
    // Disable scroll
    const targetElement = document.querySelector("#PayPopup"); //dummy

    Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_3__["disableBodyScroll"])(targetElement);
    setInternalShowPopup(true);
  };

  const unlockScreen = () => {
    const targetElement = document.querySelector("#PayPopup"); //dummy

    Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_3__["enableBodyScroll"])(targetElement);
    setInternalShowPopup(false);
    setShowPay(false);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Wrapper, {
    clickable: internalShowPopup,
    id: "PayPopup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx(Left, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(components_shared_Dangerously__WEBPACK_IMPORTED_MODULE_4__["H2"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, `Taller <b>${product.title}</b>`), __jsx(components_shared_Dangerously__WEBPACK_IMPORTED_MODULE_4__["P"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, product.description), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, product.price)), __jsx(Right, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(components_MercadoPago__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }), __jsx(Transacciones, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, "Transacciones seguras con"), __jsx(public_assets_img_layout_logos_mercadopago_svg__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  })))), __jsx(Background, {
    visible: internalShowPopup,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx(CrossContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx(public_assets_img_layout_cross_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: unlockScreen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (PayPopup);
const Transacciones = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PayPopup__Transacciones",
  componentId: "sc-5ktoph-0"
})(["display:flex;align-items:center;svg{max-width:45px;margin-left:10px;}"]);
const Left = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PayPopup__Left",
  componentId: "sc-5ktoph-1"
})(["padding-right:5%;font-weight:400;p{max-width:80%;}span{font-size:2.6rem;margin-top:10px;display:block;color:", ";}"], props => props.theme.colors.accent);
const CardOptions = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PayPopup__CardOptions",
  componentId: "sc-5ktoph-2"
})(["display:flex;img{max-height:20px;}"]);
const Right = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PayPopup__Right",
  componentId: "sc-5ktoph-3"
})(["h4{font-size:2rem;}h5{margin:10px 0 5px 0;}"]);
const CrossContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PayPopup__CrossContainer",
  componentId: "sc-5ktoph-4"
})(["width:50px;height:50px;padding:12px;position:absolute;top:20px;right:20px;svg{width:100%;cursor:pointer;}"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PayPopup__Wrapper",
  componentId: "sc-5ktoph-5"
})(["pointer-events:", ";opacity:", ";width:80%;max-width:1200px;top:50%;left:50%;transform:translateX(-50%) translateY(-50%) ", ";position:fixed;transition:opacity 0.4s ease,transform 0.5s ease;z-index:14;display:flex;"], props => props.clickable ? "auto" : "none", props => props.clickable ? "1" : "0", props => props.clickable ? "translateY(0%)" : "translateY(5%)");
const Background = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PayPopup__Background",
  componentId: "sc-5ktoph-6"
})(["opacity:", ";position:fixed;pointer-events:", ";left:0;bottom:0;right:0;top:0;z-index:13;transition:opacity 0.4s ease;background-color:", ";"], props => props.visible ? 1 : 0, props => props.visible ? "auto" : "none", props => props.theme.colors.background);

/***/ }),

/***/ "./components/SalesForm.js":
/*!*********************************!*\
  !*** ./components/SalesForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_shared_Dangerously__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/shared/Dangerously */ "./components/shared/Dangerously.js");
/* harmony import */ var components_shared_SalesCollector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/shared/SalesCollector */ "./components/shared/SalesCollector.js");
var _jsxFileName = "/Users/salmeron/Sites/deepfuture/components/SalesForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function SalesForm() {
  return __jsx(Form, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(Column, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "Nosotros te contactaremos"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "D\xE9janos tus datos y te contactar\xE1 un asesor de ventas")), __jsx(Column, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx(components_shared_SalesCollector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SalesForm);
const Form = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SalesForm__Form",
  componentId: "vloynh-0"
})(["background-color:", ";grid-column:3 / span 8;border-radius:5px;padding:5% 6.5%;display:flex;justify-content:space-between;width:100%;transition:all 0.3s ease-in;pointer-events:auto;"], props => props.theme.colors.accent);
const Column = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SalesForm__Column",
  componentId: "vloynh-1"
})(["max-width:330px;width:100%;color:", ";:nth-of-type(1){padding-right:5%;}h4{font-weight:300;font-size:3rem;margin-bottom:23px;b{font-weight:500;}}p{opacity:1 !important;}"], props => props.theme.colors.foreground);

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var public_assets_img_layout_logos_dfilogo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! public/assets/img/layout/logos/dfilogo.svg */ "./public/assets/img/layout/logos/dfilogo.svg");
/* harmony import */ var components_shared_LeadCollector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/shared/LeadCollector */ "./components/shared/LeadCollector.js");
var _jsxFileName = "/Users/salmeron/Sites/deepfuture/components/header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Header({
  hasLoaded,
  isOpen,
  closeNav,
  locale,
  route
}) {
  const backUp = e => {
    closeNav();
    route === "/" && (e.preventDefault(), document.getElementById("land").scrollIntoView({
      behavior: "smooth"
    }));
  };

  return __jsx(TopHeader, {
    reveal: hasLoaded,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(HeaderContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(LogoLink, {
    onClick: backUp,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, "DFI"), __jsx(public_assets_img_layout_logos_dfilogo_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }))), __jsx(Form, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(components_shared_LeadCollector__WEBPACK_IMPORTED_MODULE_4__["default"], {
    short: true,
    collectorId: "smallCollector",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);
const HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "header__HeaderContainer",
  componentId: "sc-12e98ec-0"
})(["margin:0px auto;max-width:1500px;width:100%;display:flex;justify-content:space-between;"]);
const TopHeader = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.header.withConfig({
  displayName: "header__TopHeader",
  componentId: "sc-12e98ec-1"
})(["background-color:", ";position:fixed;width:100%;top:0;left:0;right:0;padding:11px 50px;display:flex;align-items:center;z-index:12;height:78px;opacity:", ";transition:opacity 0.3s ease 0.3s;box-shadow:", ";"], props => props.theme.colors.background, props => props.reveal ? 1 : 0, props => `9px 9px 25px ${props.theme.colors.darkshadow}`);
const LogoLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a.withConfig({
  displayName: "header__LogoLink",
  componentId: "sc-12e98ec-2"
})(["display:flex;grid-column:1 / span 2;max-width:130px;margin:0;cursor:pointer;color:inherit;text-decoration:none;pointer-events:auto;h1{font-size:0;}svg{max-width:70px;width:100%;path{fill:", ";}}"], props => props.theme.colors.white);
const Form = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "header__Form",
  componentId: "sc-12e98ec-3"
})(["width:100%;max-width:500px;align-self:flex-end;display:flex;"]);

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./components/header.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CookieMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CookieMessage */ "./components/CookieMessage.js");
/* harmony import */ var utils_analytics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/analytics */ "./utils/analytics.js");
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-gtm-module */ "react-gtm-module");
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_gtm_module__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_facebook_pixel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-facebook-pixel */ "react-facebook-pixel");
/* harmony import */ var react_facebook_pixel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_facebook_pixel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! body-scroll-lock */ "body-scroll-lock");
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(body_scroll_lock__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_NewsletterPopup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/NewsletterPopup */ "./components/NewsletterPopup.js");
/* harmony import */ var components_PayPopup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/PayPopup */ "./components/PayPopup.js");
/* harmony import */ var public_assets_img_layout_logos_dfiimago_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! public/assets/img/layout/logos/dfiimago.svg */ "./public/assets/img/layout/logos/dfiimago.svg");
var _jsxFileName = "/Users/salmeron/Sites/deepfuture/components/layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












/* harmony default export */ __webpack_exports__["default"] = (({
  children,
  toggleLang,
  checkForConsent,
  consentToCookies,
  hasToConsent,
  hasLoaded,
  locale
}) => {
  const {
    0: isOpen,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isHome,
    1: setIsHome
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: isAbout,
    1: setIsAbout
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: headerTitle,
    1: setTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: showArrow,
    1: setShowArrow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: showConsentMessage,
    1: setShowConsentMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: showPopup,
    1: setShowPopup
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: showPay,
    1: setShowPay
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const mouse = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])([1200, 1]);
  const onMouseMove = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(({
    clientX: x,
    clientY: y
  }) => mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2], [mouse.current]);
  const onTouchMove = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    const touch = e.changedTouches[0];
    var x = touch.clientX;
    var y = touch.clientY;
    mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2];
  }, [mouse.current]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // GTM
    const tagManagerArgs = {
      gtmId: "GTM-000000"
    };
    react_gtm_module__WEBPACK_IMPORTED_MODULE_6___default.a.initialize(tagManagerArgs); // ReactPixel
    // const options = {
    //   autoConfig: true,
    //   debug: false,
    // };
    // ReactPixel.init("506854653278097", null, options);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    //Google Analytics
    if (!window.GA_INITIALIZED) {
      Object(utils_analytics__WEBPACK_IMPORTED_MODULE_5__["initGA"])();
      window.GA_INITIALIZED = true;
    }

    Object(utils_analytics__WEBPACK_IMPORTED_MODULE_5__["logPageView"])(); // ReactPixel
    // ReactPixel.pageView(); // For tracking page view

    if (router.route === "/" || router.route === "/en") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [router.route]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (showConsentMessage) {
      document.body.onscroll = function () {
        checkScroll();
      };
    }
  }, []); // useEffect(() => {
  //   let targetElement = document.querySelector("#Nav");
  //   if (isOpen) {
  //     disableBodyScroll(targetElement);
  //   } else {
  //     enableBodyScroll(targetElement);
  //   }
  // }, [isOpen]);

  const checkScroll = () => {
    if (document.body.scrollTop > 100 || window.scrollY > 100) {
      document.body.onscroll = null; // document.querySelector("#Clipper").onscroll = null;

      checkForConsent();
      setShowConsentMessage(false);
    }
  };

  const toggleNav = () => {
    setOpen(!isOpen);
  };

  const closeNav = () => {
    setOpen(false);
  };

  const doConsentToCookies = () => {
    consentToCookies();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(PageWrapper, {
    id: "Wrapper" // onMouseMove={isHome | isAbout ? onMouseMove : undefined}
    // onTouchMove={isHome | isAbout ? onTouchMove : undefined}
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, !isHome && __jsx(_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isOpen: isOpen,
    headerTitle: headerTitle,
    hasLoaded: hasLoaded,
    closeNav: closeNav,
    locale: locale,
    route: router.route,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(children, {
    setTitle: setTitle,
    hasLoaded: hasLoaded,
    mouse: mouse,
    setShowPopup: setShowPopup
  }), __jsx(_CookieMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    locale: locale,
    doConsentToCookies: doConsentToCookies,
    hasToConsent: hasToConsent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }), __jsx(BodyOverflow, {
    isOpen: isOpen,
    hasLoaded: hasLoaded,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  }), showPopup && __jsx(components_NewsletterPopup__WEBPACK_IMPORTED_MODULE_9__["default"], {
    setShowPopup: setShowPopup,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 23
    }
  }), __jsx(Footer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 9
    }
  }, "\xA9 Deep Future Institute, 2020", __jsx(public_assets_img_layout_logos_dfiimago_svg__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 11
    }
  }))));
});
const BodyOverflow = styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"]`
  .TopBar{
    box-shadow: 1px 1px 4px ${props => props.theme.colors.accent};
  }
  @media (max-width: 600px), (max-height:450px) {
    .react-reveal {
    animation: none !important;
    opacity: 1 !important;
    }
    #Wrapper{
      overflow: ${props => props.hasLoaded ? "unset" : "hidden"};
      height:${props => props.hasLoaded ? "unset" : "100%"};
    }
    body {
    overflow-y: ${props => props.hasLoaded ? "auto" : "hidden"};
      &:after,&:before{
        content: " ";
        position: fixed;
        right: 0;
        left: 0;
        height: 18px;
        z-index:100;
        background-color: ${props => props.theme.colors.background};
      }
      &:before {
        top:0;
      }
      &:after {
        bottom:0;
      }
    }  
  }
`;
const Footer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.footer.withConfig({
  displayName: "layout__Footer",
  componentId: "sc-18mrapy-0"
})(["display:flex;width:100%;max-width:1500px;margin:0 auto;justify-content:space-between;color:", ";font-size:1.5rem;padding-bottom:3%;align-items:center;svg{width:35px;}"], props => props.theme.colors.foreground_low);
const BackgroundOpacity = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "layout__BackgroundOpacity",
  componentId: "sc-18mrapy-1"
})(["background-color:", ";opacity:", ";position:fixed;pointer-events:", ";left:0;bottom:0;right:0;top:0;z-index:13;transition:opacity 0.4s ease;"], props => props.theme.colors.background, props => props.visible ? 0.6 : 0, props => props.visible ? "auto" : "none");
const PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "layout__PageWrapper",
  componentId: "sc-18mrapy-2"
})(["top:-3px;position:relative;width:100%;flex-direction:column;display:flex;justify-content:flex-start;color:", ";background-color:", ";"], props => props.theme.colors.foreground, props => props.theme.colors.background);
const Border = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "layout__Border",
  componentId: "sc-18mrapy-3"
})(["opacity:1;pointer-events:none;z-index:99;width:calc(100% - 36px);height:calc(100% - 36px);background-color:none;position:fixed;left:18px;top:18px;right:18px;bottom:18px;margin:0 auto;max-width:1504px;mix-blend-mode:exclusion;transition:opacity 0.3s ease-in,border 0.3s ease-in;border:", ";@media (max-width:600px),(max-height:450px){mix-blend-mode:normal;}"], props => `${props.theme.stroke} solid ${props.theme.colors.foreground}`);

/***/ }),

/***/ "./components/shared/Dangerously.js":
/*!******************************************!*\
  !*** ./components/shared/Dangerously.js ***!
  \******************************************/
/*! exports provided: H1, P, H2, H3, H4, B, Blockquote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H1", function() { return H1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H2", function() { return H2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H3", function() { return H3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H4", function() { return H4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blockquote", function() { return Blockquote; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_createMarkup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/createMarkup */ "./utils/createMarkup.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/salmeron/Sites/deepfuture/components/shared/Dangerously.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const H1 = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 3
    }
  }, __jsx("h1", _extends({}, props, {
    dangerouslySetInnerHTML: Object(utils_createMarkup__WEBPACK_IMPORTED_MODULE_1__["default"])(children),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  })));
};
const P = (_ref2) => {
  let {
    children
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["children"]);

  return __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 3
    }
  }, __jsx("p", _extends({}, props, {
    dangerouslySetInnerHTML: Object(utils_createMarkup__WEBPACK_IMPORTED_MODULE_1__["default"])(children),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  })));
};
const H2 = (_ref3) => {
  let {
    children
  } = _ref3,
      props = _objectWithoutProperties(_ref3, ["children"]);

  return __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 3
    }
  }, __jsx("h2", _extends({}, props, {
    dangerouslySetInnerHTML: Object(utils_createMarkup__WEBPACK_IMPORTED_MODULE_1__["default"])(children),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  })));
};
const H3 = (_ref4) => {
  let {
    children
  } = _ref4,
      props = _objectWithoutProperties(_ref4, ["children"]);

  return __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 3
    }
  }, __jsx("h3", _extends({}, props, {
    dangerouslySetInnerHTML: Object(utils_createMarkup__WEBPACK_IMPORTED_MODULE_1__["default"])(children),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  })));
};
const H4 = (_ref5) => {
  let {
    children
  } = _ref5,
      props = _objectWithoutProperties(_ref5, ["children"]);

  return __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 3
    }
  }, __jsx("h4", _extends({}, props, {
    dangerouslySetInnerHTML: Object(utils_createMarkup__WEBPACK_IMPORTED_MODULE_1__["default"])(children),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  })));
};
const B = (_ref6) => {
  let {
    children
  } = _ref6,
      props = _objectWithoutProperties(_ref6, ["children"]);

  return __jsx("b", _extends({}, props, {
    dangerouslySetInnerHTML: Object(utils_createMarkup__WEBPACK_IMPORTED_MODULE_1__["default"])(children),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 3
    }
  }));
};
const Blockquote = (_ref7) => {
  let {
    children
  } = _ref7,
      props = _objectWithoutProperties(_ref7, ["children"]);

  return __jsx("blockquote", _extends({}, props, {
    dangerouslySetInnerHTML: Object(utils_createMarkup__WEBPACK_IMPORTED_MODULE_1__["default"])(children),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 3
    }
  }));
};

/***/ }),

/***/ "./components/shared/Forms.js":
/*!************************************!*\
  !*** ./components/shared/Forms.js ***!
  \************************************/
/*! exports provided: Message, Label, Input, Select, Button, selectStyles, isEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectStyles", function() { return selectStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmail", function() { return isEmail; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Message = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Forms__Message",
  componentId: "qrpl3s-0"
})(["color:", ";font-size:", ";padding-bottom:5px;", ";", ";@media (max-width:600px),(max-height:450px){font-size:1.5rem;}"], props => props.error ? props.theme.colors.error : props.success ? props.theme.colors.successf : props.theme.colors.foreground, props => props.success ? "1.8rem" : "1.5rem", props => props.short && !props.success && `position: absolute;  
     bottom: -30px;
     padding: 10px;
     border-radius: 3px;
     background-color: ${props.theme.colors.background};
    `, props => props.short && props.success && `width: 100%;
     text-align:right;
    `);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.label.withConfig({
  displayName: "Forms__Label",
  componentId: "qrpl3s-1"
})(["width:", ";margin:0;span{font-size:0;height:0;width:0;position:absolute;}"], props => props.short ? "50%" : "100%");
const Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "Forms__Input",
  componentId: "qrpl3s-2"
})(["width:100%;padding:13px 18px 13px 26px;line-height:100%;background-color:", ";border-radius:", ";border:none;font-size:1.7rem;margin:4px 0;height:48px;color:", ";-webkit-appearance:textfield;appearance:textfield;::placeholder{padding-top:4px;color:#31302e;opacity:0.5;}"], props => props.theme.colors.foreground, props => props.short ? "4px 0px 0px 4px" : "4px", props => props.theme.colors.foreground_lowest);
const Select = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.select.withConfig({
  displayName: "Forms__Select",
  componentId: "qrpl3s-3"
})(["width:100%;padding:13px 18px 13px 26px;line-height:100%;background-color:", ";border-radius:", ";border:none;font-size:1.7rem;margin:4px 0;height:48px;color:", ";"], props => props.theme.colors.foreground, props => props.short ? "4px 0px 0px 4px" : "4px", props => props.theme.colors.foreground_lowest);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "Forms__Button",
  componentId: "qrpl3s-4"
})(["padding:14px 0%;margin:4px 0;text-align:center;width:", ";background-color:", ";color:", ";border:0;font-size:1.7rem;border-radius:", ";cursor:", ";transition:0.3s ease all;@media (hover:hover) and (pointer:fine){&:hover{background-color:", ";}}"], props => props.short ? "50%" : "100%", props => !props.disabled ? props.theme.colors.cta : props.theme.colors.foreground_low, props => props.theme.colors.background, props => props.short ? "0px 4px 4px 0px" : "4px", props => !props.disabled ? "pointer" : "no-drop", props => !props.disabled ? props.theme.colors.success : props.theme.colors.foreground_low);
const selectStyles = {
  option: provided => _objectSpread({}, provided, {
    color: "#4F4F4F",
    fontSize: "1.7rem"
  }),
  singleValue: provided => _objectSpread({}, provided, {
    color: "#4F4F4F"
  }),
  container: provided => _objectSpread({}, provided, {
    margin: "4px 0",
    height: "48px"
  }),
  control: provided => _objectSpread({}, provided, {
    height: "100%",
    border: 0
  }),
  valueContainer: provided => _objectSpread({}, provided, {
    padding: "1px 18px 13px 26px",
    lineHeight: "100%"
  }),
  placeholder: provided => _objectSpread({}, provided, {
    paddingTop: "4px",
    color: "#31302e",
    opacity: 0.5,
    padding: 0,
    margin: 0,
    fontSize: "1.7rem"
  })
};
const isEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/***/ }),

/***/ "./components/shared/LeadCollector.js":
/*!********************************************!*\
  !*** ./components/shared/LeadCollector.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_shared_Forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/shared/Forms */ "./components/shared/Forms.js");
/* harmony import */ var react_select___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select/ */ "react-select/");
/* harmony import */ var react_select___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_select___WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/salmeron/Sites/deepfuture/components/shared/LeadCollector.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const LeadCollector = ({
  complete,
  short,
  collectorId
}) => {
  const {
    0: displayMessage,
    1: setMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: showMessage,
    1: setShowMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: industryOption,
    1: setIndustryOption
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: status,
    1: setStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  let email, name;

  const handleIndustryChange = selectedIndustry => {
    setIndustryOption(selectedIndustry);
  };

  const call = async () => {
    setStatus("sending");
    let requestOptions = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": "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"
      },
      body: JSON.stringify({
        updateEnabled: false,
        email: email.value,
        listIds: [6],
        attributes: {
          FIRSTNAME: name ? name.value : " ",
          INDUSTRY: industryOption !== null ? industryOption.value : " "
        }
      })
    };
    const response = await fetch("https://api.sendinblue.com/v3/contacts", requestOptions);
    const data = await response.json();
    setMessage(data.id ? "Recibirás el reporte en tu correo! Éxito" : "El correo que ingresaste ya fue registrado");
    setStatus(data.id ? "success" : "error");
  };

  const submitComplete = () => {
    if (!name.value) {
      setShowMessage(true), setMessage("Ingresa tu nombre");
    } else if (!email.value) {
      setShowMessage(true), setMessage("Ingresa tu email");
    } else if (!components_shared_Forms__WEBPACK_IMPORTED_MODULE_1__["isEmail"].test(email.value)) {
      setShowMessage(true), setMessage("Email en formato incorrecto");
    } else {
      setShowMessage(false), call();
    }
  };

  const submitShort = () => {
    if (!email.value) {
      setShowMessage(true), setMessage("Ingresa tu email");
    } else if (!components_shared_Forms__WEBPACK_IMPORTED_MODULE_1__["isEmail"].test(email.value)) {
      setShowMessage(true), setMessage("Email en formato incorrecto");
    } else {
      setShowMessage(false), call();
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, status === "sending" && __jsx(components_shared_Forms__WEBPACK_IMPORTED_MODULE_1__["Message"], {
    short: short,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 32
    }
  }, "Enviando..."), showMessage && //Mensajes de validación
  __jsx(components_shared_Forms__WEBPACK_IMPORTED_MODULE_1__["Message"], {
    short: short,
    error: true,
    dangerouslySetInnerHTML: {
      __html: displayMessage
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }), status === "error" && __jsx(components_shared_Forms__WEBPACK_IMPORTED_MODULE_1__["Message"], {
    short: short,
    error: true,
    dangerouslySetInnerHTML: {
      __html: displayMessage
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }), status === "success" && __jsx(components_shared_Forms__WEBPACK_IMPORTED_MODULE_1__["Message"], {
    short: short,
    success: true,
    dangerouslySetInnerHTML: {
      __html: displayMessage
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }), status !== "success" && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(components_shared_Forms__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    short: short,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, "email"), __jsx(components_shared_Forms__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    ref: node => email = node,
    type: "email",
    placeholder: short ? "Tu correo" : "Email*",
    short: short,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  })), complete && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(components_shared_Forms__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, "nombre"), __jsx(components_shared_Forms__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    ref: node => name = node,
    type: "text",
    placeholder: "Nombre*",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  })), __jsx(components_shared_Forms__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  }, "industria"), __jsx(react_select___WEBPACK_IMPORTED_MODULE_2___default.a, {
    styles: components_shared_Forms__WEBPACK_IMPORTED_MODULE_1__["selectStyles"],
    placeholder: "Industria",
    instanceId: "Industria" + collectorId,
    isSearchable: false,
    options: [{
      value: "Aviación",
      label: "Aviación"
    }, {
      value: "Automotriz",
      label: "Automotriz"
    }, {
      value: "Cine",
      label: "Cine"
    }, {
      value: "Hospitalaria",
      label: "Hospitalaria"
    }],
    value: industryOption,
    onChange: handleIndustryChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }))), __jsx(components_shared_Forms__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    short: short,
    onClick: short ? submitShort : submitComplete,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  }, short && "Descargar PDF gratuito", complete && "Descargar gratis")));
};

/* harmony default export */ __webpack_exports__["default"] = (LeadCollector);

/***/ }),

/***/ "./components/shared/PayCollector.js":
/*!*******************************************!*\
  !*** ./components/shared/PayCollector.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/salmeron/Sites/deepfuture/components/shared/PayCollector.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const PayCollector = ({
  product
}) => {
  let device_session_id;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log(product);
    OpenPay.setId("mvdriagucpuwo6aalx4a");
    OpenPay.setApiKey("pk_deb040644dac428bb385cd5474b6383b");
    OpenPay.setSandboxMode(true);
    console.log("open pay in sandbox: " + OpenPay.getSandboxMode());
    device_session_id = OpenPay.deviceData.setup();
  }, []);

  const onSuccess = response => {
    alert("Operación exitosa");
    var content = `
    Id tarjeta: ${response.data.id}
    A nombre de: ${response.data.holder_name}
    Marca de tarjeta usada: ${response.data.brand}`;
    console.log(content);
    var chargeRequest = {
      source_id: response.data.id,
      method: "card",
      amount: 5,
      description: product.description,
      device_session_id: device_session_id // 'customer' : {
      //      'name' : name,
      //      'last_name' : last_name,
      //      'phone_number' : phone_number,
      //      'email' : email
      // }

    }; // Esto nos tira error, dice que charges no existe, creo que es por que es código de servidor
    // OpenPay.customers.charges.create(chargeRequest, function (error, charge) {
    //   console.log(error ? error : charge ? charge : "no hubo respuesta");
    // });
  };

  const onError = response => {
    alert("Fallo en la transacción");
    var content = `
    Estatus del error: ${response.data.status}
    Error: ${response.message}
    Marca de tarjeta usada: ${response.data.description}
    ID de la petición: ${response.data.request_id}`;
    console.log(content);
  };

  const createToken = (card_number, holder_name, expiration_year, expiration_month, cvv2) => OpenPay.token.create({
    card_number: "4111111111111111",
    holder_name: "Juan Perez Ramirez",
    expiration_year: "20",
    expiration_month: "12",
    cvv2: "110" // address: {
    //   city: "Querétaro",
    //   line3: "Queretaro",
    //   postal_code: "76900",
    //   line1: "Av 5 de Febrero",
    //   line2: "Roble 207",
    //   state: "Queretaro",
    //   country_code: "MX",
    // },

  }, onSuccess, onError);

  return __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: {
      email: "",
      holder_name: "",
      card_number: "",
      expiration_year: "",
      expiration_month: "",
      cvv2: ""
    },
    validate: values => {
      const errors = {};

      if (!values.email) {
        errors.email = "Email requerido";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email inválido";
      }

      if (!values.holder_name) {
        errors.holder_name = "Ingresa el nombre del titular";
      }

      if (!values.card_number) {
        errors.card_number = "Ingresa el número de tarjeta";
      } else if (!OpenPay.card.validateCardNumber(values.card_number)) {
        errors.card_number = "Numero de tarjeta inválido";
      }

      if (!values.expiration_month) {
        errors.expiration_month = "Ingresa mes de expiración";
      } else if (!values.expiration_year) {
        errors.expiration_month = "Ingresa año de expiración";
      } else if (!OpenPay.card.validateExpiry(values.expiration_month, values.expiration_year)) {
        errors.expiration_month = "Fecha de expiración inválida";
      }

      if (!values.cvv2) {
        errors.cvv2 = "Ingresa el código de seguridad";
      } else if (!OpenPay.card.validateCVC(values.cvv2)) {
        errors.cvv2 = "CVV inválido";
      } else if (!OpenPay.card.validateCVC(values.cvv2, values.card_number)) {
        errors.cvv2 = "CVV inválido para esta tarjeta";
      }

      return errors;
    },
    onSubmit: (values, {
      setSubmitting
    }) => {
      setTimeout(() => {
        // alert(JSON.stringify(values, null, 2));
        OpenPay.token.create({
          card_number: values.card_number,
          holder_name: values.holder_name,
          expiration_year: values.expiration_year,
          expiration_month: values.expiration_month,
          cvv2: values.cvv2,
          address: {
            city: "Querétaro",
            line3: "Queretaro",
            postal_code: "76900",
            line1: "Av 5 de Febrero",
            line2: "Roble 207",
            state: "Queretaro",
            country_code: "MX"
          }
        }, onSuccess, onError);
        setSubmitting(false);
      }, 400);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }, ({
    isSubmitting
  }) => __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 9
    }
  }, __jsx(FormStyled, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }
  }, "Email"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "email",
    name: "email",
    placeholder: "Tu Email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }
  }), __jsx(ErrorMessageS, {
    name: "email",
    component: "div",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 13
    }
  }), __jsx("label", {
    htmlFor: "holder_name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }
  }, "Nombre"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "holder_name",
    name: "holder_name",
    placeholder: "Como aparece en la tarjeta",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 13
    }
  }), __jsx(ErrorMessageS, {
    name: "holder_name",
    component: "div",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }
  }), __jsx("label", {
    htmlFor: "card_number",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }
  }, "N\xFAmero de tarjeta"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "card_number",
    name: "card_number",
    placeholder: "N\xFAmero de tarjeta",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }
  }), __jsx(ErrorMessageS, {
    name: "card_number",
    component: "div",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }
  }), __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 13
    }
  }, "Fecha de expiraci\xF3n"), __jsx(Date, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 15
    }
  }, __jsx("label", {
    htmlFor: "expiration_month",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 17
    }
  }, "Mes"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "expiration_month",
    name: "expiration_month",
    placeholder: "Mes",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 15
    }
  }, __jsx("label", {
    htmlFor: "expiration_year",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 17
    }
  }, "A\xF1o"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "expiration_year",
    name: "expiration_year",
    placeholder: "A\xF1o",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 17
    }
  }))), __jsx(ErrorMessageS, {
    name: "expiration_month",
    component: "div",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 13
    }
  }), __jsx(ErrorMessageS, {
    name: "expiration_year",
    component: "div",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 13
    }
  }), __jsx("label", {
    htmlFor: "cvv2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 13
    }
  }, "CVV"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "cvv2",
    name: "cvv2",
    placeholder: "CVV",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 13
    }
  }), __jsx(ErrorMessageS, {
    name: "cvv2",
    component: "div",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 13
    }
  }), __jsx("button", {
    type: "submit",
    disabled: isSubmitting,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 13
    }
  }, "Pagar"))));
};

const LeadCollector = ({
  complete,
  short,
  collectorId
}) => {
  const {
    0: displayMessage,
    1: setMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: showMessage,
    1: setShowMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: industryOption,
    1: setIndustryOption
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: status,
    1: setStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  const call = async () => {
    setStatus("sending");
    let requestOptions = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": "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"
      },
      body: JSON.stringify({
        updateEnabled: false,
        email: email.value,
        listIds: [6],
        attributes: {
          FIRSTNAME: name ? name.value : " ",
          INDUSTRY: industryOption !== null ? industryOption.value : " "
        }
      })
    };
    const response = await fetch("https://api.sendinblue.com/v3/contacts", requestOptions);
    const data = await response;
    console.log(data);
    data.status !== 400 ? (setMessage("Gracias! Un asesor te contactará dentro de 24 horas hábiles"), setStatus("success")) : (setMessage("Algo salió mal"), setStatus("error"));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, status === "sending" && __jsx(Message, {
    short: short,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 32
    }
  }, "Enviando..."), showMessage && //Mensajes de validación
  __jsx(Message, {
    short: short,
    error: true,
    dangerouslySetInnerHTML: {
      __html: displayMessage
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 9
    }
  }), status === "error" && __jsx(Message, {
    short: short,
    error: true,
    dangerouslySetInnerHTML: {
      __html: displayMessage
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 9
    }
  }), status === "success" && __jsx(Message, {
    short: short,
    success: true,
    dangerouslySetInnerHTML: {
      __html: displayMessage
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 9
    }
  }), status !== "success" && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Label, {
    short: short,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 13
    }
  }, "email"), __jsx(Input, {
    ref: node => email = node,
    type: "email",
    placeholder: short ? "Tu correo" : "Email*",
    short: short,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 13
    }
  })), complete && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 17
    }
  }, "nombre"), __jsx(Input, {
    ref: node => name = node,
    type: "text",
    placeholder: "Nombre*",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 17
    }
  })), __jsx(Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 17
    }
  }, "industria"), __jsx(Select, {
    styles: selectStyles,
    placeholder: "Industria",
    instanceId: "Industria" + collectorId,
    isSearchable: false,
    options: [{
      value: "Aviación",
      label: "Aviación"
    }, {
      value: "Automotriz",
      label: "Automotriz"
    }, {
      value: "Cine",
      label: "Cine"
    }, {
      value: "Hospitalaria",
      label: "Hospitalaria"
    }],
    value: industryOption,
    onChange: handleIndustryChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 17
    }
  }))), __jsx(Button, {
    short: short,
    onClick: short ? submitShort : submitComplete,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 11
    }
  }, short && "Descargar PDF gratuito", complete && "Descargar gratis")));
};

/* harmony default export */ __webpack_exports__["default"] = (PayCollector);
const ErrorMessageS = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"])`
  color: ${props => props.theme.colors.error};
`;
const FormStyled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  flex-direction: column;
`;
const Date = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  label {
    font-size: 0;
    position: absolute;
  }
`;

/***/ }),

/***/ "./components/shared/SalesCollector.js":
/*!*********************************************!*\
  !*** ./components/shared/SalesCollector.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_shared_Forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/shared/Forms */ "./components/shared/Forms.js");
/* harmony import */ var react_select___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select/ */ "react-select/");
/* harmony import */ var react_select___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_select___WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/salmeron/Sites/deepfuture/components/shared/SalesCollector.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const SalesCollector = () => {
  const {
    0: displayMessage,
    1: setMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: showMessage,
    1: setShowMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: employeeOption,
    1: setEmployeeOption
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: status,
    1: setStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  let email, name, company;

  const handleEmployeeChange = selectedEmployee => {
    setEmployeeOption(selectedEmployee);
  };

  const call = async () => {
    setStatus("sending");
    let requestOptions = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": "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"
      },
      body: JSON.stringify({
        updateEnabled: true,
        email: email.value,
        listIds: [9],
        attributes: {
          FIRSTNAME: name.value,
          COMPANY: company.value,
          EMPLOYEES: employeeOption.value
        }
      })
    };
    console.log(employeeOption);
    const response = await fetch("https://api.sendinblue.com/v3/contacts", requestOptions);
    const data = await response;
    console.log(data);
    data.status !== 400 ? (setMessage("Gracias! Un asesor te contactará dentro de 24 horas hábiles"), setStatus("success")) : (setMessage("Algo salió mal"), setStatus("error"));
  };

  const submitEnterprise = () => {
    if (!email.value) {
      setShowMessage(true), setMessage("Ingresa tu email");
    } else if (!name.value) {
      setShowMessage(true), setMessage("Ingresa tu nombre");
    } else if (!components_shared_Forms__WEBPACK_IMPORTED_MODULE_1__["isEmail"].test(email.value)) {
      setShowMessage(true), setMessage("Email en formato incorrecto");
    } else if (!company.value) {
      setShowMessage(true), setMessage("Ingresa tu empresa");
    } else if (employeeOption === null) {
      setShowMessage(true), setMessage("Selecciona tu número de empleados");
    } else {
      setShowMessage(false), call();
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, status === "sending" && __jsx(components_shared_Forms__WEBPACK_IMPORTED_MODULE_1__["Message"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 32
    }
  }, "Enviando..."), showMessage ? __jsx(components_shared_Forms__WEBPACK_IMPORTED_MODULE_1__["Message"], {
    error: true,
    dangerouslySetInnerHTML: {
      __html: displayMessage
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }) : null, status === "error" && __jsx(components_shared_Forms__WEBPACK_IMPORTED_MODULE_1__["Message"], {
    error: true,
    dangerouslySetInnerHTML: {
      __html: displayMessage
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }), status === "success" && __jsx(components_shared_Forms__WEBPACK_IMPORTED_MODULE_1__["Message"], {
    success: true,
    dangerouslySetInnerHTML: {
      __html: displayMessage
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }), status !== "success" && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(components_shared_Forms__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, "email"), __jsx(components_shared_Forms__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    ref: node => email = node,
    type: "email",
    placeholder: "Email*",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  })), __jsx(components_shared_Forms__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, "nombre"), __jsx(components_shared_Forms__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    ref: node => name = node,
    type: "text",
    placeholder: "Nombre*",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  })), __jsx(components_shared_Forms__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, "empresa"), __jsx(components_shared_Forms__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    ref: node => company = node,
    type: "text",
    placeholder: "Empresa*",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  })), __jsx(components_shared_Forms__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, "N\xFAmero de empleados"), __jsx(react_select___WEBPACK_IMPORTED_MODULE_2___default.a, {
    styles: components_shared_Forms__WEBPACK_IMPORTED_MODULE_1__["selectStyles"],
    placeholder: "N\xFAmero de empleados",
    instanceId: "Employees",
    isSearchable: false,
    options: [{
      value: "1-10",
      label: "1 - 10"
    }, {
      value: "10-100",
      label: "10 - 100"
    }, {
      value: "10-1000",
      label: "100 - 1000"
    }, {
      value: "+1000",
      label: "Más de 1000"
    }],
    value: employeeOption,
    onChange: handleEmployeeChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  })), __jsx(components_shared_Forms__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: submitEnterprise,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  }, "Contactar asesor")));
};

/* harmony default export */ __webpack_exports__["default"] = (SalesCollector);

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return _react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-top-loading-bar */ "react-top-loading-bar");
/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_top_loading_bar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/layout */ "./components/layout.js");
/* harmony import */ var styles_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styles/theme */ "./styles/theme.js");
/* harmony import */ var js_cookie_dist_js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie/dist/js.cookie */ "js-cookie/dist/js.cookie");
/* harmony import */ var js_cookie_dist_js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie_dist_js_cookie__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var public_locales_es_common_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! public/locales/es/common.json */ "./public/locales/es/common.json");
var public_locales_es_common_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! public/locales/es/common.json */ "./public/locales/es/common.json", 1);
/* harmony import */ var utils_LangContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/LangContext */ "./utils/LangContext.js");
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! body-scroll-lock */ "body-scroll-lock");
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(body_scroll_lock__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/Users/salmeron/Sites/deepfuture/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // import en from "public/locales/en/common.json";






class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  constructor(props) {
    super(props);

    _defineProperty(this, "toggleLang", lang => {
      let language = lang === "en" ? en : public_locales_es_common_json__WEBPACK_IMPORTED_MODULE_8__;
      js_cookie_dist_js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.set("chosenLang", lang);
      this.setState({
        locale: language
      });
    });

    _defineProperty(this, "handleRouteComplete", url => {
      var _myself = this;

      setTimeout(function () {
        _myself.LoadingBar.complete();
      }, 300);
    });

    _defineProperty(this, "handleRouteStart", url => {
      this.LoadingBar.continuousStart();
    });

    _defineProperty(this, "handleRouteError", (err, url) => {
      var _myself = this;

      setTimeout(function () {
        if (err.cancelled) {
          console.log(`${err} on route to ${url}`);
        }

        _myself.LoadingBar.complete();
      }, 300);
    });

    _defineProperty(this, "checkForConsent", () => {
      // Check if cookie message has been closed before
      var _C = js_cookie_dist_js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.get("showCookieMessage");

      if (_C === undefined) {
        this.setState({
          hasToConsent: true
        });
      } else if (_C === "false") {
        this.setState({
          hasToConsent: false
        });
      }
    });

    _defineProperty(this, "consentToCookies", () => {
      js_cookie_dist_js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.set("showCookieMessage", "false");
      this.setState({
        hasToConsent: false
      });
    });

    this.state = {
      // locale: props.router.route.includes("/en") ? en : es,
      locale: public_locales_es_common_json__WEBPACK_IMPORTED_MODULE_8__,
      hasToConsent: false,
      //return hasLoaded to false
      hasLoaded: true,
      readyToScroll: false
    };
  }

  authenticate() {
    return new Promise(resolve => setTimeout(resolve, 1500)); //1500
  }

  componentDidMount() {
    // Disable scroll
    // Esto es importante para el loading icon
    const targetElement = document.querySelector("#logo"); //dummy

    Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_10__["disableBodyScroll"])(targetElement); // Load Animation

    this.authenticate().then(() => {
      const bordered = document.getElementById("bordered");
      const logo = document.getElementById("logo");
      const revealer = document.getElementById("revealer");

      if (bordered) {
        setTimeout(() => {
          // transition out
          bordered.classList.add("hidden");
          logo.style.opacity = "0"; // bordered.style.transform = "scale(1)";
          // bordered.style.borderWidth = "2px";

          setTimeout(() => {
            revealer.style.opacity = "0";
            revealer.style.pointerEvents = "none";
            this.setState({
              hasLoaded: true
            }, () => console.log("Page hasLoaded"), Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_10__["enableBodyScroll"])(targetElement));
          }, 500);
          setTimeout(() => {
            // remove from DOM
            bordered.remove();
            revealer.remove();
            logo.remove();
          }, 3000);
        }, 500);
      }
    }); // router event listeners for loadingBar

    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on("routeChangeStart", this.handleRouteStart);
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on("routeChangeComplete", this.handleRouteComplete);
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on("routeChangeError", this.handleRouteError);
  }

  componentWillUnmount() {
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.off("routeChangeStart", this.handleRouteStart);
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.off("routeChangeComplete", this.handleRouteComplete);
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.off("routeChangeError", this.handleRouteError);
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
      theme: styles_theme__WEBPACK_IMPORTED_MODULE_6__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 7
      }
    }, __jsx(utils_LangContext__WEBPACK_IMPORTED_MODULE_9__["LangProvider"], {
      value: this.state.locale,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }
    }, __jsx(react_top_loading_bar__WEBPACK_IMPORTED_MODULE_4___default.a, {
      onRef: ref => this.LoadingBar = ref,
      height: 3,
      color: styles_theme__WEBPACK_IMPORTED_MODULE_6__["default"].colors.accent,
      className: "TopBar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 11
      }
    }), __jsx(components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
    }, __jsx(Component, _extends({
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

}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(MyApp));

/***/ }),

/***/ "./public/assets/img/layout/cross.svg":
/*!********************************************!*\
  !*** ./public/assets/img/layout/cross.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M1 1l16.505 15M17.505 1L1 16",
  stroke: "#F4F4F4",
  strokeWidth: 2,
  vectorEffect: "non-scaling-stroke"
});

function SvgCross(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    viewBox: "0 0 19 17",
    fill: "none"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgCross);

/***/ }),

/***/ "./public/assets/img/layout/logos/dfiimago.svg":
/*!*****************************************************!*\
  !*** ./public/assets/img/layout/logos/dfiimago.svg ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#F4F4F4",
  fillRule: "evenodd",
  d: "M49 62c38 0 48-32 48-32S87 1 49 1 1 30 1 30s10 32 48 32zm0-16a16 16 0 100-32 16 16 0 000 32z",
  clipRule: "evenodd"
});

function SvgDfiimago(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    fill: "none",
    viewBox: "0 0 98 63"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgDfiimago);

/***/ }),

/***/ "./public/assets/img/layout/logos/dfilogo.svg":
/*!****************************************************!*\
  !*** ./public/assets/img/layout/logos/dfilogo.svg ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#F4F4F4",
  fillRule: "evenodd",
  d: "M49 86c38.4 0 48-32.1 48-32.1S87.4 25 49 25 1 53.9 1 53.9 10.6 86 49 86zm0-16a16 16 0 100-32 16 16 0 000 32z",
  clipRule: "evenodd"
});

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#F4F4F4",
  d: "M110 55.3c0-9 2-16.3 6-21.7 4-5.4 9.4-8 16.3-8 5.5 0 10.1 2 13.7 6.3V2h15.3V85h-13.8l-.7-6.2a17.7 17.7 0 01-14.6 7.3c-6.7 0-12-2.7-16.2-8-4-5.5-6-13-6-22.7zm15.2 1.2c0 5.4 1 9.6 2.8 12.5a9 9 0 008 4.4c4.8 0 8-2 10-6.1v-23a10 10 0 00-9.8-6.1c-7.3 0-11 6-11 18.3zM176.7 85V38h-8.4V26.6h8.4v-2.7c.1-7.3 2.3-13 6.6-17S193.8 1 201.7 1c4.7 0 10.4 1 17.2 3.2L216.7 17c-3.4-1-6.1-1.7-8-2-1.9-.4-4-.5-6.1-.5-7 0-10.6 3.2-10.6 9.6v2.4h11.2V38H192v47h-15.3zm49.3 0h-15.2V26.5H226v58.3z"
});

function SvgDfilogo(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    fill: "none",
    viewBox: "0 0 227 87"
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgDfilogo);

/***/ }),

/***/ "./public/assets/img/layout/logos/mercadopago.svg":
/*!********************************************************!*\
  !*** ./public/assets/img/layout/logos/mercadopago.svg ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M61 19.8418C61 8.91571 47.3321 0 30.5 0C13.6679 0 0 8.91571 0 19.8418C0 20.1041 0 20.8907 0 21.0219C0 32.6035 11.9539 42 30.5 42C49.178 42 61 32.6035 61 21.0219C61 20.5848 61 20.3663 61 19.8418Z",
  fill: "#2D3277"
});

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M59.8574 19.842C59.8574 30.1562 46.7169 38.5038 30.544 38.5038C14.3271 38.5038 1.18665 30.1562 1.18665 19.842C1.18665 9.52773 14.3271 1.18018 30.5 1.18018C46.7169 1.18018 59.8574 9.52773 59.8574 19.842Z",
  fill: "#009EE3"
});

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M20.7874 13.9416C20.7874 13.9853 20.4798 14.2912 20.6556 14.5097C21.139 15.0779 22.5453 15.4275 23.9956 15.1216C24.8746 14.9468 25.9733 14.0727 27.0281 13.1986C28.1707 12.2808 29.3573 11.363 30.5 11.0134C31.7305 10.62 32.5216 10.7949 33.005 10.9697C33.5763 11.1445 34.2355 11.4941 35.2903 12.3245C37.3119 13.8105 45.3544 20.8469 46.7608 22.0269C47.9034 21.5025 52.8696 19.4046 59.6376 17.9187C59.0662 14.3349 56.8688 11.0134 53.5288 8.34741C48.8703 10.2704 43.201 11.3193 37.6196 8.60963C37.5756 8.60963 34.5871 7.16739 31.5987 7.2548C27.2038 7.3422 25.2701 9.2652 23.2485 11.2756L20.7874 13.9416Z",
  fill: "white"
});

var _ref4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M46.4532 22.7702C46.3653 22.6828 36.9604 14.51 34.8509 12.9367C33.6203 12.0189 32.9172 11.8004 32.214 11.7129C31.8185 11.6692 31.335 11.7129 30.9395 11.8441C29.9287 12.1063 28.6542 12.9804 27.5116 13.8982C26.325 14.8597 25.1823 15.7338 24.1715 15.9523C22.8531 16.2582 21.227 15.9086 20.4799 15.3841C20.1722 15.1656 19.9525 14.9471 19.8646 14.7286C19.6009 14.1167 20.0843 13.5922 20.1722 13.5048L22.7652 10.7077C23.0728 10.4018 23.3804 10.0959 23.6881 9.83365C22.8531 9.92106 22.062 10.1396 21.3149 10.3581C20.392 10.6203 19.4691 10.8826 18.5461 10.8826C18.1506 10.8826 16.129 10.5329 15.7335 10.4455C13.4042 9.78995 11.3386 9.17809 8.26228 7.73584C4.57064 10.4455 2.10954 13.8545 1.40637 17.6131C1.93375 17.7442 2.76876 18.0064 3.1643 18.0938C11.5144 19.9294 14.1074 21.8524 14.5908 22.2457C15.1182 21.6776 15.8214 21.3279 16.6564 21.3279C17.5793 21.3279 18.4143 21.8087 18.8977 22.508C19.3812 22.1146 20.0404 21.8087 20.8754 21.8087C21.2709 21.8087 21.6665 21.8961 22.062 22.0272C22.9849 22.3331 23.4683 22.9887 23.732 23.5569C24.0397 23.4257 24.4352 23.2946 24.8747 23.2946C25.3141 23.2946 25.7976 23.382 26.281 23.6006C27.8192 24.2561 28.0389 25.7421 27.9071 26.8784C27.995 26.8784 28.1268 26.8784 28.2587 26.8784C30.0605 26.8784 31.5548 28.3644 31.5548 30.1562C31.5548 30.7244 31.4229 31.2488 31.1593 31.7296C31.6427 31.9918 32.9172 32.6474 34.0159 32.5163C34.8948 32.3852 35.2464 32.1229 35.3783 31.9481C35.4662 31.817 35.5541 31.6859 35.4662 31.5985L33.093 29.0199C33.093 29.0199 32.6974 28.6703 32.8293 28.4955C32.9611 28.3644 33.1809 28.5392 33.3567 28.714C34.5433 29.7192 36.0375 31.2051 36.0375 31.2051C36.0814 31.2051 36.1693 31.4237 36.6967 31.5111C37.1801 31.5985 37.9712 31.5548 38.5425 31.074C38.6744 30.9429 38.8502 30.8118 38.9381 30.637C38.9381 30.637 38.9381 30.637 38.8941 30.637C39.5094 29.8503 38.8062 29.1073 38.8062 29.1073L36.0375 26.048C36.0375 26.048 35.642 25.6984 35.7738 25.5236C35.9057 25.3925 36.1254 25.5673 36.3012 25.7421C37.1801 26.4851 38.4107 27.7088 39.5973 28.8451C39.817 29.0199 40.8718 29.6318 42.2342 28.7577C43.0692 28.2332 43.245 27.534 43.201 27.0532C43.1571 26.3977 42.6297 25.9169 42.6297 25.9169L38.8941 22.1583C38.8941 22.1583 38.4986 21.8087 38.6304 21.6339C38.7623 21.5028 38.982 21.6776 39.1578 21.8524C40.3444 22.8576 43.5966 25.7858 43.5966 25.7858C43.6405 25.8295 44.7392 26.6162 46.1456 25.7421C46.629 25.4362 46.9366 24.9554 46.9806 24.3872C47.1564 23.3383 46.4532 22.7702 46.4532 22.7702Z",
  fill: "white"
});

var _ref5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M28.2587 27.5339C27.6874 27.5339 27.0281 27.8835 26.9402 27.8398C26.8963 27.7961 26.9842 27.5776 27.0281 27.4465C27.0721 27.3153 27.8632 24.999 25.9734 24.2123C24.5231 23.6005 23.6881 24.2997 23.3804 24.6057C23.2926 24.6931 23.2486 24.6931 23.2486 24.562C23.2047 24.1686 23.0289 23.0323 21.7983 22.639C20.0404 22.1145 18.8977 23.3382 18.6341 23.7753C18.5022 22.7701 17.6672 21.9834 16.6124 21.9834C15.4698 21.9834 14.5469 22.9012 14.5469 24.0375C14.5469 25.1738 15.4698 26.0916 16.6124 26.0916C17.1838 26.0916 17.6672 25.8731 18.0188 25.5235C18.0188 25.5235 18.0188 25.5672 18.0188 25.6109C17.9309 26.1353 17.7551 27.9272 19.6888 28.6702C20.4799 28.9761 21.1391 28.7576 21.6665 28.3643C21.8423 28.2331 21.8423 28.2768 21.8423 28.4517C21.7544 28.9324 21.8423 29.9376 23.2926 30.5058C24.3913 30.9428 25.0065 30.5058 25.446 30.1124C25.6218 29.9376 25.6658 29.9813 25.6658 30.2435C25.7097 31.5984 26.8523 32.691 28.2147 32.691C29.6211 32.691 30.8077 31.5547 30.8077 30.1124C30.8516 28.6702 29.665 27.5339 28.2587 27.5339Z",
  fill: "white"
});

var _ref6 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M46.8487 21.8085C43.9482 19.3174 37.268 13.5047 35.4662 12.1498C34.4114 11.3632 33.7082 10.9698 33.093 10.795C32.8293 10.7076 32.4337 10.6202 31.9503 10.6202C31.5108 10.6202 30.9835 10.7076 30.5 10.8824C29.3134 11.2321 28.1708 12.1936 27.0281 13.0676L26.9842 13.1113C25.9294 13.9417 24.8307 14.8158 24.0397 14.9906C23.6881 15.078 23.2925 15.1218 22.941 15.1218C22.018 15.1218 21.183 14.8595 20.8754 14.4662C20.8314 14.4225 20.8754 14.2914 20.9633 14.1603L23.5123 11.4506C25.4899 9.48388 27.3797 7.60458 31.7306 7.51718C31.8185 7.51718 31.8624 7.51718 31.9503 7.51718C34.6312 7.51718 37.3559 8.7409 37.6636 8.87201C40.2126 10.0957 42.8055 10.7076 45.4424 10.7076C48.1672 10.7076 51.0238 10.052 53.9683 8.6972C53.6167 8.43497 53.3091 8.12904 52.9575 7.86681C50.3646 9.00313 47.8595 9.57129 45.4863 9.57129C43.0252 9.57129 40.6081 9.00313 38.2349 7.82311C38.1031 7.7794 35.1146 6.38086 32.0382 6.38086C31.9503 6.38086 31.8624 6.38086 31.7745 6.38086C28.1268 6.46827 26.0613 7.7357 24.6989 8.87201C23.3365 8.91572 22.1938 9.22165 21.183 9.52758C20.2601 9.78981 19.4691 10.0083 18.678 10.0083C18.3703 10.0083 17.799 9.96463 17.7551 9.96463C16.8761 9.92092 12.3934 8.82831 8.8336 7.51718C8.48202 7.7794 8.13043 8.04163 7.77885 8.30386C11.5144 9.83351 16.0411 11.0135 17.4914 11.1009C17.8869 11.1446 18.3264 11.1884 18.7219 11.1884C19.6888 11.1884 20.6117 10.9261 21.5346 10.6639C22.062 10.5328 22.6773 10.358 23.2925 10.2269C23.1167 10.4017 22.941 10.5765 22.8091 10.7076L20.2162 13.5047C19.9964 13.7232 19.5569 14.2477 19.8646 14.9469C19.9964 15.2092 20.2162 15.4714 20.5238 15.6899C21.1391 16.0833 22.2378 16.3892 23.2486 16.3892C23.6441 16.3892 23.9957 16.3455 24.3473 16.2581C25.446 15.9958 26.5886 15.1218 27.7752 14.1603C28.7421 13.4173 30.1045 12.4558 31.1593 12.1498C31.4669 12.0624 31.8185 12.0187 32.0822 12.0187C32.1701 12.0187 32.258 12.0187 32.3458 12.0187C33.049 12.1061 33.7082 12.3247 34.8948 13.2425C37.0044 14.8158 46.4093 22.9886 46.4972 23.076C46.4972 23.076 47.1124 23.6004 47.0685 24.4308C47.0245 24.9116 46.7608 25.3486 46.3214 25.6108C45.9258 25.8731 45.4863 26.0042 45.0908 26.0042C44.4755 26.0042 44.0361 25.6982 43.9921 25.6982C43.9482 25.6545 40.7399 22.7263 39.5533 21.7648C39.3776 21.59 39.2018 21.4589 38.982 21.4589C38.8941 21.4589 38.8062 21.5026 38.7183 21.59C38.5425 21.8085 38.7623 22.1145 38.982 22.333L42.7616 26.0916C42.7616 26.0916 43.245 26.5286 43.2889 27.0968C43.3329 27.7086 43.0252 28.2331 42.41 28.6264C41.9705 28.9324 41.531 29.0635 41.0915 29.0635C40.5202 29.0635 40.1247 28.8013 40.0368 28.7576L39.5094 28.2331C38.5425 27.2716 37.4878 26.2664 36.7407 25.6545C36.5649 25.5234 36.3451 25.3486 36.1693 25.3486C36.0814 25.3486 35.9935 25.3923 35.9496 25.436C35.8617 25.5234 35.8178 25.6982 36.0375 25.9605C36.1254 26.0916 36.2133 26.179 36.2133 26.179L38.9381 29.2383C38.982 29.282 39.5094 29.8939 38.982 30.5494L38.8941 30.6805C38.8062 30.768 38.7183 30.8554 38.6304 30.9428C38.147 31.3361 37.5317 31.3798 37.268 31.3798C37.1362 31.3798 37.0044 31.3798 36.9165 31.3361C36.6528 31.2924 36.477 31.205 36.3891 31.1176L36.3451 31.0739C36.2133 30.8991 34.8069 29.5005 33.6643 28.5827C33.5324 28.4516 33.3127 28.2768 33.1369 28.2768C33.049 28.2768 32.9611 28.3205 32.8732 28.4079C32.6535 28.6701 33.0051 29.0198 33.1369 29.1509L35.4662 31.7295C35.4662 31.7732 35.4222 31.8169 35.3783 31.9043C35.2904 32.0354 35.0267 32.2976 34.1477 32.4287C34.0598 32.4287 33.928 32.4287 33.8401 32.4287C32.9611 32.4287 32.0382 31.9917 31.5548 31.7732C31.7745 31.2924 31.9064 30.8117 31.9064 30.2872C31.9064 28.3642 30.3242 26.8346 28.4345 26.7908C28.3905 26.7908 28.3466 26.7908 28.3026 26.7908C28.3466 25.9168 28.2587 24.256 26.5447 23.513C26.0613 23.2945 25.5778 23.2071 25.0944 23.2071C24.7428 23.2071 24.3473 23.2508 24.0397 23.3819C23.6881 22.6826 23.1167 22.2019 22.3257 21.9397C21.8862 21.8085 21.4907 21.7211 21.0512 21.7211C20.348 21.7211 19.6888 21.9397 19.1175 22.333C18.5461 21.6337 17.7111 21.2404 16.8322 21.2404C16.0411 21.2404 15.294 21.5463 14.7666 22.1145C14.0195 21.5463 11.1629 19.7544 3.42798 18.0062C3.03245 17.9188 2.19744 17.6566 1.67006 17.5255C1.58216 17.9625 1.49427 18.3559 1.45032 18.7929C1.45032 18.7929 2.85666 19.1426 3.16429 19.1863C11.075 20.9345 13.6679 22.7263 14.1074 23.076C13.9755 23.4256 13.8876 23.8189 13.8876 24.2123C13.8876 25.8294 15.2061 27.1405 16.8322 27.1405C17.008 27.1405 17.1837 27.1405 17.3595 27.0968C17.6232 28.2768 18.3703 29.1946 19.6009 29.6753C19.9525 29.8065 20.3041 29.8939 20.6556 29.8939C20.8754 29.8939 21.0951 29.8502 21.3149 29.8065C21.5346 30.3746 22.018 31.0739 23.1607 31.5109C23.5562 31.6857 23.9518 31.7295 24.3033 31.7295C24.611 31.7295 24.9186 31.6857 25.2263 31.5546C25.7536 32.8658 27.0281 33.6962 28.4345 33.6962C29.3574 33.6962 30.2803 33.3028 30.9395 32.6472C31.5108 32.9532 32.6974 33.5213 33.884 33.5213C34.0598 33.5213 34.1917 33.5213 34.3235 33.4776C35.5101 33.3465 36.0814 32.8658 36.3451 32.5161C36.3891 32.4724 36.433 32.385 36.477 32.2976C36.7407 32.385 37.0483 32.4287 37.4438 32.4287C38.1031 32.4287 38.7183 32.2102 39.3336 31.7295C39.9489 31.2924 40.3884 30.6368 40.4763 30.1124C40.4763 30.1124 40.4763 30.1124 40.4763 30.0687C40.696 30.1124 40.9157 30.1124 41.1355 30.1124C41.7947 30.1124 42.4539 29.8939 43.1131 29.5005C44.3437 28.7138 44.5634 27.6649 44.5195 27.0094C44.7392 27.0531 44.959 27.0968 45.1787 27.0968C45.794 27.0968 46.4093 26.922 47.0245 26.5286C47.7716 26.0479 48.2551 25.3049 48.299 24.4745C48.343 23.9064 48.2111 23.2945 47.9035 22.8137C49.9251 21.9397 54.5836 20.2352 60.0771 19.0115C60.0332 18.5744 59.9892 18.1811 59.9013 17.744C53.0454 19.0989 48.0793 21.2404 46.8487 21.8085ZM28.2587 32.4724C26.9842 32.4724 25.9294 31.4672 25.8855 30.1998C25.8855 30.1124 25.8855 29.8065 25.6218 29.8065C25.5339 29.8065 25.446 29.8502 25.3142 29.9376C25.0505 30.1998 24.6549 30.462 24.1276 30.462C23.9078 30.462 23.6441 30.4183 23.3365 30.2872C21.9741 29.7191 21.9741 28.8013 22.018 28.4516C22.018 28.3642 22.018 28.2331 21.9741 28.1457L21.8862 28.0583H21.7983C21.7104 28.0583 21.6665 28.102 21.5786 28.1457C21.183 28.4079 20.7875 28.539 20.4359 28.539C20.2162 28.539 19.9964 28.4953 19.7767 28.4079C17.9748 27.7086 18.1067 26.0479 18.1946 25.5234C18.1946 25.436 18.1946 25.3486 18.1067 25.3049L18.0188 25.2612L17.9309 25.3486C17.5793 25.6982 17.1398 25.8731 16.6564 25.8731C15.6456 25.8731 14.8105 25.0427 14.8105 24.0375C14.8105 23.0323 15.6456 22.2019 16.6564 22.2019C17.5793 22.2019 18.3703 22.9012 18.5022 23.8189L18.5461 24.2997L18.8098 23.8626C18.8538 23.8189 19.6009 22.6826 20.9633 22.6826C21.227 22.6826 21.4907 22.7263 21.7544 22.8137C22.8531 23.1634 23.0288 24.1249 23.0728 24.5619C23.0728 24.8241 23.2486 24.8241 23.2925 24.8241C23.3804 24.8241 23.4683 24.7804 23.5123 24.693C23.732 24.4745 24.1715 24.1249 24.8747 24.1249C25.1823 24.1249 25.5339 24.2123 25.8855 24.3434C27.6434 25.0864 26.8523 27.3153 26.8523 27.3153C26.7205 27.6649 26.6765 27.8398 26.8523 27.9272L26.9402 27.9709H26.9842C27.0721 27.9709 27.16 27.9272 27.3358 27.8835C27.5555 27.7961 27.951 27.6649 28.2587 27.6649C29.5771 27.6649 30.6319 28.7575 30.6319 30.025C30.6319 31.3798 29.5771 32.4724 28.2587 32.4724Z",
  fill: "#2D3277"
});

function SvgMercadopago(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 61,
    height: 42,
    viewBox: "0 0 61 42",
    fill: "none"
  }, props), _ref, _ref2, _ref3, _ref4, _ref5, _ref6);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgMercadopago);

/***/ }),

/***/ "./public/locales/es/common.json":
/*!***************************************!*\
  !*** ./public/locales/es/common.json ***!
  \***************************************/
/*! exports provided: nav, lang, cookie_message, error_page, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"nav\":[{\"title\":\"pitch\",\"link\":\"/pitch\"},{\"title\":\"nosotros\",\"link\":\"/nosotros\"},{\"title\":\"portafolio\",\"link\":\"/portafolio\"},{\"title\":\"contacto\",\"link\":\"#contact\"}],\"lang\":\"es\",\"cookie_message\":{\"title\":\"cookies bienvenidas\",\"p\":\"Solo usamos cookies para brindarte la mejor experiencia en nuestro sitio, pero puedes revisar nuestra \",\"link\":\"política de cookies\",\"p_continued\":\" e inhibirlas si prefieres. Si sigues navegando por el sitio asumiremos que estás de acuerdo con ellas.\"},\"error_page\":{\"headerTitle\":\"Error\",\"intro\":{\"title\":\"Lo sentimos!<br/> página no encontrada\",\"p\":\"Esta página no existe, por favor confirma que el URL es correcto.\"}}}");

/***/ }),

/***/ "./styles/theme.js":
/*!*************************!*\
  !*** ./styles/theme.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  colors: {
    background: "#1D1D1B",
    foreground: "#F4F4F4",
    foreground_low: "#C8C8C8",
    foreground_lower: "#D6D6D6",
    foreground_lowest: "#4F4F4F",
    cta: "#F7C951",
    accent: "#4F478B",
    error: "#CC2E44",
    success: "#27AE60",
    darklight: "rgba(90,78,238, 0.13)",
    darkshadow: "rgba(0,0,0,0.19)",
    lightlight: "rgba(255, 255, 255, 0.9)",
    lightshadow: "rgba(77, 76, 90, 0.19)"
  }
});

/***/ }),

/***/ "./utils/LangContext.js":
/*!******************************!*\
  !*** ./utils/LangContext.js ***!
  \******************************/
/*! exports provided: useLocaleContext, LangProvider, LangConsumer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLocaleContext", function() { return useLocaleContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangProvider", function() { return LangProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangConsumer", function() { return LangConsumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const LangContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
function useLocaleContext() {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(LangContext);
  return context;
}
const LangProvider = LangContext.Provider;
const LangConsumer = LangContext.Consumer;
/* harmony default export */ __webpack_exports__["default"] = (LangContext);

/***/ }),

/***/ "./utils/analytics.js":
/*!****************************!*\
  !*** ./utils/analytics.js ***!
  \****************************/
/*! exports provided: initGA, logPageView, logEvent, logException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGA", function() { return initGA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logPageView", function() { return logPageView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logEvent", function() { return logEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logException", function() { return logException; });
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-ga */ "react-ga");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_0__);

const initGA = () => {
  console.log("GA init");
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.initialize("UA-166268488-1");
};
const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`);
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.set({
    page: window.location.pathname
  });
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.pageview(window.location.pathname);
};
const logEvent = (category = "", action = "") => {
  console.log(`Logged event for: ${category}, ${action}`);

  if (category && action) {
    react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.event({
      category,
      action
    });
  }
};
const logException = (description = "", fatal = false) => {
  if (description) {
    react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.exception({
      description,
      fatal
    });
  }
};

/***/ }),

/***/ "./utils/createMarkup.js":
/*!*******************************!*\
  !*** ./utils/createMarkup.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createMarkup; });
function createMarkup(i) {
  return {
    __html: i
  };
}
;

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "body-scroll-lock":
/*!***********************************!*\
  !*** external "body-scroll-lock" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-scroll-lock");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "js-cookie/dist/js.cookie":
/*!*******************************************!*\
  !*** external "js-cookie/dist/js.cookie" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie/dist/js.cookie");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-facebook-pixel":
/*!***************************************!*\
  !*** external "react-facebook-pixel" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-facebook-pixel");

/***/ }),

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "react-gtm-module":
/*!***********************************!*\
  !*** external "react-gtm-module" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-gtm-module");

/***/ }),

/***/ "react-reveal/Fade":
/*!************************************!*\
  !*** external "react-reveal/Fade" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "react-select/":
/*!********************************!*\
  !*** external "react-select/" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select/");

/***/ }),

/***/ "react-top-loading-bar":
/*!****************************************!*\
  !*** external "react-top-loading-bar" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-top-loading-bar");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map