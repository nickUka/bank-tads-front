import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarGerenteComponent } from './admin/editar-gerente/editar-gerente.component';
import { InserirGerenteComponent } from './admin/inserir-gerente/inserir-gerente.component';

import { ListarGerentesComponent } from './admin/listar-gerentes/listar-gerentes.component';
import { TelaInicialAdminComponent } from './admin/tela-inicial-admin/tela-inicial-admin.component';
import { LoginComponent } from './auth/login/login.component';
import { AutocadastroComponent } from './client/autocadastro/autocadastro.component';
import { ConsultarExtratoComponent } from './client/consultar-extrato/consultar-extrato.component';
import { DepositarComponent } from './client/depositar/depositar.component';
import { SacarComponent } from './client/sacar/sacar.component';
import { TelaInicialClientComponent } from './client/tela-inicial-client/tela-inicial-client.component';
import { TransferirComponent } from './client/transferir/transferir.component';
import { ConsultarCincoMelhoresComponent } from './gerente/consultar-cinco-melhores/consultar-cinco-melhores.component';
import { ConsultarClienteComponent } from './gerente/consultar-cliente/consultar-cliente.component';
import { ConsultarClientesComponent } from './gerente/consultar-clientes/consultar-clientes.component';
import { TelaInicialGerComponent as TelaInicialGerComponent } from './gerente/tela-inical-ger/tela-inical-ger.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'autocadastro',
    component: AutocadastroComponent
  },
  {
    path: 'gerente/tela-inicial',
    component: TelaInicialGerComponent
  },
  {
    path: 'gerente/consultar-clientes',
    component: ConsultarClientesComponent
  },
  {
    path: 'gerente/consultar-cliente',
    component: ConsultarClienteComponent
  },
  {
    path: 'gerente/consultar-cinco',
    component: ConsultarCincoMelhoresComponent
  },
  {
    path: 'admin/listar-gerente',
    component: ListarGerentesComponent
  },
  {
    path: 'admin/gerente/novo',
    component: InserirGerenteComponent
  },
  {
    path: 'admin/gerente/editar/:id',
    component: EditarGerenteComponent
  },
  {
    path: 'admin/tela-inicial',
    component: TelaInicialAdminComponent
  },
  {
    path: 'client/tela-inicial',
    component: TelaInicialClientComponent
  },
  {
    path: 'client/consultar-extrato',
    component: ConsultarExtratoComponent
  },
  {
    path: 'client/depositar',
    component: DepositarComponent
  },
  {
    path: 'client/sacar',
    component: SacarComponent
  },
  {
    path: 'client/transferir',
    component: TransferirComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
