let loginForm = document.getElementsByClassName("input-container");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let username = document.getElementsByName("username")
    let host = document.getElementsByName("host-name")
    let password = document.getElementsByName("password")
    
    if (username.value == "" || password.value == "") {
        alert("Ensure you put input in both fields!")
    } else {
        alert("This form has been successfully submitted")
        console.log(`This form has a username of ${username.value} and password of ${password.value}`)
    };
    username.value == "";
    password.value == "";
});