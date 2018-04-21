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


$("#add-employee").on("click", function(event) {
  event.preventDefault();

  // Grabbed values from text boxes
  name = $("#name-input").val().trim();
  role = $("#role-input").val().trim();
  startDate = $("#start-input").val().trim();
  monthlyRate = $("#monthly-input").val().trim();

  // Code for handling the push
  database.ref().push({
    name: name,
    role: role,
    startDate: startDate,
    monthlyRate: monthlyRate,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });

});

});
