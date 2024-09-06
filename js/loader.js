$(window).on("load", function () {
    AOS.init();
    setTimeout(removeLoader, 1e3), setInterval(function e() {
        $("#load-text").fadeOut(500).fadeIn(500)
    }, 250)
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('#back-to-top').fadeIn();
        $('#navbar').css('opacity', '0.9');
    } else {
        $('#back-to-top').fadeOut();
        $('#navbar').css('opacity', '1');
    }
});
// scroll body to 0px on click
$('#back-to-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 400);
    return false;
});

function removeLoader() {
    $(".preloader").fadeOut(500, function () {
        $(".preloader").remove()
    })
}