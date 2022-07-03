import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { ListarGerentesComponent } from './listar-gerentes/listar-gerentes.component';



@NgModule({
  declarations: [
    TelaInicialComponent,
    ListarGerentesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
