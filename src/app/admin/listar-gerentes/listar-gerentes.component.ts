import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Gerente } from 'src/app/shared';

@Component({
  selector: 'app-listar-gerentes',
  templateUrl: './listar-gerentes.component.html',
  styleUrls: ['./listar-gerentes.component.css']
})
export class ListarGerentesComponent implements OnInit {

  gerentes: Gerente[] = [];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.gerentes = this.listarTodos();
  }

  listarTodos(): Gerente[] {
    return this.adminService.listarTodos();
  }

  remover($event: any, gerente: Gerente): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover a pessoa ${gerente.nome}?`)) {
      this.adminService.remover(gerente.id!);
      this.gerentes = this.listarTodos();
    }
  }

}
