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

        // hobbies[0] = "Makan"; 
    })
});