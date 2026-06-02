const form = document.querySelector("form");

function validName(){
    const nameInput = document.getElementById("name");
    const error = nameInput.parentElement.querySelector(".error");
    const formData = new FormData(form);

    let receivedValue = (formData.get("name") || "").trim();

    if (receivedValue == ""){
        nameInput.style.color = "red";
        error.style.color = "red";
        error.textContent = "The name is required";
        return false

    }

    if (receivedValue.length < 2 ){
        nameInput.style.color = "red";
        error.style.color = "red";
        error.textContent = "Please enter a valid name";
        return false

    }

    nameInput.style.color = "green";
    error.textContent = "";
    return true;

}

document.getElementById("name").addEventListener("blur", validName);



function validSurname(){
    const surnameInput = document.getElementById("surname");
    const error = surnameInput.parentElement.querySelector(".error");
    const formData = new FormData(form);

    let receivedValue = (formData.get("surname") || "").trim();

    if (receivedValue == ""){
        surnameInput.style.color = "red";
        error.style.color = "red";
        error.textContent = "The surname is required";
        return false

    }

    if (receivedValue.length < 3 ){
        surnameInput.style.color = "red";
        error.style.color = "red";
        error.textContent = "Please enter a valid surname";
        return false

    }

    surnameInput.style.color = "green";
    error.textContent = "";
    return true;

}
document.getElementById("surname").addEventListener("blur", validSurname);



function validEmail(){
    const emailInput = document.getElementById("email");
    const formData = new FormData(form);

    const error = emailInput.parentElement.querySelector(".error")

    let receivedValue = (formData.get("email") || "" ).trim();

    if (receivedValue == ""){
        error.style.color = "red";
        error.textContent = "You must enter a valid email";
        return false;
    }

    if (!((/^[a-zA-Z0-9]+@[^\s@]+\.[^\s@]+$/).test(receivedValue)) ){
        error.style.color = "red";
        error.textContent = "You must enter a valid email";
        return false;
    }

    emailInput.style.color = "green"
    error.textContent = ""
    return true;
    
    
}

document.getElementById("email").addEventListener("blur", validEmail);




function validProfile(){
    const profileChoice = document.getElementById("profile");
    const formData = new FormData(form);

    const error = profileChoice.parentElement.querySelector(".error")

    let receivedValue = (formData.get("profile") || "" );

    if (receivedValue == ""){
        error.style.color = "red";
        error.textContent = "You have a choice between avalaible profiles";
        return false;
    }

    profileChoice.style.color = "green"
    error.textContent = ""
    return true;
    
    
}

document.getElementById("profile").addEventListener("blur", validProfile);



function validPersonType(){
    const personTypeChoice = document.getElementById("typePerson");
    const formData = new FormData(form);

    const error = personTypeChoice.parentElement.querySelector(".error");


    let receivedValue = (formData.get("typePerson")  || "");

    if(receivedValue ==  ""){
        error.textContent = "Please make a choice between avalaible ones";
        personTypeChoice.style.color = "red";
        return false
    }
    
    error.textContent = "";
    personTypeChoice.style.color = "green"
}


document.getElementById("typePerson").addEventListener("change", validPersonType);


function validHobby(){
    const hobbyChoice = document.getElementById("hobby")
    const formData = new FormData;

    const error = hobbyChoice.parentElement.querySelector(".error");


    let receivedValue = (formData.getAll("hobby") || []);

    if (receivedValue == []){
        error.textContent = "Please make a choice between these";
        hobbyChoice.style.color = "red";
        error.style.color = "red";
        return false;
    }

    if (receivedValue.length < 2){
        error.textContent = "Please make at least 2 choices";
        error.style.color = "red";
        hobbyChoice.style.color = "red";
        return false;
    }

    error.textContent = "";
    hobbyChoice.style.color = "green";
    return true;

}

document.getElementById("hobby").addEventListener("change", validHobby)






form.addEventListener("submit", function(e) {
    e.preventDefault(); 

    const formData = new FormData(form);



    const datas = {
        name: formData.get("name"),
        surname: formData.get("surname"),
        email: formData.get("email"),
        TechProfile: formData.get("profile"),
        typePerson: formData.get("typePerson"), 
        storytime: formData.get("storytime"),
        hobbies: formData.getAll("hobby") 
    };
    
    console.log("Datas :", datas);
});