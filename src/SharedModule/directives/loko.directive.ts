import { Directive, ElementRef, HostListener, Input, OnInit } from "@angular/core";

@Directive({
    "selector": "[lokona]"
})
export class LokoDirective implements OnInit {
    @Input()
    public lokona!: string

    constructor(public element: ElementRef){}

    ngOnInit(): void {
        this.element.nativeElement.style.backgroundColor = this.lokona
    }

    @HostListener("mouseenter")
    onHover(){
        this.element.nativeElement.style.display = "block"
        this.element.nativeElement.style.width = "600px"
        this.element.nativeElement.style.textAlign = "center"
        this.element.nativeElement.innerHTML += "-hovered"
    }

    @HostListener("mouseleave")
    onLeave(){
        this.element.nativeElement.style.display = "inline"
    }

}