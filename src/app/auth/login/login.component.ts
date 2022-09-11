import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/shared';
import Usuario from 'src/app/shared/models/usuario.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('formLogin') formLogin!: NgForm;
  login: Login = new Login();
  loading: boolean = false;
  message!: string;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute,) { 
      if(this.loginService.usuarioLogado){
        if(this.loginService.usuarioLogado.perfil === 'cliente'){
          this.router.navigate(["/client/tela-inicial"]);
        }if(this.loginService.usuarioLogado.perfil === 'gerente'){
          this.router.navigate(["/gerente/tela-inicial"]);
        }if(this.loginService.usuarioLogado.perfil === 'admin'){
          this.router.navigate(["/admin/tela-inicial"]);
        }
      }
    }

  ngOnInit(): void { 
    this.route.queryParams
      .subscribe(params => {
        this.message = params['error'];
      });
  }

  logar(): void {
    this.loading = true;
    if (this.formLogin.form.valid) {
      this.loginService.login(this.login).subscribe((user) => {
        if (user) {
          this.loginService.usuarioLogado = user;
          this.loading = false;
          const loggedUser: Usuario = this.loginService.usuarioLogado;

          if(loggedUser.perfil === 'cliente'){
            this.router.navigate(["/client/tela-inicial"]);
          }if(loggedUser.perfil === 'gerente'){
            this.router.navigate(["/gerente/tela-inicial"]);
          }if(loggedUser.perfil === 'admin'){
            this.router.navigate(["/admin/tela-inicial"]);
          }
        }
        else {
          this.message = "Usuário/Senha inválidos.";
        }
      });
    }
    this.loading = false;
  }
}

