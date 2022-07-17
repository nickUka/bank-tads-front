import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Client } from 'src/app/shared';

@Component({
  selector: 'app-modal-cliente',
  templateUrl: './modal-cliente.component.html',
  styleUrls: ['./modal-cliente.component.css']
})
export class ModalClienteComponent implements OnInit {
  @Input() client!: Client;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
