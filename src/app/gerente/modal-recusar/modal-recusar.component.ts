import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Client } from 'src/app/shared/models/client.model';

@Component({
  selector: 'app-modal-recusar',
  templateUrl: './modal-recusar.component.html',
  styleUrls: ['./modal-recusar.component.css']
})
export class ModalRecusarComponent implements OnInit {
  @Input() client!: Client;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
