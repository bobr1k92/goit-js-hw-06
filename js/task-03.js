const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



// const galleryList = document.querySelector('.gallery');

// const elementImg = images.map((element) => {
// const galleryItemEl = document.createElement('li');
// galleryItemEl.classList.add('gallery__items');

// const galleryImagesEl = document.createElement('img');
// galleryImagesEl.classList.add('gallery__images');

// galleryImagesEl.src = `${element.url}`;
// galleryImagesEl.alt = `${element.alt}`;

// galleryItemEl.append(galleryImagesEl);

// return galleryItemEl;

// });

// console.log(...elementImg);
// galleryList.append(...elementImg);
// console.log(galleryList);

const galleryList = document.querySelector('.gallery');

const imagesList = images.map(image =>
         `<li class="item">
            <img 
            src="${image.url}" 
            alt="${image.alt}">
            </img>
          </li>`).join('');

console.log(imagesList);

galleryList.insertAdjacentHTML('afterbegin', imagesList);





