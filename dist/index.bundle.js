/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Lexend:wght@500&family=Niramit:ital@1&family=Permanent+Marker&family=Poppins:ital,wght@1,500&family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
  font-family: 'Niramit', sans-serif;
  box-sizing: border-box;
  color: white;
  font-size: 1.3rem;
}


.container{
  height: 100vh;
  display: flex;
  width: 100%;
  background-size: cover;
}

.left{
  height: 100%;
  flex: 60%;
}

.right{
  height: 100%;
  flex: 40%;
  display: flex;
  padding: 5rem 0 9rem;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

input{
  width: 250px;
  color: black;
  padding: .4rem .8rem .3rem .45rem;
  border-radius: 6px;
  border: none;
  font-size: .85rem;
  box-shadow: 2.5px 2.5px rgb(65, 65, 65);
}

input:focus{
  border: none;
  outline: white;
}

.top-div{
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

form{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button{
  margin-left: 2.5rem;
  font-size: .9rem;
  padding: .275rem .425rem;
  color: cornflowerblue;
  cursor: pointer;
  border-radius: 4px;
  border: none;
}

.left{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .4rem;
}

img{
  height: 185px;
  width: 185px;
}

.infodiv{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.infodiv > h4{
  font-size: .9rem;
  margin-bottom: 1.4rem;
}

.infodiv > h3{
  font-size: 2.8rem;
}

.hiddentemp{
  display: none;
}

.maxminholder{
  width: 70%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 1.5rem;
}

.humwindholder{
  width: 60%;
  display: flex;
  gap: 2.5rem;
  justify-content: space-around;
}

.humwindholder > h4{
  font-size: .9rem;
}

.localtimeh5{
  font-size: .85rem;
  text-align: center;
}

.city-country-h2{
  text-align: center;
}

.holderdiv1{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.toggle {
  --width: 120px;
  --height: calc(var(--width) / 3);
  font-size: 1.2rem;
  position: relative;
  display: inline-block;
  width: var(--width);
  height: var(--height);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  border-radius: 8px;
}

.toggle input {
  display: none;
}

.toggle .labels {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: .8rem;
  font-family: sans-serif;
  transition: all 0.4s ease-in-out;
  overflow: hidden;
  border-radius: 8px;
}

.toggle .labels::after {
  content: attr(data-off);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: white;
  background-color: rgb(30, 1, 160);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  transition: all 0.4s ease-in-out;
}

.toggle .labels::before {
  content: attr(data-on);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: calc(var(--width) * -1);
  height: 100%;
  width: 100%;
  color: black;
  background-color: #e3d97f;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.4);
  transition: all 0.4s ease-in-out;
}

.toggle input:checked~.labels::after {
  transform: translateX(var(--width));
}

.toggle input:checked~.labels::before {
  transform: translateX(var(--width));
}

@media screen and (max-width: 820px) {
  .container {
    flex-direction: column;
  }

  .locationinfodiv{
    padding-top: 2rem;
  }

  .humwindholder{
    padding-bottom: 2rem;
  }

  .right{
    background-color: rgb(164, 164, 164);
  }

  .toggle{
    margin: 3rem 0 1.6rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;EACE,UAAU;EACV,SAAS;EACT,kCAAkC;EAClC,sBAAsB;EACtB,YAAY;EACZ,iBAAiB;AACnB;;;AAGA;EACE,aAAa;EACb,aAAa;EACb,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,SAAS;EACT,aAAa;EACb,oBAAoB;EACpB,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,iCAAiC;EACjC,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,uCAAuC;AACzC;;AAEA;EACE,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,wBAAwB;EACxB,qBAAqB;EACrB,eAAe;EACf,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;EACV,aAAa;EACb,6BAA6B;EAC7B,qBAAqB;AACvB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,WAAW;EACX,6BAA6B;AAC/B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,gCAAgC;EAChC,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;EACrB,mBAAmB;EACnB,qBAAqB;EACrB,0CAA0C;EAC1C,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,uBAAuB;EACvB,gCAAgC;EAChC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,MAAM;EACN,OAAO;EACP,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,iCAAiC;EACjC,2CAA2C;EAC3C,gCAAgC;AAClC;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,MAAM;EACN,6BAA6B;EAC7B,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,kBAAkB;EAClB,iDAAiD;EACjD,gCAAgC;AAClC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE;IACE,sBAAsB;EACxB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,oBAAoB;EACtB;;EAEA;IACE,oCAAoC;EACtC;;EAEA;IACE,qBAAqB;EACvB;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Lexend:wght@500&family=Niramit:ital@1&family=Permanent+Marker&family=Poppins:ital,wght@1,500&family=Roboto&display=swap');\r\n\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: 'Niramit', sans-serif;\r\n  box-sizing: border-box;\r\n  color: white;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n\r\n.container{\r\n  height: 100vh;\r\n  display: flex;\r\n  width: 100%;\r\n  background-size: cover;\r\n}\r\n\r\n.left{\r\n  height: 100%;\r\n  flex: 60%;\r\n}\r\n\r\n.right{\r\n  height: 100%;\r\n  flex: 40%;\r\n  display: flex;\r\n  padding: 5rem 0 9rem;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n}\r\n\r\ninput{\r\n  width: 250px;\r\n  color: black;\r\n  padding: .4rem .8rem .3rem .45rem;\r\n  border-radius: 6px;\r\n  border: none;\r\n  font-size: .85rem;\r\n  box-shadow: 2.5px 2.5px rgb(65, 65, 65);\r\n}\r\n\r\ninput:focus{\r\n  border: none;\r\n  outline: white;\r\n}\r\n\r\n.top-div{\r\n  height: 20vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n}\r\n\r\nform{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\nbutton{\r\n  margin-left: 2.5rem;\r\n  font-size: .9rem;\r\n  padding: .275rem .425rem;\r\n  color: cornflowerblue;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n  border: none;\r\n}\r\n\r\n.left{\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: .4rem;\r\n}\r\n\r\nimg{\r\n  height: 185px;\r\n  width: 185px;\r\n}\r\n\r\n.infodiv{\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.infodiv > h4{\r\n  font-size: .9rem;\r\n  margin-bottom: 1.4rem;\r\n}\r\n\r\n.infodiv > h3{\r\n  font-size: 2.8rem;\r\n}\r\n\r\n.hiddentemp{\r\n  display: none;\r\n}\r\n\r\n.maxminholder{\r\n  width: 70%;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.humwindholder{\r\n  width: 60%;\r\n  display: flex;\r\n  gap: 2.5rem;\r\n  justify-content: space-around;\r\n}\r\n\r\n.humwindholder > h4{\r\n  font-size: .9rem;\r\n}\r\n\r\n.localtimeh5{\r\n  font-size: .85rem;\r\n  text-align: center;\r\n}\r\n\r\n.city-country-h2{\r\n  text-align: center;\r\n}\r\n\r\n.holderdiv1{\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.toggle {\r\n  --width: 120px;\r\n  --height: calc(var(--width) / 3);\r\n  font-size: 1.2rem;\r\n  position: relative;\r\n  display: inline-block;\r\n  width: var(--width);\r\n  height: var(--height);\r\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);\r\n  cursor: pointer;\r\n  border-radius: 8px;\r\n}\r\n\r\n.toggle input {\r\n  display: none;\r\n}\r\n\r\n.toggle .labels {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  font-size: .8rem;\r\n  font-family: sans-serif;\r\n  transition: all 0.4s ease-in-out;\r\n  overflow: hidden;\r\n  border-radius: 8px;\r\n}\r\n\r\n.toggle .labels::after {\r\n  content: attr(data-off);\r\n  position: absolute;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  color: white;\r\n  background-color: rgb(30, 1, 160);\r\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\n.toggle .labels::before {\r\n  content: attr(data-on);\r\n  position: absolute;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  top: 0;\r\n  left: calc(var(--width) * -1);\r\n  height: 100%;\r\n  width: 100%;\r\n  color: black;\r\n  background-color: #e3d97f;\r\n  text-align: center;\r\n  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.4);\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\n.toggle input:checked~.labels::after {\r\n  transform: translateX(var(--width));\r\n}\r\n\r\n.toggle input:checked~.labels::before {\r\n  transform: translateX(var(--width));\r\n}\r\n\r\n@media screen and (max-width: 820px) {\r\n  .container {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .locationinfodiv{\r\n    padding-top: 2rem;\r\n  }\r\n\r\n  .humwindholder{\r\n    padding-bottom: 2rem;\r\n  }\r\n\r\n  .right{\r\n    background-color: rgb(164, 164, 164);\r\n  }\r\n\r\n  .toggle{\r\n    margin: 3rem 0 1.6rem;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


let startingCity = "Amsterdam";
let units = "metric";


const containerDiv = document.createElement("div")
containerDiv.classList.add("container")

const leftDiv = document.createElement("div")
leftDiv.classList.add("left")

//leftDiv DOMS
const headerandtimediv = document.createElement("div")
headerandtimediv.classList.add("locationinfodiv")
const newh2 = document.createElement("h2") 
newh2.classList.add("city-country-h2")
const newh5localtime = document.createElement("h5")
newh5localtime.classList.add("localtimeh5")
headerandtimediv.appendChild(newh2)
headerandtimediv.appendChild(newh5localtime)


const infoDiv = document.createElement("div") 
infoDiv.classList.add("infodiv")

const lefth3 = document.createElement("h3")
const hidden_lefth3 = document.createElement("h3")
hidden_lefth3.classList.add("hiddentemp")  

const holderdiv = document.createElement("div")
const iconImg = document.createElement("img")
const spanElement = document.createElement("span")
holderdiv.classList.add("holderdiv1")
holderdiv.appendChild(iconImg)
holderdiv.appendChild(spanElement)

const feel_like = document.createElement("h4")
infoDiv.appendChild(holderdiv)
infoDiv.appendChild(lefth3)
infoDiv.appendChild(hidden_lefth3) 
const hidden_feel_like = document.createElement("h4")
hidden_feel_like.classList.add("hiddentemp")
infoDiv.appendChild(feel_like)
infoDiv.appendChild(hidden_feel_like)


const maxmindiv = document.createElement("div") 
maxmindiv.classList.add("maxminholder")
const newh51 = document.createElement("h5")
const newh52 = document.createElement("h5")
newh52.classList.add("hiddentemp")
const newh53 = document.createElement("h5")
const newh54 = document.createElement("h5")
newh54.classList.add("hiddentemp")
maxmindiv.appendChild(newh51)
maxmindiv.appendChild(newh52)
maxmindiv.appendChild(newh53)
maxmindiv.appendChild(newh54)

const humwindDiv = document.createElement("div")
humwindDiv.classList.add("humwindholder")
const humh4 = document.createElement("h4")
const windh4 = document.createElement("h4")
const switchwindh4 = document.createElement("h4")
switchwindh4.classList.add("hiddentemp")
humwindDiv.appendChild(humh4)
humwindDiv.appendChild(windh4)
humwindDiv.appendChild(switchwindh4)

leftDiv.appendChild(headerandtimediv)
leftDiv.appendChild(infoDiv)
leftDiv.appendChild(maxmindiv)
leftDiv.appendChild(humwindDiv)


//rightDiv DOMS
const rightDiv = document.createElement("div")
rightDiv.classList.add("right")

const newDiv = document.createElement("div")
newDiv.classList.add("top-div")

const searchLocationHeader = document.createElement("h3")
searchLocationHeader.innerText = "Search Location"

const searchInput = document.createElement("input")
searchInput.setAttribute("type", "text")
searchInput.setAttribute("id", "city-input")
searchInput.setAttribute("placeholder", "Search for a city or country")

const newForm = document.createElement("form")
const newButton = document.createElement("button")
newButton.setAttribute("type", "submit")
newButton.innerText = "Search"


newButton.addEventListener("click", (e) => {
e.preventDefault()
let value1 = document.querySelector("#city-input").value
document.querySelector("#city-input").value = "";
getWeather(value1)
})

newForm.appendChild(searchInput)
newForm.appendChild(newButton)

const newh61 = document.createElement("p")
newh61.style.fontSize = "1rem"
newh61.innerText = "Switch between Fahrenheit / Celsius"

newDiv.appendChild(searchLocationHeader)
newDiv.appendChild(newForm)
rightDiv.appendChild(newDiv)

const newLabel222 = document.createElement("label")
newLabel222.classList.add("toggle")
const switchInput = document.createElement("input")
switchInput.setAttribute("type", "checkbox")
const span44 = document.createElement("span")
span44.classList.add("labels")
span44.setAttribute("data-on", "Fahrenheit")
span44.setAttribute("data-off", "Celsius")
span44.addEventListener("click", () => {
  if(document.querySelector(".infodiv").children[1].classList.contains("hiddentemp")){
    document.querySelector(".infodiv").children[2].classList.add("hiddentemp")
    document.querySelector(".infodiv").children[4].classList.add("hiddentemp")
    document.querySelector(".infodiv").children[1].classList.remove("hiddentemp")
    document.querySelector(".infodiv").children[3].classList.remove("hiddentemp")  
    document.querySelector("body > div > div.left > div.maxminholder > h5:nth-child(1)").classList.remove("hiddentemp")
    document.querySelector("body > div > div.left > div.maxminholder > h5:nth-child(3)").classList.remove("hiddentemp")
    document.querySelector("body > div > div.left > div.maxminholder > h5:nth-child(2)").classList.add("hiddentemp")
    document.querySelector("body > div > div.left > div.maxminholder > h5:nth-child(4)").classList.add("hiddentemp")
    document.querySelector(".humwindholder").children[1].classList.remove("hiddentemp")
    document.querySelector(".humwindholder").children[2].classList.add("hiddentemp")
  } else{
    document.querySelector(".infodiv").children[1].classList.add("hiddentemp")
    document.querySelector(".infodiv").children[3].classList.add("hiddentemp")
    document.querySelector(".infodiv").children[2].classList.remove("hiddentemp")
    document.querySelector(".infodiv").children[4].classList.remove("hiddentemp")
    document.querySelector("body > div > div.left > div.maxminholder > h5:nth-child(2)").classList.remove("hiddentemp")
    document.querySelector("body > div > div.left > div.maxminholder > h5:nth-child(4)").classList.remove("hiddentemp")
    document.querySelector("body > div > div.left > div.maxminholder > h5:nth-child(1)").classList.add("hiddentemp")
    document.querySelector("body > div > div.left > div.maxminholder > h5:nth-child(3)").classList.add("hiddentemp")
    document.querySelector(".humwindholder").children[2].classList.remove("hiddentemp")
    document.querySelector(".humwindholder").children[1].classList.add("hiddentemp")
  }
})

newLabel222.appendChild(switchInput)
newLabel222.appendChild(span44)
rightDiv.appendChild(newLabel222)
rightDiv.appendChild(newh61)



//------Append right and left div------
containerDiv.appendChild(leftDiv)
containerDiv.appendChild(rightDiv)
document.body.append(containerDiv)




//------Utility Functions------

function convertCountryCode(country){
  let regionNames = new Intl.DisplayNames(["en"], {type: "region"});
  return regionNames.of(country)
}

function convertToFahrenheit(temp){
  return ((temp*9/5) + 32).toFixed(2)
}


function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
  }
  return splitStr.join(' '); 
}

function getLocalTime(data) {
  let date = new Date();
  let time = date.getTime();
  let localOffset = date.getTimezoneOffset() * 60000;
  let utc = time + localOffset;
  let localTime = utc + 1000 * data;
  let localTimeDate = new Date(localTime);
  return localTimeDate.toLocaleString();
}

function speedConverterkphtomph(valNum) {
  return (valNum/1.609344).toFixed(2);
}


//------Fetch Data------
async function getWeather(city){
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=68bab1b38fa2d33c4a202dd867c83df2&units=${units}`
 
  try {
  const response = await fetch(url)
  if(!response.ok){
    throw new Error(response.statusText)
}
const data = await response.json()
const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
if((data.weather[0].icon).slice(-1) == "d"){
  document.querySelector(".localtimeh5").innerText = `Local Time: ${getLocalTime(data.timezone)} (Day)`
} else {
  document.querySelector(".localtimeh5").innerText = `Local Time: ${getLocalTime(data.timezone)} (Night)`
}
document.querySelector(".city-country-h2").innerText = `${data.name}, ${convertCountryCode(data.sys.country)}`


document.querySelector(".infodiv").children[0].children[0].src = icon
document.querySelector(".infodiv").children[0].children[1].innerText = titleCase(data.weather[0].description)
document.querySelector(".infodiv").children[1].innerText = `${data.main.temp.toFixed(2)} ${units === "imperial" ? "°F": "°C"}`
document.querySelector(".infodiv").children[2].innerText = `${convertToFahrenheit(data.main.temp.toFixed(2))} ${units === "imperial" ? "°C": "°F"}`
document.querySelector(".infodiv").children[3].innerText = `(Feels Like:  ${data.main.feels_like.toFixed(2)} ${units === "imperial" ? "°F": "°C"})`
document.querySelector(".infodiv").children[4].innerText = `(Feels Like:  ${convertToFahrenheit(data.main.feels_like.toFixed(2))} ${units === "imperial" ? "°C": "°F"})`


if(data.weather[0].description == "few clouds"){
  document.querySelector(".container").style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("../src/images/few-clouds.jpg")'
} else if(data.weather[0].description == "clear sky"){
  document.querySelector(".container").style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("../src/images/clear-sky.jpg")'
} else if(data.weather[0].description == "light rain" || data.weather[0].description == "moderate rain"){
  document.querySelector(".container").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../src/images/lightrain.jpg')"
} else if(data.weather[0].description == "heavy rain"){
  document.querySelector(".container").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../src/images/heavy-raincity.jpg')"
} else if(data.weather[0].description.includes("snow")){  
  document.querySelector(".container").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../src/images/snow day.jpg')"
} else if(data.weather[0].description == "broken clouds" || data.weather[0].description == "scattered clouds"){
  document.querySelector(".container").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../src/images/broken-cloud.jpg')"
} else if(data.weather[0].description == "overcast clouds"){
  document.querySelector(".container").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../src/images/overcast-clouds.jpg')"
} else if(data.weather[0].description == "thunderstorm"){
  document.querySelector(".container").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../src/images/thunderstorm.jpg')"
} else if(data.weather[0].description == "mist" || data.weather[0].description == "fog" || data.weather[0].description == "haze"){
  document.querySelector(".container").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../src/images/mist.jpeg')"
} else {
  document.body.style.backgroundColor = "dodgerblue"
} 

document.querySelector(".maxminholder").children[0].innerText = `Min : ${data.main.temp_min.toFixed(2)} ${units === "imperial" ? "°F": "°C"}`
document.querySelector(".maxminholder").children[1].innerText = `Max : ${convertToFahrenheit(data.main.temp_min.toFixed(2))} ${units === "imperial" ? "°C": "°F"}`
document.querySelector(".maxminholder").children[2].innerText = `Min : ${data.main.temp_max.toFixed(2)} ${units === "imperial" ? "°F": "°C"}`
document.querySelector(".maxminholder").children[3].innerText = `Max : ${convertToFahrenheit(data.main.temp_max.toFixed(2))} ${units === "imperial" ? "°C": "°F"}`


document.querySelector(".humwindholder").children[0].innerText = "Humidity: " + data.main.humidity + "%"
document.querySelector(".humwindholder").children[1].innerText = `Wind: ${data.wind.speed} ${units === "imperial" ? "mph": "kph"}`
document.querySelector(".humwindholder").children[2].innerText = `Wind: ${speedConverterkphtomph(data.wind.speed)} ${units === "imperial" ? "kph": "mph"}`
} catch (error) {
  alert(error.message)
  console.log(error.message)
}
}
  

document.body.addEventListener('load', getWeather(startingCity))








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsdVBBQXVQO0FBQ3ZQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFFBQVEsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsZUFBZTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxQkFBcUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsS0FBSyxnREFBZ0QsTUFBTTtBQUM5SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxxQkFBcUI7QUFDdkU7QUFDQSxvRUFBb0UsNkJBQTZCO0FBQ2pHLEVBQUU7QUFDRixvRUFBb0UsNkJBQTZCO0FBQ2pHO0FBQ0EsMERBQTBELFVBQVUsSUFBSSxxQ0FBcUM7QUFDN0c7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsMkJBQTJCLEVBQUUsa0NBQWtDO0FBQzdILDhEQUE4RCxnREFBZ0QsRUFBRSxrQ0FBa0M7QUFDbEosNEVBQTRFLGlDQUFpQyxFQUFFLGtDQUFrQztBQUNqSiw0RUFBNEUsc0RBQXNELEVBQUUsa0NBQWtDO0FBQ3RLO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RSwrQkFBK0IsRUFBRSxrQ0FBa0M7QUFDNUkseUVBQXlFLG9EQUFvRCxFQUFFLGtDQUFrQztBQUNqSyx5RUFBeUUsK0JBQStCLEVBQUUsa0NBQWtDO0FBQzVJLHlFQUF5RSxvREFBb0QsRUFBRSxrQ0FBa0M7QUFDaks7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLGlCQUFpQixFQUFFLG9DQUFvQztBQUNqSSwwRUFBMEUseUNBQXlDLEVBQUUsb0NBQW9DO0FBQ3pKLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2FwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dhcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93YXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93YXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93YXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dhcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2FwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dhcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93YXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93YXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA2MDAmZmFtaWx5PUxleGVuZDp3Z2h0QDUwMCZmYW1pbHk9TmlyYW1pdDppdGFsQDEmZmFtaWx5PVBlcm1hbmVudCtNYXJrZXImZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDEsNTAwJmZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LWZhbWlseTogJ05pcmFtaXQnLCBzYW5zLXNlcmlmO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG59XHJcblxyXG5cclxuLmNvbnRhaW5lcntcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmxlZnR7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZsZXg6IDYwJTtcclxufVxyXG5cclxuLnJpZ2h0e1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmbGV4OiA0MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiA1cmVtIDAgOXJlbTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlucHV0e1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogLjRyZW0gLjhyZW0gLjNyZW0gLjQ1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAuODVyZW07XHJcbiAgYm94LXNoYWRvdzogMi41cHggMi41cHggcmdiKDY1LCA2NSwgNjUpO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1c3tcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogd2hpdGU7XHJcbn1cclxuXHJcbi50b3AtZGl2e1xyXG4gIGhlaWdodDogMjB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuZm9ybXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgbWFyZ2luLWxlZnQ6IDIuNXJlbTtcclxuICBmb250LXNpemU6IC45cmVtO1xyXG4gIHBhZGRpbmc6IC4yNzVyZW0gLjQyNXJlbTtcclxuICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5sZWZ0e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogLjRyZW07XHJcbn1cclxuXHJcbmltZ3tcclxuICBoZWlnaHQ6IDE4NXB4O1xyXG4gIHdpZHRoOiAxODVweDtcclxufVxyXG5cclxuLmluZm9kaXZ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbmZvZGl2ID4gaDR7XHJcbiAgZm9udC1zaXplOiAuOXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxLjRyZW07XHJcbn1cclxuXHJcbi5pbmZvZGl2ID4gaDN7XHJcbiAgZm9udC1zaXplOiAyLjhyZW07XHJcbn1cclxuXHJcbi5oaWRkZW50ZW1we1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5tYXhtaW5ob2xkZXJ7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLmh1bXdpbmRob2xkZXJ7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMi41cmVtO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4uaHVtd2luZGhvbGRlciA+IGg0e1xyXG4gIGZvbnQtc2l6ZTogLjlyZW07XHJcbn1cclxuXHJcbi5sb2NhbHRpbWVoNXtcclxuICBmb250LXNpemU6IC44NXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jaXR5LWNvdW50cnktaDJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaG9sZGVyZGl2MXtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50b2dnbGUge1xyXG4gIC0td2lkdGg6IDEyMHB4O1xyXG4gIC0taGVpZ2h0OiBjYWxjKHZhcigtLXdpZHRoKSAvIDMpO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IHZhcigtLXdpZHRoKTtcclxuICBoZWlnaHQ6IHZhcigtLWhlaWdodCk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi50b2dnbGUgaW5wdXQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi50b2dnbGUgLmxhYmVscyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmb250LXNpemU6IC44cmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4udG9nZ2xlIC5sYWJlbHM6OmFmdGVyIHtcclxuICBjb250ZW50OiBhdHRyKGRhdGEtb2ZmKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLCAxLCAxNjApO1xyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi50b2dnbGUgLmxhYmVsczo6YmVmb3JlIHtcclxuICBjb250ZW50OiBhdHRyKGRhdGEtb24pO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IGNhbGModmFyKC0td2lkdGgpICogLTEpO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZDk3ZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnRvZ2dsZSBpbnB1dDpjaGVja2Vkfi5sYWJlbHM6OmFmdGVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgodmFyKC0td2lkdGgpKTtcclxufVxyXG5cclxuLnRvZ2dsZSBpbnB1dDpjaGVja2Vkfi5sYWJlbHM6OmJlZm9yZSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKHZhcigtLXdpZHRoKSk7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyMHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLmxvY2F0aW9uaW5mb2RpdntcclxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgLmh1bXdpbmRob2xkZXJ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcclxuICB9XHJcblxyXG4gIC5yaWdodHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjQsIDE2NCwgMTY0KTtcclxuICB9XHJcblxyXG4gIC50b2dnbGV7XHJcbiAgICBtYXJnaW46IDNyZW0gMCAxLjZyZW07XHJcbiAgfVxyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxrQ0FBa0M7RUFDbEMsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixTQUFTO0VBQ1QsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixXQUFXO0VBQ1gsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQiwwQ0FBMEM7RUFDMUMsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsMkNBQTJDO0VBQzNDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsTUFBTTtFQUNOLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGlEQUFpRDtFQUNqRCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLG9DQUFvQztFQUN0Qzs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANjAwJmZhbWlseT1MZXhlbmQ6d2dodEA1MDAmZmFtaWx5PU5pcmFtaXQ6aXRhbEAxJmZhbWlseT1QZXJtYW5lbnQrTWFya2VyJmZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAxLDUwMCZmYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcblxcclxcbioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTmlyYW1pdCcsIHNhbnMtc2VyaWY7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jb250YWluZXJ7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnR7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBmbGV4OiA2MCU7XFxyXFxufVxcclxcblxcclxcbi5yaWdodHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGZsZXg6IDQwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nOiA1cmVtIDAgOXJlbTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0e1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgcGFkZGluZzogLjRyZW0gLjhyZW0gLjNyZW0gLjQ1cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAuODVyZW07XFxyXFxuICBib3gtc2hhZG93OiAyLjVweCAyLjVweCByZ2IoNjUsIDY1LCA2NSk7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmZvY3Vze1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi50b3AtZGl2e1xcclxcbiAgaGVpZ2h0OiAyMHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbmZvcm17XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9ue1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIuNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogLjlyZW07XFxyXFxuICBwYWRkaW5nOiAuMjc1cmVtIC40MjVyZW07XFxyXFxuICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5sZWZ0e1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IC40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5pbWd7XFxyXFxuICBoZWlnaHQ6IDE4NXB4O1xcclxcbiAgd2lkdGg6IDE4NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mb2RpdntcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mb2RpdiA+IGg0e1xcclxcbiAgZm9udC1zaXplOiAuOXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm9kaXYgPiBoM3tcXHJcXG4gIGZvbnQtc2l6ZTogMi44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVudGVtcHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tYXhtaW5ob2xkZXJ7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaHVtd2luZGhvbGRlcntcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAyLjVyZW07XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmh1bXdpbmRob2xkZXIgPiBoNHtcXHJcXG4gIGZvbnQtc2l6ZTogLjlyZW07XFxyXFxufVxcclxcblxcclxcbi5sb2NhbHRpbWVoNXtcXHJcXG4gIGZvbnQtc2l6ZTogLjg1cmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2l0eS1jb3VudHJ5LWgye1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9sZGVyZGl2MXtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZ2dsZSB7XFxyXFxuICAtLXdpZHRoOiAxMjBweDtcXHJcXG4gIC0taGVpZ2h0OiBjYWxjKHZhcigtLXdpZHRoKSAvIDMpO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogdmFyKC0td2lkdGgpO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpO1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9nZ2xlIGlucHV0IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b2dnbGUgLmxhYmVscyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBmb250LXNpemU6IC44cmVtO1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi50b2dnbGUgLmxhYmVsczo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogYXR0cihkYXRhLW9mZik7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLCAxLCAxNjApO1xcclxcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4udG9nZ2xlIC5sYWJlbHM6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBhdHRyKGRhdGEtb24pO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IGNhbGModmFyKC0td2lkdGgpICogLTEpO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkOTdmO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4udG9nZ2xlIGlucHV0OmNoZWNrZWR+LmxhYmVsczo6YWZ0ZXIge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKHZhcigtLXdpZHRoKSk7XFxyXFxufVxcclxcblxcclxcbi50b2dnbGUgaW5wdXQ6Y2hlY2tlZH4ubGFiZWxzOjpiZWZvcmUge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKHZhcigtLXdpZHRoKSk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyMHB4KSB7XFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sb2NhdGlvbmluZm9kaXZ7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmh1bXdpbmRob2xkZXJ7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJpZ2h0e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY0LCAxNjQsIDE2NCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudG9nZ2xle1xcclxcbiAgICBtYXJnaW46IDNyZW0gMCAxLjZyZW07XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmxldCBzdGFydGluZ0NpdHkgPSBcIkFtc3RlcmRhbVwiO1xyXG5sZXQgdW5pdHMgPSBcIm1ldHJpY1wiO1xyXG5cclxuXHJcbmNvbnN0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuY29udGFpbmVyRGl2LmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIilcclxuXHJcbmNvbnN0IGxlZnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbmxlZnREaXYuY2xhc3NMaXN0LmFkZChcImxlZnRcIilcclxuXHJcbi8vbGVmdERpdiBET01TXHJcbmNvbnN0IGhlYWRlcmFuZHRpbWVkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbmhlYWRlcmFuZHRpbWVkaXYuY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uaW5mb2RpdlwiKVxyXG5jb25zdCBuZXdoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKSBcclxubmV3aDIuY2xhc3NMaXN0LmFkZChcImNpdHktY291bnRyeS1oMlwiKVxyXG5jb25zdCBuZXdoNWxvY2FsdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKVxyXG5uZXdoNWxvY2FsdGltZS5jbGFzc0xpc3QuYWRkKFwibG9jYWx0aW1laDVcIilcclxuaGVhZGVyYW5kdGltZWRpdi5hcHBlbmRDaGlsZChuZXdoMilcclxuaGVhZGVyYW5kdGltZWRpdi5hcHBlbmRDaGlsZChuZXdoNWxvY2FsdGltZSlcclxuXHJcblxyXG5jb25zdCBpbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSBcclxuaW5mb0Rpdi5jbGFzc0xpc3QuYWRkKFwiaW5mb2RpdlwiKVxyXG5cclxuY29uc3QgbGVmdGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXHJcbmNvbnN0IGhpZGRlbl9sZWZ0aDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcclxuaGlkZGVuX2xlZnRoMy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVudGVtcFwiKSAgXHJcblxyXG5jb25zdCBob2xkZXJkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbmNvbnN0IGljb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXHJcbmNvbnN0IHNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcclxuaG9sZGVyZGl2LmNsYXNzTGlzdC5hZGQoXCJob2xkZXJkaXYxXCIpXHJcbmhvbGRlcmRpdi5hcHBlbmRDaGlsZChpY29uSW1nKVxyXG5ob2xkZXJkaXYuYXBwZW5kQ2hpbGQoc3BhbkVsZW1lbnQpXHJcblxyXG5jb25zdCBmZWVsX2xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIilcclxuaW5mb0Rpdi5hcHBlbmRDaGlsZChob2xkZXJkaXYpXHJcbmluZm9EaXYuYXBwZW5kQ2hpbGQobGVmdGgzKVxyXG5pbmZvRGl2LmFwcGVuZENoaWxkKGhpZGRlbl9sZWZ0aDMpIFxyXG5jb25zdCBoaWRkZW5fZmVlbF9saWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpXHJcbmhpZGRlbl9mZWVsX2xpa2UuY2xhc3NMaXN0LmFkZChcImhpZGRlbnRlbXBcIilcclxuaW5mb0Rpdi5hcHBlbmRDaGlsZChmZWVsX2xpa2UpXHJcbmluZm9EaXYuYXBwZW5kQ2hpbGQoaGlkZGVuX2ZlZWxfbGlrZSlcclxuXHJcblxyXG5jb25zdCBtYXhtaW5kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpIFxyXG5tYXhtaW5kaXYuY2xhc3NMaXN0LmFkZChcIm1heG1pbmhvbGRlclwiKVxyXG5jb25zdCBuZXdoNTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIilcclxuY29uc3QgbmV3aDUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpXHJcbm5ld2g1Mi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVudGVtcFwiKVxyXG5jb25zdCBuZXdoNTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIilcclxuY29uc3QgbmV3aDU0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpXHJcbm5ld2g1NC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVudGVtcFwiKVxyXG5tYXhtaW5kaXYuYXBwZW5kQ2hpbGQobmV3aDUxKVxyXG5tYXhtaW5kaXYuYXBwZW5kQ2hpbGQobmV3aDUyKVxyXG5tYXhtaW5kaXYuYXBwZW5kQ2hpbGQobmV3aDUzKVxyXG5tYXhtaW5kaXYuYXBwZW5kQ2hpbGQobmV3aDU0KVxyXG5cclxuY29uc3QgaHVtd2luZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuaHVtd2luZERpdi5jbGFzc0xpc3QuYWRkKFwiaHVtd2luZGhvbGRlclwiKVxyXG5jb25zdCBodW1oNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKVxyXG5jb25zdCB3aW5kaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIilcclxuY29uc3Qgc3dpdGNod2luZGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpXHJcbnN3aXRjaHdpbmRoNC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVudGVtcFwiKVxyXG5odW13aW5kRGl2LmFwcGVuZENoaWxkKGh1bWg0KVxyXG5odW13aW5kRGl2LmFwcGVuZENoaWxkKHdpbmRoNClcclxuaHVtd2luZERpdi5hcHBlbmRDaGlsZChzd2l0Y2h3aW5kaDQpXHJcblxyXG5sZWZ0RGl2LmFwcGVuZENoaWxkKGhlYWRlcmFuZHRpbWVkaXYpXHJcbmxlZnREaXYuYXBwZW5kQ2hpbGQoaW5mb0RpdilcclxubGVmdERpdi5hcHBlbmRDaGlsZChtYXhtaW5kaXYpXHJcbmxlZnREaXYuYXBwZW5kQ2hpbGQoaHVtd2luZERpdilcclxuXHJcblxyXG4vL3JpZ2h0RGl2IERPTVNcclxuY29uc3QgcmlnaHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbnJpZ2h0RGl2LmNsYXNzTGlzdC5hZGQoXCJyaWdodFwiKVxyXG5cclxuY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG5uZXdEaXYuY2xhc3NMaXN0LmFkZChcInRvcC1kaXZcIilcclxuXHJcbmNvbnN0IHNlYXJjaExvY2F0aW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXHJcbnNlYXJjaExvY2F0aW9uSGVhZGVyLmlubmVyVGV4dCA9IFwiU2VhcmNoIExvY2F0aW9uXCJcclxuXHJcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbnNlYXJjaElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpXHJcbnNlYXJjaElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2l0eS1pbnB1dFwiKVxyXG5zZWFyY2hJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlNlYXJjaCBmb3IgYSBjaXR5IG9yIGNvdW50cnlcIilcclxuXHJcbmNvbnN0IG5ld0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxyXG5jb25zdCBuZXdCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbm5ld0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpXHJcbm5ld0J1dHRvbi5pbm5lclRleHQgPSBcIlNlYXJjaFwiXHJcblxyXG5cclxubmV3QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG5lLnByZXZlbnREZWZhdWx0KClcclxubGV0IHZhbHVlMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2l0eS1pbnB1dFwiKS52YWx1ZVxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NpdHktaW5wdXRcIikudmFsdWUgPSBcIlwiO1xyXG5nZXRXZWF0aGVyKHZhbHVlMSlcclxufSlcclxuXHJcbm5ld0Zvcm0uYXBwZW5kQ2hpbGQoc2VhcmNoSW5wdXQpXHJcbm5ld0Zvcm0uYXBwZW5kQ2hpbGQobmV3QnV0dG9uKVxyXG5cclxuY29uc3QgbmV3aDYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxubmV3aDYxLnN0eWxlLmZvbnRTaXplID0gXCIxcmVtXCJcclxubmV3aDYxLmlubmVyVGV4dCA9IFwiU3dpdGNoIGJldHdlZW4gRmFocmVuaGVpdCAvIENlbHNpdXNcIlxyXG5cclxubmV3RGl2LmFwcGVuZENoaWxkKHNlYXJjaExvY2F0aW9uSGVhZGVyKVxyXG5uZXdEaXYuYXBwZW5kQ2hpbGQobmV3Rm9ybSlcclxucmlnaHREaXYuYXBwZW5kQ2hpbGQobmV3RGl2KVxyXG5cclxuY29uc3QgbmV3TGFiZWwyMjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxubmV3TGFiZWwyMjIuY2xhc3NMaXN0LmFkZChcInRvZ2dsZVwiKVxyXG5jb25zdCBzd2l0Y2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG5zd2l0Y2hJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIilcclxuY29uc3Qgc3BhbjQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcclxuc3BhbjQ0LmNsYXNzTGlzdC5hZGQoXCJsYWJlbHNcIilcclxuc3BhbjQ0LnNldEF0dHJpYnV0ZShcImRhdGEtb25cIiwgXCJGYWhyZW5oZWl0XCIpXHJcbnNwYW40NC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW9mZlwiLCBcIkNlbHNpdXNcIilcclxuc3BhbjQ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvZGl2XCIpLmNoaWxkcmVuWzFdLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlbnRlbXBcIikpe1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvZGl2XCIpLmNoaWxkcmVuWzJdLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW50ZW1wXCIpXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm9kaXZcIikuY2hpbGRyZW5bNF0uY2xhc3NMaXN0LmFkZChcImhpZGRlbnRlbXBcIilcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb2RpdlwiKS5jaGlsZHJlblsxXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVudGVtcFwiKVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvZGl2XCIpLmNoaWxkcmVuWzNdLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW50ZW1wXCIpICBcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmxlZnQgPiBkaXYubWF4bWluaG9sZGVyID4gaDU6bnRoLWNoaWxkKDEpXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW50ZW1wXCIpXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5sZWZ0ID4gZGl2Lm1heG1pbmhvbGRlciA+IGg1Om50aC1jaGlsZCgzKVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVudGVtcFwiKVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYubGVmdCA+IGRpdi5tYXhtaW5ob2xkZXIgPiBoNTpudGgtY2hpbGQoMilcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlbnRlbXBcIilcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmxlZnQgPiBkaXYubWF4bWluaG9sZGVyID4gaDU6bnRoLWNoaWxkKDQpXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW50ZW1wXCIpXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh1bXdpbmRob2xkZXJcIikuY2hpbGRyZW5bMV0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlbnRlbXBcIilcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtd2luZGhvbGRlclwiKS5jaGlsZHJlblsyXS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVudGVtcFwiKVxyXG4gIH0gZWxzZXtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb2RpdlwiKS5jaGlsZHJlblsxXS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVudGVtcFwiKVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvZGl2XCIpLmNoaWxkcmVuWzNdLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW50ZW1wXCIpXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm9kaXZcIikuY2hpbGRyZW5bMl0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlbnRlbXBcIilcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb2RpdlwiKS5jaGlsZHJlbls0XS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVudGVtcFwiKVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYubGVmdCA+IGRpdi5tYXhtaW5ob2xkZXIgPiBoNTpudGgtY2hpbGQoMilcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlbnRlbXBcIilcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmxlZnQgPiBkaXYubWF4bWluaG9sZGVyID4gaDU6bnRoLWNoaWxkKDQpXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW50ZW1wXCIpXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5sZWZ0ID4gZGl2Lm1heG1pbmhvbGRlciA+IGg1Om50aC1jaGlsZCgxKVwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVudGVtcFwiKVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYubGVmdCA+IGRpdi5tYXhtaW5ob2xkZXIgPiBoNTpudGgtY2hpbGQoMylcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlbnRlbXBcIilcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtd2luZGhvbGRlclwiKS5jaGlsZHJlblsyXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVudGVtcFwiKVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW13aW5kaG9sZGVyXCIpLmNoaWxkcmVuWzFdLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW50ZW1wXCIpXHJcbiAgfVxyXG59KVxyXG5cclxubmV3TGFiZWwyMjIuYXBwZW5kQ2hpbGQoc3dpdGNoSW5wdXQpXHJcbm5ld0xhYmVsMjIyLmFwcGVuZENoaWxkKHNwYW40NClcclxucmlnaHREaXYuYXBwZW5kQ2hpbGQobmV3TGFiZWwyMjIpXHJcbnJpZ2h0RGl2LmFwcGVuZENoaWxkKG5ld2g2MSlcclxuXHJcblxyXG5cclxuLy8tLS0tLS1BcHBlbmQgcmlnaHQgYW5kIGxlZnQgZGl2LS0tLS0tXHJcbmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChsZWZ0RGl2KVxyXG5jb250YWluZXJEaXYuYXBwZW5kQ2hpbGQocmlnaHREaXYpXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kKGNvbnRhaW5lckRpdilcclxuXHJcblxyXG5cclxuXHJcbi8vLS0tLS0tVXRpbGl0eSBGdW5jdGlvbnMtLS0tLS1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRDb3VudHJ5Q29kZShjb3VudHJ5KXtcclxuICBsZXQgcmVnaW9uTmFtZXMgPSBuZXcgSW50bC5EaXNwbGF5TmFtZXMoW1wiZW5cIl0sIHt0eXBlOiBcInJlZ2lvblwifSk7XHJcbiAgcmV0dXJuIHJlZ2lvbk5hbWVzLm9mKGNvdW50cnkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRUb0ZhaHJlbmhlaXQodGVtcCl7XHJcbiAgcmV0dXJuICgodGVtcCo5LzUpICsgMzIpLnRvRml4ZWQoMilcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHRpdGxlQ2FzZShzdHIpIHtcclxuICB2YXIgc3BsaXRTdHIgPSBzdHIudG9Mb3dlckNhc2UoKS5zcGxpdCgnICcpO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3BsaXRTdHIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgc3BsaXRTdHJbaV0gPSBzcGxpdFN0cltpXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHNwbGl0U3RyW2ldLnN1YnN0cmluZygxKTsgICAgIFxyXG4gIH1cclxuICByZXR1cm4gc3BsaXRTdHIuam9pbignICcpOyBcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TG9jYWxUaW1lKGRhdGEpIHtcclxuICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgbGV0IHRpbWUgPSBkYXRlLmdldFRpbWUoKTtcclxuICBsZXQgbG9jYWxPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMDtcclxuICBsZXQgdXRjID0gdGltZSArIGxvY2FsT2Zmc2V0O1xyXG4gIGxldCBsb2NhbFRpbWUgPSB1dGMgKyAxMDAwICogZGF0YTtcclxuICBsZXQgbG9jYWxUaW1lRGF0ZSA9IG5ldyBEYXRlKGxvY2FsVGltZSk7XHJcbiAgcmV0dXJuIGxvY2FsVGltZURhdGUudG9Mb2NhbGVTdHJpbmcoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3BlZWRDb252ZXJ0ZXJrcGh0b21waCh2YWxOdW0pIHtcclxuICByZXR1cm4gKHZhbE51bS8xLjYwOTM0NCkudG9GaXhlZCgyKTtcclxufVxyXG5cclxuXHJcbi8vLS0tLS0tRmV0Y2ggRGF0YS0tLS0tLVxyXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGNpdHkpe1xyXG4gIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9NjhiYWIxYjM4ZmEyZDMzYzRhMjAyZGQ4NjdjODNkZjImdW5pdHM9JHt1bml0c31gXHJcbiBcclxuICB0cnkge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKVxyXG4gIGlmKCFyZXNwb25zZS5vayl7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dClcclxufVxyXG5jb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbmNvbnN0IGljb24gPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF0YS53ZWF0aGVyWzBdLmljb259QDR4LnBuZ2BcclxuaWYoKGRhdGEud2VhdGhlclswXS5pY29uKS5zbGljZSgtMSkgPT0gXCJkXCIpe1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYWx0aW1laDVcIikuaW5uZXJUZXh0ID0gYExvY2FsIFRpbWU6ICR7Z2V0TG9jYWxUaW1lKGRhdGEudGltZXpvbmUpfSAoRGF5KWBcclxufSBlbHNlIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2FsdGltZWg1XCIpLmlubmVyVGV4dCA9IGBMb2NhbCBUaW1lOiAke2dldExvY2FsVGltZShkYXRhLnRpbWV6b25lKX0gKE5pZ2h0KWBcclxufVxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpdHktY291bnRyeS1oMlwiKS5pbm5lclRleHQgPSBgJHtkYXRhLm5hbWV9LCAke2NvbnZlcnRDb3VudHJ5Q29kZShkYXRhLnN5cy5jb3VudHJ5KX1gXHJcblxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvZGl2XCIpLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLnNyYyA9IGljb25cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvZGl2XCIpLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmlubmVyVGV4dCA9IHRpdGxlQ2FzZShkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24pXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb2RpdlwiKS5jaGlsZHJlblsxXS5pbm5lclRleHQgPSBgJHtkYXRhLm1haW4udGVtcC50b0ZpeGVkKDIpfSAke3VuaXRzID09PSBcImltcGVyaWFsXCIgPyBcIsKwRlwiOiBcIsKwQ1wifWBcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvZGl2XCIpLmNoaWxkcmVuWzJdLmlubmVyVGV4dCA9IGAke2NvbnZlcnRUb0ZhaHJlbmhlaXQoZGF0YS5tYWluLnRlbXAudG9GaXhlZCgyKSl9ICR7dW5pdHMgPT09IFwiaW1wZXJpYWxcIiA/IFwiwrBDXCI6IFwiwrBGXCJ9YFxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm9kaXZcIikuY2hpbGRyZW5bM10uaW5uZXJUZXh0ID0gYChGZWVscyBMaWtlOiAgJHtkYXRhLm1haW4uZmVlbHNfbGlrZS50b0ZpeGVkKDIpfSAke3VuaXRzID09PSBcImltcGVyaWFsXCIgPyBcIsKwRlwiOiBcIsKwQ1wifSlgXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb2RpdlwiKS5jaGlsZHJlbls0XS5pbm5lclRleHQgPSBgKEZlZWxzIExpa2U6ICAke2NvbnZlcnRUb0ZhaHJlbmhlaXQoZGF0YS5tYWluLmZlZWxzX2xpa2UudG9GaXhlZCgyKSl9ICR7dW5pdHMgPT09IFwiaW1wZXJpYWxcIiA/IFwiwrBDXCI6IFwiwrBGXCJ9KWBcclxuXHJcblxyXG5pZihkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24gPT0gXCJmZXcgY2xvdWRzXCIpe1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICdsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjMpLCByZ2JhKDAsIDAsIDAsIDAuMykpLCB1cmwoXCIuLi9zcmMvaW1hZ2VzL2Zldy1jbG91ZHMuanBnXCIpJ1xyXG59IGVsc2UgaWYoZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uID09IFwiY2xlYXIgc2t5XCIpe1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICdsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjMpLCByZ2JhKDAsIDAsIDAsIDAuMykpLCB1cmwoXCIuLi9zcmMvaW1hZ2VzL2NsZWFyLXNreS5qcGdcIiknXHJcbn0gZWxzZSBpZihkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24gPT0gXCJsaWdodCByYWluXCIgfHwgZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uID09IFwibW9kZXJhdGUgcmFpblwiKXtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcImxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMyksIHJnYmEoMCwgMCwgMCwgMC4zKSksIHVybCgnLi4vc3JjL2ltYWdlcy9saWdodHJhaW4uanBnJylcIlxyXG59IGVsc2UgaWYoZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uID09IFwiaGVhdnkgcmFpblwiKXtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcImxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMyksIHJnYmEoMCwgMCwgMCwgMC4zKSksIHVybCgnLi4vc3JjL2ltYWdlcy9oZWF2eS1yYWluY2l0eS5qcGcnKVwiXHJcbn0gZWxzZSBpZihkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24uaW5jbHVkZXMoXCJzbm93XCIpKXsgIFxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwibGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4zKSwgcmdiYSgwLCAwLCAwLCAwLjMpKSwgdXJsKCcuLi9zcmMvaW1hZ2VzL3Nub3cgZGF5LmpwZycpXCJcclxufSBlbHNlIGlmKGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbiA9PSBcImJyb2tlbiBjbG91ZHNcIiB8fCBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24gPT0gXCJzY2F0dGVyZWQgY2xvdWRzXCIpe1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwibGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4zKSwgcmdiYSgwLCAwLCAwLCAwLjMpKSwgdXJsKCcuLi9zcmMvaW1hZ2VzL2Jyb2tlbi1jbG91ZC5qcGcnKVwiXHJcbn0gZWxzZSBpZihkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24gPT0gXCJvdmVyY2FzdCBjbG91ZHNcIil7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIikuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjMpLCByZ2JhKDAsIDAsIDAsIDAuMykpLCB1cmwoJy4uL3NyYy9pbWFnZXMvb3ZlcmNhc3QtY2xvdWRzLmpwZycpXCJcclxufSBlbHNlIGlmKGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbiA9PSBcInRodW5kZXJzdG9ybVwiKXtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcImxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMyksIHJnYmEoMCwgMCwgMCwgMC4zKSksIHVybCgnLi4vc3JjL2ltYWdlcy90aHVuZGVyc3Rvcm0uanBnJylcIlxyXG59IGVsc2UgaWYoZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uID09IFwibWlzdFwiIHx8IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbiA9PSBcImZvZ1wiIHx8IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbiA9PSBcImhhemVcIil7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIikuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjMpLCByZ2JhKDAsIDAsIDAsIDAuMykpLCB1cmwoJy4uL3NyYy9pbWFnZXMvbWlzdC5qcGVnJylcIlxyXG59IGVsc2Uge1xyXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJkb2RnZXJibHVlXCJcclxufSBcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWF4bWluaG9sZGVyXCIpLmNoaWxkcmVuWzBdLmlubmVyVGV4dCA9IGBNaW4gOiAke2RhdGEubWFpbi50ZW1wX21pbi50b0ZpeGVkKDIpfSAke3VuaXRzID09PSBcImltcGVyaWFsXCIgPyBcIsKwRlwiOiBcIsKwQ1wifWBcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYXhtaW5ob2xkZXJcIikuY2hpbGRyZW5bMV0uaW5uZXJUZXh0ID0gYE1heCA6ICR7Y29udmVydFRvRmFocmVuaGVpdChkYXRhLm1haW4udGVtcF9taW4udG9GaXhlZCgyKSl9ICR7dW5pdHMgPT09IFwiaW1wZXJpYWxcIiA/IFwiwrBDXCI6IFwiwrBGXCJ9YFxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1heG1pbmhvbGRlclwiKS5jaGlsZHJlblsyXS5pbm5lclRleHQgPSBgTWluIDogJHtkYXRhLm1haW4udGVtcF9tYXgudG9GaXhlZCgyKX0gJHt1bml0cyA9PT0gXCJpbXBlcmlhbFwiID8gXCLCsEZcIjogXCLCsENcIn1gXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWF4bWluaG9sZGVyXCIpLmNoaWxkcmVuWzNdLmlubmVyVGV4dCA9IGBNYXggOiAke2NvbnZlcnRUb0ZhaHJlbmhlaXQoZGF0YS5tYWluLnRlbXBfbWF4LnRvRml4ZWQoMikpfSAke3VuaXRzID09PSBcImltcGVyaWFsXCIgPyBcIsKwQ1wiOiBcIsKwRlwifWBcclxuXHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh1bXdpbmRob2xkZXJcIikuY2hpbGRyZW5bMF0uaW5uZXJUZXh0ID0gXCJIdW1pZGl0eTogXCIgKyBkYXRhLm1haW4uaHVtaWRpdHkgKyBcIiVcIlxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh1bXdpbmRob2xkZXJcIikuY2hpbGRyZW5bMV0uaW5uZXJUZXh0ID0gYFdpbmQ6ICR7ZGF0YS53aW5kLnNwZWVkfSAke3VuaXRzID09PSBcImltcGVyaWFsXCIgPyBcIm1waFwiOiBcImtwaFwifWBcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW13aW5kaG9sZGVyXCIpLmNoaWxkcmVuWzJdLmlubmVyVGV4dCA9IGBXaW5kOiAke3NwZWVkQ29udmVydGVya3BodG9tcGgoZGF0YS53aW5kLnNwZWVkKX0gJHt1bml0cyA9PT0gXCJpbXBlcmlhbFwiID8gXCJrcGhcIjogXCJtcGhcIn1gXHJcbn0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgYWxlcnQoZXJyb3IubWVzc2FnZSlcclxuICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKVxyXG59XHJcbn1cclxuICBcclxuXHJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGdldFdlYXRoZXIoc3RhcnRpbmdDaXR5KSlcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==