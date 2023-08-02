import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public get<T>(url: string, headers: any = {}): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.http.get<T>(url, { headers }).subscribe(
        (response) => resolve(response),
        (error) => reject(error)
      );
    });
  }

  public post<T>(url: string, data: any, headers: any = {}): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.http.post<T>(url, data, { headers }).subscribe(
        (response) => resolve(response),
        (error) => reject(error)
      );
    });
  }

  public put<T>(url: string, data: any, headers: any = {}): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.http.put<T>(url, data, { headers }).subscribe(
        (response) => resolve(response),
        (error) => reject(error)
      );
    });
  }

  public delete<T>(url: string, headers: any = {}): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.http.delete<T>(url, { headers }).subscribe(
        (response) => resolve(response),
        (error) => reject(error)
      );
    });
  }
}
