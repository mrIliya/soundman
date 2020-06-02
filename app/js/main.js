$(function () {

	$(".owl-carousel").owlCarousel({

		items: 1,
		dots: true,
		lazyLoad: true,
		autoplay: true,
		autoplayTimeout: 4000,
		smartSpeed: 1000,
		loop: true

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

});