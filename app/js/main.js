
/* ----------------------------------------------------menu-button -----> */

const menuDesktopBtn = document.querySelector('.menu-desktop__btn');
const menuDesktop = document.querySelector('.menu-desktop');

menuDesktopBtn.addEventListener('click', () => {
	menuDesktopBtn.classList.toggle('active');
	menuDesktop.classList.toggle('active');
})

/* ------------------------------------------------   <----menu-button */

/* ----------------------------------------------------Goods Tabs ---->*/

const goodsFilterBtn = document.querySelectorAll('.goods-filter__btn');

goodsFilterBtn.forEach((element) => {

	element.addEventListener('click', () => {

		goodsFilterBtn.forEach((element) => {
			element.classList.remove('active');
		})

		element.classList.add('active');

		const data = element.getAttribute('data-id');
		const goodsContent = document.querySelectorAll('.goods__content');

		for (let i = 0; i < goodsContent.length; i++) {
			goodsContent[i].classList.remove('current-tab');
		}

		document.querySelector(`.goods__content[data-id="${data}"]`).classList.add('current-tab');

	})
})

/* -----------------------------------------------   <-----Goods Tabs */


/* ----------------------------------------------------Info Tabs  -----> */

const infoBtn = document.querySelectorAll('.info__btn');

infoBtn.forEach((element) => {

	element.addEventListener('click', () => {

		infoBtn.forEach((element) => {
			element.classList.remove('active');
		})

		element.classList.add('active');

		const data = element.getAttribute('data-tab');
		const infoItem = document.querySelectorAll('.info-item');

		for (let i = 0; i < infoItem.length; i++) {
			infoItem[i].classList.remove('active-tab');
		}

		document.querySelector(`.info-item[data-tab="${data}"]`).classList.add('active-tab');

	})
})

/* ----------------------------------------------------   <-----Info Tabs */

/* ---------------------------------------------------  Product-card Tabs -----> */

const descrTab = document.querySelectorAll('.descr__tab');

descrTab.forEach((element) => {

	element.addEventListener('click', () => {

		descrTab.forEach((element) => {
			element.classList.remove('active');
		})

		element.classList.add('active');

		const data = element.getAttribute('data-name');
		const descrItem = document.querySelectorAll('.descr__item');

		for (let i = 0; i < descrItem.length; i++) {
			descrItem[i].classList.remove('active-tab');
		}

		document.querySelector(`.descr__item[data-name="${data}"]`).classList.add('active-tab');

	})
})


/* ---------------------------------------------------  <----- Product-card Tabs  */



/* ---------------------------------------------------- tabs-mobile  -----> */


const infoBtnMobile= document.querySelectorAll('.info__btn-mobile');

/* infoBtnMobile.forEach((element) => {

	element.addEventListener('click', () => {

		infoBtnMobile.forEach((element) => {
			element.classList.remove('active');
		})

		element.classList.add('active');

		const data = element.getAttribute('data-class');
		const descrItem = document.querySelectorAll('.descr__item');

		for (let i = 0; i < descrItem.length; i++) {
			descrItem[i].classList.remove('active-tab');
		}

		document.querySelector(`.descr__item[data-class="${data}"]`).classList.add('active-tab');

	})
}) */

	$('.info-item__mobile').hide();

	$('.info__btn-mobile').on('click', function (e) {
		e.preventDefault();
		let id = $(this).attr('data-class');

		$(this).toggleClass('active');

		$('#' + id).slideToggle('600');
		return false;

	});

	/* ----------------------------------------------------  <-----  tabs-mobile */



/* ----------------------------------------------------  aside -----> */

const catalogAsideTitle = document.querySelector('.catalog-aside__title');
const catalogAsideItem = document.querySelectorAll('.catalog-aside__item');
const catalogAsideBtn = document.querySelector('.catalog-aside__btn');

/* --------------Show/hide filter */


if (catalogAsideTitle) {
	catalogAsideTitle.addEventListener('click', () => {

		catalogAsideTitle.classList.toggle('catalog-aside__title--active');

		catalogAsideBtn.classList.toggle('catalog-aside__btn--active');

		catalogAsideItem.forEach((item) => {
			item.classList.toggle('catalog-aside__item--active');
			item.classList.remove('catalog-aside__item--hide');
		})

	})
}

/* --------------Show/hide each item */

if (catalogAsideItem) {
	catalogAsideItem.forEach((item) => {
		item.addEventListener('click', (e) => {
			if (e.target.classList.contains('catalog-aside__type')) {
				item.classList.toggle('catalog-aside__item--hide');
				e.target.classList.toggle('catalog-aside__type--hide');	
				e.target.nextElementSibling.classList.toggle('catalog-aside__content--hide');
			}
		})
	})
}

/* ---------------------------------------------------- <-----aside */



$(function () {

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

})
/* ----------------------------------------------------modal window and form --> */

const modal = document.querySelector('.modal');
const closeBtn = document.querySelectorAll('.login-form__button');
const form = document.querySelector('.login-form');
const formSignIn = document.querySelector('.signin-form');
const btnLogin = document.querySelector('#modal-open');
const html = document.documentElement;
const scrollPosition = window.pageYOffset;
const goToLogin = document.querySelector('#go-to-login');
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

	closeBtn.forEach((element) => {
		element.addEventListener('click', () => {
			closeModal();
		})
	})

	modal.addEventListener('click', () => {
		closeModal();
	})

	html.style.top = "";
	html.classList.remove("modal__opened");

	form.reset();

	form.style.display = 'block';
	formSignIn.style.visibility = 'hidden';

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

const signUp = () => {

	let name = document.querySelector('#name');
	let email = document.querySelector('#email');
	let tel = document.querySelector('#tel');
	let password = document.querySelector('#password');
	let sex = document.querySelectorAll('#sex');

	for (let i = 0; i < sex.length; i++) {
		if (sex[i].cheked) {
			sex = sex[i].value;
			break;
		}
	}

	let data = {
		'name': name,
		'email': email,
		'tel': tel,
		'password': password,
		'sex': sex
	}

	ajax('core/signup.php', 'post', login, data)


	function login(result) {


		if (result == 2) {
			alert('Заполните поля');
			console.log(result);
		}
	}
}

sendForm.addEventListener('click', (e) => {
	signUp();
})

form.addEventListener('click', (e) => {
	e.stopPropagation();
})

formSignIn.addEventListener('click', (e) => {
	e.stopPropagation();
})

goToLogin.addEventListener('click', () => {
	form.style.display = 'none';
	formSignIn.style.visibility = 'visible';
})

backButton.addEventListener('click', () => {
	form.style.display = 'block';
	formSignIn.style.visibility = 'hidden';
})


closeModal();
showModal();

/* ----------------------------------------------------modal window and form <-- */


AOS.init({
	once: true,
	disable: 'tablet'
});


