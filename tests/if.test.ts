describe("If Statement", () => {
    it("Should be same with javascript", () => {
        const examValue: number = 90;

        if (examValue > 80) {
            console.log("Good Job");
        } else if(examValue > 60) {
            console.log("Not Bad");
        } else {
            console.log("Try Again!");
        }
    })

    it("Should support ternary operator", () => {
        const value = 80;
        const say = value > 70 ? "MANTAPP" : "COBA LAGI";
        
        console.log(say)
        expect(say).toBe("MANTAPP");

    })

})