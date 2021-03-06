import { AfterViewInit, Component, ElementRef, Injectable, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/models/Users';
import { PersonService } from 'src/SharedModule/services/person.service';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, AfterViewInit, OnDestroy {
  public codeCertificate: string;
  public listPersonnResult: Array<Users>;
  public personSelected!: Users|null;
  @ViewChild("code") 
  public codeViewChild!: ElementRef
  @ViewChild(DetailComponent) 
  public detailCompentViewChild!: DetailComponent
  // @ViewChildren(DetailComponent) 
  // public detailCompentViewChildren!: QueryList<DetailComponent>
  public listPersonWithImageJson: any[] = [];

  constructor(
    private personService: PersonService,
    private router: Router
  ) {
    this.codeCertificate = "";
    this.listPersonnResult = [];
    console.log("constructor", this.detailCompentViewChild)
  }

  ngOnInit(): void {
    console.log("ngOnInit", this.detailCompentViewChild)
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit", this.detailCompentViewChild)
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy")
  }

  onClick(){
    this.personService.getAll().then(listUser => {
      console.log("SearchComponent::result: ", listUser)
      this.listPersonWithImageJson = listUser

      this.listPersonnResult = this.search(this.codeCertificate);
      console.log("listPersonnResult: ", this.listPersonnResult)
      if(this.listPersonnResult.length == 1) this.personSelected = this.listPersonnResult[0]
      this.codeViewChild.nativeElement.innerHTML = this.codeCertificate;
      // this.detailCompentViewChild.componentNameViewChild.nativeElement.innerHTML = this.codeCertificate
      // this.detailCompentViewChildren.toArray().forEach( (item: DetailComponent) => {
      //     item.componentNameViewChild.nativeElement.innerHTML += this.codeCertificate
      //   }
      // )

      this.router.navigate(['/certificate/detail'])
    })
  }

  search(codeCertificate: string = ""): Array<Users> {
    const listPerson: Array<Users> = [];

    if(codeCertificate.length == 0) {
      this.codeViewChild.nativeElement.innerHTML = ""
      this.personSelected = null;
      return listPerson;
    }

    this.listPersonWithImageJson.forEach((item: any) => {
      // if(item.codeCertificate.toString().indexOf(codeCertificate) != -1) {
      if(item.author.toString().indexOf(codeCertificate) != -1) {
        listPerson.push( new Users(
          item.id,
          item.author,
          item.download_url,
          // item.codeCertificate
        ) )
      }
    })

    
    return listPerson;
  }

  onPersonSelected(user: Users|null): void {
    this.personSelected = user;
  }

}