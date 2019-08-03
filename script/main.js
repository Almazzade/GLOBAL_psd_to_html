$(function () {
    $(document).ready(function () {
        checkWindowLocation();

        var myFullpage = new fullpage('#fullpage', {
            anchors: ['home', 'works', 'about', 'contact', 'hire'],
            menu: '#menu',
            lazyLoad: true,
            responsiveWidth: 767,
            responsiveHeight: 450
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
            items: 1,
            loop: true,
            center: true,
            nav: true,
            navText: [`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 268.832 268.832" style="enable-background:new 0 0 268.832 268.832;" xml:space="preserve" class=""> <g> <g> <path d="M265.171,125.577l-80-80c-4.881-4.881-12.797-4.881-17.678,0c-4.882,4.882-4.882,12.796,0,17.678l58.661,58.661H12.5 c-6.903,0-12.5,5.597-12.5,12.5c0,6.902,5.597,12.5,12.5,12.5h213.654l-58.659,58.661c-4.882,4.882-4.882,12.796,0,17.678 c2.44,2.439,5.64,3.661,8.839,3.661s6.398-1.222,8.839-3.661l79.998-80C270.053,138.373,270.053,130.459,265.171,125.577z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF" /> </g> </g> </svg>`, `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 268.832 268.832" style="enable-background:new 0 0 268.832 268.832;" xml:space="preserve" class=""> <g> <g> <path d="M265.171,125.577l-80-80c-4.881-4.881-12.797-4.881-17.678,0c-4.882,4.882-4.882,12.796,0,17.678l58.661,58.661H12.5 c-6.903,0-12.5,5.597-12.5,12.5c0,6.902,5.597,12.5,12.5,12.5h213.654l-58.659,58.661c-4.882,4.882-4.882,12.796,0,17.678 c2.44,2.439,5.64,3.661,8.839,3.661s6.398-1.222,8.839-3.661l79.998-80C270.053,138.373,270.053,130.459,265.171,125.577z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF" /> </g> </g> </svg>`],
            responsive: {
                768: {
                    items: 3
                }
            }
        });
        // #endregion

        // #region ABOUT SECTION
            $(".section.about .shapes span").each(function(){
                $(this).css({
                    'left': Math.floor((Math.random() * 100) + 1) + '%',
                    'top': Math.floor((Math.random() * 100) + 1) + '%',
                    'transform': 'rotate(' + Math.floor((Math.random() * 180) + 1) + 'deg)'
                });
            });
        // #endregion
    });
})