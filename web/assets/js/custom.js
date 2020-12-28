// Tab with url
$(function(){
    var hash = window.location.hash;
    hash && $('ul.nav a[href="' + hash + '"]').tab('show');
    $('.nav-tabs a').click(function (e) {
        $(this).tab('show');
        var scrollmem = $('body').scrollTop() || $('html').scrollTop();
        window.location.hash = this.hash;
        $('html,body').scrollTop(scrollmem);
    });
});

$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
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

    $('input[type="tel"]').mask('0000-000000');
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
            991: {
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

    $('#carousel-kv').carousel({
        interval: 3000
    });
    $(".carousel").swiperight(function() {
        $(".carousel").carousel('prev');
    });
    $(".carousel").swipeleft(function() {
        $(".carousel").carousel('next');
    });
});

var delay = 0;
var offset = 150;

document.addEventListener('invalid', function(e){
   $(e.target).addClass("invalid");
   $('html, body').animate({scrollTop: $($(".invalid")[0]).offset().top - offset }, delay);
}, true);
document.addEventListener('change', function(e){
   $(e.target).removeClass("invalid")
}, true);
