"use strict"

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

//selectors for pop up on graph
const graphPopUp = document.querySelector(".graph-pop-up")
const graphFood = document.querySelector(".graph-food");
const graphEntertainment = document.querySelector(".graph-entertainment");
const graphClothing = document.querySelector(".graph-clothing");
const graphBills = document.querySelector(".graph-bills");
const graphInputItem = document.querySelector("#item");
const graphInputPrice = document.querySelector("#spentValue");

// selectors for graph bars
const foodBar = document.querySelector(".food-bar");
const entertainmentBar = document.querySelector(".entertain-bar");
const clothingBar = document.querySelector(".clothing-bar");
const billsBar = document.querySelector(".bills-bar");
let totalBar = document.querySelector(".total-bar");
const allTheBars = document.querySelector(".bars")


//selectors for math
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

  // initial pop up when you first get on website

  initialMoneyValue = initialMoney.value;
  const nameValue = name.value;
  startingInfoForm.style.display = "none";
  main.style.display = "flex";
  headerTotal.textContent = `total: $` + initialMoneyValue;



  condescendingMessagefunction();
})

buttonBox.addEventListener ("click", (e) => {

  //pop up for expenses form

    main.style.display = "none";
    resetButton.style.display = "none";
    popUp.style.display = "flex";
    
  // keeps track of which button we pressed: entertainment, food, bills, or clothing

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

  // display's
  if (e.target.classList.contains("graph-X-button")) {
    popUp.style.display = "none";
  }
  main.style.display = "flex";
  popUpBox.style.display = "none";
  popUp.style.display = "none";
  resetButton.style.display = "block";
  
  // functionality for header totals
  runningTotal = initialMoneyValue -= +moneySpent.value;
  totalSpent += +moneySpent.value;
  spentValue.textContent = `spent: $${totalSpent}`;
  headerTotal.textContent = `total: $${runningTotal}`;

  // graph functionality for spent bar

  if(category === "food") {
    // graph functionality for spent bar
    food += +moneySpent.value;
    let foodPercent = food / +initialMoney.value * 100;
    foodBar.style.height  = `${foodPercent * 3}px`
    foodBar.style.backgroundColor = "yellow";
    foodBar.style.border = "yellow";
    
    //functionality for itemized list
    const newLi = document.createElement("li");
    newLi.setAttribute("class", "food-li");
    newLi.innerText = `item: ${graphInputItem.value} | price: $${graphInputPrice.value}`;
    graphFood.append(newLi);

  } else if (category === "entertainment") {
    // graph functionality for spent bar
    entertainment += +moneySpent.value;
    let entertainPercent = entertainment / +initialMoney.value * 100;
    entertainmentBar.style.height = `${entertainPercent * 3}px`;
    entertainmentBar.style.backgroundColor = "green";
    entertainmentBar.style.border = "green";

    //functionality for itemized list
    const newLi = document.createElement("li");
    newLi.setAttribute("class", "entertainment-li");
    newLi.innerText = `item: ${graphInputItem.value} | price: $${graphInputPrice.value}`;
    graphEntertainment.append(newLi);

  } else if (category === "clothing") {
    // graph functionality for spent bar
    clothing += +moneySpent.value;
    let clothingPercent = clothing / +initialMoney.value * 100;
    clothingBar.style.height = `${clothingPercent * 3}px`;
    clothingBar.style.backgroundColor = "red";
    clothingBar.style.border = "red";

    //functionality for itemized list
    const newLi = document.createElement("li");
    newLi.setAttribute("class", "clothing-li");
    newLi.innerText = `item: ${graphInputItem.value} | price: $${graphInputPrice.value}`;
    graphClothing.append(newLi);

  } else if (category === "bills") {
    // graph functionality for spent bar
    bills += +moneySpent.value;
    let billsPercent = bills / +initialMoney.value * 100;
    billsBar.style.height = `${billsPercent * 3}px`;
    billsBar.style.backgroundColor = "blue";
    billsBar.style.border = "blue";
    
    //functionality for itemized list
    const newLi = document.createElement("li");
    newLi.setAttribute("class", "bills-li");
    newLi.innerText = `item: ${graphInputItem.value} | price: $${graphInputPrice.value}`;
    graphBills.append(newLi);

  }

  //graph functionality for total bar
  totalBar.style.height = `${(runningTotal /10) * 4}px`;
  totalBar.style.backgroundColor = "grey";
  totalBar.style.border = "gray";

  condescendingMessagefunction();
})

allTheBars.addEventListener("click", (e) => {
   if (e.target.classList.contains("total-bar")) {
    graphPopUp.style.display = "block";
  }
})

graphPopUp.addEventListener("click", (e) => {
  if (e.target.classList.contains("graph-X-button")) {
    graphPopUp.style.display = "none";
  }
})







