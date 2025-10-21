

let weight = 0;
let planets = 0;
let result = 0;

window.onload = function () {
  document.getElementById("PlutoNo").checked = true;
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

document.getElementById("plutoYes").addEventListener("click", function () {
  document.getElementById("plutoPlanet").disabled = false;
});
document.getElementById("plutoNo").addEventListener("click", function () {
  document.getElementById("plutoPlanet").disabled = true;
  document.getElementById("planets").value = "null";
});
  
  function callMath(w, p) {
    if (isPlutoPlanet() == true) {
      document.getElementById("plutoPlanet").disabled = false;
      weight = w;
      planets = p;
      result = weight * planets;
      document.getElementById("result").innerHTML = "Your weight on that planet is: " + result;
      return result;
    }
    else if (isPlutoPlanet() == false) {
      document.getElementById("plutoPlanet").disabled = true;
      weight = w;
      planets = p;
      result = weight * planets;
      document.getElementById("result").innerHTML = "Your weight on that planet is: " + result;
      return result;
    }
    else if (isPlutoPlanet() == null) {
      return 0;
    }
    
    

  }

