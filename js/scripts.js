var pingPong = function (number) {
  if (number % 3 === 0) {
   return "ping";
  }
  else if (number % 5 === 0) {
    return "pong";
  }
  else if (number % 15 === 0) {
    return "pingpong";
  }
  else {
    return number;
  }
}
