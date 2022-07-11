import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Client } from 'src/app/shared/models/client.model';
import { ModalRecusarComponent } from '../modal-recusar/modal-recusar.component';
import { GerenteService } from '../services/gerente.service';

@Component({
  selector: 'app-tela-inical-ger',
  templateUrl: './tela-inical-ger.component.html',
  styleUrls: ['./tela-inical-ger.component.css'],
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
      new Client("ana", "email", "12312312330", '10000'),
      new Client("nick", "email", "12312312330", '7000')
    ]
  }


  abrirModalRecusar(client: Client){
    const modalRef = this.modalService.open(ModalRecusarComponent);
    modalRef.componentInstance.client = client;
  }

}
