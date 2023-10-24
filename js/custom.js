let counterUp = document.querySelector('.counterUp'),
    count = 0;

function counter(){
    count = count + 1;
    counterUp.innerHTML = count;

    if(count == counterUp.dataset.end){
        clearInterval(stopInterval)
    }
}

let stopInterval = setInterval(function() {
    counter()
},500)