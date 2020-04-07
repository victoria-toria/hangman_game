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
  let spanArr = letterHiddenWord.map(function (el) {
    return `<span class="ltr">${el}</span>`;
    // return `<span class="letter ${el}">${el}</span>`;
  });
  let str = spanArr.join("");
  console.log(str);
  document.querySelector(".hiddenWord").innerHTML = str;
}
createHiddenWd(guessWord);

//Buttons onclick event
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("active");
    if (checkIfContains(btn.innerText)) {
    }
    console.log("hey", lives, btn.innerText);
  });
});

let guess;

function checkIfContains(letter) {
  for (let i = 0; i < guessWord.length; i++) {
    if (guessWord[i] == letter) {
      guessWord[i].classList.remove("ltr");
      guess = true;
      console.log(guess, "guess");
      lives;
    } else {
      guess = false;
      lives--;
      //   word(i).style.visibility = "hidden"
    }
  }
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
