// Creating a function which allows to directly use the id
const $ = (id) => {
    return document.getElementById(id);
};

// Validating the user
let validateuser = function () {
    if ($('usrName').value == 'admin' && $('pWord').value == 'admin123'){
        $('customer').classList.remove('hide');
        $('customer').classList.add('animate__zoomIn');
        $('customer').classList.add('show');
    }
    else{
        $('customer').classList.add('hide');
        alert('error parameters');
    }

    closebtnclick();    
     // Emptying the input values after admin enters their data
     $('usrName').value = "";
     $('pWord').value = "";
};


// Displaying the interfaces
let myaccountclick = function () {
    // Showing the login interface
    $('login').classList.remove('hide');
    $('login').classList.add('animate__zoomIn');
    $('login').classList.add('show');
};

// Closing the interfaces
let closebtnclick = function () {
    // closing the login interface
    $('login').classList.remove('show');
    $('login').classList.add('hide');
};

let closebuttonclick = function () {
    // Closing the customerDetails interface
    $('customer').classList.remove('show');
    $('customer').classList.add('hide');

    // Closing the login interface
    $('login').classList.remove('show');
    $('login').classList.add('hide');
};

// Displaying navbar during responsive

// Function to display navbar when clicked on hamburger menu
let hamfunc = function(){
    $('separatenavbar').classList.remove('animate__slideOutRight');
    $('separatenavbar').classList.add('show');
    $('separatenavbar').classList.remove('hide');
    $('separatenavbar').classList.add('animate__slideInRight');
}

// Function to close navbar when clicked on close button
let closeonclick = function(){
    $('separatenavbar').classList.add('animate__slideOutRight');
    $('separatenavbar').classList.remove('hide');
    $('separatenavbar').classList.add('show');
    $('separatenavbar').classList.remove('animate__slideInRight');
}

window.addEventListener('click',(event)=>{
    let target = event.target.id;

    if(target != "separatenavbar") {
        if(target == "hambtn") {
        }else {
            $('separatenavbar').classList.add('hide');
        }
    }

});


// if(separatenavbar.style.display == 'flex'){
//     window.addEventListener('click',(event) => {
//         let target = event.target;
    
//         if(target.tagName == "DIV" && target.id == "separatenavbar"){
//             separatenavbar.classList.add('hide');
//         }
//     });
//     }


// Adding customer's input in CustomerDetails interface
let index = 0;
let addCustDetails = () => {
    index++;
    let inputName = $('UserName').value;
    let inputEmail = $('UserEmail').value;
    let inputSubject = $('UserSubject').value;
    let inputMessage = $('UserMessage').value;

    // Validating the input interface
    if(inputName.length < 3){
        alert("Name must have more than three characters");
    }

    let newCustDetails = `<li class="animate__animated">
                            <div class="info">
                            <b>${index}</b>
                            <span>Name: ${inputName}</span>
                            <p>Email: ${inputEmail}</p>
                            <p>Subject: ${inputSubject}</p>
                            <p>Message: ${inputMessage}</p>
                            </div>
                            <div class="del">
                                <img src="/assets/delete.svg" alt="delete"/>
                            </div>
                        </li>`

    // Adding the entered data to DetailsInterface
    $('DetailsInterface').insertAdjacentHTML('beforeend',newCustDetails);

    // Emptying the input values after user enters their data
    $('UserName').value = "";
    $('UserEmail').value = "";
    $('UserSubject').value = "";
    $('UserMessage').value = "";
};
// function for directing customer's complaint
let sendBtnclick = function () {
    // Calling the function to add new customer details
    addCustDetails();
    alert('We have received your message');
};

// Deleting customer details
window.addEventListener('click', (event) => {
    let target = event.target;

    if(target.tagName == "IMG" && target.alt == "delete"){
        let li = target.parentNode.parentNode;
        li.classList.add('animate__fadeOutLeft');

        setTimeout(() => {
            li.remove();
        },400);
    }
});
