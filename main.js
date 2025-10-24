var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]];

planets.forEach(function (addPlanet) {
  let select = document.getElementById("planets");
  let option = document.createElement("option");
  option.text = addPlanet[0];
  option.value = addPlanet[1];
  select.add(option);
});
function addPlanet(element, index) {
  planetsSelect.createElement("elemment", index);
}
function handleClickEvent(e) {
  
  let userWeight = document.getElementById("user-weight").value;
  let planetName = document.getElementById("planets")
  planetName = planetName.options[planetName.selectedIndex].text;
  let result = calculateWeight(userWeight, planetName);
  document.getElementById("output").innerText = `If you were on ${planetName}, you would weigh ${result.toFixed(2)}lbs!`;
}
function isPlutoPlanet() {
    if (document.getElementById("plutoYes").checked && !document.getElementById("plutoNo").checked) {
      let tempSelect = document.getElementById("planets");
      let value = tempSelect.options[0].disabled = false;
      return true;
    }
    else if (!document.getElementById("plutoYes").checked && document.getElementById("plutoNo").checked) {
      document.getElementById("planets").options[0].disabled = true;
      document.getElementById("planets").selectedIndex = 11;
      return false;
    }
    else if (!document.getElementById("plutoNo").checked && !document.getElementById("plutoYes").checked) {
      document.getElementById("output").innerText = "You need to select if you think pluto is a planet!";
      return null;
    }
  }


  
function calculateWeight(weight, planetName) {
  let w = weight;
  let p = document.getElementById("planets").value;
    let result = w * p;
    return result;
  }






