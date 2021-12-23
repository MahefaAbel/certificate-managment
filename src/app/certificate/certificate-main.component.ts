import { Component } from "@angular/core";


@Component({
    template: `
        <cm-header></cm-header>
        <router-outlet></router-outlet>
        <cm-footer></cm-footer>
    `,
    selector: "ceritificate-main"
})
export class MainCertificateComponent {

}