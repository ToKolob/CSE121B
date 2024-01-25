/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (num1, num2) {
  return num1 + num2
}
function addNumbers() {
  const num1 = document.getElementById("add1").value
  const num2 = document.getElementById("add2").value
  document.getElementById("sum").value = add(+num1, +num2)
}
document.getElementById("addNumbers").addEventListener("click", addNumbers)

/* Function Expression - Subtract Numbers */
function subtract(num1, num2) {
  return num1 - num2  
}
function subtractNumbers() {
  const num1 = document.getElementById("subtract1").value
  const num2 = document.getElementById("subtract2").value
  document.getElementById("difference").value = subtract(+num1, +num2)
}
document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers)

/* Arrow Function - Multiply Numbers */
const multiply = (num1, num2) => num1 * num2
const multiplyNumbers = () => {
  const num1 = document.getElementById("factor1").value
  const num2 = document.getElementById("factor2").value
  document.getElementById("product").value = multiply(+num1, +num2)
}
document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers)


/* Open Function Use - Divide Numbers */
const divide = (num1, num2) => num1 / num2
const divideNumbers = () => {
  const num1 = document.getElementById("dividend").value
  const num2 = document.getElementById("divisor").value
  document.getElementById("quotient").value = divide(+num1, +num2).toFixed(4)
}
document.getElementById("divideNumbers").addEventListener("click", divideNumbers)


/* Decision Structure */
document.getElementById("getTotal").addEventListener("click", ()=>{
  let subtotal = document.getElementById("subtotal").value
  const member = document.getElementById("member").checked
  if (member) {
    subtotal = subtotal * 0.8
  }
  document.getElementById("total").innerHTML = `$ ${(+subtotal).toFixed(2)}`
})


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let arrayOfNumbers = []
for (let i = 1; i < 14; i++) {
  arrayOfNumbers.push(i)
}
document.querySelector("#array").innerHTML = arrayOfNumbers

/* Output Odds Only Array */
const oddsOnlyArray = arrayOfNumbers.filter(number => number % 2 !== 0);
document.querySelector("#odds").innerHTML = oddsOnlyArray;

/* Output Evens Only Array */
const evensOnlyArray = arrayOfNumbers.filter(number => number % 2 === 0);
document.querySelector("#evens").innerHTML = evensOnlyArray;

/* Output Sum of Org. Array */
const sumArray = arrayOfNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.querySelector("#sumOfArray").innerHTML = sumArray;

/* Output Multiplied by 2 Array */
const multipliedArray = arrayOfNumbers.map(number => number * 2);
document.querySelector("#multiplied").innerHTML = multipliedArray;

/* Output Sum of Multiplied by 2 Array */
const multipliedSumArray = multipliedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.querySelector("#sumOfMultiplied").innerHTML = multipliedSumArray;
