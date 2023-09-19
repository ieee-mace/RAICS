!(function (a) {
    "use strict";
    function e() {
        if (a(".main-header").length) {
            var e = a(window).scrollTop(),
                n = a(".main-header"),
                t = a(".scroll-to-top");
            e >= 1
                ? (n.addClass("fixed-header"), t.fadeIn(300))
                : (n.removeClass("fixed-header"), t.fadeOut(300));
        }
    }
    if (
        (e(),
        a(".main-header li.dropdown ul").length &&
            a(".main-header .navigation li.dropdown").append(
                '<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>'
            ),
        a(".mobile-menu").length)
    ) {
        var n = a(".main-header .nav-outer .main-menu .navigation").html();
        a(".mobile-menu").append(
            '<div class="close-btn"><span class="icon flaticon-cancel-music"></span></div>'
        ),
            a(".mobile-menu .navigation").append(n),
            a(".sticky-header .navigation").append(n),
            a(".mobile-menu .close-btn").on("click", function () {
                a("body").removeClass("mobile-menu-visible");
            }),
            a(".mobile-menu li.dropdown .dropdown-btn").on(
                "click",
                function () {
                    a(this).prev("ul").slideToggle(500);
                }
            ),
            a(".mobile-nav-toggler").on("click", function () {
                a("body").addClass("mobile-menu-visible");
            }),
            a(".mobile-menu .menu-backdrop,.mobile-menu .close-btn").on(
                "click",
                function () {
                    a("body").removeClass("mobile-menu-visible");
                }
            );
    }
    if (
        (a(".schedule-block").length &&
            (a(".schedule-block.active").find(".lower-content").slideDown(),
            a(".schedule-block .toggle-btn").on("click", function () {
                a(this).parents(".schedule-block").toggleClass("active"),
                    a(this)
                        .parents(".schedule-block")
                        .find(".lower-content")
                        .slideToggle(400),
                    a(this)
                        .parents(".schedule-block")
                        .siblings()
                        .find(".lower-content")
                        .slideUp(400),
                    a(this)
                        .parents(".schedule-block")
                        .siblings()
                        .removeClass("active");
            })),
        a(".date-btn").length)
    ) {
        var t = a(".date-btn").attr("data-last-date");
        a(".date-btn").on("click", function () {
            a(this).html(t);
        });
    }
    if (
        (a("#search-popup").length &&
            (a(".search-box-btn").on("click", function () {
                a("#search-popup").addClass("popup-visible");
            }),
            a(document).keydown(function (e) {
                27 == e.keyCode &&
                    a("#search-popup").removeClass("popup-visible");
            }),
            a(".close-search,.search-popup .overlay-layer").on(
                "click",
                function () {
                    a("#search-popup").removeClass("popup-visible");
                }
            )),
        a(".banner-carousel").length &&
            a(".banner-carousel").owlCarousel({
                animateOut: "fadeOut",
                animateIn: "fadeIn",
                loop: !0,
                margin: 0,
                nav: !0,
                smartSpeed: 500,
                autoHeight: !0,
                autoplay: !0,
                autoplayTimeout: 5e3,
                navText: [
                    '<span class="fa fa-angle-left">',
                    '<span class="fa fa-angle-right">',
                ],
                responsive: {
                    0: { items: 1 },
                    600: { items: 1 },
                    1024: { items: 1 },
                },
            }),
        a(".single-item-carousel").length &&
            a(".single-item-carousel").owlCarousel({
                loop: !0,
                margin: 0,
                nav: !0,
                smartSpeed: 500,
                autoplay: !0,
                navText: [
                    '<span class="arrow_carrot-left"></span>',
                    '<span class="arrow_carrot-right"></span>',
                ],
                responsive: {
                    0: { items: 1 },
                    600: { items: 1 },
                    1024: { items: 1 },
                },
            }),
        a(".gallery-carousel").length &&
            a(".gallery-carousel").owlCarousel({
                loop: !0,
                margin: 0,
                nav: !0,
                smartSpeed: 500,
                autoplay: !0,
                navText: [
                    '<span class="arrow_carrot-left"></span>',
                    '<span class="arrow_carrot-right"></span>',
                ],
                responsive: {
                    0: { items: 1 },
                    480: { items: 2 },
                    767: { items: 3 },
                    800: { items: 4 },
                    1200: { items: 5 },
                },
            }),
        a(".sponsors-carousel").length &&
            a(".sponsors-carousel").owlCarousel({
                loop: !0,
                margin: 30,
                nav: !0,
                lazyLoad: !0,
                smartSpeed: 700,
                autoplay: !0,
                navText: [
                    '<span class="la la-angle-left"></span>',
                    '<span class="la la-angle-right"></span>',
                ],
                responsive: {
                    0: { items: 1 },
                    600: { items: 2 },
                    768: { items: 3 },
                    1024: { items: 4 },
                    1200: { items: 5 },
                },
            }),
        a(".parallax-scene-1").length)
    ) {
        var o = a(".parallax-scene-1").get(0);
        new Parallax(o);
    }
    if (a(".parallax-scene-2").length)
        (o = a(".parallax-scene-2").get(0)), new Parallax(o);
    if (a(".parallax-scene-3").length)
        (o = a(".parallax-scene-3").get(0)), new Parallax(o);
    if (a(".parallax-scene-4").length)
        (o = a(".parallax-scene-4").get(0)), new Parallax(o);
    if (a(".parallax-scene-5").length)
        (o = a(".parallax-scene-5").get(0)), new Parallax(o);
    function s() {
        if (a(".masonry-items-container").length) {
            var e = a(window),
                n = a(".masonry-items-container");
            n.isotope({
                itemSelector: ".masonry-item",
                masonry: { columnWidth: 1 },
                animationOptions: { duration: 500, easing: "linear" },
            }),
                e.on("resize", function () {
                    n.isotope({
                        itemSelector: ".masonry-item",
                        animationOptions: {
                            duration: 500,
                            easing: "linear",
                            queue: !1,
                        },
                    });
                });
        }
    }
    (s(),
    a(".count-box").length &&
        a(".count-box").appear(
            function () {
                var e = a(this),
                    n = e.find(".count-text").attr("data-stop"),
                    t = parseInt(e.find(".count-text").attr("data-speed"), 10);
                e.hasClass("counted") ||
                    (e.addClass("counted"),
                    a({ countNum: e.find(".count-text").text() }).animate(
                        { countNum: n },
                        {
                            duration: t,
                            easing: "linear",
                            step: function () {
                                e.find(".count-text").text(
                                    Math.floor(this.countNum)
                                );
                            },
                            complete: function () {
                                e.find(".count-text").text(this.countNum);
                            },
                        }
                    ));
            },
            { accY: 0 }
        ),
    a(".tabs-box").length &&
        a(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
            e.preventDefault();
            var n = a(a(this).attr("data-tab"));
            if (a(n).is(":visible")) return !1;
            n
                .parents(".tabs-box")
                .find(".tab-buttons")
                .find(".tab-btn")
                .removeClass("active-btn"),
                // a(this).addClass("active-btn"),
                n
                    .parents(".tabs-box")
                    .find(".tabs-content")
                    .find(".tab")
                    .fadeOut(0),
                n
                    .parents(".tabs-box")
                    .find(".tabs-content")
                    .find(".tab")
                    .removeClass("active-tab animated fadeIn"),
                a(n).fadeIn(300),
                a(n).addClass("active-tab animated fadeIn");
        }),
    a(".accordion-box").length &&
        a(".accordion-box").on("click", ".acc-btn", function () {
            var e = a(this).parents(".accordion-box"),
                n = a(this).parents(".accordion");
            if (
                (!0 !== a(this).hasClass("active") &&
                    a(e).find(".accordion .acc-btn").removeClass("active "),
                a(this).next(".acc-content").is(":visible"))
            )
                return !1;
            a(this).addClass("active"),
                a(e).children(".accordion").removeClass("active-block"),
                a(e).find(".accordion").children(".acc-content").slideUp(300),
                n.addClass("active-block"),
                a(this).next(".acc-content").slideDown(300);
        }),
    a(".time-countdown").length &&
        a(".time-countdown").each(function () {
            var e = a(this),
                n = a(this).data("countdown");
            e.countdown(n, function (e) {
                a(this).html(
                    e.strftime(
                        '<div class="counter-column"><span class="count">%D</span>Days</div> <div class="counter-column"><span class="count">%H</span>Hours</div>  <div class="counter-column"><span class="count">%M</span>Minutes</div>  <div class="counter-column"><span class="count">%S</span>Second</div>'
                    )
                );
            });
        }),
    a(".cs-countdown").length &&
        (a(function () {
            a("[data-countdown]").each(function () {
                var e = a(this),
                    n = a(this).data("countdown");
                e.countdown(n, function (a) {
                    e.html(a.strftime("%D days %H:%M:%S"));
                });
            });
        }),
        a(".cs-countdown")
            .countdown("")
            .on("update.countdown", function (e) {
                a(this).html(
                    e.strftime(
                        "<div><span>%m</span><h6>Months</h6></div> <div><span>%D</span><h6>days</h6></div> <div><span>%H</span><h6>Hours</h6></div> <div><span>%M</span><h6>Minutes</h6></div> <div><span>%S</span><h6>Seconds</h6></div>"
                    )
                );
            })),
    a(".lightbox-image").length &&
        a(".lightbox-image").fancybox({
            openEffect: "fade",
            closeEffect: "fade",
            helpers: { media: {} },
        }),
    a("#contact-form").length &&
        a("#contact-form").validate({
            rules: {
                name: { required: !0 },
                email: { required: !0, email: !0 },
                message: { required: !0 },
            },
        }),
    a(".scroll-to-target").length &&
        a(".scroll-to-target").on("click", function () {
            var e = a(this).attr("data-target");
            a("html, body").animate({ scrollTop: a(e).offset().top }, 1500);
        }),
    a(".wow").length) &&
        new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
        }).init();
    a(window).on("scroll", function () {
        e();
    }),
        a(window).on("load", function () {
            a(".preloader").length && a(".preloader").delay(200).fadeOut(500),
                s();
        });
})(window.jQuery);
