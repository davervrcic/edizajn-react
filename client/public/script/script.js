var page_fade = 500;
$(window).load(function() {
    $(".loading").fadeOut(page_fade, function() {
        $(this).remove();
    });
});
var howWeDo;
var howWeDoIndex = 1;
var howWeDoMax = 3;
var productsContent = 1;
var productsMembers = 1;
var parallax = new Object();
var sections = ["lets-go", "services", "work", "culture", "we-will-fight", "contact"];
var workSections = ["refs", "contact"];
var ipad = navigator.userAgent.match(/i(Pad|Phone|Pod)/i) != null;
var android = navigator.userAgent.match(/(android)/i) != null;
$(document).ready(function() {
    if (navigator.userAgent.indexOf('Mac OS X') != -1 && !(/iPad|iPhone|iPod/.test(navigator.userAgent))) {
        $("#lets-go .h1-label").css("margin", "0 0 2em");
        $("#lets-go p").css("margin", "-1em 0 0");
    }
    relax();
    $(window).scroll(function() {
        relax();
    });
    if ($("section#lets-go").length) {
        $("a[href]").not("[target='_blank']").not(".logo").not("[data-section]").not(".contact-link").click(function(e) {
            page_fadeout($(this), e);
        });
    } else {
        $("a[href]").not("[target='_blank']").not("[href^='#']").not(".contact-link").click(function(e) {
            page_fadeout($(this), e);
        });
    }

    function page_fadeout(el, e) {
        href = el.attr("href");
        $("body").fadeOut(page_fade, function() {
            window.location.href = href;
        });
        e.preventDefault();
    }
    if (ipad || android) {
        $("#services #mac .step .num").addClass("mobile");
    }
    if (ipad) {
        $("#work a.ref, #refs a.ref, #we-will-fight .fight").click(function() {
            $(this).removeClass("not-hovered");
            $(this).addClass("hovered");
            $("#work a.ref, #refs a.ref, #we-will-fight .fight, footer .socs").not($(this)).removeClass("hovered");
        });
        $("footer .socs .circle-border").click(function() {
            $("footer .socs").removeClass("not-hovered");
            $("footer .socs").addClass("hovered");
        });
        $(document).click(function(e) {
            if (!$(e.target).hasClass("circle-border")) {
                $("footer .socs").removeClass("hovered");
            }
            if (!$(e.target).hasClass("hovered")) {
                $("#work a.ref, #refs a.ref, #we-will-fight .fight").removeClass("hovered");
            }
        });
        $(document).scroll(function() {
            $("#work a.ref, #refs a.ref, #we-will-fight .fight, footer .socs").each(function() {
                if ($(this).hasClass("hovered")) {
                    $(this).removeClass("hovered");
                    $(this).addClass("not-hovered");
                }
            });
        });
    }
    howWeDoGo(howWeDoIndex);
    fixedElements();
    hideContent();
    firstLanding();
    $("#step1").click(function() {
        howWeDoIndex = 1;
        howWeDoGo()
    });
    $("#step2").click(function() {
        howWeDoIndex = 2;
        howWeDoGo()
    });
    $("#step3").click(function() {
        howWeDoIndex = 3;
        howWeDoGo()
    });
    $(document).scroll(function() {
        fixedElements();
        landings();
    });
    $(window).resize(function() {
        fixedElements();
        landings();
    });
    $("a.logo").mouseover(function() {
        $(".logo-label-inner").addClass("hovered");
    });
    $("a.logo").mouseout(function() {
        $(".logo-label-inner").removeClass("hovered");
    });
    $("header nav ul li a").click(function() {
        $("body").css({
            "overflow": "",
            "height": ""
        });
        if ($("header nav").hasClass("opened")) {
            $("footer").removeClass("hidden");
        }
        $("header nav").removeClass("opened");
        $(".hamburger-ico").removeClass("cross");
    });
    $("header a.logo").click(function() {
        $("body").css({
            "overflow": "",
            "height": ""
        });
        if ($("header nav").hasClass("opened")) {
            $("footer").removeClass("hidden");
        }
        $("header nav").removeClass("opened");
        $(".hamburger-ico").removeClass("cross");
    });
    setInterval(function() {
        $("footer p.left").each(function() {
            if (!$(this).hasClass("hidden")) {
                ind = parseInt($(this).index()) + 1;
                if (ind >= $("footer p.left").length) ind = 0;
                $(this).addClass("hidden");
                $("footer p.left").eq(ind).removeClass("hidden");
                return false;
            }
        })
    }, 7000);
    $("#culture .buttons input[value=next]").click(function() {
        if ($(this).attr("data-active") == "true") {
            $("#culture .buttons input").attr("data-active", "false");
            hideLeft(productsMembers, productsContent);
            productsMembers++;
            if (productsMembers > 2) productsMembers = 1;
            productsContent++;
            if (productsContent > 2) productsContent = 1;
            $("#culture .photo[data-order=" + productsMembers + "]").removeClass("hidden");
            $("#culture .photo[data-order=" + productsMembers + "]").addClass("hidden-right");
            $("#culture .content[data-order=" + productsContent + "]").removeClass("hidden");
            $("#culture .content[data-order=" + productsContent + "]").addClass("hidden-right");
            setTimeout(function() {
                $("#culture .photo[data-order=" + productsMembers + "]").addClass("shown");
            }, 100);
            setTimeout(function() {
                $("#culture .content[data-order=" + productsContent + "]").addClass("shown");
            }, 200);
            setTimeout(function() {
                $("#culture .photo[data-order=" + productsMembers + "]").removeClass("hidden-right");
            }, 950);
            setTimeout(function() {
                $("#culture .content[data-order=" + productsContent + "]").removeClass("hidden-right");
                $("#culture .buttons input").attr("data-active", "true");
            }, 1050);
        }
    });

    function hideLeft(m, c) {
        $("#culture .photo[data-order=" + m + "]").addClass("hide-left");
        $("#culture .content[data-order=" + c + "]").addClass("hide-left");
        setTimeout(function() {
            $("#culture .photo[data-order=" + m + "]").removeClass("shown hide-left");
            $("#culture .photo[data-order=" + m + "]").addClass("hidden");
            $("#culture .content[data-order=" + c + "]").removeClass("shown hide-left");
            $("#culture .content[data-order=" + c + "]").addClass("hidden");
        }, 1000);
    };
    $("#culture .buttons input[value=prev]").click(function() {
        if ($(this).attr("data-active") == "true") {
            $("#culture .buttons input").attr("data-active", "false");
            hideRight(productsMembers, productsContent);
            productsMembers--;
            if (productsMembers < 1) productsMembers = 2;
            productsContent--;
            if (productsContent < 1) productsContent = 2;
            $("#culture .photo[data-order=" + productsMembers + "]").removeClass("hidden");
            $("#culture .photo[data-order=" + productsMembers + "]").addClass("hidden-left");
            $("#culture .content[data-order=" + productsContent + "]").removeClass("hidden");
            $("#culture .content[data-order=" + productsContent + "]").addClass("hidden-left");
            setTimeout(function() {
                $("#culture .photo[data-order=" + productsMembers + "]").addClass("shown");
            }, 200);
            setTimeout(function() {
                $("#culture .content[data-order=" + productsContent + "]").addClass("shown");
            }, 100);
            setTimeout(function() {
                $("#culture .photo[data-order=" + productsMembers + "]").removeClass("hidden-left");
                $("#culture .buttons input").attr("data-active", "true");
            }, 1050);
            setTimeout(function() {
                $("#culture .content[data-order=" + productsContent + "]").removeClass("hidden-left");
            }, 950);
        }
    });

    function hideRight(m, c) {
        $("#culture .photo[data-order=" + m + "]").addClass("hide-right");
        $("#culture .content[data-order=" + c + "]").addClass("hide-right");
        setTimeout(function() {
            $("#culture .photo[data-order=" + m + "]").removeClass("shown hide-right");
            $("#culture .photo[data-order=" + m + "]").addClass("hidden");
            $("#culture .content[data-order=" + c + "]").removeClass("shown hide-right");
            $("#culture .content[data-order=" + c + "]").addClass("hidden");
        }, 1000);
    };
    $(".hamburger-ico").click(function() {
        if ($("header nav").hasClass("opened")) {
            $("body").css({
                "overflow": "",
                "height": ""
            });
            if (!$("#work-page").length) $("footer").removeClass("hidden");
            $(".hamburger-ico").removeClass("cross");
            $("header nav").removeClass("opened");
        } else {
            $("body").css({
                "overflow": "hidden",
                "height": "100vh"
            });
            $("footer").addClass("hidden");
            $(".hamburger-ico").addClass("cross");
            $("header nav").addClass("opened");
        }
    });
    if ($("#lets-go").length) {
        $("header a.logo").click(function(e) {
            $("body, html").animate({
                scrollTop: 0
            }, 500);
            e.preventDefault();
        });
        $("header nav ul li a").click(function(e) {
            $("body, html").animate({
                scrollTop: $("section#" + $(this).attr("data-section")).offset().top + 1
            }, 500);
            e.preventDefault();
        });
    }
    if ($("#work-page").length) {
        $("#become-our-client").click(function() {
            $("body, html").animate({
                scrollTop: $("section#contact").offset().top
            }, 500);
        });
    }
});

function relax() {
    if (window.innerWidth > 1200) {
        $(".do-relax").each(function() {
            if ($(this).offset().top < parseInt($(document).scrollTop()) + ($(window).innerHeight()) && $(this).offset().top > parseInt($(document).scrollTop()) - ($(window).innerHeight())) {
                var speed = 10;
                if ($(this).is("[data-speed]")) {
                    speed = speed / parseFloat($(this).attr("data-speed"));
                }
                $(this).css({
                    "transform": "translateY(" + ((parseInt($(document).scrollTop()) - $(this).offset().top) / speed) + "px)"
                });
            }
        });
    } else {
        $(".do-relax").each(function() {
            $(this).css({
                "transform": "translateY(0)"
            });
        });
    }
}

function firstLanding() {
    if ($("#lets-go").length) {
        setTimeout(function() {
            $("#lets-go article").removeClass("hidden");
        }, 1700);
        setTimeout(function() {
            parallax = new Parallax(document.getElementById("parallax_scene"));
        }, 1700);
    } else if ($("#work-page").length) {
        setTimeout(function() {
            $("#refs h2").removeClass("hidden");
        }, 500);
        setTimeout(function() {
            $("#refs p").removeClass("hidden");
        }, 650);
        setTimeout(function() {
            $("#refs .button.dark").removeClass("hidden");
        }, 800);
        var tiles_lands_total = 5;
        var tiles_lands_current = 0;
        setTimeout(function() {
            work_tiles_landing(tiles_lands_current, tiles_lands_total);
        }, 1250);

        function work_tiles_landing(current_tile, total) {
            $("#refs .border:eq(" + current_tile + ")").removeClass("hidden");
            current_tile++;
            if (current_tile <= total) {
                setTimeout(function() {
                    work_tiles_landing(current_tile, total);
                }, 150 * current_tile);
            }
        }
    }
}

function landings() {
    scr = $(document).scrollTop();
    if ($("#lets-go").length) {
        for (i = 1; i < sections.length; i++) {
            offs = (offset(document.getElementById(sections[i])) * 1) - $(window).height() / 2;
            if (scr > offs) {
                $("#" + sections[i] + " article").removeClass("hidden");
                if (i == 3) {
                    var relaxInterval = setInterval(function() {
                        relax();
                    }, 25);
                    setTimeout(function() {
                        clearInterval(relaxInterval);
                    }, 1000);
                }
            } else if (scr < offs && !$("#" + sections[i] + " article").hasClass("hidden")) {
                $("#" + sections[i] + " article").addClass("hidden");
            }
        }
    } else if ($("#work-page").length) {
        for (i = 1; i < workSections.length; i++) {
            offs = (offset(document.getElementById(workSections[i])) * 1) - $(window).height() / 2;
            if (scr > offs) {
                $("#" + workSections[i] + " article").removeClass("hidden");
            } else if (scr < offs && !$("#" + workSections[i] + " article").hasClass("hidden")) {
                $("#" + workSections[i] + " article").addClass("hidden");
            }
        }
    }
}

function hideContent() {
    if ($("#lets-go").length) {
        for (i = 1; i < sections.length; i++) {
            $("#" + sections[i] + " article").addClass("hidden");
        }
    } else if ($("#work-page").length) {
        $("footer").hide();
        $("footer").css({
            "opacity": 0
        });
        setTimeout(function() {
            $("footer").show();
            $("footer").animate({
                "opacity": 1
            }, 100);
        }, 500)
    }
}

function howWeDoGo() {
    clearInterval(howWeDo);
    $(".step").removeClass("active");
    $("#step" + howWeDoIndex).addClass("active");
    howWeDo = setInterval(function() {
        howWeDoIndex++;
        if (howWeDoIndex > howWeDoMax) howWeDoIndex -= howWeDoMax;
        $(".step").removeClass("active");
        $("#step" + howWeDoIndex).addClass("active");
    }, 8000);
}

function fixedElements() {
    var mainScroll = $(document).scrollTop();
    if ($("#lets-go").length) {
        $(".bottom-bg-section").css("height", (parseInt($("#culture").innerHeight()) + parseInt($("#we-will-fight").innerHeight()) + parseInt($("#contact").innerHeight())) + "px");
        $(".bottom-bg-section .black-bg").css("height", (parseInt($("#culture").innerHeight()) + parseInt($("#we-will-fight").innerHeight())) + "px");
        if (mainScroll > parseInt($("section#culture").offset().top) - $("header .left .logo").innerHeight() && mainScroll <= parseInt($("section#contact").offset().top) - $("header .left .logo").innerHeight()) {
            $("header").addClass("dark");
            $("header .left .border").removeClass("hidden");
        } else {
            $("header").removeClass("dark");
            if (mainScroll < 100 || mainScroll > parseInt($("section#contact").offset().top) - $("header .left .logo").innerHeight()) {
                $("header .left .logo-label-inner").removeClass("hidden");
            } else {
                $("header .left .logo-label-inner").addClass("hidden");
            }
            if (mainScroll < parseInt($("section#services").offset().top) || mainScroll > parseInt($("section#contact").offset().top) - $("header .left .logo").innerHeight()) {
                $("header .left .border").addClass("hidden");
            } else {
                $("header .left .border").removeClass("hidden");
            }
        }
        if (mainScroll > parseInt($("section#culture").offset().top) - parseInt($(window).innerHeight() - $("footer .socs").innerHeight()) && mainScroll <= parseInt($("section#contact").offset().top) - parseInt($(window).innerHeight() - $("footer .socs").innerHeight())) {
            $("footer").addClass("dark");
        } else {
            $("footer").removeClass("dark");
        }
        if (mainScroll > parseInt($("section#services").offset().top - $(window).innerHeight() / 2) && mainScroll <= parseInt($("section#contact").offset().top - $(window).innerHeight() / 2)) {
            $("#left, #right").removeClass("transparent");
        } else {
            $("#left, #right").addClass("transparent");
        }
        if (mainScroll > parseInt($("section#culture").offset().top - $(window).innerHeight() / 2)) {
            $("#left, #right").addClass("dark");
        } else {
            $("#left, #right").removeClass("dark");
        }
        if (mainScroll < parseInt($("section#work").offset().top - $(window).innerHeight() / 2)) {
            $("#left .left-num").html("02");
            $("#left .left-line").css("transform", "scaleX(" + ((mainScroll - parseInt($("section#services").offset().top)) / parseInt($("section#services").innerHeight()) + 0.5) + ")");
        } else if (mainScroll < parseInt($("section#culture").offset().top - $(window).innerHeight() / 2)) {
            $("#left .left-num").html("03");
            $("#left .left-line").css("transform", "scaleX(" + ((mainScroll - parseInt($("section#work").offset().top)) / parseInt($("section#work").innerHeight()) + 0.5) + ")");
        } else if (mainScroll < parseInt($("section#we-will-fight").offset().top - $(window).innerHeight() / 2)) {
            $("#left .left-num").html("04");
            $("#left .left-line").css("transform", "scaleX(" + ((mainScroll - parseInt($("section#culture").offset().top)) / parseInt($("section#culture").innerHeight()) + 0.5) + ")");
        } else {
            $("#left .left-num").html("05");
            $("#left .left-line").css("transform", "scaleX(" + ((mainScroll - parseInt($("section#we-will-fight").offset().top)) / parseInt($("section#we-will-fight").innerHeight()) + 0.5) + ")");
        }
    }
    if ((mainScroll + $("header .left .border").innerHeight() / 2) >= $("#contact").offset().top) {
        $("footer").removeClass("hidden");
        $("header nav").removeClass("hidden");
        $(".logo-label-inner").removeClass("hidden");
        $("header .left .border").addClass("hidden");
    } else if (mainScroll > 100) {
        $("footer").addClass("hidden");
        $(".logo-label-inner").addClass("hidden");
        $("header nav").addClass("hidden");
    } else {
        if ($("#lets-go").length) {
            $("footer").removeClass("hidden");
        } else {
            $("footer").addClass("hidden");
        }
        $(".logo-label-inner").removeClass("hidden");
        $("header nav").removeClass("hidden");
    }
}

function offset(element) {
    if (element.offsetParent == null) return 0;
    else return element.offsetTop + offset(element.offsetParent);
}