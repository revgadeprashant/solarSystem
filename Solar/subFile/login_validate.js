function validateEmailPass(email, password) {

    let email_pattern = /^\w+([\._]?\w+)*@\w+([\._]?\.\w+)*(\.\w{2,3})+$/;
    let password_pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

    if (email.value.match(email_pattern) && password.value.match(password_pattern)) {
        alert("Log In Successfully")
        location.href = "/index.html";
    } else if (email.value == "" || password.value == "") {
        alert("All Details Are Mendatory!")
    } else {
        alert("Invalid email or password!")
    }

}