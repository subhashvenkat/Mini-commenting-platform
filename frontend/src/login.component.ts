import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <form (ngSubmit)="login()">
      <label for="username">Username:</label>
      <input id="username" [(ngModel)]="username" name="username" required>
      <label for="password">Password:</label>
      <input id="password" [(ngModel)]="password" name="password" type="password" required>
      <button type="submit">Login</button>
    </form>
  `
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.username, this.password);
  }
}
