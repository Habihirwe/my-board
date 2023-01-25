let menu = document.querySelector(".menu");
let navbar = document.querySelector('.list');

const url=window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
let activate=document.querySelectorAll("nav a").forEach((link)=>{
    const ffr=link.href.split("/")
    console.log(ffr);
    if(ffr.includes(url)){
        console.log(url);
        link.classList.add('active')
    }
})


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












