function scrollShow(scrollID) {
  const show = document.querySelector(scrollID)
  show.classList.toggle("show")
}
const nav = document.querySelector('nav')
const header = document.querySelector('header')
// console.log(header) 檢查用
const offer = document.querySelector('#offer')
window.addEventListener("scroll", () => {
  // console.log(window.scrollY, offer.offsetTop) 檢查用
  if (window.scrollY >= offer.offsetTop - 200) {
    nav.classList.add('navClose')
    header.classList.add('navClose')
  } else {
    nav.classList.remove('navClose')
    header.classList.remove('navClose')
  }
})

function popShow(element) {
  const jump = document.querySelector(element)
  const body = document.querySelector('body')
  body.style.overflowY = "hidden"
  jump.classList.add("popBG-show")
}
function popClose(element) {
  const jump = document.querySelector(element)
  const body = document.querySelector('body')
  body.style.overflowY = "scroll"
  jump.classList.remove("popBG-show")
}

const thing2_02 = document.querySelector(".thing02-2")
const thing17 = document.querySelectorAll(".thing17-3 img")
window.addEventListener('load', () => {
  thing2_02.classList.add('animate__fadeInUp', 'showtitle')
  thing17.forEach((item, ind) => {
    if (ind == 0) {
      item.classList.add('marquee')
    } else if (ind == 1) {
      item.classList.add('marquee2')
    }
  })
})