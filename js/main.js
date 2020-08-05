// $(function() {

//     'use strict';
//     $('[placeholder ]').focus(function() {

//         $(this).attr('data-place', $(this).attr('placeholder'));
//         $(this).attr('placeholder', '') // with Jquery 

//     });


//     $('[placeholder ]').blur(function() {

//         $(this).attr('placeholder', $(this).attr('data-place'));

//     })



// });

/**show password */
var input = document.getElementById('myInput');
var method = document.getElementById('method');
var show = document.getElementById('icon1');
var hide = document.getElementById('icon2');

method.onclick = function() {

    'use strict';

    if (this.textContent === 'show password') {
        input.setAttribute('type', 'text');
        hide.style.opacity = '0';
        show.style.opacity = '1';
        this.textContent = 'hide password'
    } else {
        input.setAttribute('type', 'password');
        hide.style.opacity = '1';
        show.style.opacity = '0';
        this.textContent = 'show password'


    }
}


/**email validation  */
function emailValidation() {
    var form = document.getElementById('form');
    var email = document.getElementById('email').value;
    var error = document.querySelector('.error');
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.match(pattern)) {
        form.classList.add('valid');
        form.classList.remove('invalid');
        error.innerHTML = 'Your Email Addres in Valid';
        error.style.color = '#009432';
    } else {
        form.classList.add('invalid');
        form.classList.remove('valid');
        error.innerHTML = 'Your Email Addres Valid email';
        error.style.color = '#EA2027';
    }
    if (email == "") {
        form.classList.remove('valid');
        form.classList.remove('invalid');
        error.innerHTML = " ";
        error.style.color = '#00ff00';

    }
}