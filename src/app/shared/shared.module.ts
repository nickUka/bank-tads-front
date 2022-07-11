import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumericoDirective } from './directives';
import { CpfPipePipe } from './pipes';


@NgModule({
  declarations: [
    NumericoDirective,
    CpfPipePipe
  ],
  exports: [
    NumericoDirective,
    CpfPipePipe
  ],
})
export class SharedModule { }
