var stoppingPoint = prompt("type any positive interger")

for (i = 1; i++; i <= stoppingPoint) {
  if (i % 15 === 0) {
    document.write("pingpong");
  }
  else if (i % 3 === 0) {
    document.write("ping");
  }
  else if (i % 5 === 0) {
    document.write("pong");
  }
  else {
    document.write("i");
  }

})
