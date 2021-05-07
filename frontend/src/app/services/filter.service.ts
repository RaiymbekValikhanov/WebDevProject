import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Anime, Film, Filter } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  animeList: Anime[] = [];
  BASE_URL = 'http://127.0.0.1:8000/main/animes/';
  BASE_URL_FILM = 'http://127.0.0.1:8000/main/films/';

  constructor(
    private http: HttpClient,
  ) { this.initAnime(); }
  initAnime(): void {
    this.http.get<Anime[]>(this.BASE_URL).subscribe((data) => {
      this.animeList = data;
    });
  }
  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.BASE_URL_FILM);
  }

  filterAnime(filter: Filter): void {
    this.http.get<Anime[]>(this.BASE_URL).subscribe((data) => {
      this.animeList = data.filter((value: any) => {
        const okYear = value.year >= filter.yearFrom;
        const okGenres = value.genres.some((el: any) => filter.genres.includes(el.name));
        const okFilter = filter.genres.length === 0;
        return okYear && (okGenres || okFilter);
      });
      this.animeList.sort((a, b): any => {
        if (filter.orderBy === 'Date') {
          if (a.year > b.year) { return 1; }
          return -1;
        } else if (filter.orderBy === 'Rating') {
          if (a.mark > b.mark) { return 1; }
          return -1;
        } else if (filter.orderBy === 'Alphabet') {
          if (a.name > b.name) { return 1; }
          return -1;
        }
      });
    });
  }

  getAnimeList(): Anime[] {
    return this.animeList;
  }
}
