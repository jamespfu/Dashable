$(document).ready(function() {
    $(".brand").hide();
    $(".brand").fadeIn(700, "swing")
    $("#searchbar").hide();
    $("#searchbutton").hide();
});
function searchshow() {
    $("#searchbar").toggle(500, "swing");
    $("#searchbutton").toggle(500, "swing");
}