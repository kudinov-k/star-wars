import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MovieComponent} from './movie/movie.component';
import {StarshipComponent} from './starship/starship.component';
import {Routes} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';


// const routers: ModuleWithProviders<AppModule> = RouterModule.forChild([
//   {path: '', component: MovieComponent}
// ]);
const routes: Routes = [
  {
    path: '',
    component: MovieComponent,
  },
];


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    StarshipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
