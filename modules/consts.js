const entities=[
  {
    image: './images/banner_one.svg',
    circle_position1: './images/Ellipse 4.svg',
    circle_position2: './images/Ellipse 5.svg',
    circle_position3: './images/Ellipse 5.svg',
  },
  {
    image: './images/banner_two.svg',
    circle_position1: './images/Ellipse 5.svg',
    circle_position2: './images/Ellipse 4.svg',
    circle_position3: './images/Ellipse 5.svg',
  },
  {
    image: './images/banner_three.svg',
    circle_position1: './images/Ellipse 5.svg',
    circle_position2: './images/Ellipse 5.svg',
    circle_position3: './images/Ellipse 4.svg',
  }]

const categories = ['Architecture', 'Art & Fashion', 'Biography', 'Business', 'Crafts & Hobbies', 'Drama', 'Fiction', 'Food & Drink', 'Health & Wellbeing', 'History & Politics', 'Humor', 'Poetry', 'Psychology', 'Sience', 'Technology', 'Travel & Maps']

let activeCategories = 'Architecture';

let mainImage = document.querySelector('.main-image')
const mainCirclesCircle1 = document.querySelector('.main-circles-circle1')
const mainCirclesCircle2 = document.querySelector('.main-circles-circle2')
const mainCirclesCircle3 = document.querySelector('.main-circles-circle3')
const mainBooks = document.querySelector('.main-books')
const icons = document.querySelector('header-icons')

let currentCategoriesIndex=0
let loadIndex = 0
let OtherBooksIndex = 0

let toggleClassId = 0

let circleIndex = 1

export {icons, entities, categories, activeCategories, mainImage, mainCirclesCircle1, mainCirclesCircle2, mainCirclesCircle3, mainBooks, circleIndex, currentCategoriesIndex, loadIndex, OtherBooksIndex}