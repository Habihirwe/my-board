let menu = document.querySelector(".menu");
let navbar = document.querySelector('.list');

menu.onclick = ()=> {
    // menu.classList.toggle('');
    navbar.classList.toggle('open')
}

function checkdata(){
    var email=document.getElementById('email').value;
    var password=document.getElementById('pwd').value;

    var getemail=localStorage.getItem('useremail');
    var getpassword=localStorage.getItem('userpassword');
    if(email==getemail){
        if(password==getpassword){
            // console.log(password)
            alert("login succesiful")
        }
        else{
            alert("wrong password")
        }
    }
    else{
        alert("invalid email")
    }


}










