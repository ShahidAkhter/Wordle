let generatedWord = "";
let correctWordDetection = true;
let html = "";
let gameBoard = document.getElementById('gameBoard');
let result = document.getElementById('result');
let predictions = document.getElementById('predictions');
let firstWords = 0;
let lastWords = findWords.length - 1;
let playerWord = "";
let turnNo = 0;
let turns = 0;
let updating = false;
document.getElementById('nav').innerText = `Wordle: Chances ...`;

const RandomTextGenerator = async () => {
    try {
        let fetchingContent = await fetch(`https://random-word-api.herokuapp.com/word`);
        let responseJSON = await fetchingContent.json();
        generatedWord = responseJSON[0].toUpperCase();
    } catch (error) {
        randomWords = Math.floor(Math.random() * lastWords) + firstWords;
        generatedWord = findWords[randomWords].toUpperCase();
        // console.log(error);
    }
    document.getElementById('nav').innerText = `Wordle: Chances ${generatedWord.length + 2}`;
    turns = generatedWord.length + 1;
    return 0;
}

const UserText = () => {
    playerWord = ""
    for (let i = 0; i < generatedWord.length; i++) {
        playerWord += document.getElementById(`word${i}`).innerText;
    }
    return 0;
}

const ResetWrongUserText = () => {
    for (let i = 0; i < generatedWord.length; i++) {
        document.getElementById(`word${i}`).innerText = "";
        wordNum = 0;
    }
    return 0;
}

const gameBoardBuilder = () => {
    let i = 0;
    for (i = 0; i < generatedWord.length; i++) {
        html += `<div id="word${i}" class="words"></div>`;
    }
    html += `<div id="word${i}" hidden></div>`;
    gameBoard.innerHTML = html;
    return 0;
}

const defineText = () => {
    for (i = 0; i < generatedWord.length; i++) {
        element = document.getElementById(`word${i}`);
        element.classList.remove('reset');
        if (generatedWord[i] != playerWord[i]) {
            element.classList.add('incorrectLetter');
            if (generatedWord.includes(playerWord[i])) {
                element.classList.add('letterIncludesInWord');
            }
        } else if (generatedWord[i] == playerWord[i]) {
            element.classList.add('correctLetter');
        }
    }
    return 0;
}

const ExplainingEnteredData = () => {
    predictions.innerHTML += `<div class="flex" id="turn${turnNo}">${gameBoard.innerHTML}</div>`
    for (i = 0; i < generatedWord.length; i++) {
        element = document.getElementById(`word${i}`);
        if (element.classList.contains('letterIncludesInWord')) {
            element.classList.remove('letterIncludesInWord')
        }
        if (element.classList.contains('incorrectLetter')) {
            element.classList.remove('incorrectLetter')
        }
        if (element.classList.contains('correctLetter')) {
            element.classList.remove('correctLetter')
        }
        element.innerText = "";
        element.classList.add('reset');
    }
    wordNum = 0;
    turnNo++;
    return 0;
}

const main = async () => {
    a = await RandomTextGenerator();
    gameBoardBuilder();
}

main();


document.getElementById('keyboardVisibilityOne').addEventListener('click', () => {
    document.getElementById('keyboardVisibilityOne').classList.add('displayNone');
    document.getElementById('keyboardID').classList.remove('displayNone');
})
document.getElementById('keyboardVisibilityTwo').addEventListener('click', () => {
    document.getElementById('keyboardVisibilityOne').classList.remove('displayNone');
    document.getElementById('keyboardID').classList.add('displayNone');
})