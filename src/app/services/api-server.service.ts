import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../home/response';

@Injectable({
  providedIn: 'root'
})
export class ApiServerService {

  private apiUrl = 'http://localhost:8080/questions'; 

  constructor(private http: HttpClient) { }

  getResult(body: string): Observable<Response> {
    return this.http.post<Response>(`${this.apiUrl}/send`, body, {headers:{ 'Content-Type': 'application/json'}});
  }
}
