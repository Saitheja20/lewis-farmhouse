import { HttpClient } from '@angular/common/http';
import {Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Credentials {
  email: string;
  password: string;
}

interface RegisterData {
  username: string;
  email: string;
  password: string;
}

@Injectable({ providedIn: 'root' })

export class AuthService {
  private apiUrl = 'http://localhost/Api';

  constructor(private http: HttpClient) {}

  login(credentials: Credentials): Observable<any> {
    return this.http.post(`${this.apiUrl}/login.php`, credentials);
  }

  register(data: RegisterData): Observable<any> {
    console.log("it's came to register function"+JSON.stringify(data));
    return this.http.post(`${this.apiUrl}/register.php`, data);
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
