
const daysTag = document.querySelector(".calendar__days"),
	currentDate = document.querySelector(".calendar__date"),
	prevNextIcon = document.querySelectorAll(".icons span");

// получение новой даты, текущего года и месяца
let date = new Date(),
	currYear = date.getFullYear(),
	currMonth = date.getMonth();

// сохранение полного названия всех месяцев в массиве
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

const bookedDatesByMonth = {
	0: [], // Забронированные дни для января
	1: [16,17,20,22,23,24], 
	2: [1,2,3,8,9,16,17,23,30],
	3: [27,28,29], 
	4: [], 
	5: [], 
	6: [], 
	7: [], 
	9: [], 
	10: [], 
	11: [], 
 };

const renderCalendar = () => {
	let firstDayofMonth = new Date(currYear, currMonth, 0).getDay(), // получение первого числа месяца
		lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // получение последнего числа месяца
		lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // получение последнего дня месяца
		lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // получение последней даты предыдущего месяца
	let liTag = "";
	for (let i = firstDayofMonth; i > 0; i--) { // создание списка последних дней предыдущего месяца
		liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
	}
	for (let i = 1; i <= lastDateofMonth; i++) {
		let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";
		let isBooked = bookedDatesByMonth[currMonth] && bookedDatesByMonth[currMonth].includes(i) ? "booked" : ""; // добавляем класс "booked" для забронированных дней
		liTag += `<li class="${isToday} ${isBooked}">${i}</li>`;
	 }
	for (let i = lastDayofMonth; i < 7; i++) { // создание li первых дней следующего месяца
		liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
	}
	currentDate.innerText = `${months[currMonth]} ${currYear}`; // передача текущего месяца и года в качестве текста текущей даты
	daysTag.innerHTML = liTag;
};
renderCalendar();

prevNextIcon.forEach(icon => { // получение предыдущих и следующих значков
	icon.addEventListener("click", () => { // добавление события щелчка по обоим значкам
		// если щелкнутый значок является предыдущим значком, то уменьшите текущий месяц на 1, в противном случае увеличьте его на 1
		currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
		if (currMonth < 0 || currMonth > 11) { // если текущий месяц меньше 0 или больше 11
			// создаем новую дату текущего года и месяца и передаем ее в качестве значения даты
			date = new Date(currYear, currMonth, new Date().getDate());
			currYear = date.getFullYear(); // обновление текущего года с новой датой year
			currMonth = date.getMonth(); // обновление текущего месяца с новой датой месяц
		} else {
			date = new Date(); // передайте текущую дату в качестве значения даты
		}
		renderCalendar(); // вызов функции renderCalendar
	});
});
