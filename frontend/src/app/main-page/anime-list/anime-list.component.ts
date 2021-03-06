import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { Anime } from '../../models';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {
  constructor(
    private filterService: FilterService,
  ) { }

  get animeList(): Anime[] {
    return this.filterService.getAnimeList();
  }
  ngOnInit(): void {
  }

}
