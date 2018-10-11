import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HelpComponent } from './components/help/help.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';
import { DeliverToComponent } from './components/deliver-to/deliver-to.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'who-we-are', component: WhoWeAreComponent },
  { path: 'help', component: HelpComponent },
  { path: 'details/:id', component: RestaurantDetailComponent },
  { path: 'restaurants', component: RestaurantsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HowItWorksComponent,
    WhoWeAreComponent,
    NavbarComponent,
    HelpComponent,
    RestaurantsComponent,
    RestaurantDetailComponent,
    DeliverToComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
