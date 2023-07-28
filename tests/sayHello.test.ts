import { sayHello } from "../src/sayHello";

describe("sayHello", () => {
    it("Should say Hello", () => {
        const name = "Tio";
        expect(sayHello(name)).toBe("Hello Tio");
    })
}
)