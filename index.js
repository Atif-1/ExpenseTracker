
var form = document.querySelector('#form');
var table = document.querySelector('#tab');
var button=document.querySelector('.btn-add-edit');
window.addEventListener('DOMContentLoaded', () => {
	axios.get('http://localhost:2000/get-expenses').then((res)=>{
		for (var i = 0; i < res.data.length; i++) {
			show(res.data[i]);
		}}).catch ((err)=> {
		console.log(err);
	})
});
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
	if(button.id){
		axios.put('http://localhost:2000/edit-expense/'+button.id,my_obj).then(()=>{
		}).catch((err)=>console.log(err));
		alert('successfully updated! please refresh the page');
	}
	else{
		console.log('in else');
		axios.post('http://localhost:2000/add-expense',my_obj).then((result) => {
			console.log(result);
		}).catch((err) => {
			console.log(err);
		});
		alert('successfully added! please refresh the page');
	}
}
	function show(obj){
	let rw = document.createElement('tr');
	let colId=document.createElement('td');
	let colAmt=document.createElement('td');
	let colDes=document.createElement('td');
	let colCat=document.createElement('td');
	let amt = obj.amount;
	colId.appendChild(document.createTextNode(obj.id));
	colAmt.appendChild(document.createTextNode(obj.amount));
	colDes.appendChild(document.createTextNode(obj.description));
	colCat.appendChild(document.createTextNode(obj.category));
	rw.append(colId);
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
			const id=e.target.parentElement.parentElement.firstChild.innerText;
			axios.delete('http://localhost:2000/delete-expense/'+id).then((res)=>{
			console.log("succesfully deleted");
			}).catch((err)=>console.log(err));
		}
		}
	}
	editBtn.addEventListener('click',edit);
	function edit(e){
		e.preventDefault();
		button.id =obj.id;
		let amtInp=document.querySelector('#amount');
		let desInp=document.querySelector('#description');
		let catInp=document.querySelector('#category');
		amtInp.value=obj.amount;
		desInp.value=obj.description;
		catInp.value=obj.category;
		}
}
