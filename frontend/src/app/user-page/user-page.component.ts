import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router} from '@angular/router';
import {Anime} from '../models';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  user: any;
  animeList: Anime[] = [];
  // likedAnime = [];
  constructor(
    private userService: UserService,
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.userService.getUser().subscribe((user) => {
      this.user = user;
      this.animeList = user.liked_animes;
    }, error => {
      this.route.navigate(['']);
    });
  }
  remoteAnime(animeId: number): void {
    this.userService.removeFromUserList(animeId).subscribe(data => {}, error => {
      console.log(error);
    });
    window.location.reload();
  }
}
