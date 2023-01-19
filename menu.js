let menu = document.querySelector(".menu");
let navbar = document.querySelector('.list');

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









