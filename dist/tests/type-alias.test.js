describe("Type Alias", () => {
    it("should be support in typescript", () => {
        const category = {
            id: "T01",
            name: "Smartphone",
        };
        const product = {
            id: "P01",
            name: "Samsung S23 Ultra",
            price: 20000000,
            category: category
        };
        console.info(category);
        console.log(product);
    });
});
export {};
