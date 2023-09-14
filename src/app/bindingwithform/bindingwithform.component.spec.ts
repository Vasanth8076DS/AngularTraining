import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingwithformComponent } from './bindingwithform.component';

describe('BindingwithformComponent', () => {
  let component: BindingwithformComponent;
  let fixture: ComponentFixture<BindingwithformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BindingwithformComponent]
    });
    fixture = TestBed.createComponent(BindingwithformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
