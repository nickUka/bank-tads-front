import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Client } from 'src/app/shared';
import { ModalClienteComponent } from '../modal-cliente/modal-cliente.component';

@Component({
  selector: 'app-consultar-cinco-melhores',
  templateUrl: './consultar-cinco-melhores.component.html',
  styleUrls: ['./consultar-cinco-melhores.component.css']
})
export class ConsultarCincoMelhoresComponent implements OnInit {

  public clientes: Array<Client> = [
    new Client(1, 'Cliente 1', 'text', undefined, undefined, undefined, 'nickolas@email.com', '11111111111'),
    new Client(2, 'Cliente 2', 'text', undefined, undefined, undefined, 'nickolas@email.com', '11111111112'),
    new Client(3, 'Cliente 3', 'text', undefined, undefined, undefined, 'nickolas@email.com', '11111111113'),
    new Client(4, 'Cliente 4', 'text', undefined, undefined, undefined, 'nickolas@email.com', '11111111114'),
    new Client(5, 'Cliente 5', 'text', undefined, undefined, undefined, 'nickolas@email.com', '11111111115'),
  ];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  abrirModalConsulta(client: Client) {
    const modalRef = this.modalService.open(ModalClienteComponent);
    modalRef.componentInstance.client = client;
  }
}
