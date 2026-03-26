const resultAlwaysRunner = () => {
    gameBoard.classList.toggle(`displayNone`);
    if (generatedWord == playerWord) {
        result.classList.add(`correctLetter`);
    } else {
        result.classList.add(`incorrectLetter`);
    }
    result.innerText = generatedWord;
}

const gameEngine = async () => {
    if (document.getElementById(`word${generatedWord.length - 1}`).innerText == "") {
        return 0;
    }
    if (gameBoard.classList.contains(`displayNone`)) {
        return 0;
    }
    UserText();
    correctWordDetection = await isCorrectWord(playerWord);
    if (!correctWordDetection) {
        ResetWrongUserText();
        return 0;
    }
    defineText();
    if (generatedWord == playerWord) {
        resultAlwaysRunner();
        turnNo = turns + 1;
        // return 0;
    }
    if (turnNo > turns) {
        resultAlwaysRunner();
        // return 0;
    }
    ExplainingEnteredData();
}