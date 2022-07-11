console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert(`The form has been submitted successfully`);
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);


function handleMouseover(){
	alert(`You're on the track for greatness`);
}


let listner = document.querySelector('#duckpix');
listner.addEventListener('mouseover',handleMouseover);