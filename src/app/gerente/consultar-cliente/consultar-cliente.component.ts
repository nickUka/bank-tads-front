import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Client } from 'src/app/shared';
import { ModalClienteComponent } from '../modal-cliente/modal-cliente.component';

@Component({
  selector: 'app-consultar-cliente',
  templateUrl: './consultar-cliente.component.html',
  styleUrls: ['./consultar-cliente.component.css']
})
export class ConsultarClienteComponent implements OnInit {
  public cpf: string = '';

  public clientes: Array<Client> = [
    new Client(1, 'Cliente 1', 'text', undefined, undefined, undefined, 'nickolas@email.com', '11111111111'),
    new Client(2, 'Cliente 2', 'text', undefined, undefined, undefined, 'nickolas@email.com', '11111111112'),
    new Client(3, 'Cliente 3', 'text', undefined, undefined, undefined, 'nickolas@email.com', '11111111113'),
    new Client(4, 'Cliente 4', 'text', undefined, undefined, undefined, 'nickolas@email.com', '11111111114'),
    new Client(5, 'Cliente 5', 'text', undefined, undefined, undefined, 'nickolas@email.com', '11111111115'),
    new Client(6, 'Cliente 6', 'text', undefined, undefined, undefined, 'nickolas@email.com', '11111111116'),
    new Client(7, 'Cliente 7', 'text', undefined, undefined, undefined, 'nickolas@email.com', '21111111116'),
  ];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  abrirModalConsulta(client: Client) {
    const modalRef = this.modalService.open(ModalClienteComponent);
    modalRef.componentInstance.client = client;
  }

  buscarClientePorCpf(): void {
    console.log(this.cpf);
    if (this.cpf) {
      this.clientes = this.clientes.filter((client) => {
        return client.cpf?.includes(this.cpf, this.cpf.length - 11);
      });
    }
  }
}