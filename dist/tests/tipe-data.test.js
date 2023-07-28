"use strict";
describe("tipe data", () => {
    it("should be string", () => {
        let name = "Tio Dwi Satrio";
        let balance = 1000000;
        let isVip = true;
        console.info(name);
        console.info(balance);
        console.info(isVip);
        // // ERROR
        // name = 100;
        // balance = "1000000";
        // isVip = 1;
    });
});
