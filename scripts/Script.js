$(document).ready(function(){

    //SMOOTH SCROLL
    $('.menu li a[href^="#"]').on('click', function(e){
        e.preventDefault();

        var target = $(this.hash);

        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top -60
            }, 1000);
        }
    });
});