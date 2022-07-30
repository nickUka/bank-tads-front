import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/shared';

@Component({
  selector: 'app-consultar-extrato',
  templateUrl: './consultar-extrato.component.html',
  styleUrls: ['./consultar-extrato.component.css']
})
export class ConsultarExtratoComponent implements OnInit {
  
  public extract: Array<Transaction> = [
    new Transaction('20032022', 200),
    new Transaction('24042022', -400),
    new Transaction('12062022', 500),
    new Transaction('21072022', 200),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
