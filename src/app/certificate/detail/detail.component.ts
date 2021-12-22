import { formatNumber } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Users } from 'src/models/Users';

@Component({
  selector: 'certificat-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input()
  public selectedPerson: Users|null;

  constructor() {
    this.selectedPerson = null
  }

  ngOnInit(): void {
  }

  formatMillier(value: number){
    return formatNumber(value, "fr-FR")
  }

}
