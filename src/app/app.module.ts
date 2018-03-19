import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {AgmCoreModule} from '@agm/core';
import {HttpClientModule} from '@angular/common/http';

import { BodyComponent } from './body/body.component';
import { MedidorComponent } from './body/medidor/medidor.component';
import {MapaComponent} from './body/mapa/mapa.component';
import {MapaService} from './body/mapa/mapa.service';
import {BodyService} from './body/body.service';
import { LoginComponent } from './login/login.component';
import {RouterModule,Routes} from '@angular/router';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCardModule} from '@angular/material/card';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MapaComponent,
    BodyComponent,
    MedidorComponent,
    LoginComponent,
    PageNotFoundComponentComponent
  ],
  imports: [
    MatCardModule,
    MatAutocompleteModule,
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA4t2pClEZ52kWGrG3s05NYT5TLMTM-6lg'
    }),
    RouterModule.forRoot(
      appRoutes,
      {enableTracing:true}
    )
  ],
  providers: [
    MapaService,
    BodyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
