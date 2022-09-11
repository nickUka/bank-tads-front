import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarGerenteComponent } from './admin/editar-gerente/editar-gerente.component';
import { InserirGerenteComponent } from './admin/inserir-gerente/inserir-gerente.component';

import { ListarGerentesComponent } from './admin/listar-gerentes/listar-gerentes.component';
import { TelaInicialAdminComponent } from './admin/tela-inicial-admin/tela-inicial-admin.component';
import { LoginRoutes } from './auth/auth-routing.module';
import { AuthGuard } from './auth/auth.guard';
import { AutocadastroComponent } from './client/autocadastro/autocadastro.component';
import { ConsultarExtratoComponent } from './client/consultar-extrato/consultar-extrato.component';
import { DepositarComponent } from './client/depositar/depositar.component';
import { SacarComponent } from './client/sacar/sacar.component';
import { TelaInicialClientComponent } from './client/tela-inicial-client/tela-inicial-client.component';
import { TransferirComponent } from './client/transferir/transferir.component';
import { ConsultarCincoMelhoresComponent } from './gerente/consultar-cinco-melhores/consultar-cinco-melhores.component';
import { ConsultarClienteComponent } from './gerente/consultar-cliente/consultar-cliente.component';
import { TelaInicialGerComponent} from './gerente/tela-inical-ger/tela-inical-ger.component';
import { Profile } from './shared';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'autocadastro',
    component: AutocadastroComponent
  },
  {
    path: 'gerente/tela-inicial',
    component: TelaInicialGerComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'gerente'
    }
  },
  {
    path: 'gerente/consultar-cliente',
    component: ConsultarClienteComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'gerente'
    }
  },
  {
    path: 'gerente/consultar-cinco',
    component: ConsultarCincoMelhoresComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'gerente'
    }
  },
  {
    path: 'admin/listar-gerente',
    component: ListarGerentesComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'admin'
    }
  },
  {
    path: 'admin/gerente/novo',
    component: InserirGerenteComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'admin'
    }
  },
  {
    path: 'admin/gerente/editar/:id',
    component: EditarGerenteComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'admin'
    }
  },
  {
    path: 'admin/tela-inicial',
    component: TelaInicialAdminComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'admin'
    }
  },
  {
    path: 'client/tela-inicial',
    component: TelaInicialClientComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'cliente'
    }
  },
  {
    path: 'client/consultar-extrato',
    component: ConsultarExtratoComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'cliente'
    }
  },
  {
    path: 'client/depositar',
    component: DepositarComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'cliente'
    }
  },
  {
    path: 'client/sacar',
    component: SacarComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'cliente'
    }
  },
  {
    path: 'client/transferir',
    component: TransferirComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'cliente'
    }
  },
  ...LoginRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
