const {evenOrNot} = require("./index");
test("if number is even", ()=>{ expect(evenOrNot(-4)).toBeTruthy() });
test("if number is odd", ()=>{ expect(evenOrNot(-3)).toBeFalsy() });