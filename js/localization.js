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
    'about-us-block__info-h2': {
        pl: 'O nas',
        en: 'About us',
        ua: 'Про нас',
        ru: 'О нас',
    },
    'about-us-block__info-p': {
        pl: 'Firma działa od 2021 roku na terenie całej Polski, zajmujemy się zatrudnieniem osób z takich krajów jak Ukraina, Białoruś, Indonezja, Mołdawia, Indie, Filipiny, kraje afrykańskie w specjalności: spawacz, ślusarz, monter, malarz , szlifierka. Do wykonywania powierzonych prac podchodzimy z należytą odpowiedzialnością i rzetelnością. Zatrudniamy wyłącznie doświadczonych specjalistów posiadających niezbędne kwalifikacje. Nasza wiedza i doświadczenie pozwalają nam świadczyć usługi zgodnie z przepisami prawa oraz obowiązującymi normami i standardami bezpieczeństwa. Dbamy o zapewnienie naszym pracownikom komfortu i bezpieczeństwa przez cały okres współpracy.',
        en: 'The company has been operating since 2021 throughout the territory of Poland, we are engaged in the employment of people from such countries as Ukraine, Belarus, Indonesia, Moldova, India, the Philippines, and African countries in the specialty: welder, locksmith, fitter, painter, grinder. We approach the performance of entrusted works with due responsibility and reliability. We employ only experienced specialists with the necessary qualifications. Our knowledge and experience allow us to provide services in accordance with legislation and applicable safety norms and standards. We take care to provide our employees with comfort and safety during the entire period of cooperation.',
        ua: 'Фірма працює з 2021 по всій території Польщі, займаємося працевлаштуванням людей з таких країн як Україна, Білорусь, Індонезія, Молдова, Індія, Філіппіни, країн Африки на спеціальності: зварювальник, слюсар, монтер, маляр, шліфувальник. До виконання довірених робіт, ми підходимо з належною відповідальністю та надійністю. В нас працюють тільки досвідчені фахівці з необхідною кваліфікацією. Наші знання та досвід дозволяють нам надавати послуги відповідно до законодавства та чинних норм і стандартів безпеки. Ми дбаємо про те, щоб забезпечити наших працівників комфортом і безпекою на протязі всього періоду співпраці.',
        ru: 'Фирма работает с 2021 по всей территории Польши, занимаемся трудоустройством людей из таких стран как Украина, Беларусь, Индонезия, Молдова, Индия, Филиппины, стран Африки на специальности: сварщик, слесарь, монтер, маляр, шлифовщик. Для выполнения доверенных работ мы подходим с надлежащей ответственностью и надежностью. У нас трудятся только опытные специалисты с необходимой квалификацией. Наши знания и опыт позволяют нам предоставлять услуги в соответствии с законодательством и действующими нормами и стандартами безопасности. Мы заботимся о том, чтобы обеспечить наших сотрудников комфортом и безопасностью на протяжении всего периода сотрудничества.',
    },
    achievments__h2: {
        pl: 'Nasze osiągnięcia',
        en: 'Our achievements',
        ua: 'Наші досягнення',
        ru: 'Наши достижения',
    },
    'achievments-list__item-text-1': {
        pl: 'W okresie funkcjonowania firmy zatrudnialiśmy ponad 1000 osób',
        en: "During the time of the company's operation, we employed more than 1,000 people",
        ua: 'На протязі часу роботи фірми ми працевлаштували понад 1000 осіб',
        ru: 'За время работы фирмы мы трудоустроили более 1000 человек',
    },
    'achievments-list__item-text-2': {
        pl: 'Szybkie i wysokiej jakości przetwarzanie dokumentów do legalnego pobytu i pracy w Polsce',
        en: 'Fast and high-quality processing of documents for legal stay and work in Poland',
        ua: 'Швидке і якісне оформлення документів для легального перебування і праці на території Польщі',
        ru: 'Быстрое и качественное оформление документов для легального пребывания и труда на территории Польши',
    },
    'achievments-list__item-text-3': {
        pl: 'Mówimy po ukraińsku, polsku, angielsku, rosyjsku',
        en: 'We speak Ukrainian, Polish, English, Russian',
        ua: 'Говоримо на українській,польській, англійській, російській мовах',
        ru: 'Говорим на украинском, польском, английском, русском языках',
    },
    'achievments-list__item-text-4': {
        pl: 'Terminowe wypłaty wynagrodzeń oraz pełen pakiet ubezpieczeń zdrowotnych',
        en: 'Timely salary payments and a full health insurance package',
        ua: 'Своєчасні виплати заробітної плати та повний пакет медичного страхування',
        ru: 'Своевременные выплаты заработной платы и полный пакет медицинского страхования',
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
