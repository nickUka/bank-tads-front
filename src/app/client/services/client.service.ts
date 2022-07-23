import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared';

const LS_CHAVE: string = "clientes";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  buscarPorId(id: number): Client | undefined{
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

}
