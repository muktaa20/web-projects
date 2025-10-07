const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const result = document.getElementById("result");
const operatorDisplay = document.getElementById("operator");
const numButtons = document.querySelectorAll(".num");
const opButtons = document.querySelectorAll(".operator");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");

let currentOperator = "";
let isSecondInput = false;

//for Numbers
function handleNumber(num) {
  const activeInput = isSecondInput ? input2 : input1;
  activeInput.value += num;
}

//for operator
function handleOperator(operator) {
  if (!input1.value) return;

  currentOperator = operator;
  operatorDisplay.textContent = operator;
  isSecondInput = true;
}

//for calculate
function calculate() {
  const a = parseFloat(input1.value); // it will convert the input value into number
  const b = parseFloat(input2.value);

  let output;
  if (currentOperator === "+") {
    output = a + b;
  } else if (currentOperator === "-") {
    output = a - b;
  } else if (currentOperator === "×") {
    output = a * b;
  } else if (currentOperator === "÷") {
    output = b !== 0 ? a / b : "∞";
  } else {
    output = "error";
  }
  result.value = output;
}

const reset = () => {
  [input1, input2, result].forEach((el) => (el.value = ""));
  operatorDisplay.textContent = "";
  currentOperator = "";
  isSecondInput = false;
};

numButtons.forEach((btn) =>
  btn.addEventListener("click", () => handleNumber(btn.innerText))
);
opButtons.forEach((btn) =>
  btn.addEventListener("click", () => handleOperator(btn.innerText))
);
equal.addEventListener("click", calculate);
clear.addEventListener("click", reset);
