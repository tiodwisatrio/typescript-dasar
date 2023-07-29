import { Category, Product } from "../src/type-alias"

describe("Type Alias", () => {
    it("should be support in typescript", () => {
        const category: Category = {
            id: "T01",
            name: "Smartphone",
        }


        const product: Product = {
            id: "P01",
            name: "Samsung S23 Ultra",
            price: 20000000,
            category: category
        }

        console.info(category);
        console.log(product);
    })
})