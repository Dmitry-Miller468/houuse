import * as flsFunctions from "./modules/mobile-nav.js";
flsFunctions.ibg();
flsFunctions.mobileNav();
flsFunctions.menu();



// import * as flsSwiper from "./modules/swiper.js";
// import * as flsSlider from "./modules/slider.js";
// import * as poput from "./modules/popup.js";
// import * as flsSpoller from "./modules/spoller.js";
// flsSpoller.spollers();
// import * as flsSForm from "./modules/form.js";
// import * as flsCalendar from "./modules/calendar.js";


// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
export function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.swiper-testimonials')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
	new Swiper('.swiper-testimonials', {
			// Optional parameters
			direction: 'horizontal',
			// loop: true,
			speed: 800,
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			spaceBetween: 0,
			// autoHeight: true,
			spaceBetween: 40,
		
			// If we need pagination
			pagination: {
				el: '.navigation-swiper__pagination',
				clickable: true,
				type: 'fraction',
				renderFraction: function (currentClass, totalClass) {
					return `<span class="${currentClass}"></span>/<span class="${totalClass}"></span> People`;
				}
			},
		
			// And if we need scrollbar
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
		
			// Navigation arrows
			navigation: {
				nextEl: '.navigation-swiper__arrow-next',
				prevEl: '.navigation-swiper__arrow-prev',
			},
		
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				1000: {
					slidesPerView: 2,
				}
			}
		});
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// initSlidersMobile();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});



//=================================================================================================

//! Функцуя которая добавляет равную высоту всем сладйдерам

function updateSlidesHeight() {
	const slides = document.querySelectorAll('.swiper-testimonials__slide');
	let maxHeight = 0;
	 
	// Сброс предыдущей высоты, чтобы правильно измерить новую максимальную высоту
	slides.forEach(slide => {
	  slide.style.height = 'auto';
	});
 
	slides.forEach(slide => {
	  const slideHeight = slide.offsetHeight;
	  if (slideHeight > maxHeight) {
		 maxHeight = slideHeight;
	  }
	});
	 
	slides.forEach(slide => {
	  slide.style.height = `${maxHeight}px`;
	});
 }
 
 document.addEventListener('DOMContentLoaded', function() {
	setTimeout(updateSlidesHeight, 500); // Задержка в 500 мс
});
 // Добавление обработчика события resize для повторного вызова функции при изменении размеров окна
 window.addEventListener('resize', updateSlidesHeight);

 document.addEventListener('DOMContentLoaded', function() {
	setTimeout(updateSlidesHeight, 500); // Задержка в 500 мс
});

//=================================================================================================


//! Подключение карты Яндекс

let center = [25.076452052908355, 55.140598005023755];

function init() {
    let map = new ymaps.Map('map-test', {
        center: center,
        zoom: 16
    });
      
    // Сохраняем изначальный центр карты  
    const initialCenter = center.slice();
 
    // Проверяем, исходит ли запрос с мобильного устройства или планшета
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // Отключаем перетаскивание карты и зум на мобильных устройствах
        map.behaviors.disable(['drag', 'scrollZoom']);
    }
  
    map.events.add('boundschange', function (event) {
        // Проверяем, что это изменение масштаба, а не смещение центра  
        if (event.get('newZoom') !== event.get('oldZoom')) {
            // Устанавливаем центр карты обратно к изначальному после масштабирования
            map.setCenter(initialCenter);
        }
    });
  
    // Создаем метку
    let myPlacemark = new ymaps.Placemark(center, {
        // Текст описания для балуна
        balloonContent: 'Хочу в Дубай. Скучаю по тебе!!!',
        // Текст для хинта
        hintContent: 'Название места'
    }, {
        // Опции метки, например, выбор иконки  
        // preset: 'islands#icon',  
        // Или задать свою иконку  
        // iconLayout: 'default#image',  
        // iconImageHref: 'images/myIcon.gif',  
        // iconImageSize: [30, 42],  
        // iconImageOffset: [-3, -42]  
    });
  
    // Добавляем метку на карту
    map.geoObjects.add(myPlacemark);
}

ymaps.ready(init);
