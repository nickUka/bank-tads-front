import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { ListarGerentesComponent } from './listar-gerentes/listar-gerentes.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AdminService } from './services/admin.service';
import { InserirGerenteComponent } from './inserir-gerente/inserir-gerente.component';
import { EditarGerenteComponent } from './editar-gerente/editar-gerente.component';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [
    TelaInicialComponent,
    ListarGerentesComponent,
    InserirGerenteComponent,
    EditarGerenteComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule
  ],
  providers:[
    AdminService
  ]
})
export class AdminModule { }
