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
