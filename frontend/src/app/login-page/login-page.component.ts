import { Component, OnInit } from '@angular/core';
import {throwError} from 'rxjs';
import {AppComponent} from '../app.component';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public user: any;
  public logged = false;
  // tslint:disable-next-line:variable-name
  constructor(private _userService: UserService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.user = {
      username: '',
      password: ''
    };
  }
  login(): void{
    this._userService.logIn(this.user.username, this.user.password).subscribe((data) => {
      console.log(data);
      this.get_userService().token = data.token;
      window.localStorage.setItem('token', data.token);
    }, error => {
      alert('Неверный логин или пароль');
    });
    console.log(this.user.username, this.user.password);
    // alert(this.user.token);
    this.logged = true;
  }
  refreshToken(): void{
    this._userService.refreshToken();
  }
  logout(): void{
    this._userService.logout();
    this.logged = false;
  }
  public get_userService(): UserService{
    return this._userService;
  }
}

