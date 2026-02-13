const gridSquares = document.querySelectorAll('.square');
const myCard = document.querySelector('.myCard');
let cards = [];
let randomCard = cards[0];


gridSquares.forEach(square => {
    square.addEventListener('click', () => {
        // If grey, remove grey to go back to team color
        if (square.classList.contains('greyed-out')) {
            square.classList.remove('greyed-out');
        } else {
            // Otherwise, turn grey
            square.classList.add('greyed-out');
        }
    });
});

// Player card click calls giveRandomCard
const playerCardSquare = document.querySelector('#playerCard .square');
if (playerCardSquare) {
    playerCardSquare.addEventListener('click', giveRandomCard);
}
const cardCategories = {
 celebrity: [
    'Kylie Jenner', 
    'Dwayne Johnson', 
    'Ariana Grande', 
    'Zendaya', 
    'Matthew Morrison', 
    'Elon Musk', 
    'Greta Thunberg', 
    'Mark Zuckerberg', 
    'Leonardo Di Caprio',
    'Katy Perry',
    'Jake Paul',
    'Ellen Degeneres',
    'Millie Bobby Brown',
    'Jason Momoa',
    'Gordon Ramsey',
    'Blake Lively',
    'Robert Pattinson',
    'Josh Hutcherson',
    'Rebel Wilson',
    'Jennifer Lawrence'],
  characters: [
    'Remy',
    'Mickey Mouse',
    'Stitch',
    'Sid',
    'Mike Wazowski',
    'Tinkerbell',
    'Dory',
    'Lightning McQueen',
    'Pascal',
    'Nemo',
    'Elsa',
    'Ice Age Baby',
    'Sleepy',
    'Pinnochio',
    'Beast',
    'Aliens',
    'Jack Jack',
    'King Julien',
    'King Bob',
    'Merida'
  ],
  creatures: [
    'Harambe',
    'Bigfoot',
    'Loch Ness Monster',
    'Yeti',
    'Mothman',
    'Moo Deng',
    'Goblin',
    'Godzilla',
    'Danny Devito',
    'Jabba the Hutt',
    'Slenderman',
    'Oompa Loompa',
    'Blobfish',
    'King Kong',
    'Alien',
    'Yoda',
    'Lorax',
    'Shrek',
    'Hulk',
    'Herobrine'
  ],
  tvshows: [
    'Lucy Chen',
    'Tim Bradford',
    'Ginny',
    'Hunter',
    'Marcus',
    'John Nolan',
    'Bailey Nune',
    'Wesley Evers',
    'Phil Coulson',
    'Bobby Nash',
    'Buck',
    'Jemma Simmons',
    'Shawty',
    'Light',
    'L',
    'Merry',
    'TreverseLive',
    'Mouse',
    'Chaplin',
    'Lil Chap'
  ]
 }

window.onload = () => {
    updateCards(cardCategories.tvshows);
    giveRandomCard();
};

function updateCards(cardArray) {
    for (const [idx, card] of cardArray.entries()) {
        const currPhoto = document.getElementById('photo-' + (idx + 1));
        const currName  = document.getElementById('name-'  + (idx + 1));
        if (!currPhoto || !currName) continue;
        currPhoto.src = 'characters/' + card + '.jpg';
        currName.textContent = card;
        const squareDiv = currPhoto.parentElement;
        squareDiv.classList.remove('greyed-out');
    }
    cards = cardArray;
    giveRandomCard();
}

function giveRandomCard() {
    randomCard = cards[Math.floor(Math.random()*cards.length)];
    document.myPhoto.src=("characters/"+randomCard+".jpg");
    document.getElementById("myName").innerHTML = randomCard;
};


// Handle category dropdown change
const categorySelect = document.getElementById('category-select');
if (categorySelect) {
  categorySelect.addEventListener('change', (e) => {
    const selectedCategory = e.target.value;
    const newCards = cardCategories[selectedCategory];
    updateCards(newCards);
  });
}

function resetGame() {
  // Ungrey all grid squares
  const gridSquares = document.querySelectorAll('#grid .square');
  gridSquares.forEach(square => {
    square.classList.remove('greyed-out');
  });
  
  // Randomize player card
  giveRandomCard();
}

// Attach click handler to reset button
const resetBtn = document.getElementById('reset-btn');
if (resetBtn) {
  resetBtn.addEventListener('click', resetGame);
}