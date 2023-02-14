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

let list = document.querySelector(".blog-container");
let blogTemplate = list.querySelector(".blog-box");

list.innerHTML = "";
blogs?.forEach((blog) => {
  let blogCard = blogTemplate.cloneNode(true);
  let image = blogCard.querySelector(".blog-img");
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

  let more = blogCard.querySelector(".more");
  more.href += "?id=" + blog._id;

  list.append(blogCard);
});
console.log(blogTemplate);
