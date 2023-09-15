var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit' , addItem);

itemList.addEventListener('click' , removeItem);

filter.addEventListener('keyup', filterItems);

function addItem(e){
    e.preventDefault();

    var newItem = document.getElementById('item').value;

    var li = document.createElement('li');
    li.className = 'list-group-item';

    li.appendChild(document.createTextNode(newItem));

    var del = document.createElement('button');
    del.className = 'btn btn-danger btn-sm float-right delete';

    del.appendChild(document.createTextNode('X'));

    var edit = document.createElement('button');
    edit.appendChild(document.createTextNode('Edit'));

    li.appendChild(del);
    li.appendChild(edit);
    itemList.appendChild(li);

}
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
function filterItems(e){

    var text = e.target.value.toLowerCase();

    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function (item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    })

}