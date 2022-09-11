import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/auth/services/login.service';

import { Gerente } from 'src/app/shared/models/gerente.model';

const LS_CHAVE: string = "gerentes";
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  BASE_URL = "http://localhost:3000/admin/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.loginService.usuarioLogado.token
    })
  };

  constructor(private httpClient: HttpClient, private loginService: LoginService) { }

  listarTodos(): Gerente[] {
    const gerentes = localStorage[LS_CHAVE];
    //condicional pois retorna  undefined se a chave não existe
    return gerentes ? JSON.parse(gerentes) : [];
  }

  listarGerentes(): Observable<Gerente[]> {
    return this.httpClient.get<Gerente[]>(this.BASE_URL +`gerentes/${this.loginService.usuarioLogado.id}`,
    this.httpOptions);
  }

  inserir(gerente: Gerente): Observable<Gerente> {
    return this.httpClient.post<Gerente>(this.BASE_URL+'gerentes/',
    gerente, 
    this.httpOptions);
  }

  buscarPorId(id: number): Observable<Gerente> {
    return this.httpClient.get<Gerente>(this.BASE_URL + `gerentes/${this.loginService.usuarioLogado.id}` +id, 
    this.httpOptions);
  }

  atualizar(gerente: Gerente): Observable<Gerente> {
    return this.httpClient.put<Gerente>(this.BASE_URL + `gerentes/` +gerente.id, 
    gerente, 
    this.httpOptions);
  }

  remover(id: number): Observable<Gerente> {
  return this.httpClient.delete<Gerente>(this.BASE_URL +  `gerentes/${id}`,
    this.httpOptions);
  }
}
