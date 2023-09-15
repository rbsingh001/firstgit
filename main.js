var itemList = document.querySelector('#items');

itemList.parentElement.style.backgroundColor = "gray";

itemList.firstElementChild.style.backgroundColor = "blue";
itemList.lastElementChild.style.backgroundColor = "yellow";

var newDiv = document.createElement('div');
newDiv.className = "hello";
newDiv.id = 'hello1';
newDiv.setAttribute('title' , 'Hello World');

var newDivText = document.createTextNode('Hello World');

newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

newDiv.style.fontSize = '30px';
// itemList.insertBefore(newDiv , itemList.firstElementChild);
// above line is to add hello world at the first position in the list 

