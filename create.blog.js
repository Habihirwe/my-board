// Creating a post

const submitPosts = document.getElementById("blogSubmitData");
const postMessages = document.getElementById("postMessage");

postMessages.style.display = "none";

submitPosts.addEventListener("click", async (event) => {
  event.preventDefault();
  postMessages.style.display = "block";
  await createPost();
});

async function createPost() {
  const blogImage = document.getElementById("blogImage");
  const blogTitle = document.getElementById("blogTitle");
  const blogDescription = document.getElementById("blogDescription");

  let img = document.createElement("img");
  /*
  if (!blogImage.files[0]) {
    postMessages.style.color = "red";
    postMessages.innerHTML = "Please add a post image!";
    return;
  }

  const reader = new FileReader();
  reader.readAsDataURL(blogImage.files[0]);
  */
  img.onload = async () => {
    //const finalPostImage = reader.result;

    const data = {
      title: blogTitle.value,
      description: blogDescription.value,
      image: blogImage.value,
    };

    const sendData = {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        auth_token: JSON.parse(localStorage.getItem("token")),
        "Content-Type": "application/json; charset=UTF-8",
      }),
    };

    const response = await fetch(
      "https://my-brand-backend-h3es.onrender.com/api/createBlog",
      sendData
    );
    const fetchedData = await response.json();

    console.log(response);

    if (response.status === 201) {
      postMessages.style.color = "green";
      postMessages.innerHTML = "blog created successfully";
      setTimeout(() => {
        location = "one.html?id=" + fetchedData._id;
      }, 2000);
    } else if (response.status === 400) {
      postMessages.style.color = "red";
      postMessages.innerHTML = fetchedData.validationError;
    } else if (response.status === 401) {
      postMessages.style.color = "red";
      postMessages.innerHTML = fetchedData.invalidToken;
    } else {
      postMessages.style.color = "red";
      postMessages.innerHTML =
        "Something went wrong, we were unable to create this post!";
    }
  };
  img.src = blogImage.value;
}
