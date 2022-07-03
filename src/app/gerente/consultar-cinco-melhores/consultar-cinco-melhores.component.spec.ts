import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarCincoMelhoresComponent } from './consultar-cinco-melhores.component';

describe('ConsultarCincoMelhoresComponent', () => {
  let component: ConsultarCincoMelhoresComponent;
  let fixture: ComponentFixture<ConsultarCincoMelhoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarCincoMelhoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarCincoMelhoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
