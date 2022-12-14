function signupValidate(createMail, createPass, profileName, dbdate) {
    let profile_pattern = /^\w{1,30}$/;
    let createMail_pattern = /^\w+([\._]?\w+)*@\w+([\._]?\.\w+)*(\.\w{2,3})+$/;
    let createPass_pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

    if (createMail.value.match(createMail_pattern) && createPass.value.match(createPass_pattern) && profileName.value.match(profile_pattern) && dbdate.value != "") {
        alert("Account created Successfully Please Login Here!");
        location.href = "/index.html";
    } else if (createMail.value == "" || createPass.value == "" || profileName.value == "" | dbdate == "") {
        alert("All Details Are Mendatory!")
    } else {
        alert("Invalid details")
    }

}