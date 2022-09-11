import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/shared';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-autocadastro',
  templateUrl: './autocadastro.component.html',
  styleUrls: ['./autocadastro.component.css']
})
export class AutocadastroComponent implements OnInit {
  @ViewChild('formCadastro') formCadastro!: NgForm;

  cliente: Client = new Client();
  loading!: boolean;

  constructor(
    private clientService: ClientService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.cliente = new Client();
    this.loading = false;
  }
  
  cadastrar(): void {
    this.loading = true;
    if(this.formCadastro.form.valid){
      this.clientService.cadastrar(this.cliente).subscribe(
        cliente => {
          this.loading = false;
          this.router.navigate(['/login']);
        }
      );
    }
    this.loading = false;
  }
}
