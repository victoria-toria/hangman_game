//Game area. Alphabet btns

let alphabetDiv = document.querySelector(".alphabet");
let wordDiv = document.querySelector(".hiddenWord");
let guessWord = "JAVASCRIPT";
let guessWordLength = guessWord.length;
document.getElementsByClassName("gameArea")[0].style.display = "none";
let lifes;
document.getElementsByClassName("hangman")[1].src = "./images/01.png";

document.getElementsByClassName("playBtn")[0].onclick = function () {
  document.getElementsByClassName("FPDesign")[0].style.display = "none";
  document.getElementsByClassName("gameArea")[0].style.display = "flex";
  buttonSound.play();
};

//

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

let correctSound = document.createElement("audio");
correctSound.setAttribute("src", "./sounds/Spring-Boing.mp3");

let buttonSound = document.createElement("audio");
buttonSound.setAttribute("src", "./sounds/Meowing-cat-sound.mp3");

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
lifes = wrongAnswersArr.length;

function checkIfContains(letter) {
  let letterFound;
  guessWord.split("").forEach((elem) => {
    console.log(elem, letter);
    if (elem == letter) {
      let nodeEl = document.getElementsByClassName(letter);
      [...nodeEl].forEach((l) => {
        l.classList.remove("ltr");
        correctSound.play();
      });
      letterFound = true;
      rightAnswersArr.push(elem);
    }
  });
  if (!letterFound) {
    wrongAnswersArr.push(letter);
    lifes += 1;
    document.querySelector(
      ".lifesLeft > p"
    ).innerText = `${lifes} attemt out of 7`;

    correctSound.play();
  }
  if (wrongAnswersArr.length == 1) {
    document.getElementsByClassName("hangman")[1].src = "./images/02.png";
  }
  if (wrongAnswersArr.length == 2) {
    document.getElementsByClassName("hangman")[1].src = "./images/03.png";
  }
  if (wrongAnswersArr.length == 3) {
    document.getElementsByClassName("hangman")[1].src = "./images/04.png";
  }
  if (wrongAnswersArr.length == 4) {
    document.getElementsByClassName("hangman")[1].src = "./images/05.png";
  }
  if (wrongAnswersArr.length == 5) {
    document.getElementsByClassName("hangman")[1].src = "./images/06.png";
  }

  if (wrongAnswersArr.length == 6) {
    document.getElementsByClassName("hangman")[1].src = "./images/07.png";
  }

  if (wrongAnswersArr.length >= 7) {
    document.getElementsByClassName("hangman")[1].src = "./images/08.png";
    updateDisplayLose();
  }
  if (rightAnswersArr.length == guessWordLength) {
    updateDisplayWin();
  }
}

function updateDisplayLose() {
  document.getElementsByClassName("hiddenWord")[0].innerText = "";
  document.getElementsByClassName("alphabet")[0].innerHTML =
    "<img src='./images/youlose.jpg'/>";
  document.querySelector(".lifesLeft > p").innerText = "";

  let btn = document.createElement("BUTTON");
  btn.innerHTML = "Play Again!";
  document.getElementsByClassName("gameField")[0].appendChild(btn);
  btn.style.marginBottom = "100px";
  btn.style.padding = "12px 28px";
  btn.onclick = function () {
    window.location.reload();
  };
}

function updateDisplayWin() {
  document.getElementsByClassName("hiddenWord")[0].innerText = "";
  document.getElementsByClassName("alphabet")[0].innerHTML =
    "<img src='./images/youwon.jpg'/>";
  document.querySelector(".lifesLeft > p").innerText = "";
  let btn = document.createElement("BUTTON");
  btn.innerHTML = "Play Again!";
  document.getElementsByClassName("gameField")[0].appendChild(btn);
  btn.style.marginBottom = "100px";
  btn.style.padding = "12px 28px";
  btn.onclick = function () {
    window.location.reload();
  };
}

function updateDisplayLives() {
  let lifesTotal = "Lifes left";
  document.getElementsByClassName("lifesLeft")[0].innerText = lifesTotal;
}
