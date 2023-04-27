// this is for the graph
// 1.) make "food" variable all preset to 0
// 2.) when money is put into variable turn it into a percent.
// 3.) after its turned into a percent, store that percent in a variable.
// 4.) use percent variable to adjust the height of whichever div.

const foodButton = document.querySelector(".food");
const entertainmentButton = document.querySelector(".entertainment");
const clothingButton = document.querySelector(".clothing");
const billsButton = document.querySelector(".bills");
const buttonBox = document.querySelector(".button-box");
const popUpBox = document.querySelector(".form-box");
const messageBox = document.querySelector(".broke-bitch");
const graph = document.querySelector(".graph");
const submitButton = document.querySelector(".submit-button");
let total = 0;

buttonBox.addEventListener("click", (e) => {
  buttonBox.style.display = "none";
  messageBox.style.display = "none";
  graph.style.display = "none";
  popUpBox.style.display = "flex";
  if (e.target.classList.contains("food")) {
  }
});

submitButton.addEventListener("submit", (e) => {
  e.preventDefault();
  buttonBox.style.display = "flex";
  messageBox.style.display = "block";
  graph.style.display = "flex";
  popUpBox.style.display = "none";

  //Form Submission TODO:
  // this is where the graph altering will being
  // 1. need to add new divs for each category and apply them to the hight of the graph.
  // - 1px per dollar (or % of height?)
  // 2. need to subtract from total graph bar
  // 3. update the running total/spent in header
});

// Outside of submit button TODO:
// start with only one alert asking monthly budget
// that number entered will populate total amounts and main page will load
