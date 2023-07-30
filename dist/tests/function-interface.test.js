"use strict";
describe("Function Interface", () => {
    it("Should be support in typescript", () => {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 2)).toBe(4);
    });
});
