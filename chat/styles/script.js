     //theme
let themebtn = document.getElementById('themebtn');
let interface = document.getElementById('interface');
let themeimg = document.getElementById('themebtn');

themebtn.onclick = () =>{
    interface.classList.toggle('dark-theme');

    if(interface.classList.contains('dark-theme')){
        themeimg.src = './assets/light.svg';
    }
    else{
        themeimg.src = './assets/theme.svg';
    }
};

    //showing add interface
let adduser = document.getElementById('adduser');
let overlay = document.getElementById('overlay');

let showmodel = () =>{
    // adduser.classList.remove('hide');
    // adduser.classList.add('show');
    adduser.classList.toggle('show');

    adduser.classList.add('animate__zoomIn');

    // overlay.classList.remove('hide');
    // overlay.classList.add('show');
    overlay.classList.toggle('show');
};

    //closing add interface
let closemodel = () =>{
    adduser.classList.remove('show');
    adduser.classList.add('hide');
    // adduser.classList.toggle('hide');


    overlay.classList.remove('show');
    overlay.classList.add('hide');
    // overlay.classList.toggle('hide');
};

    //network status
let netstatus = document.getElementById("netstatus");

window.addEventListener('offline',()=>{
    netstatus.style.display = 'block';
});
window.addEventListener('online',()=>{
    netstatus.style.display = 'none';
});

    //add user
let username = document.getElementById('username');
let usermessage = document.getElementById('usermessage');
let chatlist = document.getElementById('chatlist');
let lists = document.getElementsByClassName('lists');

let useradd = () => {
   let nameinput = username.value;
   let msginput = usermessage.value;
   let firstchar = nameinput[0].toUpperCase();


   let newuser = `<li class="animate__animated">
                    <div class="letter">
                        <span>${firstchar}</span>
                    </div>
                    <div class="infos">
                        <h3>${nameinput}</h3>
                        <p>${msginput}</p>
                    </div>
                    <div class="delete">
                        <img src="./assets/delete.svg" alt="delete"/>
                    </div>
                </li>`;
    chatlist.insertAdjacentHTML('afterbegin',newuser);
    empty.style.display = 'none';
    closemodel();
    updateusers();
    username.value = "";
    usermessage.value = "";
};
    //counting users
let headerchat = document.getElementById('header-chat');

let updateusers = () =>{
    let totalusers = chatlist.childElementCount;
    headerchat.innerHTML = `Chat(${totalusers})`;
    if(totalusers == 0){
        empty.style.display = 'flex';
    }
};
updateusers();

    //searchbar
let search = document.getElementById('search');
let result = document.getElementById('result');

search.onkeyup = () => {
    let keyword = search.value.toLowerCase();
    let list = chatlist.children;

    for(let li of list){
        let usrname = li.querySelector('h3').innerText;
        let usrmsg = li.querySelector('p').innerText;

        usrname = usrname.toLowerCase();
        usrmsg = usrmsg.toUpperCase();

        if(usrname.indexOf(keyword) == -1 && usrmsg.indexOf(keyword) == -1){
            li.style.display = 'none';
        }else{
            li.style.display = 'flex';
        }
    }
};

    //delete user
window.addEventListener('click',(event)=>{
    let target = event.target;

    if(target.tagName == "IMG" && target.alt == "delete"){
        let li = target.parentNode.parentNode;
        li.classList.add('animate__fadeOutLeft');

        setTimeout(()=>{
            li.remove();
        updateusers();}
            ,400);
    }

});

    //empty users
let empty = document.getElementById('empty');