import { Component, OnInit } from '@angular/core';
import {anime} from 'src/anime';
import {AppComponent} from '../app.component';
import {LoginPageComponent} from '../login-page/login-page.component';
@Component({
  selector: 'app-anime-list-header',
  templateUrl: './anime-list-header.component.html',
  styleUrls: ['./anime-list-header.component.css']
})
export class AnimeListHeaderComponent extends LoginPageComponent implements OnInit {
  anime = anime;
  name = '';
  LogOut(): void {
    this.get_userService().logout();
    alert('If you want, just log in again');
  }
  ngOnInit(): void {
  }
}
