(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~lightgallery"],{

/***/ "./node_modules/lightgallery/css/lightgallery.css":
/*!********************************************************!*\
  !*** ./node_modules/lightgallery/css/lightgallery.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/lightgallery/lightgallery.es5.js":
/*!*******************************************************!*\
  !*** ./node_modules/lightgallery/lightgallery.es5.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * lightgallery | 2.4.0 | January 29th 2022
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/**
 * List of lightGallery events
 * All events should be documented here
 * Below interfaces are used to build the website documentations
 * */
var lGEvents = {
    afterAppendSlide: 'lgAfterAppendSlide',
    init: 'lgInit',
    hasVideo: 'lgHasVideo',
    containerResize: 'lgContainerResize',
    updateSlides: 'lgUpdateSlides',
    afterAppendSubHtml: 'lgAfterAppendSubHtml',
    beforeOpen: 'lgBeforeOpen',
    afterOpen: 'lgAfterOpen',
    slideItemLoad: 'lgSlideItemLoad',
    beforeSlide: 'lgBeforeSlide',
    afterSlide: 'lgAfterSlide',
    posterClick: 'lgPosterClick',
    dragStart: 'lgDragStart',
    dragMove: 'lgDragMove',
    dragEnd: 'lgDragEnd',
    beforeNextSlide: 'lgBeforeNextSlide',
    beforePrevSlide: 'lgBeforePrevSlide',
    beforeClose: 'lgBeforeClose',
    afterClose: 'lgAfterClose',
    rotateLeft: 'lgRotateLeft',
    rotateRight: 'lgRotateRight',
    flipHorizontal: 'lgFlipHorizontal',
    flipVertical: 'lgFlipVertical',
    autoplay: 'lgAutoplay',
    autoplayStart: 'lgAutoplayStart',
    autoplayStop: 'lgAutoplayStop',
};

var lightGalleryCoreSettings = {
    mode: 'lg-slide',
    easing: 'ease',
    speed: 400,
    licenseKey: '0000-0000-000-0000',
    height: '100%',
    width: '100%',
    addClass: '',
    startClass: 'lg-start-zoom',
    backdropDuration: 300,
    container: '',
    startAnimationDuration: 400,
    zoomFromOrigin: true,
    hideBarsDelay: 0,
    showBarsAfter: 10000,
    slideDelay: 0,
    supportLegacyBrowser: true,
    allowMediaOverlap: false,
    videoMaxSize: '1280-720',
    loadYouTubePoster: true,
    defaultCaptionHeight: 0,
    ariaLabelledby: '',
    ariaDescribedby: '',
    closable: true,
    swipeToClose: true,
    closeOnTap: true,
    showCloseIcon: true,
    showMaximizeIcon: false,
    loop: true,
    escKey: true,
    keyPress: true,
    controls: true,
    slideEndAnimation: true,
    hideControlOnEnd: false,
    mousewheel: false,
    getCaptionFromTitleOrAlt: true,
    appendSubHtmlTo: '.lg-sub-html',
    subHtmlSelectorRelative: false,
    preload: 2,
    numberOfSlideItemsInDom: 10,
    selector: '',
    selectWithin: '',
    nextHtml: '',
    prevHtml: '',
    index: 0,
    iframeWidth: '100%',
    iframeHeight: '100%',
    iframeMaxWidth: '100%',
    iframeMaxHeight: '100%',
    download: true,
    counter: true,
    appendCounterTo: '.lg-toolbar',
    swipeThreshold: 50,
    enableSwipe: true,
    enableDrag: true,
    dynamic: false,
    dynamicEl: [],
    extraProps: [],
    exThumbImage: '',
    isMobile: undefined,
    mobileSettings: {
        controls: false,
        showCloseIcon: false,
        download: false,
    },
    plugins: [],
    strings: {
        closeGallery: 'Close gallery',
        toggleMaximize: 'Toggle maximize',
        previousSlide: 'Previous slide',
        nextSlide: 'Next slide',
        download: 'Download',
        playVideo: 'Play video',
    },
};

function initLgPolyfills() {
    (function () {
        if (typeof window.CustomEvent === 'function')
            return false;
        function CustomEvent(event, params) {
            params = params || {
                bubbles: false,
                cancelable: false,
                detail: null,
            };
            var evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        }
        window.CustomEvent = CustomEvent;
    })();
    (function () {
        if (!Element.prototype.matches) {
            Element.prototype.matches =
                Element.prototype.msMatchesSelector ||
                    Element.prototype.webkitMatchesSelector;
        }
    })();
}
var lgQuery = /** @class */ (function () {
    function lgQuery(selector) {
        this.cssVenderPrefixes = [
            'TransitionDuration',
            'TransitionTimingFunction',
            'Transform',
            'Transition',
        ];
        this.selector = this._getSelector(selector);
        this.firstElement = this._getFirstEl();
        return this;
    }
    lgQuery.generateUUID = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    };
    lgQuery.prototype._getSelector = function (selector, context) {
        if (context === void 0) { context = document; }
        if (typeof selector !== 'string') {
            return selector;
        }
        context = context || document;
        var fl = selector.substring(0, 1);
        if (fl === '#') {
            return context.querySelector(selector);
        }
        else {
            return context.querySelectorAll(selector);
        }
    };
    lgQuery.prototype._each = function (func) {
        if (!this.selector) {
            return this;
        }
        if (this.selector.length !== undefined) {
            [].forEach.call(this.selector, func);
        }
        else {
            func(this.selector, 0);
        }
        return this;
    };
    lgQuery.prototype._setCssVendorPrefix = function (el, cssProperty, value) {
        // prettier-ignore
        var property = cssProperty.replace(/-([a-z])/gi, function (s, group1) {
            return group1.toUpperCase();
        });
        if (this.cssVenderPrefixes.indexOf(property) !== -1) {
            el.style[property.charAt(0).toLowerCase() + property.slice(1)] = value;
            el.style['webkit' + property] = value;
            el.style['moz' + property] = value;
            el.style['ms' + property] = value;
            el.style['o' + property] = value;
        }
        else {
            el.style[property] = value;
        }
    };
    lgQuery.prototype._getFirstEl = function () {
        if (this.selector && this.selector.length !== undefined) {
            return this.selector[0];
        }
        else {
            return this.selector;
        }
    };
    lgQuery.prototype.isEventMatched = function (event, eventName) {
        var eventNamespace = eventName.split('.');
        return event
            .split('.')
            .filter(function (e) { return e; })
            .every(function (e) {
            return eventNamespace.indexOf(e) !== -1;
        });
    };
    lgQuery.prototype.attr = function (attr, value) {
        if (value === undefined) {
            if (!this.firstElement) {
                return '';
            }
            return this.firstElement.getAttribute(attr);
        }
        this._each(function (el) {
            el.setAttribute(attr, value);
        });
        return this;
    };
    lgQuery.prototype.find = function (selector) {
        return $LG(this._getSelector(selector, this.selector));
    };
    lgQuery.prototype.first = function () {
        if (this.selector && this.selector.length !== undefined) {
            return $LG(this.selector[0]);
        }
        else {
            return $LG(this.selector);
        }
    };
    lgQuery.prototype.eq = function (index) {
        return $LG(this.selector[index]);
    };
    lgQuery.prototype.parent = function () {
        return $LG(this.selector.parentElement);
    };
    lgQuery.prototype.get = function () {
        return this._getFirstEl();
    };
    lgQuery.prototype.removeAttr = function (attributes) {
        var attrs = attributes.split(' ');
        this._each(function (el) {
            attrs.forEach(function (attr) { return el.removeAttribute(attr); });
        });
        return this;
    };
    lgQuery.prototype.wrap = function (className) {
        if (!this.firstElement) {
            return this;
        }
        var wrapper = document.createElement('div');
        wrapper.className = className;
        this.firstElement.parentNode.insertBefore(wrapper, this.firstElement);
        this.firstElement.parentNode.removeChild(this.firstElement);
        wrapper.appendChild(this.firstElement);
        return this;
    };
    lgQuery.prototype.addClass = function (classNames) {
        if (classNames === void 0) { classNames = ''; }
        this._each(function (el) {
            // IE doesn't support multiple arguments
            classNames.split(' ').forEach(function (className) {
                if (className) {
                    el.classList.add(className);
                }
            });
        });
        return this;
    };
    lgQuery.prototype.removeClass = function (classNames) {
        this._each(function (el) {
            // IE doesn't support multiple arguments
            classNames.split(' ').forEach(function (className) {
                if (className) {
                    el.classList.remove(className);
                }
            });
        });
        return this;
    };
    lgQuery.prototype.hasClass = function (className) {
        if (!this.firstElement) {
            return false;
        }
        return this.firstElement.classList.contains(className);
    };
    lgQuery.prototype.hasAttribute = function (attribute) {
        if (!this.firstElement) {
            return false;
        }
        return this.firstElement.hasAttribute(attribute);
    };
    lgQuery.prototype.toggleClass = function (className) {
        if (!this.firstElement) {
            return this;
        }
        if (this.hasClass(className)) {
            this.removeClass(className);
        }
        else {
            this.addClass(className);
        }
        return this;
    };
    lgQuery.prototype.css = function (property, value) {
        var _this = this;
        this._each(function (el) {
            _this._setCssVendorPrefix(el, property, value);
        });
        return this;
    };
    // Need to pass separate namespaces for separate elements
    lgQuery.prototype.on = function (events, listener) {
        var _this = this;
        if (!this.selector) {
            return this;
        }
        events.split(' ').forEach(function (event) {
            if (!Array.isArray(lgQuery.eventListeners[event])) {
                lgQuery.eventListeners[event] = [];
            }
            lgQuery.eventListeners[event].push(listener);
            _this.selector.addEventListener(event.split('.')[0], listener);
        });
        return this;
    };
    // @todo - test this
    lgQuery.prototype.once = function (event, listener) {
        var _this = this;
        this.on(event, function () {
            _this.off(event);
            listener(event);
        });
        return this;
    };
    lgQuery.prototype.off = function (event) {
        var _this = this;
        if (!this.selector) {
            return this;
        }
        Object.keys(lgQuery.eventListeners).forEach(function (eventName) {
            if (_this.isEventMatched(event, eventName)) {
                lgQuery.eventListeners[eventName].forEach(function (listener) {
                    _this.selector.removeEventListener(eventName.split('.')[0], listener);
                });
                lgQuery.eventListeners[eventName] = [];
            }
        });
        return this;
    };
    lgQuery.prototype.trigger = function (event, detail) {
        if (!this.firstElement) {
            return this;
        }
        var customEvent = new CustomEvent(event.split('.')[0], {
            detail: detail || null,
        });
        this.firstElement.dispatchEvent(customEvent);
        return this;
    };
    // Does not support IE
    lgQuery.prototype.load = function (url) {
        var _this = this;
        fetch(url)
            .then(function (res) { return res.text(); })
            .then(function (html) {
            _this.selector.innerHTML = html;
        });
        return this;
    };
    lgQuery.prototype.html = function (html) {
        if (html === undefined) {
            if (!this.firstElement) {
                return '';
            }
            return this.firstElement.innerHTML;
        }
        this._each(function (el) {
            el.innerHTML = html;
        });
        return this;
    };
    lgQuery.prototype.append = function (html) {
        this._each(function (el) {
            if (typeof html === 'string') {
                el.insertAdjacentHTML('beforeend', html);
            }
            else {
                el.appendChild(html);
            }
        });
        return this;
    };
    lgQuery.prototype.prepend = function (html) {
        this._each(function (el) {
            el.insertAdjacentHTML('afterbegin', html);
        });
        return this;
    };
    lgQuery.prototype.remove = function () {
        this._each(function (el) {
            el.parentNode.removeChild(el);
        });
        return this;
    };
    lgQuery.prototype.empty = function () {
        this._each(function (el) {
            el.innerHTML = '';
        });
        return this;
    };
    lgQuery.prototype.scrollTop = function (scrollTop) {
        if (scrollTop !== undefined) {
            document.body.scrollTop = scrollTop;
            document.documentElement.scrollTop = scrollTop;
            return this;
        }
        else {
            return (window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0);
        }
    };
    lgQuery.prototype.scrollLeft = function (scrollLeft) {
        if (scrollLeft !== undefined) {
            document.body.scrollLeft = scrollLeft;
            document.documentElement.scrollLeft = scrollLeft;
            return this;
        }
        else {
            return (window.pageXOffset ||
                document.documentElement.scrollLeft ||
                document.body.scrollLeft ||
                0);
        }
    };
    lgQuery.prototype.offset = function () {
        if (!this.firstElement) {
            return {
                left: 0,
                top: 0,
            };
        }
        var rect = this.firstElement.getBoundingClientRect();
        var bodyMarginLeft = $LG('body').style().marginLeft;
        // Minus body margin - https://stackoverflow.com/questions/30711548/is-getboundingclientrect-left-returning-a-wrong-value
        return {
            left: rect.left - parseFloat(bodyMarginLeft) + this.scrollLeft(),
            top: rect.top + this.scrollTop(),
        };
    };
    lgQuery.prototype.style = function () {
        if (!this.firstElement) {
            return {};
        }
        return (this.firstElement.currentStyle ||
            window.getComputedStyle(this.firstElement));
    };
    // Width without padding and border even if box-sizing is used.
    lgQuery.prototype.width = function () {
        var style = this.style();
        return (this.firstElement.clientWidth -
            parseFloat(style.paddingLeft) -
            parseFloat(style.paddingRight));
    };
    // Height without padding and border even if box-sizing is used.
    lgQuery.prototype.height = function () {
        var style = this.style();
        return (this.firstElement.clientHeight -
            parseFloat(style.paddingTop) -
            parseFloat(style.paddingBottom));
    };
    lgQuery.eventListeners = {};
    return lgQuery;
}());
function $LG(selector) {
    initLgPolyfills();
    return new lgQuery(selector);
}

var defaultDynamicOptions = [
    'src',
    'sources',
    'subHtml',
    'subHtmlUrl',
    'html',
    'video',
    'poster',
    'slideName',
    'responsive',
    'srcset',
    'sizes',
    'iframe',
    'downloadUrl',
    'download',
    'width',
    'facebookShareUrl',
    'tweetText',
    'iframeTitle',
    'twitterShareUrl',
    'pinterestShareUrl',
    'pinterestText',
    'fbHtml',
    'disqusIdentifier',
    'disqusUrl',
];
// Convert html data-attribute to camalcase
function convertToData(attr) {
    // FInd a way for lgsize
    if (attr === 'href') {
        return 'src';
    }
    attr = attr.replace('data-', '');
    attr = attr.charAt(0).toLowerCase() + attr.slice(1);
    attr = attr.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
    return attr;
}
var utils = {
    /**
     * get possible width and height from the lgSize attribute. Used for ZoomFromOrigin option
     */
    getSize: function (el, container, spacing, defaultLgSize) {
        if (spacing === void 0) { spacing = 0; }
        var LGel = $LG(el);
        var lgSize = LGel.attr('data-lg-size') || defaultLgSize;
        if (!lgSize) {
            return;
        }
        var isResponsiveSizes = lgSize.split(',');
        // if at-least two viewport sizes are available
        if (isResponsiveSizes[1]) {
            var wWidth = window.innerWidth;
            for (var i = 0; i < isResponsiveSizes.length; i++) {
                var size_1 = isResponsiveSizes[i];
                var responsiveWidth = parseInt(size_1.split('-')[2], 10);
                if (responsiveWidth > wWidth) {
                    lgSize = size_1;
                    break;
                }
                // take last item as last option
                if (i === isResponsiveSizes.length - 1) {
                    lgSize = size_1;
                }
            }
        }
        var size = lgSize.split('-');
        var width = parseInt(size[0], 10);
        var height = parseInt(size[1], 10);
        var cWidth = container.width();
        var cHeight = container.height() - spacing;
        var maxWidth = Math.min(cWidth, width);
        var maxHeight = Math.min(cHeight, height);
        var ratio = Math.min(maxWidth / width, maxHeight / height);
        return { width: width * ratio, height: height * ratio };
    },
    /**
     * @desc Get transform value based on the imageSize. Used for ZoomFromOrigin option
     * @param {jQuery Element}
     * @returns {String} Transform CSS string
     */
    getTransform: function (el, container, top, bottom, imageSize) {
        if (!imageSize) {
            return;
        }
        var LGel = $LG(el).find('img').first();
        if (!LGel.get()) {
            return;
        }
        var containerRect = container.get().getBoundingClientRect();
        var wWidth = containerRect.width;
        // using innerWidth to include mobile safari bottom bar
        var wHeight = container.height() - (top + bottom);
        var elWidth = LGel.width();
        var elHeight = LGel.height();
        var elStyle = LGel.style();
        var x = (wWidth - elWidth) / 2 -
            LGel.offset().left +
            (parseFloat(elStyle.paddingLeft) || 0) +
            (parseFloat(elStyle.borderLeft) || 0) +
            $LG(window).scrollLeft() +
            containerRect.left;
        var y = (wHeight - elHeight) / 2 -
            LGel.offset().top +
            (parseFloat(elStyle.paddingTop) || 0) +
            (parseFloat(elStyle.borderTop) || 0) +
            $LG(window).scrollTop() +
            top;
        var scX = elWidth / imageSize.width;
        var scY = elHeight / imageSize.height;
        var transform = 'translate3d(' +
            (x *= -1) +
            'px, ' +
            (y *= -1) +
            'px, 0) scale3d(' +
            scX +
            ', ' +
            scY +
            ', 1)';
        return transform;
    },
    getIframeMarkup: function (iframeWidth, iframeHeight, iframeMaxWidth, iframeMaxHeight, src, iframeTitle) {
        var title = iframeTitle ? 'title="' + iframeTitle + '"' : '';
        return "<div class=\"lg-video-cont lg-has-iframe\" style=\"width:" + iframeWidth + "; max-width:" + iframeMaxWidth + "; height: " + iframeHeight + "; max-height:" + iframeMaxHeight + "\">\n                    <iframe class=\"lg-object\" frameborder=\"0\" " + title + " src=\"" + src + "\"  allowfullscreen=\"true\"></iframe>\n                </div>";
    },
    getImgMarkup: function (index, src, altAttr, srcset, sizes, sources) {
        var srcsetAttr = srcset ? "srcset=\"" + srcset + "\"" : '';
        var sizesAttr = sizes ? "sizes=\"" + sizes + "\"" : '';
        var imgMarkup = "<img " + altAttr + " " + srcsetAttr + "  " + sizesAttr + " class=\"lg-object lg-image\" data-index=\"" + index + "\" src=\"" + src + "\" />";
        var sourceTag = '';
        if (sources) {
            var sourceObj = typeof sources === 'string' ? JSON.parse(sources) : sources;
            sourceTag = sourceObj.map(function (source) {
                var attrs = '';
                Object.keys(source).forEach(function (key) {
                    // Do not remove the first space as it is required to separate the attributes
                    attrs += " " + key + "=\"" + source[key] + "\"";
                });
                return "<source " + attrs + "></source>";
            });
        }
        return "" + sourceTag + imgMarkup;
    },
    // Get src from responsive src
    getResponsiveSrc: function (srcItms) {
        var rsWidth = [];
        var rsSrc = [];
        var src = '';
        for (var i = 0; i < srcItms.length; i++) {
            var _src = srcItms[i].split(' ');
            // Manage empty space
            if (_src[0] === '') {
                _src.splice(0, 1);
            }
            rsSrc.push(_src[0]);
            rsWidth.push(_src[1]);
        }
        var wWidth = window.innerWidth;
        for (var j = 0; j < rsWidth.length; j++) {
            if (parseInt(rsWidth[j], 10) > wWidth) {
                src = rsSrc[j];
                break;
            }
        }
        return src;
    },
    isImageLoaded: function (img) {
        if (!img)
            return false;
        // During the onload event, IE correctly identifies any images that
        // weren’t downloaded as not complete. Others should too. Gecko-based
        // browsers act like NS4 in that they report this incorrectly.
        if (!img.complete) {
            return false;
        }
        // However, they do have two very useful properties: naturalWidth and
        // naturalHeight. These give the true size of the image. If it failed
        // to load, either of these should be zero.
        if (img.naturalWidth === 0) {
            return false;
        }
        // No other way of checking: assume it’s ok.
        return true;
    },
    getVideoPosterMarkup: function (_poster, dummyImg, videoContStyle, playVideoString, _isVideo) {
        var videoClass = '';
        if (_isVideo && _isVideo.youtube) {
            videoClass = 'lg-has-youtube';
        }
        else if (_isVideo && _isVideo.vimeo) {
            videoClass = 'lg-has-vimeo';
        }
        else {
            videoClass = 'lg-has-html5';
        }
        return "<div class=\"lg-video-cont " + videoClass + "\" style=\"" + videoContStyle + "\">\n                <div class=\"lg-video-play-button\">\n                <svg\n                    viewBox=\"0 0 20 20\"\n                    preserveAspectRatio=\"xMidYMid\"\n                    focusable=\"false\"\n                    aria-labelledby=\"" + playVideoString + "\"\n                    role=\"img\"\n                    class=\"lg-video-play-icon\"\n                >\n                    <title>" + playVideoString + "</title>\n                    <polygon class=\"lg-video-play-icon-inner\" points=\"1,0 20,10 1,20\"></polygon>\n                </svg>\n                <svg class=\"lg-video-play-icon-bg\" viewBox=\"0 0 50 50\" focusable=\"false\">\n                    <circle cx=\"50%\" cy=\"50%\" r=\"20\"></circle></svg>\n                <svg class=\"lg-video-play-icon-circle\" viewBox=\"0 0 50 50\" focusable=\"false\">\n                    <circle cx=\"50%\" cy=\"50%\" r=\"20\"></circle>\n                </svg>\n            </div>\n            " + (dummyImg || '') + "\n            <img class=\"lg-object lg-video-poster\" src=\"" + _poster + "\" />\n        </div>";
    },
    /**
     * @desc Create dynamic elements array from gallery items when dynamic option is false
     * It helps to avoid frequent DOM interaction
     * and avoid multiple checks for dynamic elments
     *
     * @returns {Array} dynamicEl
     */
    getDynamicOptions: function (items, extraProps, getCaptionFromTitleOrAlt, exThumbImage) {
        var dynamicElements = [];
        var availableDynamicOptions = __spreadArrays(defaultDynamicOptions, extraProps);
        [].forEach.call(items, function (item) {
            var dynamicEl = {};
            for (var i = 0; i < item.attributes.length; i++) {
                var attr = item.attributes[i];
                if (attr.specified) {
                    var dynamicAttr = convertToData(attr.name);
                    var label = '';
                    if (availableDynamicOptions.indexOf(dynamicAttr) > -1) {
                        label = dynamicAttr;
                    }
                    if (label) {
                        dynamicEl[label] = attr.value;
                    }
                }
            }
            var currentItem = $LG(item);
            var alt = currentItem.find('img').first().attr('alt');
            var title = currentItem.attr('title');
            var thumb = exThumbImage
                ? currentItem.attr(exThumbImage)
                : currentItem.find('img').first().attr('src');
            dynamicEl.thumb = thumb;
            if (getCaptionFromTitleOrAlt && !dynamicEl.subHtml) {
                dynamicEl.subHtml = title || alt || '';
            }
            dynamicEl.alt = alt || title || '';
            dynamicElements.push(dynamicEl);
        });
        return dynamicElements;
    },
    isMobile: function () {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    },
    /**
     * @desc Check the given src is video
     * @param {String} src
     * @return {Object} video type
     * Ex:{ youtube  :  ["//www.youtube.com/watch?v=c0asJgSyxcY", "c0asJgSyxcY"] }
     *
     * @todo - this information can be moved to dynamicEl to avoid frequent calls
     */
    isVideo: function (src, isHTML5VIdeo, index) {
        if (!src) {
            if (isHTML5VIdeo) {
                return {
                    html5: true,
                };
            }
            else {
                console.error('lightGallery :- data-src is not provided on slide item ' +
                    (index + 1) +
                    '. Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/');
                return;
            }
        }
        var youtube = src.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i);
        var vimeo = src.match(/\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i);
        var wistia = src.match(/https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/);
        if (youtube) {
            return {
                youtube: youtube,
            };
        }
        else if (vimeo) {
            return {
                vimeo: vimeo,
            };
        }
        else if (wistia) {
            return {
                wistia: wistia,
            };
        }
    },
};

// @ref - https://stackoverflow.com/questions/3971841/how-to-resize-images-proportionally-keeping-the-aspect-ratio
// @ref - https://2ality.com/2017/04/setting-up-multi-platform-packages.html
// Unique id for each gallery
var lgId = 0;
var LightGallery = /** @class */ (function () {
    function LightGallery(element, options) {
        this.lgOpened = false;
        this.index = 0;
        // lightGallery modules
        this.plugins = [];
        // false when lightGallery load first slide content;
        this.lGalleryOn = false;
        // True when a slide animation is in progress
        this.lgBusy = false;
        this.currentItemsInDom = [];
        // Scroll top value before lightGallery is opened
        this.prevScrollTop = 0;
        this.isDummyImageRemoved = false;
        this.dragOrSwipeEnabled = false;
        this.mediaContainerPosition = {
            top: 0,
            bottom: 0,
        };
        if (!element) {
            return this;
        }
        lgId++;
        this.lgId = lgId;
        this.el = element;
        this.LGel = $LG(element);
        this.generateSettings(options);
        this.buildModules();
        // When using dynamic mode, ensure dynamicEl is an array
        if (this.settings.dynamic &&
            this.settings.dynamicEl !== undefined &&
            !Array.isArray(this.settings.dynamicEl)) {
            throw 'When using dynamic mode, you must also define dynamicEl as an Array.';
        }
        this.galleryItems = this.getItems();
        this.normalizeSettings();
        // Gallery items
        this.init();
        this.validateLicense();
        return this;
    }
    LightGallery.prototype.generateSettings = function (options) {
        // lightGallery settings
        this.settings = __assign(__assign({}, lightGalleryCoreSettings), options);
        if (this.settings.isMobile &&
            typeof this.settings.isMobile === 'function'
            ? this.settings.isMobile()
            : utils.isMobile()) {
            var mobileSettings = __assign(__assign({}, this.settings.mobileSettings), this.settings.mobileSettings);
            this.settings = __assign(__assign({}, this.settings), mobileSettings);
        }
    };
    LightGallery.prototype.normalizeSettings = function () {
        if (this.settings.slideEndAnimation) {
            this.settings.hideControlOnEnd = false;
        }
        if (!this.settings.closable) {
            this.settings.swipeToClose = false;
        }
        // And reset it on close to get the correct value next time
        this.zoomFromOrigin = this.settings.zoomFromOrigin;
        // At the moment, Zoom from image doesn't support dynamic options
        // @todo add zoomFromOrigin support for dynamic images
        if (this.settings.dynamic) {
            this.zoomFromOrigin = false;
        }
        if (!this.settings.container) {
            this.settings.container = document.body;
        }
        // settings.preload should not be grater than $item.length
        this.settings.preload = Math.min(this.settings.preload, this.galleryItems.length);
    };
    LightGallery.prototype.init = function () {
        var _this = this;
        this.addSlideVideoInfo(this.galleryItems);
        this.buildStructure();
        this.LGel.trigger(lGEvents.init, {
            instance: this,
        });
        if (this.settings.keyPress) {
            this.keyPress();
        }
        setTimeout(function () {
            _this.enableDrag();
            _this.enableSwipe();
            _this.triggerPosterClick();
        }, 50);
        this.arrow();
        if (this.settings.mousewheel) {
            this.mousewheel();
        }
        if (!this.settings.dynamic) {
            this.openGalleryOnItemClick();
        }
    };
    LightGallery.prototype.openGalleryOnItemClick = function () {
        var _this = this;
        var _loop_1 = function (index) {
            var element = this_1.items[index];
            var $element = $LG(element);
            // Using different namespace for click because click event should not unbind if selector is same object('this')
            // @todo manage all event listners - should have namespace that represent element
            var uuid = lgQuery.generateUUID();
            $element
                .attr('data-lg-id', uuid)
                .on("click.lgcustom-item-" + uuid, function (e) {
                e.preventDefault();
                var currentItemIndex = _this.settings.index || index;
                _this.openGallery(currentItemIndex, element);
            });
        };
        var this_1 = this;
        // Using for loop instead of using bubbling as the items can be any html element.
        for (var index = 0; index < this.items.length; index++) {
            _loop_1(index);
        }
    };
    /**
     * Module constructor
     * Modules are build incrementally.
     * Gallery should be opened only once all the modules are initialized.
     * use moduleBuildTimeout to make sure this
     */
    LightGallery.prototype.buildModules = function () {
        var _this = this;
        this.settings.plugins.forEach(function (plugin) {
            _this.plugins.push(new plugin(_this, $LG));
        });
    };
    LightGallery.prototype.validateLicense = function () {
        if (!this.settings.licenseKey) {
            console.error('Please provide a valid license key');
        }
        else if (this.settings.licenseKey === '0000-0000-000-0000') {
            console.warn("lightGallery: " + this.settings.licenseKey + " license key is not valid for production use");
        }
    };
    LightGallery.prototype.getSlideItem = function (index) {
        return $LG(this.getSlideItemId(index));
    };
    LightGallery.prototype.getSlideItemId = function (index) {
        return "#lg-item-" + this.lgId + "-" + index;
    };
    LightGallery.prototype.getIdName = function (id) {
        return id + "-" + this.lgId;
    };
    LightGallery.prototype.getElementById = function (id) {
        return $LG("#" + this.getIdName(id));
    };
    LightGallery.prototype.manageSingleSlideClassName = function () {
        if (this.galleryItems.length < 2) {
            this.outer.addClass('lg-single-item');
        }
        else {
            this.outer.removeClass('lg-single-item');
        }
    };
    LightGallery.prototype.buildStructure = function () {
        var _this = this;
        var container = this.$container && this.$container.get();
        if (container) {
            return;
        }
        var controls = '';
        var subHtmlCont = '';
        // Create controls
        if (this.settings.controls) {
            controls = "<button type=\"button\" id=\"" + this.getIdName('lg-prev') + "\" aria-label=\"" + this.settings.strings['previousSlide'] + "\" class=\"lg-prev lg-icon\"> " + this.settings.prevHtml + " </button>\n                <button type=\"button\" id=\"" + this.getIdName('lg-next') + "\" aria-label=\"" + this.settings.strings['nextSlide'] + "\" class=\"lg-next lg-icon\"> " + this.settings.nextHtml + " </button>";
        }
        if (this.settings.appendSubHtmlTo !== '.lg-item') {
            subHtmlCont =
                '<div class="lg-sub-html" role="status" aria-live="polite"></div>';
        }
        var addClasses = '';
        if (this.settings.allowMediaOverlap) {
            // Do not remove space before last single quote
            addClasses += 'lg-media-overlap ';
        }
        var ariaLabelledby = this.settings.ariaLabelledby
            ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"'
            : '';
        var ariaDescribedby = this.settings.ariaDescribedby
            ? 'aria-describedby="' + this.settings.ariaDescribedby + '"'
            : '';
        var containerClassName = "lg-container " + this.settings.addClass + " " + (document.body !== this.settings.container ? 'lg-inline' : '');
        var closeIcon = this.settings.closable && this.settings.showCloseIcon
            ? "<button type=\"button\" aria-label=\"" + this.settings.strings['closeGallery'] + "\" id=\"" + this.getIdName('lg-close') + "\" class=\"lg-close lg-icon\"></button>"
            : '';
        var maximizeIcon = this.settings.showMaximizeIcon
            ? "<button type=\"button\" aria-label=\"" + this.settings.strings['toggleMaximize'] + "\" id=\"" + this.getIdName('lg-maximize') + "\" class=\"lg-maximize lg-icon\"></button>"
            : '';
        var template = "\n        <div class=\"" + containerClassName + "\" id=\"" + this.getIdName('lg-container') + "\" tabindex=\"-1\" aria-modal=\"true\" " + ariaLabelledby + " " + ariaDescribedby + " role=\"dialog\"\n        >\n            <div id=\"" + this.getIdName('lg-backdrop') + "\" class=\"lg-backdrop\"></div>\n\n            <div id=\"" + this.getIdName('lg-outer') + "\" class=\"lg-outer lg-use-css3 lg-css3 lg-hide-items " + addClasses + " \">\n\n              <div id=\"" + this.getIdName('lg-content') + "\" class=\"lg-content\">\n                <div id=\"" + this.getIdName('lg-inner') + "\" class=\"lg-inner\">\n                </div>\n                " + controls + "\n              </div>\n                <div id=\"" + this.getIdName('lg-toolbar') + "\" class=\"lg-toolbar lg-group\">\n                    " + maximizeIcon + "\n                    " + closeIcon + "\n                    </div>\n                    " + (this.settings.appendSubHtmlTo === '.lg-outer'
            ? subHtmlCont
            : '') + "\n                <div id=\"" + this.getIdName('lg-components') + "\" class=\"lg-components\">\n                    " + (this.settings.appendSubHtmlTo === '.lg-sub-html'
            ? subHtmlCont
            : '') + "\n                </div>\n            </div>\n        </div>\n        ";
        $LG(this.settings.container).append(template);
        if (document.body !== this.settings.container) {
            $LG(this.settings.container).css('position', 'relative');
        }
        this.outer = this.getElementById('lg-outer');
        this.$lgComponents = this.getElementById('lg-components');
        this.$backdrop = this.getElementById('lg-backdrop');
        this.$container = this.getElementById('lg-container');
        this.$inner = this.getElementById('lg-inner');
        this.$content = this.getElementById('lg-content');
        this.$toolbar = this.getElementById('lg-toolbar');
        this.$backdrop.css('transition-duration', this.settings.backdropDuration + 'ms');
        var outerClassNames = this.settings.mode + " ";
        this.manageSingleSlideClassName();
        if (this.settings.enableDrag) {
            outerClassNames += 'lg-grab ';
        }
        this.outer.addClass(outerClassNames);
        this.$inner.css('transition-timing-function', this.settings.easing);
        this.$inner.css('transition-duration', this.settings.speed + 'ms');
        if (this.settings.download) {
            this.$toolbar.append("<a id=\"" + this.getIdName('lg-download') + "\" target=\"_blank\" rel=\"noopener\" aria-label=\"" + this.settings.strings['download'] + "\" download class=\"lg-download lg-icon\"></a>");
        }
        this.counter();
        $LG(window).on("resize.lg.global" + this.lgId + " orientationchange.lg.global" + this.lgId, function () {
            _this.refreshOnResize();
        });
        this.hideBars();
        this.manageCloseGallery();
        this.toggleMaximize();
        this.initModules();
    };
    LightGallery.prototype.refreshOnResize = function () {
        if (this.lgOpened) {
            var currentGalleryItem = this.galleryItems[this.index];
            var __slideVideoInfo = currentGalleryItem.__slideVideoInfo;
            this.mediaContainerPosition = this.getMediaContainerPosition();
            var _a = this.mediaContainerPosition, top_1 = _a.top, bottom = _a.bottom;
            this.currentImageSize = utils.getSize(this.items[this.index], this.outer, top_1 + bottom, __slideVideoInfo && this.settings.videoMaxSize);
            if (__slideVideoInfo) {
                this.resizeVideoSlide(this.index, this.currentImageSize);
            }
            if (this.zoomFromOrigin && !this.isDummyImageRemoved) {
                var imgStyle = this.getDummyImgStyles(this.currentImageSize);
                this.outer
                    .find('.lg-current .lg-dummy-img')
                    .first()
                    .attr('style', imgStyle);
            }
            this.LGel.trigger(lGEvents.containerResize);
        }
    };
    LightGallery.prototype.resizeVideoSlide = function (index, imageSize) {
        var lgVideoStyle = this.getVideoContStyle(imageSize);
        var currentSlide = this.getSlideItem(index);
        currentSlide.find('.lg-video-cont').attr('style', lgVideoStyle);
    };
    /**
     * Update slides dynamically.
     * Add, edit or delete slides dynamically when lightGallery is opened.
     * Modify the current gallery items and pass it via updateSlides method
     * @note
     * - Do not mutate existing lightGallery items directly.
     * - Always pass new list of gallery items
     * - You need to take care of thumbnails outside the gallery if any
     * - user this method only if you want to update slides when the gallery is opened. Otherwise, use `refresh()` method.
     * @param items Gallery items
     * @param index After the update operation, which slide gallery should navigate to
     * @category lGPublicMethods
     * @example
     * const plugin = lightGallery();
     *
     * // Adding slides dynamically
     * let galleryItems = [
     * // Access existing lightGallery items
     * // galleryItems are automatically generated internally from the gallery HTML markup
     * // or directly from galleryItems when dynamic gallery is used
     *   ...plugin.galleryItems,
     *     ...[
     *       {
     *         src: 'img/img-1.png',
     *           thumb: 'img/thumb1.png',
     *         },
     *     ],
     *   ];
     *   plugin.updateSlides(
     *     galleryItems,
     *     plugin.index,
     *   );
     *
     *
     * // Remove slides dynamically
     * galleryItems = JSON.parse(
     *   JSON.stringify(updateSlideInstance.galleryItems),
     * );
     * galleryItems.shift();
     * updateSlideInstance.updateSlides(galleryItems, 1);
     * @see <a href="/demos/update-slides/">Demo</a>
     */
    LightGallery.prototype.updateSlides = function (items, index) {
        if (this.index > items.length - 1) {
            this.index = items.length - 1;
        }
        if (items.length === 1) {
            this.index = 0;
        }
        if (!items.length) {
            this.closeGallery();
            return;
        }
        var currentSrc = this.galleryItems[index].src;
        this.galleryItems = items;
        this.updateControls();
        this.$inner.empty();
        this.currentItemsInDom = [];
        var _index = 0;
        // Find the current index based on source value of the slide
        this.galleryItems.some(function (galleryItem, itemIndex) {
            if (galleryItem.src === currentSrc) {
                _index = itemIndex;
                return true;
            }
            return false;
        });
        this.currentItemsInDom = this.organizeSlideItems(_index, -1);
        this.loadContent(_index, true);
        this.getSlideItem(_index).addClass('lg-current');
        this.index = _index;
        this.updateCurrentCounter(_index);
        this.LGel.trigger(lGEvents.updateSlides);
    };
    // Get gallery items based on multiple conditions
    LightGallery.prototype.getItems = function () {
        // Gallery items
        this.items = [];
        if (!this.settings.dynamic) {
            if (this.settings.selector === 'this') {
                this.items.push(this.el);
            }
            else if (this.settings.selector) {
                if (typeof this.settings.selector === 'string') {
                    if (this.settings.selectWithin) {
                        var selectWithin = $LG(this.settings.selectWithin);
                        this.items = selectWithin
                            .find(this.settings.selector)
                            .get();
                    }
                    else {
                        this.items = this.el.querySelectorAll(this.settings.selector);
                    }
                }
                else {
                    this.items = this.settings.selector;
                }
            }
            else {
                this.items = this.el.children;
            }
            return utils.getDynamicOptions(this.items, this.settings.extraProps, this.settings.getCaptionFromTitleOrAlt, this.settings.exThumbImage);
        }
        else {
            return this.settings.dynamicEl || [];
        }
    };
    /**
     * Open lightGallery.
     * Open gallery with specific slide by passing index of the slide as parameter.
     * @category lGPublicMethods
     * @param {Number} index  - index of the slide
     * @param {HTMLElement} element - Which image lightGallery should zoom from
     *
     * @example
     * const $dynamicGallery = document.getElementById('dynamic-gallery-demo');
     * const dynamicGallery = lightGallery($dynamicGallery, {
     *     dynamic: true,
     *     dynamicEl: [
     *         {
     *              src: 'img/1.jpg',
     *              thumb: 'img/thumb-1.jpg',
     *              subHtml: '<h4>Image 1 title</h4><p>Image 1 descriptions.</p>',
     *         },
     *         ...
     *     ],
     * });
     * $dynamicGallery.addEventListener('click', function () {
     *     // Starts with third item.(Optional).
     *     // This is useful if you want use dynamic mode with
     *     // custom thumbnails (thumbnails outside gallery),
     *     dynamicGallery.openGallery(2);
     * });
     *
     */
    LightGallery.prototype.openGallery = function (index, element) {
        var _this = this;
        if (index === void 0) { index = this.settings.index; }
        // prevent accidental double execution
        if (this.lgOpened)
            return;
        this.lgOpened = true;
        this.outer.get().focus();
        this.outer.removeClass('lg-hide-items');
        // Add display block, but still has opacity 0
        this.$container.addClass('lg-show');
        var itemsToBeInsertedToDom = this.getItemsToBeInsertedToDom(index, index);
        this.currentItemsInDom = itemsToBeInsertedToDom;
        var items = '';
        itemsToBeInsertedToDom.forEach(function (item) {
            items = items + ("<div id=\"" + item + "\" class=\"lg-item\"></div>");
        });
        this.$inner.append(items);
        this.addHtml(index);
        var transform = '';
        this.mediaContainerPosition = this.getMediaContainerPosition();
        var _a = this.mediaContainerPosition, top = _a.top, bottom = _a.bottom;
        if (!this.settings.allowMediaOverlap) {
            this.setMediaContainerPosition(top, bottom);
        }
        var __slideVideoInfo = this.galleryItems[index].__slideVideoInfo;
        if (this.zoomFromOrigin && element) {
            this.currentImageSize = utils.getSize(element, this.outer, top + bottom, __slideVideoInfo && this.settings.videoMaxSize);
            transform = utils.getTransform(element, this.outer, top, bottom, this.currentImageSize);
        }
        if (!this.zoomFromOrigin || !transform) {
            this.outer.addClass(this.settings.startClass);
            this.getSlideItem(index).removeClass('lg-complete');
        }
        var timeout = this.settings.zoomFromOrigin
            ? 100
            : this.settings.backdropDuration;
        setTimeout(function () {
            _this.outer.addClass('lg-components-open');
        }, timeout);
        this.index = index;
        this.LGel.trigger(lGEvents.beforeOpen);
        // add class lg-current to remove initial transition
        this.getSlideItem(index).addClass('lg-current');
        this.lGalleryOn = false;
        // Store the current scroll top value to scroll back after closing the gallery..
        this.prevScrollTop = $LG(window).scrollTop();
        setTimeout(function () {
            // Need to check both zoomFromOrigin and transform values as we need to set set the
            // default opening animation if user missed to add the lg-size attribute
            if (_this.zoomFromOrigin && transform) {
                var currentSlide_1 = _this.getSlideItem(index);
                currentSlide_1.css('transform', transform);
                setTimeout(function () {
                    currentSlide_1
                        .addClass('lg-start-progress lg-start-end-progress')
                        .css('transition-duration', _this.settings.startAnimationDuration + 'ms');
                    _this.outer.addClass('lg-zoom-from-image');
                });
                setTimeout(function () {
                    currentSlide_1.css('transform', 'translate3d(0, 0, 0)');
                }, 100);
            }
            setTimeout(function () {
                _this.$backdrop.addClass('in');
                _this.$container.addClass('lg-show-in');
            }, 10);
            // lg-visible class resets gallery opacity to 1
            if (!_this.zoomFromOrigin || !transform) {
                setTimeout(function () {
                    _this.outer.addClass('lg-visible');
                }, _this.settings.backdropDuration);
            }
            // initiate slide function
            _this.slide(index, false, false, false);
            _this.LGel.trigger(lGEvents.afterOpen);
        });
        if (document.body === this.settings.container) {
            $LG('html').addClass('lg-on');
        }
    };
    /**
     * Note - Changing the position of the media on every slide transition creates a flickering effect.
     * Therefore, The height of the caption is calculated dynamically, only once based on the first slide caption.
     * if you have dynamic captions for each media,
     * you can provide an appropriate height for the captions via allowMediaOverlap option
     */
    LightGallery.prototype.getMediaContainerPosition = function () {
        if (this.settings.allowMediaOverlap) {
            return {
                top: 0,
                bottom: 0,
            };
        }
        var top = this.$toolbar.get().clientHeight || 0;
        var subHtml = this.outer.find('.lg-components .lg-sub-html').get();
        var captionHeight = this.settings.defaultCaptionHeight ||
            (subHtml && subHtml.clientHeight) ||
            0;
        var thumbContainer = this.outer.find('.lg-thumb-outer').get();
        var thumbHeight = thumbContainer ? thumbContainer.clientHeight : 0;
        var bottom = thumbHeight + captionHeight;
        return {
            top: top,
            bottom: bottom,
        };
    };
    LightGallery.prototype.setMediaContainerPosition = function (top, bottom) {
        if (top === void 0) { top = 0; }
        if (bottom === void 0) { bottom = 0; }
        this.$content.css('top', top + 'px').css('bottom', bottom + 'px');
    };
    LightGallery.prototype.hideBars = function () {
        var _this = this;
        // Hide controllers if mouse doesn't move for some period
        setTimeout(function () {
            _this.outer.removeClass('lg-hide-items');
            if (_this.settings.hideBarsDelay > 0) {
                _this.outer.on('mousemove.lg click.lg touchstart.lg', function () {
                    _this.outer.removeClass('lg-hide-items');
                    clearTimeout(_this.hideBarTimeout);
                    // Timeout will be cleared on each slide movement also
                    _this.hideBarTimeout = setTimeout(function () {
                        _this.outer.addClass('lg-hide-items');
                    }, _this.settings.hideBarsDelay);
                });
                _this.outer.trigger('mousemove.lg');
            }
        }, this.settings.showBarsAfter);
    };
    LightGallery.prototype.initPictureFill = function ($img) {
        if (this.settings.supportLegacyBrowser) {
            try {
                picturefill({
                    elements: [$img.get()],
                });
            }
            catch (e) {
                console.warn('lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document.');
            }
        }
    };
    /**
     *  @desc Create image counter
     *  Ex: 1/10
     */
    LightGallery.prototype.counter = function () {
        if (this.settings.counter) {
            var counterHtml = "<div class=\"lg-counter\" role=\"status\" aria-live=\"polite\">\n                <span id=\"" + this.getIdName('lg-counter-current') + "\" class=\"lg-counter-current\">" + (this.index + 1) + " </span> /\n                <span id=\"" + this.getIdName('lg-counter-all') + "\" class=\"lg-counter-all\">" + this.galleryItems.length + " </span></div>";
            this.outer.find(this.settings.appendCounterTo).append(counterHtml);
        }
    };
    /**
     *  @desc add sub-html into the slide
     *  @param {Number} index - index of the slide
     */
    LightGallery.prototype.addHtml = function (index) {
        var subHtml;
        var subHtmlUrl;
        if (this.galleryItems[index].subHtmlUrl) {
            subHtmlUrl = this.galleryItems[index].subHtmlUrl;
        }
        else {
            subHtml = this.galleryItems[index].subHtml;
        }
        if (!subHtmlUrl) {
            if (subHtml) {
                // get first letter of sub-html
                // if first letter starts with . or # get the html form the jQuery object
                var fL = subHtml.substring(0, 1);
                if (fL === '.' || fL === '#') {
                    if (this.settings.subHtmlSelectorRelative &&
                        !this.settings.dynamic) {
                        subHtml = $LG(this.items)
                            .eq(index)
                            .find(subHtml)
                            .first()
                            .html();
                    }
                    else {
                        subHtml = $LG(subHtml).first().html();
                    }
                }
            }
            else {
                subHtml = '';
            }
        }
        if (this.settings.appendSubHtmlTo !== '.lg-item') {
            if (subHtmlUrl) {
                this.outer.find('.lg-sub-html').load(subHtmlUrl);
            }
            else {
                this.outer.find('.lg-sub-html').html(subHtml);
            }
        }
        else {
            var currentSlide = $LG(this.getSlideItemId(index));
            if (subHtmlUrl) {
                currentSlide.load(subHtmlUrl);
            }
            else {
                currentSlide.append("<div class=\"lg-sub-html\">" + subHtml + "</div>");
            }
        }
        // Add lg-empty-html class if title doesn't exist
        if (typeof subHtml !== 'undefined' && subHtml !== null) {
            if (subHtml === '') {
                this.outer
                    .find(this.settings.appendSubHtmlTo)
                    .addClass('lg-empty-html');
            }
            else {
                this.outer
                    .find(this.settings.appendSubHtmlTo)
                    .removeClass('lg-empty-html');
            }
        }
        this.LGel.trigger(lGEvents.afterAppendSubHtml, {
            index: index,
        });
    };
    /**
     *  @desc Preload slides
     *  @param {Number} index - index of the slide
     * @todo preload not working for the first slide, Also, should work for the first and last slide as well
     */
    LightGallery.prototype.preload = function (index) {
        for (var i = 1; i <= this.settings.preload; i++) {
            if (i >= this.galleryItems.length - index) {
                break;
            }
            this.loadContent(index + i, false);
        }
        for (var j = 1; j <= this.settings.preload; j++) {
            if (index - j < 0) {
                break;
            }
            this.loadContent(index - j, false);
        }
    };
    LightGallery.prototype.getDummyImgStyles = function (imageSize) {
        if (!imageSize)
            return '';
        return "width:" + imageSize.width + "px;\n                margin-left: -" + imageSize.width / 2 + "px;\n                margin-top: -" + imageSize.height / 2 + "px;\n                height:" + imageSize.height + "px";
    };
    LightGallery.prototype.getVideoContStyle = function (imageSize) {
        if (!imageSize)
            return '';
        return "width:" + imageSize.width + "px;\n                height:" + imageSize.height + "px";
    };
    LightGallery.prototype.getDummyImageContent = function ($currentSlide, index, alt) {
        var $currentItem;
        if (!this.settings.dynamic) {
            $currentItem = $LG(this.items).eq(index);
        }
        if ($currentItem) {
            var _dummyImgSrc = void 0;
            if (!this.settings.exThumbImage) {
                _dummyImgSrc = $currentItem.find('img').first().attr('src');
            }
            else {
                _dummyImgSrc = $currentItem.attr(this.settings.exThumbImage);
            }
            if (!_dummyImgSrc)
                return '';
            var imgStyle = this.getDummyImgStyles(this.currentImageSize);
            var dummyImgContent = "<img " + alt + " style=\"" + imgStyle + "\" class=\"lg-dummy-img\" src=\"" + _dummyImgSrc + "\" />";
            $currentSlide.addClass('lg-first-slide');
            this.outer.addClass('lg-first-slide-loading');
            return dummyImgContent;
        }
        return '';
    };
    LightGallery.prototype.setImgMarkup = function (src, $currentSlide, index) {
        var currentGalleryItem = this.galleryItems[index];
        var alt = currentGalleryItem.alt, srcset = currentGalleryItem.srcset, sizes = currentGalleryItem.sizes, sources = currentGalleryItem.sources;
        // Use the thumbnail as dummy image which will be resized to actual image size and
        // displayed on top of actual image
        var imgContent = '';
        var altAttr = alt ? 'alt="' + alt + '"' : '';
        if (this.isFirstSlideWithZoomAnimation()) {
            imgContent = this.getDummyImageContent($currentSlide, index, altAttr);
        }
        else {
            imgContent = utils.getImgMarkup(index, src, altAttr, srcset, sizes, sources);
        }
        var imgMarkup = "<picture class=\"lg-img-wrap\"> " + imgContent + "</picture>";
        $currentSlide.prepend(imgMarkup);
    };
    LightGallery.prototype.onSlideObjectLoad = function ($slide, isHTML5VideoWithoutPoster, onLoad, onError) {
        var mediaObject = $slide.find('.lg-object').first();
        if (utils.isImageLoaded(mediaObject.get()) ||
            isHTML5VideoWithoutPoster) {
            onLoad();
        }
        else {
            mediaObject.on('load.lg error.lg', function () {
                onLoad && onLoad();
            });
            mediaObject.on('error.lg', function () {
                onError && onError();
            });
        }
    };
    /**
     *
     * @param $el Current slide item
     * @param index
     * @param delay Delay is 0 except first time
     * @param speed Speed is same as delay, except it is 0 if gallery is opened via hash plugin
     * @param isFirstSlide
     */
    LightGallery.prototype.onLgObjectLoad = function (currentSlide, index, delay, speed, isFirstSlide, isHTML5VideoWithoutPoster) {
        var _this = this;
        this.onSlideObjectLoad(currentSlide, isHTML5VideoWithoutPoster, function () {
            _this.triggerSlideItemLoad(currentSlide, index, delay, speed, isFirstSlide);
        }, function () {
            currentSlide.addClass('lg-complete lg-complete_');
            currentSlide.html('<span class="lg-error-msg">Oops... Failed to load content...</span>');
        });
    };
    LightGallery.prototype.triggerSlideItemLoad = function ($currentSlide, index, delay, speed, isFirstSlide) {
        var _this = this;
        var currentGalleryItem = this.galleryItems[index];
        // Adding delay for video slides without poster for better performance and user experience
        // Videos should start playing once once the gallery is completely loaded
        var _speed = isFirstSlide &&
            this.getSlideType(currentGalleryItem) === 'video' &&
            !currentGalleryItem.poster
            ? speed
            : 0;
        setTimeout(function () {
            $currentSlide.addClass('lg-complete lg-complete_');
            _this.LGel.trigger(lGEvents.slideItemLoad, {
                index: index,
                delay: delay || 0,
                isFirstSlide: isFirstSlide,
            });
        }, _speed);
    };
    LightGallery.prototype.isFirstSlideWithZoomAnimation = function () {
        return !!(!this.lGalleryOn &&
            this.zoomFromOrigin &&
            this.currentImageSize);
    };
    // Add video slideInfo
    LightGallery.prototype.addSlideVideoInfo = function (items) {
        var _this = this;
        items.forEach(function (element, index) {
            element.__slideVideoInfo = utils.isVideo(element.src, !!element.video, index);
            if (element.__slideVideoInfo &&
                _this.settings.loadYouTubePoster &&
                !element.poster &&
                element.__slideVideoInfo.youtube) {
                element.poster = "//img.youtube.com/vi/" + element.__slideVideoInfo.youtube[1] + "/maxresdefault.jpg";
            }
        });
    };
    /**
     *  Load slide content into slide.
     *  This is used to load content into slides that is not visible too
     *  @param {Number} index - index of the slide.
     *  @param {Boolean} rec - if true call loadcontent() function again.
     */
    LightGallery.prototype.loadContent = function (index, rec) {
        var _this = this;
        var currentGalleryItem = this.galleryItems[index];
        var $currentSlide = $LG(this.getSlideItemId(index));
        var poster = currentGalleryItem.poster, srcset = currentGalleryItem.srcset, sizes = currentGalleryItem.sizes, sources = currentGalleryItem.sources;
        var src = currentGalleryItem.src;
        var video = currentGalleryItem.video;
        var _html5Video = video && typeof video === 'string' ? JSON.parse(video) : video;
        if (currentGalleryItem.responsive) {
            var srcDyItms = currentGalleryItem.responsive.split(',');
            src = utils.getResponsiveSrc(srcDyItms) || src;
        }
        var videoInfo = currentGalleryItem.__slideVideoInfo;
        var lgVideoStyle = '';
        var iframe = !!currentGalleryItem.iframe;
        var isFirstSlide = !this.lGalleryOn;
        // delay for adding complete class. it is 0 except first time.
        var delay = 0;
        if (isFirstSlide) {
            if (this.zoomFromOrigin && this.currentImageSize) {
                delay = this.settings.startAnimationDuration + 10;
            }
            else {
                delay = this.settings.backdropDuration + 10;
            }
        }
        if (!$currentSlide.hasClass('lg-loaded')) {
            if (videoInfo) {
                var _a = this.mediaContainerPosition, top_2 = _a.top, bottom = _a.bottom;
                var videoSize = utils.getSize(this.items[index], this.outer, top_2 + bottom, videoInfo && this.settings.videoMaxSize);
                lgVideoStyle = this.getVideoContStyle(videoSize);
            }
            if (iframe) {
                var markup = utils.getIframeMarkup(this.settings.iframeWidth, this.settings.iframeHeight, this.settings.iframeMaxWidth, this.settings.iframeMaxHeight, src, currentGalleryItem.iframeTitle);
                $currentSlide.prepend(markup);
            }
            else if (poster) {
                var dummyImg = '';
                var hasStartAnimation = isFirstSlide &&
                    this.zoomFromOrigin &&
                    this.currentImageSize;
                if (hasStartAnimation) {
                    dummyImg = this.getDummyImageContent($currentSlide, index, '');
                }
                var markup = utils.getVideoPosterMarkup(poster, dummyImg || '', lgVideoStyle, this.settings.strings['playVideo'], videoInfo);
                $currentSlide.prepend(markup);
            }
            else if (videoInfo) {
                var markup = "<div class=\"lg-video-cont \" style=\"" + lgVideoStyle + "\"></div>";
                $currentSlide.prepend(markup);
            }
            else {
                this.setImgMarkup(src, $currentSlide, index);
                if (srcset || sources) {
                    var $img = $currentSlide.find('.lg-object');
                    this.initPictureFill($img);
                }
            }
            if (poster || videoInfo) {
                this.LGel.trigger(lGEvents.hasVideo, {
                    index: index,
                    src: src,
                    html5Video: _html5Video,
                    hasPoster: !!poster,
                });
            }
            this.LGel.trigger(lGEvents.afterAppendSlide, { index: index });
            if (this.lGalleryOn &&
                this.settings.appendSubHtmlTo === '.lg-item') {
                this.addHtml(index);
            }
        }
        // For first time add some delay for displaying the start animation.
        var _speed = 0;
        // Do not change the delay value because it is required for zoom plugin.
        // If gallery opened from direct url (hash) speed value should be 0
        if (delay && !$LG(document.body).hasClass('lg-from-hash')) {
            _speed = delay;
        }
        // Only for first slide and zoomFromOrigin is enabled
        if (this.isFirstSlideWithZoomAnimation()) {
            setTimeout(function () {
                $currentSlide
                    .removeClass('lg-start-end-progress lg-start-progress')
                    .removeAttr('style');
            }, this.settings.startAnimationDuration + 100);
            if (!$currentSlide.hasClass('lg-loaded')) {
                setTimeout(function () {
                    if (_this.getSlideType(currentGalleryItem) === 'image') {
                        $currentSlide
                            .find('.lg-img-wrap')
                            .append(utils.getImgMarkup(index, src, '', srcset, sizes, currentGalleryItem.sources));
                        if (srcset || sources) {
                            var $img = $currentSlide.find('.lg-object');
                            _this.initPictureFill($img);
                        }
                    }
                    if (_this.getSlideType(currentGalleryItem) === 'image' ||
                        (_this.getSlideType(currentGalleryItem) === 'video' &&
                            poster)) {
                        _this.onLgObjectLoad($currentSlide, index, delay, _speed, true, false);
                        // load remaining slides once the slide is completely loaded
                        _this.onSlideObjectLoad($currentSlide, !!(videoInfo && videoInfo.html5 && !poster), function () {
                            _this.loadContentOnFirstSlideLoad(index, $currentSlide, _speed);
                        }, function () {
                            _this.loadContentOnFirstSlideLoad(index, $currentSlide, _speed);
                        });
                    }
                }, this.settings.startAnimationDuration + 100);
            }
        }
        // SLide content has been added to dom
        $currentSlide.addClass('lg-loaded');
        if (!this.isFirstSlideWithZoomAnimation() ||
            (this.getSlideType(currentGalleryItem) === 'video' && !poster)) {
            this.onLgObjectLoad($currentSlide, index, delay, _speed, isFirstSlide, !!(videoInfo && videoInfo.html5 && !poster));
        }
        // When gallery is opened once content is loaded (second time) need to add lg-complete class for css styling
        if ((!this.zoomFromOrigin || !this.currentImageSize) &&
            $currentSlide.hasClass('lg-complete_') &&
            !this.lGalleryOn) {
            setTimeout(function () {
                $currentSlide.addClass('lg-complete');
            }, this.settings.backdropDuration);
        }
        // Content loaded
        // Need to set lGalleryOn before calling preload function
        this.lGalleryOn = true;
        if (rec === true) {
            if (!$currentSlide.hasClass('lg-complete_')) {
                $currentSlide
                    .find('.lg-object')
                    .first()
                    .on('load.lg error.lg', function () {
                    _this.preload(index);
                });
            }
            else {
                this.preload(index);
            }
        }
    };
    /**
     * @desc Remove dummy image content and load next slides
     * Called only for the first time if zoomFromOrigin animation is enabled
     * @param index
     * @param $currentSlide
     * @param speed
     */
    LightGallery.prototype.loadContentOnFirstSlideLoad = function (index, $currentSlide, speed) {
        var _this = this;
        setTimeout(function () {
            $currentSlide.find('.lg-dummy-img').remove();
            $currentSlide.removeClass('lg-first-slide');
            _this.outer.removeClass('lg-first-slide-loading');
            _this.isDummyImageRemoved = true;
            _this.preload(index);
        }, speed + 300);
    };
    LightGallery.prototype.getItemsToBeInsertedToDom = function (index, prevIndex, numberOfItems) {
        var _this = this;
        if (numberOfItems === void 0) { numberOfItems = 0; }
        var itemsToBeInsertedToDom = [];
        // Minimum 2 items should be there
        var possibleNumberOfItems = Math.max(numberOfItems, 3);
        possibleNumberOfItems = Math.min(possibleNumberOfItems, this.galleryItems.length);
        var prevIndexItem = "lg-item-" + this.lgId + "-" + prevIndex;
        if (this.galleryItems.length <= 3) {
            this.galleryItems.forEach(function (_element, index) {
                itemsToBeInsertedToDom.push("lg-item-" + _this.lgId + "-" + index);
            });
            return itemsToBeInsertedToDom;
        }
        if (index < (this.galleryItems.length - 1) / 2) {
            for (var idx = index; idx > index - possibleNumberOfItems / 2 && idx >= 0; idx--) {
                itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + idx);
            }
            var numberOfExistingItems = itemsToBeInsertedToDom.length;
            for (var idx = 0; idx < possibleNumberOfItems - numberOfExistingItems; idx++) {
                itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (index + idx + 1));
            }
        }
        else {
            for (var idx = index; idx <= this.galleryItems.length - 1 &&
                idx < index + possibleNumberOfItems / 2; idx++) {
                itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + idx);
            }
            var numberOfExistingItems = itemsToBeInsertedToDom.length;
            for (var idx = 0; idx < possibleNumberOfItems - numberOfExistingItems; idx++) {
                itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (index - idx - 1));
            }
        }
        if (this.settings.loop) {
            if (index === this.galleryItems.length - 1) {
                itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + 0);
            }
            else if (index === 0) {
                itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (this.galleryItems.length - 1));
            }
        }
        if (itemsToBeInsertedToDom.indexOf(prevIndexItem) === -1) {
            itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + prevIndex);
        }
        return itemsToBeInsertedToDom;
    };
    LightGallery.prototype.organizeSlideItems = function (index, prevIndex) {
        var _this = this;
        var itemsToBeInsertedToDom = this.getItemsToBeInsertedToDom(index, prevIndex, this.settings.numberOfSlideItemsInDom);
        itemsToBeInsertedToDom.forEach(function (item) {
            if (_this.currentItemsInDom.indexOf(item) === -1) {
                _this.$inner.append("<div id=\"" + item + "\" class=\"lg-item\"></div>");
            }
        });
        this.currentItemsInDom.forEach(function (item) {
            if (itemsToBeInsertedToDom.indexOf(item) === -1) {
                $LG("#" + item).remove();
            }
        });
        return itemsToBeInsertedToDom;
    };
    /**
     * Get previous index of the slide
     */
    LightGallery.prototype.getPreviousSlideIndex = function () {
        var prevIndex = 0;
        try {
            var currentItemId = this.outer
                .find('.lg-current')
                .first()
                .attr('id');
            prevIndex = parseInt(currentItemId.split('-')[3]) || 0;
        }
        catch (error) {
            prevIndex = 0;
        }
        return prevIndex;
    };
    LightGallery.prototype.setDownloadValue = function (index) {
        if (this.settings.download) {
            var currentGalleryItem = this.galleryItems[index];
            var hideDownloadBtn = currentGalleryItem.downloadUrl === false ||
                currentGalleryItem.downloadUrl === 'false';
            if (hideDownloadBtn) {
                this.outer.addClass('lg-hide-download');
            }
            else {
                var $download = this.getElementById('lg-download');
                this.outer.removeClass('lg-hide-download');
                $download.attr('href', currentGalleryItem.downloadUrl ||
                    currentGalleryItem.src);
                if (currentGalleryItem.download) {
                    $download.attr('download', currentGalleryItem.download);
                }
            }
        }
    };
    LightGallery.prototype.makeSlideAnimation = function (direction, currentSlideItem, previousSlideItem) {
        var _this = this;
        if (this.lGalleryOn) {
            previousSlideItem.addClass('lg-slide-progress');
        }
        setTimeout(function () {
            // remove all transitions
            _this.outer.addClass('lg-no-trans');
            _this.outer
                .find('.lg-item')
                .removeClass('lg-prev-slide lg-next-slide');
            if (direction === 'prev') {
                //prevslide
                currentSlideItem.addClass('lg-prev-slide');
                previousSlideItem.addClass('lg-next-slide');
            }
            else {
                // next slide
                currentSlideItem.addClass('lg-next-slide');
                previousSlideItem.addClass('lg-prev-slide');
            }
            // give 50 ms for browser to add/remove class
            setTimeout(function () {
                _this.outer.find('.lg-item').removeClass('lg-current');
                currentSlideItem.addClass('lg-current');
                // reset all transitions
                _this.outer.removeClass('lg-no-trans');
            }, 50);
        }, this.lGalleryOn ? this.settings.slideDelay : 0);
    };
    /**
     * Goto a specific slide.
     * @param {Number} index - index of the slide
     * @param {Boolean} fromTouch - true if slide function called via touch event or mouse drag
     * @param {Boolean} fromThumb - true if slide function called via thumbnail click
     * @param {String} direction - Direction of the slide(next/prev)
     * @category lGPublicMethods
     * @example
     *  const plugin = lightGallery();
     *  // to go to 3rd slide
     *  plugin.slide(2);
     *
     */
    LightGallery.prototype.slide = function (index, fromTouch, fromThumb, direction) {
        var _this = this;
        var prevIndex = this.getPreviousSlideIndex();
        this.currentItemsInDom = this.organizeSlideItems(index, prevIndex);
        // Prevent multiple call, Required for hsh plugin
        if (this.lGalleryOn && prevIndex === index) {
            return;
        }
        var numberOfGalleryItems = this.galleryItems.length;
        if (!this.lgBusy) {
            if (this.settings.counter) {
                this.updateCurrentCounter(index);
            }
            var currentSlideItem = this.getSlideItem(index);
            var previousSlideItem_1 = this.getSlideItem(prevIndex);
            var currentGalleryItem = this.galleryItems[index];
            var videoInfo = currentGalleryItem.__slideVideoInfo;
            this.outer.attr('data-lg-slide-type', this.getSlideType(currentGalleryItem));
            this.setDownloadValue(index);
            if (videoInfo) {
                var _a = this.mediaContainerPosition, top_3 = _a.top, bottom = _a.bottom;
                var videoSize = utils.getSize(this.items[index], this.outer, top_3 + bottom, videoInfo && this.settings.videoMaxSize);
                this.resizeVideoSlide(index, videoSize);
            }
            this.LGel.trigger(lGEvents.beforeSlide, {
                prevIndex: prevIndex,
                index: index,
                fromTouch: !!fromTouch,
                fromThumb: !!fromThumb,
            });
            this.lgBusy = true;
            clearTimeout(this.hideBarTimeout);
            this.arrowDisable(index);
            if (!direction) {
                if (index < prevIndex) {
                    direction = 'prev';
                }
                else if (index > prevIndex) {
                    direction = 'next';
                }
            }
            if (!fromTouch) {
                this.makeSlideAnimation(direction, currentSlideItem, previousSlideItem_1);
            }
            else {
                this.outer
                    .find('.lg-item')
                    .removeClass('lg-prev-slide lg-current lg-next-slide');
                var touchPrev = void 0;
                var touchNext = void 0;
                if (numberOfGalleryItems > 2) {
                    touchPrev = index - 1;
                    touchNext = index + 1;
                    if (index === 0 && prevIndex === numberOfGalleryItems - 1) {
                        // next slide
                        touchNext = 0;
                        touchPrev = numberOfGalleryItems - 1;
                    }
                    else if (index === numberOfGalleryItems - 1 &&
                        prevIndex === 0) {
                        // prev slide
                        touchNext = 0;
                        touchPrev = numberOfGalleryItems - 1;
                    }
                }
                else {
                    touchPrev = 0;
                    touchNext = 1;
                }
                if (direction === 'prev') {
                    this.getSlideItem(touchNext).addClass('lg-next-slide');
                }
                else {
                    this.getSlideItem(touchPrev).addClass('lg-prev-slide');
                }
                currentSlideItem.addClass('lg-current');
            }
            // Do not put load content in set timeout as it needs to load immediately when the gallery is opened
            if (!this.lGalleryOn) {
                this.loadContent(index, true);
            }
            else {
                setTimeout(function () {
                    _this.loadContent(index, true);
                    // Add title if this.settings.appendSubHtmlTo === lg-sub-html
                    if (_this.settings.appendSubHtmlTo !== '.lg-item') {
                        _this.addHtml(index);
                    }
                }, this.settings.speed + 50 + (fromTouch ? 0 : this.settings.slideDelay));
            }
            setTimeout(function () {
                _this.lgBusy = false;
                previousSlideItem_1.removeClass('lg-slide-progress');
                _this.LGel.trigger(lGEvents.afterSlide, {
                    prevIndex: prevIndex,
                    index: index,
                    fromTouch: fromTouch,
                    fromThumb: fromThumb,
                });
            }, (this.lGalleryOn ? this.settings.speed + 100 : 100) + (fromTouch ? 0 : this.settings.slideDelay));
        }
        this.index = index;
    };
    LightGallery.prototype.updateCurrentCounter = function (index) {
        this.getElementById('lg-counter-current').html(index + 1 + '');
    };
    LightGallery.prototype.updateCounterTotal = function () {
        this.getElementById('lg-counter-all').html(this.galleryItems.length + '');
    };
    LightGallery.prototype.getSlideType = function (item) {
        if (item.__slideVideoInfo) {
            return 'video';
        }
        else if (item.iframe) {
            return 'iframe';
        }
        else {
            return 'image';
        }
    };
    LightGallery.prototype.touchMove = function (startCoords, endCoords, e) {
        var distanceX = endCoords.pageX - startCoords.pageX;
        var distanceY = endCoords.pageY - startCoords.pageY;
        var allowSwipe = false;
        if (this.swipeDirection) {
            allowSwipe = true;
        }
        else {
            if (Math.abs(distanceX) > 15) {
                this.swipeDirection = 'horizontal';
                allowSwipe = true;
            }
            else if (Math.abs(distanceY) > 15) {
                this.swipeDirection = 'vertical';
                allowSwipe = true;
            }
        }
        if (!allowSwipe) {
            return;
        }
        var $currentSlide = this.getSlideItem(this.index);
        if (this.swipeDirection === 'horizontal') {
            e === null || e === void 0 ? void 0 : e.preventDefault();
            // reset opacity and transition duration
            this.outer.addClass('lg-dragging');
            // move current slide
            this.setTranslate($currentSlide, distanceX, 0);
            // move next and prev slide with current slide
            var width = $currentSlide.get().offsetWidth;
            var slideWidthAmount = (width * 15) / 100;
            var gutter = slideWidthAmount - Math.abs((distanceX * 10) / 100);
            this.setTranslate(this.outer.find('.lg-prev-slide').first(), -width + distanceX - gutter, 0);
            this.setTranslate(this.outer.find('.lg-next-slide').first(), width + distanceX + gutter, 0);
        }
        else if (this.swipeDirection === 'vertical') {
            if (this.settings.swipeToClose) {
                e === null || e === void 0 ? void 0 : e.preventDefault();
                this.$container.addClass('lg-dragging-vertical');
                var opacity = 1 - Math.abs(distanceY) / window.innerHeight;
                this.$backdrop.css('opacity', opacity);
                var scale = 1 - Math.abs(distanceY) / (window.innerWidth * 2);
                this.setTranslate($currentSlide, 0, distanceY, scale, scale);
                if (Math.abs(distanceY) > 100) {
                    this.outer
                        .addClass('lg-hide-items')
                        .removeClass('lg-components-open');
                }
            }
        }
    };
    LightGallery.prototype.touchEnd = function (endCoords, startCoords, event) {
        var _this = this;
        var distance;
        // keep slide animation for any mode while dragg/swipe
        if (this.settings.mode !== 'lg-slide') {
            this.outer.addClass('lg-slide');
        }
        // set transition duration
        setTimeout(function () {
            _this.$container.removeClass('lg-dragging-vertical');
            _this.outer
                .removeClass('lg-dragging lg-hide-items')
                .addClass('lg-components-open');
            var triggerClick = true;
            if (_this.swipeDirection === 'horizontal') {
                distance = endCoords.pageX - startCoords.pageX;
                var distanceAbs = Math.abs(endCoords.pageX - startCoords.pageX);
                if (distance < 0 &&
                    distanceAbs > _this.settings.swipeThreshold) {
                    _this.goToNextSlide(true);
                    triggerClick = false;
                }
                else if (distance > 0 &&
                    distanceAbs > _this.settings.swipeThreshold) {
                    _this.goToPrevSlide(true);
                    triggerClick = false;
                }
            }
            else if (_this.swipeDirection === 'vertical') {
                distance = Math.abs(endCoords.pageY - startCoords.pageY);
                if (_this.settings.closable &&
                    _this.settings.swipeToClose &&
                    distance > 100) {
                    _this.closeGallery();
                    return;
                }
                else {
                    _this.$backdrop.css('opacity', 1);
                }
            }
            _this.outer.find('.lg-item').removeAttr('style');
            if (triggerClick &&
                Math.abs(endCoords.pageX - startCoords.pageX) < 5) {
                // Trigger click if distance is less than 5 pix
                var target = $LG(event.target);
                if (_this.isPosterElement(target)) {
                    _this.LGel.trigger(lGEvents.posterClick);
                }
            }
            _this.swipeDirection = undefined;
        });
        // remove slide class once drag/swipe is completed if mode is not slide
        setTimeout(function () {
            if (!_this.outer.hasClass('lg-dragging') &&
                _this.settings.mode !== 'lg-slide') {
                _this.outer.removeClass('lg-slide');
            }
        }, this.settings.speed + 100);
    };
    LightGallery.prototype.enableSwipe = function () {
        var _this = this;
        var startCoords = {};
        var endCoords = {};
        var isMoved = false;
        var isSwiping = false;
        if (this.settings.enableSwipe) {
            this.$inner.on('touchstart.lg', function (e) {
                _this.dragOrSwipeEnabled = true;
                var $item = _this.getSlideItem(_this.index);
                if (($LG(e.target).hasClass('lg-item') ||
                    $item.get().contains(e.target)) &&
                    !_this.outer.hasClass('lg-zoomed') &&
                    !_this.lgBusy &&
                    e.targetTouches.length === 1) {
                    isSwiping = true;
                    _this.touchAction = 'swipe';
                    _this.manageSwipeClass();
                    startCoords = {
                        pageX: e.targetTouches[0].pageX,
                        pageY: e.targetTouches[0].pageY,
                    };
                }
            });
            this.$inner.on('touchmove.lg', function (e) {
                if (isSwiping &&
                    _this.touchAction === 'swipe' &&
                    e.targetTouches.length === 1) {
                    endCoords = {
                        pageX: e.targetTouches[0].pageX,
                        pageY: e.targetTouches[0].pageY,
                    };
                    _this.touchMove(startCoords, endCoords, e);
                    isMoved = true;
                }
            });
            this.$inner.on('touchend.lg', function (event) {
                if (_this.touchAction === 'swipe') {
                    if (isMoved) {
                        isMoved = false;
                        _this.touchEnd(endCoords, startCoords, event);
                    }
                    else if (isSwiping) {
                        var target = $LG(event.target);
                        if (_this.isPosterElement(target)) {
                            _this.LGel.trigger(lGEvents.posterClick);
                        }
                    }
                    _this.touchAction = undefined;
                    isSwiping = false;
                }
            });
        }
    };
    LightGallery.prototype.enableDrag = function () {
        var _this = this;
        var startCoords = {};
        var endCoords = {};
        var isDraging = false;
        var isMoved = false;
        if (this.settings.enableDrag) {
            this.outer.on('mousedown.lg', function (e) {
                _this.dragOrSwipeEnabled = true;
                var $item = _this.getSlideItem(_this.index);
                if ($LG(e.target).hasClass('lg-item') ||
                    $item.get().contains(e.target)) {
                    if (!_this.outer.hasClass('lg-zoomed') && !_this.lgBusy) {
                        e.preventDefault();
                        if (!_this.lgBusy) {
                            _this.manageSwipeClass();
                            startCoords = {
                                pageX: e.pageX,
                                pageY: e.pageY,
                            };
                            isDraging = true;
                            // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                            _this.outer.get().scrollLeft += 1;
                            _this.outer.get().scrollLeft -= 1;
                            // *
                            _this.outer
                                .removeClass('lg-grab')
                                .addClass('lg-grabbing');
                            _this.LGel.trigger(lGEvents.dragStart);
                        }
                    }
                }
            });
            $LG(window).on("mousemove.lg.global" + this.lgId, function (e) {
                if (isDraging && _this.lgOpened) {
                    isMoved = true;
                    endCoords = {
                        pageX: e.pageX,
                        pageY: e.pageY,
                    };
                    _this.touchMove(startCoords, endCoords);
                    _this.LGel.trigger(lGEvents.dragMove);
                }
            });
            $LG(window).on("mouseup.lg.global" + this.lgId, function (event) {
                if (!_this.lgOpened) {
                    return;
                }
                var target = $LG(event.target);
                if (isMoved) {
                    isMoved = false;
                    _this.touchEnd(endCoords, startCoords, event);
                    _this.LGel.trigger(lGEvents.dragEnd);
                }
                else if (_this.isPosterElement(target)) {
                    _this.LGel.trigger(lGEvents.posterClick);
                }
                // Prevent execution on click
                if (isDraging) {
                    isDraging = false;
                    _this.outer.removeClass('lg-grabbing').addClass('lg-grab');
                }
            });
        }
    };
    LightGallery.prototype.triggerPosterClick = function () {
        var _this = this;
        this.$inner.on('click.lg', function (event) {
            if (!_this.dragOrSwipeEnabled &&
                _this.isPosterElement($LG(event.target))) {
                _this.LGel.trigger(lGEvents.posterClick);
            }
        });
    };
    LightGallery.prototype.manageSwipeClass = function () {
        var _touchNext = this.index + 1;
        var _touchPrev = this.index - 1;
        if (this.settings.loop && this.galleryItems.length > 2) {
            if (this.index === 0) {
                _touchPrev = this.galleryItems.length - 1;
            }
            else if (this.index === this.galleryItems.length - 1) {
                _touchNext = 0;
            }
        }
        this.outer.find('.lg-item').removeClass('lg-next-slide lg-prev-slide');
        if (_touchPrev > -1) {
            this.getSlideItem(_touchPrev).addClass('lg-prev-slide');
        }
        this.getSlideItem(_touchNext).addClass('lg-next-slide');
    };
    /**
     * Go to next slide
     * @param {Boolean} fromTouch - true if slide function called via touch event
     * @category lGPublicMethods
     * @example
     *  const plugin = lightGallery();
     *  plugin.goToNextSlide();
     * @see <a href="/demos/methods/">Demo</a>
     */
    LightGallery.prototype.goToNextSlide = function (fromTouch) {
        var _this = this;
        var _loop = this.settings.loop;
        if (fromTouch && this.galleryItems.length < 3) {
            _loop = false;
        }
        if (!this.lgBusy) {
            if (this.index + 1 < this.galleryItems.length) {
                this.index++;
                this.LGel.trigger(lGEvents.beforeNextSlide, {
                    index: this.index,
                });
                this.slide(this.index, !!fromTouch, false, 'next');
            }
            else {
                if (_loop) {
                    this.index = 0;
                    this.LGel.trigger(lGEvents.beforeNextSlide, {
                        index: this.index,
                    });
                    this.slide(this.index, !!fromTouch, false, 'next');
                }
                else if (this.settings.slideEndAnimation && !fromTouch) {
                    this.outer.addClass('lg-right-end');
                    setTimeout(function () {
                        _this.outer.removeClass('lg-right-end');
                    }, 400);
                }
            }
        }
    };
    /**
     * Go to previous slides
     * @param {Boolean} fromTouch - true if slide function called via touch event
     * @category lGPublicMethods
     * @example
     *  const plugin = lightGallery({});
     *  plugin.goToPrevSlide();
     * @see <a href="/demos/methods/">Demo</a>
     *
     */
    LightGallery.prototype.goToPrevSlide = function (fromTouch) {
        var _this = this;
        var _loop = this.settings.loop;
        if (fromTouch && this.galleryItems.length < 3) {
            _loop = false;
        }
        if (!this.lgBusy) {
            if (this.index > 0) {
                this.index--;
                this.LGel.trigger(lGEvents.beforePrevSlide, {
                    index: this.index,
                    fromTouch: fromTouch,
                });
                this.slide(this.index, !!fromTouch, false, 'prev');
            }
            else {
                if (_loop) {
                    this.index = this.galleryItems.length - 1;
                    this.LGel.trigger(lGEvents.beforePrevSlide, {
                        index: this.index,
                        fromTouch: fromTouch,
                    });
                    this.slide(this.index, !!fromTouch, false, 'prev');
                }
                else if (this.settings.slideEndAnimation && !fromTouch) {
                    this.outer.addClass('lg-left-end');
                    setTimeout(function () {
                        _this.outer.removeClass('lg-left-end');
                    }, 400);
                }
            }
        }
    };
    LightGallery.prototype.keyPress = function () {
        var _this = this;
        $LG(window).on("keydown.lg.global" + this.lgId, function (e) {
            if (_this.lgOpened &&
                _this.settings.escKey === true &&
                e.keyCode === 27) {
                e.preventDefault();
                if (_this.settings.allowMediaOverlap &&
                    _this.outer.hasClass('lg-can-toggle') &&
                    _this.outer.hasClass('lg-components-open')) {
                    _this.outer.removeClass('lg-components-open');
                }
                else {
                    _this.closeGallery();
                }
            }
            if (_this.lgOpened && _this.galleryItems.length > 1) {
                if (e.keyCode === 37) {
                    e.preventDefault();
                    _this.goToPrevSlide();
                }
                if (e.keyCode === 39) {
                    e.preventDefault();
                    _this.goToNextSlide();
                }
            }
        });
    };
    LightGallery.prototype.arrow = function () {
        var _this = this;
        this.getElementById('lg-prev').on('click.lg', function () {
            _this.goToPrevSlide();
        });
        this.getElementById('lg-next').on('click.lg', function () {
            _this.goToNextSlide();
        });
    };
    LightGallery.prototype.arrowDisable = function (index) {
        // Disable arrows if settings.hideControlOnEnd is true
        if (!this.settings.loop && this.settings.hideControlOnEnd) {
            var $prev = this.getElementById('lg-prev');
            var $next = this.getElementById('lg-next');
            if (index + 1 === this.galleryItems.length) {
                $next.attr('disabled', 'disabled').addClass('disabled');
            }
            else {
                $next.removeAttr('disabled').removeClass('disabled');
            }
            if (index === 0) {
                $prev.attr('disabled', 'disabled').addClass('disabled');
            }
            else {
                $prev.removeAttr('disabled').removeClass('disabled');
            }
        }
    };
    LightGallery.prototype.setTranslate = function ($el, xValue, yValue, scaleX, scaleY) {
        if (scaleX === void 0) { scaleX = 1; }
        if (scaleY === void 0) { scaleY = 1; }
        $el.css('transform', 'translate3d(' +
            xValue +
            'px, ' +
            yValue +
            'px, 0px) scale3d(' +
            scaleX +
            ', ' +
            scaleY +
            ', 1)');
    };
    LightGallery.prototype.mousewheel = function () {
        var _this = this;
        var lastCall = 0;
        this.outer.on('wheel.lg', function (e) {
            if (!e.deltaY || _this.galleryItems.length < 2) {
                return;
            }
            e.preventDefault();
            var now = new Date().getTime();
            if (now - lastCall < 1000) {
                return;
            }
            lastCall = now;
            if (e.deltaY > 0) {
                _this.goToNextSlide();
            }
            else if (e.deltaY < 0) {
                _this.goToPrevSlide();
            }
        });
    };
    LightGallery.prototype.isSlideElement = function (target) {
        return (target.hasClass('lg-outer') ||
            target.hasClass('lg-item') ||
            target.hasClass('lg-img-wrap'));
    };
    LightGallery.prototype.isPosterElement = function (target) {
        var playButton = this.getSlideItem(this.index)
            .find('.lg-video-play-button')
            .get();
        return (target.hasClass('lg-video-poster') ||
            target.hasClass('lg-video-play-button') ||
            (playButton && playButton.contains(target.get())));
    };
    /**
     * Maximize minimize inline gallery.
     * @category lGPublicMethods
     */
    LightGallery.prototype.toggleMaximize = function () {
        var _this = this;
        this.getElementById('lg-maximize').on('click.lg', function () {
            _this.$container.toggleClass('lg-inline');
            _this.refreshOnResize();
        });
    };
    LightGallery.prototype.invalidateItems = function () {
        for (var index = 0; index < this.items.length; index++) {
            var element = this.items[index];
            var $element = $LG(element);
            $element.off("click.lgcustom-item-" + $element.attr('data-lg-id'));
        }
    };
    LightGallery.prototype.manageCloseGallery = function () {
        var _this = this;
        if (!this.settings.closable)
            return;
        var mousedown = false;
        this.getElementById('lg-close').on('click.lg', function () {
            _this.closeGallery();
        });
        if (this.settings.closeOnTap) {
            // If you drag the slide and release outside gallery gets close on chrome
            // for preventing this check mousedown and mouseup happened on .lg-item or lg-outer
            this.outer.on('mousedown.lg', function (e) {
                var target = $LG(e.target);
                if (_this.isSlideElement(target)) {
                    mousedown = true;
                }
                else {
                    mousedown = false;
                }
            });
            this.outer.on('mousemove.lg', function () {
                mousedown = false;
            });
            this.outer.on('mouseup.lg', function (e) {
                var target = $LG(e.target);
                if (_this.isSlideElement(target) && mousedown) {
                    if (!_this.outer.hasClass('lg-dragging')) {
                        _this.closeGallery();
                    }
                }
            });
        }
    };
    /**
     * Close lightGallery if it is opened.
     *
     * @description If closable is false in the settings, you need to pass true via closeGallery method to force close gallery
     * @return returns the estimated time to close gallery completely including the close animation duration
     * @category lGPublicMethods
     * @example
     *  const plugin = lightGallery();
     *  plugin.closeGallery();
     *
     */
    LightGallery.prototype.closeGallery = function (force) {
        var _this = this;
        if (!this.lgOpened || (!this.settings.closable && !force)) {
            return 0;
        }
        this.LGel.trigger(lGEvents.beforeClose);
        $LG(window).scrollTop(this.prevScrollTop);
        var currentItem = this.items[this.index];
        var transform;
        if (this.zoomFromOrigin && currentItem) {
            var _a = this.mediaContainerPosition, top_4 = _a.top, bottom = _a.bottom;
            var _b = this.galleryItems[this.index], __slideVideoInfo = _b.__slideVideoInfo, poster = _b.poster;
            var imageSize = utils.getSize(currentItem, this.outer, top_4 + bottom, __slideVideoInfo && poster && this.settings.videoMaxSize);
            transform = utils.getTransform(currentItem, this.outer, top_4, bottom, imageSize);
        }
        if (this.zoomFromOrigin && transform) {
            this.outer.addClass('lg-closing lg-zoom-from-image');
            this.getSlideItem(this.index)
                .addClass('lg-start-end-progress')
                .css('transition-duration', this.settings.startAnimationDuration + 'ms')
                .css('transform', transform);
        }
        else {
            this.outer.addClass('lg-hide-items');
            // lg-zoom-from-image is used for setting the opacity to 1 if zoomFromOrigin is true
            // If the closing item doesn't have the lg-size attribute, remove this class to avoid the closing css conflicts
            this.outer.removeClass('lg-zoom-from-image');
        }
        // Unbind all events added by lightGallery
        // @todo
        //this.$el.off('.lg.tm');
        this.destroyModules();
        this.lGalleryOn = false;
        this.isDummyImageRemoved = false;
        this.zoomFromOrigin = this.settings.zoomFromOrigin;
        clearTimeout(this.hideBarTimeout);
        this.hideBarTimeout = false;
        $LG('html').removeClass('lg-on');
        this.outer.removeClass('lg-visible lg-components-open');
        // Resetting opacity to 0 isd required as  vertical swipe to close function adds inline opacity.
        this.$backdrop.removeClass('in').css('opacity', 0);
        var removeTimeout = this.zoomFromOrigin && transform
            ? Math.max(this.settings.startAnimationDuration, this.settings.backdropDuration)
            : this.settings.backdropDuration;
        this.$container.removeClass('lg-show-in');
        // Once the closign animation is completed and gallery is invisible
        setTimeout(function () {
            if (_this.zoomFromOrigin && transform) {
                _this.outer.removeClass('lg-zoom-from-image');
            }
            _this.$container.removeClass('lg-show');
            // Need to remove inline opacity as it is used in the stylesheet as well
            _this.$backdrop
                .removeAttr('style')
                .css('transition-duration', _this.settings.backdropDuration + 'ms');
            _this.outer.removeClass("lg-closing " + _this.settings.startClass);
            _this.getSlideItem(_this.index).removeClass('lg-start-end-progress');
            _this.$inner.empty();
            if (_this.lgOpened) {
                _this.LGel.trigger(lGEvents.afterClose, {
                    instance: _this,
                });
            }
            if (_this.outer.get()) {
                _this.outer.get().blur();
            }
            _this.lgOpened = false;
        }, removeTimeout + 100);
        return removeTimeout + 100;
    };
    LightGallery.prototype.initModules = function () {
        this.plugins.forEach(function (module) {
            try {
                module.init();
            }
            catch (err) {
                console.warn("lightGallery:- make sure lightGallery module is properly initiated");
            }
        });
    };
    LightGallery.prototype.destroyModules = function (destroy) {
        this.plugins.forEach(function (module) {
            try {
                if (destroy) {
                    module.destroy();
                }
                else {
                    module.closeGallery && module.closeGallery();
                }
            }
            catch (err) {
                console.warn("lightGallery:- make sure lightGallery module is properly destroyed");
            }
        });
    };
    /**
     * Refresh lightGallery with new set of children.
     *
     * @description This is useful to update the gallery when the child elements are changed without calling destroy method.
     *
     * If you are using dynamic mode, you can pass the modified array of dynamicEl as the first parameter to refresh the dynamic gallery
     * @see <a href="/demos/dynamic-mode/">Demo</a>
     * @category lGPublicMethods
     * @example
     *  const plugin = lightGallery();
     *  // Delete or add children, then call
     *  plugin.refresh();
     *
     */
    LightGallery.prototype.refresh = function (galleryItems) {
        if (!this.settings.dynamic) {
            this.invalidateItems();
        }
        if (galleryItems) {
            this.galleryItems = galleryItems;
        }
        else {
            this.galleryItems = this.getItems();
        }
        this.updateControls();
        this.openGalleryOnItemClick();
        this.LGel.trigger(lGEvents.updateSlides);
    };
    LightGallery.prototype.updateControls = function () {
        this.addSlideVideoInfo(this.galleryItems);
        this.updateCounterTotal();
        this.manageSingleSlideClassName();
    };
    /**
     * Destroy lightGallery.
     * Destroy lightGallery and its plugin instances completely
     *
     * @description This method also calls CloseGallery function internally. Returns the time takes to completely close and destroy the instance.
     * In case if you want to re-initialize lightGallery right after destroying it, initialize it only once the destroy process is completed.
     * You can use refresh method most of the times.
     * @category lGPublicMethods
     * @example
     *  const plugin = lightGallery();
     *  plugin.destroy();
     *
     */
    LightGallery.prototype.destroy = function () {
        var _this = this;
        var closeTimeout = this.closeGallery(true);
        setTimeout(function () {
            _this.destroyModules(true);
            if (!_this.settings.dynamic) {
                _this.invalidateItems();
            }
            $LG(window).off(".lg.global" + _this.lgId);
            _this.LGel.off('.lg');
            _this.$container.remove();
        }, closeTimeout);
        return closeTimeout;
    };
    return LightGallery;
}());

function lightGallery(el, options) {
    return new LightGallery(el, options);
}

/* harmony default export */ __webpack_exports__["default"] = (lightGallery);
//# sourceMappingURL=lightgallery.es5.js.map


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGlnaHRnYWxsZXJ5L2Nzcy9saWdodGdhbGxlcnkuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saWdodGdhbGxlcnkvbGlnaHRnYWxsZXJ5LmVzNS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaURBQWlELFFBQVE7QUFDekQsd0NBQXdDLFFBQVE7QUFDaEQsd0RBQXdELFFBQVE7QUFDaEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsaUNBQWlDLG9CQUFvQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFVBQVUsRUFBRTtBQUM5QztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGlDQUFpQyxFQUFFO0FBQzlFLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGlCQUFpQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxtQkFBbUIsRUFBRTtBQUN2RDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELDJCQUEyQixFQUFFO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGFBQWE7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDhCQUE4QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsZUFBZTtBQUNmLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSw2RkFBNkYsa0NBQWtDLDhCQUE4QjtBQUM3SixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvQkFBb0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9CQUFvQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixNQUFNO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw0QkFBNEI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixnQkFBZ0IsT0FBTztBQUN2QixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JELGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMkJBQTJCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxZQUFZO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw2QkFBNkI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsU0FBUztBQUN0QyxnQ0FBZ0MsWUFBWTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw0QkFBNEI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw0QkFBNEI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELDhEQUE4RCw4REFBOEQ7QUFDNUs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSwwREFBMEQsZUFBZTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLG1CQUFtQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxxREFBcUQ7QUFDdEY7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHFEQUFxRDtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHFEQUFxRDtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsWUFBWTtBQUM1QyxnQ0FBZ0MsWUFBWTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDJCQUEyQiwyQkFBMkI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFZSwyRUFBWSxFQUFDO0FBQzVCIiwiZmlsZSI6InZlbmRvcnN+bGlnaHRnYWxsZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLyohXG4gKiBsaWdodGdhbGxlcnkgfCAyLjQuMCB8IEphbnVhcnkgMjl0aCAyMDIyXG4gKiBodHRwOi8vd3d3LmxpZ2h0Z2FsbGVyeWpzLmNvbS9cbiAqIENvcHlyaWdodCAoYykgMjAyMCBTYWNoaW4gTmVyYXZhdGg7XG4gKiBAbGljZW5zZSBHUEx2M1xuICovXG5cbi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG52YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxuXG4vKipcclxuICogTGlzdCBvZiBsaWdodEdhbGxlcnkgZXZlbnRzXHJcbiAqIEFsbCBldmVudHMgc2hvdWxkIGJlIGRvY3VtZW50ZWQgaGVyZVxyXG4gKiBCZWxvdyBpbnRlcmZhY2VzIGFyZSB1c2VkIHRvIGJ1aWxkIHRoZSB3ZWJzaXRlIGRvY3VtZW50YXRpb25zXHJcbiAqICovXHJcbnZhciBsR0V2ZW50cyA9IHtcclxuICAgIGFmdGVyQXBwZW5kU2xpZGU6ICdsZ0FmdGVyQXBwZW5kU2xpZGUnLFxyXG4gICAgaW5pdDogJ2xnSW5pdCcsXHJcbiAgICBoYXNWaWRlbzogJ2xnSGFzVmlkZW8nLFxyXG4gICAgY29udGFpbmVyUmVzaXplOiAnbGdDb250YWluZXJSZXNpemUnLFxyXG4gICAgdXBkYXRlU2xpZGVzOiAnbGdVcGRhdGVTbGlkZXMnLFxyXG4gICAgYWZ0ZXJBcHBlbmRTdWJIdG1sOiAnbGdBZnRlckFwcGVuZFN1Ykh0bWwnLFxyXG4gICAgYmVmb3JlT3BlbjogJ2xnQmVmb3JlT3BlbicsXHJcbiAgICBhZnRlck9wZW46ICdsZ0FmdGVyT3BlbicsXHJcbiAgICBzbGlkZUl0ZW1Mb2FkOiAnbGdTbGlkZUl0ZW1Mb2FkJyxcclxuICAgIGJlZm9yZVNsaWRlOiAnbGdCZWZvcmVTbGlkZScsXHJcbiAgICBhZnRlclNsaWRlOiAnbGdBZnRlclNsaWRlJyxcclxuICAgIHBvc3RlckNsaWNrOiAnbGdQb3N0ZXJDbGljaycsXHJcbiAgICBkcmFnU3RhcnQ6ICdsZ0RyYWdTdGFydCcsXHJcbiAgICBkcmFnTW92ZTogJ2xnRHJhZ01vdmUnLFxyXG4gICAgZHJhZ0VuZDogJ2xnRHJhZ0VuZCcsXHJcbiAgICBiZWZvcmVOZXh0U2xpZGU6ICdsZ0JlZm9yZU5leHRTbGlkZScsXHJcbiAgICBiZWZvcmVQcmV2U2xpZGU6ICdsZ0JlZm9yZVByZXZTbGlkZScsXHJcbiAgICBiZWZvcmVDbG9zZTogJ2xnQmVmb3JlQ2xvc2UnLFxyXG4gICAgYWZ0ZXJDbG9zZTogJ2xnQWZ0ZXJDbG9zZScsXHJcbiAgICByb3RhdGVMZWZ0OiAnbGdSb3RhdGVMZWZ0JyxcclxuICAgIHJvdGF0ZVJpZ2h0OiAnbGdSb3RhdGVSaWdodCcsXHJcbiAgICBmbGlwSG9yaXpvbnRhbDogJ2xnRmxpcEhvcml6b250YWwnLFxyXG4gICAgZmxpcFZlcnRpY2FsOiAnbGdGbGlwVmVydGljYWwnLFxyXG4gICAgYXV0b3BsYXk6ICdsZ0F1dG9wbGF5JyxcclxuICAgIGF1dG9wbGF5U3RhcnQ6ICdsZ0F1dG9wbGF5U3RhcnQnLFxyXG4gICAgYXV0b3BsYXlTdG9wOiAnbGdBdXRvcGxheVN0b3AnLFxyXG59O1xuXG52YXIgbGlnaHRHYWxsZXJ5Q29yZVNldHRpbmdzID0ge1xyXG4gICAgbW9kZTogJ2xnLXNsaWRlJyxcclxuICAgIGVhc2luZzogJ2Vhc2UnLFxyXG4gICAgc3BlZWQ6IDQwMCxcclxuICAgIGxpY2Vuc2VLZXk6ICcwMDAwLTAwMDAtMDAwLTAwMDAnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgYWRkQ2xhc3M6ICcnLFxyXG4gICAgc3RhcnRDbGFzczogJ2xnLXN0YXJ0LXpvb20nLFxyXG4gICAgYmFja2Ryb3BEdXJhdGlvbjogMzAwLFxyXG4gICAgY29udGFpbmVyOiAnJyxcclxuICAgIHN0YXJ0QW5pbWF0aW9uRHVyYXRpb246IDQwMCxcclxuICAgIHpvb21Gcm9tT3JpZ2luOiB0cnVlLFxyXG4gICAgaGlkZUJhcnNEZWxheTogMCxcclxuICAgIHNob3dCYXJzQWZ0ZXI6IDEwMDAwLFxyXG4gICAgc2xpZGVEZWxheTogMCxcclxuICAgIHN1cHBvcnRMZWdhY3lCcm93c2VyOiB0cnVlLFxyXG4gICAgYWxsb3dNZWRpYU92ZXJsYXA6IGZhbHNlLFxyXG4gICAgdmlkZW9NYXhTaXplOiAnMTI4MC03MjAnLFxyXG4gICAgbG9hZFlvdVR1YmVQb3N0ZXI6IHRydWUsXHJcbiAgICBkZWZhdWx0Q2FwdGlvbkhlaWdodDogMCxcclxuICAgIGFyaWFMYWJlbGxlZGJ5OiAnJyxcclxuICAgIGFyaWFEZXNjcmliZWRieTogJycsXHJcbiAgICBjbG9zYWJsZTogdHJ1ZSxcclxuICAgIHN3aXBlVG9DbG9zZTogdHJ1ZSxcclxuICAgIGNsb3NlT25UYXA6IHRydWUsXHJcbiAgICBzaG93Q2xvc2VJY29uOiB0cnVlLFxyXG4gICAgc2hvd01heGltaXplSWNvbjogZmFsc2UsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgZXNjS2V5OiB0cnVlLFxyXG4gICAga2V5UHJlc3M6IHRydWUsXHJcbiAgICBjb250cm9sczogdHJ1ZSxcclxuICAgIHNsaWRlRW5kQW5pbWF0aW9uOiB0cnVlLFxyXG4gICAgaGlkZUNvbnRyb2xPbkVuZDogZmFsc2UsXHJcbiAgICBtb3VzZXdoZWVsOiBmYWxzZSxcclxuICAgIGdldENhcHRpb25Gcm9tVGl0bGVPckFsdDogdHJ1ZSxcclxuICAgIGFwcGVuZFN1Ykh0bWxUbzogJy5sZy1zdWItaHRtbCcsXHJcbiAgICBzdWJIdG1sU2VsZWN0b3JSZWxhdGl2ZTogZmFsc2UsXHJcbiAgICBwcmVsb2FkOiAyLFxyXG4gICAgbnVtYmVyT2ZTbGlkZUl0ZW1zSW5Eb206IDEwLFxyXG4gICAgc2VsZWN0b3I6ICcnLFxyXG4gICAgc2VsZWN0V2l0aGluOiAnJyxcclxuICAgIG5leHRIdG1sOiAnJyxcclxuICAgIHByZXZIdG1sOiAnJyxcclxuICAgIGluZGV4OiAwLFxyXG4gICAgaWZyYW1lV2lkdGg6ICcxMDAlJyxcclxuICAgIGlmcmFtZUhlaWdodDogJzEwMCUnLFxyXG4gICAgaWZyYW1lTWF4V2lkdGg6ICcxMDAlJyxcclxuICAgIGlmcmFtZU1heEhlaWdodDogJzEwMCUnLFxyXG4gICAgZG93bmxvYWQ6IHRydWUsXHJcbiAgICBjb3VudGVyOiB0cnVlLFxyXG4gICAgYXBwZW5kQ291bnRlclRvOiAnLmxnLXRvb2xiYXInLFxyXG4gICAgc3dpcGVUaHJlc2hvbGQ6IDUwLFxyXG4gICAgZW5hYmxlU3dpcGU6IHRydWUsXHJcbiAgICBlbmFibGVEcmFnOiB0cnVlLFxyXG4gICAgZHluYW1pYzogZmFsc2UsXHJcbiAgICBkeW5hbWljRWw6IFtdLFxyXG4gICAgZXh0cmFQcm9wczogW10sXHJcbiAgICBleFRodW1iSW1hZ2U6ICcnLFxyXG4gICAgaXNNb2JpbGU6IHVuZGVmaW5lZCxcclxuICAgIG1vYmlsZVNldHRpbmdzOiB7XHJcbiAgICAgICAgY29udHJvbHM6IGZhbHNlLFxyXG4gICAgICAgIHNob3dDbG9zZUljb246IGZhbHNlLFxyXG4gICAgICAgIGRvd25sb2FkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBwbHVnaW5zOiBbXSxcclxuICAgIHN0cmluZ3M6IHtcclxuICAgICAgICBjbG9zZUdhbGxlcnk6ICdDbG9zZSBnYWxsZXJ5JyxcclxuICAgICAgICB0b2dnbGVNYXhpbWl6ZTogJ1RvZ2dsZSBtYXhpbWl6ZScsXHJcbiAgICAgICAgcHJldmlvdXNTbGlkZTogJ1ByZXZpb3VzIHNsaWRlJyxcclxuICAgICAgICBuZXh0U2xpZGU6ICdOZXh0IHNsaWRlJyxcclxuICAgICAgICBkb3dubG9hZDogJ0Rvd25sb2FkJyxcclxuICAgICAgICBwbGF5VmlkZW86ICdQbGF5IHZpZGVvJyxcclxuICAgIH0sXHJcbn07XG5cbmZ1bmN0aW9uIGluaXRMZ1BvbHlmaWxscygpIHtcclxuICAgIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBmdW5jdGlvbiBDdXN0b21FdmVudChldmVudCwgcGFyYW1zKSB7XHJcbiAgICAgICAgICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7XHJcbiAgICAgICAgICAgICAgICBidWJibGVzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZGV0YWlsOiBudWxsLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2YXIgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XHJcbiAgICAgICAgICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbCk7XHJcbiAgICAgICAgICAgIHJldHVybiBldnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5DdXN0b21FdmVudCA9IEN1c3RvbUV2ZW50O1xyXG4gICAgfSkoKTtcclxuICAgIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCFFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzKSB7XHJcbiAgICAgICAgICAgIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgPVxyXG4gICAgICAgICAgICAgICAgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHxcclxuICAgICAgICAgICAgICAgICAgICBFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XHJcbiAgICAgICAgfVxyXG4gICAgfSkoKTtcclxufVxyXG52YXIgbGdRdWVyeSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIGxnUXVlcnkoc2VsZWN0b3IpIHtcclxuICAgICAgICB0aGlzLmNzc1ZlbmRlclByZWZpeGVzID0gW1xyXG4gICAgICAgICAgICAnVHJhbnNpdGlvbkR1cmF0aW9uJyxcclxuICAgICAgICAgICAgJ1RyYW5zaXRpb25UaW1pbmdGdW5jdGlvbicsXHJcbiAgICAgICAgICAgICdUcmFuc2Zvcm0nLFxyXG4gICAgICAgICAgICAnVHJhbnNpdGlvbicsXHJcbiAgICAgICAgXTtcclxuICAgICAgICB0aGlzLnNlbGVjdG9yID0gdGhpcy5fZ2V0U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMuZmlyc3RFbGVtZW50ID0gdGhpcy5fZ2V0Rmlyc3RFbCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgbGdRdWVyeS5nZW5lcmF0ZVVVSUQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICAgICAgdmFyIHIgPSAoTWF0aC5yYW5kb20oKSAqIDE2KSB8IDAsIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MykgfCAweDg7XHJcbiAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBsZ1F1ZXJ5LnByb3RvdHlwZS5fZ2V0U2VsZWN0b3IgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGNvbnRleHQpIHtcclxuICAgICAgICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSB7IGNvbnRleHQgPSBkb2N1bWVudDsgfVxyXG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29udGV4dCA9IGNvbnRleHQgfHwgZG9jdW1lbnQ7XHJcbiAgICAgICAgdmFyIGZsID0gc2VsZWN0b3Iuc3Vic3RyaW5nKDAsIDEpO1xyXG4gICAgICAgIGlmIChmbCA9PT0gJyMnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGxnUXVlcnkucHJvdG90eXBlLl9lYWNoID0gZnVuY3Rpb24gKGZ1bmMpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdG9yLmxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIFtdLmZvckVhY2guY2FsbCh0aGlzLnNlbGVjdG9yLCBmdW5jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZ1bmModGhpcy5zZWxlY3RvciwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIGxnUXVlcnkucHJvdG90eXBlLl9zZXRDc3NWZW5kb3JQcmVmaXggPSBmdW5jdGlvbiAoZWwsIGNzc1Byb3BlcnR5LCB2YWx1ZSkge1xyXG4gICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gICAgICAgIHZhciBwcm9wZXJ0eSA9IGNzc1Byb3BlcnR5LnJlcGxhY2UoLy0oW2Etel0pL2dpLCBmdW5jdGlvbiAocywgZ3JvdXAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBncm91cDEudG9VcHBlckNhc2UoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5jc3NWZW5kZXJQcmVmaXhlcy5pbmRleE9mKHByb3BlcnR5KSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgZWwuc3R5bGVbcHJvcGVydHkuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBwcm9wZXJ0eS5zbGljZSgxKV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgZWwuc3R5bGVbJ3dlYmtpdCcgKyBwcm9wZXJ0eV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgZWwuc3R5bGVbJ21veicgKyBwcm9wZXJ0eV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgZWwuc3R5bGVbJ21zJyArIHByb3BlcnR5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICBlbC5zdHlsZVsnbycgKyBwcm9wZXJ0eV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlW3Byb3BlcnR5XSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBsZ1F1ZXJ5LnByb3RvdHlwZS5fZ2V0Rmlyc3RFbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RvciAmJiB0aGlzLnNlbGVjdG9yLmxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdG9yWzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0b3I7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGxnUXVlcnkucHJvdG90eXBlLmlzRXZlbnRNYXRjaGVkID0gZnVuY3Rpb24gKGV2ZW50LCBldmVudE5hbWUpIHtcclxuICAgICAgICB2YXIgZXZlbnROYW1lc3BhY2UgPSBldmVudE5hbWUuc3BsaXQoJy4nKTtcclxuICAgICAgICByZXR1cm4gZXZlbnRcclxuICAgICAgICAgICAgLnNwbGl0KCcuJylcclxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoZSkgeyByZXR1cm4gZTsgfSlcclxuICAgICAgICAgICAgLmV2ZXJ5KGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBldmVudE5hbWVzcGFjZS5pbmRleE9mKGUpICE9PSAtMTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBsZ1F1ZXJ5LnByb3RvdHlwZS5hdHRyID0gZnVuY3Rpb24gKGF0dHIsIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmZpcnN0RWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpcnN0RWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2VhY2goZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgbGdRdWVyeS5wcm90b3R5cGUuZmluZCA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG4gICAgICAgIHJldHVybiAkTEcodGhpcy5fZ2V0U2VsZWN0b3Ioc2VsZWN0b3IsIHRoaXMuc2VsZWN0b3IpKTtcclxuICAgIH07XHJcbiAgICBsZ1F1ZXJ5LnByb3RvdHlwZS5maXJzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RvciAmJiB0aGlzLnNlbGVjdG9yLmxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAkTEcodGhpcy5zZWxlY3RvclswXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gJExHKHRoaXMuc2VsZWN0b3IpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBsZ1F1ZXJ5LnByb3RvdHlwZS5lcSA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgIHJldHVybiAkTEcodGhpcy5zZWxlY3RvcltpbmRleF0pO1xyXG4gICAgfTtcclxuICAgIGxnUXVlcnkucHJvdG90eXBlLnBhcmVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gJExHKHRoaXMuc2VsZWN0b3IucGFyZW50RWxlbWVudCk7XHJcbiAgICB9O1xyXG4gICAgbGdRdWVyeS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRGaXJzdEVsKCk7XHJcbiAgICB9O1xyXG4gICAgbGdRdWVyeS5wcm90b3R5cGUucmVtb3ZlQXR0ciA9IGZ1bmN0aW9uIChhdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgdmFyIGF0dHJzID0gYXR0cmlidXRlcy5zcGxpdCgnICcpO1xyXG4gICAgICAgIHRoaXMuX2VhY2goZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgICAgIGF0dHJzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHsgcmV0dXJuIGVsLnJlbW92ZUF0dHJpYnV0ZShhdHRyKTsgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgbGdRdWVyeS5wcm90b3R5cGUud3JhcCA9IGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZmlyc3RFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHdyYXBwZXIuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gICAgICAgIHRoaXMuZmlyc3RFbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIHRoaXMuZmlyc3RFbGVtZW50KTtcclxuICAgICAgICB0aGlzLmZpcnN0RWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZmlyc3RFbGVtZW50KTtcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuZmlyc3RFbGVtZW50KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBsZ1F1ZXJ5LnByb3RvdHlwZS5hZGRDbGFzcyA9IGZ1bmN0aW9uIChjbGFzc05hbWVzKSB7XHJcbiAgICAgICAgaWYgKGNsYXNzTmFtZXMgPT09IHZvaWQgMCkgeyBjbGFzc05hbWVzID0gJyc7IH1cclxuICAgICAgICB0aGlzLl9lYWNoKGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgICAgICAvLyBJRSBkb2Vzbid0IHN1cHBvcnQgbXVsdGlwbGUgYXJndW1lbnRzXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZXMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIGxnUXVlcnkucHJvdG90eXBlLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24gKGNsYXNzTmFtZXMpIHtcclxuICAgICAgICB0aGlzLl9lYWNoKGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgICAgICAvLyBJRSBkb2Vzbid0IHN1cHBvcnQgbXVsdGlwbGUgYXJndW1lbnRzXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZXMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIGxnUXVlcnkucHJvdG90eXBlLmhhc0NsYXNzID0gZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5maXJzdEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5maXJzdEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XHJcbiAgICB9O1xyXG4gICAgbGdRdWVyeS5wcm90b3R5cGUuaGFzQXR0cmlidXRlID0gZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5maXJzdEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5maXJzdEVsZW1lbnQuaGFzQXR0cmlidXRlKGF0dHJpYnV0ZSk7XHJcbiAgICB9O1xyXG4gICAgbGdRdWVyeS5wcm90b3R5cGUudG9nZ2xlQ2xhc3MgPSBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmZpcnN0RWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzQ2xhc3MoY2xhc3NOYW1lKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFkZENsYXNzKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIGxnUXVlcnkucHJvdG90eXBlLmNzcyA9IGZ1bmN0aW9uIChwcm9wZXJ0eSwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2VhY2goZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9zZXRDc3NWZW5kb3JQcmVmaXgoZWwsIHByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgLy8gTmVlZCB0byBwYXNzIHNlcGFyYXRlIG5hbWVzcGFjZXMgZm9yIHNlcGFyYXRlIGVsZW1lbnRzXHJcbiAgICBsZ1F1ZXJ5LnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChldmVudHMsIGxpc3RlbmVyKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV2ZW50cy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShsZ1F1ZXJ5LmV2ZW50TGlzdGVuZXJzW2V2ZW50XSkpIHtcclxuICAgICAgICAgICAgICAgIGxnUXVlcnkuZXZlbnRMaXN0ZW5lcnNbZXZlbnRdID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGdRdWVyeS5ldmVudExpc3RlbmVyc1tldmVudF0ucHVzaChsaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIF90aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQuc3BsaXQoJy4nKVswXSwgbGlzdGVuZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIC8vIEB0b2RvIC0gdGVzdCB0aGlzXHJcbiAgICBsZ1F1ZXJ5LnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gKGV2ZW50LCBsaXN0ZW5lcikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5vbihldmVudCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5vZmYoZXZlbnQpO1xyXG4gICAgICAgICAgICBsaXN0ZW5lcihldmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgbGdRdWVyeS5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE9iamVjdC5rZXlzKGxnUXVlcnkuZXZlbnRMaXN0ZW5lcnMpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuaXNFdmVudE1hdGNoZWQoZXZlbnQsIGV2ZW50TmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIGxnUXVlcnkuZXZlbnRMaXN0ZW5lcnNbZXZlbnROYW1lXS5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLnNwbGl0KCcuJylbMF0sIGxpc3RlbmVyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbGdRdWVyeS5ldmVudExpc3RlbmVyc1tldmVudE5hbWVdID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBsZ1F1ZXJ5LnByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24gKGV2ZW50LCBkZXRhaWwpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZmlyc3RFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY3VzdG9tRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnQuc3BsaXQoJy4nKVswXSwge1xyXG4gICAgICAgICAgICBkZXRhaWw6IGRldGFpbCB8fCBudWxsLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZmlyc3RFbGVtZW50LmRpc3BhdGNoRXZlbnQoY3VzdG9tRXZlbnQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIC8vIERvZXMgbm90IHN1cHBvcnQgSUVcclxuICAgIGxnUXVlcnkucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbiAodXJsKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBmZXRjaCh1cmwpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy50ZXh0KCk7IH0pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnNlbGVjdG9yLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgbGdRdWVyeS5wcm90b3R5cGUuaHRtbCA9IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgaWYgKGh0bWwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZmlyc3RFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmlyc3RFbGVtZW50LmlubmVySFRNTDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZWFjaChmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICAgICAgZWwuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBsZ1F1ZXJ5LnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgIHRoaXMuX2VhY2goZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaHRtbCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIGVsLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgaHRtbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChodG1sKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIGxnUXVlcnkucHJvdG90eXBlLnByZXBlbmQgPSBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgIHRoaXMuX2VhY2goZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgICAgIGVsLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGh0bWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIGxnUXVlcnkucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9lYWNoKGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgICAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBsZ1F1ZXJ5LnByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9lYWNoKGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgICAgICBlbC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBsZ1F1ZXJ5LnByb3RvdHlwZS5zY3JvbGxUb3AgPSBmdW5jdGlvbiAoc2Nyb2xsVG9wKSB7XHJcbiAgICAgICAgaWYgKHNjcm9sbFRvcCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAod2luZG93LnBhZ2VZT2Zmc2V0IHx8XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fFxyXG4gICAgICAgICAgICAgICAgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGxnUXVlcnkucHJvdG90eXBlLnNjcm9sbExlZnQgPSBmdW5jdGlvbiAoc2Nyb2xsTGVmdCkge1xyXG4gICAgICAgIGlmIChzY3JvbGxMZWZ0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdDtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0O1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAod2luZG93LnBhZ2VYT2Zmc2V0IHx8XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0IHx8XHJcbiAgICAgICAgICAgICAgICAwKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgbGdRdWVyeS5wcm90b3R5cGUub2Zmc2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5maXJzdEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZWN0ID0gdGhpcy5maXJzdEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgdmFyIGJvZHlNYXJnaW5MZWZ0ID0gJExHKCdib2R5Jykuc3R5bGUoKS5tYXJnaW5MZWZ0O1xyXG4gICAgICAgIC8vIE1pbnVzIGJvZHkgbWFyZ2luIC0gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzA3MTE1NDgvaXMtZ2V0Ym91bmRpbmdjbGllbnRyZWN0LWxlZnQtcmV0dXJuaW5nLWEtd3JvbmctdmFsdWVcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBsZWZ0OiByZWN0LmxlZnQgLSBwYXJzZUZsb2F0KGJvZHlNYXJnaW5MZWZ0KSArIHRoaXMuc2Nyb2xsTGVmdCgpLFxyXG4gICAgICAgICAgICB0b3A6IHJlY3QudG9wICsgdGhpcy5zY3JvbGxUb3AoKSxcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIGxnUXVlcnkucHJvdG90eXBlLnN0eWxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5maXJzdEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKHRoaXMuZmlyc3RFbGVtZW50LmN1cnJlbnRTdHlsZSB8fFxyXG4gICAgICAgICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmZpcnN0RWxlbWVudCkpO1xyXG4gICAgfTtcclxuICAgIC8vIFdpZHRoIHdpdGhvdXQgcGFkZGluZyBhbmQgYm9yZGVyIGV2ZW4gaWYgYm94LXNpemluZyBpcyB1c2VkLlxyXG4gICAgbGdRdWVyeS5wcm90b3R5cGUud2lkdGggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHN0eWxlID0gdGhpcy5zdHlsZSgpO1xyXG4gICAgICAgIHJldHVybiAodGhpcy5maXJzdEVsZW1lbnQuY2xpZW50V2lkdGggLVxyXG4gICAgICAgICAgICBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdMZWZ0KSAtXHJcbiAgICAgICAgICAgIHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ1JpZ2h0KSk7XHJcbiAgICB9O1xyXG4gICAgLy8gSGVpZ2h0IHdpdGhvdXQgcGFkZGluZyBhbmQgYm9yZGVyIGV2ZW4gaWYgYm94LXNpemluZyBpcyB1c2VkLlxyXG4gICAgbGdRdWVyeS5wcm90b3R5cGUuaGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzdHlsZSA9IHRoaXMuc3R5bGUoKTtcclxuICAgICAgICByZXR1cm4gKHRoaXMuZmlyc3RFbGVtZW50LmNsaWVudEhlaWdodCAtXHJcbiAgICAgICAgICAgIHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ1RvcCkgLVxyXG4gICAgICAgICAgICBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdCb3R0b20pKTtcclxuICAgIH07XHJcbiAgICBsZ1F1ZXJ5LmV2ZW50TGlzdGVuZXJzID0ge307XHJcbiAgICByZXR1cm4gbGdRdWVyeTtcclxufSgpKTtcclxuZnVuY3Rpb24gJExHKHNlbGVjdG9yKSB7XHJcbiAgICBpbml0TGdQb2x5ZmlsbHMoKTtcclxuICAgIHJldHVybiBuZXcgbGdRdWVyeShzZWxlY3Rvcik7XHJcbn1cblxudmFyIGRlZmF1bHREeW5hbWljT3B0aW9ucyA9IFtcclxuICAgICdzcmMnLFxyXG4gICAgJ3NvdXJjZXMnLFxyXG4gICAgJ3N1Ykh0bWwnLFxyXG4gICAgJ3N1Ykh0bWxVcmwnLFxyXG4gICAgJ2h0bWwnLFxyXG4gICAgJ3ZpZGVvJyxcclxuICAgICdwb3N0ZXInLFxyXG4gICAgJ3NsaWRlTmFtZScsXHJcbiAgICAncmVzcG9uc2l2ZScsXHJcbiAgICAnc3Jjc2V0JyxcclxuICAgICdzaXplcycsXHJcbiAgICAnaWZyYW1lJyxcclxuICAgICdkb3dubG9hZFVybCcsXHJcbiAgICAnZG93bmxvYWQnLFxyXG4gICAgJ3dpZHRoJyxcclxuICAgICdmYWNlYm9va1NoYXJlVXJsJyxcclxuICAgICd0d2VldFRleHQnLFxyXG4gICAgJ2lmcmFtZVRpdGxlJyxcclxuICAgICd0d2l0dGVyU2hhcmVVcmwnLFxyXG4gICAgJ3BpbnRlcmVzdFNoYXJlVXJsJyxcclxuICAgICdwaW50ZXJlc3RUZXh0JyxcclxuICAgICdmYkh0bWwnLFxyXG4gICAgJ2Rpc3F1c0lkZW50aWZpZXInLFxyXG4gICAgJ2Rpc3F1c1VybCcsXHJcbl07XHJcbi8vIENvbnZlcnQgaHRtbCBkYXRhLWF0dHJpYnV0ZSB0byBjYW1hbGNhc2VcclxuZnVuY3Rpb24gY29udmVydFRvRGF0YShhdHRyKSB7XHJcbiAgICAvLyBGSW5kIGEgd2F5IGZvciBsZ3NpemVcclxuICAgIGlmIChhdHRyID09PSAnaHJlZicpIHtcclxuICAgICAgICByZXR1cm4gJ3NyYyc7XHJcbiAgICB9XHJcbiAgICBhdHRyID0gYXR0ci5yZXBsYWNlKCdkYXRhLScsICcnKTtcclxuICAgIGF0dHIgPSBhdHRyLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgYXR0ci5zbGljZSgxKTtcclxuICAgIGF0dHIgPSBhdHRyLnJlcGxhY2UoLy0oW2Etel0pL2csIGZ1bmN0aW9uIChnKSB7IHJldHVybiBnWzFdLnRvVXBwZXJDYXNlKCk7IH0pO1xyXG4gICAgcmV0dXJuIGF0dHI7XHJcbn1cclxudmFyIHV0aWxzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBnZXQgcG9zc2libGUgd2lkdGggYW5kIGhlaWdodCBmcm9tIHRoZSBsZ1NpemUgYXR0cmlidXRlLiBVc2VkIGZvciBab29tRnJvbU9yaWdpbiBvcHRpb25cclxuICAgICAqL1xyXG4gICAgZ2V0U2l6ZTogZnVuY3Rpb24gKGVsLCBjb250YWluZXIsIHNwYWNpbmcsIGRlZmF1bHRMZ1NpemUpIHtcclxuICAgICAgICBpZiAoc3BhY2luZyA9PT0gdm9pZCAwKSB7IHNwYWNpbmcgPSAwOyB9XHJcbiAgICAgICAgdmFyIExHZWwgPSAkTEcoZWwpO1xyXG4gICAgICAgIHZhciBsZ1NpemUgPSBMR2VsLmF0dHIoJ2RhdGEtbGctc2l6ZScpIHx8IGRlZmF1bHRMZ1NpemU7XHJcbiAgICAgICAgaWYgKCFsZ1NpemUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaXNSZXNwb25zaXZlU2l6ZXMgPSBsZ1NpemUuc3BsaXQoJywnKTtcclxuICAgICAgICAvLyBpZiBhdC1sZWFzdCB0d28gdmlld3BvcnQgc2l6ZXMgYXJlIGF2YWlsYWJsZVxyXG4gICAgICAgIGlmIChpc1Jlc3BvbnNpdmVTaXplc1sxXSkge1xyXG4gICAgICAgICAgICB2YXIgd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXNSZXNwb25zaXZlU2l6ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBzaXplXzEgPSBpc1Jlc3BvbnNpdmVTaXplc1tpXTtcclxuICAgICAgICAgICAgICAgIHZhciByZXNwb25zaXZlV2lkdGggPSBwYXJzZUludChzaXplXzEuc3BsaXQoJy0nKVsyXSwgMTApO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNpdmVXaWR0aCA+IHdXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxnU2l6ZSA9IHNpemVfMTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIHRha2UgbGFzdCBpdGVtIGFzIGxhc3Qgb3B0aW9uXHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gaXNSZXNwb25zaXZlU2l6ZXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxnU2l6ZSA9IHNpemVfMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc2l6ZSA9IGxnU2l6ZS5zcGxpdCgnLScpO1xyXG4gICAgICAgIHZhciB3aWR0aCA9IHBhcnNlSW50KHNpemVbMF0sIDEwKTtcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gcGFyc2VJbnQoc2l6ZVsxXSwgMTApO1xyXG4gICAgICAgIHZhciBjV2lkdGggPSBjb250YWluZXIud2lkdGgoKTtcclxuICAgICAgICB2YXIgY0hlaWdodCA9IGNvbnRhaW5lci5oZWlnaHQoKSAtIHNwYWNpbmc7XHJcbiAgICAgICAgdmFyIG1heFdpZHRoID0gTWF0aC5taW4oY1dpZHRoLCB3aWR0aCk7XHJcbiAgICAgICAgdmFyIG1heEhlaWdodCA9IE1hdGgubWluKGNIZWlnaHQsIGhlaWdodCk7XHJcbiAgICAgICAgdmFyIHJhdGlvID0gTWF0aC5taW4obWF4V2lkdGggLyB3aWR0aCwgbWF4SGVpZ2h0IC8gaGVpZ2h0KTtcclxuICAgICAgICByZXR1cm4geyB3aWR0aDogd2lkdGggKiByYXRpbywgaGVpZ2h0OiBoZWlnaHQgKiByYXRpbyB9O1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2MgR2V0IHRyYW5zZm9ybSB2YWx1ZSBiYXNlZCBvbiB0aGUgaW1hZ2VTaXplLiBVc2VkIGZvciBab29tRnJvbU9yaWdpbiBvcHRpb25cclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5IEVsZW1lbnR9XHJcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBUcmFuc2Zvcm0gQ1NTIHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBnZXRUcmFuc2Zvcm06IGZ1bmN0aW9uIChlbCwgY29udGFpbmVyLCB0b3AsIGJvdHRvbSwgaW1hZ2VTaXplKSB7XHJcbiAgICAgICAgaWYgKCFpbWFnZVNpemUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgTEdlbCA9ICRMRyhlbCkuZmluZCgnaW1nJykuZmlyc3QoKTtcclxuICAgICAgICBpZiAoIUxHZWwuZ2V0KCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY29udGFpbmVyUmVjdCA9IGNvbnRhaW5lci5nZXQoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICB2YXIgd1dpZHRoID0gY29udGFpbmVyUmVjdC53aWR0aDtcclxuICAgICAgICAvLyB1c2luZyBpbm5lcldpZHRoIHRvIGluY2x1ZGUgbW9iaWxlIHNhZmFyaSBib3R0b20gYmFyXHJcbiAgICAgICAgdmFyIHdIZWlnaHQgPSBjb250YWluZXIuaGVpZ2h0KCkgLSAodG9wICsgYm90dG9tKTtcclxuICAgICAgICB2YXIgZWxXaWR0aCA9IExHZWwud2lkdGgoKTtcclxuICAgICAgICB2YXIgZWxIZWlnaHQgPSBMR2VsLmhlaWdodCgpO1xyXG4gICAgICAgIHZhciBlbFN0eWxlID0gTEdlbC5zdHlsZSgpO1xyXG4gICAgICAgIHZhciB4ID0gKHdXaWR0aCAtIGVsV2lkdGgpIC8gMiAtXHJcbiAgICAgICAgICAgIExHZWwub2Zmc2V0KCkubGVmdCArXHJcbiAgICAgICAgICAgIChwYXJzZUZsb2F0KGVsU3R5bGUucGFkZGluZ0xlZnQpIHx8IDApICtcclxuICAgICAgICAgICAgKHBhcnNlRmxvYXQoZWxTdHlsZS5ib3JkZXJMZWZ0KSB8fCAwKSArXHJcbiAgICAgICAgICAgICRMRyh3aW5kb3cpLnNjcm9sbExlZnQoKSArXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclJlY3QubGVmdDtcclxuICAgICAgICB2YXIgeSA9ICh3SGVpZ2h0IC0gZWxIZWlnaHQpIC8gMiAtXHJcbiAgICAgICAgICAgIExHZWwub2Zmc2V0KCkudG9wICtcclxuICAgICAgICAgICAgKHBhcnNlRmxvYXQoZWxTdHlsZS5wYWRkaW5nVG9wKSB8fCAwKSArXHJcbiAgICAgICAgICAgIChwYXJzZUZsb2F0KGVsU3R5bGUuYm9yZGVyVG9wKSB8fCAwKSArXHJcbiAgICAgICAgICAgICRMRyh3aW5kb3cpLnNjcm9sbFRvcCgpICtcclxuICAgICAgICAgICAgdG9wO1xyXG4gICAgICAgIHZhciBzY1ggPSBlbFdpZHRoIC8gaW1hZ2VTaXplLndpZHRoO1xyXG4gICAgICAgIHZhciBzY1kgPSBlbEhlaWdodCAvIGltYWdlU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgdmFyIHRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgnICtcclxuICAgICAgICAgICAgKHggKj0gLTEpICtcclxuICAgICAgICAgICAgJ3B4LCAnICtcclxuICAgICAgICAgICAgKHkgKj0gLTEpICtcclxuICAgICAgICAgICAgJ3B4LCAwKSBzY2FsZTNkKCcgK1xyXG4gICAgICAgICAgICBzY1ggK1xyXG4gICAgICAgICAgICAnLCAnICtcclxuICAgICAgICAgICAgc2NZICtcclxuICAgICAgICAgICAgJywgMSknO1xyXG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm07XHJcbiAgICB9LFxyXG4gICAgZ2V0SWZyYW1lTWFya3VwOiBmdW5jdGlvbiAoaWZyYW1lV2lkdGgsIGlmcmFtZUhlaWdodCwgaWZyYW1lTWF4V2lkdGgsIGlmcmFtZU1heEhlaWdodCwgc3JjLCBpZnJhbWVUaXRsZSkge1xyXG4gICAgICAgIHZhciB0aXRsZSA9IGlmcmFtZVRpdGxlID8gJ3RpdGxlPVwiJyArIGlmcmFtZVRpdGxlICsgJ1wiJyA6ICcnO1xyXG4gICAgICAgIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImxnLXZpZGVvLWNvbnQgbGctaGFzLWlmcmFtZVxcXCIgc3R5bGU9XFxcIndpZHRoOlwiICsgaWZyYW1lV2lkdGggKyBcIjsgbWF4LXdpZHRoOlwiICsgaWZyYW1lTWF4V2lkdGggKyBcIjsgaGVpZ2h0OiBcIiArIGlmcmFtZUhlaWdodCArIFwiOyBtYXgtaGVpZ2h0OlwiICsgaWZyYW1lTWF4SGVpZ2h0ICsgXCJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGlmcmFtZSBjbGFzcz1cXFwibGctb2JqZWN0XFxcIiBmcmFtZWJvcmRlcj1cXFwiMFxcXCIgXCIgKyB0aXRsZSArIFwiIHNyYz1cXFwiXCIgKyBzcmMgKyBcIlxcXCIgIGFsbG93ZnVsbHNjcmVlbj1cXFwidHJ1ZVxcXCI+PC9pZnJhbWU+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlwiO1xyXG4gICAgfSxcclxuICAgIGdldEltZ01hcmt1cDogZnVuY3Rpb24gKGluZGV4LCBzcmMsIGFsdEF0dHIsIHNyY3NldCwgc2l6ZXMsIHNvdXJjZXMpIHtcclxuICAgICAgICB2YXIgc3Jjc2V0QXR0ciA9IHNyY3NldCA/IFwic3Jjc2V0PVxcXCJcIiArIHNyY3NldCArIFwiXFxcIlwiIDogJyc7XHJcbiAgICAgICAgdmFyIHNpemVzQXR0ciA9IHNpemVzID8gXCJzaXplcz1cXFwiXCIgKyBzaXplcyArIFwiXFxcIlwiIDogJyc7XHJcbiAgICAgICAgdmFyIGltZ01hcmt1cCA9IFwiPGltZyBcIiArIGFsdEF0dHIgKyBcIiBcIiArIHNyY3NldEF0dHIgKyBcIiAgXCIgKyBzaXplc0F0dHIgKyBcIiBjbGFzcz1cXFwibGctb2JqZWN0IGxnLWltYWdlXFxcIiBkYXRhLWluZGV4PVxcXCJcIiArIGluZGV4ICsgXCJcXFwiIHNyYz1cXFwiXCIgKyBzcmMgKyBcIlxcXCIgLz5cIjtcclxuICAgICAgICB2YXIgc291cmNlVGFnID0gJyc7XHJcbiAgICAgICAgaWYgKHNvdXJjZXMpIHtcclxuICAgICAgICAgICAgdmFyIHNvdXJjZU9iaiA9IHR5cGVvZiBzb3VyY2VzID09PSAnc3RyaW5nJyA/IEpTT04ucGFyc2Uoc291cmNlcykgOiBzb3VyY2VzO1xyXG4gICAgICAgICAgICBzb3VyY2VUYWcgPSBzb3VyY2VPYmoubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhdHRycyA9ICcnO1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBEbyBub3QgcmVtb3ZlIHRoZSBmaXJzdCBzcGFjZSBhcyBpdCBpcyByZXF1aXJlZCB0byBzZXBhcmF0ZSB0aGUgYXR0cmlidXRlc1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzICs9IFwiIFwiICsga2V5ICsgXCI9XFxcIlwiICsgc291cmNlW2tleV0gKyBcIlxcXCJcIjtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiPHNvdXJjZSBcIiArIGF0dHJzICsgXCI+PC9zb3VyY2U+XCI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJcIiArIHNvdXJjZVRhZyArIGltZ01hcmt1cDtcclxuICAgIH0sXHJcbiAgICAvLyBHZXQgc3JjIGZyb20gcmVzcG9uc2l2ZSBzcmNcclxuICAgIGdldFJlc3BvbnNpdmVTcmM6IGZ1bmN0aW9uIChzcmNJdG1zKSB7XHJcbiAgICAgICAgdmFyIHJzV2lkdGggPSBbXTtcclxuICAgICAgICB2YXIgcnNTcmMgPSBbXTtcclxuICAgICAgICB2YXIgc3JjID0gJyc7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzcmNJdG1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBfc3JjID0gc3JjSXRtc1tpXS5zcGxpdCgnICcpO1xyXG4gICAgICAgICAgICAvLyBNYW5hZ2UgZW1wdHkgc3BhY2VcclxuICAgICAgICAgICAgaWYgKF9zcmNbMF0gPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBfc3JjLnNwbGljZSgwLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByc1NyYy5wdXNoKF9zcmNbMF0pO1xyXG4gICAgICAgICAgICByc1dpZHRoLnB1c2goX3NyY1sxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB3V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJzV2lkdGgubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KHJzV2lkdGhbal0sIDEwKSA+IHdXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgc3JjID0gcnNTcmNbal07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3JjO1xyXG4gICAgfSxcclxuICAgIGlzSW1hZ2VMb2FkZWQ6IGZ1bmN0aW9uIChpbWcpIHtcclxuICAgICAgICBpZiAoIWltZylcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vIER1cmluZyB0aGUgb25sb2FkIGV2ZW50LCBJRSBjb3JyZWN0bHkgaWRlbnRpZmllcyBhbnkgaW1hZ2VzIHRoYXRcclxuICAgICAgICAvLyB3ZXJlbuKAmXQgZG93bmxvYWRlZCBhcyBub3QgY29tcGxldGUuIE90aGVycyBzaG91bGQgdG9vLiBHZWNrby1iYXNlZFxyXG4gICAgICAgIC8vIGJyb3dzZXJzIGFjdCBsaWtlIE5TNCBpbiB0aGF0IHRoZXkgcmVwb3J0IHRoaXMgaW5jb3JyZWN0bHkuXHJcbiAgICAgICAgaWYgKCFpbWcuY29tcGxldGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBIb3dldmVyLCB0aGV5IGRvIGhhdmUgdHdvIHZlcnkgdXNlZnVsIHByb3BlcnRpZXM6IG5hdHVyYWxXaWR0aCBhbmRcclxuICAgICAgICAvLyBuYXR1cmFsSGVpZ2h0LiBUaGVzZSBnaXZlIHRoZSB0cnVlIHNpemUgb2YgdGhlIGltYWdlLiBJZiBpdCBmYWlsZWRcclxuICAgICAgICAvLyB0byBsb2FkLCBlaXRoZXIgb2YgdGhlc2Ugc2hvdWxkIGJlIHplcm8uXHJcbiAgICAgICAgaWYgKGltZy5uYXR1cmFsV2lkdGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBObyBvdGhlciB3YXkgb2YgY2hlY2tpbmc6IGFzc3VtZSBpdOKAmXMgb2suXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG4gICAgZ2V0VmlkZW9Qb3N0ZXJNYXJrdXA6IGZ1bmN0aW9uIChfcG9zdGVyLCBkdW1teUltZywgdmlkZW9Db250U3R5bGUsIHBsYXlWaWRlb1N0cmluZywgX2lzVmlkZW8pIHtcclxuICAgICAgICB2YXIgdmlkZW9DbGFzcyA9ICcnO1xyXG4gICAgICAgIGlmIChfaXNWaWRlbyAmJiBfaXNWaWRlby55b3V0dWJlKSB7XHJcbiAgICAgICAgICAgIHZpZGVvQ2xhc3MgPSAnbGctaGFzLXlvdXR1YmUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChfaXNWaWRlbyAmJiBfaXNWaWRlby52aW1lbykge1xyXG4gICAgICAgICAgICB2aWRlb0NsYXNzID0gJ2xnLWhhcy12aW1lbyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2aWRlb0NsYXNzID0gJ2xnLWhhcy1odG1sNSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImxnLXZpZGVvLWNvbnQgXCIgKyB2aWRlb0NsYXNzICsgXCJcXFwiIHN0eWxlPVxcXCJcIiArIHZpZGVvQ29udFN0eWxlICsgXCJcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZy12aWRlby1wbGF5LWJ1dHRvblxcXCI+XFxuICAgICAgICAgICAgICAgIDxzdmdcXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XFxcIjAgMCAyMCAyMFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XFxcInhNaWRZTWlkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgZm9jdXNhYmxlPVxcXCJmYWxzZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cXFwiXCIgKyBwbGF5VmlkZW9TdHJpbmcgKyBcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHJvbGU9XFxcImltZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJsZy12aWRlby1wbGF5LWljb25cXFwiXFxuICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5cIiArIHBsYXlWaWRlb1N0cmluZyArIFwiPC90aXRsZT5cXG4gICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGNsYXNzPVxcXCJsZy12aWRlby1wbGF5LWljb24taW5uZXJcXFwiIHBvaW50cz1cXFwiMSwwIDIwLDEwIDEsMjBcXFwiPjwvcG9seWdvbj5cXG4gICAgICAgICAgICAgICAgPC9zdmc+XFxuICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XFxcImxnLXZpZGVvLXBsYXktaWNvbi1iZ1xcXCIgdmlld0JveD1cXFwiMCAwIDUwIDUwXFxcIiBmb2N1c2FibGU9XFxcImZhbHNlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XFxcIjUwJVxcXCIgY3k9XFxcIjUwJVxcXCIgcj1cXFwiMjBcXFwiPjwvY2lyY2xlPjwvc3ZnPlxcbiAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVxcXCJsZy12aWRlby1wbGF5LWljb24tY2lyY2xlXFxcIiB2aWV3Qm94PVxcXCIwIDAgNTAgNTBcXFwiIGZvY3VzYWJsZT1cXFwiZmFsc2VcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cXFwiNTAlXFxcIiBjeT1cXFwiNTAlXFxcIiByPVxcXCIyMFxcXCI+PC9jaXJjbGU+XFxuICAgICAgICAgICAgICAgIDwvc3ZnPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIFwiICsgKGR1bW15SW1nIHx8ICcnKSArIFwiXFxuICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwibGctb2JqZWN0IGxnLXZpZGVvLXBvc3RlclxcXCIgc3JjPVxcXCJcIiArIF9wb3N0ZXIgKyBcIlxcXCIgLz5cXG4gICAgICAgIDwvZGl2PlwiO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2MgQ3JlYXRlIGR5bmFtaWMgZWxlbWVudHMgYXJyYXkgZnJvbSBnYWxsZXJ5IGl0ZW1zIHdoZW4gZHluYW1pYyBvcHRpb24gaXMgZmFsc2VcclxuICAgICAqIEl0IGhlbHBzIHRvIGF2b2lkIGZyZXF1ZW50IERPTSBpbnRlcmFjdGlvblxyXG4gICAgICogYW5kIGF2b2lkIG11bHRpcGxlIGNoZWNrcyBmb3IgZHluYW1pYyBlbG1lbnRzXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge0FycmF5fSBkeW5hbWljRWxcclxuICAgICAqL1xyXG4gICAgZ2V0RHluYW1pY09wdGlvbnM6IGZ1bmN0aW9uIChpdGVtcywgZXh0cmFQcm9wcywgZ2V0Q2FwdGlvbkZyb21UaXRsZU9yQWx0LCBleFRodW1iSW1hZ2UpIHtcclxuICAgICAgICB2YXIgZHluYW1pY0VsZW1lbnRzID0gW107XHJcbiAgICAgICAgdmFyIGF2YWlsYWJsZUR5bmFtaWNPcHRpb25zID0gX19zcHJlYWRBcnJheXMoZGVmYXVsdER5bmFtaWNPcHRpb25zLCBleHRyYVByb3BzKTtcclxuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoaXRlbXMsIGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHZhciBkeW5hbWljRWwgPSB7fTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtLmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBhdHRyID0gaXRlbS5hdHRyaWJ1dGVzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGF0dHIuc3BlY2lmaWVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGR5bmFtaWNBdHRyID0gY29udmVydFRvRGF0YShhdHRyLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsYWJlbCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdmFpbGFibGVEeW5hbWljT3B0aW9ucy5pbmRleE9mKGR5bmFtaWNBdHRyKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsID0gZHluYW1pY0F0dHI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkeW5hbWljRWxbbGFiZWxdID0gYXR0ci52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRJdGVtID0gJExHKGl0ZW0pO1xyXG4gICAgICAgICAgICB2YXIgYWx0ID0gY3VycmVudEl0ZW0uZmluZCgnaW1nJykuZmlyc3QoKS5hdHRyKCdhbHQnKTtcclxuICAgICAgICAgICAgdmFyIHRpdGxlID0gY3VycmVudEl0ZW0uYXR0cigndGl0bGUnKTtcclxuICAgICAgICAgICAgdmFyIHRodW1iID0gZXhUaHVtYkltYWdlXHJcbiAgICAgICAgICAgICAgICA/IGN1cnJlbnRJdGVtLmF0dHIoZXhUaHVtYkltYWdlKVxyXG4gICAgICAgICAgICAgICAgOiBjdXJyZW50SXRlbS5maW5kKCdpbWcnKS5maXJzdCgpLmF0dHIoJ3NyYycpO1xyXG4gICAgICAgICAgICBkeW5hbWljRWwudGh1bWIgPSB0aHVtYjtcclxuICAgICAgICAgICAgaWYgKGdldENhcHRpb25Gcm9tVGl0bGVPckFsdCAmJiAhZHluYW1pY0VsLnN1Ykh0bWwpIHtcclxuICAgICAgICAgICAgICAgIGR5bmFtaWNFbC5zdWJIdG1sID0gdGl0bGUgfHwgYWx0IHx8ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGR5bmFtaWNFbC5hbHQgPSBhbHQgfHwgdGl0bGUgfHwgJyc7XHJcbiAgICAgICAgICAgIGR5bmFtaWNFbGVtZW50cy5wdXNoKGR5bmFtaWNFbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGR5bmFtaWNFbGVtZW50cztcclxuICAgIH0sXHJcbiAgICBpc01vYmlsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAvaVBob25lfGlQYWR8aVBvZHxBbmRyb2lkL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjIENoZWNrIHRoZSBnaXZlbiBzcmMgaXMgdmlkZW9cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzcmNcclxuICAgICAqIEByZXR1cm4ge09iamVjdH0gdmlkZW8gdHlwZVxyXG4gICAgICogRXg6eyB5b3V0dWJlICA6ICBbXCIvL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWMwYXNKZ1N5eGNZXCIsIFwiYzBhc0pnU3l4Y1lcIl0gfVxyXG4gICAgICpcclxuICAgICAqIEB0b2RvIC0gdGhpcyBpbmZvcm1hdGlvbiBjYW4gYmUgbW92ZWQgdG8gZHluYW1pY0VsIHRvIGF2b2lkIGZyZXF1ZW50IGNhbGxzXHJcbiAgICAgKi9cclxuICAgIGlzVmlkZW86IGZ1bmN0aW9uIChzcmMsIGlzSFRNTDVWSWRlbywgaW5kZXgpIHtcclxuICAgICAgICBpZiAoIXNyYykge1xyXG4gICAgICAgICAgICBpZiAoaXNIVE1MNVZJZGVvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGh0bWw1OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2xpZ2h0R2FsbGVyeSA6LSBkYXRhLXNyYyBpcyBub3QgcHJvdmlkZWQgb24gc2xpZGUgaXRlbSAnICtcclxuICAgICAgICAgICAgICAgICAgICAoaW5kZXggKyAxKSArXHJcbiAgICAgICAgICAgICAgICAgICAgJy4gUGxlYXNlIG1ha2Ugc3VyZSB0aGUgc2VsZWN0b3IgcHJvcGVydHkgaXMgcHJvcGVybHkgY29uZmlndXJlZC4gTW9yZSBpbmZvIC0gaHR0cHM6Ly93d3cubGlnaHRnYWxsZXJ5anMuY29tL2RlbW9zL2h0bWwtbWFya3VwLycpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB5b3V0dWJlID0gc3JjLm1hdGNoKC9cXC9cXC8oPzp3d3dcXC4pP3lvdXR1KD86XFwuYmV8YmVcXC5jb218YmUtbm9jb29raWVcXC5jb20pXFwvKD86d2F0Y2hcXD92PXxlbWJlZFxcLyk/KFthLXowLTlcXC1cXF9cXCVdKykoW1xcJnw/XVtcXFNdKikqL2kpO1xyXG4gICAgICAgIHZhciB2aW1lbyA9IHNyYy5tYXRjaCgvXFwvXFwvKD86d3d3XFwuKT8oPzpwbGF5ZXJcXC4pP3ZpbWVvLmNvbVxcLyg/OnZpZGVvXFwvKT8oWzAtOWEtelxcLV9dKykoLiopPy9pKTtcclxuICAgICAgICB2YXIgd2lzdGlhID0gc3JjLm1hdGNoKC9odHRwcz86XFwvXFwvKC4rKT8od2lzdGlhXFwuY29tfHdpXFwuc3QpXFwvKG1lZGlhc3xlbWJlZClcXC8oWzAtOWEtelxcLV9dKykoLiopLyk7XHJcbiAgICAgICAgaWYgKHlvdXR1YmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHlvdXR1YmU6IHlvdXR1YmUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZpbWVvKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB2aW1lbzogdmltZW8sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHdpc3RpYSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgd2lzdGlhOiB3aXN0aWEsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufTtcblxuLy8gQHJlZiAtIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM5NzE4NDEvaG93LXRvLXJlc2l6ZS1pbWFnZXMtcHJvcG9ydGlvbmFsbHkta2VlcGluZy10aGUtYXNwZWN0LXJhdGlvXHJcbi8vIEByZWYgLSBodHRwczovLzJhbGl0eS5jb20vMjAxNy8wNC9zZXR0aW5nLXVwLW11bHRpLXBsYXRmb3JtLXBhY2thZ2VzLmh0bWxcclxuLy8gVW5pcXVlIGlkIGZvciBlYWNoIGdhbGxlcnlcclxudmFyIGxnSWQgPSAwO1xyXG52YXIgTGlnaHRHYWxsZXJ5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTGlnaHRHYWxsZXJ5KGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmxnT3BlbmVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XHJcbiAgICAgICAgLy8gbGlnaHRHYWxsZXJ5IG1vZHVsZXNcclxuICAgICAgICB0aGlzLnBsdWdpbnMgPSBbXTtcclxuICAgICAgICAvLyBmYWxzZSB3aGVuIGxpZ2h0R2FsbGVyeSBsb2FkIGZpcnN0IHNsaWRlIGNvbnRlbnQ7XHJcbiAgICAgICAgdGhpcy5sR2FsbGVyeU9uID0gZmFsc2U7XHJcbiAgICAgICAgLy8gVHJ1ZSB3aGVuIGEgc2xpZGUgYW5pbWF0aW9uIGlzIGluIHByb2dyZXNzXHJcbiAgICAgICAgdGhpcy5sZ0J1c3kgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJdGVtc0luRG9tID0gW107XHJcbiAgICAgICAgLy8gU2Nyb2xsIHRvcCB2YWx1ZSBiZWZvcmUgbGlnaHRHYWxsZXJ5IGlzIG9wZW5lZFxyXG4gICAgICAgIHRoaXMucHJldlNjcm9sbFRvcCA9IDA7XHJcbiAgICAgICAgdGhpcy5pc0R1bW15SW1hZ2VSZW1vdmVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kcmFnT3JTd2lwZUVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm1lZGlhQ29udGFpbmVyUG9zaXRpb24gPSB7XHJcbiAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZ0lkKys7XHJcbiAgICAgICAgdGhpcy5sZ0lkID0gbGdJZDtcclxuICAgICAgICB0aGlzLmVsID0gZWxlbWVudDtcclxuICAgICAgICB0aGlzLkxHZWwgPSAkTEcoZWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZVNldHRpbmdzKG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuYnVpbGRNb2R1bGVzKCk7XHJcbiAgICAgICAgLy8gV2hlbiB1c2luZyBkeW5hbWljIG1vZGUsIGVuc3VyZSBkeW5hbWljRWwgaXMgYW4gYXJyYXlcclxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5keW5hbWljICYmXHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuZHluYW1pY0VsICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgIUFycmF5LmlzQXJyYXkodGhpcy5zZXR0aW5ncy5keW5hbWljRWwpKSB7XHJcbiAgICAgICAgICAgIHRocm93ICdXaGVuIHVzaW5nIGR5bmFtaWMgbW9kZSwgeW91IG11c3QgYWxzbyBkZWZpbmUgZHluYW1pY0VsIGFzIGFuIEFycmF5Lic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2FsbGVyeUl0ZW1zID0gdGhpcy5nZXRJdGVtcygpO1xyXG4gICAgICAgIHRoaXMubm9ybWFsaXplU2V0dGluZ3MoKTtcclxuICAgICAgICAvLyBHYWxsZXJ5IGl0ZW1zXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0ZUxpY2Vuc2UoKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUuZ2VuZXJhdGVTZXR0aW5ncyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgLy8gbGlnaHRHYWxsZXJ5IHNldHRpbmdzXHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBsaWdodEdhbGxlcnlDb3JlU2V0dGluZ3MpLCBvcHRpb25zKTtcclxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5pc01vYmlsZSAmJlxyXG4gICAgICAgICAgICB0eXBlb2YgdGhpcy5zZXR0aW5ncy5pc01vYmlsZSA9PT0gJ2Z1bmN0aW9uJ1xyXG4gICAgICAgICAgICA/IHRoaXMuc2V0dGluZ3MuaXNNb2JpbGUoKVxyXG4gICAgICAgICAgICA6IHV0aWxzLmlzTW9iaWxlKCkpIHtcclxuICAgICAgICAgICAgdmFyIG1vYmlsZVNldHRpbmdzID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHRoaXMuc2V0dGluZ3MubW9iaWxlU2V0dGluZ3MpLCB0aGlzLnNldHRpbmdzLm1vYmlsZVNldHRpbmdzKTtcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGlzLnNldHRpbmdzKSwgbW9iaWxlU2V0dGluZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLm5vcm1hbGl6ZVNldHRpbmdzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLnNsaWRlRW5kQW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuaGlkZUNvbnRyb2xPbkVuZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MuY2xvc2FibGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5zd2lwZVRvQ2xvc2UgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQW5kIHJlc2V0IGl0IG9uIGNsb3NlIHRvIGdldCB0aGUgY29ycmVjdCB2YWx1ZSBuZXh0IHRpbWVcclxuICAgICAgICB0aGlzLnpvb21Gcm9tT3JpZ2luID0gdGhpcy5zZXR0aW5ncy56b29tRnJvbU9yaWdpbjtcclxuICAgICAgICAvLyBBdCB0aGUgbW9tZW50LCBab29tIGZyb20gaW1hZ2UgZG9lc24ndCBzdXBwb3J0IGR5bmFtaWMgb3B0aW9uc1xyXG4gICAgICAgIC8vIEB0b2RvIGFkZCB6b29tRnJvbU9yaWdpbiBzdXBwb3J0IGZvciBkeW5hbWljIGltYWdlc1xyXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmR5bmFtaWMpIHtcclxuICAgICAgICAgICAgdGhpcy56b29tRnJvbU9yaWdpbiA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MuY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY29udGFpbmVyID0gZG9jdW1lbnQuYm9keTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2V0dGluZ3MucHJlbG9hZCBzaG91bGQgbm90IGJlIGdyYXRlciB0aGFuICRpdGVtLmxlbmd0aFxyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJlbG9hZCA9IE1hdGgubWluKHRoaXMuc2V0dGluZ3MucHJlbG9hZCwgdGhpcy5nYWxsZXJ5SXRlbXMubGVuZ3RoKTtcclxuICAgIH07XHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmFkZFNsaWRlVmlkZW9JbmZvKHRoaXMuZ2FsbGVyeUl0ZW1zKTtcclxuICAgICAgICB0aGlzLmJ1aWxkU3RydWN0dXJlKCk7XHJcbiAgICAgICAgdGhpcy5MR2VsLnRyaWdnZXIobEdFdmVudHMuaW5pdCwge1xyXG4gICAgICAgICAgICBpbnN0YW5jZTogdGhpcyxcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5rZXlQcmVzcykge1xyXG4gICAgICAgICAgICB0aGlzLmtleVByZXNzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5lbmFibGVEcmFnKCk7XHJcbiAgICAgICAgICAgIF90aGlzLmVuYWJsZVN3aXBlKCk7XHJcbiAgICAgICAgICAgIF90aGlzLnRyaWdnZXJQb3N0ZXJDbGljaygpO1xyXG4gICAgICAgIH0sIDUwKTtcclxuICAgICAgICB0aGlzLmFycm93KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MubW91c2V3aGVlbCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNld2hlZWwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLmR5bmFtaWMpIHtcclxuICAgICAgICAgICAgdGhpcy5vcGVuR2FsbGVyeU9uSXRlbUNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUub3BlbkdhbGxlcnlPbkl0ZW1DbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gdGhpc18xLml0ZW1zW2luZGV4XTtcclxuICAgICAgICAgICAgdmFyICRlbGVtZW50ID0gJExHKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAvLyBVc2luZyBkaWZmZXJlbnQgbmFtZXNwYWNlIGZvciBjbGljayBiZWNhdXNlIGNsaWNrIGV2ZW50IHNob3VsZCBub3QgdW5iaW5kIGlmIHNlbGVjdG9yIGlzIHNhbWUgb2JqZWN0KCd0aGlzJylcclxuICAgICAgICAgICAgLy8gQHRvZG8gbWFuYWdlIGFsbCBldmVudCBsaXN0bmVycyAtIHNob3VsZCBoYXZlIG5hbWVzcGFjZSB0aGF0IHJlcHJlc2VudCBlbGVtZW50XHJcbiAgICAgICAgICAgIHZhciB1dWlkID0gbGdRdWVyeS5nZW5lcmF0ZVVVSUQoKTtcclxuICAgICAgICAgICAgJGVsZW1lbnRcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWxnLWlkJywgdXVpZClcclxuICAgICAgICAgICAgICAgIC5vbihcImNsaWNrLmxnY3VzdG9tLWl0ZW0tXCIgKyB1dWlkLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRJdGVtSW5kZXggPSBfdGhpcy5zZXR0aW5ncy5pbmRleCB8fCBpbmRleDtcclxuICAgICAgICAgICAgICAgIF90aGlzLm9wZW5HYWxsZXJ5KGN1cnJlbnRJdGVtSW5kZXgsIGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciB0aGlzXzEgPSB0aGlzO1xyXG4gICAgICAgIC8vIFVzaW5nIGZvciBsb29wIGluc3RlYWQgb2YgdXNpbmcgYnViYmxpbmcgYXMgdGhlIGl0ZW1zIGNhbiBiZSBhbnkgaHRtbCBlbGVtZW50LlxyXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLml0ZW1zLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBfbG9vcF8xKGluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBNb2R1bGUgY29uc3RydWN0b3JcclxuICAgICAqIE1vZHVsZXMgYXJlIGJ1aWxkIGluY3JlbWVudGFsbHkuXHJcbiAgICAgKiBHYWxsZXJ5IHNob3VsZCBiZSBvcGVuZWQgb25seSBvbmNlIGFsbCB0aGUgbW9kdWxlcyBhcmUgaW5pdGlhbGl6ZWQuXHJcbiAgICAgKiB1c2UgbW9kdWxlQnVpbGRUaW1lb3V0IHRvIG1ha2Ugc3VyZSB0aGlzXHJcbiAgICAgKi9cclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUuYnVpbGRNb2R1bGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xyXG4gICAgICAgICAgICBfdGhpcy5wbHVnaW5zLnB1c2gobmV3IHBsdWdpbihfdGhpcywgJExHKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS52YWxpZGF0ZUxpY2Vuc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLmxpY2Vuc2VLZXkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBsaWNlbnNlIGtleScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnNldHRpbmdzLmxpY2Vuc2VLZXkgPT09ICcwMDAwLTAwMDAtMDAwLTAwMDAnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcImxpZ2h0R2FsbGVyeTogXCIgKyB0aGlzLnNldHRpbmdzLmxpY2Vuc2VLZXkgKyBcIiBsaWNlbnNlIGtleSBpcyBub3QgdmFsaWQgZm9yIHByb2R1Y3Rpb24gdXNlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLmdldFNsaWRlSXRlbSA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgIHJldHVybiAkTEcodGhpcy5nZXRTbGlkZUl0ZW1JZChpbmRleCkpO1xyXG4gICAgfTtcclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUuZ2V0U2xpZGVJdGVtSWQgPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gXCIjbGctaXRlbS1cIiArIHRoaXMubGdJZCArIFwiLVwiICsgaW5kZXg7XHJcbiAgICB9O1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5nZXRJZE5hbWUgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICByZXR1cm4gaWQgKyBcIi1cIiArIHRoaXMubGdJZDtcclxuICAgIH07XHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLmdldEVsZW1lbnRCeUlkID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuICRMRyhcIiNcIiArIHRoaXMuZ2V0SWROYW1lKGlkKSk7XHJcbiAgICB9O1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5tYW5hZ2VTaW5nbGVTbGlkZUNsYXNzTmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5nYWxsZXJ5SXRlbXMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgICAgICB0aGlzLm91dGVyLmFkZENsYXNzKCdsZy1zaW5nbGUtaXRlbScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vdXRlci5yZW1vdmVDbGFzcygnbGctc2luZ2xlLWl0ZW0nKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5idWlsZFN0cnVjdHVyZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLiRjb250YWluZXIgJiYgdGhpcy4kY29udGFpbmVyLmdldCgpO1xyXG4gICAgICAgIGlmIChjb250YWluZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY29udHJvbHMgPSAnJztcclxuICAgICAgICB2YXIgc3ViSHRtbENvbnQgPSAnJztcclxuICAgICAgICAvLyBDcmVhdGUgY29udHJvbHNcclxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5jb250cm9scykge1xyXG4gICAgICAgICAgICBjb250cm9scyA9IFwiPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGlkPVxcXCJcIiArIHRoaXMuZ2V0SWROYW1lKCdsZy1wcmV2JykgKyBcIlxcXCIgYXJpYS1sYWJlbD1cXFwiXCIgKyB0aGlzLnNldHRpbmdzLnN0cmluZ3NbJ3ByZXZpb3VzU2xpZGUnXSArIFwiXFxcIiBjbGFzcz1cXFwibGctcHJldiBsZy1pY29uXFxcIj4gXCIgKyB0aGlzLnNldHRpbmdzLnByZXZIdG1sICsgXCIgPC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBpZD1cXFwiXCIgKyB0aGlzLmdldElkTmFtZSgnbGctbmV4dCcpICsgXCJcXFwiIGFyaWEtbGFiZWw9XFxcIlwiICsgdGhpcy5zZXR0aW5ncy5zdHJpbmdzWyduZXh0U2xpZGUnXSArIFwiXFxcIiBjbGFzcz1cXFwibGctbmV4dCBsZy1pY29uXFxcIj4gXCIgKyB0aGlzLnNldHRpbmdzLm5leHRIdG1sICsgXCIgPC9idXR0b24+XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmFwcGVuZFN1Ykh0bWxUbyAhPT0gJy5sZy1pdGVtJykge1xyXG4gICAgICAgICAgICBzdWJIdG1sQ29udCA9XHJcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImxnLXN1Yi1odG1sXCIgcm9sZT1cInN0YXR1c1wiIGFyaWEtbGl2ZT1cInBvbGl0ZVwiPjwvZGl2Pic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhZGRDbGFzc2VzID0gJyc7XHJcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuYWxsb3dNZWRpYU92ZXJsYXApIHtcclxuICAgICAgICAgICAgLy8gRG8gbm90IHJlbW92ZSBzcGFjZSBiZWZvcmUgbGFzdCBzaW5nbGUgcXVvdGVcclxuICAgICAgICAgICAgYWRkQ2xhc3NlcyArPSAnbGctbWVkaWEtb3ZlcmxhcCAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYXJpYUxhYmVsbGVkYnkgPSB0aGlzLnNldHRpbmdzLmFyaWFMYWJlbGxlZGJ5XHJcbiAgICAgICAgICAgID8gJ2FyaWEtbGFiZWxsZWRieT1cIicgKyB0aGlzLnNldHRpbmdzLmFyaWFMYWJlbGxlZGJ5ICsgJ1wiJ1xyXG4gICAgICAgICAgICA6ICcnO1xyXG4gICAgICAgIHZhciBhcmlhRGVzY3JpYmVkYnkgPSB0aGlzLnNldHRpbmdzLmFyaWFEZXNjcmliZWRieVxyXG4gICAgICAgICAgICA/ICdhcmlhLWRlc2NyaWJlZGJ5PVwiJyArIHRoaXMuc2V0dGluZ3MuYXJpYURlc2NyaWJlZGJ5ICsgJ1wiJ1xyXG4gICAgICAgICAgICA6ICcnO1xyXG4gICAgICAgIHZhciBjb250YWluZXJDbGFzc05hbWUgPSBcImxnLWNvbnRhaW5lciBcIiArIHRoaXMuc2V0dGluZ3MuYWRkQ2xhc3MgKyBcIiBcIiArIChkb2N1bWVudC5ib2R5ICE9PSB0aGlzLnNldHRpbmdzLmNvbnRhaW5lciA/ICdsZy1pbmxpbmUnIDogJycpO1xyXG4gICAgICAgIHZhciBjbG9zZUljb24gPSB0aGlzLnNldHRpbmdzLmNsb3NhYmxlICYmIHRoaXMuc2V0dGluZ3Muc2hvd0Nsb3NlSWNvblxyXG4gICAgICAgICAgICA/IFwiPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGFyaWEtbGFiZWw9XFxcIlwiICsgdGhpcy5zZXR0aW5ncy5zdHJpbmdzWydjbG9zZUdhbGxlcnknXSArIFwiXFxcIiBpZD1cXFwiXCIgKyB0aGlzLmdldElkTmFtZSgnbGctY2xvc2UnKSArIFwiXFxcIiBjbGFzcz1cXFwibGctY2xvc2UgbGctaWNvblxcXCI+PC9idXR0b24+XCJcclxuICAgICAgICAgICAgOiAnJztcclxuICAgICAgICB2YXIgbWF4aW1pemVJY29uID0gdGhpcy5zZXR0aW5ncy5zaG93TWF4aW1pemVJY29uXHJcbiAgICAgICAgICAgID8gXCI8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgYXJpYS1sYWJlbD1cXFwiXCIgKyB0aGlzLnNldHRpbmdzLnN0cmluZ3NbJ3RvZ2dsZU1heGltaXplJ10gKyBcIlxcXCIgaWQ9XFxcIlwiICsgdGhpcy5nZXRJZE5hbWUoJ2xnLW1heGltaXplJykgKyBcIlxcXCIgY2xhc3M9XFxcImxnLW1heGltaXplIGxnLWljb25cXFwiPjwvYnV0dG9uPlwiXHJcbiAgICAgICAgICAgIDogJyc7XHJcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gXCJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIlwiICsgY29udGFpbmVyQ2xhc3NOYW1lICsgXCJcXFwiIGlkPVxcXCJcIiArIHRoaXMuZ2V0SWROYW1lKCdsZy1jb250YWluZXInKSArIFwiXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiIGFyaWEtbW9kYWw9XFxcInRydWVcXFwiIFwiICsgYXJpYUxhYmVsbGVkYnkgKyBcIiBcIiArIGFyaWFEZXNjcmliZWRieSArIFwiIHJvbGU9XFxcImRpYWxvZ1xcXCJcXG4gICAgICAgID5cXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJcIiArIHRoaXMuZ2V0SWROYW1lKCdsZy1iYWNrZHJvcCcpICsgXCJcXFwiIGNsYXNzPVxcXCJsZy1iYWNrZHJvcFxcXCI+PC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwiXCIgKyB0aGlzLmdldElkTmFtZSgnbGctb3V0ZXInKSArIFwiXFxcIiBjbGFzcz1cXFwibGctb3V0ZXIgbGctdXNlLWNzczMgbGctY3NzMyBsZy1oaWRlLWl0ZW1zIFwiICsgYWRkQ2xhc3NlcyArIFwiIFxcXCI+XFxuXFxuICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJcIiArIHRoaXMuZ2V0SWROYW1lKCdsZy1jb250ZW50JykgKyBcIlxcXCIgY2xhc3M9XFxcImxnLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJcIiArIHRoaXMuZ2V0SWROYW1lKCdsZy1pbm5lcicpICsgXCJcXFwiIGNsYXNzPVxcXCJsZy1pbm5lclxcXCI+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICBcIiArIGNvbnRyb2xzICsgXCJcXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJcIiArIHRoaXMuZ2V0SWROYW1lKCdsZy10b29sYmFyJykgKyBcIlxcXCIgY2xhc3M9XFxcImxnLXRvb2xiYXIgbGctZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBtYXhpbWl6ZUljb24gKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBjbG9zZUljb24gKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICBcIiArICh0aGlzLnNldHRpbmdzLmFwcGVuZFN1Ykh0bWxUbyA9PT0gJy5sZy1vdXRlcidcclxuICAgICAgICAgICAgPyBzdWJIdG1sQ29udFxyXG4gICAgICAgICAgICA6ICcnKSArIFwiXFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcIlwiICsgdGhpcy5nZXRJZE5hbWUoJ2xnLWNvbXBvbmVudHMnKSArIFwiXFxcIiBjbGFzcz1cXFwibGctY29tcG9uZW50c1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICBcIiArICh0aGlzLnNldHRpbmdzLmFwcGVuZFN1Ykh0bWxUbyA9PT0gJy5sZy1zdWItaHRtbCdcclxuICAgICAgICAgICAgPyBzdWJIdG1sQ29udFxyXG4gICAgICAgICAgICA6ICcnKSArIFwiXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICBcIjtcclxuICAgICAgICAkTEcodGhpcy5zZXR0aW5ncy5jb250YWluZXIpLmFwcGVuZCh0ZW1wbGF0ZSk7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmJvZHkgIT09IHRoaXMuc2V0dGluZ3MuY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICRMRyh0aGlzLnNldHRpbmdzLmNvbnRhaW5lcikuY3NzKCdwb3NpdGlvbicsICdyZWxhdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm91dGVyID0gdGhpcy5nZXRFbGVtZW50QnlJZCgnbGctb3V0ZXInKTtcclxuICAgICAgICB0aGlzLiRsZ0NvbXBvbmVudHMgPSB0aGlzLmdldEVsZW1lbnRCeUlkKCdsZy1jb21wb25lbnRzJyk7XHJcbiAgICAgICAgdGhpcy4kYmFja2Ryb3AgPSB0aGlzLmdldEVsZW1lbnRCeUlkKCdsZy1iYWNrZHJvcCcpO1xyXG4gICAgICAgIHRoaXMuJGNvbnRhaW5lciA9IHRoaXMuZ2V0RWxlbWVudEJ5SWQoJ2xnLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIHRoaXMuJGlubmVyID0gdGhpcy5nZXRFbGVtZW50QnlJZCgnbGctaW5uZXInKTtcclxuICAgICAgICB0aGlzLiRjb250ZW50ID0gdGhpcy5nZXRFbGVtZW50QnlJZCgnbGctY29udGVudCcpO1xyXG4gICAgICAgIHRoaXMuJHRvb2xiYXIgPSB0aGlzLmdldEVsZW1lbnRCeUlkKCdsZy10b29sYmFyJyk7XHJcbiAgICAgICAgdGhpcy4kYmFja2Ryb3AuY3NzKCd0cmFuc2l0aW9uLWR1cmF0aW9uJywgdGhpcy5zZXR0aW5ncy5iYWNrZHJvcER1cmF0aW9uICsgJ21zJyk7XHJcbiAgICAgICAgdmFyIG91dGVyQ2xhc3NOYW1lcyA9IHRoaXMuc2V0dGluZ3MubW9kZSArIFwiIFwiO1xyXG4gICAgICAgIHRoaXMubWFuYWdlU2luZ2xlU2xpZGVDbGFzc05hbWUoKTtcclxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5lbmFibGVEcmFnKSB7XHJcbiAgICAgICAgICAgIG91dGVyQ2xhc3NOYW1lcyArPSAnbGctZ3JhYiAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm91dGVyLmFkZENsYXNzKG91dGVyQ2xhc3NOYW1lcyk7XHJcbiAgICAgICAgdGhpcy4kaW5uZXIuY3NzKCd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbicsIHRoaXMuc2V0dGluZ3MuZWFzaW5nKTtcclxuICAgICAgICB0aGlzLiRpbm5lci5jc3MoJ3RyYW5zaXRpb24tZHVyYXRpb24nLCB0aGlzLnNldHRpbmdzLnNwZWVkICsgJ21zJyk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuZG93bmxvYWQpIHtcclxuICAgICAgICAgICAgdGhpcy4kdG9vbGJhci5hcHBlbmQoXCI8YSBpZD1cXFwiXCIgKyB0aGlzLmdldElkTmFtZSgnbGctZG93bmxvYWQnKSArIFwiXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgcmVsPVxcXCJub29wZW5lclxcXCIgYXJpYS1sYWJlbD1cXFwiXCIgKyB0aGlzLnNldHRpbmdzLnN0cmluZ3NbJ2Rvd25sb2FkJ10gKyBcIlxcXCIgZG93bmxvYWQgY2xhc3M9XFxcImxnLWRvd25sb2FkIGxnLWljb25cXFwiPjwvYT5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY291bnRlcigpO1xyXG4gICAgICAgICRMRyh3aW5kb3cpLm9uKFwicmVzaXplLmxnLmdsb2JhbFwiICsgdGhpcy5sZ0lkICsgXCIgb3JpZW50YXRpb25jaGFuZ2UubGcuZ2xvYmFsXCIgKyB0aGlzLmxnSWQsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMucmVmcmVzaE9uUmVzaXplKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5oaWRlQmFycygpO1xyXG4gICAgICAgIHRoaXMubWFuYWdlQ2xvc2VHYWxsZXJ5KCk7XHJcbiAgICAgICAgdGhpcy50b2dnbGVNYXhpbWl6ZSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdE1vZHVsZXMoKTtcclxuICAgIH07XHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLnJlZnJlc2hPblJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5sZ09wZW5lZCkge1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudEdhbGxlcnlJdGVtID0gdGhpcy5nYWxsZXJ5SXRlbXNbdGhpcy5pbmRleF07XHJcbiAgICAgICAgICAgIHZhciBfX3NsaWRlVmlkZW9JbmZvID0gY3VycmVudEdhbGxlcnlJdGVtLl9fc2xpZGVWaWRlb0luZm87XHJcbiAgICAgICAgICAgIHRoaXMubWVkaWFDb250YWluZXJQb3NpdGlvbiA9IHRoaXMuZ2V0TWVkaWFDb250YWluZXJQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLm1lZGlhQ29udGFpbmVyUG9zaXRpb24sIHRvcF8xID0gX2EudG9wLCBib3R0b20gPSBfYS5ib3R0b207XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEltYWdlU2l6ZSA9IHV0aWxzLmdldFNpemUodGhpcy5pdGVtc1t0aGlzLmluZGV4XSwgdGhpcy5vdXRlciwgdG9wXzEgKyBib3R0b20sIF9fc2xpZGVWaWRlb0luZm8gJiYgdGhpcy5zZXR0aW5ncy52aWRlb01heFNpemUpO1xyXG4gICAgICAgICAgICBpZiAoX19zbGlkZVZpZGVvSW5mbykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNpemVWaWRlb1NsaWRlKHRoaXMuaW5kZXgsIHRoaXMuY3VycmVudEltYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuem9vbUZyb21PcmlnaW4gJiYgIXRoaXMuaXNEdW1teUltYWdlUmVtb3ZlZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGltZ1N0eWxlID0gdGhpcy5nZXREdW1teUltZ1N0eWxlcyh0aGlzLmN1cnJlbnRJbWFnZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdXRlclxyXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKCcubGctY3VycmVudCAubGctZHVtbXktaW1nJylcclxuICAgICAgICAgICAgICAgICAgICAuZmlyc3QoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzdHlsZScsIGltZ1N0eWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLkxHZWwudHJpZ2dlcihsR0V2ZW50cy5jb250YWluZXJSZXNpemUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLnJlc2l6ZVZpZGVvU2xpZGUgPSBmdW5jdGlvbiAoaW5kZXgsIGltYWdlU2l6ZSkge1xyXG4gICAgICAgIHZhciBsZ1ZpZGVvU3R5bGUgPSB0aGlzLmdldFZpZGVvQ29udFN0eWxlKGltYWdlU2l6ZSk7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRTbGlkZSA9IHRoaXMuZ2V0U2xpZGVJdGVtKGluZGV4KTtcclxuICAgICAgICBjdXJyZW50U2xpZGUuZmluZCgnLmxnLXZpZGVvLWNvbnQnKS5hdHRyKCdzdHlsZScsIGxnVmlkZW9TdHlsZSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgc2xpZGVzIGR5bmFtaWNhbGx5LlxyXG4gICAgICogQWRkLCBlZGl0IG9yIGRlbGV0ZSBzbGlkZXMgZHluYW1pY2FsbHkgd2hlbiBsaWdodEdhbGxlcnkgaXMgb3BlbmVkLlxyXG4gICAgICogTW9kaWZ5IHRoZSBjdXJyZW50IGdhbGxlcnkgaXRlbXMgYW5kIHBhc3MgaXQgdmlhIHVwZGF0ZVNsaWRlcyBtZXRob2RcclxuICAgICAqIEBub3RlXHJcbiAgICAgKiAtIERvIG5vdCBtdXRhdGUgZXhpc3RpbmcgbGlnaHRHYWxsZXJ5IGl0ZW1zIGRpcmVjdGx5LlxyXG4gICAgICogLSBBbHdheXMgcGFzcyBuZXcgbGlzdCBvZiBnYWxsZXJ5IGl0ZW1zXHJcbiAgICAgKiAtIFlvdSBuZWVkIHRvIHRha2UgY2FyZSBvZiB0aHVtYm5haWxzIG91dHNpZGUgdGhlIGdhbGxlcnkgaWYgYW55XHJcbiAgICAgKiAtIHVzZXIgdGhpcyBtZXRob2Qgb25seSBpZiB5b3Ugd2FudCB0byB1cGRhdGUgc2xpZGVzIHdoZW4gdGhlIGdhbGxlcnkgaXMgb3BlbmVkLiBPdGhlcndpc2UsIHVzZSBgcmVmcmVzaCgpYCBtZXRob2QuXHJcbiAgICAgKiBAcGFyYW0gaXRlbXMgR2FsbGVyeSBpdGVtc1xyXG4gICAgICogQHBhcmFtIGluZGV4IEFmdGVyIHRoZSB1cGRhdGUgb3BlcmF0aW9uLCB3aGljaCBzbGlkZSBnYWxsZXJ5IHNob3VsZCBuYXZpZ2F0ZSB0b1xyXG4gICAgICogQGNhdGVnb3J5IGxHUHVibGljTWV0aG9kc1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIGNvbnN0IHBsdWdpbiA9IGxpZ2h0R2FsbGVyeSgpO1xyXG4gICAgICpcclxuICAgICAqIC8vIEFkZGluZyBzbGlkZXMgZHluYW1pY2FsbHlcclxuICAgICAqIGxldCBnYWxsZXJ5SXRlbXMgPSBbXHJcbiAgICAgKiAvLyBBY2Nlc3MgZXhpc3RpbmcgbGlnaHRHYWxsZXJ5IGl0ZW1zXHJcbiAgICAgKiAvLyBnYWxsZXJ5SXRlbXMgYXJlIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGludGVybmFsbHkgZnJvbSB0aGUgZ2FsbGVyeSBIVE1MIG1hcmt1cFxyXG4gICAgICogLy8gb3IgZGlyZWN0bHkgZnJvbSBnYWxsZXJ5SXRlbXMgd2hlbiBkeW5hbWljIGdhbGxlcnkgaXMgdXNlZFxyXG4gICAgICogICAuLi5wbHVnaW4uZ2FsbGVyeUl0ZW1zLFxyXG4gICAgICogICAgIC4uLltcclxuICAgICAqICAgICAgIHtcclxuICAgICAqICAgICAgICAgc3JjOiAnaW1nL2ltZy0xLnBuZycsXHJcbiAgICAgKiAgICAgICAgICAgdGh1bWI6ICdpbWcvdGh1bWIxLnBuZycsXHJcbiAgICAgKiAgICAgICAgIH0sXHJcbiAgICAgKiAgICAgXSxcclxuICAgICAqICAgXTtcclxuICAgICAqICAgcGx1Z2luLnVwZGF0ZVNsaWRlcyhcclxuICAgICAqICAgICBnYWxsZXJ5SXRlbXMsXHJcbiAgICAgKiAgICAgcGx1Z2luLmluZGV4LFxyXG4gICAgICogICApO1xyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiAvLyBSZW1vdmUgc2xpZGVzIGR5bmFtaWNhbGx5XHJcbiAgICAgKiBnYWxsZXJ5SXRlbXMgPSBKU09OLnBhcnNlKFxyXG4gICAgICogICBKU09OLnN0cmluZ2lmeSh1cGRhdGVTbGlkZUluc3RhbmNlLmdhbGxlcnlJdGVtcyksXHJcbiAgICAgKiApO1xyXG4gICAgICogZ2FsbGVyeUl0ZW1zLnNoaWZ0KCk7XHJcbiAgICAgKiB1cGRhdGVTbGlkZUluc3RhbmNlLnVwZGF0ZVNsaWRlcyhnYWxsZXJ5SXRlbXMsIDEpO1xyXG4gICAgICogQHNlZSA8YSBocmVmPVwiL2RlbW9zL3VwZGF0ZS1zbGlkZXMvXCI+RGVtbzwvYT5cclxuICAgICAqL1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS51cGRhdGVTbGlkZXMgPSBmdW5jdGlvbiAoaXRlbXMsIGluZGV4KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5kZXggPiBpdGVtcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXggPSBpdGVtcy5sZW5ndGggLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlR2FsbGVyeSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjdXJyZW50U3JjID0gdGhpcy5nYWxsZXJ5SXRlbXNbaW5kZXhdLnNyYztcclxuICAgICAgICB0aGlzLmdhbGxlcnlJdGVtcyA9IGl0ZW1zO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ29udHJvbHMoKTtcclxuICAgICAgICB0aGlzLiRpbm5lci5lbXB0eSgpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEl0ZW1zSW5Eb20gPSBbXTtcclxuICAgICAgICB2YXIgX2luZGV4ID0gMDtcclxuICAgICAgICAvLyBGaW5kIHRoZSBjdXJyZW50IGluZGV4IGJhc2VkIG9uIHNvdXJjZSB2YWx1ZSBvZiB0aGUgc2xpZGVcclxuICAgICAgICB0aGlzLmdhbGxlcnlJdGVtcy5zb21lKGZ1bmN0aW9uIChnYWxsZXJ5SXRlbSwgaXRlbUluZGV4KSB7XHJcbiAgICAgICAgICAgIGlmIChnYWxsZXJ5SXRlbS5zcmMgPT09IGN1cnJlbnRTcmMpIHtcclxuICAgICAgICAgICAgICAgIF9pbmRleCA9IGl0ZW1JbmRleDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJdGVtc0luRG9tID0gdGhpcy5vcmdhbml6ZVNsaWRlSXRlbXMoX2luZGV4LCAtMSk7XHJcbiAgICAgICAgdGhpcy5sb2FkQ29udGVudChfaW5kZXgsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuZ2V0U2xpZGVJdGVtKF9pbmRleCkuYWRkQ2xhc3MoJ2xnLWN1cnJlbnQnKTtcclxuICAgICAgICB0aGlzLmluZGV4ID0gX2luZGV4O1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ3VycmVudENvdW50ZXIoX2luZGV4KTtcclxuICAgICAgICB0aGlzLkxHZWwudHJpZ2dlcihsR0V2ZW50cy51cGRhdGVTbGlkZXMpO1xyXG4gICAgfTtcclxuICAgIC8vIEdldCBnYWxsZXJ5IGl0ZW1zIGJhc2VkIG9uIG11bHRpcGxlIGNvbmRpdGlvbnNcclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUuZ2V0SXRlbXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gR2FsbGVyeSBpdGVtc1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MuZHluYW1pYykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5zZWxlY3RvciA9PT0gJ3RoaXMnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2godGhpcy5lbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zZXR0aW5ncy5zZWxlY3Rvcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnNldHRpbmdzLnNlbGVjdG9yID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLnNlbGVjdFdpdGhpbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0V2l0aGluID0gJExHKHRoaXMuc2V0dGluZ3Muc2VsZWN0V2l0aGluKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IHNlbGVjdFdpdGhpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQodGhpcy5zZXR0aW5ncy5zZWxlY3RvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zZXR0aW5ncy5zZWxlY3Rvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuc2V0dGluZ3Muc2VsZWN0b3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5lbC5jaGlsZHJlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdXRpbHMuZ2V0RHluYW1pY09wdGlvbnModGhpcy5pdGVtcywgdGhpcy5zZXR0aW5ncy5leHRyYVByb3BzLCB0aGlzLnNldHRpbmdzLmdldENhcHRpb25Gcm9tVGl0bGVPckFsdCwgdGhpcy5zZXR0aW5ncy5leFRodW1iSW1hZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MuZHluYW1pY0VsIHx8IFtdO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIE9wZW4gbGlnaHRHYWxsZXJ5LlxyXG4gICAgICogT3BlbiBnYWxsZXJ5IHdpdGggc3BlY2lmaWMgc2xpZGUgYnkgcGFzc2luZyBpbmRleCBvZiB0aGUgc2xpZGUgYXMgcGFyYW1ldGVyLlxyXG4gICAgICogQGNhdGVnb3J5IGxHUHVibGljTWV0aG9kc1xyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4ICAtIGluZGV4IG9mIHRoZSBzbGlkZVxyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIFdoaWNoIGltYWdlIGxpZ2h0R2FsbGVyeSBzaG91bGQgem9vbSBmcm9tXHJcbiAgICAgKlxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIGNvbnN0ICRkeW5hbWljR2FsbGVyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkeW5hbWljLWdhbGxlcnktZGVtbycpO1xyXG4gICAgICogY29uc3QgZHluYW1pY0dhbGxlcnkgPSBsaWdodEdhbGxlcnkoJGR5bmFtaWNHYWxsZXJ5LCB7XHJcbiAgICAgKiAgICAgZHluYW1pYzogdHJ1ZSxcclxuICAgICAqICAgICBkeW5hbWljRWw6IFtcclxuICAgICAqICAgICAgICAge1xyXG4gICAgICogICAgICAgICAgICAgIHNyYzogJ2ltZy8xLmpwZycsXHJcbiAgICAgKiAgICAgICAgICAgICAgdGh1bWI6ICdpbWcvdGh1bWItMS5qcGcnLFxyXG4gICAgICogICAgICAgICAgICAgIHN1Ykh0bWw6ICc8aDQ+SW1hZ2UgMSB0aXRsZTwvaDQ+PHA+SW1hZ2UgMSBkZXNjcmlwdGlvbnMuPC9wPicsXHJcbiAgICAgKiAgICAgICAgIH0sXHJcbiAgICAgKiAgICAgICAgIC4uLlxyXG4gICAgICogICAgIF0sXHJcbiAgICAgKiB9KTtcclxuICAgICAqICRkeW5hbWljR2FsbGVyeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAqICAgICAvLyBTdGFydHMgd2l0aCB0aGlyZCBpdGVtLihPcHRpb25hbCkuXHJcbiAgICAgKiAgICAgLy8gVGhpcyBpcyB1c2VmdWwgaWYgeW91IHdhbnQgdXNlIGR5bmFtaWMgbW9kZSB3aXRoXHJcbiAgICAgKiAgICAgLy8gY3VzdG9tIHRodW1ibmFpbHMgKHRodW1ibmFpbHMgb3V0c2lkZSBnYWxsZXJ5KSxcclxuICAgICAqICAgICBkeW5hbWljR2FsbGVyeS5vcGVuR2FsbGVyeSgyKTtcclxuICAgICAqIH0pO1xyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5vcGVuR2FsbGVyeSA9IGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKGluZGV4ID09PSB2b2lkIDApIHsgaW5kZXggPSB0aGlzLnNldHRpbmdzLmluZGV4OyB9XHJcbiAgICAgICAgLy8gcHJldmVudCBhY2NpZGVudGFsIGRvdWJsZSBleGVjdXRpb25cclxuICAgICAgICBpZiAodGhpcy5sZ09wZW5lZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMubGdPcGVuZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub3V0ZXIuZ2V0KCkuZm9jdXMoKTtcclxuICAgICAgICB0aGlzLm91dGVyLnJlbW92ZUNsYXNzKCdsZy1oaWRlLWl0ZW1zJyk7XHJcbiAgICAgICAgLy8gQWRkIGRpc3BsYXkgYmxvY2ssIGJ1dCBzdGlsbCBoYXMgb3BhY2l0eSAwXHJcbiAgICAgICAgdGhpcy4kY29udGFpbmVyLmFkZENsYXNzKCdsZy1zaG93Jyk7XHJcbiAgICAgICAgdmFyIGl0ZW1zVG9CZUluc2VydGVkVG9Eb20gPSB0aGlzLmdldEl0ZW1zVG9CZUluc2VydGVkVG9Eb20oaW5kZXgsIGluZGV4KTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJdGVtc0luRG9tID0gaXRlbXNUb0JlSW5zZXJ0ZWRUb0RvbTtcclxuICAgICAgICB2YXIgaXRlbXMgPSAnJztcclxuICAgICAgICBpdGVtc1RvQmVJbnNlcnRlZFRvRG9tLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgaXRlbXMgPSBpdGVtcyArIChcIjxkaXYgaWQ9XFxcIlwiICsgaXRlbSArIFwiXFxcIiBjbGFzcz1cXFwibGctaXRlbVxcXCI+PC9kaXY+XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuJGlubmVyLmFwcGVuZChpdGVtcyk7XHJcbiAgICAgICAgdGhpcy5hZGRIdG1sKGluZGV4KTtcclxuICAgICAgICB2YXIgdHJhbnNmb3JtID0gJyc7XHJcbiAgICAgICAgdGhpcy5tZWRpYUNvbnRhaW5lclBvc2l0aW9uID0gdGhpcy5nZXRNZWRpYUNvbnRhaW5lclBvc2l0aW9uKCk7XHJcbiAgICAgICAgdmFyIF9hID0gdGhpcy5tZWRpYUNvbnRhaW5lclBvc2l0aW9uLCB0b3AgPSBfYS50b3AsIGJvdHRvbSA9IF9hLmJvdHRvbTtcclxuICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MuYWxsb3dNZWRpYU92ZXJsYXApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRNZWRpYUNvbnRhaW5lclBvc2l0aW9uKHRvcCwgYm90dG9tKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIF9fc2xpZGVWaWRlb0luZm8gPSB0aGlzLmdhbGxlcnlJdGVtc1tpbmRleF0uX19zbGlkZVZpZGVvSW5mbztcclxuICAgICAgICBpZiAodGhpcy56b29tRnJvbU9yaWdpbiAmJiBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEltYWdlU2l6ZSA9IHV0aWxzLmdldFNpemUoZWxlbWVudCwgdGhpcy5vdXRlciwgdG9wICsgYm90dG9tLCBfX3NsaWRlVmlkZW9JbmZvICYmIHRoaXMuc2V0dGluZ3MudmlkZW9NYXhTaXplKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtID0gdXRpbHMuZ2V0VHJhbnNmb3JtKGVsZW1lbnQsIHRoaXMub3V0ZXIsIHRvcCwgYm90dG9tLCB0aGlzLmN1cnJlbnRJbWFnZVNpemUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuem9vbUZyb21PcmlnaW4gfHwgIXRyYW5zZm9ybSkge1xyXG4gICAgICAgICAgICB0aGlzLm91dGVyLmFkZENsYXNzKHRoaXMuc2V0dGluZ3Muc3RhcnRDbGFzcyk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0U2xpZGVJdGVtKGluZGV4KS5yZW1vdmVDbGFzcygnbGctY29tcGxldGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHRpbWVvdXQgPSB0aGlzLnNldHRpbmdzLnpvb21Gcm9tT3JpZ2luXHJcbiAgICAgICAgICAgID8gMTAwXHJcbiAgICAgICAgICAgIDogdGhpcy5zZXR0aW5ncy5iYWNrZHJvcER1cmF0aW9uO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5vdXRlci5hZGRDbGFzcygnbGctY29tcG9uZW50cy1vcGVuJyk7XHJcbiAgICAgICAgfSwgdGltZW91dCk7XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuTEdlbC50cmlnZ2VyKGxHRXZlbnRzLmJlZm9yZU9wZW4pO1xyXG4gICAgICAgIC8vIGFkZCBjbGFzcyBsZy1jdXJyZW50IHRvIHJlbW92ZSBpbml0aWFsIHRyYW5zaXRpb25cclxuICAgICAgICB0aGlzLmdldFNsaWRlSXRlbShpbmRleCkuYWRkQ2xhc3MoJ2xnLWN1cnJlbnQnKTtcclxuICAgICAgICB0aGlzLmxHYWxsZXJ5T24gPSBmYWxzZTtcclxuICAgICAgICAvLyBTdG9yZSB0aGUgY3VycmVudCBzY3JvbGwgdG9wIHZhbHVlIHRvIHNjcm9sbCBiYWNrIGFmdGVyIGNsb3NpbmcgdGhlIGdhbGxlcnkuLlxyXG4gICAgICAgIHRoaXMucHJldlNjcm9sbFRvcCA9ICRMRyh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBOZWVkIHRvIGNoZWNrIGJvdGggem9vbUZyb21PcmlnaW4gYW5kIHRyYW5zZm9ybSB2YWx1ZXMgYXMgd2UgbmVlZCB0byBzZXQgc2V0IHRoZVxyXG4gICAgICAgICAgICAvLyBkZWZhdWx0IG9wZW5pbmcgYW5pbWF0aW9uIGlmIHVzZXIgbWlzc2VkIHRvIGFkZCB0aGUgbGctc2l6ZSBhdHRyaWJ1dGVcclxuICAgICAgICAgICAgaWYgKF90aGlzLnpvb21Gcm9tT3JpZ2luICYmIHRyYW5zZm9ybSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRTbGlkZV8xID0gX3RoaXMuZ2V0U2xpZGVJdGVtKGluZGV4KTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZV8xLmNzcygndHJhbnNmb3JtJywgdHJhbnNmb3JtKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZV8xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnbGctc3RhcnQtcHJvZ3Jlc3MgbGctc3RhcnQtZW5kLXByb2dyZXNzJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNzcygndHJhbnNpdGlvbi1kdXJhdGlvbicsIF90aGlzLnNldHRpbmdzLnN0YXJ0QW5pbWF0aW9uRHVyYXRpb24gKyAnbXMnKTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5vdXRlci5hZGRDbGFzcygnbGctem9vbS1mcm9tLWltYWdlJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZV8xLmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJyk7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuJGJhY2tkcm9wLmFkZENsYXNzKCdpbicpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuJGNvbnRhaW5lci5hZGRDbGFzcygnbGctc2hvdy1pbicpO1xyXG4gICAgICAgICAgICB9LCAxMCk7XHJcbiAgICAgICAgICAgIC8vIGxnLXZpc2libGUgY2xhc3MgcmVzZXRzIGdhbGxlcnkgb3BhY2l0eSB0byAxXHJcbiAgICAgICAgICAgIGlmICghX3RoaXMuem9vbUZyb21PcmlnaW4gfHwgIXRyYW5zZm9ybSkge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMub3V0ZXIuYWRkQ2xhc3MoJ2xnLXZpc2libGUnKTtcclxuICAgICAgICAgICAgICAgIH0sIF90aGlzLnNldHRpbmdzLmJhY2tkcm9wRHVyYXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGluaXRpYXRlIHNsaWRlIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgIF90aGlzLnNsaWRlKGluZGV4LCBmYWxzZSwgZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICAgICAgX3RoaXMuTEdlbC50cmlnZ2VyKGxHRXZlbnRzLmFmdGVyT3Blbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmJvZHkgPT09IHRoaXMuc2V0dGluZ3MuY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICRMRygnaHRtbCcpLmFkZENsYXNzKCdsZy1vbicpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIE5vdGUgLSBDaGFuZ2luZyB0aGUgcG9zaXRpb24gb2YgdGhlIG1lZGlhIG9uIGV2ZXJ5IHNsaWRlIHRyYW5zaXRpb24gY3JlYXRlcyBhIGZsaWNrZXJpbmcgZWZmZWN0LlxyXG4gICAgICogVGhlcmVmb3JlLMKgVGhlIGhlaWdodCBvZiB0aGUgY2FwdGlvbiBpcyBjYWxjdWxhdGVkIGR5bmFtaWNhbGx5LCBvbmx5IG9uY2UgYmFzZWQgb24gdGhlIGZpcnN0IHNsaWRlIGNhcHRpb24uXHJcbiAgICAgKiBpZiB5b3UgaGF2ZSBkeW5hbWljIGNhcHRpb25zIGZvciBlYWNoIG1lZGlhLFxyXG4gICAgICogeW91IGNhbiBwcm92aWRlIGFuIGFwcHJvcHJpYXRlIGhlaWdodCBmb3IgdGhlIGNhcHRpb25zIHZpYSBhbGxvd01lZGlhT3ZlcmxhcCBvcHRpb25cclxuICAgICAqL1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5nZXRNZWRpYUNvbnRhaW5lclBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmFsbG93TWVkaWFPdmVybGFwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB0b3AgPSB0aGlzLiR0b29sYmFyLmdldCgpLmNsaWVudEhlaWdodCB8fCAwO1xyXG4gICAgICAgIHZhciBzdWJIdG1sID0gdGhpcy5vdXRlci5maW5kKCcubGctY29tcG9uZW50cyAubGctc3ViLWh0bWwnKS5nZXQoKTtcclxuICAgICAgICB2YXIgY2FwdGlvbkhlaWdodCA9IHRoaXMuc2V0dGluZ3MuZGVmYXVsdENhcHRpb25IZWlnaHQgfHxcclxuICAgICAgICAgICAgKHN1Ykh0bWwgJiYgc3ViSHRtbC5jbGllbnRIZWlnaHQpIHx8XHJcbiAgICAgICAgICAgIDA7XHJcbiAgICAgICAgdmFyIHRodW1iQ29udGFpbmVyID0gdGhpcy5vdXRlci5maW5kKCcubGctdGh1bWItb3V0ZXInKS5nZXQoKTtcclxuICAgICAgICB2YXIgdGh1bWJIZWlnaHQgPSB0aHVtYkNvbnRhaW5lciA/IHRodW1iQ29udGFpbmVyLmNsaWVudEhlaWdodCA6IDA7XHJcbiAgICAgICAgdmFyIGJvdHRvbSA9IHRodW1iSGVpZ2h0ICsgY2FwdGlvbkhlaWdodDtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0b3A6IHRvcCxcclxuICAgICAgICAgICAgYm90dG9tOiBib3R0b20sXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLnNldE1lZGlhQ29udGFpbmVyUG9zaXRpb24gPSBmdW5jdGlvbiAodG9wLCBib3R0b20pIHtcclxuICAgICAgICBpZiAodG9wID09PSB2b2lkIDApIHsgdG9wID0gMDsgfVxyXG4gICAgICAgIGlmIChib3R0b20gPT09IHZvaWQgMCkgeyBib3R0b20gPSAwOyB9XHJcbiAgICAgICAgdGhpcy4kY29udGVudC5jc3MoJ3RvcCcsIHRvcCArICdweCcpLmNzcygnYm90dG9tJywgYm90dG9tICsgJ3B4Jyk7XHJcbiAgICB9O1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5oaWRlQmFycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIC8vIEhpZGUgY29udHJvbGxlcnMgaWYgbW91c2UgZG9lc24ndCBtb3ZlIGZvciBzb21lIHBlcmlvZFxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5vdXRlci5yZW1vdmVDbGFzcygnbGctaGlkZS1pdGVtcycpO1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuc2V0dGluZ3MuaGlkZUJhcnNEZWxheSA+IDApIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLm91dGVyLm9uKCdtb3VzZW1vdmUubGcgY2xpY2subGcgdG91Y2hzdGFydC5sZycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5vdXRlci5yZW1vdmVDbGFzcygnbGctaGlkZS1pdGVtcycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5oaWRlQmFyVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGltZW91dCB3aWxsIGJlIGNsZWFyZWQgb24gZWFjaCBzbGlkZSBtb3ZlbWVudCBhbHNvXHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuaGlkZUJhclRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMub3V0ZXIuYWRkQ2xhc3MoJ2xnLWhpZGUtaXRlbXMnKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBfdGhpcy5zZXR0aW5ncy5oaWRlQmFyc0RlbGF5KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMub3V0ZXIudHJpZ2dlcignbW91c2Vtb3ZlLmxnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB0aGlzLnNldHRpbmdzLnNob3dCYXJzQWZ0ZXIpO1xyXG4gICAgfTtcclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUuaW5pdFBpY3R1cmVGaWxsID0gZnVuY3Rpb24gKCRpbWcpIHtcclxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5zdXBwb3J0TGVnYWN5QnJvd3Nlcikge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcGljdHVyZWZpbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzOiBbJGltZy5nZXQoKV0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdsaWdodEdhbGxlcnkgOi0gSWYgeW91IHdhbnQgc3Jjc2V0IG9yIHBpY3R1cmUgdGFnIHRvIGJlIHN1cHBvcnRlZCBmb3Igb2xkZXIgYnJvd3NlciBwbGVhc2UgaW5jbHVkZSBwaWN0dXJlZmlsIGphdmFzY3JpcHQgbGlicmFyeSBpbiB5b3VyIGRvY3VtZW50LicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogIEBkZXNjIENyZWF0ZSBpbWFnZSBjb3VudGVyXHJcbiAgICAgKiAgRXg6IDEvMTBcclxuICAgICAqL1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5jb3VudGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmNvdW50ZXIpIHtcclxuICAgICAgICAgICAgdmFyIGNvdW50ZXJIdG1sID0gXCI8ZGl2IGNsYXNzPVxcXCJsZy1jb3VudGVyXFxcIiByb2xlPVxcXCJzdGF0dXNcXFwiIGFyaWEtbGl2ZT1cXFwicG9saXRlXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9XFxcIlwiICsgdGhpcy5nZXRJZE5hbWUoJ2xnLWNvdW50ZXItY3VycmVudCcpICsgXCJcXFwiIGNsYXNzPVxcXCJsZy1jb3VudGVyLWN1cnJlbnRcXFwiPlwiICsgKHRoaXMuaW5kZXggKyAxKSArIFwiIDwvc3Bhbj4gL1xcbiAgICAgICAgICAgICAgICA8c3BhbiBpZD1cXFwiXCIgKyB0aGlzLmdldElkTmFtZSgnbGctY291bnRlci1hbGwnKSArIFwiXFxcIiBjbGFzcz1cXFwibGctY291bnRlci1hbGxcXFwiPlwiICsgdGhpcy5nYWxsZXJ5SXRlbXMubGVuZ3RoICsgXCIgPC9zcGFuPjwvZGl2PlwiO1xyXG4gICAgICAgICAgICB0aGlzLm91dGVyLmZpbmQodGhpcy5zZXR0aW5ncy5hcHBlbmRDb3VudGVyVG8pLmFwcGVuZChjb3VudGVySHRtbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogIEBkZXNjIGFkZCBzdWItaHRtbCBpbnRvIHRoZSBzbGlkZVxyXG4gICAgICogIEBwYXJhbSB7TnVtYmVyfSBpbmRleCAtIGluZGV4IG9mIHRoZSBzbGlkZVxyXG4gICAgICovXHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLmFkZEh0bWwgPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICB2YXIgc3ViSHRtbDtcclxuICAgICAgICB2YXIgc3ViSHRtbFVybDtcclxuICAgICAgICBpZiAodGhpcy5nYWxsZXJ5SXRlbXNbaW5kZXhdLnN1Ykh0bWxVcmwpIHtcclxuICAgICAgICAgICAgc3ViSHRtbFVybCA9IHRoaXMuZ2FsbGVyeUl0ZW1zW2luZGV4XS5zdWJIdG1sVXJsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc3ViSHRtbCA9IHRoaXMuZ2FsbGVyeUl0ZW1zW2luZGV4XS5zdWJIdG1sO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXN1Ykh0bWxVcmwpIHtcclxuICAgICAgICAgICAgaWYgKHN1Ykh0bWwpIHtcclxuICAgICAgICAgICAgICAgIC8vIGdldCBmaXJzdCBsZXR0ZXIgb2Ygc3ViLWh0bWxcclxuICAgICAgICAgICAgICAgIC8vIGlmIGZpcnN0IGxldHRlciBzdGFydHMgd2l0aCAuIG9yICMgZ2V0IHRoZSBodG1sIGZvcm0gdGhlIGpRdWVyeSBvYmplY3RcclxuICAgICAgICAgICAgICAgIHZhciBmTCA9IHN1Ykh0bWwuc3Vic3RyaW5nKDAsIDEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZMID09PSAnLicgfHwgZkwgPT09ICcjJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLnN1Ykh0bWxTZWxlY3RvclJlbGF0aXZlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnNldHRpbmdzLmR5bmFtaWMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViSHRtbCA9ICRMRyh0aGlzLml0ZW1zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVxKGluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoc3ViSHRtbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maXJzdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaHRtbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViSHRtbCA9ICRMRyhzdWJIdG1sKS5maXJzdCgpLmh0bWwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzdWJIdG1sID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuYXBwZW5kU3ViSHRtbFRvICE9PSAnLmxnLWl0ZW0nKSB7XHJcbiAgICAgICAgICAgIGlmIChzdWJIdG1sVXJsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm91dGVyLmZpbmQoJy5sZy1zdWItaHRtbCcpLmxvYWQoc3ViSHRtbFVybCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm91dGVyLmZpbmQoJy5sZy1zdWItaHRtbCcpLmh0bWwoc3ViSHRtbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50U2xpZGUgPSAkTEcodGhpcy5nZXRTbGlkZUl0ZW1JZChpbmRleCkpO1xyXG4gICAgICAgICAgICBpZiAoc3ViSHRtbFVybCkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlLmxvYWQoc3ViSHRtbFVybCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGUuYXBwZW5kKFwiPGRpdiBjbGFzcz1cXFwibGctc3ViLWh0bWxcXFwiPlwiICsgc3ViSHRtbCArIFwiPC9kaXY+XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFkZCBsZy1lbXB0eS1odG1sIGNsYXNzIGlmIHRpdGxlIGRvZXNuJ3QgZXhpc3RcclxuICAgICAgICBpZiAodHlwZW9mIHN1Ykh0bWwgIT09ICd1bmRlZmluZWQnICYmIHN1Ykh0bWwgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKHN1Ykh0bWwgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm91dGVyXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbmQodGhpcy5zZXR0aW5ncy5hcHBlbmRTdWJIdG1sVG8pXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdsZy1lbXB0eS1odG1sJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm91dGVyXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbmQodGhpcy5zZXR0aW5ncy5hcHBlbmRTdWJIdG1sVG8pXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdsZy1lbXB0eS1odG1sJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5MR2VsLnRyaWdnZXIobEdFdmVudHMuYWZ0ZXJBcHBlbmRTdWJIdG1sLCB7XHJcbiAgICAgICAgICAgIGluZGV4OiBpbmRleCxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqICBAZGVzYyBQcmVsb2FkIHNsaWRlc1xyXG4gICAgICogIEBwYXJhbSB7TnVtYmVyfSBpbmRleCAtIGluZGV4IG9mIHRoZSBzbGlkZVxyXG4gICAgICogQHRvZG8gcHJlbG9hZCBub3Qgd29ya2luZyBmb3IgdGhlIGZpcnN0IHNsaWRlLCBBbHNvLCBzaG91bGQgd29yayBmb3IgdGhlIGZpcnN0IGFuZCBsYXN0IHNsaWRlIGFzIHdlbGxcclxuICAgICAqL1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5wcmVsb2FkID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gdGhpcy5zZXR0aW5ncy5wcmVsb2FkOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgPj0gdGhpcy5nYWxsZXJ5SXRlbXMubGVuZ3RoIC0gaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubG9hZENvbnRlbnQoaW5kZXggKyBpLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGogPSAxOyBqIDw9IHRoaXMuc2V0dGluZ3MucHJlbG9hZDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCAtIGogPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxvYWRDb250ZW50KGluZGV4IC0gaiwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLmdldER1bW15SW1nU3R5bGVzID0gZnVuY3Rpb24gKGltYWdlU2l6ZSkge1xyXG4gICAgICAgIGlmICghaW1hZ2VTaXplKVxyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgcmV0dXJuIFwid2lkdGg6XCIgKyBpbWFnZVNpemUud2lkdGggKyBcInB4O1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLVwiICsgaW1hZ2VTaXplLndpZHRoIC8gMiArIFwicHg7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC1cIiArIGltYWdlU2l6ZS5oZWlnaHQgLyAyICsgXCJweDtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OlwiICsgaW1hZ2VTaXplLmhlaWdodCArIFwicHhcIjtcclxuICAgIH07XHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLmdldFZpZGVvQ29udFN0eWxlID0gZnVuY3Rpb24gKGltYWdlU2l6ZSkge1xyXG4gICAgICAgIGlmICghaW1hZ2VTaXplKVxyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgcmV0dXJuIFwid2lkdGg6XCIgKyBpbWFnZVNpemUud2lkdGggKyBcInB4O1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6XCIgKyBpbWFnZVNpemUuaGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgfTtcclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUuZ2V0RHVtbXlJbWFnZUNvbnRlbnQgPSBmdW5jdGlvbiAoJGN1cnJlbnRTbGlkZSwgaW5kZXgsIGFsdCkge1xyXG4gICAgICAgIHZhciAkY3VycmVudEl0ZW07XHJcbiAgICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLmR5bmFtaWMpIHtcclxuICAgICAgICAgICAgJGN1cnJlbnRJdGVtID0gJExHKHRoaXMuaXRlbXMpLmVxKGluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCRjdXJyZW50SXRlbSkge1xyXG4gICAgICAgICAgICB2YXIgX2R1bW15SW1nU3JjID0gdm9pZCAwO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MuZXhUaHVtYkltYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBfZHVtbXlJbWdTcmMgPSAkY3VycmVudEl0ZW0uZmluZCgnaW1nJykuZmlyc3QoKS5hdHRyKCdzcmMnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIF9kdW1teUltZ1NyYyA9ICRjdXJyZW50SXRlbS5hdHRyKHRoaXMuc2V0dGluZ3MuZXhUaHVtYkltYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIV9kdW1teUltZ1NyYylcclxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgdmFyIGltZ1N0eWxlID0gdGhpcy5nZXREdW1teUltZ1N0eWxlcyh0aGlzLmN1cnJlbnRJbWFnZVNpemUpO1xyXG4gICAgICAgICAgICB2YXIgZHVtbXlJbWdDb250ZW50ID0gXCI8aW1nIFwiICsgYWx0ICsgXCIgc3R5bGU9XFxcIlwiICsgaW1nU3R5bGUgKyBcIlxcXCIgY2xhc3M9XFxcImxnLWR1bW15LWltZ1xcXCIgc3JjPVxcXCJcIiArIF9kdW1teUltZ1NyYyArIFwiXFxcIiAvPlwiO1xyXG4gICAgICAgICAgICAkY3VycmVudFNsaWRlLmFkZENsYXNzKCdsZy1maXJzdC1zbGlkZScpO1xyXG4gICAgICAgICAgICB0aGlzLm91dGVyLmFkZENsYXNzKCdsZy1maXJzdC1zbGlkZS1sb2FkaW5nJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBkdW1teUltZ0NvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH07XHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLnNldEltZ01hcmt1cCA9IGZ1bmN0aW9uIChzcmMsICRjdXJyZW50U2xpZGUsIGluZGV4KSB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRHYWxsZXJ5SXRlbSA9IHRoaXMuZ2FsbGVyeUl0ZW1zW2luZGV4XTtcclxuICAgICAgICB2YXIgYWx0ID0gY3VycmVudEdhbGxlcnlJdGVtLmFsdCwgc3Jjc2V0ID0gY3VycmVudEdhbGxlcnlJdGVtLnNyY3NldCwgc2l6ZXMgPSBjdXJyZW50R2FsbGVyeUl0ZW0uc2l6ZXMsIHNvdXJjZXMgPSBjdXJyZW50R2FsbGVyeUl0ZW0uc291cmNlcztcclxuICAgICAgICAvLyBVc2UgdGhlIHRodW1ibmFpbCBhcyBkdW1teSBpbWFnZSB3aGljaCB3aWxsIGJlIHJlc2l6ZWQgdG8gYWN0dWFsIGltYWdlIHNpemUgYW5kXHJcbiAgICAgICAgLy8gZGlzcGxheWVkIG9uIHRvcCBvZiBhY3R1YWwgaW1hZ2VcclxuICAgICAgICB2YXIgaW1nQ29udGVudCA9ICcnO1xyXG4gICAgICAgIHZhciBhbHRBdHRyID0gYWx0ID8gJ2FsdD1cIicgKyBhbHQgKyAnXCInIDogJyc7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNGaXJzdFNsaWRlV2l0aFpvb21BbmltYXRpb24oKSkge1xyXG4gICAgICAgICAgICBpbWdDb250ZW50ID0gdGhpcy5nZXREdW1teUltYWdlQ29udGVudCgkY3VycmVudFNsaWRlLCBpbmRleCwgYWx0QXR0cik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpbWdDb250ZW50ID0gdXRpbHMuZ2V0SW1nTWFya3VwKGluZGV4LCBzcmMsIGFsdEF0dHIsIHNyY3NldCwgc2l6ZXMsIHNvdXJjZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaW1nTWFya3VwID0gXCI8cGljdHVyZSBjbGFzcz1cXFwibGctaW1nLXdyYXBcXFwiPiBcIiArIGltZ0NvbnRlbnQgKyBcIjwvcGljdHVyZT5cIjtcclxuICAgICAgICAkY3VycmVudFNsaWRlLnByZXBlbmQoaW1nTWFya3VwKTtcclxuICAgIH07XHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLm9uU2xpZGVPYmplY3RMb2FkID0gZnVuY3Rpb24gKCRzbGlkZSwgaXNIVE1MNVZpZGVvV2l0aG91dFBvc3Rlciwgb25Mb2FkLCBvbkVycm9yKSB7XHJcbiAgICAgICAgdmFyIG1lZGlhT2JqZWN0ID0gJHNsaWRlLmZpbmQoJy5sZy1vYmplY3QnKS5maXJzdCgpO1xyXG4gICAgICAgIGlmICh1dGlscy5pc0ltYWdlTG9hZGVkKG1lZGlhT2JqZWN0LmdldCgpKSB8fFxyXG4gICAgICAgICAgICBpc0hUTUw1VmlkZW9XaXRob3V0UG9zdGVyKSB7XHJcbiAgICAgICAgICAgIG9uTG9hZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbWVkaWFPYmplY3Qub24oJ2xvYWQubGcgZXJyb3IubGcnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBvbkxvYWQgJiYgb25Mb2FkKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBtZWRpYU9iamVjdC5vbignZXJyb3IubGcnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBvbkVycm9yICYmIG9uRXJyb3IoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAkZWwgQ3VycmVudCBzbGlkZSBpdGVtXHJcbiAgICAgKiBAcGFyYW0gaW5kZXhcclxuICAgICAqIEBwYXJhbSBkZWxheSBEZWxheSBpcyAwIGV4Y2VwdCBmaXJzdCB0aW1lXHJcbiAgICAgKiBAcGFyYW0gc3BlZWQgU3BlZWQgaXMgc2FtZSBhcyBkZWxheSwgZXhjZXB0IGl0IGlzIDAgaWYgZ2FsbGVyeSBpcyBvcGVuZWQgdmlhIGhhc2ggcGx1Z2luXHJcbiAgICAgKiBAcGFyYW0gaXNGaXJzdFNsaWRlXHJcbiAgICAgKi9cclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUub25MZ09iamVjdExvYWQgPSBmdW5jdGlvbiAoY3VycmVudFNsaWRlLCBpbmRleCwgZGVsYXksIHNwZWVkLCBpc0ZpcnN0U2xpZGUsIGlzSFRNTDVWaWRlb1dpdGhvdXRQb3N0ZXIpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMub25TbGlkZU9iamVjdExvYWQoY3VycmVudFNsaWRlLCBpc0hUTUw1VmlkZW9XaXRob3V0UG9zdGVyLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnRyaWdnZXJTbGlkZUl0ZW1Mb2FkKGN1cnJlbnRTbGlkZSwgaW5kZXgsIGRlbGF5LCBzcGVlZCwgaXNGaXJzdFNsaWRlKTtcclxuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZS5hZGRDbGFzcygnbGctY29tcGxldGUgbGctY29tcGxldGVfJyk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZS5odG1sKCc8c3BhbiBjbGFzcz1cImxnLWVycm9yLW1zZ1wiPk9vcHMuLi4gRmFpbGVkIHRvIGxvYWQgY29udGVudC4uLjwvc3Bhbj4nKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLnRyaWdnZXJTbGlkZUl0ZW1Mb2FkID0gZnVuY3Rpb24gKCRjdXJyZW50U2xpZGUsIGluZGV4LCBkZWxheSwgc3BlZWQsIGlzRmlyc3RTbGlkZSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRHYWxsZXJ5SXRlbSA9IHRoaXMuZ2FsbGVyeUl0ZW1zW2luZGV4XTtcclxuICAgICAgICAvLyBBZGRpbmcgZGVsYXkgZm9yIHZpZGVvIHNsaWRlcyB3aXRob3V0IHBvc3RlciBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlIGFuZCB1c2VyIGV4cGVyaWVuY2VcclxuICAgICAgICAvLyBWaWRlb3Mgc2hvdWxkIHN0YXJ0IHBsYXlpbmcgb25jZSBvbmNlIHRoZSBnYWxsZXJ5IGlzIGNvbXBsZXRlbHkgbG9hZGVkXHJcbiAgICAgICAgdmFyIF9zcGVlZCA9IGlzRmlyc3RTbGlkZSAmJlxyXG4gICAgICAgICAgICB0aGlzLmdldFNsaWRlVHlwZShjdXJyZW50R2FsbGVyeUl0ZW0pID09PSAndmlkZW8nICYmXHJcbiAgICAgICAgICAgICFjdXJyZW50R2FsbGVyeUl0ZW0ucG9zdGVyXHJcbiAgICAgICAgICAgID8gc3BlZWRcclxuICAgICAgICAgICAgOiAwO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkY3VycmVudFNsaWRlLmFkZENsYXNzKCdsZy1jb21wbGV0ZSBsZy1jb21wbGV0ZV8nKTtcclxuICAgICAgICAgICAgX3RoaXMuTEdlbC50cmlnZ2VyKGxHRXZlbnRzLnNsaWRlSXRlbUxvYWQsIHtcclxuICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcclxuICAgICAgICAgICAgICAgIGRlbGF5OiBkZWxheSB8fCAwLFxyXG4gICAgICAgICAgICAgICAgaXNGaXJzdFNsaWRlOiBpc0ZpcnN0U2xpZGUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIF9zcGVlZCk7XHJcbiAgICB9O1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5pc0ZpcnN0U2xpZGVXaXRoWm9vbUFuaW1hdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gISEoIXRoaXMubEdhbGxlcnlPbiAmJlxyXG4gICAgICAgICAgICB0aGlzLnpvb21Gcm9tT3JpZ2luICYmXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEltYWdlU2l6ZSk7XHJcbiAgICB9O1xyXG4gICAgLy8gQWRkIHZpZGVvIHNsaWRlSW5mb1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5hZGRTbGlkZVZpZGVvSW5mbyA9IGZ1bmN0aW9uIChpdGVtcykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5fX3NsaWRlVmlkZW9JbmZvID0gdXRpbHMuaXNWaWRlbyhlbGVtZW50LnNyYywgISFlbGVtZW50LnZpZGVvLCBpbmRleCk7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50Ll9fc2xpZGVWaWRlb0luZm8gJiZcclxuICAgICAgICAgICAgICAgIF90aGlzLnNldHRpbmdzLmxvYWRZb3VUdWJlUG9zdGVyICYmXHJcbiAgICAgICAgICAgICAgICAhZWxlbWVudC5wb3N0ZXIgJiZcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuX19zbGlkZVZpZGVvSW5mby55b3V0dWJlKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnBvc3RlciA9IFwiLy9pbWcueW91dHViZS5jb20vdmkvXCIgKyBlbGVtZW50Ll9fc2xpZGVWaWRlb0luZm8ueW91dHViZVsxXSArIFwiL21heHJlc2RlZmF1bHQuanBnXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqICBMb2FkIHNsaWRlIGNvbnRlbnQgaW50byBzbGlkZS5cclxuICAgICAqICBUaGlzIGlzIHVzZWQgdG8gbG9hZCBjb250ZW50IGludG8gc2xpZGVzIHRoYXQgaXMgbm90IHZpc2libGUgdG9vXHJcbiAgICAgKiAgQHBhcmFtIHtOdW1iZXJ9IGluZGV4IC0gaW5kZXggb2YgdGhlIHNsaWRlLlxyXG4gICAgICogIEBwYXJhbSB7Qm9vbGVhbn0gcmVjIC0gaWYgdHJ1ZSBjYWxsIGxvYWRjb250ZW50KCkgZnVuY3Rpb24gYWdhaW4uXHJcbiAgICAgKi9cclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUubG9hZENvbnRlbnQgPSBmdW5jdGlvbiAoaW5kZXgsIHJlYykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRHYWxsZXJ5SXRlbSA9IHRoaXMuZ2FsbGVyeUl0ZW1zW2luZGV4XTtcclxuICAgICAgICB2YXIgJGN1cnJlbnRTbGlkZSA9ICRMRyh0aGlzLmdldFNsaWRlSXRlbUlkKGluZGV4KSk7XHJcbiAgICAgICAgdmFyIHBvc3RlciA9IGN1cnJlbnRHYWxsZXJ5SXRlbS5wb3N0ZXIsIHNyY3NldCA9IGN1cnJlbnRHYWxsZXJ5SXRlbS5zcmNzZXQsIHNpemVzID0gY3VycmVudEdhbGxlcnlJdGVtLnNpemVzLCBzb3VyY2VzID0gY3VycmVudEdhbGxlcnlJdGVtLnNvdXJjZXM7XHJcbiAgICAgICAgdmFyIHNyYyA9IGN1cnJlbnRHYWxsZXJ5SXRlbS5zcmM7XHJcbiAgICAgICAgdmFyIHZpZGVvID0gY3VycmVudEdhbGxlcnlJdGVtLnZpZGVvO1xyXG4gICAgICAgIHZhciBfaHRtbDVWaWRlbyA9IHZpZGVvICYmIHR5cGVvZiB2aWRlbyA9PT0gJ3N0cmluZycgPyBKU09OLnBhcnNlKHZpZGVvKSA6IHZpZGVvO1xyXG4gICAgICAgIGlmIChjdXJyZW50R2FsbGVyeUl0ZW0ucmVzcG9uc2l2ZSkge1xyXG4gICAgICAgICAgICB2YXIgc3JjRHlJdG1zID0gY3VycmVudEdhbGxlcnlJdGVtLnJlc3BvbnNpdmUuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgc3JjID0gdXRpbHMuZ2V0UmVzcG9uc2l2ZVNyYyhzcmNEeUl0bXMpIHx8IHNyYztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHZpZGVvSW5mbyA9IGN1cnJlbnRHYWxsZXJ5SXRlbS5fX3NsaWRlVmlkZW9JbmZvO1xyXG4gICAgICAgIHZhciBsZ1ZpZGVvU3R5bGUgPSAnJztcclxuICAgICAgICB2YXIgaWZyYW1lID0gISFjdXJyZW50R2FsbGVyeUl0ZW0uaWZyYW1lO1xyXG4gICAgICAgIHZhciBpc0ZpcnN0U2xpZGUgPSAhdGhpcy5sR2FsbGVyeU9uO1xyXG4gICAgICAgIC8vIGRlbGF5IGZvciBhZGRpbmcgY29tcGxldGUgY2xhc3MuIGl0IGlzIDAgZXhjZXB0IGZpcnN0IHRpbWUuXHJcbiAgICAgICAgdmFyIGRlbGF5ID0gMDtcclxuICAgICAgICBpZiAoaXNGaXJzdFNsaWRlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnpvb21Gcm9tT3JpZ2luICYmIHRoaXMuY3VycmVudEltYWdlU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgZGVsYXkgPSB0aGlzLnNldHRpbmdzLnN0YXJ0QW5pbWF0aW9uRHVyYXRpb24gKyAxMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRlbGF5ID0gdGhpcy5zZXR0aW5ncy5iYWNrZHJvcER1cmF0aW9uICsgMTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCEkY3VycmVudFNsaWRlLmhhc0NsYXNzKCdsZy1sb2FkZWQnKSkge1xyXG4gICAgICAgICAgICBpZiAodmlkZW9JbmZvKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2EgPSB0aGlzLm1lZGlhQ29udGFpbmVyUG9zaXRpb24sIHRvcF8yID0gX2EudG9wLCBib3R0b20gPSBfYS5ib3R0b207XHJcbiAgICAgICAgICAgICAgICB2YXIgdmlkZW9TaXplID0gdXRpbHMuZ2V0U2l6ZSh0aGlzLml0ZW1zW2luZGV4XSwgdGhpcy5vdXRlciwgdG9wXzIgKyBib3R0b20sIHZpZGVvSW5mbyAmJiB0aGlzLnNldHRpbmdzLnZpZGVvTWF4U2l6ZSk7XHJcbiAgICAgICAgICAgICAgICBsZ1ZpZGVvU3R5bGUgPSB0aGlzLmdldFZpZGVvQ29udFN0eWxlKHZpZGVvU2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlmcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hcmt1cCA9IHV0aWxzLmdldElmcmFtZU1hcmt1cCh0aGlzLnNldHRpbmdzLmlmcmFtZVdpZHRoLCB0aGlzLnNldHRpbmdzLmlmcmFtZUhlaWdodCwgdGhpcy5zZXR0aW5ncy5pZnJhbWVNYXhXaWR0aCwgdGhpcy5zZXR0aW5ncy5pZnJhbWVNYXhIZWlnaHQsIHNyYywgY3VycmVudEdhbGxlcnlJdGVtLmlmcmFtZVRpdGxlKTtcclxuICAgICAgICAgICAgICAgICRjdXJyZW50U2xpZGUucHJlcGVuZChtYXJrdXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHBvc3Rlcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGR1bW15SW1nID0gJyc7XHJcbiAgICAgICAgICAgICAgICB2YXIgaGFzU3RhcnRBbmltYXRpb24gPSBpc0ZpcnN0U2xpZGUgJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnpvb21Gcm9tT3JpZ2luICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2VTaXplO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhc1N0YXJ0QW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHVtbXlJbWcgPSB0aGlzLmdldER1bW15SW1hZ2VDb250ZW50KCRjdXJyZW50U2xpZGUsIGluZGV4LCAnJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgbWFya3VwID0gdXRpbHMuZ2V0VmlkZW9Qb3N0ZXJNYXJrdXAocG9zdGVyLCBkdW1teUltZyB8fCAnJywgbGdWaWRlb1N0eWxlLCB0aGlzLnNldHRpbmdzLnN0cmluZ3NbJ3BsYXlWaWRlbyddLCB2aWRlb0luZm8pO1xyXG4gICAgICAgICAgICAgICAgJGN1cnJlbnRTbGlkZS5wcmVwZW5kKG1hcmt1cCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodmlkZW9JbmZvKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWFya3VwID0gXCI8ZGl2IGNsYXNzPVxcXCJsZy12aWRlby1jb250IFxcXCIgc3R5bGU9XFxcIlwiICsgbGdWaWRlb1N0eWxlICsgXCJcXFwiPjwvZGl2PlwiO1xyXG4gICAgICAgICAgICAgICAgJGN1cnJlbnRTbGlkZS5wcmVwZW5kKG1hcmt1cCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEltZ01hcmt1cChzcmMsICRjdXJyZW50U2xpZGUsIGluZGV4KTtcclxuICAgICAgICAgICAgICAgIGlmIChzcmNzZXQgfHwgc291cmNlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciAkaW1nID0gJGN1cnJlbnRTbGlkZS5maW5kKCcubGctb2JqZWN0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0UGljdHVyZUZpbGwoJGltZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBvc3RlciB8fCB2aWRlb0luZm8pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuTEdlbC50cmlnZ2VyKGxHRXZlbnRzLmhhc1ZpZGVvLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIHNyYzogc3JjLFxyXG4gICAgICAgICAgICAgICAgICAgIGh0bWw1VmlkZW86IF9odG1sNVZpZGVvLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhc1Bvc3RlcjogISFwb3N0ZXIsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLkxHZWwudHJpZ2dlcihsR0V2ZW50cy5hZnRlckFwcGVuZFNsaWRlLCB7IGluZGV4OiBpbmRleCB9KTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubEdhbGxlcnlPbiAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5hcHBlbmRTdWJIdG1sVG8gPT09ICcubGctaXRlbScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkSHRtbChpbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRm9yIGZpcnN0IHRpbWUgYWRkIHNvbWUgZGVsYXkgZm9yIGRpc3BsYXlpbmcgdGhlIHN0YXJ0IGFuaW1hdGlvbi5cclxuICAgICAgICB2YXIgX3NwZWVkID0gMDtcclxuICAgICAgICAvLyBEbyBub3QgY2hhbmdlIHRoZSBkZWxheSB2YWx1ZSBiZWNhdXNlIGl0IGlzIHJlcXVpcmVkIGZvciB6b29tIHBsdWdpbi5cclxuICAgICAgICAvLyBJZiBnYWxsZXJ5IG9wZW5lZCBmcm9tIGRpcmVjdCB1cmwgKGhhc2gpIHNwZWVkIHZhbHVlIHNob3VsZCBiZSAwXHJcbiAgICAgICAgaWYgKGRlbGF5ICYmICEkTEcoZG9jdW1lbnQuYm9keSkuaGFzQ2xhc3MoJ2xnLWZyb20taGFzaCcpKSB7XHJcbiAgICAgICAgICAgIF9zcGVlZCA9IGRlbGF5O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBPbmx5IGZvciBmaXJzdCBzbGlkZSBhbmQgem9vbUZyb21PcmlnaW4gaXMgZW5hYmxlZFxyXG4gICAgICAgIGlmICh0aGlzLmlzRmlyc3RTbGlkZVdpdGhab29tQW5pbWF0aW9uKCkpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkY3VycmVudFNsaWRlXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdsZy1zdGFydC1lbmQtcHJvZ3Jlc3MgbGctc3RhcnQtcHJvZ3Jlc3MnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgICAgICAgICB9LCB0aGlzLnNldHRpbmdzLnN0YXJ0QW5pbWF0aW9uRHVyYXRpb24gKyAxMDApO1xyXG4gICAgICAgICAgICBpZiAoISRjdXJyZW50U2xpZGUuaGFzQ2xhc3MoJ2xnLWxvYWRlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuZ2V0U2xpZGVUeXBlKGN1cnJlbnRHYWxsZXJ5SXRlbSkgPT09ICdpbWFnZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGN1cnJlbnRTbGlkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoJy5sZy1pbWctd3JhcCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKHV0aWxzLmdldEltZ01hcmt1cChpbmRleCwgc3JjLCAnJywgc3Jjc2V0LCBzaXplcywgY3VycmVudEdhbGxlcnlJdGVtLnNvdXJjZXMpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNyY3NldCB8fCBzb3VyY2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGltZyA9ICRjdXJyZW50U2xpZGUuZmluZCgnLmxnLW9iamVjdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaW5pdFBpY3R1cmVGaWxsKCRpbWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5nZXRTbGlkZVR5cGUoY3VycmVudEdhbGxlcnlJdGVtKSA9PT0gJ2ltYWdlJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoX3RoaXMuZ2V0U2xpZGVUeXBlKGN1cnJlbnRHYWxsZXJ5SXRlbSkgPT09ICd2aWRlbycgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMub25MZ09iamVjdExvYWQoJGN1cnJlbnRTbGlkZSwgaW5kZXgsIGRlbGF5LCBfc3BlZWQsIHRydWUsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbG9hZCByZW1haW5pbmcgc2xpZGVzIG9uY2UgdGhlIHNsaWRlIGlzIGNvbXBsZXRlbHkgbG9hZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLm9uU2xpZGVPYmplY3RMb2FkKCRjdXJyZW50U2xpZGUsICEhKHZpZGVvSW5mbyAmJiB2aWRlb0luZm8uaHRtbDUgJiYgIXBvc3RlciksIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmxvYWRDb250ZW50T25GaXJzdFNsaWRlTG9hZChpbmRleCwgJGN1cnJlbnRTbGlkZSwgX3NwZWVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubG9hZENvbnRlbnRPbkZpcnN0U2xpZGVMb2FkKGluZGV4LCAkY3VycmVudFNsaWRlLCBfc3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCB0aGlzLnNldHRpbmdzLnN0YXJ0QW5pbWF0aW9uRHVyYXRpb24gKyAxMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFNMaWRlIGNvbnRlbnQgaGFzIGJlZW4gYWRkZWQgdG8gZG9tXHJcbiAgICAgICAgJGN1cnJlbnRTbGlkZS5hZGRDbGFzcygnbGctbG9hZGVkJyk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRmlyc3RTbGlkZVdpdGhab29tQW5pbWF0aW9uKCkgfHxcclxuICAgICAgICAgICAgKHRoaXMuZ2V0U2xpZGVUeXBlKGN1cnJlbnRHYWxsZXJ5SXRlbSkgPT09ICd2aWRlbycgJiYgIXBvc3RlcikpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkxnT2JqZWN0TG9hZCgkY3VycmVudFNsaWRlLCBpbmRleCwgZGVsYXksIF9zcGVlZCwgaXNGaXJzdFNsaWRlLCAhISh2aWRlb0luZm8gJiYgdmlkZW9JbmZvLmh0bWw1ICYmICFwb3N0ZXIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gV2hlbiBnYWxsZXJ5IGlzIG9wZW5lZCBvbmNlIGNvbnRlbnQgaXMgbG9hZGVkIChzZWNvbmQgdGltZSkgbmVlZCB0byBhZGQgbGctY29tcGxldGUgY2xhc3MgZm9yIGNzcyBzdHlsaW5nXHJcbiAgICAgICAgaWYgKCghdGhpcy56b29tRnJvbU9yaWdpbiB8fCAhdGhpcy5jdXJyZW50SW1hZ2VTaXplKSAmJlxyXG4gICAgICAgICAgICAkY3VycmVudFNsaWRlLmhhc0NsYXNzKCdsZy1jb21wbGV0ZV8nKSAmJlxyXG4gICAgICAgICAgICAhdGhpcy5sR2FsbGVyeU9uKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJGN1cnJlbnRTbGlkZS5hZGRDbGFzcygnbGctY29tcGxldGUnKTtcclxuICAgICAgICAgICAgfSwgdGhpcy5zZXR0aW5ncy5iYWNrZHJvcER1cmF0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ29udGVudCBsb2FkZWRcclxuICAgICAgICAvLyBOZWVkIHRvIHNldCBsR2FsbGVyeU9uIGJlZm9yZSBjYWxsaW5nIHByZWxvYWQgZnVuY3Rpb25cclxuICAgICAgICB0aGlzLmxHYWxsZXJ5T24gPSB0cnVlO1xyXG4gICAgICAgIGlmIChyZWMgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKCEkY3VycmVudFNsaWRlLmhhc0NsYXNzKCdsZy1jb21wbGV0ZV8nKSkge1xyXG4gICAgICAgICAgICAgICAgJGN1cnJlbnRTbGlkZVxyXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKCcubGctb2JqZWN0JylcclxuICAgICAgICAgICAgICAgICAgICAuZmlyc3QoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5vbignbG9hZC5sZyBlcnJvci5sZycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5wcmVsb2FkKGluZGV4KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVsb2FkKGluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjIFJlbW92ZSBkdW1teSBpbWFnZSBjb250ZW50IGFuZCBsb2FkIG5leHQgc2xpZGVzXHJcbiAgICAgKiBDYWxsZWQgb25seSBmb3IgdGhlIGZpcnN0IHRpbWUgaWYgem9vbUZyb21PcmlnaW4gYW5pbWF0aW9uIGlzIGVuYWJsZWRcclxuICAgICAqIEBwYXJhbSBpbmRleFxyXG4gICAgICogQHBhcmFtICRjdXJyZW50U2xpZGVcclxuICAgICAqIEBwYXJhbSBzcGVlZFxyXG4gICAgICovXHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLmxvYWRDb250ZW50T25GaXJzdFNsaWRlTG9hZCA9IGZ1bmN0aW9uIChpbmRleCwgJGN1cnJlbnRTbGlkZSwgc3BlZWQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkY3VycmVudFNsaWRlLmZpbmQoJy5sZy1kdW1teS1pbWcnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgJGN1cnJlbnRTbGlkZS5yZW1vdmVDbGFzcygnbGctZmlyc3Qtc2xpZGUnKTtcclxuICAgICAgICAgICAgX3RoaXMub3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLWZpcnN0LXNsaWRlLWxvYWRpbmcnKTtcclxuICAgICAgICAgICAgX3RoaXMuaXNEdW1teUltYWdlUmVtb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIF90aGlzLnByZWxvYWQoaW5kZXgpO1xyXG4gICAgICAgIH0sIHNwZWVkICsgMzAwKTtcclxuICAgIH07XHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLmdldEl0ZW1zVG9CZUluc2VydGVkVG9Eb20gPSBmdW5jdGlvbiAoaW5kZXgsIHByZXZJbmRleCwgbnVtYmVyT2ZJdGVtcykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKG51bWJlck9mSXRlbXMgPT09IHZvaWQgMCkgeyBudW1iZXJPZkl0ZW1zID0gMDsgfVxyXG4gICAgICAgIHZhciBpdGVtc1RvQmVJbnNlcnRlZFRvRG9tID0gW107XHJcbiAgICAgICAgLy8gTWluaW11bSAyIGl0ZW1zIHNob3VsZCBiZSB0aGVyZVxyXG4gICAgICAgIHZhciBwb3NzaWJsZU51bWJlck9mSXRlbXMgPSBNYXRoLm1heChudW1iZXJPZkl0ZW1zLCAzKTtcclxuICAgICAgICBwb3NzaWJsZU51bWJlck9mSXRlbXMgPSBNYXRoLm1pbihwb3NzaWJsZU51bWJlck9mSXRlbXMsIHRoaXMuZ2FsbGVyeUl0ZW1zLmxlbmd0aCk7XHJcbiAgICAgICAgdmFyIHByZXZJbmRleEl0ZW0gPSBcImxnLWl0ZW0tXCIgKyB0aGlzLmxnSWQgKyBcIi1cIiArIHByZXZJbmRleDtcclxuICAgICAgICBpZiAodGhpcy5nYWxsZXJ5SXRlbXMubGVuZ3RoIDw9IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5nYWxsZXJ5SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoX2VsZW1lbnQsIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtc1RvQmVJbnNlcnRlZFRvRG9tLnB1c2goXCJsZy1pdGVtLVwiICsgX3RoaXMubGdJZCArIFwiLVwiICsgaW5kZXgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zVG9CZUluc2VydGVkVG9Eb207XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbmRleCA8ICh0aGlzLmdhbGxlcnlJdGVtcy5sZW5ndGggLSAxKSAvIDIpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaWR4ID0gaW5kZXg7IGlkeCA+IGluZGV4IC0gcG9zc2libGVOdW1iZXJPZkl0ZW1zIC8gMiAmJiBpZHggPj0gMDsgaWR4LS0pIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zVG9CZUluc2VydGVkVG9Eb20ucHVzaChcImxnLWl0ZW0tXCIgKyB0aGlzLmxnSWQgKyBcIi1cIiArIGlkeCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIG51bWJlck9mRXhpc3RpbmdJdGVtcyA9IGl0ZW1zVG9CZUluc2VydGVkVG9Eb20ubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBwb3NzaWJsZU51bWJlck9mSXRlbXMgLSBudW1iZXJPZkV4aXN0aW5nSXRlbXM7IGlkeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtc1RvQmVJbnNlcnRlZFRvRG9tLnB1c2goXCJsZy1pdGVtLVwiICsgdGhpcy5sZ0lkICsgXCItXCIgKyAoaW5kZXggKyBpZHggKyAxKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGlkeCA9IGluZGV4OyBpZHggPD0gdGhpcy5nYWxsZXJ5SXRlbXMubGVuZ3RoIC0gMSAmJlxyXG4gICAgICAgICAgICAgICAgaWR4IDwgaW5kZXggKyBwb3NzaWJsZU51bWJlck9mSXRlbXMgLyAyOyBpZHgrKykge1xyXG4gICAgICAgICAgICAgICAgaXRlbXNUb0JlSW5zZXJ0ZWRUb0RvbS5wdXNoKFwibGctaXRlbS1cIiArIHRoaXMubGdJZCArIFwiLVwiICsgaWR4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgbnVtYmVyT2ZFeGlzdGluZ0l0ZW1zID0gaXRlbXNUb0JlSW5zZXJ0ZWRUb0RvbS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IHBvc3NpYmxlTnVtYmVyT2ZJdGVtcyAtIG51bWJlck9mRXhpc3RpbmdJdGVtczsgaWR4KyspIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zVG9CZUluc2VydGVkVG9Eb20ucHVzaChcImxnLWl0ZW0tXCIgKyB0aGlzLmxnSWQgKyBcIi1cIiArIChpbmRleCAtIGlkeCAtIDEpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5sb29wKSB7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gdGhpcy5nYWxsZXJ5SXRlbXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbXNUb0JlSW5zZXJ0ZWRUb0RvbS5wdXNoKFwibGctaXRlbS1cIiArIHRoaXMubGdJZCArIFwiLVwiICsgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zVG9CZUluc2VydGVkVG9Eb20ucHVzaChcImxnLWl0ZW0tXCIgKyB0aGlzLmxnSWQgKyBcIi1cIiArICh0aGlzLmdhbGxlcnlJdGVtcy5sZW5ndGggLSAxKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGl0ZW1zVG9CZUluc2VydGVkVG9Eb20uaW5kZXhPZihwcmV2SW5kZXhJdGVtKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgaXRlbXNUb0JlSW5zZXJ0ZWRUb0RvbS5wdXNoKFwibGctaXRlbS1cIiArIHRoaXMubGdJZCArIFwiLVwiICsgcHJldkluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zVG9CZUluc2VydGVkVG9Eb207XHJcbiAgICB9O1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5vcmdhbml6ZVNsaWRlSXRlbXMgPSBmdW5jdGlvbiAoaW5kZXgsIHByZXZJbmRleCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGl0ZW1zVG9CZUluc2VydGVkVG9Eb20gPSB0aGlzLmdldEl0ZW1zVG9CZUluc2VydGVkVG9Eb20oaW5kZXgsIHByZXZJbmRleCwgdGhpcy5zZXR0aW5ncy5udW1iZXJPZlNsaWRlSXRlbXNJbkRvbSk7XHJcbiAgICAgICAgaXRlbXNUb0JlSW5zZXJ0ZWRUb0RvbS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5jdXJyZW50SXRlbXNJbkRvbS5pbmRleE9mKGl0ZW0pID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuJGlubmVyLmFwcGVuZChcIjxkaXYgaWQ9XFxcIlwiICsgaXRlbSArIFwiXFxcIiBjbGFzcz1cXFwibGctaXRlbVxcXCI+PC9kaXY+XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SXRlbXNJbkRvbS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtc1RvQmVJbnNlcnRlZFRvRG9tLmluZGV4T2YoaXRlbSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAkTEcoXCIjXCIgKyBpdGVtKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBpdGVtc1RvQmVJbnNlcnRlZFRvRG9tO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogR2V0IHByZXZpb3VzIGluZGV4IG9mIHRoZSBzbGlkZVxyXG4gICAgICovXHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLmdldFByZXZpb3VzU2xpZGVJbmRleCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcHJldkluZGV4ID0gMDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudEl0ZW1JZCA9IHRoaXMub3V0ZXJcclxuICAgICAgICAgICAgICAgIC5maW5kKCcubGctY3VycmVudCcpXHJcbiAgICAgICAgICAgICAgICAuZmlyc3QoKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgICAgIHByZXZJbmRleCA9IHBhcnNlSW50KGN1cnJlbnRJdGVtSWQuc3BsaXQoJy0nKVszXSkgfHwgMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHByZXZJbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwcmV2SW5kZXg7XHJcbiAgICB9O1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5zZXREb3dubG9hZFZhbHVlID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuZG93bmxvYWQpIHtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRHYWxsZXJ5SXRlbSA9IHRoaXMuZ2FsbGVyeUl0ZW1zW2luZGV4XTtcclxuICAgICAgICAgICAgdmFyIGhpZGVEb3dubG9hZEJ0biA9IGN1cnJlbnRHYWxsZXJ5SXRlbS5kb3dubG9hZFVybCA9PT0gZmFsc2UgfHxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRHYWxsZXJ5SXRlbS5kb3dubG9hZFVybCA9PT0gJ2ZhbHNlJztcclxuICAgICAgICAgICAgaWYgKGhpZGVEb3dubG9hZEJ0bikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdXRlci5hZGRDbGFzcygnbGctaGlkZS1kb3dubG9hZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyICRkb3dubG9hZCA9IHRoaXMuZ2V0RWxlbWVudEJ5SWQoJ2xnLWRvd25sb2FkJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm91dGVyLnJlbW92ZUNsYXNzKCdsZy1oaWRlLWRvd25sb2FkJyk7XHJcbiAgICAgICAgICAgICAgICAkZG93bmxvYWQuYXR0cignaHJlZicsIGN1cnJlbnRHYWxsZXJ5SXRlbS5kb3dubG9hZFVybCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRHYWxsZXJ5SXRlbS5zcmMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRHYWxsZXJ5SXRlbS5kb3dubG9hZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRkb3dubG9hZC5hdHRyKCdkb3dubG9hZCcsIGN1cnJlbnRHYWxsZXJ5SXRlbS5kb3dubG9hZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5tYWtlU2xpZGVBbmltYXRpb24gPSBmdW5jdGlvbiAoZGlyZWN0aW9uLCBjdXJyZW50U2xpZGVJdGVtLCBwcmV2aW91c1NsaWRlSXRlbSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoaXMubEdhbGxlcnlPbikge1xyXG4gICAgICAgICAgICBwcmV2aW91c1NsaWRlSXRlbS5hZGRDbGFzcygnbGctc2xpZGUtcHJvZ3Jlc3MnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSBhbGwgdHJhbnNpdGlvbnNcclxuICAgICAgICAgICAgX3RoaXMub3V0ZXIuYWRkQ2xhc3MoJ2xnLW5vLXRyYW5zJyk7XHJcbiAgICAgICAgICAgIF90aGlzLm91dGVyXHJcbiAgICAgICAgICAgICAgICAuZmluZCgnLmxnLWl0ZW0nKVxyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdsZy1wcmV2LXNsaWRlIGxnLW5leHQtc2xpZGUnKTtcclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ByZXYnKSB7XHJcbiAgICAgICAgICAgICAgICAvL3ByZXZzbGlkZVxyXG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlSXRlbS5hZGRDbGFzcygnbGctcHJldi1zbGlkZScpO1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNTbGlkZUl0ZW0uYWRkQ2xhc3MoJ2xnLW5leHQtc2xpZGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIG5leHQgc2xpZGVcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZUl0ZW0uYWRkQ2xhc3MoJ2xnLW5leHQtc2xpZGUnKTtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzU2xpZGVJdGVtLmFkZENsYXNzKCdsZy1wcmV2LXNsaWRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gZ2l2ZSA1MCBtcyBmb3IgYnJvd3NlciB0byBhZGQvcmVtb3ZlIGNsYXNzXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMub3V0ZXIuZmluZCgnLmxnLWl0ZW0nKS5yZW1vdmVDbGFzcygnbGctY3VycmVudCcpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlSXRlbS5hZGRDbGFzcygnbGctY3VycmVudCcpO1xyXG4gICAgICAgICAgICAgICAgLy8gcmVzZXQgYWxsIHRyYW5zaXRpb25zXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5vdXRlci5yZW1vdmVDbGFzcygnbGctbm8tdHJhbnMnKTtcclxuICAgICAgICAgICAgfSwgNTApO1xyXG4gICAgICAgIH0sIHRoaXMubEdhbGxlcnlPbiA/IHRoaXMuc2V0dGluZ3Muc2xpZGVEZWxheSA6IDApO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogR290byBhIHNwZWNpZmljIHNsaWRlLlxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IC0gaW5kZXggb2YgdGhlIHNsaWRlXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGZyb21Ub3VjaCAtIHRydWUgaWYgc2xpZGUgZnVuY3Rpb24gY2FsbGVkIHZpYSB0b3VjaCBldmVudCBvciBtb3VzZSBkcmFnXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGZyb21UaHVtYiAtIHRydWUgaWYgc2xpZGUgZnVuY3Rpb24gY2FsbGVkIHZpYSB0aHVtYm5haWwgY2xpY2tcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkaXJlY3Rpb24gLSBEaXJlY3Rpb24gb2YgdGhlIHNsaWRlKG5leHQvcHJldilcclxuICAgICAqIEBjYXRlZ29yeSBsR1B1YmxpY01ldGhvZHNcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiAgY29uc3QgcGx1Z2luID0gbGlnaHRHYWxsZXJ5KCk7XHJcbiAgICAgKiAgLy8gdG8gZ28gdG8gM3JkIHNsaWRlXHJcbiAgICAgKiAgcGx1Z2luLnNsaWRlKDIpO1xyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5zbGlkZSA9IGZ1bmN0aW9uIChpbmRleCwgZnJvbVRvdWNoLCBmcm9tVGh1bWIsIGRpcmVjdGlvbikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHByZXZJbmRleCA9IHRoaXMuZ2V0UHJldmlvdXNTbGlkZUluZGV4KCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SXRlbXNJbkRvbSA9IHRoaXMub3JnYW5pemVTbGlkZUl0ZW1zKGluZGV4LCBwcmV2SW5kZXgpO1xyXG4gICAgICAgIC8vIFByZXZlbnQgbXVsdGlwbGUgY2FsbCwgUmVxdWlyZWQgZm9yIGhzaCBwbHVnaW5cclxuICAgICAgICBpZiAodGhpcy5sR2FsbGVyeU9uICYmIHByZXZJbmRleCA9PT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbnVtYmVyT2ZHYWxsZXJ5SXRlbXMgPSB0aGlzLmdhbGxlcnlJdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxnQnVzeSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5jb3VudGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnRDb3VudGVyKGluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgY3VycmVudFNsaWRlSXRlbSA9IHRoaXMuZ2V0U2xpZGVJdGVtKGluZGV4KTtcclxuICAgICAgICAgICAgdmFyIHByZXZpb3VzU2xpZGVJdGVtXzEgPSB0aGlzLmdldFNsaWRlSXRlbShwcmV2SW5kZXgpO1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudEdhbGxlcnlJdGVtID0gdGhpcy5nYWxsZXJ5SXRlbXNbaW5kZXhdO1xyXG4gICAgICAgICAgICB2YXIgdmlkZW9JbmZvID0gY3VycmVudEdhbGxlcnlJdGVtLl9fc2xpZGVWaWRlb0luZm87XHJcbiAgICAgICAgICAgIHRoaXMub3V0ZXIuYXR0cignZGF0YS1sZy1zbGlkZS10eXBlJywgdGhpcy5nZXRTbGlkZVR5cGUoY3VycmVudEdhbGxlcnlJdGVtKSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RG93bmxvYWRWYWx1ZShpbmRleCk7XHJcbiAgICAgICAgICAgIGlmICh2aWRlb0luZm8pIHtcclxuICAgICAgICAgICAgICAgIHZhciBfYSA9IHRoaXMubWVkaWFDb250YWluZXJQb3NpdGlvbiwgdG9wXzMgPSBfYS50b3AsIGJvdHRvbSA9IF9hLmJvdHRvbTtcclxuICAgICAgICAgICAgICAgIHZhciB2aWRlb1NpemUgPSB1dGlscy5nZXRTaXplKHRoaXMuaXRlbXNbaW5kZXhdLCB0aGlzLm91dGVyLCB0b3BfMyArIGJvdHRvbSwgdmlkZW9JbmZvICYmIHRoaXMuc2V0dGluZ3MudmlkZW9NYXhTaXplKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzaXplVmlkZW9TbGlkZShpbmRleCwgdmlkZW9TaXplKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLkxHZWwudHJpZ2dlcihsR0V2ZW50cy5iZWZvcmVTbGlkZSwge1xyXG4gICAgICAgICAgICAgICAgcHJldkluZGV4OiBwcmV2SW5kZXgsXHJcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXHJcbiAgICAgICAgICAgICAgICBmcm9tVG91Y2g6ICEhZnJvbVRvdWNoLFxyXG4gICAgICAgICAgICAgICAgZnJvbVRodW1iOiAhIWZyb21UaHVtYixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMubGdCdXN5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaGlkZUJhclRpbWVvdXQpO1xyXG4gICAgICAgICAgICB0aGlzLmFycm93RGlzYWJsZShpbmRleCk7XHJcbiAgICAgICAgICAgIGlmICghZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCBwcmV2SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSAncHJldic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpbmRleCA+IHByZXZJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9ICduZXh0JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWZyb21Ub3VjaCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWtlU2xpZGVBbmltYXRpb24oZGlyZWN0aW9uLCBjdXJyZW50U2xpZGVJdGVtLCBwcmV2aW91c1NsaWRlSXRlbV8xKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3V0ZXJcclxuICAgICAgICAgICAgICAgICAgICAuZmluZCgnLmxnLWl0ZW0nKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnbGctcHJldi1zbGlkZSBsZy1jdXJyZW50IGxnLW5leHQtc2xpZGUnKTtcclxuICAgICAgICAgICAgICAgIHZhciB0b3VjaFByZXYgPSB2b2lkIDA7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG91Y2hOZXh0ID0gdm9pZCAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bWJlck9mR2FsbGVyeUl0ZW1zID4gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdWNoUHJldiA9IGluZGV4IC0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0b3VjaE5leHQgPSBpbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwICYmIHByZXZJbmRleCA9PT0gbnVtYmVyT2ZHYWxsZXJ5SXRlbXMgLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5leHQgc2xpZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hOZXh0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hQcmV2ID0gbnVtYmVyT2ZHYWxsZXJ5SXRlbXMgLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpbmRleCA9PT0gbnVtYmVyT2ZHYWxsZXJ5SXRlbXMgLSAxICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZJbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwcmV2IHNsaWRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoTmV4dCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoUHJldiA9IG51bWJlck9mR2FsbGVyeUl0ZW1zIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3VjaFByZXYgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdWNoTmV4dCA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAncHJldicpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFNsaWRlSXRlbSh0b3VjaE5leHQpLmFkZENsYXNzKCdsZy1uZXh0LXNsaWRlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFNsaWRlSXRlbSh0b3VjaFByZXYpLmFkZENsYXNzKCdsZy1wcmV2LXNsaWRlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGVJdGVtLmFkZENsYXNzKCdsZy1jdXJyZW50Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gRG8gbm90IHB1dCBsb2FkIGNvbnRlbnQgaW4gc2V0IHRpbWVvdXQgYXMgaXQgbmVlZHMgdG8gbG9hZCBpbW1lZGlhdGVseSB3aGVuIHRoZSBnYWxsZXJ5IGlzIG9wZW5lZFxyXG4gICAgICAgICAgICBpZiAoIXRoaXMubEdhbGxlcnlPbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQ29udGVudChpbmRleCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5sb2FkQ29udGVudChpbmRleCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRpdGxlIGlmIHRoaXMuc2V0dGluZ3MuYXBwZW5kU3ViSHRtbFRvID09PSBsZy1zdWItaHRtbFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5zZXR0aW5ncy5hcHBlbmRTdWJIdG1sVG8gIT09ICcubGctaXRlbScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWRkSHRtbChpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgdGhpcy5zZXR0aW5ncy5zcGVlZCArIDUwICsgKGZyb21Ub3VjaCA/IDAgOiB0aGlzLnNldHRpbmdzLnNsaWRlRGVsYXkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmxnQnVzeSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNTbGlkZUl0ZW1fMS5yZW1vdmVDbGFzcygnbGctc2xpZGUtcHJvZ3Jlc3MnKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLkxHZWwudHJpZ2dlcihsR0V2ZW50cy5hZnRlclNsaWRlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldkluZGV4OiBwcmV2SW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIGZyb21Ub3VjaDogZnJvbVRvdWNoLFxyXG4gICAgICAgICAgICAgICAgICAgIGZyb21UaHVtYjogZnJvbVRodW1iLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sICh0aGlzLmxHYWxsZXJ5T24gPyB0aGlzLnNldHRpbmdzLnNwZWVkICsgMTAwIDogMTAwKSArIChmcm9tVG91Y2ggPyAwIDogdGhpcy5zZXR0aW5ncy5zbGlkZURlbGF5KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuICAgIH07XHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLnVwZGF0ZUN1cnJlbnRDb3VudGVyID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5nZXRFbGVtZW50QnlJZCgnbGctY291bnRlci1jdXJyZW50JykuaHRtbChpbmRleCArIDEgKyAnJyk7XHJcbiAgICB9O1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS51cGRhdGVDb3VudGVyVG90YWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRFbGVtZW50QnlJZCgnbGctY291bnRlci1hbGwnKS5odG1sKHRoaXMuZ2FsbGVyeUl0ZW1zLmxlbmd0aCArICcnKTtcclxuICAgIH07XHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLmdldFNsaWRlVHlwZSA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0uX19zbGlkZVZpZGVvSW5mbykge1xyXG4gICAgICAgICAgICByZXR1cm4gJ3ZpZGVvJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaXRlbS5pZnJhbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdpZnJhbWUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICdpbWFnZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUudG91Y2hNb3ZlID0gZnVuY3Rpb24gKHN0YXJ0Q29vcmRzLCBlbmRDb29yZHMsIGUpIHtcclxuICAgICAgICB2YXIgZGlzdGFuY2VYID0gZW5kQ29vcmRzLnBhZ2VYIC0gc3RhcnRDb29yZHMucGFnZVg7XHJcbiAgICAgICAgdmFyIGRpc3RhbmNlWSA9IGVuZENvb3Jkcy5wYWdlWSAtIHN0YXJ0Q29vcmRzLnBhZ2VZO1xyXG4gICAgICAgIHZhciBhbGxvd1N3aXBlID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuc3dpcGVEaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgYWxsb3dTd2lwZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoZGlzdGFuY2VYKSA+IDE1KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXBlRGlyZWN0aW9uID0gJ2hvcml6b250YWwnO1xyXG4gICAgICAgICAgICAgICAgYWxsb3dTd2lwZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoTWF0aC5hYnMoZGlzdGFuY2VZKSA+IDE1KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXBlRGlyZWN0aW9uID0gJ3ZlcnRpY2FsJztcclxuICAgICAgICAgICAgICAgIGFsbG93U3dpcGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYWxsb3dTd2lwZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciAkY3VycmVudFNsaWRlID0gdGhpcy5nZXRTbGlkZUl0ZW0odGhpcy5pbmRleCk7XHJcbiAgICAgICAgaWYgKHRoaXMuc3dpcGVEaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICBlID09PSBudWxsIHx8IGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgLy8gcmVzZXQgb3BhY2l0eSBhbmQgdHJhbnNpdGlvbiBkdXJhdGlvblxyXG4gICAgICAgICAgICB0aGlzLm91dGVyLmFkZENsYXNzKCdsZy1kcmFnZ2luZycpO1xyXG4gICAgICAgICAgICAvLyBtb3ZlIGN1cnJlbnQgc2xpZGVcclxuICAgICAgICAgICAgdGhpcy5zZXRUcmFuc2xhdGUoJGN1cnJlbnRTbGlkZSwgZGlzdGFuY2VYLCAwKTtcclxuICAgICAgICAgICAgLy8gbW92ZSBuZXh0IGFuZCBwcmV2IHNsaWRlIHdpdGggY3VycmVudCBzbGlkZVxyXG4gICAgICAgICAgICB2YXIgd2lkdGggPSAkY3VycmVudFNsaWRlLmdldCgpLm9mZnNldFdpZHRoO1xyXG4gICAgICAgICAgICB2YXIgc2xpZGVXaWR0aEFtb3VudCA9ICh3aWR0aCAqIDE1KSAvIDEwMDtcclxuICAgICAgICAgICAgdmFyIGd1dHRlciA9IHNsaWRlV2lkdGhBbW91bnQgLSBNYXRoLmFicygoZGlzdGFuY2VYICogMTApIC8gMTAwKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRUcmFuc2xhdGUodGhpcy5vdXRlci5maW5kKCcubGctcHJldi1zbGlkZScpLmZpcnN0KCksIC13aWR0aCArIGRpc3RhbmNlWCAtIGd1dHRlciwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VHJhbnNsYXRlKHRoaXMub3V0ZXIuZmluZCgnLmxnLW5leHQtc2xpZGUnKS5maXJzdCgpLCB3aWR0aCArIGRpc3RhbmNlWCArIGd1dHRlciwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3dpcGVEaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3Muc3dpcGVUb0Nsb3NlKSB7XHJcbiAgICAgICAgICAgICAgICBlID09PSBudWxsIHx8IGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGNvbnRhaW5lci5hZGRDbGFzcygnbGctZHJhZ2dpbmctdmVydGljYWwnKTtcclxuICAgICAgICAgICAgICAgIHZhciBvcGFjaXR5ID0gMSAtIE1hdGguYWJzKGRpc3RhbmNlWSkgLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRiYWNrZHJvcC5jc3MoJ29wYWNpdHknLCBvcGFjaXR5KTtcclxuICAgICAgICAgICAgICAgIHZhciBzY2FsZSA9IDEgLSBNYXRoLmFicyhkaXN0YW5jZVkpIC8gKHdpbmRvdy5pbm5lcldpZHRoICogMik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRyYW5zbGF0ZSgkY3VycmVudFNsaWRlLCAwLCBkaXN0YW5jZVksIHNjYWxlLCBzY2FsZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZGlzdGFuY2VZKSA+IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3V0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdsZy1oaWRlLWl0ZW1zJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdsZy1jb21wb25lbnRzLW9wZW4nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLnRvdWNoRW5kID0gZnVuY3Rpb24gKGVuZENvb3Jkcywgc3RhcnRDb29yZHMsIGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgZGlzdGFuY2U7XHJcbiAgICAgICAgLy8ga2VlcCBzbGlkZSBhbmltYXRpb24gZm9yIGFueSBtb2RlIHdoaWxlIGRyYWdnL3N3aXBlXHJcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MubW9kZSAhPT0gJ2xnLXNsaWRlJykge1xyXG4gICAgICAgICAgICB0aGlzLm91dGVyLmFkZENsYXNzKCdsZy1zbGlkZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzZXQgdHJhbnNpdGlvbiBkdXJhdGlvblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy4kY29udGFpbmVyLnJlbW92ZUNsYXNzKCdsZy1kcmFnZ2luZy12ZXJ0aWNhbCcpO1xyXG4gICAgICAgICAgICBfdGhpcy5vdXRlclxyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdsZy1kcmFnZ2luZyBsZy1oaWRlLWl0ZW1zJylcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnbGctY29tcG9uZW50cy1vcGVuJyk7XHJcbiAgICAgICAgICAgIHZhciB0cmlnZ2VyQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuc3dpcGVEaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBlbmRDb29yZHMucGFnZVggLSBzdGFydENvb3Jkcy5wYWdlWDtcclxuICAgICAgICAgICAgICAgIHZhciBkaXN0YW5jZUFicyA9IE1hdGguYWJzKGVuZENvb3Jkcy5wYWdlWCAtIHN0YXJ0Q29vcmRzLnBhZ2VYKTtcclxuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZUFicyA+IF90aGlzLnNldHRpbmdzLnN3aXBlVGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZ29Ub05leHRTbGlkZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRpc3RhbmNlID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlQWJzID4gX3RoaXMuc2V0dGluZ3Muc3dpcGVUaHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5nb1RvUHJldlNsaWRlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJDbGljayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKF90aGlzLnN3aXBlRGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IE1hdGguYWJzKGVuZENvb3Jkcy5wYWdlWSAtIHN0YXJ0Q29vcmRzLnBhZ2VZKTtcclxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5zZXR0aW5ncy5jbG9zYWJsZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNldHRpbmdzLnN3aXBlVG9DbG9zZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID4gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2xvc2VHYWxsZXJ5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuJGJhY2tkcm9wLmNzcygnb3BhY2l0eScsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLm91dGVyLmZpbmQoJy5sZy1pdGVtJykucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgICAgICAgICAgaWYgKHRyaWdnZXJDbGljayAmJlxyXG4gICAgICAgICAgICAgICAgTWF0aC5hYnMoZW5kQ29vcmRzLnBhZ2VYIC0gc3RhcnRDb29yZHMucGFnZVgpIDwgNSkge1xyXG4gICAgICAgICAgICAgICAgLy8gVHJpZ2dlciBjbGljayBpZiBkaXN0YW5jZSBpcyBsZXNzIHRoYW4gNSBwaXhcclxuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkTEcoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5pc1Bvc3RlckVsZW1lbnQodGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLkxHZWwudHJpZ2dlcihsR0V2ZW50cy5wb3N0ZXJDbGljayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMuc3dpcGVEaXJlY3Rpb24gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gcmVtb3ZlIHNsaWRlIGNsYXNzIG9uY2UgZHJhZy9zd2lwZSBpcyBjb21wbGV0ZWQgaWYgbW9kZSBpcyBub3Qgc2xpZGVcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCFfdGhpcy5vdXRlci5oYXNDbGFzcygnbGctZHJhZ2dpbmcnKSAmJlxyXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0dGluZ3MubW9kZSAhPT0gJ2xnLXNsaWRlJykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMub3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLXNsaWRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB0aGlzLnNldHRpbmdzLnNwZWVkICsgMTAwKTtcclxuICAgIH07XHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLmVuYWJsZVN3aXBlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHN0YXJ0Q29vcmRzID0ge307XHJcbiAgICAgICAgdmFyIGVuZENvb3JkcyA9IHt9O1xyXG4gICAgICAgIHZhciBpc01vdmVkID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGlzU3dpcGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmVuYWJsZVN3aXBlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGlubmVyLm9uKCd0b3VjaHN0YXJ0LmxnJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmRyYWdPclN3aXBlRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB2YXIgJGl0ZW0gPSBfdGhpcy5nZXRTbGlkZUl0ZW0oX3RoaXMuaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCgkTEcoZS50YXJnZXQpLmhhc0NsYXNzKCdsZy1pdGVtJykgfHxcclxuICAgICAgICAgICAgICAgICAgICAkaXRlbS5nZXQoKS5jb250YWlucyhlLnRhcmdldCkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIV90aGlzLm91dGVyLmhhc0NsYXNzKCdsZy16b29tZWQnKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICFfdGhpcy5sZ0J1c3kgJiZcclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldFRvdWNoZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNTd2lwaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy50b3VjaEFjdGlvbiA9ICdzd2lwZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubWFuYWdlU3dpcGVDbGFzcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0Q29vcmRzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlWDogZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlWTogZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZLFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLiRpbm5lci5vbigndG91Y2htb3ZlLmxnJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc1N3aXBpbmcgJiZcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy50b3VjaEFjdGlvbiA9PT0gJ3N3aXBlJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbmRDb29yZHMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VYOiBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VZOiBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVksXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy50b3VjaE1vdmUoc3RhcnRDb29yZHMsIGVuZENvb3JkcywgZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNNb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLiRpbm5lci5vbigndG91Y2hlbmQubGcnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy50b3VjaEFjdGlvbiA9PT0gJ3N3aXBlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc01vdmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTW92ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudG91Y2hFbmQoZW5kQ29vcmRzLCBzdGFydENvb3JkcywgZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpc1N3aXBpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9ICRMRyhldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuaXNQb3N0ZXJFbGVtZW50KHRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLkxHZWwudHJpZ2dlcihsR0V2ZW50cy5wb3N0ZXJDbGljayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudG91Y2hBY3Rpb24gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNTd2lwaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLmVuYWJsZURyYWcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgc3RhcnRDb29yZHMgPSB7fTtcclxuICAgICAgICB2YXIgZW5kQ29vcmRzID0ge307XHJcbiAgICAgICAgdmFyIGlzRHJhZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBpc01vdmVkID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuZW5hYmxlRHJhZykge1xyXG4gICAgICAgICAgICB0aGlzLm91dGVyLm9uKCdtb3VzZWRvd24ubGcnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuZHJhZ09yU3dpcGVFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHZhciAkaXRlbSA9IF90aGlzLmdldFNsaWRlSXRlbShfdGhpcy5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoJExHKGUudGFyZ2V0KS5oYXNDbGFzcygnbGctaXRlbScpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgJGl0ZW0uZ2V0KCkuY29udGFpbnMoZS50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5vdXRlci5oYXNDbGFzcygnbGctem9vbWVkJykgJiYgIV90aGlzLmxnQnVzeSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghX3RoaXMubGdCdXN5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5tYW5hZ2VTd2lwZUNsYXNzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydENvb3JkcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlWDogZS5wYWdlWCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlWTogZS5wYWdlWSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RyYWdpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKiogRml4IGZvciB3ZWJraXQgY3Vyc29yIGlzc3VlIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0yNjcyM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMub3V0ZXIuZ2V0KCkuc2Nyb2xsTGVmdCArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMub3V0ZXIuZ2V0KCkuc2Nyb2xsTGVmdCAtPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMub3V0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2xnLWdyYWInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnbGctZ3JhYmJpbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLkxHZWwudHJpZ2dlcihsR0V2ZW50cy5kcmFnU3RhcnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJExHKHdpbmRvdykub24oXCJtb3VzZW1vdmUubGcuZ2xvYmFsXCIgKyB0aGlzLmxnSWQsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNEcmFnaW5nICYmIF90aGlzLmxnT3BlbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNNb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kQ29vcmRzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlWDogZS5wYWdlWCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVk6IGUucGFnZVksXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy50b3VjaE1vdmUoc3RhcnRDb29yZHMsIGVuZENvb3Jkcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuTEdlbC50cmlnZ2VyKGxHRXZlbnRzLmRyYWdNb3ZlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICRMRyh3aW5kb3cpLm9uKFwibW91c2V1cC5sZy5nbG9iYWxcIiArIHRoaXMubGdJZCwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIV90aGlzLmxnT3BlbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9ICRMRyhldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzTW92ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc01vdmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudG91Y2hFbmQoZW5kQ29vcmRzLCBzdGFydENvb3JkcywgZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLkxHZWwudHJpZ2dlcihsR0V2ZW50cy5kcmFnRW5kKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKF90aGlzLmlzUG9zdGVyRWxlbWVudCh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuTEdlbC50cmlnZ2VyKGxHRXZlbnRzLnBvc3RlckNsaWNrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgZXhlY3V0aW9uIG9uIGNsaWNrXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNEcmFnaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNEcmFnaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMub3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLWdyYWJiaW5nJykuYWRkQ2xhc3MoJ2xnLWdyYWInKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUudHJpZ2dlclBvc3RlckNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy4kaW5uZXIub24oJ2NsaWNrLmxnJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmICghX3RoaXMuZHJhZ09yU3dpcGVFbmFibGVkICYmXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5pc1Bvc3RlckVsZW1lbnQoJExHKGV2ZW50LnRhcmdldCkpKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5MR2VsLnRyaWdnZXIobEdFdmVudHMucG9zdGVyQ2xpY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5tYW5hZ2VTd2lwZUNsYXNzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdG91Y2hOZXh0ID0gdGhpcy5pbmRleCArIDE7XHJcbiAgICAgICAgdmFyIF90b3VjaFByZXYgPSB0aGlzLmluZGV4IC0gMTtcclxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5sb29wICYmIHRoaXMuZ2FsbGVyeUl0ZW1zLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIF90b3VjaFByZXYgPSB0aGlzLmdhbGxlcnlJdGVtcy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaW5kZXggPT09IHRoaXMuZ2FsbGVyeUl0ZW1zLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIF90b3VjaE5leHQgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub3V0ZXIuZmluZCgnLmxnLWl0ZW0nKS5yZW1vdmVDbGFzcygnbGctbmV4dC1zbGlkZSBsZy1wcmV2LXNsaWRlJyk7XHJcbiAgICAgICAgaWYgKF90b3VjaFByZXYgPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLmdldFNsaWRlSXRlbShfdG91Y2hQcmV2KS5hZGRDbGFzcygnbGctcHJldi1zbGlkZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdldFNsaWRlSXRlbShfdG91Y2hOZXh0KS5hZGRDbGFzcygnbGctbmV4dC1zbGlkZScpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogR28gdG8gbmV4dCBzbGlkZVxyXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBmcm9tVG91Y2ggLSB0cnVlIGlmIHNsaWRlIGZ1bmN0aW9uIGNhbGxlZCB2aWEgdG91Y2ggZXZlbnRcclxuICAgICAqIEBjYXRlZ29yeSBsR1B1YmxpY01ldGhvZHNcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiAgY29uc3QgcGx1Z2luID0gbGlnaHRHYWxsZXJ5KCk7XHJcbiAgICAgKiAgcGx1Z2luLmdvVG9OZXh0U2xpZGUoKTtcclxuICAgICAqIEBzZWUgPGEgaHJlZj1cIi9kZW1vcy9tZXRob2RzL1wiPkRlbW88L2E+XHJcbiAgICAgKi9cclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUuZ29Ub05leHRTbGlkZSA9IGZ1bmN0aW9uIChmcm9tVG91Y2gpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBfbG9vcCA9IHRoaXMuc2V0dGluZ3MubG9vcDtcclxuICAgICAgICBpZiAoZnJvbVRvdWNoICYmIHRoaXMuZ2FsbGVyeUl0ZW1zLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICAgICAgX2xvb3AgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmxnQnVzeSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbmRleCArIDEgPCB0aGlzLmdhbGxlcnlJdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICAgICAgICAgIHRoaXMuTEdlbC50cmlnZ2VyKGxHRXZlbnRzLmJlZm9yZU5leHRTbGlkZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLmluZGV4LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlKHRoaXMuaW5kZXgsICEhZnJvbVRvdWNoLCBmYWxzZSwgJ25leHQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChfbG9vcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuTEdlbC50cmlnZ2VyKGxHRXZlbnRzLmJlZm9yZU5leHRTbGlkZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5pbmRleCxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNsaWRlKHRoaXMuaW5kZXgsICEhZnJvbVRvdWNoLCBmYWxzZSwgJ25leHQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc2V0dGluZ3Muc2xpZGVFbmRBbmltYXRpb24gJiYgIWZyb21Ub3VjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3V0ZXIuYWRkQ2xhc3MoJ2xnLXJpZ2h0LWVuZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5vdXRlci5yZW1vdmVDbGFzcygnbGctcmlnaHQtZW5kJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEdvIHRvIHByZXZpb3VzIHNsaWRlc1xyXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBmcm9tVG91Y2ggLSB0cnVlIGlmIHNsaWRlIGZ1bmN0aW9uIGNhbGxlZCB2aWEgdG91Y2ggZXZlbnRcclxuICAgICAqIEBjYXRlZ29yeSBsR1B1YmxpY01ldGhvZHNcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiAgY29uc3QgcGx1Z2luID0gbGlnaHRHYWxsZXJ5KHt9KTtcclxuICAgICAqICBwbHVnaW4uZ29Ub1ByZXZTbGlkZSgpO1xyXG4gICAgICogQHNlZSA8YSBocmVmPVwiL2RlbW9zL21ldGhvZHMvXCI+RGVtbzwvYT5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUuZ29Ub1ByZXZTbGlkZSA9IGZ1bmN0aW9uIChmcm9tVG91Y2gpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBfbG9vcCA9IHRoaXMuc2V0dGluZ3MubG9vcDtcclxuICAgICAgICBpZiAoZnJvbVRvdWNoICYmIHRoaXMuZ2FsbGVyeUl0ZW1zLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICAgICAgX2xvb3AgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmxnQnVzeSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbmRleCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgtLTtcclxuICAgICAgICAgICAgICAgIHRoaXMuTEdlbC50cmlnZ2VyKGxHRXZlbnRzLmJlZm9yZVByZXZTbGlkZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLmluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIGZyb21Ub3VjaDogZnJvbVRvdWNoLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlKHRoaXMuaW5kZXgsICEhZnJvbVRvdWNoLCBmYWxzZSwgJ3ByZXYnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChfbG9vcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggPSB0aGlzLmdhbGxlcnlJdGVtcy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuTEdlbC50cmlnZ2VyKGxHRXZlbnRzLmJlZm9yZVByZXZTbGlkZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5pbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbVRvdWNoOiBmcm9tVG91Y2gsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbGlkZSh0aGlzLmluZGV4LCAhIWZyb21Ub3VjaCwgZmFsc2UsICdwcmV2Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNldHRpbmdzLnNsaWRlRW5kQW5pbWF0aW9uICYmICFmcm9tVG91Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm91dGVyLmFkZENsYXNzKCdsZy1sZWZ0LWVuZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5vdXRlci5yZW1vdmVDbGFzcygnbGctbGVmdC1lbmQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCA0MDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUua2V5UHJlc3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAkTEcod2luZG93KS5vbihcImtleWRvd24ubGcuZ2xvYmFsXCIgKyB0aGlzLmxnSWQsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5sZ09wZW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0dGluZ3MuZXNjS2V5ID09PSB0cnVlICYmXHJcbiAgICAgICAgICAgICAgICBlLmtleUNvZGUgPT09IDI3KSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuc2V0dGluZ3MuYWxsb3dNZWRpYU92ZXJsYXAgJiZcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5vdXRlci5oYXNDbGFzcygnbGctY2FuLXRvZ2dsZScpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMub3V0ZXIuaGFzQ2xhc3MoJ2xnLWNvbXBvbmVudHMtb3BlbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMub3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLWNvbXBvbmVudHMtb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2xvc2VHYWxsZXJ5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKF90aGlzLmxnT3BlbmVkICYmIF90aGlzLmdhbGxlcnlJdGVtcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzNykge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5nb1RvUHJldlNsaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5nb1RvTmV4dFNsaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLmFycm93ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5nZXRFbGVtZW50QnlJZCgnbGctcHJldicpLm9uKCdjbGljay5sZycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuZ29Ub1ByZXZTbGlkZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZ2V0RWxlbWVudEJ5SWQoJ2xnLW5leHQnKS5vbignY2xpY2subGcnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmdvVG9OZXh0U2xpZGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLmFycm93RGlzYWJsZSA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgIC8vIERpc2FibGUgYXJyb3dzIGlmIHNldHRpbmdzLmhpZGVDb250cm9sT25FbmQgaXMgdHJ1ZVxyXG4gICAgICAgIGlmICghdGhpcy5zZXR0aW5ncy5sb29wICYmIHRoaXMuc2V0dGluZ3MuaGlkZUNvbnRyb2xPbkVuZCkge1xyXG4gICAgICAgICAgICB2YXIgJHByZXYgPSB0aGlzLmdldEVsZW1lbnRCeUlkKCdsZy1wcmV2Jyk7XHJcbiAgICAgICAgICAgIHZhciAkbmV4dCA9IHRoaXMuZ2V0RWxlbWVudEJ5SWQoJ2xnLW5leHQnKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ICsgMSA9PT0gdGhpcy5nYWxsZXJ5SXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAkbmV4dC5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJG5leHQucmVtb3ZlQXR0cignZGlzYWJsZWQnKS5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICRwcmV2LmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJykuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkcHJldi5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUuc2V0VHJhbnNsYXRlID0gZnVuY3Rpb24gKCRlbCwgeFZhbHVlLCB5VmFsdWUsIHNjYWxlWCwgc2NhbGVZKSB7XHJcbiAgICAgICAgaWYgKHNjYWxlWCA9PT0gdm9pZCAwKSB7IHNjYWxlWCA9IDE7IH1cclxuICAgICAgICBpZiAoc2NhbGVZID09PSB2b2lkIDApIHsgc2NhbGVZID0gMTsgfVxyXG4gICAgICAgICRlbC5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzZCgnICtcclxuICAgICAgICAgICAgeFZhbHVlICtcclxuICAgICAgICAgICAgJ3B4LCAnICtcclxuICAgICAgICAgICAgeVZhbHVlICtcclxuICAgICAgICAgICAgJ3B4LCAwcHgpIHNjYWxlM2QoJyArXHJcbiAgICAgICAgICAgIHNjYWxlWCArXHJcbiAgICAgICAgICAgICcsICcgK1xyXG4gICAgICAgICAgICBzY2FsZVkgK1xyXG4gICAgICAgICAgICAnLCAxKScpO1xyXG4gICAgfTtcclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUubW91c2V3aGVlbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBsYXN0Q2FsbCA9IDA7XHJcbiAgICAgICAgdGhpcy5vdXRlci5vbignd2hlZWwubGcnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoIWUuZGVsdGFZIHx8IF90aGlzLmdhbGxlcnlJdGVtcy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIGlmIChub3cgLSBsYXN0Q2FsbCA8IDEwMDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYXN0Q2FsbCA9IG5vdztcclxuICAgICAgICAgICAgaWYgKGUuZGVsdGFZID4gMCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuZ29Ub05leHRTbGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGUuZGVsdGFZIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuZ29Ub1ByZXZTbGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5pc1NsaWRlRWxlbWVudCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICByZXR1cm4gKHRhcmdldC5oYXNDbGFzcygnbGctb3V0ZXInKSB8fFxyXG4gICAgICAgICAgICB0YXJnZXQuaGFzQ2xhc3MoJ2xnLWl0ZW0nKSB8fFxyXG4gICAgICAgICAgICB0YXJnZXQuaGFzQ2xhc3MoJ2xnLWltZy13cmFwJykpO1xyXG4gICAgfTtcclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUuaXNQb3N0ZXJFbGVtZW50ID0gZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgIHZhciBwbGF5QnV0dG9uID0gdGhpcy5nZXRTbGlkZUl0ZW0odGhpcy5pbmRleClcclxuICAgICAgICAgICAgLmZpbmQoJy5sZy12aWRlby1wbGF5LWJ1dHRvbicpXHJcbiAgICAgICAgICAgIC5nZXQoKTtcclxuICAgICAgICByZXR1cm4gKHRhcmdldC5oYXNDbGFzcygnbGctdmlkZW8tcG9zdGVyJykgfHxcclxuICAgICAgICAgICAgdGFyZ2V0Lmhhc0NsYXNzKCdsZy12aWRlby1wbGF5LWJ1dHRvbicpIHx8XHJcbiAgICAgICAgICAgIChwbGF5QnV0dG9uICYmIHBsYXlCdXR0b24uY29udGFpbnModGFyZ2V0LmdldCgpKSkpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogTWF4aW1pemUgbWluaW1pemUgaW5saW5lIGdhbGxlcnkuXHJcbiAgICAgKiBAY2F0ZWdvcnkgbEdQdWJsaWNNZXRob2RzXHJcbiAgICAgKi9cclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUudG9nZ2xlTWF4aW1pemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmdldEVsZW1lbnRCeUlkKCdsZy1tYXhpbWl6ZScpLm9uKCdjbGljay5sZycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuJGNvbnRhaW5lci50b2dnbGVDbGFzcygnbGctaW5saW5lJyk7XHJcbiAgICAgICAgICAgIF90aGlzLnJlZnJlc2hPblJlc2l6ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUuaW52YWxpZGF0ZUl0ZW1zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLml0ZW1zLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuaXRlbXNbaW5kZXhdO1xyXG4gICAgICAgICAgICB2YXIgJGVsZW1lbnQgPSAkTEcoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICRlbGVtZW50Lm9mZihcImNsaWNrLmxnY3VzdG9tLWl0ZW0tXCIgKyAkZWxlbWVudC5hdHRyKCdkYXRhLWxnLWlkJykpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLm1hbmFnZUNsb3NlR2FsbGVyeSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICghdGhpcy5zZXR0aW5ncy5jbG9zYWJsZSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHZhciBtb3VzZWRvd24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmdldEVsZW1lbnRCeUlkKCdsZy1jbG9zZScpLm9uKCdjbGljay5sZycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuY2xvc2VHYWxsZXJ5KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuY2xvc2VPblRhcCkge1xyXG4gICAgICAgICAgICAvLyBJZiB5b3UgZHJhZyB0aGUgc2xpZGUgYW5kIHJlbGVhc2Ugb3V0c2lkZSBnYWxsZXJ5IGdldHMgY2xvc2Ugb24gY2hyb21lXHJcbiAgICAgICAgICAgIC8vIGZvciBwcmV2ZW50aW5nIHRoaXMgY2hlY2sgbW91c2Vkb3duIGFuZCBtb3VzZXVwIGhhcHBlbmVkIG9uIC5sZy1pdGVtIG9yIGxnLW91dGVyXHJcbiAgICAgICAgICAgIHRoaXMub3V0ZXIub24oJ21vdXNlZG93bi5sZycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gJExHKGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5pc1NsaWRlRWxlbWVudCh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW91c2Vkb3duID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdXNlZG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5vdXRlci5vbignbW91c2Vtb3ZlLmxnJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbW91c2Vkb3duID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLm91dGVyLm9uKCdtb3VzZXVwLmxnJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkTEcoZS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmlzU2xpZGVFbGVtZW50KHRhcmdldCkgJiYgbW91c2Vkb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5vdXRlci5oYXNDbGFzcygnbGctZHJhZ2dpbmcnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jbG9zZUdhbGxlcnkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENsb3NlIGxpZ2h0R2FsbGVyeSBpZiBpdCBpcyBvcGVuZWQuXHJcbiAgICAgKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIElmIGNsb3NhYmxlIGlzIGZhbHNlIGluIHRoZSBzZXR0aW5ncywgeW91IG5lZWQgdG8gcGFzcyB0cnVlIHZpYSBjbG9zZUdhbGxlcnkgbWV0aG9kIHRvIGZvcmNlIGNsb3NlIGdhbGxlcnlcclxuICAgICAqIEByZXR1cm4gcmV0dXJucyB0aGUgZXN0aW1hdGVkIHRpbWUgdG8gY2xvc2UgZ2FsbGVyeSBjb21wbGV0ZWx5IGluY2x1ZGluZyB0aGUgY2xvc2UgYW5pbWF0aW9uIGR1cmF0aW9uXHJcbiAgICAgKiBAY2F0ZWdvcnkgbEdQdWJsaWNNZXRob2RzXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogIGNvbnN0IHBsdWdpbiA9IGxpZ2h0R2FsbGVyeSgpO1xyXG4gICAgICogIHBsdWdpbi5jbG9zZUdhbGxlcnkoKTtcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUuY2xvc2VHYWxsZXJ5ID0gZnVuY3Rpb24gKGZvcmNlKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAoIXRoaXMubGdPcGVuZWQgfHwgKCF0aGlzLnNldHRpbmdzLmNsb3NhYmxlICYmICFmb3JjZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuTEdlbC50cmlnZ2VyKGxHRXZlbnRzLmJlZm9yZUNsb3NlKTtcclxuICAgICAgICAkTEcod2luZG93KS5zY3JvbGxUb3AodGhpcy5wcmV2U2Nyb2xsVG9wKTtcclxuICAgICAgICB2YXIgY3VycmVudEl0ZW0gPSB0aGlzLml0ZW1zW3RoaXMuaW5kZXhdO1xyXG4gICAgICAgIHZhciB0cmFuc2Zvcm07XHJcbiAgICAgICAgaWYgKHRoaXMuem9vbUZyb21PcmlnaW4gJiYgY3VycmVudEl0ZW0pIHtcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5tZWRpYUNvbnRhaW5lclBvc2l0aW9uLCB0b3BfNCA9IF9hLnRvcCwgYm90dG9tID0gX2EuYm90dG9tO1xyXG4gICAgICAgICAgICB2YXIgX2IgPSB0aGlzLmdhbGxlcnlJdGVtc1t0aGlzLmluZGV4XSwgX19zbGlkZVZpZGVvSW5mbyA9IF9iLl9fc2xpZGVWaWRlb0luZm8sIHBvc3RlciA9IF9iLnBvc3RlcjtcclxuICAgICAgICAgICAgdmFyIGltYWdlU2l6ZSA9IHV0aWxzLmdldFNpemUoY3VycmVudEl0ZW0sIHRoaXMub3V0ZXIsIHRvcF80ICsgYm90dG9tLCBfX3NsaWRlVmlkZW9JbmZvICYmIHBvc3RlciAmJiB0aGlzLnNldHRpbmdzLnZpZGVvTWF4U2l6ZSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybSA9IHV0aWxzLmdldFRyYW5zZm9ybShjdXJyZW50SXRlbSwgdGhpcy5vdXRlciwgdG9wXzQsIGJvdHRvbSwgaW1hZ2VTaXplKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuem9vbUZyb21PcmlnaW4gJiYgdHJhbnNmb3JtKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3V0ZXIuYWRkQ2xhc3MoJ2xnLWNsb3NpbmcgbGctem9vbS1mcm9tLWltYWdlJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0U2xpZGVJdGVtKHRoaXMuaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2xnLXN0YXJ0LWVuZC1wcm9ncmVzcycpXHJcbiAgICAgICAgICAgICAgICAuY3NzKCd0cmFuc2l0aW9uLWR1cmF0aW9uJywgdGhpcy5zZXR0aW5ncy5zdGFydEFuaW1hdGlvbkR1cmF0aW9uICsgJ21zJylcclxuICAgICAgICAgICAgICAgIC5jc3MoJ3RyYW5zZm9ybScsIHRyYW5zZm9ybSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm91dGVyLmFkZENsYXNzKCdsZy1oaWRlLWl0ZW1zJyk7XHJcbiAgICAgICAgICAgIC8vIGxnLXpvb20tZnJvbS1pbWFnZSBpcyB1c2VkIGZvciBzZXR0aW5nIHRoZSBvcGFjaXR5IHRvIDEgaWYgem9vbUZyb21PcmlnaW4gaXMgdHJ1ZVxyXG4gICAgICAgICAgICAvLyBJZiB0aGUgY2xvc2luZyBpdGVtIGRvZXNuJ3QgaGF2ZSB0aGUgbGctc2l6ZSBhdHRyaWJ1dGUsIHJlbW92ZSB0aGlzIGNsYXNzIHRvIGF2b2lkIHRoZSBjbG9zaW5nIGNzcyBjb25mbGljdHNcclxuICAgICAgICAgICAgdGhpcy5vdXRlci5yZW1vdmVDbGFzcygnbGctem9vbS1mcm9tLWltYWdlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFVuYmluZCBhbGwgZXZlbnRzIGFkZGVkIGJ5IGxpZ2h0R2FsbGVyeVxyXG4gICAgICAgIC8vIEB0b2RvXHJcbiAgICAgICAgLy90aGlzLiRlbC5vZmYoJy5sZy50bScpO1xyXG4gICAgICAgIHRoaXMuZGVzdHJveU1vZHVsZXMoKTtcclxuICAgICAgICB0aGlzLmxHYWxsZXJ5T24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzRHVtbXlJbWFnZVJlbW92ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnpvb21Gcm9tT3JpZ2luID0gdGhpcy5zZXR0aW5ncy56b29tRnJvbU9yaWdpbjtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5oaWRlQmFyVGltZW91dCk7XHJcbiAgICAgICAgdGhpcy5oaWRlQmFyVGltZW91dCA9IGZhbHNlO1xyXG4gICAgICAgICRMRygnaHRtbCcpLnJlbW92ZUNsYXNzKCdsZy1vbicpO1xyXG4gICAgICAgIHRoaXMub3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLXZpc2libGUgbGctY29tcG9uZW50cy1vcGVuJyk7XHJcbiAgICAgICAgLy8gUmVzZXR0aW5nIG9wYWNpdHkgdG8gMCBpc2QgcmVxdWlyZWQgYXMgIHZlcnRpY2FsIHN3aXBlIHRvIGNsb3NlIGZ1bmN0aW9uIGFkZHMgaW5saW5lIG9wYWNpdHkuXHJcbiAgICAgICAgdGhpcy4kYmFja2Ryb3AucmVtb3ZlQ2xhc3MoJ2luJykuY3NzKCdvcGFjaXR5JywgMCk7XHJcbiAgICAgICAgdmFyIHJlbW92ZVRpbWVvdXQgPSB0aGlzLnpvb21Gcm9tT3JpZ2luICYmIHRyYW5zZm9ybVxyXG4gICAgICAgICAgICA/IE1hdGgubWF4KHRoaXMuc2V0dGluZ3Muc3RhcnRBbmltYXRpb25EdXJhdGlvbiwgdGhpcy5zZXR0aW5ncy5iYWNrZHJvcER1cmF0aW9uKVxyXG4gICAgICAgICAgICA6IHRoaXMuc2V0dGluZ3MuYmFja2Ryb3BEdXJhdGlvbjtcclxuICAgICAgICB0aGlzLiRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ2xnLXNob3ctaW4nKTtcclxuICAgICAgICAvLyBPbmNlIHRoZSBjbG9zaWduIGFuaW1hdGlvbiBpcyBjb21wbGV0ZWQgYW5kIGdhbGxlcnkgaXMgaW52aXNpYmxlXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy56b29tRnJvbU9yaWdpbiAmJiB0cmFuc2Zvcm0pIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLm91dGVyLnJlbW92ZUNsYXNzKCdsZy16b29tLWZyb20taW1hZ2UnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy4kY29udGFpbmVyLnJlbW92ZUNsYXNzKCdsZy1zaG93Jyk7XHJcbiAgICAgICAgICAgIC8vIE5lZWQgdG8gcmVtb3ZlIGlubGluZSBvcGFjaXR5IGFzIGl0IGlzIHVzZWQgaW4gdGhlIHN0eWxlc2hlZXQgYXMgd2VsbFxyXG4gICAgICAgICAgICBfdGhpcy4kYmFja2Ryb3BcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdzdHlsZScpXHJcbiAgICAgICAgICAgICAgICAuY3NzKCd0cmFuc2l0aW9uLWR1cmF0aW9uJywgX3RoaXMuc2V0dGluZ3MuYmFja2Ryb3BEdXJhdGlvbiArICdtcycpO1xyXG4gICAgICAgICAgICBfdGhpcy5vdXRlci5yZW1vdmVDbGFzcyhcImxnLWNsb3NpbmcgXCIgKyBfdGhpcy5zZXR0aW5ncy5zdGFydENsYXNzKTtcclxuICAgICAgICAgICAgX3RoaXMuZ2V0U2xpZGVJdGVtKF90aGlzLmluZGV4KS5yZW1vdmVDbGFzcygnbGctc3RhcnQtZW5kLXByb2dyZXNzJyk7XHJcbiAgICAgICAgICAgIF90aGlzLiRpbm5lci5lbXB0eSgpO1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMubGdPcGVuZWQpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLkxHZWwudHJpZ2dlcihsR0V2ZW50cy5hZnRlckNsb3NlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2U6IF90aGlzLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKF90aGlzLm91dGVyLmdldCgpKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5vdXRlci5nZXQoKS5ibHVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMubGdPcGVuZWQgPSBmYWxzZTtcclxuICAgICAgICB9LCByZW1vdmVUaW1lb3V0ICsgMTAwKTtcclxuICAgICAgICByZXR1cm4gcmVtb3ZlVGltZW91dCArIDEwMDtcclxuICAgIH07XHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLmluaXRNb2R1bGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGUpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIG1vZHVsZS5pbml0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwibGlnaHRHYWxsZXJ5Oi0gbWFrZSBzdXJlIGxpZ2h0R2FsbGVyeSBtb2R1bGUgaXMgcHJvcGVybHkgaW5pdGlhdGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5kZXN0cm95TW9kdWxlcyA9IGZ1bmN0aW9uIChkZXN0cm95KSB7XHJcbiAgICAgICAgdGhpcy5wbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRlc3Ryb3kpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2R1bGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlLmNsb3NlR2FsbGVyeSAmJiBtb2R1bGUuY2xvc2VHYWxsZXJ5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwibGlnaHRHYWxsZXJ5Oi0gbWFrZSBzdXJlIGxpZ2h0R2FsbGVyeSBtb2R1bGUgaXMgcHJvcGVybHkgZGVzdHJveWVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZWZyZXNoIGxpZ2h0R2FsbGVyeSB3aXRoIG5ldyBzZXQgb2YgY2hpbGRyZW4uXHJcbiAgICAgKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIFRoaXMgaXMgdXNlZnVsIHRvIHVwZGF0ZSB0aGUgZ2FsbGVyeSB3aGVuIHRoZSBjaGlsZCBlbGVtZW50cyBhcmUgY2hhbmdlZCB3aXRob3V0IGNhbGxpbmcgZGVzdHJveSBtZXRob2QuXHJcbiAgICAgKlxyXG4gICAgICogSWYgeW91IGFyZSB1c2luZyBkeW5hbWljIG1vZGUsIHlvdSBjYW4gcGFzcyB0aGUgbW9kaWZpZWQgYXJyYXkgb2YgZHluYW1pY0VsIGFzIHRoZSBmaXJzdCBwYXJhbWV0ZXIgdG8gcmVmcmVzaCB0aGUgZHluYW1pYyBnYWxsZXJ5XHJcbiAgICAgKiBAc2VlIDxhIGhyZWY9XCIvZGVtb3MvZHluYW1pYy1tb2RlL1wiPkRlbW88L2E+XHJcbiAgICAgKiBAY2F0ZWdvcnkgbEdQdWJsaWNNZXRob2RzXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogIGNvbnN0IHBsdWdpbiA9IGxpZ2h0R2FsbGVyeSgpO1xyXG4gICAgICogIC8vIERlbGV0ZSBvciBhZGQgY2hpbGRyZW4sIHRoZW4gY2FsbFxyXG4gICAgICogIHBsdWdpbi5yZWZyZXNoKCk7XHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiAoZ2FsbGVyeUl0ZW1zKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLmR5bmFtaWMpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnZhbGlkYXRlSXRlbXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbGxlcnlJdGVtcykge1xyXG4gICAgICAgICAgICB0aGlzLmdhbGxlcnlJdGVtcyA9IGdhbGxlcnlJdGVtcztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FsbGVyeUl0ZW1zID0gdGhpcy5nZXRJdGVtcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZUNvbnRyb2xzKCk7XHJcbiAgICAgICAgdGhpcy5vcGVuR2FsbGVyeU9uSXRlbUNsaWNrKCk7XHJcbiAgICAgICAgdGhpcy5MR2VsLnRyaWdnZXIobEdFdmVudHMudXBkYXRlU2xpZGVzKTtcclxuICAgIH07XHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLnVwZGF0ZUNvbnRyb2xzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYWRkU2xpZGVWaWRlb0luZm8odGhpcy5nYWxsZXJ5SXRlbXMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ291bnRlclRvdGFsKCk7XHJcbiAgICAgICAgdGhpcy5tYW5hZ2VTaW5nbGVTbGlkZUNsYXNzTmFtZSgpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogRGVzdHJveSBsaWdodEdhbGxlcnkuXHJcbiAgICAgKiBEZXN0cm95IGxpZ2h0R2FsbGVyeSBhbmQgaXRzIHBsdWdpbiBpbnN0YW5jZXMgY29tcGxldGVseVxyXG4gICAgICpcclxuICAgICAqIEBkZXNjcmlwdGlvbiBUaGlzIG1ldGhvZCBhbHNvIGNhbGxzIENsb3NlR2FsbGVyeSBmdW5jdGlvbiBpbnRlcm5hbGx5LiBSZXR1cm5zIHRoZSB0aW1lIHRha2VzIHRvIGNvbXBsZXRlbHkgY2xvc2UgYW5kIGRlc3Ryb3kgdGhlIGluc3RhbmNlLlxyXG4gICAgICogSW4gY2FzZSBpZiB5b3Ugd2FudCB0byByZS1pbml0aWFsaXplIGxpZ2h0R2FsbGVyeSByaWdodCBhZnRlciBkZXN0cm95aW5nIGl0LCBpbml0aWFsaXplIGl0IG9ubHkgb25jZSB0aGUgZGVzdHJveSBwcm9jZXNzIGlzIGNvbXBsZXRlZC5cclxuICAgICAqIFlvdSBjYW4gdXNlIHJlZnJlc2ggbWV0aG9kIG1vc3Qgb2YgdGhlIHRpbWVzLlxyXG4gICAgICogQGNhdGVnb3J5IGxHUHVibGljTWV0aG9kc1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqICBjb25zdCBwbHVnaW4gPSBsaWdodEdhbGxlcnkoKTtcclxuICAgICAqICBwbHVnaW4uZGVzdHJveSgpO1xyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGNsb3NlVGltZW91dCA9IHRoaXMuY2xvc2VHYWxsZXJ5KHRydWUpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5kZXN0cm95TW9kdWxlcyh0cnVlKTtcclxuICAgICAgICAgICAgaWYgKCFfdGhpcy5zZXR0aW5ncy5keW5hbWljKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5pbnZhbGlkYXRlSXRlbXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkTEcod2luZG93KS5vZmYoXCIubGcuZ2xvYmFsXCIgKyBfdGhpcy5sZ0lkKTtcclxuICAgICAgICAgICAgX3RoaXMuTEdlbC5vZmYoJy5sZycpO1xyXG4gICAgICAgICAgICBfdGhpcy4kY29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICAgIH0sIGNsb3NlVGltZW91dCk7XHJcbiAgICAgICAgcmV0dXJuIGNsb3NlVGltZW91dDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTGlnaHRHYWxsZXJ5O1xyXG59KCkpO1xuXG5mdW5jdGlvbiBsaWdodEdhbGxlcnkoZWwsIG9wdGlvbnMpIHtcclxuICAgIHJldHVybiBuZXcgTGlnaHRHYWxsZXJ5KGVsLCBvcHRpb25zKTtcclxufVxuXG5leHBvcnQgZGVmYXVsdCBsaWdodEdhbGxlcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saWdodGdhbGxlcnkuZXM1LmpzLm1hcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==