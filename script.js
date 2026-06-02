const form = document.querySelector("form");
let datas;

function validName(){
    const nameInput = document.getElementById("name");
    const error = nameInput.parentElement.querySelector(".error");
    const formData = new FormData(form);

    let receivedValue = (formData.get("name") || "").trim();

    if (receivedValue == ""){
        nameInput.style.color = "red";
        error.style.color = "red";
        error.textContent = "The name is required";
        return false;
    }

    if (receivedValue.length < 2 ){
        nameInput.style.color = "red";
        error.style.color = "red";
        error.textContent = "Please enter a valid name";
        return false;
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
        return false;
    }

    if (receivedValue.length < 3 ){
        surnameInput.style.color = "red";
        error.style.color = "red";
        error.textContent = "Please enter a valid surname";
        return false;
    }

    surnameInput.style.color = "green";
    error.textContent = "";
    return true;
}

document.getElementById("surname").addEventListener("blur", validSurname);

function validEmail(){
    const emailInput = document.getElementById("email");
    const formData = new FormData(form);
    const error = emailInput.parentElement.querySelector(".error");

    let receivedValue = (formData.get("email") || "" ).trim();

    if (receivedValue == ""){
        error.style.color = "red";
        error.textContent = "You must enter a valid email";
        return false;
    }

    if (!((/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(receivedValue)) ){
        error.style.color = "red";
        error.textContent = "You must enter a valid email";
        return false;
    }

    emailInput.style.color = "green";
    error.textContent = "";
    return true;
}

document.getElementById("email").addEventListener("blur", validEmail);

function validProfile(){
    const profileChoice = document.getElementById("profile");
    const formData = new FormData(form);
    const error = profileChoice.parentElement.querySelector(".error");

    let receivedValue = (formData.get("profile") || "" );

    if (receivedValue == ""){
        error.style.color = "red";
        error.textContent = "You have a choice between avalaible profiles";
        return false;
    }

    profileChoice.style.color = "green";
    error.textContent = "";
    return true;
}

document.getElementById("profile").addEventListener("blur", validProfile);

function validPersonType(){
    const personTypeChoice = document.getElementById("typePerson");
    const formData = new FormData(form);
    const error = personTypeChoice.parentElement.querySelector(".error");

    let receivedValue = (formData.get("typePerson") || "");

    if(receivedValue == ""){
        error.textContent = "Please make a choice between avalaible ones";
        personTypeChoice.style.color = "red";
        return false;
    }
    
    error.textContent = "";
    personTypeChoice.style.color = "green";
    return true;
}

document.getElementById("typePerson").addEventListener("change", validPersonType);

function validHobby(){
    const hobbyChoice = document.getElementById("hobby");
    const formData = new FormData(form);
    const error = hobbyChoice.parentElement.querySelector(".error");

    let receivedValue = (formData.getAll("hobby") || []);

    if (receivedValue.length == 0){
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

document.getElementById("hobby").addEventListener("change", validHobby);

function validStorytime() {
    const storytimeInput = document.getElementById("storytime");
    const formData = new FormData(form);
    const error = storytimeInput.parentElement.querySelector(".error");

    let receivedValue = (formData.get("storytime") || "");

    if (receivedValue == "" ){
        error.textContent = "Your story can't be empty";
        error.style.color = "red";
        return false;
    }

    if (receivedValue.length < 25 || receivedValue.length > 255 ){
        error.textContent = "Your story must contains between 25 characters and 255 characters";
        error.style.color = "red";
        return false;
    }

    error.textContent = "";
    storytimeInput.style.color = "green";
    return true;
}

document.getElementById("storytime").addEventListener("blur", validStorytime);
document.getElementById("storytime").addEventListener("input", () => {
    const inputLength = document.getElementById("storytime").value.length;
    const remainingChar = 255 - inputLength;
    document.querySelector(".remaining").textContent = remainingChar;
});

function validSubmit(e) {
    e.preventDefault();

    const name = validName();
    const surname = validSurname();
    const email = validEmail();
    const hobby = validHobby();
    const personType = validPersonType();
    const profile = validProfile();
    const storytime = validStorytime();

    if (!name || !surname || !email || !hobby || !personType || !profile || !storytime) {
        alert("Invalid form cannot be submitted ! Try again");
        return false;
    }

    const formData = new FormData(form);

    datas = {
        name: formData.get("name"),
        surname: formData.get("surname"),
        email: formData.get("email"),
        hobby: formData.getAll("hobby"),
        profile: formData.get("profile"),
        typePerson: formData.get("typePerson"),
        storytime: formData.get("storytime")
    };

    localStorage.setItem("userDatas", JSON.stringify(datas));
    showCard();
}

form.addEventListener("submit", validSubmit);

function showCard() {
    form.style.display = "none";
    const cardElement = document.getElementById("card");
    cardElement.style.display = "block";
    
    const hobbiesList = datas.hobby.join(", ");

    cardElement.innerHTML = `
        <div class="card-content glass text-dark p-4">
            <h3>Profile</h3>
            <p><strong>Name :</strong> ${datas.name}</p>
            <p><strong>Surname :</strong> ${datas.surname}</p>
            <p><strong>Email :</strong> ${datas.email}</p>
            <p><strong>Profile :</strong> ${datas.profile}</p>
            <p><strong>Rythm :</strong> ${datas.typePerson}</p>
            <p><strong>Hobbies :</strong> ${hobbiesList}</p>
            <p><strong>Storytime :</strong> ${datas.storytime}</p>
        </div>
    `;
}

window.addEventListener("DOMContentLoaded", () => {
    const savedDatas = localStorage.getItem("userDatas");
    if (savedDatas) {
        datas = JSON.parse(savedDatas);
        showCard();
    }
});