import { Seller } from "../src/seller"

describe('Interface', () => { 
    it("Should be support in typescript", () => {
        const seller: Seller  = {
            id: 1,
            name: "Samsung",
            address: "Korea"
        }

        console.info(seller);
    })
 })