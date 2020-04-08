//Game area. Alphabet btns

let alphabetDiv = document.querySelector(".alphabet");
let wordDiv = document.querySelector(".hiddenWord");
let guessWord = "JAVASCRIPT";
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

let letter = "";

function createBtn(letter) {
  let btn = document.createElement("button");
  btn.innerText = letter;
  alphabetDiv.appendChild(btn);
}

alphaArr.forEach((letter) => {
  createBtn(letter);
});
console.log(alphabetDiv);

let btns = alphabetDiv.querySelectorAll("button");
console.log(btns);

////Hidden word

function createHiddenWd() {
  let letterHiddenWord = guessWord.toString().split("");
  console.log(letterHiddenWord);
  letterHiddenWord.forEach(function (el) {
    let spanLetter = document.createElement("span");
    spanLetter.innerText = el;
    spanLetter.classList.add("ltr");
    spanLetter.setAttribute("id", el);
    wordDiv.appendChild(spanLetter);
    //return `<span class="ltr">${el}</span>`;
    // return `<span class="letter ${el}">${el}</span>`;
  });
  //let str = spanArr.join("");
  //document.querySelector(".hiddenWord").innerHTML = str;
  //console.log(str);
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

let guess;

function checkIfContains(letter) {
  guessWord.split("").forEach((elem) => {
    if (elem == letter) {
      document.getElementById(letter).classList.remove("ltr");
      console.log(elem, letter);
      guess = true;
      console.log(elem, guess, "guess");
      lives;
    } else {
      guess = false;
      console.log(elem, guess, "guess");
      lives--;
    }
  });
  //   for (let i = 0; i < guessWord.length; i++) {
  //     if (guessWord[i] == letter) {
  //         let spanLetter = document.getElementById(letter);
  //         console.log(spanLetter)
  //         spanLetter.classList.remove("ltr");
  //       guess = true;
  //       console.log(guessWord[i], guess, "guess");
  //       lives;
  //     } else guess = false;
  //     console.log(guessWord[i], guess, "guess");
  //     lives--;
  //   }
}

///Onclick change color

// document.getElementById("button").addEventListener("click", function(el){
//   if (count == 0) {
//     el.style.color = "#ff0000";
//     count = 1;
//   } else {
//     el.style.color = "#7FFF00";
//     count = 0;
//   })
