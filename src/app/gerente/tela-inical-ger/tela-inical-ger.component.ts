import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Client } from 'src/app/shared/models/client.model';
import { ModalRecusarComponent } from '../modal-recusar/modal-recusar.component';
import { GerenteService } from '../services/gerente.service';

@Component({
  selector: 'app-tela-inical-ger',
  templateUrl: './tela-inical-ger.component.html',
  styleUrls: ['./tela-inical-ger.component.css']
})
export class TelaInicalGerComponent implements OnInit {
  clients: Client[] = [];

  constructor(private gerenteService: GerenteService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.clients = this.listarTodos();
  }

  listarTodos(): Client[] {
    return[
      new Client("ana", "email", "123", '10.000')
    ]
  }


  abrirModalRecusar(client: Client){
    const modalRef = this.modalService.open(ModalRecusarComponent);
    modalRef.componentInstance.client = client;
  }

}
