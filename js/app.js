const username = document.getElementById('username');
const password = document.getElementById('password');
const button = document.getElementById('button');
const massage = document.getElementById('successMessage');
const username1 = document.getElementById('username1');
const username2 = document.getElementById('username2');


let a = ' ';
let b = 937981208;

button.addEventListener('click' , ()=>{
     if(username.value == a){
         massage.innerHTML = 'Your login is correct'
     }else{
        massage.innerHTML = 'Your login is incorrect'
         username1.style.color = '#03C03C'
     }
     if(password.value == b){
        setTimeout(() => {
            window.location.href = '/pages/indexs.html'
          }, "1000");
          massage.style.color = '#5bc0de'
          username2.style.color = '#03C03C'
     }else{
         massage.innerHTML = 'Your password is incorrect';
         massage.style.color = 'red'
         username2.style.color = 'red'
     }
});