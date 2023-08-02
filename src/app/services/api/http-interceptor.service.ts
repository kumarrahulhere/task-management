import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  baseUrl: string = 'http://localhost:3000/api/v1/';

  constructor(private router: Router, private auth: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      url: this.baseUrl + req.url,
    });
    if (this.auth.isLoggedIn()) {
      authReq.headers.set('Authorization', `Bearer ${this.auth.getToken()}`);
    }

    return next.handle(authReq).pipe(tap(() => {}, this.handleError));
  }

  handleError = (err: any) => {
    console.error(err);
    if (err instanceof HttpErrorResponse) {
      if (err.status !== 401) {
        return;
      }
      this.auth.logout();
      this.router.navigate(['login']);
    }
  };
}
