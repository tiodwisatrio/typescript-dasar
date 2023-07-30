describe('Function', () => { 
    it("Should be support in typescript", () => {
        // Function biasa
        function sayHello(name: string): string {
            return `Hello ${name}`;
        }

        expect(sayHello("Joko")).toBe("Hello Joko");


        function printHello(name: string): void {
            console.info(`Hello ${name}`);
        }

        printHello("Mark");
        expect(printHello("Mark")).toBeUndefined();
    })

})