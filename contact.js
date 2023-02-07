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
//     var firstname=document.getElementById('first-name').value;
//     var secondname=document.getElementById('second-name').value;
//     var number=document.getElementById('number').value;
//     var message=document.getElementById('message').value;

//     localStorage.setItem('fisrtname',firstname);
//     localStorage.setItem('secondname',secondname);
//     localStorage.setItem('number',number);
//     localStorage.setItem('message',message);

//     alert("message sent")
// }

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const message = document.getElementById('message');
const messageSubmitButton = document.getElementById('messageSubmitButton');
const contactForm = document.getElementById('contactForm')
// const clientMessages = document.getElementById('clientMessages');

clientMessages.style.display = "none";

messageSubmitButton.addEventListener("click", (event) => {
  event.preventDefault();
//   clientMessages.style.display = "block";
//   clientMessages.innerHTML = `<img src="../Assets/loading1.gif" alt="" width="8%">`;
  contactMessage();
});

function contactMessage() {
  const data = {
    fname: firstName.value,
    lname: lastName.value,
    email: email.value,
    message: message.value
  };

  const sendData = {
    method: "POST",
    body: JSON.stringify(data),
    headers: new Headers({'Content-Type': 'application/json; charset=UTF-8'})
  };

  fetch("http://localhost:3000/api/createMessage", sendData)
    .then(response => response.json())
    .then((data) => {
      console.log(data);

      if (data.message) {
        clientMessages.style.color = "red";
        clientMessages.innerHTML = data.message;
      } if (data.successMessage && data.message) {
        clientMessages.style.color = "green";
        clientMessages.innerHTML = data.successMessage;
       


        contactForm.reset()
      setTimeout(()=>{location = "home.html"}, 2000)

      } else if (data.validationError) {
        clientMessages.style.color = "red";
        clientMessages.innerHTML = data.validationError;
      } else {
        clientMessages.style.color = "red";
        clientMessages.innerHTML = "Something went wrong, we were unable to register this account!";
      }
    });
}











