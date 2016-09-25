import {Component } from '@angular/core';
import {CustomersService} from './customers.service';

@Component({
    selector: 'customers',
    providers: [CustomersService],
    templateUrl: '.customers.component.html'
})
export class CustomersComponent {
    customers: Array<any>;
    componentName: 'CustomersComponent';

    constructor(private _customersService: CustomersService) {
        this.customers = _customersService.getCustomers();
    }
}