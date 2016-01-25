describe ('stoppingPoint', function() {
  it ("will list a numbers from 1 to enterNumber", function () {
    expect(stoppingPoint)(2).to.eql([1, 2]);
});
 it ("will say 'ping' if the number is divisible by 3", function () {
   expect(stoppingPoint)(3).to.eql([1, 2, "ping"]);
});
  it ("will say 'pong' if the number is divisible by 5", function () {
    expect(stoppingPoint)(5).to.eql([1, 2, 3, 4, "pong"]);
});
  it ("will say 'pingpong' if the number is divisible by 3 and 5", function () {
    expect(stoppingPoint)(15).to.eql([1, 2, 'ping', 4, 'pong', 'ping', 7, 8, 'ping', 'pong', 11, 'ping', 13, 14, 'pingpong'])
});
});
