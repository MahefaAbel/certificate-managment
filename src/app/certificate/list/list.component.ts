import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { of } from 'rxjs';
import { Users } from 'src/models/Users';

@Component({
  selector: 'list-certificat',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  // @Input()
  // public listPerson: Array<Users>;
  @Input()
  public isListHasElement!: boolean;
  public personSelected: Users|null;
  public classItem: Array<string> = []

  constructor() {
    // this.listPerson = [];
    this.personSelected = null;
  }

  ngOnInit(): void {
  }

}
