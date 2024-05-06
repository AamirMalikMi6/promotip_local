(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sliders"],{

/***/ "./assets/js/sliders.js":
/*!******************************!*\
  !*** ./assets/js/sliders.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @splidejs/splide */ "./node_modules/@splidejs/splide/dist/js/splide.esm.js");
/* harmony import */ var _splidejs_splide_dist_css_themes_splide_default_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @splidejs/splide/dist/css/themes/splide-default.min.css */ "./node_modules/@splidejs/splide/dist/css/themes/splide-default.min.css");
/* harmony import */ var _splidejs_splide_dist_css_themes_splide_default_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_splidejs_splide_dist_css_themes_splide_default_min_css__WEBPACK_IMPORTED_MODULE_5__);






var slides = document.querySelectorAll('.splide');
slides.forEach(function (slide) {
  var splide = new _splidejs_splide__WEBPACK_IMPORTED_MODULE_4__["default"](slide, {
    type: 'loop',
    perPage: 5,
    padding: 0,
    gap: 15,
    breakpoints: {
      576: {
        perPage: 1,
        gap: 0,
        padding: 0
      },
      768: {
        perPage: 2
      },
      992: {
        perPage: 3
      }
    },
    focus: 'center',
    updateOnMove: true,
    pagination: true,
    autoplay: true
  }).mount();
  var minImgIndex = 0;
  splide.on('visible', function () {
    var slides = splide.Components.Elements.slides;
    slides.forEach(function (slide) {
      if (slide.classList.contains('is-visible')) {
        var link = slide.children[2];
        var imagesInLink = link.children;
        var arrayImages = Array.from(imagesInLink);

        if (arrayImages.length > 1) {
          arrayImages.forEach(function (img) {
            if (img.classList.contains('d-block')) {
              img.classList.remove('d-block');
              img.className += ' d-none';
            }
          });
          var currentIndex = getRandomImageIndex(minImgIndex, imagesInLink.length);
          arrayImages[currentIndex].classList.remove('d-none');
          arrayImages[currentIndex].classList.add('d-block');
        }
      }
    });
  });
  splide.on('active', function () {
    var slides = splide.Components.Elements.slides;
    slides.forEach(function (slide) {
      if (slide.classList.contains('is-visible')) {
        var link = slide.children[2];
        var imagesInLink = link.children;
        var arrayImages = Array.from(imagesInLink);

        if (arrayImages.length > 1) {
          arrayImages.forEach(function (img) {
            if (img.classList.contains('d-block')) {
              img.classList.remove('d-block');
              img.className += ' d-none';
            }
          });
          var currentIndex = getRandomImageIndex(minImgIndex, imagesInLink.length);
          arrayImages[currentIndex].classList.remove('d-none');
          arrayImages[currentIndex].classList.add('d-block');
        }
      }
    });
  });
});

function getRandomImageIndex(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

/***/ }),

/***/ "./node_modules/core-js/internals/array-from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-from.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "./node_modules/core-js/internals/iterator-close.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    iteratorClose(iterator);
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var from = __webpack_require__(/*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ })

},[["./assets/js/sliders.js","runtime","vendors~admin~app~dashboard_company~dashboard_events~photoswipe~sliders","vendors~sliders~sliders_advert","vendors~app~sliders"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2xpZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2FsbC13aXRoLXNhZmUtaXRlcmF0aW9uLWNsb3NpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy1tdWx0aWJ5dGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mcm9tLmpzIl0sIm5hbWVzIjpbInNsaWRlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJzbGlkZSIsInNwbGlkZSIsIlNwbGlkZSIsInR5cGUiLCJwZXJQYWdlIiwicGFkZGluZyIsImdhcCIsImJyZWFrcG9pbnRzIiwiZm9jdXMiLCJ1cGRhdGVPbk1vdmUiLCJwYWdpbmF0aW9uIiwiYXV0b3BsYXkiLCJtb3VudCIsIm1pbkltZ0luZGV4Iiwib24iLCJDb21wb25lbnRzIiwiRWxlbWVudHMiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImxpbmsiLCJjaGlsZHJlbiIsImltYWdlc0luTGluayIsImFycmF5SW1hZ2VzIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiaW1nIiwicmVtb3ZlIiwiY2xhc3NOYW1lIiwiY3VycmVudEluZGV4IiwiZ2V0UmFuZG9tSW1hZ2VJbmRleCIsImFkZCIsIm1pbiIsIm1heCIsIk1hdGgiLCJjZWlsIiwiZmxvb3IiLCJyYW5kb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQUlBLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixTQUExQixDQUFiO0FBRUFGLE1BQU0sQ0FBQ0csT0FBUCxDQUFnQixV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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLG1DQUFtQztBQUM3QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLFVBQVUsZUFBZTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDeENBLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0Msb0JBQW9CLG1CQUFPLENBQUMsdUZBQTZCOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNaQSxnQkFBZ0IsbUJBQU8sQ0FBQywrRUFBeUI7QUFDakQsNkJBQTZCLG1CQUFPLENBQUMsMkdBQXVDOztBQUU1RSxzQkFBc0Isa0JBQWtCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDMUJBLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsV0FBVyxtQkFBTyxDQUFDLCtFQUF5QjtBQUM1QyxrQ0FBa0MsbUJBQU8sQ0FBQyx1SEFBNkM7O0FBRXZGO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEdBQUcsMkRBQTJEO0FBQzlEO0FBQ0EsQ0FBQyIsImZpbGUiOiJzbGlkZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwbGlkZSBmcm9tICdAc3BsaWRlanMvc3BsaWRlJztcclxuaW1wb3J0ICdAc3BsaWRlanMvc3BsaWRlL2Rpc3QvY3NzL3RoZW1lcy9zcGxpZGUtZGVmYXVsdC5taW4uY3NzJztcclxuXHJcbnZhciBzbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3BsaWRlJyk7XHJcblxyXG5zbGlkZXMuZm9yRWFjaCggZnVuY3Rpb24gKHNsaWRlKSB7XHJcbiAgICB2YXIgc3BsaWRlID0gbmV3IFNwbGlkZShzbGlkZSwge1xyXG4gICAgICAgIHR5cGU6ICdsb29wJyxcclxuICAgICAgICBwZXJQYWdlOiA1LFxyXG4gICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgZ2FwOiAxNSxcclxuICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICA1NzY6IHtcclxuICAgICAgICAgICAgICAgIHBlclBhZ2U6IDEsXHJcbiAgICAgICAgICAgICAgICBnYXA6IDAsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgICAgIHBlclBhZ2U6IDIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICAgICAgcGVyUGFnZTogMyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZvY3VzOiAnY2VudGVyJyxcclxuICAgICAgICB1cGRhdGVPbk1vdmU6IHRydWUsXHJcbiAgICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIH0pLm1vdW50KCk7XHJcblxyXG4gICAgbGV0IG1pbkltZ0luZGV4ID0gMDtcclxuICAgIHNwbGlkZS5vbiggJ3Zpc2libGUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3Qgc2xpZGVzID0gc3BsaWRlLkNvbXBvbmVudHMuRWxlbWVudHMuc2xpZGVzO1xyXG5cclxuICAgICAgICBzbGlkZXMuZm9yRWFjaChzbGlkZSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggc2xpZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy12aXNpYmxlJykgKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5rID0gc2xpZGUuY2hpbGRyZW5bMl07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZXNJbkxpbmsgPSBsaW5rLmNoaWxkcmVuO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJyYXlJbWFnZXMgPSBBcnJheS5mcm9tKGltYWdlc0luTGluayk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBhcnJheUltYWdlcy5sZW5ndGggPiAxICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhcnJheUltYWdlcy5mb3JFYWNoKCBmdW5jdGlvbihpbWcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBpbWcuY2xhc3NMaXN0LmNvbnRhaW5zICgnZC1ibG9jaycpICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nLmNsYXNzTGlzdC5yZW1vdmUoJ2QtYmxvY2snKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZy5jbGFzc05hbWUgKz0gJyBkLW5vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50SW5kZXggPSBnZXRSYW5kb21JbWFnZUluZGV4KG1pbkltZ0luZGV4LCBpbWFnZXNJbkxpbmsubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICBhcnJheUltYWdlc1tjdXJyZW50SW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmF5SW1hZ2VzW2N1cnJlbnRJbmRleF0uY2xhc3NMaXN0LmFkZCgnZC1ibG9jaycpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICB9ICk7XHJcblxyXG4gICAgc3BsaWRlLm9uKCAnYWN0aXZlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHNsaWRlcyA9IHNwbGlkZS5Db21wb25lbnRzLkVsZW1lbnRzLnNsaWRlcztcclxuXHJcbiAgICAgICAgc2xpZGVzLmZvckVhY2goc2xpZGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIHNsaWRlLmNsYXNzTGlzdC5jb250YWlucygnaXMtdmlzaWJsZScpICkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGluayA9IHNsaWRlLmNoaWxkcmVuWzJdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VzSW5MaW5rID0gbGluay5jaGlsZHJlbjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5SW1hZ2VzID0gQXJyYXkuZnJvbShpbWFnZXNJbkxpbmspO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggYXJyYXlJbWFnZXMubGVuZ3RoID4gMSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlJbWFnZXMuZm9yRWFjaCggZnVuY3Rpb24oaW1nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggaW1nLmNsYXNzTGlzdC5jb250YWlucyAoJ2QtYmxvY2snKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZy5jbGFzc0xpc3QucmVtb3ZlKCdkLWJsb2NrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcuY2xhc3NOYW1lICs9ICcgZC1ub25lJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gZ2V0UmFuZG9tSW1hZ2VJbmRleChtaW5JbWdJbmRleCwgaW1hZ2VzSW5MaW5rLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlJbWFnZXNbY3VycmVudEluZGV4XS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICBhcnJheUltYWdlc1tjdXJyZW50SW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2QtYmxvY2snKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfSApO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGdldFJhbmRvbUltYWdlSW5kZXgobWluLCBtYXgpIHtcclxuICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xyXG4gICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcclxufSIsIid1c2Ugc3RyaWN0JztcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGNhbGxXaXRoU2FmZUl0ZXJhdGlvbkNsb3NpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2FsbC13aXRoLXNhZmUtaXRlcmF0aW9uLWNsb3NpbmcnKTtcbnZhciBpc0FycmF5SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXktaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgZ2V0SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG4vLyBgQXJyYXkuZnJvbWAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LmZyb21cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZnJvbShhcnJheUxpa2UgLyogLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCAqLykge1xuICB2YXIgTyA9IHRvT2JqZWN0KGFycmF5TGlrZSk7XG4gIHZhciBDID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheTtcbiAgdmFyIGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBtYXBmbiA9IGFyZ3VtZW50c0xlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gIHZhciBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZDtcbiAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gZ2V0SXRlcmF0b3JNZXRob2QoTyk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3IsIG5leHQsIHZhbHVlO1xuICBpZiAobWFwcGluZykgbWFwZm4gPSBiaW5kKG1hcGZuLCBhcmd1bWVudHNMZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgLy8gaWYgdGhlIHRhcmdldCBpcyBub3QgaXRlcmFibGUgb3IgaXQncyBhbiBhcnJheSB3aXRoIHRoZSBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIGEgc2ltcGxlIGNhc2VcbiAgaWYgKGl0ZXJhdG9yTWV0aG9kICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXJhdG9yTWV0aG9kKGl0ZXJhdG9yTWV0aG9kKSkpIHtcbiAgICBpdGVyYXRvciA9IGl0ZXJhdG9yTWV0aG9kLmNhbGwoTyk7XG4gICAgbmV4dCA9IGl0ZXJhdG9yLm5leHQ7XG4gICAgcmVzdWx0ID0gbmV3IEMoKTtcbiAgICBmb3IgKDshKHN0ZXAgPSBuZXh0LmNhbGwoaXRlcmF0b3IpKS5kb25lOyBpbmRleCsrKSB7XG4gICAgICB2YWx1ZSA9IG1hcHBpbmcgPyBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlO1xuICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgcmVzdWx0ID0gbmV3IEMobGVuZ3RoKTtcbiAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgdmFsdWUgPSBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdO1xuICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGl0ZXJhdG9yQ2xvc2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItY2xvc2UnKTtcblxuLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgRU5UUklFUykge1xuICB0cnkge1xuICAgIHJldHVybiBFTlRSSUVTID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaXRlcmF0b3JDbG9zZShpdGVyYXRvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS57IGNvZGVQb2ludEF0LCBhdCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKENPTlZFUlRfVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIHBvcykge1xuICAgIHZhciBTID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUoJHRoaXMpKTtcbiAgICB2YXIgcG9zaXRpb24gPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgc2l6ZSA9IFMubGVuZ3RoO1xuICAgIHZhciBmaXJzdCwgc2Vjb25kO1xuICAgIGlmIChwb3NpdGlvbiA8IDAgfHwgcG9zaXRpb24gPj0gc2l6ZSkgcmV0dXJuIENPTlZFUlRfVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgZmlyc3QgPSBTLmNoYXJDb2RlQXQocG9zaXRpb24pO1xuICAgIHJldHVybiBmaXJzdCA8IDB4RDgwMCB8fCBmaXJzdCA+IDB4REJGRiB8fCBwb3NpdGlvbiArIDEgPT09IHNpemVcbiAgICAgIHx8IChzZWNvbmQgPSBTLmNoYXJDb2RlQXQocG9zaXRpb24gKyAxKSkgPCAweERDMDAgfHwgc2Vjb25kID4gMHhERkZGXG4gICAgICAgID8gQ09OVkVSVF9UT19TVFJJTkcgPyBTLmNoYXJBdChwb3NpdGlvbikgOiBmaXJzdFxuICAgICAgICA6IENPTlZFUlRfVE9fU1RSSU5HID8gUy5zbGljZShwb3NpdGlvbiwgcG9zaXRpb24gKyAyKSA6IChmaXJzdCAtIDB4RDgwMCA8PCAxMCkgKyAoc2Vjb25kIC0gMHhEQzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUuY29kZVBvaW50QXRgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuY29kZXBvaW50YXRcbiAgY29kZUF0OiBjcmVhdGVNZXRob2QoZmFsc2UpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS5hdGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRoaWFzYnluZW5zL1N0cmluZy5wcm90b3R5cGUuYXRcbiAgY2hhckF0OiBjcmVhdGVNZXRob2QodHJ1ZSlcbn07XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmcm9tID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZyb20nKTtcbnZhciBjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2hlY2stY29ycmVjdG5lc3Mtb2YtaXRlcmF0aW9uJyk7XG5cbnZhciBJTkNPUlJFQ1RfSVRFUkFUSU9OID0gIWNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbihmdW5jdGlvbiAoaXRlcmFibGUpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWZyb20gLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgQXJyYXkuZnJvbShpdGVyYWJsZSk7XG59KTtcblxuLy8gYEFycmF5LmZyb21gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5mcm9tXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IElOQ09SUkVDVF9JVEVSQVRJT04gfSwge1xuICBmcm9tOiBmcm9tXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=