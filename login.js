const form=document.querySelector('form');
const body=document.querySelector('body');

form.addEventListener('submit',userLogin);

function userLogin(e){
	e.preventDefault();
	const email=document.querySelector('#email').value;
	const password=document.querySelector('#password').value;
	var user=new Object();
	user.email=email;
	user.password=password;
	axios.post('http://localhost:3000/user/login',user).then((res) => {
		console.log(res.data);
		console.log(res.data.success);
		console.log(res.data.message);

		const Msg=document.createElement('h2');
			Msg.append(document.createTextNode(res.data.message));
			Msg.style.color="red";
			form.appendChild(Msg);
	}).catch((err) => {
			console.log(err.response.data.message);
			const errMsg=document.createElement('h2');
			errMsg.append(document.createTextNode(err.response.data));
			errMsg.style.color="red";
			form.appendChild(errMsg);
	});
}