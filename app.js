const citiesText = document.querySelector('.cities')

const cities = ['Madrid', 'Barcelona', 'Malaga', 'Ibiza', 'La coruña', 'Marbella', 'Valencia'
    , 'Sevilla', 'Zaragoza', 'Valladolid', 'Cádiz']
let i = 0

setInterval(() => {
    let n = i % 11
    console.log(n)
    i++
    citiesText.innerHTML = cities[n]
}, 300)

changeCityHandler()