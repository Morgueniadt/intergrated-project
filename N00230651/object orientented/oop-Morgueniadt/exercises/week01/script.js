// let message = "Hello, World!"
// console.log(message);
let myBtn = document.getElementById('my_btn');

let myInput = document.getElementsByName('address');



function addPTag() {
let p 
= document.createElement('p');
    p.innerHTML = myInput[0].value;
let h1 
= document.getElementById('welcome');
    h1.parentElement.appendChild(p);    
}

myBtn.addEventListener('click', addPTag)