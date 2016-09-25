import { Component } from '@angular/core';
import { CustomersComponent } from './customers/customers.component';

@Component({
    selector: 'my-app',
    providers: [CustomersComponent],
    template: `
        <h1>My First Angular App3</h1>
`,
    styles: [` 
        h1 {
            color: blue;
        }
`]
})
export class AppComponent { }
