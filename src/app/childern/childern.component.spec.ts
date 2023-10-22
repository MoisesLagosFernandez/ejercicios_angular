import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildernComponent } from './childern.component';

describe('ChildernComponent', () => {
  let component: ChildernComponent;
  let fixture: ComponentFixture<ChildernComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildernComponent]
    });
    fixture = TestBed.createComponent(ChildernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
