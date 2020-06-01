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

	$('.goods__inner .goods-filter__btn').on('click', function(event) {
		var id = $(this).attr('data-id');
			$('.goods__inner').find('.goods__content').removeClass('active-tab').hide();
			$('.goods__inner ').find('.goods-filter__btn').removeClass('active');
			$(this).addClass('active');
			$('#'+id).addClass('active-tab').fadeIn();
			return false;
		});

});