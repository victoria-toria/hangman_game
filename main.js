//Game area. Alphabet btns

let alphabetDiv = document.querySelector(".alphabet");
let btns = document.querySelectorAll("button");
let word = document.querySelector(".hiddenWord");

const allButtons = Array.from(btns);
console.log(allButtons);

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

////Hidden word

function createHiddenWd(word) {
  let letterHiddenWord = word.split("");
  let spanArr = letterHiddenWord.map(function (el) {
    return "<span>" + el + "</span>";
  });
  let str = spanArr.join("");
  console.log(str);
  document.querySelector(".hiddenWord").innerHTML = str;
}
createHiddenWd("javascript");

//Initial value of alphabet and hidden word
let state = {
  btns: false,
  word: false,
};
console.log("hey");
console.log("banana");

//Buttons onclick event
allButtons.forEach((btn) => {
  btn.addEventListener("onclick", () => {
    console.log("hey");
  });
});

function addRemoveActive(button, state) {
  if (state) {
    button.classList.add("active");
  } else {
    button.classList.remove("active");
  }
}

//=> need to get to word(i)
function checkIfContains() {
  for (let i = 0; i < alphabetDiv.length; i++) {
    for (let j = 0; j < word.length; j++) {
      if (i === j) {
        console.log("yep");
        //   word(i).style.visibility = "visible"
      } else {
        console.log("nope");
        //   word(i).style.visibility = "hidden"
      }
    }
  }
}
checkIfContains();

//function render hidden word

// function renderHiddenWord(word) {
//   for (i = 0; i < word.length; i++) {
//     if (true) {
//       word(i).style.visibility = "visible";
//     } else {
//       word(i).style.visibility = "hidden";
//     }
//   }
// }

///Onclick change color

// document.getElementById("button").addEventListener("click", function(el){
//   if (count == 0) {
//     el.style.color = "#ff0000";
//     count = 1;
//   } else {
//     el.style.color = "#7FFF00";
//     count = 0;
//   })
