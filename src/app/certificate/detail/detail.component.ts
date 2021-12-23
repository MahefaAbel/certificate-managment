import { formatNumber } from '@angular/common';
import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, HostListener, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Users } from 'src/models/Users';
import { PigeonVoyagerService } from 'src/SharedModule/services/pigeon.service';

@Component({
  selector: 'certificat-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, AfterViewInit, AfterContentInit {
  @Input()
  public selectedPerson!: Users|null;
  public textHtml: string;
  // public condition = true;
  @ViewChild("componentName") 
  public componentNameViewChild!: ElementRef
  @ViewChild("zayataonaofamadionysaiko") 
  public zayataonaofamadionysaikoVC!: ElementRef
  @ContentChild("container")
  public containerContentChild!: ElementRef;

  constructor(
    public pigeon: PigeonVoyagerService
  ) {
    this.textHtml = "Lorem <strong>lupsum</strong>";
    // this.pigeon.getDataTestObservable().subscribe({
    //   next: (value: number) => {
    //     console.log("DetailComponent::constructor", value)
    //   }
    // })
  }

  async ngOnInit() {
    console.log("ngOnInit", this.containerContentChild)
    this.pigeon.getDataTestBehavior().subscribe({
      next: (value: number) => {
        console.log("DetailComponent::ngOnInit", value)
      }
    })

    this.pigeon.getXFilm().then(valeur => {
      console.log(valeur)
    }).catch(err => {
      console.error(err)
    })

    const result = await this.pigeon.getXFilm()
  }
  
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit", this.containerContentChild)
    this.pigeon.getDataTestBehavior().subscribe({
      next: (value: number) => {
        console.log("DetailComponent::ngAfterViewInit", value)
      }
    })
  }
  
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit", this.containerContentChild)
  }

  formatMillier(value: number){
    return formatNumber(value, "fr-FR")
  }

}
