$( document ).ready(function() {

$('.slider-1-container').owlCarousel({
    loop:true,
    nav:true,
    pagination:true,
    items:1,
    autoplay:true,
    autoplayTimeout:4500,

})

$('.slider-2-container').owlCarousel({
    loop:true,
    nav:false,
    pagination:false,
    dots: false,
    items:5,
    autoplay:false,
    margin:30,
})

function pop_up(){
    $('.certificate-slide').click(function(){
        $('.certificate-slide-pop-up').attr('src',$(this).attr('src'));
        $('.certificate-slide-pop-up').attr('alt',$(this).attr('alt'));
        $('.gallery-pop-up').show();
        $('.gallery-window-wrapper').css("height" , $('.certificate-slide-pop-up').height() + 10 );
    })

    $('.gallery-close , .gallery-shadow').click(function(){
        $('.gallery-pop-up').hide();
    })
}

pop_up();

});
