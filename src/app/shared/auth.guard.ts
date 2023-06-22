import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenVerifyService } from './services/token-verify.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private token: TokenVerifyService) {}

  canActivate(): boolean {
    // Check if token is available (you can modify this logic based on your actual token verification)
    const token = this.token.hasToken(); //localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      this.router.navigate(['/authfailed']);
      localStorage.setItem('login', 'falied');
      return false;
    }
  }
}
