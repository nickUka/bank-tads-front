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
  loading!: boolean;
  novoGerente: boolean = true;
  
  constructor(private adminService: AdminService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.gerente = new Gerente();
    this.loading = false;
     // snapshot.params de ActivatedRoute dá acesso aos parâmetros passados
    // Operador + (antes do this) converte para número
    let id = this.route.snapshot.params['id'];
    this.novoGerente = !id;
    // Com o id, obtém a pessoa
    if (!this.novoGerente){
      this.adminService.buscarPorId(+id).subscribe(
        gerente => {
          this.gerente = gerente;
        }
      )
    }
    else
      throw new Error ("Gerente não encontrado: id = " + id);
  }

  atualizar(): void {
    // Verifica se o formulário é válido
    if (this.formGerente.form.valid) {
      // Efetivamente atualiza a pessoa
      this.adminService.atualizar(this.gerente).subscribe(
        gerente => {
          this.loading = false;
          this.router.navigate(['/admin/listar-gerente']);
        }
      );
    }
    this.loading = false;
  }

}
