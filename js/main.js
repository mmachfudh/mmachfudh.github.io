let btnSlider = document.querySelectorAll(".dot-slide")
let itemSlider = document.querySelectorAll(".tbc-items")

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