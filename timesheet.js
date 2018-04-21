$(document).ready(function () {
 
  var config = {
    apiKey: "AIzaSyBxrYsqfT2iSjKjuWWL_KdetZ73B_jG6Bw",
    authDomain: "employeetimesheet-802da.firebaseapp.com",
    databaseURL: "https://employeetimesheet-802da.firebaseio.com",
    projectId: "employeetimesheet-802da",
    storageBucket: "employeetimesheet-802da.appspot.com",
    messagingSenderId: "840254052705"
  };
  firebase.initializeApp(config);


1 Comment


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