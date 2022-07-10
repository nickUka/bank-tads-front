import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaInicalGerComponent } from './tela-inical-ger.component';

describe('TelaInicalGerComponent', () => {
  let component: TelaInicalGerComponent;
  let fixture: ComponentFixture<TelaInicalGerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaInicalGerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaInicalGerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
