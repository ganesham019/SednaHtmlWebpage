const emailValidation = () => {
    const userEmailField = document.querySelector(".userEmail");
    const userEmail = document.querySelector(".userEmail").value;
    const userEmailErr = document.querySelector(".userEmailErr");
    const emailPattern = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
    if (userEmail.match(emailPattern)) {
        userEmailField.setAttribute("aria-invalid", "false");
        userEmailErr.innerText = "";
    } else {
        userEmailField.setAttribute("aria-invalid", "true");
        userEmailErr.innerText = "You have entered an invalid email address!";
    }
};
const userNameValidation = () => {
    const userNameField = document.querySelector(".userName");
    const userName = document.querySelector(".userName").value;
    const userNameErr = document.querySelector(".userNameErr");
    let userNamePattern = /^[A-Za-z]{7,29}$/;
    if (userName.match(userNamePattern)) {
        userNameField.setAttribute("aria-invalid", "false");
        userNameErr.innerText = "";
    } else {
        userNameField.setAttribute("aria-invalid", "true");
        userNameErr.innerText = "username is invalid!";
    }
};
const userMobValidation = () => {
    const userMobField = document.querySelector(".userMob");
    const userMob = document.querySelector(".userMob").value;
    const userMobErr = document.querySelector(".userMobErr");
    const mobilePattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (userMob.match(mobilePattern)) {
        userMobField.setAttribute("aria-invalid", "false");
        userMobErr.innerText = "";
    } else {
        userMobField.setAttribute("aria-invalid", "true");
        userMobErr.innerText = "Mobile number is invalid!";
    }
};


const pswd = document.getElementById("password");
const userPassword = document.querySelector(".userPassword");
const passwordChar = document.querySelector(".char");
const specialChar = document.querySelector(".spcl_char");
const lowerchar = document.querySelector(".lowerchar");
const upperchar = document.querySelector(".upperchar");
const numberVal = document.querySelector(".num_val");

console.log(userPassword);
pswd.onfocus = () => {
    // document.querySelector(".password_err").style.display = "block";
    document.querySelector(".password_err").style.visibility = "visible";

};
pswd.onblur = () => {
    // document.querySelector(".password_err").style.display = "none";
    document.querySelector(".password_err").style.visibility = "hidden";

};

pswd.onkeyup = () => {
    const smallCharacterPattern = /[a-z]/g;
    const upperCharacterPattern = /[A-Z]/g;
    const numberPattern = /[0-9]/g;
    const specialCharPattern = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let validPass = 0;
    // length
    if (pswd.value.length < 8) {
        passwordChar.classList.remove("valid");
        passwordChar.classList.add("invalid");
    } else {
        passwordChar.classList.add("valid");
        passwordChar.classList.remove("invalid");
        validPass += 1;
    }

    // specialcharacter
    if (pswd.value.match(specialCharPattern)) {
        specialChar.classList.remove("invalid");
        specialChar.classList.add("valid");
        validPass += 1;
    } else {
        specialChar.classList.add("invalid");
        specialChar.classList.remove("valid");
    }

    // lowecase
    if (pswd.value.match(smallCharacterPattern)) {
        lowerchar.classList.remove("invalid");
        lowerchar.classList.add("valid");
        validPass += 1;
    } else {
        lowerchar.classList.add("invalid");
        lowerchar.classList.remove("valid");
    }

    // uppercase
    if (pswd.value.match(upperCharacterPattern)) {
        upperchar.classList.remove("invalid");
        upperchar.classList.add("valid");
        validPass += 1;
    } else {
        upperchar.classList.add("invalid");
        upperchar.classList.remove("valid");
    }

    // number check
    if (pswd.value.match(numberPattern)) {
        numberVal.classList.remove("invalid");
        numberVal.classList.add("valid");
        validPass += 1;
    } else {
        numberVal.classList.add("invalid");
        numberVal.classList.remove("valid");
    }

    if (validPass == 5) {
        pswd.setAttribute("aria-invalid", "false");
        userPassword.innerText = "";
    } else {
        pswd.setAttribute("aria-invalid", "true");
        userPassword.innerText = "Password is invalid!";

    }
}

