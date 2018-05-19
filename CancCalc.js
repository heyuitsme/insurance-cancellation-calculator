/* Early Cancellation Calculator for CA-9857 */

function calcDiff() {

  var name = document.getElementById("nameInput").value

  var oneDay = 24*60*60*1000;

  var firstDate = new Date(document.getElementById("startDateInput").value);
  var secondDate = new Date(document.getElementById("endDateInput").value);

  var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));

  var canRates = rates[diffDays];
  var currentPrem = document.getElementById("premiumInput").value;
  var select = document.getElementById("selectInput").value;

  //var toggle = document.getElementById("togBtn");

  function calcMessage(){
    return "Hi " + name + ", your early cancellation fee is";
  }

  function canFeeVal(){
    return "$" + canFee + "*";
  }

  /*function pleaseSelect(){
    return "Please choose either monthly or annual";
  }*/

  if(select == "annual") {
    var canFee = Math.round((currentPrem/12) * canRates);
    document.getElementById("message").innerHTML = calcMessage();
    document.getElementById("messageVal").innerHTML = canFeeVal();
  } else if (select == "monthly" ){
    var canFee = Math.round(currentPrem * canRates);
    document.getElementById("message").innerHTML = calcMessage();
    document.getElementById("messageVal").innerHTML = canFeeVal();
  }

  //document.getElementById("message").innerHTML = calcMessage();

}

// cancellation rates
var rates = [0.08,0.08,0.08,0.09,0.09,0.09,0.09,0.1,0.1,0.1,0.1,0.11,0.11,0.11,0.11,0.12,0.12,0.12,0.12,
0.13,0.13,0.13,0.13,0.14,0.14,0.14,0.15,0.15,0.15,0.15,0.16,0.16,0.16,0.16,0.17,0.17,0.17,0.17,0.18,0.18,0.18,
0.18,0.19,0.19,0.19,0.19,0.2,0.2,0.2,0.21,0.21,0.21,0.21,0.22,0.22,0.22,0.22,0.23,0.23,0.23,0.23,0.24,0.24,0.24,
0.24,0.25,0.25,0.25,0.25,0.26,0.26,0.26,0.26,0.27,0.27,0.27,0.28,0.28,0.28,0.28,0.29,0.29,0.29,0.29,0.3,0.3,0.3,
0.3,0.31,0.31,0.31,0.31,0.32,0.32,0.32,0.32,0.33,0.33,0.33,0.34,0.34,0.34,0.34,0.35,0.35,0.35,0.35,0.36,0.36,
0.36,0.36,0.37,0.37,0.37,0.37,0.38,0.38,0.38,0.38,0.39,0.39,0.39,0.4,0.4,0.4,0.4,0.41,0.41,0.41,0.41,0.42,0.42,
0.42,0.42,0.43,0.43,0.43,0.43,0.44,0.44,0.44,0.44,0.45,0.45,0.45,0.45,0.46,0.46,0.46,0.47,0.47,0.47,0.47,0.48,
0.48,0.48,0.48,0.49,0.49,0.49,0.49,0.5,0.5,0.5,0.5,0.51,0.51,0.51,0.51,0.52,0.52,0.52,0.53,0.53,0.53,0.53,0.54,
0.54,0.54,0.54,0.55,0.55,0.55,0.55,0.56,0.56,0.56,0.56,0.57,0.57,0.57,0.57,0.58,0.58,0.58,0.59,0.59,0.59,0.59,
0.6,0.6,0.6,0.6,0.61,0.61,0.61,0.61,0.62,0.62,0.62,0.62,0.63,0.63,0.63,0.63,0.64,0.64,0.64,0.64,0.65,0.65,0.65,
0.66,0.66,0.66,0.66,0.67,0.67,0.67,0.67,0.68,0.68,0.68,0.68,0.69,0.69,0.69,0.69,0.7,0.7,0.7,0.7,0.71,0.71,0.71,
0.72,0.72,0.72,0.72,0.73,0.73,0.73,0.73,0.74,0.74,0.74,0.74,0.75,0.75,0.75,0.75,0.76,0.76,0.76,0.76,0.77,0.77,
0.77,0.78,0.78,0.78,0.78,0.79,0.79,0.79,0.79,0.8,0.8,0.8,0.8,0.81,0.81,0.81,0.81,0.82,0.82,0.82,0.82,0.83,0.83,
0.83,0.83,0.84,0.84,0.84,0.84,0.85,0.85,0.85,0.86,0.86,0.86,0.86,0.87,0.87,0.87,0.87,0.88,0.88,0.88,0.88,0.89,
0.89,0.89,0.89,0.9,0.9,0.9,0.91,0.91,0.91,0.91,0.92,0.92,0.92,0.92,0.93,0.93,0.93,0.93,0.94,0.94,0.94,0.94,0.95,
0.95,0.95,0.95,0.96,0.96,0.96,0.97,0.97,0.97,0.97,0.98,0.98,0.98,0.98,0.99,0.99,0.99,0.99,1,1,1,1,1,1,1,1,1,1,1,1,1];
