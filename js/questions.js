


const Cquestion= document.querySelectorAll(".Cquestion");

Cquestion.forEach(i => {
i.addEventListener("click", () => {
    i.classList.toggle("active");
    })
  })
