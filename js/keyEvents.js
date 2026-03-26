wordNumInitial = 0;
wordNum = 0;

let KeyboardEventObj = {
  a: 'A', b: 'B', c: 'C', d: 'D', e: 'E', f: 'F', g: 'G', h: 'H', i: 'I', j: 'J', k: 'K', l: 'L', m: 'M', n: 'N', o: 'O', p: 'P', q: 'Q', r: 'R', s: 'S', t: 'T', u: 'U', v: 'V', w: 'W', x: 'X', y: 'Y', z: 'Z', A: 'A', B: 'B', C: 'C', D: 'D', E: 'E', F: 'F', G: 'G', H: 'H', I: 'I', J: 'J', K: 'K', L: 'L', M: 'M', N: 'N', O: 'O', P: 'P', Q: 'Q', R: 'R', S: 'S', T: 'T', U: 'U', V: 'V', W: 'W', X: 'X', Y: 'Y', Z: 'Z',
};

document.body.addEventListener('keydown', (event) => {
  if (KeyboardEventObj[event.key]) {
    document.getElementById(`word${wordNum}`).innerText = KeyboardEventObj[event.key];
  }
  if (event.code == "Enter") {
    // enterKeyContent();
    gameEngine();
  }
  else if (event.code == "Backspace") {
    if (wordNum == wordNumInitial) {
      wordNum = wordNumInitial;
    } else {
      wordNum--
      document.getElementById(`word${wordNum}`).innerText = '';
    }
  }
  if (document.getElementById(`word${wordNum}`).innerText !== "") {
    if (wordNum == (generatedWord.length - wordNumInitial)) {
      wordNum = (generatedWord.length - wordNumInitial);
    } else {
      wordNum++;
    }
  }
})


Array.from(document.querySelectorAll('.key')).forEach(element => {
  element.addEventListener('click', (event) => {
    if (KeyboardEventObj[event.target.innerText]) {
      document.getElementById(`word${wordNum}`).innerText = KeyboardEventObj[event.target.innerText];
    }
    if (event.target.id == "enter" || event.target.id == "enterInner") {
      // enterKeyContent();
      gameEngine();
    }
    else if (event.target.id == "backspace" || event.target.id == "backspaceInner") {
      if (wordNum == wordNumInitial) {
        wordNum = wordNumInitial;
      } else {
        wordNum--
        document.getElementById(`word${wordNum}`).innerText = '';
      }
    }
    if (document.getElementById(`word${wordNum}`).innerText !== "") {
      if (wordNum == (generatedWord.length - wordNumInitial)) {
        wordNum = (generatedWord.length - wordNumInitial);
      } else {
        wordNum++;
      }
    }
  });
})