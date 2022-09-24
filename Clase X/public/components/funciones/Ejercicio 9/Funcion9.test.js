"use strict";
const Fact = require('./Funcion9');
function factorial() {
    var num = 3;
    var i;
    var total = 1;
    for (i = 1; i <= num; i++) {
        total = total * i;
    }
    return total;
}
test('Integers', () => {
    expect(factorial()).toEqual(6);
    console.log(factorial());
});
