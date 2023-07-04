let bars = document.querySelector(".MainHero nav .Bars");
let myList = document.querySelector(".MainHero nav .Info");
let myIntro = document.querySelector(".MainHero .Intro");
let myNav = document.querySelector("nav");

let addClass = bars.addEventListener("click" , ()=>{
    myList.classList.toggle("active");
    myIntro.classList.toggle("deactive");
})


window.onscroll = () => {
    if (window.scrollY > 150) {
        myNav.classList.add("scrolling")
    } else {
        myNav.classList.remove("scrolling")
    }
}

