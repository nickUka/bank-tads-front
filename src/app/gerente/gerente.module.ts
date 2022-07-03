import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { ConsultarClienteComponent } from './consultar-cliente/consultar-cliente.component';
import { ConsultarClientesComponent } from './consultar-clientes/consultar-clientes.component';
import { ConsultarCincoMelhoresComponent } from './consultar-cinco-melhores/consultar-cinco-melhores.component';



@NgModule({
  declarations: [
    TelaInicialComponent,
    ConsultarClienteComponent,
    ConsultarClientesComponent,
    ConsultarCincoMelhoresComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GerenteModule { }
