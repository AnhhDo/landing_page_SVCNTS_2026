function toggleDetails(element) {
  element.classList.toggle("active");
}
$(document).ready(function(){
    $('.venobox').venobox({
        numeratio: true,            // Adds "1/6" navigation
        infinigall: true,           // Allows looping through items
        share: false,               // Hides share buttons
        spinner: 'cube-grid',       // Loading animation style
        bgcolor: '#fff',            // Popup background color
        overlayColor: 'rgba(0,0,0,0.85)' // Dimness of the background
    });
});
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
                    slidesPerView: 3.5,
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

document.addEventListener("DOMContentLoaded", function() {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const menuWrap = document.querySelector('.header-menu-wrap');

    if (mobileBtn && menuWrap) {
        mobileBtn.addEventListener('click', function() {
            // Toggles the 'active' class on and off
            menuWrap.classList.toggle('active');

            // Optional: Change the icon from hamburger (bars) to close (x)
            const icon = mobileBtn.querySelector('i');
            if (menuWrap.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Optional: Close the menu automatically when a link is clicked
    const navLinks = document.querySelectorAll('.custom-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuWrap.classList.remove('active');
            const icon = mobileBtn.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });
});