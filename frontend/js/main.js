var select = document.getElementById("building-select");
var keys = Object.keys(buildings);
for(let i = 0; i < keys.length; i++) {
    select.options[select.options.length] = new Option(keys[i]);
}

function registerRoom() {
    var buildingName = select.options[select.selectedIndex].value;
    var buildingCoordinates = buildings[buildingName];
    console.log(buildingName);
    console.log(buildingCoordinates);
}


