import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @Output() loggedIn: EventEmitter<void> = new EventEmitter<void>();

  username: string = '';
  password: string = '';
  constructor(private router: Router) {}
  Login() {
    this.loggedIn.emit();
    //this.router.navigate(['/authfailed']);
  }
}
