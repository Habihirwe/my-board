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


const activePage=window.location.pathname;
const navLinks=document.querySelectorAll('.one').
forEach(link=>{
    if(link.href.includes('${activePage}')){
        link.classList.add('active')
    }
})









