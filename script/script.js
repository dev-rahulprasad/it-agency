// menu-toggle start
const body = document.querySelector("body");
const menuBtn = document.querySelectorAll(".menuToggle");
const overlay = document.querySelector(".overlay");
const menuSlide = document.querySelector(".nav-menu");
const toggleSlide = ()=>{
    body.classList.toggle("overflow-hidden");
    menuSlide.classList.toggle("active");
    overlay.classList.toggle("active");
}
menuBtn.forEach((btn)=>{
btn.addEventListener("click",toggleSlide )
})
overlay.addEventListener("click", toggleSlide)
// menu-toggle end