$('.slider__body').slick({
	//Включение/выключение стрелок
	arrows: true,
	//Плагинация
	dots: false,

	//Колличество слайдев на экране
	slidesToShow: 3,
	//Колличество слайдев пролистывания
	slidesToScroll: 1,


	variableWidth: false,
	//Автоматическая адаптивная
	//высота слайдера
	// adaptiveHeight: true,

	//Бесконечный слайдер
	infinite: false,
	//Скорость листания
	// speed: 100,
	//Автопроигрывание и скорость 
	// autoplay: false,
	// autoplaySpeed: 3000, //по умолчанию 3000


	//Свайп на ПК
	// draggable: true,
	//Свайп на телефоне
	// swipe: false,
	//Моммет срабатывания слайда
	// touchThreshold: 5, //по умолчанию 5
	//Отключение передвижения слайда
	// touchMove: true,

	//Брекпоинты
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 520,
			settings: {
				slidesToShow: 1,
			}
		}
	],
	// mobileFirst: false,

	//Перемещение стрелок
	// appendArrows: $('.reviews__bottom'),
	// appendDots:$('.arrow'),

});


// new Swiper('.swiper', {
// 	direction: 'horizontal', //Горизонильная прокрутка 'vertical'
// 	loop: true,
// 	slidesPerView: 1, //показывать по 3 превью
// 	slidesPerGroup: 1,
// 	spaceBetween: 10, // расстояние между слайдами
// 	mousewheel: false, // можно прокручивать изображения колёсиком мыши

// 	// Navigation arrows
// 	navigation: {
// 		nextEl: '.btn-next',
// 		prevEl: '.btn-prev',
// 	},

// 	//Перетаскивания на ПК
// 	simulateTouch: false,
// 	//Переключение при клике на слайд
// 	slideToClickedSlide: false,


// 	//Чувствительность свайпа
// 	touchRatio: 1,
// 	//Угол срабатывания свайпа/перетаскивания
// 	touchAngle: 45,
// 	//Курсор перетаскивания
// 	grabCursor: true, // менять иконку курсора

// 	//Управление клавиатурой
// 	keyboard: {
// 		//Включить\выключить
// 		enabled: false,
// 		onlyInViewport: true,
// 		//PageUp, pageDown
// 		pageUpDown: true,
// 	},
// 	// Управление колесом  мыши
// 	// mousewheel: {
// 	// 	//Чувсвительнсость колеса мыши
// 	// 	sensitivity: 1,
// 	// },

// 	//Автовысота
// 	autoHeight: false,
// 	breakpoints:{
// 		700:{
// 			spaceBetween: 20,
// 			slidesPerView: 2,
// 		},
// 	},
// });





// import axios from 'axios';

// const TOKEN = "6903192753:AAEWQY42KLLzNGPK9chwRdpZv4kBEkoOo0Q"
// const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`
// const CHAT_ID ='-1001808238895'
// const success = document.getElementById('success');
// document.getElementById('tg').addEventListener('submit',function(e){
// 	e.preventDefault();

// 	let message = `<b>Заявка с сайта</b>\n`;
// 	message += `<b> Отправитель: </b>${this.name.value}\n`;
// 	message += `<b> Телефон: </b>${this.tel.value}\n`;
// 	message += `<b> Почта: </b>${this.email.value}`;

// 	axios.post(URI_API, {
// 		chat_id: CHAT_ID,
// 		parse_mode: 'html',
// 		text: message
// 	})
// 	.then((res) =>{
// 		this.name.value =""
// 		this.tel.value =""
// 		this.email.value =""
// 		success.style.display = "block";
// 	})
// 	.catch((err) =>{
// 		console.warn(err)
// 	})
// })