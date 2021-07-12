// 'use strict'
const reviews = [
  {
    id: 1,
    img: "img/manred.jpg",
    name: "Rohan",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est velit egestas dui id. Pharetra diam sit amet nisl suscipit.",
    rating: "img/fiveStars.png",
  },
  {
    id: 2,
    img: "img/manyellow.jpg",
    name: "Bunty",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit eget gravida cum sociis natoque penatibus et. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Diam maecenas sed enim ut sem viverra aliquet eget.",
    rating: "img/stars.png",
  },
  {
    id: 3,
    img: "img/ladyblue.jpg",
    name: "Roshni",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br> Cras pulvinar mattis nunc sed blandit.",
    rating: "img/threeStars.png",
  },
  {
    id: 4,
    img: "img/ladyred.jpg",
    name: "Kavita",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: "img/stars.png",
  },
];

//Selectors
const img = document.querySelector(".ladyred");
const nameTag = document.querySelector(".kavita");
const text = document.querySelector(".text");
const rating = document.querySelector(".stars");
const leftBtn = document.getElementById("arrowLeft");
let rightBtn = document.getElementById("arrowRight");

//starting item
let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  nameTag.textContent = item.name;
  text.textContent = item.text;
  rating.src = item.rating;
}

//next button
rightBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

//prev button
leftBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
