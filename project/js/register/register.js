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

$("#resources-select").mousedown(function(e){
    e.preventDefault();

    var select = this;
    var scroll = select.scrollTop;

    e.target.selected = !e.target.selected;

    setTimeout(() => select.scrollTop = scroll, 0);
    $(select).focus();
}).mousemove(e => e.preventDefault());

$.ajax({
    url: "../../project/php/getResources.php",
    context: document.body,
    success: function(response) {
        var select = document.getElementById("resources-select");
        let resources = JSON.parse(response);
        select.setAttribute("size", resources.length)
        for (let i = 0; i < resources.length; i++) {
            const option = new Option();
            option.innerHTML = resources[i]["iconCode"] + " " + resources[i]["resourceName"];
            option.setAttribute("value", resources[i]["resourceName"]);
            select.options[select.options.length] = option;
        }
    }
});

function registerRoom() {
    const buildingName = select.options[select.selectedIndex].value;
    console.log(buildingName);
}
