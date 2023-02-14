const messages = await fetch(
  "https://my-brand-backend-h3es.onrender.com/api/getAllMessages",
  {
    headers: new Headers({
      auth_token: JSON.parse(localStorage.getItem("token")),
    }),
  }
)
  .then(async (res) => {
    if (res.status === 200) {
      return await res?.json();
    }
    return [];
  })
  .catch((e) => {
    console.error(e);
  });

let list = document.querySelector(".main_body");
let messageTemplate = list.querySelector(".space_get");

list.innerHTML = "";
messages?.forEach((message) => {
  let card = messageTemplate.cloneNode(true);
  let names = card.querySelector(".names h1");
  names.innerText = message?.firstName + " " + message?.lastName;
  let email = card.querySelector(".names p");
  email.innerText = message?.email;
  let desc = card.querySelector(".descript");
  desc.innerText = message?.message;
  let delBut = card.querySelector(".delete");
  delBut.addEventListener("click", async (e) => {
    setTimeout(() => {
      card.remove();
    }, 1000);
  });
  console.log(delBut);
  list.prepend(card);
});
