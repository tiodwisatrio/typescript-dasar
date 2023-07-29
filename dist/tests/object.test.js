"use strict";
describe("Object Type", () => {
    it("should be support in typescript", () => {
        const person = {
            id: "1",
            name: "Tio"
        };
        console.log(person);
        person.id = "2";
        person.name = "Joko";
        console.log(person);
    });
});
