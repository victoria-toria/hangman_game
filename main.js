//Game area. Alphabet btns

let alphabetDiv = document.querySelector(".alphabet");
let wordDiv = document.querySelector(".hiddenWord");
let guessWord = "JAVASCRIPT";
let guessWordLength = guessWord.length;
console.log(guessWordLength);
let lives;

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
lives = wrongAnswersArr.length;

function checkIfContains(letter) {
  let letterFound;
  guessWord.split("").forEach((elem) => {
    console.log(elem, letter);
    if (elem == letter) {
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
    lives += 1;
    document.querySelector(".livesLeft > p").innerText = `${lives} left`;

    // correctSound.play();
  }
  if (wrongAnswersArr.length == 1) {
    document.getElementsByClassName("hangman")[1].src = "/images/02.png";
  }
  if (wrongAnswersArr.length >= 7) {
    updateDisplayLose();
  }
  if (rightAnswersArr.length == guessWordLength) {
    updateDisplayWin();
  }
}

function updateDisplayLose() {
  let gameover = "Gameover";
  document.getElementsByClassName("hiddenWord")[0].innerText = gameover;
  document.getElementsByClassName("alphabet")[0].innerHTML =
    "<img src='/images/hangman.jpg'/>";
  document.querySelector(".livesLeft > p").innerText = "";
}

function updateDisplayWin() {
  let youWin = "You win!";
  document.getElementsByClassName("hiddenWord")[0].innerText = youWin;
}

function updateDisplayLives() {
  let livesTotal = "Lives left";
  document.getElementsByClassName("livesLeft")[0].innerText = livesTotal;
}

///Images

// for (let i=0; i<imgArray.length;i++){
// document.getElementsByClassName("hangman").scr = imgArray.scr;
//}

// let imgArray = new Array();
// imgArray = imgArray[0] = new Image();
// imgArray[0].scr = "/images/01.png";

// imgArray[1] = new Image();
// imgArray[1].src = "/images/02.png";

// imgArray[2] = new Image();
// imgArray[2].src = "/images/03.png";

// imgArray[3] = new Image();
// imgArray[3].src = "/images/04.png";

// imgArray[4] = new Image();
// imgArray[4].src = "/images/05.png";

// imgArray[5] = new Image();
// imgArray[5].src = "/images/06.png";

// imgArray[6] = new Image();
// imgArray[6].src = "/images/07.png";

// imgArray[7] = new Image();
// imgArray[7].src = "/images/08.png";
