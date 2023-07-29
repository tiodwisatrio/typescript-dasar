export enum CustomerType {
    REGULAR = 1,
    SILVER = 2,
    GOLD = 3,
}

export type Customer = {
    id: string;
    name: string;
    type: CustomerType;
}