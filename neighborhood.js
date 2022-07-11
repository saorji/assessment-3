const random = document.querySelector('#random')

const restaurantsList = ['Cast Iron Grill', 'Pecan Grill at Overton Hotel', 'La Diosa Cellars', 'Orlando Italian Restaurant', 'Triple J Chophouse and Brew', 'Caboose on 50th street', 'Pancake house', 'The Plaza Restaurant', 'The Funky Door','Taqueria Jalisco', 'Texas Raodhouse', 'Capital Pizza']

function randomizer(evt) {
    evt.preventDefault()
    random.textContent = restaurantsList[Math.floor(Math.random() * restaurantsList.length)];
    revealMessage()
}

function revealMessage() {
    random.classList.remove('hide')
    setTimeout(() => {
        random.classList.add('hide')
    }, 2000);
}

document.querySelector('#rest').addEventListener('click',randomizer);