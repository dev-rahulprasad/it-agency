// menu-toggle start
const menuBtn = document.querySelectorAll(".menuToggle");
const overlay = document.querySelector(".overlay");
const menuSlide = document.querySelector(".nav-menu");
const toggleSlide = ()=>{
    menuSlide.classList.toggle("active");
    overlay.classList.toggle("active");
}
menuBtn.forEach((btn)=>{
btn.addEventListener("click",toggleSlide )
})
overlay.addEventListener("click", toggleSlide)
// menu-toggle end