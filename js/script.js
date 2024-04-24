window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

//Language select//Language select//Language select//Language select//Language select//Language select//Language select

const selects = document.querySelectorAll(".header-language");

selects.forEach((select) => {
    const selectedItem = select.querySelector(
        ".header-language__main-selected"
    );
    const userLanguage = window.location.pathname.replaceAll("/", "") || "PL";
    console.log(userLanguage);
    selectedItem.textContent = userLanguage.toUpperCase();

    window.addEventListener("click", (event) => {
        if (!select.contains(event.target)) {
            select.classList.remove("open");
        } else {
            select.classList.toggle("open");
        }
    });
});

//Anchors//Anchors//Anchors//Anchors//Anchors//Anchors//Anchors

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", (event) => {
        event.preventDefault();

        const blockId = anchor.getAttribute("href");
        document
            .querySelector(blockId)
            .scrollIntoView({ behavior: "smooth", block: "start" });
    });
}
//Burger//Burger//Burger//Burger//Burger//Burger
const navigation = document.querySelector(".navigation");
const burger = document.querySelector(".header__burger");

function isNavigationShown() {
    burger.classList.toggle("active");
    navigation.classList.toggle("active");
    document.body.classList.toggle("lock");
    console.log(burger.classList.contains("active"));

    checkInertItems(burger.classList.contains("active"));
}

burger.addEventListener("click", isNavigationShown);

navigation.addEventListener("click", (event) => {
    const isAnchor = event.target.getAttribute("href")?.startsWith("#");
    const isFon = event.target === navigation;
    const isBurgerOpen = burger.classList.contains("active");

    if (isBurgerOpen && (isAnchor || isFon)) {
        isNavigationShown();
    }
});

//Slider//Slider//Slider//Slider//Slider//Slider//Slider//Slider

const sliderItems = [...document.querySelectorAll(".hover-slider__item")];
const navItems = [...document.querySelectorAll(".hover-slider-nav__item")];
const arrowLeft = document.querySelector("#hover-slider-button-left");
const arrowRight = document.querySelector("#hover-slider-button-right");

sliderItems.forEach((item, index) => {
    item.dataset.index = index;
    if (index === 0) {
        item.classList.add("hover-slider__item--active");
    }

    if (index !== 0) {
        item.querySelector(".get-vacancy-button").inert = true;
    }
});

navItems.forEach((item, index) => {
    item.dataset.index = index;

    if (index === 0) {
        item.classList.add("hover-slider-nav__item--active");
    }

    item.addEventListener("click", () => {
        toggleActivity(item.dataset.index);
        customClearInterval();
    });
});

function toggleActivity(index) {
    for (let i = 0; i < sliderItems.length; i++) {
        if (i === Number(index)) {
            sliderItems[i].classList.add("hover-slider__item--active");
            navItems[i].classList.add("hover-slider-nav__item--active");
            sliderItems[i].querySelector(".get-vacancy-button").inert = false;
        } else {
            sliderItems[i].classList.remove("hover-slider__item--active");
            navItems[i].classList.remove("hover-slider-nav__item--active");
            sliderItems[i].querySelector(".get-vacancy-button").inert = true;
        }
    }
}

arrowLeft.addEventListener("click", () => {
    clickArrowLeft();
    customClearInterval();
});

arrowRight.addEventListener("click", () => {
    clickArrowRight();
    customClearInterval();
});

let interval = setInterval(() => {
    clickArrowRight();
}, 9000);

function clickArrowRight() {
    const currentIndex = Number(
        document.querySelector(".hover-slider__item--active").dataset.index
    );

    if (currentIndex !== sliderItems.length - 1) {
        toggleActivity(currentIndex + 1);
    } else {
        toggleActivity(0);
    }
}

function clickArrowLeft() {
    const currentIndex = Number(
        document.querySelector(".hover-slider__item--active").dataset.index
    );

    if (currentIndex !== 0) {
        toggleActivity(currentIndex - 1);
    } else {
        toggleActivity(sliderItems.length - 1);
    }
}

function customClearInterval() {
    clearInterval(interval);
    interval = setInterval(() => {
        clickArrowRight();
    }, 9000);
}

//Modal//Modal//Modal//Modal//Modal//Modal//Modal

const modals = document.querySelectorAll(".modal");
const modalInner = document.querySelector(".modal__inner");
const certificatsImage = document.querySelector(".certificats-modal__img");
const certificats = document.querySelectorAll(".certificats__img");
const itemsForOpenFormBanner = [
    ...document.querySelectorAll(".get-vacancy-button"),
    ...document.querySelectorAll(".our-services-cards__item"),
    document.querySelector(".fixed-form-connection"),
];

let focusedElementBeforeModal;

function openModal(modal) {
    focusedElementBeforeModal = document.activeElement;
    modal.classList.add("active");
    document.body.classList.add("lock");
    checkInertItems(true);
    modal.querySelector("form input")?.focus();

    document.addEventListener("keydown", handleKeyPress.bind(null, modal));
}

function closeModal(modal) {
    modal.classList.remove("active");
    document.body.classList.remove("lock");

    checkInertItems(false);
    document.removeEventListener("keydown", handleKeyPress.bind(null, modal));

    focusedElementBeforeModal.tabIndex = -1;
    focusedElementBeforeModal?.focus();
    setTimeout(() => {
        focusedElementBeforeModal?.blur();
        focusedElementBeforeModal?.removeAttribute("tabIndex");
    }, 0);
}

function checkModalClickForClose(modal) {
    modal.addEventListener("click", (event) => {
        if (!event.target.closest(".modal__inner")) {
            closeModal(modal);
        }
    });
}

function handleKeyPress(modal, event) {
    if (event.key === "Escape") {
        closeModal(modal);
    }
}

certificats.forEach((item) => {
    item.addEventListener("click", (event) => {
        certificatsImage.src = event.target.src;
        const modal = document.querySelector(".modal[data-modal-certificats]");
        openModal(modal);
        checkModalClickForClose(modal);
    });
});

itemsForOpenFormBanner.forEach((item) => {
    item.addEventListener("click", () => {
        const modal = document.querySelector(".modal[data-modal-form]");

        if (item.className === "our-services-cards__item") {
            item.querySelector(".our-services-cards__item-button").focus();
        }

        openModal(modal);

        checkModalClickForClose(modal);
    });
});

function checkInertItems(isInert) {
    const otherItems = !burger.classList.contains("active")
        ? document.querySelectorAll("[data-inert]")
        : document.querySelectorAll(
              "[data-inert]:not(.header):not(.navigation)"
          );

    for (let i = 0; i < otherItems.length; i++) {
        otherItems[i].inert = isInert;
    }
}

//Form Send Successfully

const form = document.querySelector(".form-modal-inner-form");
const allInfo = document.querySelector(".form-modal-inner-info");
const submitButtonForLoader = document.querySelector(
    ".form-modal-inner-form__submit-button"
);

const inputName = document.querySelector("#input-name");
const inputPhone = document.querySelector("#input-phone");
const inputs = [inputName, inputPhone];

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const botToken = "6904558356:AAFfj-Rkeo_asYHqZrR1CCVUjvRiEjhiEMQ";
    const chatId = "5856785440";
    const message = `Новий клієнт
    Ім'я: ${inputName.value}
    Номер телефону: ${inputPhone.value}`;

    let correctFormsCount = 0;

    inputs.forEach((input) => {
        if (input.value.length === 0) {
            allInfo.classList.add("not-successfully-sent-form");
            input.classList.add("not-correct");
            input.nextElementSibling.classList.add("not-correct");
        } else {
            input.classList.remove("not-correct");
            input.nextElementSibling.classList.remove("not-correct");
            correctFormsCount++;
        }
    });

    if (correctFormsCount === inputs.length) {
        allInfo.classList.remove("not-successfully-sent-form");
        submitButtonForLoader.classList.add("active");
        console.log(inputName.value, inputPhone.value);
        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
            }),
        });

        setTimeout(() => {
            submitButtonForLoader.classList.remove("active");
            allInfo.classList.add("successfully-sent-form");
        }, 1000);
    }
});

inputPhone.addEventListener("input", (event) => {
    let inputValue = event.target.value;
    inputValue = inputValue.replace(/[^0-9+]/g, "");
    event.target.value = inputValue;
});
