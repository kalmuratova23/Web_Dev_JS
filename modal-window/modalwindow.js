const modal = document.querySelector('.modal');
// console.log(modal.classList)
const modalImg = document.querySelector('.modal-img')
const images = document.querySelectorAll('.img-item')
// console.log(images)

let imgIndex = 0
function openModal(){
    modal.classList.add('active')
}

function closeModal(){
    modal.classList.remove('active')
}



function openImgModal(e){
    // console.log(e.target.src)
    openModal()
    modalImg.src = e.target.src
    
}

function nextImg(n){
    imgIndex += n
    // console.log(imgIndex)
    showImg(imgIndex)
}

function showImg(index){
    if (index <= 0 ){
        index = images.length
        imgIndex = images.length
    }
    if(index >= images.length ){
        index = 1
        imgIndex = 1
    }
   

    // console.log(images[index - 1])
    modalImg.src = images[index - 1].src

}