function validateEmail(clientMail, clientName, feedback) {
    let clientemail_pattern = /^\w+([\._]?\w+)*@\w+([\._]?\.\w+)*(\.\w{2,3})+$/;
    if (clientMail.value.match(clientemail_pattern) && clientName.value != "" && feedback.value != "") {
        alert("Form Submitted Successfully!");
    } else if (clientMail.value === "" || clientName.value === "" && feedback.value === "") {
        alert("All Details Are Mendatory!");
    } else {
        alert("Enter Proper Details!");
    }

}