import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonerComponent } from './botoner.component';

describe('BotonerComponent', () => {
  let component: BotonerComponent;
  let fixture: ComponentFixture<BotonerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonerComponent]
    });
    fixture = TestBed.createComponent(BotonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
