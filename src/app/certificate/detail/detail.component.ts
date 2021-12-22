import { formatNumber } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Users } from 'src/models/Users';

@Component({
  selector: 'certificat-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input()
  public selectedPerson: Users|null;
  public textHtml: string;
  // public condition = true;
  @ViewChild("componentName") 
  public componentNameViewChild!: ElementRef
  @ViewChild("zayataonaofamadionysaiko") 
  public zayataonaofamadionysaikoVC!: ElementRef

  constructor() {
    this.selectedPerson = null
    this.textHtml = "Lorem <strong>lupsum</strong>";
    // this.textHtml = "";
  }

  ngOnInit(): void {
  }

  formatMillier(value: number){
    return formatNumber(value, "fr-FR")
  }

}
