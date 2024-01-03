let navBar = document.querySelector('#navBar')
let logo = document.querySelector('#logo')
let links = document.querySelectorAll('.link')
let links_active = document.querySelector('.link-active')
let bars = document.querySelector('#bars')
let collapseContent = document.querySelector('#collapseContent')
let btnFilter = document.querySelector('#btnFilter')
let filterContent = document.querySelector('#filterContent')





logo.addEventListener('mouseenter',()=>{
    logo.classList.add('text-d-green')
})
logo.addEventListener('mouseleave',()=>{
    logo.classList.remove('text-d-green')
})

links_active.addEventListener('mouseenter', ()=>{
    links_active.classList.add('text-d-green')
    links_active.classList.remove('text-g')
})
links_active.addEventListener('mouseleave', ()=>{
    links_active.classList.add('text-g')
    links_active.classList.remove('text-d-green')
})
bars.addEventListener('mouseenter', ()=>{
    bars.classList.add('text-d-green')
})
bars.addEventListener('mouseleave', ()=>{
    bars.classList.remove('text-d-green')
})



links.forEach(link => {
    link.addEventListener('mouseenter',()=>{
        link.classList.remove('text-d-gray')
        link.classList.add('text-g')
        link.classList.add('mini-border')

    })
    link.addEventListener('mouseleave',()=>{
        link.classList.remove('text-g')
        link.classList.remove('mini-border')
        link.classList.add('text-d-gray')
    })
});


window.addEventListener('scroll', ()=>{
    if(window.scrollY > 0){
        navBar.classList.remove('bg-w')
        navBar.classList.add('bg-g')
        logo.classList.remove('text-g')
        logo.classList.add('text-w')
        links_active.classList.remove('text-g')
        links_active.classList.add('text-w')
        links_active.addEventListener('mouseenter',()=>{
            links_active.classList.remove('text-w')
            links_active.classList.remove('text-g')
            links_active.classList.add('text-d-green')
        })
        links_active.addEventListener('mouseleave',()=>{
            links_active.classList.remove('text-d-green')
            links_active.classList.remove('text-g')
            links_active.classList.add('text-w')
        })
        links.forEach(link => {
            link.classList.remove('text-d-gray')
            link.classList.add('text-w')
            link.addEventListener('mouseenter',()=>{
                link.classList.remove('text-w')
                link.classList.remove('text-g')
                link.classList.add('text-d-green')
            })
            link.addEventListener('mouseleave',()=>{
                link.classList.remove('text-d-green')
                link.classList.add('text-w')
            })
        });
        bars.classList.remove('text-g')
        bars.classList.add('text-w')
        collapseContent.classList.remove('bg-w')
        collapseContent.classList.add('bg-g')
        collapseContent.classList.remove('text-d-gray')
        collapseContent.classList.add('text-w')

    }else{
        navBar.classList.remove('bg-g')
        navBar.classList.add('bg-w')
        logo.classList.remove('text-w')
        logo.classList.add('text-g')
        links_active.classList.remove('text-w')
        links_active.classList.add('text-g')
        links_active.addEventListener('mouseenter',()=>{
            links_active.classList.remove('text-w')
            links_active.classList.remove('text-g')
            links_active.classList.add('text-d-green')
        })
        links_active.addEventListener('mouseleave',()=>{
            links_active.classList.remove('text-w')
            links_active.classList.remove('text-d-green')
            links_active.classList.add('text-g')
        })
        links.forEach(link => {
            link.classList.remove('text-w')
            link.classList.add('text-d-gray')
                link.addEventListener('mouseenter',()=>{
                    link.classList.remove('text-d-gray')
                    link.classList.remove('text-d-green')
                    link.classList.add('text-g')
                    link.classList.add('mini-border')

                })
                link.addEventListener('mouseleave',()=>{
                    link.classList.remove('text-g')
                    link.classList.remove('text-w')
                    link.classList.remove('mini-border')
                    link.classList.add('text-d-gray')
                })
        });
        bars.classList.remove('text-w')
        bars.classList.add('text-g')
        collapseContent.classList.remove('bg-g')
        collapseContent.classList.add('bg-w')
        collapseContent.classList.remove('text-w')
        collapseContent.classList.add('text-d-gray')

    }
})

btnFilter.addEventListener('click',()=>{
    filterContent.classList.toggle('d-none')
})

fetch('./annunci.json').then((response)=>response.json()).then((data)=>{


    let checkWrapper = document.querySelector('#checkWrapper')

    function createCategory() {
        let mappatura = data.map((annuncio)=>annuncio.category)
        // console.log(mappatura);

        let categoriaSingla = []
        mappatura.forEach((categoria)=>{
            if (!categoriaSingla.includes(categoria)) {
                categoriaSingla.push(categoria)
            }
        })
        // console.log(categoriaSingla)
        categoriaSingla.forEach(categoria=>{
            let div = document.createElement('div')
            checkWrapper.appendChild(div)
            div.classList.add('form-check')
            div.innerHTML = `
            <input class="form-check-input input-custom border-g-custom-1 " type="radio" name="Category" id="${categoria}">
            <label class="form-check-label text-d-gray " for="${categoria}">
              ${categoria}
            </label>
            `
        })
    }

    createCategory()

    let singleCard = document.querySelector('#singleCard')

    function showAllCard(x) {
        singleCard.innerHTML = ''
        x.forEach((annuncio, i)=>{
            let div = document.createElement('div')
            singleCard.appendChild(div)
            div.classList.add('card-custom', 'my-4')
            div.innerHTML = `
            <img src="https://picsum.photos/${198+i}" alt="Immagine a caso" class="img-fluid rounded-start-3">
            <div class="card-content-custom m-2 d-flex flex-column justify-content-between">
                <h2 class="text-d-gray fw-bold">${annuncio.name}</h2>
                <h5 class="text-gray fst-italic">${annuncio.category}</h5>
                <p class="text-gray">${annuncio.price} $</p>
            </div>
            `
        })
    }

    showAllCard(data)

    let inputCustom = document.querySelectorAll('.input-custom')


    function filteredCard(x){
        let filtrato = x.filter(el => el.category == id)
        // console.log(filtrato)
        if (filtrato == '') {
            return x
        } else {
            return filtrato
        }
    }
    let id
    inputCustom.forEach(input =>{
        input.addEventListener('click',()=>{
            id = input.id
            filtroGlobale()
        })
    })

    let priceBar = document.querySelector('#priceBar')
    let maxValue = document.querySelector('#maxValue')

    function valoreMassimo() {
        let prezzi = data.map(annuncio => +annuncio.price)
        let massimo = Math.ceil(Math.max(...prezzi))

        priceBar.max = massimo
        priceBar.value = massimo

        maxValue.innerHTML = `${priceBar.value}$`

    }

    valoreMassimo()

    function filtroPrezzo(x) {
        let filtrato = x.filter(annuncio => annuncio.price <= priceBar.value)
        return (filtrato)
    }

    priceBar.addEventListener('input', ()=>{
        maxValue.innerHTML = `${priceBar.value} $`
        filtroGlobale()
    })


    let textFilter = document.querySelector('#textFilter')

    function filtroParola(x) {
        let filtrato = x.filter(annuncio => annuncio.name.toLowerCase().includes(textFilter.value.toLowerCase()))
        return filtrato
    }

    textFilter.addEventListener('input', (e)=>{
        filtroGlobale()
    })

    function filtroGlobale(){
        let filtroCategoria = filteredCard(data)
        let filtroPerPrezzo = filtroPrezzo(filtroCategoria)
        let filtroPerParola = filtroParola(filtroPerPrezzo)

        showAllCard(filtroPerParola)
    }


})