import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LoginService } from 'src/app/auth/services/login.service';
import { Client, Transaction } from 'src/app/shared';

const LS_CHAVE: string = "clientes";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  BASE_URL = "http://localhost:3000/cliente";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.loginService.usuarioLogado?.token ?? ''
    })
  };

  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService,
    ) { }

  buscarPorId(id: number): Client | undefined {
    //obtém a lista
    const clientes: Client[] = this.listarTodos();

    //efetua a busca
    //find(): retorna o primeiro elemento da lista que satisfaz a condição, se não, retorna undefined
    return clientes.find(cliente => cliente.id === id);
  }

  listarTodos(): Client[] {
    const clientes = localStorage[LS_CHAVE];
    //condicional pois retorna  undefined se a chave não existe
    return clientes ? JSON.parse(clientes) : [];
  }

  getSaldo(): Observable<SaldoResponse>{
      return this.httpClient.get<SaldoResponse>(
        this.BASE_URL + `/saldo/${this.loginService.usuarioLogado.id}`,
        this.httpOptions);
  }

  depositar(valor: number): Observable<SaldoResponse> | null {
    return this.httpClient.put<SaldoResponse>(
      this.BASE_URL + `/depositar/${this.loginService.usuarioLogado.id}`,
      {valor},
      this.httpOptions);
  }

  sacar(valor: number): Observable<SaldoResponse> | null {
    return this.httpClient.put<SaldoResponse>(
      this.BASE_URL + `/sacar/${this.loginService.usuarioLogado.id}`,
      {valor},
      this.httpOptions);
  }

  getExtrato(): Observable<Array<Transaction>> {
    return this.httpClient.get<Array<Transaction>>(
      this.BASE_URL + `/extrato/${this.loginService.usuarioLogado.id}`,
      this.httpOptions);
  }

  transferir(valor: number, id: number): Observable<any> | null {
    return this.httpClient.put<any>(
      this.BASE_URL + `/transferir/${this.loginService.usuarioLogado.id}/${id}`,
      {valor},
      this.httpOptions);
  }

  cadastrar(cliente: Client): Observable<Client>{
    return this.httpClient.post<Client>(this.BASE_URL + `/autocadastro`, 
      JSON.stringify(cliente),
      this.httpOptions);
  }

}

export default interface SaldoResponse {
  saldo: number;
  limite: number;
}