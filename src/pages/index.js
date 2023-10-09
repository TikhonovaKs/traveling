import '../pages/index.css';
const galleryImage = document.querySelectorAll('.gallery__image');
const popupImage = document.querySelector('.popup_type_image');
const popupPicture = document.querySelector('.popup__picture');
const buttonClosePopup = document.querySelectorAll('.popup__button-close');
const buttonAddPlace = document.querySelector('.places__add-button');
const popupAddPlace = document.querySelector('.popup_type_place');
const popupList = document.querySelectorAll('.popup');
const buttonSignUp = document.querySelector('.header__registration-link');
// const buttonSignIn = document.querySelector('.header__login-link');

galleryImage.forEach(function (image) {
  image.addEventListener('click', function () {
    popupPicture.src = image.src;
    popupImage.classList.add('popup_is-opened');
  });
});

buttonAddPlace.addEventListener('click', function () {
  popupAddPlace.classList.add('popup_is-opened');
});

buttonClosePopup.forEach(function (button) {
  button.addEventListener('click', function () {
    popupList.forEach(function (popup) {
      popup.classList.remove('popup_is-opened');
    });
  });
});

buttonSignUp.addEventListener('click', function () {
  window.location.href = 'signup.html';
});
