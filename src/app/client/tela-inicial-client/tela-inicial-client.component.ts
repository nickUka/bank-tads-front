import { Component, OnInit } from '@angular/core';
import { Client, Profile } from 'src/app/shared';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-tela-inicial-client',
  templateUrl: './tela-inicial-client.component.html',
  styleUrls: ['./tela-inicial-client.component.css']
})
export class TelaInicialClientComponent implements OnInit {

  clientes: Client[] = [];

  cliente: Client = new Client(1, 'Ana', 'email@email.com', Profile.Cliente, '', 'email@email.com', '12312312312', '2000');


  public nome: string = "";
  public salario: string = "";

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.nome = this.cliente.nome!;
    this.salario = this.cliente.salario!;
  }

}
