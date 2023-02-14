console.log("wait for blogs");

const blogs = await fetch(
  "https://my-brand-backend-h3es.onrender.com/api/getAllBlogs"
)
  .then(async (res) => {
    const data = await res.json();
    return data?.data?.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  })
  .catch((e) => {
    console.log(error);
    return [];
  });

let list = document.querySelector(".recentblog");
let blogTemplate = list.querySelector(".blog-box");

list.innerHTML = "";
blogs?.forEach((blog) => {
  let blogCard = blogTemplate.cloneNode(true);
  let image = blogCard.querySelector(".blog-image img");
  image.onerror = () => {
    image.src =
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";
  };
  image.src = blog?.image;
  image.alt = blog?.title;

  let title = blogCard.querySelector(".blog-title");
  title.innerText = blog.title;
  title.href += "?id=" + blog._id;

  let summary = blogCard.querySelector("p");
  summary.innerHTML = blog?.description;

  let del = blogCard.querySelector(".delete");
  del.addEventListener("click", async (e) => {
    e.preventDefault();
    await fetch(
      "https://my-brand-backend-h3es.onrender.com/api/deleteBlog/" + blog._id,
      {
        method: "DELETE",
        headers: new Headers({
          auth_token: JSON.parse(localStorage.getItem("token")),
        }),
      }
    )
      .then(async (res) => {
        let data = await res.json();
        setTimeout(() => {
          blogCard.remove();
        }, 1000);
      })
      .catch((e) => {
        console.error(e);
      });
  });

  list.append(blogCard);
});
console.log(blogTemplate);
