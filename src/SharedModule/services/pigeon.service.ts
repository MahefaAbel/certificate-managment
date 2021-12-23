import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class PigeonVoyagerService {
    private listPerson: number[] = []

    private dataTest: BehaviorSubject<number> = new BehaviorSubject(0)
    private listPersonBS: BehaviorSubject<number[]> = new BehaviorSubject([0])
    
    constructor(
    ){}
    
    public setDataTest(value: number): void{
        this.dataTest.next(value)

        this.listPerson.push(0)
        this.listPersonBS.next(this.listPerson)
    }

    public getDataTestBehavior(): BehaviorSubject<number>{
        return this.dataTest
    }

    public getDataTestObservable(): Observable<number>{
        return this.dataTest.asObservable()
    }

    public getValueTest(): number {
        return this.dataTest.value
    }


    public async getXFilm(): Promise<number> {
        return new Promise((resolve, reject) => {
            if("cava")
                resolve(this.dataTest.value)
            else 
                reject({
                    error: "oups"
                })
        })
    }
}