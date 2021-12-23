import { Routes } from "@angular/router";
import { AppComponent } from "src/main/homepage/app.component";
import { DetailComponent } from "./detail/detail.component";
import { SearchComponent } from "./search/search.component";

export const routesCertificate : Routes = [
    {
        path: "",
        component: AppComponent,
        // redirectTo: AppComponent
    },
    // {
    //     path: "list",
    //     component: AppComponent,
    // },
    {
        path: "certificate",
        component: SearchComponent,
        children: [
            {
                path: "detail",
                component: DetailComponent,
            }
        ]
    },
    // {
    //     path: "certificate/detail",
    //     component: DetailComponent,
    // },
]