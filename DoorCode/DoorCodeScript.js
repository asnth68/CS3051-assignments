let code = "1379*"
let input = "";

function enter(value) {

  input += value;

  for (let i = 0; i < input.length; i++) {
    if (input[i] != code[i]) {
      input = "";
      break;
    }
  }
  safe(input == code)
}

function safe(correctCode) {
  let display = document.querySelector("#safe")
  let words = document.getElementById("message")

  if (correctCode) {
    display.src = "OpenedSafe.jpg";
    words.innerHTML = "You Win!"
  } else {
    display.src = "ClosedSafe.jpg"
    words.innerHTML = ""
  }
}