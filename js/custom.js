var wow = new WOW({
	boxClass: 'wow',
	animateClass: 'animated',
	offset: 200,
	mobile: true,
	live: true
});
wow.init();

var is_reload = false;

$(document).ready(function(){
    var header_sticky=$(".header")
    $(window).scroll(function(){
        $(this).scrollTop()>5?header_sticky.addClass("bg-header"):header_sticky.removeClass("bg-header");
    })

    // $( window ).on( "load", function() {
    //     (header_sticky.offset().top >5) ? header_sticky.addClass("bg-header"):header_sticky.removeClass("bg-header")
    // });

	
		
	if ($(window).width() <= 992) {
		$('.project-slider').slick();
	}

	$(window).resize(function() {
		if ($(window).width() <= 992) {
			$('.project-slider').slick({
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				dots: true,
				infinite: true,
				autoplay: true,
				autoplaySpeed: 2000,
			});
		} else {
			$('.project-slider').slick('unslick');
		}
	})

});
