// $(document).ready(function () {
//     $(window).on('load scroll', function () {
//         var scrolled = $(this).scrollTop();
//         $('.navbar').css({
//             // 'transform': 'translate3d(0, ' + -(scrolled * 0.2) + 'px, 0)', // parallax (20% scroll rate)
//             'opacity': 1 - scrolled / 400 // fade out at 400px from top
//         });
//         $('#main-video').css('transform', 'translate3d(0, ' + -(scrolled * 0.25) + 'px, 0)'); // parallax (25% scroll rate)
//     });

// video controls
// $('#state').on('click', function () {
//     var video = $('#hero-vid').get(0);
//     var icons = $('#state > span');
//     $('#overlay').toggleClass('fade');
//     if (video.paused) {
//         video.play();
//         icons.removeClass('fa-play').addClass('fa-pause');
//     } else {
//         video.pause();
//         icons.removeClass('fa-pause').addClass('fa-play');
//     }
// });
// });

//carousel of projects functions 
$('.carousel.carousel-multi-item.v-2 .carousel-item').each(function () {
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < 4; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
    }
});

