let navBar = document.querySelector('#navBar')
let logo = document.querySelector('#logo')
let links = document.querySelectorAll('.link')
let links_active = document.querySelector('.link-active')
let bars = document.querySelector('#bars')
let collapseContent = document.querySelector('#collapseContent')
let num1 = document.querySelector('#num1')
let num2 = document.querySelector('#num2')
let num3 = document.querySelector('#num3')
let wrapper = document.querySelector('#wrapper')
let swiperWrapper = document.querySelector('#swiperWrapper')

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


function numeriIncrementali(totale, numero, x) {
    let counter = 0
    let interval = setInterval(() => {
        if (counter<totale) {
            counter++
            numero.innerHTML= counter
        } else {
            clearInterval(interval)
        }
    }, x);
}



let check = true

let observer = new IntersectionObserver((entries)=>{
    entries.forEach(el => {
        if (check && el.isIntersecting) {
            numeriIncrementali(1000, num1, 1)
            numeriIncrementali(500, num2, 2)
            numeriIncrementali(100, num3, 10)
            check = false
        }
    });
})

observer.observe(num3)

let annunci = [
    {
        name: 'quadro',
        category: 'arredamento',
        price:'50'
    },
    {
        name: 'PC',
        category: 'elettronica',
        price:'1500'
    },
    {
        name: 'smartphone',
        category: 'elettronica',
        price:'500'
    },
    {
        name: 'felpa',
        category: 'abbigliamento',
        price:'40'
    },
    {
        name: 'scarpe',
        category: 'abbigliamento',
        price:'80'
    },
    {
        name: 'ps5',
        category: 'elettronica',
        price:'480'
    },
];

annunci.forEach((annuncio, i)=>{
    if (i>=annunci.length-3) {
        let div = document.createElement('div')
        wrapper.appendChild(div)
        div.classList.add("col-12", "col-lg-3", "mt-4")
        div.innerHTML = `
        <div class="card-custom border border-2 rounded-3">
            <img src="https://picsum.photos/${400+i}" alt="" class="card-img-top img-dim-custom1">
            <h3 class="text-d-gray">${annuncio.name}</h3>
            <h6 class="text-gray">${annuncio.category}</h6>
            <h6  class="text-gray">${annuncio.price}</h6>
        </div>
        `
    }
})

let reviews = [
    {
        name: 'Nicola',
        description: 'La bomba a mano'
    },
    {
        name: 'Valeria',
        description: 'Devo proprio dire qualcosa?'
    },
    {
        name: 'Giovanna',
        description: 'Sito da migliorare :( '
    },
    {
        name: 'Salvatore',
        description: 'Ti distruggo il sito'
     },
];

reviews.forEach((el)=>{
    let div = document.createElement('div')
    div.classList.add('swiper-slide', 'flex-column', 'gap-5', 'border-g-custom', 'rounded-3')
    div.innerHTML =`
    <div class="swiper-slide flex-column gap-5 border-g-custom rounded-3">
        <h4 class="fs-titoletto fw-bold ">${el.name}</h4>
        <p class=" fs-6 text-gray fst-italic">${el.description}</p>
    </div>
    `
    swiperWrapper.appendChild(div)
})



// Script Swipper
var swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });