let bars = document.querySelector('.bars')
let right = document.querySelector('.right')

bars.addEventListener('click', function(){
    if(right.classList.contains('show')){
        right.classList.remove('show') 
    } else {
        right.classList.add('show')
    }
})