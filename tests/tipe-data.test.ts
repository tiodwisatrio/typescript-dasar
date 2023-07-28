describe("tipe data", () => {
    it("should be string", () => {
        let name: string = "Tio Dwi Satrio";
        let balance: number = 1000000;
        let isVip: boolean = true;

        console.info(name)
        console.info(balance)
        console.info(isVip)

        // // ERROR
        // name = 100;
        // balance = "1000000";
        // isVip = 1;
    })
})