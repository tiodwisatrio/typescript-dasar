"use strict";
describe('Union', () => {
    it("Should be support in typescript", () => {
        let sample = "Tio Dwi Satrio";
        console.info(sample);
        sample = 20;
        console.info(sample);
        sample = true;
        console.info(sample);
    });
    it("should support typeof operator", () => {
        function process(value) {
            if (typeof value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value === "number") {
                return value + 2;
            }
            else if (typeof value === "boolean") {
                return !value;
            }
        }
        expect(process("Tio Dwi Satrio")).toBe("TIO DWI SATRIO");
        expect(process(100)).toBe(102);
        expect(process(true)).toBe(false);
    });
});
