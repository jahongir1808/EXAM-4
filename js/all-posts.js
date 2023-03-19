const postsItems = document.querySelector('.posts-items');
const search = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');

function getPostsRow({
	user: { createdAt, first_name, last_name },
	description,
	photo,
	title,
	updatedAt,
}) {
	return `
     <div class="posts-item">
        <div class="posts_item-image">
          <img class='w-100' style='object-fit: cover;' src="${IMAGE_URL}${
		photo._id
	}.${photo.name.split('.')[1]}" alt="">
        </div>
        <div class="posts_item-content">
				<div class="d-flex justify-content-between">
					<h5>${title}</h5>
				</div>
				<h3>By <span>${last_name + ' ' + first_name}</span> ${
		createdAt.split('T')[0]
	}</h3>
          <p>${description}</p>
        </div>
      </div>  
  `;
}

function getPosts() {
	postsItems.innerHTML = '';
	request.get('post').then(res => {
		res.data.data.forEach(el => {
			postsItems.innerHTML += getPostsRow(el);
		});
	});
}

getPosts();

search.addEventListener('input', function (e) {
	let searchValues = search.value;
	e.preventDefault();
	request.get(`post?search=${searchValues}`).then(res => {
		res.data.data.forEach(el => {
			if (searchValues === '') {
				location.reload();
				getPosts();
			} else {
				postsItems.innerHTML = '';
				postsItems.innerHTML += getPostsRow(el);
			}
		});
	});
});
