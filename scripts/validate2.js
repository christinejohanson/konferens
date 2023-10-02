function validate(evt) {

    var firstname = document.getElementById("field_firstname").value;

    //if to see if length is empty
    if (firstname.length === 0) {

        var errorMess = document.createElement("h3");
        errorMess.setAttribute("style", "color: orange;");
        var errorText = "Fyll i ett förnamn!";
        var textNode = document.createTextNode(errorText);
        errorMess.appendChild(textNode);
        var bodyElement = document.getElementsByTagName("p")[0];
        bodyElement.appendChild(errorMess);

        //do not send form
        evt.preventDefault();
    }

    var lastname = document.getElementById("field_lastname").value;
    if (lastname.length === 0) {
        console.log("efternamnet är tomt!");
    }
}

//add eventlistener on submit
var conferenceForm = document.getElementById("registration_form");
conferenceForm.addEventListener("submit", validate, false);