import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Users } from 'src/models/Users';

@Component({
  selector: 'list-certificat',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input()
  public listPerson: Array<Users>;
  public personSelected: Users|null;
  @Output()
  public personSelectedEvent: EventEmitter<Users>;

  constructor() {
    this.listPerson = [];
    this.personSelected = null;
    this.personSelectedEvent = new EventEmitter
  }

  ngOnInit(): void {
  }

  onClick(val: Users): void {
    this.personSelected = val;
    this.personSelectedEvent.emit(this.personSelected)
  }
}
