const btnHamburger = document.querySelector(".homepage__hamburger")
const btnClose = document.querySelector(".navbar__close")
const navbarMenu = document.querySelector(".navbar")
const blurBackground = document.querySelector(".blur-background")

const handleStates = () => {
    navbarMenu.classList.toggle("on-screen")
    blurBackground.classList.toggle("hidden")
}

btnHamburger.addEventListener("click", handleStates)
btnClose.addEventListener("click", handleStates)
blurBackground.addEventListener("click", handleStates)


const btnLeft = document.querySelector(".switcher__left")
const btnRight = document.querySelector(".switcher__right")
const articlesContent = document.querySelectorAll(".description__article")
const homepageBackground = document.querySelector(".homepage")

let i = 0;
let backgrounds = ["firstImage", "secondImage", "thirdImage"]

btnRight.addEventListener("click", () => {
    i = i >= (backgrounds.length - 1) ? (backgrounds.length - 1) : i + 1;
    homepageBackground.classList.add(backgrounds[i])
    homepageBackground.classList.remove(backgrounds[i-1])

    articlesContent[i].classList.remove("hidden")
    articlesContent[i - 1].classList.add("hidden")
})

btnLeft.addEventListener("click", () => {
    i = i <= 0 ? 0 : i - 1;
    homepageBackground.classList.add(backgrounds[i])
    homepageBackground.classList.remove(backgrounds[i+1])

    articlesContent[i].classList.remove("hidden")
    articlesContent[i + 1].classList.add("hidden")
})