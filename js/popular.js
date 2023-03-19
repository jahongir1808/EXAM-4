const popularItems = document.querySelector('.popular_carousel-items');

function getPopularRow({
	category: { description },
	user: { first_name, last_name, createdAt },
	photo,
	title,
	updatedAt,
}) {
	return `
   <div class="popular_carousel-item">
    <img width="405px" height='318px' style='object-fit: cover;' src="${IMAGE_URL}${
		photo._id
	}.${photo.name.split('.')[1]}" alt="${title}">
	<h5>${title}</h5>
	<h6>By <span>${first_name + ' ' + last_name}</span> ${
		createdAt.split('T')[0]
	}</h6>
    <p>${description}</p>
  </div>
  
  
  `;
}

function getPopular() {
	request.get('post/lastones').then(res => {
		popularItems.innerHTML = '';
		console.log(res);
		res.data.forEach(el => {
			popularCarouselItems.innerHTML += getPopularRow(el);
		});
	});
}

getPopular();
