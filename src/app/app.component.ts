import { Component, OnInit } from '@angular/core';
import { TokenVerifyService } from './shared/services/token-verify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app-test-material-theme';

  IsNavShow = false;

  constructor(private token: TokenVerifyService) {}
  ngOnInit(): void {
    if (this.token.hasToken()) {
      this.IsNavShow = true;
      console.log('login done!');
    } else {
      this.IsNavShow = false;
    }
  }
  onLoggedIn(): void {
    this.IsNavShow = true;
  }
}
