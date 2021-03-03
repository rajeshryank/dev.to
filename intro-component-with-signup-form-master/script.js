
const firstName = document.getElementById("fname")
const lastName = document.getElementById("lname")
const emailID = document.getElementById("email")
const password = document.getElementById("password")
const form = document.getElementById("form")
const button = document.getElementById('signup-button')

button.addEventListener("click", (e) => {
    e.preventDefault()

    checkInputs()
});

function checkInputs() {
    //get values from inputs 
   const firstNameValue =  firstName.value.trim();
   const lastNameValue = lastName.value.trim();
   const emailValue =  emailID.value.trim();
   const passwordValue =  password.value.trim();

   if (firstNameValue === '') {
        // add error class
        setErrorFor(firstName)
   } else {
        removeError(firstName)
   }

   if (lastNameValue === '') {
    // add error class
    setErrorFor(lastName)
    } else {
    removeError(lastName)
    }

    if (emailValue === '') {
    // add error class
    setErrorFor(emailID)
    } else {
    removeError(emailID)
    }

    if (passwordValue === '') {
    // add error class
    setErrorFor(password)
    } else {
    removeError(password)
    }

}

function setErrorFor(input) {
    const formControl = input.parentElement;
    //add error class name 
    formControl.className = 'form-control error'
}

function removeError(input) {
    const formControl = input.parentElement;
    //remove error class 
    formControl.className = "form-control"
}
