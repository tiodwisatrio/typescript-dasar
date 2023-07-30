describe('Indexable Interface', () => {
    it("Should be support indexable interface", () => {
        const names = ["Tio", "Joko", "Tono"];
        console.info(names);
        expect(names[0]).toBe("Tio");
        expect(names[1]).toBe("Joko");
        expect(names[2]).toBe("Tono");
    });
    it("Should be support indexable interface for non number index", () => {
        const dictionary = {
            name: "Yono",
            address: "Jakarta",
        };
        console.info(dictionary);
        expect(dictionary.name).toBe("Yono");
        expect(dictionary.address).toBe("Jakarta");
        expect(dictionary["name"]).toBe("Yono");
        expect(dictionary["address"]).toBe("Jakarta");
    });
    // Extending Interface
    it("Should be support extending interface", () => {
        const employee = {
            id: "EM01",
            name: "Wowo",
            division: "IT",
        };
        console.info(employee);
        const manager = {
            id: "M01",
            name: "Joni",
            division: "Marketing",
            numberOfEmployees: 10,
        };
        console.info(manager);
    });
    // Function Interface
    it("Should be support function interface", () => {
        const person = {
            name: "Mark",
            age: 20,
            sayHello: function (name) {
                return `Hello ${name}, my name is ${this.name}`;
            }
        };
        console.info(person.sayHello("Elon"));
    });
    // Intersection Types => Menggabungkan 2 interface menjadi 1
    it("Should be support intersection types", () => {
        const domain = {
            name: "Tio",
            id: "123",
        };
        console.info(domain);
    });
});
export {};
