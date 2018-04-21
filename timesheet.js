$(document).ready(function () {
 
var employeeInfo = [];

 $("body").on("click", function addRow() {
  $("#resultsContainer").empty();
  for (var i = 0; i < employeeInfo.length; i++) {
    var newRow = $("<div>");
    newRow.addClass(results)
    newRow.append(employeeInfo[i]);
    $("#resultsContainer").append(newRow);
  };
});

});