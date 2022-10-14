const menu = document.querySelector('.menu__body')
const burger = document.querySelector('.menu__burger')
const logo = document.querySelector('.logo')

const body = document.querySelector('html')

if (menu && burger) {
  burger.addEventListener('click', () => {
    menu.classList.toggle('active')
    burger.classList.toggle('active')
    body.classList.toggle('lock')
  })
}

menu.querySelectorAll('.menu__link').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('active')
    burger.classList.remove('active')
    body.classList.remove('lock')
  })
})

logo.addEventListener('click', () => {
  menu.classList.remove('active')
  burger.classList.remove('active')
  body.classList.remove('lock')
})

// inputmask

const form = document.querySelector('.sale__form')
const telSelector = form.querySelector('input[type="tel"]')
const inputMask = new Inputmask('+38 (999) 999-99-99')

inputMask.mask(telSelector)

var typed = new Typed('#typed', {
  strings: [
    'Заявка на кредит онлайн',
    'Купить мягкие игрушки оптом',
    'Вызвать строительную бригаду',
    'Купить кухонное оборудование',
    'Вызвать замерщика окон',
  ],
  typeSpeed: 50,
  backSpeed: 20,
  loop: 'true',
})
