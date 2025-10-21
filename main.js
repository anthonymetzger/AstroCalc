

let weight = 0;
let planets = 0;
let result = 0;

window.onload = function () {
  isPlutoPlanet();
}
function isPlutoPlanet() {
  if (document.getElementById("plutoYes").checked && !document.getElementById("plutoNo").checked) {
    
    return true;
  }
  else if (!document.getElementById("plutoYes").checked && document.getElementById("plutoNo").checked) {
    
    return false;
  }
  else if (!document.getElementById("plutoNo").checked && !document.getElementById("plutoYes").checked) {
    document.getElementById("result").innerHTML = "You need to select if you think pluto is a planet!"; 
    return null;
  }
}
function checkOption() {
  if (document.getElementById("planets").value == "null") {
    document.getElementById("result").innerHTML = "You need to select a planet!";
    return null;
  }
  else {
    return true;
  }
  
}
  document.getElementById("plutoYes").addEventListener("click", function () {
    document.getElementById("plutoPlanet").disabled = false;
    document.getElementById("planets").value = "null";
  });
  document.getElementById("plutoNo").addEventListener("click", function () {
    document.getElementById("plutoPlanet").disabled = true;
    document.getElementById("planets").value = "null";
  });


function callMath(w, p) {
  check = checkOption();
  if (isPlutoPlanet() == true && check != null) {
    document.getElementById("plutoPlanet").disabled = false;
    weight = w;
    planets = p;
    result = weight * planets;
    document.getElementById("result").innerHTML = "Your weight on that planet is: " + result + " lbs.";
    return result;
  }
  else if (isPlutoPlanet() == false && check != null) {
    document.getElementById("plutoPlanet").disabled = true;
    weight = w;
    planets = p;
    result = weight * planets;
    document.getElementById("result").innerHTML = "Your weight on that planet is: " + result + " lbs.";
    return result;
  }

  else if (isPlutoPlanet() == null) {
    return 0;

  }
}

