describe("Object Type", () => {
    it("should be support in typescript", () => {
        const person: { id: string, name: string } = {
            id: "1",
            name: "Tio"
        };

        console.log(person);

        person.id = "2";
        person.name = "Joko";

        console.log(person);
    })
})