"use strict";
describe("Break and Continue", () => {
    it("Should support break and continue statement", () => {
        let counter = 0;
        do {
            counter++;
            if (counter == 10) {
                break;
            }
            if (counter % 2 == 0) {
                continue;
            }
            console.log(counter);
        } while (true);
    });
});
