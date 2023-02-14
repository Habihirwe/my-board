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
    var firstname=document.getElementById('first-name').value;
    var secondname=document.getElementById('second-name').value;
    var number=document.getElementById('number').value;
    var message=document.getElementById('message').value;

    localStorage.setItem('fisrtname',firstname);
    localStorage.setItem('secondname',secondname);
    localStorage.setItem('number',number);
    localStorage.setItem('message',message);

    alert("message sent")
}










