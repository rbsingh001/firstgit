var headerTitle = document.getElementById('header-title');

var header = document.getElementById('main-header');

header.style.border = 'solid 2px black';

var additem = document.getElementById('additem');
additem.innerHTML = '<b><h2  class="title">Add Items</h2></b>';
additem.style.color = 'green';


var li = document.getElementsByTagName('li');

for(let i=0; i<items.length; i++){
    li[i].style.fontWeight = 'bold';
}

