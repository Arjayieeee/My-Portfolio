const menu = document.querySelector(".toggle__menu");
const headernav = document.querySelector(".header__nav");
const malabo = document.querySelector(".joshuaulaga")

menu.addEventListener("click", () =>{
    menu.classList.toggle("open");
    headernav.classList.toggle("open");
    headernav.style=("transition: .5s ease")
    malabo.classList.toggle("show");
})


const links = document.querySelectorAll(".links__item h4")
links.forEach((go) => {
    go.addEventListener("click", () => {
        go.nextElementSibling.classList.toggle("open");
        go.querySelector("i").classList.toggle("open");
    })
})



// documunetation

// const togglemenu = document.querySelector(".doc__toggle__menu");
// const navi = document.querySelector(".doc__nav ul");
// // const bg = document.querySelector(".joshuaulaga")

// togglemenu.addEventListener("click", () =>{
//     togglemenu.classList.toggle("open");
//     navi.classList.toggle("open");
//     navi.style=("transition: .5s ease")
//     // malabo.classList.toggle("show");
// })



