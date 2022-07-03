import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacarComponent } from './sacar.component';

describe('SacarComponent', () => {
  let component: SacarComponent;
  let fixture: ComponentFixture<SacarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SacarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SacarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
