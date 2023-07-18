import { sayHello } from "../src/sayHello";

describe("sayHello", function () {
    it("Should say Hello", function () {
        expect(sayHello("tio")).toBe("Hello tio");
    })
})