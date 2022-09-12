import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/auth/services/login.service';
import { Client } from 'src/app/shared';

@Injectable({
  providedIn: 'root'
})
export class GerenteService {

  BASE_URL = "http://localhost:3000/gerente/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.loginService.usuarioLogado?.token ?? ''
    })
  };

  constructor(private httpClient: HttpClient, private loginService: LoginService,) { 
    console.log(this.loginService.usuarioLogado?.token ?? '');
  }

  consultarClient(cpf: string): Observable<any> {
    return this.httpClient.get<any>(this.BASE_URL+`clientes/${cpf}`,
    this.httpOptions);
  }

  getClients(): Observable<any> {
    return this.httpClient.get<any>(this.BASE_URL+`clientes`,
    this.httpOptions);
  }

  getFiveBest(): Observable<any> {
    return this.httpClient.get<any>(this.BASE_URL+`top`,
    this.httpOptions);
  }

  aprovar(id?: number): Observable<any> | void {
      
      console.log(id);
      console.log(this.loginService.usuarioLogado?.token ?? '');

      return this.httpClient.put<any>(this.BASE_URL+`aprova/${id}`,
    this.httpOptions);
  }

  recusar(id?: number): Observable<any> | void {
   if(id){ return this.httpClient.put<any>(this.BASE_URL+`reprova/${id}`,
    this.httpOptions);}
  } 
}
