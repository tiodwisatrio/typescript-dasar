import { Employee, Manager } from "../src/employee";

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


    // Extending Interface
    it("Should be support extending interface", () => {
        const employee: Employee = {
            id: "EM01",
            name: "Wowo",
            division: "IT",
        }

        console.info(employee);

        const manager: Manager = {
            id: "M01",
            name: "Joni",
            division: "Marketing",
            numberOfEmployees: 10,
        }

        console.info(manager);

    })


    // Function Interface
    it("Should be support function interface", () => {
        interface Person {
            name: string;
            age: number;
            sayHello(name: string): string;
        }

        const person: Person = {
            name: "Mark",
            age: 20,
            sayHello: function (name: string): string {
                return `Hello ${name}, my name is ${this.name}`;
            }
        }

        console.info(person.sayHello("Elon"));
    })
 })