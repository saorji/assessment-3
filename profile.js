const displays = document.querySelector('#display')

function handleColor(){
	//alert(`My favorite color is Green`);
    displays.textContent = `My favorite color is Green`
    revealMessage()
}

document.querySelector('#color').addEventListener('click',handleColor);


function handlePlace(){
	displays.textContent = `My house is my favorite place to be`
    revealMessage()
}

document.querySelector('#place').addEventListener('click',handlePlace);


function handleRitual(){
	displays.textContent = `Game night with babe`
    revealMessage()
}

document.querySelector('#ritual').addEventListener('click',handleRitual);

function revealMessage() {
    displays.classList.remove('hide')
    setTimeout(() => {
        displays.classList.add('hide')
    }, 2000);
}