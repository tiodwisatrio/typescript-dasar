export enum CustomerType {
    REGULAR = "REGULAR",
    SILVER = "SILVER",
    GOLD = "GOLD",
}

export type Customer = {
    id: string;
    name: string;
    type: CustomerType;
}