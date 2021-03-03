$(document).ready(function () {
    new WOW().init();
    $('.add').click(function () {
        if ($(this).prev().val() < 100) {
            $(this).prev().val(+$(this).prev().val() + 1);
        }
    });
    $('.sub').click(function () {
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
        }
    });
    $('.slide-blog').owlCarousel({
        loop: true,
        nav: false,
        margin: 10,
        items: 1,
        dots: true,
    });
});