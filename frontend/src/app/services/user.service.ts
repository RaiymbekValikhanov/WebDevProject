import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthToken} from '../models';

@Injectable()
export class UserService {
  URL = 'http://127.0.0.1:8000/main';
  private httpOptions: any;
  // @ts-ignore
  public token: AuthToken['token'] = localStorage.getItem('token');
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
        this.updateData(data.token);
      },
      err => {
        this.errors = err.error;
      }
    );
  }

  // tslint:disable-next-line:typedef
  public logout() {
    this.token = '';
    this.username = '';
    localStorage.clear();
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
  getUser(): Observable<any> {
    return this.http.get<any>(`${this.URL}/user`);
  }
  addToUserList(animeId: number): Observable<any> {
    return this.http.post<any>(`${this.URL}/user/`, {
      anime: animeId,
    });
  }
  removeFromUserList(animeId: number): Observable<any> {
    return this.http.request('delete', `${this.URL}/user/`, {
      body: {
        anime: animeId,
      }
    });
  }
  public confirmCom(animeId: number, body: string): Observable<any>{
    return this.http.post<any>(`${this.URL}/comments/`, {
      body: body, anime: animeId
    });
  }
  deleteCom(commentId: number): Observable<any> {
    return this.http.request<any>('delete', `${this.URL}/comments/`, {
      body: {
        id: commentId,
      }
    });
  }
  editCom(commentId: number, text: string): Observable<any> {
    return this.http.put<any>(`${this.URL}/comments/`, {
      comment: commentId,
      body: text,
    });
  }
}
