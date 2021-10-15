let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/driveclub-trailer-audi-r8.jpg') {
        myImage.setAttribute('src', 'images/driveclub-trailer-race-prep.jpg');
    } else {
        myImage.setAttribute('src', 'images/driveclub-trailer-audi-r8.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Neowi is cool, ' + myName;
    }
}

/*Initialization code.*/
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Neowi is cool, ' + storedName;
  }
  
  myButton.onclick = function() {
    setUserName();
  }
  