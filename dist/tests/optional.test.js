"use strict";
describe("Optional Parameter", () => {
    it("Should be support in typescript", () => {
        const sayHello = (name) => {
            if (name) {
                console.info(`Hello ${name}`);
            }
            else {
                console.info("Hello");
            }
        };
        sayHello("Tayo");
        const name = undefined;
        sayHello(name);
        sayHello(null);
    });
});
