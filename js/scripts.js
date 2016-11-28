var pingPong = function (number) {
  if (number % 15 === 0) {
   return "ping - pong";
  }
  else if (number % 5 === 0) {
    return "pong";
  }
  else if (number % 3 === 0) {
    return "ping";
  }
  else {
    return number;
  }
}

$(document).ready(function() {
  $("form#wantToPing").submit(function(event) {
    var number = $("input#number").val();
    $("#results").empty();
    if (number <= 0){
  alert("Please enter a number greater than or equal to 1!");
}
  for (var i = 1; i <= number; i +=1) {
    var result = pingPong (i);
      $("<li>" + result + "</li>").appendTo($("#results"));
  }
    event.preventDefault();
  });
});
