let display = document.getElementById("display");

function calc(event) {
  let value = event.target.value;
  let lastChar = display.value.slice(-1);

  // Check if the last character is an operator
  if (
    ["+", "-", "*", "/",".","%"].includes(lastChar) &&
    ["+", "-", "*", "/",".","%"].includes(value)
  ) {
    display.value = display.value.slice(0, -1) + value; // Replace the last operator
  } else {
    display.value += value; // Append the new character
  }
}

function my_evaluate() {
  try {
    let expression = display.value.replace(/%/g, "/100");
    display.value = eval(expression);
  } catch (error) {
    display.value = "Error";
  }
}

function del() {
  display.value = display.value.slice(0, -1);
}

function allclear() {
  display.value = "";
}
