import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import { DepositarComponent } from './depositar/depositar.component';
import { TransferirComponent } from './transferir/transferir.component';
import { SacarComponent } from './sacar/sacar.component';
import { ConsultarSaldoComponent } from './consultar-saldo/consultar-saldo.component';
import { ConsultarExtratoComponent } from './consultar-extrato/consultar-extrato.component';
import { TelaInicialClientComponent } from './tela-inicial-client/tela-inicial-client.component';
import { ClientService } from './services/client.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    AutocadastroComponent,
    DepositarComponent,
    TransferirComponent,
    SacarComponent,
    ConsultarSaldoComponent,
    ConsultarExtratoComponent,
    TelaInicialClientComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    NgbModule,
    NgxMaskModule.forRoot()
  ],
  providers:[
    ClientService
  ]
})
export class ClientModule { }
