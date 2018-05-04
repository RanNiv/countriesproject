import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from './app.component'


import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import {CountriespageComponent }from './countriespage/countriespage.component'


import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http'
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DataService } from './shared/services/services.data';

const appRoutes: Routes = [
  

  
  { path: 'countries', component: CountriespageComponent },
  { path: 'home', component: HomeComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'}
  ,
 

  { path: '**', component: PagenotfoundComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    HomeComponent,
    CountriespageComponent,
    PagenotfoundComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
