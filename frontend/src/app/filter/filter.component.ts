import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  visible: boolean = false;
  selected: string[] = [];
  genres: string[] = [
    'Adventure', 'Drama', 'Detective', 'Romantic', 'Sport'
  ];
  constructor() { }

  ngOnInit(): void {
  }

  genresList(): void {
    this.visible = !this.visible;
    console.log(this.visible);
  }

  addGenre(newGenre: string): void {
    this.selected.push(newGenre);
  }

  removeGenre(rmGenre: string): void {
    this.selected = this.selected.filter(el => el !== rmGenre);
  }
}

