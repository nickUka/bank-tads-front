import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRecusarComponent } from './modal-recusar.component';

describe('ModalRecusarComponent', () => {
  let component: ModalRecusarComponent;
  let fixture: ComponentFixture<ModalRecusarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRecusarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRecusarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
