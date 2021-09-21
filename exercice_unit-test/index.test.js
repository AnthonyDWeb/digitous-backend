const {evenOrNot} = require("./index");
test("if number is even", ()=>{ expect(evenOrNot("-4")).toBeTruthy() });
test("if number is odd", ()=>{ expect(evenOrNot(-3)).toBeFalsy() });

const {formatDate} = require("./index");
test("if date format change is a sucess", ()=>{ expect(formatDate("2021-09-21")).toBe("21/09/2021") });


