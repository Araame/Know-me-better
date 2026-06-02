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

    let receivedValue = (formData.get("profile") || "" ).trim();

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