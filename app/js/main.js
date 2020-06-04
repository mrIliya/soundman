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

	$('.goods__inner .tab').on('click', function (e) {
		let id = $(this).attr('data-id');

		$('.goods__inner').find('.goods__content').removeClass('current-tab').hide();
		$('.goods__inner ').find('.tab').removeClass('active');
		$(this).addClass('active');

		$('#' + id).addClass('current-tab').fadeIn();
		return false;
	})
	/* ----------------------------------------------------Info Tabs */

	$('.info__content .tab').on('click', function (e) {
		let id = $(this).attr('data-tab');

		$('.info__content').find('.info-item').removeClass('active-tab').hide();
		$('.info__content ').find('.tab').removeClass('active');
		$(this).addClass('active');

		$('#' + id).addClass('active-tab').fadeIn();
		return false;
	});

	/* ----------------------------------------------------Product-card Tabs */

	$('.descr__inner .descr__tab').on('click', function (e) {
		let id = $(this).attr('data-name');

		$('.descr__inner').find('.descr__item').removeClass('active-tab').hide();
		$('.descr__inner .descr__tabs').find('.descr__tab').removeClass('active');
		$(this).addClass('active');

		$('#' + id).addClass('active-tab').fadeIn();
		return false;
	});

	/* ----------------------------------------------------Input Number */

	window.inputNumber = function (el) {

		let min = el.attr('min') || false;
		let max = el.attr('max') || false;

		let els = {};

		els.dec = el.prev();
		els.inc = el.next();

		el.each(function () {
			init($(this));
		});

		function init(el) {

			els.dec.on('click', decrement);
			els.inc.on('click', increment);

			function decrement() {
				let value = el[0].value;
				value--;
				if (!min || value >= min) {
					el[0].value = value;
				}
			}

			function increment() {
				let value = el[0].value;
				value++;
				if (!max || value <= max) {
					el[0].value = value++;
				}
			}
		}
	}

	inputNumber($('.input-number'));

	/* ----------------------------------------------------aside-type */

	$('.catalog-aside__item .catalog-aside__type').on('click', function (e) {
		e.preventDefault();

		$(this).toggleClass('active');
		
	});


	/* ----------------------------------------------------Rangeslider */

	let $range = $(".js-range-slider"),
		$inputFrom = $(".js-input-from"),
		$inputTo = $(".js-input-to"),
		instance,
		min = 0,
		from = 0,
		to = 0;

	$range.ionRangeSlider({
		type: "double",
		show_min_max: false,
		show_from_to: false,
		min: 0,
		max: 11000,
		from: 500,
		to: 11000,
		grid: false,
		onStart: updateInputs,
		onChange: updateInputs
	});
	instance = $range.data("ionRangeSlider");

	function updateInputs(data) {
		from = data.from;
		to = data.to;

		$inputFrom.prop("value", from);
		$inputTo.prop("value", to);
	}

	$inputFrom.on("input", function () {
		let val = $(this).prop("value");

		// validate
		if (val < min) {
			val = min;
		} else if (val > to) {
			val = to;
		}

		instance.update({
			from: val
		});
	});

});

