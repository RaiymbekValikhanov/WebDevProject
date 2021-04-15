import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-genre-item',
  templateUrl: './genre-item.component.html',
  styleUrls: ['./genre-item.component.css']
})
export class GenreItemComponent implements OnInit {
  @Input() genre = '';
  @Output() genreEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  removeGenre(): void {
    this.genreEvent.emit(this.genre);
  }
}
