import { Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Query, QueryList, ViewEncapsulation } from '@angular/core';
import { of } from 'rxjs';
import { Users } from 'src/models/Users';

@Component({
  selector: 'list-certificat',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  // @Input()
  // public listPerson: Array<Users>;
  @Input()
  public isListHasElement!: boolean;
  @Input()
  public inputTest!: string;
  public personSelected: Users|null;
  public classItem: Array<string> = []
  @ContentChildren("container")
  public containerContentChild!: QueryList<ElementRef>;

  constructor() {
    // this.listPerson = [];
    this.personSelected = null;
    console.log("constructor", this.inputTest);
  }

  ngOnInit(): void {
    console.log("ngOnInit", this.inputTest);
  }
  
  ngAfterViewInit(): void {
    // console.log("ngAfterViewInit", this.containerContentChild)
  }
  
  ngAfterContentInit(): void {
    // console.log("ngAfterContentInit", this.containerContentChild)
  }
  
  ngOnDestroy(): void {
    // console.log("ngOnDestroy")
  }

  click(){
    // console.log('click', this.containerContentChild)
  }
}
