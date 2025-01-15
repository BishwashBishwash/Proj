// importing from other js files
import store from './store.js';


// Registering all the input from contact page 
let userName = document.getElementById('UserName');
let userEmail = document.getElementById('UserEmail');
let userSubject = document.getElementById('UserSubject');
let userMessage = document.getElementById('UserMessage');

// Registering all the important buttons
let sendBtn = document.getElementById('sendBtn');
let closebtn = document.getElementById('closebtn');
let closebutton = document.getElementById('closebutton');
let loginbtn = document.getElementById('loginbtn'); 
let myacc = document.getElementById('myacc');

// Registering important interfaces
let login = document.getElementById('login');
let customerDetails = document.getElementById('customer');
let DetailsInterface = document.getElementById('DetailsInterface');

// Validating the login interface
let usrName = document.getElementById('usrName');
let pWord = document.getElementById('pWord');

loginbtn.onclick = function () {
    if (usrName.value == 'admin' && pWord.value == 'admin123'){
        customerDetails.classList.remove('hide');
        customerDetails.classList.add('animate__zoomIn');
        customerDetails.classList.add('show');
    }
    else{
        customerDetails.classList.add('hide');
        alert('error parameters');
    }


    login.classList.remove('show');
    login.classList.add('hide');
     // Emptying the input values after admin enters their data
    usrName.value = "";
    pWord.value = "";
};

// Displaying the interfaces
myacc.onclick = function () {
    // Showing the login interface
    login.classList.remove('hide');
    login.classList.add('animate__zoomIn');
    login.classList.add('show');
};

// Closing the interfaces
closebtn.onclick = function () {
    // closing the login interface
    login.classList.remove('show');
    login.classList.add('hide');
};

closebutton.onclick = function () {
    // Closing the customerDetails interface
    customerDetails.classList.remove('show');
    customerDetails.classList.add('hide');

    // Closing the login interface
    login.classList.remove('show');
    login.classList.add('hide');
};

// Creating a variable to store the customer's data into local storage as a object
let CustDetails = store.getcustomerDetails();

// Loading the customer details from the local storage
let displayCustDetails = function () {

    DetailsInterface.innerHTML = "";
    let index = 0;

    for(let user of CustDetails){
        let listDetails = `<li data-index="${index}" class="animate__animated">
                                <div class="info">
                                <b>${index}</b>
                                <span>Name: ${user.name}</span>
                                <p>Email: ${user.email}</p>
                                <p>Subject: ${user.subject}</p>
                                <p>Message: ${user.message}</p>
                                </div>
                                <div class="del">
                                    <img src="./assets/delete.svg" alt="delete"/>
                                </div>
                            </li>`

    DetailsInterface.insertAdjacentHTML('beforeend',listDetails);

    index++;
    }

};

displayCustDetails();

// Adding new customer details to database

let addNewCustDetails = () => {

    let inputName = userName.value;
    let inputEmail = userEmail.value;
    let inputSubject = userSubject.value;
    let inputMessage = userMessage.value;

    CustDetails.unshift({
        id: 0,
        name: inputName,
        email: inputEmail,
        subject: inputSubject,
        message: inputMessage
    });

    // Storing the details to local storage
    store.setcustomerDetails(CustDetails);

    displayCustDetails();


// Emptying the input values after user enters their data
    userName.value = "";
    userEmail.value = "";
    userSubject.value = "";
    userMessage.value = "";

    // closing the login interface
    login.classList.remove('show');
    login.classList.add('hide');
}
sendBtn.onclick = function () {
    // Calling the function to add new customer details
    addNewCustDetails();
    alert('We have received your message');
}

// Deleting customer details
window.addEventListener('click', (event) => {
    let target = event.target;

    if(target.tagName == "IMG" && target.alt == "delete"){
        let li = target.parentNode.parentNode;
        li.classList.add('animate__fadeOutLeft');

        setTimeout(() => {
            li.remove();
        },400);

        // Removing from object
        let get_index = li.getAttribute('data-index');
        CustDetails.splice(get_index,1);

        // Storing data in local storage
        store.setcustomerDetails(CustDetails);
        
        // Load the list again
        displayCustDetails();
    }
});
