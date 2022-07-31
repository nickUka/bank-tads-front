import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaInicialGerComponent } from './tela-inical-ger/tela-inical-ger.component';
import { ConsultarClienteComponent } from './consultar-cliente/consultar-cliente.component';
import { ConsultarCincoMelhoresComponent } from './consultar-cinco-melhores/consultar-cinco-melhores.component';
import { ModalRecusarComponent } from './modal-recusar/modal-recusar.component';
import { SharedModule } from '../shared';
import { ModalClienteComponent } from './modal-cliente/modal-cliente.component';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    TelaInicialGerComponent,
    ConsultarClienteComponent,
    ConsultarCincoMelhoresComponent,
    ModalRecusarComponent,
    ModalClienteComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    NgbModule,
    NgxMaskModule.forRoot()
  ]
})
export class GerenteModule { }
