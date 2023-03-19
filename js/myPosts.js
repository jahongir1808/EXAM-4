const myPostsRow = document.querySelector('#myPosts-row');
const myPosts = document.getElementById('myPosts');
const last_name = document.getElementById('last_name');
const description = document.getElementById('description');
const startDate = document.getElementById('start_date');
const endDate = document.getElementById('end_date');
const myPostsForm = document.getElementById('myPostsForm');
const myPostsModal = document.getElementById('myPosts-modal');
const myPostsBtn = document.getElementById('myPosts-add-btn');
const modalOpenBtn = document.getElementById('modal-open-btn');

function getRow({ _id, description, photo, title }) {
	return `
    <div id="myPosts-row">
      <div class="myPosts-image">
        <img class='w-100' style='object-fit: cover;' src="${IMAGE_URL}${
		photo._id
	}.${photo.name.split('.')[1]}" alt="">
      </div>
      <div class="myPosts-content">
        <h4>${title}</h4>
        <h3>${title}</h3>
        <p>${description}</p>
      </div>
      <div>
        <button
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#myPosts-modal"
					onclick="{editExp('${_id}')}"
        >
          <i class="bi bi-pencil-square"></i>
        </button>
        <button class="btn btn-danger" onclick="{deleteExp('${_id}')}">
          <i class="bi bi-trash3"></i>
        </button>
      </div>
    </div>
  `;
}

function getMyPosts() {
	request.get('post/user').then(res => {
		console.log(res);
		res.data.data.forEach(el => {
			console.log(el);
			myPostsRow.innerHTML += getRow(el);
		});
	});
}
getMyPosts();

myPostsForm.addEventListener('submit', function (e) {
	e.preventDefault();
	this.classList.add('was-validated');
	let check = this.checkValidity();
	if (check) {
		let data = {
			first_name: myPosts.value,
			last_name: last_name.value,
			description: description.value,
			start_date: startDate.value,
			end_date: endDate.value,
		};
		myPostsBtn.disabled = true;
		if (selected) {
			request.put(`post/${selected}`, data).then(() => {
				bootstrap.Modal.getInstance(myPostsModal).hide();
				alert('myPosts is edited');
				getMyPosts();
			});
		} else {
			request
				.post('post', data)
				.then(res => {
					console.log(res);
					bootstrap.Modal.getInstance(myPostsModal).hide();
					emptyForm();
					getMyPosts();
					alert('myPosts is added');
				})
				.finally(() => {
					myPostsBtn.disabled = false;
				});
		}
	}
});

function editExp(id) {
	selected = id;
	myPostsBtn.innerHTML = 'Edit myPostss';
	request.put(`post/${id}`).then(res => {
		myPosts.value = res.data.date.first_name;
		last_name.value = res.data.date.last_name;
		description.value = res.data.date.description;
		startDate.value = res.data.date.start_date;
		endDate.value = res.data.date.end_date;
	});
}

function deleteExp(id) {
	let check = confirm('Are you sure you want to delete ?');
	if (check) {
		request.delete(`post/${id}`).then(() => {
			getMyPosts();
		});
	}
}

function emptyForm() {
	myPosts.value = '';
	last_name.value = '';
	description.value = '';
	startDate.value = '';
	endDate.value = '';
}

modalOpenBtn.addEventListener('click', () => {
	selected = null;
});
