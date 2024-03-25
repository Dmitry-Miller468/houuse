export function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon = document.querySelector('.nav-icon');

	navBtn.onclick = function () {
		nav.classList.toggle('mobile-nav--open');
		menuIcon.classList.toggle('nav-icon--active');
		document.body.classList.toggle('no-scroll');
	};
}
export function menu() {
	const mobileNavMenu = document.querySelector('.mobile-nav__list');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon = document.querySelector('.nav-icon');
	mobileNavMenu.addEventListener('click', function () {
		nav.classList.remove('mobile-nav--open');
		menuIcon.classList.remove('nav-icon--active');
		document.body.classList.remove('no-scroll');
	});
}
export function ibg() {
	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}
