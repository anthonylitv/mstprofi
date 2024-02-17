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
    'our-services__h2': {
        pl: 'Nasze Usługi',
        en: 'Our services',
        ua: 'Наші послуги',
        ru: 'Наши услуги',
    },
    'our-services-cards__item-h4-1': {
        pl: 'Legalizacja',
        en: 'Legalization',
        ua: 'Легалізація',
        ru: 'Легализация',
    },
    'our-services-cards__item-h4-2': {
        pl: 'Rekrutacja',
        en: 'Recruitment',
        ua: 'Рекрутація',
        ru: 'Рекрутация',
    },
    'our-services-cards__item-h4-3': {
        pl: 'Kwalifikowane szkolenie specjalistów do pracy',
        en: 'Qualified training of specialists for work',
        ua: 'Кваліфікована підготовка спеціалістів до роботи',
        ru: 'Квалифицированная подготовка специалистов к работе',
    },
    'our-services-cards__item-p-1': {
        pl: 'Zapewniamy wszelkie niezbędne dokumenty związane z pobytem i legalną pracą w Polsce',
        en: 'We provide all necessary documents related to staying and legal work in Poland',
        ua: "Ми надаємо всі необхідні документи, пов'язані з перебуванням і легальною роботою в Польщі",
        ru: 'Мы предоставляем все необходимые документы, связанные с пребыванием и легальной работой в Польше',
    },
    'our-services-cards__item-p-2': {
        pl: 'Praca w Polsce dla obcokrajowców. Jeśli jesteś zainteresowany legalną pracą w Polsce, zapraszamy do kontaktu. Proces rekrutacji obejmuje, obok rekrutacji, selekcji i rozmowy kwalifikacyjnej, pozyskanie dodatkowych informacji o kandydatach, podpisanie umowy oraz adaptację nowych pracowników',
        en: 'Work in Poland for foreigners. If you are interested in legal work in Poland, we suggest you contact us. The recruiting process includes recruitment, selection, and interview, obtaining additional information about candidates, signing a contract, and adopting new employees',
        ua: "Робота в Польщі для іноземців. Якщо ви зацікавлені легальною працею в Польщі, пропонуємо вам зв'язатися з нами. Процес рекрутингу передбачає поряд із залученням, відбором і співбесідою також отримання додаткової інформації про кандидатів, підписання контракту й адаптацію нових працівників",
        ru: 'Работа для иностранцев в Польше. Если вы заинтересованы в легальном труде в Польше, предлагаем вам связаться с нами. Процесс рекрутинга предусматривает наряду с привлечением, отбором и собеседованием также получение дополнительной информации о кандидатах, подписание контракта и адаптацию новых работников',
    },
    'our-services-cards__item-p-3': {
        pl: 'Jeśli nie masz doświadczenia w pracach spawalniczych - to nie problem. Zapisz się u nas na szkolenie spawalnicze, szybko i sprawnie opanujesz nową specjalność',
        en: 'If you do not have experience in welding work - this is not a problem. Sign up for welding training with us, you will quickly and efficiently master a new specialty',
        ua: 'Якщо у Вас не має досвіду в зварювальних роботах - це не проблема. Запишіться до нас на навчання зварювальника, швидко і якісно опануєте нову спеціальність',
        ru: 'Если у Вас нет опыта в сварочных работах - это не проблема. Запишитесь к нам на обучение сварщика, быстро и качественно овладеете новой специальностью',
    },
    'our-services-cards__item-button': {
        pl: 'Więcej szczegółów',
        en: 'More details',
        ua: 'Детальніше',
        ru: 'Подробнее',
    },
    countries__h2: {
        pl: 'Kraje partnerskie',
        en: 'Partner countries',
        ua: 'Країни-партнери',
        ru: 'Страны-партнеры',
    },
    'forma-info__h1': {
        pl: 'Zdobądź najbardziej aktualne oferty pracy!',
        en: 'Get the most current vacancies!',
        ua: 'Отримуйте найактуальніші вакансії!',
        ru: 'Получайте самые актуальные вакансии!',
    },
    'forma-info__p': {
        pl: 'Wypełnij formularz, a my niezwłocznie się z Tobą skontaktujemy!',
        en: 'Fill out the form and we will contact you right away!',
        ua: "Заповніть форму і ми одразу з Вами зв'яжемося!",
        ru: 'Заполните форму, и мы сразу с Вами свяжемся!',
    },
    'form-modal-inner-info__h4': {
        pl: 'Bądźmy w kontakcie!',
        en: "Let's keep in touch!",
        ua: "Давайте будемо на зв'язку!",
        ru: 'Давайте будем на связи!',
    },
    'form-modal-inner-info__p': {
        pl: 'Wypełnij poniższy formularz, a my skontaktujemy się z Tobą!',
        en: 'Fill out the form below and we will contact you!',
        ua: "Заповніть форму нижче і ми з Вами зв'яжемося!",
        ru: 'Заполните форму ниже и мы с Вами свяжемся!',
    },
    'form-modal-inner-form__submit-button': {
        pl: 'Wysłać',
        en: 'Send',
        ua: 'Відправити',
        ru: 'Отправить',
    },
    'form-modal-inner-form__input-1': {
        pl: 'Twoje imię',
        en: 'Your name',
        ua: "Ваше ім'я",
        ru: 'Ваше имя',
    },
    'form-modal-inner-form__input-2': {
        pl: 'Twój numer telefonu',
        en: 'Your phone number',
        ua: 'Ваш номер телефону',
        ru: 'Ваш номер телефона',
    },
    'form-modal-inner-form__correctly-input-empty': {
        pl: 'Pole obowiązkowe',
        en: 'Obligatory field',
        ua: "Обов'язкове поле",
        ru: 'Обязательное поле',
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

            if (item.type && ['text', 'tel'].includes(item.type)) {
                item.placeholder = currentTexts[key][currentLang]
            }
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

//Validation form

// const inputName = document.querySelector('#input-name')
// const inputPhone = document.querySelector('#input-phone')

// const notCorrectInputName = document.querySelector(
//     '.form-modal-inner-form__correctly-input-name'
// )
// const notCorrectInputPhone = document.querySelector(
//     '.form-modal-inner-form__correctly-input-phone'
// )

// const inputs = [inputName, inputPhone]

// const form = document.querySelector('.form-modal-inner-form')

// form.addEventListener('submit', event => {
//     event.preventDefault()

//     inputs.forEach(input => {
//         const notCorrectSpanInfo = input.nextElementSibling
//         if (input.value.length === 0) {
//             notCorrectSpanInfo.textContent = 'Pole obowiązkowe'
//         }
//     })
// })
