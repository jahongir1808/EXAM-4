const form = document.getElementById('form');
const userName = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', function (event) {
	event.preventDefault();
	let check = this.checkValidity();
	if (check) {
		let data = {
			username: userName.value,
			password: password.value,
		};
		request
			.post('auth/login', data)
			.then(res => {
				console.log(res);
				localStorage.setItem(TOKEN, res.data.token);
				location.href = '../my-posts.html';
			})
			.catch(error => {
				alert('There is no such user. Please register');
			});
	}
});
