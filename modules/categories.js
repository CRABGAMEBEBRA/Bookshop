import {mainBooks, OtherBooksIndex, categories, activeCategories, icons, circleIndex} from './consts.js'



function getBooks(){
  const requestURL = 'https://www.googleapis.com/books/v1/volumes?q="subject:' + activeCategories + '"&key=AIzaSyCWyyDEG2KbG8YO7Yy_OBNVT9N6Nf9zbGE&printType=books&startIndex=' + OtherBooksIndex.toString() + '&maxResults=6&langRestrict=en'
  return new Promise((resolve, reject)=>{
    fetch(requestURL)
      .then(response => response.json())  
      .then((data) => {
        const massiv = data.items
        return resolve(massiv);

      })
    .catch(err => console.log(err.message));
  })}

function stars(i, res) {
  let starIntro = ``;
  let starSilver = `<img src='./images/Star.svg'/>`;
  let starGold = `<img src='./images/Star (1).svg'/>`;
  if(res[i].volumeInfo.averageRating == undefined) {
    for(let j=0; j < 5; j++){
      starIntro += `<div class="main-books-stars-star">${starSilver}</div>`
      }
  } else {
    for(let j=0; j < 5; j++){
      if(j < res[i].volumeInfo.averageRating) {
        starIntro += `<div class="main-books-stars-star">${starGold}</div>`
      }
      else {
        starIntro += `<div class="main-books-stars-star">${starSilver}</div>`
      }
      }
    }
  
return starIntro;
}




function review(i, res) {
  let count;
  let reviewCount = ``;
  if(res[i].volumeInfo.ratingCount == undefined) {
    count = 0;
    reviewCount += `<div>${count} review</div>`
  }
  return reviewCount;
}

function descript(i, res) {
  let descriptDiv = ``;
  if(res[i].volumeInfo.description == undefined) {
    descriptDiv += `<div>${descriptDiv} No review</div>`
  } else{
    descriptDiv += `<div>${res[i].volumeInfo.description} review</div>`
  }
  return descriptDiv;
}

function price(i, res){
  let priceDiv = '';
  if(res[i].saleInfo.retailPrice == undefined){
    priceDiv += '<div>&#8381 0</div>'
  } else{
    priceDiv += `<div>&#8381 ${res[i].saleInfo.retailPrice.amount}</div>`;
  }

  //console.log('PRICE->', pr);
  return priceDiv;
}

const loadBooks = (promise, category_name) =>{
  promise.then((res) => { 
    for(let i=0; i<6; i++) {
        mainBooks.innerHTML += `
              <div class='main-books__more ${category_name} n${i}'>
                  <div><img src="${res[i].volumeInfo.imageLinks.thumbnail}" alt="imgBook" class="main-books-cover"/></div>
                  <div class="main-books-autor">${res[i].volumeInfo.authors[0]}</div>
                  <div class="main-books-title">${res[i].volumeInfo.title}</div>
                  <div class="main-books-star">${stars(i, res)}</div>
                  <div class="main-books-review">${review(i, res)}</div>
                  <div class="main-books-description">${descript(i, res)}</div>
                  <div class="main-books-price">${price(i, res)}</div>
                  <div class="main-books-buy">buy now</div>
              </div>`;
            }
          mainBooks.innerHTML += `<div class="main-loadMore">LOAD MORE</div>`;  
})}


loadBooks(getBooks(), activeCategories)

document.addEventListener('click', (event) => {
  if(event.target.classList.contains('main-categories-titles')){ 
    for(let j=0; j < (6 + OtherBooksIndex); j++){
      if(mainBooks.getElementsByClassName(`${activeCategories}`)[j].classList.contains('none')){continue}
      mainBooks.getElementsByClassName(`${activeCategories}`)[j].classList.add("none");}
    OtherBooksIndex = 0
    activeCategories = event.target.innerText;
    document.querySelector('.main-categories-titles.main-categories-titles_active').classList.remove('main-categories-titles_active');
    event.target.classList.add('main-categories-titles_active');
    if(mainBooks.getElementsByClassName(`${activeCategories}`).length != 0){
      for(let j=0; j < 6; j++){
        mainBooks.getElementsByClassName(`${activeCategories}`)[j].classList.remove('none');}
    }
    else{
      document.querySelector('.main-loadMore').remove();
      loadBooks(getBooks(), activeCategories)}
  }

  if(event.target.classList.contains('main-loadMore')){  
    OtherBooksIndex += 6
    document.querySelector('.main-loadMore').remove();
    console.log(mainBooks.getElementsByClassName(`${activeCategories}`))
    console.log(mainBooks.getElementsByClassName(`${activeCategories} none`))
    if(mainBooks.getElementsByClassName(`${activeCategories} none`).length != 0){
      for(let j=(OtherBooksIndex); j < (OtherBooksIndex + 6); j++){
        mainBooks.getElementsByClassName(`${activeCategories}`)[j].classList.remove('none');}
      mainBooks.innerHTML += `<div class="main-loadMore">LOAD MORE</div>`;  
    }
    else{loadBooks(getBooks(), activeCategories)}

  }
  if(event.target.classList.contains('main-books-buy')){
    if(circleIndex!=1){document.querySelector('.header-icons-circle').remove();}
    icons.innerHTML += `<div class = "header-icons-circle"><p class ="header-icons-circle-number">${circleIndex}</p></div>`;
    circleIndex++;
  }
})

