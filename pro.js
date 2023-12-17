
var form = document.querySelector('#form');
var table = document.querySelector('#tab');

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
	let rw = document.createElement('tr');
	let colAmt=document.createElement('td');
	let colDes=document.createElement('td');
	let colCat=document.createElement('td');
	colAmt.appendChild(document.createTextNode(itemAmt));
	colDes.appendChild(document.createTextNode(itemDes));
	colCat.appendChild(document.createTextNode(itemCat));
	rw.append(colAmt);
	rw.append(colDes);
	rw.append(colCat);
	var delbtn=document.createElement('button');
	delbtn.appendChild(document.createTextNode('X'));
	delbtn.className='btn btn-danger delete';
	 var editBtn = document.createElement('button');
	editBtn.appendChild(document.createTextNode('edit'));
	editBtn.className = 'btn btn-primary';
	let newDiv=document.createElement('div');
	newDiv.className='btn-group';
	newDiv.appendChild(editBtn);
	newDiv.appendChild(delbtn);
	rw.appendChild(newDiv);
	table.appendChild(rw);
	//delete
	delbtn.addEventListener('click', removeItem);
	function removeItem(e){
		if(e.target.classList.contains('delete')){
		if(confirm('Remove this Item?')){
			let tr = e.target.parentElement.parentElement;
			table.removeChild(tr);
			localStorage.removeItem(key);
		}
		}
  	}
	//edit
	editBtn.addEventListener('click',edit);
	function edit(e){
		localStorage.removeItem(key);
		let tr=e.target.parentElement.parentElement;
		table.removeChild(tr);
		let amt=document.querySelector('#amount');
		let des=document.querySelector('#description');
		let cat=document.querySelector('#category');
		amt.value=itemAmt;
		des.value=itemDes;
		cat.value=itemCat;
	}
}
