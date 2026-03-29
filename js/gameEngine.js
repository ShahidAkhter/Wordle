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
    try {
        if (updating) {
            return 0;
        }
        updating = true;
        if (document.getElementById(`word${generatedWord.length - 1}`).innerText == "") {
            updating = false;
            return 0;
        }
        if (gameBoard.classList.contains(`displayNone`)) {
            updating = false;
            return 0;
        }
        UserText();
        correctWordDetection = await isCorrectWord(playerWord);
        if (!correctWordDetection) {
            ResetWrongUserText();
            updating = false;
            return 0;
        }
        defineText();
        if (generatedWord == playerWord || turnNo == turns) {
            resultAlwaysRunner();
        }
        ExplainingEnteredData();

        setTimeout(() => {
            updating = false;
        }, 1000);
    } catch (error) {
        console.log(error);
        return 0;
    }
}