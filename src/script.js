(function() {
    'use strict';

    var navBar = document.querySelector(".navbar");
    var btnMenu = document.querySelector(".btnMenu");
    var btnClose = document.querySelector(".btnClose");
    var menuBox = document.querySelector(".menuBox");
    var brand = document.querySelector("#brand");

    btnMenu.onclick = function() {        
        brand.classList.toggle('hidden');
        btnMenu.classList.toggle('hidden');
        navBar.classList.toggle('w-80');
        navBar.classList.toggle('border-0');
        menuBox.classList.toggle('hidden');
    };
    btnClose.onclick = function() {        
        brand.classList.toggle('hidden');
        btnMenu.classList.toggle('hidden');
        navBar.classList.toggle('w-80');
        navBar.classList.toggle('border-0');
        menuBox.classList.toggle('hidden');
    };
    
})( window );



var swiper = new Swiper(".homeSwiper", {
    spaceBetween: 0,
    effect: "fade",
    centeredSlides: true,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".onlineSwiper", {
    spaceBetween: 0,
    effect: "fade",
    centeredSlides: true,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".ProductSwiper", {
    slidesPerView: 4,
    loop: true,
    spaceBetween: 20,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        540: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1280: {
            slidesPerView: 4,
        }
    },
});