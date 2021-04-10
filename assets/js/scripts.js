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