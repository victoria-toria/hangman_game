//Game area. Alphabet btns and Hidden word

let alphabetDiv = document.querySelector(".alphabet");
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

let hiddenWordDiv = document.querySelector(".hiddenWord");

let word = "javascript";

function createHiddenWd(word) {
  let span = document.createElement("span");

  let letterHiddenWord = word.split("");
  for (let i of letterHiddenWord) {
    span.innerText += i;
  }
  document.querySelector(".hiddenWord").appendChild(span);
}
createHiddenWd(word);
