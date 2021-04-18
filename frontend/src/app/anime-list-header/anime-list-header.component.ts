import { Component, OnInit } from '@angular/core';
import { anime } from 'src/anime';
@Component({
  selector: 'app-anime-list-header',
  templateUrl: './anime-list-header.component.html',
  styleUrls: ['./anime-list-header.component.css']
})
export class AnimeListHeaderComponent implements OnInit {
  anime = anime;
  constructor() { }

  ngOnInit(): void {
  }

}
