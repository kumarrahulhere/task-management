import { Injectable } from '@angular/core';
import { HttpService } from './http-service.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthHttpService {
  constructor(private httpService: HttpService) {}

  login(data: any): any {
    return this.httpService.post<any>('auth/login', data);
  }

  register(data: any) {
    return this.httpService.post<any>('auth/register', data);
  }

  verifyMail(token: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.httpService.get<any>('auth/verify-email', headers);
  }
}
