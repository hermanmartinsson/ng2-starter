import {Injectable} from '@angular/core';

@Injectable()
export class CustomersService {
    customers: Array<any>;

    constructor() {
        this.customers = [
            { name: "Tilantius AB", orgNo: "559012-1223" },
            { name: "Scorpio AB", orgNo: "559012-1223" },
        ]
    }

    getCustomers() {
        return this.customers;
    }
}