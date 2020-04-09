//Game area. Alphabet btns

let alphabetDiv = document.querySelector(".alphabet");
let wordDiv = document.querySelector(".hiddenWord");
let guessWord = "JAVASCRIPT";
let guessWordLength = guessWord.length;
console.log(guessWordLength);
let lives = 7;

let alphaArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// let correctSound = document.createElement("audio");
// let incorrectSound = document.createElement("audio");
// correctSound.setAttribute("src", "/sounds/CAR-DOOR.mp3");
// incorrectSound.setAttribute("src", "/sounds/CAR-DOOR.mp3");

function createBtn(letter) {
  let btn = document.createElement("button");
  btn.innerText = letter;
  alphabetDiv.appendChild(btn);
}
alphaArr.forEach((letter) => {
  createBtn(letter);
});

let btns = alphabetDiv.querySelectorAll("button");

////Hidden word

function createHiddenWd() {
  let letterHiddenWord = guessWord.toString().split("");
  console.log(letterHiddenWord);
  letterHiddenWord.forEach(function (el) {
    let divSpanLetter = document.createElement("div");
    let spanLetter = document.createElement("span");
    console.log(spanLetter);
    divSpanLetter.style.borderBottom = "thick solid #000000";
    spanLetter.innerText = el;
    spanLetter.classList.add("ltr", el);
    divSpanLetter.appendChild(spanLetter);
    wordDiv.appendChild(divSpanLetter);
  });
}

createHiddenWd(guessWord);

//guessWord to letters

//Buttons onclick event
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("active");
    checkIfContains(btn.innerText);
    console.log("hey", btn.innerText);
  });
});

let rightAnswersArr = [];
let wrongAnswersArr = [];

function checkIfContains(letter) {
  let letterFound;

  guessWord.split("").forEach((elem) => {
    console.log(elem, letter);
    if (elem == letter) {
      //  console.log(document.getElementsByClassName(letter));
      let nodeEl = document.getElementsByClassName(letter);
      [...nodeEl].forEach((l) => {
        l.classList.remove("ltr");
        // correctSound.play();
      });
      letterFound = true;
      rightAnswersArr.push(elem);
    }
  });
  if (!letterFound) {
    wrongAnswersArr.push(letter);
    // correctSound.play();
  }

  lives = wrongAnswersArr.length;
  if (wrongAnswersArr.length >= 7) {
    updateDisplayLose();
    console.log("Gameover");
  }
  if (rightAnswersArr.length == guessWordLength) {
    updateDisplayWin();
    console.log("You WIN!");
  }
  console.log(wrongAnswersArr, rightAnswersArr);
}

function updateDisplayLose() {
  let gameover = "Gameover";
  document.getElementsByClassName("hiddenWord")[0].innerText = gameover;
}

function updateDisplayWin() {
  let youWin = "You win!";
  document.getElementsByClassName("hiddenWord")[0].innerText = youWin;
}
