import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { of } from 'rxjs';
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
  public classItem: Array<string> = []

  constructor() {
    this.listPerson = [];
    this.personSelected = null;
    this.personSelectedEvent = new EventEmitter
  }

  ngOnInit(): void {
    const myObservable = of(1, 2, 3);
    const myObserver = {
      next: (x: number) => console.log('Observer got a next value: ' + x),
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    myObservable.subscribe(myObserver);    
    console.log(myObservable);
  }

  onClick(val: Users): void {
    this.personSelected = val;
    this.personSelectedEvent.emit(this.personSelected)
  }

  // getColor(codeCertificate: number): string {
  //   if(codeCertificate < 2000) return "red"
  //   else if (codeCertificate >= 2000 && codeCertificate < 3000) return "yellow"
  //   else return "green"
  // }

  // setClass(codeCertificate: string): string {
  //   if(codeCertificate < 2000) return "mena"
  //   else if (codeCertificate >= 2000 && codeCertificate < 3000) return "manga"
  //   else return "mavomaintso"
  // }
}
