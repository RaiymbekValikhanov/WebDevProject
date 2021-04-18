import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Anime, AnimeData, animeQuery, animeNameQuery } from './models';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  BASE_URL = 'https://graphql.anilist.co';
  constructor(
    private http: HttpClient,
  ) { }

  getAnimeById(animeId: string | null): Observable<AnimeData> {
    const animeBody = {
      query: animeQuery,
      variables: {
        id: animeId
      },
    };
    return this.http.post<AnimeData>(this.BASE_URL, animeBody);
  }
  getAnimeByName(animeName: string | null): Observable<AnimeData> {
    const animeBody = {
      query: animeNameQuery,
      variables: { animeName },
    };
    return this.http.post<AnimeData>(this.BASE_URL, animeBody);
  }
}

