
// ====================== sliders ====================
$(".staff__cards").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 1410,
            settings: {
                infinite: false,
                dots: false,
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: false
            }
        },
        {
            breakpoint: 1409,
            settings: {
                infinite: true,
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        },
    ]
})

$(".clients__cards").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1410,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: true,
                autoplay: false
            }
        },
        {
            breakpoint: 1409,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
                // autoplay: true,
                // autoplaySpeed: 3000
            }
        },
    ]
});
