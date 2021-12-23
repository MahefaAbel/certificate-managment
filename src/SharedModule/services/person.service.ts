import { Users } from "src/models/Users";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core";

@Injectable()
export class PersonService {

    constructor(
        private http: HttpClient
    ){  }

    public login(): any {
        const token = "Bearer xxxx"
        localStorage.setItem("token", token)
    }

    public getAll(): Promise<Users[]> {
        const promise: Promise<Users[]> = new Promise<Users[]>((resolve, reject) => {
            let listUsers: Users[] = []
            
            const token = localStorage.getItem("token")
            const httpHeaders: HttpHeaders = new HttpHeaders({
                "Authorization" : `Bearer ${token}`
            })
            this.http.get("https://picsum.photos/v2/list", {
                headers: httpHeaders
            }).subscribe({
                next: (result: any) => {
                    console.log("PersonService::result: ", result)
                    listUsers = result
                    resolve(listUsers)
                }
            })
        })
        return promise
    }


    public getAll1(): Promise<Users[]> {
        const promise: Promise<Users[]> = new Promise<Users[]>((resolve, reject) => {
            let listUsers: Users[] = []
            
            const token = localStorage.getItem("token")
            const httpHeaders: HttpHeaders = new HttpHeaders({
                "Authorization" : `Bearer ${token}`
            })
            this.http.get("https://picsum.photos/v2/list", {
                headers: httpHeaders
            }).subscribe({
                next: (result: any) => {
                    console.log("PersonService::result: ", result)
                    listUsers = result
                    resolve(listUsers)
                }
            })
        })
        return promise
    }

    
    public getAll2(): Promise<Users[]> {
        const promise: Promise<Users[]> = new Promise<Users[]>((resolve, reject) => {
            let listUsers: Users[] = []
            
            const token = localStorage.getItem("token")
            const httpHeaders: HttpHeaders = new HttpHeaders({
                "Authorization" : `Bearer ${token}`
            })
            this.http.get("https://picsum.photos/v2/list", {
                headers: httpHeaders
            }).subscribe({
                next: (result: any) => {
                    console.log("PersonService::result: ", result)
                    listUsers = result
                    resolve(listUsers)
                }
            })
        })
        return promise
    }

    
    public getAll3(): Promise<Users[]> {
        const promise: Promise<Users[]> = new Promise<Users[]>((resolve, reject) => {
            let listUsers: Users[] = []
            
            const token = localStorage.getItem("token")
            const httpHeaders: HttpHeaders = new HttpHeaders({
                "Authorization" : `Bearer ${token}`
            })
            this.http.get("https://picsum.photos/v2/list", {
                headers: httpHeaders
            }).subscribe({
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