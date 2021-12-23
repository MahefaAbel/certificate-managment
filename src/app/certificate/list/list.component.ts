import { Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Query, QueryList, ViewEncapsulation } from '@angular/core';
import { of } from 'rxjs';
import { Users } from 'src/models/Users';
import { PigeonVoyagerService } from 'src/SharedModule/services/pigeon.service';

@Component({
  selector: 'list-certificat',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input()
  public isListHasElement!: boolean;
  @Input()
  public inputTest!: string;
  public personSelected: Users|null;
  public classItem: Array<string> = []
  @ContentChildren("container")
  public containerContentChild!: QueryList<ElementRef>;

  constructor(
    private pigeon: PigeonVoyagerService
  ) {
    this.personSelected = null;
    console.log("constructor", this.inputTest);
    setInterval(() => this.pigeon.setDataTest(Math.random()), 1000)
  }

  ngOnInit(): void {
    console.log("ngOnInit", this.inputTest);
  }
}
