import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  private loggedIn: boolean = false;
  isLoggedIn(): boolean {
    return this.loggedIn;
  }
  login(): void {
    this.loggedIn = true;
  }
  logout(): void {
    this.isLoggedIn = false;
  }
}
