import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;
  apiUrl='https://sheet.best/api/sheets/3b61130b-a98c-4785-afe5-e139a78fb53e'
  httpOptions= {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getUsers():Observable<User[]> {
   return this.httpClient.get<User[]>(this.apiUrl)
  }
  postUser(user:User):Observable<User>{
    return this.httpClient.post<User>(this.apiUrl, user, this.httpOptions)
  }
  deleteUser(id: number): Observable<User>{
    return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`)
  }
  updateUser(id: string, user: User): Observable<User>{
    return this.httpClient.put<User>(`${this.apiUrl}/id/${id}`, user, this.httpOptions);
  }
  getUser(id: string): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.apiUrl}/id/${id}`)

  }
}
