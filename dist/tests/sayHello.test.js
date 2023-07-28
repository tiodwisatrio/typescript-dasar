import { sayHello } from "../dist/sayHello";
describe("Say Hello", function () {
    it("Should say Hello", function () {
        const name = "Hello Tio";
        expect(sayHello(name)).toBe("Hello Tio");
    });
});
