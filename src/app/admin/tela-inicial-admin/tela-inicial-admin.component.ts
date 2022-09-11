import { Component, OnInit } from '@angular/core';
import { Gerente } from 'src/app/shared';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-tela-inicial-admin',
  templateUrl: './tela-inicial-admin.component.html',
  styleUrls: ['./tela-inicial-admin.component.css']
})
export class TelaInicialAdminComponent implements OnInit {

  gerentes: Gerente[] = [];
  loading: boolean = false;
  gerente!: Gerente;

  selectedGerente?: Gerente;
  
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

  selectGerente(id: number): void {    
    this.adminService.buscarPorId(+id).subscribe(
      selectedGerente => {
        this.selectedGerente = selectedGerente;
      }
    )
  }
}
