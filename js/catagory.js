const catagory_items = document.querySelector('.catagory-items');

function getRow({ _id, createdAt, description, name, photo, updatedAt }) {
	return `
     <div class="catagory_carousel-item">
        <a onclick="getCatagoryPost('${_id}')" href="#">${name}</a>
        <p>${description}</p>
        <h4>${createdAt.split('T')[0]}</h4>
        <h4>${updatedAt.split('T')[0]}</h4>
    </div>
  
  
  `;
}

function getCatagory() {
	request.get('category').then(res => {
		catagory_items.innerHTML = '';
		res.data.data.forEach(el => {
			catagory_items.innerHTML += getRow(el);
		});
	});
}

getCatagory();

function getCatagoryPost(id) {
  localStorage.setItem('catagory', id);
}
