var headerTitle = document.getElementById('header-title');

var header = document.getElementById('main-header');

header.style.border = 'solid 2px black';


var items = document.querySelectorAll('li');

items[1].style.backgroundColor = 'green';
items[1].style.color = 'green';
items[2].style.visibility = 'hidden';


var odd = document.querySelectorAll('li:nth-child(odd)');

for(let i=0; i < odd.length; i++){
    
    odd[i].style.backgroundColor ='green';
}

