const ROOT_DIR = "FMI-Room-Reservation-WEB-Project/project";


function getAvailableRooms() {
    const startDateTime = document.getElementById('startDateTime').value;
    const endDateTime = document.getElementById('endDateTime').value;
    const reservedBy = document.getElementById('reservedBy').value;
    const subject = document.getElementById('subject').value;
    $.ajax({
        url: "php/getAvailableRooms.php",
        context: document.body,
        type: "get",
        data: {
            startDateTime: startDateTime,
            endDateTime: endDateTime,
            reservedBy: reservedBy,
            subject: subject
        },
        success: function (response) {
            const availableRoomsDiv = document.getElementById('available-rooms-div');
            availableRoomsDiv.innerHTML = '<select id=\"room-select\"></select>';
            var select = document.getElementById("room-select");
            let places = JSON.parse(response);
            select.setAttribute("size", places.length)
            for (let i = 0; i < places.length; i++) {
                var option = new Option();
                option.innerHTML = places[i]["type"] + " " + places[i]["roomNumber"] + "  " + places[i]["buildingName"];
                option.setAttribute("value", places[i]["roomNumber"]);
                select.options[select.options.length] = option;
            }
        }
    });
}


$("#features-select").mousedown(function (e) {
    e.preventDefault();

    var select = this;
    var scroll = select.scrollTop;

    e.target.selected = !e.target.selected;

    setTimeout(() => select.scrollTop = scroll, 0);
    $(select).focus();
}).mousemove(e => e.preventDefault());

