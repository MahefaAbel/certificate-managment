import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation } from '@angular/core';
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

  constructor() {
    // this.listPerson = [];
    this.personSelected = null;
    console.log("constructor", this.inputTest);
  }

  ngOnInit(): void {
    console.log("ngOnInit", this.inputTest);
  }

  
  ngOnDestroy(): void {
    console.log("ngOnDestroy")
  }

}
