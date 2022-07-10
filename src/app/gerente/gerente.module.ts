import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaInicalGerComponent } from './tela-inical-ger/tela-inical-ger.component';
import { ConsultarClienteComponent } from './consultar-cliente/consultar-cliente.component';
import { ConsultarClientesComponent } from './consultar-clientes/consultar-clientes.component';
import { ConsultarCincoMelhoresComponent } from './consultar-cinco-melhores/consultar-cinco-melhores.component';
import { ModalRecusarComponent } from './modal-recusar/modal-recusar.component';

@NgModule({
  declarations: [
    TelaInicalGerComponent,
    ConsultarClienteComponent,
    ConsultarClientesComponent,
    ConsultarCincoMelhoresComponent,
    ModalRecusarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GerenteModule { }
