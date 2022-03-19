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
  //   var header_sticky=$(".header")
  //   $(window).scroll(function(){
  //       $(this).scrollTop()>5?header_sticky.addClass("bg-header"):header_sticky.removeClass("bg-header");
  //   })

  //   // $( window ).on( "load", function() {
  //   //     (header_sticky.offset().top >5) ? header_sticky.addClass("bg-header"):header_sticky.removeClass("bg-header")
  //   // });

  //   $('.menu-tab > ul > li').click(function() {
	// 	$('.menu-tab > ul > li').removeClass('active');
	// 	$(this).addClass('active');
	// 	var $inDex = $(this).index() + 1;
	// 	$('.content-tab > .tab').removeClass('active');
	// 	$('.content-tab > .tab:nth-child('+$inDex+')').addClass('active');
	// });

    // $('.el_dev__menu > ul  li').click(function() {
	// 	$('.el_dev__menu > ul  li').removeClass('active');
	// 	$(this).addClass('active');
	// 	var $inDex = $(this).index() + 1;
	// 	$('.el_dev__content > .tab').removeClass('active');
	// 	$('.el_dev__content > .tab:nth-child('+$inDex+')').addClass('active');
	// });

	// $('.el_dev__slide').slick({
	// 	infinite: true,
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
    //     centerPadding: '60px',
	//   });
});
