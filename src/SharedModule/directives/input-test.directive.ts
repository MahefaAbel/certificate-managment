import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: "[inputChangeComportement]"
})
export class InputTestDirective {

    constructor(
        public element: ElementRef
    ){
        setInterval(() => {
            const date: Date = new Date()
            const seconde = date.getSeconds()
            console.log("seconde", seconde)
            if(seconde % 2 == 0){
                element.nativeElement.disabled = false
                element.nativeElement.style.backgroundColor = this.randomRgb()
            }else{
                element.nativeElement.disabled = true
                element.nativeElement.style.backgroundColor = this.randomRgb()
            }
        }, 1000)
    }

    private randomRgb(): string {
        let red: number = Math.round(Math.random() * 255)
        let green: number = Math.round(Math.random() * 255)
        let bleu: number = Math.round(Math.random() * 255)
        return `rgb(${red}, ${green}, ${bleu})`
    }
}