(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~sliders~sliders_advert"],{

/***/ "./node_modules/@splidejs/splide/dist/css/themes/splide-default.min.css":
/*!******************************************************************************!*\
  !*** ./node_modules/@splidejs/splide/dist/css/themes/splide-default.min.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/@splidejs/splide/dist/js/splide.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@splidejs/splide/dist/js/splide.esm.js ***!
  \*************************************************************/
/*! exports provided: CLASSES, CLASS_ACTIVE, CLASS_ARROW, CLASS_ARROWS, CLASS_ARROW_NEXT, CLASS_ARROW_PREV, CLASS_CLONE, CLASS_CONTAINER, CLASS_FOCUS_IN, CLASS_INITIALIZED, CLASS_LIST, CLASS_LOADING, CLASS_NEXT, CLASS_PAGINATION, CLASS_PAGINATION_PAGE, CLASS_PREV, CLASS_PROGRESS, CLASS_PROGRESS_BAR, CLASS_ROOT, CLASS_SLIDE, CLASS_SPINNER, CLASS_SR, CLASS_TOGGLE, CLASS_TOGGLE_PAUSE, CLASS_TOGGLE_PLAY, CLASS_TRACK, CLASS_VISIBLE, DEFAULTS, EVENT_ACTIVE, EVENT_ARROWS_MOUNTED, EVENT_ARROWS_UPDATED, EVENT_AUTOPLAY_PAUSE, EVENT_AUTOPLAY_PLAY, EVENT_AUTOPLAY_PLAYING, EVENT_CLICK, EVENT_DESTROY, EVENT_DRAG, EVENT_DRAGGED, EVENT_DRAGGING, EVENT_HIDDEN, EVENT_INACTIVE, EVENT_LAZYLOAD_LOADED, EVENT_MOUNTED, EVENT_MOVE, EVENT_MOVED, EVENT_NAVIGATION_MOUNTED, EVENT_PAGINATION_MOUNTED, EVENT_PAGINATION_UPDATED, EVENT_READY, EVENT_REFRESH, EVENT_RESIZE, EVENT_RESIZED, EVENT_SCROLL, EVENT_SCROLLED, EVENT_SHIFTED, EVENT_SLIDE_KEYDOWN, EVENT_UPDATED, EVENT_VISIBLE, EventBinder, EventInterface, FADE, LOOP, LTR, RTL, RequestInterval, SLIDE, STATUS_CLASSES, Splide, SplideRenderer, State, TTB, Throttle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASSES", function() { return CLASSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_ACTIVE", function() { return CLASS_ACTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_ARROW", function() { return CLASS_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_ARROWS", function() { return CLASS_ARROWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_ARROW_NEXT", function() { return CLASS_ARROW_NEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_ARROW_PREV", function() { return CLASS_ARROW_PREV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_CLONE", function() { return CLASS_CLONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_CONTAINER", function() { return CLASS_CONTAINER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_FOCUS_IN", function() { return CLASS_FOCUS_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_INITIALIZED", function() { return CLASS_INITIALIZED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_LIST", function() { return CLASS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_LOADING", function() { return CLASS_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_NEXT", function() { return CLASS_NEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_PAGINATION", function() { return CLASS_PAGINATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_PAGINATION_PAGE", function() { return CLASS_PAGINATION_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_PREV", function() { return CLASS_PREV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_PROGRESS", function() { return CLASS_PROGRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_PROGRESS_BAR", function() { return CLASS_PROGRESS_BAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_ROOT", function() { return CLASS_ROOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_SLIDE", function() { return CLASS_SLIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_SPINNER", function() { return CLASS_SPINNER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_SR", function() { return CLASS_SR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_TOGGLE", function() { return CLASS_TOGGLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_TOGGLE_PAUSE", function() { return CLASS_TOGGLE_PAUSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_TOGGLE_PLAY", function() { return CLASS_TOGGLE_PLAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_TRACK", function() { return CLASS_TRACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_VISIBLE", function() { return CLASS_VISIBLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULTS", function() { return DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_ACTIVE", function() { return EVENT_ACTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_ARROWS_MOUNTED", function() { return EVENT_ARROWS_MOUNTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_ARROWS_UPDATED", function() { return EVENT_ARROWS_UPDATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_AUTOPLAY_PAUSE", function() { return EVENT_AUTOPLAY_PAUSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_AUTOPLAY_PLAY", function() { return EVENT_AUTOPLAY_PLAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_AUTOPLAY_PLAYING", function() { return EVENT_AUTOPLAY_PLAYING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_CLICK", function() { return EVENT_CLICK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_DESTROY", function() { return EVENT_DESTROY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_DRAG", function() { return EVENT_DRAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_DRAGGED", function() { return EVENT_DRAGGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_DRAGGING", function() { return EVENT_DRAGGING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_HIDDEN", function() { return EVENT_HIDDEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_INACTIVE", function() { return EVENT_INACTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_LAZYLOAD_LOADED", function() { return EVENT_LAZYLOAD_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_MOUNTED", function() { return EVENT_MOUNTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_MOVE", function() { return EVENT_MOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_MOVED", function() { return EVENT_MOVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_NAVIGATION_MOUNTED", function() { return EVENT_NAVIGATION_MOUNTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_PAGINATION_MOUNTED", function() { return EVENT_PAGINATION_MOUNTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_PAGINATION_UPDATED", function() { return EVENT_PAGINATION_UPDATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_READY", function() { return EVENT_READY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_REFRESH", function() { return EVENT_REFRESH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_RESIZE", function() { return EVENT_RESIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_RESIZED", function() { return EVENT_RESIZED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_SCROLL", function() { return EVENT_SCROLL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_SCROLLED", function() { return EVENT_SCROLLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_SHIFTED", function() { return EVENT_SHIFTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_SLIDE_KEYDOWN", function() { return EVENT_SLIDE_KEYDOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_UPDATED", function() { return EVENT_UPDATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_VISIBLE", function() { return EVENT_VISIBLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventBinder", function() { return EventBinder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventInterface", function() { return EventInterface; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FADE", function() { return FADE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOOP", function() { return LOOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LTR", function() { return LTR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTL", function() { return RTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestInterval", function() { return RequestInterval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SLIDE", function() { return SLIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_CLASSES", function() { return STATUS_CLASSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Splide", function() { return Splide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplideRenderer", function() { return SplideRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TTB", function() { return TTB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Throttle", function() { return Throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Splide; });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/*!
 * Splide.js
 * Version  : 4.0.6
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */
var MEDIA_PREFERS_REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
var CREATED = 1;
var MOUNTED = 2;
var IDLE = 3;
var MOVING = 4;
var SCROLLING = 5;
var DRAGGING = 6;
var DESTROYED = 7;
var STATES = {
  CREATED: CREATED,
  MOUNTED: MOUNTED,
  IDLE: IDLE,
  MOVING: MOVING,
  SCROLLING: SCROLLING,
  DRAGGING: DRAGGING,
  DESTROYED: DESTROYED
};

function empty(array) {
  array.length = 0;
}

function slice(arrayLike, start, end) {
  return Array.prototype.slice.call(arrayLike, start, end);
}

function apply(func) {
  return func.bind.apply(func, [null].concat(slice(arguments, 1)));
}

var nextTick = setTimeout;

var noop = function noop() {};

function raf(func) {
  return requestAnimationFrame(func);
}

function typeOf(type, subject) {
  return typeof subject === type;
}

function isObject(subject) {
  return !isNull(subject) && typeOf("object", subject);
}

var isArray = Array.isArray;
var isFunction = apply(typeOf, "function");
var isString = apply(typeOf, "string");
var isUndefined = apply(typeOf, "undefined");

function isNull(subject) {
  return subject === null;
}

function isHTMLElement(subject) {
  return subject instanceof HTMLElement;
}

function toArray(value) {
  return isArray(value) ? value : [value];
}

function forEach(values, iteratee) {
  toArray(values).forEach(iteratee);
}

function includes(array, value) {
  return array.indexOf(value) > -1;
}

function push(array, items) {
  array.push.apply(array, toArray(items));
  return array;
}

function toggleClass(elm, classes, add) {
  if (elm) {
    forEach(classes, function (name) {
      if (name) {
        elm.classList[add ? "add" : "remove"](name);
      }
    });
  }
}

function addClass(elm, classes) {
  toggleClass(elm, isString(classes) ? classes.split(" ") : classes, true);
}

function append(parent, children) {
  forEach(children, parent.appendChild.bind(parent));
}

function before(nodes, ref) {
  forEach(nodes, function (node) {
    var parent = (ref || node).parentNode;

    if (parent) {
      parent.insertBefore(node, ref);
    }
  });
}

function matches(elm, selector) {
  return isHTMLElement(elm) && (elm["msMatchesSelector"] || elm.matches).call(elm, selector);
}

function children(parent, selector) {
  var children2 = parent ? slice(parent.children) : [];
  return selector ? children2.filter(function (child) {
    return matches(child, selector);
  }) : children2;
}

function child(parent, selector) {
  return selector ? children(parent, selector)[0] : parent.firstElementChild;
}

var ownKeys = Object.keys;

function forOwn(object, iteratee, right) {
  if (object) {
    var keys = ownKeys(object);
    keys = right ? keys.reverse() : keys;

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== "__proto__") {
        if (iteratee(object[key], key) === false) {
          break;
        }
      }
    }
  }

  return object;
}

function assign(object) {
  slice(arguments, 1).forEach(function (source) {
    forOwn(source, function (value, key) {
      object[key] = source[key];
    });
  });
  return object;
}

function merge(object) {
  slice(arguments, 1).forEach(function (source) {
    forOwn(source, function (value, key) {
      if (isArray(value)) {
        object[key] = value.slice();
      } else if (isObject(value)) {
        object[key] = merge({}, isObject(object[key]) ? object[key] : {}, value);
      } else {
        object[key] = value;
      }
    });
  });
  return object;
}

function omit(object, keys) {
  toArray(keys || ownKeys(object)).forEach(function (key) {
    delete object[key];
  });
}

function removeAttribute(elms, attrs) {
  forEach(elms, function (elm) {
    forEach(attrs, function (attr) {
      elm && elm.removeAttribute(attr);
    });
  });
}

function setAttribute(elms, attrs, value) {
  if (isObject(attrs)) {
    forOwn(attrs, function (value2, name) {
      setAttribute(elms, name, value2);
    });
  } else {
    forEach(elms, function (elm) {
      isNull(value) || value === "" ? removeAttribute(elm, attrs) : elm.setAttribute(attrs, String(value));
    });
  }
}

function create(tag, attrs, parent) {
  var elm = document.createElement(tag);

  if (attrs) {
    isString(attrs) ? addClass(elm, attrs) : setAttribute(elm, attrs);
  }

  parent && append(parent, elm);
  return elm;
}

function style(elm, prop, value) {
  if (isUndefined(value)) {
    return getComputedStyle(elm)[prop];
  }

  if (!isNull(value)) {
    elm.style[prop] = "" + value;
  }
}

function display(elm, display2) {
  style(elm, "display", display2);
}

function focus(elm) {
  elm["setActive"] && elm["setActive"]() || elm.focus({
    preventScroll: true
  });
}

function getAttribute(elm, attr) {
  return elm.getAttribute(attr);
}

function hasClass(elm, className) {
  return elm && elm.classList.contains(className);
}

function rect(target) {
  return target.getBoundingClientRect();
}

function remove(nodes) {
  forEach(nodes, function (node) {
    if (node && node.parentNode) {
      node.parentNode.removeChild(node);
    }
  });
}

function parseHtml(html) {
  return child(new DOMParser().parseFromString(html, "text/html").body);
}

function prevent(e, stopPropagation) {
  e.preventDefault();

  if (stopPropagation) {
    e.stopPropagation();
    e.stopImmediatePropagation();
  }
}

function query(parent, selector) {
  return parent && parent.querySelector(selector);
}

function queryAll(parent, selector) {
  return selector ? slice(parent.querySelectorAll(selector)) : [];
}

function removeClass(elm, classes) {
  toggleClass(elm, classes, false);
}

function timeOf(e) {
  return e.timeStamp;
}

function unit(value) {
  return isString(value) ? value : value ? value + "px" : "";
}

var PROJECT_CODE = "splide";
var DATA_ATTRIBUTE = "data-" + PROJECT_CODE;

function assert(condition, message) {
  if (!condition) {
    throw new Error("[" + PROJECT_CODE + "] " + (message || ""));
  }
}

var min = Math.min,
    max = Math.max,
    floor = Math.floor,
    ceil = Math.ceil,
    abs = Math.abs;

function approximatelyEqual(x, y, epsilon) {
  return abs(x - y) < epsilon;
}

function between(number, minOrMax, maxOrMin, exclusive) {
  var minimum = min(minOrMax, maxOrMin);
  var maximum = max(minOrMax, maxOrMin);
  return exclusive ? minimum < number && number < maximum : minimum <= number && number <= maximum;
}

function clamp(number, x, y) {
  var minimum = min(x, y);
  var maximum = max(x, y);
  return min(max(minimum, number), maximum);
}

function sign(x) {
  return +(x > 0) - +(x < 0);
}

function camelToKebab(string) {
  return string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

function format(string, replacements) {
  forEach(replacements, function (replacement) {
    string = string.replace("%s", "" + replacement);
  });
  return string;
}

function pad(number) {
  return number < 10 ? "0" + number : "" + number;
}

var ids = {};

function uniqueId(prefix) {
  return "" + prefix + pad(ids[prefix] = (ids[prefix] || 0) + 1);
}

function EventBinder() {
  var listeners = [];

  function bind(targets, events, callback, options) {
    forEachEvent(targets, events, function (target, event, namespace) {
      var isEventTarget = ("addEventListener" in target);
      var remover = isEventTarget ? target.removeEventListener.bind(target, event, callback, options) : target["removeListener"].bind(target, callback);
      isEventTarget ? target.addEventListener(event, callback, options) : target["addListener"](callback);
      listeners.push([target, event, namespace, callback, remover]);
    });
  }

  function unbind(targets, events, callback) {
    forEachEvent(targets, events, function (target, event, namespace) {
      listeners = listeners.filter(function (listener) {
        if (listener[0] === target && listener[1] === event && listener[2] === namespace && (!callback || listener[3] === callback)) {
          listener[4]();
          return false;
        }

        return true;
      });
    });
  }

  function dispatch(target, type, detail) {
    var e;
    var bubbles = true;

    if (typeof CustomEvent === "function") {
      e = new CustomEvent(type, {
        bubbles: bubbles,
        detail: detail
      });
    } else {
      e = document.createEvent("CustomEvent");
      e.initCustomEvent(type, bubbles, false, detail);
    }

    target.dispatchEvent(e);
    return e;
  }

  function forEachEvent(targets, events, iteratee) {
    forEach(targets, function (target) {
      target && forEach(events, function (events2) {
        events2.split(" ").forEach(function (eventNS) {
          var fragment = eventNS.split(".");
          iteratee(target, fragment[0], fragment[1]);
        });
      });
    });
  }

  function destroy() {
    listeners.forEach(function (data) {
      data[4]();
    });
    empty(listeners);
  }

  return {
    bind: bind,
    unbind: unbind,
    dispatch: dispatch,
    destroy: destroy
  };
}

var EVENT_MOUNTED = "mounted";
var EVENT_READY = "ready";
var EVENT_MOVE = "move";
var EVENT_MOVED = "moved";
var EVENT_SHIFTED = "shifted";
var EVENT_CLICK = "click";
var EVENT_ACTIVE = "active";
var EVENT_INACTIVE = "inactive";
var EVENT_VISIBLE = "visible";
var EVENT_HIDDEN = "hidden";
var EVENT_SLIDE_KEYDOWN = "slide:keydown";
var EVENT_REFRESH = "refresh";
var EVENT_UPDATED = "updated";
var EVENT_RESIZE = "resize";
var EVENT_RESIZED = "resized";
var EVENT_DRAG = "drag";
var EVENT_DRAGGING = "dragging";
var EVENT_DRAGGED = "dragged";
var EVENT_SCROLL = "scroll";
var EVENT_SCROLLED = "scrolled";
var EVENT_DESTROY = "destroy";
var EVENT_ARROWS_MOUNTED = "arrows:mounted";
var EVENT_ARROWS_UPDATED = "arrows:updated";
var EVENT_PAGINATION_MOUNTED = "pagination:mounted";
var EVENT_PAGINATION_UPDATED = "pagination:updated";
var EVENT_NAVIGATION_MOUNTED = "navigation:mounted";
var EVENT_AUTOPLAY_PLAY = "autoplay:play";
var EVENT_AUTOPLAY_PLAYING = "autoplay:playing";
var EVENT_AUTOPLAY_PAUSE = "autoplay:pause";
var EVENT_LAZYLOAD_LOADED = "lazyload:loaded";

function EventInterface(Splide2) {
  var bus = Splide2 ? Splide2.event.bus : document.createDocumentFragment();
  var binder = EventBinder();

  function on(events, callback) {
    binder.bind(bus, toArray(events).join(" "), function (e) {
      callback.apply(callback, isArray(e.detail) ? e.detail : []);
    });
  }

  function emit(event) {
    binder.dispatch(bus, event, slice(arguments, 1));
  }

  if (Splide2) {
    Splide2.event.on(EVENT_DESTROY, binder.destroy);
  }

  return assign(binder, {
    bus: bus,
    on: on,
    off: apply(binder.unbind, bus),
    emit: emit
  });
}

function RequestInterval(interval, onInterval, onUpdate, limit) {
  var now = Date.now;
  var startTime;
  var rate = 0;
  var id;
  var paused = true;
  var count = 0;

  function update() {
    if (!paused) {
      rate = interval ? min((now() - startTime) / interval, 1) : 1;
      onUpdate && onUpdate(rate);

      if (rate >= 1) {
        onInterval();
        startTime = now();

        if (limit && ++count >= limit) {
          return pause();
        }
      }

      raf(update);
    }
  }

  function start(resume) {
    !resume && cancel();
    startTime = now() - (resume ? rate * interval : 0);
    paused = false;
    raf(update);
  }

  function pause() {
    paused = true;
  }

  function rewind() {
    startTime = now();
    rate = 0;

    if (onUpdate) {
      onUpdate(rate);
    }
  }

  function cancel() {
    id && cancelAnimationFrame(id);
    rate = 0;
    id = 0;
    paused = true;
  }

  function set(time) {
    interval = time;
  }

  function isPaused() {
    return paused;
  }

  return {
    start: start,
    rewind: rewind,
    pause: pause,
    cancel: cancel,
    set: set,
    isPaused: isPaused
  };
}

function State(initialState) {
  var state = initialState;

  function set(value) {
    state = value;
  }

  function is(states) {
    return includes(toArray(states), state);
  }

  return {
    set: set,
    is: is
  };
}

function Throttle(func, duration) {
  var interval;

  function throttled() {
    if (!interval) {
      interval = RequestInterval(duration || 0, function () {
        func();
        interval = null;
      }, null, 1);
      interval.start();
    }
  }

  return throttled;
}

function Media(Splide2, Components2, options) {
  var state = Splide2.state;
  var breakpoints = options.breakpoints || {};
  var reducedMotion = options.reducedMotion || {};
  var binder = EventBinder();
  var queries = [];

  function setup() {
    var isMin = options.mediaQuery === "min";
    ownKeys(breakpoints).sort(function (n, m) {
      return isMin ? +n - +m : +m - +n;
    }).forEach(function (key) {
      register(breakpoints[key], "(" + (isMin ? "min" : "max") + "-width:" + key + "px)");
    });
    register(reducedMotion, MEDIA_PREFERS_REDUCED_MOTION);
    update();
  }

  function destroy(completely) {
    if (completely) {
      binder.destroy();
    }
  }

  function register(options2, query) {
    var queryList = matchMedia(query);
    binder.bind(queryList, "change", update);
    queries.push([options2, queryList]);
  }

  function update() {
    var destroyed = state.is(DESTROYED);
    var direction = options.direction;
    var merged = queries.reduce(function (merged2, entry) {
      return merge(merged2, entry[1].matches ? entry[0] : {});
    }, {});
    omit(options);
    set(merged);

    if (options.destroy) {
      Splide2.destroy(options.destroy === "completely");
    } else if (destroyed) {
      destroy(true);
      Splide2.mount();
    } else {
      direction !== options.direction && Splide2.refresh();
    }
  }

  function reduce(enable) {
    if (matchMedia(MEDIA_PREFERS_REDUCED_MOTION).matches) {
      enable ? merge(options, reducedMotion) : omit(options, ownKeys(reducedMotion));
    }
  }

  function set(opts, user) {
    merge(options, opts);
    user && merge(Object.getPrototypeOf(options), opts);

    if (!state.is(CREATED)) {
      Splide2.emit(EVENT_UPDATED, options);
    }
  }

  return {
    setup: setup,
    destroy: destroy,
    reduce: reduce,
    set: set
  };
}

var ARROW = "Arrow";
var ARROW_LEFT = ARROW + "Left";
var ARROW_RIGHT = ARROW + "Right";
var ARROW_UP = ARROW + "Up";
var ARROW_DOWN = ARROW + "Down";
var LTR = "ltr";
var RTL = "rtl";
var TTB = "ttb";
var ORIENTATION_MAP = {
  width: ["height"],
  left: ["top", "right"],
  right: ["bottom", "left"],
  x: ["y"],
  X: ["Y"],
  Y: ["X"],
  ArrowLeft: [ARROW_UP, ARROW_RIGHT],
  ArrowRight: [ARROW_DOWN, ARROW_LEFT]
};

function Direction(Splide2, Components2, options) {
  function resolve(prop, axisOnly, direction) {
    direction = direction || options.direction;
    var index = direction === RTL && !axisOnly ? 1 : direction === TTB ? 0 : -1;
    return ORIENTATION_MAP[prop] && ORIENTATION_MAP[prop][index] || prop.replace(/width|left|right/i, function (match, offset) {
      var replacement = ORIENTATION_MAP[match.toLowerCase()][index] || match;
      return offset > 0 ? replacement.charAt(0).toUpperCase() + replacement.slice(1) : replacement;
    });
  }

  function orient(value) {
    return value * (options.direction === RTL ? 1 : -1);
  }

  return {
    resolve: resolve,
    orient: orient
  };
}

var ROLE = "role";
var TAB_INDEX = "tabindex";
var DISABLED = "disabled";
var ARIA_PREFIX = "aria-";
var ARIA_CONTROLS = ARIA_PREFIX + "controls";
var ARIA_CURRENT = ARIA_PREFIX + "current";
var ARIA_SELECTED = ARIA_PREFIX + "selected";
var ARIA_LABEL = ARIA_PREFIX + "label";
var ARIA_LABELLEDBY = ARIA_PREFIX + "labelledby";
var ARIA_HIDDEN = ARIA_PREFIX + "hidden";
var ARIA_ORIENTATION = ARIA_PREFIX + "orientation";
var ARIA_ROLEDESCRIPTION = ARIA_PREFIX + "roledescription";
var ARIA_LIVE = ARIA_PREFIX + "live";
var ARIA_BUSY = ARIA_PREFIX + "busy";
var ARIA_ATOMIC = ARIA_PREFIX + "atomic";
var ALL_ATTRIBUTES = [ROLE, TAB_INDEX, DISABLED, ARIA_CONTROLS, ARIA_CURRENT, ARIA_LABEL, ARIA_LABELLEDBY, ARIA_HIDDEN, ARIA_ORIENTATION, ARIA_ROLEDESCRIPTION];
var CLASS_ROOT = PROJECT_CODE;
var CLASS_TRACK = PROJECT_CODE + "__track";
var CLASS_LIST = PROJECT_CODE + "__list";
var CLASS_SLIDE = PROJECT_CODE + "__slide";
var CLASS_CLONE = CLASS_SLIDE + "--clone";
var CLASS_CONTAINER = CLASS_SLIDE + "__container";
var CLASS_ARROWS = PROJECT_CODE + "__arrows";
var CLASS_ARROW = PROJECT_CODE + "__arrow";
var CLASS_ARROW_PREV = CLASS_ARROW + "--prev";
var CLASS_ARROW_NEXT = CLASS_ARROW + "--next";
var CLASS_PAGINATION = PROJECT_CODE + "__pagination";
var CLASS_PAGINATION_PAGE = CLASS_PAGINATION + "__page";
var CLASS_PROGRESS = PROJECT_CODE + "__progress";
var CLASS_PROGRESS_BAR = CLASS_PROGRESS + "__bar";
var CLASS_TOGGLE = PROJECT_CODE + "__toggle";
var CLASS_TOGGLE_PLAY = CLASS_TOGGLE + "__play";
var CLASS_TOGGLE_PAUSE = CLASS_TOGGLE + "__pause";
var CLASS_SPINNER = PROJECT_CODE + "__spinner";
var CLASS_SR = PROJECT_CODE + "__sr";
var CLASS_INITIALIZED = "is-initialized";
var CLASS_ACTIVE = "is-active";
var CLASS_PREV = "is-prev";
var CLASS_NEXT = "is-next";
var CLASS_VISIBLE = "is-visible";
var CLASS_LOADING = "is-loading";
var CLASS_FOCUS_IN = "is-focus-in";
var STATUS_CLASSES = [CLASS_ACTIVE, CLASS_VISIBLE, CLASS_PREV, CLASS_NEXT, CLASS_LOADING, CLASS_FOCUS_IN];
var CLASSES = {
  slide: CLASS_SLIDE,
  clone: CLASS_CLONE,
  arrows: CLASS_ARROWS,
  arrow: CLASS_ARROW,
  prev: CLASS_ARROW_PREV,
  next: CLASS_ARROW_NEXT,
  pagination: CLASS_PAGINATION,
  page: CLASS_PAGINATION_PAGE,
  spinner: CLASS_SPINNER
};

function closest(from, selector) {
  if (isFunction(from.closest)) {
    return from.closest(selector);
  }

  var elm = from;

  while (elm && elm.nodeType === 1) {
    if (matches(elm, selector)) {
      break;
    }

    elm = elm.parentElement;
  }

  return elm;
}

var FRICTION = 5;
var LOG_INTERVAL = 200;
var POINTER_DOWN_EVENTS = "touchstart mousedown";
var POINTER_MOVE_EVENTS = "touchmove mousemove";
var POINTER_UP_EVENTS = "touchend touchcancel mouseup click";

function Elements(Splide2, Components2, options) {
  var _EventInterface = EventInterface(Splide2),
      on = _EventInterface.on,
      bind = _EventInterface.bind;

  var root = Splide2.root;
  var i18n = options.i18n;
  var elements = {};
  var slides = [];
  var rootClasses = [];
  var trackClasses = [];
  var track;
  var list;
  var isUsingKey;

  function setup() {
    collect();
    init();
    update();
  }

  function mount() {
    on(EVENT_REFRESH, destroy);
    on(EVENT_REFRESH, setup);
    on(EVENT_UPDATED, update);
    bind(document, POINTER_DOWN_EVENTS + " keydown", function (e) {
      isUsingKey = e.type === "keydown";
    }, {
      capture: true
    });
    bind(root, "focusin", function () {
      toggleClass(root, CLASS_FOCUS_IN, !!isUsingKey);
    });
  }

  function destroy(completely) {
    var attrs = ALL_ATTRIBUTES.concat("style");
    empty(slides);
    removeClass(root, rootClasses);
    removeClass(track, trackClasses);
    removeAttribute([track, list], attrs);
    removeAttribute(root, completely ? attrs : ["style", ARIA_ROLEDESCRIPTION]);
  }

  function update() {
    removeClass(root, rootClasses);
    removeClass(track, trackClasses);
    rootClasses = getClasses(CLASS_ROOT);
    trackClasses = getClasses(CLASS_TRACK);
    addClass(root, rootClasses);
    addClass(track, trackClasses);
    setAttribute(root, ARIA_LABEL, options.label);
    setAttribute(root, ARIA_LABELLEDBY, options.labelledby);
  }

  function collect() {
    track = find("." + CLASS_TRACK);
    list = child(track, "." + CLASS_LIST);
    assert(track && list, "A track/list element is missing.");
    push(slides, children(list, "." + CLASS_SLIDE + ":not(." + CLASS_CLONE + ")"));
    forOwn({
      arrows: CLASS_ARROWS,
      pagination: CLASS_PAGINATION,
      prev: CLASS_ARROW_PREV,
      next: CLASS_ARROW_NEXT,
      bar: CLASS_PROGRESS_BAR,
      toggle: CLASS_TOGGLE
    }, function (className, key) {
      elements[key] = find("." + className);
    });
    assign(elements, {
      root: root,
      track: track,
      list: list,
      slides: slides
    });
  }

  function init() {
    var id = root.id || uniqueId(PROJECT_CODE);
    var role = options.role;
    root.id = id;
    track.id = track.id || id + "-track";
    list.id = list.id || id + "-list";

    if (!getAttribute(root, ROLE) && root.tagName !== "SECTION" && role) {
      setAttribute(root, ROLE, role);
    }

    setAttribute(root, ARIA_ROLEDESCRIPTION, i18n.carousel);
    setAttribute(list, ROLE, "presentation");
  }

  function find(selector) {
    var elm = query(root, selector);
    return elm && closest(elm, "." + CLASS_ROOT) === root ? elm : void 0;
  }

  function getClasses(base) {
    return [base + "--" + options.type, base + "--" + options.direction, options.drag && base + "--draggable", options.isNavigation && base + "--nav", base === CLASS_ROOT && CLASS_ACTIVE];
  }

  return assign(elements, {
    setup: setup,
    mount: mount,
    destroy: destroy
  });
}

var SLIDE = "slide";
var LOOP = "loop";
var FADE = "fade";

function Slide$1(Splide2, index, slideIndex, slide) {
  var event = EventInterface(Splide2);
  var on = event.on,
      emit = event.emit,
      bind = event.bind;
  var Components = Splide2.Components,
      root = Splide2.root,
      options = Splide2.options;
  var isNavigation = options.isNavigation,
      updateOnMove = options.updateOnMove,
      i18n = options.i18n,
      pagination = options.pagination,
      slideFocus = options.slideFocus;
  var resolve = Components.Direction.resolve;
  var styles = getAttribute(slide, "style");
  var label = getAttribute(slide, ARIA_LABEL);
  var isClone = slideIndex > -1;
  var container = child(slide, "." + CLASS_CONTAINER);
  var focusableNodes = queryAll(slide, options.focusableNodes || "");
  var destroyed;

  function mount() {
    if (!isClone) {
      slide.id = root.id + "-slide" + pad(index + 1);
      setAttribute(slide, ROLE, pagination ? "tabpanel" : "group");
      setAttribute(slide, ARIA_ROLEDESCRIPTION, i18n.slide);
      setAttribute(slide, ARIA_LABEL, label || format(i18n.slideLabel, [index + 1, Splide2.length]));
    }

    listen();
  }

  function listen() {
    bind(slide, "click", apply(emit, EVENT_CLICK, self));
    bind(slide, "keydown", apply(emit, EVENT_SLIDE_KEYDOWN, self));
    on([EVENT_MOVED, EVENT_SHIFTED, EVENT_SCROLLED], update);
    on(EVENT_NAVIGATION_MOUNTED, initNavigation);

    if (updateOnMove) {
      on(EVENT_MOVE, onMove);
    }
  }

  function destroy() {
    destroyed = true;
    event.destroy();
    removeClass(slide, STATUS_CLASSES);
    removeAttribute(slide, ALL_ATTRIBUTES);
    setAttribute(slide, "style", styles);
    setAttribute(slide, ARIA_LABEL, label || "");
  }

  function initNavigation() {
    var controls = Splide2.splides.map(function (target) {
      var Slide2 = target.splide.Components.Slides.getAt(index);
      return Slide2 ? Slide2.slide.id : "";
    }).join(" ");
    setAttribute(slide, ARIA_LABEL, format(i18n.slideX, (isClone ? slideIndex : index) + 1));
    setAttribute(slide, ARIA_CONTROLS, controls);
    setAttribute(slide, ROLE, slideFocus ? "button" : "");
    slideFocus && removeAttribute(slide, ARIA_ROLEDESCRIPTION);
  }

  function onMove() {
    if (!destroyed) {
      update();
    }
  }

  function update() {
    if (!destroyed) {
      var curr = Splide2.index;
      updateActivity();
      updateVisibility();
      toggleClass(slide, CLASS_PREV, index === curr - 1);
      toggleClass(slide, CLASS_NEXT, index === curr + 1);
    }
  }

  function updateActivity() {
    var active = isActive();

    if (active !== hasClass(slide, CLASS_ACTIVE)) {
      toggleClass(slide, CLASS_ACTIVE, active);
      setAttribute(slide, ARIA_CURRENT, isNavigation && active || "");
      emit(active ? EVENT_ACTIVE : EVENT_INACTIVE, self);
    }
  }

  function updateVisibility() {
    var visible = isVisible();
    var hidden = !visible && (!isActive() || isClone);

    if (!Splide2.state.is([MOVING, SCROLLING])) {
      setAttribute(slide, ARIA_HIDDEN, hidden || "");
    }

    setAttribute(focusableNodes, TAB_INDEX, hidden ? -1 : "");

    if (slideFocus) {
      setAttribute(slide, TAB_INDEX, hidden ? -1 : 0);
    }

    if (visible !== hasClass(slide, CLASS_VISIBLE)) {
      toggleClass(slide, CLASS_VISIBLE, visible);
      emit(visible ? EVENT_VISIBLE : EVENT_HIDDEN, self);
    }

    if (!visible && document.activeElement === slide) {
      var Slide2 = Components.Slides.getAt(Splide2.index);
      Slide2 && focus(Slide2.slide);
    }
  }

  function style$1(prop, value, useContainer) {
    style(useContainer && container || slide, prop, value);
  }

  function isActive() {
    var curr = Splide2.index;
    return curr === index || options.cloneStatus && curr === slideIndex;
  }

  function isVisible() {
    if (Splide2.is(FADE)) {
      return isActive();
    }

    var trackRect = rect(Components.Elements.track);
    var slideRect = rect(slide);
    var left = resolve("left");
    var right = resolve("right");
    return floor(trackRect[left]) <= ceil(slideRect[left]) && floor(slideRect[right]) <= ceil(trackRect[right]);
  }

  function isWithin(from, distance) {
    var diff = abs(from - index);

    if (!isClone && (options.rewind || Splide2.is(LOOP))) {
      diff = min(diff, Splide2.length - diff);
    }

    return diff <= distance;
  }

  var self = {
    index: index,
    slideIndex: slideIndex,
    slide: slide,
    container: container,
    isClone: isClone,
    mount: mount,
    destroy: destroy,
    update: update,
    style: style$1,
    isWithin: isWithin
  };
  return self;
}

function Slides(Splide2, Components2, options) {
  var _EventInterface2 = EventInterface(Splide2),
      on = _EventInterface2.on,
      emit = _EventInterface2.emit,
      bind = _EventInterface2.bind;

  var _Components2$Elements = Components2.Elements,
      slides = _Components2$Elements.slides,
      list = _Components2$Elements.list;
  var Slides2 = [];

  function mount() {
    init();
    on(EVENT_REFRESH, destroy);
    on(EVENT_REFRESH, init);
    on([EVENT_MOUNTED, EVENT_REFRESH], function () {
      Slides2.sort(function (Slide1, Slide2) {
        return Slide1.index - Slide2.index;
      });
    });
  }

  function init() {
    slides.forEach(function (slide, index) {
      register(slide, index, -1);
    });
  }

  function destroy() {
    forEach$1(function (Slide2) {
      Slide2.destroy();
    });
    empty(Slides2);
  }

  function update() {
    forEach$1(function (Slide2) {
      Slide2.update();
    });
  }

  function register(slide, index, slideIndex) {
    var object = Slide$1(Splide2, index, slideIndex, slide);
    object.mount();
    Slides2.push(object);
  }

  function get(excludeClones) {
    return excludeClones ? filter(function (Slide2) {
      return !Slide2.isClone;
    }) : Slides2;
  }

  function getIn(page) {
    var Controller = Components2.Controller;
    var index = Controller.toIndex(page);
    var max = Controller.hasFocus() ? 1 : options.perPage;
    return filter(function (Slide2) {
      return between(Slide2.index, index, index + max - 1);
    });
  }

  function getAt(index) {
    return filter(index)[0];
  }

  function add(items, index) {
    forEach(items, function (slide) {
      if (isString(slide)) {
        slide = parseHtml(slide);
      }

      if (isHTMLElement(slide)) {
        var ref = slides[index];
        ref ? before(slide, ref) : append(list, slide);
        addClass(slide, options.classes.slide);
        observeImages(slide, apply(emit, EVENT_RESIZE));
      }
    });
    emit(EVENT_REFRESH);
  }

  function remove$1(matcher) {
    remove(filter(matcher).map(function (Slide2) {
      return Slide2.slide;
    }));
    emit(EVENT_REFRESH);
  }

  function forEach$1(iteratee, excludeClones) {
    get(excludeClones).forEach(iteratee);
  }

  function filter(matcher) {
    return Slides2.filter(isFunction(matcher) ? matcher : function (Slide2) {
      return isString(matcher) ? matches(Slide2.slide, matcher) : includes(toArray(matcher), Slide2.index);
    });
  }

  function style(prop, value, useContainer) {
    forEach$1(function (Slide2) {
      Slide2.style(prop, value, useContainer);
    });
  }

  function observeImages(elm, callback) {
    var images = queryAll(elm, "img");
    var length = images.length;

    if (length) {
      images.forEach(function (img) {
        bind(img, "load error", function () {
          if (! --length) {
            callback();
          }
        });
      });
    } else {
      callback();
    }
  }

  function getLength(excludeClones) {
    return excludeClones ? slides.length : Slides2.length;
  }

  function isEnough() {
    return Slides2.length > options.perPage;
  }

  return {
    mount: mount,
    destroy: destroy,
    update: update,
    register: register,
    get: get,
    getIn: getIn,
    getAt: getAt,
    add: add,
    remove: remove$1,
    forEach: forEach$1,
    filter: filter,
    style: style,
    getLength: getLength,
    isEnough: isEnough
  };
}

function Layout(Splide2, Components2, options) {
  var _EventInterface3 = EventInterface(Splide2),
      on = _EventInterface3.on,
      bind = _EventInterface3.bind,
      emit = _EventInterface3.emit;

  var Slides = Components2.Slides;
  var resolve = Components2.Direction.resolve;
  var _Components2$Elements2 = Components2.Elements,
      root = _Components2$Elements2.root,
      track = _Components2$Elements2.track,
      list = _Components2$Elements2.list;
  var getAt = Slides.getAt,
      styleSlides = Slides.style;
  var vertical;
  var rootRect;

  function mount() {
    init();
    bind(window, "resize load", Throttle(apply(emit, EVENT_RESIZE)));
    on([EVENT_UPDATED, EVENT_REFRESH], init);
    on(EVENT_RESIZE, resize);
  }

  function init() {
    rootRect = null;
    vertical = options.direction === TTB;
    style(root, "maxWidth", unit(options.width));
    style(track, resolve("paddingLeft"), cssPadding(false));
    style(track, resolve("paddingRight"), cssPadding(true));
    resize();
  }

  function resize() {
    var newRect = rect(root);

    if (!rootRect || rootRect.width !== newRect.width || rootRect.height !== newRect.height) {
      style(track, "height", cssTrackHeight());
      styleSlides(resolve("marginRight"), unit(options.gap));
      styleSlides("width", cssSlideWidth());
      styleSlides("height", cssSlideHeight(), true);
      rootRect = newRect;
      emit(EVENT_RESIZED);
    }
  }

  function cssPadding(right) {
    var padding = options.padding;
    var prop = resolve(right ? "right" : "left");
    return padding && unit(padding[prop] || (isObject(padding) ? 0 : padding)) || "0px";
  }

  function cssTrackHeight() {
    var height = "";

    if (vertical) {
      height = cssHeight();
      assert(height, "height or heightRatio is missing.");
      height = "calc(" + height + " - " + cssPadding(false) + " - " + cssPadding(true) + ")";
    }

    return height;
  }

  function cssHeight() {
    return unit(options.height || rect(list).width * options.heightRatio);
  }

  function cssSlideWidth() {
    return options.autoWidth ? null : unit(options.fixedWidth) || (vertical ? "" : cssSlideSize());
  }

  function cssSlideHeight() {
    return unit(options.fixedHeight) || (vertical ? options.autoHeight ? null : cssSlideSize() : cssHeight());
  }

  function cssSlideSize() {
    var gap = unit(options.gap);
    return "calc((100%" + (gap && " + " + gap) + ")/" + (options.perPage || 1) + (gap && " - " + gap) + ")";
  }

  function listSize() {
    return rect(list)[resolve("width")];
  }

  function slideSize(index, withoutGap) {
    var Slide = getAt(index || 0);
    return Slide ? rect(Slide.slide)[resolve("width")] + (withoutGap ? 0 : getGap()) : 0;
  }

  function totalSize(index, withoutGap) {
    var Slide = getAt(index);

    if (Slide) {
      var right = rect(Slide.slide)[resolve("right")];
      var left = rect(list)[resolve("left")];
      return abs(right - left) + (withoutGap ? 0 : getGap());
    }

    return 0;
  }

  function sliderSize() {
    return totalSize(Splide2.length - 1, true) - totalSize(-1, true);
  }

  function getGap() {
    var Slide = getAt(0);
    return Slide && parseFloat(style(Slide.slide, resolve("marginRight"))) || 0;
  }

  function getPadding(right) {
    return parseFloat(style(track, resolve("padding" + (right ? "Right" : "Left")))) || 0;
  }

  return {
    mount: mount,
    listSize: listSize,
    slideSize: slideSize,
    sliderSize: sliderSize,
    totalSize: totalSize,
    getPadding: getPadding
  };
}

var MULTIPLIER = 2;

function Clones(Splide2, Components2, options) {
  var _EventInterface4 = EventInterface(Splide2),
      on = _EventInterface4.on,
      emit = _EventInterface4.emit;

  var Elements = Components2.Elements,
      Slides = Components2.Slides;
  var resolve = Components2.Direction.resolve;
  var clones = [];
  var cloneCount;

  function mount() {
    init();
    on(EVENT_REFRESH, destroy);
    on(EVENT_REFRESH, init);
    on([EVENT_UPDATED, EVENT_RESIZE], observe);
  }

  function init() {
    if (cloneCount = computeCloneCount()) {
      generate(cloneCount);
      emit(EVENT_RESIZE);
    }
  }

  function destroy() {
    remove(clones);
    empty(clones);
  }

  function observe() {
    if (cloneCount < computeCloneCount()) {
      emit(EVENT_REFRESH);
    }
  }

  function generate(count) {
    var slides = Slides.get().slice();
    var length = slides.length;

    if (length) {
      while (slides.length < count) {
        push(slides, slides);
      }

      push(slides.slice(-count), slides.slice(0, count)).forEach(function (Slide, index) {
        var isHead = index < count;
        var clone = cloneDeep(Slide.slide, index);
        isHead ? before(clone, slides[0].slide) : append(Elements.list, clone);
        push(clones, clone);
        Slides.register(clone, index - count + (isHead ? 0 : length), Slide.index);
      });
    }
  }

  function cloneDeep(elm, index) {
    var clone = elm.cloneNode(true);
    addClass(clone, options.classes.clone);
    clone.id = Splide2.root.id + "-clone" + pad(index + 1);
    return clone;
  }

  function computeCloneCount() {
    var clones2 = options.clones;

    if (!Splide2.is(LOOP)) {
      clones2 = 0;
    } else if (!clones2) {
      var fixedSize = options[resolve("fixedWidth")] && Components2.Layout.slideSize(0);
      var fixedCount = fixedSize && ceil(rect(Elements.track)[resolve("width")] / fixedSize);
      clones2 = fixedCount || options[resolve("autoWidth")] && Splide2.length || options.perPage * MULTIPLIER;
    }

    return clones2;
  }

  return {
    mount: mount,
    destroy: destroy
  };
}

function Move(Splide2, Components2, options) {
  var _EventInterface5 = EventInterface(Splide2),
      on = _EventInterface5.on,
      emit = _EventInterface5.emit;

  var set = Splide2.state.set;
  var _Components2$Layout = Components2.Layout,
      slideSize = _Components2$Layout.slideSize,
      getPadding = _Components2$Layout.getPadding,
      totalSize = _Components2$Layout.totalSize,
      listSize = _Components2$Layout.listSize,
      sliderSize = _Components2$Layout.sliderSize;
  var _Components2$Directio = Components2.Direction,
      resolve = _Components2$Directio.resolve,
      orient = _Components2$Directio.orient;
  var _Components2$Elements3 = Components2.Elements,
      list = _Components2$Elements3.list,
      track = _Components2$Elements3.track;
  var Transition;

  function mount() {
    Transition = Components2.Transition;
    on([EVENT_MOUNTED, EVENT_RESIZED, EVENT_UPDATED, EVENT_REFRESH], reposition);
  }

  function reposition() {
    if (!Components2.Controller.isBusy()) {
      Components2.Scroll.cancel();
      jump(Splide2.index);
      Components2.Slides.update();
    }
  }

  function move(dest, index, prev, callback) {
    if (dest !== index && canShift(dest > prev)) {
      cancel();
      translate(shift(getPosition(), dest > prev), true);
    }

    set(MOVING);
    emit(EVENT_MOVE, index, prev, dest);
    Transition.start(index, function () {
      set(IDLE);
      emit(EVENT_MOVED, index, prev, dest);
      callback && callback();
    });
  }

  function jump(index) {
    translate(toPosition(index, true));
  }

  function translate(position, preventLoop) {
    if (!Splide2.is(FADE)) {
      var destination = preventLoop ? position : loop(position);
      style(list, "transform", "translate" + resolve("X") + "(" + destination + "px)");
      position !== destination && emit(EVENT_SHIFTED);
    }
  }

  function loop(position) {
    if (Splide2.is(LOOP)) {
      var index = toIndex(position);
      var exceededMax = index > Components2.Controller.getEnd();
      var exceededMin = index < 0;

      if (exceededMin || exceededMax) {
        position = shift(position, exceededMax);
      }
    }

    return position;
  }

  function shift(position, backwards) {
    var excess = position - getLimit(backwards);
    var size = sliderSize();
    position -= orient(size * (ceil(abs(excess) / size) || 1)) * (backwards ? 1 : -1);
    return position;
  }

  function cancel() {
    translate(getPosition());
    Transition.cancel();
  }

  function toIndex(position) {
    var Slides = Components2.Slides.get();
    var index = 0;
    var minDistance = Infinity;

    for (var i = 0; i < Slides.length; i++) {
      var slideIndex = Slides[i].index;
      var distance = abs(toPosition(slideIndex, true) - position);

      if (distance <= minDistance) {
        minDistance = distance;
        index = slideIndex;
      } else {
        break;
      }
    }

    return index;
  }

  function toPosition(index, trimming) {
    var position = orient(totalSize(index - 1) - offset(index));
    return trimming ? trim(position) : position;
  }

  function getPosition() {
    var left = resolve("left");
    return rect(list)[left] - rect(track)[left] + orient(getPadding(false));
  }

  function trim(position) {
    if (options.trimSpace && Splide2.is(SLIDE)) {
      position = clamp(position, 0, orient(sliderSize() - listSize()));
    }

    return position;
  }

  function offset(index) {
    var focus = options.focus;
    return focus === "center" ? (listSize() - slideSize(index, true)) / 2 : +focus * slideSize(index) || 0;
  }

  function getLimit(max) {
    return toPosition(max ? Components2.Controller.getEnd() : 0, !!options.trimSpace);
  }

  function canShift(backwards) {
    var shifted = orient(shift(getPosition(), backwards));
    return backwards ? shifted >= 0 : shifted <= list[resolve("scrollWidth")] - rect(track)[resolve("width")];
  }

  function exceededLimit(max, position) {
    position = isUndefined(position) ? getPosition() : position;
    var exceededMin = max !== true && orient(position) < orient(getLimit(false));
    var exceededMax = max !== false && orient(position) > orient(getLimit(true));
    return exceededMin || exceededMax;
  }

  return {
    mount: mount,
    move: move,
    jump: jump,
    translate: translate,
    shift: shift,
    cancel: cancel,
    toIndex: toIndex,
    toPosition: toPosition,
    getPosition: getPosition,
    getLimit: getLimit,
    exceededLimit: exceededLimit,
    reposition: reposition
  };
}

function Controller(Splide2, Components2, options) {
  var _EventInterface6 = EventInterface(Splide2),
      on = _EventInterface6.on;

  var Move = Components2.Move;
  var getPosition = Move.getPosition,
      getLimit = Move.getLimit,
      toPosition = Move.toPosition;
  var _Components2$Slides = Components2.Slides,
      isEnough = _Components2$Slides.isEnough,
      getLength = _Components2$Slides.getLength;
  var isLoop = Splide2.is(LOOP);
  var isSlide = Splide2.is(SLIDE);
  var getNext = apply(getAdjacent, false);
  var getPrev = apply(getAdjacent, true);
  var currIndex = options.start || 0;
  var prevIndex = currIndex;
  var slideCount;
  var perMove;
  var perPage;

  function mount() {
    init();
    on([EVENT_UPDATED, EVENT_REFRESH], init);
  }

  function init() {
    slideCount = getLength(true);
    perMove = options.perMove;
    perPage = options.perPage;
    var index = clamp(currIndex, 0, slideCount - 1);

    if (index !== currIndex) {
      currIndex = index;
      Move.reposition();
    }
  }

  function go(control, allowSameIndex, callback) {
    if (!isBusy()) {
      var dest = parse(control);
      var index = loop(dest);

      if (index > -1 && (allowSameIndex || index !== currIndex)) {
        setIndex(index);
        Move.move(dest, index, prevIndex, callback);
      }
    }
  }

  function scroll(destination, duration, snap, callback) {
    Components2.Scroll.scroll(destination, duration, snap, function () {
      setIndex(loop(Move.toIndex(getPosition())));
      callback && callback();
    });
  }

  function parse(control) {
    var index = currIndex;

    if (isString(control)) {
      var _ref = control.match(/([+\-<>])(\d+)?/) || [],
          indicator = _ref[1],
          number = _ref[2];

      if (indicator === "+" || indicator === "-") {
        index = computeDestIndex(currIndex + +("" + indicator + (+number || 1)), currIndex);
      } else if (indicator === ">") {
        index = number ? toIndex(+number) : getNext(true);
      } else if (indicator === "<") {
        index = getPrev(true);
      }
    } else {
      index = isLoop ? control : clamp(control, 0, getEnd());
    }

    return index;
  }

  function getAdjacent(prev, destination) {
    var number = perMove || (hasFocus() ? 1 : perPage);
    var dest = computeDestIndex(currIndex + number * (prev ? -1 : 1), currIndex, !(perMove || hasFocus()));

    if (dest === -1 && isSlide) {
      if (!approximatelyEqual(getPosition(), getLimit(!prev), 1)) {
        return prev ? 0 : getEnd();
      }
    }

    return destination ? dest : loop(dest);
  }

  function computeDestIndex(dest, from, snapPage) {
    if (isEnough()) {
      var end = getEnd();
      var index = computeMovableDestIndex(dest);

      if (index !== dest) {
        from = dest;
        dest = index;
        snapPage = false;
      }

      if (dest < 0 || dest > end) {
        if (between(0, dest, from, true) || between(end, from, dest, true)) {
          dest = toIndex(toPage(dest));
        } else {
          if (isLoop) {
            dest = snapPage ? dest < 0 ? -(slideCount % perPage || perPage) : slideCount : dest;
          } else if (options.rewind) {
            dest = dest < 0 ? end : 0;
          } else {
            dest = -1;
          }
        }
      } else {
        if (snapPage && dest !== from) {
          dest = toIndex(toPage(from) + (dest < from ? -1 : 1));
        }
      }
    } else {
      dest = -1;
    }

    return dest;
  }

  function computeMovableDestIndex(dest) {
    if (isSlide && options.trimSpace === "move" && dest !== currIndex) {
      var position = getPosition();

      while (position === toPosition(dest, true) && between(dest, 0, Splide2.length - 1, !options.rewind)) {
        dest < currIndex ? --dest : ++dest;
      }
    }

    return dest;
  }

  function loop(index) {
    return isLoop ? (index + slideCount) % slideCount || 0 : index;
  }

  function getEnd() {
    return max(slideCount - (hasFocus() || isLoop && perMove ? 1 : perPage), 0);
  }

  function toIndex(page) {
    return clamp(hasFocus() ? page : perPage * page, 0, getEnd());
  }

  function toPage(index) {
    return hasFocus() ? index : floor((index >= getEnd() ? slideCount - 1 : index) / perPage);
  }

  function toDest(destination) {
    var closest = Move.toIndex(destination);
    return isSlide ? clamp(closest, 0, getEnd()) : closest;
  }

  function setIndex(index) {
    if (index !== currIndex) {
      prevIndex = currIndex;
      currIndex = index;
    }
  }

  function getIndex(prev) {
    return prev ? prevIndex : currIndex;
  }

  function hasFocus() {
    return !isUndefined(options.focus) || options.isNavigation;
  }

  function isBusy() {
    return Splide2.state.is([MOVING, SCROLLING]) && !!options.waitForTransition;
  }

  return {
    mount: mount,
    go: go,
    scroll: scroll,
    getNext: getNext,
    getPrev: getPrev,
    getAdjacent: getAdjacent,
    getEnd: getEnd,
    setIndex: setIndex,
    getIndex: getIndex,
    toIndex: toIndex,
    toPage: toPage,
    toDest: toDest,
    hasFocus: hasFocus,
    isBusy: isBusy
  };
}

var XML_NAME_SPACE = "http://www.w3.org/2000/svg";
var PATH = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";
var SIZE = 40;

function Arrows(Splide2, Components2, options) {
  var event = EventInterface(Splide2);
  var on = event.on,
      bind = event.bind,
      emit = event.emit;
  var classes = options.classes,
      i18n = options.i18n;
  var Elements = Components2.Elements,
      Controller = Components2.Controller;
  var userArrows = Elements.arrows,
      track = Elements.track;
  var wrapper = userArrows;
  var prev = Elements.prev;
  var next = Elements.next;
  var created;
  var wrapperClasses;
  var arrows = {};

  function mount() {
    init();
    on(EVENT_UPDATED, remount);
  }

  function remount() {
    destroy();
    mount();
  }

  function init() {
    var enabled = options.arrows;

    if (enabled && !(prev && next)) {
      createArrows();
    }

    if (prev && next) {
      assign(arrows, {
        prev: prev,
        next: next
      });
      display(wrapper, enabled ? "" : "none");
      addClass(wrapper, wrapperClasses = CLASS_ARROWS + "--" + options.direction);

      if (enabled) {
        listen();
        update();
        setAttribute([prev, next], ARIA_CONTROLS, track.id);
        emit(EVENT_ARROWS_MOUNTED, prev, next);
      }
    }
  }

  function destroy() {
    event.destroy();
    removeClass(wrapper, wrapperClasses);

    if (created) {
      remove(userArrows ? [prev, next] : wrapper);
      prev = next = null;
    } else {
      removeAttribute([prev, next], ALL_ATTRIBUTES);
    }
  }

  function listen() {
    on([EVENT_MOVED, EVENT_REFRESH, EVENT_SCROLLED], update);
    bind(next, "click", apply(go, ">"));
    bind(prev, "click", apply(go, "<"));
  }

  function go(control) {
    Controller.go(control, true);
  }

  function createArrows() {
    wrapper = userArrows || create("div", classes.arrows);
    prev = createArrow(true);
    next = createArrow(false);
    created = true;
    append(wrapper, [prev, next]);
    !userArrows && before(wrapper, track);
  }

  function createArrow(prev2) {
    var arrow = "<button class=\"" + classes.arrow + " " + (prev2 ? classes.prev : classes.next) + "\" type=\"button\"><svg xmlns=\"" + XML_NAME_SPACE + "\" viewBox=\"0 0 " + SIZE + " " + SIZE + "\" width=\"" + SIZE + "\" height=\"" + SIZE + "\" focusable=\"false\"><path d=\"" + (options.arrowPath || PATH) + "\" />";
    return parseHtml(arrow);
  }

  function update() {
    var index = Splide2.index;
    var prevIndex = Controller.getPrev();
    var nextIndex = Controller.getNext();
    var prevLabel = prevIndex > -1 && index < prevIndex ? i18n.last : i18n.prev;
    var nextLabel = nextIndex > -1 && index > nextIndex ? i18n.first : i18n.next;
    prev.disabled = prevIndex < 0;
    next.disabled = nextIndex < 0;
    setAttribute(prev, ARIA_LABEL, prevLabel);
    setAttribute(next, ARIA_LABEL, nextLabel);
    emit(EVENT_ARROWS_UPDATED, prev, next, prevIndex, nextIndex);
  }

  return {
    arrows: arrows,
    mount: mount,
    destroy: destroy
  };
}

var INTERVAL_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-interval";

function Autoplay(Splide2, Components2, options) {
  var _EventInterface7 = EventInterface(Splide2),
      on = _EventInterface7.on,
      bind = _EventInterface7.bind,
      emit = _EventInterface7.emit;

  var interval = RequestInterval(options.interval, Splide2.go.bind(Splide2, ">"), onAnimationFrame);
  var isPaused = interval.isPaused;
  var Elements = Components2.Elements,
      _Components2$Elements4 = Components2.Elements,
      root = _Components2$Elements4.root,
      toggle = _Components2$Elements4.toggle;
  var autoplay = options.autoplay;
  var hovered;
  var focused;
  var stopped = autoplay === "pause";

  function mount() {
    if (autoplay) {
      listen();
      toggle && setAttribute(toggle, ARIA_CONTROLS, Elements.track.id);
      stopped || play();
      update();
    }
  }

  function listen() {
    if (options.pauseOnHover) {
      bind(root, "mouseenter mouseleave", function (e) {
        hovered = e.type === "mouseenter";
        autoToggle();
      });
    }

    if (options.pauseOnFocus) {
      bind(root, "focusin focusout", function (e) {
        focused = e.type === "focusin";
        autoToggle();
      });
    }

    if (toggle) {
      bind(toggle, "click", function () {
        stopped ? play() : pause(true);
      });
    }

    on([EVENT_MOVE, EVENT_SCROLL, EVENT_REFRESH], interval.rewind);
    on(EVENT_MOVE, onMove);
  }

  function play() {
    if (isPaused() && Components2.Slides.isEnough()) {
      interval.start(!options.resetProgress);
      focused = hovered = stopped = false;
      update();
      emit(EVENT_AUTOPLAY_PLAY);
    }
  }

  function pause(stop) {
    if (stop === void 0) {
      stop = true;
    }

    stopped = !!stop;
    update();

    if (!isPaused()) {
      interval.pause();
      emit(EVENT_AUTOPLAY_PAUSE);
    }
  }

  function autoToggle() {
    if (!stopped) {
      hovered || focused ? pause(false) : play();
    }
  }

  function update() {
    if (toggle) {
      toggleClass(toggle, CLASS_ACTIVE, !stopped);
      setAttribute(toggle, ARIA_LABEL, options.i18n[stopped ? "play" : "pause"]);
    }
  }

  function onAnimationFrame(rate) {
    var bar = Elements.bar;
    bar && style(bar, "width", rate * 100 + "%");
    emit(EVENT_AUTOPLAY_PLAYING, rate);
  }

  function onMove(index) {
    var Slide = Components2.Slides.getAt(index);
    interval.set(Slide && +getAttribute(Slide.slide, INTERVAL_DATA_ATTRIBUTE) || options.interval);
  }

  return {
    mount: mount,
    destroy: interval.cancel,
    play: play,
    pause: pause,
    isPaused: isPaused
  };
}

function Cover(Splide2, Components2, options) {
  var _EventInterface8 = EventInterface(Splide2),
      on = _EventInterface8.on;

  function mount() {
    if (options.cover) {
      on(EVENT_LAZYLOAD_LOADED, apply(toggle, true));
      on([EVENT_MOUNTED, EVENT_UPDATED, EVENT_REFRESH], apply(cover, true));
    }
  }

  function cover(cover2) {
    Components2.Slides.forEach(function (Slide) {
      var img = child(Slide.container || Slide.slide, "img");

      if (img && img.src) {
        toggle(cover2, img, Slide);
      }
    });
  }

  function toggle(cover2, img, Slide) {
    Slide.style("background", cover2 ? "center/cover no-repeat url(\"" + img.src + "\")" : "", true);
    display(img, cover2 ? "none" : "");
  }

  return {
    mount: mount,
    destroy: apply(cover, false)
  };
}

var BOUNCE_DIFF_THRESHOLD = 10;
var BOUNCE_DURATION = 600;
var FRICTION_FACTOR = 0.6;
var BASE_VELOCITY = 1.5;
var MIN_DURATION = 800;

function Scroll(Splide2, Components2, options) {
  var _EventInterface9 = EventInterface(Splide2),
      on = _EventInterface9.on,
      emit = _EventInterface9.emit;

  var set = Splide2.state.set;
  var Move = Components2.Move;
  var getPosition = Move.getPosition,
      getLimit = Move.getLimit,
      exceededLimit = Move.exceededLimit,
      translate = Move.translate;
  var interval;
  var callback;
  var friction = 1;

  function mount() {
    on(EVENT_MOVE, clear);
    on([EVENT_UPDATED, EVENT_REFRESH], cancel);
  }

  function scroll(destination, duration, snap, onScrolled, noConstrain) {
    var from = getPosition();
    clear();

    if (snap) {
      var size = Components2.Layout.sliderSize();
      var offset = sign(destination) * size * floor(abs(destination) / size) || 0;
      destination = Move.toPosition(Components2.Controller.toDest(destination % size)) + offset;
    }

    var noDistance = approximatelyEqual(from, destination, 1);
    friction = 1;
    duration = noDistance ? 0 : duration || max(abs(destination - from) / BASE_VELOCITY, MIN_DURATION);
    callback = onScrolled;
    interval = RequestInterval(duration, onEnd, apply(update, from, destination, noConstrain), 1);
    set(SCROLLING);
    emit(EVENT_SCROLL);
    interval.start();
  }

  function onEnd() {
    set(IDLE);
    callback && callback();
    emit(EVENT_SCROLLED);
  }

  function update(from, to, noConstrain, rate) {
    var position = getPosition();
    var target = from + (to - from) * easing(rate);
    var diff = (target - position) * friction;
    translate(position + diff);

    if (Splide2.is(SLIDE) && !noConstrain && exceededLimit()) {
      friction *= FRICTION_FACTOR;

      if (abs(diff) < BOUNCE_DIFF_THRESHOLD) {
        scroll(getLimit(exceededLimit(true)), BOUNCE_DURATION, false, callback, true);
      }
    }
  }

  function clear() {
    if (interval) {
      interval.cancel();
    }
  }

  function cancel() {
    if (interval && !interval.isPaused()) {
      clear();
      onEnd();
    }
  }

  function easing(t) {
    var easingFunc = options.easingFunc;
    return easingFunc ? easingFunc(t) : 1 - Math.pow(1 - t, 4);
  }

  return {
    mount: mount,
    destroy: clear,
    scroll: scroll,
    cancel: cancel
  };
}

var SCROLL_LISTENER_OPTIONS = {
  passive: false,
  capture: true
};

function Drag(Splide2, Components2, options) {
  var _EventInterface10 = EventInterface(Splide2),
      on = _EventInterface10.on,
      emit = _EventInterface10.emit,
      bind = _EventInterface10.bind,
      unbind = _EventInterface10.unbind;

  var state = Splide2.state;
  var Move = Components2.Move,
      Scroll = Components2.Scroll,
      Controller = Components2.Controller,
      track = Components2.Elements.track,
      reduce = Components2.Media.reduce;
  var _Components2$Directio2 = Components2.Direction,
      resolve = _Components2$Directio2.resolve,
      orient = _Components2$Directio2.orient;
  var getPosition = Move.getPosition,
      exceededLimit = Move.exceededLimit;
  var basePosition;
  var baseEvent;
  var prevBaseEvent;
  var isFree;
  var dragging;
  var exceeded = false;
  var clickPrevented;
  var disabled;
  var target;

  function mount() {
    bind(track, POINTER_MOVE_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
    bind(track, POINTER_UP_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
    bind(track, POINTER_DOWN_EVENTS, onPointerDown, SCROLL_LISTENER_OPTIONS);
    bind(track, "click", onClick, {
      capture: true
    });
    bind(track, "dragstart", prevent);
    on([EVENT_MOUNTED, EVENT_UPDATED], init);
  }

  function init() {
    var drag = options.drag;
    disable(!drag);
    isFree = drag === "free";
  }

  function onPointerDown(e) {
    clickPrevented = false;

    if (!disabled) {
      var isTouch = isTouchEvent(e);

      if (isDraggable(e.target) && (isTouch || !e.button)) {
        if (!Controller.isBusy()) {
          target = isTouch ? track : window;
          dragging = state.is([MOVING, SCROLLING]);
          prevBaseEvent = null;
          bind(target, POINTER_MOVE_EVENTS, onPointerMove, SCROLL_LISTENER_OPTIONS);
          bind(target, POINTER_UP_EVENTS, onPointerUp, SCROLL_LISTENER_OPTIONS);
          Move.cancel();
          Scroll.cancel();
          save(e);
        } else {
          prevent(e, true);
        }
      }
    }
  }

  function onPointerMove(e) {
    if (!state.is(DRAGGING)) {
      state.set(DRAGGING);
      emit(EVENT_DRAG);
    }

    if (e.cancelable) {
      if (dragging) {
        Move.translate(basePosition + constrain(diffCoord(e)));
        var expired = diffTime(e) > LOG_INTERVAL;
        var hasExceeded = exceeded !== (exceeded = exceededLimit());

        if (expired || hasExceeded) {
          save(e);
        }

        clickPrevented = true;
        emit(EVENT_DRAGGING);
        prevent(e);
      } else if (isSliderDirection(e)) {
        dragging = shouldStart(e);
        prevent(e);
      }
    }
  }

  function onPointerUp(e) {
    if (state.is(DRAGGING)) {
      state.set(IDLE);
      emit(EVENT_DRAGGED);
    }

    if (dragging) {
      move(e);
      prevent(e);
    }

    unbind(target, POINTER_MOVE_EVENTS, onPointerMove);
    unbind(target, POINTER_UP_EVENTS, onPointerUp);
    dragging = false;
  }

  function onClick(e) {
    if (!disabled && clickPrevented) {
      prevent(e, true);
    }
  }

  function save(e) {
    prevBaseEvent = baseEvent;
    baseEvent = e;
    basePosition = getPosition();
  }

  function move(e) {
    var velocity = computeVelocity(e);
    var destination = computeDestination(velocity);
    var rewind = options.rewind && options.rewindByDrag;
    reduce(false);

    if (isFree) {
      Controller.scroll(destination, 0, options.snap);
    } else if (Splide2.is(FADE)) {
      Controller.go(orient(sign(velocity)) < 0 ? rewind ? "<" : "-" : rewind ? ">" : "+");
    } else if (Splide2.is(SLIDE) && exceeded && rewind) {
      Controller.go(exceededLimit(true) ? ">" : "<");
    } else {
      Controller.go(Controller.toDest(destination), true);
    }

    reduce(true);
  }

  function shouldStart(e) {
    var thresholds = options.dragMinThreshold;
    var isObj = isObject(thresholds);
    var mouse = isObj && thresholds.mouse || 0;
    var touch = (isObj ? thresholds.touch : +thresholds) || 10;
    return abs(diffCoord(e)) > (isTouchEvent(e) ? touch : mouse);
  }

  function isSliderDirection(e) {
    return abs(diffCoord(e)) > abs(diffCoord(e, true));
  }

  function computeVelocity(e) {
    if (Splide2.is(LOOP) || !exceeded) {
      var time = diffTime(e);

      if (time && time < LOG_INTERVAL) {
        return diffCoord(e) / time;
      }
    }

    return 0;
  }

  function computeDestination(velocity) {
    return getPosition() + sign(velocity) * min(abs(velocity) * (options.flickPower || 600), isFree ? Infinity : Components2.Layout.listSize() * (options.flickMaxPages || 1));
  }

  function diffCoord(e, orthogonal) {
    return coordOf(e, orthogonal) - coordOf(getBaseEvent(e), orthogonal);
  }

  function diffTime(e) {
    return timeOf(e) - timeOf(getBaseEvent(e));
  }

  function getBaseEvent(e) {
    return baseEvent === e && prevBaseEvent || baseEvent;
  }

  function coordOf(e, orthogonal) {
    return (isTouchEvent(e) ? e.changedTouches[0] : e)["page" + resolve(orthogonal ? "Y" : "X")];
  }

  function constrain(diff) {
    return diff / (exceeded && Splide2.is(SLIDE) ? FRICTION : 1);
  }

  function isDraggable(target2) {
    var noDrag = options.noDrag;
    return !matches(target2, "." + CLASS_PAGINATION_PAGE + ", ." + CLASS_ARROW) && (!noDrag || !matches(target2, noDrag));
  }

  function isTouchEvent(e) {
    return typeof TouchEvent !== "undefined" && e instanceof TouchEvent;
  }

  function isDragging() {
    return dragging;
  }

  function disable(value) {
    disabled = value;
  }

  return {
    mount: mount,
    disable: disable,
    isDragging: isDragging
  };
}

var NORMALIZATION_MAP = {
  Spacebar: " ",
  Right: ARROW_RIGHT,
  Left: ARROW_LEFT,
  Up: ARROW_UP,
  Down: ARROW_DOWN
};

function normalizeKey(key) {
  key = isString(key) ? key : key.key;
  return NORMALIZATION_MAP[key] || key;
}

var KEYBOARD_EVENT = "keydown";

function Keyboard(Splide2, Components2, options) {
  var _EventInterface11 = EventInterface(Splide2),
      on = _EventInterface11.on,
      bind = _EventInterface11.bind,
      unbind = _EventInterface11.unbind;

  var root = Splide2.root;
  var resolve = Components2.Direction.resolve;
  var target;
  var disabled;

  function mount() {
    init();
    on(EVENT_UPDATED, destroy);
    on(EVENT_UPDATED, init);
    on(EVENT_MOVE, onMove);
  }

  function init() {
    var keyboard = options.keyboard;

    if (keyboard) {
      target = keyboard === "global" ? window : root;
      bind(target, KEYBOARD_EVENT, onKeydown);
    }
  }

  function destroy() {
    unbind(target, KEYBOARD_EVENT);
  }

  function disable(value) {
    disabled = value;
  }

  function onMove() {
    var _disabled = disabled;
    disabled = true;
    nextTick(function () {
      disabled = _disabled;
    });
  }

  function onKeydown(e) {
    if (!disabled) {
      var key = normalizeKey(e);

      if (key === resolve(ARROW_LEFT)) {
        Splide2.go("<");
      } else if (key === resolve(ARROW_RIGHT)) {
        Splide2.go(">");
      }
    }
  }

  return {
    mount: mount,
    destroy: destroy,
    disable: disable
  };
}

var SRC_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-lazy";
var SRCSET_DATA_ATTRIBUTE = SRC_DATA_ATTRIBUTE + "-srcset";
var IMAGE_SELECTOR = "[" + SRC_DATA_ATTRIBUTE + "], [" + SRCSET_DATA_ATTRIBUTE + "]";

function LazyLoad(Splide2, Components2, options) {
  var _EventInterface12 = EventInterface(Splide2),
      on = _EventInterface12.on,
      off = _EventInterface12.off,
      bind = _EventInterface12.bind,
      emit = _EventInterface12.emit;

  var isSequential = options.lazyLoad === "sequential";
  var events = [EVENT_MOUNTED, EVENT_REFRESH, EVENT_MOVED, EVENT_SCROLLED];
  var entries = [];

  function mount() {
    if (options.lazyLoad) {
      init();
      on(EVENT_REFRESH, init);
      isSequential || on(events, observe);
    }
  }

  function init() {
    empty(entries);
    Components2.Slides.forEach(function (Slide) {
      queryAll(Slide.slide, IMAGE_SELECTOR).forEach(function (img) {
        var src = getAttribute(img, SRC_DATA_ATTRIBUTE);
        var srcset = getAttribute(img, SRCSET_DATA_ATTRIBUTE);

        if (src !== img.src || srcset !== img.srcset) {
          var className = options.classes.spinner;
          var parent = img.parentElement;
          var spinner = child(parent, "." + className) || create("span", className, parent);
          entries.push([img, Slide, spinner]);
          img.src || display(img, "none");
        }
      });
    });
    isSequential && loadNext();
  }

  function observe() {
    entries = entries.filter(function (data) {
      var distance = options.perPage * ((options.preloadPages || 1) + 1) - 1;
      return data[1].isWithin(Splide2.index, distance) ? load(data) : true;
    });
    entries.length || off(events);
  }

  function load(data) {
    var img = data[0];
    addClass(data[1].slide, CLASS_LOADING);
    bind(img, "load error", apply(onLoad, data));
    setAttribute(img, "src", getAttribute(img, SRC_DATA_ATTRIBUTE));
    setAttribute(img, "srcset", getAttribute(img, SRCSET_DATA_ATTRIBUTE));
    removeAttribute(img, SRC_DATA_ATTRIBUTE);
    removeAttribute(img, SRCSET_DATA_ATTRIBUTE);
  }

  function onLoad(data, e) {
    var img = data[0],
        Slide = data[1];
    removeClass(Slide.slide, CLASS_LOADING);

    if (e.type !== "error") {
      remove(data[2]);
      display(img, "");
      emit(EVENT_LAZYLOAD_LOADED, img, Slide);
      emit(EVENT_RESIZE);
    }

    isSequential && loadNext();
  }

  function loadNext() {
    entries.length && load(entries.shift());
  }

  return {
    mount: mount,
    destroy: apply(empty, entries)
  };
}

function Pagination(Splide2, Components2, options) {
  var event = EventInterface(Splide2);
  var on = event.on,
      emit = event.emit,
      bind = event.bind;
  var Slides = Components2.Slides,
      Elements = Components2.Elements,
      Controller = Components2.Controller;
  var hasFocus = Controller.hasFocus,
      getIndex = Controller.getIndex,
      go = Controller.go;
  var resolve = Components2.Direction.resolve;
  var items = [];
  var list;
  var paginationClasses;

  function mount() {
    destroy();
    on([EVENT_UPDATED, EVENT_REFRESH], mount);

    if (options.pagination && Slides.isEnough()) {
      on([EVENT_MOVE, EVENT_SCROLL, EVENT_SCROLLED], update);
      createPagination();
      update();
      emit(EVENT_PAGINATION_MOUNTED, {
        list: list,
        items: items
      }, getAt(Splide2.index));
    }
  }

  function destroy() {
    if (list) {
      remove(Elements.pagination ? slice(list.children) : list);
      removeClass(list, paginationClasses);
      empty(items);
      list = null;
    }

    event.destroy();
  }

  function createPagination() {
    var length = Splide2.length;
    var classes = options.classes,
        i18n = options.i18n,
        perPage = options.perPage;
    var max = hasFocus() ? length : ceil(length / perPage);
    list = Elements.pagination || create("ul", classes.pagination, Elements.track.parentElement);
    addClass(list, paginationClasses = CLASS_PAGINATION + "--" + getDirection());
    setAttribute(list, ROLE, "tablist");
    setAttribute(list, ARIA_LABEL, i18n.select);
    setAttribute(list, ARIA_ORIENTATION, getDirection() === TTB ? "vertical" : "");

    for (var i = 0; i < max; i++) {
      var li = create("li", null, list);
      var button = create("button", {
        class: classes.page,
        type: "button"
      }, li);
      var controls = Slides.getIn(i).map(function (Slide) {
        return Slide.slide.id;
      });
      var text = !hasFocus() && perPage > 1 ? i18n.pageX : i18n.slideX;
      bind(button, "click", apply(onClick, i));

      if (options.paginationKeyboard) {
        bind(button, "keydown", apply(onKeydown, i));
      }

      setAttribute(li, ROLE, "presentation");
      setAttribute(button, ROLE, "tab");
      setAttribute(button, ARIA_CONTROLS, controls.join(" "));
      setAttribute(button, ARIA_LABEL, format(text, i + 1));
      setAttribute(button, TAB_INDEX, -1);
      items.push({
        li: li,
        button: button,
        page: i
      });
    }
  }

  function onClick(page) {
    go(">" + page, true);
  }

  function onKeydown(page, e) {
    var length = items.length;
    var key = normalizeKey(e);
    var dir = getDirection();
    var nextPage = -1;

    if (key === resolve(ARROW_RIGHT, false, dir)) {
      nextPage = ++page % length;
    } else if (key === resolve(ARROW_LEFT, false, dir)) {
      nextPage = (--page + length) % length;
    } else if (key === "Home") {
      nextPage = 0;
    } else if (key === "End") {
      nextPage = length - 1;
    }

    var item = items[nextPage];

    if (item) {
      focus(item.button);
      go(">" + nextPage);
      prevent(e, true);
    }
  }

  function getDirection() {
    return options.paginationDirection || options.direction;
  }

  function getAt(index) {
    return items[Controller.toPage(index)];
  }

  function update() {
    var prev = getAt(getIndex(true));
    var curr = getAt(getIndex());

    if (prev) {
      var button = prev.button;
      removeClass(button, CLASS_ACTIVE);
      removeAttribute(button, ARIA_SELECTED);
      setAttribute(button, TAB_INDEX, -1);
    }

    if (curr) {
      var _button = curr.button;
      addClass(_button, CLASS_ACTIVE);
      setAttribute(_button, ARIA_SELECTED, true);
      setAttribute(_button, TAB_INDEX, "");
    }

    emit(EVENT_PAGINATION_UPDATED, {
      list: list,
      items: items
    }, prev, curr);
  }

  return {
    items: items,
    mount: mount,
    destroy: destroy,
    getAt: getAt,
    update: update
  };
}

var TRIGGER_KEYS = [" ", "Enter"];

function Sync(Splide2, Components2, options) {
  var isNavigation = options.isNavigation,
      slideFocus = options.slideFocus;
  var events = [];

  function setup() {
    Splide2.options = {
      slideFocus: isUndefined(slideFocus) ? isNavigation : slideFocus
    };
  }

  function mount() {
    Splide2.splides.forEach(function (target) {
      if (!target.isParent) {
        sync(Splide2, target.splide);
        sync(target.splide, Splide2);
      }
    });

    if (isNavigation) {
      navigate();
    }
  }

  function destroy() {
    events.forEach(function (event) {
      event.destroy();
    });
    empty(events);
  }

  function remount() {
    destroy();
    mount();
  }

  function sync(splide, target) {
    var event = EventInterface(splide);
    event.on(EVENT_MOVE, function (index, prev, dest) {
      target.go(target.is(LOOP) ? dest : index);
    });
    events.push(event);
  }

  function navigate() {
    var event = EventInterface(Splide2);
    var on = event.on;
    on(EVENT_CLICK, onClick);
    on(EVENT_SLIDE_KEYDOWN, onKeydown);
    on([EVENT_MOUNTED, EVENT_UPDATED], update);
    events.push(event);
    event.emit(EVENT_NAVIGATION_MOUNTED, Splide2.splides);
  }

  function update() {
    setAttribute(Components2.Elements.list, ARIA_ORIENTATION, options.direction === TTB ? "vertical" : "");
  }

  function onClick(Slide) {
    Splide2.go(Slide.index);
  }

  function onKeydown(Slide, e) {
    if (includes(TRIGGER_KEYS, normalizeKey(e))) {
      onClick(Slide);
      prevent(e);
    }
  }

  return {
    setup: setup,
    mount: mount,
    destroy: destroy,
    remount: remount
  };
}

function Wheel(Splide2, Components2, options) {
  var _EventInterface13 = EventInterface(Splide2),
      bind = _EventInterface13.bind;

  var lastTime = 0;

  function mount() {
    if (options.wheel) {
      bind(Components2.Elements.track, "wheel", onWheel, SCROLL_LISTENER_OPTIONS);
    }
  }

  function onWheel(e) {
    if (e.cancelable) {
      var deltaY = e.deltaY;
      var backwards = deltaY < 0;
      var timeStamp = timeOf(e);

      var _min = options.wheelMinThreshold || 0;

      var sleep = options.wheelSleep || 0;

      if (abs(deltaY) > _min && timeStamp - lastTime > sleep) {
        Splide2.go(backwards ? "<" : ">");
        lastTime = timeStamp;
      }

      shouldPrevent(backwards) && prevent(e);
    }
  }

  function shouldPrevent(backwards) {
    return !options.releaseWheel || Splide2.state.is(MOVING) || Components2.Controller.getAdjacent(backwards) !== -1;
  }

  return {
    mount: mount
  };
}

var SR_REMOVAL_DELAY = 90;

function Live(Splide2, Components2, options) {
  var _EventInterface14 = EventInterface(Splide2),
      on = _EventInterface14.on;

  var track = Components2.Elements.track;
  var enabled = options.live && !options.isNavigation;
  var sr = create("span", CLASS_SR);
  var interval = RequestInterval(SR_REMOVAL_DELAY, apply(toggle, false));

  function mount() {
    if (enabled) {
      disable(!Components2.Autoplay.isPaused());
      setAttribute(track, ARIA_ATOMIC, true);
      sr.textContent = "\u2026";
      on(EVENT_AUTOPLAY_PLAY, apply(disable, true));
      on(EVENT_AUTOPLAY_PAUSE, apply(disable, false));
      on([EVENT_MOVED, EVENT_SCROLLED], apply(toggle, true));
    }
  }

  function toggle(active) {
    setAttribute(track, ARIA_BUSY, active);

    if (active) {
      append(track, sr);
      interval.start();
    } else {
      remove(sr);
    }
  }

  function destroy() {
    removeAttribute(track, [ARIA_LIVE, ARIA_ATOMIC, ARIA_BUSY]);
    remove(sr);
  }

  function disable(disabled) {
    if (enabled) {
      setAttribute(track, ARIA_LIVE, disabled ? "off" : "polite");
    }
  }

  return {
    mount: mount,
    disable: disable,
    destroy: destroy
  };
}

var ComponentConstructors = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Media: Media,
  Direction: Direction,
  Elements: Elements,
  Slides: Slides,
  Layout: Layout,
  Clones: Clones,
  Move: Move,
  Controller: Controller,
  Arrows: Arrows,
  Autoplay: Autoplay,
  Cover: Cover,
  Scroll: Scroll,
  Drag: Drag,
  Keyboard: Keyboard,
  LazyLoad: LazyLoad,
  Pagination: Pagination,
  Sync: Sync,
  Wheel: Wheel,
  Live: Live
});
var I18N = {
  prev: "Previous slide",
  next: "Next slide",
  first: "Go to first slide",
  last: "Go to last slide",
  slideX: "Go to slide %s",
  pageX: "Go to page %s",
  play: "Start autoplay",
  pause: "Pause autoplay",
  carousel: "carousel",
  slide: "slide",
  select: "Select a slide to show",
  slideLabel: "%s of %s"
};
var DEFAULTS = {
  type: "slide",
  role: "region",
  speed: 400,
  perPage: 1,
  cloneStatus: true,
  arrows: true,
  pagination: true,
  paginationKeyboard: true,
  interval: 5e3,
  pauseOnHover: true,
  pauseOnFocus: true,
  resetProgress: true,
  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
  drag: true,
  direction: "ltr",
  trimSpace: true,
  focusableNodes: "a, button, textarea, input, select, iframe",
  live: true,
  classes: CLASSES,
  i18n: I18N,
  reducedMotion: {
    speed: 0,
    rewindSpeed: 0,
    autoplay: "pause"
  }
};

function Fade(Splide2, Components2, options) {
  var _EventInterface15 = EventInterface(Splide2),
      on = _EventInterface15.on;

  function mount() {
    on([EVENT_MOUNTED, EVENT_REFRESH], function () {
      nextTick(function () {
        Components2.Slides.style("transition", "opacity " + options.speed + "ms " + options.easing);
      });
    });
  }

  function start(index, done) {
    var track = Components2.Elements.track;
    style(track, "height", unit(rect(track).height));
    nextTick(function () {
      done();
      style(track, "height", "");
    });
  }

  return {
    mount: mount,
    start: start,
    cancel: noop
  };
}

function Slide(Splide2, Components2, options) {
  var _EventInterface16 = EventInterface(Splide2),
      bind = _EventInterface16.bind;

  var Move = Components2.Move,
      Controller = Components2.Controller,
      Scroll = Components2.Scroll;
  var list = Components2.Elements.list;
  var transition = apply(style, list, "transition");
  var endCallback;

  function mount() {
    bind(list, "transitionend", function (e) {
      if (e.target === list && endCallback) {
        cancel();
        endCallback();
      }
    });
  }

  function start(index, done) {
    var destination = Move.toPosition(index, true);
    var position = Move.getPosition();
    var speed = getSpeed(index);

    if (abs(destination - position) >= 1 && speed >= 1) {
      if (options.useScroll) {
        Scroll.scroll(destination, speed, false, done);
      } else {
        transition("transform " + speed + "ms " + options.easing);
        Move.translate(destination, true);
        endCallback = done;
      }
    } else {
      Move.jump(index);
      done();
    }
  }

  function cancel() {
    transition("");
    Scroll.cancel();
  }

  function getSpeed(index) {
    var rewindSpeed = options.rewindSpeed;

    if (Splide2.is(SLIDE) && rewindSpeed) {
      var prev = Controller.getIndex(true);
      var end = Controller.getEnd();

      if (prev === 0 && index >= end || prev >= end && index === 0) {
        return rewindSpeed;
      }
    }

    return options.speed;
  }

  return {
    mount: mount,
    start: start,
    cancel: cancel
  };
}

var _Splide = /*#__PURE__*/function () {
  function _Splide(target, options) {
    this.event = EventInterface();
    this.Components = {};
    this.state = State(CREATED);
    this.splides = [];
    this._o = {};
    this._E = {};
    var root = isString(target) ? query(document, target) : target;
    assert(root, root + " is invalid.");
    this.root = root;
    options = merge({
      label: getAttribute(root, ARIA_LABEL) || "",
      labelledby: getAttribute(root, ARIA_LABELLEDBY) || ""
    }, DEFAULTS, _Splide.defaults, options || {});

    try {
      merge(options, JSON.parse(getAttribute(root, DATA_ATTRIBUTE)));
    } catch (e) {
      assert(false, "Invalid JSON");
    }

    this._o = Object.create(merge({}, options));
  }

  var _proto = _Splide.prototype;

  _proto.mount = function mount(Extensions, Transition) {
    var _this = this;

    var state = this.state,
        Components2 = this.Components;
    assert(state.is([CREATED, DESTROYED]), "Already mounted!");
    state.set(CREATED);
    this._C = Components2;
    this._T = Transition || this._T || (this.is(FADE) ? Fade : Slide);
    this._E = Extensions || this._E;
    var Constructors = assign({}, ComponentConstructors, this._E, {
      Transition: this._T
    });
    forOwn(Constructors, function (Component, key) {
      var component = Component(_this, Components2, _this._o);
      Components2[key] = component;
      component.setup && component.setup();
    });
    forOwn(Components2, function (component) {
      component.mount && component.mount();
    });
    this.emit(EVENT_MOUNTED);
    addClass(this.root, CLASS_INITIALIZED);
    state.set(IDLE);
    this.emit(EVENT_READY);
    return this;
  };

  _proto.sync = function sync(splide) {
    this.splides.push({
      splide: splide
    });
    splide.splides.push({
      splide: this,
      isParent: true
    });

    if (this.state.is(IDLE)) {
      this._C.Sync.remount();

      splide.Components.Sync.remount();
    }

    return this;
  };

  _proto.go = function go(control) {
    this._C.Controller.go(control);

    return this;
  };

  _proto.on = function on(events, callback) {
    this.event.on(events, callback);
    return this;
  };

  _proto.off = function off(events) {
    this.event.off(events);
    return this;
  };

  _proto.emit = function emit(event) {
    var _this$event;

    (_this$event = this.event).emit.apply(_this$event, [event].concat(slice(arguments, 1)));

    return this;
  };

  _proto.add = function add(slides, index) {
    this._C.Slides.add(slides, index);

    return this;
  };

  _proto.remove = function remove(matcher) {
    this._C.Slides.remove(matcher);

    return this;
  };

  _proto.is = function is(type) {
    return this._o.type === type;
  };

  _proto.refresh = function refresh() {
    this.emit(EVENT_REFRESH);
    return this;
  };

  _proto.destroy = function destroy(completely) {
    if (completely === void 0) {
      completely = true;
    }

    var event = this.event,
        state = this.state;

    if (state.is(CREATED)) {
      EventInterface(this).on(EVENT_READY, this.destroy.bind(this, completely));
    } else {
      forOwn(this._C, function (component) {
        component.destroy && component.destroy(completely);
      }, true);
      event.emit(EVENT_DESTROY);
      event.destroy();
      completely && empty(this.splides);
      state.set(DESTROYED);
    }

    return this;
  };

  _createClass(_Splide, [{
    key: "options",
    get: function get() {
      return this._o;
    },
    set: function set(options) {
      this._C.Media.set(options, true);
    }
  }, {
    key: "length",
    get: function get() {
      return this._C.Slides.getLength(true);
    }
  }, {
    key: "index",
    get: function get() {
      return this._C.Controller.getIndex();
    }
  }]);

  return _Splide;
}();

var Splide = _Splide;
Splide.defaults = {};
Splide.STATES = STATES;
var CLASS_RENDERED = "is-rendered";
var RENDERER_DEFAULT_CONFIG = {
  listTag: "ul",
  slideTag: "li"
};

var Style = /*#__PURE__*/function () {
  function Style(id, options) {
    this.styles = {};
    this.id = id;
    this.options = options;
  }

  var _proto2 = Style.prototype;

  _proto2.rule = function rule(selector, prop, value, breakpoint) {
    breakpoint = breakpoint || "default";
    var selectors = this.styles[breakpoint] = this.styles[breakpoint] || {};
    var styles = selectors[selector] = selectors[selector] || {};
    styles[prop] = value;
  };

  _proto2.build = function build() {
    var _this2 = this;

    var css = "";

    if (this.styles.default) {
      css += this.buildSelectors(this.styles.default);
    }

    Object.keys(this.styles).sort(function (n, m) {
      return _this2.options.mediaQuery === "min" ? +n - +m : +m - +n;
    }).forEach(function (breakpoint) {
      if (breakpoint !== "default") {
        css += "@media screen and (max-width: " + breakpoint + "px) {";
        css += _this2.buildSelectors(_this2.styles[breakpoint]);
        css += "}";
      }
    });
    return css;
  };

  _proto2.buildSelectors = function buildSelectors(selectors) {
    var _this3 = this;

    var css = "";
    forOwn(selectors, function (styles, selector) {
      selector = ("#" + _this3.id + " " + selector).trim();
      css += selector + " {";
      forOwn(styles, function (value, prop) {
        if (value || value === 0) {
          css += prop + ": " + value + ";";
        }
      });
      css += "}";
    });
    return css;
  };

  return Style;
}();

var SplideRenderer = /*#__PURE__*/function () {
  function SplideRenderer(contents, options, config, defaults) {
    this.slides = [];
    this.options = {};
    this.breakpoints = [];
    merge(DEFAULTS, defaults || {});
    merge(merge(this.options, DEFAULTS), options || {});
    this.contents = contents;
    this.config = assign({}, RENDERER_DEFAULT_CONFIG, config || {});
    this.id = this.config.id || uniqueId("splide");
    this.Style = new Style(this.id, this.options);
    this.Direction = Direction(null, null, this.options);
    assert(this.contents.length, "Provide at least 1 content.");
    this.init();
  }

  SplideRenderer.clean = function clean(splide) {
    var _EventInterface17 = EventInterface(splide),
        on = _EventInterface17.on;

    var root = splide.root;
    var clones = queryAll(root, "." + CLASS_CLONE);
    on(EVENT_MOUNTED, function () {
      remove(child(root, "style"));
    });
    remove(clones);
  };

  var _proto3 = SplideRenderer.prototype;

  _proto3.init = function init() {
    this.parseBreakpoints();
    this.initSlides();
    this.registerRootStyles();
    this.registerTrackStyles();
    this.registerSlideStyles();
    this.registerListStyles();
  };

  _proto3.initSlides = function initSlides() {
    var _this4 = this;

    push(this.slides, this.contents.map(function (content, index) {
      content = isString(content) ? {
        html: content
      } : content;
      content.styles = content.styles || {};
      content.attrs = content.attrs || {};

      _this4.cover(content);

      var classes = _this4.options.classes.slide + " " + (index === 0 ? CLASS_ACTIVE : "");
      assign(content.attrs, {
        class: (classes + " " + (content.attrs.class || "")).trim(),
        style: _this4.buildStyles(content.styles)
      });
      return content;
    }));

    if (this.isLoop()) {
      this.generateClones(this.slides);
    }
  };

  _proto3.registerRootStyles = function registerRootStyles() {
    var _this5 = this;

    this.breakpoints.forEach(function (_ref2) {
      var width = _ref2[0],
          options = _ref2[1];

      _this5.Style.rule(" ", "max-width", unit(options.width), width);
    });
  };

  _proto3.registerTrackStyles = function registerTrackStyles() {
    var _this6 = this;

    var Style2 = this.Style;
    var selector = "." + CLASS_TRACK;
    this.breakpoints.forEach(function (_ref3) {
      var width = _ref3[0],
          options = _ref3[1];
      Style2.rule(selector, _this6.resolve("paddingLeft"), _this6.cssPadding(options, false), width);
      Style2.rule(selector, _this6.resolve("paddingRight"), _this6.cssPadding(options, true), width);
      Style2.rule(selector, "height", _this6.cssTrackHeight(options), width);
    });
  };

  _proto3.registerListStyles = function registerListStyles() {
    var _this7 = this;

    var Style2 = this.Style;
    var selector = "." + CLASS_LIST;
    this.breakpoints.forEach(function (_ref4) {
      var width = _ref4[0],
          options = _ref4[1];
      Style2.rule(selector, "transform", _this7.buildTranslate(options), width);

      if (!_this7.cssSlideHeight(options)) {
        Style2.rule(selector, "aspect-ratio", _this7.cssAspectRatio(options), width);
      }
    });
  };

  _proto3.registerSlideStyles = function registerSlideStyles() {
    var _this8 = this;

    var Style2 = this.Style;
    var selector = "." + CLASS_SLIDE;
    this.breakpoints.forEach(function (_ref5) {
      var width = _ref5[0],
          options = _ref5[1];
      Style2.rule(selector, "width", _this8.cssSlideWidth(options), width);
      Style2.rule(selector, "height", _this8.cssSlideHeight(options) || "100%", width);
      Style2.rule(selector, _this8.resolve("marginRight"), unit(options.gap) || "0px", width);
      Style2.rule(selector + " > img", "display", options.cover ? "none" : "inline", width);
    });
  };

  _proto3.buildTranslate = function buildTranslate(options) {
    var _this$Direction = this.Direction,
        resolve = _this$Direction.resolve,
        orient = _this$Direction.orient;
    var values = [];
    values.push(this.cssOffsetClones(options));
    values.push(this.cssOffsetGaps(options));

    if (this.isCenter(options)) {
      values.push(this.buildCssValue(orient(-50), "%"));
      values.push.apply(values, this.cssOffsetCenter(options));
    }

    return values.filter(Boolean).map(function (value) {
      return "translate" + resolve("X") + "(" + value + ")";
    }).join(" ");
  };

  _proto3.cssOffsetClones = function cssOffsetClones(options) {
    var _this$Direction2 = this.Direction,
        resolve = _this$Direction2.resolve,
        orient = _this$Direction2.orient;
    var cloneCount = this.getCloneCount();

    if (this.isFixedWidth(options)) {
      var _this$parseCssValue = this.parseCssValue(options[resolve("fixedWidth")]),
          value = _this$parseCssValue.value,
          unit2 = _this$parseCssValue.unit;

      return this.buildCssValue(orient(value) * cloneCount, unit2);
    }

    var percent = 100 * cloneCount / options.perPage;
    return orient(percent) + "%";
  };

  _proto3.cssOffsetCenter = function cssOffsetCenter(options) {
    var _this$Direction3 = this.Direction,
        resolve = _this$Direction3.resolve,
        orient = _this$Direction3.orient;

    if (this.isFixedWidth(options)) {
      var _this$parseCssValue2 = this.parseCssValue(options[resolve("fixedWidth")]),
          value = _this$parseCssValue2.value,
          unit2 = _this$parseCssValue2.unit;

      return [this.buildCssValue(orient(value / 2), unit2)];
    }

    var values = [];
    var perPage = options.perPage,
        gap = options.gap;
    values.push(orient(50 / perPage) + "%");

    if (gap) {
      var _this$parseCssValue3 = this.parseCssValue(gap),
          _value = _this$parseCssValue3.value,
          _unit = _this$parseCssValue3.unit;

      var gapOffset = (_value / perPage - _value) / 2;
      values.push(this.buildCssValue(orient(gapOffset), _unit));
    }

    return values;
  };

  _proto3.cssOffsetGaps = function cssOffsetGaps(options) {
    var cloneCount = this.getCloneCount();

    if (cloneCount && options.gap) {
      var orient = this.Direction.orient;

      var _this$parseCssValue4 = this.parseCssValue(options.gap),
          value = _this$parseCssValue4.value,
          unit2 = _this$parseCssValue4.unit;

      if (this.isFixedWidth(options)) {
        return this.buildCssValue(orient(value * cloneCount), unit2);
      }

      var perPage = options.perPage;
      var gaps = cloneCount / perPage;
      return this.buildCssValue(orient(gaps * value), unit2);
    }

    return "";
  };

  _proto3.resolve = function resolve(prop) {
    return camelToKebab(this.Direction.resolve(prop));
  };

  _proto3.cssPadding = function cssPadding(options, right) {
    var padding = options.padding;
    var prop = this.Direction.resolve(right ? "right" : "left", true);
    return padding && unit(padding[prop] || (isObject(padding) ? 0 : padding)) || "0px";
  };

  _proto3.cssTrackHeight = function cssTrackHeight(options) {
    var height = "";

    if (this.isVertical()) {
      height = this.cssHeight(options);
      assert(height, '"height" is missing.');
      height = "calc(" + height + " - " + this.cssPadding(options, false) + " - " + this.cssPadding(options, true) + ")";
    }

    return height;
  };

  _proto3.cssHeight = function cssHeight(options) {
    return unit(options.height);
  };

  _proto3.cssSlideWidth = function cssSlideWidth(options) {
    return options.autoWidth ? "" : unit(options.fixedWidth) || (this.isVertical() ? "" : this.cssSlideSize(options));
  };

  _proto3.cssSlideHeight = function cssSlideHeight(options) {
    return unit(options.fixedHeight) || (this.isVertical() ? options.autoHeight ? "" : this.cssSlideSize(options) : this.cssHeight(options));
  };

  _proto3.cssSlideSize = function cssSlideSize(options) {
    var gap = unit(options.gap);
    return "calc((100%" + (gap && " + " + gap) + ")/" + (options.perPage || 1) + (gap && " - " + gap) + ")";
  };

  _proto3.cssAspectRatio = function cssAspectRatio(options) {
    var heightRatio = options.heightRatio;
    return heightRatio ? "" + 1 / heightRatio : "";
  };

  _proto3.buildCssValue = function buildCssValue(value, unit2) {
    return "" + value + unit2;
  };

  _proto3.parseCssValue = function parseCssValue(value) {
    if (isString(value)) {
      var number = parseFloat(value) || 0;
      var unit2 = value.replace(/\d*(\.\d*)?/, "") || "px";
      return {
        value: number,
        unit: unit2
      };
    }

    return {
      value: value,
      unit: "px"
    };
  };

  _proto3.parseBreakpoints = function parseBreakpoints() {
    var _this9 = this;

    var breakpoints = this.options.breakpoints;
    this.breakpoints.push(["default", this.options]);

    if (breakpoints) {
      forOwn(breakpoints, function (options, width) {
        _this9.breakpoints.push([width, merge(merge({}, _this9.options), options)]);
      });
    }
  };

  _proto3.isFixedWidth = function isFixedWidth(options) {
    return !!options[this.Direction.resolve("fixedWidth")];
  };

  _proto3.isLoop = function isLoop() {
    return this.options.type === LOOP;
  };

  _proto3.isCenter = function isCenter(options) {
    if (options.focus === "center") {
      if (this.isLoop()) {
        return true;
      }

      if (this.options.type === SLIDE) {
        return !this.options.trimSpace;
      }
    }

    return false;
  };

  _proto3.isVertical = function isVertical() {
    return this.options.direction === TTB;
  };

  _proto3.buildClasses = function buildClasses() {
    var options = this.options;
    return [CLASS_ROOT, CLASS_ROOT + "--" + options.type, CLASS_ROOT + "--" + options.direction, options.drag && CLASS_ROOT + "--draggable", options.isNavigation && CLASS_ROOT + "--nav", CLASS_ACTIVE, !this.config.hidden && CLASS_RENDERED].filter(Boolean).join(" ");
  };

  _proto3.buildAttrs = function buildAttrs(attrs) {
    var attr = "";
    forOwn(attrs, function (value, key) {
      attr += value ? " " + camelToKebab(key) + "=\"" + value + "\"" : "";
    });
    return attr.trim();
  };

  _proto3.buildStyles = function buildStyles(styles) {
    var style = "";
    forOwn(styles, function (value, key) {
      style += " " + camelToKebab(key) + ":" + value + ";";
    });
    return style.trim();
  };

  _proto3.renderSlides = function renderSlides() {
    var _this10 = this;

    var tag = this.config.slideTag;
    return this.slides.map(function (content) {
      return "<" + tag + " " + _this10.buildAttrs(content.attrs) + ">" + (content.html || "") + "</" + tag + ">";
    }).join("");
  };

  _proto3.cover = function cover(content) {
    var styles = content.styles,
        _content$html = content.html,
        html = _content$html === void 0 ? "" : _content$html;

    if (this.options.cover && !this.options.lazyLoad) {
      var src = html.match(/<img.*?src\s*=\s*(['"])(.+?)\1.*?>/);

      if (src && src[2]) {
        styles.background = "center/cover no-repeat url('" + src[2] + "')";
      }
    }
  };

  _proto3.generateClones = function generateClones(contents) {
    var classes = this.options.classes;
    var count = this.getCloneCount();
    var slides = contents.slice();

    while (slides.length < count) {
      push(slides, slides);
    }

    push(slides.slice(-count).reverse(), slides.slice(0, count)).forEach(function (content, index) {
      var attrs = assign({}, content.attrs, {
        class: content.attrs.class + " " + classes.clone
      });
      var clone = assign({}, content, {
        attrs: attrs
      });
      index < count ? contents.unshift(clone) : contents.push(clone);
    });
  };

  _proto3.getCloneCount = function getCloneCount() {
    if (this.isLoop()) {
      var options = this.options;

      if (options.clones) {
        return options.clones;
      }

      var perPage = max.apply(void 0, this.breakpoints.map(function (_ref6) {
        var options2 = _ref6[1];
        return options2.perPage;
      }));
      return perPage * ((options.flickMaxPages || 1) + 1);
    }

    return 0;
  };

  _proto3.renderArrows = function renderArrows() {
    var html = "";
    html += "<div class=\"" + this.options.classes.arrows + "\">";
    html += this.renderArrow(true);
    html += this.renderArrow(false);
    html += "</div>";
    return html;
  };

  _proto3.renderArrow = function renderArrow(prev) {
    var _this$options = this.options,
        classes = _this$options.classes,
        i18n = _this$options.i18n;
    var attrs = {
      class: classes.arrow + " " + (prev ? classes.prev : classes.next),
      type: "button",
      ariaLabel: prev ? i18n.prev : i18n.next
    };
    return "<button " + this.buildAttrs(attrs) + "><svg xmlns=\"" + XML_NAME_SPACE + "\" viewBox=\"0 0 " + SIZE + " " + SIZE + "\" width=\"" + SIZE + "\" height=\"" + SIZE + "\"><path d=\"" + (this.options.arrowPath || PATH) + "\" /></svg></button>";
  };

  _proto3.html = function html() {
    var _this$config = this.config,
        rootClass = _this$config.rootClass,
        listTag = _this$config.listTag,
        arrows = _this$config.arrows,
        beforeTrack = _this$config.beforeTrack,
        afterTrack = _this$config.afterTrack,
        slider = _this$config.slider,
        beforeSlider = _this$config.beforeSlider,
        afterSlider = _this$config.afterSlider;
    var html = "";
    html += "<div id=\"" + this.id + "\" class=\"" + this.buildClasses() + " " + (rootClass || "") + "\">";
    html += "<style>" + this.Style.build() + "</style>";

    if (slider) {
      html += beforeSlider || "";
      html += "<div class=\"splide__slider\">";
    }

    html += beforeTrack || "";

    if (arrows) {
      html += this.renderArrows();
    }

    html += "<div class=\"splide__track\">";
    html += "<" + listTag + " class=\"splide__list\">";
    html += this.renderSlides();
    html += "</" + listTag + ">";
    html += "</div>";
    html += afterTrack || "";

    if (slider) {
      html += "</div>";
      html += afterSlider || "";
    }

    html += "</div>";
    return html;
  };

  return SplideRenderer;
}();




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNwbGlkZWpzL3NwbGlkZS9kaXN0L2Nzcy90aGVtZXMvc3BsaWRlLWRlZmF1bHQubWluLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNwbGlkZWpzL3NwbGlkZS9kaXN0L2pzL3NwbGlkZS5lc20uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRTs7QUFFM1QsNkRBQTZELHNFQUFzRSw4REFBOEQsa0RBQWtELGtCQUFrQixFQUFFLG9CQUFvQjs7QUFFM1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLDhCQUE4QiwwQ0FBMEM7QUFDeEUsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RCxLQUFLLElBQUk7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsbUJBQW1CO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSywyQ0FBMkM7O0FBRWhEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxvQ0FBb0M7QUFDcEM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHFFQUFxRTtBQUNyRTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQSxPQUFPO0FBQ1AsZUFBZTtBQUNmLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLHNEQUFzRDtBQUN0RDtBQUNBLDJCQUEyQix1Q0FBdUM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBLE9BQU87QUFDUCwyQkFBMkI7QUFDM0I7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRWlsQyIsImZpbGUiOiJ2ZW5kb3JzfnNsaWRlcnN+c2xpZGVyc19hZHZlcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbi8qIVxuICogU3BsaWRlLmpzXG4gKiBWZXJzaW9uICA6IDQuMC42XG4gKiBMaWNlbnNlICA6IE1JVFxuICogQ29weXJpZ2h0OiAyMDIyIE5hb3Rvc2hpIEZ1aml0YVxuICovXG52YXIgTUVESUFfUFJFRkVSU19SRURVQ0VEX01PVElPTiA9IFwiKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSlcIjtcbnZhciBDUkVBVEVEID0gMTtcbnZhciBNT1VOVEVEID0gMjtcbnZhciBJRExFID0gMztcbnZhciBNT1ZJTkcgPSA0O1xudmFyIFNDUk9MTElORyA9IDU7XG52YXIgRFJBR0dJTkcgPSA2O1xudmFyIERFU1RST1lFRCA9IDc7XG52YXIgU1RBVEVTID0ge1xuICBDUkVBVEVEOiBDUkVBVEVELFxuICBNT1VOVEVEOiBNT1VOVEVELFxuICBJRExFOiBJRExFLFxuICBNT1ZJTkc6IE1PVklORyxcbiAgU0NST0xMSU5HOiBTQ1JPTExJTkcsXG4gIERSQUdHSU5HOiBEUkFHR0lORyxcbiAgREVTVFJPWUVEOiBERVNUUk9ZRURcbn07XG5cbmZ1bmN0aW9uIGVtcHR5KGFycmF5KSB7XG4gIGFycmF5Lmxlbmd0aCA9IDA7XG59XG5cbmZ1bmN0aW9uIHNsaWNlKGFycmF5TGlrZSwgc3RhcnQsIGVuZCkge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyYXlMaWtlLCBzdGFydCwgZW5kKTtcbn1cblxuZnVuY3Rpb24gYXBwbHkoZnVuYykge1xuICByZXR1cm4gZnVuYy5iaW5kLmFwcGx5KGZ1bmMsIFtudWxsXS5jb25jYXQoc2xpY2UoYXJndW1lbnRzLCAxKSkpO1xufVxuXG52YXIgbmV4dFRpY2sgPSBzZXRUaW1lb3V0O1xuXG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxuZnVuY3Rpb24gcmFmKGZ1bmMpIHtcbiAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKHR5cGUsIHN1YmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBzdWJqZWN0ID09PSB0eXBlO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdChzdWJqZWN0KSB7XG4gIHJldHVybiAhaXNOdWxsKHN1YmplY3QpICYmIHR5cGVPZihcIm9iamVjdFwiLCBzdWJqZWN0KTtcbn1cblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xudmFyIGlzRnVuY3Rpb24gPSBhcHBseSh0eXBlT2YsIFwiZnVuY3Rpb25cIik7XG52YXIgaXNTdHJpbmcgPSBhcHBseSh0eXBlT2YsIFwic3RyaW5nXCIpO1xudmFyIGlzVW5kZWZpbmVkID0gYXBwbHkodHlwZU9mLCBcInVuZGVmaW5lZFwiKTtcblxuZnVuY3Rpb24gaXNOdWxsKHN1YmplY3QpIHtcbiAgcmV0dXJuIHN1YmplY3QgPT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzSFRNTEVsZW1lbnQoc3ViamVjdCkge1xuICByZXR1cm4gc3ViamVjdCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xufVxuXG5mdW5jdGlvbiB0b0FycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXTtcbn1cblxuZnVuY3Rpb24gZm9yRWFjaCh2YWx1ZXMsIGl0ZXJhdGVlKSB7XG4gIHRvQXJyYXkodmFsdWVzKS5mb3JFYWNoKGl0ZXJhdGVlKTtcbn1cblxuZnVuY3Rpb24gaW5jbHVkZXMoYXJyYXksIHZhbHVlKSB7XG4gIHJldHVybiBhcnJheS5pbmRleE9mKHZhbHVlKSA+IC0xO1xufVxuXG5mdW5jdGlvbiBwdXNoKGFycmF5LCBpdGVtcykge1xuICBhcnJheS5wdXNoLmFwcGx5KGFycmF5LCB0b0FycmF5KGl0ZW1zKSk7XG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoZWxtLCBjbGFzc2VzLCBhZGQpIHtcbiAgaWYgKGVsbSkge1xuICAgIGZvckVhY2goY2xhc3NlcywgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIGVsbS5jbGFzc0xpc3RbYWRkID8gXCJhZGRcIiA6IFwicmVtb3ZlXCJdKG5hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGVsbSwgY2xhc3Nlcykge1xuICB0b2dnbGVDbGFzcyhlbG0sIGlzU3RyaW5nKGNsYXNzZXMpID8gY2xhc3Nlcy5zcGxpdChcIiBcIikgOiBjbGFzc2VzLCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kKHBhcmVudCwgY2hpbGRyZW4pIHtcbiAgZm9yRWFjaChjaGlsZHJlbiwgcGFyZW50LmFwcGVuZENoaWxkLmJpbmQocGFyZW50KSk7XG59XG5cbmZ1bmN0aW9uIGJlZm9yZShub2RlcywgcmVmKSB7XG4gIGZvckVhY2gobm9kZXMsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgdmFyIHBhcmVudCA9IChyZWYgfHwgbm9kZSkucGFyZW50Tm9kZTtcblxuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUobm9kZSwgcmVmKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtYXRjaGVzKGVsbSwgc2VsZWN0b3IpIHtcbiAgcmV0dXJuIGlzSFRNTEVsZW1lbnQoZWxtKSAmJiAoZWxtW1wibXNNYXRjaGVzU2VsZWN0b3JcIl0gfHwgZWxtLm1hdGNoZXMpLmNhbGwoZWxtLCBzZWxlY3Rvcik7XG59XG5cbmZ1bmN0aW9uIGNoaWxkcmVuKHBhcmVudCwgc2VsZWN0b3IpIHtcbiAgdmFyIGNoaWxkcmVuMiA9IHBhcmVudCA/IHNsaWNlKHBhcmVudC5jaGlsZHJlbikgOiBbXTtcbiAgcmV0dXJuIHNlbGVjdG9yID8gY2hpbGRyZW4yLmZpbHRlcihmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gbWF0Y2hlcyhjaGlsZCwgc2VsZWN0b3IpO1xuICB9KSA6IGNoaWxkcmVuMjtcbn1cblxuZnVuY3Rpb24gY2hpbGQocGFyZW50LCBzZWxlY3Rvcikge1xuICByZXR1cm4gc2VsZWN0b3IgPyBjaGlsZHJlbihwYXJlbnQsIHNlbGVjdG9yKVswXSA6IHBhcmVudC5maXJzdEVsZW1lbnRDaGlsZDtcbn1cblxudmFyIG93bktleXMgPSBPYmplY3Qua2V5cztcblxuZnVuY3Rpb24gZm9yT3duKG9iamVjdCwgaXRlcmF0ZWUsIHJpZ2h0KSB7XG4gIGlmIChvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IG93bktleXMob2JqZWN0KTtcbiAgICBrZXlzID0gcmlnaHQgPyBrZXlzLnJldmVyc2UoKSA6IGtleXM7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSBcIl9fcHJvdG9fX1wiKSB7XG4gICAgICAgIGlmIChpdGVyYXRlZShvYmplY3Rba2V5XSwga2V5KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbihvYmplY3QpIHtcbiAgc2xpY2UoYXJndW1lbnRzLCAxKS5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICBmb3JPd24oc291cmNlLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgb2JqZWN0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbmZ1bmN0aW9uIG1lcmdlKG9iamVjdCkge1xuICBzbGljZShhcmd1bWVudHMsIDEpLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgIGZvck93bihzb3VyY2UsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgb2JqZWN0W2tleV0gPSB2YWx1ZS5zbGljZSgpO1xuICAgICAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgb2JqZWN0W2tleV0gPSBtZXJnZSh7fSwgaXNPYmplY3Qob2JqZWN0W2tleV0pID8gb2JqZWN0W2tleV0gOiB7fSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbmZ1bmN0aW9uIG9taXQob2JqZWN0LCBrZXlzKSB7XG4gIHRvQXJyYXkoa2V5cyB8fCBvd25LZXlzKG9iamVjdCkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGRlbGV0ZSBvYmplY3Rba2V5XTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUF0dHJpYnV0ZShlbG1zLCBhdHRycykge1xuICBmb3JFYWNoKGVsbXMsIGZ1bmN0aW9uIChlbG0pIHtcbiAgICBmb3JFYWNoKGF0dHJzLCBmdW5jdGlvbiAoYXR0cikge1xuICAgICAgZWxtICYmIGVsbS5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGUoZWxtcywgYXR0cnMsIHZhbHVlKSB7XG4gIGlmIChpc09iamVjdChhdHRycykpIHtcbiAgICBmb3JPd24oYXR0cnMsIGZ1bmN0aW9uICh2YWx1ZTIsIG5hbWUpIHtcbiAgICAgIHNldEF0dHJpYnV0ZShlbG1zLCBuYW1lLCB2YWx1ZTIpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGZvckVhY2goZWxtcywgZnVuY3Rpb24gKGVsbSkge1xuICAgICAgaXNOdWxsKHZhbHVlKSB8fCB2YWx1ZSA9PT0gXCJcIiA/IHJlbW92ZUF0dHJpYnV0ZShlbG0sIGF0dHJzKSA6IGVsbS5zZXRBdHRyaWJ1dGUoYXR0cnMsIFN0cmluZyh2YWx1ZSkpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZSh0YWcsIGF0dHJzLCBwYXJlbnQpIHtcbiAgdmFyIGVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcblxuICBpZiAoYXR0cnMpIHtcbiAgICBpc1N0cmluZyhhdHRycykgPyBhZGRDbGFzcyhlbG0sIGF0dHJzKSA6IHNldEF0dHJpYnV0ZShlbG0sIGF0dHJzKTtcbiAgfVxuXG4gIHBhcmVudCAmJiBhcHBlbmQocGFyZW50LCBlbG0pO1xuICByZXR1cm4gZWxtO1xufVxuXG5mdW5jdGlvbiBzdHlsZShlbG0sIHByb3AsIHZhbHVlKSB7XG4gIGlmIChpc1VuZGVmaW5lZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZShlbG0pW3Byb3BdO1xuICB9XG5cbiAgaWYgKCFpc051bGwodmFsdWUpKSB7XG4gICAgZWxtLnN0eWxlW3Byb3BdID0gXCJcIiArIHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXkoZWxtLCBkaXNwbGF5Mikge1xuICBzdHlsZShlbG0sIFwiZGlzcGxheVwiLCBkaXNwbGF5Mik7XG59XG5cbmZ1bmN0aW9uIGZvY3VzKGVsbSkge1xuICBlbG1bXCJzZXRBY3RpdmVcIl0gJiYgZWxtW1wic2V0QWN0aXZlXCJdKCkgfHwgZWxtLmZvY3VzKHtcbiAgICBwcmV2ZW50U2Nyb2xsOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGUoZWxtLCBhdHRyKSB7XG4gIHJldHVybiBlbG0uZ2V0QXR0cmlidXRlKGF0dHIpO1xufVxuXG5mdW5jdGlvbiBoYXNDbGFzcyhlbG0sIGNsYXNzTmFtZSkge1xuICByZXR1cm4gZWxtICYmIGVsbS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gcmVjdCh0YXJnZXQpIHtcbiAgcmV0dXJuIHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlKG5vZGVzKSB7XG4gIGZvckVhY2gobm9kZXMsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgaWYgKG5vZGUgJiYgbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcGFyc2VIdG1sKGh0bWwpIHtcbiAgcmV0dXJuIGNoaWxkKG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoaHRtbCwgXCJ0ZXh0L2h0bWxcIikuYm9keSk7XG59XG5cbmZ1bmN0aW9uIHByZXZlbnQoZSwgc3RvcFByb3BhZ2F0aW9uKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICBpZiAoc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5KHBhcmVudCwgc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHBhcmVudCAmJiBwYXJlbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5QWxsKHBhcmVudCwgc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHNlbGVjdG9yID8gc2xpY2UocGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKSA6IFtdO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhlbG0sIGNsYXNzZXMpIHtcbiAgdG9nZ2xlQ2xhc3MoZWxtLCBjbGFzc2VzLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHRpbWVPZihlKSB7XG4gIHJldHVybiBlLnRpbWVTdGFtcDtcbn1cblxuZnVuY3Rpb24gdW5pdCh2YWx1ZSkge1xuICByZXR1cm4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUgOiB2YWx1ZSA/IHZhbHVlICsgXCJweFwiIDogXCJcIjtcbn1cblxudmFyIFBST0pFQ1RfQ09ERSA9IFwic3BsaWRlXCI7XG52YXIgREFUQV9BVFRSSUJVVEUgPSBcImRhdGEtXCIgKyBQUk9KRUNUX0NPREU7XG5cbmZ1bmN0aW9uIGFzc2VydChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJbXCIgKyBQUk9KRUNUX0NPREUgKyBcIl0gXCIgKyAobWVzc2FnZSB8fCBcIlwiKSk7XG4gIH1cbn1cblxudmFyIG1pbiA9IE1hdGgubWluLFxuICAgIG1heCA9IE1hdGgubWF4LFxuICAgIGZsb29yID0gTWF0aC5mbG9vcixcbiAgICBjZWlsID0gTWF0aC5jZWlsLFxuICAgIGFicyA9IE1hdGguYWJzO1xuXG5mdW5jdGlvbiBhcHByb3hpbWF0ZWx5RXF1YWwoeCwgeSwgZXBzaWxvbikge1xuICByZXR1cm4gYWJzKHggLSB5KSA8IGVwc2lsb247XG59XG5cbmZ1bmN0aW9uIGJldHdlZW4obnVtYmVyLCBtaW5Pck1heCwgbWF4T3JNaW4sIGV4Y2x1c2l2ZSkge1xuICB2YXIgbWluaW11bSA9IG1pbihtaW5Pck1heCwgbWF4T3JNaW4pO1xuICB2YXIgbWF4aW11bSA9IG1heChtaW5Pck1heCwgbWF4T3JNaW4pO1xuICByZXR1cm4gZXhjbHVzaXZlID8gbWluaW11bSA8IG51bWJlciAmJiBudW1iZXIgPCBtYXhpbXVtIDogbWluaW11bSA8PSBudW1iZXIgJiYgbnVtYmVyIDw9IG1heGltdW07XG59XG5cbmZ1bmN0aW9uIGNsYW1wKG51bWJlciwgeCwgeSkge1xuICB2YXIgbWluaW11bSA9IG1pbih4LCB5KTtcbiAgdmFyIG1heGltdW0gPSBtYXgoeCwgeSk7XG4gIHJldHVybiBtaW4obWF4KG1pbmltdW0sIG51bWJlciksIG1heGltdW0pO1xufVxuXG5mdW5jdGlvbiBzaWduKHgpIHtcbiAgcmV0dXJuICsoeCA+IDApIC0gKyh4IDwgMCk7XG59XG5cbmZ1bmN0aW9uIGNhbWVsVG9LZWJhYihzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC8oW2EtejAtOV0pKFtBLVpdKS9nLCBcIiQxLSQyXCIpLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdChzdHJpbmcsIHJlcGxhY2VtZW50cykge1xuICBmb3JFYWNoKHJlcGxhY2VtZW50cywgZnVuY3Rpb24gKHJlcGxhY2VtZW50KSB7XG4gICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoXCIlc1wiLCBcIlwiICsgcmVwbGFjZW1lbnQpO1xuICB9KTtcbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gcGFkKG51bWJlcikge1xuICByZXR1cm4gbnVtYmVyIDwgMTAgPyBcIjBcIiArIG51bWJlciA6IFwiXCIgKyBudW1iZXI7XG59XG5cbnZhciBpZHMgPSB7fTtcblxuZnVuY3Rpb24gdW5pcXVlSWQocHJlZml4KSB7XG4gIHJldHVybiBcIlwiICsgcHJlZml4ICsgcGFkKGlkc1twcmVmaXhdID0gKGlkc1twcmVmaXhdIHx8IDApICsgMSk7XG59XG5cbmZ1bmN0aW9uIEV2ZW50QmluZGVyKCkge1xuICB2YXIgbGlzdGVuZXJzID0gW107XG5cbiAgZnVuY3Rpb24gYmluZCh0YXJnZXRzLCBldmVudHMsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgZm9yRWFjaEV2ZW50KHRhcmdldHMsIGV2ZW50cywgZnVuY3Rpb24gKHRhcmdldCwgZXZlbnQsIG5hbWVzcGFjZSkge1xuICAgICAgdmFyIGlzRXZlbnRUYXJnZXQgPSAoXCJhZGRFdmVudExpc3RlbmVyXCIgaW4gdGFyZ2V0KTtcbiAgICAgIHZhciByZW1vdmVyID0gaXNFdmVudFRhcmdldCA/IHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyLmJpbmQodGFyZ2V0LCBldmVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIDogdGFyZ2V0W1wicmVtb3ZlTGlzdGVuZXJcIl0uYmluZCh0YXJnZXQsIGNhbGxiYWNrKTtcbiAgICAgIGlzRXZlbnRUYXJnZXQgPyB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIDogdGFyZ2V0W1wiYWRkTGlzdGVuZXJcIl0oY2FsbGJhY2spO1xuICAgICAgbGlzdGVuZXJzLnB1c2goW3RhcmdldCwgZXZlbnQsIG5hbWVzcGFjZSwgY2FsbGJhY2ssIHJlbW92ZXJdKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVuYmluZCh0YXJnZXRzLCBldmVudHMsIGNhbGxiYWNrKSB7XG4gICAgZm9yRWFjaEV2ZW50KHRhcmdldHMsIGV2ZW50cywgZnVuY3Rpb24gKHRhcmdldCwgZXZlbnQsIG5hbWVzcGFjZSkge1xuICAgICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKGxpc3RlbmVyWzBdID09PSB0YXJnZXQgJiYgbGlzdGVuZXJbMV0gPT09IGV2ZW50ICYmIGxpc3RlbmVyWzJdID09PSBuYW1lc3BhY2UgJiYgKCFjYWxsYmFjayB8fCBsaXN0ZW5lclszXSA9PT0gY2FsbGJhY2spKSB7XG4gICAgICAgICAgbGlzdGVuZXJbNF0oKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGF0Y2godGFyZ2V0LCB0eXBlLCBkZXRhaWwpIHtcbiAgICB2YXIgZTtcbiAgICB2YXIgYnViYmxlcyA9IHRydWU7XG5cbiAgICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGUgPSBuZXcgQ3VzdG9tRXZlbnQodHlwZSwge1xuICAgICAgICBidWJibGVzOiBidWJibGVzLFxuICAgICAgICBkZXRhaWw6IGRldGFpbFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO1xuICAgICAgZS5pbml0Q3VzdG9tRXZlbnQodHlwZSwgYnViYmxlcywgZmFsc2UsIGRldGFpbCk7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmRpc3BhdGNoRXZlbnQoZSk7XG4gICAgcmV0dXJuIGU7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JFYWNoRXZlbnQodGFyZ2V0cywgZXZlbnRzLCBpdGVyYXRlZSkge1xuICAgIGZvckVhY2godGFyZ2V0cywgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgdGFyZ2V0ICYmIGZvckVhY2goZXZlbnRzLCBmdW5jdGlvbiAoZXZlbnRzMikge1xuICAgICAgICBldmVudHMyLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5TKSB7XG4gICAgICAgICAgdmFyIGZyYWdtZW50ID0gZXZlbnROUy5zcGxpdChcIi5cIik7XG4gICAgICAgICAgaXRlcmF0ZWUodGFyZ2V0LCBmcmFnbWVudFswXSwgZnJhZ21lbnRbMV0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgZGF0YVs0XSgpO1xuICAgIH0pO1xuICAgIGVtcHR5KGxpc3RlbmVycyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGJpbmQ6IGJpbmQsXG4gICAgdW5iaW5kOiB1bmJpbmQsXG4gICAgZGlzcGF0Y2g6IGRpc3BhdGNoLFxuICAgIGRlc3Ryb3k6IGRlc3Ryb3lcbiAgfTtcbn1cblxudmFyIEVWRU5UX01PVU5URUQgPSBcIm1vdW50ZWRcIjtcbnZhciBFVkVOVF9SRUFEWSA9IFwicmVhZHlcIjtcbnZhciBFVkVOVF9NT1ZFID0gXCJtb3ZlXCI7XG52YXIgRVZFTlRfTU9WRUQgPSBcIm1vdmVkXCI7XG52YXIgRVZFTlRfU0hJRlRFRCA9IFwic2hpZnRlZFwiO1xudmFyIEVWRU5UX0NMSUNLID0gXCJjbGlja1wiO1xudmFyIEVWRU5UX0FDVElWRSA9IFwiYWN0aXZlXCI7XG52YXIgRVZFTlRfSU5BQ1RJVkUgPSBcImluYWN0aXZlXCI7XG52YXIgRVZFTlRfVklTSUJMRSA9IFwidmlzaWJsZVwiO1xudmFyIEVWRU5UX0hJRERFTiA9IFwiaGlkZGVuXCI7XG52YXIgRVZFTlRfU0xJREVfS0VZRE9XTiA9IFwic2xpZGU6a2V5ZG93blwiO1xudmFyIEVWRU5UX1JFRlJFU0ggPSBcInJlZnJlc2hcIjtcbnZhciBFVkVOVF9VUERBVEVEID0gXCJ1cGRhdGVkXCI7XG52YXIgRVZFTlRfUkVTSVpFID0gXCJyZXNpemVcIjtcbnZhciBFVkVOVF9SRVNJWkVEID0gXCJyZXNpemVkXCI7XG52YXIgRVZFTlRfRFJBRyA9IFwiZHJhZ1wiO1xudmFyIEVWRU5UX0RSQUdHSU5HID0gXCJkcmFnZ2luZ1wiO1xudmFyIEVWRU5UX0RSQUdHRUQgPSBcImRyYWdnZWRcIjtcbnZhciBFVkVOVF9TQ1JPTEwgPSBcInNjcm9sbFwiO1xudmFyIEVWRU5UX1NDUk9MTEVEID0gXCJzY3JvbGxlZFwiO1xudmFyIEVWRU5UX0RFU1RST1kgPSBcImRlc3Ryb3lcIjtcbnZhciBFVkVOVF9BUlJPV1NfTU9VTlRFRCA9IFwiYXJyb3dzOm1vdW50ZWRcIjtcbnZhciBFVkVOVF9BUlJPV1NfVVBEQVRFRCA9IFwiYXJyb3dzOnVwZGF0ZWRcIjtcbnZhciBFVkVOVF9QQUdJTkFUSU9OX01PVU5URUQgPSBcInBhZ2luYXRpb246bW91bnRlZFwiO1xudmFyIEVWRU5UX1BBR0lOQVRJT05fVVBEQVRFRCA9IFwicGFnaW5hdGlvbjp1cGRhdGVkXCI7XG52YXIgRVZFTlRfTkFWSUdBVElPTl9NT1VOVEVEID0gXCJuYXZpZ2F0aW9uOm1vdW50ZWRcIjtcbnZhciBFVkVOVF9BVVRPUExBWV9QTEFZID0gXCJhdXRvcGxheTpwbGF5XCI7XG52YXIgRVZFTlRfQVVUT1BMQVlfUExBWUlORyA9IFwiYXV0b3BsYXk6cGxheWluZ1wiO1xudmFyIEVWRU5UX0FVVE9QTEFZX1BBVVNFID0gXCJhdXRvcGxheTpwYXVzZVwiO1xudmFyIEVWRU5UX0xBWllMT0FEX0xPQURFRCA9IFwibGF6eWxvYWQ6bG9hZGVkXCI7XG5cbmZ1bmN0aW9uIEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpIHtcbiAgdmFyIGJ1cyA9IFNwbGlkZTIgPyBTcGxpZGUyLmV2ZW50LmJ1cyA6IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgdmFyIGJpbmRlciA9IEV2ZW50QmluZGVyKCk7XG5cbiAgZnVuY3Rpb24gb24oZXZlbnRzLCBjYWxsYmFjaykge1xuICAgIGJpbmRlci5iaW5kKGJ1cywgdG9BcnJheShldmVudHMpLmpvaW4oXCIgXCIpLCBmdW5jdGlvbiAoZSkge1xuICAgICAgY2FsbGJhY2suYXBwbHkoY2FsbGJhY2ssIGlzQXJyYXkoZS5kZXRhaWwpID8gZS5kZXRhaWwgOiBbXSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBlbWl0KGV2ZW50KSB7XG4gICAgYmluZGVyLmRpc3BhdGNoKGJ1cywgZXZlbnQsIHNsaWNlKGFyZ3VtZW50cywgMSkpO1xuICB9XG5cbiAgaWYgKFNwbGlkZTIpIHtcbiAgICBTcGxpZGUyLmV2ZW50Lm9uKEVWRU5UX0RFU1RST1ksIGJpbmRlci5kZXN0cm95KTtcbiAgfVxuXG4gIHJldHVybiBhc3NpZ24oYmluZGVyLCB7XG4gICAgYnVzOiBidXMsXG4gICAgb246IG9uLFxuICAgIG9mZjogYXBwbHkoYmluZGVyLnVuYmluZCwgYnVzKSxcbiAgICBlbWl0OiBlbWl0XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBSZXF1ZXN0SW50ZXJ2YWwoaW50ZXJ2YWwsIG9uSW50ZXJ2YWwsIG9uVXBkYXRlLCBsaW1pdCkge1xuICB2YXIgbm93ID0gRGF0ZS5ub3c7XG4gIHZhciBzdGFydFRpbWU7XG4gIHZhciByYXRlID0gMDtcbiAgdmFyIGlkO1xuICB2YXIgcGF1c2VkID0gdHJ1ZTtcbiAgdmFyIGNvdW50ID0gMDtcblxuICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgaWYgKCFwYXVzZWQpIHtcbiAgICAgIHJhdGUgPSBpbnRlcnZhbCA/IG1pbigobm93KCkgLSBzdGFydFRpbWUpIC8gaW50ZXJ2YWwsIDEpIDogMTtcbiAgICAgIG9uVXBkYXRlICYmIG9uVXBkYXRlKHJhdGUpO1xuXG4gICAgICBpZiAocmF0ZSA+PSAxKSB7XG4gICAgICAgIG9uSW50ZXJ2YWwoKTtcbiAgICAgICAgc3RhcnRUaW1lID0gbm93KCk7XG5cbiAgICAgICAgaWYgKGxpbWl0ICYmICsrY291bnQgPj0gbGltaXQpIHtcbiAgICAgICAgICByZXR1cm4gcGF1c2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByYWYodXBkYXRlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydChyZXN1bWUpIHtcbiAgICAhcmVzdW1lICYmIGNhbmNlbCgpO1xuICAgIHN0YXJ0VGltZSA9IG5vdygpIC0gKHJlc3VtZSA/IHJhdGUgKiBpbnRlcnZhbCA6IDApO1xuICAgIHBhdXNlZCA9IGZhbHNlO1xuICAgIHJhZih1cGRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgcGF1c2VkID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJld2luZCgpIHtcbiAgICBzdGFydFRpbWUgPSBub3coKTtcbiAgICByYXRlID0gMDtcblxuICAgIGlmIChvblVwZGF0ZSkge1xuICAgICAgb25VcGRhdGUocmF0ZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlkICYmIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGlkKTtcbiAgICByYXRlID0gMDtcbiAgICBpZCA9IDA7XG4gICAgcGF1c2VkID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldCh0aW1lKSB7XG4gICAgaW50ZXJ2YWwgPSB0aW1lO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNQYXVzZWQoKSB7XG4gICAgcmV0dXJuIHBhdXNlZDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc3RhcnQ6IHN0YXJ0LFxuICAgIHJld2luZDogcmV3aW5kLFxuICAgIHBhdXNlOiBwYXVzZSxcbiAgICBjYW5jZWw6IGNhbmNlbCxcbiAgICBzZXQ6IHNldCxcbiAgICBpc1BhdXNlZDogaXNQYXVzZWRcbiAgfTtcbn1cblxuZnVuY3Rpb24gU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gIHZhciBzdGF0ZSA9IGluaXRpYWxTdGF0ZTtcblxuICBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICBzdGF0ZSA9IHZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gaXMoc3RhdGVzKSB7XG4gICAgcmV0dXJuIGluY2x1ZGVzKHRvQXJyYXkoc3RhdGVzKSwgc3RhdGUpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzZXQ6IHNldCxcbiAgICBpczogaXNcbiAgfTtcbn1cblxuZnVuY3Rpb24gVGhyb3R0bGUoZnVuYywgZHVyYXRpb24pIHtcbiAgdmFyIGludGVydmFsO1xuXG4gIGZ1bmN0aW9uIHRocm90dGxlZCgpIHtcbiAgICBpZiAoIWludGVydmFsKSB7XG4gICAgICBpbnRlcnZhbCA9IFJlcXVlc3RJbnRlcnZhbChkdXJhdGlvbiB8fCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmMoKTtcbiAgICAgICAgaW50ZXJ2YWwgPSBudWxsO1xuICAgICAgfSwgbnVsbCwgMSk7XG4gICAgICBpbnRlcnZhbC5zdGFydCgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aHJvdHRsZWQ7XG59XG5cbmZ1bmN0aW9uIE1lZGlhKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBzdGF0ZSA9IFNwbGlkZTIuc3RhdGU7XG4gIHZhciBicmVha3BvaW50cyA9IG9wdGlvbnMuYnJlYWtwb2ludHMgfHwge307XG4gIHZhciByZWR1Y2VkTW90aW9uID0gb3B0aW9ucy5yZWR1Y2VkTW90aW9uIHx8IHt9O1xuICB2YXIgYmluZGVyID0gRXZlbnRCaW5kZXIoKTtcbiAgdmFyIHF1ZXJpZXMgPSBbXTtcblxuICBmdW5jdGlvbiBzZXR1cCgpIHtcbiAgICB2YXIgaXNNaW4gPSBvcHRpb25zLm1lZGlhUXVlcnkgPT09IFwibWluXCI7XG4gICAgb3duS2V5cyhicmVha3BvaW50cykuc29ydChmdW5jdGlvbiAobiwgbSkge1xuICAgICAgcmV0dXJuIGlzTWluID8gK24gLSArbSA6ICttIC0gK247XG4gICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZWdpc3RlcihicmVha3BvaW50c1trZXldLCBcIihcIiArIChpc01pbiA/IFwibWluXCIgOiBcIm1heFwiKSArIFwiLXdpZHRoOlwiICsga2V5ICsgXCJweClcIik7XG4gICAgfSk7XG4gICAgcmVnaXN0ZXIocmVkdWNlZE1vdGlvbiwgTUVESUFfUFJFRkVSU19SRURVQ0VEX01PVElPTik7XG4gICAgdXBkYXRlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95KGNvbXBsZXRlbHkpIHtcbiAgICBpZiAoY29tcGxldGVseSkge1xuICAgICAgYmluZGVyLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWdpc3RlcihvcHRpb25zMiwgcXVlcnkpIHtcbiAgICB2YXIgcXVlcnlMaXN0ID0gbWF0Y2hNZWRpYShxdWVyeSk7XG4gICAgYmluZGVyLmJpbmQocXVlcnlMaXN0LCBcImNoYW5nZVwiLCB1cGRhdGUpO1xuICAgIHF1ZXJpZXMucHVzaChbb3B0aW9uczIsIHF1ZXJ5TGlzdF0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBkZXN0cm95ZWQgPSBzdGF0ZS5pcyhERVNUUk9ZRUQpO1xuICAgIHZhciBkaXJlY3Rpb24gPSBvcHRpb25zLmRpcmVjdGlvbjtcbiAgICB2YXIgbWVyZ2VkID0gcXVlcmllcy5yZWR1Y2UoZnVuY3Rpb24gKG1lcmdlZDIsIGVudHJ5KSB7XG4gICAgICByZXR1cm4gbWVyZ2UobWVyZ2VkMiwgZW50cnlbMV0ubWF0Y2hlcyA/IGVudHJ5WzBdIDoge30pO1xuICAgIH0sIHt9KTtcbiAgICBvbWl0KG9wdGlvbnMpO1xuICAgIHNldChtZXJnZWQpO1xuXG4gICAgaWYgKG9wdGlvbnMuZGVzdHJveSkge1xuICAgICAgU3BsaWRlMi5kZXN0cm95KG9wdGlvbnMuZGVzdHJveSA9PT0gXCJjb21wbGV0ZWx5XCIpO1xuICAgIH0gZWxzZSBpZiAoZGVzdHJveWVkKSB7XG4gICAgICBkZXN0cm95KHRydWUpO1xuICAgICAgU3BsaWRlMi5tb3VudCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXJlY3Rpb24gIT09IG9wdGlvbnMuZGlyZWN0aW9uICYmIFNwbGlkZTIucmVmcmVzaCgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZHVjZShlbmFibGUpIHtcbiAgICBpZiAobWF0Y2hNZWRpYShNRURJQV9QUkVGRVJTX1JFRFVDRURfTU9USU9OKS5tYXRjaGVzKSB7XG4gICAgICBlbmFibGUgPyBtZXJnZShvcHRpb25zLCByZWR1Y2VkTW90aW9uKSA6IG9taXQob3B0aW9ucywgb3duS2V5cyhyZWR1Y2VkTW90aW9uKSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0KG9wdHMsIHVzZXIpIHtcbiAgICBtZXJnZShvcHRpb25zLCBvcHRzKTtcbiAgICB1c2VyICYmIG1lcmdlKE9iamVjdC5nZXRQcm90b3R5cGVPZihvcHRpb25zKSwgb3B0cyk7XG5cbiAgICBpZiAoIXN0YXRlLmlzKENSRUFURUQpKSB7XG4gICAgICBTcGxpZGUyLmVtaXQoRVZFTlRfVVBEQVRFRCwgb3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzZXR1cDogc2V0dXAsXG4gICAgZGVzdHJveTogZGVzdHJveSxcbiAgICByZWR1Y2U6IHJlZHVjZSxcbiAgICBzZXQ6IHNldFxuICB9O1xufVxuXG52YXIgQVJST1cgPSBcIkFycm93XCI7XG52YXIgQVJST1dfTEVGVCA9IEFSUk9XICsgXCJMZWZ0XCI7XG52YXIgQVJST1dfUklHSFQgPSBBUlJPVyArIFwiUmlnaHRcIjtcbnZhciBBUlJPV19VUCA9IEFSUk9XICsgXCJVcFwiO1xudmFyIEFSUk9XX0RPV04gPSBBUlJPVyArIFwiRG93blwiO1xudmFyIExUUiA9IFwibHRyXCI7XG52YXIgUlRMID0gXCJydGxcIjtcbnZhciBUVEIgPSBcInR0YlwiO1xudmFyIE9SSUVOVEFUSU9OX01BUCA9IHtcbiAgd2lkdGg6IFtcImhlaWdodFwiXSxcbiAgbGVmdDogW1widG9wXCIsIFwicmlnaHRcIl0sXG4gIHJpZ2h0OiBbXCJib3R0b21cIiwgXCJsZWZ0XCJdLFxuICB4OiBbXCJ5XCJdLFxuICBYOiBbXCJZXCJdLFxuICBZOiBbXCJYXCJdLFxuICBBcnJvd0xlZnQ6IFtBUlJPV19VUCwgQVJST1dfUklHSFRdLFxuICBBcnJvd1JpZ2h0OiBbQVJST1dfRE9XTiwgQVJST1dfTEVGVF1cbn07XG5cbmZ1bmN0aW9uIERpcmVjdGlvbihTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICBmdW5jdGlvbiByZXNvbHZlKHByb3AsIGF4aXNPbmx5LCBkaXJlY3Rpb24pIHtcbiAgICBkaXJlY3Rpb24gPSBkaXJlY3Rpb24gfHwgb3B0aW9ucy5kaXJlY3Rpb247XG4gICAgdmFyIGluZGV4ID0gZGlyZWN0aW9uID09PSBSVEwgJiYgIWF4aXNPbmx5ID8gMSA6IGRpcmVjdGlvbiA9PT0gVFRCID8gMCA6IC0xO1xuICAgIHJldHVybiBPUklFTlRBVElPTl9NQVBbcHJvcF0gJiYgT1JJRU5UQVRJT05fTUFQW3Byb3BdW2luZGV4XSB8fCBwcm9wLnJlcGxhY2UoL3dpZHRofGxlZnR8cmlnaHQvaSwgZnVuY3Rpb24gKG1hdGNoLCBvZmZzZXQpIHtcbiAgICAgIHZhciByZXBsYWNlbWVudCA9IE9SSUVOVEFUSU9OX01BUFttYXRjaC50b0xvd2VyQ2FzZSgpXVtpbmRleF0gfHwgbWF0Y2g7XG4gICAgICByZXR1cm4gb2Zmc2V0ID4gMCA/IHJlcGxhY2VtZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcmVwbGFjZW1lbnQuc2xpY2UoMSkgOiByZXBsYWNlbWVudDtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9yaWVudCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAqIChvcHRpb25zLmRpcmVjdGlvbiA9PT0gUlRMID8gMSA6IC0xKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICBvcmllbnQ6IG9yaWVudFxuICB9O1xufVxuXG52YXIgUk9MRSA9IFwicm9sZVwiO1xudmFyIFRBQl9JTkRFWCA9IFwidGFiaW5kZXhcIjtcbnZhciBESVNBQkxFRCA9IFwiZGlzYWJsZWRcIjtcbnZhciBBUklBX1BSRUZJWCA9IFwiYXJpYS1cIjtcbnZhciBBUklBX0NPTlRST0xTID0gQVJJQV9QUkVGSVggKyBcImNvbnRyb2xzXCI7XG52YXIgQVJJQV9DVVJSRU5UID0gQVJJQV9QUkVGSVggKyBcImN1cnJlbnRcIjtcbnZhciBBUklBX1NFTEVDVEVEID0gQVJJQV9QUkVGSVggKyBcInNlbGVjdGVkXCI7XG52YXIgQVJJQV9MQUJFTCA9IEFSSUFfUFJFRklYICsgXCJsYWJlbFwiO1xudmFyIEFSSUFfTEFCRUxMRURCWSA9IEFSSUFfUFJFRklYICsgXCJsYWJlbGxlZGJ5XCI7XG52YXIgQVJJQV9ISURERU4gPSBBUklBX1BSRUZJWCArIFwiaGlkZGVuXCI7XG52YXIgQVJJQV9PUklFTlRBVElPTiA9IEFSSUFfUFJFRklYICsgXCJvcmllbnRhdGlvblwiO1xudmFyIEFSSUFfUk9MRURFU0NSSVBUSU9OID0gQVJJQV9QUkVGSVggKyBcInJvbGVkZXNjcmlwdGlvblwiO1xudmFyIEFSSUFfTElWRSA9IEFSSUFfUFJFRklYICsgXCJsaXZlXCI7XG52YXIgQVJJQV9CVVNZID0gQVJJQV9QUkVGSVggKyBcImJ1c3lcIjtcbnZhciBBUklBX0FUT01JQyA9IEFSSUFfUFJFRklYICsgXCJhdG9taWNcIjtcbnZhciBBTExfQVRUUklCVVRFUyA9IFtST0xFLCBUQUJfSU5ERVgsIERJU0FCTEVELCBBUklBX0NPTlRST0xTLCBBUklBX0NVUlJFTlQsIEFSSUFfTEFCRUwsIEFSSUFfTEFCRUxMRURCWSwgQVJJQV9ISURERU4sIEFSSUFfT1JJRU5UQVRJT04sIEFSSUFfUk9MRURFU0NSSVBUSU9OXTtcbnZhciBDTEFTU19ST09UID0gUFJPSkVDVF9DT0RFO1xudmFyIENMQVNTX1RSQUNLID0gUFJPSkVDVF9DT0RFICsgXCJfX3RyYWNrXCI7XG52YXIgQ0xBU1NfTElTVCA9IFBST0pFQ1RfQ09ERSArIFwiX19saXN0XCI7XG52YXIgQ0xBU1NfU0xJREUgPSBQUk9KRUNUX0NPREUgKyBcIl9fc2xpZGVcIjtcbnZhciBDTEFTU19DTE9ORSA9IENMQVNTX1NMSURFICsgXCItLWNsb25lXCI7XG52YXIgQ0xBU1NfQ09OVEFJTkVSID0gQ0xBU1NfU0xJREUgKyBcIl9fY29udGFpbmVyXCI7XG52YXIgQ0xBU1NfQVJST1dTID0gUFJPSkVDVF9DT0RFICsgXCJfX2Fycm93c1wiO1xudmFyIENMQVNTX0FSUk9XID0gUFJPSkVDVF9DT0RFICsgXCJfX2Fycm93XCI7XG52YXIgQ0xBU1NfQVJST1dfUFJFViA9IENMQVNTX0FSUk9XICsgXCItLXByZXZcIjtcbnZhciBDTEFTU19BUlJPV19ORVhUID0gQ0xBU1NfQVJST1cgKyBcIi0tbmV4dFwiO1xudmFyIENMQVNTX1BBR0lOQVRJT04gPSBQUk9KRUNUX0NPREUgKyBcIl9fcGFnaW5hdGlvblwiO1xudmFyIENMQVNTX1BBR0lOQVRJT05fUEFHRSA9IENMQVNTX1BBR0lOQVRJT04gKyBcIl9fcGFnZVwiO1xudmFyIENMQVNTX1BST0dSRVNTID0gUFJPSkVDVF9DT0RFICsgXCJfX3Byb2dyZXNzXCI7XG52YXIgQ0xBU1NfUFJPR1JFU1NfQkFSID0gQ0xBU1NfUFJPR1JFU1MgKyBcIl9fYmFyXCI7XG52YXIgQ0xBU1NfVE9HR0xFID0gUFJPSkVDVF9DT0RFICsgXCJfX3RvZ2dsZVwiO1xudmFyIENMQVNTX1RPR0dMRV9QTEFZID0gQ0xBU1NfVE9HR0xFICsgXCJfX3BsYXlcIjtcbnZhciBDTEFTU19UT0dHTEVfUEFVU0UgPSBDTEFTU19UT0dHTEUgKyBcIl9fcGF1c2VcIjtcbnZhciBDTEFTU19TUElOTkVSID0gUFJPSkVDVF9DT0RFICsgXCJfX3NwaW5uZXJcIjtcbnZhciBDTEFTU19TUiA9IFBST0pFQ1RfQ09ERSArIFwiX19zclwiO1xudmFyIENMQVNTX0lOSVRJQUxJWkVEID0gXCJpcy1pbml0aWFsaXplZFwiO1xudmFyIENMQVNTX0FDVElWRSA9IFwiaXMtYWN0aXZlXCI7XG52YXIgQ0xBU1NfUFJFViA9IFwiaXMtcHJldlwiO1xudmFyIENMQVNTX05FWFQgPSBcImlzLW5leHRcIjtcbnZhciBDTEFTU19WSVNJQkxFID0gXCJpcy12aXNpYmxlXCI7XG52YXIgQ0xBU1NfTE9BRElORyA9IFwiaXMtbG9hZGluZ1wiO1xudmFyIENMQVNTX0ZPQ1VTX0lOID0gXCJpcy1mb2N1cy1pblwiO1xudmFyIFNUQVRVU19DTEFTU0VTID0gW0NMQVNTX0FDVElWRSwgQ0xBU1NfVklTSUJMRSwgQ0xBU1NfUFJFViwgQ0xBU1NfTkVYVCwgQ0xBU1NfTE9BRElORywgQ0xBU1NfRk9DVVNfSU5dO1xudmFyIENMQVNTRVMgPSB7XG4gIHNsaWRlOiBDTEFTU19TTElERSxcbiAgY2xvbmU6IENMQVNTX0NMT05FLFxuICBhcnJvd3M6IENMQVNTX0FSUk9XUyxcbiAgYXJyb3c6IENMQVNTX0FSUk9XLFxuICBwcmV2OiBDTEFTU19BUlJPV19QUkVWLFxuICBuZXh0OiBDTEFTU19BUlJPV19ORVhULFxuICBwYWdpbmF0aW9uOiBDTEFTU19QQUdJTkFUSU9OLFxuICBwYWdlOiBDTEFTU19QQUdJTkFUSU9OX1BBR0UsXG4gIHNwaW5uZXI6IENMQVNTX1NQSU5ORVJcbn07XG5cbmZ1bmN0aW9uIGNsb3Nlc3QoZnJvbSwgc2VsZWN0b3IpIHtcbiAgaWYgKGlzRnVuY3Rpb24oZnJvbS5jbG9zZXN0KSkge1xuICAgIHJldHVybiBmcm9tLmNsb3Nlc3Qoc2VsZWN0b3IpO1xuICB9XG5cbiAgdmFyIGVsbSA9IGZyb207XG5cbiAgd2hpbGUgKGVsbSAmJiBlbG0ubm9kZVR5cGUgPT09IDEpIHtcbiAgICBpZiAobWF0Y2hlcyhlbG0sIHNlbGVjdG9yKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZWxtID0gZWxtLnBhcmVudEVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4gZWxtO1xufVxuXG52YXIgRlJJQ1RJT04gPSA1O1xudmFyIExPR19JTlRFUlZBTCA9IDIwMDtcbnZhciBQT0lOVEVSX0RPV05fRVZFTlRTID0gXCJ0b3VjaHN0YXJ0IG1vdXNlZG93blwiO1xudmFyIFBPSU5URVJfTU9WRV9FVkVOVFMgPSBcInRvdWNobW92ZSBtb3VzZW1vdmVcIjtcbnZhciBQT0lOVEVSX1VQX0VWRU5UUyA9IFwidG91Y2hlbmQgdG91Y2hjYW5jZWwgbW91c2V1cCBjbGlja1wiO1xuXG5mdW5jdGlvbiBFbGVtZW50cyhTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgX0V2ZW50SW50ZXJmYWNlID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMiksXG4gICAgICBvbiA9IF9FdmVudEludGVyZmFjZS5vbixcbiAgICAgIGJpbmQgPSBfRXZlbnRJbnRlcmZhY2UuYmluZDtcblxuICB2YXIgcm9vdCA9IFNwbGlkZTIucm9vdDtcbiAgdmFyIGkxOG4gPSBvcHRpb25zLmkxOG47XG4gIHZhciBlbGVtZW50cyA9IHt9O1xuICB2YXIgc2xpZGVzID0gW107XG4gIHZhciByb290Q2xhc3NlcyA9IFtdO1xuICB2YXIgdHJhY2tDbGFzc2VzID0gW107XG4gIHZhciB0cmFjaztcbiAgdmFyIGxpc3Q7XG4gIHZhciBpc1VzaW5nS2V5O1xuXG4gIGZ1bmN0aW9uIHNldHVwKCkge1xuICAgIGNvbGxlY3QoKTtcbiAgICBpbml0KCk7XG4gICAgdXBkYXRlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBvbihFVkVOVF9SRUZSRVNILCBkZXN0cm95KTtcbiAgICBvbihFVkVOVF9SRUZSRVNILCBzZXR1cCk7XG4gICAgb24oRVZFTlRfVVBEQVRFRCwgdXBkYXRlKTtcbiAgICBiaW5kKGRvY3VtZW50LCBQT0lOVEVSX0RPV05fRVZFTlRTICsgXCIga2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaXNVc2luZ0tleSA9IGUudHlwZSA9PT0gXCJrZXlkb3duXCI7XG4gICAgfSwge1xuICAgICAgY2FwdHVyZTogdHJ1ZVxuICAgIH0pO1xuICAgIGJpbmQocm9vdCwgXCJmb2N1c2luXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRvZ2dsZUNsYXNzKHJvb3QsIENMQVNTX0ZPQ1VTX0lOLCAhIWlzVXNpbmdLZXkpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveShjb21wbGV0ZWx5KSB7XG4gICAgdmFyIGF0dHJzID0gQUxMX0FUVFJJQlVURVMuY29uY2F0KFwic3R5bGVcIik7XG4gICAgZW1wdHkoc2xpZGVzKTtcbiAgICByZW1vdmVDbGFzcyhyb290LCByb290Q2xhc3Nlcyk7XG4gICAgcmVtb3ZlQ2xhc3ModHJhY2ssIHRyYWNrQ2xhc3Nlcyk7XG4gICAgcmVtb3ZlQXR0cmlidXRlKFt0cmFjaywgbGlzdF0sIGF0dHJzKTtcbiAgICByZW1vdmVBdHRyaWJ1dGUocm9vdCwgY29tcGxldGVseSA/IGF0dHJzIDogW1wic3R5bGVcIiwgQVJJQV9ST0xFREVTQ1JJUFRJT05dKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICByZW1vdmVDbGFzcyhyb290LCByb290Q2xhc3Nlcyk7XG4gICAgcmVtb3ZlQ2xhc3ModHJhY2ssIHRyYWNrQ2xhc3Nlcyk7XG4gICAgcm9vdENsYXNzZXMgPSBnZXRDbGFzc2VzKENMQVNTX1JPT1QpO1xuICAgIHRyYWNrQ2xhc3NlcyA9IGdldENsYXNzZXMoQ0xBU1NfVFJBQ0spO1xuICAgIGFkZENsYXNzKHJvb3QsIHJvb3RDbGFzc2VzKTtcbiAgICBhZGRDbGFzcyh0cmFjaywgdHJhY2tDbGFzc2VzKTtcbiAgICBzZXRBdHRyaWJ1dGUocm9vdCwgQVJJQV9MQUJFTCwgb3B0aW9ucy5sYWJlbCk7XG4gICAgc2V0QXR0cmlidXRlKHJvb3QsIEFSSUFfTEFCRUxMRURCWSwgb3B0aW9ucy5sYWJlbGxlZGJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbGxlY3QoKSB7XG4gICAgdHJhY2sgPSBmaW5kKFwiLlwiICsgQ0xBU1NfVFJBQ0spO1xuICAgIGxpc3QgPSBjaGlsZCh0cmFjaywgXCIuXCIgKyBDTEFTU19MSVNUKTtcbiAgICBhc3NlcnQodHJhY2sgJiYgbGlzdCwgXCJBIHRyYWNrL2xpc3QgZWxlbWVudCBpcyBtaXNzaW5nLlwiKTtcbiAgICBwdXNoKHNsaWRlcywgY2hpbGRyZW4obGlzdCwgXCIuXCIgKyBDTEFTU19TTElERSArIFwiOm5vdCguXCIgKyBDTEFTU19DTE9ORSArIFwiKVwiKSk7XG4gICAgZm9yT3duKHtcbiAgICAgIGFycm93czogQ0xBU1NfQVJST1dTLFxuICAgICAgcGFnaW5hdGlvbjogQ0xBU1NfUEFHSU5BVElPTixcbiAgICAgIHByZXY6IENMQVNTX0FSUk9XX1BSRVYsXG4gICAgICBuZXh0OiBDTEFTU19BUlJPV19ORVhULFxuICAgICAgYmFyOiBDTEFTU19QUk9HUkVTU19CQVIsXG4gICAgICB0b2dnbGU6IENMQVNTX1RPR0dMRVxuICAgIH0sIGZ1bmN0aW9uIChjbGFzc05hbWUsIGtleSkge1xuICAgICAgZWxlbWVudHNba2V5XSA9IGZpbmQoXCIuXCIgKyBjbGFzc05hbWUpO1xuICAgIH0pO1xuICAgIGFzc2lnbihlbGVtZW50cywge1xuICAgICAgcm9vdDogcm9vdCxcbiAgICAgIHRyYWNrOiB0cmFjayxcbiAgICAgIGxpc3Q6IGxpc3QsXG4gICAgICBzbGlkZXM6IHNsaWRlc1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB2YXIgaWQgPSByb290LmlkIHx8IHVuaXF1ZUlkKFBST0pFQ1RfQ09ERSk7XG4gICAgdmFyIHJvbGUgPSBvcHRpb25zLnJvbGU7XG4gICAgcm9vdC5pZCA9IGlkO1xuICAgIHRyYWNrLmlkID0gdHJhY2suaWQgfHwgaWQgKyBcIi10cmFja1wiO1xuICAgIGxpc3QuaWQgPSBsaXN0LmlkIHx8IGlkICsgXCItbGlzdFwiO1xuXG4gICAgaWYgKCFnZXRBdHRyaWJ1dGUocm9vdCwgUk9MRSkgJiYgcm9vdC50YWdOYW1lICE9PSBcIlNFQ1RJT05cIiAmJiByb2xlKSB7XG4gICAgICBzZXRBdHRyaWJ1dGUocm9vdCwgUk9MRSwgcm9sZSk7XG4gICAgfVxuXG4gICAgc2V0QXR0cmlidXRlKHJvb3QsIEFSSUFfUk9MRURFU0NSSVBUSU9OLCBpMThuLmNhcm91c2VsKTtcbiAgICBzZXRBdHRyaWJ1dGUobGlzdCwgUk9MRSwgXCJwcmVzZW50YXRpb25cIik7XG4gIH1cblxuICBmdW5jdGlvbiBmaW5kKHNlbGVjdG9yKSB7XG4gICAgdmFyIGVsbSA9IHF1ZXJ5KHJvb3QsIHNlbGVjdG9yKTtcbiAgICByZXR1cm4gZWxtICYmIGNsb3Nlc3QoZWxtLCBcIi5cIiArIENMQVNTX1JPT1QpID09PSByb290ID8gZWxtIDogdm9pZCAwO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NlcyhiYXNlKSB7XG4gICAgcmV0dXJuIFtiYXNlICsgXCItLVwiICsgb3B0aW9ucy50eXBlLCBiYXNlICsgXCItLVwiICsgb3B0aW9ucy5kaXJlY3Rpb24sIG9wdGlvbnMuZHJhZyAmJiBiYXNlICsgXCItLWRyYWdnYWJsZVwiLCBvcHRpb25zLmlzTmF2aWdhdGlvbiAmJiBiYXNlICsgXCItLW5hdlwiLCBiYXNlID09PSBDTEFTU19ST09UICYmIENMQVNTX0FDVElWRV07XG4gIH1cblxuICByZXR1cm4gYXNzaWduKGVsZW1lbnRzLCB7XG4gICAgc2V0dXA6IHNldHVwLFxuICAgIG1vdW50OiBtb3VudCxcbiAgICBkZXN0cm95OiBkZXN0cm95XG4gIH0pO1xufVxuXG52YXIgU0xJREUgPSBcInNsaWRlXCI7XG52YXIgTE9PUCA9IFwibG9vcFwiO1xudmFyIEZBREUgPSBcImZhZGVcIjtcblxuZnVuY3Rpb24gU2xpZGUkMShTcGxpZGUyLCBpbmRleCwgc2xpZGVJbmRleCwgc2xpZGUpIHtcbiAgdmFyIGV2ZW50ID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMik7XG4gIHZhciBvbiA9IGV2ZW50Lm9uLFxuICAgICAgZW1pdCA9IGV2ZW50LmVtaXQsXG4gICAgICBiaW5kID0gZXZlbnQuYmluZDtcbiAgdmFyIENvbXBvbmVudHMgPSBTcGxpZGUyLkNvbXBvbmVudHMsXG4gICAgICByb290ID0gU3BsaWRlMi5yb290LFxuICAgICAgb3B0aW9ucyA9IFNwbGlkZTIub3B0aW9ucztcbiAgdmFyIGlzTmF2aWdhdGlvbiA9IG9wdGlvbnMuaXNOYXZpZ2F0aW9uLFxuICAgICAgdXBkYXRlT25Nb3ZlID0gb3B0aW9ucy51cGRhdGVPbk1vdmUsXG4gICAgICBpMThuID0gb3B0aW9ucy5pMThuLFxuICAgICAgcGFnaW5hdGlvbiA9IG9wdGlvbnMucGFnaW5hdGlvbixcbiAgICAgIHNsaWRlRm9jdXMgPSBvcHRpb25zLnNsaWRlRm9jdXM7XG4gIHZhciByZXNvbHZlID0gQ29tcG9uZW50cy5EaXJlY3Rpb24ucmVzb2x2ZTtcbiAgdmFyIHN0eWxlcyA9IGdldEF0dHJpYnV0ZShzbGlkZSwgXCJzdHlsZVwiKTtcbiAgdmFyIGxhYmVsID0gZ2V0QXR0cmlidXRlKHNsaWRlLCBBUklBX0xBQkVMKTtcbiAgdmFyIGlzQ2xvbmUgPSBzbGlkZUluZGV4ID4gLTE7XG4gIHZhciBjb250YWluZXIgPSBjaGlsZChzbGlkZSwgXCIuXCIgKyBDTEFTU19DT05UQUlORVIpO1xuICB2YXIgZm9jdXNhYmxlTm9kZXMgPSBxdWVyeUFsbChzbGlkZSwgb3B0aW9ucy5mb2N1c2FibGVOb2RlcyB8fCBcIlwiKTtcbiAgdmFyIGRlc3Ryb3llZDtcblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBpZiAoIWlzQ2xvbmUpIHtcbiAgICAgIHNsaWRlLmlkID0gcm9vdC5pZCArIFwiLXNsaWRlXCIgKyBwYWQoaW5kZXggKyAxKTtcbiAgICAgIHNldEF0dHJpYnV0ZShzbGlkZSwgUk9MRSwgcGFnaW5hdGlvbiA/IFwidGFicGFuZWxcIiA6IFwiZ3JvdXBcIik7XG4gICAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIEFSSUFfUk9MRURFU0NSSVBUSU9OLCBpMThuLnNsaWRlKTtcbiAgICAgIHNldEF0dHJpYnV0ZShzbGlkZSwgQVJJQV9MQUJFTCwgbGFiZWwgfHwgZm9ybWF0KGkxOG4uc2xpZGVMYWJlbCwgW2luZGV4ICsgMSwgU3BsaWRlMi5sZW5ndGhdKSk7XG4gICAgfVxuXG4gICAgbGlzdGVuKCk7XG4gIH1cblxuICBmdW5jdGlvbiBsaXN0ZW4oKSB7XG4gICAgYmluZChzbGlkZSwgXCJjbGlja1wiLCBhcHBseShlbWl0LCBFVkVOVF9DTElDSywgc2VsZikpO1xuICAgIGJpbmQoc2xpZGUsIFwia2V5ZG93blwiLCBhcHBseShlbWl0LCBFVkVOVF9TTElERV9LRVlET1dOLCBzZWxmKSk7XG4gICAgb24oW0VWRU5UX01PVkVELCBFVkVOVF9TSElGVEVELCBFVkVOVF9TQ1JPTExFRF0sIHVwZGF0ZSk7XG4gICAgb24oRVZFTlRfTkFWSUdBVElPTl9NT1VOVEVELCBpbml0TmF2aWdhdGlvbik7XG5cbiAgICBpZiAodXBkYXRlT25Nb3ZlKSB7XG4gICAgICBvbihFVkVOVF9NT1ZFLCBvbk1vdmUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgZGVzdHJveWVkID0gdHJ1ZTtcbiAgICBldmVudC5kZXN0cm95KCk7XG4gICAgcmVtb3ZlQ2xhc3Moc2xpZGUsIFNUQVRVU19DTEFTU0VTKTtcbiAgICByZW1vdmVBdHRyaWJ1dGUoc2xpZGUsIEFMTF9BVFRSSUJVVEVTKTtcbiAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIFwic3R5bGVcIiwgc3R5bGVzKTtcbiAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIEFSSUFfTEFCRUwsIGxhYmVsIHx8IFwiXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdE5hdmlnYXRpb24oKSB7XG4gICAgdmFyIGNvbnRyb2xzID0gU3BsaWRlMi5zcGxpZGVzLm1hcChmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICB2YXIgU2xpZGUyID0gdGFyZ2V0LnNwbGlkZS5Db21wb25lbnRzLlNsaWRlcy5nZXRBdChpbmRleCk7XG4gICAgICByZXR1cm4gU2xpZGUyID8gU2xpZGUyLnNsaWRlLmlkIDogXCJcIjtcbiAgICB9KS5qb2luKFwiIFwiKTtcbiAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIEFSSUFfTEFCRUwsIGZvcm1hdChpMThuLnNsaWRlWCwgKGlzQ2xvbmUgPyBzbGlkZUluZGV4IDogaW5kZXgpICsgMSkpO1xuICAgIHNldEF0dHJpYnV0ZShzbGlkZSwgQVJJQV9DT05UUk9MUywgY29udHJvbHMpO1xuICAgIHNldEF0dHJpYnV0ZShzbGlkZSwgUk9MRSwgc2xpZGVGb2N1cyA/IFwiYnV0dG9uXCIgOiBcIlwiKTtcbiAgICBzbGlkZUZvY3VzICYmIHJlbW92ZUF0dHJpYnV0ZShzbGlkZSwgQVJJQV9ST0xFREVTQ1JJUFRJT04pO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Nb3ZlKCkge1xuICAgIGlmICghZGVzdHJveWVkKSB7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgaWYgKCFkZXN0cm95ZWQpIHtcbiAgICAgIHZhciBjdXJyID0gU3BsaWRlMi5pbmRleDtcbiAgICAgIHVwZGF0ZUFjdGl2aXR5KCk7XG4gICAgICB1cGRhdGVWaXNpYmlsaXR5KCk7XG4gICAgICB0b2dnbGVDbGFzcyhzbGlkZSwgQ0xBU1NfUFJFViwgaW5kZXggPT09IGN1cnIgLSAxKTtcbiAgICAgIHRvZ2dsZUNsYXNzKHNsaWRlLCBDTEFTU19ORVhULCBpbmRleCA9PT0gY3VyciArIDEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUFjdGl2aXR5KCkge1xuICAgIHZhciBhY3RpdmUgPSBpc0FjdGl2ZSgpO1xuXG4gICAgaWYgKGFjdGl2ZSAhPT0gaGFzQ2xhc3Moc2xpZGUsIENMQVNTX0FDVElWRSkpIHtcbiAgICAgIHRvZ2dsZUNsYXNzKHNsaWRlLCBDTEFTU19BQ1RJVkUsIGFjdGl2ZSk7XG4gICAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIEFSSUFfQ1VSUkVOVCwgaXNOYXZpZ2F0aW9uICYmIGFjdGl2ZSB8fCBcIlwiKTtcbiAgICAgIGVtaXQoYWN0aXZlID8gRVZFTlRfQUNUSVZFIDogRVZFTlRfSU5BQ1RJVkUsIHNlbGYpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVZpc2liaWxpdHkoKSB7XG4gICAgdmFyIHZpc2libGUgPSBpc1Zpc2libGUoKTtcbiAgICB2YXIgaGlkZGVuID0gIXZpc2libGUgJiYgKCFpc0FjdGl2ZSgpIHx8IGlzQ2xvbmUpO1xuXG4gICAgaWYgKCFTcGxpZGUyLnN0YXRlLmlzKFtNT1ZJTkcsIFNDUk9MTElOR10pKSB7XG4gICAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIEFSSUFfSElEREVOLCBoaWRkZW4gfHwgXCJcIik7XG4gICAgfVxuXG4gICAgc2V0QXR0cmlidXRlKGZvY3VzYWJsZU5vZGVzLCBUQUJfSU5ERVgsIGhpZGRlbiA/IC0xIDogXCJcIik7XG5cbiAgICBpZiAoc2xpZGVGb2N1cykge1xuICAgICAgc2V0QXR0cmlidXRlKHNsaWRlLCBUQUJfSU5ERVgsIGhpZGRlbiA/IC0xIDogMCk7XG4gICAgfVxuXG4gICAgaWYgKHZpc2libGUgIT09IGhhc0NsYXNzKHNsaWRlLCBDTEFTU19WSVNJQkxFKSkge1xuICAgICAgdG9nZ2xlQ2xhc3Moc2xpZGUsIENMQVNTX1ZJU0lCTEUsIHZpc2libGUpO1xuICAgICAgZW1pdCh2aXNpYmxlID8gRVZFTlRfVklTSUJMRSA6IEVWRU5UX0hJRERFTiwgc2VsZik7XG4gICAgfVxuXG4gICAgaWYgKCF2aXNpYmxlICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHNsaWRlKSB7XG4gICAgICB2YXIgU2xpZGUyID0gQ29tcG9uZW50cy5TbGlkZXMuZ2V0QXQoU3BsaWRlMi5pbmRleCk7XG4gICAgICBTbGlkZTIgJiYgZm9jdXMoU2xpZGUyLnNsaWRlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdHlsZSQxKHByb3AsIHZhbHVlLCB1c2VDb250YWluZXIpIHtcbiAgICBzdHlsZSh1c2VDb250YWluZXIgJiYgY29udGFpbmVyIHx8IHNsaWRlLCBwcm9wLCB2YWx1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0FjdGl2ZSgpIHtcbiAgICB2YXIgY3VyciA9IFNwbGlkZTIuaW5kZXg7XG4gICAgcmV0dXJuIGN1cnIgPT09IGluZGV4IHx8IG9wdGlvbnMuY2xvbmVTdGF0dXMgJiYgY3VyciA9PT0gc2xpZGVJbmRleDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzVmlzaWJsZSgpIHtcbiAgICBpZiAoU3BsaWRlMi5pcyhGQURFKSkge1xuICAgICAgcmV0dXJuIGlzQWN0aXZlKCk7XG4gICAgfVxuXG4gICAgdmFyIHRyYWNrUmVjdCA9IHJlY3QoQ29tcG9uZW50cy5FbGVtZW50cy50cmFjayk7XG4gICAgdmFyIHNsaWRlUmVjdCA9IHJlY3Qoc2xpZGUpO1xuICAgIHZhciBsZWZ0ID0gcmVzb2x2ZShcImxlZnRcIik7XG4gICAgdmFyIHJpZ2h0ID0gcmVzb2x2ZShcInJpZ2h0XCIpO1xuICAgIHJldHVybiBmbG9vcih0cmFja1JlY3RbbGVmdF0pIDw9IGNlaWwoc2xpZGVSZWN0W2xlZnRdKSAmJiBmbG9vcihzbGlkZVJlY3RbcmlnaHRdKSA8PSBjZWlsKHRyYWNrUmVjdFtyaWdodF0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNXaXRoaW4oZnJvbSwgZGlzdGFuY2UpIHtcbiAgICB2YXIgZGlmZiA9IGFicyhmcm9tIC0gaW5kZXgpO1xuXG4gICAgaWYgKCFpc0Nsb25lICYmIChvcHRpb25zLnJld2luZCB8fCBTcGxpZGUyLmlzKExPT1ApKSkge1xuICAgICAgZGlmZiA9IG1pbihkaWZmLCBTcGxpZGUyLmxlbmd0aCAtIGRpZmYpO1xuICAgIH1cblxuICAgIHJldHVybiBkaWZmIDw9IGRpc3RhbmNlO1xuICB9XG5cbiAgdmFyIHNlbGYgPSB7XG4gICAgaW5kZXg6IGluZGV4LFxuICAgIHNsaWRlSW5kZXg6IHNsaWRlSW5kZXgsXG4gICAgc2xpZGU6IHNsaWRlLFxuICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgIGlzQ2xvbmU6IGlzQ2xvbmUsXG4gICAgbW91bnQ6IG1vdW50LFxuICAgIGRlc3Ryb3k6IGRlc3Ryb3ksXG4gICAgdXBkYXRlOiB1cGRhdGUsXG4gICAgc3R5bGU6IHN0eWxlJDEsXG4gICAgaXNXaXRoaW46IGlzV2l0aGluXG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBTbGlkZXMoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgdmFyIF9FdmVudEludGVyZmFjZTIgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKSxcbiAgICAgIG9uID0gX0V2ZW50SW50ZXJmYWNlMi5vbixcbiAgICAgIGVtaXQgPSBfRXZlbnRJbnRlcmZhY2UyLmVtaXQsXG4gICAgICBiaW5kID0gX0V2ZW50SW50ZXJmYWNlMi5iaW5kO1xuXG4gIHZhciBfQ29tcG9uZW50czIkRWxlbWVudHMgPSBDb21wb25lbnRzMi5FbGVtZW50cyxcbiAgICAgIHNsaWRlcyA9IF9Db21wb25lbnRzMiRFbGVtZW50cy5zbGlkZXMsXG4gICAgICBsaXN0ID0gX0NvbXBvbmVudHMyJEVsZW1lbnRzLmxpc3Q7XG4gIHZhciBTbGlkZXMyID0gW107XG5cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgaW5pdCgpO1xuICAgIG9uKEVWRU5UX1JFRlJFU0gsIGRlc3Ryb3kpO1xuICAgIG9uKEVWRU5UX1JFRlJFU0gsIGluaXQpO1xuICAgIG9uKFtFVkVOVF9NT1VOVEVELCBFVkVOVF9SRUZSRVNIXSwgZnVuY3Rpb24gKCkge1xuICAgICAgU2xpZGVzMi5zb3J0KGZ1bmN0aW9uIChTbGlkZTEsIFNsaWRlMikge1xuICAgICAgICByZXR1cm4gU2xpZGUxLmluZGV4IC0gU2xpZGUyLmluZGV4O1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHNsaWRlcy5mb3JFYWNoKGZ1bmN0aW9uIChzbGlkZSwgaW5kZXgpIHtcbiAgICAgIHJlZ2lzdGVyKHNsaWRlLCBpbmRleCwgLTEpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBmb3JFYWNoJDEoZnVuY3Rpb24gKFNsaWRlMikge1xuICAgICAgU2xpZGUyLmRlc3Ryb3koKTtcbiAgICB9KTtcbiAgICBlbXB0eShTbGlkZXMyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICBmb3JFYWNoJDEoZnVuY3Rpb24gKFNsaWRlMikge1xuICAgICAgU2xpZGUyLnVwZGF0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXIoc2xpZGUsIGluZGV4LCBzbGlkZUluZGV4KSB7XG4gICAgdmFyIG9iamVjdCA9IFNsaWRlJDEoU3BsaWRlMiwgaW5kZXgsIHNsaWRlSW5kZXgsIHNsaWRlKTtcbiAgICBvYmplY3QubW91bnQoKTtcbiAgICBTbGlkZXMyLnB1c2gob2JqZWN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldChleGNsdWRlQ2xvbmVzKSB7XG4gICAgcmV0dXJuIGV4Y2x1ZGVDbG9uZXMgPyBmaWx0ZXIoZnVuY3Rpb24gKFNsaWRlMikge1xuICAgICAgcmV0dXJuICFTbGlkZTIuaXNDbG9uZTtcbiAgICB9KSA6IFNsaWRlczI7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJbihwYWdlKSB7XG4gICAgdmFyIENvbnRyb2xsZXIgPSBDb21wb25lbnRzMi5Db250cm9sbGVyO1xuICAgIHZhciBpbmRleCA9IENvbnRyb2xsZXIudG9JbmRleChwYWdlKTtcbiAgICB2YXIgbWF4ID0gQ29udHJvbGxlci5oYXNGb2N1cygpID8gMSA6IG9wdGlvbnMucGVyUGFnZTtcbiAgICByZXR1cm4gZmlsdGVyKGZ1bmN0aW9uIChTbGlkZTIpIHtcbiAgICAgIHJldHVybiBiZXR3ZWVuKFNsaWRlMi5pbmRleCwgaW5kZXgsIGluZGV4ICsgbWF4IC0gMSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBdChpbmRleCkge1xuICAgIHJldHVybiBmaWx0ZXIoaW5kZXgpWzBdO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkKGl0ZW1zLCBpbmRleCkge1xuICAgIGZvckVhY2goaXRlbXMsIGZ1bmN0aW9uIChzbGlkZSkge1xuICAgICAgaWYgKGlzU3RyaW5nKHNsaWRlKSkge1xuICAgICAgICBzbGlkZSA9IHBhcnNlSHRtbChzbGlkZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0hUTUxFbGVtZW50KHNsaWRlKSkge1xuICAgICAgICB2YXIgcmVmID0gc2xpZGVzW2luZGV4XTtcbiAgICAgICAgcmVmID8gYmVmb3JlKHNsaWRlLCByZWYpIDogYXBwZW5kKGxpc3QsIHNsaWRlKTtcbiAgICAgICAgYWRkQ2xhc3Moc2xpZGUsIG9wdGlvbnMuY2xhc3Nlcy5zbGlkZSk7XG4gICAgICAgIG9ic2VydmVJbWFnZXMoc2xpZGUsIGFwcGx5KGVtaXQsIEVWRU5UX1JFU0laRSkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGVtaXQoRVZFTlRfUkVGUkVTSCk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmUkMShtYXRjaGVyKSB7XG4gICAgcmVtb3ZlKGZpbHRlcihtYXRjaGVyKS5tYXAoZnVuY3Rpb24gKFNsaWRlMikge1xuICAgICAgcmV0dXJuIFNsaWRlMi5zbGlkZTtcbiAgICB9KSk7XG4gICAgZW1pdChFVkVOVF9SRUZSRVNIKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvckVhY2gkMShpdGVyYXRlZSwgZXhjbHVkZUNsb25lcykge1xuICAgIGdldChleGNsdWRlQ2xvbmVzKS5mb3JFYWNoKGl0ZXJhdGVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbHRlcihtYXRjaGVyKSB7XG4gICAgcmV0dXJuIFNsaWRlczIuZmlsdGVyKGlzRnVuY3Rpb24obWF0Y2hlcikgPyBtYXRjaGVyIDogZnVuY3Rpb24gKFNsaWRlMikge1xuICAgICAgcmV0dXJuIGlzU3RyaW5nKG1hdGNoZXIpID8gbWF0Y2hlcyhTbGlkZTIuc2xpZGUsIG1hdGNoZXIpIDogaW5jbHVkZXModG9BcnJheShtYXRjaGVyKSwgU2xpZGUyLmluZGV4KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0eWxlKHByb3AsIHZhbHVlLCB1c2VDb250YWluZXIpIHtcbiAgICBmb3JFYWNoJDEoZnVuY3Rpb24gKFNsaWRlMikge1xuICAgICAgU2xpZGUyLnN0eWxlKHByb3AsIHZhbHVlLCB1c2VDb250YWluZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gb2JzZXJ2ZUltYWdlcyhlbG0sIGNhbGxiYWNrKSB7XG4gICAgdmFyIGltYWdlcyA9IHF1ZXJ5QWxsKGVsbSwgXCJpbWdcIik7XG4gICAgdmFyIGxlbmd0aCA9IGltYWdlcy5sZW5ndGg7XG5cbiAgICBpZiAobGVuZ3RoKSB7XG4gICAgICBpbWFnZXMuZm9yRWFjaChmdW5jdGlvbiAoaW1nKSB7XG4gICAgICAgIGJpbmQoaW1nLCBcImxvYWQgZXJyb3JcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghIC0tbGVuZ3RoKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRMZW5ndGgoZXhjbHVkZUNsb25lcykge1xuICAgIHJldHVybiBleGNsdWRlQ2xvbmVzID8gc2xpZGVzLmxlbmd0aCA6IFNsaWRlczIubGVuZ3RoO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNFbm91Z2goKSB7XG4gICAgcmV0dXJuIFNsaWRlczIubGVuZ3RoID4gb3B0aW9ucy5wZXJQYWdlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtb3VudDogbW91bnQsXG4gICAgZGVzdHJveTogZGVzdHJveSxcbiAgICB1cGRhdGU6IHVwZGF0ZSxcbiAgICByZWdpc3RlcjogcmVnaXN0ZXIsXG4gICAgZ2V0OiBnZXQsXG4gICAgZ2V0SW46IGdldEluLFxuICAgIGdldEF0OiBnZXRBdCxcbiAgICBhZGQ6IGFkZCxcbiAgICByZW1vdmU6IHJlbW92ZSQxLFxuICAgIGZvckVhY2g6IGZvckVhY2gkMSxcbiAgICBmaWx0ZXI6IGZpbHRlcixcbiAgICBzdHlsZTogc3R5bGUsXG4gICAgZ2V0TGVuZ3RoOiBnZXRMZW5ndGgsXG4gICAgaXNFbm91Z2g6IGlzRW5vdWdoXG4gIH07XG59XG5cbmZ1bmN0aW9uIExheW91dChTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgX0V2ZW50SW50ZXJmYWNlMyA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpLFxuICAgICAgb24gPSBfRXZlbnRJbnRlcmZhY2UzLm9uLFxuICAgICAgYmluZCA9IF9FdmVudEludGVyZmFjZTMuYmluZCxcbiAgICAgIGVtaXQgPSBfRXZlbnRJbnRlcmZhY2UzLmVtaXQ7XG5cbiAgdmFyIFNsaWRlcyA9IENvbXBvbmVudHMyLlNsaWRlcztcbiAgdmFyIHJlc29sdmUgPSBDb21wb25lbnRzMi5EaXJlY3Rpb24ucmVzb2x2ZTtcbiAgdmFyIF9Db21wb25lbnRzMiRFbGVtZW50czIgPSBDb21wb25lbnRzMi5FbGVtZW50cyxcbiAgICAgIHJvb3QgPSBfQ29tcG9uZW50czIkRWxlbWVudHMyLnJvb3QsXG4gICAgICB0cmFjayA9IF9Db21wb25lbnRzMiRFbGVtZW50czIudHJhY2ssXG4gICAgICBsaXN0ID0gX0NvbXBvbmVudHMyJEVsZW1lbnRzMi5saXN0O1xuICB2YXIgZ2V0QXQgPSBTbGlkZXMuZ2V0QXQsXG4gICAgICBzdHlsZVNsaWRlcyA9IFNsaWRlcy5zdHlsZTtcbiAgdmFyIHZlcnRpY2FsO1xuICB2YXIgcm9vdFJlY3Q7XG5cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgaW5pdCgpO1xuICAgIGJpbmQod2luZG93LCBcInJlc2l6ZSBsb2FkXCIsIFRocm90dGxlKGFwcGx5KGVtaXQsIEVWRU5UX1JFU0laRSkpKTtcbiAgICBvbihbRVZFTlRfVVBEQVRFRCwgRVZFTlRfUkVGUkVTSF0sIGluaXQpO1xuICAgIG9uKEVWRU5UX1JFU0laRSwgcmVzaXplKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgcm9vdFJlY3QgPSBudWxsO1xuICAgIHZlcnRpY2FsID0gb3B0aW9ucy5kaXJlY3Rpb24gPT09IFRUQjtcbiAgICBzdHlsZShyb290LCBcIm1heFdpZHRoXCIsIHVuaXQob3B0aW9ucy53aWR0aCkpO1xuICAgIHN0eWxlKHRyYWNrLCByZXNvbHZlKFwicGFkZGluZ0xlZnRcIiksIGNzc1BhZGRpbmcoZmFsc2UpKTtcbiAgICBzdHlsZSh0cmFjaywgcmVzb2x2ZShcInBhZGRpbmdSaWdodFwiKSwgY3NzUGFkZGluZyh0cnVlKSk7XG4gICAgcmVzaXplKCk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNpemUoKSB7XG4gICAgdmFyIG5ld1JlY3QgPSByZWN0KHJvb3QpO1xuXG4gICAgaWYgKCFyb290UmVjdCB8fCByb290UmVjdC53aWR0aCAhPT0gbmV3UmVjdC53aWR0aCB8fCByb290UmVjdC5oZWlnaHQgIT09IG5ld1JlY3QuaGVpZ2h0KSB7XG4gICAgICBzdHlsZSh0cmFjaywgXCJoZWlnaHRcIiwgY3NzVHJhY2tIZWlnaHQoKSk7XG4gICAgICBzdHlsZVNsaWRlcyhyZXNvbHZlKFwibWFyZ2luUmlnaHRcIiksIHVuaXQob3B0aW9ucy5nYXApKTtcbiAgICAgIHN0eWxlU2xpZGVzKFwid2lkdGhcIiwgY3NzU2xpZGVXaWR0aCgpKTtcbiAgICAgIHN0eWxlU2xpZGVzKFwiaGVpZ2h0XCIsIGNzc1NsaWRlSGVpZ2h0KCksIHRydWUpO1xuICAgICAgcm9vdFJlY3QgPSBuZXdSZWN0O1xuICAgICAgZW1pdChFVkVOVF9SRVNJWkVEKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjc3NQYWRkaW5nKHJpZ2h0KSB7XG4gICAgdmFyIHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmc7XG4gICAgdmFyIHByb3AgPSByZXNvbHZlKHJpZ2h0ID8gXCJyaWdodFwiIDogXCJsZWZ0XCIpO1xuICAgIHJldHVybiBwYWRkaW5nICYmIHVuaXQocGFkZGluZ1twcm9wXSB8fCAoaXNPYmplY3QocGFkZGluZykgPyAwIDogcGFkZGluZykpIHx8IFwiMHB4XCI7XG4gIH1cblxuICBmdW5jdGlvbiBjc3NUcmFja0hlaWdodCgpIHtcbiAgICB2YXIgaGVpZ2h0ID0gXCJcIjtcblxuICAgIGlmICh2ZXJ0aWNhbCkge1xuICAgICAgaGVpZ2h0ID0gY3NzSGVpZ2h0KCk7XG4gICAgICBhc3NlcnQoaGVpZ2h0LCBcImhlaWdodCBvciBoZWlnaHRSYXRpbyBpcyBtaXNzaW5nLlwiKTtcbiAgICAgIGhlaWdodCA9IFwiY2FsYyhcIiArIGhlaWdodCArIFwiIC0gXCIgKyBjc3NQYWRkaW5nKGZhbHNlKSArIFwiIC0gXCIgKyBjc3NQYWRkaW5nKHRydWUpICsgXCIpXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNzc0hlaWdodCgpIHtcbiAgICByZXR1cm4gdW5pdChvcHRpb25zLmhlaWdodCB8fCByZWN0KGxpc3QpLndpZHRoICogb3B0aW9ucy5oZWlnaHRSYXRpbyk7XG4gIH1cblxuICBmdW5jdGlvbiBjc3NTbGlkZVdpZHRoKCkge1xuICAgIHJldHVybiBvcHRpb25zLmF1dG9XaWR0aCA/IG51bGwgOiB1bml0KG9wdGlvbnMuZml4ZWRXaWR0aCkgfHwgKHZlcnRpY2FsID8gXCJcIiA6IGNzc1NsaWRlU2l6ZSgpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNzc1NsaWRlSGVpZ2h0KCkge1xuICAgIHJldHVybiB1bml0KG9wdGlvbnMuZml4ZWRIZWlnaHQpIHx8ICh2ZXJ0aWNhbCA/IG9wdGlvbnMuYXV0b0hlaWdodCA/IG51bGwgOiBjc3NTbGlkZVNpemUoKSA6IGNzc0hlaWdodCgpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNzc1NsaWRlU2l6ZSgpIHtcbiAgICB2YXIgZ2FwID0gdW5pdChvcHRpb25zLmdhcCk7XG4gICAgcmV0dXJuIFwiY2FsYygoMTAwJVwiICsgKGdhcCAmJiBcIiArIFwiICsgZ2FwKSArIFwiKS9cIiArIChvcHRpb25zLnBlclBhZ2UgfHwgMSkgKyAoZ2FwICYmIFwiIC0gXCIgKyBnYXApICsgXCIpXCI7XG4gIH1cblxuICBmdW5jdGlvbiBsaXN0U2l6ZSgpIHtcbiAgICByZXR1cm4gcmVjdChsaXN0KVtyZXNvbHZlKFwid2lkdGhcIildO1xuICB9XG5cbiAgZnVuY3Rpb24gc2xpZGVTaXplKGluZGV4LCB3aXRob3V0R2FwKSB7XG4gICAgdmFyIFNsaWRlID0gZ2V0QXQoaW5kZXggfHwgMCk7XG4gICAgcmV0dXJuIFNsaWRlID8gcmVjdChTbGlkZS5zbGlkZSlbcmVzb2x2ZShcIndpZHRoXCIpXSArICh3aXRob3V0R2FwID8gMCA6IGdldEdhcCgpKSA6IDA7XG4gIH1cblxuICBmdW5jdGlvbiB0b3RhbFNpemUoaW5kZXgsIHdpdGhvdXRHYXApIHtcbiAgICB2YXIgU2xpZGUgPSBnZXRBdChpbmRleCk7XG5cbiAgICBpZiAoU2xpZGUpIHtcbiAgICAgIHZhciByaWdodCA9IHJlY3QoU2xpZGUuc2xpZGUpW3Jlc29sdmUoXCJyaWdodFwiKV07XG4gICAgICB2YXIgbGVmdCA9IHJlY3QobGlzdClbcmVzb2x2ZShcImxlZnRcIildO1xuICAgICAgcmV0dXJuIGFicyhyaWdodCAtIGxlZnQpICsgKHdpdGhvdXRHYXAgPyAwIDogZ2V0R2FwKCkpO1xuICAgIH1cblxuICAgIHJldHVybiAwO1xuICB9XG5cbiAgZnVuY3Rpb24gc2xpZGVyU2l6ZSgpIHtcbiAgICByZXR1cm4gdG90YWxTaXplKFNwbGlkZTIubGVuZ3RoIC0gMSwgdHJ1ZSkgLSB0b3RhbFNpemUoLTEsIHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0R2FwKCkge1xuICAgIHZhciBTbGlkZSA9IGdldEF0KDApO1xuICAgIHJldHVybiBTbGlkZSAmJiBwYXJzZUZsb2F0KHN0eWxlKFNsaWRlLnNsaWRlLCByZXNvbHZlKFwibWFyZ2luUmlnaHRcIikpKSB8fCAwO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UGFkZGluZyhyaWdodCkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHN0eWxlKHRyYWNrLCByZXNvbHZlKFwicGFkZGluZ1wiICsgKHJpZ2h0ID8gXCJSaWdodFwiIDogXCJMZWZ0XCIpKSkpIHx8IDA7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1vdW50OiBtb3VudCxcbiAgICBsaXN0U2l6ZTogbGlzdFNpemUsXG4gICAgc2xpZGVTaXplOiBzbGlkZVNpemUsXG4gICAgc2xpZGVyU2l6ZTogc2xpZGVyU2l6ZSxcbiAgICB0b3RhbFNpemU6IHRvdGFsU2l6ZSxcbiAgICBnZXRQYWRkaW5nOiBnZXRQYWRkaW5nXG4gIH07XG59XG5cbnZhciBNVUxUSVBMSUVSID0gMjtcblxuZnVuY3Rpb24gQ2xvbmVzKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBfRXZlbnRJbnRlcmZhY2U0ID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMiksXG4gICAgICBvbiA9IF9FdmVudEludGVyZmFjZTQub24sXG4gICAgICBlbWl0ID0gX0V2ZW50SW50ZXJmYWNlNC5lbWl0O1xuXG4gIHZhciBFbGVtZW50cyA9IENvbXBvbmVudHMyLkVsZW1lbnRzLFxuICAgICAgU2xpZGVzID0gQ29tcG9uZW50czIuU2xpZGVzO1xuICB2YXIgcmVzb2x2ZSA9IENvbXBvbmVudHMyLkRpcmVjdGlvbi5yZXNvbHZlO1xuICB2YXIgY2xvbmVzID0gW107XG4gIHZhciBjbG9uZUNvdW50O1xuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIGluaXQoKTtcbiAgICBvbihFVkVOVF9SRUZSRVNILCBkZXN0cm95KTtcbiAgICBvbihFVkVOVF9SRUZSRVNILCBpbml0KTtcbiAgICBvbihbRVZFTlRfVVBEQVRFRCwgRVZFTlRfUkVTSVpFXSwgb2JzZXJ2ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGlmIChjbG9uZUNvdW50ID0gY29tcHV0ZUNsb25lQ291bnQoKSkge1xuICAgICAgZ2VuZXJhdGUoY2xvbmVDb3VudCk7XG4gICAgICBlbWl0KEVWRU5UX1JFU0laRSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICByZW1vdmUoY2xvbmVzKTtcbiAgICBlbXB0eShjbG9uZXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gb2JzZXJ2ZSgpIHtcbiAgICBpZiAoY2xvbmVDb3VudCA8IGNvbXB1dGVDbG9uZUNvdW50KCkpIHtcbiAgICAgIGVtaXQoRVZFTlRfUkVGUkVTSCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGUoY291bnQpIHtcbiAgICB2YXIgc2xpZGVzID0gU2xpZGVzLmdldCgpLnNsaWNlKCk7XG4gICAgdmFyIGxlbmd0aCA9IHNsaWRlcy5sZW5ndGg7XG5cbiAgICBpZiAobGVuZ3RoKSB7XG4gICAgICB3aGlsZSAoc2xpZGVzLmxlbmd0aCA8IGNvdW50KSB7XG4gICAgICAgIHB1c2goc2xpZGVzLCBzbGlkZXMpO1xuICAgICAgfVxuXG4gICAgICBwdXNoKHNsaWRlcy5zbGljZSgtY291bnQpLCBzbGlkZXMuc2xpY2UoMCwgY291bnQpKS5mb3JFYWNoKGZ1bmN0aW9uIChTbGlkZSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGlzSGVhZCA9IGluZGV4IDwgY291bnQ7XG4gICAgICAgIHZhciBjbG9uZSA9IGNsb25lRGVlcChTbGlkZS5zbGlkZSwgaW5kZXgpO1xuICAgICAgICBpc0hlYWQgPyBiZWZvcmUoY2xvbmUsIHNsaWRlc1swXS5zbGlkZSkgOiBhcHBlbmQoRWxlbWVudHMubGlzdCwgY2xvbmUpO1xuICAgICAgICBwdXNoKGNsb25lcywgY2xvbmUpO1xuICAgICAgICBTbGlkZXMucmVnaXN0ZXIoY2xvbmUsIGluZGV4IC0gY291bnQgKyAoaXNIZWFkID8gMCA6IGxlbmd0aCksIFNsaWRlLmluZGV4KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb25lRGVlcChlbG0sIGluZGV4KSB7XG4gICAgdmFyIGNsb25lID0gZWxtLmNsb25lTm9kZSh0cnVlKTtcbiAgICBhZGRDbGFzcyhjbG9uZSwgb3B0aW9ucy5jbGFzc2VzLmNsb25lKTtcbiAgICBjbG9uZS5pZCA9IFNwbGlkZTIucm9vdC5pZCArIFwiLWNsb25lXCIgKyBwYWQoaW5kZXggKyAxKTtcbiAgICByZXR1cm4gY2xvbmU7XG4gIH1cblxuICBmdW5jdGlvbiBjb21wdXRlQ2xvbmVDb3VudCgpIHtcbiAgICB2YXIgY2xvbmVzMiA9IG9wdGlvbnMuY2xvbmVzO1xuXG4gICAgaWYgKCFTcGxpZGUyLmlzKExPT1ApKSB7XG4gICAgICBjbG9uZXMyID0gMDtcbiAgICB9IGVsc2UgaWYgKCFjbG9uZXMyKSB7XG4gICAgICB2YXIgZml4ZWRTaXplID0gb3B0aW9uc1tyZXNvbHZlKFwiZml4ZWRXaWR0aFwiKV0gJiYgQ29tcG9uZW50czIuTGF5b3V0LnNsaWRlU2l6ZSgwKTtcbiAgICAgIHZhciBmaXhlZENvdW50ID0gZml4ZWRTaXplICYmIGNlaWwocmVjdChFbGVtZW50cy50cmFjaylbcmVzb2x2ZShcIndpZHRoXCIpXSAvIGZpeGVkU2l6ZSk7XG4gICAgICBjbG9uZXMyID0gZml4ZWRDb3VudCB8fCBvcHRpb25zW3Jlc29sdmUoXCJhdXRvV2lkdGhcIildICYmIFNwbGlkZTIubGVuZ3RoIHx8IG9wdGlvbnMucGVyUGFnZSAqIE1VTFRJUExJRVI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb25lczI7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1vdW50OiBtb3VudCxcbiAgICBkZXN0cm95OiBkZXN0cm95XG4gIH07XG59XG5cbmZ1bmN0aW9uIE1vdmUoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgdmFyIF9FdmVudEludGVyZmFjZTUgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKSxcbiAgICAgIG9uID0gX0V2ZW50SW50ZXJmYWNlNS5vbixcbiAgICAgIGVtaXQgPSBfRXZlbnRJbnRlcmZhY2U1LmVtaXQ7XG5cbiAgdmFyIHNldCA9IFNwbGlkZTIuc3RhdGUuc2V0O1xuICB2YXIgX0NvbXBvbmVudHMyJExheW91dCA9IENvbXBvbmVudHMyLkxheW91dCxcbiAgICAgIHNsaWRlU2l6ZSA9IF9Db21wb25lbnRzMiRMYXlvdXQuc2xpZGVTaXplLFxuICAgICAgZ2V0UGFkZGluZyA9IF9Db21wb25lbnRzMiRMYXlvdXQuZ2V0UGFkZGluZyxcbiAgICAgIHRvdGFsU2l6ZSA9IF9Db21wb25lbnRzMiRMYXlvdXQudG90YWxTaXplLFxuICAgICAgbGlzdFNpemUgPSBfQ29tcG9uZW50czIkTGF5b3V0Lmxpc3RTaXplLFxuICAgICAgc2xpZGVyU2l6ZSA9IF9Db21wb25lbnRzMiRMYXlvdXQuc2xpZGVyU2l6ZTtcbiAgdmFyIF9Db21wb25lbnRzMiREaXJlY3RpbyA9IENvbXBvbmVudHMyLkRpcmVjdGlvbixcbiAgICAgIHJlc29sdmUgPSBfQ29tcG9uZW50czIkRGlyZWN0aW8ucmVzb2x2ZSxcbiAgICAgIG9yaWVudCA9IF9Db21wb25lbnRzMiREaXJlY3Rpby5vcmllbnQ7XG4gIHZhciBfQ29tcG9uZW50czIkRWxlbWVudHMzID0gQ29tcG9uZW50czIuRWxlbWVudHMsXG4gICAgICBsaXN0ID0gX0NvbXBvbmVudHMyJEVsZW1lbnRzMy5saXN0LFxuICAgICAgdHJhY2sgPSBfQ29tcG9uZW50czIkRWxlbWVudHMzLnRyYWNrO1xuICB2YXIgVHJhbnNpdGlvbjtcblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBUcmFuc2l0aW9uID0gQ29tcG9uZW50czIuVHJhbnNpdGlvbjtcbiAgICBvbihbRVZFTlRfTU9VTlRFRCwgRVZFTlRfUkVTSVpFRCwgRVZFTlRfVVBEQVRFRCwgRVZFTlRfUkVGUkVTSF0sIHJlcG9zaXRpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwb3NpdGlvbigpIHtcbiAgICBpZiAoIUNvbXBvbmVudHMyLkNvbnRyb2xsZXIuaXNCdXN5KCkpIHtcbiAgICAgIENvbXBvbmVudHMyLlNjcm9sbC5jYW5jZWwoKTtcbiAgICAgIGp1bXAoU3BsaWRlMi5pbmRleCk7XG4gICAgICBDb21wb25lbnRzMi5TbGlkZXMudXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbW92ZShkZXN0LCBpbmRleCwgcHJldiwgY2FsbGJhY2spIHtcbiAgICBpZiAoZGVzdCAhPT0gaW5kZXggJiYgY2FuU2hpZnQoZGVzdCA+IHByZXYpKSB7XG4gICAgICBjYW5jZWwoKTtcbiAgICAgIHRyYW5zbGF0ZShzaGlmdChnZXRQb3NpdGlvbigpLCBkZXN0ID4gcHJldiksIHRydWUpO1xuICAgIH1cblxuICAgIHNldChNT1ZJTkcpO1xuICAgIGVtaXQoRVZFTlRfTU9WRSwgaW5kZXgsIHByZXYsIGRlc3QpO1xuICAgIFRyYW5zaXRpb24uc3RhcnQoaW5kZXgsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldChJRExFKTtcbiAgICAgIGVtaXQoRVZFTlRfTU9WRUQsIGluZGV4LCBwcmV2LCBkZXN0KTtcbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBqdW1wKGluZGV4KSB7XG4gICAgdHJhbnNsYXRlKHRvUG9zaXRpb24oaW5kZXgsIHRydWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYW5zbGF0ZShwb3NpdGlvbiwgcHJldmVudExvb3ApIHtcbiAgICBpZiAoIVNwbGlkZTIuaXMoRkFERSkpIHtcbiAgICAgIHZhciBkZXN0aW5hdGlvbiA9IHByZXZlbnRMb29wID8gcG9zaXRpb24gOiBsb29wKHBvc2l0aW9uKTtcbiAgICAgIHN0eWxlKGxpc3QsIFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlXCIgKyByZXNvbHZlKFwiWFwiKSArIFwiKFwiICsgZGVzdGluYXRpb24gKyBcInB4KVwiKTtcbiAgICAgIHBvc2l0aW9uICE9PSBkZXN0aW5hdGlvbiAmJiBlbWl0KEVWRU5UX1NISUZURUQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGxvb3AocG9zaXRpb24pIHtcbiAgICBpZiAoU3BsaWRlMi5pcyhMT09QKSkge1xuICAgICAgdmFyIGluZGV4ID0gdG9JbmRleChwb3NpdGlvbik7XG4gICAgICB2YXIgZXhjZWVkZWRNYXggPSBpbmRleCA+IENvbXBvbmVudHMyLkNvbnRyb2xsZXIuZ2V0RW5kKCk7XG4gICAgICB2YXIgZXhjZWVkZWRNaW4gPSBpbmRleCA8IDA7XG5cbiAgICAgIGlmIChleGNlZWRlZE1pbiB8fCBleGNlZWRlZE1heCkge1xuICAgICAgICBwb3NpdGlvbiA9IHNoaWZ0KHBvc2l0aW9uLCBleGNlZWRlZE1heCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hpZnQocG9zaXRpb24sIGJhY2t3YXJkcykge1xuICAgIHZhciBleGNlc3MgPSBwb3NpdGlvbiAtIGdldExpbWl0KGJhY2t3YXJkcyk7XG4gICAgdmFyIHNpemUgPSBzbGlkZXJTaXplKCk7XG4gICAgcG9zaXRpb24gLT0gb3JpZW50KHNpemUgKiAoY2VpbChhYnMoZXhjZXNzKSAvIHNpemUpIHx8IDEpKSAqIChiYWNrd2FyZHMgPyAxIDogLTEpO1xuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICB0cmFuc2xhdGUoZ2V0UG9zaXRpb24oKSk7XG4gICAgVHJhbnNpdGlvbi5jYW5jZWwoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvSW5kZXgocG9zaXRpb24pIHtcbiAgICB2YXIgU2xpZGVzID0gQ29tcG9uZW50czIuU2xpZGVzLmdldCgpO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIG1pbkRpc3RhbmNlID0gSW5maW5pdHk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IFNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNsaWRlSW5kZXggPSBTbGlkZXNbaV0uaW5kZXg7XG4gICAgICB2YXIgZGlzdGFuY2UgPSBhYnModG9Qb3NpdGlvbihzbGlkZUluZGV4LCB0cnVlKSAtIHBvc2l0aW9uKTtcblxuICAgICAgaWYgKGRpc3RhbmNlIDw9IG1pbkRpc3RhbmNlKSB7XG4gICAgICAgIG1pbkRpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgICAgIGluZGV4ID0gc2xpZGVJbmRleDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvUG9zaXRpb24oaW5kZXgsIHRyaW1taW5nKSB7XG4gICAgdmFyIHBvc2l0aW9uID0gb3JpZW50KHRvdGFsU2l6ZShpbmRleCAtIDEpIC0gb2Zmc2V0KGluZGV4KSk7XG4gICAgcmV0dXJuIHRyaW1taW5nID8gdHJpbShwb3NpdGlvbikgOiBwb3NpdGlvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFBvc2l0aW9uKCkge1xuICAgIHZhciBsZWZ0ID0gcmVzb2x2ZShcImxlZnRcIik7XG4gICAgcmV0dXJuIHJlY3QobGlzdClbbGVmdF0gLSByZWN0KHRyYWNrKVtsZWZ0XSArIG9yaWVudChnZXRQYWRkaW5nKGZhbHNlKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmltKHBvc2l0aW9uKSB7XG4gICAgaWYgKG9wdGlvbnMudHJpbVNwYWNlICYmIFNwbGlkZTIuaXMoU0xJREUpKSB7XG4gICAgICBwb3NpdGlvbiA9IGNsYW1wKHBvc2l0aW9uLCAwLCBvcmllbnQoc2xpZGVyU2l6ZSgpIC0gbGlzdFNpemUoKSkpO1xuICAgIH1cblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9mZnNldChpbmRleCkge1xuICAgIHZhciBmb2N1cyA9IG9wdGlvbnMuZm9jdXM7XG4gICAgcmV0dXJuIGZvY3VzID09PSBcImNlbnRlclwiID8gKGxpc3RTaXplKCkgLSBzbGlkZVNpemUoaW5kZXgsIHRydWUpKSAvIDIgOiArZm9jdXMgKiBzbGlkZVNpemUoaW5kZXgpIHx8IDA7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRMaW1pdChtYXgpIHtcbiAgICByZXR1cm4gdG9Qb3NpdGlvbihtYXggPyBDb21wb25lbnRzMi5Db250cm9sbGVyLmdldEVuZCgpIDogMCwgISFvcHRpb25zLnRyaW1TcGFjZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5TaGlmdChiYWNrd2FyZHMpIHtcbiAgICB2YXIgc2hpZnRlZCA9IG9yaWVudChzaGlmdChnZXRQb3NpdGlvbigpLCBiYWNrd2FyZHMpKTtcbiAgICByZXR1cm4gYmFja3dhcmRzID8gc2hpZnRlZCA+PSAwIDogc2hpZnRlZCA8PSBsaXN0W3Jlc29sdmUoXCJzY3JvbGxXaWR0aFwiKV0gLSByZWN0KHRyYWNrKVtyZXNvbHZlKFwid2lkdGhcIildO1xuICB9XG5cbiAgZnVuY3Rpb24gZXhjZWVkZWRMaW1pdChtYXgsIHBvc2l0aW9uKSB7XG4gICAgcG9zaXRpb24gPSBpc1VuZGVmaW5lZChwb3NpdGlvbikgPyBnZXRQb3NpdGlvbigpIDogcG9zaXRpb247XG4gICAgdmFyIGV4Y2VlZGVkTWluID0gbWF4ICE9PSB0cnVlICYmIG9yaWVudChwb3NpdGlvbikgPCBvcmllbnQoZ2V0TGltaXQoZmFsc2UpKTtcbiAgICB2YXIgZXhjZWVkZWRNYXggPSBtYXggIT09IGZhbHNlICYmIG9yaWVudChwb3NpdGlvbikgPiBvcmllbnQoZ2V0TGltaXQodHJ1ZSkpO1xuICAgIHJldHVybiBleGNlZWRlZE1pbiB8fCBleGNlZWRlZE1heDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbW91bnQ6IG1vdW50LFxuICAgIG1vdmU6IG1vdmUsXG4gICAganVtcDoganVtcCxcbiAgICB0cmFuc2xhdGU6IHRyYW5zbGF0ZSxcbiAgICBzaGlmdDogc2hpZnQsXG4gICAgY2FuY2VsOiBjYW5jZWwsXG4gICAgdG9JbmRleDogdG9JbmRleCxcbiAgICB0b1Bvc2l0aW9uOiB0b1Bvc2l0aW9uLFxuICAgIGdldFBvc2l0aW9uOiBnZXRQb3NpdGlvbixcbiAgICBnZXRMaW1pdDogZ2V0TGltaXQsXG4gICAgZXhjZWVkZWRMaW1pdDogZXhjZWVkZWRMaW1pdCxcbiAgICByZXBvc2l0aW9uOiByZXBvc2l0aW9uXG4gIH07XG59XG5cbmZ1bmN0aW9uIENvbnRyb2xsZXIoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgdmFyIF9FdmVudEludGVyZmFjZTYgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKSxcbiAgICAgIG9uID0gX0V2ZW50SW50ZXJmYWNlNi5vbjtcblxuICB2YXIgTW92ZSA9IENvbXBvbmVudHMyLk1vdmU7XG4gIHZhciBnZXRQb3NpdGlvbiA9IE1vdmUuZ2V0UG9zaXRpb24sXG4gICAgICBnZXRMaW1pdCA9IE1vdmUuZ2V0TGltaXQsXG4gICAgICB0b1Bvc2l0aW9uID0gTW92ZS50b1Bvc2l0aW9uO1xuICB2YXIgX0NvbXBvbmVudHMyJFNsaWRlcyA9IENvbXBvbmVudHMyLlNsaWRlcyxcbiAgICAgIGlzRW5vdWdoID0gX0NvbXBvbmVudHMyJFNsaWRlcy5pc0Vub3VnaCxcbiAgICAgIGdldExlbmd0aCA9IF9Db21wb25lbnRzMiRTbGlkZXMuZ2V0TGVuZ3RoO1xuICB2YXIgaXNMb29wID0gU3BsaWRlMi5pcyhMT09QKTtcbiAgdmFyIGlzU2xpZGUgPSBTcGxpZGUyLmlzKFNMSURFKTtcbiAgdmFyIGdldE5leHQgPSBhcHBseShnZXRBZGphY2VudCwgZmFsc2UpO1xuICB2YXIgZ2V0UHJldiA9IGFwcGx5KGdldEFkamFjZW50LCB0cnVlKTtcbiAgdmFyIGN1cnJJbmRleCA9IG9wdGlvbnMuc3RhcnQgfHwgMDtcbiAgdmFyIHByZXZJbmRleCA9IGN1cnJJbmRleDtcbiAgdmFyIHNsaWRlQ291bnQ7XG4gIHZhciBwZXJNb3ZlO1xuICB2YXIgcGVyUGFnZTtcblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBpbml0KCk7XG4gICAgb24oW0VWRU5UX1VQREFURUQsIEVWRU5UX1JFRlJFU0hdLCBpbml0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgc2xpZGVDb3VudCA9IGdldExlbmd0aCh0cnVlKTtcbiAgICBwZXJNb3ZlID0gb3B0aW9ucy5wZXJNb3ZlO1xuICAgIHBlclBhZ2UgPSBvcHRpb25zLnBlclBhZ2U7XG4gICAgdmFyIGluZGV4ID0gY2xhbXAoY3VyckluZGV4LCAwLCBzbGlkZUNvdW50IC0gMSk7XG5cbiAgICBpZiAoaW5kZXggIT09IGN1cnJJbmRleCkge1xuICAgICAgY3VyckluZGV4ID0gaW5kZXg7XG4gICAgICBNb3ZlLnJlcG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnbyhjb250cm9sLCBhbGxvd1NhbWVJbmRleCwgY2FsbGJhY2spIHtcbiAgICBpZiAoIWlzQnVzeSgpKSB7XG4gICAgICB2YXIgZGVzdCA9IHBhcnNlKGNvbnRyb2wpO1xuICAgICAgdmFyIGluZGV4ID0gbG9vcChkZXN0KTtcblxuICAgICAgaWYgKGluZGV4ID4gLTEgJiYgKGFsbG93U2FtZUluZGV4IHx8IGluZGV4ICE9PSBjdXJySW5kZXgpKSB7XG4gICAgICAgIHNldEluZGV4KGluZGV4KTtcbiAgICAgICAgTW92ZS5tb3ZlKGRlc3QsIGluZGV4LCBwcmV2SW5kZXgsIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzY3JvbGwoZGVzdGluYXRpb24sIGR1cmF0aW9uLCBzbmFwLCBjYWxsYmFjaykge1xuICAgIENvbXBvbmVudHMyLlNjcm9sbC5zY3JvbGwoZGVzdGluYXRpb24sIGR1cmF0aW9uLCBzbmFwLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZXRJbmRleChsb29wKE1vdmUudG9JbmRleChnZXRQb3NpdGlvbigpKSkpO1xuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlKGNvbnRyb2wpIHtcbiAgICB2YXIgaW5kZXggPSBjdXJySW5kZXg7XG5cbiAgICBpZiAoaXNTdHJpbmcoY29udHJvbCkpIHtcbiAgICAgIHZhciBfcmVmID0gY29udHJvbC5tYXRjaCgvKFsrXFwtPD5dKShcXGQrKT8vKSB8fCBbXSxcbiAgICAgICAgICBpbmRpY2F0b3IgPSBfcmVmWzFdLFxuICAgICAgICAgIG51bWJlciA9IF9yZWZbMl07XG5cbiAgICAgIGlmIChpbmRpY2F0b3IgPT09IFwiK1wiIHx8IGluZGljYXRvciA9PT0gXCItXCIpIHtcbiAgICAgICAgaW5kZXggPSBjb21wdXRlRGVzdEluZGV4KGN1cnJJbmRleCArICsoXCJcIiArIGluZGljYXRvciArICgrbnVtYmVyIHx8IDEpKSwgY3VyckluZGV4KTtcbiAgICAgIH0gZWxzZSBpZiAoaW5kaWNhdG9yID09PSBcIj5cIikge1xuICAgICAgICBpbmRleCA9IG51bWJlciA/IHRvSW5kZXgoK251bWJlcikgOiBnZXROZXh0KHRydWUpO1xuICAgICAgfSBlbHNlIGlmIChpbmRpY2F0b3IgPT09IFwiPFwiKSB7XG4gICAgICAgIGluZGV4ID0gZ2V0UHJldih0cnVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaW5kZXggPSBpc0xvb3AgPyBjb250cm9sIDogY2xhbXAoY29udHJvbCwgMCwgZ2V0RW5kKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFkamFjZW50KHByZXYsIGRlc3RpbmF0aW9uKSB7XG4gICAgdmFyIG51bWJlciA9IHBlck1vdmUgfHwgKGhhc0ZvY3VzKCkgPyAxIDogcGVyUGFnZSk7XG4gICAgdmFyIGRlc3QgPSBjb21wdXRlRGVzdEluZGV4KGN1cnJJbmRleCArIG51bWJlciAqIChwcmV2ID8gLTEgOiAxKSwgY3VyckluZGV4LCAhKHBlck1vdmUgfHwgaGFzRm9jdXMoKSkpO1xuXG4gICAgaWYgKGRlc3QgPT09IC0xICYmIGlzU2xpZGUpIHtcbiAgICAgIGlmICghYXBwcm94aW1hdGVseUVxdWFsKGdldFBvc2l0aW9uKCksIGdldExpbWl0KCFwcmV2KSwgMSkpIHtcbiAgICAgICAgcmV0dXJuIHByZXYgPyAwIDogZ2V0RW5kKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uID8gZGVzdCA6IGxvb3AoZGVzdCk7XG4gIH1cblxuICBmdW5jdGlvbiBjb21wdXRlRGVzdEluZGV4KGRlc3QsIGZyb20sIHNuYXBQYWdlKSB7XG4gICAgaWYgKGlzRW5vdWdoKCkpIHtcbiAgICAgIHZhciBlbmQgPSBnZXRFbmQoKTtcbiAgICAgIHZhciBpbmRleCA9IGNvbXB1dGVNb3ZhYmxlRGVzdEluZGV4KGRlc3QpO1xuXG4gICAgICBpZiAoaW5kZXggIT09IGRlc3QpIHtcbiAgICAgICAgZnJvbSA9IGRlc3Q7XG4gICAgICAgIGRlc3QgPSBpbmRleDtcbiAgICAgICAgc25hcFBhZ2UgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRlc3QgPCAwIHx8IGRlc3QgPiBlbmQpIHtcbiAgICAgICAgaWYgKGJldHdlZW4oMCwgZGVzdCwgZnJvbSwgdHJ1ZSkgfHwgYmV0d2VlbihlbmQsIGZyb20sIGRlc3QsIHRydWUpKSB7XG4gICAgICAgICAgZGVzdCA9IHRvSW5kZXgodG9QYWdlKGRlc3QpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoaXNMb29wKSB7XG4gICAgICAgICAgICBkZXN0ID0gc25hcFBhZ2UgPyBkZXN0IDwgMCA/IC0oc2xpZGVDb3VudCAlIHBlclBhZ2UgfHwgcGVyUGFnZSkgOiBzbGlkZUNvdW50IDogZGVzdDtcbiAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMucmV3aW5kKSB7XG4gICAgICAgICAgICBkZXN0ID0gZGVzdCA8IDAgPyBlbmQgOiAwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXN0ID0gLTE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc25hcFBhZ2UgJiYgZGVzdCAhPT0gZnJvbSkge1xuICAgICAgICAgIGRlc3QgPSB0b0luZGV4KHRvUGFnZShmcm9tKSArIChkZXN0IDwgZnJvbSA/IC0xIDogMSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlc3QgPSAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVzdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXB1dGVNb3ZhYmxlRGVzdEluZGV4KGRlc3QpIHtcbiAgICBpZiAoaXNTbGlkZSAmJiBvcHRpb25zLnRyaW1TcGFjZSA9PT0gXCJtb3ZlXCIgJiYgZGVzdCAhPT0gY3VyckluZGV4KSB7XG4gICAgICB2YXIgcG9zaXRpb24gPSBnZXRQb3NpdGlvbigpO1xuXG4gICAgICB3aGlsZSAocG9zaXRpb24gPT09IHRvUG9zaXRpb24oZGVzdCwgdHJ1ZSkgJiYgYmV0d2VlbihkZXN0LCAwLCBTcGxpZGUyLmxlbmd0aCAtIDEsICFvcHRpb25zLnJld2luZCkpIHtcbiAgICAgICAgZGVzdCA8IGN1cnJJbmRleCA/IC0tZGVzdCA6ICsrZGVzdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVzdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvb3AoaW5kZXgpIHtcbiAgICByZXR1cm4gaXNMb29wID8gKGluZGV4ICsgc2xpZGVDb3VudCkgJSBzbGlkZUNvdW50IHx8IDAgOiBpbmRleDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEVuZCgpIHtcbiAgICByZXR1cm4gbWF4KHNsaWRlQ291bnQgLSAoaGFzRm9jdXMoKSB8fCBpc0xvb3AgJiYgcGVyTW92ZSA/IDEgOiBwZXJQYWdlKSwgMCk7XG4gIH1cblxuICBmdW5jdGlvbiB0b0luZGV4KHBhZ2UpIHtcbiAgICByZXR1cm4gY2xhbXAoaGFzRm9jdXMoKSA/IHBhZ2UgOiBwZXJQYWdlICogcGFnZSwgMCwgZ2V0RW5kKCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9QYWdlKGluZGV4KSB7XG4gICAgcmV0dXJuIGhhc0ZvY3VzKCkgPyBpbmRleCA6IGZsb29yKChpbmRleCA+PSBnZXRFbmQoKSA/IHNsaWRlQ291bnQgLSAxIDogaW5kZXgpIC8gcGVyUGFnZSk7XG4gIH1cblxuICBmdW5jdGlvbiB0b0Rlc3QoZGVzdGluYXRpb24pIHtcbiAgICB2YXIgY2xvc2VzdCA9IE1vdmUudG9JbmRleChkZXN0aW5hdGlvbik7XG4gICAgcmV0dXJuIGlzU2xpZGUgPyBjbGFtcChjbG9zZXN0LCAwLCBnZXRFbmQoKSkgOiBjbG9zZXN0O1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0SW5kZXgoaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggIT09IGN1cnJJbmRleCkge1xuICAgICAgcHJldkluZGV4ID0gY3VyckluZGV4O1xuICAgICAgY3VyckluZGV4ID0gaW5kZXg7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SW5kZXgocHJldikge1xuICAgIHJldHVybiBwcmV2ID8gcHJldkluZGV4IDogY3VyckluZGV4O1xuICB9XG5cbiAgZnVuY3Rpb24gaGFzRm9jdXMoKSB7XG4gICAgcmV0dXJuICFpc1VuZGVmaW5lZChvcHRpb25zLmZvY3VzKSB8fCBvcHRpb25zLmlzTmF2aWdhdGlvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQnVzeSgpIHtcbiAgICByZXR1cm4gU3BsaWRlMi5zdGF0ZS5pcyhbTU9WSU5HLCBTQ1JPTExJTkddKSAmJiAhIW9wdGlvbnMud2FpdEZvclRyYW5zaXRpb247XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1vdW50OiBtb3VudCxcbiAgICBnbzogZ28sXG4gICAgc2Nyb2xsOiBzY3JvbGwsXG4gICAgZ2V0TmV4dDogZ2V0TmV4dCxcbiAgICBnZXRQcmV2OiBnZXRQcmV2LFxuICAgIGdldEFkamFjZW50OiBnZXRBZGphY2VudCxcbiAgICBnZXRFbmQ6IGdldEVuZCxcbiAgICBzZXRJbmRleDogc2V0SW5kZXgsXG4gICAgZ2V0SW5kZXg6IGdldEluZGV4LFxuICAgIHRvSW5kZXg6IHRvSW5kZXgsXG4gICAgdG9QYWdlOiB0b1BhZ2UsXG4gICAgdG9EZXN0OiB0b0Rlc3QsXG4gICAgaGFzRm9jdXM6IGhhc0ZvY3VzLFxuICAgIGlzQnVzeTogaXNCdXN5XG4gIH07XG59XG5cbnZhciBYTUxfTkFNRV9TUEFDRSA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcbnZhciBQQVRIID0gXCJtMTUuNSAwLjkzMi00LjMgNC4zOCAxNC41IDE0LjYtMTQuNSAxNC41IDQuMyA0LjQgMTQuNi0xNC42IDQuNC00LjMtNC40LTQuNC0xNC42LTE0LjZ6XCI7XG52YXIgU0laRSA9IDQwO1xuXG5mdW5jdGlvbiBBcnJvd3MoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgdmFyIGV2ZW50ID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMik7XG4gIHZhciBvbiA9IGV2ZW50Lm9uLFxuICAgICAgYmluZCA9IGV2ZW50LmJpbmQsXG4gICAgICBlbWl0ID0gZXZlbnQuZW1pdDtcbiAgdmFyIGNsYXNzZXMgPSBvcHRpb25zLmNsYXNzZXMsXG4gICAgICBpMThuID0gb3B0aW9ucy5pMThuO1xuICB2YXIgRWxlbWVudHMgPSBDb21wb25lbnRzMi5FbGVtZW50cyxcbiAgICAgIENvbnRyb2xsZXIgPSBDb21wb25lbnRzMi5Db250cm9sbGVyO1xuICB2YXIgdXNlckFycm93cyA9IEVsZW1lbnRzLmFycm93cyxcbiAgICAgIHRyYWNrID0gRWxlbWVudHMudHJhY2s7XG4gIHZhciB3cmFwcGVyID0gdXNlckFycm93cztcbiAgdmFyIHByZXYgPSBFbGVtZW50cy5wcmV2O1xuICB2YXIgbmV4dCA9IEVsZW1lbnRzLm5leHQ7XG4gIHZhciBjcmVhdGVkO1xuICB2YXIgd3JhcHBlckNsYXNzZXM7XG4gIHZhciBhcnJvd3MgPSB7fTtcblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBpbml0KCk7XG4gICAgb24oRVZFTlRfVVBEQVRFRCwgcmVtb3VudCk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdW50KCkge1xuICAgIGRlc3Ryb3koKTtcbiAgICBtb3VudCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB2YXIgZW5hYmxlZCA9IG9wdGlvbnMuYXJyb3dzO1xuXG4gICAgaWYgKGVuYWJsZWQgJiYgIShwcmV2ICYmIG5leHQpKSB7XG4gICAgICBjcmVhdGVBcnJvd3MoKTtcbiAgICB9XG5cbiAgICBpZiAocHJldiAmJiBuZXh0KSB7XG4gICAgICBhc3NpZ24oYXJyb3dzLCB7XG4gICAgICAgIHByZXY6IHByZXYsXG4gICAgICAgIG5leHQ6IG5leHRcbiAgICAgIH0pO1xuICAgICAgZGlzcGxheSh3cmFwcGVyLCBlbmFibGVkID8gXCJcIiA6IFwibm9uZVwiKTtcbiAgICAgIGFkZENsYXNzKHdyYXBwZXIsIHdyYXBwZXJDbGFzc2VzID0gQ0xBU1NfQVJST1dTICsgXCItLVwiICsgb3B0aW9ucy5kaXJlY3Rpb24pO1xuXG4gICAgICBpZiAoZW5hYmxlZCkge1xuICAgICAgICBsaXN0ZW4oKTtcbiAgICAgICAgdXBkYXRlKCk7XG4gICAgICAgIHNldEF0dHJpYnV0ZShbcHJldiwgbmV4dF0sIEFSSUFfQ09OVFJPTFMsIHRyYWNrLmlkKTtcbiAgICAgICAgZW1pdChFVkVOVF9BUlJPV1NfTU9VTlRFRCwgcHJldiwgbmV4dCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBldmVudC5kZXN0cm95KCk7XG4gICAgcmVtb3ZlQ2xhc3Mod3JhcHBlciwgd3JhcHBlckNsYXNzZXMpO1xuXG4gICAgaWYgKGNyZWF0ZWQpIHtcbiAgICAgIHJlbW92ZSh1c2VyQXJyb3dzID8gW3ByZXYsIG5leHRdIDogd3JhcHBlcik7XG4gICAgICBwcmV2ID0gbmV4dCA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZUF0dHJpYnV0ZShbcHJldiwgbmV4dF0sIEFMTF9BVFRSSUJVVEVTKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBsaXN0ZW4oKSB7XG4gICAgb24oW0VWRU5UX01PVkVELCBFVkVOVF9SRUZSRVNILCBFVkVOVF9TQ1JPTExFRF0sIHVwZGF0ZSk7XG4gICAgYmluZChuZXh0LCBcImNsaWNrXCIsIGFwcGx5KGdvLCBcIj5cIikpO1xuICAgIGJpbmQocHJldiwgXCJjbGlja1wiLCBhcHBseShnbywgXCI8XCIpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvKGNvbnRyb2wpIHtcbiAgICBDb250cm9sbGVyLmdvKGNvbnRyb2wsIHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyb3dzKCkge1xuICAgIHdyYXBwZXIgPSB1c2VyQXJyb3dzIHx8IGNyZWF0ZShcImRpdlwiLCBjbGFzc2VzLmFycm93cyk7XG4gICAgcHJldiA9IGNyZWF0ZUFycm93KHRydWUpO1xuICAgIG5leHQgPSBjcmVhdGVBcnJvdyhmYWxzZSk7XG4gICAgY3JlYXRlZCA9IHRydWU7XG4gICAgYXBwZW5kKHdyYXBwZXIsIFtwcmV2LCBuZXh0XSk7XG4gICAgIXVzZXJBcnJvd3MgJiYgYmVmb3JlKHdyYXBwZXIsIHRyYWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycm93KHByZXYyKSB7XG4gICAgdmFyIGFycm93ID0gXCI8YnV0dG9uIGNsYXNzPVxcXCJcIiArIGNsYXNzZXMuYXJyb3cgKyBcIiBcIiArIChwcmV2MiA/IGNsYXNzZXMucHJldiA6IGNsYXNzZXMubmV4dCkgKyBcIlxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj48c3ZnIHhtbG5zPVxcXCJcIiArIFhNTF9OQU1FX1NQQUNFICsgXCJcXFwiIHZpZXdCb3g9XFxcIjAgMCBcIiArIFNJWkUgKyBcIiBcIiArIFNJWkUgKyBcIlxcXCIgd2lkdGg9XFxcIlwiICsgU0laRSArIFwiXFxcIiBoZWlnaHQ9XFxcIlwiICsgU0laRSArIFwiXFxcIiBmb2N1c2FibGU9XFxcImZhbHNlXFxcIj48cGF0aCBkPVxcXCJcIiArIChvcHRpb25zLmFycm93UGF0aCB8fCBQQVRIKSArIFwiXFxcIiAvPlwiO1xuICAgIHJldHVybiBwYXJzZUh0bWwoYXJyb3cpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBpbmRleCA9IFNwbGlkZTIuaW5kZXg7XG4gICAgdmFyIHByZXZJbmRleCA9IENvbnRyb2xsZXIuZ2V0UHJldigpO1xuICAgIHZhciBuZXh0SW5kZXggPSBDb250cm9sbGVyLmdldE5leHQoKTtcbiAgICB2YXIgcHJldkxhYmVsID0gcHJldkluZGV4ID4gLTEgJiYgaW5kZXggPCBwcmV2SW5kZXggPyBpMThuLmxhc3QgOiBpMThuLnByZXY7XG4gICAgdmFyIG5leHRMYWJlbCA9IG5leHRJbmRleCA+IC0xICYmIGluZGV4ID4gbmV4dEluZGV4ID8gaTE4bi5maXJzdCA6IGkxOG4ubmV4dDtcbiAgICBwcmV2LmRpc2FibGVkID0gcHJldkluZGV4IDwgMDtcbiAgICBuZXh0LmRpc2FibGVkID0gbmV4dEluZGV4IDwgMDtcbiAgICBzZXRBdHRyaWJ1dGUocHJldiwgQVJJQV9MQUJFTCwgcHJldkxhYmVsKTtcbiAgICBzZXRBdHRyaWJ1dGUobmV4dCwgQVJJQV9MQUJFTCwgbmV4dExhYmVsKTtcbiAgICBlbWl0KEVWRU5UX0FSUk9XU19VUERBVEVELCBwcmV2LCBuZXh0LCBwcmV2SW5kZXgsIG5leHRJbmRleCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGFycm93czogYXJyb3dzLFxuICAgIG1vdW50OiBtb3VudCxcbiAgICBkZXN0cm95OiBkZXN0cm95XG4gIH07XG59XG5cbnZhciBJTlRFUlZBTF9EQVRBX0FUVFJJQlVURSA9IERBVEFfQVRUUklCVVRFICsgXCItaW50ZXJ2YWxcIjtcblxuZnVuY3Rpb24gQXV0b3BsYXkoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgdmFyIF9FdmVudEludGVyZmFjZTcgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKSxcbiAgICAgIG9uID0gX0V2ZW50SW50ZXJmYWNlNy5vbixcbiAgICAgIGJpbmQgPSBfRXZlbnRJbnRlcmZhY2U3LmJpbmQsXG4gICAgICBlbWl0ID0gX0V2ZW50SW50ZXJmYWNlNy5lbWl0O1xuXG4gIHZhciBpbnRlcnZhbCA9IFJlcXVlc3RJbnRlcnZhbChvcHRpb25zLmludGVydmFsLCBTcGxpZGUyLmdvLmJpbmQoU3BsaWRlMiwgXCI+XCIpLCBvbkFuaW1hdGlvbkZyYW1lKTtcbiAgdmFyIGlzUGF1c2VkID0gaW50ZXJ2YWwuaXNQYXVzZWQ7XG4gIHZhciBFbGVtZW50cyA9IENvbXBvbmVudHMyLkVsZW1lbnRzLFxuICAgICAgX0NvbXBvbmVudHMyJEVsZW1lbnRzNCA9IENvbXBvbmVudHMyLkVsZW1lbnRzLFxuICAgICAgcm9vdCA9IF9Db21wb25lbnRzMiRFbGVtZW50czQucm9vdCxcbiAgICAgIHRvZ2dsZSA9IF9Db21wb25lbnRzMiRFbGVtZW50czQudG9nZ2xlO1xuICB2YXIgYXV0b3BsYXkgPSBvcHRpb25zLmF1dG9wbGF5O1xuICB2YXIgaG92ZXJlZDtcbiAgdmFyIGZvY3VzZWQ7XG4gIHZhciBzdG9wcGVkID0gYXV0b3BsYXkgPT09IFwicGF1c2VcIjtcblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBpZiAoYXV0b3BsYXkpIHtcbiAgICAgIGxpc3RlbigpO1xuICAgICAgdG9nZ2xlICYmIHNldEF0dHJpYnV0ZSh0b2dnbGUsIEFSSUFfQ09OVFJPTFMsIEVsZW1lbnRzLnRyYWNrLmlkKTtcbiAgICAgIHN0b3BwZWQgfHwgcGxheSgpO1xuICAgICAgdXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbGlzdGVuKCkge1xuICAgIGlmIChvcHRpb25zLnBhdXNlT25Ib3Zlcikge1xuICAgICAgYmluZChyb290LCBcIm1vdXNlZW50ZXIgbW91c2VsZWF2ZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBob3ZlcmVkID0gZS50eXBlID09PSBcIm1vdXNlZW50ZXJcIjtcbiAgICAgICAgYXV0b1RvZ2dsZSgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMucGF1c2VPbkZvY3VzKSB7XG4gICAgICBiaW5kKHJvb3QsIFwiZm9jdXNpbiBmb2N1c291dFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBmb2N1c2VkID0gZS50eXBlID09PSBcImZvY3VzaW5cIjtcbiAgICAgICAgYXV0b1RvZ2dsZSgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRvZ2dsZSkge1xuICAgICAgYmluZCh0b2dnbGUsIFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBzdG9wcGVkID8gcGxheSgpIDogcGF1c2UodHJ1ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBvbihbRVZFTlRfTU9WRSwgRVZFTlRfU0NST0xMLCBFVkVOVF9SRUZSRVNIXSwgaW50ZXJ2YWwucmV3aW5kKTtcbiAgICBvbihFVkVOVF9NT1ZFLCBvbk1vdmUpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxheSgpIHtcbiAgICBpZiAoaXNQYXVzZWQoKSAmJiBDb21wb25lbnRzMi5TbGlkZXMuaXNFbm91Z2goKSkge1xuICAgICAgaW50ZXJ2YWwuc3RhcnQoIW9wdGlvbnMucmVzZXRQcm9ncmVzcyk7XG4gICAgICBmb2N1c2VkID0gaG92ZXJlZCA9IHN0b3BwZWQgPSBmYWxzZTtcbiAgICAgIHVwZGF0ZSgpO1xuICAgICAgZW1pdChFVkVOVF9BVVRPUExBWV9QTEFZKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwYXVzZShzdG9wKSB7XG4gICAgaWYgKHN0b3AgPT09IHZvaWQgMCkge1xuICAgICAgc3RvcCA9IHRydWU7XG4gICAgfVxuXG4gICAgc3RvcHBlZCA9ICEhc3RvcDtcbiAgICB1cGRhdGUoKTtcblxuICAgIGlmICghaXNQYXVzZWQoKSkge1xuICAgICAgaW50ZXJ2YWwucGF1c2UoKTtcbiAgICAgIGVtaXQoRVZFTlRfQVVUT1BMQVlfUEFVU0UpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGF1dG9Ub2dnbGUoKSB7XG4gICAgaWYgKCFzdG9wcGVkKSB7XG4gICAgICBob3ZlcmVkIHx8IGZvY3VzZWQgPyBwYXVzZShmYWxzZSkgOiBwbGF5KCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIGlmICh0b2dnbGUpIHtcbiAgICAgIHRvZ2dsZUNsYXNzKHRvZ2dsZSwgQ0xBU1NfQUNUSVZFLCAhc3RvcHBlZCk7XG4gICAgICBzZXRBdHRyaWJ1dGUodG9nZ2xlLCBBUklBX0xBQkVMLCBvcHRpb25zLmkxOG5bc3RvcHBlZCA/IFwicGxheVwiIDogXCJwYXVzZVwiXSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25BbmltYXRpb25GcmFtZShyYXRlKSB7XG4gICAgdmFyIGJhciA9IEVsZW1lbnRzLmJhcjtcbiAgICBiYXIgJiYgc3R5bGUoYmFyLCBcIndpZHRoXCIsIHJhdGUgKiAxMDAgKyBcIiVcIik7XG4gICAgZW1pdChFVkVOVF9BVVRPUExBWV9QTEFZSU5HLCByYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTW92ZShpbmRleCkge1xuICAgIHZhciBTbGlkZSA9IENvbXBvbmVudHMyLlNsaWRlcy5nZXRBdChpbmRleCk7XG4gICAgaW50ZXJ2YWwuc2V0KFNsaWRlICYmICtnZXRBdHRyaWJ1dGUoU2xpZGUuc2xpZGUsIElOVEVSVkFMX0RBVEFfQVRUUklCVVRFKSB8fCBvcHRpb25zLmludGVydmFsKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbW91bnQ6IG1vdW50LFxuICAgIGRlc3Ryb3k6IGludGVydmFsLmNhbmNlbCxcbiAgICBwbGF5OiBwbGF5LFxuICAgIHBhdXNlOiBwYXVzZSxcbiAgICBpc1BhdXNlZDogaXNQYXVzZWRcbiAgfTtcbn1cblxuZnVuY3Rpb24gQ292ZXIoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgdmFyIF9FdmVudEludGVyZmFjZTggPSBFdmVudEludGVyZmFjZShTcGxpZGUyKSxcbiAgICAgIG9uID0gX0V2ZW50SW50ZXJmYWNlOC5vbjtcblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBpZiAob3B0aW9ucy5jb3Zlcikge1xuICAgICAgb24oRVZFTlRfTEFaWUxPQURfTE9BREVELCBhcHBseSh0b2dnbGUsIHRydWUpKTtcbiAgICAgIG9uKFtFVkVOVF9NT1VOVEVELCBFVkVOVF9VUERBVEVELCBFVkVOVF9SRUZSRVNIXSwgYXBwbHkoY292ZXIsIHRydWUpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjb3Zlcihjb3ZlcjIpIHtcbiAgICBDb21wb25lbnRzMi5TbGlkZXMuZm9yRWFjaChmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgIHZhciBpbWcgPSBjaGlsZChTbGlkZS5jb250YWluZXIgfHwgU2xpZGUuc2xpZGUsIFwiaW1nXCIpO1xuXG4gICAgICBpZiAoaW1nICYmIGltZy5zcmMpIHtcbiAgICAgICAgdG9nZ2xlKGNvdmVyMiwgaW1nLCBTbGlkZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGUoY292ZXIyLCBpbWcsIFNsaWRlKSB7XG4gICAgU2xpZGUuc3R5bGUoXCJiYWNrZ3JvdW5kXCIsIGNvdmVyMiA/IFwiY2VudGVyL2NvdmVyIG5vLXJlcGVhdCB1cmwoXFxcIlwiICsgaW1nLnNyYyArIFwiXFxcIilcIiA6IFwiXCIsIHRydWUpO1xuICAgIGRpc3BsYXkoaW1nLCBjb3ZlcjIgPyBcIm5vbmVcIiA6IFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtb3VudDogbW91bnQsXG4gICAgZGVzdHJveTogYXBwbHkoY292ZXIsIGZhbHNlKVxuICB9O1xufVxuXG52YXIgQk9VTkNFX0RJRkZfVEhSRVNIT0xEID0gMTA7XG52YXIgQk9VTkNFX0RVUkFUSU9OID0gNjAwO1xudmFyIEZSSUNUSU9OX0ZBQ1RPUiA9IDAuNjtcbnZhciBCQVNFX1ZFTE9DSVRZID0gMS41O1xudmFyIE1JTl9EVVJBVElPTiA9IDgwMDtcblxuZnVuY3Rpb24gU2Nyb2xsKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBfRXZlbnRJbnRlcmZhY2U5ID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMiksXG4gICAgICBvbiA9IF9FdmVudEludGVyZmFjZTkub24sXG4gICAgICBlbWl0ID0gX0V2ZW50SW50ZXJmYWNlOS5lbWl0O1xuXG4gIHZhciBzZXQgPSBTcGxpZGUyLnN0YXRlLnNldDtcbiAgdmFyIE1vdmUgPSBDb21wb25lbnRzMi5Nb3ZlO1xuICB2YXIgZ2V0UG9zaXRpb24gPSBNb3ZlLmdldFBvc2l0aW9uLFxuICAgICAgZ2V0TGltaXQgPSBNb3ZlLmdldExpbWl0LFxuICAgICAgZXhjZWVkZWRMaW1pdCA9IE1vdmUuZXhjZWVkZWRMaW1pdCxcbiAgICAgIHRyYW5zbGF0ZSA9IE1vdmUudHJhbnNsYXRlO1xuICB2YXIgaW50ZXJ2YWw7XG4gIHZhciBjYWxsYmFjaztcbiAgdmFyIGZyaWN0aW9uID0gMTtcblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBvbihFVkVOVF9NT1ZFLCBjbGVhcik7XG4gICAgb24oW0VWRU5UX1VQREFURUQsIEVWRU5UX1JFRlJFU0hdLCBjYW5jZWwpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2Nyb2xsKGRlc3RpbmF0aW9uLCBkdXJhdGlvbiwgc25hcCwgb25TY3JvbGxlZCwgbm9Db25zdHJhaW4pIHtcbiAgICB2YXIgZnJvbSA9IGdldFBvc2l0aW9uKCk7XG4gICAgY2xlYXIoKTtcblxuICAgIGlmIChzbmFwKSB7XG4gICAgICB2YXIgc2l6ZSA9IENvbXBvbmVudHMyLkxheW91dC5zbGlkZXJTaXplKCk7XG4gICAgICB2YXIgb2Zmc2V0ID0gc2lnbihkZXN0aW5hdGlvbikgKiBzaXplICogZmxvb3IoYWJzKGRlc3RpbmF0aW9uKSAvIHNpemUpIHx8IDA7XG4gICAgICBkZXN0aW5hdGlvbiA9IE1vdmUudG9Qb3NpdGlvbihDb21wb25lbnRzMi5Db250cm9sbGVyLnRvRGVzdChkZXN0aW5hdGlvbiAlIHNpemUpKSArIG9mZnNldDtcbiAgICB9XG5cbiAgICB2YXIgbm9EaXN0YW5jZSA9IGFwcHJveGltYXRlbHlFcXVhbChmcm9tLCBkZXN0aW5hdGlvbiwgMSk7XG4gICAgZnJpY3Rpb24gPSAxO1xuICAgIGR1cmF0aW9uID0gbm9EaXN0YW5jZSA/IDAgOiBkdXJhdGlvbiB8fCBtYXgoYWJzKGRlc3RpbmF0aW9uIC0gZnJvbSkgLyBCQVNFX1ZFTE9DSVRZLCBNSU5fRFVSQVRJT04pO1xuICAgIGNhbGxiYWNrID0gb25TY3JvbGxlZDtcbiAgICBpbnRlcnZhbCA9IFJlcXVlc3RJbnRlcnZhbChkdXJhdGlvbiwgb25FbmQsIGFwcGx5KHVwZGF0ZSwgZnJvbSwgZGVzdGluYXRpb24sIG5vQ29uc3RyYWluKSwgMSk7XG4gICAgc2V0KFNDUk9MTElORyk7XG4gICAgZW1pdChFVkVOVF9TQ1JPTEwpO1xuICAgIGludGVydmFsLnN0YXJ0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkVuZCgpIHtcbiAgICBzZXQoSURMRSk7XG4gICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcbiAgICBlbWl0KEVWRU5UX1NDUk9MTEVEKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZShmcm9tLCB0bywgbm9Db25zdHJhaW4sIHJhdGUpIHtcbiAgICB2YXIgcG9zaXRpb24gPSBnZXRQb3NpdGlvbigpO1xuICAgIHZhciB0YXJnZXQgPSBmcm9tICsgKHRvIC0gZnJvbSkgKiBlYXNpbmcocmF0ZSk7XG4gICAgdmFyIGRpZmYgPSAodGFyZ2V0IC0gcG9zaXRpb24pICogZnJpY3Rpb247XG4gICAgdHJhbnNsYXRlKHBvc2l0aW9uICsgZGlmZik7XG5cbiAgICBpZiAoU3BsaWRlMi5pcyhTTElERSkgJiYgIW5vQ29uc3RyYWluICYmIGV4Y2VlZGVkTGltaXQoKSkge1xuICAgICAgZnJpY3Rpb24gKj0gRlJJQ1RJT05fRkFDVE9SO1xuXG4gICAgICBpZiAoYWJzKGRpZmYpIDwgQk9VTkNFX0RJRkZfVEhSRVNIT0xEKSB7XG4gICAgICAgIHNjcm9sbChnZXRMaW1pdChleGNlZWRlZExpbWl0KHRydWUpKSwgQk9VTkNFX0RVUkFUSU9OLCBmYWxzZSwgY2FsbGJhY2ssIHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIGlmIChpbnRlcnZhbCkge1xuICAgICAgaW50ZXJ2YWwuY2FuY2VsKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmIChpbnRlcnZhbCAmJiAhaW50ZXJ2YWwuaXNQYXVzZWQoKSkge1xuICAgICAgY2xlYXIoKTtcbiAgICAgIG9uRW5kKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZWFzaW5nKHQpIHtcbiAgICB2YXIgZWFzaW5nRnVuYyA9IG9wdGlvbnMuZWFzaW5nRnVuYztcbiAgICByZXR1cm4gZWFzaW5nRnVuYyA/IGVhc2luZ0Z1bmModCkgOiAxIC0gTWF0aC5wb3coMSAtIHQsIDQpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtb3VudDogbW91bnQsXG4gICAgZGVzdHJveTogY2xlYXIsXG4gICAgc2Nyb2xsOiBzY3JvbGwsXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn1cblxudmFyIFNDUk9MTF9MSVNURU5FUl9PUFRJT05TID0ge1xuICBwYXNzaXZlOiBmYWxzZSxcbiAgY2FwdHVyZTogdHJ1ZVxufTtcblxuZnVuY3Rpb24gRHJhZyhTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgX0V2ZW50SW50ZXJmYWNlMTAgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKSxcbiAgICAgIG9uID0gX0V2ZW50SW50ZXJmYWNlMTAub24sXG4gICAgICBlbWl0ID0gX0V2ZW50SW50ZXJmYWNlMTAuZW1pdCxcbiAgICAgIGJpbmQgPSBfRXZlbnRJbnRlcmZhY2UxMC5iaW5kLFxuICAgICAgdW5iaW5kID0gX0V2ZW50SW50ZXJmYWNlMTAudW5iaW5kO1xuXG4gIHZhciBzdGF0ZSA9IFNwbGlkZTIuc3RhdGU7XG4gIHZhciBNb3ZlID0gQ29tcG9uZW50czIuTW92ZSxcbiAgICAgIFNjcm9sbCA9IENvbXBvbmVudHMyLlNjcm9sbCxcbiAgICAgIENvbnRyb2xsZXIgPSBDb21wb25lbnRzMi5Db250cm9sbGVyLFxuICAgICAgdHJhY2sgPSBDb21wb25lbnRzMi5FbGVtZW50cy50cmFjayxcbiAgICAgIHJlZHVjZSA9IENvbXBvbmVudHMyLk1lZGlhLnJlZHVjZTtcbiAgdmFyIF9Db21wb25lbnRzMiREaXJlY3RpbzIgPSBDb21wb25lbnRzMi5EaXJlY3Rpb24sXG4gICAgICByZXNvbHZlID0gX0NvbXBvbmVudHMyJERpcmVjdGlvMi5yZXNvbHZlLFxuICAgICAgb3JpZW50ID0gX0NvbXBvbmVudHMyJERpcmVjdGlvMi5vcmllbnQ7XG4gIHZhciBnZXRQb3NpdGlvbiA9IE1vdmUuZ2V0UG9zaXRpb24sXG4gICAgICBleGNlZWRlZExpbWl0ID0gTW92ZS5leGNlZWRlZExpbWl0O1xuICB2YXIgYmFzZVBvc2l0aW9uO1xuICB2YXIgYmFzZUV2ZW50O1xuICB2YXIgcHJldkJhc2VFdmVudDtcbiAgdmFyIGlzRnJlZTtcbiAgdmFyIGRyYWdnaW5nO1xuICB2YXIgZXhjZWVkZWQgPSBmYWxzZTtcbiAgdmFyIGNsaWNrUHJldmVudGVkO1xuICB2YXIgZGlzYWJsZWQ7XG4gIHZhciB0YXJnZXQ7XG5cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgYmluZCh0cmFjaywgUE9JTlRFUl9NT1ZFX0VWRU5UUywgbm9vcCwgU0NST0xMX0xJU1RFTkVSX09QVElPTlMpO1xuICAgIGJpbmQodHJhY2ssIFBPSU5URVJfVVBfRVZFTlRTLCBub29wLCBTQ1JPTExfTElTVEVORVJfT1BUSU9OUyk7XG4gICAgYmluZCh0cmFjaywgUE9JTlRFUl9ET1dOX0VWRU5UUywgb25Qb2ludGVyRG93biwgU0NST0xMX0xJU1RFTkVSX09QVElPTlMpO1xuICAgIGJpbmQodHJhY2ssIFwiY2xpY2tcIiwgb25DbGljaywge1xuICAgICAgY2FwdHVyZTogdHJ1ZVxuICAgIH0pO1xuICAgIGJpbmQodHJhY2ssIFwiZHJhZ3N0YXJ0XCIsIHByZXZlbnQpO1xuICAgIG9uKFtFVkVOVF9NT1VOVEVELCBFVkVOVF9VUERBVEVEXSwgaW5pdCk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHZhciBkcmFnID0gb3B0aW9ucy5kcmFnO1xuICAgIGRpc2FibGUoIWRyYWcpO1xuICAgIGlzRnJlZSA9IGRyYWcgPT09IFwiZnJlZVwiO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Qb2ludGVyRG93bihlKSB7XG4gICAgY2xpY2tQcmV2ZW50ZWQgPSBmYWxzZTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIHZhciBpc1RvdWNoID0gaXNUb3VjaEV2ZW50KGUpO1xuXG4gICAgICBpZiAoaXNEcmFnZ2FibGUoZS50YXJnZXQpICYmIChpc1RvdWNoIHx8ICFlLmJ1dHRvbikpIHtcbiAgICAgICAgaWYgKCFDb250cm9sbGVyLmlzQnVzeSgpKSB7XG4gICAgICAgICAgdGFyZ2V0ID0gaXNUb3VjaCA/IHRyYWNrIDogd2luZG93O1xuICAgICAgICAgIGRyYWdnaW5nID0gc3RhdGUuaXMoW01PVklORywgU0NST0xMSU5HXSk7XG4gICAgICAgICAgcHJldkJhc2VFdmVudCA9IG51bGw7XG4gICAgICAgICAgYmluZCh0YXJnZXQsIFBPSU5URVJfTU9WRV9FVkVOVFMsIG9uUG9pbnRlck1vdmUsIFNDUk9MTF9MSVNURU5FUl9PUFRJT05TKTtcbiAgICAgICAgICBiaW5kKHRhcmdldCwgUE9JTlRFUl9VUF9FVkVOVFMsIG9uUG9pbnRlclVwLCBTQ1JPTExfTElTVEVORVJfT1BUSU9OUyk7XG4gICAgICAgICAgTW92ZS5jYW5jZWwoKTtcbiAgICAgICAgICBTY3JvbGwuY2FuY2VsKCk7XG4gICAgICAgICAgc2F2ZShlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmV2ZW50KGUsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25Qb2ludGVyTW92ZShlKSB7XG4gICAgaWYgKCFzdGF0ZS5pcyhEUkFHR0lORykpIHtcbiAgICAgIHN0YXRlLnNldChEUkFHR0lORyk7XG4gICAgICBlbWl0KEVWRU5UX0RSQUcpO1xuICAgIH1cblxuICAgIGlmIChlLmNhbmNlbGFibGUpIHtcbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICBNb3ZlLnRyYW5zbGF0ZShiYXNlUG9zaXRpb24gKyBjb25zdHJhaW4oZGlmZkNvb3JkKGUpKSk7XG4gICAgICAgIHZhciBleHBpcmVkID0gZGlmZlRpbWUoZSkgPiBMT0dfSU5URVJWQUw7XG4gICAgICAgIHZhciBoYXNFeGNlZWRlZCA9IGV4Y2VlZGVkICE9PSAoZXhjZWVkZWQgPSBleGNlZWRlZExpbWl0KCkpO1xuXG4gICAgICAgIGlmIChleHBpcmVkIHx8IGhhc0V4Y2VlZGVkKSB7XG4gICAgICAgICAgc2F2ZShlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsaWNrUHJldmVudGVkID0gdHJ1ZTtcbiAgICAgICAgZW1pdChFVkVOVF9EUkFHR0lORyk7XG4gICAgICAgIHByZXZlbnQoZSk7XG4gICAgICB9IGVsc2UgaWYgKGlzU2xpZGVyRGlyZWN0aW9uKGUpKSB7XG4gICAgICAgIGRyYWdnaW5nID0gc2hvdWxkU3RhcnQoZSk7XG4gICAgICAgIHByZXZlbnQoZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25Qb2ludGVyVXAoZSkge1xuICAgIGlmIChzdGF0ZS5pcyhEUkFHR0lORykpIHtcbiAgICAgIHN0YXRlLnNldChJRExFKTtcbiAgICAgIGVtaXQoRVZFTlRfRFJBR0dFRCk7XG4gICAgfVxuXG4gICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICBtb3ZlKGUpO1xuICAgICAgcHJldmVudChlKTtcbiAgICB9XG5cbiAgICB1bmJpbmQodGFyZ2V0LCBQT0lOVEVSX01PVkVfRVZFTlRTLCBvblBvaW50ZXJNb3ZlKTtcbiAgICB1bmJpbmQodGFyZ2V0LCBQT0lOVEVSX1VQX0VWRU5UUywgb25Qb2ludGVyVXApO1xuICAgIGRyYWdnaW5nID0gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICBpZiAoIWRpc2FibGVkICYmIGNsaWNrUHJldmVudGVkKSB7XG4gICAgICBwcmV2ZW50KGUsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNhdmUoZSkge1xuICAgIHByZXZCYXNlRXZlbnQgPSBiYXNlRXZlbnQ7XG4gICAgYmFzZUV2ZW50ID0gZTtcbiAgICBiYXNlUG9zaXRpb24gPSBnZXRQb3NpdGlvbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gbW92ZShlKSB7XG4gICAgdmFyIHZlbG9jaXR5ID0gY29tcHV0ZVZlbG9jaXR5KGUpO1xuICAgIHZhciBkZXN0aW5hdGlvbiA9IGNvbXB1dGVEZXN0aW5hdGlvbih2ZWxvY2l0eSk7XG4gICAgdmFyIHJld2luZCA9IG9wdGlvbnMucmV3aW5kICYmIG9wdGlvbnMucmV3aW5kQnlEcmFnO1xuICAgIHJlZHVjZShmYWxzZSk7XG5cbiAgICBpZiAoaXNGcmVlKSB7XG4gICAgICBDb250cm9sbGVyLnNjcm9sbChkZXN0aW5hdGlvbiwgMCwgb3B0aW9ucy5zbmFwKTtcbiAgICB9IGVsc2UgaWYgKFNwbGlkZTIuaXMoRkFERSkpIHtcbiAgICAgIENvbnRyb2xsZXIuZ28ob3JpZW50KHNpZ24odmVsb2NpdHkpKSA8IDAgPyByZXdpbmQgPyBcIjxcIiA6IFwiLVwiIDogcmV3aW5kID8gXCI+XCIgOiBcIitcIik7XG4gICAgfSBlbHNlIGlmIChTcGxpZGUyLmlzKFNMSURFKSAmJiBleGNlZWRlZCAmJiByZXdpbmQpIHtcbiAgICAgIENvbnRyb2xsZXIuZ28oZXhjZWVkZWRMaW1pdCh0cnVlKSA/IFwiPlwiIDogXCI8XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBDb250cm9sbGVyLmdvKENvbnRyb2xsZXIudG9EZXN0KGRlc3RpbmF0aW9uKSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgcmVkdWNlKHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkU3RhcnQoZSkge1xuICAgIHZhciB0aHJlc2hvbGRzID0gb3B0aW9ucy5kcmFnTWluVGhyZXNob2xkO1xuICAgIHZhciBpc09iaiA9IGlzT2JqZWN0KHRocmVzaG9sZHMpO1xuICAgIHZhciBtb3VzZSA9IGlzT2JqICYmIHRocmVzaG9sZHMubW91c2UgfHwgMDtcbiAgICB2YXIgdG91Y2ggPSAoaXNPYmogPyB0aHJlc2hvbGRzLnRvdWNoIDogK3RocmVzaG9sZHMpIHx8IDEwO1xuICAgIHJldHVybiBhYnMoZGlmZkNvb3JkKGUpKSA+IChpc1RvdWNoRXZlbnQoZSkgPyB0b3VjaCA6IG1vdXNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU2xpZGVyRGlyZWN0aW9uKGUpIHtcbiAgICByZXR1cm4gYWJzKGRpZmZDb29yZChlKSkgPiBhYnMoZGlmZkNvb3JkKGUsIHRydWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXB1dGVWZWxvY2l0eShlKSB7XG4gICAgaWYgKFNwbGlkZTIuaXMoTE9PUCkgfHwgIWV4Y2VlZGVkKSB7XG4gICAgICB2YXIgdGltZSA9IGRpZmZUaW1lKGUpO1xuXG4gICAgICBpZiAodGltZSAmJiB0aW1lIDwgTE9HX0lOVEVSVkFMKSB7XG4gICAgICAgIHJldHVybiBkaWZmQ29vcmQoZSkgLyB0aW1lO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAwO1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcHV0ZURlc3RpbmF0aW9uKHZlbG9jaXR5KSB7XG4gICAgcmV0dXJuIGdldFBvc2l0aW9uKCkgKyBzaWduKHZlbG9jaXR5KSAqIG1pbihhYnModmVsb2NpdHkpICogKG9wdGlvbnMuZmxpY2tQb3dlciB8fCA2MDApLCBpc0ZyZWUgPyBJbmZpbml0eSA6IENvbXBvbmVudHMyLkxheW91dC5saXN0U2l6ZSgpICogKG9wdGlvbnMuZmxpY2tNYXhQYWdlcyB8fCAxKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkaWZmQ29vcmQoZSwgb3J0aG9nb25hbCkge1xuICAgIHJldHVybiBjb29yZE9mKGUsIG9ydGhvZ29uYWwpIC0gY29vcmRPZihnZXRCYXNlRXZlbnQoZSksIG9ydGhvZ29uYWwpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlmZlRpbWUoZSkge1xuICAgIHJldHVybiB0aW1lT2YoZSkgLSB0aW1lT2YoZ2V0QmFzZUV2ZW50KGUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEJhc2VFdmVudChlKSB7XG4gICAgcmV0dXJuIGJhc2VFdmVudCA9PT0gZSAmJiBwcmV2QmFzZUV2ZW50IHx8IGJhc2VFdmVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvb3JkT2YoZSwgb3J0aG9nb25hbCkge1xuICAgIHJldHVybiAoaXNUb3VjaEV2ZW50KGUpID8gZS5jaGFuZ2VkVG91Y2hlc1swXSA6IGUpW1wicGFnZVwiICsgcmVzb2x2ZShvcnRob2dvbmFsID8gXCJZXCIgOiBcIlhcIildO1xuICB9XG5cbiAgZnVuY3Rpb24gY29uc3RyYWluKGRpZmYpIHtcbiAgICByZXR1cm4gZGlmZiAvIChleGNlZWRlZCAmJiBTcGxpZGUyLmlzKFNMSURFKSA/IEZSSUNUSU9OIDogMSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0RyYWdnYWJsZSh0YXJnZXQyKSB7XG4gICAgdmFyIG5vRHJhZyA9IG9wdGlvbnMubm9EcmFnO1xuICAgIHJldHVybiAhbWF0Y2hlcyh0YXJnZXQyLCBcIi5cIiArIENMQVNTX1BBR0lOQVRJT05fUEFHRSArIFwiLCAuXCIgKyBDTEFTU19BUlJPVykgJiYgKCFub0RyYWcgfHwgIW1hdGNoZXModGFyZ2V0Miwgbm9EcmFnKSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc1RvdWNoRXZlbnQoZSkge1xuICAgIHJldHVybiB0eXBlb2YgVG91Y2hFdmVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBlIGluc3RhbmNlb2YgVG91Y2hFdmVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRHJhZ2dpbmcoKSB7XG4gICAgcmV0dXJuIGRyYWdnaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzYWJsZSh2YWx1ZSkge1xuICAgIGRpc2FibGVkID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1vdW50OiBtb3VudCxcbiAgICBkaXNhYmxlOiBkaXNhYmxlLFxuICAgIGlzRHJhZ2dpbmc6IGlzRHJhZ2dpbmdcbiAgfTtcbn1cblxudmFyIE5PUk1BTElaQVRJT05fTUFQID0ge1xuICBTcGFjZWJhcjogXCIgXCIsXG4gIFJpZ2h0OiBBUlJPV19SSUdIVCxcbiAgTGVmdDogQVJST1dfTEVGVCxcbiAgVXA6IEFSUk9XX1VQLFxuICBEb3duOiBBUlJPV19ET1dOXG59O1xuXG5mdW5jdGlvbiBub3JtYWxpemVLZXkoa2V5KSB7XG4gIGtleSA9IGlzU3RyaW5nKGtleSkgPyBrZXkgOiBrZXkua2V5O1xuICByZXR1cm4gTk9STUFMSVpBVElPTl9NQVBba2V5XSB8fCBrZXk7XG59XG5cbnZhciBLRVlCT0FSRF9FVkVOVCA9IFwia2V5ZG93blwiO1xuXG5mdW5jdGlvbiBLZXlib2FyZChTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgX0V2ZW50SW50ZXJmYWNlMTEgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKSxcbiAgICAgIG9uID0gX0V2ZW50SW50ZXJmYWNlMTEub24sXG4gICAgICBiaW5kID0gX0V2ZW50SW50ZXJmYWNlMTEuYmluZCxcbiAgICAgIHVuYmluZCA9IF9FdmVudEludGVyZmFjZTExLnVuYmluZDtcblxuICB2YXIgcm9vdCA9IFNwbGlkZTIucm9vdDtcbiAgdmFyIHJlc29sdmUgPSBDb21wb25lbnRzMi5EaXJlY3Rpb24ucmVzb2x2ZTtcbiAgdmFyIHRhcmdldDtcbiAgdmFyIGRpc2FibGVkO1xuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIGluaXQoKTtcbiAgICBvbihFVkVOVF9VUERBVEVELCBkZXN0cm95KTtcbiAgICBvbihFVkVOVF9VUERBVEVELCBpbml0KTtcbiAgICBvbihFVkVOVF9NT1ZFLCBvbk1vdmUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB2YXIga2V5Ym9hcmQgPSBvcHRpb25zLmtleWJvYXJkO1xuXG4gICAgaWYgKGtleWJvYXJkKSB7XG4gICAgICB0YXJnZXQgPSBrZXlib2FyZCA9PT0gXCJnbG9iYWxcIiA/IHdpbmRvdyA6IHJvb3Q7XG4gICAgICBiaW5kKHRhcmdldCwgS0VZQk9BUkRfRVZFTlQsIG9uS2V5ZG93bik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICB1bmJpbmQodGFyZ2V0LCBLRVlCT0FSRF9FVkVOVCk7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNhYmxlKHZhbHVlKSB7XG4gICAgZGlzYWJsZWQgPSB2YWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTW92ZSgpIHtcbiAgICB2YXIgX2Rpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgZGlzYWJsZWQgPSB0cnVlO1xuICAgIG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGRpc2FibGVkID0gX2Rpc2FibGVkO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gb25LZXlkb3duKGUpIHtcbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICB2YXIga2V5ID0gbm9ybWFsaXplS2V5KGUpO1xuXG4gICAgICBpZiAoa2V5ID09PSByZXNvbHZlKEFSUk9XX0xFRlQpKSB7XG4gICAgICAgIFNwbGlkZTIuZ28oXCI8XCIpO1xuICAgICAgfSBlbHNlIGlmIChrZXkgPT09IHJlc29sdmUoQVJST1dfUklHSFQpKSB7XG4gICAgICAgIFNwbGlkZTIuZ28oXCI+XCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbW91bnQ6IG1vdW50LFxuICAgIGRlc3Ryb3k6IGRlc3Ryb3ksXG4gICAgZGlzYWJsZTogZGlzYWJsZVxuICB9O1xufVxuXG52YXIgU1JDX0RBVEFfQVRUUklCVVRFID0gREFUQV9BVFRSSUJVVEUgKyBcIi1sYXp5XCI7XG52YXIgU1JDU0VUX0RBVEFfQVRUUklCVVRFID0gU1JDX0RBVEFfQVRUUklCVVRFICsgXCItc3Jjc2V0XCI7XG52YXIgSU1BR0VfU0VMRUNUT1IgPSBcIltcIiArIFNSQ19EQVRBX0FUVFJJQlVURSArIFwiXSwgW1wiICsgU1JDU0VUX0RBVEFfQVRUUklCVVRFICsgXCJdXCI7XG5cbmZ1bmN0aW9uIExhenlMb2FkKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBfRXZlbnRJbnRlcmZhY2UxMiA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpLFxuICAgICAgb24gPSBfRXZlbnRJbnRlcmZhY2UxMi5vbixcbiAgICAgIG9mZiA9IF9FdmVudEludGVyZmFjZTEyLm9mZixcbiAgICAgIGJpbmQgPSBfRXZlbnRJbnRlcmZhY2UxMi5iaW5kLFxuICAgICAgZW1pdCA9IF9FdmVudEludGVyZmFjZTEyLmVtaXQ7XG5cbiAgdmFyIGlzU2VxdWVudGlhbCA9IG9wdGlvbnMubGF6eUxvYWQgPT09IFwic2VxdWVudGlhbFwiO1xuICB2YXIgZXZlbnRzID0gW0VWRU5UX01PVU5URUQsIEVWRU5UX1JFRlJFU0gsIEVWRU5UX01PVkVELCBFVkVOVF9TQ1JPTExFRF07XG4gIHZhciBlbnRyaWVzID0gW107XG5cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgaWYgKG9wdGlvbnMubGF6eUxvYWQpIHtcbiAgICAgIGluaXQoKTtcbiAgICAgIG9uKEVWRU5UX1JFRlJFU0gsIGluaXQpO1xuICAgICAgaXNTZXF1ZW50aWFsIHx8IG9uKGV2ZW50cywgb2JzZXJ2ZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBlbXB0eShlbnRyaWVzKTtcbiAgICBDb21wb25lbnRzMi5TbGlkZXMuZm9yRWFjaChmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgIHF1ZXJ5QWxsKFNsaWRlLnNsaWRlLCBJTUFHRV9TRUxFQ1RPUikuZm9yRWFjaChmdW5jdGlvbiAoaW1nKSB7XG4gICAgICAgIHZhciBzcmMgPSBnZXRBdHRyaWJ1dGUoaW1nLCBTUkNfREFUQV9BVFRSSUJVVEUpO1xuICAgICAgICB2YXIgc3Jjc2V0ID0gZ2V0QXR0cmlidXRlKGltZywgU1JDU0VUX0RBVEFfQVRUUklCVVRFKTtcblxuICAgICAgICBpZiAoc3JjICE9PSBpbWcuc3JjIHx8IHNyY3NldCAhPT0gaW1nLnNyY3NldCkge1xuICAgICAgICAgIHZhciBjbGFzc05hbWUgPSBvcHRpb25zLmNsYXNzZXMuc3Bpbm5lcjtcbiAgICAgICAgICB2YXIgcGFyZW50ID0gaW1nLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgdmFyIHNwaW5uZXIgPSBjaGlsZChwYXJlbnQsIFwiLlwiICsgY2xhc3NOYW1lKSB8fCBjcmVhdGUoXCJzcGFuXCIsIGNsYXNzTmFtZSwgcGFyZW50KTtcbiAgICAgICAgICBlbnRyaWVzLnB1c2goW2ltZywgU2xpZGUsIHNwaW5uZXJdKTtcbiAgICAgICAgICBpbWcuc3JjIHx8IGRpc3BsYXkoaW1nLCBcIm5vbmVcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlzU2VxdWVudGlhbCAmJiBsb2FkTmV4dCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gb2JzZXJ2ZSgpIHtcbiAgICBlbnRyaWVzID0gZW50cmllcy5maWx0ZXIoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHZhciBkaXN0YW5jZSA9IG9wdGlvbnMucGVyUGFnZSAqICgob3B0aW9ucy5wcmVsb2FkUGFnZXMgfHwgMSkgKyAxKSAtIDE7XG4gICAgICByZXR1cm4gZGF0YVsxXS5pc1dpdGhpbihTcGxpZGUyLmluZGV4LCBkaXN0YW5jZSkgPyBsb2FkKGRhdGEpIDogdHJ1ZTtcbiAgICB9KTtcbiAgICBlbnRyaWVzLmxlbmd0aCB8fCBvZmYoZXZlbnRzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvYWQoZGF0YSkge1xuICAgIHZhciBpbWcgPSBkYXRhWzBdO1xuICAgIGFkZENsYXNzKGRhdGFbMV0uc2xpZGUsIENMQVNTX0xPQURJTkcpO1xuICAgIGJpbmQoaW1nLCBcImxvYWQgZXJyb3JcIiwgYXBwbHkob25Mb2FkLCBkYXRhKSk7XG4gICAgc2V0QXR0cmlidXRlKGltZywgXCJzcmNcIiwgZ2V0QXR0cmlidXRlKGltZywgU1JDX0RBVEFfQVRUUklCVVRFKSk7XG4gICAgc2V0QXR0cmlidXRlKGltZywgXCJzcmNzZXRcIiwgZ2V0QXR0cmlidXRlKGltZywgU1JDU0VUX0RBVEFfQVRUUklCVVRFKSk7XG4gICAgcmVtb3ZlQXR0cmlidXRlKGltZywgU1JDX0RBVEFfQVRUUklCVVRFKTtcbiAgICByZW1vdmVBdHRyaWJ1dGUoaW1nLCBTUkNTRVRfREFUQV9BVFRSSUJVVEUpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Mb2FkKGRhdGEsIGUpIHtcbiAgICB2YXIgaW1nID0gZGF0YVswXSxcbiAgICAgICAgU2xpZGUgPSBkYXRhWzFdO1xuICAgIHJlbW92ZUNsYXNzKFNsaWRlLnNsaWRlLCBDTEFTU19MT0FESU5HKTtcblxuICAgIGlmIChlLnR5cGUgIT09IFwiZXJyb3JcIikge1xuICAgICAgcmVtb3ZlKGRhdGFbMl0pO1xuICAgICAgZGlzcGxheShpbWcsIFwiXCIpO1xuICAgICAgZW1pdChFVkVOVF9MQVpZTE9BRF9MT0FERUQsIGltZywgU2xpZGUpO1xuICAgICAgZW1pdChFVkVOVF9SRVNJWkUpO1xuICAgIH1cblxuICAgIGlzU2VxdWVudGlhbCAmJiBsb2FkTmV4dCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gbG9hZE5leHQoKSB7XG4gICAgZW50cmllcy5sZW5ndGggJiYgbG9hZChlbnRyaWVzLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtb3VudDogbW91bnQsXG4gICAgZGVzdHJveTogYXBwbHkoZW1wdHksIGVudHJpZXMpXG4gIH07XG59XG5cbmZ1bmN0aW9uIFBhZ2luYXRpb24oU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgdmFyIGV2ZW50ID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMik7XG4gIHZhciBvbiA9IGV2ZW50Lm9uLFxuICAgICAgZW1pdCA9IGV2ZW50LmVtaXQsXG4gICAgICBiaW5kID0gZXZlbnQuYmluZDtcbiAgdmFyIFNsaWRlcyA9IENvbXBvbmVudHMyLlNsaWRlcyxcbiAgICAgIEVsZW1lbnRzID0gQ29tcG9uZW50czIuRWxlbWVudHMsXG4gICAgICBDb250cm9sbGVyID0gQ29tcG9uZW50czIuQ29udHJvbGxlcjtcbiAgdmFyIGhhc0ZvY3VzID0gQ29udHJvbGxlci5oYXNGb2N1cyxcbiAgICAgIGdldEluZGV4ID0gQ29udHJvbGxlci5nZXRJbmRleCxcbiAgICAgIGdvID0gQ29udHJvbGxlci5nbztcbiAgdmFyIHJlc29sdmUgPSBDb21wb25lbnRzMi5EaXJlY3Rpb24ucmVzb2x2ZTtcbiAgdmFyIGl0ZW1zID0gW107XG4gIHZhciBsaXN0O1xuICB2YXIgcGFnaW5hdGlvbkNsYXNzZXM7XG5cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgZGVzdHJveSgpO1xuICAgIG9uKFtFVkVOVF9VUERBVEVELCBFVkVOVF9SRUZSRVNIXSwgbW91bnQpO1xuXG4gICAgaWYgKG9wdGlvbnMucGFnaW5hdGlvbiAmJiBTbGlkZXMuaXNFbm91Z2goKSkge1xuICAgICAgb24oW0VWRU5UX01PVkUsIEVWRU5UX1NDUk9MTCwgRVZFTlRfU0NST0xMRURdLCB1cGRhdGUpO1xuICAgICAgY3JlYXRlUGFnaW5hdGlvbigpO1xuICAgICAgdXBkYXRlKCk7XG4gICAgICBlbWl0KEVWRU5UX1BBR0lOQVRJT05fTU9VTlRFRCwge1xuICAgICAgICBsaXN0OiBsaXN0LFxuICAgICAgICBpdGVtczogaXRlbXNcbiAgICAgIH0sIGdldEF0KFNwbGlkZTIuaW5kZXgpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGlmIChsaXN0KSB7XG4gICAgICByZW1vdmUoRWxlbWVudHMucGFnaW5hdGlvbiA/IHNsaWNlKGxpc3QuY2hpbGRyZW4pIDogbGlzdCk7XG4gICAgICByZW1vdmVDbGFzcyhsaXN0LCBwYWdpbmF0aW9uQ2xhc3Nlcyk7XG4gICAgICBlbXB0eShpdGVtcyk7XG4gICAgICBsaXN0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBldmVudC5kZXN0cm95KCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQYWdpbmF0aW9uKCkge1xuICAgIHZhciBsZW5ndGggPSBTcGxpZGUyLmxlbmd0aDtcbiAgICB2YXIgY2xhc3NlcyA9IG9wdGlvbnMuY2xhc3NlcyxcbiAgICAgICAgaTE4biA9IG9wdGlvbnMuaTE4bixcbiAgICAgICAgcGVyUGFnZSA9IG9wdGlvbnMucGVyUGFnZTtcbiAgICB2YXIgbWF4ID0gaGFzRm9jdXMoKSA/IGxlbmd0aCA6IGNlaWwobGVuZ3RoIC8gcGVyUGFnZSk7XG4gICAgbGlzdCA9IEVsZW1lbnRzLnBhZ2luYXRpb24gfHwgY3JlYXRlKFwidWxcIiwgY2xhc3Nlcy5wYWdpbmF0aW9uLCBFbGVtZW50cy50cmFjay5wYXJlbnRFbGVtZW50KTtcbiAgICBhZGRDbGFzcyhsaXN0LCBwYWdpbmF0aW9uQ2xhc3NlcyA9IENMQVNTX1BBR0lOQVRJT04gKyBcIi0tXCIgKyBnZXREaXJlY3Rpb24oKSk7XG4gICAgc2V0QXR0cmlidXRlKGxpc3QsIFJPTEUsIFwidGFibGlzdFwiKTtcbiAgICBzZXRBdHRyaWJ1dGUobGlzdCwgQVJJQV9MQUJFTCwgaTE4bi5zZWxlY3QpO1xuICAgIHNldEF0dHJpYnV0ZShsaXN0LCBBUklBX09SSUVOVEFUSU9OLCBnZXREaXJlY3Rpb24oKSA9PT0gVFRCID8gXCJ2ZXJ0aWNhbFwiIDogXCJcIik7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heDsgaSsrKSB7XG4gICAgICB2YXIgbGkgPSBjcmVhdGUoXCJsaVwiLCBudWxsLCBsaXN0KTtcbiAgICAgIHZhciBidXR0b24gPSBjcmVhdGUoXCJidXR0b25cIiwge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy5wYWdlLFxuICAgICAgICB0eXBlOiBcImJ1dHRvblwiXG4gICAgICB9LCBsaSk7XG4gICAgICB2YXIgY29udHJvbHMgPSBTbGlkZXMuZ2V0SW4oaSkubWFwKGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgICByZXR1cm4gU2xpZGUuc2xpZGUuaWQ7XG4gICAgICB9KTtcbiAgICAgIHZhciB0ZXh0ID0gIWhhc0ZvY3VzKCkgJiYgcGVyUGFnZSA+IDEgPyBpMThuLnBhZ2VYIDogaTE4bi5zbGlkZVg7XG4gICAgICBiaW5kKGJ1dHRvbiwgXCJjbGlja1wiLCBhcHBseShvbkNsaWNrLCBpKSk7XG5cbiAgICAgIGlmIChvcHRpb25zLnBhZ2luYXRpb25LZXlib2FyZCkge1xuICAgICAgICBiaW5kKGJ1dHRvbiwgXCJrZXlkb3duXCIsIGFwcGx5KG9uS2V5ZG93biwgaSkpO1xuICAgICAgfVxuXG4gICAgICBzZXRBdHRyaWJ1dGUobGksIFJPTEUsIFwicHJlc2VudGF0aW9uXCIpO1xuICAgICAgc2V0QXR0cmlidXRlKGJ1dHRvbiwgUk9MRSwgXCJ0YWJcIik7XG4gICAgICBzZXRBdHRyaWJ1dGUoYnV0dG9uLCBBUklBX0NPTlRST0xTLCBjb250cm9scy5qb2luKFwiIFwiKSk7XG4gICAgICBzZXRBdHRyaWJ1dGUoYnV0dG9uLCBBUklBX0xBQkVMLCBmb3JtYXQodGV4dCwgaSArIDEpKTtcbiAgICAgIHNldEF0dHJpYnV0ZShidXR0b24sIFRBQl9JTkRFWCwgLTEpO1xuICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgIGxpOiBsaSxcbiAgICAgICAgYnV0dG9uOiBidXR0b24sXG4gICAgICAgIHBhZ2U6IGlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2xpY2socGFnZSkge1xuICAgIGdvKFwiPlwiICsgcGFnZSwgdHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbktleWRvd24ocGFnZSwgZSkge1xuICAgIHZhciBsZW5ndGggPSBpdGVtcy5sZW5ndGg7XG4gICAgdmFyIGtleSA9IG5vcm1hbGl6ZUtleShlKTtcbiAgICB2YXIgZGlyID0gZ2V0RGlyZWN0aW9uKCk7XG4gICAgdmFyIG5leHRQYWdlID0gLTE7XG5cbiAgICBpZiAoa2V5ID09PSByZXNvbHZlKEFSUk9XX1JJR0hULCBmYWxzZSwgZGlyKSkge1xuICAgICAgbmV4dFBhZ2UgPSArK3BhZ2UgJSBsZW5ndGg7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09IHJlc29sdmUoQVJST1dfTEVGVCwgZmFsc2UsIGRpcikpIHtcbiAgICAgIG5leHRQYWdlID0gKC0tcGFnZSArIGxlbmd0aCkgJSBsZW5ndGg7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09IFwiSG9tZVwiKSB7XG4gICAgICBuZXh0UGFnZSA9IDA7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09IFwiRW5kXCIpIHtcbiAgICAgIG5leHRQYWdlID0gbGVuZ3RoIC0gMTtcbiAgICB9XG5cbiAgICB2YXIgaXRlbSA9IGl0ZW1zW25leHRQYWdlXTtcblxuICAgIGlmIChpdGVtKSB7XG4gICAgICBmb2N1cyhpdGVtLmJ1dHRvbik7XG4gICAgICBnbyhcIj5cIiArIG5leHRQYWdlKTtcbiAgICAgIHByZXZlbnQoZSwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGlyZWN0aW9uKCkge1xuICAgIHJldHVybiBvcHRpb25zLnBhZ2luYXRpb25EaXJlY3Rpb24gfHwgb3B0aW9ucy5kaXJlY3Rpb247XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBdChpbmRleCkge1xuICAgIHJldHVybiBpdGVtc1tDb250cm9sbGVyLnRvUGFnZShpbmRleCldO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBwcmV2ID0gZ2V0QXQoZ2V0SW5kZXgodHJ1ZSkpO1xuICAgIHZhciBjdXJyID0gZ2V0QXQoZ2V0SW5kZXgoKSk7XG5cbiAgICBpZiAocHJldikge1xuICAgICAgdmFyIGJ1dHRvbiA9IHByZXYuYnV0dG9uO1xuICAgICAgcmVtb3ZlQ2xhc3MoYnV0dG9uLCBDTEFTU19BQ1RJVkUpO1xuICAgICAgcmVtb3ZlQXR0cmlidXRlKGJ1dHRvbiwgQVJJQV9TRUxFQ1RFRCk7XG4gICAgICBzZXRBdHRyaWJ1dGUoYnV0dG9uLCBUQUJfSU5ERVgsIC0xKTtcbiAgICB9XG5cbiAgICBpZiAoY3Vycikge1xuICAgICAgdmFyIF9idXR0b24gPSBjdXJyLmJ1dHRvbjtcbiAgICAgIGFkZENsYXNzKF9idXR0b24sIENMQVNTX0FDVElWRSk7XG4gICAgICBzZXRBdHRyaWJ1dGUoX2J1dHRvbiwgQVJJQV9TRUxFQ1RFRCwgdHJ1ZSk7XG4gICAgICBzZXRBdHRyaWJ1dGUoX2J1dHRvbiwgVEFCX0lOREVYLCBcIlwiKTtcbiAgICB9XG5cbiAgICBlbWl0KEVWRU5UX1BBR0lOQVRJT05fVVBEQVRFRCwge1xuICAgICAgbGlzdDogbGlzdCxcbiAgICAgIGl0ZW1zOiBpdGVtc1xuICAgIH0sIHByZXYsIGN1cnIpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpdGVtczogaXRlbXMsXG4gICAgbW91bnQ6IG1vdW50LFxuICAgIGRlc3Ryb3k6IGRlc3Ryb3ksXG4gICAgZ2V0QXQ6IGdldEF0LFxuICAgIHVwZGF0ZTogdXBkYXRlXG4gIH07XG59XG5cbnZhciBUUklHR0VSX0tFWVMgPSBbXCIgXCIsIFwiRW50ZXJcIl07XG5cbmZ1bmN0aW9uIFN5bmMoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgdmFyIGlzTmF2aWdhdGlvbiA9IG9wdGlvbnMuaXNOYXZpZ2F0aW9uLFxuICAgICAgc2xpZGVGb2N1cyA9IG9wdGlvbnMuc2xpZGVGb2N1cztcbiAgdmFyIGV2ZW50cyA9IFtdO1xuXG4gIGZ1bmN0aW9uIHNldHVwKCkge1xuICAgIFNwbGlkZTIub3B0aW9ucyA9IHtcbiAgICAgIHNsaWRlRm9jdXM6IGlzVW5kZWZpbmVkKHNsaWRlRm9jdXMpID8gaXNOYXZpZ2F0aW9uIDogc2xpZGVGb2N1c1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBTcGxpZGUyLnNwbGlkZXMuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICBpZiAoIXRhcmdldC5pc1BhcmVudCkge1xuICAgICAgICBzeW5jKFNwbGlkZTIsIHRhcmdldC5zcGxpZGUpO1xuICAgICAgICBzeW5jKHRhcmdldC5zcGxpZGUsIFNwbGlkZTIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGlzTmF2aWdhdGlvbikge1xuICAgICAgbmF2aWdhdGUoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQuZGVzdHJveSgpO1xuICAgIH0pO1xuICAgIGVtcHR5KGV2ZW50cyk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdW50KCkge1xuICAgIGRlc3Ryb3koKTtcbiAgICBtb3VudCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3luYyhzcGxpZGUsIHRhcmdldCkge1xuICAgIHZhciBldmVudCA9IEV2ZW50SW50ZXJmYWNlKHNwbGlkZSk7XG4gICAgZXZlbnQub24oRVZFTlRfTU9WRSwgZnVuY3Rpb24gKGluZGV4LCBwcmV2LCBkZXN0KSB7XG4gICAgICB0YXJnZXQuZ28odGFyZ2V0LmlzKExPT1ApID8gZGVzdCA6IGluZGV4KTtcbiAgICB9KTtcbiAgICBldmVudHMucHVzaChldmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBuYXZpZ2F0ZSgpIHtcbiAgICB2YXIgZXZlbnQgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKTtcbiAgICB2YXIgb24gPSBldmVudC5vbjtcbiAgICBvbihFVkVOVF9DTElDSywgb25DbGljayk7XG4gICAgb24oRVZFTlRfU0xJREVfS0VZRE9XTiwgb25LZXlkb3duKTtcbiAgICBvbihbRVZFTlRfTU9VTlRFRCwgRVZFTlRfVVBEQVRFRF0sIHVwZGF0ZSk7XG4gICAgZXZlbnRzLnB1c2goZXZlbnQpO1xuICAgIGV2ZW50LmVtaXQoRVZFTlRfTkFWSUdBVElPTl9NT1VOVEVELCBTcGxpZGUyLnNwbGlkZXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHNldEF0dHJpYnV0ZShDb21wb25lbnRzMi5FbGVtZW50cy5saXN0LCBBUklBX09SSUVOVEFUSU9OLCBvcHRpb25zLmRpcmVjdGlvbiA9PT0gVFRCID8gXCJ2ZXJ0aWNhbFwiIDogXCJcIik7XG4gIH1cblxuICBmdW5jdGlvbiBvbkNsaWNrKFNsaWRlKSB7XG4gICAgU3BsaWRlMi5nbyhTbGlkZS5pbmRleCk7XG4gIH1cblxuICBmdW5jdGlvbiBvbktleWRvd24oU2xpZGUsIGUpIHtcbiAgICBpZiAoaW5jbHVkZXMoVFJJR0dFUl9LRVlTLCBub3JtYWxpemVLZXkoZSkpKSB7XG4gICAgICBvbkNsaWNrKFNsaWRlKTtcbiAgICAgIHByZXZlbnQoZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzZXR1cDogc2V0dXAsXG4gICAgbW91bnQ6IG1vdW50LFxuICAgIGRlc3Ryb3k6IGRlc3Ryb3ksXG4gICAgcmVtb3VudDogcmVtb3VudFxuICB9O1xufVxuXG5mdW5jdGlvbiBXaGVlbChTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgX0V2ZW50SW50ZXJmYWNlMTMgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKSxcbiAgICAgIGJpbmQgPSBfRXZlbnRJbnRlcmZhY2UxMy5iaW5kO1xuXG4gIHZhciBsYXN0VGltZSA9IDA7XG5cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgaWYgKG9wdGlvbnMud2hlZWwpIHtcbiAgICAgIGJpbmQoQ29tcG9uZW50czIuRWxlbWVudHMudHJhY2ssIFwid2hlZWxcIiwgb25XaGVlbCwgU0NST0xMX0xJU1RFTkVSX09QVElPTlMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uV2hlZWwoZSkge1xuICAgIGlmIChlLmNhbmNlbGFibGUpIHtcbiAgICAgIHZhciBkZWx0YVkgPSBlLmRlbHRhWTtcbiAgICAgIHZhciBiYWNrd2FyZHMgPSBkZWx0YVkgPCAwO1xuICAgICAgdmFyIHRpbWVTdGFtcCA9IHRpbWVPZihlKTtcblxuICAgICAgdmFyIF9taW4gPSBvcHRpb25zLndoZWVsTWluVGhyZXNob2xkIHx8IDA7XG5cbiAgICAgIHZhciBzbGVlcCA9IG9wdGlvbnMud2hlZWxTbGVlcCB8fCAwO1xuXG4gICAgICBpZiAoYWJzKGRlbHRhWSkgPiBfbWluICYmIHRpbWVTdGFtcCAtIGxhc3RUaW1lID4gc2xlZXApIHtcbiAgICAgICAgU3BsaWRlMi5nbyhiYWNrd2FyZHMgPyBcIjxcIiA6IFwiPlwiKTtcbiAgICAgICAgbGFzdFRpbWUgPSB0aW1lU3RhbXA7XG4gICAgICB9XG5cbiAgICAgIHNob3VsZFByZXZlbnQoYmFja3dhcmRzKSAmJiBwcmV2ZW50KGUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZFByZXZlbnQoYmFja3dhcmRzKSB7XG4gICAgcmV0dXJuICFvcHRpb25zLnJlbGVhc2VXaGVlbCB8fCBTcGxpZGUyLnN0YXRlLmlzKE1PVklORykgfHwgQ29tcG9uZW50czIuQ29udHJvbGxlci5nZXRBZGphY2VudChiYWNrd2FyZHMpICE9PSAtMTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbW91bnQ6IG1vdW50XG4gIH07XG59XG5cbnZhciBTUl9SRU1PVkFMX0RFTEFZID0gOTA7XG5cbmZ1bmN0aW9uIExpdmUoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgdmFyIF9FdmVudEludGVyZmFjZTE0ID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMiksXG4gICAgICBvbiA9IF9FdmVudEludGVyZmFjZTE0Lm9uO1xuXG4gIHZhciB0cmFjayA9IENvbXBvbmVudHMyLkVsZW1lbnRzLnRyYWNrO1xuICB2YXIgZW5hYmxlZCA9IG9wdGlvbnMubGl2ZSAmJiAhb3B0aW9ucy5pc05hdmlnYXRpb247XG4gIHZhciBzciA9IGNyZWF0ZShcInNwYW5cIiwgQ0xBU1NfU1IpO1xuICB2YXIgaW50ZXJ2YWwgPSBSZXF1ZXN0SW50ZXJ2YWwoU1JfUkVNT1ZBTF9ERUxBWSwgYXBwbHkodG9nZ2xlLCBmYWxzZSkpO1xuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIGlmIChlbmFibGVkKSB7XG4gICAgICBkaXNhYmxlKCFDb21wb25lbnRzMi5BdXRvcGxheS5pc1BhdXNlZCgpKTtcbiAgICAgIHNldEF0dHJpYnV0ZSh0cmFjaywgQVJJQV9BVE9NSUMsIHRydWUpO1xuICAgICAgc3IudGV4dENvbnRlbnQgPSBcIlxcdTIwMjZcIjtcbiAgICAgIG9uKEVWRU5UX0FVVE9QTEFZX1BMQVksIGFwcGx5KGRpc2FibGUsIHRydWUpKTtcbiAgICAgIG9uKEVWRU5UX0FVVE9QTEFZX1BBVVNFLCBhcHBseShkaXNhYmxlLCBmYWxzZSkpO1xuICAgICAgb24oW0VWRU5UX01PVkVELCBFVkVOVF9TQ1JPTExFRF0sIGFwcGx5KHRvZ2dsZSwgdHJ1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZShhY3RpdmUpIHtcbiAgICBzZXRBdHRyaWJ1dGUodHJhY2ssIEFSSUFfQlVTWSwgYWN0aXZlKTtcblxuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIGFwcGVuZCh0cmFjaywgc3IpO1xuICAgICAgaW50ZXJ2YWwuc3RhcnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKHNyKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIHJlbW92ZUF0dHJpYnV0ZSh0cmFjaywgW0FSSUFfTElWRSwgQVJJQV9BVE9NSUMsIEFSSUFfQlVTWV0pO1xuICAgIHJlbW92ZShzcik7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNhYmxlKGRpc2FibGVkKSB7XG4gICAgaWYgKGVuYWJsZWQpIHtcbiAgICAgIHNldEF0dHJpYnV0ZSh0cmFjaywgQVJJQV9MSVZFLCBkaXNhYmxlZCA/IFwib2ZmXCIgOiBcInBvbGl0ZVwiKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1vdW50OiBtb3VudCxcbiAgICBkaXNhYmxlOiBkaXNhYmxlLFxuICAgIGRlc3Ryb3k6IGRlc3Ryb3lcbiAgfTtcbn1cblxudmFyIENvbXBvbmVudENvbnN0cnVjdG9ycyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgX19wcm90b19fOiBudWxsLFxuICBNZWRpYTogTWVkaWEsXG4gIERpcmVjdGlvbjogRGlyZWN0aW9uLFxuICBFbGVtZW50czogRWxlbWVudHMsXG4gIFNsaWRlczogU2xpZGVzLFxuICBMYXlvdXQ6IExheW91dCxcbiAgQ2xvbmVzOiBDbG9uZXMsXG4gIE1vdmU6IE1vdmUsXG4gIENvbnRyb2xsZXI6IENvbnRyb2xsZXIsXG4gIEFycm93czogQXJyb3dzLFxuICBBdXRvcGxheTogQXV0b3BsYXksXG4gIENvdmVyOiBDb3ZlcixcbiAgU2Nyb2xsOiBTY3JvbGwsXG4gIERyYWc6IERyYWcsXG4gIEtleWJvYXJkOiBLZXlib2FyZCxcbiAgTGF6eUxvYWQ6IExhenlMb2FkLFxuICBQYWdpbmF0aW9uOiBQYWdpbmF0aW9uLFxuICBTeW5jOiBTeW5jLFxuICBXaGVlbDogV2hlZWwsXG4gIExpdmU6IExpdmVcbn0pO1xudmFyIEkxOE4gPSB7XG4gIHByZXY6IFwiUHJldmlvdXMgc2xpZGVcIixcbiAgbmV4dDogXCJOZXh0IHNsaWRlXCIsXG4gIGZpcnN0OiBcIkdvIHRvIGZpcnN0IHNsaWRlXCIsXG4gIGxhc3Q6IFwiR28gdG8gbGFzdCBzbGlkZVwiLFxuICBzbGlkZVg6IFwiR28gdG8gc2xpZGUgJXNcIixcbiAgcGFnZVg6IFwiR28gdG8gcGFnZSAlc1wiLFxuICBwbGF5OiBcIlN0YXJ0IGF1dG9wbGF5XCIsXG4gIHBhdXNlOiBcIlBhdXNlIGF1dG9wbGF5XCIsXG4gIGNhcm91c2VsOiBcImNhcm91c2VsXCIsXG4gIHNsaWRlOiBcInNsaWRlXCIsXG4gIHNlbGVjdDogXCJTZWxlY3QgYSBzbGlkZSB0byBzaG93XCIsXG4gIHNsaWRlTGFiZWw6IFwiJXMgb2YgJXNcIlxufTtcbnZhciBERUZBVUxUUyA9IHtcbiAgdHlwZTogXCJzbGlkZVwiLFxuICByb2xlOiBcInJlZ2lvblwiLFxuICBzcGVlZDogNDAwLFxuICBwZXJQYWdlOiAxLFxuICBjbG9uZVN0YXR1czogdHJ1ZSxcbiAgYXJyb3dzOiB0cnVlLFxuICBwYWdpbmF0aW9uOiB0cnVlLFxuICBwYWdpbmF0aW9uS2V5Ym9hcmQ6IHRydWUsXG4gIGludGVydmFsOiA1ZTMsXG4gIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgcGF1c2VPbkZvY3VzOiB0cnVlLFxuICByZXNldFByb2dyZXNzOiB0cnVlLFxuICBlYXNpbmc6IFwiY3ViaWMtYmV6aWVyKDAuMjUsIDEsIDAuNSwgMSlcIixcbiAgZHJhZzogdHJ1ZSxcbiAgZGlyZWN0aW9uOiBcImx0clwiLFxuICB0cmltU3BhY2U6IHRydWUsXG4gIGZvY3VzYWJsZU5vZGVzOiBcImEsIGJ1dHRvbiwgdGV4dGFyZWEsIGlucHV0LCBzZWxlY3QsIGlmcmFtZVwiLFxuICBsaXZlOiB0cnVlLFxuICBjbGFzc2VzOiBDTEFTU0VTLFxuICBpMThuOiBJMThOLFxuICByZWR1Y2VkTW90aW9uOiB7XG4gICAgc3BlZWQ6IDAsXG4gICAgcmV3aW5kU3BlZWQ6IDAsXG4gICAgYXV0b3BsYXk6IFwicGF1c2VcIlxuICB9XG59O1xuXG5mdW5jdGlvbiBGYWRlKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBfRXZlbnRJbnRlcmZhY2UxNSA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpLFxuICAgICAgb24gPSBfRXZlbnRJbnRlcmZhY2UxNS5vbjtcblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBvbihbRVZFTlRfTU9VTlRFRCwgRVZFTlRfUkVGUkVTSF0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgQ29tcG9uZW50czIuU2xpZGVzLnN0eWxlKFwidHJhbnNpdGlvblwiLCBcIm9wYWNpdHkgXCIgKyBvcHRpb25zLnNwZWVkICsgXCJtcyBcIiArIG9wdGlvbnMuZWFzaW5nKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnQoaW5kZXgsIGRvbmUpIHtcbiAgICB2YXIgdHJhY2sgPSBDb21wb25lbnRzMi5FbGVtZW50cy50cmFjaztcbiAgICBzdHlsZSh0cmFjaywgXCJoZWlnaHRcIiwgdW5pdChyZWN0KHRyYWNrKS5oZWlnaHQpKTtcbiAgICBuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBkb25lKCk7XG4gICAgICBzdHlsZSh0cmFjaywgXCJoZWlnaHRcIiwgXCJcIik7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1vdW50OiBtb3VudCxcbiAgICBzdGFydDogc3RhcnQsXG4gICAgY2FuY2VsOiBub29wXG4gIH07XG59XG5cbmZ1bmN0aW9uIFNsaWRlKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBfRXZlbnRJbnRlcmZhY2UxNiA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpLFxuICAgICAgYmluZCA9IF9FdmVudEludGVyZmFjZTE2LmJpbmQ7XG5cbiAgdmFyIE1vdmUgPSBDb21wb25lbnRzMi5Nb3ZlLFxuICAgICAgQ29udHJvbGxlciA9IENvbXBvbmVudHMyLkNvbnRyb2xsZXIsXG4gICAgICBTY3JvbGwgPSBDb21wb25lbnRzMi5TY3JvbGw7XG4gIHZhciBsaXN0ID0gQ29tcG9uZW50czIuRWxlbWVudHMubGlzdDtcbiAgdmFyIHRyYW5zaXRpb24gPSBhcHBseShzdHlsZSwgbGlzdCwgXCJ0cmFuc2l0aW9uXCIpO1xuICB2YXIgZW5kQ2FsbGJhY2s7XG5cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgYmluZChsaXN0LCBcInRyYW5zaXRpb25lbmRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gbGlzdCAmJiBlbmRDYWxsYmFjaykge1xuICAgICAgICBjYW5jZWwoKTtcbiAgICAgICAgZW5kQ2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGluZGV4LCBkb25lKSB7XG4gICAgdmFyIGRlc3RpbmF0aW9uID0gTW92ZS50b1Bvc2l0aW9uKGluZGV4LCB0cnVlKTtcbiAgICB2YXIgcG9zaXRpb24gPSBNb3ZlLmdldFBvc2l0aW9uKCk7XG4gICAgdmFyIHNwZWVkID0gZ2V0U3BlZWQoaW5kZXgpO1xuXG4gICAgaWYgKGFicyhkZXN0aW5hdGlvbiAtIHBvc2l0aW9uKSA+PSAxICYmIHNwZWVkID49IDEpIHtcbiAgICAgIGlmIChvcHRpb25zLnVzZVNjcm9sbCkge1xuICAgICAgICBTY3JvbGwuc2Nyb2xsKGRlc3RpbmF0aW9uLCBzcGVlZCwgZmFsc2UsIGRvbmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNpdGlvbihcInRyYW5zZm9ybSBcIiArIHNwZWVkICsgXCJtcyBcIiArIG9wdGlvbnMuZWFzaW5nKTtcbiAgICAgICAgTW92ZS50cmFuc2xhdGUoZGVzdGluYXRpb24sIHRydWUpO1xuICAgICAgICBlbmRDYWxsYmFjayA9IGRvbmU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIE1vdmUuanVtcChpbmRleCk7XG4gICAgICBkb25lKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIHRyYW5zaXRpb24oXCJcIik7XG4gICAgU2Nyb2xsLmNhbmNlbCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U3BlZWQoaW5kZXgpIHtcbiAgICB2YXIgcmV3aW5kU3BlZWQgPSBvcHRpb25zLnJld2luZFNwZWVkO1xuXG4gICAgaWYgKFNwbGlkZTIuaXMoU0xJREUpICYmIHJld2luZFNwZWVkKSB7XG4gICAgICB2YXIgcHJldiA9IENvbnRyb2xsZXIuZ2V0SW5kZXgodHJ1ZSk7XG4gICAgICB2YXIgZW5kID0gQ29udHJvbGxlci5nZXRFbmQoKTtcblxuICAgICAgaWYgKHByZXYgPT09IDAgJiYgaW5kZXggPj0gZW5kIHx8IHByZXYgPj0gZW5kICYmIGluZGV4ID09PSAwKSB7XG4gICAgICAgIHJldHVybiByZXdpbmRTcGVlZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb3B0aW9ucy5zcGVlZDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbW91bnQ6IG1vdW50LFxuICAgIHN0YXJ0OiBzdGFydCxcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufVxuXG52YXIgX1NwbGlkZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIF9TcGxpZGUodGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgdGhpcy5ldmVudCA9IEV2ZW50SW50ZXJmYWNlKCk7XG4gICAgdGhpcy5Db21wb25lbnRzID0ge307XG4gICAgdGhpcy5zdGF0ZSA9IFN0YXRlKENSRUFURUQpO1xuICAgIHRoaXMuc3BsaWRlcyA9IFtdO1xuICAgIHRoaXMuX28gPSB7fTtcbiAgICB0aGlzLl9FID0ge307XG4gICAgdmFyIHJvb3QgPSBpc1N0cmluZyh0YXJnZXQpID8gcXVlcnkoZG9jdW1lbnQsIHRhcmdldCkgOiB0YXJnZXQ7XG4gICAgYXNzZXJ0KHJvb3QsIHJvb3QgKyBcIiBpcyBpbnZhbGlkLlwiKTtcbiAgICB0aGlzLnJvb3QgPSByb290O1xuICAgIG9wdGlvbnMgPSBtZXJnZSh7XG4gICAgICBsYWJlbDogZ2V0QXR0cmlidXRlKHJvb3QsIEFSSUFfTEFCRUwpIHx8IFwiXCIsXG4gICAgICBsYWJlbGxlZGJ5OiBnZXRBdHRyaWJ1dGUocm9vdCwgQVJJQV9MQUJFTExFREJZKSB8fCBcIlwiXG4gICAgfSwgREVGQVVMVFMsIF9TcGxpZGUuZGVmYXVsdHMsIG9wdGlvbnMgfHwge30pO1xuXG4gICAgdHJ5IHtcbiAgICAgIG1lcmdlKG9wdGlvbnMsIEpTT04ucGFyc2UoZ2V0QXR0cmlidXRlKHJvb3QsIERBVEFfQVRUUklCVVRFKSkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGFzc2VydChmYWxzZSwgXCJJbnZhbGlkIEpTT05cIik7XG4gICAgfVxuXG4gICAgdGhpcy5fbyA9IE9iamVjdC5jcmVhdGUobWVyZ2Uoe30sIG9wdGlvbnMpKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBfU3BsaWRlLnByb3RvdHlwZTtcblxuICBfcHJvdG8ubW91bnQgPSBmdW5jdGlvbiBtb3VudChFeHRlbnNpb25zLCBUcmFuc2l0aW9uKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgIENvbXBvbmVudHMyID0gdGhpcy5Db21wb25lbnRzO1xuICAgIGFzc2VydChzdGF0ZS5pcyhbQ1JFQVRFRCwgREVTVFJPWUVEXSksIFwiQWxyZWFkeSBtb3VudGVkIVwiKTtcbiAgICBzdGF0ZS5zZXQoQ1JFQVRFRCk7XG4gICAgdGhpcy5fQyA9IENvbXBvbmVudHMyO1xuICAgIHRoaXMuX1QgPSBUcmFuc2l0aW9uIHx8IHRoaXMuX1QgfHwgKHRoaXMuaXMoRkFERSkgPyBGYWRlIDogU2xpZGUpO1xuICAgIHRoaXMuX0UgPSBFeHRlbnNpb25zIHx8IHRoaXMuX0U7XG4gICAgdmFyIENvbnN0cnVjdG9ycyA9IGFzc2lnbih7fSwgQ29tcG9uZW50Q29uc3RydWN0b3JzLCB0aGlzLl9FLCB7XG4gICAgICBUcmFuc2l0aW9uOiB0aGlzLl9UXG4gICAgfSk7XG4gICAgZm9yT3duKENvbnN0cnVjdG9ycywgZnVuY3Rpb24gKENvbXBvbmVudCwga2V5KSB7XG4gICAgICB2YXIgY29tcG9uZW50ID0gQ29tcG9uZW50KF90aGlzLCBDb21wb25lbnRzMiwgX3RoaXMuX28pO1xuICAgICAgQ29tcG9uZW50czJba2V5XSA9IGNvbXBvbmVudDtcbiAgICAgIGNvbXBvbmVudC5zZXR1cCAmJiBjb21wb25lbnQuc2V0dXAoKTtcbiAgICB9KTtcbiAgICBmb3JPd24oQ29tcG9uZW50czIsIGZ1bmN0aW9uIChjb21wb25lbnQpIHtcbiAgICAgIGNvbXBvbmVudC5tb3VudCAmJiBjb21wb25lbnQubW91bnQoKTtcbiAgICB9KTtcbiAgICB0aGlzLmVtaXQoRVZFTlRfTU9VTlRFRCk7XG4gICAgYWRkQ2xhc3ModGhpcy5yb290LCBDTEFTU19JTklUSUFMSVpFRCk7XG4gICAgc3RhdGUuc2V0KElETEUpO1xuICAgIHRoaXMuZW1pdChFVkVOVF9SRUFEWSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLnN5bmMgPSBmdW5jdGlvbiBzeW5jKHNwbGlkZSkge1xuICAgIHRoaXMuc3BsaWRlcy5wdXNoKHtcbiAgICAgIHNwbGlkZTogc3BsaWRlXG4gICAgfSk7XG4gICAgc3BsaWRlLnNwbGlkZXMucHVzaCh7XG4gICAgICBzcGxpZGU6IHRoaXMsXG4gICAgICBpc1BhcmVudDogdHJ1ZVxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuaXMoSURMRSkpIHtcbiAgICAgIHRoaXMuX0MuU3luYy5yZW1vdW50KCk7XG5cbiAgICAgIHNwbGlkZS5Db21wb25lbnRzLlN5bmMucmVtb3VudCgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5nbyA9IGZ1bmN0aW9uIGdvKGNvbnRyb2wpIHtcbiAgICB0aGlzLl9DLkNvbnRyb2xsZXIuZ28oY29udHJvbCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8ub24gPSBmdW5jdGlvbiBvbihldmVudHMsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5ldmVudC5vbihldmVudHMsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8ub2ZmID0gZnVuY3Rpb24gb2ZmKGV2ZW50cykge1xuICAgIHRoaXMuZXZlbnQub2ZmKGV2ZW50cyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLmVtaXQgPSBmdW5jdGlvbiBlbWl0KGV2ZW50KSB7XG4gICAgdmFyIF90aGlzJGV2ZW50O1xuXG4gICAgKF90aGlzJGV2ZW50ID0gdGhpcy5ldmVudCkuZW1pdC5hcHBseShfdGhpcyRldmVudCwgW2V2ZW50XS5jb25jYXQoc2xpY2UoYXJndW1lbnRzLCAxKSkpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLmFkZCA9IGZ1bmN0aW9uIGFkZChzbGlkZXMsIGluZGV4KSB7XG4gICAgdGhpcy5fQy5TbGlkZXMuYWRkKHNsaWRlcywgaW5kZXgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShtYXRjaGVyKSB7XG4gICAgdGhpcy5fQy5TbGlkZXMucmVtb3ZlKG1hdGNoZXIpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLmlzID0gZnVuY3Rpb24gaXModHlwZSkge1xuICAgIHJldHVybiB0aGlzLl9vLnR5cGUgPT09IHR5cGU7XG4gIH07XG5cbiAgX3Byb3RvLnJlZnJlc2ggPSBmdW5jdGlvbiByZWZyZXNoKCkge1xuICAgIHRoaXMuZW1pdChFVkVOVF9SRUZSRVNIKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koY29tcGxldGVseSkge1xuICAgIGlmIChjb21wbGV0ZWx5ID09PSB2b2lkIDApIHtcbiAgICAgIGNvbXBsZXRlbHkgPSB0cnVlO1xuICAgIH1cblxuICAgIHZhciBldmVudCA9IHRoaXMuZXZlbnQsXG4gICAgICAgIHN0YXRlID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmIChzdGF0ZS5pcyhDUkVBVEVEKSkge1xuICAgICAgRXZlbnRJbnRlcmZhY2UodGhpcykub24oRVZFTlRfUkVBRFksIHRoaXMuZGVzdHJveS5iaW5kKHRoaXMsIGNvbXBsZXRlbHkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yT3duKHRoaXMuX0MsIGZ1bmN0aW9uIChjb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50LmRlc3Ryb3kgJiYgY29tcG9uZW50LmRlc3Ryb3koY29tcGxldGVseSk7XG4gICAgICB9LCB0cnVlKTtcbiAgICAgIGV2ZW50LmVtaXQoRVZFTlRfREVTVFJPWSk7XG4gICAgICBldmVudC5kZXN0cm95KCk7XG4gICAgICBjb21wbGV0ZWx5ICYmIGVtcHR5KHRoaXMuc3BsaWRlcyk7XG4gICAgICBzdGF0ZS5zZXQoREVTVFJPWUVEKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoX1NwbGlkZSwgW3tcbiAgICBrZXk6IFwib3B0aW9uc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX287XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChvcHRpb25zKSB7XG4gICAgICB0aGlzLl9DLk1lZGlhLnNldChvcHRpb25zLCB0cnVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibGVuZ3RoXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fQy5TbGlkZXMuZ2V0TGVuZ3RoKHRydWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpbmRleFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX0MuQ29udHJvbGxlci5nZXRJbmRleCgpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBfU3BsaWRlO1xufSgpO1xuXG52YXIgU3BsaWRlID0gX1NwbGlkZTtcblNwbGlkZS5kZWZhdWx0cyA9IHt9O1xuU3BsaWRlLlNUQVRFUyA9IFNUQVRFUztcbnZhciBDTEFTU19SRU5ERVJFRCA9IFwiaXMtcmVuZGVyZWRcIjtcbnZhciBSRU5ERVJFUl9ERUZBVUxUX0NPTkZJRyA9IHtcbiAgbGlzdFRhZzogXCJ1bFwiLFxuICBzbGlkZVRhZzogXCJsaVwiXG59O1xuXG52YXIgU3R5bGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdHlsZShpZCwgb3B0aW9ucykge1xuICAgIHRoaXMuc3R5bGVzID0ge307XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICB2YXIgX3Byb3RvMiA9IFN0eWxlLnByb3RvdHlwZTtcblxuICBfcHJvdG8yLnJ1bGUgPSBmdW5jdGlvbiBydWxlKHNlbGVjdG9yLCBwcm9wLCB2YWx1ZSwgYnJlYWtwb2ludCkge1xuICAgIGJyZWFrcG9pbnQgPSBicmVha3BvaW50IHx8IFwiZGVmYXVsdFwiO1xuICAgIHZhciBzZWxlY3RvcnMgPSB0aGlzLnN0eWxlc1ticmVha3BvaW50XSA9IHRoaXMuc3R5bGVzW2JyZWFrcG9pbnRdIHx8IHt9O1xuICAgIHZhciBzdHlsZXMgPSBzZWxlY3RvcnNbc2VsZWN0b3JdID0gc2VsZWN0b3JzW3NlbGVjdG9yXSB8fCB7fTtcbiAgICBzdHlsZXNbcHJvcF0gPSB2YWx1ZTtcbiAgfTtcblxuICBfcHJvdG8yLmJ1aWxkID0gZnVuY3Rpb24gYnVpbGQoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgY3NzID0gXCJcIjtcblxuICAgIGlmICh0aGlzLnN0eWxlcy5kZWZhdWx0KSB7XG4gICAgICBjc3MgKz0gdGhpcy5idWlsZFNlbGVjdG9ycyh0aGlzLnN0eWxlcy5kZWZhdWx0KTtcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLnN0eWxlcykuc29ydChmdW5jdGlvbiAobiwgbSkge1xuICAgICAgcmV0dXJuIF90aGlzMi5vcHRpb25zLm1lZGlhUXVlcnkgPT09IFwibWluXCIgPyArbiAtICttIDogK20gLSArbjtcbiAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChicmVha3BvaW50KSB7XG4gICAgICBpZiAoYnJlYWtwb2ludCAhPT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgICAgY3NzICs9IFwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogXCIgKyBicmVha3BvaW50ICsgXCJweCkge1wiO1xuICAgICAgICBjc3MgKz0gX3RoaXMyLmJ1aWxkU2VsZWN0b3JzKF90aGlzMi5zdHlsZXNbYnJlYWtwb2ludF0pO1xuICAgICAgICBjc3MgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGNzcztcbiAgfTtcblxuICBfcHJvdG8yLmJ1aWxkU2VsZWN0b3JzID0gZnVuY3Rpb24gYnVpbGRTZWxlY3RvcnMoc2VsZWN0b3JzKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgY3NzID0gXCJcIjtcbiAgICBmb3JPd24oc2VsZWN0b3JzLCBmdW5jdGlvbiAoc3R5bGVzLCBzZWxlY3Rvcikge1xuICAgICAgc2VsZWN0b3IgPSAoXCIjXCIgKyBfdGhpczMuaWQgKyBcIiBcIiArIHNlbGVjdG9yKS50cmltKCk7XG4gICAgICBjc3MgKz0gc2VsZWN0b3IgKyBcIiB7XCI7XG4gICAgICBmb3JPd24oc3R5bGVzLCBmdW5jdGlvbiAodmFsdWUsIHByb3ApIHtcbiAgICAgICAgaWYgKHZhbHVlIHx8IHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgY3NzICs9IHByb3AgKyBcIjogXCIgKyB2YWx1ZSArIFwiO1wiO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNzcyArPSBcIn1cIjtcbiAgICB9KTtcbiAgICByZXR1cm4gY3NzO1xuICB9O1xuXG4gIHJldHVybiBTdHlsZTtcbn0oKTtcblxudmFyIFNwbGlkZVJlbmRlcmVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3BsaWRlUmVuZGVyZXIoY29udGVudHMsIG9wdGlvbnMsIGNvbmZpZywgZGVmYXVsdHMpIHtcbiAgICB0aGlzLnNsaWRlcyA9IFtdO1xuICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuICAgIHRoaXMuYnJlYWtwb2ludHMgPSBbXTtcbiAgICBtZXJnZShERUZBVUxUUywgZGVmYXVsdHMgfHwge30pO1xuICAgIG1lcmdlKG1lcmdlKHRoaXMub3B0aW9ucywgREVGQVVMVFMpLCBvcHRpb25zIHx8IHt9KTtcbiAgICB0aGlzLmNvbnRlbnRzID0gY29udGVudHM7XG4gICAgdGhpcy5jb25maWcgPSBhc3NpZ24oe30sIFJFTkRFUkVSX0RFRkFVTFRfQ09ORklHLCBjb25maWcgfHwge30pO1xuICAgIHRoaXMuaWQgPSB0aGlzLmNvbmZpZy5pZCB8fCB1bmlxdWVJZChcInNwbGlkZVwiKTtcbiAgICB0aGlzLlN0eWxlID0gbmV3IFN0eWxlKHRoaXMuaWQsIHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5EaXJlY3Rpb24gPSBEaXJlY3Rpb24obnVsbCwgbnVsbCwgdGhpcy5vcHRpb25zKTtcbiAgICBhc3NlcnQodGhpcy5jb250ZW50cy5sZW5ndGgsIFwiUHJvdmlkZSBhdCBsZWFzdCAxIGNvbnRlbnQuXCIpO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgU3BsaWRlUmVuZGVyZXIuY2xlYW4gPSBmdW5jdGlvbiBjbGVhbihzcGxpZGUpIHtcbiAgICB2YXIgX0V2ZW50SW50ZXJmYWNlMTcgPSBFdmVudEludGVyZmFjZShzcGxpZGUpLFxuICAgICAgICBvbiA9IF9FdmVudEludGVyZmFjZTE3Lm9uO1xuXG4gICAgdmFyIHJvb3QgPSBzcGxpZGUucm9vdDtcbiAgICB2YXIgY2xvbmVzID0gcXVlcnlBbGwocm9vdCwgXCIuXCIgKyBDTEFTU19DTE9ORSk7XG4gICAgb24oRVZFTlRfTU9VTlRFRCwgZnVuY3Rpb24gKCkge1xuICAgICAgcmVtb3ZlKGNoaWxkKHJvb3QsIFwic3R5bGVcIikpO1xuICAgIH0pO1xuICAgIHJlbW92ZShjbG9uZXMpO1xuICB9O1xuXG4gIHZhciBfcHJvdG8zID0gU3BsaWRlUmVuZGVyZXIucHJvdG90eXBlO1xuXG4gIF9wcm90bzMuaW5pdCA9IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdGhpcy5wYXJzZUJyZWFrcG9pbnRzKCk7XG4gICAgdGhpcy5pbml0U2xpZGVzKCk7XG4gICAgdGhpcy5yZWdpc3RlclJvb3RTdHlsZXMoKTtcbiAgICB0aGlzLnJlZ2lzdGVyVHJhY2tTdHlsZXMoKTtcbiAgICB0aGlzLnJlZ2lzdGVyU2xpZGVTdHlsZXMoKTtcbiAgICB0aGlzLnJlZ2lzdGVyTGlzdFN0eWxlcygpO1xuICB9O1xuXG4gIF9wcm90bzMuaW5pdFNsaWRlcyA9IGZ1bmN0aW9uIGluaXRTbGlkZXMoKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICBwdXNoKHRoaXMuc2xpZGVzLCB0aGlzLmNvbnRlbnRzLm1hcChmdW5jdGlvbiAoY29udGVudCwgaW5kZXgpIHtcbiAgICAgIGNvbnRlbnQgPSBpc1N0cmluZyhjb250ZW50KSA/IHtcbiAgICAgICAgaHRtbDogY29udGVudFxuICAgICAgfSA6IGNvbnRlbnQ7XG4gICAgICBjb250ZW50LnN0eWxlcyA9IGNvbnRlbnQuc3R5bGVzIHx8IHt9O1xuICAgICAgY29udGVudC5hdHRycyA9IGNvbnRlbnQuYXR0cnMgfHwge307XG5cbiAgICAgIF90aGlzNC5jb3Zlcihjb250ZW50KTtcblxuICAgICAgdmFyIGNsYXNzZXMgPSBfdGhpczQub3B0aW9ucy5jbGFzc2VzLnNsaWRlICsgXCIgXCIgKyAoaW5kZXggPT09IDAgPyBDTEFTU19BQ1RJVkUgOiBcIlwiKTtcbiAgICAgIGFzc2lnbihjb250ZW50LmF0dHJzLCB7XG4gICAgICAgIGNsYXNzOiAoY2xhc3NlcyArIFwiIFwiICsgKGNvbnRlbnQuYXR0cnMuY2xhc3MgfHwgXCJcIikpLnRyaW0oKSxcbiAgICAgICAgc3R5bGU6IF90aGlzNC5idWlsZFN0eWxlcyhjb250ZW50LnN0eWxlcylcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkpO1xuXG4gICAgaWYgKHRoaXMuaXNMb29wKCkpIHtcbiAgICAgIHRoaXMuZ2VuZXJhdGVDbG9uZXModGhpcy5zbGlkZXMpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8zLnJlZ2lzdGVyUm9vdFN0eWxlcyA9IGZ1bmN0aW9uIHJlZ2lzdGVyUm9vdFN0eWxlcygpIHtcbiAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgIHRoaXMuYnJlYWtwb2ludHMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgIHZhciB3aWR0aCA9IF9yZWYyWzBdLFxuICAgICAgICAgIG9wdGlvbnMgPSBfcmVmMlsxXTtcblxuICAgICAgX3RoaXM1LlN0eWxlLnJ1bGUoXCIgXCIsIFwibWF4LXdpZHRoXCIsIHVuaXQob3B0aW9ucy53aWR0aCksIHdpZHRoKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8zLnJlZ2lzdGVyVHJhY2tTdHlsZXMgPSBmdW5jdGlvbiByZWdpc3RlclRyYWNrU3R5bGVzKCkge1xuICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgdmFyIFN0eWxlMiA9IHRoaXMuU3R5bGU7XG4gICAgdmFyIHNlbGVjdG9yID0gXCIuXCIgKyBDTEFTU19UUkFDSztcbiAgICB0aGlzLmJyZWFrcG9pbnRzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICB2YXIgd2lkdGggPSBfcmVmM1swXSxcbiAgICAgICAgICBvcHRpb25zID0gX3JlZjNbMV07XG4gICAgICBTdHlsZTIucnVsZShzZWxlY3RvciwgX3RoaXM2LnJlc29sdmUoXCJwYWRkaW5nTGVmdFwiKSwgX3RoaXM2LmNzc1BhZGRpbmcob3B0aW9ucywgZmFsc2UpLCB3aWR0aCk7XG4gICAgICBTdHlsZTIucnVsZShzZWxlY3RvciwgX3RoaXM2LnJlc29sdmUoXCJwYWRkaW5nUmlnaHRcIiksIF90aGlzNi5jc3NQYWRkaW5nKG9wdGlvbnMsIHRydWUpLCB3aWR0aCk7XG4gICAgICBTdHlsZTIucnVsZShzZWxlY3RvciwgXCJoZWlnaHRcIiwgX3RoaXM2LmNzc1RyYWNrSGVpZ2h0KG9wdGlvbnMpLCB3aWR0aCk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvMy5yZWdpc3Rlckxpc3RTdHlsZXMgPSBmdW5jdGlvbiByZWdpc3Rlckxpc3RTdHlsZXMoKSB7XG4gICAgdmFyIF90aGlzNyA9IHRoaXM7XG5cbiAgICB2YXIgU3R5bGUyID0gdGhpcy5TdHlsZTtcbiAgICB2YXIgc2VsZWN0b3IgPSBcIi5cIiArIENMQVNTX0xJU1Q7XG4gICAgdGhpcy5icmVha3BvaW50cy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmNCkge1xuICAgICAgdmFyIHdpZHRoID0gX3JlZjRbMF0sXG4gICAgICAgICAgb3B0aW9ucyA9IF9yZWY0WzFdO1xuICAgICAgU3R5bGUyLnJ1bGUoc2VsZWN0b3IsIFwidHJhbnNmb3JtXCIsIF90aGlzNy5idWlsZFRyYW5zbGF0ZShvcHRpb25zKSwgd2lkdGgpO1xuXG4gICAgICBpZiAoIV90aGlzNy5jc3NTbGlkZUhlaWdodChvcHRpb25zKSkge1xuICAgICAgICBTdHlsZTIucnVsZShzZWxlY3RvciwgXCJhc3BlY3QtcmF0aW9cIiwgX3RoaXM3LmNzc0FzcGVjdFJhdGlvKG9wdGlvbnMpLCB3aWR0aCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvMy5yZWdpc3RlclNsaWRlU3R5bGVzID0gZnVuY3Rpb24gcmVnaXN0ZXJTbGlkZVN0eWxlcygpIHtcbiAgICB2YXIgX3RoaXM4ID0gdGhpcztcblxuICAgIHZhciBTdHlsZTIgPSB0aGlzLlN0eWxlO1xuICAgIHZhciBzZWxlY3RvciA9IFwiLlwiICsgQ0xBU1NfU0xJREU7XG4gICAgdGhpcy5icmVha3BvaW50cy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmNSkge1xuICAgICAgdmFyIHdpZHRoID0gX3JlZjVbMF0sXG4gICAgICAgICAgb3B0aW9ucyA9IF9yZWY1WzFdO1xuICAgICAgU3R5bGUyLnJ1bGUoc2VsZWN0b3IsIFwid2lkdGhcIiwgX3RoaXM4LmNzc1NsaWRlV2lkdGgob3B0aW9ucyksIHdpZHRoKTtcbiAgICAgIFN0eWxlMi5ydWxlKHNlbGVjdG9yLCBcImhlaWdodFwiLCBfdGhpczguY3NzU2xpZGVIZWlnaHQob3B0aW9ucykgfHwgXCIxMDAlXCIsIHdpZHRoKTtcbiAgICAgIFN0eWxlMi5ydWxlKHNlbGVjdG9yLCBfdGhpczgucmVzb2x2ZShcIm1hcmdpblJpZ2h0XCIpLCB1bml0KG9wdGlvbnMuZ2FwKSB8fCBcIjBweFwiLCB3aWR0aCk7XG4gICAgICBTdHlsZTIucnVsZShzZWxlY3RvciArIFwiID4gaW1nXCIsIFwiZGlzcGxheVwiLCBvcHRpb25zLmNvdmVyID8gXCJub25lXCIgOiBcImlubGluZVwiLCB3aWR0aCk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvMy5idWlsZFRyYW5zbGF0ZSA9IGZ1bmN0aW9uIGJ1aWxkVHJhbnNsYXRlKG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMkRGlyZWN0aW9uID0gdGhpcy5EaXJlY3Rpb24sXG4gICAgICAgIHJlc29sdmUgPSBfdGhpcyREaXJlY3Rpb24ucmVzb2x2ZSxcbiAgICAgICAgb3JpZW50ID0gX3RoaXMkRGlyZWN0aW9uLm9yaWVudDtcbiAgICB2YXIgdmFsdWVzID0gW107XG4gICAgdmFsdWVzLnB1c2godGhpcy5jc3NPZmZzZXRDbG9uZXMob3B0aW9ucykpO1xuICAgIHZhbHVlcy5wdXNoKHRoaXMuY3NzT2Zmc2V0R2FwcyhvcHRpb25zKSk7XG5cbiAgICBpZiAodGhpcy5pc0NlbnRlcihvcHRpb25zKSkge1xuICAgICAgdmFsdWVzLnB1c2godGhpcy5idWlsZENzc1ZhbHVlKG9yaWVudCgtNTApLCBcIiVcIikpO1xuICAgICAgdmFsdWVzLnB1c2guYXBwbHkodmFsdWVzLCB0aGlzLmNzc09mZnNldENlbnRlcihvcHRpb25zKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcy5maWx0ZXIoQm9vbGVhbikubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIFwidHJhbnNsYXRlXCIgKyByZXNvbHZlKFwiWFwiKSArIFwiKFwiICsgdmFsdWUgKyBcIilcIjtcbiAgICB9KS5qb2luKFwiIFwiKTtcbiAgfTtcblxuICBfcHJvdG8zLmNzc09mZnNldENsb25lcyA9IGZ1bmN0aW9uIGNzc09mZnNldENsb25lcyhvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzJERpcmVjdGlvbjIgPSB0aGlzLkRpcmVjdGlvbixcbiAgICAgICAgcmVzb2x2ZSA9IF90aGlzJERpcmVjdGlvbjIucmVzb2x2ZSxcbiAgICAgICAgb3JpZW50ID0gX3RoaXMkRGlyZWN0aW9uMi5vcmllbnQ7XG4gICAgdmFyIGNsb25lQ291bnQgPSB0aGlzLmdldENsb25lQ291bnQoKTtcblxuICAgIGlmICh0aGlzLmlzRml4ZWRXaWR0aChvcHRpb25zKSkge1xuICAgICAgdmFyIF90aGlzJHBhcnNlQ3NzVmFsdWUgPSB0aGlzLnBhcnNlQ3NzVmFsdWUob3B0aW9uc1tyZXNvbHZlKFwiZml4ZWRXaWR0aFwiKV0pLFxuICAgICAgICAgIHZhbHVlID0gX3RoaXMkcGFyc2VDc3NWYWx1ZS52YWx1ZSxcbiAgICAgICAgICB1bml0MiA9IF90aGlzJHBhcnNlQ3NzVmFsdWUudW5pdDtcblxuICAgICAgcmV0dXJuIHRoaXMuYnVpbGRDc3NWYWx1ZShvcmllbnQodmFsdWUpICogY2xvbmVDb3VudCwgdW5pdDIpO1xuICAgIH1cblxuICAgIHZhciBwZXJjZW50ID0gMTAwICogY2xvbmVDb3VudCAvIG9wdGlvbnMucGVyUGFnZTtcbiAgICByZXR1cm4gb3JpZW50KHBlcmNlbnQpICsgXCIlXCI7XG4gIH07XG5cbiAgX3Byb3RvMy5jc3NPZmZzZXRDZW50ZXIgPSBmdW5jdGlvbiBjc3NPZmZzZXRDZW50ZXIob3B0aW9ucykge1xuICAgIHZhciBfdGhpcyREaXJlY3Rpb24zID0gdGhpcy5EaXJlY3Rpb24sXG4gICAgICAgIHJlc29sdmUgPSBfdGhpcyREaXJlY3Rpb24zLnJlc29sdmUsXG4gICAgICAgIG9yaWVudCA9IF90aGlzJERpcmVjdGlvbjMub3JpZW50O1xuXG4gICAgaWYgKHRoaXMuaXNGaXhlZFdpZHRoKG9wdGlvbnMpKSB7XG4gICAgICB2YXIgX3RoaXMkcGFyc2VDc3NWYWx1ZTIgPSB0aGlzLnBhcnNlQ3NzVmFsdWUob3B0aW9uc1tyZXNvbHZlKFwiZml4ZWRXaWR0aFwiKV0pLFxuICAgICAgICAgIHZhbHVlID0gX3RoaXMkcGFyc2VDc3NWYWx1ZTIudmFsdWUsXG4gICAgICAgICAgdW5pdDIgPSBfdGhpcyRwYXJzZUNzc1ZhbHVlMi51bml0O1xuXG4gICAgICByZXR1cm4gW3RoaXMuYnVpbGRDc3NWYWx1ZShvcmllbnQodmFsdWUgLyAyKSwgdW5pdDIpXTtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWVzID0gW107XG4gICAgdmFyIHBlclBhZ2UgPSBvcHRpb25zLnBlclBhZ2UsXG4gICAgICAgIGdhcCA9IG9wdGlvbnMuZ2FwO1xuICAgIHZhbHVlcy5wdXNoKG9yaWVudCg1MCAvIHBlclBhZ2UpICsgXCIlXCIpO1xuXG4gICAgaWYgKGdhcCkge1xuICAgICAgdmFyIF90aGlzJHBhcnNlQ3NzVmFsdWUzID0gdGhpcy5wYXJzZUNzc1ZhbHVlKGdhcCksXG4gICAgICAgICAgX3ZhbHVlID0gX3RoaXMkcGFyc2VDc3NWYWx1ZTMudmFsdWUsXG4gICAgICAgICAgX3VuaXQgPSBfdGhpcyRwYXJzZUNzc1ZhbHVlMy51bml0O1xuXG4gICAgICB2YXIgZ2FwT2Zmc2V0ID0gKF92YWx1ZSAvIHBlclBhZ2UgLSBfdmFsdWUpIC8gMjtcbiAgICAgIHZhbHVlcy5wdXNoKHRoaXMuYnVpbGRDc3NWYWx1ZShvcmllbnQoZ2FwT2Zmc2V0KSwgX3VuaXQpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9O1xuXG4gIF9wcm90bzMuY3NzT2Zmc2V0R2FwcyA9IGZ1bmN0aW9uIGNzc09mZnNldEdhcHMob3B0aW9ucykge1xuICAgIHZhciBjbG9uZUNvdW50ID0gdGhpcy5nZXRDbG9uZUNvdW50KCk7XG5cbiAgICBpZiAoY2xvbmVDb3VudCAmJiBvcHRpb25zLmdhcCkge1xuICAgICAgdmFyIG9yaWVudCA9IHRoaXMuRGlyZWN0aW9uLm9yaWVudDtcblxuICAgICAgdmFyIF90aGlzJHBhcnNlQ3NzVmFsdWU0ID0gdGhpcy5wYXJzZUNzc1ZhbHVlKG9wdGlvbnMuZ2FwKSxcbiAgICAgICAgICB2YWx1ZSA9IF90aGlzJHBhcnNlQ3NzVmFsdWU0LnZhbHVlLFxuICAgICAgICAgIHVuaXQyID0gX3RoaXMkcGFyc2VDc3NWYWx1ZTQudW5pdDtcblxuICAgICAgaWYgKHRoaXMuaXNGaXhlZFdpZHRoKG9wdGlvbnMpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1aWxkQ3NzVmFsdWUob3JpZW50KHZhbHVlICogY2xvbmVDb3VudCksIHVuaXQyKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHBlclBhZ2UgPSBvcHRpb25zLnBlclBhZ2U7XG4gICAgICB2YXIgZ2FwcyA9IGNsb25lQ291bnQgLyBwZXJQYWdlO1xuICAgICAgcmV0dXJuIHRoaXMuYnVpbGRDc3NWYWx1ZShvcmllbnQoZ2FwcyAqIHZhbHVlKSwgdW5pdDIpO1xuICAgIH1cblxuICAgIHJldHVybiBcIlwiO1xuICB9O1xuXG4gIF9wcm90bzMucmVzb2x2ZSA9IGZ1bmN0aW9uIHJlc29sdmUocHJvcCkge1xuICAgIHJldHVybiBjYW1lbFRvS2ViYWIodGhpcy5EaXJlY3Rpb24ucmVzb2x2ZShwcm9wKSk7XG4gIH07XG5cbiAgX3Byb3RvMy5jc3NQYWRkaW5nID0gZnVuY3Rpb24gY3NzUGFkZGluZyhvcHRpb25zLCByaWdodCkge1xuICAgIHZhciBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nO1xuICAgIHZhciBwcm9wID0gdGhpcy5EaXJlY3Rpb24ucmVzb2x2ZShyaWdodCA/IFwicmlnaHRcIiA6IFwibGVmdFwiLCB0cnVlKTtcbiAgICByZXR1cm4gcGFkZGluZyAmJiB1bml0KHBhZGRpbmdbcHJvcF0gfHwgKGlzT2JqZWN0KHBhZGRpbmcpID8gMCA6IHBhZGRpbmcpKSB8fCBcIjBweFwiO1xuICB9O1xuXG4gIF9wcm90bzMuY3NzVHJhY2tIZWlnaHQgPSBmdW5jdGlvbiBjc3NUcmFja0hlaWdodChvcHRpb25zKSB7XG4gICAgdmFyIGhlaWdodCA9IFwiXCI7XG5cbiAgICBpZiAodGhpcy5pc1ZlcnRpY2FsKCkpIHtcbiAgICAgIGhlaWdodCA9IHRoaXMuY3NzSGVpZ2h0KG9wdGlvbnMpO1xuICAgICAgYXNzZXJ0KGhlaWdodCwgJ1wiaGVpZ2h0XCIgaXMgbWlzc2luZy4nKTtcbiAgICAgIGhlaWdodCA9IFwiY2FsYyhcIiArIGhlaWdodCArIFwiIC0gXCIgKyB0aGlzLmNzc1BhZGRpbmcob3B0aW9ucywgZmFsc2UpICsgXCIgLSBcIiArIHRoaXMuY3NzUGFkZGluZyhvcHRpb25zLCB0cnVlKSArIFwiKVwiO1xuICAgIH1cblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH07XG5cbiAgX3Byb3RvMy5jc3NIZWlnaHQgPSBmdW5jdGlvbiBjc3NIZWlnaHQob3B0aW9ucykge1xuICAgIHJldHVybiB1bml0KG9wdGlvbnMuaGVpZ2h0KTtcbiAgfTtcblxuICBfcHJvdG8zLmNzc1NsaWRlV2lkdGggPSBmdW5jdGlvbiBjc3NTbGlkZVdpZHRoKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5hdXRvV2lkdGggPyBcIlwiIDogdW5pdChvcHRpb25zLmZpeGVkV2lkdGgpIHx8ICh0aGlzLmlzVmVydGljYWwoKSA/IFwiXCIgOiB0aGlzLmNzc1NsaWRlU2l6ZShvcHRpb25zKSk7XG4gIH07XG5cbiAgX3Byb3RvMy5jc3NTbGlkZUhlaWdodCA9IGZ1bmN0aW9uIGNzc1NsaWRlSGVpZ2h0KG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdW5pdChvcHRpb25zLmZpeGVkSGVpZ2h0KSB8fCAodGhpcy5pc1ZlcnRpY2FsKCkgPyBvcHRpb25zLmF1dG9IZWlnaHQgPyBcIlwiIDogdGhpcy5jc3NTbGlkZVNpemUob3B0aW9ucykgOiB0aGlzLmNzc0hlaWdodChvcHRpb25zKSk7XG4gIH07XG5cbiAgX3Byb3RvMy5jc3NTbGlkZVNpemUgPSBmdW5jdGlvbiBjc3NTbGlkZVNpemUob3B0aW9ucykge1xuICAgIHZhciBnYXAgPSB1bml0KG9wdGlvbnMuZ2FwKTtcbiAgICByZXR1cm4gXCJjYWxjKCgxMDAlXCIgKyAoZ2FwICYmIFwiICsgXCIgKyBnYXApICsgXCIpL1wiICsgKG9wdGlvbnMucGVyUGFnZSB8fCAxKSArIChnYXAgJiYgXCIgLSBcIiArIGdhcCkgKyBcIilcIjtcbiAgfTtcblxuICBfcHJvdG8zLmNzc0FzcGVjdFJhdGlvID0gZnVuY3Rpb24gY3NzQXNwZWN0UmF0aW8ob3B0aW9ucykge1xuICAgIHZhciBoZWlnaHRSYXRpbyA9IG9wdGlvbnMuaGVpZ2h0UmF0aW87XG4gICAgcmV0dXJuIGhlaWdodFJhdGlvID8gXCJcIiArIDEgLyBoZWlnaHRSYXRpbyA6IFwiXCI7XG4gIH07XG5cbiAgX3Byb3RvMy5idWlsZENzc1ZhbHVlID0gZnVuY3Rpb24gYnVpbGRDc3NWYWx1ZSh2YWx1ZSwgdW5pdDIpIHtcbiAgICByZXR1cm4gXCJcIiArIHZhbHVlICsgdW5pdDI7XG4gIH07XG5cbiAgX3Byb3RvMy5wYXJzZUNzc1ZhbHVlID0gZnVuY3Rpb24gcGFyc2VDc3NWYWx1ZSh2YWx1ZSkge1xuICAgIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgIHZhciBudW1iZXIgPSBwYXJzZUZsb2F0KHZhbHVlKSB8fCAwO1xuICAgICAgdmFyIHVuaXQyID0gdmFsdWUucmVwbGFjZSgvXFxkKihcXC5cXGQqKT8vLCBcIlwiKSB8fCBcInB4XCI7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogbnVtYmVyLFxuICAgICAgICB1bml0OiB1bml0MlxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgdW5pdDogXCJweFwiXG4gICAgfTtcbiAgfTtcblxuICBfcHJvdG8zLnBhcnNlQnJlYWtwb2ludHMgPSBmdW5jdGlvbiBwYXJzZUJyZWFrcG9pbnRzKCkge1xuICAgIHZhciBfdGhpczkgPSB0aGlzO1xuXG4gICAgdmFyIGJyZWFrcG9pbnRzID0gdGhpcy5vcHRpb25zLmJyZWFrcG9pbnRzO1xuICAgIHRoaXMuYnJlYWtwb2ludHMucHVzaChbXCJkZWZhdWx0XCIsIHRoaXMub3B0aW9uc10pO1xuXG4gICAgaWYgKGJyZWFrcG9pbnRzKSB7XG4gICAgICBmb3JPd24oYnJlYWtwb2ludHMsIGZ1bmN0aW9uIChvcHRpb25zLCB3aWR0aCkge1xuICAgICAgICBfdGhpczkuYnJlYWtwb2ludHMucHVzaChbd2lkdGgsIG1lcmdlKG1lcmdlKHt9LCBfdGhpczkub3B0aW9ucyksIG9wdGlvbnMpXSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvMy5pc0ZpeGVkV2lkdGggPSBmdW5jdGlvbiBpc0ZpeGVkV2lkdGgob3B0aW9ucykge1xuICAgIHJldHVybiAhIW9wdGlvbnNbdGhpcy5EaXJlY3Rpb24ucmVzb2x2ZShcImZpeGVkV2lkdGhcIildO1xuICB9O1xuXG4gIF9wcm90bzMuaXNMb29wID0gZnVuY3Rpb24gaXNMb29wKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMudHlwZSA9PT0gTE9PUDtcbiAgfTtcblxuICBfcHJvdG8zLmlzQ2VudGVyID0gZnVuY3Rpb24gaXNDZW50ZXIob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmZvY3VzID09PSBcImNlbnRlclwiKSB7XG4gICAgICBpZiAodGhpcy5pc0xvb3AoKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy50eXBlID09PSBTTElERSkge1xuICAgICAgICByZXR1cm4gIXRoaXMub3B0aW9ucy50cmltU3BhY2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIF9wcm90bzMuaXNWZXJ0aWNhbCA9IGZ1bmN0aW9uIGlzVmVydGljYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5kaXJlY3Rpb24gPT09IFRUQjtcbiAgfTtcblxuICBfcHJvdG8zLmJ1aWxkQ2xhc3NlcyA9IGZ1bmN0aW9uIGJ1aWxkQ2xhc3NlcygpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICByZXR1cm4gW0NMQVNTX1JPT1QsIENMQVNTX1JPT1QgKyBcIi0tXCIgKyBvcHRpb25zLnR5cGUsIENMQVNTX1JPT1QgKyBcIi0tXCIgKyBvcHRpb25zLmRpcmVjdGlvbiwgb3B0aW9ucy5kcmFnICYmIENMQVNTX1JPT1QgKyBcIi0tZHJhZ2dhYmxlXCIsIG9wdGlvbnMuaXNOYXZpZ2F0aW9uICYmIENMQVNTX1JPT1QgKyBcIi0tbmF2XCIsIENMQVNTX0FDVElWRSwgIXRoaXMuY29uZmlnLmhpZGRlbiAmJiBDTEFTU19SRU5ERVJFRF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpO1xuICB9O1xuXG4gIF9wcm90bzMuYnVpbGRBdHRycyA9IGZ1bmN0aW9uIGJ1aWxkQXR0cnMoYXR0cnMpIHtcbiAgICB2YXIgYXR0ciA9IFwiXCI7XG4gICAgZm9yT3duKGF0dHJzLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgYXR0ciArPSB2YWx1ZSA/IFwiIFwiICsgY2FtZWxUb0tlYmFiKGtleSkgKyBcIj1cXFwiXCIgKyB2YWx1ZSArIFwiXFxcIlwiIDogXCJcIjtcbiAgICB9KTtcbiAgICByZXR1cm4gYXR0ci50cmltKCk7XG4gIH07XG5cbiAgX3Byb3RvMy5idWlsZFN0eWxlcyA9IGZ1bmN0aW9uIGJ1aWxkU3R5bGVzKHN0eWxlcykge1xuICAgIHZhciBzdHlsZSA9IFwiXCI7XG4gICAgZm9yT3duKHN0eWxlcywgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgIHN0eWxlICs9IFwiIFwiICsgY2FtZWxUb0tlYmFiKGtleSkgKyBcIjpcIiArIHZhbHVlICsgXCI7XCI7XG4gICAgfSk7XG4gICAgcmV0dXJuIHN0eWxlLnRyaW0oKTtcbiAgfTtcblxuICBfcHJvdG8zLnJlbmRlclNsaWRlcyA9IGZ1bmN0aW9uIHJlbmRlclNsaWRlcygpIHtcbiAgICB2YXIgX3RoaXMxMCA9IHRoaXM7XG5cbiAgICB2YXIgdGFnID0gdGhpcy5jb25maWcuc2xpZGVUYWc7XG4gICAgcmV0dXJuIHRoaXMuc2xpZGVzLm1hcChmdW5jdGlvbiAoY29udGVudCkge1xuICAgICAgcmV0dXJuIFwiPFwiICsgdGFnICsgXCIgXCIgKyBfdGhpczEwLmJ1aWxkQXR0cnMoY29udGVudC5hdHRycykgKyBcIj5cIiArIChjb250ZW50Lmh0bWwgfHwgXCJcIikgKyBcIjwvXCIgKyB0YWcgKyBcIj5cIjtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIF9wcm90bzMuY292ZXIgPSBmdW5jdGlvbiBjb3Zlcihjb250ZW50KSB7XG4gICAgdmFyIHN0eWxlcyA9IGNvbnRlbnQuc3R5bGVzLFxuICAgICAgICBfY29udGVudCRodG1sID0gY29udGVudC5odG1sLFxuICAgICAgICBodG1sID0gX2NvbnRlbnQkaHRtbCA9PT0gdm9pZCAwID8gXCJcIiA6IF9jb250ZW50JGh0bWw7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmNvdmVyICYmICF0aGlzLm9wdGlvbnMubGF6eUxvYWQpIHtcbiAgICAgIHZhciBzcmMgPSBodG1sLm1hdGNoKC88aW1nLio/c3JjXFxzKj1cXHMqKFsnXCJdKSguKz8pXFwxLio/Pi8pO1xuXG4gICAgICBpZiAoc3JjICYmIHNyY1syXSkge1xuICAgICAgICBzdHlsZXMuYmFja2dyb3VuZCA9IFwiY2VudGVyL2NvdmVyIG5vLXJlcGVhdCB1cmwoJ1wiICsgc3JjWzJdICsgXCInKVwiO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8zLmdlbmVyYXRlQ2xvbmVzID0gZnVuY3Rpb24gZ2VuZXJhdGVDbG9uZXMoY29udGVudHMpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHRoaXMub3B0aW9ucy5jbGFzc2VzO1xuICAgIHZhciBjb3VudCA9IHRoaXMuZ2V0Q2xvbmVDb3VudCgpO1xuICAgIHZhciBzbGlkZXMgPSBjb250ZW50cy5zbGljZSgpO1xuXG4gICAgd2hpbGUgKHNsaWRlcy5sZW5ndGggPCBjb3VudCkge1xuICAgICAgcHVzaChzbGlkZXMsIHNsaWRlcyk7XG4gICAgfVxuXG4gICAgcHVzaChzbGlkZXMuc2xpY2UoLWNvdW50KS5yZXZlcnNlKCksIHNsaWRlcy5zbGljZSgwLCBjb3VudCkpLmZvckVhY2goZnVuY3Rpb24gKGNvbnRlbnQsIGluZGV4KSB7XG4gICAgICB2YXIgYXR0cnMgPSBhc3NpZ24oe30sIGNvbnRlbnQuYXR0cnMsIHtcbiAgICAgICAgY2xhc3M6IGNvbnRlbnQuYXR0cnMuY2xhc3MgKyBcIiBcIiArIGNsYXNzZXMuY2xvbmVcbiAgICAgIH0pO1xuICAgICAgdmFyIGNsb25lID0gYXNzaWduKHt9LCBjb250ZW50LCB7XG4gICAgICAgIGF0dHJzOiBhdHRyc1xuICAgICAgfSk7XG4gICAgICBpbmRleCA8IGNvdW50ID8gY29udGVudHMudW5zaGlmdChjbG9uZSkgOiBjb250ZW50cy5wdXNoKGNsb25lKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8zLmdldENsb25lQ291bnQgPSBmdW5jdGlvbiBnZXRDbG9uZUNvdW50KCkge1xuICAgIGlmICh0aGlzLmlzTG9vcCgpKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICAgICAgaWYgKG9wdGlvbnMuY2xvbmVzKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLmNsb25lcztcbiAgICAgIH1cblxuICAgICAgdmFyIHBlclBhZ2UgPSBtYXguYXBwbHkodm9pZCAwLCB0aGlzLmJyZWFrcG9pbnRzLm1hcChmdW5jdGlvbiAoX3JlZjYpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMyID0gX3JlZjZbMV07XG4gICAgICAgIHJldHVybiBvcHRpb25zMi5wZXJQYWdlO1xuICAgICAgfSkpO1xuICAgICAgcmV0dXJuIHBlclBhZ2UgKiAoKG9wdGlvbnMuZmxpY2tNYXhQYWdlcyB8fCAxKSArIDEpO1xuICAgIH1cblxuICAgIHJldHVybiAwO1xuICB9O1xuXG4gIF9wcm90bzMucmVuZGVyQXJyb3dzID0gZnVuY3Rpb24gcmVuZGVyQXJyb3dzKCkge1xuICAgIHZhciBodG1sID0gXCJcIjtcbiAgICBodG1sICs9IFwiPGRpdiBjbGFzcz1cXFwiXCIgKyB0aGlzLm9wdGlvbnMuY2xhc3Nlcy5hcnJvd3MgKyBcIlxcXCI+XCI7XG4gICAgaHRtbCArPSB0aGlzLnJlbmRlckFycm93KHRydWUpO1xuICAgIGh0bWwgKz0gdGhpcy5yZW5kZXJBcnJvdyhmYWxzZSk7XG4gICAgaHRtbCArPSBcIjwvZGl2PlwiO1xuICAgIHJldHVybiBodG1sO1xuICB9O1xuXG4gIF9wcm90bzMucmVuZGVyQXJyb3cgPSBmdW5jdGlvbiByZW5kZXJBcnJvdyhwcmV2KSB7XG4gICAgdmFyIF90aGlzJG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIGNsYXNzZXMgPSBfdGhpcyRvcHRpb25zLmNsYXNzZXMsXG4gICAgICAgIGkxOG4gPSBfdGhpcyRvcHRpb25zLmkxOG47XG4gICAgdmFyIGF0dHJzID0ge1xuICAgICAgY2xhc3M6IGNsYXNzZXMuYXJyb3cgKyBcIiBcIiArIChwcmV2ID8gY2xhc3Nlcy5wcmV2IDogY2xhc3Nlcy5uZXh0KSxcbiAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICBhcmlhTGFiZWw6IHByZXYgPyBpMThuLnByZXYgOiBpMThuLm5leHRcbiAgICB9O1xuICAgIHJldHVybiBcIjxidXR0b24gXCIgKyB0aGlzLmJ1aWxkQXR0cnMoYXR0cnMpICsgXCI+PHN2ZyB4bWxucz1cXFwiXCIgKyBYTUxfTkFNRV9TUEFDRSArIFwiXFxcIiB2aWV3Qm94PVxcXCIwIDAgXCIgKyBTSVpFICsgXCIgXCIgKyBTSVpFICsgXCJcXFwiIHdpZHRoPVxcXCJcIiArIFNJWkUgKyBcIlxcXCIgaGVpZ2h0PVxcXCJcIiArIFNJWkUgKyBcIlxcXCI+PHBhdGggZD1cXFwiXCIgKyAodGhpcy5vcHRpb25zLmFycm93UGF0aCB8fCBQQVRIKSArIFwiXFxcIiAvPjwvc3ZnPjwvYnV0dG9uPlwiO1xuICB9O1xuXG4gIF9wcm90bzMuaHRtbCA9IGZ1bmN0aW9uIGh0bWwoKSB7XG4gICAgdmFyIF90aGlzJGNvbmZpZyA9IHRoaXMuY29uZmlnLFxuICAgICAgICByb290Q2xhc3MgPSBfdGhpcyRjb25maWcucm9vdENsYXNzLFxuICAgICAgICBsaXN0VGFnID0gX3RoaXMkY29uZmlnLmxpc3RUYWcsXG4gICAgICAgIGFycm93cyA9IF90aGlzJGNvbmZpZy5hcnJvd3MsXG4gICAgICAgIGJlZm9yZVRyYWNrID0gX3RoaXMkY29uZmlnLmJlZm9yZVRyYWNrLFxuICAgICAgICBhZnRlclRyYWNrID0gX3RoaXMkY29uZmlnLmFmdGVyVHJhY2ssXG4gICAgICAgIHNsaWRlciA9IF90aGlzJGNvbmZpZy5zbGlkZXIsXG4gICAgICAgIGJlZm9yZVNsaWRlciA9IF90aGlzJGNvbmZpZy5iZWZvcmVTbGlkZXIsXG4gICAgICAgIGFmdGVyU2xpZGVyID0gX3RoaXMkY29uZmlnLmFmdGVyU2xpZGVyO1xuICAgIHZhciBodG1sID0gXCJcIjtcbiAgICBodG1sICs9IFwiPGRpdiBpZD1cXFwiXCIgKyB0aGlzLmlkICsgXCJcXFwiIGNsYXNzPVxcXCJcIiArIHRoaXMuYnVpbGRDbGFzc2VzKCkgKyBcIiBcIiArIChyb290Q2xhc3MgfHwgXCJcIikgKyBcIlxcXCI+XCI7XG4gICAgaHRtbCArPSBcIjxzdHlsZT5cIiArIHRoaXMuU3R5bGUuYnVpbGQoKSArIFwiPC9zdHlsZT5cIjtcblxuICAgIGlmIChzbGlkZXIpIHtcbiAgICAgIGh0bWwgKz0gYmVmb3JlU2xpZGVyIHx8IFwiXCI7XG4gICAgICBodG1sICs9IFwiPGRpdiBjbGFzcz1cXFwic3BsaWRlX19zbGlkZXJcXFwiPlwiO1xuICAgIH1cblxuICAgIGh0bWwgKz0gYmVmb3JlVHJhY2sgfHwgXCJcIjtcblxuICAgIGlmIChhcnJvd3MpIHtcbiAgICAgIGh0bWwgKz0gdGhpcy5yZW5kZXJBcnJvd3MoKTtcbiAgICB9XG5cbiAgICBodG1sICs9IFwiPGRpdiBjbGFzcz1cXFwic3BsaWRlX190cmFja1xcXCI+XCI7XG4gICAgaHRtbCArPSBcIjxcIiArIGxpc3RUYWcgKyBcIiBjbGFzcz1cXFwic3BsaWRlX19saXN0XFxcIj5cIjtcbiAgICBodG1sICs9IHRoaXMucmVuZGVyU2xpZGVzKCk7XG4gICAgaHRtbCArPSBcIjwvXCIgKyBsaXN0VGFnICsgXCI+XCI7XG4gICAgaHRtbCArPSBcIjwvZGl2PlwiO1xuICAgIGh0bWwgKz0gYWZ0ZXJUcmFjayB8fCBcIlwiO1xuXG4gICAgaWYgKHNsaWRlcikge1xuICAgICAgaHRtbCArPSBcIjwvZGl2PlwiO1xuICAgICAgaHRtbCArPSBhZnRlclNsaWRlciB8fCBcIlwiO1xuICAgIH1cblxuICAgIGh0bWwgKz0gXCI8L2Rpdj5cIjtcbiAgICByZXR1cm4gaHRtbDtcbiAgfTtcblxuICByZXR1cm4gU3BsaWRlUmVuZGVyZXI7XG59KCk7XG5cbmV4cG9ydCB7IENMQVNTRVMsIENMQVNTX0FDVElWRSwgQ0xBU1NfQVJST1csIENMQVNTX0FSUk9XUywgQ0xBU1NfQVJST1dfTkVYVCwgQ0xBU1NfQVJST1dfUFJFViwgQ0xBU1NfQ0xPTkUsIENMQVNTX0NPTlRBSU5FUiwgQ0xBU1NfRk9DVVNfSU4sIENMQVNTX0lOSVRJQUxJWkVELCBDTEFTU19MSVNULCBDTEFTU19MT0FESU5HLCBDTEFTU19ORVhULCBDTEFTU19QQUdJTkFUSU9OLCBDTEFTU19QQUdJTkFUSU9OX1BBR0UsIENMQVNTX1BSRVYsIENMQVNTX1BST0dSRVNTLCBDTEFTU19QUk9HUkVTU19CQVIsIENMQVNTX1JPT1QsIENMQVNTX1NMSURFLCBDTEFTU19TUElOTkVSLCBDTEFTU19TUiwgQ0xBU1NfVE9HR0xFLCBDTEFTU19UT0dHTEVfUEFVU0UsIENMQVNTX1RPR0dMRV9QTEFZLCBDTEFTU19UUkFDSywgQ0xBU1NfVklTSUJMRSwgREVGQVVMVFMsIEVWRU5UX0FDVElWRSwgRVZFTlRfQVJST1dTX01PVU5URUQsIEVWRU5UX0FSUk9XU19VUERBVEVELCBFVkVOVF9BVVRPUExBWV9QQVVTRSwgRVZFTlRfQVVUT1BMQVlfUExBWSwgRVZFTlRfQVVUT1BMQVlfUExBWUlORywgRVZFTlRfQ0xJQ0ssIEVWRU5UX0RFU1RST1ksIEVWRU5UX0RSQUcsIEVWRU5UX0RSQUdHRUQsIEVWRU5UX0RSQUdHSU5HLCBFVkVOVF9ISURERU4sIEVWRU5UX0lOQUNUSVZFLCBFVkVOVF9MQVpZTE9BRF9MT0FERUQsIEVWRU5UX01PVU5URUQsIEVWRU5UX01PVkUsIEVWRU5UX01PVkVELCBFVkVOVF9OQVZJR0FUSU9OX01PVU5URUQsIEVWRU5UX1BBR0lOQVRJT05fTU9VTlRFRCwgRVZFTlRfUEFHSU5BVElPTl9VUERBVEVELCBFVkVOVF9SRUFEWSwgRVZFTlRfUkVGUkVTSCwgRVZFTlRfUkVTSVpFLCBFVkVOVF9SRVNJWkVELCBFVkVOVF9TQ1JPTEwsIEVWRU5UX1NDUk9MTEVELCBFVkVOVF9TSElGVEVELCBFVkVOVF9TTElERV9LRVlET1dOLCBFVkVOVF9VUERBVEVELCBFVkVOVF9WSVNJQkxFLCBFdmVudEJpbmRlciwgRXZlbnRJbnRlcmZhY2UsIEZBREUsIExPT1AsIExUUiwgUlRMLCBSZXF1ZXN0SW50ZXJ2YWwsIFNMSURFLCBTVEFUVVNfQ0xBU1NFUywgU3BsaWRlLCBTcGxpZGVSZW5kZXJlciwgU3RhdGUsIFRUQiwgVGhyb3R0bGUsIFNwbGlkZSBhcyBkZWZhdWx0IH07XG4iXSwic291cmNlUm9vdCI6IiJ9