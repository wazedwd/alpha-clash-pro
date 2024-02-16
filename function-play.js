
function myKeyUpForStarGame(event) {
    const playerKeyupINButton = event.key;
    console.log('pressed the player', playerKeyupINButton);
    if(playerKeyupINButton === "Escape") {
        gameOver();
    }
    // get the expected to press
    const showButtonInScreen = document.getElementById('play-games'); 
    const playGamesLetter = showButtonInScreen.innerText;
    const changeLetterCapital = playGamesLetter.toLocaleLowerCase();
    console.log('please show in display', changeLetterCapital);
    console.log(playerKeyupINButton, changeLetterCapital);
    
   if(playerKeyupINButton === changeLetterCapital) {
    console.log('you got a point');
    // continue game and when it is write it's bg will be remove;
    continueGame();
    removeBackgroundValue(changeLetterCapital);
    // update score;
    // when  you click write your score increasing and updating;
    // const gameScoreShow = document.getElementById('games-score');
    // const gameScoreInner = gameScoreShow.innerText;
    // const changeGameScore = parseInt(gameScoreInner);
    // // console.log(typeof changeGameScore);
    // const newScore = changeGameScore + 1;
    // // console.log('increasing one', newScore);
    // gameScoreShow.innerText = newScore;
    const increasingGameScore = increasingScoreValue('games-score');
    const newSetValue = increasingGameScore + 1;
    setNewScore('games-score', newSetValue);
   }
   else {
    // console.log('you loss a point');
    // const gameLife = document.getElementById('game-life');
    // const gameLifeInner = gameLife.innerText;
    // const changeGameLifeInner = parseInt(gameLifeInner);
    // // console.log(changeGameLifeInner);
    // const newLife = changeGameLifeInner - 1;
    // gameLife.innerText = newLife;

    const gameLifeMinus = increasingScoreValue ('game-life');
    const newGameLifeMinus = gameLifeMinus - 1;
    setNewScore('game-life', newGameLifeMinus); 
    if(newGameLifeMinus === 0) {
        gameOver();
    }

   }

}

document.addEventListener('keyup', myKeyUpForStarGame);

// document.addEventListener('keyup', function myKeysForGamePlay(event) {
//     // console.log(event);
//     console.log('Please response my keys for your boss order', event.key);
// })


// function playTheGame() {
//     const playHome = document.getElementById('Play-button-home');
//     playHome.classList.add('hidden');
//     const gamePlay = document.getElementById('play-game-button');
//     gamePlay.classList.remove('hidden');
// }


function continueGame() {
    const alphabetContinue = alphabetElement();
    const playMyGame = document.getElementById('play-games');
    console.log(playMyGame);
    playMyGame.innerText = alphabetContinue;
    const setValueofBg = setBackgroundValue( alphabetContinue);
    
}

function playGame() {
// hide everything show only playground;
hideElementById('Play-button-home');
hideElementById('score-game-button');
showElementById('play-game-button');
setNewScore('game-life', 5);
setNewScore('games-score', 0);
continueGame();
}

function gameOver() {
    console.log('Game over');
    hideElementById('play-game-button');
    showElementById('score-game-button'); 
    // update score
    const lastGameScore = document.getElementById('games-score').innerText;
    setNewScore('final-score', lastGameScore);
    // clear the last select
    const getElementText = getElementTextById('play-games');
    // console.log('show me the text', getElementText);
    removeBackgroundValue(getElementText);
}
