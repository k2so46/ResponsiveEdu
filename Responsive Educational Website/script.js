let burger = document.querySelector(".burger")
let navbar = document.querySelector(".navbar")
let rightNav = document.querySelector(".right-nav")
let navlist = document.querySelector(".nav-list")
burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-resp')
    navlist.classList.toggle('v-class-resp')
    navbar.classList.toggle('h-nav-resp')
})