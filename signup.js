let menu = document.querySelector(".menu");
let navbar = document.querySelector('.list');

menu.onclick = ()=> {
    // menu.classList.toggle('');
    navbar.classList.toggle('open')
}

function adddata(){
    var first=document.getElementById('first').value;
    var second=document.getElementById('second').value;
    var email=document.getElementById('email').value;
    var password=document.getElementById('pwd').value;


    localStorage.setItem('fisrtname',first)
    localStorage.setItem('secondname',second)
    localStorage.setItem('useremail',email)
    localStorage.setItem('userpassword',password)


}












