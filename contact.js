let menu = document.querySelector(".menu");
let navbar = document.querySelector(".list");

const url = window.location.href.substring(
  window.location.href.lastIndexOf("/") + 1
);
let activate = document.querySelectorAll("nav a").forEach((link) => {
  const ffr = link.href.split("/");
  console.log(ffr);
  if (ffr.includes(url)) {
    console.log(url);
    link.classList.add("active");
  }
});

menu.onclick = () => {
  // menu.classList.toggle('');
  navbar.classList.toggle("open");
};

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

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const message = document.getElementById("message");
const messageSubmitButton = document.getElementById("messageSubmitButton");
const contactForm = document.getElementById("contactForm");

// clientMessage.style.display = "none";

messageSubmitButton.addEventListener("click", (event) => {
  event.preventDefault();
  contactMessage();
});

function contactMessage() {
  const data = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    message: message.value,
  };
  console.log({ data });
  const sendData = {
    method: "POST",
    body: JSON.stringify(data),
    headers: new Headers({ "Content-Type": "application/json; charset=UTF-8" }),
  };

  fetch(
    "https://my-brand-backend-h3es.onrender.com/api/createMessage",
    sendData
  )
    .then(async (response) => ({ data: await response.json(), response }))
    .then(({ data, response }) => {
      console.log(data);
      if (response.status == 201) {
        clientMessage.style.color = "green";
        clientMessage.innerHTML = "message sent";

        contactForm.reset();
        setTimeout(() => {
          window.location.assign = "home.html";
        }, 2000);
      } else if (response.status == 400) {
        clientMessage.style.color = "red";
        clientMessage.innerHTML = data.validationError;
      } else {
        clientMessage.style.color = "red";
        clientMessage.innerHTML =
          "Something went wrong, we were unable to register this account!";
      }
    });
}
