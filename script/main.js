$(function () {
    $(document).ready(function () {
        checkWindowLocation();

        var myFullpage = new fullpage('#fullpage', {
            anchors: ['home', 'works', 'about', 'contact', 'hire'],
            menu: '#menu',
            lazyLoad: true,
            responsiveWidth: 767
        });

        $(document).on("click", "header #toggleMenu", function () {
            $("header #toggleMenu, #open_header, #header_menu").toggleClass("active");
        });

        $(window).on('hashchange', checkWindowLocation);

        function checkWindowLocation() {
            var location = window.location.hash;
            location = location.replace("#", "");

            $("#header_menu li").each(function () {
                var href = $(this).find("a").attr("href").split("#")[1];


                if (href.toLowerCase() === location.toLowerCase()) {
                    $("#header_menu li").not($(this)).removeClass("active");
                    $(this).addClass("active");
                }
            });

            if (location.toLowerCase() === "home") {
                $("header #hireBtn").removeClass("show");
            } else {
                $("header #hireBtn").addClass("show");
            }
        }

        // #region WORKS SECTION
            $(".section.works .owl-carousel").owlCarousel({
                items: 3,
                loop: true,
                center: true
            });
        // #endregion
    });
})