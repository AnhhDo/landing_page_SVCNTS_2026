function toggleDetails(element) {
  element.classList.toggle("active");
}

(function ($) {
    "use strict";

    $(document).ready(function () {

        // 1. Team Carousel Initialization (Swiper.js)
        var swiperTeam = new Swiper(".team-carousel", {
            slidesPerView: 4,
            spaceBetween: 40,
            slidesPerGroup: 1,
            loop: true,       // Infinite looping
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            speed: 400,       // Transition speed

            navigation: {
                nextEl: ".team-carousel .swiper-next",
                prevEl: ".team-carousel .swiper-prev",
            },

            breakpoints: {
                // Mobile phones (320px and up)
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                // Tablets (767px and up)
                767: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                // Laptops/Desktops (1024px and up)
                1024: {
                    slidesPerView: 4,
                }
            }
        });

        new VenoBox({
            selector: '.menu-inline',
            bgcolor: '#1b0e22',
            numeration: false,
            infinigall: false,
            spinner: 'plane',
        });

    });

})(jQuery);