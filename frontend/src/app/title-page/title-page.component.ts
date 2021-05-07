import {Component, Input, OnInit} from '@angular/core';
import { Anime } from '../models';
import { AnimeService } from '../services/anime.service';
import { ActivatedRoute } from '@angular/router';
import {UserService} from '../services/user.service';
import {element} from 'protractor';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.css']
})
export class TitlePageComponent implements OnInit {
  anime: Anime | undefined;
  nums: number[] = [];
  rating = 0;
  visitor: any;
  visitorLoaded = false;
  text = '';

  constructor(
    private route: ActivatedRoute,
    private animeService: AnimeService,
    // tslint:disable-next-line:variable-name
    private _userService: UserService
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
    this._userService.getUser().subscribe((user) => {
      this.visitor = user;
    } ,error => {});
    this.visitorLoaded = true;
  }

  getAnimeById(id: string | null): void {
    this.animeService.getAnimeById(id).subscribe((animeData) => {
      this.anime = animeData;
    });
  }
  getAnimeByName(name: string | null): void {
    this.animeService.getAnimeByName(name).subscribe((animeData) => {
      this.anime = animeData;
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

  public confirm(animeId: number, body: string): void {
    this._userService.confirmCom(animeId, body).subscribe((data) => {
      console.log(data);
    }, error => {
      console.log(error);
      alert('Вы не авторизованы');
    });
    window.location.reload();
  }

  addToList(animeId: number): void {
    this._userService.addToUserList(animeId).subscribe(data => {}, error => {
      console.log(error);
    });
    window.location.reload();
  }
  removeFromList(animeId: number): void {
    this._userService.removeFromUserList(animeId).subscribe(data => {}, error => {
      console.log(error);
    });
    window.location.reload();
  }
  get isAdded(): boolean {
    if (this.visitor) {
      for (const ent of this.visitor.liked_animes) {
        if (ent.name === this.anime?.name) {
          return true;
        }
      }
    }
    return false;
  }
}

