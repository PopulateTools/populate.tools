//= require vendor/jquery-3.1.1.min.js
//= require vendor/jquery.waypoints.min.js
//= require vendor/sticky.min.js
//= require vendor/packery.pkgd.min.js
//= require vendor/imagesloaded.pkgd.min.js
//= require vendor/blazy.min.js
//= require vendor/slick.min.js
//= require vendor/contents.js
//= require vendor/ScrollMagic.min.js
//= require vendor/TweenMax.min.js
//= require vendor/ScrollMagic/animation.gsap.min.js

//= require populate-data-browser.js


$(document).ready(function() {

  /* Lazyload */
  var bLazy = new Blazy({
    selector: '.lazy',
    successClass: 'loaded'
  });

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


  // Toggler
  // <a href="" class="toggle-target" data-target="id_element_to_toggle">
  $(document).on('click', '.toggle-target', function (e) {
    e.preventDefault();
    $(this).toggleClass("is-toggled");
    $("#" + $(this).data('target')).toggle();
    return false;
  });

});
