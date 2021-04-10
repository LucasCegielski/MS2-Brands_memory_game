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

// Functions

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

function hideCards() {
    openCards = [];
    displayedCards = document.querySelectorAll(".show");
    setTimeout(function () {
        for (let i = 0; i < displayedCards.length; i++) {
            displayedCards[i].className += " red-wrong";
        }
    }, 1000);

    setTimeout(function () {
        console.log(displayedCards);
        for (let i = 0; i < displayedCards.length; i++) {
            displayedCards[i].className = "card not-shown";
        }
    }, 3000);
    updateMoveCount();

}

function revealCard(e) {
    e.target.classList.add('show', 'open');
    e.target.classList.remove('not-shown');
}

function addOpenCard(e) {
    let classMatch = e.target.querySelector('i').className;
    openCards.push(classMatch);
}

function checkIfWon() {
    if (matchedCount === 8) {
        stopTimer();
        successModal.style.display = 'block';
        document.getElementById('success-message').innerHTML = "You win! You completed the game in " + moveCount + " moves in a time of " + completedTime + "!";
        if (moveCount > 0 && moveCount < 13) {
            document.getElementById('star-rating-message').innerHTML = "<i class='fa fa-star'><i class='fa fa-star'><i class='fa fa-star'>";
        }
        if (moveCount > 13 && moveCount < 19) {
            document.getElementById('star-rating-message').innerHTML = "<i class='fa fa-star'><i class='fa fa-star'>";
        }
        if (moveCount > 19 && moveCount < 26) {
            document.getElementById('star-rating-message').innerHTML = "<i class='fa fa-star'>";
        }
        if (moveCount > 26) {
            document.getElementById('star-rating-message').innerHTML = "...no stars. Try and complete in less moves next time.";
        }
    }
    closeModal();
}

function playAgain() {
    playAgainButton.addEventListener('click', restartGame);
    displayTimer.textContent = "0:00";
}

function closeModal() {
    closeModalButton.addEventListener('click', function () {
        successModal.style.display = 'none';
    });
    window.addEventListener('click', windowCloseModal);
    playAgain();
}

function windowCloseModal(e) {
    if (e.target == successModal) {
        successModal.style.display = 'none';
    }
}

function restartGame() {
    for (let i = 0; i < allCards.length; i++) {
        allCards[i].className = "card not-shown";
    }

    shuffleCards();
    moveCount = 0;
    document.getElementById("moves-made").innerHTML = moveCount;
    openCards = [];
    matchedCards = [];
    matchingCards = '';
    displayedCards = '';
    successModal.style.display = 'none';
    stopTimer();
    displayTimer.textContent = "0:00";
    document.getElementById("moves-made").innerHTML = moveCount + " Moves";
}

const displayTimer = document.querySelector('#timer');
let clock;
let timerStart;
let timeNow;
let timerEnd;
let secondsElapsed;
let minutesElapsed;
let secondsRounded;
let secondsFormatted;
let timeElapsed;
let completedTime;
let clickToRun;

function runTimer() {
    timerStart = Date.now();
    clock = setInterval(function () {
        displayTime(clock);
    }, 1000)

    document.removeEventListener('click', runTimer);
}

function stopTimer() {

    clearInterval(clock);
    completedTime = document.querySelector('#timer').textContent;
}

function displayTime(clock) {
    timeNow = Date.now();
    secondsElapsed = (timeNow - timerStart) / 1000;
    minutesElapsed = Math.floor(secondsElapsed / 60);
    secondsRounded = Math.floor(secondsElapsed % 60);
    secondsFormatted = secondsRounded < 10 ? '0' + secondsRounded : secondsRounded;
    timeElapsed = minutesElapsed + ":" + secondsFormatted;
    displayTimer.textContent = timeElapsed;
}

const starRating = document.getElementsByClassName('stars')[0];

function adjustStars() {
    if (moveCount > 12) {
        starRating.innerHTML = "<li><i class='fa fa-star'></i></li><li><i class='fa fa-star'></i></li>";
    }
    if (moveCount > 18) {
        starRating.innerHTML = "<li><i class='fa fa-star'></i></li>";
    }
    if (moveCount > 25) {
        starRating.innerHTML = "<li><i class='fa fa-star-half'></i></li>";
    }
    if (moveCount > 27) {
        starRating.innerHTML = "<li><i>...</i></li>";
    }
}