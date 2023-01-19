// var blog=document.querySelectorAll('.blog-list li .name');
// Array.from(blog).forEach(function(blog){
//     // console.log(blog.textContent);
//     blog.textContent+='(olivier)'
// })

// const bloglist=document.querySelector('.blog-list');
// // bloglist.innerHTML='<h2>blogs and more blogs........</h2>';
// bloglist.innerHTML+='<p>this is how we add an Html</p>'

var btns=document.querySelectorAll('.blog-list .delete')
Array.from(btns).forEach(function(btns){
    btns.addEventListener('click',function(e){
        const li=e.target.parentElement;
        li.parentNode.removeChild(li)
    })
})

const list=document.querySelector('blog-list ul')

const addForm=document.querySelector('.addForm');
addForm.addEventListener('submit',function(e){
    e.preventDefault();
    const value=addForm.querySelector('input[type="text"]').value;
    // console.log(value);
    const li=document.createElement('li');
    const blogname=document.createElement('span');
    const deletebtn=document.createElement('span');

    li.appendChild(blogname);
    li.appendChild(deletebtn);
    // li.appendChild(blogname);
    list.appendChild(li);
    

});

