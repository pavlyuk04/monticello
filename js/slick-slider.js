$(document).ready(function(){
    $('#slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        // autoplay: true,
        // autoplaySpeed: 4000,
        prevArrow: $('.left-arrow'),
        nextArrow: $('.right-arrow'), 
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                prevArrow: $('.left-arrow'),
                nextArrow: $('.right-arrow'),
              }
            },
        ]
    });
});