function validate(evt) {
    //all the variables
    var firstname = document.getElementById("field_firstname").value;
    var lastname = document.getElementById("field_lastname").value;
    var organisation = document.getElementById("field_organisation").value;
    var email = document.getElementById("field_email").value;
    var message = document.getElementById("field_message").value;
    var checkOne = document.getElementById("pres_type_1").checked;
    var checkTwo = document.getElementById("pres_type_2").checked;
    var checkThree = document.getElementById("pres_type_3").checked;
    var title = document.getElementById("field_pres_title").value;
    var errorMessage = "";
    //if to see if firstname is empty
    if (firstname.length === 0) {
        errorMessage = "Fyll i förnamn.";
        createErrorMess(errorMessage);
        //do not send form
        evt.preventDefault();
    }
    //if to see if lastname is empty
    if (lastname.length === 0) {
        errorMessage = "Fyll i efternamn.";
        createErrorMess(errorMessage);
        //do not send form
        evt.preventDefault();
    }

    //email validation
    var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
    var isValid = pattern.test(email);
    if (isValid == false) {
        errorMessage = "Fyll i giltig epostadress."
        createErrorMess(errorMessage);
        //do not send form
        evt.preventDefault();
    }

    //organisation validation
    if (organisation.length === 0) {
        errorMessage = "Fyll i organisation.";
        createErrorMess(errorMessage);
        //do not send form
        evt.preventDefault();
    }

    //radiobuttons
    if (checkOne == true) {
        if (title.length === 0) {
            errorMessage = "Fyll i titel på föreläsningen."
            createErrorMess(errorMessage);
            //do not send form
            evt.preventDefault();
        }
    }
    if (checkTwo == true) {
        console.log("nummer 2 valt");
         if (title.length === 0) {
            errorMessage = "Fyll i titel på seminarie."
            createErrorMess(errorMessage);
            //do not send form
            evt.preventDefault();
        }
    }

    //message validation length more than 200
    if (message.length >= 201) {
        errorMessage = "Meddelande får vara max 200 tecken.";
        createErrorMess(errorMessage);
        //do not send form
        evt.preventDefault();
    }
}

//function to create and style error message
function createErrorMess(errorMessage) {
    var errorMess = document.createElement("h3");
    errorMess.setAttribute("style", "color: tomato;");
    var textNode = document.createTextNode(errorMessage);
    errorMess.appendChild(textNode);
    //add it after p
    var bodyElement = document.getElementsByTagName("p")[0];
    bodyElement.appendChild(errorMess);
}

//add eventlistener on submit
var conferenceForm = document.getElementById("registration_form");
conferenceForm.addEventListener("submit", validate, false);

