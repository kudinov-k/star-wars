import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MovieComponent} from './movie/movie.component';
import {StarshipComponent} from './starship/starship.component';


const routes: Routes = [
  {path: '', redirectTo: 'movie/1', pathMatch: 'full'},
  {path: 'movie/:id', component: MovieComponent},
  {path: 'starship/:id', component: StarshipComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
