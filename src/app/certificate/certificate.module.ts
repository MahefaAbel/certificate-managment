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
import { Copyright } from './footer/copyright.component';
import { ListItemComponent } from './list/list-item/list-item.component';
import { LokoDirective } from 'src/SharedModule/directives/loko.directive';
import { InputTestDirective } from 'src/SharedModule/directives/input-test.directive';
import { PersonService } from 'src/SharedModule/services/person.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PigeonVoyagerService } from 'src/SharedModule/services/pigeon.service';
import { RouterModule, ROUTES } from '@angular/router';
import { routesCertificate } from './certificate-routing.module';
import { MainCertificateComponent } from './certificate-main.component';
import { PrintUserPipe } from 'src/SharedModule/pipes/users-utils.pipe';
import { TokenInterceptor } from 'src/SharedModule/services/token.interceptor';

registerLocaleData(localeFr);
registerLocaleData(localeEn);

@NgModule({
  declarations: [
    SearchComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    DetailComponent,
    Copyright,
    ListItemComponent,
    LokoDirective,
    InputTestDirective,
    MainCertificateComponent,
    PrintUserPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routesCertificate),
  ],
  providers: [
    {
      // provide: LOCALE_ID, useValue: "fr-FR",
      provide: LOCALE_ID, useValue: "en-US",
    },
    {
      provide: HTTP_INTERCEPTORS,
      useValue: TokenInterceptor
    },
    PersonService,
    PigeonVoyagerService
  ],
  bootstrap: [ MainCertificateComponent ],
  exports: [
    RouterModule
  ]
})
export class CertificateModule { }
