const images = [
    'https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?cs=srgb&dl=pexels-veeterzy-39811.jpg&fm=jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf8F7NoP7f81xk4tpYyhZWxbmr3DU7RLslkKsEZnMigE1fW-UCxB01k6l1AxtqzNfJf-I&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNz2kdytb3Vz95LRfoJDRRubCoykrS9ueZouLgY10iEAdmxlBqXYDNvlke8l1SSNAkmIA&usqp=CAU',
    'https://e0.pxfuel.com/wallpapers/108/142/desktop-wallpaper-nature-forest-road-and-background-dark-forest-road.jpg'
]

const slideImg = document.querySelector('.slide-img')
const slideDots = document.querySelector('.slide-dots')
let slideIndex = 0

//dots
let outputDots = ''
for(let i = 0; i < images.length; i++){
    outputDots += `<p class="dot" onclick = "dotSlide(${i})"></p>`
}

slideDots.innerHTML = outputDots
showSlide()
dotSlide(slideIndex)
function nextSlide(n){
    // console.log(n)
    slideIndex += n
    showSlide()
    dotSlide(slideIndex)
}

function showSlide(){

    if(slideIndex >= images.length){
        slideIndex = 0
    }
    if(slideIndex < 0){
        slideIndex = images.length - 1
    }
    // console.log(images[slideIndex])
    // slideImg.src = images[slideIndex]
    slideImg.innerHTML = `<img src="${images[slideIndex]}" alt="" class ="slide-img fade">`

    slideIndex += 1
    
    setTimeout(showSlide, 3000)

}

//dots
function dotSlide(n){
    const dots = document.querySelectorAll('.dot')
    for (let i = 0; i < dots.length; i++){
        dots[i].classList.remove('active')
    }
    dots[n].classList.add('active')
    slideIndex = n
    showSlide()
}