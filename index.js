// ========== MENU ICON and open menu 
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("move");
    navbar.classList.toggle("open-menu");  
};

// categories autoplay
var swiper = new Swiper(".categorySwiper", {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // Responsive for all devices
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        510: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        750: {
            slidesPerView:3,
            spaceBetween: 15,
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});

// Selling Slider
var swiper = new Swiper(".selling-slider", {
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // Responsive for all devices
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        510: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        750: {
            slidesPerView:3,
            spaceBetween: 15,
        },
        920: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});

// ============= ScrollReveal Animated
const animate = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: '2500',
    delay: '400'
});

animate.reveal(".nav, .heading, .hero-content h2");
animate.reveal(".backpack-content", {origin: 'left'})
animate.reveal(".hero-img img, .btn,.btn img .backpack img, .single-post", {origin: 'bottom'})
animate.reveal(".category-box, .product-box, .brands-box, .blog-box, .link-box, .footer-box h3,.footer-box a, .footer-box p", {interval: 100})