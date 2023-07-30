describe('Interface', () => {
    it("Should be support in typescript", () => {
        const seller = {
            id: 1,
            name: "Samsung",
            address: "Korea",
            email: "tiodwisatrio2@gmail.com",
        };
        console.info(seller);
        // ERROR
        // seller.email = "ttttt@gmail.com"
        // console.info(seller);
    });
});
export {};
