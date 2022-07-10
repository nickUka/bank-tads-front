import { Injectable } from '@angular/core';

import { Gerente } from 'src/app/shared/models/gerente.model';

const LS_CHAVE: string = "gerentes";
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  listarTodos(): Gerente[] {
    const gerentes = localStorage[LS_CHAVE];
    //condicional pois retorna  undefined se a chave não existe
    return gerentes ? JSON.parse(gerentes) : [];
  }

  inserir(gerente: Gerente): void{
    //obtém a lista
    const gerentes = this.listarTodos();

    //seta o id baseado na data
    gerente.id = new Date().getTime();

    //add no fim da lista
    gerentes.push(gerente);
    
    //armazena no local storage
    localStorage[LS_CHAVE] = JSON.stringify(gerentes);
  }

  buscarPorId(id: number): Gerente | undefined{
    //obtém a lista
    const gerentes: Gerente[] = this.listarTodos();

    //efetua a busca
    //find(): retorna o primeiro elemento da lista que satisfaz a condição, se não, retorna undefined
    return gerentes.find(gerente => gerente.id === id);
  }

  atualizar(gerente: Gerente): void{
    //obtém a lista
    const gerentes: Gerente[] = this.listarTodos();

    //varre a lista
    //quando encontra alguém com o mesmo id atualiza
    gerentes.forEach( (obj, index, objs) => {
      if(gerente.id === obj.id){
        objs[index] = gerente
      }
    });

    //armazena no local storage
    localStorage[LS_CHAVE] = JSON.stringify(gerentes);
  }

  remover(id: number): void{
    //obtém a lista
    //let deixa alterar
    let gerentes: Gerente[] = this.listarTodos();

    //retorna a lista, com todos os objetos que satisfazem a condição (todos menos o id a remover)
    gerentes = gerentes.filter(gerente => gerente.id !== id);

    //atualiza a lista de pessoas
    localStorage[LS_CHAVE] = JSON.stringify(gerentes);
  }
}
