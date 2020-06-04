$(function(){
//    $('.anchor').click(function(){
//		$('html, body').animate({
//        scrollTop: $( $.attr(this, 'href') ).offset().top - 80}, 750);
//		return false;
//	});
    // grab target from URL hash (i.e. www.mysite.com/page-a.html#target-name)
});

// Videos
autoPlayYouTubeModal();

  //FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
  function autoPlayYouTubeModal() {
      var trigger = $("body").find('[data-toggle="modal"]');
      trigger.click(function () {
          var theModal = $(this).data("target"),
              videoSRC = $(this).attr("data-theVideo"),
              videoSRCauto = videoSRC + "?autoplay=1";
          $(theModal + ' iframe').attr('src', videoSRCauto);
          $(theModal + ' button.close').click(function () {
              $(theModal + ' iframe').attr('src', videoSRC);
          });
      });
  }

$(document).ready(function(){
    $('.modal').each(function(){
        var src = $(this).find('iframe').attr('src');
        $(this).on('click', function(){
            $(this).find('iframe').attr('src', '');
            $(this).find('iframe').attr('src', src);
        });
    });
});


jQuery(document).ready(function($) {

    $('.anchor').click(function(){
		$('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 100}, 750);
		return false;
	});

    $('#header').hcSticky({
        stickTo: 'body'
    });

    var Sticky = new hcSticky('.sidebar', {
        stickTo: '.content',
        innerTop: -150,
        queries: {
            980: {
                disable: true
            }
        }
    });

    var header = $("#header");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 150) {
            header.addClass("active");
        } else {
            header.removeClass("active");
        }
    });

    $(".input-number").TouchSpin({
        min: 0,
        max: 99,
        step: 1,
        decimals: 0,
        boostat: 5,
        maxboostedstep: 10,
        buttonup_class: 'btn btn-outline-secondary btn-number-up',
        buttondown_class: 'btn btn-outline-secondary btn-number-down'
    });

    // Select company
    $('.box-select').click(function() {
        var index = $(this).index();
        if($(this).hasClass('active')) {
        } else {
            $('.box-select').removeClass('active');
            $(this).addClass('active')
        }
    });
    $(".chk").on('click', function() {
      var $box = $(this);
      if ($box.is(":checked")) {
        var group = "input:checkbox[name='" + $box.attr("name") + "']";
        $(group).prop("checked", false);
        $box.prop("checked", true);
      } else {
        $box.prop("checked", false);
      }
    });


    $(".btn-remove-row").on('click', function () {
        var here = this;
        $(this).closest('tr').find('td').fadeOut('fast', function(here){
            $(here).parents('tr:first').remove();
        });
        return false;
    });




    $('.slider-kv').slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
//      speed: 300,
    });
    $('.slider-products').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 425,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

//    var hash= window.location.hash
//if ( hash == '' || hash == '#' || hash == undefined ) return false;
//      var target = $(hash);
//      headerHeight = 120;
//      target = target.length ? target : $('[name=' + hash.slice(1) +']');
//      if (target.length) {
//        $('html,body').stop().animate({
//          scrollTop: target.offset().top - 125 //offsets for fixed header
//        }, 'linear');
//      }
});

jQuery(document).ready(function(){
// run on DOM ready
// grab target from URL hash (i.e. www.example.com/page-a.html#target-name)

var target = window.location.hash;

// only try to scroll to offset if target has been set in location hash

if ( target != '' ){
    var $target = jQuery(target);
    jQuery('html, body').stop().animate({
    'scrollTop': $target.offset().top + 240}, // set offset value here i.e. 50
    500,
    'swing',function () {
    window.location.hash = target + 240 ;
    });
}
});
