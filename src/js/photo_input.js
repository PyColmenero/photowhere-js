$('#file').change(function () {
    current_path = $(this).val();
    current_path = current_path.split("\\");
    current_path = current_path[current_path.length - 1];

    if ($("#photos").val().length != 0) current_path = "@" + current_path;

    $("#photos").val($("#photos").val() + current_path);
});

var current_path;


$('#types-sl').change(function () {

    current_path = $(this).val();

    if ($("#types").val().length != 0) current_path = "@" + current_path;

    $("#types").val($("#types").val() + current_path);

    inputs.each(function (index, value) {
        if ($(this).val().length == 0) {
            $(this).css("border", "3px solid red");
        } else {
            $(this).css("border", "1px solid grey");
        }
    });
});

var url = $("#url");
var lat = $("#lat");
var lng = $("#lng");

url.keyup(function () {

    var str = url.val();

    if (str.length >= 50) {

        console.log(str.split("/")[6].split(",")[0]);
        console.log(str.split("/")[6].split(",")[1]);

        lat.val(str.split("/")[6].split(",")[0].substring(1));
        lng.val(str.split("/")[6].split(",")[1]);

    }

})