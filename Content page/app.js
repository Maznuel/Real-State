//Select the DOM
const divs = document.querySelectorAll('.d')
const bedInfo = document.querySelectorAll('.bed-info')
const bathInfo = document.querySelectorAll('.bath-info')
const priceInfo = document.querySelectorAll('.price-info')
const cityInfo = document.querySelectorAll('.location-info')
const metersInfo = document.querySelectorAll('.meters-info')
const arrowsContainer = document.querySelectorAll('.arrow-container')
const cityFilter = document.querySelector('#city-filter')
const priceFilter = document.querySelector('#price-filter')
const metersFilter = document.querySelector('#meters-filter')
const tl = gsap.timeline()
let activePrice = []
let activeMeters = []
let activeCity = []





//Change Image Function
const IMGnumber = function (e) {
    const i = e.target.parentNode.parentNode.parentNode.index
    //Left side
    if (e.target.classList.contains('fa-angle-left')) {
        if (e.target.parentNode.parentNode.parentNode.classList.contains('img1')) {
            this.parentNode.parentNode.style.backgroundImage = `url(${img3[i]})`
            this.parentNode.parentNode.classList.replace('img1', 'img3')
        }

        else if (e.target.parentNode.parentNode.parentNode.classList.contains('img2')) {
            this.parentNode.parentNode.style.backgroundImage = `url(${img1[i]})`
            this.parentNode.parentNode.classList.replace('img2', 'img1')
        }

        else if (e.target.parentNode.parentNode.parentNode.classList.contains('img3')) {
            this.parentNode.parentNode.style.backgroundImage = `url(${img2[i]})`
            this.parentNode.parentNode.classList.replace('img3', 'img2')
        }
        //Right side
    } if (e.target.classList.contains('fa-angle-right')) {
        if (e.target.parentNode.parentNode.parentNode.classList.contains('img1')) {
            this.parentNode.parentNode.style.backgroundImage = `url(${img2[i]})`
            this.parentNode.parentNode.classList.replace('img1', 'img2')
        }

        else if (e.target.parentNode.parentNode.parentNode.classList.contains('img2')) {
            this.parentNode.parentNode.style.backgroundImage = `url(${img3[i]})`
            this.parentNode.parentNode.classList.replace('img2', 'img3')
        }

        else if (e.target.parentNode.parentNode.parentNode.classList.contains('img3')) {
            this.parentNode.parentNode.style.backgroundImage = `url(${img1[i]})`
            this.parentNode.parentNode.classList.replace('img3', 'img1')
        }
    }
}



//Event listener to Image change arrows
arrowsContainer.forEach((arrow) => { arrow.addEventListener('click', IMGnumber) })



///Data Base
const data = [
    {
        img1: 'https://pic.le-cdn.com/thumbs/1024x768/502/1/properties/Property-670a48c35a05cbeeb12baaa991f78e66-58791565.jpg',
        img2: 'https://pic.le-cdn.com/thumbs/1024x768/502/3/properties/Property-bedc7da0cbbcc88be20d41c7b0f25484-58791565.jpg',
        img3: 'https://pic.le-cdn.com/thumbs/1024x768/502/4/properties/Property-7a44e60d50b751625eafd069ccf60ad0-58791565.jpg',
        bath: 6,
        city: 'Madrid',
        bedroom: 7,
        km2: ' 1050',
        price: '5 900 000'
    },
    {
        img1: 'https://pic.le-cdn.com/thumbs/1024x768/502/1/properties/Property-588dfe2946711061f4714997db5cd3e3-39218081.jpg',
        img2: 'https://pic.le-cdn.com/thumbs/1024x768/502/2/properties/Property-6fbdeb99bdd589647894588989cb54a3-39218081.jpg',
        img3: 'https://pic.le-cdn.com/thumbs/1024x768/502/3/properties/Property-67998739e6357112d085c9d90e743cf7-39218081.jpg',
        bath: 15,
        city: 'Madrid',
        bedroom: 9,
        km2: 2709,
        price: '20 000 000'
    }
    ,
    {
        img1: 'https://pic.le-cdn.com/thumbs/1024x768/502/1/properties/Property-8fdccde2a4e6b37f69b22ecc608746b5-98339285.jpg',
        img2: 'https://pic.le-cdn.com/thumbs/1024x768/502/3/properties/Property-abdd59d8389d34acb5dc0faa00faf45b-98339285.jpg',
        img3: 'https://pic.le-cdn.com/thumbs/1024x768/502/4/properties/Property-0bc44bcb7404fe4f240411c4bf192673-98339285.jpg',
        bath: 12,
        city: 'Madrid',
        bedroom: 11,
        km2: 3500,
        price: '11 000 000',
    },
    {
        img1: 'https://pic.le-cdn.com/thumbs/1024x768/551/1/properties/Property-fb2ef3fdf3691c6db5cf6372721f4799-104813565.jpg',
        img2: 'https://pic.le-cdn.com/thumbs/1024x768/551/2/properties/Property-8283d81e3e549c756335680e4f50cf1d-104813565.jpg',
        img3: 'https://pic.le-cdn.com/thumbs/1024x768/551/2/properties/Property-8283d81e3e549c756335680e4f50cf1d-104813565.jpg',
        bath: 12,
        city: 'Barcelona',
        bedroom: 6,
        km2: 1400,
        price: '21 000 000',
    },
    {
        img1: 'https://pic.le-cdn.com/thumbs/1024x768/04/1/properties/Property-eb910000000005b200015f68bb7a-95588843.jpg',
        img2: 'https://pic.le-cdn.com/thumbs/1024x768/04/5/properties/Property-eb910000000005b200055f68bb7a-95588843.jpg',
        img3: 'https://pic.le-cdn.com/thumbs/1024x768/04/10/properties/Property-eb910000000005b2000a5f68bb7a-95588843.jpg',
        bath: 6,
        city: 'Malaga',
        bedroom: 6,
        km2: 730,
        price: '2 650 000',
    },
    {
        img1: 'https://pic.le-cdn.com/thumbs/1024x768/587/1/properties/Property-31f3da401438dd76b803c6ceeadbb1bd-82377405.jpg',
        img2: 'https://pic.le-cdn.com/thumbs/1024x768/587/2/properties/Property-d2b4f73414b28b2a60b42366c4318a87-82377405.jpg',
        img3: 'https://pic.le-cdn.com/thumbs/1024x768/587/8/properties/Property-4c94690026c6d5f17859bebcc2439f69-82377405.jpg',
        bath: 4,
        city: 'Malaga',
        bedroom: 5,
        km2: 282,
        price: '3 650 000',
    },
    {
        img1: 'https://pic.le-cdn.com/thumbs/1024x768/04/1/properties/Property-3b9e00000000054c00015ebab994-88907323.jpg',
        img2: 'https://pic.le-cdn.com/thumbs/1024x768/04/2/properties/Property-3b9e00000000054c00025ebab994-88907323.jpg',
        img3: 'https://pic.le-cdn.com/thumbs/1024x768/04/8/properties/Property-3b9e00000000054c00085ebab994-88907323.jpg',
        bath: 8,
        city: 'Ibiza',
        bedroom: 12,
        km2: 1048,
        price: '9 800 000',
    },
    {
        img1: 'https://pic.le-cdn.com/thumbs/1024x768/04/1/properties/Property-fffe000000000671000160abdaf1-108134143.jpg',
        img2: 'https://pic.le-cdn.com/thumbs/1024x768/04/10/properties/Property-fffe000000000671000a60abdaf1-108134143.jpg',
        img3: 'https://pic.le-cdn.com/thumbs/1024x768/04/21/properties/Property-fffe000000000671001560abdaf1-108134143.jpg',
        bath: 3,
        city: 'Ibiza',
        bedroom: 3,
        km2: 349,
        price: '1 690 000',
    },
    {
        img1: 'https://pic.le-cdn.com/thumbs/1024x768/04/1/properties/Property-8bff000000000671000160abdd8b-108134283.jpg',
        img2: 'https://pic.le-cdn.com/thumbs/1024x768/04/2/properties/Property-8bff000000000671000260abdd8b-108134283.jpg',
        img3: 'https://pic.le-cdn.com/thumbs/1024x768/04/8/properties/Property-8bff000000000671000860abdd8b-108134283.jpg',
        bath: 3,
        city: 'ibiza',
        bedroom: 3,
        km2: 245,
        price: '1 780 000',
    },
    {
        img1: 'https://pic.le-cdn.com/thumbs/1024x768/793/1/properties/Property-0ef86f8673927b9bb1ab26631430f4fc-94008425.jpg',
        img2: 'https://pic.le-cdn.com/thumbs/1024x768/793/3/properties/Property-7729d14a5650dc3a742e0fe38d2c0a06-94008425.jpg',
        img3: 'https://pic.le-cdn.com/thumbs/1024x768/793/8/properties/Property-03ed531223b18e22f278311e2926bbd3-94008425.jpg',
        bath: 7,
        city: 'Marbella',
        bedroom: 7,
        km2: 600,
        price: '6 500 000',
    },
    {
        img1: 'https://pic.le-cdn.com/thumbs/1024x768/04/1/properties/Property-8bff000000000671000160abdd8b-108134283.jpg',
        img2: 'https://pic.le-cdn.com/thumbs/1024x768/04/2/properties/Property-8bff000000000671000260abdd8b-108134283.jpg',
        img3: 'https://pic.le-cdn.com/thumbs/1024x768/04/8/properties/Property-8bff000000000671000860abdd8b-108134283.jpg',
        bath: 3,
        city: 'ibiza',
        bedroom: 3,
        km2: 245,
        price: '2 150 000',
    },
    {
        img1: 'https://pic.le-cdn.com/thumbs/1024x768/04/1/properties/Property-8bff000000000671000160abdd8b-108134283.jpg',
        img2: 'https://pic.le-cdn.com/thumbs/1024x768/04/2/properties/Property-8bff000000000671000260abdd8b-108134283.jpg',
        img3: 'https://pic.le-cdn.com/thumbs/1024x768/04/8/properties/Property-8bff000000000671000860abdd8b-108134283.jpg',
        bath: 3,
        city: 'ibiza',
        bedroom: 3,
        km2: 245,
        price: '2 150 000',
    }
    ///////////////repeated
    ,
    {
        img1: 'https://pic.le-cdn.com/thumbs/1024x768/04/1/properties/Property-eb910000000005b200015f68bb7a-95588843.jpg',
        img2: 'https://pic.le-cdn.com/thumbs/1024x768/04/5/properties/Property-eb910000000005b200055f68bb7a-95588843.jpg',
        img3: 'https://pic.le-cdn.com/thumbs/1024x768/04/10/properties/Property-eb910000000005b2000a5f68bb7a-95588843.jpg',
        bath: 6,
        city: 'Malaga',
        bedroom: 6,
        km2: 730,
        price: '2 650 000',
    },
    {
        img1: 'https://pic.le-cdn.com/thumbs/1024x768/587/1/properties/Property-31f3da401438dd76b803c6ceeadbb1bd-82377405.jpg',
        img2: 'https://pic.le-cdn.com/thumbs/1024x768/587/2/properties/Property-d2b4f73414b28b2a60b42366c4318a87-82377405.jpg',
        img3: 'https://pic.le-cdn.com/thumbs/1024x768/587/8/properties/Property-4c94690026c6d5f17859bebcc2439f69-82377405.jpg',
        bath: 4,
        city: 'Malaga',
        bedroom: 5,
        km2: 282,
        price: '3 650 000',
    },
    {
        img1: 'https://pic.le-cdn.com/thumbs/1024x768/04/1/properties/Property-3b9e00000000054c00015ebab994-88907323.jpg',
        img2: 'https://pic.le-cdn.com/thumbs/1024x768/04/2/properties/Property-3b9e00000000054c00025ebab994-88907323.jpg',
        img3: 'https://pic.le-cdn.com/thumbs/1024x768/04/8/properties/Property-3b9e00000000054c00085ebab994-88907323.jpg',
        bath: 8,
        city: 'Ibiza',
        bedroom: 12,
        km2: 1048,
        price: '9 800 000',
    },
    {
        img1: 'https://pic.le-cdn.com/thumbs/1024x768/04/1/properties/Property-fffe000000000671000160abdaf1-108134143.jpg',
        img2: 'https://pic.le-cdn.com/thumbs/1024x768/04/10/properties/Property-fffe000000000671000a60abdaf1-108134143.jpg',
        img3: 'https://pic.le-cdn.com/thumbs/1024x768/04/21/properties/Property-fffe000000000671001560abdaf1-108134143.jpg',
        bath: 3,
        city: 'Ibiza',
        bedroom: 3,
        km2: 349,
        price: '1 690 000',
    },
    {
        img1: 'https://pic.le-cdn.com/thumbs/1024x768/04/1/properties/Property-8bff000000000671000160abdd8b-108134283.jpg',
        img2: 'https://pic.le-cdn.com/thumbs/1024x768/04/2/properties/Property-8bff000000000671000260abdd8b-108134283.jpg',
        img3: 'https://pic.le-cdn.com/thumbs/1024x768/04/8/properties/Property-8bff000000000671000860abdd8b-108134283.jpg',
        bath: 3,
        city: 'ibiza',
        bedroom: 3,
        km2: 245,
        price: '1 780 000',
    },
    {
        img1: 'https://pic.le-cdn.com/thumbs/1024x768/793/1/properties/Property-0ef86f8673927b9bb1ab26631430f4fc-94008425.jpg',
        img2: 'https://pic.le-cdn.com/thumbs/1024x768/793/3/properties/Property-7729d14a5650dc3a742e0fe38d2c0a06-94008425.jpg',
        img3: 'https://pic.le-cdn.com/thumbs/1024x768/793/8/properties/Property-03ed531223b18e22f278311e2926bbd3-94008425.jpg',
        bath: 7,
        city: 'Marbella',
        bedroom: 7,
        km2: 600,
        price: '6 500 000',
    },
    {
        img1: 'https://pic.le-cdn.com/thumbs/1024x768/80/4/properties/Property-2e52c2b4ff9b10598684485710e94146-108074585.jpg',
        img2: 'https://pic.le-cdn.com/thumbs/1024x768/80/7/properties/Property-e9c24c974b661f339d56b18d092cf4e9-108074585.jpg',
        img3: 'https://pic.le-cdn.com/thumbs/1024x768/80/11/properties/Property-d54a60b05d89f3ff8724e24e1501e619-108074585.jpg',
        bath: 3,
        city: 'ibiza',
        bedroom: 3,
        km2: 245,
        price: '2 300 000',
    },
    {
        img1: 'https://pic.le-cdn.com/thumbs/1024x768/480/1/properties/Property-3040553ce7ae89a95a4a6b1e72ed4223-103165345.jpg',
        img2: 'https://pic.le-cdn.com/thumbs/1024x768/480/8/properties/Property-c18562ef045584b2b8d4537b0956b6a5-103165345.jpg',
        img3: 'https://pic.le-cdn.com/thumbs/1024x768/480/13/properties/Property-db714251c057f4c5e97f5624a78e7122-103165345.jpg',
        bath: 3,
        city: 'ibiza',
        bedroom: 3,
        km2: 245,
        price: '5 300 000',
    }
    ,
    {
        img1: 'https://pic.le-cdn.com/thumbs/1024x768/502/1/properties/Property-d31b9cb5540fe8d12c7cb46e054f9486-99165285.jpg',
        img2: 'https://pic.le-cdn.com/thumbs/1024x768/502/3/properties/Property-b8c28d243840f316d7278e13541a37fd-99165285.jpg',
        img3: 'https://pic.le-cdn.com/thumbs/1024x768/502/16/properties/Property-20b527682aff9e015e9b80914f0018d0-99165285.jpg',
        bath: 3,
        city: 'ibiza',
        bedroom: 3,
        km2: 245,
        price: '1 270 000',
    }
]
///Creating empty arrays
let img3 = []
let img2 = []
let img1 = []
let beds = []
let baths = []
let prices = []
let cities = []
let meters = []
//Pushing data into the arrays
for (let i = 0; i < data.length; i++) {
    img1.push(data[i].img1)
    img2.push(data[i].img2)
    img3.push(data[i].img3)
}
for (let i = 0; i < data.length; i++) {
    beds.push(data[i].bedroom)
}
for (let i = 0; i < data.length; i++) {
    baths.push(data[i].bath)
}
for (let i = 0; i < data.length; i++) {
    prices.push(data[i].price)
}
for (let i = 0; i < data.length; i++) {
    cities.push(data[i].city)
}
for (let i = 0; i < data.length; i++) {
    meters.push(data[i].km2)
}



//Implementing data in the DOM
bedInfo.forEach((h6, index) => {
    h6.innerHTML = `${beds[index]}`
})
divs.forEach((div, index) => {
    div.classList.add('img1')
    div.style.backgroundImage = `url('${img1[index]}')`
    div.index = index
})
bathInfo.forEach((h6, index) => {
    h6.innerHTML = `${baths[index]}`
})
priceInfo.forEach((h6, index) => {
    h6.innerHTML = `${prices[index]}`
})
cityInfo.forEach((h6, index) => {
    h6.innerHTML = `${cities[index]}`
})
metersInfo.forEach((h6, index) => {
    h6.innerHTML = `${meters[index] + ' m2'}`
})






///Price filter algorithm
let a = []

divs.forEach((div) => {
    a.push(div.children[1].children[2].children[1].innerHTML)
})

const b = a.map((a) => {
    return a.replace(/\s+/g, '')
})

divs.forEach((div, index) => {
    div.classList.add(b[index])
})

let priceDivs = []
let divsArray = [...divs]


const priceFilterFunc = (e) => {
    activePrice = []
    if (e.target.value == 2000000) {
        priceDivs = divsArray.filter((div) => {
            return (div.classList[3] < 2000000)
        })
        divsArray.forEach((div) => {
            div.style.display = 'none'
        })
        priceDivs.forEach((div) => {
            div.style.display = 'none'
            activePrice.push(div)
        })
        return
    }
    else if (e.target.value == 5000000) {
        priceDivs = []
        priceDivs = divsArray.filter((div) => {
            return (div.classList[3] < 5000000 && div.classList[3] > 2000000)
        })
        divsArray.forEach((div) => {
            div.style.display = 'none'
        })
        priceDivs.forEach((div) => {
            div.style.display = 'none'
            activePrice.push(div)
        })
        return
    }
    else if (e.target.value == 10000000) {
        priceDivs = []
        priceDivs = divsArray.filter((div) => {
            return (div.classList[3] > 5000000 && div.classList[3] < 10000000)
        })
        divsArray.forEach((div) => {
            div.style.display = 'none'
        })
        priceDivs.forEach((div) => {
            div.style.display = 'none'
            activePrice.push(div)
        })
        return
    }
    else if (e.target.value == 15000000) {
        priceDivs = []
        priceDivs = divsArray.filter((div) => {
            return (div.classList[3] > 10000000)
        })
        divsArray.forEach((div) => {
            div.style.display = 'none'
        })
        priceDivs.forEach((div) => {
            div.style.display = 'none'
            activePrice.push(div)
        })
        return
    }
    else if (e.target.value == 'none') {
        divs.forEach((div) => {
            div.style.display = 'none'
        })
    }
}



let metersArray = []
let metersDiv = [...divs]

//Filters
const metersFilterFunc = (e) => {
    activeMeters = []
    if (e.target.value == 500) {
        metersArray = metersDiv.filter((div) => {
            return (parseInt(div.children[1].children[4].children[1].innerHTML) < 500)
        })
        divs.forEach((div) => {
            div.style.display = 'none'
        })
        metersArray.forEach((div) => {
            div.style.display = 'none'
            activeMeters.push(div)
        })
    }
    else if (e.target.value == 1000) {
        metersArray = metersDiv.filter((div) => {
            return (parseInt(div.children[1].children[4].children[1].innerHTML) > 500 &&
                parseInt(div.children[1].children[4].children[1].innerHTML) < 1000)
        })
        divs.forEach((div) => {
            div.style.display = 'none'
        })
        metersArray.forEach((div) => {
            div.style.display = 'none'
            activeMeters.push(div)
        })
    }
    else if (e.target.value == 2000) {
        metersArray = metersDiv.filter((div) => {
            return (parseInt(div.children[1].children[4].children[1].innerHTML) > 1000 &&
                parseInt(div.children[1].children[4].children[1].innerHTML) < 2000)
        })
        divs.forEach((div) => {
            div.style.display = 'none'
        })
        metersArray.forEach((div) => {
            div.style.display = 'none'
            activeMeters.push(div)
        })
    }
    else if (e.target.value == 3000) {
        metersArray = metersDiv.filter((div) => {
            return (parseInt(div.children[1].children[4].children[1].innerHTML) > 2000)
        })
        divs.forEach((div) => {
            div.style.display = 'none'
        })
        metersArray.forEach((div) => {
            div.style.display = 'none'
            activeMeters.push(div)
        })
    }


    else if (e.target.value = 'none') {
        divs.forEach((div) => {
            div.style.display = 'none'
        })
    }


}
divs.forEach((div) => {
    div.style.scale = '1.4'
})
const cityFilterFunc = (e) => {
    activeCity = []
    cityInfo.forEach((h6) => {
        if (h6.innerHTML == e.target.value) {
            h6.parentElement.parentElement.parentElement.style.display = 'none'
            activeCity.push(h6.parentElement.parentElement.parentElement)
        } else {
            h6.parentElement.parentElement.parentElement.style.display = 'none'
        }
    })
    if (e.target.value == 'none') {
        divs.forEach((div) => {
            div.style.display = 'flex'
        })
    }

}
priceFilter.addEventListener('change', function (e) {
    priceFilterFunc(e)
    displayNone()
    masterFunction()
})


cityFilter.addEventListener('change', function (e) {
    cityFilterFunc(e)
    displayNone()
    masterFunction()
})

metersFilter.addEventListener('change', function (e) {
    metersFilterFunc(e)
    displayNone()
    masterFunction()
})

//GSAP
tl.from('.filters', { opacity: 0, duration: 0.8 })
divs.forEach((div) => {
    tl.from(div, { opacity: 0, duration: 0.2 })
})




const displayNone = function () {
    divs.forEach((div) => {
        gsap.to(div, { display: 'none' })
    })
}

const masterFunction = function () {
    const a = priceFilter.value
    const b = cityFilter.value
    const c = metersFilter.value
    let tarzan = []

    if (a != 'none' && b != 'none' && c != 'none') {
        tarzan = activeCity.filter((item) => {
            if (activeMeters.includes(item) && activePrice.includes(item) && activeCity.includes(item)) {
                return item
            }
        })
    }
    if (a != 'none' && b == 'none' && c != 'none') {
        tarzan = activeMeters.filter((item) => {
            if (activePrice.includes(item)) {
                return item
            }
        })
    }
    if (a != 'none' && b == 'none' && c == 'none') {
        tarzan = activePrice
    }
    if (a == 'none' && b != 'none' && c != 'none') {
        tarzan = activeCity.filter((item) => {
            if (activeMeters.includes(item)) {
                return item
            }
        })
    }
    if (a == 'none' && b == 'none' && c != 'none') {
        tarzan = activeMeters
    }
    if (a == 'none' && b == 'none' && c == 'none') {
        divs.forEach((div) => {
            gsap.to(div, { display: 'flex' })
        })
    }
    if (a == 'none' && b != 'none' && c == 'none') {
        tarzan = activeCity
    }
    if (a != 'none' && b != 'none' && c == 'none') {
        tarzan = activeCity.filter((item) => {
            if (activePrice.includes(item)) {
                return item
            }
        })
    }
    tarzan.forEach((tar) => {
        gsap.to(tar, { display: 'flex' })
    })
}



