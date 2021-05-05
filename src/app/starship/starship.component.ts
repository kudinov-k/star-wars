import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Starship} from '../models/starship';
import {StarshipService} from '../services/starship.service';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {
  starship: Starship;

  constructor(private starshipService: StarshipService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.starshipService.getStarshipById(id).subscribe(
      starship => this.starship = starship
    );
  }

}
