let field1 = document.getElementById("input1");
let button1 = document.getElementById("button-generate");
let memeText1 = document.getElementById("output-caption");

function onBtnClicked() {
  memeText1.textContent = field1.value;
}
button1.addEventListener("click", onBtnClicked);
