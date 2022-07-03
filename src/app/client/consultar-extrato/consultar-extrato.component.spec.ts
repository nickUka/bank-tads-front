import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarExtratoComponent } from './consultar-extrato.component';

describe('ConsultarExtratoComponent', () => {
  let component: ConsultarExtratoComponent;
  let fixture: ComponentFixture<ConsultarExtratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarExtratoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarExtratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
