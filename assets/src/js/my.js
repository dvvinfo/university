$(document).ready(function(){
    $('.slider').slick(
        {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            adaptiveHeight: true,
            prevArrow: '<div class="slider-arrow-left"></div>',
            nextArrow: '<div class="slider-arrow-right"></div>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        }
    );
});
$(window).load(function() {
    $('.slider-item').on('setPosition', function () {
        $(this).find('.slider-item').height('auto');
        var slickTrack = $(this).find('.slider-item');
        var slickTrackHeight = $(slickTrack).height();
        $(this).find('.slider-item').css('height', slickTrackHeight + 'px');
    });
});
