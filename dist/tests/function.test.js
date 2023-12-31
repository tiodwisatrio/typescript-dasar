"use strict";
describe('Function', () => {
    it("Should be support in typescript", () => {
        // Function biasa
        function sayHello(name) {
            return `Hello ${name}`;
        }
        expect(sayHello("Joko")).toBe("Hello Joko");
        function printHello(name) {
            console.info(`Hello ${name}`);
        }
        printHello("Mark");
        expect(printHello("Mark")).toBeUndefined();
    });
    // Function with default value parameter
    it("Should support default value", () => {
        function sayHello(name = "Guest") {
            return `Hello ${name}`;
        }
        expect(sayHello("Joko")).toBe("Hello Joko");
        expect(sayHello()).toBe("Hello Guest");
    });
    // Function with rest parameter
    it("Should support rest parameter", () => {
        function sumAllNumber(...values) {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }
        expect(sumAllNumber(1, 2, 3, 4, 5)).toBe(15);
    });
    // Function with optional parameter
    it("Should support optional parameter", () => {
        const getFullName = (firstName, lastName) => {
            if (lastName) {
                return `Hello ${firstName} ${lastName}`;
            }
            else {
                return `Hello ${firstName}`;
            }
        };
        expect(getFullName("Tio")).toBe("Hello Tio");
        expect(getFullName("Tio", "Dwi")).toBe("Hello Tio Dwi");
    });
    // Function Overloading
    it("Should support function overloading", () => {
        function callMe(value) {
            if (typeof value === "number") {
                return value + 2;
            }
            else if (typeof value === "string") {
                return value.toUpperCase();
            }
        }
        expect(callMe(10)).toBe(12);
        expect(callMe("Tio")).toBe("TIO");
    });
    // Function sebagai parameter
    it("Should support function as parameter", () => {
        function sayHello(name, filter) {
            return `Hello ${filter(name)}`;
        }
        function toUpper(name) {
            return name.toUpperCase();
        }
        expect(sayHello("tio", toUpper)).toBe("Hello TIO");
        expect(sayHello("tio", (name) => name.toUpperCase())).toBe("Hello TIO");
    });
});
