function toggleDetails(element) {
  element.classList.toggle("active");
}

(function ($) {
    "use strict";

    $(document).ready(function () {

        // 1. Team Carousel Initialization (Swiper.js)
        var swiperTeam = new Swiper(".team-carousel", {
            slidesPerView: 4,
            spaceBetween: 60,
            slidesPerGroup: 1,
            loop: true,       // Infinite looping
            speed: 400,       // Transition speed

            // Link to your Arrow Buttons in the HTML
            navigation: {
                nextEl: ".team-carousel .swiper-next",
                prevEl: ".team-carousel .swiper-prev",
            },

            // Responsive Breakpoints (How many cards to show on smaller screens)
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
                    slidesPerView: 3,
                }
            }
        });

        // 2. Player Details Popup Modal (VenoBox)
        // This targets the `<a class="menu-inline">` links in your HTML
        new VenoBox({
            selector: '.menu-inline',
            bgcolor: '#1b0e22',
            numeration: false,
            infinigall: false,
            spinner: 'plane',
        });

    });

})(jQuery);