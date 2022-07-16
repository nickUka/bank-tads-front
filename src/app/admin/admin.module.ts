import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaInicialAdminComponent } from './tela-inicial-admin/tela-inicial-admin.component';
import { ListarGerentesComponent } from './listar-gerentes/listar-gerentes.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AdminService } from './services/admin.service';
import { InserirGerenteComponent } from './inserir-gerente/inserir-gerente.component';
import { EditarGerenteComponent } from './editar-gerente/editar-gerente.component';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [
    TelaInicialAdminComponent,
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
