import * as flsFunctions from "./modules/functions.js"
// import { Modal } from '../js/libs/modal.js'
// import { Accordion } from '../js/libs/accordion.js'


flsFunctions.isWebP()

const headerCatalogBtn = document.querySelector('.header__bar-btn')

headerCatalogBtn.addEventListener('click', function () {
    headerCatalogBtn.classList.toggle('active-bar')
})


const headerLogin = document.querySelector('.header__login')
const headerLoginMenu = document.querySelector('.header__login-menu')

headerLogin.addEventListener('click', function() {
    headerLoginMenu.classList.toggle('__active')
})