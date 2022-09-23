function setSwiper(direction, $class = '.swiper') {
    return new Swiper($class, {
        direction: direction,
        loop: true,

        pagination: {
            el: '.swiper-pagination',
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
}
