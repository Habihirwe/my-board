// let menu = document.querySelector(".menu");
// let navbar = document.querySelector('.list');

// const url=window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
// let activate=document.querySelectorAll("nav a").forEach((link)=>{
//     const ffr=link.href.split("/")
//     console.log(ffr);
//     if(ffr.includes(url)){
//         console.log(url);
//         link.classList.add('active')
//     }
// })

// menu.onclick = ()=> {
//     // menu.classList.toggle('');
//     navbar.classList.toggle('open')
// }

// function adddata(){
//     var first=document.getElementById('first').value;
//     var second=document.getElementById('second').value;
//     var email=document.getElementById('email').value;
//     var password=document.getElementById('pwd').value;

//     localStorage.setItem('fisrtname',first)
//     localStorage.setItem('secondname',second)
//     localStorage.setItem('useremail',email)
//     localStorage.setItem('userpassword',password)

// }

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repeatPassword = document.getElementById("repeatPassword");
const signUpButton = document.getElementById("signUpButton");
const signUpForm = document.getElementById("signUpForm");
const signupContainer = document.getElementById("signupContainer");
const signUpMessage = document.getElementById("signUpMessage");
signUpMessage.style.display = "none";

signUpButton.addEventListener("click", (event) => {
  event.preventDefault();
  signUpMessage.style.display = "block";
  signUpMessage.innerHTML = `<img src="../Assets/loading1.gif" alt="" width="8%">`;
  signUp();
});

function signUp() {
  const data = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
    repeatPassword: repeatPassword.value,
  };

  const sendData = {
    method: "POST",
    body: JSON.stringify(data),
    headers: new Headers({ "Content-Type": "application/json; charset=UTF-8" }),
  };

  fetch("https://my-brand-backend-h3es.onrender.com/api/signUp", sendData)
    .then((response) => response.json())
    .then((fetchedData) => {
      console.log(fetchedData);

      if (fetchedData.message) {
        signUpMessage.style.color = "red";
        signUpMessage.innerHTML = fetchedData.message;
      } else if (fetchedData.registeredUser) {
        signUpMessage.style.color = "green";
        signUpMessage.innerHTML = "account created successfully!!!!";
        console.log(fetchedData.successMessage);
        signUpForm.reset();
        setTimeout(() => {
          location = "login.html";
        }, 3000);
      } else if (fetchedData.validationError) {
        signUpMessage.style.color = "red";
        signUpMessage.innerHTML = fetchedData.validationError;
      } else {
        signUpMessage.style.color = "red";
        signUpMessage.innerHTML =
          "Something went wrong, we were unable to register this account!";
      }
    });
}
