const btnHamburger = document.querySelector(".homepage__hamburger")
const btnClose = document.querySelector(".navbar__close")
const navbarMenu = document.querySelector(".navbar")
const blurBackground = document.querySelector(".blur-background")

btnHamburger.addEventListener("click", () => {
    navbarMenu.classList.toggle("on-screen")
    blurBackground.classList.toggle("hidden")
})

btnClose.addEventListener("click", () => {
    navbarMenu.classList.toggle("on-screen")
    blurBackground.classList.toggle("hidden")
})

blurBackground.addEventListener("click", () => {
    navbarMenu.classList.toggle("on-screen")
    blurBackground.classList.toggle("hidden")
})