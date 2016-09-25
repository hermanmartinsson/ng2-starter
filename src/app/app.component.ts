import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular App3</h1>
        <customers></customers>
`,
    styles: [` 
        h1 {
            color: blue;
        }
`]
})
export class AppComponent { }
