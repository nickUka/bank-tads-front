import { Component, OnInit } from '@angular/core';
import { Client, Profile, Transaction } from 'src/app/shared';

@Component({
  selector: 'app-consultar-extrato',
  templateUrl: './consultar-extrato.component.html',
  styleUrls: ['./consultar-extrato.component.css']
})
export class ConsultarExtratoComponent implements OnInit {

  cliente: Client = new Client(1, 'Ana', 'email@email.com', Profile.Cliente, '', '123', 'email@email.com', '12312312312', '4000', '2000');
  
  public extract: Array<Transaction> = [
    new Transaction('20032022', '124512', 'depósito', '123', '123', 200),
    new Transaction('20062022', '134512', 'saque', '123', '123', 2000),
    new Transaction('28032022', '145512', 'transferência', '1234', '123', 4500),
    new Transaction('15112022', '042329', 'depósito', '123', '123', 100),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
