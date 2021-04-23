import {Component, Input, OnInit, Output, EventEmitter, AfterViewInit, AfterContentInit} from '@angular/core';
import {FilterComponent} from '../filter.component';

@Component({
  selector: 'app-genre-option',
  templateUrl: './genre-option.component.html',
  styleUrls: ['./genre-option.component.css']
})
export class GenreOptionComponent implements OnInit {
  @Input() genre = '';
  @Input() select: boolean = false;
  @Output() selectChange = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  selectGenre(): void {
    this.select = !this.select;
    this.selectChange.emit(this.select);
  }
}
