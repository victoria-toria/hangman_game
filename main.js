//Game area. Alphabet btns

let alphabetDiv = document.querySelector(".alphabet");
let wordDiv = document.querySelector(".hiddenWord");
let guessWord = "JAVASCRIPT";
let guessWordLength = guessWord.length;
console.log(guessWordLength);
let lives = 10;

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
    let spanLetter = document.createElement("span");
    console.log(spanLetter);
    spanLetter.innerText = el;
    spanLetter.classList.add("ltr", el);
    wordDiv.appendChild(spanLetter);
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
      });
      letterFound = true;
      rightAnswersArr.push(elem);
    }
  });
  if (!letterFound) {
    wrongAnswersArr.push(letter);
  }

  lives = 7 - wrongAnswersArr.length;
  if (wrongAnswersArr.length >= 7) {
    console.log("Gameover");
  }
  if (rightAnswersArr.length == guessWordLength) {
    console.log("You WIN!");
  }
  console.log(wrongAnswersArr, rightAnswersArr);
}
