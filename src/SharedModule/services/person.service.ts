import { Users } from "src/models/Users";
import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";

@Injectable()
export class PersonService {

    constructor(
        private http: HttpClient
    ){  }

    public getAll(): Promise<Users[]> {
        const promise: Promise<Users[]> = new Promise<Users[]>((resolve, reject) => {
            let listUsers: Users[] = []
            this.http.get("https://picsum.photos/v2/list").subscribe({
                next: (result: any) => {
                    console.log("PersonService::result: ", result)
                    listUsers = result
                    resolve(listUsers)
                }
            })
        })
        return promise
    }
}