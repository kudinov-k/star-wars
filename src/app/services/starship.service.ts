import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {Starship} from '../models/starship';

@Injectable({providedIn: 'root'})
export class StarshipService {

  constructor(private apiService: ApiService) {
  }

  getStarshipById(id: number): Observable<Starship> {
    return this.apiService.get<Starship>(`https://swapi.dev/api/starships/${id}/`);
  }

}
