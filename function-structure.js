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

