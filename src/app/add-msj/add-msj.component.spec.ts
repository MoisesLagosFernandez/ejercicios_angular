import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMsjComponent } from './add-msj.component';

describe('AddMsjComponent', () => {
  let component: AddMsjComponent;
  let fixture: ComponentFixture<AddMsjComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMsjComponent]
    });
    fixture = TestBed.createComponent(AddMsjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
