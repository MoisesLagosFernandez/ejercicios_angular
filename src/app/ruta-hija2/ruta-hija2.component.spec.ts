import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaHija2Component } from './ruta-hija2.component';

describe('RutaHija2Component', () => {
  let component: RutaHija2Component;
  let fixture: ComponentFixture<RutaHija2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RutaHija2Component]
    });
    fixture = TestBed.createComponent(RutaHija2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
