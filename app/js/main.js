$(function () {

	$(".slider").owlCarousel({

		items: 1,
		dots: true,
		lazyLoad: true,
		autoplay: true,
		autoplayTimeout: 4000,
		smartSpeed: 1000,
		loop: true

	});

	$(".product-slider").owlCarousel({

		items: 1,
		dots: true,
		lazyLoad: true,
		smartSpeed: 400,
		loop: true,
		dotClass: 'product-slider__dots',
		animateOut: 'fadeOut'

	});


	/* ----------------------------------------------------Goods Tabs */

	$('.goods__inner .tab').on('click', function (event) {
		var id = $(this).attr('data-id');

		$('.goods__inner').find('.goods__content').removeClass('current-tab').hide();
		$('.goods__inner ').find('.tab').removeClass('active');
		$(this).addClass('active');

		$('#' + id).addClass('current-tab').fadeIn();
		return false;
	});


	/* ----------------------------------------------------Info Tabs */

	$('.info__content .tab').on('click', function (event) {
		var id = $(this).attr('data-id');

		$('.info__content').find('.tab-content').removeClass('active-tab').hide();
		$('.info__content ').find('.tab').removeClass('active');
		$(this).addClass('active');

		$('#' + id).addClass('active-tab').fadeIn();
		return false;
	});

	/* ----------------------------------------------------Input Number */

	window.inputNumber = function(el) {

		var min = el.attr('min') || false;
		var max = el.attr('max') || false;
  
		var els = {};
  
		els.dec = el.prev();
		els.inc = el.next();
  
		el.each(function() {
		  init($(this));
		});
  
		function init(el) {
  
		  els.dec.on('click', decrement);
		  els.inc.on('click', increment);
  
		  function decrement() {
			 var value = el[0].value;
			 value--;
			 if(!min || value >= min) {
				el[0].value = value;
			 }
		  }
  
		  function increment() {
			 var value = el[0].value;
			 value++;
			 if(!max || value <= max) {
				el[0].value = value++;
			 }
		  }
		}
	}

	inputNumber($('.input-number'));

});