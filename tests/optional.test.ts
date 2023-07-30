describe("Optional Parameter", () => {
    it("Should be support in typescript", () => {
        const sayHello = (name?: string | null) => {
            if (name) {
                console.info(`Hello ${name}`)
            } else {
                console.info("Hello")
            }
        }

        sayHello("Tayo");
        const name: string | undefined = undefined;
        sayHello(name);
        sayHello(null);
        
    })
})