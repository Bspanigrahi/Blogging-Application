document.getElementById("blogForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    let post = {
        title: document.getElementById("title").value,
        content: document.getElementById("content").value
    };
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push(post);
    localStorage.setItem("posts", JSON.stringify(posts));
    location.reload();
});
let posts = JSON.parse(localStorage.getItem("posts")) || [];
document.getElementById("posts").innerHTML = posts.map(post => `<h3>${post.title}</h3><p>${post.content}</p>`).join("");
