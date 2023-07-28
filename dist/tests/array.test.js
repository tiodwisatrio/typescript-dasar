"use strict";
describe("Array", () => {
    it("should same with javascript", () => {
        const names = ["Budi", "Joni", "Joko"];
        const values = [1, 2, 3];
        console.info(names);
        console.info(values);
    });
    it("should support readonly array", () => {
        let hobbies = ["Membaca", "Menulis"];
        console.info(hobbies);
        console.info(hobbies[0]);
        // Error
        // hobbies[0] = "Makan"; 
    });
    it("should support tuple", () => {
        const person = ["Tio", "Satrio", 20];
        console.info(person);
        // Error
        // person[0] = "Joko";
    });
});
