import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthToken, SignUpToken } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL = "http://localhost:8000"

  constructor(private client: HttpClient) { }

  login(username: string, password: string): Observable<AuthToken> {
    return this.client.post<AuthToken>(`${this.BASE_URL}/sign-in/`, { username, password });
  }

  signup(username: string, first_name: string, last_name: string, email: string, password: string): Observable<SignUpToken> {
    return this.client.post<SignUpToken>(`${this.BASE_URL}/sign-up/`, { username, first_name, last_name, email, password });
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }
}
