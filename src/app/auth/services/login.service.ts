import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Client, Login, User, Gerente, Admin } from 'src/app/shared';
import { Profile } from '../../shared';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public usuarioLogado?: User;

  login(login: Login): Observable<User | null> {
    if (login.login == login.password) {
      let user = new Client(1, "Cliente",
        login.login, Profile.Cliente);
      if (login.login == "ADMIN") {
        user = new Admin(2, "Admin",
          login.login, Profile.Admin);
      }
      else if (login.login == "GERENTE") {
        user = new Gerente(3, "Gerente",
          login.login, Profile.Gerente);
      }
      return of(user);
    }
    else {
      return of(null);
    }
  }
}
