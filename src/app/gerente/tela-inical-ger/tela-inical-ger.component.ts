import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Client } from 'src/app/shared';
import { ModalRecusarComponent } from '../modal-recusar/modal-recusar.component';
import { GerenteService } from '../services/gerente.service';

@Component({
  selector: 'app-tela-inical-ger',
  templateUrl: './tela-inical-ger.component.html',
  styleUrls: ['./tela-inical-ger.component.css'],
})

export class TelaInicialGerComponent implements OnInit {
  clients: Client[] = [];

  constructor(private gerenteService: GerenteService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.listarTodos();
  }

  listarTodos(): void{
    this.gerenteService.getClients().subscribe((clients)=>{
      if(clients){
        this.clients = clients.clientesConta;
      }else{
        confirm('Erro');
      }
    });
  }

  reprovar(client: Client){
    if(confirm(`Recusar ${client.nome} ?`)){
      this.gerenteService.recusar(client.id)?.subscribe((res)=>{
      if(res){
        window.location.reload();
      }
    })}
  }

  aprovar(client: Client){
    if(confirm(`Aprovar ${client.nome} ?`)){
      console.log(client.id)
      this.gerenteService.aprovar(client.id)?.subscribe((res)=>{
      if(res){
        window.location.reload();
      }
    })}
  }

}
