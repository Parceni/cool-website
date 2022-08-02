



let myImage = document.querySelector('img');

myImage.style.cursor = "pointer";

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    console.log(mySrc);
    if(mySrc === 'Images/narutosasuke.jpg') {
        myImage.setAttribute('src', 'Images/demonslayer.webp');
    }else{
        myImage.setAttribute('src', 'Images/narutosasuke.jpg');
    }
}

const myButton = document.querySelector('button');
const myHeading = document.querySelector('h1');

const setUsername = function(val) {
    let personName = prompt(`Please enter your name ${val}`);
    if(!personName){
        setUsername(" (try again)");
    }else{
    localStorage.setItem('personName',personName);
    myHeading.textContent = "Hello, " + personName;
    }
}


if (!localStorage.getItem("personName")) {
  setUsername("");
} else {
  myHeading.textContent = "Hello, " + localStorage.getItem('personName');
}


myButton.onclick = function () {
    setUsername("");
}


