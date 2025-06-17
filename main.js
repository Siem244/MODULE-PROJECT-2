document.getElementById("btn").addEventListener("click", calculate);
document.getElementById("lightBtn").addEventListener("click", setLightMode);
document.getElementById("darkBtn").addEventListener("click", setDarkMode);

function calculate() {
  let hourlyPay = +document.getElementById("payH").value;

  if (hourlyPay <= 0 || isNaN(hourlyPay)) {
    alert("Please enter a valid hourly pay.");
    return;
  }

  let hoursPerWeek = 40;
  let weeksPerYear = 52;
  let annualIncome = hourlyPay * hoursPerWeek * weeksPerYear;

  let taxRate;
  if (annualIncome <= 142292) {
    taxRate = 0.25;
  } else if (annualIncome <= 170000) {
    taxRate = 0.30;
  } else {
    taxRate = 0.35;
  }

  let taxAmount = annualIncome * taxRate;
  let netIncome = annualIncome - taxAmount;

  document.getElementById("outputIncome").innerText = annualIncome.toFixed(2);
  document.getElementById("outputTax").innerText = taxAmount.toFixed(2);
  document.getElementById("outputNet").innerText = netIncome.toFixed(2);
}

function setLightMode() {
  document.getElementById("body").className = "light";
}

function setDarkMode() {
  document.getElementById("body").className = "dark";
}
