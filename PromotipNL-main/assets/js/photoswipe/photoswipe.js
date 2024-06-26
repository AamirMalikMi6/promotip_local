(function (jQuery) {
    jQuery.fn.jqPhotoSwipe = function (options) {
        if (this.length) {
            var parseHash = function() {
                var hash = window.location.hash.substring(1),
                    params = {};
                var vars = hash.split('&');
                for (var i = 0; i < vars.length; i++) {
                    if(!vars[i]) {
                        continue;
                    }
                    var pair = vars[i].split('=');
                    if(pair.length < 2) {
                        continue;
                    }
                    params[pair[0]] = pair[1];
                }

                if(params.gid) {
                    params.gid = params.gid;
                }

                return params;
            };
            var _photoswipe = {};
            var defaults = {
                forceSingleGallery: false,
                galleryOpen: function (gallery) {

                }
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
                        $galleryname = "pswgname" + (_photoswipe.galleriesindex.length);
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
                    _photoswipe.galleries[$galleryid2].obj = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, _photoswipe.galleries[$galleryid2].items, $options);
                    _photoswipe.galleries[$galleryid2].obj.init();

                    _photoswipe.galleries[$galleryid2].obj.listen('initialZoomInEnd', function() {
                        $options.galleryOpen(_photoswipe.galleries[$galleryid2].obj);
                    });
                    _photoswipe.galleries[$galleryid2].obj.listen('imageLoadComplete', function(index, item) {
                        loadImg(index, item);
                    });
                    _photoswipe.galleries[$galleryid2].obj.listen('gettingData', function(index, item) {
                        loadImg(index, item);
                    });
                    function loadImg(index, item) {
                        if (item.w == 0 && item.h == 0) {
                            var imgpreload = new Image();
                            imgpreload.onload = function() {
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
                _photoswipe.galleries[$galleryid].i ++;
            });
            return _photoswipe;
        }
    };
})(jQuery);

$(document).ready(function () {
    //By default, plugin uses `data-gallery-group` attribute to create galleries.
    $(".gallery").jqPhotoSwipe({
        galleryOpen: function (gallery) {
            //with `gallery` object you can access all methods and properties described here http://photoswipe.com/documentation/api.html
            //console.log(gallery);
            //console.log(gallery.currItem);
            //console.log(gallery.getCurrentIndex());
            //gallery.zoomTo(1, {x:gallery.viewportSize.x/2,y:gallery.viewportSize.y/2}, 500);
            //gallery.toggleDesktopZoom();
        }
    });
});