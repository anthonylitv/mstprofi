// Localization

const langButtons = document.querySelectorAll('[data-btn]')
const allLangs = ['pl', 'en', 'ua', 'ru']
const currentPathName = window.location.pathname
let currentLang = localStorage.getItem('language') || checkBrowserLang() || 'pl'
let currentTexts = {}

const homeTexts = {
    'navigation-items__item-1': {
        pl: 'O nas',
        en: 'About us',
        ua: 'Про нас',
        ru: 'О нас',
    },
    'navigation-items__item-2': {
        pl: 'Dlaczego my?',
        en: 'Why us?',
        ua: 'Чому ми?',
        ru: 'Почему мы?',
    },
    'navigation-items__item-3': {
        pl: 'Usługi',
        en: 'Services',
        ua: 'Послуги',
        ru: 'Услуги',
    },
    'hover-slider__item-information-h1-1': {
        pl: 'SZUKAĆ PRACY?',
        en: 'LOOKING FOR A JOB?',
        ua: 'В ПОШУКАХ РОБОТИ?',
        ru: 'В ПОИСКАХ РАБОТЫ?',
    },
    'hover-slider__item-information-h1-2': {
        pl: 'SZUKASZ PRACOWNIKÓW?',
        en: 'LOOKING FOR EMPLOYEES?',
        ua: 'В ПОШУКАХ ПРАЦІВНИКІВ?',
        ru: 'В ПОИСКАХ РАБОТНИКОВ?',
    },
    'hover-slider__item-information-h1-3': {
        pl: 'OFICJALNE ZATRUDNIENIE',
        en: 'OFFICIAL EMPLOYMENT',
        ua: 'ОФІЦІЙНЕ ПРАЦЕВЛАШТУВАННЯ',
        ru: 'ОФИЦИАЛЬНОЕ ТРУДОУСТРОЙСТВО',
    },
    'hover-slider__item-information-p-1': {
        pl: 'Pracujemy w wielu regionach Polski',
        en: 'We work in many regions of Poland',
        ua: 'Працюємо в багатьох регіонах Польщі',
        ru: 'Работаем во многих регионах Польши',
    },
    'hover-slider__item-information-p-2': {
        pl: 'Najczęściej spotykane zawody: spawacz, monter, ślusarz, malarz',
        en: 'The most common jobs: welder, fitter, locksmith, painter',
        ua: 'Найпоширеніші вакансії: зварювальник, монтер, слюсар, маляр',
        ru: 'Самые распространенные вакансии: сварщик, монтер, слесарь, маляр',
    },
    'hover-slider__item-information-p-3': {
        pl: 'Szybkie i wysokiej jakości przetwarzanie dokumentów do legalnego pobytu i pracy w Polsce',
        en: 'Fast and high-quality processing of documents for legal stay and work in Poland',
        ua: 'Швидке і якісне оформлення документів для легального перебування і праці на території Польщі',
        ru: 'Быстрое и качественное оформление документов для легального пребывания и труда на территории Польши',
    },
    'get-vacancy-button': {
        pl: 'Zdobądź pracę!',
        en: 'Get jobs!',
        ua: 'Отримати вакансії!',
        ru: 'Получить вакансии!',
    },
}

// Checking the site page path
function checkPagePathName() {
    switch (currentPathName) {
        case '/index.html':
            currentTexts = homeTexts
            break
        default:
            currentTexts = homeTexts
            break
    }
}
checkPagePathName()

// Changing the language of texts
function changeLang() {
    for (const key in currentTexts) {
        let elem = document.querySelectorAll(`[data-lang=${key}]`)
        elem.forEach(item => {
            item && (item.textContent = currentTexts[key][currentLang])
        })
    }
}
changeLang()

// Attach handlers to each button
langButtons.forEach(btn => {
    btn.addEventListener('click', event => {
        if (!event.target.classList.contains('header__btn_active')) {
            currentLang = event.target.dataset.btn
            localStorage.setItem('language', event.target.dataset.btn)
            resetActiveClass(langButtons, 'header__btn_active')
            btn.classList.add('header__btn_active')
            changeLang()
        }
    })
})

// Resetting the active class of the passed array of elements
function resetActiveClass(arr, activeClass) {
    arr.forEach(elem => {
        elem.classList.remove(activeClass)
    })
}

// Checking the active button
function checkActiveLangButton() {
    switch (currentLang) {
        case 'pl':
            document
                .querySelector('[data-btn="pl"]')
                .classList.add('header__btn_active')
            break
        case 'en':
            document
                .querySelector('[data-btn="en"]')
                .classList.add('header__btn_active')
            break
        case 'ua':
            document
                .querySelector('[data-btn="ua"]')
                .classList.add('header__btn_active')
            break
        case 'ru':
            document
                .querySelector('[data-btn="ru"]')
                .classList.add('header__btn_active')
            break

        default:
            document
                .querySelector('[data-btn="pl"]')
                .classList.add('header__btn_active')
            break
    }
}
checkActiveLangButton()

// Check browser language
function checkBrowserLang() {
    const navLang = navigator.language.slice(0, 2).toLowerCase()
    const result = allLangs.some(elem => {
        return elem === navLang
    })
    if (result) {
        return navLang
    }
}
