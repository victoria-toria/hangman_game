let alphabetDiv = document.querySelector(".alphabet");
console.log(alphabetDiv);

let alphaArr = ["A", "B", "C"];

function createBtn(letter) {
  let btn = document.createElement("button");
  btn.innerText = letter;
  alphabetDiv.appendChild(btn);
}

alphaArr.forEach((letter) => {
  createBtn(letter);
});
console.log(alphabetDiv);




