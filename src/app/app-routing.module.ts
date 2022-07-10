import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarGerenteComponent } from './admin/editar-gerente/editar-gerente.component';
import { InserirGerenteComponent } from './admin/inserir-gerente/inserir-gerente.component';

import { ListarGerentesComponent } from './admin/listar-gerentes/listar-gerentes.component';
import { ConsultarCincoMelhoresComponent } from './gerente/consultar-cinco-melhores/consultar-cinco-melhores.component';
import { ConsultarClienteComponent } from './gerente/consultar-cliente/consultar-cliente.component';
import { ConsultarClientesComponent } from './gerente/consultar-clientes/consultar-clientes.component';
import { TelaInicalGerComponent } from './gerente/tela-inical-ger/tela-inical-ger.component';

const routes: Routes = [
  {
    path: 'gerente/tela-inicial',
    component: TelaInicalGerComponent},
  {
    path: 'gerente/consultar-clientes',
    component: ConsultarClientesComponent},
  {
    path: 'gerente/consultar-cliente',
    component: ConsultarClienteComponent},
  {
    path: 'gerente/consultar-cinco',
    component: ConsultarCincoMelhoresComponent},
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
