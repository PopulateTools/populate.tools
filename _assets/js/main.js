//= require vendor/jquery-3.1.1.min.js
//= require vendor/jquery.waypoints.min.js
//= require vendor/sticky.min.js
//= require vendor/jquery.magnific-popup.min.js
//= require vendor/packery.pkgd.min.js
//= require vendor/imagesloaded.pkgd.min.js

$(document).ready(function() {
  /* Smooth scroll to anchor */
  $(function() {
    $('.header a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 100
          }, 300);
          return false;
        }
      }
    });
  });
  
  /* Stick header */
  var sticky = new Waypoint.Sticky({
    element: $('.section_home .header')[0]
  });

	$('.project-gallery').magnificPopup({
		type: 'inline',
    delegate: 'a',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});
  
  /* Build project grid */
  var $grid = $('.project-gallery').imagesLoaded(function() {
    $grid.packery({
      // options
      itemSelector: '.project',
      gutter: 0,
      percentPosition: true
    });
  });
});

