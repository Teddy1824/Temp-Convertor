function convertCelsius() {
    var errorString = "try entering just a number...";
    var degFahren = document.getElementById("degFahren").value;
    var degCent = (5 / 9) * (degFahren - 32);
    var resultCelsius =
      degFahren +
      " &deg;F converts to approximately " +
      Math.round(degCent) +
      " &deg;C";
    if (!isNaN(degFahren)) {
      document.getElementById("resultCelsius").innerHTML = resultCelsius;
      return false;
    } else {
      document.getElementById("resultCelsius").innerHTML = errorString;
      return false;
    }
  }
  
  function convertFahrenheit() {
    var errorString = "try entering just a number...";
    var degCelsius = document.getElementById("degCelsius").value;
    var degFahren = (9 / 5) * degCelsius + 32;
    var resultFahren =
      degCelsius +
      " &deg;C converts to approximately " +
      Math.round(degFahren) +
      " &deg;F";
    if (!isNaN(degCelsius)) {
      document.getElementById("resultFahren").innerHTML = resultFahren;
      return false;
    } else {
      document.getElementById("resultFahren").innerHTML = errorString;
      return false;
    }
  }
  
  function clearSum() {
      resultCelsius = "";
      document.getElementById("degFahren").innerText = resultCelsius;
    }