import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from 'src/SharedModule/shared.module';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeEn from '@angular/common/locales/en';
registerLocaleData(localeFr);
registerLocaleData(localeEn);

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
    FormsModule,
  ],
  providers: [
    {
      // provide: LOCALE_ID, useValue: "fr-FR",
      provide: LOCALE_ID, useValue: "en-US",
    }
  ],
  bootstrap: [SearchComponent]
})
export class CertificateModule { }
