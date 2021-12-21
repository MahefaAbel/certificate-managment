import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from 'src/SharedModule/shared.module';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    SearchComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    FormsModule
  ],
  bootstrap: [SearchComponent]
})
export class CertificateModule { }
