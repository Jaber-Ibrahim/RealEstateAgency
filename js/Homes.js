let lis = document.querySelectorAll(".Homes .Homes__List li");
lis.forEach(li => {
    li.addEventListener("click" , () =>{
        lis.forEach(li => {
            li.classList.remove("active");
        });
        li.classList.add("active")
    })
});


async function fetchcards() {
    await fetch("./../JsonFiles/Homes.json")
    .then((result) => result.json())
    .then((result) => {
      data = result.homes;
      appenData(data,start);
    });
  }

  fetchcards();


  let data = [];
let start = 0;
let contianarr =  document.querySelector(".Homes .Homes__Container")
function appenData(data,start){
    for (let i = start; i < data.length; i++) {
      contianarr.innerHTML += `
      <div class="Homes__Card">
      <div class="Homes__Card-price">
        <p>$ ${data[i].price}</p>
        <span class="main-btn small">for sale</sp>
      </div>
      <div class="Homes__Card-description">
        <p>${data[i].description}</p>
        <span><img src="./imgs/Clock.svg" alt="clock"> ${data[i].time}</span>
      </div>
      <div class="Homes__Card-img">
        <img src=${data[i].img} alt="home">
        <img src="./imgs/CaretRight.svg" alt="arrow">
      </div>
      <div class="Homes__Card-address">
        <p>${data[i].address}</p>
        <!-- <span><img src="./imgs/HeartStraight.svg" alt="Heart"></span> -->
        <img src="./imgs/HeartStraight.svg" alt="Heart">
      </div>
    </div>
    
    `
    }
}