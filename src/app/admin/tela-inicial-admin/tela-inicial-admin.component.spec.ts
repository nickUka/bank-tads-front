import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaInicialAdminComponent } from './tela-inicial-admin.component';

describe('TelaInicialAdminComponent', () => {
  let component: TelaInicialAdminComponent;
  let fixture: ComponentFixture<TelaInicialAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaInicialAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaInicialAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
