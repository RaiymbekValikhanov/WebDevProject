import {Component, Input, OnInit, Output, EventEmitter, AfterViewInit} from '@angular/core';
import {FilterComponent} from '../filter.component';

@Component({
  selector: 'app-genre-item',
  templateUrl: './genre-item.component.html',
  styleUrls: ['./genre-item.component.css']
})
export class GenreItemComponent implements OnInit{
  @Input() genre = '';
  @Input() select: boolean = false;
  @Output() selectChange = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  removeGenre(): void {
    this.select = !this.select;
    this.selectChange.emit(this.select);
  }
}
