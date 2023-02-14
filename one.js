const urlParams = new URLSearchParams(location.search);
let blogId = null;
if (urlParams.get("id") === null || !urlParams.get("id")) {
  window.location.assign("blogs.html");
} else {
  blogId = urlParams.get("id");
}

let blog = await fetch(
  "https://my-brand-backend-h3es.onrender.com/api/getSingleBlog/" + blogId
)
  .then(async (res) => {
    const data = await res.json();
    if (data.status == "success") return data.data;
  })
  .catch((e) => {
    console.error(e);
  });

let title = document.querySelector(".blog-heading h3");
title.innerText = blog.title;

let image = document.querySelector(".blog-image>img");
image.onerror = () => {
  image.src = "elementor-placeholder-image.webp";
};
image.src = blog?.image;
image.alt = blog?.title;

let body = document.querySelector(".blog-text p");
console.log(blog);
body.innerHTML = blog.description;
