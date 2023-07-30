describe("For Loop", () => {
    it("Should support for loop", () => {
        const names: string[] = ["John", "Jane", "Peter", "Michael", "Smith"]

        // Perulangan For i
        for (let i = 0; i < names.length; i++) {
            console.log(names[i]);
        }

        // Perulangan for of
        for (const name of names) {
            console.log(name);
        }

        // Perulangan for in
        for (const index in names) {
            console.log(names[index]);
        }
    })

    it("Should support while loop", () => {
        let counter: number = 0
        while(counter < 10) {
            console.log(counter);
            counter++
        }
    })
})