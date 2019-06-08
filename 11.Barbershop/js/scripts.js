var link = document.querySelector(".auth-link");
var enter = document.querySelector(".modal-login");
var close = document.querySelector(".login-close");
var login = document.querySelector("[name=login]");
var form = document.querySelector(".login_form");
var password = document.querySelector("[name=password]");
var map_link = document.querySelector(".map_link");
var map = document.querySelector(".modal-map");
var close_map = document.querySelector(".map-close");

	link.addEventListener("click", function(evt) {
		evt.preventDefault();
		enter.classList.add("show");
		login.focus();

	});

	close.addEventListener("click", function(evt) {
		evt.preventDefault();
		enter.classList.remove("show");

	});

	form.addEventListener("submit", function(evt) {
		if (!password.value && !login.value)  {
			evt.preventDefault();
			alert('Введите, пожалуйста, логин и пароль');
		}

		else {
			if (!login.value) {
				evt.preventDefault();
				alert('Введите, пожалуйста, логин');
			}
			if (!password.value) {
				evt.preventDefault();
				alert('Введите, пожалуйста, пароль');

			}

		}
	});

	map_link.addEventListener("click", function(evt) {
		evt.preventDefault();
		map.classList.add("show");

	});

	close_map.addEventListener("click", function(evt) {
		evt.preventDefault();
		map.classList.remove("show");

	});
	




