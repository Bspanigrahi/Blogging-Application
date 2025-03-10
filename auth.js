document.getElementById("signupForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    }));
    alert("Signup Successful!");
    window.location.replace("dashboard.html"); 
});


document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    let user = JSON.parse(localStorage.getItem("user"));
    if (user && user.username === document.getElementById("username").value && user.password === document.getElementById("password").value) {
        alert("Login Successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Credentials");
    }
});
document.getElementById("logout")?.addEventListener("click", function () {
    window.location.href = "index.html";
});
