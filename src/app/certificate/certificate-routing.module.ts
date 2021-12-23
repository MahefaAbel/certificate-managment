import { Router, Routes } from "@angular/router";
import { SearchComponent } from "./search/search.component";

export const routesCertificate : Routes = [
    {
        path: "certificate",
        component: SearchComponent,
    },
    // {
    //     path: "",
    //     component: DetailComponent,
    // },
]