import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Gerente } from 'src/app/shared/models/gerente.model';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-inserir-gerente',
  templateUrl: './inserir-gerente.component.html',
  styleUrls: ['./inserir-gerente.component.css']
})
export class InserirGerenteComponent implements OnInit {

  @ViewChild('formGerente') formGerente! : NgForm;
  gerente!: Gerente;

  constructor(private adminService: AdminService,
    private router: Router) { }

  ngOnInit(): void {
    this.gerente = new Gerente();
  }

  inserir(): void{
    if (this.formGerente.form.valid) {
      //chama o inserir do Service, this.pessoa está preenchida (binding)
      this.adminService.inserir(this.gerente);
      this.router.navigate( ["/admin/listar-gerente"] );
    }
  }

}
