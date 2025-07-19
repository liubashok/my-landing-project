let buttonDark = document.querySelector('.theme-button-dark');
let buttonLight = document.querySelector('.theme-button-light');
let page = document.querySelector('.page');
let buttonSansSerif = document.querySelector('.font-button-sans-serif');
let buttonSerif = document.querySelector('.font-button-serif');
let blogArticles = document.querySelectorAll('.blog-article');
let buttonGrid = document.querySelector('.card-view-button-grid');
let buttonList = document.querySelector('.card-view-button-list');
let cards = document.querySelector('.cards');
let previews = document.querySelectorAll('.preview-list a');
let activePhoto = document.querySelector('.active-photo');

buttonDark.onclick = function () {
    buttonDark.classList.add('active');
    buttonLight.classList.remove('active');
    page.classList.add('dark');
};

buttonLight.onclick = function () {
    buttonDark.classList.remove('active');
    buttonLight.classList.add('active');
    page.classList.remove('dark');
};

buttonSerif.onclick = function () {
    buttonSerif.classList.add('active');
    buttonSansSerif.classList.remove('active');
    page.classList.add('serif');
};

buttonSansSerif.onclick = function () {
    buttonSerif.classList.remove('active');
    buttonSansSerif.classList.add('active');
    page.classList.remove('serif');
};

for (let blogArticle of blogArticles) {
    blogArticle.onclick = function () {
    blogArticle.classList.remove('short');
    };
};

buttonList.onclick = function () {
    buttonList.classList.add('active');
    buttonGrid.classList.remove('active');
    cards.classList.add('list');
};

buttonGrid.onclick = function () {
    buttonList.classList.remove('active');
    buttonGrid.classList.add('active');
    cards.classList.remove('list');
};

for (let currentPhoto of previews) {
    currentPhoto.onclick = function (evt) {
        evt.preventDefault();
        let previewActive = document.querySelector('.preview-list .active-item')
        previewActive.classList.remove('active-item'); 
        currentPhoto.classList.add('active-item');
       
    activePhoto.src = currentPhoto;
};
};
