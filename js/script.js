$(document).ready(function(){
    $('#slick_img').slick({
        asNavFor: '#work_step',
    });
    $('#work_step').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '#slick_img',
        arrows: false
      });
    new WOW().init();
})
