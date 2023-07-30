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

})