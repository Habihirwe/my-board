let menu = document.querySelector(".menu");
let navbar = document.querySelector('.list');

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










