import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public nomPerson: string;
  public listPersonnResult: Array<string>;

  constructor() {
    this.nomPerson = "(non assigné)";
    this.listPersonnResult = [];
  }

  ngOnInit(): void {
  }

  onClick(){
    this.listPersonnResult = this.search(this.nomPerson);
  }

  search(nom: string): Array<string> {
    return listComplet.filter((item: string) => item.indexOf(nom) != -1 )
  }

}

const listComplet = [
  "Andrew (Mary Poppins)",
  "Bruno (Cendrillon)",
  "Bolivar (Donald Duck)",
  "Buster (Toy Story)",
  "Butch (La Maison de Mickey)",
  "Capitaine (101 dalmatiens)",
  "Chef (Rox et Rouky9)",
  "Colonel (101 dalmatiens)",
  "Dinah (Mickey Mouse)",
  "Dingo (Dingo, univers de Mickey)",
  "Doug (Là-haut)",
  "Einstein (Oliver et compagnie)",
  "Fifi (Minnie Mouse)",
  "Francis (Oliver et compagnie)",
  "Georgette (Oliver et compagnie)",
  "Jock (La Belle et le Clochard)",
  "Lady (La Belle et le Clochard)",
  "Max (La Petite Sirène)",
  "Nana (Peter Pan)",
  "Peggy (La Belle et le Clochard)",
  "Percy (Pocahontas)",
  "Perdita (101 dalmatiens)",
  "Petit-frère (Mulan)",
  "Pluto (Mickey Mouse)",
  "Pongo (101 dalmatiens)",
  "Rita (Oliver et compagnie)",
  "Rouky (Rox et Rouky)",
  "Sergent Tibs (101 dalmatiens)",
  "Scud (Toy Story)",
  "Sparky (Frankenweenie)",
  "Tito (Oliver et compagnie)",
  "Triste (La dama y el vagabundo)",
  "Toby (Rox et Rouky/ Basil, détective privé)",
  "Volt (Volt, star malgré lui)",
  "Winston (Festin)",
  "Zéro (L'Etrange Noël de Monsieur Jack)",
  "ZigZag (Toy Story)",
]