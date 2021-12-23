import { formatNumber } from '@angular/common';
import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Users } from 'src/models/Users';

@Component({
  selector: 'certificat-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, AfterViewInit, AfterContentInit {
  @Input()
  public selectedPerson: Users|null;
  public textHtml: string;
  // public condition = true;
  @ViewChild("componentName") 
  public componentNameViewChild!: ElementRef
  @ViewChild("zayataonaofamadionysaiko") 
  public zayataonaofamadionysaikoVC!: ElementRef
  @ContentChild("container")
  public containerContentChild!: ElementRef;

  constructor() {
    this.selectedPerson = null
    this.textHtml = "Lorem <strong>lupsum</strong>";
    // this.textHtml = "";
  }

  ngOnInit(): void {
    console.log("ngOnInit", this.containerContentChild)
  }
  
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit", this.containerContentChild)
  }
  
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit", this.containerContentChild)
  }

  formatMillier(value: number){
    return formatNumber(value, "fr-FR")
  }

}
