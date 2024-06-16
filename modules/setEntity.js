import {entities, mainImage, mainCirclesCircle1, mainCirclesCircle2, mainCirclesCircle3} from './consts.js'

let currentIndex = 0;

const setEntity = (index) => {
  mainImage.innerHTML = `<img src="${entities[index].image}" class = "main-image-image1"/>`
  mainCirclesCircle1.innerHTML = `<img src="${entities[index].circle_position1}" class = "main-circle_position1" />`
  mainCirclesCircle2.innerHTML = `<img src="${entities[index].circle_position2}" class = "main-circle_position2" />`
  mainCirclesCircle3.innerHTML = `<img src="${entities[index].circle_position3}" class = "main-circle_position3" />`
}

mainImage.innerHTML = `<img src="${entities[currentIndex].image}" class = "main-image-image1"/>`
mainCirclesCircle1.innerHTML = `<img src="${entities[currentIndex].circle_position1}" class = "main-circle_position1" />`
mainCirclesCircle2.innerHTML = `<img src="${entities[currentIndex].circle_position2}" class = "main-circle_position2" />`
mainCirclesCircle3.innerHTML = `<img src="${entities[currentIndex].circle_position3}" class = "main-circle_position3" />`

mainCirclesCircle1.addEventListener('click',()=>{
	setEntity(0);
	currentIndex = 0;
})
mainCirclesCircle2.addEventListener('click',()=>{
	setEntity(1);
	currentIndex = 1
})
mainCirclesCircle3.addEventListener('click',()=>{
	setEntity(2);
	currentIndex = 2;
})


setInterval(function() {
	if(currentIndex==3){currentIndex=0}
	mainImage.innerHTML = `<img src="${entities[currentIndex].image}" class = "main-image-image1"/>`
	mainCirclesCircle1.innerHTML = `<img src="${entities[currentIndex].circle_position1}" class = "main-circle_position1" />`
	mainCirclesCircle2.innerHTML = `<img src="${entities[currentIndex].circle_position2}" class = "main-circle_position2" />`
	mainCirclesCircle3.innerHTML = `<img src="${entities[currentIndex].circle_position3}" class = "main-circle_position3" />`
	currentIndex++;
}, 5000);