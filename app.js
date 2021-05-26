const calculator = document.querySelector('.container');

const calcKeys = document.querySelector('.numContainer');

calcKeys.addEventListener('click', e=>{
    if(e.target.matches('button')){
        console.log('Button Clicked!')
    }
})
