import {Component, Input, OnInit} from '@angular/core';
import { Anime } from '../models';
import { AnimeService } from '../services/anime.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.css']
})
export class TitlePageComponent implements OnInit {
  anime: Anime | undefined;
  nums: number[] = [];
  rating = 0;
  constructor(
    private route: ActivatedRoute,
    private animeService: AnimeService,
  ) {
  }
  ngOnInit(): void {
    this.nums = Array(10).fill(0).map((x, i) => i + 1);
    this.route.paramMap.subscribe((params) => {
      const name = params.get('name');
      this.getAnimeByName(name);
      this.rating = 0;
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
      this.anime = animeData.data.Media;
    });
  }

  goToPlayer(): void {
    const bodyPos = document.body.getBoundingClientRect().top;
    const playPos = document.body.getElementsByClassName('player')[0].getBoundingClientRect().top;
    const offset = playPos - bodyPos;
    window.scrollTo({top: offset, behavior: 'smooth'});
  }
  rate(rating: number): void {
    this.rating = rating;
    console.log(this.rating);
  }
}
