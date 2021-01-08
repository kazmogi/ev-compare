// GAS STUFF

document.onkeypress = function (e) {
  if (e.keyCode == 13) fn1();
};

function fn1() {
  var distance = document.getElementById("distanceInput").value;
  var mpg = document.getElementById("mpgInput").value;
  var gasPrice = document.getElementById("gasPriceInput").value;

  let gallonsUsed = (distance / mpg).toFixed(1);
  let costOfGasTrip = (gasPrice * gallonsUsed).toFixed(2);

  //electric stuff
  var distance = document.getElementById("distanceInput").value;
  var mpk = document.getElementById("mpkBox").value;
  var elecPrice = document.getElementById("elecPriceBox").value;

  let kwhUsed = (distance / mpk).toFixed(1);
  let costOfETrip = (elecPrice * kwhUsed).toFixed(2);
  //This puts stuff into html
  document.getElementById("gallons").innerHTML = gallonsUsed;
  document.getElementById("cost").innerHTML = `$${costOfGasTrip}`;
  document.getElementById("kwUsed").innerHTML = kwhUsed;
  document.getElementById("costOfElecTrip").innerHTML = `$${costOfETrip}`;
}
