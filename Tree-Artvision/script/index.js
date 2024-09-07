let viewedImg = document.querySelector(".viewed-img");
let slideshow = document.querySelector(".slideshow");

let viewedImgArr = Array.from(slideshow.children);

viewedImgArr.forEach((element) => {
    element.addEventListener("click", (e) => {
        if (e.target.tagName === "IMG") {
            console.log(e.target);
            viewedImg.src = e.target.src;
        }
    });
});

let toggleSpan = document.getElementById("toggleSpan");
let navBar = document.querySelector('.nav-bar')
let navLinks = document.querySelector('.nav-links')
let toggleSpanStyle = window.getComputedStyle(toggleSpan);
toggleSpan.addEventListener("click", (e) => {
    navLinks.classList.toggle('open')
    
    // navLinks.style.height = 100 + 'vh';
});
