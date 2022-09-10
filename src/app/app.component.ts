import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './auth/services/login.service';
import { User } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bank Tads';

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }
    
  get usuarioLogado(): User | null {
    return this.loginService.usuarioLogado;
  }
    
  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
