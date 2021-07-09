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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/global-border.js":
/*!*****************************************!*\
  !*** ./src/js/modules/global-border.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function globalBorder() {
  let globalBorder = document.querySelector('.global-border');

  function heightSize() {
    if (window.innerWidth > document.querySelector('body').clientWidth) {
      let bodyHeight = document.querySelector('body').offsetHeight;
      globalBorder.style.cssText = "\n            height: ".concat(bodyHeight * 0.94, "px;\n            transform: translate(-50%, 0);\n            top: ").concat(bodyHeight * 0.94 * 0.03, "px;\n            ");
    } else {
      globalBorder.style.cssText = "\n            height: 94%;\n            width: 96%;\n            transform: translate(-50%, -50%);\n            left: 50%;\n            top: 50%;\n            ";
    }
  }

  heightSize();
  window.addEventListener('resize', () => {
    heightSize();
  });
}

/* harmony default export */ __webpack_exports__["default"] = (globalBorder);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function modals() {
  $(".popup1, .popup2, .popup3, .popup4, .popup5").hide();
  $("#btn").click(function () {
    $(".popup2").show();
  });
  $(".popup, #close").click(function () {
    $(".popup1, .popup2, .popup3, .popup4, .popup5").hide();
  });
  $(".btn-popup1").click(function () {
    $(".popup1, .popup3, .popup4, .popup5").hide();
    $(".popup2").show();
  });
  $(".btn-step1, .btn-popup2").click(function () {
    $(".popup1, .popup2, .popup4, .popup5").hide();
    $(".popup3").show();
  });
  $(".btn-step2").click(function () {
    $(".popup1, .popup2, .popup3, .popup5").hide();
    $(".popup4").show();
  });
  $(".btn-step3").click(function () {
    $(".popup1, .popup2, .popup3, .popup4").hide();
    $(".popup5").show();
  });
  $('.content-popup').click(function () {
    return false;
  });
  $(".btn-popup-main").click(function () {
    $(".popup-main").hide();
  });
}

/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function slider() {
  const restaurants = document.querySelectorAll('.slider__restaurants_item'),
        arrowLeft = document.querySelector('.slider__nav_arrows-left'),
        arrowRight = document.querySelector('.slider__nav_arrows-right');
  arrowLeft.addEventListener('click', () => {
    restaurants.forEach(item => {
      item.style.opacity = '0';
      setTimeout(() => {
        item.style.opacity = '1';
      }, 300);
    });
  });
  arrowRight.addEventListener('click', () => {
    restaurants.forEach(item => {
      item.style.opacity = '0';
      setTimeout(() => {
        item.style.opacity = '1';
      }, 300);
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/modules/sort.js":
/*!********************************!*\
  !*** ./src/js/modules/sort.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function sort() {
  const sortSearchForCategoryItem = document.querySelectorAll('.sort__search-for__category_item'),
        sortNeardyCategoryItem = document.querySelectorAll('.sort__neardy__category_item');

  function sortCategory(category) {
    category.forEach(item => {
      item.addEventListener('click', () => {
        category.forEach(item => {
          item.classList.remove('active');
        });
        item.classList.add('active');
      });
    });
  }

  sortCategory(sortSearchForCategoryItem);
  sortCategory(sortNeardyCategoryItem);
}

/* harmony default export */ __webpack_exports__["default"] = (sort);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_global_border__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/global-border */ "./src/js/modules/global-border.js");
/* harmony import */ var _modules_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sort */ "./src/js/modules/sort.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");




window.addEventListener('DOMContentLoaded', () => {
  "use strict";

  Object(_modules_global_border__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_sort__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_modals__WEBPACK_IMPORTED_MODULE_3__["default"])();
});

/***/ }),

/***/ 0:
/*!*************************************************************************************************************************************************!*\
  !*** multi ./src/js/script.js ./src/js/modules/global-border.js ./src/js/modules/modals.js ./src/js/modules/slider.js ./src/js/modules/sort.js ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Argentum\Desktop\grab_a_menu\src\js\script.js */"./src/js/script.js");
__webpack_require__(/*! C:\Users\Argentum\Desktop\grab_a_menu\src\js\modules\global-border.js */"./src/js/modules/global-border.js");
__webpack_require__(/*! C:\Users\Argentum\Desktop\grab_a_menu\src\js\modules\modals.js */"./src/js/modules/modals.js");
__webpack_require__(/*! C:\Users\Argentum\Desktop\grab_a_menu\src\js\modules\slider.js */"./src/js/modules/slider.js");
module.exports = __webpack_require__(/*! C:\Users\Argentum\Desktop\grab_a_menu\src\js\modules\sort.js */"./src/js/modules/sort.js");


/***/ })

/******/ });
//# sourceMappingURL=script.js.map