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

	$('.tab-wrapper .tab').on('click', function (event) {
		var id = $(this).attr('data-id');

		$('.tab-wrapper').find('.tab-content').removeClass('active-tab').hide();
		$('.tab-wrapper .tabs').find('.tab').removeClass('active');
		$(this).addClass('active');

		$('#' + id).addClass('active-tab').fadeIn();
		return false;
	});

});