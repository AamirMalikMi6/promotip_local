(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard_company"],{

/***/ "./assets/js/dashboard/company.js":
/*!****************************************!*\
  !*** ./assets/js/dashboard/company.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

$(function () {
  Dropzone.autoDiscover = false;
  $('.add-hours').on('click', function () {
    var day = $(this).data('day');
    $('.day-' + day).removeClass('d-none');
    $(this).addClass('d-none');
    return false;
  });
  $('.remove-hours').on('click', function () {
    var day = $(this).data('day');
    $('.day-' + day).addClass('d-none');
    $('.add-hours[data-day="' + day + '"]').removeClass('d-none');
    $('select[name="openingHour[' + day + '][from][1]"').val('');
    $('select[name="openingHour[' + day + '][till][1]"').val('');
    return false;
  });
  $('.select2-location').select2({
    theme: "bootstrap",
    placeholder: 'Zipcode & city',
    minimumInputLength: 2,
    multiple: false,
    ajax: {
      url: '/ajax/city',
      dataType: 'json'
    }
  });
  $('.select2-location').on('select2:select', function (e) {
    var data = e.params.data;
    $('#company_form_geoPlacesId').val(data.id);
  });

  if ($('#company_form_geoPlacesId').val() > 0) {
    $.getJSON("/ajax/city/?id=" + $('#company_form_geoPlacesId').val(), function (data) {
      var newOption = new Option(data.text, data.id, true, true);
      $('.select2-location').append(newOption).trigger('change');
    });
  }

  $('.select2-tags').select2({
    theme: "bootstrap",
    placeholder: 'Tags',
    minimumInputLength: 2,
    maximumSelectionLength: 10,
    multiple: true,
    tags: true,
    ajax: {
      url: '/ajax/tag/',
      dataType: 'json'
    }
  }); //setPhotoCols();

  $('#dropzone').dropzone({
    paramName: "file",
    maxFiles: 20,
    addRemoveLinks: true,
    previewTemplate: '<div class="dz-preview dz-file-preview">\n' + '  <div class="dz-details">\n' + '    <img data-dz-thumbnail />\n' + '  </div>\n' + '  <div class="dz-progress d-none"><span class="dz-upload" data-dz-uploadprogress></span></div>\n' + '  <div class="dz-success-mark d-none"><span>✔</span></div>\n' + '  <div class="dz-error-mark d-none"><span>✘</span></div>\n' + '  <div class="dz-error-message d-none"><span data-dz-errormessage></span></div>\n' + '</div>',
    init: function init() {
      this.on("success", function (file, response) {
        this.removeFile(file);
        $.get($('#dropzone').data('ph') + '?temp=' + response.temporaryId, function (data) {
          $.when(addUpload(data)).then(function () {
            $('.photo-move').removeClass('d-none');
            var photos_q = $('.photo-container').length;
            $('.photo-container').each(function (i, el) {
              if (i == 0 || photos_q == 1) {
                $(this).find('.photo-move[data-position="up"]').addClass('d-none');
              }

              if (i + 1 == photos_q) {
                $(this).find('.photo-move[data-position="down"]').addClass('d-none');
              }
            });
            photoEvents(); //setPhotoCols();
          });
        });
      });
    }
  });
  photoEvents();
});

function addUpload(data) {
  if ($('.photo-container').length == 0) {
    $('#dropzone').parent().append(data);
  } else {
    $('.photo-container').parent().append(data);
  }
}

function setPhotoCols() {
  $('.photo-container > .photo').each(function (i, el) {
    if (i == 0) {
      $(this).addClass('col-12').removeClass('col-6');
    } else {
      $(this).addClass('col-6').removeClass('col-12');
    }
  });
}

function photoEvents() {
  $('.photo-move').on('click', function () {
    var counter = 0;
    var order = [];
    var url = $(this).data('url');
    var photo = $('#photo-' + $(this).data('id'));
    var photos_q = $('.photo-container > .photo').length;

    if ($(this).data('position') == 'up') {
      photo.prev().insertAfter(photo);
    } else {
      photo.next().insertBefore(photo);
    }

    $('.photo-move').removeClass('d-none');
    $('.photo-container').each(function (i, el) {
      if (i == 0 || photos_q == 1) {
        $(this).find('.photo-move[data-position="up"]').addClass('d-none');
      }

      if (i + 1 == photos_q) {
        $(this).find('.photo-move[data-position="down"]').addClass('d-none');
      }

      order[counter] = $(this).data('id');
      counter++;
    }); //setPhotoCols();

    $.ajax({
      type: "POST",
      data: {
        'order': order
      },
      url: url,
      success: function success(msg) {}
    });
    return false;
  });
  $('.photo-del').on('click', function () {
    $.getJSON($(this).data('url') + '?id=' + $(this).data('id'), function (res) {
      if (res.success == true) {
        $('#photo-' + res.id).fadeOut(500, function () {
          $.when($($('#photo-' + res.id)).remove()).then(function () {
            var photos_q = $('.photo-container > .photo').length;
            $('.photo-container > .photo').each(function (i, el) {
              if (i == 0) {
                $(this).find('.photo-move[data-position="up"]').addClass('d-none');
              } else if (i + 1 == photos_q) {
                $(this).find('.photo-move[data-position="down"]').addClass('d-none');
              }
            });
          }); //setPhotoCols();
        });
      }
    });
    return false;
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/dashboard_company.js":
/*!****************************************!*\
  !*** ./assets/js/dashboard_company.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_company_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/company.js */ "./assets/js/dashboard/company.js");
/* harmony import */ var _dashboard_company_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dashboard_company_js__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__(/*! select2/dist/js/select2.full.js */ "./node_modules/select2/dist/js/select2.full.js");

__webpack_require__(/*! select2/dist/css/select2.css */ "./node_modules/select2/dist/css/select2.css");

__webpack_require__(/*! select2-theme-bootstrap4/dist/select2-bootstrap.css */ "./node_modules/select2-theme-bootstrap4/dist/select2-bootstrap.css");



/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $find = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ })

},[["./assets/js/dashboard_company.js","runtime","vendors~admin~app~dashboard~dashboard_company~dashboard_events~dropzone~fullcalendar~notification~photoswipe","vendors~admin~app~dashboard_company~dashboard_events~photoswipe~sliders","vendors~dashboard~dashboard_company~dashboard_events"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZGFzaGJvYXJkL2NvbXBhbnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2Rhc2hib2FyZF9jb21wYW55LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maW5kLmpzIl0sIm5hbWVzIjpbIiQiLCJEcm9wem9uZSIsImF1dG9EaXNjb3ZlciIsIm9uIiwiZGF5IiwiZGF0YSIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJ2YWwiLCJzZWxlY3QyIiwidGhlbWUiLCJwbGFjZWhvbGRlciIsIm1pbmltdW1JbnB1dExlbmd0aCIsIm11bHRpcGxlIiwiYWpheCIsInVybCIsImRhdGFUeXBlIiwiZSIsInBhcmFtcyIsImlkIiwiZ2V0SlNPTiIsIm5ld09wdGlvbiIsIk9wdGlvbiIsInRleHQiLCJhcHBlbmQiLCJ0cmlnZ2VyIiwibWF4aW11bVNlbGVjdGlvbkxlbmd0aCIsInRhZ3MiLCJkcm9wem9uZSIsInBhcmFtTmFtZSIsIm1heEZpbGVzIiwiYWRkUmVtb3ZlTGlua3MiLCJwcmV2aWV3VGVtcGxhdGUiLCJpbml0IiwiZmlsZSIsInJlc3BvbnNlIiwicmVtb3ZlRmlsZSIsImdldCIsInRlbXBvcmFyeUlkIiwid2hlbiIsImFkZFVwbG9hZCIsInRoZW4iLCJwaG90b3NfcSIsImxlbmd0aCIsImVhY2giLCJpIiwiZWwiLCJmaW5kIiwicGhvdG9FdmVudHMiLCJwYXJlbnQiLCJzZXRQaG90b0NvbHMiLCJjb3VudGVyIiwib3JkZXIiLCJwaG90byIsInByZXYiLCJpbnNlcnRBZnRlciIsIm5leHQiLCJpbnNlcnRCZWZvcmUiLCJ0eXBlIiwic3VjY2VzcyIsIm1zZyIsInJlcyIsImZhZGVPdXQiLCJyZW1vdmUiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBQSxDQUFDLENBQUMsWUFBWTtBQUNWQyxVQUFRLENBQUNDLFlBQVQsR0FBd0IsS0FBeEI7QUFDQUYsR0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQkcsRUFBaEIsQ0FBbUIsT0FBbkIsRUFBNEIsWUFBWTtBQUNwQyxRQUFJQyxHQUFHLEdBQUdKLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUssSUFBUixDQUFhLEtBQWIsQ0FBVjtBQUNBTCxLQUFDLENBQUMsVUFBVUksR0FBWCxDQUFELENBQWlCRSxXQUFqQixDQUE2QixRQUE3QjtBQUVBTixLQUFDLENBQUMsSUFBRCxDQUFELENBQVFPLFFBQVIsQ0FBaUIsUUFBakI7QUFFQSxXQUFPLEtBQVA7QUFDSCxHQVBEO0FBU0FQLEdBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJHLEVBQW5CLENBQXNCLE9BQXRCLEVB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdFQSxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDcEQsMkJBQTJCLG1CQUFPLENBQUMsdUdBQXFDO0FBQ3hFLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hCQSx5QkFBeUIsbUJBQU8sQ0FBQyxtR0FBbUM7QUFDcEUsa0JBQWtCLG1CQUFPLENBQUMscUZBQTRCOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNSYTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsWUFBWSxtQkFBTyxDQUFDLHlGQUE4QjtBQUNsRCx1QkFBdUIsbUJBQU8sQ0FBQywrRkFBaUM7O0FBRWhFO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCLEVBQUU7O0FBRW5FO0FBQ0E7QUFDQSxHQUFHLG9EQUFvRDtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EiLCJmaWxlIjoiZGFzaGJvYXJkX2NvbXBhbnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uICgpIHtcclxuICAgIERyb3B6b25lLmF1dG9EaXNjb3ZlciA9IGZhbHNlO1xyXG4gICAgJCgnLmFkZC1ob3VycycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZGF5ID0gJCh0aGlzKS5kYXRhKCdkYXknKTtcclxuICAgICAgICAkKCcuZGF5LScgKyBkYXkpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuXHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5yZW1vdmUtaG91cnMnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGRheSA9ICQodGhpcykuZGF0YSgnZGF5Jyk7XHJcbiAgICAgICAgJCgnLmRheS0nICsgZGF5KS5hZGRDbGFzcygnZC1ub25lJyk7XHJcblxyXG4gICAgICAgICQoJy5hZGQtaG91cnNbZGF0YS1kYXk9XCInICsgZGF5ICsgJ1wiXScpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAkKCdzZWxlY3RbbmFtZT1cIm9wZW5pbmdIb3VyWycgKyBkYXkgKyAnXVtmcm9tXVsxXVwiJykudmFsKCcnKTtcclxuICAgICAgICAkKCdzZWxlY3RbbmFtZT1cIm9wZW5pbmdIb3VyWycgKyBkYXkgKyAnXVt0aWxsXVsxXVwiJykudmFsKCcnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnNlbGVjdDItbG9jYXRpb24nKS5zZWxlY3QyKHtcclxuICAgICAgICB0aGVtZTogXCJib290c3RyYXBcIixcclxuICAgICAgICBwbGFjZWhvbGRlcjogJ1ppcGNvZGUgJiBjaXR5JyxcclxuICAgICAgICBtaW5pbXVtSW5wdXRMZW5ndGg6IDIsXHJcbiAgICAgICAgbXVsdGlwbGU6IGZhbHNlLFxyXG4gICAgICAgIGFqYXg6IHtcclxuICAgICAgICAgICAgdXJsOiAnL2FqYXgvY2l0eScsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbidcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuc2VsZWN0Mi1sb2NhdGlvbicpLm9uKCdzZWxlY3QyOnNlbGVjdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBlLnBhcmFtcy5kYXRhO1xyXG4gICAgICAgICQoJyNjb21wYW55X2Zvcm1fZ2VvUGxhY2VzSWQnKS52YWwoZGF0YS5pZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoJCgnI2NvbXBhbnlfZm9ybV9nZW9QbGFjZXNJZCcpLnZhbCgpID4gMCkge1xyXG4gICAgICAgICQuZ2V0SlNPTihcIi9hamF4L2NpdHkvP2lkPVwiICsgJCgnI2NvbXBhbnlfZm9ybV9nZW9QbGFjZXNJZCcpLnZhbCgpLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICB2YXIgbmV3T3B0aW9uID0gbmV3IE9wdGlvbihkYXRhLnRleHQsIGRhdGEuaWQsIHRydWUsIHRydWUpO1xyXG4gICAgICAgICAgICAkKCcuc2VsZWN0Mi1sb2NhdGlvbicpLmFwcGVuZChuZXdPcHRpb24pLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgICQoJy5zZWxlY3QyLXRhZ3MnKS5zZWxlY3QyKHtcclxuICAgICAgICB0aGVtZTogXCJib290c3RyYXBcIixcclxuICAgICAgICBwbGFjZWhvbGRlcjogJ1RhZ3MnLFxyXG4gICAgICAgIG1pbmltdW1JbnB1dExlbmd0aDogMixcclxuICAgICAgICBtYXhpbXVtU2VsZWN0aW9uTGVuZ3RoOiAxMCxcclxuICAgICAgICBtdWx0aXBsZTogdHJ1ZSxcclxuICAgICAgICB0YWdzOiB0cnVlLFxyXG4gICAgICAgIGFqYXg6IHtcclxuICAgICAgICAgICAgdXJsOiAnL2FqYXgvdGFnLycsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbidcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL3NldFBob3RvQ29scygpO1xyXG5cclxuICAgICQoJyNkcm9wem9uZScpLmRyb3B6b25lKHtcclxuICAgICAgICBwYXJhbU5hbWU6IFwiZmlsZVwiLFxyXG4gICAgICAgIG1heEZpbGVzOiAyMCxcclxuICAgICAgICBhZGRSZW1vdmVMaW5rczogdHJ1ZSxcclxuICAgICAgICBwcmV2aWV3VGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwiZHotcHJldmlldyBkei1maWxlLXByZXZpZXdcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgPGRpdiBjbGFzcz1cImR6LWRldGFpbHNcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICA8aW1nIGRhdGEtZHotdGh1bWJuYWlsIC8+XFxuJyArXHJcbiAgICAgICAgICAgICcgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICA8ZGl2IGNsYXNzPVwiZHotcHJvZ3Jlc3MgZC1ub25lXCI+PHNwYW4gY2xhc3M9XCJkei11cGxvYWRcIiBkYXRhLWR6LXVwbG9hZHByb2dyZXNzPjwvc3Bhbj48L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgPGRpdiBjbGFzcz1cImR6LXN1Y2Nlc3MtbWFyayBkLW5vbmVcIj48c3Bhbj7inJQ8L3NwYW4+PC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgIDxkaXYgY2xhc3M9XCJkei1lcnJvci1tYXJrIGQtbm9uZVwiPjxzcGFuPuKcmDwvc3Bhbj48L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgPGRpdiBjbGFzcz1cImR6LWVycm9yLW1lc3NhZ2UgZC1ub25lXCI+PHNwYW4gZGF0YS1kei1lcnJvcm1lc3NhZ2U+PC9zcGFuPjwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JyxcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMub24oXCJzdWNjZXNzXCIsIGZ1bmN0aW9uIChmaWxlLCByZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVGaWxlKGZpbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICQuZ2V0KCQoJyNkcm9wem9uZScpLmRhdGEoJ3BoJykgKyAnP3RlbXA9JyArIHJlc3BvbnNlLnRlbXBvcmFyeUlkLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQud2hlbihhZGRVcGxvYWQoZGF0YSkpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcucGhvdG8tbW92ZScpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBob3Rvc19xID0gJCgnLnBob3RvLWNvbnRhaW5lcicpLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnBob3RvLWNvbnRhaW5lcicpLmVhY2goZnVuY3Rpb24gKGksIGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAwIHx8IHBob3Rvc19xID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5waG90by1tb3ZlW2RhdGEtcG9zaXRpb249XCJ1cFwiXScpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoaSArIDEpID09IHBob3Rvc19xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcucGhvdG8tbW92ZVtkYXRhLXBvc2l0aW9uPVwiZG93blwiXScpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBob3RvRXZlbnRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vc2V0UGhvdG9Db2xzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHBob3RvRXZlbnRzKCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gYWRkVXBsb2FkKGRhdGEpIHtcclxuICAgIGlmICgkKCcucGhvdG8tY29udGFpbmVyJykubGVuZ3RoID09IDApIHtcclxuICAgICAgICAkKCcjZHJvcHpvbmUnKS5wYXJlbnQoKS5hcHBlbmQoZGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJy5waG90by1jb250YWluZXInKS5wYXJlbnQoKS5hcHBlbmQoZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFBob3RvQ29scygpIHtcclxuICAgICQoJy5waG90by1jb250YWluZXIgPiAucGhvdG8nKS5lYWNoKGZ1bmN0aW9uIChpLCBlbCkge1xyXG4gICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnY29sLTEyJykucmVtb3ZlQ2xhc3MoJ2NvbC02Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnY29sLTYnKS5yZW1vdmVDbGFzcygnY29sLTEyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBob3RvRXZlbnRzKCkge1xyXG4gICAgJCgnLnBob3RvLW1vdmUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xyXG4gICAgICAgIHZhciBvcmRlciA9IFtdO1xyXG4gICAgICAgIHZhciB1cmwgPSAkKHRoaXMpLmRhdGEoJ3VybCcpO1xyXG4gICAgICAgIHZhciBwaG90byA9ICQoJyNwaG90by0nICsgJCh0aGlzKS5kYXRhKCdpZCcpKTtcclxuICAgICAgICB2YXIgcGhvdG9zX3EgPSAkKCcucGhvdG8tY29udGFpbmVyID4gLnBob3RvJykubGVuZ3RoO1xyXG5cclxuICAgICAgICBpZiAoJCh0aGlzKS5kYXRhKCdwb3NpdGlvbicpID09ICd1cCcpIHtcclxuICAgICAgICAgICAgcGhvdG8ucHJldigpLmluc2VydEFmdGVyKHBob3RvKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwaG90by5uZXh0KCkuaW5zZXJ0QmVmb3JlKHBob3RvKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJy5waG90by1tb3ZlJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG5cclxuICAgICAgICAkKCcucGhvdG8tY29udGFpbmVyJykuZWFjaChmdW5jdGlvbiAoaSwgZWwpIHtcclxuICAgICAgICAgICAgaWYgKGkgPT0gMCB8fCBwaG90b3NfcSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5waG90by1tb3ZlW2RhdGEtcG9zaXRpb249XCJ1cFwiXScpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoKGkgKyAxKSA9PSBwaG90b3NfcSkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcucGhvdG8tbW92ZVtkYXRhLXBvc2l0aW9uPVwiZG93blwiXScpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcmRlcltjb3VudGVyXSA9ICQodGhpcykuZGF0YSgnaWQnKTtcclxuICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL3NldFBob3RvQ29scygpO1xyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgZGF0YTogeydvcmRlcic6IG9yZGVyfSxcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChtc2cpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcucGhvdG8tZGVsJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQuZ2V0SlNPTigkKHRoaXMpLmRhdGEoJ3VybCcpICsgJz9pZD0nICsgJCh0aGlzKS5kYXRhKCdpZCcpLCBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuc3VjY2VzcyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjcGhvdG8tJyArIHJlcy5pZCkuZmFkZU91dCg1MDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkLndoZW4oJCgkKCcjcGhvdG8tJyArIHJlcy5pZCkpLnJlbW92ZSgpKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBob3Rvc19xID0gJCgnLnBob3RvLWNvbnRhaW5lciA+IC5waG90bycpLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnBob3RvLWNvbnRhaW5lciA+IC5waG90bycpLmVhY2goZnVuY3Rpb24gKGksIGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcucGhvdG8tbW92ZVtkYXRhLXBvc2l0aW9uPVwidXBcIl0nKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKChpICsgMSkgPT0gcGhvdG9zX3EpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5waG90by1tb3ZlW2RhdGEtcG9zaXRpb249XCJkb3duXCJdJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAvL3NldFBob3RvQ29scygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4iLCJyZXF1aXJlKCdzZWxlY3QyL2Rpc3QvanMvc2VsZWN0Mi5mdWxsLmpzJyk7XHJcbnJlcXVpcmUoJ3NlbGVjdDIvZGlzdC9jc3Mvc2VsZWN0Mi5jc3MnKTtcclxucmVxdWlyZSgnc2VsZWN0Mi10aGVtZS1ib290c3RyYXA0L2Rpc3Qvc2VsZWN0Mi1ib290c3RyYXAuY3NzJyk7XHJcblxyXG5pbXBvcnQgJy4vZGFzaGJvYXJkL2NvbXBhbnkuanMnO1xyXG4iLCJ2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbnZhciBVTlNDT1BBQkxFUyA9IHdlbGxLbm93blN5bWJvbCgndW5zY29wYWJsZXMnKTtcbnZhciBBcnJheVByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZTtcblxuLy8gQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5pZiAoQXJyYXlQcm90b3R5cGVbVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZCkge1xuICBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKEFycmF5UHJvdG90eXBlLCBVTlNDT1BBQkxFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogY3JlYXRlKG51bGwpXG4gIH0pO1xufVxuXG4vLyBhZGQgYSBrZXkgdG8gQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgQXJyYXlQcm90b3R5cGVbVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcbiIsInZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dCcpO1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcblxudmFyIHB1c2ggPSBbXS5wdXNoO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgZm9yRWFjaCwgbWFwLCBmaWx0ZXIsIHNvbWUsIGV2ZXJ5LCBmaW5kLCBmaW5kSW5kZXgsIGZpbHRlck91dCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgdmFyIElTX01BUCA9IFRZUEUgPT0gMTtcbiAgdmFyIElTX0ZJTFRFUiA9IFRZUEUgPT0gMjtcbiAgdmFyIElTX1NPTUUgPSBUWVBFID09IDM7XG4gIHZhciBJU19FVkVSWSA9IFRZUEUgPT0gNDtcbiAgdmFyIElTX0ZJTkRfSU5ERVggPSBUWVBFID09IDY7XG4gIHZhciBJU19GSUxURVJfT1VUID0gVFlQRSA9PSA3O1xuICB2YXIgTk9fSE9MRVMgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCwgc3BlY2lmaWNDcmVhdGUpIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgc2VsZiA9IEluZGV4ZWRPYmplY3QoTyk7XG4gICAgdmFyIGJvdW5kRnVuY3Rpb24gPSBiaW5kKGNhbGxiYWNrZm4sIHRoYXQsIDMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgY3JlYXRlID0gc3BlY2lmaWNDcmVhdGUgfHwgYXJyYXlTcGVjaWVzQ3JlYXRlO1xuICAgIHZhciB0YXJnZXQgPSBJU19NQVAgPyBjcmVhdGUoJHRoaXMsIGxlbmd0aCkgOiBJU19GSUxURVIgfHwgSVNfRklMVEVSX09VVCA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWQ7XG4gICAgdmFyIHZhbHVlLCByZXN1bHQ7XG4gICAgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKSB7XG4gICAgICB2YWx1ZSA9IHNlbGZbaW5kZXhdO1xuICAgICAgcmVzdWx0ID0gYm91bmRGdW5jdGlvbih2YWx1ZSwgaW5kZXgsIE8pO1xuICAgICAgaWYgKFRZUEUpIHtcbiAgICAgICAgaWYgKElTX01BUCkgdGFyZ2V0W2luZGV4XSA9IHJlc3VsdDsgLy8gbWFwXG4gICAgICAgIGVsc2UgaWYgKHJlc3VsdCkgc3dpdGNoIChUWVBFKSB7XG4gICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWx1ZTsgICAgICAgICAgICAgLy8gZmluZFxuICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgICAvLyBmaW5kSW5kZXhcbiAgICAgICAgICBjYXNlIDI6IHB1c2guY2FsbCh0YXJnZXQsIHZhbHVlKTsgLy8gZmlsdGVyXG4gICAgICAgIH0gZWxzZSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICBjYXNlIDQ6IHJldHVybiBmYWxzZTsgICAgICAgICAgICAgLy8gZXZlcnlcbiAgICAgICAgICBjYXNlIDc6IHB1c2guY2FsbCh0YXJnZXQsIHZhbHVlKTsgLy8gZmlsdGVyT3V0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHRhcmdldDtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG4gIGZvckVhY2g6IGNyZWF0ZU1ldGhvZCgwKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcbiAgbWFwOiBjcmVhdGVNZXRob2QoMSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZmlsdGVyYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gIGZpbHRlcjogY3JlYXRlTWV0aG9kKDIpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLnNvbWVgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zb21lXG4gIHNvbWU6IGNyZWF0ZU1ldGhvZCgzKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5ldmVyeWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmV2ZXJ5XG4gIGV2ZXJ5OiBjcmVhdGVNZXRob2QoNCksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZmluZGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcbiAgZmluZDogY3JlYXRlTWV0aG9kKDUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRJbmRleFxuICBmaW5kSW5kZXg6IGNyZWF0ZU1ldGhvZCg2KSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJPdXRgIG1ldGhvZFxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1hcnJheS1maWx0ZXJpbmdcbiAgZmlsdGVyT3V0OiBjcmVhdGVNZXRob2QoNylcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG4vLyBgQXJyYXlTcGVjaWVzQ3JlYXRlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXlzcGVjaWVzY3JlYXRlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbEFycmF5LCBsZW5ndGgpIHtcbiAgdmFyIEM7XG4gIGlmIChpc0FycmF5KG9yaWdpbmFsQXJyYXkpKSB7XG4gICAgQyA9IG9yaWdpbmFsQXJyYXkuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZiAodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKSBDID0gdW5kZWZpbmVkO1xuICAgIGVsc2UgaWYgKGlzT2JqZWN0KEMpKSB7XG4gICAgICBDID0gQ1tTUEVDSUVTXTtcbiAgICAgIGlmIChDID09PSBudWxsKSBDID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSByZXR1cm4gbmV3IChDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEMpKGxlbmd0aCA9PT0gMCA/IDAgOiBsZW5ndGgpO1xufTtcbiIsInZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1mdW5jdGlvbicpO1xuXG4vLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQpO1xuICAgIH07XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwidmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignZG9jdW1lbnQnLCAnZG9jdW1lbnRFbGVtZW50Jyk7XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG4vLyBgSXNBcnJheWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzYXJyYXlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1pc2FycmF5IC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY2xhc3NvZihhcmcpID09ICdBcnJheSc7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGRlZmluZVByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2h0bWwnKTtcbnZhciBkb2N1bWVudENyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xuXG52YXIgR1QgPSAnPic7XG52YXIgTFQgPSAnPCc7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgU0NSSVBUID0gJ3NjcmlwdCc7XG52YXIgSUVfUFJPVE8gPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG5cbnZhciBFbXB0eUNvbnN0cnVjdG9yID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuXG52YXIgc2NyaXB0VGFnID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgcmV0dXJuIExUICsgU0NSSVBUICsgR1QgKyBjb250ZW50ICsgTFQgKyAnLycgKyBTQ1JJUFQgKyBHVDtcbn07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBBY3RpdmVYIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWCA9IGZ1bmN0aW9uIChhY3RpdmVYRG9jdW1lbnQpIHtcbiAgYWN0aXZlWERvY3VtZW50LndyaXRlKHNjcmlwdFRhZygnJykpO1xuICBhY3RpdmVYRG9jdW1lbnQuY2xvc2UoKTtcbiAgdmFyIHRlbXAgPSBhY3RpdmVYRG9jdW1lbnQucGFyZW50V2luZG93Lk9iamVjdDtcbiAgYWN0aXZlWERvY3VtZW50ID0gbnVsbDsgLy8gYXZvaWQgbWVtb3J5IGxlYWtcbiAgcmV0dXJuIHRlbXA7XG59O1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gZG9jdW1lbnRDcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgdmFyIEpTID0gJ2phdmEnICsgU0NSSVBUICsgJzonO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBodG1sLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy80NzVcbiAgaWZyYW1lLnNyYyA9IFN0cmluZyhKUyk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCdkb2N1bWVudC5GPU9iamVjdCcpKTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgcmV0dXJuIGlmcmFtZURvY3VtZW50LkY7XG59O1xuXG4vLyBDaGVjayBmb3IgZG9jdW1lbnQuZG9tYWluIGFuZCBhY3RpdmUgeCBzdXBwb3J0XG4vLyBObyBuZWVkIHRvIHVzZSBhY3RpdmUgeCBhcHByb2FjaCB3aGVuIGRvY3VtZW50LmRvbWFpbiBpcyBub3Qgc2V0XG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltL2lzc3Vlcy8xNTBcbi8vIHZhcmlhdGlvbiBvZiBodHRwczovL2dpdGh1Yi5jb20va2l0Y2FtYnJpZGdlL2VzNS1zaGltL2NvbW1pdC80ZjczOGFjMDY2MzQ2XG4vLyBhdm9pZCBJRSBHQyBidWdcbnZhciBhY3RpdmVYRG9jdW1lbnQ7XG52YXIgTnVsbFByb3RvT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8qIGdsb2JhbCBBY3RpdmVYT2JqZWN0IC0tIG9sZCBJRSAqL1xuICAgIGFjdGl2ZVhEb2N1bWVudCA9IGRvY3VtZW50LmRvbWFpbiAmJiBuZXcgQWN0aXZlWE9iamVjdCgnaHRtbGZpbGUnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogaWdub3JlICovIH1cbiAgTnVsbFByb3RvT2JqZWN0ID0gYWN0aXZlWERvY3VtZW50ID8gTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWChhY3RpdmVYRG9jdW1lbnQpIDogTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lKCk7XG4gIHZhciBsZW5ndGggPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkgZGVsZXRlIE51bGxQcm90b09iamVjdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2xlbmd0aF1dO1xuICByZXR1cm4gTnVsbFByb3RvT2JqZWN0KCk7XG59O1xuXG5oaWRkZW5LZXlzW0lFX1BST1RPXSA9IHRydWU7XG5cbi8vIGBPYmplY3QuY3JlYXRlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmNyZWF0ZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5Q29uc3RydWN0b3IoKTtcbiAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IE51bGxQcm90b09iamVjdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZGVmaW5lUHJvcGVydGllcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnRpZXMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IG9iamVjdEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSA9IGtleXNbaW5kZXgrK10sIFByb3BlcnRpZXNba2V5XSk7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbi8vIGBPYmplY3Qua2V5c2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5rZXlzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWtleXMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZmluZDtcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xuXG52YXIgRklORCA9ICdmaW5kJztcbnZhciBTS0lQU19IT0xFUyA9IHRydWU7XG5cbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5pZiAoRklORCBpbiBbXSkgQXJyYXkoMSlbRklORF0oZnVuY3Rpb24gKCkgeyBTS0lQU19IT0xFUyA9IGZhbHNlOyB9KTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFNLSVBTX0hPTEVTIH0sIHtcbiAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5hZGRUb1Vuc2NvcGFibGVzKEZJTkQpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==