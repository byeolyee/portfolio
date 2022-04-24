$(function () {
    // slick slider - welcome
    $('.slideshow').slick({
        infinite: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        speed: 1000,
        pauseOnHover: false
    })

    //type it - welcome
    $('#typing').typeIt({
        strings: [
            '#consistency',
            '#flexibility',
            '#scalability',
        ],
        speed: 100,
        autoStart: true,
        breakLines: false,
    });
})