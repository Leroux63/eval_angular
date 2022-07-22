import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/partial/header/header.component';
import { RegionsComponent } from './pages/regions/regions.component';
import { DepartementsComponent } from './pages/departements/departements.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegionsComponent,
    DepartementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
