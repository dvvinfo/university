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
                    breakpoint: 1040,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }

            ]
        }
    );
});
var block = document.querySelector('#notification');
var button= document.querySelector('#notification-close');
button.onclick = function() {
    if (block.style.display === 'none') {
        block.style.display = 'block';
    } else {
        block.style.display = 'none';
    }

    return;
};
