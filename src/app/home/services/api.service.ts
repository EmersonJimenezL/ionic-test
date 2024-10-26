import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url: string = 'https://jsonplaceholder.typicode.com/posts/';
  constructor(private http: HttpClient) {}

  getData() {
    // realizamos la solicitud a la api
    return this.http.get(this.url);
  }
}
