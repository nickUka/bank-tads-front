import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginClientComponent } from './login-client/login-client.component';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { DepositarComponent } from './depositar/depositar.component';
import { TransferirComponent } from './transferir/transferir.component';
import { SacarComponent } from './sacar/sacar.component';
import { ConsultarSaldoComponent } from './consultar-saldo/consultar-saldo.component';
import { ConsultarExtratoComponent } from './consultar-extrato/consultar-extrato.component';



@NgModule({
  declarations: [
    LoginClientComponent,
    AutocadastroComponent,
    TelaInicialComponent,
    DepositarComponent,
    TransferirComponent,
    SacarComponent,
    ConsultarSaldoComponent,
    ConsultarExtratoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClientModule { }
