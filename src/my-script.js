let button1 = document.getElementById("button1");
let clickCount = 0;
function onButton1Clicked() {
  //window.open("http://127.0.0.1:5500/public/index.html");
  clickCount += 1;

  if (clickCount == 1) {
    button1.textContent = "you clicked me " + clickCount + " time.";
  } else if (clickCount >= 30) {
    button1.textContent = "you clicked me WAY too many times.";
  } else {
    button1.textContent = "you clicked me " + clickCount + " times.";
  }
}
button1.addEventListener("click", onButton1Clicked);
