//Language select//Language select//Language select//Language select//Language select//Language select//Language select

const isSelectShow = document.querySelector('.header-language__items')
const select = document.querySelector('.header-language')
const selectItems = document.querySelectorAll('.header-language__item')
const selectedItem = document.querySelector('.header-language__selected')

selectedItem.textContent = (
    localStorage.getItem('language') ||
    checkBrowserLang() ||
    'pl'
).toUpperCase()

window.addEventListener('click', event => {
    if (!select.contains(event.target)) {
        isSelectShow.classList.remove('open')
    } else {
        isSelectShow.classList.toggle('open')
    }
})

selectItems.forEach(item => {
    item.addEventListener('click', () => {
        selectedItem.textContent = item.textContent
    })
})

//Slider//Slider//Slider//Slider//Slider//Slider//Slider//Slider

const sliderItems = [...document.querySelectorAll('.hover-slider__item')]
const navItems = [...document.querySelectorAll('.hover-slider-nav__item')]
const arrowLeft = document.querySelector('#hover-slider-button-left')
const arrowRight = document.querySelector('#hover-slider-button-right')

sliderItems.forEach((item, index) => {
    item.dataset.index = index

    if (index === 0) {
        item.classList.add('hover-slider__item--active')
    }
})

navItems.forEach((item, index) => {
    item.dataset.index = index

    if (index === 0) {
        item.classList.add('hover-slider-nav__item--active')
    }

    item.addEventListener('click', () => {
        toggleActivity(item.dataset.index)
        customClearInterval()
    })
})

function toggleActivity(index) {
    for (let i = 0; i < sliderItems.length; i++) {
        if (i === Number(index)) {
            sliderItems[i].classList.add('hover-slider__item--active')
            navItems[i].classList.add('hover-slider-nav__item--active')
        } else {
            sliderItems[i].classList.remove('hover-slider__item--active')
            navItems[i].classList.remove('hover-slider-nav__item--active')
        }
    }
}

arrowLeft.addEventListener('click', () => {
    clickArrowLeft()
    customClearInterval()
})

arrowRight.addEventListener('click', () => {
    clickArrowRight()
    customClearInterval()
})

let interval = setInterval(() => {
    clickArrowRight()
}, 7000)

function clickArrowRight() {
    const currentIndex = Number(
        document.querySelector('.hover-slider__item--active').dataset.index
    )

    if (currentIndex !== sliderItems.length - 1) {
        toggleActivity(currentIndex + 1)
    } else {
        toggleActivity(0)
    }
}

function clickArrowLeft() {
    const currentIndex = Number(
        document.querySelector('.hover-slider__item--active').dataset.index
    )

    if (currentIndex !== 0) {
        toggleActivity(currentIndex - 1)
    } else {
        toggleActivity(sliderItems.length - 1)
    }
}

function customClearInterval() {
    clearInterval(interval)
    interval = setInterval(() => {
        clickArrowRight()
    }, 9000)
}
