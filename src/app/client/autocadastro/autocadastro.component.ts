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

  public cliente: Client = new Client();
  constructor(
    private clientService: ClientService,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }
  
  cadastrar(): void {
    this.router.navigate([''])
  }
}
