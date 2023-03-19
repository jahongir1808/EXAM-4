// const homeContainer = document.getElementById('home-container');

// function getHomeRow({createdAt, description, title, photo, updatedAt}) {
// 	homeContainer.style.backgroundImage = `${IMAGE_URL}${photo._id}.${
// 		photo.name.split('.')[1]
// 	}`;
// 	return `
    // <div class="home">
    //   <h4>${createdAt.split('T')[0]}</h4>
    //   <h3>${title}</h3>
    //   <p>${description}</p>
    //   <h4>${updatedAt.split('T')[0]}</h4>
    //   <button>Read More></button>
    // </div>
//   `;
// }

// function getHome() {
// 	request.get('post/lastone').then(res => {
// 		console.log(res.data);
// 		res.data.forEach(el => {
// 			console.log(el);
// 			homeContainer.innerHTML = '';
// 			homeContainer.innerHTML += getHomeRow(el);
// 		});
// 	});
// }

// getHome();
