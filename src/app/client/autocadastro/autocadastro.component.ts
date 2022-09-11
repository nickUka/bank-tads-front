import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Client, Endereco } from 'src/app/shared';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-autocadastro',
  templateUrl: './autocadastro.component.html',
  styleUrls: ['./autocadastro.component.css']
})
export class AutocadastroComponent implements OnInit {
  @ViewChild('formCadastro') formCadastro!: NgForm;

  cliente: Client = new Client();
  novoCliente: Client = new Client();
  loading!: boolean;

  constructor(
    private clientService: ClientService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.cliente = new Client();
    this.novoCliente = new Client();
    this.loading = false;
  }
  
  cadastrar(): void {
    this.loading = true;
    if(this.formCadastro.form.valid){
      this.novoCliente.login = this.cliente.login;
      this.novoCliente.password = this.cliente.password;
      this.novoCliente.nome = this.cliente.nome;
      this.novoCliente.email = this.cliente.email;
      this.novoCliente.cpf = this.cliente.cpf;
      this.novoCliente.salario = this.cliente.salario;
      let endereco: Endereco = new Endereco(this.cliente.rua, this.cliente.logradouro, this.cliente.numero,
        this.cliente.complemento, this.cliente.cep, this.cliente.cidade, this.cliente.estado);
      this.novoCliente.endereco = endereco;
      this.clientService.cadastrar(this.novoCliente).subscribe(
        novoCliente => {
          this.loading = false;
          this.router.navigate(['/login']);
        }
      );
    }
    this.loading = false;
  }
}
