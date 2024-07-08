let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicator =document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1



nextButton.onclick = () => {
    let item0ld = container.querySelector('.list .item.active')
    item0ld.classList.remove('active')

    active = active + 1 > lastPosition ? 0 : active + 1 
    items [active].classList.add('active')

}

prevButton.onclick = () => {
    
}