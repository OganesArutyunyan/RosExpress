"use strict"

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}

//Учет высоты над navbar для отображения popup
const navbarScrolledClass = 'navbar_scrolled';
const popupScrolledClass = 'popup_scrolled';
const navbarNode = document.querySelector('.navbar');
const popupNode = document.querySelector('.popup');
const stickyStartScroll = 44; //44 - высота блока над navbar

window.addEventListener('scroll', () => {
  if(window.scrollY >= 44) {
    navbarNode.classList.add(navbarScrolledClass);
    popupNode.classList.add(popupScrolledClass);
  } else if (window.scrollY < 44) {
    navbarNode.classList.remove(navbarScrolledClass);
    popupNode.classList.remove(popupScrolledClass);
  }
})