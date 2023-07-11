
// ====================== sliders ====================

$(".clients__cards").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1410,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true,
                autoplay: false
            }
        },
        {
            breakpoint: 1409,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000
            }
        },
    ]
});
