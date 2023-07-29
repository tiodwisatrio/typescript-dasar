import { CustomerType } from "../src/enum";
describe("Enum", () => {
    it("Should be support in typescript", () => {
        const customer = {
            id: "1",
            name: "Tio",
            type: CustomerType.REGULAR
        };
        console.info(customer);
    });
});
