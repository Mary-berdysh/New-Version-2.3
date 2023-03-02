
//Popup

let LoginButton = document.querySelector('.login-button');
let LoginPopup = document.querySelector('.popup-box');
let CloseButton = document.querySelector('.popup-close');

LoginButton.addEventListener('click', showPopup);
CloseButton.addEventListener('click', close);

function showPopup(evt) {

    evt.preventDefault();
    LoginPopup.classList.toggle('show-popup');
};

function close(evt) {
    LoginPopup.classList.remove('show-popup')
};

LoginPopup.addEventListener('click', (e) => {
    if (e.target.classList.constains('show-popup')) {
        close();
    }
})
