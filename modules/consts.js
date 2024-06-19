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

const images = ['./images/banner_one.svg', './images/banner_two.svg', './images/banner_three.svg']

const categories = ['Architecture', 'Art & Fashion', 'Biography', 'Business', 'Crafts & Hobbies', 'Drama', 'Fiction', 'Food & Drink', 'Health & Wellbeing', 'History & Politics', 'Humor', 'Poetry', 'Psychology', 'Sience', 'Technology', 'Travel & Maps']

let activeCategories = 'Architecture';

let mainImage = document.querySelector('.main-image')
const mainCircles = document.querySelector('.main-circles')
const mainBooks = document.querySelector('.main-books')
const icons = document.querySelector('.header-icons')

let currentCategoriesIndex=0
let loadIndex = 0
let OtherBooksIndex = 0

let toggleClassId = 0

let circleIndex = 1

export {mainCircles, images, icons, entities, categories, activeCategories, mainImage, mainBooks, circleIndex, currentCategoriesIndex, loadIndex, OtherBooksIndex}