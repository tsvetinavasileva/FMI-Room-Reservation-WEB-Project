$.ajax({
    url: "../../project/php/getBuildings.php",
    context: document.body,
    success: function(response) {
        var select = document.getElementById("building-select");
        let buildingsNames = JSON.parse(response);
        for (let i = 0; i < buildingsNames.length; i++) {
            select.options[select.options.length] = new Option(buildingsNames[i]);
        }
    }
});

$("#features-select").mousedown(function(e){
    e.preventDefault();

    var select = this;
    var scroll = select.scrollTop;

    e.target.selected = !e.target.selected;

    setTimeout(() => select.scrollTop = scroll, 0);
    $(select).focus();
}).mousemove(e => e.preventDefault());

$.ajax({
    url: "../../project/php/getFeatures.php",
    context: document.body,
    success: function(response) {
        var select = document.getElementById("features-select");
        let features = JSON.parse(response);
        select.setAttribute("size", features.length)
        for (let i = 0; i < features.length; i++) {
            var option = new Option();
            option.innerHTML = features[i]["iconCode"] + " " + features[i]["featureName"];
            option.setAttribute("value", features[i]["featureName"]);
            select.options[select.options.length] = option;
        }
    }
});

function registerRoom() {
    const buildingName = select.options[select.selectedIndex].value;
    console.log(buildingName);
}
