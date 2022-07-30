import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Login } from 'src/app/shared';
import { User } from 'src/app/shared/models/user.model';
import { Profile } from '../../shared';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public usuarioLogado?: User;

  login(login: Login): Observable<User | null> {
    if (login.login == login.password) {
      let user = new User(1, "Cliente",
        login.login, Profile.Cliente);
      if (login.login == "ADMIN") {
        user = new User(2, "Admin",
          login.login, Profile.Admin);
      }
      else if (login.login == "GERENTE") {
        user = new User(3, "Gerente",
          login.login, Profile.Gerente);
      }
      return of(user);
    }
    else {
      return of(null);
    }
  }
}
