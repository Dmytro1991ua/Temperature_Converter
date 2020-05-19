function calculateTemp() {

   //convert from celsius to fahrenheit
   function calcCelFarh(celsius) {
      let fahrenheit = Math.round((celsius * (9 / 5)) + 32);
      return fahrenheit;
   }

   //convert from fahrenheit to celsius
   function calcFarhCel(fahrenheit) {
      let celsius = Math.round((fahrenheit - 32) *  5 / 9);
      return celsius;
   }

   // checks if Celsius or Fahrenheit
   let tempSelected = document.querySelector(".form__diffTemp");
   let valueTemp = tempSelected.options[tempSelected.selectedIndex].value;
   console.log(tempSelected);
  
   // checks the value inside tempreature input
   let numberTemp = document.querySelector(".form__temp").value;
   

   let result;
   if (valueTemp === "celsius") {
      result = calcCelFarh(numberTemp);
       document.querySelector(".form__resultContainer").textContent = `= ${result}  °Fahrenheit`
   } else {
      result = calcFarhCel(numberTemp);
      document.querySelector(".form__resultContainer").textContent = `= ${result}  °Celsius`;
   }
}

function resetValue() {
   let reset = document.querySelector('.reset');
   reset.addEventListener("click", function () {
      document.querySelector(".form__temp").value = "";
      document.querySelector(".form__resultContainer").textContent = "";
   });
}
resetValue();

