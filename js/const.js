const IMAGE_URL = 'https://blog-backend.up.railway.app/upload/';

const ENDPOINT = 'https://blog-backend.up.railway.app/api/v1/';

const TOKEN = 'BLOG_TOKEN';

const navLogin = document.getElementById('navLogin');

navLogin.addEventListener('click', function () {
	localStorage.removeItem('BLOG_TOKEN');
	window.location.replace('../index.html');
	deleteSessionData();
});
