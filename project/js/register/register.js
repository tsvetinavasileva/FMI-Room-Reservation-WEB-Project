var select = document.getElementById("building-select");

$.ajax({
    url: "../../project/php/getBuildings.php",
    context: document.body,
    success: function(response) {
        let buildingsNames = JSON.parse(response);
        for (let i = 0; i < buildingsNames.length; i++) {
            select.options[select.options.length] = new Option(buildingsNames[i]);
        }
    }
});

function registerRoom() {
    const buildingName = select.options[select.selectedIndex].value;
    console.log(buildingName);
}
