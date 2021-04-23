import { Component, OnInit } from '@angular/core';


import {film_list} from '../../film-list';
import { AppComponent} from '../app.component';

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrls: ['./film-page.component.css']
})
export class FilmPageComponent implements OnInit {
  film_list = film_list;
  constructor() { }

  ngOnInit(): void {
  }
}
