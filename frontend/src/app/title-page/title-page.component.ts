import { Component, OnInit } from '@angular/core';
import { Anime } from '../models';
import { AnimeService } from '../anime.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.css']
})
export class TitlePageComponent implements OnInit {
  anime: Anime | undefined;
  constructor(
    private route: ActivatedRoute,
    private animeService: AnimeService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.getAnimeById(id);
      // this.getAnimeByName('DemonSlayer');
    });
  }

  getAnimeById(id: string | null): void {
    this.animeService.getAnimeById(id).subscribe((animeData) => {
      this.anime = animeData.data.Media;
    });
  }
  getAnimeByName(name: string | null): void {
    this.animeService.getAnimeByName(name).subscribe((animeData) => {
      console.log(animeData.data.Media);
    });
  }
}
