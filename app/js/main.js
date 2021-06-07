$(function () {

	/* ----------------------------------------------------menu-button */

	$('.menu-desktop__btn').on('click', function () {
		$(this).toggleClass('active');
		$('.menu-desktop').toggleClass('active');
	});


	/* ---------------------------------------------------Slider */

	$(".slider").owlCarousel({

		items: 1,
		dots: true,
		lazyLoad: true,
		autoplay: true,
		autoplayTimeout: 4000,
		smartSpeed: 1000,
		loop: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1,
				autoplay: false
			},
			1000: {
				items: 1
			}
		}

	});

	$(".product-slider").owlCarousel({

		items: 1,
		dots: true,
		lazyLoad: true,
		smartSpeed: 400,
		loop: true,
		dotClass: 'product-slider__dots',
		animateOut: 'fadeOut',
		mouseDrag: false,

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


	$('.catalog-aside__type').on('click', function (e) {
		e.preventDefault();
		let id = $(this).attr('data-type');

		$(this).toggleClass('active');

		$('#' + id).slideToggle('600');
		return false;

	});

	/* ----------------------------------------------------aside-title */

	$('.catalog-aside__title').on('click', function (e) {
		e.preventDefault();


		$(this).toggleClass('active');

		$('.catalog-aside__item, .catalog-aside__btn').slideToggle('600');
		return false;

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
		from: 0,
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

	/* ----------------------------------------------------header-mobile */

	$('.header-mobile__btn').on('click', function () {
		$('.header-mobile__input').toggleClass('show');
	});


	/* ----------------------------------------------------header-fixed */

	$("[data-scroll]").on('click', function () {
		event.preventDefault();

		let elementId = $(this).data('scroll');

		let elementOffset = $(elementId).offset().top;


		$("html, body").animate({
			scrollTop: elementOffset

		}, 700
		);
	});

	let menu = $('.header-menu');
	let header = $('#top');
	let headerH = header.innerHeight();
	let scrollPos = $(window).scrollTop();

	$(window).on('scroll load resize', function () {
		headerH = header.innerHeight();
		scrollPos = $(this).scrollTop();

		if (scrollPos > headerH) {
			menu.addClass('fixed');

		} else { menu.removeClass('fixed'); }

	});


	/* ----------------------------------------------------tabs-mobile */

	$('.info-item__mobile').hide();

	$('.info__btn-mobile').on('click', function (e) {
		e.preventDefault();
		let id = $(this).attr('data-class');

		$(this).toggleClass('active');

		$('#' + id).slideToggle('600');
		return false;

	});

});

/* ----------------------------------------------------modal window and form --> */

const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.login-form__button');
const form = document.querySelector('.login-form');
const btnLogin = document.querySelector('#modal-open');
const html = document.documentElement;
const scrollPosition = window.pageYOffset;
const goToLogin = document.querySelector('#go-to-login');
const goToCabinet = document.querySelector('#go-to-cabinet');
const loginInput = document.querySelectorAll('.login-form__input');
const loginFormCheckbox = document.querySelector('.login-form__checkbox');
const userName = document.querySelector('#user-name');
const userPass = document.querySelector('#user-pass');
const loginFormBtn = document.querySelectorAll('.login-form__btn');
const backButton = document.querySelector('.back__button');
const sendForm = document.querySelector('#create-acc');

const closeModal = () => {
	modal.style.transform = 'scale(0)';
	modal.style.zIndex = '-1';

	document.onkeydown = (e) => {
		if (e.keyCode == 27) {
			closeModal();
		}

		document.onkeydown = null;
	}

	closeBtn.addEventListener('click', () => {
		closeModal();
	})

	modal.addEventListener('click', () => {
		closeModal();
	})

	html.style.top = "";
	html.classList.remove("modal__opened");

	if (changeInputs) {
		resetChanges();
	}

	form.reset();

}

const showModal = () => {
	if (closeModal) {
		btnLogin.addEventListener('click', (e) => {
			e.preventDefault();

			html.classList.add("modal__opened");

			modal.style.transform = 'scale(1)';
			modal.style.zIndex = '1000';

		})
	}
}

const changeInputs = () => {
	loginInput.forEach((e) => {
		e.style.display = 'none';
	});

	loginFormBtn.forEach((e) => {
		e.style.display = 'none';
	});

	loginFormCheckbox.style.display = 'none';
	userName.style.display = 'block';
	userPass.style.display = 'block';
	goToCabinet.style.display = 'block';

}


const resetChanges = () => {

	backButton.style.visibility = 'hidden';

	loginInput.forEach((e) => {
		e.style.display = 'block';
	});

	loginFormBtn.forEach((e) => {
		e.style.display = 'block';
	});

	loginFormCheckbox.style.display = '';
	userName.style.display = 'none';
	userPass.style.display = 'none';
	goToCabinet.style.display = 'none';
}

const serialize = (form) => {
	if (!form || form.nodeName !== "FORM") {
		return false;
	}
	let i, j, q = [];
	for (i = form.elements.length - 1; i >= 0; i = i - 1) {
		if (form.elements[i].name === "") {
			continue;
		}
		switch (form.elements[i].nodeName) {
			case 'INPUT':
				switch (form.elements[i].type) {
					case 'text':
					case 'tel':
					case 'email':
					case 'hidden':
					case 'password':
					case 'button':
					case 'reset':
					case 'submit':
						q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
						break;
					case 'checkbox':
					case 'radio':
						if (form.elements[i].checked) {
							q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
						}
						break;
				}
				break;
			case 'file':
				break;
			case 'TEXTAREA':
				q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
				break;
			case 'SELECT':
				switch (form.elements[i].type) {
					case 'select-one':
						q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
						break;
					case 'select-multiple':
						for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
							if (form.elements[i].options[j].selected) {
								q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].options[j].value));
							}
						}
						break;
				}
				break;
			case 'BUTTON':
				switch (form.elements[i].type) {
					case 'reset':
					case 'submit':
					case 'button':
						q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
						break;
				}
				break;
		}
	}
	return q.join("&");
}
if (!sendForm == null) {
	sendForm.addEventListener('click', (e) => {
		e.preventDefault();
		console.log(serialize(form));
	})
}


form.addEventListener('click', (e) => {
	e.stopPropagation();
})

goToLogin.addEventListener('click', () => {
	changeInputs();
	backButton.style.visibility = 'visible';
})

backButton.addEventListener('click', () => {
	resetChanges();

})


closeModal();
showModal();

/* ----------------------------------------------------modal window and form <-- */


AOS.init({
	once: true,
	disable: 'tablet'
});


