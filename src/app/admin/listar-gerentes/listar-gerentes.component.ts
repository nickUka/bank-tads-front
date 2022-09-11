import { Component, OnInit } from '@angular/core';
import { Gerente } from 'src/app/shared/models/gerente.model';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-listar-gerentes',
  templateUrl: './listar-gerentes.component.html',
  styleUrls: ['./listar-gerentes.component.css']
})
export class ListarGerentesComponent implements OnInit {

  gerentes: Gerente[] = [];
  loading: boolean = false;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.gerentes = [];
    this.listarTodos();
  }

  listarTodos(): Gerente[] {
    this.adminService.listarGerentes().subscribe({
      next: (data: Gerente[]) => {
        if (data == null) {
          this.gerentes = [];
        }
        else {
          this.gerentes = data;
        }
      }
    });
    return this.gerentes;
    }

  remover($event: any, gerente: Gerente): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover o gerente ${gerente.nome}?`)) {
      this.adminService.remover(gerente.id!).subscribe({
          complete: () => { this.listarTodos(); }
        });
    }
  }

}
