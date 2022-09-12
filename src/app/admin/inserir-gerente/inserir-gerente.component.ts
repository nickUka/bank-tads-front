import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Gerente } from 'src/app/shared/models/gerente.model';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-inserir-gerente',
  templateUrl: './inserir-gerente.component.html',
  styleUrls: ['./inserir-gerente.component.css']
})
export class InserirGerenteComponent implements OnInit {

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  @ViewChild('formGerente') formGerente! : NgForm;
  gerente: Gerente = new Gerente();
  loading!: boolean;

  constructor(private adminService: AdminService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.gerente = new Gerente();
    this.loading = false;
  }

  inserir(): void{
    this.loading = true;
    if (this.formGerente.form.valid) {
      this.gerente.login = this.gerente.email;
      this.gerente.senha = this.gerente.email;

      this.adminService.inserir(this.gerente).subscribe(
        (gerente) => {
          this.loading = false;
          this.router.navigate( ["/admin/listar-gerente"] );
        }
      )
    }
    this.loading = false;
  }

}
