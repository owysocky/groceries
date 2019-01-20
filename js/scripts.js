$(document).ready(function() {



  $("#formOne").submit(function(event){

    var purchases = [];

  var inputs = ["item1","item2","item3","item4"];
  inputs.forEach(function(input){
    var theInput = $("input#"+input).val().toUpperCase();
    purchases.push(theInput);
  });

  purchases.sort();

  $("#toggleForm").toggle();
  $("#receipt").toggle();

  purchases.forEach(function(item){
    $(".add").append("<li>"+item+"</li>")
  });









  event.preventDefault();
  });
});
