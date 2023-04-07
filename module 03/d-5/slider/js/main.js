import Swiper from "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js";

window.addEventListener("DOMContentLoaded", () => {
    const playBtns = document.querySelectorAll('.swiper-slide-btn');
    const videos = document.querySelectorAll('.swiper-slide-video');
    const slides = document.querySelectorAll('.swiper-slide');

    const swiper = new Swiper(".swiper", {
        slidesPerView: 1,
        spaceBetween: 25,

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    swiper.on("slideChange", function () {
        const index = swiper.activeIndex;
        const translate = index * 360;
        swiper.wrapperEl.style.transform = `translate3d(-${translate}px,0,0)`;
        videos.forEach((video) => {
            if (!video.paused) {
                const slide = video.closest('.swiper-slide');
                const btn = slide.querySelector('.swiper-slide-btn');
                btn.classList.remove('played');
                video.pause();
            }
        })
    });

    if (playBtns.length) {
        playBtns.forEach((btn) => {
            btn.addEventListener(('click'), () => {
                const slide = btn.closest('.swiper-slide');
                const video = slide.querySelector('.swiper-slide-video');
                const toIndex = +slide.getAttribute('aria-label').slice(0, 1) - 1;
                swiper.slideTo(toIndex);
                btn.classList.add('played');
                video.play();
            })
        })
    }

    if (videos.length) {
        videos.forEach((video) => {
            video.addEventListener('click', () => {
                if (!video.paused) {
                    const slide = video.closest('.swiper-slide');
                    const btn = slide.querySelector('.swiper-slide-btn');
                    btn.classList.remove('played');
                    video.pause();
                }
            })
        })
    }
});
