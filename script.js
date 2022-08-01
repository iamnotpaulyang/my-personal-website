const h2 = document.createElement("h2");
h2.textContent = "";
document.querySelector("body").appendChild(h2);
const navScroll = (section) => {
    const location = document.getElementById(section)
    location.scrollIntoView({behavior:"smooth", block: "end"})
}
var fields = {};
document.addEventListener("DOMContentLoaded", function() {
    fields.firstName = document.getElementById('firstName');
    fields.lastName = document.getElementById('lastName');
    fields.email = document.getElementById('email');
    fields.updates = document.getElementById('updates');
    fields.question = document.getElementById('question');
   })

function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
   }

function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
   }

function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }
   
    return isFieldValid;
   }

   function isValid() {
    var valid = true;
    
    valid &= fieldValidation(fields.firstName, isNotEmpty);
    valid &= fieldValidation(fields.lastName, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.question, isNotEmpty);
    
   return valid;
   }

   class User {
    constructor(firstName, lastName, email, updates, question) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.updates = updates;
    this.question = question;
    }
   }

   function sendContact() {
    if (isValid()) {
        let usr = new User(firstName.value, lastName.value, email.value, updates.checked, question.value);
        
        alert(`${usr.firstName} thank you for your submission.`)
    
    }else {
        alert ("There was an error")
    }
}

function startLoader() {
    const loader = document.querySelector(".loader");
  
    setTimeout(function() {
      loader.style.right = "1";
    }, 1000);
  
    window.addEventListener("DOMContentLoaded", function(event) {
      setTimeout(function() {
        loader.style.left = "100%";
        document.body.classList.remove("loading");
      }, 1500);
    });
  }
  
  startLoader();
  