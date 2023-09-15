import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersValidatorsComponent } from './filters-validators.component';

describe('FiltersValidatorsComponent', () => {
  let component: FiltersValidatorsComponent;
  let fixture: ComponentFixture<FiltersValidatorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltersValidatorsComponent]
    });
    fixture = TestBed.createComponent(FiltersValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
