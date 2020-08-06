window.onload = function () {

    // set active page and change color
    var currentPath = window.location.pathname;
    var currentPage = currentPath.split("/").pop();


    var navigationLinks = document.getElementsByClassName("navigation-panel")[0].getElementsByTagName("a");
    for (var i = 0; i < navigationLinks.length; ++i) {
        navLink = navigationLinks[i].href.split("/").pop();
        if (navLink == currentPage) {
            navigationLinks[i].className = "active";
        }
    }

}


// check for capital letters

function isCapital(word) {
    var regex = /^[a-zA-Z]*$/;
    // check if the string alphabetic and starts with a capital letter character
    if (regex.test(word) && word[0].toLowerCase() != word[0].toUpperCase()) {
        // check if the element starts with the uppercase alphabet letter
        if (word[0] == word[0].toUpperCase()) {
            return true;
        }
    }
}


// password validation

function checkPassword(password) {
    if (password.length != 6) {
        return "Password must be 6 characters long.";
    }
    if (password[0].toLowerCase() == password[0].toUpperCase()) {
        return "Password must start with an alphabet.";
    }

    var upper = /[A-Z]/g;
    if (! password.match(upper)) {
        return "Password must have at least 1 uppercase.";
    }

    var digit = /[0-9]/g;

    if (! password.match(digit)) {
        return "Password must have at least 1 digit.";
    }

    return "good";
}


function checkUsername(username) {
    if (username.length < 6) {
        return "Username must have at least 6 characters.";
    } 
    
    if (username[0].toLowerCase() == username[0].toUpperCase()) {
        return "Username must start with an alphabet.";
    }

    return "good";
}

// form validation
function validateForm() {
    var parent  = document.getElementsByClassName("side-panel")[0];
    parent.innerHTML = "<h2>Error messages</h2>";
    
    var firstName = document.forms["signup"]["fname"].value;
    var lastName = document.forms["signup"]["lname"].value;
    var password1 = document.forms["signup"]["password1"].value;
    var password2 = document.forms["signup"]["password2"].value;
    var username = document.forms["signup"]["username"].value;
    var age = parseInt(document.forms["signup"]["age"].value);
    var errors = false;

    if (!isCapital(firstName) || !isCapital(lastName)) {
        parent.innerHTML = parent.innerHTML + "<p>Names must start with a cap and only alphabet allowed.</p>";
        errors = true;
    }

    if (checkPassword(password1) != "good") {
        parent.innerHTML = parent.innerHTML + "<p>" + checkPassword(password1) + "</p>";
        errors = true;
    }

    if (password1 != password2) {
        parent.innerHTML = parent.innerHTML + "<p>Passwords must match.</p>"
    }


    if (checkUsername(username) != "good") {
        parent.innerHTML = parent.innerHTML + "<p>" + checkUsername(username) + "</p>";
        errors = true;
    }


    if (age < 18 ||  age > 60) {
        parent.innerHTML = parent.innerHTML + "<p> Age must be in between 18-60.</p>";
        errors = true;
    }


    if (errors) {
        return false;
    }
    else {
        alert("Success!")
        return true;
    }
}