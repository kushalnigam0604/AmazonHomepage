import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialModuleComponent } from './material-module.component';

describe('MaterialModuleComponent', () => {
  let component: MaterialModuleComponent;
  let fixture: ComponentFixture<MaterialModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
