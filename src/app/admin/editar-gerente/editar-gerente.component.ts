import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Gerente } from 'src/app/shared';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-editar-gerente',
  templateUrl: './editar-gerente.component.html',
  styleUrls: ['./editar-gerente.component.css']
})
export class EditarGerenteComponent implements OnInit {

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  @ViewChild('formGerente') formGerente! : NgForm;
  gerente!: Gerente;
  
  constructor(private adminService: AdminService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
     // snapshot.params de ActivatedRoute dá acesso aos parâmetros passados
    // Operador + (antes do this) converte para número
    let id = +this.route.snapshot.params['id'];
    // Com o id, obtém a pessoa
    const res = this.adminService.buscarPorId(id);
    if (res !== undefined)
      this.gerente = res;
    else
      throw new Error ("Gerente não encontrado: id = " + id);
  }

  atualizar(): void {
    // Verifica se o formulário é válido
    if (this.formGerente.form.valid) {
      // Efetivamente atualiza a pessoa
      this.adminService.atualizar(this.gerente);
      // Redireciona para /pessoas/listar
      this.router.navigate(['/admin/listar-gerente']);
    }
  }

}
