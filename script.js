const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");


let grandTotal = 0;
const grandTotalDisplay = document.getElementById("grandTotalDisplay");


buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      // Backspace functionality
    } else if (display.innerText != "" && item.id == "equal") {
      grandTotal = eval(display.innerText);
      display.innerText = grandTotal;
      updateGrandTotalDisplay(); // Update the grandTotal display
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => {
        display.innerText = "";
      }, 2000);
    } else if (item.id == "allclear") {
      display.innerText = "";
      grandTotal = 0;
      updateGrandTotalDisplay(); // Update the grandTotal display
    } else {
      display.innerText += item.id;
    }
  };
});

// ...

function updateGrandTotalDisplay() {
  grandTotalDisplay.innerText = `Grand Total: ${grandTotal}`;
}

// ...

themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
  grandTotal = 0;
  updateGrandTotalDisplay(); // Update the grandTotal display on theme toggle
};
