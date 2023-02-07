// let menu = document.querySelector(".menu");
// let navbar = document.querySelector('.list');

// menu.onclick = ()=> {
//     // menu.classList.toggle('');
//     navbar.classList.toggle('open')
// }

// function checkdata(){
//     var email=document.getElementById('email').value;
//     var password=document.getElementById('pwd').value;

//     var getemail=localStorage.getItem('useremail');
//     var getpassword=localStorage.getItem('userpassword');
//     if(email==getemail){
//         if(password==getpassword){
//             // console.log(password)
//             alert("login succesiful")
//         }
//         else{
//             alert("wrong password")
//         }
//     }
//     else{
//         alert("invalid email")
//     }


// }


const loginForm = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const loginButton = document.getElementById("loginButton");
const loginMessage = document.getElementById("loginMessage");

loginMessage.style.display = "none"


loginButton.addEventListener("click", (event)=>{
    event.preventDefault();
    loginMessage.style.display = "block"
    loginMessage.innerHTML = `<img src="../Assets/loading1.gif" alt="" width="8%">`

    login();
});

function login(){
    const data = {
        email: email.value,
        password: password.value
    }

    const sendData = {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({'Content-Type': 'application/json; charset=UTF-8'})
    }

    fetch("http://localhost:3000/api/login", sendData)
    .then(response => response.json())
    .then((fetchedData)=>{
        console.log(fetchedData)
    
        if (fetchedData.InvalidCredentials){
            loginMessage.style.color = "red"
            loginMessage.innerHTML = fetchedData.InvalidCredentials
        }

        else if (fetchedData.successMessage){
            localStorage.setItem("token", JSON.stringify(fetchedData.token))
            location = "dashboard.html";
        }

        else{
            loginMessage.style.color = "red"
            loginMessage.innerHTML = "Something went wrong, we were unable to login this account!"
        }

    })

}







