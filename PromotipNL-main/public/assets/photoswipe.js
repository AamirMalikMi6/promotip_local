(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["photoswipe"],{

/***/ "./assets/js/photoswipe.js":
/*!*********************************!*\
  !*** ./assets/js/photoswipe.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery, $) {__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

(function (jQuery) {
  jQuery.fn.jqPhotoSwipe = function (options) {
    if (this.length) {
      var parseHash = function parseHash() {
        var hash = window.location.hash.substring(1),
            params = {};
        var vars = hash.split('&');

        for (var i = 0; i < vars.length; i++) {
          if (!vars[i]) {
            continue;
          }

          var pair = vars[i].split('=');

          if (pair.length < 2) {
            continue;
          }

          params[pair[0]] = pair[1];
        }

        if (params.gid) {
          params.gid = params.gid;
        }

        return params;
      };

      var _photoswipe = {};
      var defaults = {
        forceSingleGallery: false,
        galleryOpen: function galleryOpen(gallery) {}
      };
      _photoswipe.galleries = [];
      _photoswipe.galleriesindex = [];
      var $galleryid = 0;
      var pswpElement;

      if ($(".pswp[role='dialog']").length) {
        pswpElement = $(".pswp[role='dialog']")[0];
      } else {
        var pswpHTML = '<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"><div class="pswp__bg"></div><div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button><button class="pswp__button pswp__button--share" title="Share"></button><button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button><button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button><div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div> </div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button><button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div></div></div>';
        pswpElement = $(pswpHTML).appendTo("body")[0];
      }

      var forcedGalleryId = "pswg-forced";
      this.each(function () {
        var $options = $.extend(defaults, options);
        var $this = $(this);
        var $galleryname = $this.data("gallery-group");

        if (!$galleryname) {
          if ($options.forceSingleGallery) {
            $galleryname = forcedGalleryId;
            $this.data("gallery-group", $galleryname);
          } else {
            $galleryname = "pswgname" + _photoswipe.galleriesindex.length;
            $this.data("gallery-group", $galleryname);
          }
        }

        if (_photoswipe.galleriesindex.indexOf($galleryname) === -1) {
          $galleryid = _photoswipe.galleriesindex.length;

          _photoswipe.galleriesindex.push($galleryname);

          _photoswipe.galleries[$galleryid] = {};
          _photoswipe.galleries[$galleryid].items = [];
          _photoswipe.galleries[$galleryid].i = 0;
        } else {
          $galleryid = _photoswipe.galleriesindex.indexOf($galleryname);
        }

        var $galleryid2 = $galleryid;
        $this.data("i", _photoswipe.galleries[$galleryid].i);
        $this.data("gid", $galleryname);

        _photoswipe.galleries[$galleryid2].items.push({
          src: $this.attr("href"),
          title: $this.attr("title"),
          w: 0,
          h: 0
        });

        $this.off("click").on("click", function (e) {
          e.preventDefault();
          var index = $(this).data("i");
          $options.index = index;
          $options.galleryUID = $(this).data("gid");
          _photoswipe.galleries[$galleryid2].obj = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, _photoswipe.galleries[$galleryid2].items, $options);

          _photoswipe.galleries[$galleryid2].obj.init();

          _photoswipe.galleries[$galleryid2].obj.listen('initialZoomInEnd', function () {
            $options.galleryOpen(_photoswipe.galleries[$galleryid2].obj);
          });

          _photoswipe.galleries[$galleryid2].obj.listen('imageLoadComplete', function (index, item) {
            loadImg(index, item);
          });

          _photoswipe.galleries[$galleryid2].obj.listen('gettingData', function (index, item) {
            loadImg(index, item);
          });

          function loadImg(index, item) {
            if (item.w == 0 && item.h == 0) {
              var imgpreload = new Image();

              imgpreload.onload = function () {
                item.w = this.width;
                item.h = this.height;
                item.needsUpdate = true;

                _photoswipe.galleries[$galleryid2].obj.updateSize(true);
              };

              imgpreload.src = item.src;
            }
          }
        });
        var $hashparams = parseHash();

        if ($hashparams.gid) {
          if ($hashparams.gid.toString() === $galleryname && $hashparams.pid.toString() === (_photoswipe.galleries[$galleryid].i + 1).toString()) {
            $this.trigger("click");
          }
        }

        _photoswipe.galleries[$galleryid].i++;
      });
      return _photoswipe;
    }
  };
})(jQuery);

$(document).ready(function () {
  //By default, plugin uses `data-gallery-group` attribute to create galleries.
  $(".gallery").jqPhotoSwipe({
    galleryOpen: function galleryOpen(gallery) {//with `gallery` object you can access all methods and properties described here http://photoswipe.com/documentation/api.html
      //console.log(gallery);
      //console.log(gallery.currItem);
      //console.log(gallery.getCurrentIndex());
      //gallery.zoomTo(1, {x:gallery.viewportSize.x/2,y:gallery.viewportSize.y/2}, 500);
      //gallery.toggleDesktopZoom();
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-string.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-string-tag-support.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.index-of.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.index-of.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-array-prototype-indexof -- required for testing */
var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.date.to-string.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-string.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = DatePrototype[TO_STRING];
var getTime = DatePrototype.getTime;

// `Date.prototype.toString` method
// https://tc39.es/ecma262/#sec-date.prototype.tostring
if (new Date(NaN) + '' != INVALID_DATE) {
  redefine(DatePrototype, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare -- NaN check
    return value === value ? nativeDateToString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var toString = __webpack_require__(/*! ../internals/object-to-string */ "./node_modules/core-js/internals/object-to-string.js");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var flags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ })

},[["./assets/js/photoswipe.js","runtime","vendors~admin~app~dashboard~dashboard_company~dashboard_events~dropzone~fullcalendar~notification~photoswipe","vendors~admin~app~dashboard_company~dashboard_events~photoswipe~sliders","vendors~admin~app~photoswipe"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGhvdG9zd2lwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tc3RyaW5nLXRhZy1zdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaW5kZXgtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5kYXRlLnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5yZWdleHAudG8tc3RyaW5nLmpzIl0sIm5hbWVzIjpbImpRdWVyeSIsImZuIiwianFQaG90b1N3aXBlIiwib3B0aW9ucyIsImxlbmd0aCIsInBhcnNlSGFzaCIsImhhc2giLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInN1YnN0cmluZyIsInBhcmFtcyIsInZhcnMiLCJzcGxpdCIsImkiLCJwYWlyIiwiZ2lkIiwiX3Bob3Rvc3dpcGUiLCJkZWZhdWx0cyIsImZvcmNlU2luZ2xlR2FsbGVyeSIsImdhbGxlcnlPcGVuIiwiZ2FsbGVyeSIsImdhbGxlcmllcyIsImdhbGxlcmllc2luZGV4IiwiJGdhbGxlcnlpZCIsInBzd3BFbGVtZW50IiwiJCIsInBzd3BIVE1MIiwiYXBwZW5kVG8iLCJmb3JjZWRHYWxsZXJ5SWQiLCJlYWNoIiwiJG9wdGlvbnMiLCJleHRlbmQiLCIkdGhpcyIsIiRnYWxsZXJ5bmFtZSIsImRhdGEiLCJpbmRleE9mIiwicHVzaCIsIml0ZW1zIiwiJGdhbGxlcnlpZDIiLCJzcmMiLCJhdHRyIiwidGl0bGUiLCJ3IiwiaCIsIm9mZiIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5kZXgiLCJnYWxsZXJ5VUlEIiwib2JqIiwiUGhvdG9Td2lwZSIsIlBob3RvU3dpcGVVSV9EZWZhdWx0IiwiaW5pdCIsImxpc3RlbiIsIml0ZW0iLCJsb2FkSW1nIiwiaW1ncHJlbG9hZCIsIkltYWdlIiwib25sb2FkIiwid2lkdGgiLCJoZWlnaHQiLCJuZWVkc1VwZGF0ZSIsInVwZGF0ZVNpemUiLCIkaGFzaHBhcmFtcyIsInRvU3RyaW5nIiwicGlkIiwidHJpZ2dlciIsImRvY3VtZW50IiwicmVhZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLENBQUMsVUFBVUEsTUFBVixFQUFrQjtBQUNmQSxRQUFNLENBQUNDLEVBQVAsQ0FBVUMsWUFBVixHQUF5QixVQUFVQyxPQUFWLEVBQW1CO0FBQ3hDLFFBQUksS0FBS0MsTUFBVCxFQUFpQjtBQUNiLFVBQUlDLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQVc7QUFDdkIsWUFBSUMsSUFBSSxHQUFHQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JGLElBQWhCLENBQXFCRyxTQUFyQixDQUErQixDQUEvQixDQUFYO0FBQUEsWUFDSUMsTUFBTSxHQUFHLEVBRGI7QUFFQSxZQUFJQyxJQUFJLEdBQUdMLElBQUksQ0FBQ00sS0FBTCxDQUFXLEdBQVgsQ0FBWDs7QUFDQSxhQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLElBQUksQ0FBQ1AsTUFBekIsRUFBaUNTLENBQUMsRUFBbEMsRUFBc0M7QUFDbEMsY0FBRyxDQUFDRixJQUFJLENBQUNFLENBQUQsQ0FBUixFQUFhO0FBQ1Q7QUFDSDs7QUFDRCxjQUFJQyxJ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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRyxlQUFlO0FBQ3JCIiwiZmlsZSI6InBob3Rvc3dpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKGpRdWVyeSkge1xyXG4gICAgalF1ZXJ5LmZuLmpxUGhvdG9Td2lwZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciBwYXJzZUhhc2ggPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhcnMgPSBoYXNoLnNwbGl0KCcmJyk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZighdmFyc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhaXIgPSB2YXJzW2ldLnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocGFpci5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXNbcGFpclswXV0gPSBwYWlyWzFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHBhcmFtcy5naWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMuZ2lkID0gcGFyYW1zLmdpZDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW1zO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2YXIgX3Bob3Rvc3dpcGUgPSB7fTtcclxuICAgICAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xyXG4gICAgICAgICAgICAgICAgZm9yY2VTaW5nbGVHYWxsZXJ5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGdhbGxlcnlPcGVuOiBmdW5jdGlvbiAoZ2FsbGVyeSkge1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgX3Bob3Rvc3dpcGUuZ2FsbGVyaWVzID0gW107XHJcbiAgICAgICAgICAgIF9waG90b3N3aXBlLmdhbGxlcmllc2luZGV4ID0gW107XHJcbiAgICAgICAgICAgIHZhciAkZ2FsbGVyeWlkID0gMDtcclxuICAgICAgICAgICAgdmFyIHBzd3BFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAoJChcIi5wc3dwW3JvbGU9J2RpYWxvZyddXCIpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcHN3cEVsZW1lbnQgPSAkKFwiLnBzd3Bbcm9sZT0nZGlhbG9nJ11cIilbMF07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHN3cEhUTUwgPSAnPGRpdiBjbGFzcz1cInBzd3BcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxkaXYgY2xhc3M9XCJwc3dwX19iZ1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJwc3dwX19zY3JvbGwtd3JhcFwiPjxkaXYgY2xhc3M9XCJwc3dwX19jb250YWluZXJcIj48ZGl2IGNsYXNzPVwicHN3cF9faXRlbVwiPjwvZGl2PjxkaXYgY2xhc3M9XCJwc3dwX19pdGVtXCI+PC9kaXY+PGRpdiBjbGFzcz1cInBzd3BfX2l0ZW1cIj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwicHN3cF9fdWkgcHN3cF9fdWktLWhpZGRlblwiPjxkaXYgY2xhc3M9XCJwc3dwX190b3AtYmFyXCI+PGRpdiBjbGFzcz1cInBzd3BfX2NvdW50ZXJcIj48L2Rpdj48YnV0dG9uIGNsYXNzPVwicHN3cF9fYnV0dG9uIHBzd3BfX2J1dHRvbi0tY2xvc2VcIiB0aXRsZT1cIkNsb3NlIChFc2MpXCI+PC9idXR0b24+PGJ1dHRvbiBjbGFzcz1cInBzd3BfX2J1dHRvbiBwc3dwX19idXR0b24tLXNoYXJlXCIgdGl0bGU9XCJTaGFyZVwiPjwvYnV0dG9uPjxidXR0b24gY2xhc3M9XCJwc3dwX19idXR0b24gcHN3cF9fYnV0dG9uLS1mc1wiIHRpdGxlPVwiVG9nZ2xlIGZ1bGxzY3JlZW5cIj48L2J1dHRvbj48YnV0dG9uIGNsYXNzPVwicHN3cF9fYnV0dG9uIHBzd3BfX2J1dHRvbi0tem9vbVwiIHRpdGxlPVwiWm9vbSBpbi9vdXRcIj48L2J1dHRvbj48ZGl2IGNsYXNzPVwicHN3cF9fcHJlbG9hZGVyXCI+PGRpdiBjbGFzcz1cInBzd3BfX3ByZWxvYWRlcl9faWNuXCI+PGRpdiBjbGFzcz1cInBzd3BfX3ByZWxvYWRlcl9fY3V0XCI+PGRpdiBjbGFzcz1cInBzd3BfX3ByZWxvYWRlcl9fZG9udXRcIj48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwicHN3cF9fc2hhcmUtbW9kYWwgcHN3cF9fc2hhcmUtbW9kYWwtLWhpZGRlbiBwc3dwX19zaW5nbGUtdGFwXCI+PGRpdiBjbGFzcz1cInBzd3BfX3NoYXJlLXRvb2x0aXBcIj48L2Rpdj4gPC9kaXY+PGJ1dHRvbiBjbGFzcz1cInBzd3BfX2J1dHRvbiBwc3dwX19idXR0b24tLWFycm93LS1sZWZ0XCIgdGl0bGU9XCJQcmV2aW91cyAoYXJyb3cgbGVmdClcIj48L2J1dHRvbj48YnV0dG9uIGNsYXNzPVwicHN3cF9fYnV0dG9uIHBzd3BfX2J1dHRvbi0tYXJyb3ctLXJpZ2h0XCIgdGl0bGU9XCJOZXh0IChhcnJvdyByaWdodClcIj48L2J1dHRvbj48ZGl2IGNsYXNzPVwicHN3cF9fY2FwdGlvblwiPjxkaXYgY2xhc3M9XCJwc3dwX19jYXB0aW9uX19jZW50ZXJcIj48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgcHN3cEVsZW1lbnQgPSAkKHBzd3BIVE1MKS5hcHBlbmRUbyhcImJvZHlcIilbMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGZvcmNlZEdhbGxlcnlJZCA9IFwicHN3Zy1mb3JjZWRcIjtcclxuICAgICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciAkb3B0aW9ucyA9ICQuZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgJGdhbGxlcnluYW1lID0gJHRoaXMuZGF0YShcImdhbGxlcnktZ3JvdXBcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoISRnYWxsZXJ5bmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkb3B0aW9ucy5mb3JjZVNpbmdsZUdhbGxlcnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGdhbGxlcnluYW1lID0gZm9yY2VkR2FsbGVyeUlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwiZ2FsbGVyeS1ncm91cFwiLCAkZ2FsbGVyeW5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRnYWxsZXJ5bmFtZSA9IFwicHN3Z25hbWVcIiArIChfcGhvdG9zd2lwZS5nYWxsZXJpZXNpbmRleC5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwiZ2FsbGVyeS1ncm91cFwiLCAkZ2FsbGVyeW5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChfcGhvdG9zd2lwZS5nYWxsZXJpZXNpbmRleC5pbmRleE9mKCRnYWxsZXJ5bmFtZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGdhbGxlcnlpZCA9IF9waG90b3N3aXBlLmdhbGxlcmllc2luZGV4Lmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICBfcGhvdG9zd2lwZS5nYWxsZXJpZXNpbmRleC5wdXNoKCRnYWxsZXJ5bmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgX3Bob3Rvc3dpcGUuZ2FsbGVyaWVzWyRnYWxsZXJ5aWRdID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgX3Bob3Rvc3dpcGUuZ2FsbGVyaWVzWyRnYWxsZXJ5aWRdLml0ZW1zID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgX3Bob3Rvc3dpcGUuZ2FsbGVyaWVzWyRnYWxsZXJ5aWRdLmkgPSAwO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkZ2FsbGVyeWlkID0gX3Bob3Rvc3dpcGUuZ2FsbGVyaWVzaW5kZXguaW5kZXhPZigkZ2FsbGVyeW5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyICRnYWxsZXJ5aWQyID0gJGdhbGxlcnlpZDtcclxuICAgICAgICAgICAgICAgICR0aGlzLmRhdGEoXCJpXCIsIF9waG90b3N3aXBlLmdhbGxlcmllc1skZ2FsbGVyeWlkXS5pKTtcclxuICAgICAgICAgICAgICAgICR0aGlzLmRhdGEoXCJnaWRcIiwgJGdhbGxlcnluYW1lKTtcclxuICAgICAgICAgICAgICAgIF9waG90b3N3aXBlLmdhbGxlcmllc1skZ2FsbGVyeWlkMl0uaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOiAkdGhpcy5hdHRyKFwiaHJlZlwiKSxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJHRoaXMuYXR0cihcInRpdGxlXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIHc6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgaDogMFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAkdGhpcy5vZmYoXCJjbGlja1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9ICQodGhpcykuZGF0YShcImlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJG9wdGlvbnMuaW5kZXggPSBpbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAkb3B0aW9ucy5nYWxsZXJ5VUlEID0gJCh0aGlzKS5kYXRhKFwiZ2lkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9waG90b3N3aXBlLmdhbGxlcmllc1skZ2FsbGVyeWlkMl0ub2JqID0gbmV3IFBob3RvU3dpcGUoIHBzd3BFbGVtZW50LCBQaG90b1N3aXBlVUlfRGVmYXVsdCwgX3Bob3Rvc3dpcGUuZ2FsbGVyaWVzWyRnYWxsZXJ5aWQyXS5pdGVtcywgJG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9waG90b3N3aXBlLmdhbGxlcmllc1skZ2FsbGVyeWlkMl0ub2JqLmluaXQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgX3Bob3Rvc3dpcGUuZ2FsbGVyaWVzWyRnYWxsZXJ5aWQyXS5vYmoubGlzdGVuKCdpbml0aWFsWm9vbUluRW5kJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRvcHRpb25zLmdhbGxlcnlPcGVuKF9waG90b3N3aXBlLmdhbGxlcmllc1skZ2FsbGVyeWlkMl0ub2JqKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBfcGhvdG9zd2lwZS5nYWxsZXJpZXNbJGdhbGxlcnlpZDJdLm9iai5saXN0ZW4oJ2ltYWdlTG9hZENvbXBsZXRlJywgZnVuY3Rpb24oaW5kZXgsIGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZEltZyhpbmRleCwgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgX3Bob3Rvc3dpcGUuZ2FsbGVyaWVzWyRnYWxsZXJ5aWQyXS5vYmoubGlzdGVuKCdnZXR0aW5nRGF0YScsIGZ1bmN0aW9uKGluZGV4LCBpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRJbWcoaW5kZXgsIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGxvYWRJbWcoaW5kZXgsIGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0udyA9PSAwICYmIGl0ZW0uaCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW1ncHJlbG9hZCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1ncHJlbG9hZC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLncgPSB0aGlzLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaCA9IHRoaXMuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9waG90b3N3aXBlLmdhbGxlcmllc1skZ2FsbGVyeWlkMl0ub2JqLnVwZGF0ZVNpemUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1ncHJlbG9hZC5zcmMgPSBpdGVtLnNyYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdmFyICRoYXNocGFyYW1zID0gcGFyc2VIYXNoKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoJGhhc2hwYXJhbXMuZ2lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRoYXNocGFyYW1zLmdpZC50b1N0cmluZygpID09PSAkZ2FsbGVyeW5hbWUgJiYgJGhhc2hwYXJhbXMucGlkLnRvU3RyaW5nKCkgPT09IChfcGhvdG9zd2lwZS5nYWxsZXJpZXNbJGdhbGxlcnlpZF0uaSArIDEpLnRvU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHRoaXMudHJpZ2dlcihcImNsaWNrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF9waG90b3N3aXBlLmdhbGxlcmllc1skZ2FsbGVyeWlkXS5pICsrO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIF9waG90b3N3aXBlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pKGpRdWVyeSk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAvL0J5IGRlZmF1bHQsIHBsdWdpbiB1c2VzIGBkYXRhLWdhbGxlcnktZ3JvdXBgIGF0dHJpYnV0ZSB0byBjcmVhdGUgZ2FsbGVyaWVzLlxyXG4gICAgJChcIi5nYWxsZXJ5XCIpLmpxUGhvdG9Td2lwZSh7XHJcbiAgICAgICAgZ2FsbGVyeU9wZW46IGZ1bmN0aW9uIChnYWxsZXJ5KSB7XHJcbiAgICAgICAgICAgIC8vd2l0aCBgZ2FsbGVyeWAgb2JqZWN0IHlvdSBjYW4gYWNjZXNzIGFsbCBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzIGRlc2NyaWJlZCBoZXJlIGh0dHA6Ly9waG90b3N3aXBlLmNvbS9kb2N1bWVudGF0aW9uL2FwaS5odG1sXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZ2FsbGVyeSk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZ2FsbGVyeS5jdXJySXRlbSk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZ2FsbGVyeS5nZXRDdXJyZW50SW5kZXgoKSk7XHJcbiAgICAgICAgICAgIC8vZ2FsbGVyeS56b29tVG8oMSwge3g6Z2FsbGVyeS52aWV3cG9ydFNpemUueC8yLHk6Z2FsbGVyeS52aWV3cG9ydFNpemUueS8yfSwgNTAwKTtcclxuICAgICAgICAgICAgLy9nYWxsZXJ5LnRvZ2dsZURlc2t0b3Bab29tKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgYXJndW1lbnQpIHtcbiAgdmFyIG1ldGhvZCA9IFtdW01FVEhPRF9OQU1FXTtcbiAgcmV0dXJuICEhbWV0aG9kICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1jYWxsLG5vLXRocm93LWxpdGVyYWwgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgICBtZXRob2QuY2FsbChudWxsLCBhcmd1bWVudCB8fCBmdW5jdGlvbiAoKSB7IHRocm93IDE7IH0sIDEpO1xuICB9KTtcbn07XG4iLCJ2YXIgVE9fU1RSSU5HX1RBR19TVVBQT1JUID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydCcpO1xudmFyIGNsYXNzb2ZSYXcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIENPUlJFQ1RfQVJHVU1FTlRTID0gY2xhc3NvZlJhdyhmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxufTtcblxuLy8gZ2V0dGluZyB0YWcgZnJvbSBFUzYrIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYFxubW9kdWxlLmV4cG9ydHMgPSBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPyBjbGFzc29mUmF3IDogZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCB0YWcsIHJlc3VsdDtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKHRhZyA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVE9fU1RSSU5HX1RBRykpID09ICdzdHJpbmcnID8gdGFnXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBDT1JSRUNUX0FSR1VNRU5UUyA/IGNsYXNzb2ZSYXcoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAocmVzdWx0ID0gY2xhc3NvZlJhdyhPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IHJlc3VsdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgVE9fU1RSSU5HX1RBR19TVVBQT1JUID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gVE9fU1RSSU5HX1RBR19TVVBQT1JUID8ge30udG9TdHJpbmcgOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdbb2JqZWN0ICcgKyBjbGFzc29mKHRoaXMpICsgJ10nO1xufTtcbiIsInZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG52YXIgdGVzdCA9IHt9O1xuXG50ZXN0W1RPX1NUUklOR19UQUddID0gJ3onO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0cmluZyh0ZXN0KSA9PT0gJ1tvYmplY3Qgel0nO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWluZGV4b2YgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIG5hdGl2ZUluZGV4T2YgPSBbXS5pbmRleE9mO1xuXG52YXIgTkVHQVRJVkVfWkVSTyA9ICEhbmF0aXZlSW5kZXhPZiAmJiAxIC8gWzFdLmluZGV4T2YoMSwgLTApIDwgMDtcbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnaW5kZXhPZicpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogTkVHQVRJVkVfWkVSTyB8fCAhU1RSSUNUX01FVEhPRCB9LCB7XG4gIGluZGV4T2Y6IGZ1bmN0aW9uIGluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiAsIGZyb21JbmRleCA9IDAgKi8pIHtcbiAgICByZXR1cm4gTkVHQVRJVkVfWkVST1xuICAgICAgLy8gY29udmVydCAtMCB0byArMFxuICAgICAgPyBuYXRpdmVJbmRleE9mLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgMFxuICAgICAgOiAkaW5kZXhPZih0aGlzLCBzZWFyY2hFbGVtZW50LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwidmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG5cbnZhciBEYXRlUHJvdG90eXBlID0gRGF0ZS5wcm90b3R5cGU7XG52YXIgSU5WQUxJRF9EQVRFID0gJ0ludmFsaWQgRGF0ZSc7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciBuYXRpdmVEYXRlVG9TdHJpbmcgPSBEYXRlUHJvdG90eXBlW1RPX1NUUklOR107XG52YXIgZ2V0VGltZSA9IERhdGVQcm90b3R5cGUuZ2V0VGltZTtcblxuLy8gYERhdGUucHJvdG90eXBlLnRvU3RyaW5nYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZGF0ZS5wcm90b3R5cGUudG9zdHJpbmdcbmlmIChuZXcgRGF0ZShOYU4pICsgJycgIT0gSU5WQUxJRF9EQVRFKSB7XG4gIHJlZGVmaW5lKERhdGVQcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgdmFyIHZhbHVlID0gZ2V0VGltZS5jYWxsKHRoaXMpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSA/IG5hdGl2ZURhdGVUb1N0cmluZy5jYWxsKHRoaXMpIDogSU5WQUxJRF9EQVRFO1xuICB9KTtcbn1cbiIsInZhciBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nLXRhZy1zdXBwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtdG8tc3RyaW5nJyk7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZ1xuaWYgKCFUT19TVFJJTkdfVEFHX1NVUFBPUlQpIHtcbiAgcmVkZWZpbmUoT2JqZWN0LnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgdG9TdHJpbmcsIHsgdW5zYWZlOiB0cnVlIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBmbGFncyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZmxhZ3MnKTtcblxudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgUmVnRXhwUHJvdG90eXBlID0gUmVnRXhwLnByb3RvdHlwZTtcbnZhciBuYXRpdmVUb1N0cmluZyA9IFJlZ0V4cFByb3RvdHlwZVtUT19TVFJJTkddO1xuXG52YXIgTk9UX0dFTkVSSUMgPSBmYWlscyhmdW5jdGlvbiAoKSB7IHJldHVybiBuYXRpdmVUb1N0cmluZy5jYWxsKHsgc291cmNlOiAnYScsIGZsYWdzOiAnYicgfSkgIT0gJy9hL2InOyB9KTtcbi8vIEZGNDQtIFJlZ0V4cCN0b1N0cmluZyBoYXMgYSB3cm9uZyBuYW1lXG52YXIgSU5DT1JSRUNUX05BTUUgPSBuYXRpdmVUb1N0cmluZy5uYW1lICE9IFRPX1NUUklORztcblxuLy8gYFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmdgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLnRvc3RyaW5nXG5pZiAoTk9UX0dFTkVSSUMgfHwgSU5DT1JSRUNUX05BTUUpIHtcbiAgcmVkZWZpbmUoUmVnRXhwLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICB2YXIgUiA9IGFuT2JqZWN0KHRoaXMpO1xuICAgIHZhciBwID0gU3RyaW5nKFIuc291cmNlKTtcbiAgICB2YXIgcmYgPSBSLmZsYWdzO1xuICAgIHZhciBmID0gU3RyaW5nKHJmID09PSB1bmRlZmluZWQgJiYgUiBpbnN0YW5jZW9mIFJlZ0V4cCAmJiAhKCdmbGFncycgaW4gUmVnRXhwUHJvdG90eXBlKSA/IGZsYWdzLmNhbGwoUikgOiByZik7XG4gICAgcmV0dXJuICcvJyArIHAgKyAnLycgKyBmO1xuICB9LCB7IHVuc2FmZTogdHJ1ZSB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=