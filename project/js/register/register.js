const ROOT_DIR = "FMI-Room-Reservation-WEB-Project/project";

$.ajax({
    url: "php/getBuildings.php",
    context: document.body,
    success: function (response) {
        var buildingsSelect = document.getElementById("buildingNames");
        let buildingsNames = JSON.parse(response);
        for (let i = 0; i < buildingsNames.length; i++) {
            buildingsSelect.options[buildingsSelect.options.length] = new Option(buildingsNames[i]);
        }
    }
});

$("#features").mousedown(function (e) {
    e.preventDefault();

    var select = this;
    var scroll = select.scrollTop;

    e.target.selected = !e.target.selected;

    setTimeout(() => select.scrollTop = scroll, 0);
    $(select).focus();
}).mousemove(e => e.preventDefault());


$.ajax({
    url: "php/getFeatures.php",
    context: document.body,
    success: function (response) {
        var featuresSelect = document.getElementById("features");
        let features = JSON.parse(response);
        featuresSelect.setAttribute("size", features.length)
        for (let i = 0; i < features.length; i++) {
            var option = new Option();
            option.innerHTML = features[i]["iconCode"] + " " + features[i]["featureName"];
            option.setAttribute("value", features[i]["featureName"]);
            featuresSelect.options[featuresSelect.options.length] = option;
        }
    }
});

function registerRoom() {

    const buildingNamesSelect = document.getElementById("buildingNames");
    const buildingName = buildingNamesSelect.options[buildingNamesSelect.selectedIndex].value;
    const roomNumber = document.getElementById("roomNumber").value;
    const features = $('#features').val();
    const responsiblePerson = document.getElementById("responsiblePerson").value;

    $.ajax({
        url: "php/registerRoom.php",
        context: document.body,
        type: "post",
        data: JSON.stringify({
            buildingName: buildingName,
            roomNumber: roomNumber,
            features: features,
            responsiblePerson: responsiblePerson
        }),
        contentType:
            "application/json",
        success:
            function () {
                alert("Успешно добавена стая!");
            }
    });
}
