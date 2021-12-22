import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Users } from 'src/models/Users';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input()
  public item!: Users;
  @Input()
  public index!: number
  @Input()
  public isLastItem!: boolean
  // @Output()
  // public personSelectedEvent!: EventEmitter<Users>;

  constructor() {
    // this.personSelectedEvent = new EventEmitter
  }

  ngOnInit(): void {
  }

  onClick(val: Users): void {
    // this.personSelectedEvent.emit()
  }

}
