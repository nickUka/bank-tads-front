import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaInicialGerComponent } from './tela-inical-ger.component';

describe('TelaInicalGerComponent', () => {
  let component: TelaInicialGerComponent;
  let fixture: ComponentFixture<TelaInicialGerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaInicialGerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaInicialGerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
