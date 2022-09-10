import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { GerenteModule } from './gerente/gerente.module';
import { SharedModule } from './shared';
import { ClientModule } from './client/client.module';
import { AuthModule } from './auth/auth.module';
import { NgxMaskModule } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,   
    GerenteModule,
    SharedModule,
    ClientModule,
    AuthModule,
    NgxMaskModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
