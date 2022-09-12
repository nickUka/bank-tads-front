import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Client } from 'src/app/shared';
import { ModalClienteComponent } from '../modal-cliente/modal-cliente.component';
import { GerenteService } from '../services/gerente.service';

@Component({
  selector: 'app-consultar-cliente',
  templateUrl: './consultar-cliente.component.html',
  styleUrls: ['./consultar-cliente.component.css']
})
export class ConsultarClienteComponent implements OnInit {
  public cpf: string = '';

  public clientes: Array<Client> = [];

  constructor(private modalService: NgbModal, private gerenteService: GerenteService) { }

  ngOnInit(): void {
    this.listarTodos();
  }

  abrirModalConsulta(client: Client) {
    const modalRef = this.modalService.open(ModalClienteComponent);
    modalRef.componentInstance.client = client;
  }

  abrirModal(cpf: string) {
    this.gerenteService.consultarClient(cpf).subscribe((res)=>{
      if(res){
        this.abrirModalConsulta(res);
      }else{
        confirm('Erro');
      }
    });
  }

  buscarClientePorCpf(): void {
    console.log(this.cpf);
      this.gerenteService.consultarClient(this.cpf).subscribe((res)=>{
        if(res){
          this.abrirModalConsulta(res);
        }else{
          confirm('Erro');
        }
      });
  }

  listarTodos(): void{
    this.gerenteService.getClients().subscribe((clients)=>{
      if(clients){
        console.log('teste');
        this.clientes = clients.clientesConta;
      }else{
        confirm('Erro');
      }
    });
  }
}