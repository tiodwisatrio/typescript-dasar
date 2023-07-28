import { sayHello } from "../src/sayHello";

describe("sayHello", () => {
    it("Should say Hello", () => {
        const name = "Hello Tio";
        expect(sayHello(name)).toBe("Hello Tio");
    })
}
)