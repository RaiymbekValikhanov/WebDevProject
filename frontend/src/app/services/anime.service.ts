import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Anime, animeQuery, animeNameQuery } from '../models';
import {anime} from '../../anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  BASE_URL = 'http://127.0.0.1:8000/main/animes';
  constructor(
    private http: HttpClient,
  ) { }

  getAnimeById(animeId: string | null): Observable<Anime> {
    // const animeBody = {
    //   query: animeQuery,
    //   variables: {
    //     id: animeId
    //   },
    // };
    return this.http.get<Anime>(`${this.BASE_URL}/${animeId}/`);
  }
  getAnimeByName(animeName: string | null): Observable<Anime> {
    // const animeBody = {
    //   query: animeNameQuery,
    //   variables: { animeName },
    // };
    return this.http.get<Anime>(`${this.BASE_URL}/${animeName}/`);
  }
}

