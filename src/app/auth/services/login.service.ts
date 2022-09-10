import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Client, Login, User, Gerente, Admin } from 'src/app/shared';
import { Profile } from '../../shared';

const LS_CHAVE: string = "usuarioLogado";

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  public get usuarioLogado(): User {
    let usu = localStorage[LS_CHAVE];
    return (usu ? JSON.parse(localStorage[LS_CHAVE]) : null);
  }

  public set usuarioLogado(usuario: User) {
    localStorage[LS_CHAVE] = JSON.stringify(usuario);
  }

  logout() {
    delete localStorage[LS_CHAVE];
  }

  login(login: Login): Observable<User | null> {
    let usu = new Client(1, "Cliente", login.login, Profile.Cliente, login.password);

    if (login.login == login.password) {
      if (login.login == "admin") {
        usu = new Admin(1, "Admin", login.login, Profile.Admin, login.password);
      }
      else if (login.login == "gerente") {
        usu = new Gerente(1, "Gerente", login.login, Profile.Gerente, login.password);
      }
      return of(usu);
    }
    else {
      return of(null);
    }
  }
}
