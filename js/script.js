'use strict';
$(function () {
    let owl1 = $("#slider").owlCarousel({
        loop: true,
        nav: false,
        margin: 10,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }

    });
    $(document).ready(function () {
        owl1.owlCarousel();
    });

    $('.carousel__btn-right').click(function () {
        owl1.trigger('next.owl.carousel');
    });
    $('.carousel__btn-left').click(function () {
        owl1.trigger('prev.owl.carousel', [300]);
    });
});

$(function () {
    $('.testimonials-card__img').height($('.testimonials-card').width());
    $('.price-card__img').height($('.price-card').width());

    $(window).resize(function () {

        $('.testimonials-card__img').height($('.testimonials-card').width());
        $('.price-card__img').height($('.price-card').width());
    });
});


$('.mobile_btn').click(function () {
    $(this).toggleClass('active');
    $('.nav').toggleClass('show');
    $('body').toggleClass('fixed-page');
});

$('.btn-up').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 100);
});
