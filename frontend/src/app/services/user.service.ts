import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthToken} from '../models';

@Injectable()
export class UserService {
  URL = 'http://127.0.0.1:8000/';
  private httpOptions: any;
  // @ts-ignore
  public token: AuthToken['token'];
  // tslint:disable-next-line:variable-name
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  public token_expires: Date ;
  public username = '';
  public errors: any = [];
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }

  public logIn(username: string, password: string): Observable<AuthToken> {
    // @ts-ignore
    return this.http.post<AuthToken>('http://127.0.0.1:8000/api-token-auth/', {
      username, password
    });
    // console.log(this.token);
  }

  // обновление JWT токена
  // tslint:disable-next-line:typedef
  public refreshToken() {
    this.http.post('/api-token-refresh/', JSON.stringify({token: this.token}), this.httpOptions).subscribe(
      data => {
        // @ts-ignore
        this.updateData(data['token']);
      },
      err => {
        this.errors = err['error'];
      }
    );
  }

  // tslint:disable-next-line:typedef
  public logout() {
    this.token = '';
    this.username = '';
  }

  // tslint:disable-next-line:typedef
  private updateData(token: string ) {
    this.token = token;
    this.errors = [];

    // декодирование токена для получения логина и времени жизни токена
    // tslint:disable-next-line:variable-name
    // @ts-ignore
    // tslint:disable-next-line:variable-name
    const token_parts = this.token.split(/\./);
    // tslint:disable-next-line:variable-name
    const token_decoded = JSON.parse(window.atob(token_parts[1]));
    this.token_expires = new Date(token_decoded.exp * 1000);
    this.username = token_decoded.username;
  }

}
