const form = document.getElementById('form');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const userName = document.getElementById('username');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

form.addEventListener('submit', function (event) {
	event.preventDefault();
	let check = this.checkValidity();
	if (password.value === confirmPassword.value) {
		if (check) {
			let data = {
				first_name: firstName.value,
				last_name: lastName.value,
				username: userName.value,
				password: password.value,
			};
			request
				.post('auth/register', data)
				.then(res => {
					localStorage.setItem(TOKEN, res.data.token);
					location.href = '../home.html';
				})
				.catch(error => {
					alert(error.message);
				});
		}
	}
});
