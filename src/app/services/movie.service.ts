import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {Movie} from '../models/movie';

@Injectable({providedIn: 'root'})
export class MovieService {

  constructor(private apiService: ApiService) {
  }

  getMovieById(id: number): Observable<Movie> {
    return this.apiService.get<Movie>(`https://swapi.dev/api/films/${id}/`);
  }

}
