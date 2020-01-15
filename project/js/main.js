var select = document.getElementById("building-select");

$.ajax({
    url: "../project/php/getBuildings.php",
    context: document.body,
    success: function(response) {
        const buildings = JSON.parse(response);
        const buildingNames = buildings.map(function (b) {
            return b.name;
        });

        for (var i = 0; i < buildingNames.length; i++) {
            select.options[select.options.length] = new Option(buildingNames[i]);
        }
    }
});

function registerRoom() {
    const buildingName = select.options[select.selectedIndex].value;
    console.log(buildingName);
}
