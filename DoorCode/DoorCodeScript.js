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
    display.src = "openedSafe.jpg";
    words.innerHTML = "You Win!"
  } else {
    display.src = "closedSafe.jpg"
    words.innerHTML = ""
  }
}