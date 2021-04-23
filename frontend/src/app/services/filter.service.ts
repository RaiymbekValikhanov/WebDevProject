import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { anime_list } from '../../anime-list';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  animeList: any[] = [];

  constructor(
    private http: HttpClient,
  ) { this.animeList = anime_list; }

  filterAnime(filter: any): void {
    console.log(filter);
    this.http.get<any>('/assets/anime-list.json').subscribe((data) => {
      this.animeList = data.filter((value: any) => {
        const okYear = value.year >= filter.yearFrom;
        const okGenres = value.genre.some((el: string) => filter.genres.includes(el)) || filter.genres.length === 0;
        return okYear && okGenres;
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

  getAnimeList(): any[] {
    return this.animeList;
  }
}
