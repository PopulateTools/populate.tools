//= require vendor/jquery-3.1.1.min.js
//= require vendor/jquery.waypoints.min.js
//= require vendor/sticky.min.js
//= require vendor/jquery.magnific-popup.min.js
//= require vendor/packery.pkgd.min.js
//= require vendor/imagesloaded.pkgd.min.js
//= require vendor/blazy.min.js
//= require vendor/slick.min.js
//= require vendor/contents.js

$(document).ready(function() {

  /* Lazyload */
  var bLazy = new Blazy({
    selector: '.lazy',
    successClass: 'loaded'
  });

  /* Stick header
  if ($('.header').length > 0) {
    var sticky = new Waypoint.Sticky({
      element: $('.header')[0]
    });
  }
  */

  if ($('.toc').length > 0) {
    var sticky = new Waypoint.Sticky({
      element: $('.toc')[0]
    });
  }

  /* Menu */
  $(".hamburger-container").click(function() {
    $("#menu").slideToggle();
  });

  $("#menu a").click(function() {
    $("#menu").slideToggle();
    openCloseHam();
  });

  //to fix issue that toggle adds style(hides) to nav
  $(window).resize(function() {
    if (window.innerWidth > 1024) {
      $("#menu").removeAttr("style");
    }
  });

  //icon animation
  var topBar = $(".hamburger li:nth-child(1)"),
    middleBar = $(".hamburger li:nth-child(2)"),
    bottomBar = $(".hamburger li:nth-child(3)");

  function openCloseHam() {
    if (middleBar.hasClass("rot-45deg")) {
      topBar.removeClass("rot45deg");
      middleBar.removeClass("rot-45deg");
      bottomBar.removeClass("hidden");
    } else {
      bottomBar.addClass("hidden");
      topBar.addClass("rot45deg");
      middleBar.addClass("rot-45deg");
    }
  }
  $(".hamburger-container").on("click", function() {
    openCloseHam();
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

  // autocaptions for article images
  $('article img.caption').after(function() {
    if($(this).attr('title') !== undefined && $(this).attr('title').length > 0) {

      var classesToAdd = '';
      if($(this).hasClass('inline')) {
        classesToAdd += ' inline ';
      }
      if($(this).hasClass('f_right')) {
        classesToAdd += ' f_right ';
      }
      if($(this).hasClass('f_left')) {
        classesToAdd += ' f_left ';
      }

      $(this).wrap('<div class="image ' + classesToAdd + ' "></div>');
      $(this).after('<caption>' + $(this).attr('title') + '</caption></div>');
    }
  });

  // TOC generator

  var tocPresent = document.getElementsByClassName("toc");
  if ((tocPresent).length > 0) {

    var link,
        contents;

    link = function (guide, article) {
        var guideLink,
            anchor,
            articleAnchor,
            articleName,
            articleId;

        guide = $(guide);
        article = $(article);

        guideLink = $('<a>'),
        anchor = $('<hr>'),
        articleAnchor = article.find('h1'),
        articleName = articleAnchor.text(),
        articleId = gajus.contents.id(articleName);

        anchor
            .attr('id', articleId)
            .insertBefore(article);

        guideLink
            .text(articleName)
            .attr('href', '#' + articleId)
            .prependTo(guide);
    };

    contents = gajus
        .contents({
            contents: $('.toc')[0],
            articles: document.querySelectorAll('main.content h1, main.content h2, main.content h3, main.content h4')
        });

    contents.eventProxy.on('ready', function () {
        // $('a').smoothScroll();

    })
    contents.eventProxy.on('change', function (data) {
        if (data.previous) {
            $(data.previous.guide)
                .removeClass('active')
                .parents('li')
                .removeClass('active-child');
        }

        $(data.current.guide)
            .addClass('active')
            .parents('li')
            .addClass('active-child');
    });
  }

  $('.img-slide').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
  });


  $('.mobile_menu_handler').click(

  );


  // Populate Data Browser
  // ToDo: Extract this code to its own files/repository

  $(".pdb_data_list_series a").click(function(e) {
    e.preventDefault();

    $('.pdb_dataset_series').removeClass('slide-out-left');
    $('.p_data_browser').removeClass('slide-in-left');

    $('.p_data_browser').addClass('slide-out-left');
    $('.pdb_dataset_series').addClass('slide-in-left');
  });

  $('.back_to_browse').click(function(e) {
    e.preventDefault();
    $('.p_data_browser').removeClass('slide-out-left');
    $('.pdb_dataset_series').removeClass('slide-in-left');

    $('.pdb_dataset_series').addClass('slide-out-left');
    $('.p_data_browser').addClass('slide-in-left');
  });


});
