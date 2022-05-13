$(function() {
    $('.design-slider').slick({
        dots:false,
        slidesToShow: 4,
        variableWidth:true,
        prevArrow: '<img src="../img/arrow-left.svg" class="arrow arrow-left" alt="">',
        nextArrow: '<img src="../img/arrow-right.svg" class="arrow arrow-right" alt="">',
        responsive: [
            {
                breakpoint: 361,
                settings: {
                    variableWidth:false,
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });
});
