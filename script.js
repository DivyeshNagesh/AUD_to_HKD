function convert() {
    // Get the input value
    var amount = document.getElementById("amount").value;
  
    // Perform the conversion
    var rate = 5.50; // Use the current exchange rate between AUD and HKD
    var result = amount * rate;
  
    // Display the result
    document.getElementById("result").innerHTML = "Converted amount in HKD: " + result.toFixed(2);
  }
  