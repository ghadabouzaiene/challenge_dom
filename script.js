var nom = document.getElementById("name")
var lastname = document.getElementById("last-name")
var e_mail = document.getElementById("e-mail")
var pass = document.getElementById("current-password")
const show_hide = document.getElementById("show-hide")
const send_btn = document.getElementById("send")
const reset_btn = document.getElementById("reset")

send_btn.addEventListener("click", function() {
    if (nom.value === "") {
        alert("Please enter you name") ;
    } else if (lastname.value==="" ) {
        alert("Please enter your last name")
    }
    else if (e_mail.value==="" )  {
        alert("Please enter your email")

    } else if (pass.value==="" ) {
        alert("Please enter your password")

    }
})

function reset () {
    document.getElementById("myform").reset()
    
}

function Toggle() {
    if (pass.type === "password") {
        pass.type = "text";
    }
    else {
        pass.type = "password"; }
    }
function checkEmail() {

        
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
        if (!filter.test(e_mail.value)) {
        alert('Please provide a valid email address');
        e_mail.focus;
        return false;
    }
    }

