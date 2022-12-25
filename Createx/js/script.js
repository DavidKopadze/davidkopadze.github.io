$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
$(document).ready(function() {
    $('.footer__spoiler-title').click(function(event) {
        if($('.footer__flex-1').hasClass('one')){
            $('.footer__spoiler-title').not($(this)).removeClass('active');
            $('.footer__spoiler-body').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});