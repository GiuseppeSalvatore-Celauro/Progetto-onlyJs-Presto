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

let circle = document.querySelector('.circle')
let internalCircle = document.querySelector('.internalCircle')
let photoCircle = document.querySelectorAll('.photoCircle')

let check = true

internalCircle.addEventListener('click', ()=>{
    if (check) {
        internalCircle.style.transform = 'rotate(45deg)'
        photoCircle.forEach((circle, i)=> {
            let angolo = (360/photoCircle.length)*i
            circle.style.transform = `rotate(${angolo}deg) translate(150px) rotate(-${angolo}deg)`
            console.log(circle);
        });
        check = false
    }else{
        card.classList.add('d-none')
        internalCircle.style.transform = 'rotate(0deg)'
        photoCircle.forEach((circle, i)=> {
            circle.style.transform = `rotate(0deg) translate(0px)`
            console.log(circle);
        });
        check = true
    }
})

let array = [
    {nome: 'fuffi', url: 'https://picsum.photos/200', descrizione: 'fuffi è carino'},
    {nome: 'cuffi', url: 'https://picsum.photos/201', descrizione: 'cuffi è carino'},
    {nome: 'buffi', url: 'https://picsum.photos/202', descrizione: 'buffi è carino'},
    {nome: 'suffi', url: 'https://picsum.photos/203', descrizione: 'suffi è carino'},

]
let card = document.querySelector('#card')
let imgCard = document.querySelector('#imgCard')
let nomeCard = document.querySelector('#nomeCard')
let descrizione = document.querySelector('#descrizione')


photoCircle.forEach((circle, i) => {
    circle.style.backgroundImage = `url(${array[i].url})`
    circle.addEventListener('click', ()=>{
        card.classList.remove('d-none')
        imgCard.src = array[i].url
        nomeCard.innerHTML = array[i].nome
        descrizione.innerHTML = array[i].descrizione
    })
});
