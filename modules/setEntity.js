import {mainCircles, images, entities, mainImage} from './consts.js'

let currentIndex = 0;

function swapImage(index){
	mainImage.querySelector(".image-active").classList.remove("image-active");
	mainImage.querySelector(`.main-image-image${index}`).classList.add("image-active");
	mainCircles.querySelector(".circle-active").classList.remove("circle-active");
	mainCircles.querySelector(`.main-circles-circle${index}`).classList.add("circle-active");
}

images.forEach((image, index) =>{
	let imageElement = document.createElement("div")
  imageElement.className = `main-image-image${index}`
  imageElement.style.backgroundImage = `url(${images[index]})`
  mainImage.appendChild(imageElement)
})


mainImage.querySelector('.main-image-image0').classList.add("image-active");


images.forEach((image, index) => {
	let dot = document.createElement("div");
	dot.className = `main-circles-circle${index} ${index? "" : "circle-active"}`;
	dot.dataset.index = index;
	dot.addEventListener("click", function() {
  	swapImage(index);
	});
	mainCircles.appendChild(dot);
});



setInterval(function() {
	if(currentIndex==3){currentIndex=0}
	swapImage(currentIndex)
	currentIndex++;
}, 5000);