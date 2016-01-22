describe ('pingPong', function() {
  it ("will list a numbers from 1 to userInput", function () {
    expect(pingPong(1)).to.eql([1, 2]);
});
 it ("will say 'ping' if the number is divisible by 3", function () {
   expect(pingPong(3)).to.eql([1, 2, "ping"]);
});
  it ("will say 'pong' if the number is divisible by 5", function () {
    expect(pingPong)(5).to.eql([1, 2, 3, 4, "pong"]);
});
  it ("will say 'pingpong' if the number is divisible by 3 and 5", function () {
    expect(pingPong)(15).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, "pingpong"])
}); 
});













//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// describe ('pingPong', function(){
//   it ("returns a range of numbers from 1 to the number chosen", function (){
//     expect(pingPong(2)).to.eql([1, 2]);
//   });
//
//   it ("returns 'pingpong' if the entered number is divisable by both three and 5", function (){
//     expect(pingPong(15)).to.eql([1, 2, "ping", 4, "pong", 6, 7, 8, "ping", "pong", 11, "ping", 13, 14, "pingpong"]);
//   });
//
//   it ("returns 'ping' if the entered number is divisable by 3", function (){
//     expect(pingPong(3)).to.eql([1, 2, "ping"]);
//   });
//
//   it ("returns 'pong' if the entered number is divisable by 5", function (){
//     expect(pingPong(5)).to.eql([1, 2, "ping", 4, "pong"]);
//   });
// });
//
//
// describe ("pingPong", function () {
//   it("will list out all the numbers between 1 and userInput", function() {
//     expect(pingPong(5)).to.eql([1, 2, 3, 4, 5])
//   })
//
//   it ("will replace any number divisible by 3 with the word 'ping'", function() {
//     expect(pingPong(6)).to.eql([1, 2, "ping", 4, 5, "ping"])
//   });
//
//   it ("will replace any number divisible by 5 with the word 'pong'", function() {
//     expect(pingPong(10)).to.eql([1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong"])
//   });
//
//   it ("will replace any number divisible by 15 with the word 'ping pong'", function() {
//     expect(pingPong(15)).to.eql([1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong", 11, "ping", 13, 14, "ping pong"])
//   });
//
// });
