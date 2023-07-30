describe('Indexable Interface', () => { 
    it("Should be support indexable interface", () => {
        interface StringArray {
            [index: number]: string;
        }

        const names: StringArray = ["Tio", "Joko", "Tono"];
        console.info(names);
        
        expect(names[0]).toBe("Tio");
        expect(names[1]).toBe("Joko");
        expect(names[2]).toBe("Tono");
    })

    it("Should be support indexable interface for non number index", () => {
        interface StringDictionary {
        [key: string]: string;
        }

        const dictionary: StringDictionary = {
            name: "Yono",
            address: "Jakarta",
        }

        console.info(dictionary);

        expect(dictionary.name).toBe("Yono");
        expect(dictionary.address).toBe("Jakarta");

        expect(dictionary["name"]).toBe("Yono");
        expect(dictionary["address"]).toBe("Jakarta");
    })
 })