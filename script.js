"use strict"

// this is for the graph
// 1.) make "food" variable all preset to 0
// 2.) when money is put into variable turn it into a percent.
// 3.) after its turned into a percent, store that percent in a variable.
// 4.) use percent variable to adjust the height of whichever div.


// selectors for html 
const foodButton = document.querySelector(".food");
const entertainmentButton = document.querySelector(".entertainment")
const clothingButton = document.querySelector(".clothing");
const billsButton = document.querySelector(".bills");
const buttonBox= document.querySelector(".button-container");
const popUpBox = document.querySelector(".form-box-1");
const graph = document.querySelector(".graph-container");
const expensesForm = document.querySelector(".form-box-2");
const startingInfoForm = document.querySelector(".start-pop-up");
const popUp = document.querySelector(".pop-up");
const resetButton = document.querySelector(".reset");
const main = document.querySelector("main");
let dynamicMessage = document.querySelector(".dynamic-message");



const moneySpent = document.querySelector("#spentValue");
const spentValue = document.querySelector(".spent");
const headerTotal = document.querySelector(".total")
const name = document.querySelector("#name");
let initialMoney = document.querySelector("#budget");
let totalSpent = 0;
let runningTotal = 0;
let initialMoneyValue = null;

let entertainment = 0;
let food = 0;
let clothes = 0;
let bills = 0;

let category = "";

const condescendingMessagefunction = () => {
  let totalSpentPercent = totalSpent/+initialMoney.value * 100;
  if (totalSpentPercent > 100) {
    dynamicMessage.innerText = "your in debt";
    } else if (totalSpentPercent >= 80) {
    dynamicMessage.innerText = "you still have some money left";
    } else if (totalSpentPercent >= 60) {
    dynamicMessage.innerText = "you spent less than 80% of your money";
    } else if (totalSpentPercent >= 40) {
    dynamicMessage.innerText = "you spent less than 60% of your money";
    } else if (totalSpentPercent >= 20) {
    dynamicMessage.innerText = "you spent less than 40% of your money";
    } else if (totalSpentPercent > 0) {
    dynamicMessage.innerText = "you spent less than 20% of your money";
    } else if (totalSpentPercent < 0) {
    dynamicMessage.innerText = "you made extra money?? would you mind donating?"
    } else {
    dynamicMessage.innerText = ` ${name.value}, you still have some money left`;
    }

}

popUpBox.addEventListener("submit", (e) => {
  e.preventDefault();
  initialMoneyValue = initialMoney.value;
  const nameValue = name.value;
  startingInfoForm.style.display = "none";
  main.style.display = "flex";
  headerTotal.textContent = `total: $` + initialMoneyValue;



  condescendingMessagefunction();
})

buttonBox.addEventListener ("click", (e) => {
    main.style.display = "none";
    resetButton.style.display = "none";
    popUp.style.display = "flex";
    
    if (e.target.classList.contains("food")) {
      category = "food";
      // console.log(getPercentage(food));
    } else if (e.target.classList.contains("entertainment")) {
      category = "entertainment";
    } else if (e.target.classList.contains("clothing")) {
      category = "clothing";
    } else if (e.target.classList.contains("bills")) {
      category = "bills"
    } 
  
  condescendingMessagefunction();
})

expensesForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //console.log("i was not")
  main.style.display = "flex";
  popUpBox.style.display = "none";
  popUp.style.display = "none";
  resetButton.style.display = "block";
  
  runningTotal = initialMoneyValue -= +moneySpent.value;
  totalSpent += +moneySpent.value;
  spentValue.textContent = `spent: $${totalSpent}`;
  headerTotal.textContent = `total: $${runningTotal}`

  //Form Submission TODO:
  // this is where the graph altering will being
  // 1. need to add new divs for each category and apply them to the hight of the graph.
  // - 1px per dollar (or % of height?)
  // 2. need to subtract from total graph bar
  // 3. update the running total/spent in header
  condescendingMessagefunction();
})

// Outside of submit button TODO:
// start with only one alert asking monthly budget
// that number entered will populate total amounts and main page will load

function getPercentage (item) {
  const Percentage = `${((+item / +initialMoneyValue) * 100).toFixed(2)}%`;

  return Percentage;
}





