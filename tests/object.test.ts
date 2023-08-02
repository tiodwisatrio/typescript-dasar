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

    it("Should return my profile", () => {
        const Profile: {name: string, programmingLanguages: string[], frameworks: string[], dbms: string[], tools: string[]} = {
            name: "Tio Dwi Satrio",
            programmingLanguages: ["Javascript", "Typescript", "Python", "Kotlin"],
            frameworks: ["Next", "React", "Node", "Express", "Flask", "Tailwind", "Bootstrap"],
            dbms: ["MySQL", "PostgreeSQL", "Mongoodb"],
            tools: ["GIT", "Postman", "Jest", "Babel", "Figma"],
        }
        
        console.log(Profile);
    })
})