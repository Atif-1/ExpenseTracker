
var form = document.querySelector('#form');
var itemList = document.querySelector('#items');

form.addEventListener('submit',addItem);
function addItem(e){
	e.preventDefault();
	let itemAmt = document.querySelector('#amount').value;
	let itemDes=document.querySelector('#description').value;
	let itemCat=document.querySelector('#category').value;
	const my_obj=new Object();
	my_obj.amount=itemAmt;
	my_obj.description=itemDes;
	my_obj.category=itemCat;
	//adding key
	var key=itemDes;
	//serializing
		const objJSON=JSON.stringify(my_obj);
	//inserting in local storage
	localStorage.setItem(key,objJSON);
	// Create new li element
	let li = document.createElement('li');
	li.className = 'list-group-item';
	let newDiv=document.createElement('div');
	newDiv.appendChild(document.createTextNode(itemAmt +' - '));
	newDiv.appendChild(document.createTextNode(itemDes +' - '));
	newDiv.appendChild(document.createTextNode(itemCat));
	li.append(newDiv);
	var delbtn=document.createElement('button');
	delbtn.appendChild(document.createTextNode('X'));
	delbtn.className='btn btn-danger btn-sm delete';
	 var editBtn = document.createElement('button');
	editBtn.appendChild(document.createTextNode('edit'));
	editBtn.className = 'btn btn-sm btn-secondary';
  	li.appendChild(editBtn);;
	li.appendChild(delbtn);
	itemList.appendChild(li);
	//delete
	delbtn.addEventListener('click', removeItem);
	function removeItem(e){
		if(e.target.classList.contains('delete')){
		if(confirm('Remove this Item?')){
			let li = e.target.parentElement;
			itemList.removeChild(li);
			localStorage.removeItem(key);
		}
		}
  	}
	//edit
	editBtn.addEventListener('click',edit);
	function edit(e){
		localStorage.removeItem(key);
		let li=e.target.parentElement;
			itemList.removeChild(li);
		let amt=document.querySelector('#amount');
		let des=document.querySelector('#description');
		let cat=document.querySelector('#category');
		amt.value=itemAmt;
		des.value=itemDes;
		cat.value=itemCat;
	}
}
