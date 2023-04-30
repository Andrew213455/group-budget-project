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


const foodBar = document.querySelector(".food-bar");
const entertainmentBar = document.querySelector(".entertain-bar");
const clothingBar = document.querySelector(".clothing-bar");
const billsBar = document.querySelector(".bills-bar");
let totalBar = document.querySelector(".total-bar");



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
let clothing = 0;
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
  headerTotal.textContent = `total: $${runningTotal}`;

  //1 if food button is clicked, it updates category, we create a new div inside of food-bar class.
  //2 set a class for the div
  //3 make the height of the div based on the percentage of money spent on food
  //4 +initialMoney.value / +moneySpent.value
  
  if(category === "food") {
    food += +moneySpent.value;
    let foodPercent = food / +initialMoney.value * 100;
    foodBar.style.height  = `${foodPercent * 3}px`
    foodBar.style.backgroundColor = "yellow";
    foodBar.style.border = "yellow";
    //console.log(foodPercent);
  } else if (category === "entertainment") {
    entertainment += +moneySpent.value;
    let entertainPercent = entertainment / +initialMoney.value * 100;
    entertainmentBar.style.height = `${entertainPercent * 3}px`;
    entertainmentBar.style.backgroundColor = "green";
    entertainmentBar.style.border = "green";
    //console.log(entertainPercent);
  } else if (category === "clothing") {
    clothing += +moneySpent.value;
    let clothingPercent = clothing / +initialMoney.value * 100;
    clothingBar.style.height = `${clothingPercent * 3}px`;
    clothingBar.style.backgroundColor = "red";
    clothingBar.style.border = "red";
    //console.log(clothingPercent);
  } else if (category === "bills") {
    bills += +moneySpent.value;
    let billsPercent = bills / +initialMoney.value * 100;
    billsBar.style.height = `${billsPercent * 3}px`;
    billsBar.style.backgroundColor = "blue";
    billsBar.style.border = "blue";
    //console.log(billsPercent);
    
  }


  totalBar.style.height = `${(runningTotal /10) * 4}px`;
  totalBar.style.backgroundColor = "grey";
  totalBar.style.border = "gray";




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







