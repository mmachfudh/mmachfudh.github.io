let btnSlider = document.querySelectorAll(".dot-slide")
let itemSlider = document.querySelectorAll(".tbc-items")
let navItem = document.querySelectorAll(".nav-item")
let backToTop = document.querySelector(".back-to-top a")

btnSlider.forEach(btn => {
  btn.addEventListener('click', function (event) {
    btnSlider.forEach(btn => {
      btn.classList.remove("active")
    })
    this.classList.add("active")
    let target = this.getAttribute("data-target")
    if(target != null){
      itemSlider.forEach(item=>{
        item.classList.remove("active")
      })
      document.querySelector(`#${target}`).classList.add("active")
    }
  })
})

function scrollToView(el){
  el.scrollIntoView({
    behavior: 'smooth'
  })
}

navItem.forEach(item => {
  item.addEventListener('click', function (event) {
    event.preventDefault();
    let target = this.querySelector("a").getAttribute("href")
    scrollToView(document.querySelector(target))
  })
})

backToTop.addEventListener('click', function (event) {
  event.preventDefault();
  let target = this.getAttribute("href")
  scrollToView(document.querySelector(target))
})