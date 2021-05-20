

window.onload = () => {

    $(document).ready(function(){
        console.log($('.news-slick__slider').length)
        $('.news-slick__slider').slick({
            
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            autoplay: false,
            autoplaySpeed: 4000,
            prevArrow: $('.left-arrow'),
            nextArrow: $('.right-arrow'), 
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                    variableWidth: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    prevArrow: $('.left-arrow'),
                    nextArrow: $('.right-arrow'),
                    }
                },
                {
                    breakpoint: 775,
                    settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    prevArrow: $('.left-arrow'),
                    nextArrow: $('.right-arrow'),
                    }
                },
                {
                    breakpoint: 535,
                    settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    prevArrow: false,
                    nextArrow: false,
                    }
                },
            ]
            
        });
    });

    $(document).ready(function() {
        $(window).scroll(function(){
            if($(this).scrollTop() > 50){
            $('.hero__body__header').css('top','0');
            $('.hero__body__header').css('background', 'linear-gradient(45deg, rgb(87, 185, 255, 0.8) 0%, rgb(125, 89, 255) 100%)')
            }
            else if ($(this).scrollTop() < 50){
            $('.hero__body__header').css('top','50');
            $('.hero__body__header').css('background', 'none')
            }
        });
    });

    $(document).ready(function(){
        $('a[href^="#"]').click(function (event) {
            event.preventDefault();
            let anchor  = $(this).attr('href'),
                bottom = $(anchor).offset().top;
            $('body,html').animate({scrollTop: bottom}, 1000);
            // $('#active-menu').addClass('active-span');
        });
    });


    $(document).ready(function() {
        $(".menu__burger").click(function() {
          $(this).toggleClass("active");
          $('.menu__nav').slideToggle(300, function(){
            if($(this).css('display') === "none"){
              $(this).removeAttr('style');
            }
          });
        });
    });
    
    
    let heroAnchor = $('.anchor-hero').offset()
    console.log(heroAnchor.top)
    let wedoAnchor = $('.anchor-wedo').offset()
    console.log(wedoAnchor.top)
    let newsAnchor = $('.anchor-news').offset()
    console.log(newsAnchor.top)
    let mapAnchor = $('.anchor-map').offset()
    console.log(mapAnchor.top)
    $(document).ready(function() {

        $(window).on('scroll', function () {
           
            if($(this).scrollTop() > heroAnchor.top && $(this).scrollTop() <= wedoAnchor.top){
                $('li span').removeClass('active-span')
                $('.active-menu-1').addClass('active-span')

            } else if ($(this).scrollTop() > wedoAnchor.top && $(this).scrollTop() <= newsAnchor.top){
                $('li span').removeClass('active-span')
                $('.active-menu-2').addClass('active-span')

            } else if ($(this).scrollTop() > newsAnchor.top && $(this).scrollTop() <= mapAnchor.top){
                $('li span').removeClass('active-span')
                $('.active-menu-3').addClass('active-span')

            } else if ($(this).scrollTop() > mapAnchor.top ){
                $('li span').removeClass('active-span')
                $('.active-menu-4').addClass('active-span')
            }
        });
    });
}
