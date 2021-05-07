import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {UserService} from './user.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

  constructor(
  ) { }

  // tslint:disable-next-line:typedef
  // @ts-ignore
  // tslint:disable-next-line:typedef
  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
  //   console.log('Interception in progress');
  //   const token: string | null = localStorage.getItem('token');
  //   // tslint:disable-next-line:max-line-length
  // tslint:disable-next-line:max-line-length
  //   req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) }); // This clones HttpRequest and Authorization header with Bearer token added
  //   req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
  //   req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
  //
  //   return next.handle(req)
  //     .pipe(
  //       catchError((error: HttpErrorResponse) => {
  //         // Catching Error Stage
  //         if (error && error.status === 401) {
  //           console.log('ERROR 401 UNAUTHORIZED'); // in case of an error response the error message is displayed
  //         }
  //         const err = error.error.message || error.statusText;
  //         return throwError(error); // any further errors are returned to frontend
  //       })
  //     );
  // }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token) {
      const newReq = req.clone({
        setHeaders: { 'Authorization' : `Token ${token}`},
      });
      return next.handle(newReq);
    }
    return next.handle(req);
  }
}
