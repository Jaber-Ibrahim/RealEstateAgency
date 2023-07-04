let index = 0 ;
let myButtonLeft = document.querySelector(".customers .swiper-customers .Indicators .Left");
let Swipper = document.querySelector(".customers .swiper-customers .swiper-wrapper");
let myButtonRight = document.querySelector(".customers .swiper-customers .Indicators .Right");



if (index >= 0) {
  myButtonLeft.classList.add("deactive");
} else if (index <= -3 ) {
  myButtonRight.classList.add("deactive")
}


let myInterval = setInterval(() => {
  console.log(index)
  index--;
  Swipper.style.transform = `translate(${20*index}%)`;
  myButtonLeft.classList.remove("deactive");
  if (index <= -4) {
    myButtonRight.classList.add("deactive");
    index = 1;
  }
   else if (index === 0){
    myButtonLeft.classList.add("deactive");
    myButtonRight.classList.remove("deactive");
  }
}, 2000);



myButtonRight.addEventListener("click" , () => {
  index--;


  if (window.matchMedia("(max-width: 1057px)").matches) {
    myButtonLeft.classList.remove("deactive");
    if (index <= -4) {
      myButtonRight.classList.add("deactive");
    }
    Swipper.style.transform = `translate(${20*index}%)`;
    // console.log("media")
} 

else {
  myButtonLeft.classList.remove("deactive");
  if (index <= -3) {
    myButtonRight.classList.add("deactive");
  }
  Swipper.style.transform = `translate(${20*index}%)`;
  // console.log("ggggggggg")
  // console.log(index)
  // console.log(index*20)

}

    
    
})
myButtonLeft.addEventListener("click" , () => {
  index++;
  myButtonRight.classList.remove("deactive");
    if (index >= 0) {
      myButtonLeft.classList.add("deactive");
    }
    Swipper.style.transform = `translate(${20*index}%)`;
    // console.log("ggggggggg")
    // console.log(index)
    // console.log(index*20)
  })

