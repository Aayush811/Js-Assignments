let myContainer = document.querySelector(".my-container");
let submitButton = document.querySelector("#submitBtn")
let radioBtn = document.querySelectorAll(".radio-input");
let radioLabel = document.querySelectorAll(".radio-class");
let permissionLabel = document.querySelectorAll(".check-class")
let selectTag = document.querySelector("#inputGroupSelect01");
let body = document.querySelector("body");
let confirmBtn = "";
let selectedValue = "";
let radioBtnValue = "";
let inputEmail = "";
let inputPass = "";
let selectedPermission = "";

function getRole() {
    for (let i = 0; i < radioBtn.length; i++) {
        if (radioBtn[i].checked) {
            radioBtnValue = radioLabel[i].innerText;
            console.log("radio btn val", radioBtnValue);
        }
    }
}

function getMail() {
    let mail = document.querySelector("#exampleInputEmail1");
    inputEmail = mail.value;
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputEmail.match(mailformat))
    {
        return true;
    }
    return false;
}


function confirmClicked() {
    alert("Your form is submited!!!")
    window.location.reload();
}

let containsLower = false;
let containsUpper = false;
let containsNumber = false;

function checkPassword(password) {

    if (password.length < 6) return false;
    for (let i = 0; i < password.length; i++) {
        let ch = password.charAt(i);

        console.log(ch);

        if (!isNaN(ch)) containsNumber = true;
        else if (ch === ch.toUpperCase()) containsUpper = true;
        else if (ch === ch.toLowerCase()) containsLower = true;

    }

    if (containsLower && containsNumber && containsUpper) {
        inputPass = password;
        return true;
    }

    return false;
}

function checkPermissions() {
    let check = document.querySelectorAll("#flexCheckDefault")
    let checkCount = 0;
    for (let i = 0; i < check.length; i++) {
        if (check[i].checked) {
            selectedPermission += permissionLabel[i].innerText + " ";
            checkCount++;
        }
    }

    return checkCount;
}

submitButton.addEventListener("click", function (e) {

    e.preventDefault();

    if(!getMail())
    {
        alert("Please enter a valid email!!!");
        return;
    }

    let password = document.querySelector("#exampleInputPassword1").value;
    if (!checkPassword(password)) {
        alert("Enter valid password");
        return;
    }

    selectedValue = selectTag.value;

    if (selectedValue === "Choose...") {
        alert("Please select a gender!!!");
        return;
    }

    if (checkPermissions() < 2) {
        alert("Please select at least 2 permissions!!!!")
        return;
    }

    getRole();
    
    myContainer.style.display = "none";
    let confirmContainer = document.createElement("div");
    confirmContainer.classList.add("confirm-container");
    confirmContainer.innerHTML = ` <div class="confirm">
    <div class="email">
        <div class="email-heading"><b>Email</b></div>
        <div class="email-value">${inputEmail}</div>
    </div><br>
    <div class="password">
        <div class="pass-heading"><b>Password</b></div>
        <div class="pass-value">${inputPass}</div>
    </div><br>
    <div class="gender">
        <div class="gender-heading"><b>Gender</b></div>
        <div class="gender-value">${selectedValue}</div>
    </div><br>
    <div class="role">
        <div class="role-heading"><b>Role</b></div>
        <div class="role-value">${radioBtnValue}</div>
    </div><br>
    <div class="permission">
        <div class="permission-heading"><b>Permissions</b></div>
        <div class="permission-value">${selectedPermission}</div>
    </div><br>
     <button type="button" class="btn btn-primary confirm-btn" onClick = "confirmClicked()">Confirm</button>
</div>`
    body.appendChild(confirmContainer)
})