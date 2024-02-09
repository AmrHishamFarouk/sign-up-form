let btn = document.querySelector('.upload');
let pass1 = document.querySelector('#password');
let pass2 = document.querySelector('#repassword');
let allpass = document.querySelectorAll('.error');


btn.addEventListener('clicked',()=>{checking()});


function checking(){
    allpass.forEach(e => {
        e.innerHTML = pass1.value == pass2.value ? 'matching' : 'not-matching';      
    });
}