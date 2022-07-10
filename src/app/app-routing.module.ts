import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarGerenteComponent } from './admin/editar-gerente/editar-gerente.component';
import { InserirGerenteComponent } from './admin/inserir-gerente/inserir-gerente.component';

import { ListarGerentesComponent } from './admin/listar-gerentes/listar-gerentes.component';

const routes: Routes = [
  {
    path: 'admin/listar-gerente',
    component: ListarGerentesComponent},
  {
    path: 'admin/gerente/novo',
    component: InserirGerenteComponent},
  { path: 'admin/gerente/editar/:id',
    component: EditarGerenteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
