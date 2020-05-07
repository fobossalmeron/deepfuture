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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/DataItemsDark.js":
/*!*************************************!*\
  !*** ./components/DataItemsDark.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_shared_DataItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/shared/DataItem */ "./components/shared/DataItem.js");
/* harmony import */ var public_assets_img_layout_icons_time_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! public/assets/img/layout/icons/time.svg */ "./public/assets/img/layout/icons/time.svg");
/* harmony import */ var components_shared_MainGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/shared/MainGrid */ "./components/shared/MainGrid.js");
var _jsxFileName = "/Users/rodrigosalmeron/Sites/deepfuture/components/DataItemsDark.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const items = [{
  title: "Organiza la información<br/> y úsala para tu beneficio",
  description: "Aprendamos juntos del pasado y el presente para conocer mejor el futuro.",
  icon: __jsx(public_assets_img_layout_icons_time_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  })
}, {
  title: "Hazlo desde casa, <br/>en este momento",
  description: "This is content describing the first benefit of your product or service. It should act as a supporting description of the benefit statements you wrote above.",
  icon: __jsx(public_assets_img_layout_icons_time_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  })
}, {
  title: "Anticipa riesgos <br/>y oportunidades",
  description: "This is content describing the first benefit of your product or service. It should act as a supporting description of the benefit statements you wrote above.",
  icon: __jsx(public_assets_img_layout_icons_time_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  })
}, {
  title: "Asesórate con expertos",
  description: "This is content describing the first benefit of your product or service. It should act as a supporting description of the benefit statements you wrote above.",
  icon: __jsx(public_assets_img_layout_icons_time_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  })
}, {
  title: "Dimensiona el problema",
  description: "This is content describing the first benefit of your product or service. It should act as a supporting description of the benefit statements you wrote above.",
  icon: __jsx(public_assets_img_layout_icons_time_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  })
}];

function DataItemsWhite() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(DataSection, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }), items.map((item, i) => i < 3 && __jsx(components_shared_DataItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    dark: true,
    key: "dataItemWhite" + i,
    item: item,
    columns: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }))), __jsx(DataSection, {
    notoppadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }), " ", __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }), items.map((item, i) => i > 2 && __jsx(components_shared_DataItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    dark: true,
    key: "dataItemWhite" + i,
    item: item,
    columns: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (DataItemsWhite);
const DataSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(components_shared_MainGrid__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "DataItemsDark__DataSection",
  componentId: "am8ae9-0"
})(["p{color:", ";}"], props => props.theme.colors.foreground_low);

/***/ }),

/***/ "./components/DataItemsWhite.js":
/*!**************************************!*\
  !*** ./components/DataItemsWhite.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_shared_DataItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/shared/DataItem */ "./components/shared/DataItem.js");
/* harmony import */ var public_assets_img_layout_icons_time_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! public/assets/img/layout/icons/time.svg */ "./public/assets/img/layout/icons/time.svg");
/* harmony import */ var components_shared_MainGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/shared/MainGrid */ "./components/shared/MainGrid.js");
var _jsxFileName = "/Users/rodrigosalmeron/Sites/deepfuture/components/DataItemsWhite.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const items = [{
  title: "Prepárate<br/> para el futuro",
  description: "Analizar los escenarios que podrían ocurrir a corto y largo plazo te ayudará a organizar la información que necesitas para enfrentar nuevas problemáticas y reducir riesgos.",
  icon: __jsx(public_assets_img_layout_icons_time_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  })
}, {
  title: "Con la mejor<br/>información",
  description: "Encuentra claridad y certidumbre en estos tiempos de crisis humanitarias y financieras. Nuestro trabajo de investigación es el futuro y hacemos una constante evaluación de hechos del mundo para anticipar los riesgos y oportunidades.",
  icon: __jsx(public_assets_img_layout_icons_time_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  })
}, {
  title: "Y el equipo<br/>mejor preparado",
  description: "Nuestro equipo de expertos, prospectistas, investigadores, académicos y analistas tienen más de 12 años de experiencia ampliando y completando la percepción de la gravedad de la incertidumbre.",
  icon: __jsx(public_assets_img_layout_icons_time_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  })
}];

function DataItemsWhite() {
  return __jsx(DataSection, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, items.map((item, i) => __jsx(components_shared_DataItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    light: true,
    key: "dataItemWhite" + i,
    item: item,
    columns: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (DataItemsWhite);
const DataSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(components_shared_MainGrid__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "DataItemsWhite__DataSection",
  componentId: "sc-9oqea1-0"
})(["background-color:", ";color:", ";p{color:", ";}"], props => props.theme.colors.foreground, props => props.theme.colors.background, props => props.theme.colors.foreground_lowest);

/***/ }),

/***/ "./components/EmailCollector.js":
/*!**************************************!*\
  !*** ./components/EmailCollector.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-mailchimp-subscribe */ "react-mailchimp-subscribe");
/* harmony import */ var react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/rodrigosalmeron/Sites/deepfuture/components/EmailCollector.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const url = "https://studio.us19.list-manage.com/subscribe/post?u=c9d7bbb792de4cdbe363fad75&amp;id=434dbf9f3b";
const isEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const CustomForm = ({
  status,
  message,
  onValidated,
  enterprise,
  complete,
  short
}) => {
  const {
    0: displayMessage,
    1: setMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: showMessage,
    1: setShowMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  let email, name, industry, company, employees;

  const submitEnterprise = () => {
    if (!name.value) {
      setShowMessage(true), setMessage("Ingresa tu nombre");
    } else if (!lastname.value) {
      setShowMessage(true), setMessage("Ingresa tu apellido");
    } else if (!email.value) {
      setShowMessage(true), setMessage("Ingresa tu email");
    } else if (!isEmail.test(email.value)) {
      setShowMessage(true), setMessage("Email en formato incorrecto");
    } else {
      setShowMessage(false), onValidated({
        NAME: name.value,
        EMAIL: email.value,
        COMPANY: company.value,
        EMPLOYEES: employees.value
      });
    }
  };

  const submitComplete = () => {
    if (!name.value) {
      setShowMessage(true), setMessage("Ingresa tu nombre");
    } else if (!email.value) {
      setShowMessage(true), setMessage("Ingresa tu email");
    } else if (!isEmail.test(email.value)) {
      setShowMessage(true), setMessage("Email en formato incorrecto");
    } else {
      setShowMessage(false), onValidated({
        NAME: name.value,
        EMAIL: email.value,
        INDUSTRY: industry.value
      });
    }
  };

  const submitShort = () => {
    if (!email.value) {
      setShowMessage(true), setMessage("Ingresa tu email");
    } else if (!isEmail.test(email.value)) {
      setShowMessage(true), setMessage("Email en formato incorrecto");
    } else {
      setShowMessage(false), onValidated({
        EMAIL: email.value
      });
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, status === "sending" && __jsx(Message, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 32
    }
  }, "Enviando..."), showMessage ? __jsx(Message, {
    error: true,
    dangerouslySetInnerHTML: {
      __html: displayMessage
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }) : null, status === "error" && __jsx(Message, {
    error: true,
    dangerouslySetInnerHTML: {
      __html: message
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }), status === "success" && __jsx(Message, {
    success: true,
    dangerouslySetInnerHTML: {
      __html: message
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }), status !== "success" && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, "email"), __jsx(Input, {
    ref: node => email = node,
    type: "email",
    placeholder: short ? "Tu correo" : "Email",
    short: short,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  })), !short && __jsx(Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 15
    }
  }, "nombre"), __jsx(Input, {
    ref: node => name = node,
    type: "text",
    placeholder: "Nombre",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  })), complete && __jsx(Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 15
    }
  }, "industria"), __jsx(Input, {
    ref: node => industry = node,
    type: "text",
    placeholder: "Industria",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  })), enterprise && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Input, {
    ref: node => company = node,
    type: "text",
    placeholder: "compa\xF1\xEDa",
    id: "compa\xF1\xEDa",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  }), __jsx(Label, {
    htmlFor: "compa\xF1\xEDa",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 15
    }
  }, "compa\xF1\xEDa"), __jsx(Input, {
    ref: node => employees = node,
    type: "text",
    placeholder: "empleados",
    id: "empleados",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 15
    }
  }), __jsx(Label, {
    htmlFor: "empleados",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 15
    }
  }, "empleados")), __jsx(Button, {
    short: short,
    onClick: short ? submitShort : complete ? submitComplete : submitEnterprise,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  }, short ? "Descargar PDF gratuito" : "Descargar gratis")));
};

const EmailCollector = ({
  enterprise,
  complete,
  short
}) => {
  return __jsx(react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_2___default.a, {
    url: url,
    render: ({
      subscribe,
      status,
      message
    }) => __jsx(CustomForm, {
      enterprise: enterprise,
      complete: complete,
      short: short,
      status: status,
      message: message,
      onValidated: formData => subscribe(formData),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 9
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (EmailCollector);
const Background = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "EmailCollector__Background",
  componentId: "jldx4s-0"
})(["background-color:", ";opacity:", ";position:fixed;pointer-events:", ";left:0;bottom:0;right:0;top:0;z-index:13;transition:opacity 0.4s ease;"], props => props.theme.colors.background, props => props.visible ? 0.6 : 0, props => props.visible ? "auto" : "none");
const Message = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "EmailCollector__Message",
  componentId: "jldx4s-1"
})(["color:", ";font-size:", ";padding-bottom:5px;@media (max-width:600px),(max-height:450px){font-size:1.5rem;}"], props => props.error ? props.theme.colors.error : props.success ? props.theme.colors.success : props.theme.colors.accent, props => props.success ? "1.8rem" : "1.5rem");
const Label = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.label.withConfig({
  displayName: "EmailCollector__Label",
  componentId: "jldx4s-2"
})(["margin:0;span{font-size:0;height:0;width:0;position:absolute;}"]);
const Input = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "EmailCollector__Input",
  componentId: "jldx4s-3"
})(["width:100%;padding:13px 18px 13px 26px;line-height:100%;background-color:", ";border-radius:", ";border:none;font-size:1.7rem;margin:4px 0;height:48px;color:", ";-webkit-appearance:textfield;appearance:textfield;::placeholder{padding-top:4px;color:#31302e;opacity:0.5;}"], props => props.theme.colors.foreground, props => props.short ? "4px 0px 0px 4px" : "4px", props => props.theme.colors.foreground_lowest);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "EmailCollector__Button",
  componentId: "jldx4s-4"
})(["padding:14px 0%;margin:4px 0;text-align:center;width:", ";background-color:", ";color:", ";border:0;font-size:1.8rem;border-radius:", ";cursor:pointer;transition:0.3s ease all;"], props => props.short ? "50%" : "100%", props => props.theme.colors.cta, props => props.theme.colors.background, props => props.short ? "0px 4px 4px 0px" : "4px");
const CrossContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "EmailCollector__CrossContainer",
  componentId: "jldx4s-5"
})(["width:50px;height:50px;padding:12px;position:absolute;top:3%;right:3%;svg{width:100%;cursor:pointer;}"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "EmailCollector__Wrapper",
  componentId: "jldx4s-6"
})(["pointer-events:", ";opacity:", ";max-width:440px;width:80%;top:50%;left:50%;transform:translateX(-50%) translateY(-50%) ", ";font-weight:100;position:fixed;transition:opacity 0.4s ease,transform 0.5s ease;z-index:14;@media (max-width:600px){max-width:calc(100% - 36px);width:100%;margin-left:18px;margin-right:18px;z-index:100;left:0;transform:translateX(0px) translateY(-50%);h4{font-size:2.5rem;}}"], props => props.clickable ? "auto" : "none", props => props.clickable ? "1" : "0", props => props.clickable ? "translateY(0%)" : "translateY(5%)");

/***/ }),

/***/ "./components/FormComplete.js":
/*!************************************!*\
  !*** ./components/FormComplete.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_shared_Dangerously__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/shared/Dangerously */ "./components/shared/Dangerously.js");
/* harmony import */ var components_EmailCollector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/EmailCollector */ "./components/EmailCollector.js");
var _jsxFileName = "/Users/rodrigosalmeron/Sites/deepfuture/components/FormComplete.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function FormComplete({
  centered
}) {
  return __jsx(Form, {
    centered: centered,
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
  }, centered ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, "Descarga el ", __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 27
    }
  }, "reporte")), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, "Muchos ", __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 22
    }
  }, "escenarios de riesgo"), " sacudir\xE1n a los negocios de M\xE9xico durante esta crisis. Conoce cinco de ", __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 59
    }
  }, "ellos"), " en este", __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  }, " PDF gratuito"), " y consid\xE9ralos en tu planeaci\xF3n estrat\xE9gica.")) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "PDF descargable"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, "Escenarios clave"), " para generar certidumbre ante el impacto del ", __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 19
    }
  }, "COVID-19"), " y la ", __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 40
    }
  }, "4T")))), __jsx(Column, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx(components_EmailCollector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    complete: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (FormComplete);
const Form = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "FormComplete__Form",
  componentId: "sc-1i69xcr-0"
})(["background-color:", ";grid-column:", ";border-radius:5px;padding:5% 6.5%;display:flex;justify-content:space-between;width:100%;transition:all 0.3s ease-in;pointer-events:auto;"], props => props.theme.colors.accent, props => props.centered ? "3 / span 8" : "6 / span 6");
const Column = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "FormComplete__Column",
  componentId: "sc-1i69xcr-1"
})(["max-width:330px;width:100%;color:", ";:nth-of-type(1){padding-right:5%;}h4{font-weight:300;font-size:3rem;margin-bottom:23px;b{font-weight:500;}}"], props => props.theme.colors.foreground);

/***/ }),

/***/ "./components/Head.js":
/*!****************************!*\
  !*** ./components/Head.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/rodrigosalmeron/Sites/deepfuture/components/Head.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Meta = props => {
  const es_default = "Meta Description";
  const en_default = "";
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("meta", {
    charSet: "utf-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, props.title), props.description && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("meta", {
    name: "description",
    content: props.description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }), __jsx("meta", {
    name: "og:description",
    property: "og:description",
    content: props.description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  })), !props.description && (props.lang === "es" ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("meta", {
    name: "description",
    content: es_default,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "og:description",
    property: "og:description",
    content: es_default,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("meta", {
    name: "description",
    content: en_default,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "og:description",
    property: "og:description",
    content: en_default,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }))), __jsx("meta", {
    name: "og:title",
    property: "og:title",
    content: props.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }), props.lang === "es" ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("meta", {
    property: "og:locale",
    content: "es_MX",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "og:locale:alternate",
    content: "en_US",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("meta", {
    property: "og:locale",
    content: "en_US",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "og:locale:alternate",
    content: "es_MX",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  })), __jsx("meta", {
    property: "og:site_name",
    content: "Acueducto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }), props.image ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("meta", {
    property: "og:image",
    content: `https://deepfuture.institute/assets/img/og/${props.image}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "og:image:alt",
    content: props.lang === "es" ? "Alt de imagen" : "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("meta", {
    property: "og:image",
    content: "https://deepfuture.institute/assets/img/og/og_main.jpg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "og:image:alt",
    content: "DFI logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  })), props.canonical && (props.lang == "es" ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("link", {
    rel: "canonical",
    href: props.canonical,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "alternate",
    hrefLang: "en",
    href: props.en_canonical,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "alternate",
    href: props.en_canonical,
    hrefLang: "x-default",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }), __jsx("meta", {
    property: "og:url",
    content: props.canonical,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("link", {
    rel: "canonical",
    href: props.en_canonical,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "alternate",
    hrefLang: "es",
    href: props.canonical,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "alternate",
    href: props.en_canonical,
    hrefLang: "x-default",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }), __jsx("meta", {
    property: "og:url",
    content: props.canonical,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Meta);

/***/ }),

/***/ "./components/LandBg.js":
/*!******************************!*\
  !*** ./components/LandBg.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/rodrigosalmeron/Sites/deepfuture/components/LandBg.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;

const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;

const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;

const trans4 = (x, y) => `translate3d(${x / 4.5}px,${y / 4.5}px,0)`;

function LandBg() {
  const [props, set] = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])(() => ({
    xy: [0, 0],
    config: {
      mass: 10,
      tension: 550,
      friction: 140
    }
  }));
  return __jsx(Bg, {
    onMouseMove: ({
      clientX: x,
      clientY: y
    }) => set({
      xy: calc(x, y)
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div, {
    style: {
      transform: props.xy.interpolate(trans1)
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div, {
    style: {
      transform: props.xy.interpolate(trans2)
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div, {
    style: {
      transform: props.xy.interpolate(trans3)
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div, {
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
const Bg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "LandBg__Bg",
  componentId: "sc-1tfgvoe-0"
})(["width:100%;height:100%;position:absolute;div{box-shadow:", ";border-radius:50%;background-color:", ";position:absolute;height:0;:nth-of-type(1){width:37%;padding-bottom:37%;top:5%;left:24%;}:nth-of-type(2){width:20%;padding-bottom:20%;top:10%;right:13%;}:nth-of-type(3){width:10%;padding-bottom:10%;top:18%;left:44%;}:nth-of-type(4){width:5%;padding-bottom:5%;top:10%;left:42%;}}"], props => `-10px -10px 20px ${props.theme.colors.darklight}, 
    10px 10px 20px ${props.theme.colors.darkshadow}`, props => props.theme.colors.background);

/***/ }),

/***/ "./components/Tiers.js":
/*!*****************************!*\
  !*** ./components/Tiers.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_shared_MainGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/shared/MainGrid */ "./components/shared/MainGrid.js");
/* harmony import */ var components_shared_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/shared/Title */ "./components/shared/Title.js");
/* harmony import */ var components_shared_Dangerously__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/shared/Dangerously */ "./components/shared/Dangerously.js");
/* harmony import */ var public_assets_img_layout_check_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! public/assets/img/layout/check.svg */ "./public/assets/img/layout/check.svg");
/* harmony import */ var public_assets_img_layout_uncheck_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! public/assets/img/layout/uncheck.svg */ "./public/assets/img/layout/uncheck.svg");
var _jsxFileName = "/Users/rodrigosalmeron/Sites/deepfuture/components/Tiers.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const tiers = [{
  title: "autogestivo",
  description: "Cómo generar certidumbre ante el impacto del <b>COVID-19</b> y la <b>4T</b>",
  price: "1,400",
  originalPrice: "2,500",
  perks: {
    prospectiva: true,
    worksheets: true,
    expertos: false,
    acciones: false,
    empresarial: false
  }
}, {
  title: "personal",
  description: "Genera certidumbre ante el impacto del <b>COVID-19</b> y la <b>4T</b> junto con <b>expertos</b>",
  price: "10,000",
  originalPrice: "25,000",
  color: "#62AF9A",
  perks: {
    prospectiva: true,
    worksheets: true,
    expertos: true,
    acciones: false,
    empresarial: false
  }
}, {
  title: "empresarial",
  description: "Minimiza los riesgos del impacto del <b>COVID-19</b> y la <b>4T</b> junto con <b>expertos</b>",
  price: "desde $57,000",
  color: "#1C4794",
  perks: {
    prospectiva: true,
    worksheets: true,
    expertos: true,
    acciones: true,
    empresarial: true
  }
}];

const Tier = ({
  tier
}) => {
  return __jsx(TierContainer, {
    color: tier.color,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx(Padded, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, "Taller ", __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 18
    }
  }, tier.title)), __jsx(components_shared_Dangerously__WEBPACK_IMPORTED_MODULE_4__["H3"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, tier.description), __jsx(Price, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, "$", tier.price, " ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 31
    }
  }, "MXN")), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, tier.originalPrice ? "$" + tier.originalPrice : null)), __jsx(Button, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, "Comprar")), __jsx(Stats, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, "18"), Object.entries(tier.perks).map((perk, i) => __jsx("li", {
    key: `tp-${i}-${tier.price}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, perk[1] ? __jsx(public_assets_img_layout_check_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 24
    }
  }) : __jsx(public_assets_img_layout_uncheck_svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 36
    }
  })))));
};

function Tiers() {
  return __jsx(TiersSection, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, __jsx(components_shared_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, "Prep\xE1rate para los escenarios de ", __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 44
    }
  }, "futuro")), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, "Conoce nuestros ", __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 27
    }
  }, "talleres"))), __jsx(TiersGrid, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx(Includes, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, "Incluye"), __jsx(Stats, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  })), tiers.map((tier, i) => __jsx(Tier, {
    key: "tier" + i,
    tier: tier,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Tiers);
const Stats = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({
  displayName: "Tiers__Stats",
  componentId: "jz88wp-0"
})(["text-align:center;"]);
const Padded = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Tiers__Padded",
  componentId: "jz88wp-1"
})(["padding:5%;::after{content:\" \";height:2px;opacity:0.2;display:flex;padding-top:5%;width:100%;}"]);
const Price = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Tiers__Price",
  componentId: "jz88wp-2"
})(["display:flex;justify-content:space-between;font-size:2.7rem;margin:10% 0;span{span{font-size:2rem;}:nth-of-type(1){color:", ";}:nth-of-type(2){color:", ";text-decoration:line-through;}}"], props => props.theme.colors.accent, props => props.theme.colors.foreground_low);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "Tiers__Button",
  componentId: "jz88wp-3"
})(["width:100%;background-color:", ";color:", ";"], props => props.theme.colors.accent, props => props.theme.colors.foreground);
const TierContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Tiers__TierContainer",
  componentId: "jz88wp-4"
})(["grid-column-end:span 3;box-shadow:", ";border-radius:3px;::before{content:\" \";display:flex;border-radius:3px 3px 0px 0px;height:80px;width:100%;background-color:", ";}h2{font-size:2.7rem;color:", ";font-weight:300;padding-bottom:20px;b{font-weight:400;}}h3{font-size:2rem;color:", ";opacity:0.6;}"], props => `-4px -6px 11px ${props.theme.colors.lightlight}, 
    4px 4px 12px ${props.theme.colors.lightshadow}`, props => props.color ? props.color : props.theme.colors.background, props => props.theme.colors.accent, props => props.theme.colors.foreground_lowest);
const Includes = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Tiers__Includes",
  componentId: "jz88wp-5"
})(["grid-column-end:span 3;"]);
const TiersGrid = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(components_shared_MainGrid__WEBPACK_IMPORTED_MODULE_2__["default"]).withConfig({
  displayName: "Tiers__TiersGrid",
  componentId: "jz88wp-6"
})(["background-color:", ";color:", ";"], props => props.theme.colors.foreground, props => props.theme.colors.background);
const TiersSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "Tiers__TiersSection",
  componentId: "jz88wp-7"
})(["color:", ";background-color:", ";width:100%;"], props => props.theme.colors.background, props => props.theme.colors.foreground);

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
var _jsxFileName = "/Users/rodrigosalmeron/Sites/deepfuture/components/shared/Dangerously.js";

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

/***/ "./components/shared/DataItem.js":
/*!***************************************!*\
  !*** ./components/shared/DataItem.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_shared_Dangerously__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/shared/Dangerously */ "./components/shared/Dangerously.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/rodrigosalmeron/Sites/deepfuture/components/shared/DataItem.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function DataItem({
  item,
  columns,
  light,
  dark
}) {
  function IconFaded() {
    return __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }
    }, __jsx(Icon, {
      light: light,
      dark: dark,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }
    }, item.icon));
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !dark && __jsx(Column, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(IconFaded, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  })), __jsx(ColumnSecond, {
    columns: columns,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, dark && __jsx(Column, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx(IconFaded, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  })), __jsx(components_shared_Dangerously__WEBPACK_IMPORTED_MODULE_2__["H3"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, item.title), __jsx(components_shared_Dangerously__WEBPACK_IMPORTED_MODULE_2__["P"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, item.description)));
}

/* harmony default export */ __webpack_exports__["default"] = (DataItem);
const Column = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "DataItem__Column",
  componentId: "sc-92z828-0"
})(["grid-column-end:span 1;"]);
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "DataItem__Icon",
  componentId: "sc-92z828-1"
})(["width:100px;height:100px;border-radius:50%;background-color:", ";box-shadow:", ";position:relative;margin-bottom:10%;svg{position:absolute;left:50%;top:50%;transform:translate3d(-50%,-50%,0);.mutant{fill:", ";}}"], props => props.light ? props.theme.colors.foreground : props.theme.colors.background, props => props.light ? `-2px -4px 11px ${props.theme.colors.lightlight},
    2px 2px 4px ${props.theme.colors.lightshadow}` : `-5px -5px 7px ${props.theme.colors.darklight}, 
    5px 5px 7px ${props.theme.colors.darkshadow}`, props => props.light ? props.theme.colors.background : props.theme.colors.foreground);
const ColumnSecond = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "DataItem__ColumnSecond",
  componentId: "sc-92z828-2"
})(["grid-column-end:", ";h3{font-size:2.3rem;margin-bottom:17px;}p{max-width:340px;}"], props => "span " + props.columns);

/***/ }),

/***/ "./components/shared/MainGrid.js":
/*!***************************************!*\
  !*** ./components/shared/MainGrid.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const MainGrid = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "MainGrid",
  componentId: "sc-101fp4f-0"
})(["grid-template-columns:repeat(12,1fr);grid-gap:25px;width:100%;margin:0 auto;max-width:1500px;display:grid;padding:", ";position:relative;h1{font-size:4.65rem;line-height:135%;margin-bottom:3%;}p{grid-column:7 / span 5;position:relative;}"], props => props.notoppadding ? "0% 0% 5% 0%" : "5% 0%");
/* harmony default export */ __webpack_exports__["default"] = (MainGrid);

/***/ }),

/***/ "./components/shared/Title.js":
/*!************************************!*\
  !*** ./components/shared/Title.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_shared_MainGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/shared/MainGrid */ "./components/shared/MainGrid.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/rodrigosalmeron/Sites/deepfuture/components/shared/Title.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Title({
  children
}) {
  return __jsx(components_shared_MainGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx(TitlePlaced, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, children)));
}

/* harmony default export */ __webpack_exports__["default"] = (Title);
const TitlePlaced = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Title__TitlePlaced",
  componentId: "ogym7g-0"
})(["grid-column:2 / span 11;"]);

/***/ }),

/***/ "./pages/beta.js":
/*!***********************!*\
  !*** ./pages/beta.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Head */ "./components/Head.js");
/* harmony import */ var components_FormComplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/FormComplete */ "./components/FormComplete.js");
/* harmony import */ var components_shared_MainGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/shared/MainGrid */ "./components/shared/MainGrid.js");
/* harmony import */ var components_DataItemsWhite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/DataItemsWhite */ "./components/DataItemsWhite.js");
/* harmony import */ var components_DataItemsDark__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/DataItemsDark */ "./components/DataItemsDark.js");
/* harmony import */ var components_shared_Title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/shared/Title */ "./components/shared/Title.js");
/* harmony import */ var components_LandBg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/LandBg */ "./components/LandBg.js");
/* harmony import */ var components_Tiers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Tiers */ "./components/Tiers.js");
var _jsxFileName = "/Users/rodrigosalmeron/Sites/deepfuture/pages/beta.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












function Index(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(components_Head__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Deep Future Institute",
    canonical: "https://deepfuture.institute",
    lang: props.lang,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), __jsx(components_LandBg__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), __jsx(Land, {
    id: "land",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("div", {
    id: "landtext",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, "Genera ", __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 20
    }
  }, "certidumbre"), " en la crisis econ\xF3mica del COVID-19 y la 4T en M\xE9xico"), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, "Facilita la toma de ", __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 33
    }
  }, "decisiones"), " y minimiza el ", __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 65
    }
  }, "riesgo"), " de tu negocio u organizaci\xF3n en el ", __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 45
    }
  }, "futuro"), " con este taller autogestivo o guiado por expertos")), __jsx(components_FormComplete__WEBPACK_IMPORTED_MODULE_4__["default"], {
    centered: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  })), __jsx(Intro, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx(components_DataItemsWhite__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }), __jsx("div", {
    id: "quote",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, "Aqu\xED va a una quote de alguien que ya tom\xF3 el taller y que dijo que est\xE1 b\xE1rbaro y que le cambi\xF3 la vida"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, "Juan Jos\xE9 de R\xE9gules"), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, "CEO Sherpa-X")))), __jsx(components_Tiers__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }), __jsx(SecondForm, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx(SecondFormGrid, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, "Prueba un poco de lo que ", __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 40
    }
  }, "ofrecemos")), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, "Analizar los escenarios que podr\xEDan ocurrir a corto y largo plazo te ayudar\xE1 a organizar la informaci\xF3n que necesitas para enfrentar nuevas problem\xE1ticas y reducir riesgos.")), __jsx(components_FormComplete__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }))), __jsx(components_DataItemsDark__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }), __jsx(components_shared_Title__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, "La estrategia de hoy es ", __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 35
    }
  }, "sobrevivir")), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, "Encuentra ", __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, "certidumbre"), " con Deep Future Institute")), __jsx(components_shared_MainGrid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    notoppadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, __jsx(components_FormComplete__WEBPACK_IMPORTED_MODULE_4__["default"], {
    centered: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Index));
const Land = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(components_shared_MainGrid__WEBPACK_IMPORTED_MODULE_5__["default"]).withConfig({
  displayName: "beta__Land",
  componentId: "sc-1nzcelo-0"
})(["min-height:100vh;align-items:center;padding-top:13%;pointer-events:none;#landtext{color:", ";grid-column:2 / span 10;h1{max-width:870px;grid-column:2 / span 8;b{font-weight:500;}}h2{font-size:2.55rem;line-height:135%;max-width:650px;margin-top:0;}}"], props => props.theme.colors.foreground);
const Intro = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "beta__Intro",
  componentId: "sc-1nzcelo-1"
})(["color:", ";background-color:", ";width:100%;#quote{text-align:center;}"], props => props.theme.colors.background, props => props.theme.colors.foreground);
const SecondForm = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "beta__SecondForm",
  componentId: "sc-1nzcelo-2"
})(["color:", ";background-color:", ";width:100%;#quote{text-align:center;}"], props => props.theme.colors.background, props => props.theme.colors.foreground);
const SecondFormGrid = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(components_shared_MainGrid__WEBPACK_IMPORTED_MODULE_5__["default"]).withConfig({
  displayName: "beta__SecondFormGrid",
  componentId: "sc-1nzcelo-3"
})(["div:nth-of-type(1){grid-column:2 / span 3;h5{font-size:3.6rem;font-weight:400;margin:0px 0px 20px 0px;b{font-weight:500;}}}"]);

/***/ }),

/***/ "./public/assets/img/layout/check.svg":
/*!********************************************!*\
  !*** ./public/assets/img/layout/check.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M27 7L10.5 23.5L3 16.5",
  stroke: "#4F478B",
  strokeWidth: 3,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgCheck(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 30,
    height: 30,
    viewBox: "0 0 30 30",
    fill: "none"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgCheck);

/***/ }),

/***/ "./public/assets/img/layout/icons/time.svg":
/*!*************************************************!*\
  !*** ./public/assets/img/layout/icons/time.svg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#1D1D1B",
  className: "mutant",
  d: "M47.4234 13.041L49.6055 11.8233C50.3363 11.4155 51.1921 12.1008 50.9618 12.9095L49.4993 18.0442C49.3565 18.5455 48.8371 18.8353 48.3392 18.6916L43.239 17.2192C42.4357 16.9873 42.3119 15.8935 43.0428 15.4857L45.7827 13.9566C39.4765 2.6285 25.2547 -1.44951 13.9609 4.85303C2.63441 11.1738 -1.4579 25.5418 4.82046 36.9448C11.0988 48.3478 25.3704 52.4678 36.6968 46.147C40.6674 43.9312 43.8426 40.6727 45.9526 36.739C46.1988 36.2802 46.7678 36.1091 47.2236 36.3569C47.6794 36.6047 47.8494 37.1775 47.6032 37.6364C45.3241 41.8853 41.8928 45.4066 37.6063 47.7987C25.3737 54.6252 9.96043 50.1756 3.17979 37.8604C-3.60084 25.5451 0.818841 10.0277 13.0514 3.20128C25.2513 -3.60693 40.6149 0.800668 47.4234 13.041Z"
});

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#4F478B",
  d: "M27.092 29.0653C26.7131 29.4213 26.1194 29.4005 25.766 29.019L14.252 16.5883C13.8987 16.2069 13.9194 15.6093 14.2983 15.2537C14.6771 14.898 15.2706 14.9189 15.6239 15.3003L26.4983 27.0404L34.0401 19.9531C34.4188 19.5973 35.0123 19.6178 35.3658 19.9991C35.7192 20.3803 35.6987 20.9779 35.3201 21.3337L27.092 29.0653Z"
});

function SvgTime(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 51,
    height: 51,
    viewBox: "0 0 51 51",
    fill: "none"
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgTime);

/***/ }),

/***/ "./public/assets/img/layout/uncheck.svg":
/*!**********************************************!*\
  !*** ./public/assets/img/layout/uncheck.svg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M7 7L23.5 23.5M23.5 7L7 23.5",
  stroke: "#C8C8C8",
  strokeWidth: 3,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgUncheck(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 30,
    height: 30,
    viewBox: "0 0 30 30",
    fill: "none"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgUncheck);

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

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/beta.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rodrigosalmeron/Sites/deepfuture/pages/beta.js */"./pages/beta.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-mailchimp-subscribe":
/*!********************************************!*\
  !*** external "react-mailchimp-subscribe" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-mailchimp-subscribe");

/***/ }),

/***/ "react-reveal/Fade":
/*!************************************!*\
  !*** external "react-reveal/Fade" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "react-spring":
/*!*******************************!*\
  !*** external "react-spring" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spring");

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
//# sourceMappingURL=beta.js.map