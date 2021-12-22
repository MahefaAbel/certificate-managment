import { Component, Inject, OnInit } from '@angular/core';
import { Users } from 'src/models/Users';
import { listPersonWithImageJson } from './data.users';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public codeCertificate: string;
  public listPersonnResult: Array<Users>;
  public personSelected: Users|null;

  constructor() {
    this.codeCertificate = "";
    this.listPersonnResult = [];
    this.personSelected = null
  }

  ngOnInit(): void {
  }

  onClick(){
    this.listPersonnResult = this.search(this.codeCertificate);
  }

  search(codeCertificate: string = ""): Array<any> {
    const listPerson: Array<Users> = [];

    if(codeCertificate.length == 0) return listPerson;

    listPersonWithImageJson.forEach((item: any) => {
      if(item.codeCertificate.toString().indexOf(codeCertificate) != -1) {
        listPerson.push( new Users(
          item.id,
          item.author,
          item.download_url,
          item.codeCertificate
        ) )
      }
    })

    
    return listPerson;
  }

  onPersonSelected(user: Users|null): void {
    this.personSelected = user;
  }

}