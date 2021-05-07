import { Component, OnInit } from '@angular/core';
import { AppComponent} from '../app.component';
import {Film} from '../models';
import {FilterService} from '../services/filter.service';

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrls: ['./film-page.component.css']
})
export class FilmPageComponent implements OnInit {
  film_list: Film[] = [];
  constructor(
    private filter: FilterService,
  ) { }

  initFilms(): void {
    this.filter.getFilms().subscribe(data => {
      this.film_list = data;
    });
  }
  ngOnInit(): void {
    this.initFilms();
  }
}
