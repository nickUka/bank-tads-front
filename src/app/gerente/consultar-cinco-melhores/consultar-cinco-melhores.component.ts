import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Client } from 'src/app/shared';
import { ModalClienteComponent } from '../modal-cliente/modal-cliente.component';
import { GerenteService } from '../services/gerente.service';

@Component({
  selector: 'app-consultar-cinco-melhores',
  templateUrl: './consultar-cinco-melhores.component.html',
  styleUrls: ['./consultar-cinco-melhores.component.css']
})
export class ConsultarCincoMelhoresComponent implements OnInit {

  public clientes: Array<Client> = [ ];

  constructor(private modalService: NgbModal, private gerenteService: GerenteService) { }

  ngOnInit(): void {
    this.listarTodos();
  }

  abrirModalConsulta(cpf: string) {
        this.gerenteService.consultarClient(cpf).subscribe((res)=>{
          if(res){
            const modalRef = this.modalService.open(ModalClienteComponent);
    modalRef.componentInstance.client = res;
          }else{
            confirm('Erro');
          }
        });
  }

  listarTodos(): void{
    this.gerenteService.getFiveBest().subscribe((res)=>{
      if(res){
        this.clientes = res.contasTop;
      }else{
        confirm('Erro');
      }
    });
  }
}
