describe("Function Interface", () => {
    it("Should be support in typescript", () => {
        interface AddFunction {
            (value1: number, value2: number): number;
        }

        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        }

        expect(add(2, 2)).toBe(4);
    })
})