//= require vendor/jquery-3.1.1.min.js
//= require vendor/jquery.waypoints.min.js
//= require vendor/sticky.min.js
//= require vendor/jquery.magnific-popup.min.js
//= require vendor/packery.pkgd.min.js
//= require vendor/imagesloaded.pkgd.min.js
//= require vendor/blazy.min.js

$(document).ready(function() {
  /* Smooth scroll to anchor */
  $(function() {
    $('.desktop-menu a[href*="#"]:not([href="#"])').click(function() {
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
  
  /* Lazyload */
  var bLazy = new Blazy({
    selector: '.lazy',
    successClass: 'loaded'
  });
  
  /* Stick header */
  if ($('.section_home .header').length > 0) {
    var sticky = new Waypoint.Sticky({
      element: $('.section_home .header')[0]
    });
  }
  
  /* Mobile menu */
  $('.open_mobile_menu').magnificPopup({
    type: 'inline',
    removalDelay: 300,
    mainClass: 'mobile_menu',
    fixedContentPos: true
  });
  
  $('.mobile-link').click(function(e) {
    $.magnificPopup.close();
  });
  
  /* Build project grid */
  var $grid = $('.project-gallery').imagesLoaded(function() {
    $grid.packery({
      // options
      itemSelector: '.project',
      gutter: 5,
      percentPosition: true
    });
  });

  /* Project gallery popup */
	$('.project-gallery').magnificPopup({
		type: 'inline',
    delegate: '.project',

		fixedContentPos: 'auto',
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in',
    gallery: {
      enabled: true
    },
	});
});

