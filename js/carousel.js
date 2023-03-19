const popular_carousel = document.querySelector('.popular-carousel');
const popularCarouselAllItems = document.querySelectorAll(
	'.popular_carousel-item'
);
const popularCarouselItems = document.querySelector(
	'.popular_carousel-items'
);
const popularPrevBtn = document.querySelector('.project_carousel-prev');
const popularNextBtn = document.querySelector('.project_carousel-next');

let popularCarouselSlideLength = 1;

const popularCarouselItemsLength = popularCarouselAllItems.length;

const popularCarouselItemsWidth =
	popular_carousel.offsetWidth / popularCarouselSlideLength;

popularCarouselItems.style.width =
	popularCarouselItemsLength * popularCarouselItemsWidth + 'px';

for (let i = 0; i < popularCarouselItemsLength; i++) {
	popularCarouselAllItems[i].style.width =
		popularCarouselItemsWidth + 'px';
}

const popularStepLength = 1;
const popularStepWidth =
	popularStepLength * popularCarouselItemsWidth;

let popularCurrentPosition = 0;
let popularLastPosition =
	(popularCarouselItemsLength - popularCarouselSlideLength) *
	popularCarouselItemsWidth;

popularNextBtn.addEventListener('click', function () {
	popularCurrentPosition -= popularStepWidth;
	if (Math.ceil(popularCurrentPosition) < 0) {
		popularCurrentPosition = popularLastPosition;
	}
	popularCarouselItems.style.transform = `translateX(${+popularCurrentPosition}px)`;
});

popularPrevBtn.addEventListener('click', function () {
	popularCurrentPosition += popularStepWidth;
	if (Math.ceil(popularCurrentPosition) > popularLastPosition) {
		popularCurrentPosition = 0;
	}
	popularCarouselItems.style.transform = `translateX(${+popularCurrentPosition}px)`;
});
