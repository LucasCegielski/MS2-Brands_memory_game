const listItems = document.getElementsByClassName("card");
const arrListItems = Array.prototype.slice.call(listItems);
const shuffledArray = shuffle(arrListItems);

let newList = '';
for (i = 0; i < shuffledArray.length; i++) {
    newList += shuffledArray[i].outerHTML;
}

function shuffleCards() {
    document.getElementById("deck").innerHTML = newList;
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
let openCards = [];
let matchedCards = [];
let matchedCount = 0;
let moveCount = 0;
let matchingCards;
let displayedCards;

const allCards = document.getElementsByClassName('card');
const successModal = document.getElementById('success-modal');
const closeModalButton = document.getElementsByClassName('close-button')[0];
const playAgainButton = document.getElementById('button-restart');
const restartButton = document.getElementsByClassName("restart")[0];

restartButton.addEventListener('click', restartGame);
document.body.addEventListener('click', function (e) {
    if (e.target.classList.contains("not-shown") && (document.querySelectorAll('.show').length < 2)) {
        if (document.querySelectorAll('.not-shown').length == 16 && moveCount === 0) {
            runTimer();
        }
        let classMatch = e.target.querySelector('i').className;
        if (openCards.length < 1) {
            revealCard(e);
            addOpenCard(e);
        } else {
            if (openCards.includes(classMatch)) {
                matchedCards.push(classMatch);
                revealCard(e);
                matchCards();
                updateMoveCount();
                openCards = [];
            } else {
                revealCard(e);
                hideCards();
            }
        }
    } else {
        console.log("clicked outside cards");
    }
});

function updateMoveCount() {
    moveCount += 1;
    if (moveCount === 1) {
        document.getElementById("moves-made").innerHTML = moveCount + " Move";
    } else {
        document.getElementById("moves-made").innerHTML = moveCount + " Moves";
    }
    adjustStars();
}

function matchCards() {

    matchedCount += 1;
    setTimeout(function () {
        matchingCards = document.querySelectorAll(".show");
        for (let i = 0; i < matchingCards.length; i++) {
            matchingCards[i].className = "card match";
        }
        console.log(matchingCards);
        checkIfWon();
    }, 1000);
}