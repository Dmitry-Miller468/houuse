document.getElementById("tg").addEventListener("submit", function (event) {
	event.preventDefault();

	const nameInput = document.getElementById("name");
	const emailInput = document.getElementById("email");
	const phoneInput = document.getElementById("phone");
	const messageInput = document.getElementById("message");

	// Сброс сообщений об ошибках
	var errorElements = document.getElementsByClassName("error");
	for (var i = 0; i < errorElements.length; i++) {
		errorElements[i].innerText = "";
	}

	// Валидация полей формы
	var isValid = true;
	if (!validateName(nameInput)) {
		document.getElementById("nameError").innerText = "Пожалуйста, введите корректное имя.";
		isValid = false;
	}
	if (!validateEmail(emailInput)) {
		document.getElementById("emailError").innerText = "Пожалуйста, введите действительный адрес электронной почты.";
		isValid = false;
	}
	if (!validatePhone(phoneInput)) {
		document.getElementById("phoneError").innerText = "Пожалуйста, введите действительный номер телефона.";
		isValid = false;
	}

	if (isValid) {
		// Отправка формы
		var message = "Новая отправка формы:\n\n" +
			"Имя: " + nameInput.value + "\n" +
			"Email: " + emailInput.value + "\n" +
			"Телефон: " + phoneInput.value + "\n" +
			"Сообщение: " + messageInput.value;

		sendTelegramMessage(message);

		// Дополнительные действия после успешной отправки формы
		// Например, перенаправление на другую страницу или отображение сообщения об успешной отправке
		// ...

		// Очистка полей формы
		nameInput.value = "";
		emailInput.value = "";
		phoneInput.value = "";
		messageInput.value = "";
	}
});
document.getElementById("telegram").addEventListener("submit", function (event) {
	event.preventDefault();

	const nameInput = document.getElementById("popupName");
	const emailInput = document.getElementById("popupEmail");
	const phoneInput = document.getElementById("popupPhone");
	const messageInput = document.getElementById("popupMessage");

	// Сброс сообщений об ошибках
	var errorElements = document.getElementsByClassName("error");
	for (var i = 0; i < errorElements.length; i++) {
		errorElements[i].innerText = "";
	}

	// Валидация полей формы
	var isValid = true;
	if (!validateName(nameInput)) {
		document.getElementById("popupNameError").innerText = "Пожалуйста, введите корректное имя.";
		isValid = false;
	}
	if (!validateEmail(emailInput)) {
		document.getElementById("popupEmailError").innerText = "Пожалуйста, введите действительный адрес электронной почты.";
		isValid = false;
	}
	if (!validatePhone(phoneInput)) {
		document.getElementById("popupPhoneError").innerText = "Пожалуйста, введите действительный номер телефона.";
		isValid = false;
	}

	if (isValid) {
		// Отправка формы
		var message = "Новая отправка формы:\n\n" +
			"Имя: " + nameInput.value + "\n" +
			"Email: " + emailInput.value + "\n" +
			"Телефон: " + phoneInput.value + "\n" +
			"Сообщение: " + messageInput.value;

		sendTelegramMessage(message);

		// Дополнительные действия после успешной отправки формы
		// Например, перенаправление на другую страницу или отображение сообщения об успешной отправке
		// ...

		// Очистка полей формы
		nameInput.value = "";
		emailInput.value = "";
		phoneInput.value = "";
		messageInput.value = "";
	}
});



function sendTelegramMessage(message) {
	var botToken = "6756430331:AAGTT3PvhHiB-EkgDqFBqtB4pk9NbPDXOyc";
	var chatId = "-4175016493";

	var request = new XMLHttpRequest();
	request.open("GET", "https://api.telegram.org/bot" + botToken + "/sendMessage?chat_id=" + chatId + "&text=" + encodeURIComponent(message));
	request.send();
}

function validateName(nameInput) {
	var name = nameInput.value;
	var re = /^[А-Яа-яЁё\s]+$/;
	return re.test(name);
}

function validateEmail(emailInput) {
	var email = emailInput.value;
	var re = /\S+@\S+\.\S+/;
	return re.test(email);
}

function validatePhone(phoneInput) {
	var phone = phoneInput.value;
	var re = /^\+?[0-9]{10,}$/;
	return re.test(phone);
}

window.addEventListener('DOMContentLoaded', function() {
	var phoneInputResult = document.getElementById('phone');
 
	// Создаем экземпляр IMask с маской номера телефона
	var phoneMask = IMask(phoneInputResult, {
	  mask: '+{7}0000000000' // Здесь вы можете настроить маску по своему усмотрению
	});
 });
 window.addEventListener('DOMContentLoaded', function() {
	var phoneInputResult = document.getElementById('popupPhone');
 
	// Создаем экземпляр IMask с маской номера телефона
	var phoneMask = IMask(phoneInputResult, {
	  mask: '+{7}0000000000' // Здесь вы можете настроить маску по своему усмотрению
	});
 });


// https://api.telegram.org/bot6756430331:AAGTT3PvhHiB-EkgDqFBqtB4pk9NbPDXOyc/getUpdates