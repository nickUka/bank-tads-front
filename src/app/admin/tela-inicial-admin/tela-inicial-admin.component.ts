import { Component, OnInit } from '@angular/core';
import { Gerente } from 'src/app/shared';

@Component({
  selector: 'app-tela-inicial-admin',
  templateUrl: './tela-inicial-admin.component.html',
  styleUrls: ['./tela-inicial-admin.component.css']
})
export class TelaInicialAdminComponent implements OnInit {

  public gerentes: Array<Gerente> = [
    new Gerente(1, 'Nickolas '),
    new Gerente(2, 'Nickolas 2'),
    new Gerente(3, 'Nickolas 3'),
    new Gerente(4, 'Nickolas 4'),
  ];

  public selectedGerente?: Gerente;
  constructor() { }

  ngOnInit(): void {
  }

  selectGerente(id: number): void {    
    this.selectedGerente = this.gerentes.find(gerente => gerente.id === id);
  }
}
