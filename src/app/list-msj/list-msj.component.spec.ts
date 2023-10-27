import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMsjComponent } from './list-msj.component';

describe('ListMsjComponent', () => {
  let component: ListMsjComponent;
  let fixture: ComponentFixture<ListMsjComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListMsjComponent]
    });
    fixture = TestBed.createComponent(ListMsjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
