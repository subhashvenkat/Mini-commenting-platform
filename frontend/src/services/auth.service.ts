import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(username: string, password: string) {
    localStorage.setItem('token', btoa(`${username}:${password}`));
  }
}
