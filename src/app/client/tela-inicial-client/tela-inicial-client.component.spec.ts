import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaInicialClientComponent } from './tela-inicial-client.component';

describe('TelaInicialClientComponent', () => {
  let component: TelaInicialClientComponent;
  let fixture: ComponentFixture<TelaInicialClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaInicialClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaInicialClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
