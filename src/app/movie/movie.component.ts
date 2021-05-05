import {Component, OnInit} from '@angular/core';
import {MovieService} from '../services/movie.service';
import {Movie} from '../models/movie';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: Movie;
  id: number;

  constructor(private movieService: MovieService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.movieService.getMovieById(this.id).subscribe(
      movie => this.movie = movie
    );
  }

  getShipNumber(url: string): string {
    const regExp = RegExp('(\\d{1,})', 'g');
    return url.match(regExp).pop();
  }

}
