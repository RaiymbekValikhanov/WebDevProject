import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-genre-option',
  templateUrl: './genre-option.component.html',
  styleUrls: ['./genre-option.component.css']
})
export class GenreOptionComponent implements OnInit {
  @Input() genre = 'Genre';
  @Output() genreEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  selectGenre(): void {
    this.genreEvent.emit(this.genre);
  }
}
