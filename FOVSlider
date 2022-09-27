let fovBox = document.createElement('header')
div.className = 'weapon-select weapon-select--title roundme_sm'

let breaker = document.createElement('br')

let title = document.createElement('h1')
title.innerText = 'FOV Slider'

let value = document.createElement('h1')
value.innerText = 'Value: 1.5'

let slider = document.createElement('input')
slider.type = 'range'
slider.min = '0.1'
slider.max = '2.9'
slider.value = '1.5'
slider.step = '0.1'
slider.disabled = true
slider.className = 'slider'
slider.oninput = function () {
    value.innerHTML = `Value: ${this.value}`
}

fovBox.appendChild(breaker)
fovBox.appendChild(title)
fovBox.appendChild(slider)
fovBox.appendChild(value)
