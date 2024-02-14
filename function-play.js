// function playTheGame() {
//     const playHome = document.getElementById('Play-button-home');
//     playHome.classList.add('hidden');
//     const gamePlay = document.getElementById('play-game-button');
//     gamePlay.classList.remove('hidden');
// }


function continueGame() {
    const alphabetContinue = alphabetElement();
    const playMyGame = document.getElementById('play-games');
    playMyGame.innerText = alphabetContinue;
    const setValueofBg = setBackgroundValue(alphabetContinue);
    
}

function playGame() {
hideElementById('Play-button-home');
showElementById('play-game-button');
continueGame();
}

