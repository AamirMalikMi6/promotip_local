(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard_events"],{

/***/ "./assets/js/dashboard/event.js":
/*!**************************************!*\
  !*** ./assets/js/dashboard/event.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

$(function () {
  $('#eventadvert_form_channel').on('change', function () {
    console.log('change');
    $('#eventadvert_form_category').val('');
    $('#eventadvert_form_subCategory').val('');
    setParent();
  });
  $('#eventadvert_form_category').on('change', function () {
    $('#eventadvert_form_subCategory').val('');
    setParent();
  });

  if ($('#eventadvert_form_address').length > 0) {
    $('#other_address').prop('checked', true);
    $('.address').removeClass('d-none');
  }

  $('.other_address').on('click', function () {
    if ($('.address').hasClass('d-none')) {
      $('.address').removeClass('d-none');
    } else {
      $('.address').addClass('d-none');
      $('#eventadvert_form_address').val('');
      $('#eventadvert_form_housenumber').val('');
      $('#eventadvert_form_box').val('');
      $('#eventadvert_form_geoPlacesId').val('');
      $('.select2-location').html('');
    }
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
    $('#eventadvert_form_geoPlacesId').val(data.id);
  });
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
  });
  $('.select2-location-company').select2({
    theme: "bootstrap",
    placeholder: 'Zipcode & city',
    minimumInputLength: 2,
    multiple: false,
    ajax: {
      url: '/ajax/city',
      dataType: 'json'
    }
  });
  $('.select2-location-company').on('select2:select', function (e) {
    var data = e.params.data;
    $('#company_form_geoPlacesId').val(data.id);
  });

  if ($('#company_form_geoPlacesId').val() > 0) {
    $.getJSON("/ajax/city/?id=" + $('#company_form_geoPlacesId').val(), function (data) {
      var newOption = new Option(data.text, data.id, true, true);
      $('.select2-location-company').append(newOption).trigger('change');
    });
  }

  if ($('#company_form_geoPlacesId').val() > 0) {
    $.getJSON("/ajax/city/?id=" + $('#eventadvert_form_geoPlacesId').val(), function (data) {
      var newOption = new Option(data.text, data.id, true, true);
      $('.select2-location').append(newOption).trigger('change');
    });
  }

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
    $('.photo-container .photo').each(function (i, el) {
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
  $('#all_day_event').on('change', function () {
    $('#date_hour_bloc').toggleClass('d-none');
  });
  $('#premium_eventadvert_form_redirection_type').on('change', setBigPremiumLink);
  $(window).on('load', setBigPremiumLink);
  $('#premium_eventadvert').on('change', function () {
    var advert = $(this).val();

    if ($('#premium_eventadvert_form_redirection_type').val() == 1) {
      $('#premium_eventadvert_form_redirection_link').val(advert);
    }
  });
});

function setParent() {
  var has_data = 0;
  var selected = $('#eventadvert_form_channel').val();
  $('#eventadvert_form_category').prop('disabled', false);
  $('#eventadvert_form_category > option').addClass('d-none');
  $('#eventadvert_form_category').find('option').each(function (e) {
    if (selected == $(this).data('channel')) {
      $(this).removeClass('d-none');
    }
  });
  var selectedCategory = $('#eventadvert_form_category option:selected').text();
  console.log('adding noe to sub cat options');
  $('#eventadvert_form_subCategory > option').addClass('d-none');
  console.log(selectedCategory);
  $('#eventadvert_form_subCategory').find('option').each(function (e) {
    if (selectedCategory == $(this).data('category')) {
      $(this).removeClass('d-none');
    }
  });
}

setParent();

function setBigPremiumLink() {
  var type = $('#premium_eventadvert_form_redirection_type').val();
  var eventAdvert_field = $('#eventadvert_field');
  var premium_link_field = $('#premium_website_link');
  eventAdvert_field.removeClass('d-none');
  eventAdvert_field.removeClass('d-block');
  premium_link_field.removeClass('d-none');
  premium_link_field.removeClass('d-block'); // $('#premium_eventadvert_form_redirection_link').val('');

  if (type == 0) {
    eventAdvert_field.addClass('d-none');
    premium_link_field.addClass('d-block');
  } else {
    eventAdvert_field.addClass('d-block');
    premium_link_field.addClass('d-none');
    $('#premium_eventadvert_form_redirection_link').val($('#premium_eventadvert').val());
  }
}
/* can't work
$( "img" )
    .error(function() {
        $( this ).attr( "src", "replacement.png" );
    })
    .attr( "src", "missing.png" );
 */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/dashboard/payment.js":
/*!****************************************!*\
  !*** ./assets/js/dashboard/payment.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  'use strict';

  $('#paymentForm').on('submit', function (e) {
    e.preventDefault();
    var payment_option = $('input[name="payment_duration"]:checked').val();

    if (!payment_option) {
      alert('Please select an option for the duration of your premium advert');
    } else {
      $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/payment/generate',
        data: {
          _token: $('input[name="token"]').val(),
          payment_plan: $('input[name="payment_duration"]:checked').val(),
          advert: $('input[name="entity"]').val(),
          advert_name: $('input[name="entity_name"]').val()
        },
        success: function success(data) {
          if (data.uri) {
            window.location = data.uri;
          }
        },
        error: function error(data) {
          console.log(data.error);
        }
      });
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/dashboard_events.js":
/*!***************************************!*\
  !*** ./assets/js/dashboard_events.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/event.js */ "./assets/js/dashboard/event.js");
/* harmony import */ var _dashboard_event_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dashboard_event_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dashboard_payment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/payment.js */ "./assets/js/dashboard/payment.js");
/* harmony import */ var _dashboard_payment_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dashboard_payment_js__WEBPACK_IMPORTED_MODULE_1__);
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

},[["./assets/js/dashboard_events.js","runtime","vendors~admin~app~dashboard~dashboard_company~dashboard_events~dropzone~fullcalendar~notification~photoswipe","vendors~admin~app~dashboard_company~dashboard_events~photoswipe~sliders","vendors~dashboard~dashboard_company~dashboard_events"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZGFzaGJvYXJkL2V2ZW50LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9kYXNoYm9hcmQvcGF5bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZGFzaGJvYXJkX2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmluZC5qcyJdLCJuYW1lcyI6WyIkIiwib24iLCJjb25zb2xlIiwibG9nIiwidmFsIiwic2V0UGFyZW50IiwibGVuZ3RoIiwicHJvcCIsInJlbW92ZUNsYXNzIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsImh0bWwiLCJzZWxlY3QyIiwidGhlbWUiLCJwbGFjZWhvbGRlciIsIm1pbmltdW1JbnB1dExlbmd0aCIsIm11bHRpcGxlIiwiYWpheCIsInVybCIsImRhdGFUeXBlIiwiZSIsImRhdGEiLCJwYXJhbXMiLCJpZCIsIm1heGltdW1TZWxlY3Rpb25MZW5ndGgiLCJ0YWdzIiwiZ2V0SlNPTiIsIm5ld09wdGlvbiIsIk9wdGlvbiIsInRleHQiLCJhcHBlbmQiLCJ0cmlnZ2VyIiwiY291bnRlciIsIm9yZGVyIiwicGhvdG8iLCJwaG90b3NfcSIsInByZXYiLCJpbnNlcnRBZnRlciIsIm5leHQiLCJpbnNlcnRCZWZvcmUiLCJlYWNoIiwiaSIsImVsIiwiZmluZCIsInR5cGUiLCJzdWNjZXNzIiwibXNnIiwicmVzIiwiZmFkZU91dCIsIndoZW4iLCJyZW1vdmUiLCJ0aGVuIiwidG9nZ2xlQ2xhc3MiLCJzZXRCaWdQcmVtaXVtTGluayIsIndpbmRvdyIsImFkdmVydCIsImhhc19kYXRhIiwic2VsZWN0ZWQiLCJzZWxlY3RlZENhdGVnb3J5IiwiZXZlbnRBZHZlcnRfZmllbGQiLCJwcmVtaXVtX2xpbmtfZmllbGQiLCJwcmV2ZW50RGVmYXVsdCIsInBheW1lbnRfb3B0aW9uIiwiYWxlcnQiLCJfdG9rZW4iLCJwYXltZW50X3BsYW4iLCJhZHZlcnRfbmFtZSIsInVyaSIsImxvY2F0aW9uIiwiZXJyb3IiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBQSxDQUFDLENBQUMsWUFBWTtBQUNWQSxHQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQkMsRUFBL0IsQ0FBa0MsUUFBbEMsRUFBNEMsWUFBWTtBQUNwREMsV0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNBSCxLQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ0ksR0FBaEMsQ0FBb0MsRUFBcEM7QUFDQUosS0FBQyxDQUFDLCtCQUFELENBQUQsQ0FBbUNJLEdBQW5DLENBQXVDLEVBQXZDO0FBQ0FDLGFBQVM7QUFDWixHQUxEO0FB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L0MsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hCQSx5QkFBeUIsbUJBQU8sQ0FBQyxtR0FBbUM7QUFDcEUsa0JBQWtCLG1CQUFPLENBQUMscUZBQTRCOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNSYTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsWUFBWSxtQkFBTyxDQUFDLHlGQUE4QjtBQUNsRCx1QkFBdUIsbUJBQU8sQ0FBQywrRkFBaUM7O0FBRWhFO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCLEVBQUU7O0FBRW5FO0FBQ0E7QUFDQSxHQUFHLG9EQUFvRDtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EiLCJmaWxlIjoiZGFzaGJvYXJkX2V2ZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI2V2ZW50YWR2ZXJ0X2Zvcm1fY2hhbm5lbCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NoYW5nZScpO1xyXG4gICAgICAgICQoJyNldmVudGFkdmVydF9mb3JtX2NhdGVnb3J5JykudmFsKCcnKTtcclxuICAgICAgICAkKCcjZXZlbnRhZHZlcnRfZm9ybV9zdWJDYXRlZ29yeScpLnZhbCgnJyk7XHJcbiAgICAgICAgc2V0UGFyZW50KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjZXZlbnRhZHZlcnRfZm9ybV9jYXRlZ29yeScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnI2V2ZW50YWR2ZXJ0X2Zvcm1fc3ViQ2F0ZWdvcnknKS52YWwoJycpO1xyXG4gICAgICAgIHNldFBhcmVudCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCQoJyNldmVudGFkdmVydF9mb3JtX2FkZHJlc3MnKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgJCgnI290aGVyX2FkZHJlc3MnKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcbiAgICAgICAgJCgnLmFkZHJlc3MnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnLm90aGVyX2FkZHJlc3MnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCQoJy5hZGRyZXNzJykuaGFzQ2xhc3MoJ2Qtbm9uZScpKSB7XHJcbiAgICAgICAgICAgICQoJy5hZGRyZXNzJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJy5hZGRyZXNzJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICAkKCcjZXZlbnRhZHZlcnRfZm9ybV9hZGRyZXNzJykudmFsKCcnKTtcclxuICAgICAgICAgICAgJCgnI2V2ZW50YWR2ZXJ0X2Zvcm1faG91c2VudW1iZXInKS52YWwoJycpO1xyXG4gICAgICAgICAgICAkKCcjZXZlbnRhZHZlcnRfZm9ybV9ib3gnKS52YWwoJycpO1xyXG4gICAgICAgICAgICAkKCcjZXZlbnRhZHZlcnRfZm9ybV9nZW9QbGFjZXNJZCcpLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICQoJy5zZWxlY3QyLWxvY2F0aW9uJykuaHRtbCgnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnNlbGVjdDItbG9jYXRpb24nKS5zZWxlY3QyKHtcclxuICAgICAgICB0aGVtZTogXCJib290c3RyYXBcIixcclxuICAgICAgICBwbGFjZWhvbGRlcjogJ1ppcGNvZGUgJiBjaXR5JyxcclxuICAgICAgICBtaW5pbXVtSW5wdXRMZW5ndGg6IDIsXHJcbiAgICAgICAgbXVsdGlwbGU6IGZhbHNlLFxyXG4gICAgICAgIGFqYXg6IHtcclxuICAgICAgICAgICAgdXJsOiAnL2FqYXgvY2l0eScsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbidcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuc2VsZWN0Mi1sb2NhdGlvbicpLm9uKCdzZWxlY3QyOnNlbGVjdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBlLnBhcmFtcy5kYXRhO1xyXG4gICAgICAgICQoJyNldmVudGFkdmVydF9mb3JtX2dlb1BsYWNlc0lkJykudmFsKGRhdGEuaWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnNlbGVjdDItdGFncycpLnNlbGVjdDIoe1xyXG4gICAgICAgIHRoZW1lOiBcImJvb3RzdHJhcFwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnVGFncycsXHJcbiAgICAgICAgbWluaW11bUlucHV0TGVuZ3RoOiAyLFxyXG4gICAgICAgIG1heGltdW1TZWxlY3Rpb25MZW5ndGg6IDEwLFxyXG4gICAgICAgIG11bHRpcGxlOiB0cnVlLFxyXG4gICAgICAgIHRhZ3M6IHRydWUsXHJcbiAgICAgICAgYWpheDoge1xyXG4gICAgICAgICAgICB1cmw6ICcvYWpheC90YWcvJyxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJ1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5zZWxlY3QyLWxvY2F0aW9uLWNvbXBhbnknKS5zZWxlY3QyKHtcclxuICAgICAgICB0aGVtZTogXCJib290c3RyYXBcIixcclxuICAgICAgICBwbGFjZWhvbGRlcjogJ1ppcGNvZGUgJiBjaXR5JyxcclxuICAgICAgICBtaW5pbXVtSW5wdXRMZW5ndGg6IDIsXHJcbiAgICAgICAgbXVsdGlwbGU6IGZhbHNlLFxyXG4gICAgICAgIGFqYXg6IHtcclxuICAgICAgICAgICAgdXJsOiAnL2FqYXgvY2l0eScsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbidcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuc2VsZWN0Mi1sb2NhdGlvbi1jb21wYW55Jykub24oJ3NlbGVjdDI6c2VsZWN0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IGUucGFyYW1zLmRhdGE7XHJcbiAgICAgICAgJCgnI2NvbXBhbnlfZm9ybV9nZW9QbGFjZXNJZCcpLnZhbChkYXRhLmlkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICgkKCcjY29tcGFueV9mb3JtX2dlb1BsYWNlc0lkJykudmFsKCkgPiAwKSB7XHJcbiAgICAgICAgJC5nZXRKU09OKFwiL2FqYXgvY2l0eS8/aWQ9XCIgKyAkKCcjY29tcGFueV9mb3JtX2dlb1BsYWNlc0lkJykudmFsKCksIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHZhciBuZXdPcHRpb24gPSBuZXcgT3B0aW9uKGRhdGEudGV4dCwgZGF0YS5pZCwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICQoJy5zZWxlY3QyLWxvY2F0aW9uLWNvbXBhbnknKS5hcHBlbmQobmV3T3B0aW9uKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoJCgnI2NvbXBhbnlfZm9ybV9nZW9QbGFjZXNJZCcpLnZhbCgpID4gMCkge1xyXG4gICAgICAgICQuZ2V0SlNPTihcIi9hamF4L2NpdHkvP2lkPVwiICsgJCgnI2V2ZW50YWR2ZXJ0X2Zvcm1fZ2VvUGxhY2VzSWQnKS52YWwoKSwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgdmFyIG5ld09wdGlvbiA9IG5ldyBPcHRpb24oZGF0YS50ZXh0LCBkYXRhLmlkLCB0cnVlLCB0cnVlKTtcclxuICAgICAgICAgICAgJCgnLnNlbGVjdDItbG9jYXRpb24nKS5hcHBlbmQobmV3T3B0aW9uKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgICQoJy5waG90by1tb3ZlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuICAgICAgICB2YXIgb3JkZXIgPSBbXTtcclxuICAgICAgICB2YXIgdXJsID0gJCh0aGlzKS5kYXRhKCd1cmwnKTtcclxuICAgICAgICB2YXIgcGhvdG8gPSAkKCcjcGhvdG8tJyArICQodGhpcykuZGF0YSgnaWQnKSk7XHJcbiAgICAgICAgdmFyIHBob3Rvc19xID0gJCgnLnBob3RvLWNvbnRhaW5lciA+IC5waG90bycpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKCQodGhpcykuZGF0YSgncG9zaXRpb24nKSA9PSAndXAnKSB7XHJcbiAgICAgICAgICAgIHBob3RvLnByZXYoKS5pbnNlcnRBZnRlcihwaG90byk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGhvdG8ubmV4dCgpLmluc2VydEJlZm9yZShwaG90byk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcucGhvdG8tbW92ZScpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuXHJcbiAgICAgICAgJCgnLnBob3RvLWNvbnRhaW5lciAucGhvdG8nKS5lYWNoKGZ1bmN0aW9uIChpLCBlbCkge1xyXG4gICAgICAgICAgICBpZiAoaSA9PSAwIHx8IHBob3Rvc19xID09IDEpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnLnBob3RvLW1vdmVbZGF0YS1wb3NpdGlvbj1cInVwXCJdJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgoaSArIDEpID09IHBob3Rvc19xKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5waG90by1tb3ZlW2RhdGEtcG9zaXRpb249XCJkb3duXCJdJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9yZGVyW2NvdW50ZXJdID0gJCh0aGlzKS5kYXRhKCdpZCcpO1xyXG4gICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vc2V0UGhvdG9Db2xzKCk7XHJcblxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBkYXRhOiB7J29yZGVyJzogb3JkZXJ9LFxyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKG1zZykge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5waG90by1kZWwnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJC5nZXRKU09OKCQodGhpcykuZGF0YSgndXJsJykgKyAnP2lkPScgKyAkKHRoaXMpLmRhdGEoJ2lkJyksIGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICQoJyNwaG90by0nICsgcmVzLmlkKS5mYWRlT3V0KDUwMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQud2hlbigkKCQoJyNwaG90by0nICsgcmVzLmlkKSkucmVtb3ZlKCkpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGhvdG9zX3EgPSAkKCcucGhvdG8tY29udGFpbmVyID4gLnBob3RvJykubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcucGhvdG8tY29udGFpbmVyID4gLnBob3RvJykuZWFjaChmdW5jdGlvbiAoaSwgZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5waG90by1tb3ZlW2RhdGEtcG9zaXRpb249XCJ1cFwiXScpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKGkgKyAxKSA9PSBwaG90b3NfcSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnLnBob3RvLW1vdmVbZGF0YS1wb3NpdGlvbj1cImRvd25cIl0nKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vc2V0UGhvdG9Db2xzKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI2FsbF9kYXlfZXZlbnQnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJyNkYXRlX2hvdXJfYmxvYycpLnRvZ2dsZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJyNwcmVtaXVtX2V2ZW50YWR2ZXJ0X2Zvcm1fcmVkaXJlY3Rpb25fdHlwZScpLm9uKCdjaGFuZ2UnLCBzZXRCaWdQcmVtaXVtTGluayk7XHJcbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCBzZXRCaWdQcmVtaXVtTGluayk7XHJcblxyXG4gICAgJCgnI3ByZW1pdW1fZXZlbnRhZHZlcnQnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IGFkdmVydCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgaWYgKCAkKCcjcHJlbWl1bV9ldmVudGFkdmVydF9mb3JtX3JlZGlyZWN0aW9uX3R5cGUnKS52YWwoKSA9PSAxICkge1xyXG4gICAgICAgICAgICAkKCcjcHJlbWl1bV9ldmVudGFkdmVydF9mb3JtX3JlZGlyZWN0aW9uX2xpbmsnKS52YWwoYWR2ZXJ0KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBzZXRQYXJlbnQoKSB7XHJcbiAgICB2YXIgaGFzX2RhdGEgPSAwO1xyXG4gICAgdmFyIHNlbGVjdGVkID0gJCgnI2V2ZW50YWR2ZXJ0X2Zvcm1fY2hhbm5lbCcpLnZhbCgpO1xyXG5cclxuICAgICQoJyNldmVudGFkdmVydF9mb3JtX2NhdGVnb3J5JykucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcblxyXG4gICAgJCgnI2V2ZW50YWR2ZXJ0X2Zvcm1fY2F0ZWdvcnkgPiBvcHRpb24nKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcblxyXG4gICAgJCgnI2V2ZW50YWR2ZXJ0X2Zvcm1fY2F0ZWdvcnknKS5maW5kKCdvcHRpb24nKS5lYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkID09ICQodGhpcykuZGF0YSgnY2hhbm5lbCcpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdmFyIHNlbGVjdGVkQ2F0ZWdvcnkgPSAkKCcjZXZlbnRhZHZlcnRfZm9ybV9jYXRlZ29yeSBvcHRpb246c2VsZWN0ZWQnKS50ZXh0KCk7XHJcbiAgICBjb25zb2xlLmxvZygnYWRkaW5nIG5vZSB0byBzdWIgY2F0IG9wdGlvbnMnKVxyXG4gICAgJCgnI2V2ZW50YWR2ZXJ0X2Zvcm1fc3ViQ2F0ZWdvcnkgPiBvcHRpb24nKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZENhdGVnb3J5KVxyXG4gICAgJCgnI2V2ZW50YWR2ZXJ0X2Zvcm1fc3ViQ2F0ZWdvcnknKS5maW5kKCdvcHRpb24nKS5lYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkQ2F0ZWdvcnkgPT0gJCh0aGlzKS5kYXRhKCdjYXRlZ29yeScpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5zZXRQYXJlbnQoKTtcclxuXHJcbmZ1bmN0aW9uIHNldEJpZ1ByZW1pdW1MaW5rKCkge1xyXG4gICAgbGV0IHR5cGUgPSAkKCcjcHJlbWl1bV9ldmVudGFkdmVydF9mb3JtX3JlZGlyZWN0aW9uX3R5cGUnKS52YWwoKTtcclxuICAgIGxldCBldmVudEFkdmVydF9maWVsZCA9ICQoJyNldmVudGFkdmVydF9maWVsZCcpO1xyXG4gICAgbGV0IHByZW1pdW1fbGlua19maWVsZCA9ICQoJyNwcmVtaXVtX3dlYnNpdGVfbGluaycpO1xyXG5cclxuICAgIGV2ZW50QWR2ZXJ0X2ZpZWxkLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgIGV2ZW50QWR2ZXJ0X2ZpZWxkLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XHJcbiAgICBwcmVtaXVtX2xpbmtfZmllbGQucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgcHJlbWl1bV9saW5rX2ZpZWxkLnJlbW92ZUNsYXNzKCdkLWJsb2NrJyk7XHJcblxyXG4gICAgLy8gJCgnI3ByZW1pdW1fZXZlbnRhZHZlcnRfZm9ybV9yZWRpcmVjdGlvbl9saW5rJykudmFsKCcnKTtcclxuXHJcbiAgICBpZiAoIHR5cGUgPT0gMCApIHsgICAgICAgIFxyXG4gICAgICAgIGV2ZW50QWR2ZXJ0X2ZpZWxkLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICBwcmVtaXVtX2xpbmtfZmllbGQuYWRkQ2xhc3MoJ2QtYmxvY2snKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXZlbnRBZHZlcnRfZmllbGQuYWRkQ2xhc3MoJ2QtYmxvY2snKTtcclxuICAgICAgICBwcmVtaXVtX2xpbmtfZmllbGQuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICQoJyNwcmVtaXVtX2V2ZW50YWR2ZXJ0X2Zvcm1fcmVkaXJlY3Rpb25fbGluaycpLnZhbCgkKCcjcHJlbWl1bV9ldmVudGFkdmVydCcpLnZhbCgpKTtcclxuICAgIH1cclxufVxyXG5cclxuLyogY2FuJ3Qgd29ya1xyXG4kKCBcImltZ1wiIClcclxuICAgIC5lcnJvcihmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCB0aGlzICkuYXR0ciggXCJzcmNcIiwgXCJyZXBsYWNlbWVudC5wbmdcIiApO1xyXG4gICAgfSlcclxuICAgIC5hdHRyKCBcInNyY1wiLCBcIm1pc3NpbmcucG5nXCIgKTtcclxuICovIiwiJChmdW5jdGlvbiAoKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJCgnI3BheW1lbnRGb3JtJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGxldCBwYXltZW50X29wdGlvbiA9ICQoJ2lucHV0W25hbWU9XCJwYXltZW50X2R1cmF0aW9uXCJdOmNoZWNrZWQnKS52YWwoKTtcclxuICAgICAgICBpZiAoICFwYXltZW50X29wdGlvbiApIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBzZWxlY3QgYW4gb3B0aW9uIGZvciB0aGUgZHVyYXRpb24gb2YgeW91ciBwcmVtaXVtIGFkdmVydCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BheW1lbnQvZ2VuZXJhdGUnLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIF90b2tlbjogJCgnaW5wdXRbbmFtZT1cInRva2VuXCJdJykudmFsKCksXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bWVudF9wbGFuOiAkKCdpbnB1dFtuYW1lPVwicGF5bWVudF9kdXJhdGlvblwiXTpjaGVja2VkJykudmFsKCksXHJcbiAgICAgICAgICAgICAgICAgICAgYWR2ZXJ0OiAkKCdpbnB1dFtuYW1lPVwiZW50aXR5XCJdJykudmFsKCksXHJcbiAgICAgICAgICAgICAgICAgICAgYWR2ZXJ0X25hbWU6ICQoJ2lucHV0W25hbWU9XCJlbnRpdHlfbmFtZVwiXScpLnZhbCgpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihkYXRhLnVyaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBkYXRhLnVyaTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGRhdGEpIHsgIFxyXG4gICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsiLCJyZXF1aXJlKCdzZWxlY3QyL2Rpc3QvanMvc2VsZWN0Mi5mdWxsLmpzJyk7XHJcbnJlcXVpcmUoJ3NlbGVjdDIvZGlzdC9jc3Mvc2VsZWN0Mi5jc3MnKTtcclxucmVxdWlyZSgnc2VsZWN0Mi10aGVtZS1ib290c3RyYXA0L2Rpc3Qvc2VsZWN0Mi1ib290c3RyYXAuY3NzJyk7XHJcblxyXG5pbXBvcnQgJy4vZGFzaGJvYXJkL2V2ZW50LmpzJztcclxuaW1wb3J0ICcuL2Rhc2hib2FyZC9wYXltZW50LmpzJzsgXHJcbiIsInZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxudmFyIFVOU0NPUEFCTEVTID0gd2VsbEtub3duU3ltYm9sKCd1bnNjb3BhYmxlcycpO1xudmFyIEFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuXG4vLyBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmlmIChBcnJheVByb3RvdHlwZVtVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKSB7XG4gIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoQXJyYXlQcm90b3R5cGUsIFVOU0NPUEFCTEVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBjcmVhdGUobnVsbClcbiAgfSk7XG59XG5cbi8vIGFkZCBhIGtleSB0byBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICBBcnJheVByb3RvdHlwZVtVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG59O1xuIiwidmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xuXG52YXIgcHVzaCA9IFtdLnB1c2g7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyBmb3JFYWNoLCBtYXAsIGZpbHRlciwgc29tZSwgZXZlcnksIGZpbmQsIGZpbmRJbmRleCwgZmlsdGVyT3V0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVFlQRSkge1xuICB2YXIgSVNfTUFQID0gVFlQRSA9PSAxO1xuICB2YXIgSVNfRklMVEVSID0gVFlQRSA9PSAyO1xuICB2YXIgSVNfU09NRSA9IFRZUEUgPT0gMztcbiAgdmFyIElTX0VWRVJZID0gVFlQRSA9PSA0O1xuICB2YXIgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNjtcbiAgdmFyIElTX0ZJTFRFUl9PVVQgPSBUWVBFID09IDc7XG4gIHZhciBOT19IT0xFUyA9IFRZUEUgPT0gNSB8fCBJU19GSU5EX0lOREVYO1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0LCBzcGVjaWZpY0NyZWF0ZSkge1xuICAgIHZhciBPID0gdG9PYmplY3QoJHRoaXMpO1xuICAgIHZhciBzZWxmID0gSW5kZXhlZE9iamVjdChPKTtcbiAgICB2YXIgYm91bmRGdW5jdGlvbiA9IGJpbmQoY2FsbGJhY2tmbiwgdGhhdCwgMyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKHNlbGYubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBjcmVhdGUgPSBzcGVjaWZpY0NyZWF0ZSB8fCBhcnJheVNwZWNpZXNDcmVhdGU7XG4gICAgdmFyIHRhcmdldCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiB8fCBJU19GSUxURVJfT1VUID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgdmFsdWUsIHJlc3VsdDtcbiAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpIHtcbiAgICAgIHZhbHVlID0gc2VsZltpbmRleF07XG4gICAgICByZXN1bHQgPSBib3VuZEZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgTyk7XG4gICAgICBpZiAoVFlQRSkge1xuICAgICAgICBpZiAoSVNfTUFQKSB0YXJnZXRbaW5kZXhdID0gcmVzdWx0OyAvLyBtYXBcbiAgICAgICAgZWxzZSBpZiAocmVzdWx0KSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbHVlOyAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcHVzaC5jYWxsKHRhcmdldCwgdmFsdWUpOyAvLyBmaWx0ZXJcbiAgICAgICAgfSBlbHNlIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICAgIGNhc2UgNDogcmV0dXJuIGZhbHNlOyAgICAgICAgICAgICAvLyBldmVyeVxuICAgICAgICAgIGNhc2UgNzogcHVzaC5jYWxsKHRhcmdldCwgdmFsdWUpOyAvLyBmaWx0ZXJPdXRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogdGFyZ2V0O1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbiAgZm9yRWFjaDogY3JlYXRlTWV0aG9kKDApLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuICBtYXA6IGNyZWF0ZU1ldGhvZCgxKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgZmlsdGVyOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuc29tZWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnNvbWVcbiAgc29tZTogY3JlYXRlTWV0aG9kKDMpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmV2ZXJ5YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZXZlcnlcbiAgZXZlcnk6IGNyZWF0ZU1ldGhvZCg0KSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZFxuICBmaW5kOiBjcmVhdGVNZXRob2QoNSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZEluZGV4XG4gIGZpbmRJbmRleDogY3JlYXRlTWV0aG9kKDYpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlck91dGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWFycmF5LWZpbHRlcmluZ1xuICBmaWx0ZXJPdXQ6IGNyZWF0ZU1ldGhvZCg3KVxufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbi8vIGBBcnJheVNwZWNpZXNDcmVhdGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheXNwZWNpZXNjcmVhdGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsQXJyYXksIGxlbmd0aCkge1xuICB2YXIgQztcbiAgaWYgKGlzQXJyYXkob3JpZ2luYWxBcnJheSkpIHtcbiAgICBDID0gb3JpZ2luYWxBcnJheS5jb25zdHJ1Y3RvcjtcbiAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgIGlmICh0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpIEMgPSB1bmRlZmluZWQ7XG4gICAgZWxzZSBpZiAoaXNPYmplY3QoQykpIHtcbiAgICAgIEMgPSBDW1NQRUNJRVNdO1xuICAgICAgaWYgKEMgPT09IG51bGwpIEMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IHJldHVybiBuZXcgKEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQykobGVuZ3RoID09PSAwID8gMCA6IGxlbmd0aCk7XG59O1xuIiwidmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG5cbi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCk7XG4gICAgfTtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCJ2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdkb2N1bWVudCcsICdkb2N1bWVudEVsZW1lbnQnKTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbi8vIGBJc0FycmF5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNhcnJheVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWlzYXJyYXkgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjbGFzc29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZGVmaW5lUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaHRtbCcpO1xudmFyIGRvY3VtZW50Q3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG5cbnZhciBHVCA9ICc+JztcbnZhciBMVCA9ICc8JztcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBTQ1JJUFQgPSAnc2NyaXB0JztcbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcblxudmFyIEVtcHR5Q29uc3RydWN0b3IgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cbnZhciBzY3JpcHRUYWcgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICByZXR1cm4gTFQgKyBTQ1JJUFQgKyBHVCArIGNvbnRlbnQgKyBMVCArICcvJyArIFNDUklQVCArIEdUO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIEFjdGl2ZVggT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYID0gZnVuY3Rpb24gKGFjdGl2ZVhEb2N1bWVudCkge1xuICBhY3RpdmVYRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCcnKSk7XG4gIGFjdGl2ZVhEb2N1bWVudC5jbG9zZSgpO1xuICB2YXIgdGVtcCA9IGFjdGl2ZVhEb2N1bWVudC5wYXJlbnRXaW5kb3cuT2JqZWN0O1xuICBhY3RpdmVYRG9jdW1lbnQgPSBudWxsOyAvLyBhdm9pZCBtZW1vcnkgbGVha1xuICByZXR1cm4gdGVtcDtcbn07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSBkb2N1bWVudENyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICB2YXIgSlMgPSAnamF2YScgKyBTQ1JJUFQgKyAnOic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGh0bWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzQ3NVxuICBpZnJhbWUuc3JjID0gU3RyaW5nKEpTKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJ2RvY3VtZW50LkY9T2JqZWN0JykpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICByZXR1cm4gaWZyYW1lRG9jdW1lbnQuRjtcbn07XG5cbi8vIENoZWNrIGZvciBkb2N1bWVudC5kb21haW4gYW5kIGFjdGl2ZSB4IHN1cHBvcnRcbi8vIE5vIG5lZWQgdG8gdXNlIGFjdGl2ZSB4IGFwcHJvYWNoIHdoZW4gZG9jdW1lbnQuZG9tYWluIGlzIG5vdCBzZXRcbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vaXNzdWVzLzE1MFxuLy8gdmFyaWF0aW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9raXRjYW1icmlkZ2UvZXM1LXNoaW0vY29tbWl0LzRmNzM4YWMwNjYzNDZcbi8vIGF2b2lkIElFIEdDIGJ1Z1xudmFyIGFjdGl2ZVhEb2N1bWVudDtcbnZhciBOdWxsUHJvdG9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLyogZ2xvYmFsIEFjdGl2ZVhPYmplY3QgLS0gb2xkIElFICovXG4gICAgYWN0aXZlWERvY3VtZW50ID0gZG9jdW1lbnQuZG9tYWluICYmIG5ldyBBY3RpdmVYT2JqZWN0KCdodG1sZmlsZScpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBpZ25vcmUgKi8gfVxuICBOdWxsUHJvdG9PYmplY3QgPSBhY3RpdmVYRG9jdW1lbnQgPyBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCkgOiBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUoKTtcbiAgdmFyIGxlbmd0aCA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSBkZWxldGUgTnVsbFByb3RvT2JqZWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbbGVuZ3RoXV07XG4gIHJldHVybiBOdWxsUHJvdG9PYmplY3QoKTtcbn07XG5cbmhpZGRlbktleXNbSUVfUFJPVE9dID0gdHJ1ZTtcblxuLy8gYE9iamVjdC5jcmVhdGVgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuY3JlYXRlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHlDb25zdHJ1Y3RvcigpO1xuICAgIEVtcHR5Q29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gTnVsbFByb3RvT2JqZWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkZWZpbmVQcm9wZXJ0aWVzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnRpZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydGllcyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gb2JqZWN0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5ID0ga2V5c1tpbmRleCsrXSwgUHJvcGVydGllc1trZXldKTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxuLy8gYE9iamVjdC5rZXlzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmtleXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3Qta2V5cyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkZmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maW5kO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzJyk7XG5cbnZhciBGSU5EID0gJ2ZpbmQnO1xudmFyIFNLSVBTX0hPTEVTID0gdHJ1ZTtcblxuLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcbmlmIChGSU5EIGluIFtdKSBBcnJheSgxKVtGSU5EXShmdW5jdGlvbiAoKSB7IFNLSVBTX0hPTEVTID0gZmFsc2U7IH0pO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbmRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogU0tJUFNfSE9MRVMgfSwge1xuICBmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG4gICAgcmV0dXJuICRmaW5kKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmFkZFRvVW5zY29wYWJsZXMoRklORCk7XG4iXSwic291cmNlUm9vdCI6IiJ9