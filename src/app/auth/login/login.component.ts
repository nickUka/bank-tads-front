import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/shared';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('formLogin') formLogin!: NgForm;

  login: Login = new Login('', '');
  message: string = '';
  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

  }

  logar(): void {
    console.log(this.login.login);
    if (this.formLogin.form.valid) {
      this.loginService.login(this.login).subscribe((user) => {
        if (user != null) {
          this.loginService.usuarioLogado = user;
          this.router.navigate(["/home"]);
        }
        else {
          this.message = "Usuário/Senha inválidos.";
        }
      });
    }
  }
}

