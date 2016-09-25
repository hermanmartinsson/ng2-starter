import {Component } from '@angular/core';
import {CustomersService} from './customers.service';

@Component({
    selector: 'customers',
    providers: [CustomersService],
    templateUrl: './src/app/customers/customers.component.html'
})
export class CustomersComponent {
    componentName: 'CustomersComponent';
    customers: Array<any>;

    constructor(private _customersService: CustomersService) {
        this.customers = _customersService.getCustomers();
    }
}