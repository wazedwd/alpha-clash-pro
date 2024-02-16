function hideElementById (inputId) {
    const hidePlayHome = document.getElementById(inputId);
    hidePlayHome.classList.add('hidden');
}
function showElementById (inputShowId) {
    const showPlayGame = document.getElementById(inputShowId);
    showPlayGame.classList.remove('hidden');
   
}

function setBackgroundValue (inputSetId) {
    const bgValue = document.getElementById(inputSetId);
    bgValue.classList.add('bg-orange-500'); 
}

function removeBackgroundValue(inputRmvId) {
    const removeBg = document.getElementById(inputRmvId);
    removeBg.classList.remove('bg-orange-500');
}

// function increasingScoreValue (inputScoreId) {
//       const gameScoreShow = document.getElementById(inputScoreId);
//     const gameScoreInner = gameScoreShow.innerText;
//     const changeGameScore = parseInt(gameScoreInner);
//     const newScore = changeGameScore + 1;
//     gameScoreShow.innerText = newScore;
    
// }

function increasingScoreValue (inputScoreId) {
    const gameScore = document.getElementById(inputScoreId);
    const gameScoreInner = gameScore.innerText;
    const changeScore = parseInt(gameScoreInner);
    return changeScore;
}

function setNewScore(inputScoreId, value) {
    const setNewGameScore = document.getElementById(inputScoreId);
    setNewGameScore.innerText = value;

}

function getElementTextById(elementId) {
    const getId = document.getElementById(elementId);
    const text = getId.innerText;
    return text;
}


function alphabetElement() {
    // get and create alphabet array;
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const sliptAlphabetString = alphabetString.split('');

    // console.log(sliptAlphabetString[3]);
    const roundNumber = Math.random()*25;
    const index = Math.round(roundNumber);
    // console.log(index);
    const alphabetRandom = sliptAlphabetString[index];
    return alphabetRandom;
}

