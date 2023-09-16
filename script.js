const button = document.querySelectorAll(".btn");
const header = document.querySelector("header");
const clear = document.querySelector(".item1");
const divide = document.querySelector(".divide");
const equal = document.querySelector(".equals");
const multiply = document.querySelector(".multiply");
const add = document.querySelector(".plus");
const minus = document.querySelector(".minus");

let str = "";
let num1 = 0;
let count = 0;
let num2 = 0;
division = false;
multiplication = false;
addition = false;
subtraction = false;
clickSubtract = false;
clickDivide = false;
clickPlus = false;
clickMinius = false;
clickMultiply = false;
function cleared() {
  header.innerText = "0";
  str = "";
  division = false;
  multiplication = false;
  addition = false;
  subtraction = false;
  clickSubtract = false;
  clickDivide = false;
  clickPlus = false;
  clickMinius = false;
  clickMultiply = false;
}

Array.from(button).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (count == 1) {
      str = str + e.target.innerText;
      header.textContent = str;
      num2 = parseInt(str);
    } else {
      cleared();
      str = str + e.target.innerText;
      header.textContent = str;
    }
  });
});

clear.addEventListener("click", () => {
  cleared();
});
function change(){
    num1 = parseInt(str);
    str = "";
    count = 1;
}

divide.addEventListener("click", () => {
  if (!clickDivide) {
   change();
    clickDivide = true;
    division=true;
  }
});
multiply.addEventListener("click", () => {
  if (!clickMultiply) {
    change();
    clickMultiply = true;
    multiplication=true;
  }
});
add.addEventListener("click", () => {
  if (!clickPlus) {
    change();
    clickPlus = true;
    addition=true;
  }
});
minus.addEventListener("click", () => {
  if (!clickSubtract) {
     change();
    clickSubtract = true;
    subtraction=true;
  }
});

equal.addEventListener("click", (e) => {
  if (division) {
    header.textContent = num1 / num2;
  } else if (multiplication) {
    header.textContent = num1 * num2;
  } else if (addition) {
    header.textContent = num1 + num2;
  } else if (subtraction) {
    header.textContent = num1 - num2;
  }
});
