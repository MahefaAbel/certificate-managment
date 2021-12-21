import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'list-certificat',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input()
  public listPerson: Array<any>;

  constructor() {
    this.listPerson = [];
  }

  ngOnInit(): void {
  }

}
