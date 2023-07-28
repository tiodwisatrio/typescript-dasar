describe("Array", () => {
    it("should same with javascript", () => {
        const names: string[] = ["Budi", "Joni", "Joko"];
        const values: number[] = [1, 2, 3];

        console.info(names);
        console.info(values);
    });

    it("should support readonly array", () => {
        let hobbies: ReadonlyArray<string> = ["Membaca", "Menulis"];
        console.info(hobbies);
        console.info(hobbies[0]);

        // Error
        // hobbies[0] = "Makan"; 
    });

    it("should support tuple", () => {
        const person: readonly [string, string, number] = ["Tio", "Satrio", 20];
        console.info(person);

        // Error
        // person[0] = "Joko";
    });
});