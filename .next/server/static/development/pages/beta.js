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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
var _jsxFileName = "/Users/salmeron/Sites/deepfuture/components/DataItemsDark.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const items = [{
  title: "Organiza la información<br/> y úsala para tu beneficio",
  description: "Brindamos datos recopilados de +11 organismos públicos (INEGI, Banxico, Coneval y más) para analizar +200 variables relevantes del país.",
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
  description: "Comienza ya con nuestro taller digital, una modalidad de nuestro servicio que puedes ejecutar para tu negocio en este mismo momento.",
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
  description: "Interpreta los hechos del mundo y el país para hacer sentido sobre cómo afectan a tu organización y/o institución.",
  icon: __jsx(public_assets_img_layout_icons_time_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  })
}, {
  title: "Con expertos con más de una década de experiencia",
  description: "Nuestras investigaciones son sustentadas por rospectivistas, investigadores, ácadémicos y analistas con más de 12 años de experiencia.",
  icon: __jsx(public_assets_img_layout_icons_time_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  })
}, {
  title: "Para dimensionar los problemas del mundo",
  description: "Un error común es no dimensionar los escenarios de riesgo. Tener un acercamiento estratégico y sistémico hacia el futuro te ayudará a alcanzar tus metas de negocio.",
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
var _jsxFileName = "/Users/salmeron/Sites/deepfuture/components/DataItemsWhite.js";

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
/* harmony import */ var components_shared_LeadCollector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/shared/LeadCollector */ "./components/shared/LeadCollector.js");
var _jsxFileName = "/Users/salmeron/Sites/deepfuture/components/FormComplete.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function FormComplete({
  centered,
  collectorId
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
  }, __jsx(components_shared_LeadCollector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    complete: true,
    collectorId: collectorId,
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
})(["max-width:330px;width:100%;color:", ";:nth-of-type(1){padding-right:5%;}h4{font-weight:300;font-size:3rem;margin-bottom:23px;b{font-weight:500;}}p{opacity:1 !important;}"], props => props.theme.colors.foreground);

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
var _jsxFileName = "/Users/salmeron/Sites/deepfuture/components/Head.js";

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
var _jsxFileName = "/Users/salmeron/Sites/deepfuture/components/LandBg.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

const trans1 = (x, y) => `translate3d(${x / 11}px,${y / 10}px,0)`;

const trans2 = (x, y) => `translate3d(${x / 10 + 30}px,${y / 8 - 230}px,0)`;

const trans3 = (x, y) => `translate3d(${x / 9 - 350}px,${y / 8 - 200}px,0)`;

const trans4 = (x, y) => `translate3d(${x / 8}px,${y / 6.5}px,0)`;

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
})(["width:100%;height:100vh;position:absolute;div{box-shadow:", ";border-radius:50%;background-color:", ";position:absolute;height:0;:nth-of-type(1){width:47%;padding-bottom:47%;top:15%;left:20%;}:nth-of-type(2){width:15%;padding-bottom:15%;top:40%;right:10%;}:nth-of-type(3){width:10%;padding-bottom:10%;top:78%;left:48%;}:nth-of-type(4){width:5%;padding-bottom:5%;top:35%;left:35%;}}"], props => `-10px -10px 20px ${props.theme.colors.darklight}, 
    10px 10px 20px ${props.theme.colors.darkshadow}`, props => props.theme.colors.background);

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

/***/ "./components/Quote.js":
/*!*****************************!*\
  !*** ./components/Quote.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var public_assets_img_layout_quoteOpen_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! public/assets/img/layout/quoteOpen.svg */ "./public/assets/img/layout/quoteOpen.svg");
/* harmony import */ var public_assets_img_layout_quoteClose_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! public/assets/img/layout/quoteClose.svg */ "./public/assets/img/layout/quoteClose.svg");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/salmeron/Sites/deepfuture/components/Quote.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Quote() {
  return __jsx(FullContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(QuoteContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(public_assets_img_layout_quoteOpen_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }), __jsx(TextContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, "Aqu\xED va a una quote de alguien que ya tom\xF3 el taller y que dijo que est\xE1 b\xE1rbaro y que le cambi\xF3 la vida"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  }, "Juan Jos\xE9 de R\xE9gules"), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }, "CEO Sherpa-X"), __jsx("img", {
    src: "/assets/img/layout/profile.jpg",
    alt: "Juan Jos\xE9 de R\xE9gules",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }))), __jsx(public_assets_img_layout_quoteClose_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Quote);
const FullContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Quote__FullContainer",
  componentId: "sc-146iyan-0"
})(["display:flex;justify-content:center;width:100%;padding-bottom:5%;"]);
const TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Quote__TextContainer",
  componentId: "sc-146iyan-1"
})(["display:flex;align-items:center;flex-direction:column;p{color:", ";font-size:2.5rem;font-weight:400;max-width:660px;text-align:center;padding:17% 2% 4%;}div{font-size:1.5rem;display:grid;text-align:right;grid-template-columns:auto,33px;grid-template-rows:16px,16px;position:relative;padding-top:20px;&::before{content:\" \";height:2px;background-color:", ";width:280px;position:absolute;top:0;left:-50px;}h6{font-size:inherit;margin:0;grid-row:1 / span 1;align-self:flex-end;}label{grid-row:2 / span 1;}img{width:43px;height:43px;border-radius:50%;grid-row:1 / span 2;margin-left:10px;}}"], props => props.theme.colors.accent, props => props.theme.colors.foreground_lower);
const QuoteContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Quote__QuoteContainer",
  componentId: "sc-146iyan-2"
})(["display:flex;align-items:center;svg{width:150px;height:150px;opacity:0.8;:nth-of-type(1){align-self:flex-start;}:nth-of-type(2){align-self:flex-end;margin-bottom:-5%;}path{fill:", ";box-shadow:", ";}}"], props => props.theme.colors.foreground, props => `-2px -4px 11px ${props.theme.colors.lightlight},
        2px 2px 4px ${props.theme.colors.lightshadow}`);

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
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/salmeron/Sites/deepfuture/components/Tiers.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const includes = [{
  title: "<b>Variables</b> de riesgo",
  subtitle: "Riesgo, oportunidades y COVID-19"
}, {
  title: "Proceso de <b>prospectiva</b>",
  subtitle: "Aprende a reducir la incertidumbre"
}, {
  title: "<b>Worksheets</b> de trabajo",
  subtitle: "Te brindamos los materiales necesarios"
}, {
  title: "Taller con <b>expertos</b>",
  subtitle: "Con más de 20 años de experiencia"
}, {
  title: "Plan de <b>acciones</b> con expertos",
  subtitle: "Prepárate para los escenarios futuros"
}, {
  title: "<b>Personalización</b> para tu empresa",
  subtitle: "Ten a tu equipo en la misma página"
}];
const tiers = [{
  title: "autogestivo",
  description: "Cómo generar certidumbre ante el impacto del <b>COVID-19</b> y la <b>4T</b>",
  price: "$1,400",
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
  price: "$10,000",
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
  price: "$57,000",
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
  tier,
  setShowPopup,
  setShowPay,
  setProduct
}) => {
  const buyOption = () => (setProduct(tier), setShowPay(true));

  return __jsx(TierContainer, {
    color: tier.color,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, __jsx(Padded, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, "Taller ", __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 20
    }
  }, tier.title)), __jsx(components_shared_Dangerously__WEBPACK_IMPORTED_MODULE_4__["H3"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, tier.description)), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, __jsx(Price, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, tier.title === "empresarial" && __jsx(PreSpan, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 48
    }
  }, "desde "), tier.price, " ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 28
    }
  }, "MXN")), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, tier.originalPrice ? "$" + tier.originalPrice : null)), tier.title !== "empresarial" ? __jsx(Button, {
    onClick: buyOption,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, "Comprar") : __jsx(Button, {
    onClick: setShowPopup,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, "Contacta a un asesor"))));
};

function Tiers({
  setShowPopup,
  setShowPay,
  setProduct
}) {
  return __jsx(TiersSection, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 5
    }
  }, __jsx(components_shared_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, "Prep\xE1rate para los escenarios de ", __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 44
    }
  }, "futuro")), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, "Conoce nuestros ", __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 27
    }
  }, "talleres"))), __jsx(TiersGrid, {
    notoppadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }, __jsx(TierBackground, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }), __jsx(TierBackground, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  }), __jsx(TierBackground, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }), __jsx(Includes, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }), tiers.map((tier, i) => __jsx(Tier, {
    setShowPopup: setShowPopup,
    setShowPay: setShowPay,
    key: "tier" + i,
    tier: tier,
    setProduct: setProduct,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  })), __jsx(Includes, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 11
    }
  }, "Incluye"), __jsx(StatsInclude, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 11
    }
  }, includes.map((include, i) => __jsx("li", {
    key: "include" + (i + 100),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 15
    }
  }, __jsx(components_shared_Dangerously__WEBPACK_IMPORTED_MODULE_4__["H3"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }
  }, include.title), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }, include.subtitle))))), tiers.map((tier, i) => __jsx(Stats, {
    key: "tierstats" + i,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }, "18"), Object.entries(tier.perks).map((perk, i) => __jsx("li", {
    key: `tp-${i}-${tier.price}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 15
    }
  }, perk[1] ? __jsx(public_assets_img_layout_check_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 28
    }
  }) : __jsx(public_assets_img_layout_uncheck_svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 40
    }
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Tiers);
const Stats = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({
  displayName: "Tiers__Stats",
  componentId: "jz88wp-0"
})(["text-align:center;grid-column-end:span 3;padding-bottom:25px;li{padding:17px 0;}"]);
const StatsInclude = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Stats).withConfig({
  displayName: "Tiers__StatsInclude",
  componentId: "jz88wp-1"
})(["li{text-align:left;padding:10px 0;h3{font-size:2rem;color:", ";}p{font-size:1.7rem;color:", ";}}"], props => props.theme.colors.accent, props => props.theme.colors.foreground_low);
const Includes = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Tiers__Includes",
  componentId: "jz88wp-2"
})(["grid-column-end:span 3;position:relative;span{font-size:3rem;position:absolute;top:-50px;}"]);
const Padded = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Tiers__Padded",
  componentId: "jz88wp-3"
})(["padding:8%;display:flex;justify-content:space-between;flex-direction:column;height:calc(100% - 80px);div:nth-of-type(3){::after{content:\" \";height:2px;display:flex;margin-top:40px;width:100%;opacity:0.8;background-color:", ";}}"], props => props.theme.colors.foreground_lower);
const PreSpan = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Tiers__PreSpan",
  componentId: "jz88wp-4"
})(["font-size:2rem;display:inline-flex;margin-right:5px;"]);
const Price = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Tiers__Price",
  componentId: "jz88wp-5"
})(["display:flex;justify-content:space-between;font-size:2.7rem;margin:10% 0;align-items:flex-end;span{span{font-size:2rem;}:nth-of-type(1){color:", ";}:nth-of-type(2){color:", ";text-decoration:line-through;font-size:1.7rem;}}"], props => props.theme.colors.accent, props => props.theme.colors.foreground_low);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "Tiers__Button",
  componentId: "jz88wp-6"
})(["width:100%;background-color:", ";color:", ";"], props => props.theme.colors.accent, props => props.theme.colors.foreground);
const TierContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Tiers__TierContainer",
  componentId: "jz88wp-7"
})(["grid-column-end:span 3;::before{content:\" \";display:flex;border-radius:3px 3px 0px 0px;height:80px;width:100%;background-color:", ";}h2{font-size:2.6rem;color:", ";font-weight:400;padding-bottom:20px;b{font-weight:500;}}h3{font-size:2rem;color:", ";opacity:0.6;}"], props => props.color ? props.color : props.theme.colors.background, props => props.theme.colors.accent, props => props.theme.colors.foreground_lowest);
const TierBackground = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Tiers__TierBackground",
  componentId: "jz88wp-8"
})(["box-shadow:", ";border-radius:3px;grid-column-end:span 3;position:absolute;width:100%;height:100%;z-index:0;grid-row:1 / span 2;"], props => `-4px -6px 11px ${props.theme.colors.lightlight}, 
    4px 4px 12px ${props.theme.colors.lightshadow}`);
const TiersGrid = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(components_shared_MainGrid__WEBPACK_IMPORTED_MODULE_2__["default"]).withConfig({
  displayName: "Tiers__TiersGrid",
  componentId: "jz88wp-9"
})(["background-color:", ";color:", ";", "{:nth-of-type(1){grid-column-start:4;}:nth-of-type(2){grid-column-start:7;}:nth-of-type(3){grid-column-start:10;}}"], props => props.theme.colors.foreground, props => props.theme.colors.background, TierBackground);
const TiersSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "Tiers__TiersSection",
  componentId: "jz88wp-10"
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
var _jsxFileName = "/Users/salmeron/Sites/deepfuture/components/shared/DataItem.js";

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
})(["grid-template-columns:repeat(12,1fr);grid-gap:25px;width:100%;margin:0 auto;max-width:1500px;display:grid;padding:", ";position:relative;h1{font-size:4.65rem;line-height:135%;margin-bottom:3%;}p{grid-column:7 / span 5;position:relative;opacity:0.8;}"], props => props.notoppadding ? "0% 0% 7% 0%" : "7% 0%");
/* harmony default export */ __webpack_exports__["default"] = (MainGrid);

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
var _jsxFileName = "/Users/salmeron/Sites/deepfuture/components/shared/Title.js";

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
/* harmony import */ var components_shared_LeadCollector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/shared/LeadCollector */ "./components/shared/LeadCollector.js");
/* harmony import */ var components_shared_Title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/shared/Title */ "./components/shared/Title.js");
/* harmony import */ var components_LandBg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/LandBg */ "./components/LandBg.js");
/* harmony import */ var components_Quote__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Quote */ "./components/Quote.js");
/* harmony import */ var components_PayPopup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/PayPopup */ "./components/PayPopup.js");
/* harmony import */ var components_Tiers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/Tiers */ "./components/Tiers.js");
var _jsxFileName = "/Users/salmeron/Sites/deepfuture/pages/beta.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















function Index(props) {
  const {
    0: showPay,
    1: setShowPay
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: product,
    1: setProduct
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(components_Head__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Deep Future Institute",
    canonical: "https://deepfuture.institute",
    lang: props.lang,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx(components_LandBg__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx(Land, {
    id: "land",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("div", {
    id: "landtext",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "Genera ", __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 20
    }
  }, "certidumbre"), " en la crisis econ\xF3mica del COVID-19 y la 4T en M\xE9xico"), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "Facilita la toma de ", __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 33
    }
  }, "decisiones"), " y minimiza el ", __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 65
    }
  }, "riesgo"), " de tu negocio u organizaci\xF3n en el ", __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 45
    }
  }, "futuro"), " con este taller autogestivo o guiado por expertos")), __jsx(components_FormComplete__WEBPACK_IMPORTED_MODULE_4__["default"], {
    centered: true,
    collectorId: "LandingCollector",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  })), __jsx(Intro, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx(components_DataItemsWhite__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }), __jsx(components_Quote__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  })), __jsx(components_Tiers__WEBPACK_IMPORTED_MODULE_13__["default"], {
    setShowPopup: props.setShowPopup,
    setShowPay: setShowPay,
    setProduct: setProduct,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }), __jsx(SecondForm, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx(SecondFormGrid, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, "Prueba un poco de lo que ", __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 42
    }
  }, "ofrecemos")), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, "Analizar los escenarios que podr\xEDan ocurrir a corto y largo plazo te ayudar\xE1 a organizar la informaci\xF3n que necesitas para enfrentar nuevas problem\xE1ticas y reducir riesgos."))), __jsx(components_FormComplete__WEBPACK_IMPORTED_MODULE_4__["default"], {
    collectorId: "TiersCollector",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }))), __jsx(components_DataItemsDark__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }), __jsx(components_shared_Title__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, "La estrategia de hoy es ", __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 35
    }
  }, "sobrevivir")), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, "Encuentra ", __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, "certidumbre"), " con Deep Future Institute")), __jsx(components_shared_MainGrid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    notoppadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, __jsx(components_FormComplete__WEBPACK_IMPORTED_MODULE_4__["default"], {
    centered: true,
    collectorId: "FooterCollector",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  })), showPay && __jsx(components_PayPopup__WEBPACK_IMPORTED_MODULE_12__["default"], {
    setShowPay: setShowPay,
    product: product,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 19
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Index));
const Land = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(components_shared_MainGrid__WEBPACK_IMPORTED_MODULE_5__["default"]).withConfig({
  displayName: "beta__Land",
  componentId: "sc-1nzcelo-0"
})(["min-height:100vh;align-items:center;padding-top:13%;pointer-events:none;#landtext{color:", ";grid-column:2 / span 10;padding-bottom:7%;h1{max-width:870px;grid-column:2 / span 8;b{font-weight:500;}}h2{font-size:2.55rem;line-height:135%;max-width:650px;margin-top:0;}}"], props => props.theme.colors.foreground);
const Intro = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "beta__Intro",
  componentId: "sc-1nzcelo-1"
})(["color:", ";background-color:", ";width:100%;"], props => props.theme.colors.background, props => props.theme.colors.foreground);
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

/***/ "./public/assets/img/layout/quoteClose.svg":
/*!*************************************************!*\
  !*** ./public/assets/img/layout/quoteClose.svg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  clipPath: "url(#clip0)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  filter: "url(#filter0_dd)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M83.5474 93L62.9129 80.2174C73.0083 65.498 78.2224 50.17 78.5552 34.2332L78.5552 9L114 9L114 31.9091C113.889 42.5336 111.005 53.6008 105.347 65.1107C99.578 76.7312 92.3116 86.0277 83.5474 93ZM27.6345 93L7 80.2174C17.0954 65.498 22.3095 50.17 22.6423 34.2332L22.6423 8.99999L58.0871 9L58.0871 31.9091C57.9762 42.5336 55.0918 53.6008 49.4339 65.1107C43.6651 76.7312 36.3987 86.0277 27.6345 93Z",
  fill: "#F4F4F4"
})));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("filter", {
  id: "filter0_dd",
  x: -6,
  y: -6,
  width: 129,
  height: 106,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feOffset", {
  dx: -2,
  dy: -4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feGaussianBlur", {
  stdDeviation: 5.5
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feOffset", {
  dx: 2,
  dy: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0.300658 0 0 0 0 0.299566 0 0 0 0 0.354167 0 0 0 0.19 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feBlend", {
  mode: "exclusion",
  in2: "effect1_dropShadow",
  result: "effect2_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect2_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("clipPath", {
  id: "clip0"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  width: 126,
  height: 101,
  fill: "white"
})));

function SvgQuoteClose(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 126,
    height: 101,
    viewBox: "0 0 126 101",
    fill: "none"
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgQuoteClose);

/***/ }),

/***/ "./public/assets/img/layout/quoteOpen.svg":
/*!************************************************!*\
  !*** ./public/assets/img/layout/quoteOpen.svg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  clipPath: "url(#clip0)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  filter: "url(#filter0_dd)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M42.4526 8L63.0871 20.7826C52.9917 35.502 47.7776 50.83 47.4448 66.7668V92H12V69.0909C12.1109 58.4664 14.9953 47.3992 20.6532 35.8893C26.422 24.2688 33.6884 14.9723 42.4526 8ZM98.3655 8L119 20.7826C108.905 35.502 103.691 50.83 103.358 66.7668V92H67.9129V69.0909C68.0238 58.4664 70.9082 47.3992 76.5661 35.8893C82.3349 24.2688 89.6013 14.9723 98.3655 8Z",
  fill: "#F4F4F4"
})));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("filter", {
  id: "filter0_dd",
  x: -1,
  y: -7,
  width: 129,
  height: 106,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feOffset", {
  dx: -2,
  dy: -4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feGaussianBlur", {
  stdDeviation: 5.5
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feColorMatrix", {
  "in": "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feOffset", {
  dx: 2,
  dy: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feGaussianBlur", {
  stdDeviation: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0.300658 0 0 0 0 0.299566 0 0 0 0 0.354167 0 0 0 0.19 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feBlend", {
  mode: "exclusion",
  in2: "effect1_dropShadow",
  result: "effect2_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feBlend", {
  mode: "normal",
  "in": "SourceGraphic",
  in2: "effect2_dropShadow",
  result: "shape"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("clipPath", {
  id: "clip0"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  width: 126,
  height: 101,
  fill: "white"
})));

function SvgQuoteOpen(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 126,
    height: 101,
    viewBox: "0 0 126 101",
    fill: "none"
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgQuoteOpen);

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

/***/ 6:
/*!*****************************!*\
  !*** multi ./pages/beta.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/salmeron/Sites/deepfuture/pages/beta.js */"./pages/beta.js");


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