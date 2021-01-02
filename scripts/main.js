/*
사이에 있는 모든 것은 주석입니다.
*/
//이것도 주석입니다.

let myHeading = document.querySelector('h1');

/*
let myVal = 1972;

if (myVal === 1972){
    myHeading.textContent = 'Hello world!';
}else{
    myHeading.textContent = 'Hello Lovetang!';
}
*/

/*
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/

//이미지 이벤트 처리
let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/lovetang.jpeg') {
      myImage.setAttribute ('src','images/wgflogo.png');
    } else {
      myImage.setAttribute ('src','images/lovetang.jpeg');
    }
}


function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

let myButton = document.querySelector('button');
myButton.onclick = function() {
  
  setUserName();
}

const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2

color.onclick = function() {
    this.style.backgroundColor = 'red';
  };

growing.onclick = function() {
  this.style.fontSize = '36px';
  this.style.color = 'red';
};

growing2.onclick = function() {
  this.style.fontSize = '36px';
  this.style.color = 'red';
};
//animate number
stripe.onclick = function() {
  stripe.classList.add('animate');
};
