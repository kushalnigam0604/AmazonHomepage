import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAndPostComponent } from './get-and-post.component';

describe('GetAndPostComponent', () => {
  let component: GetAndPostComponent;
  let fixture: ComponentFixture<GetAndPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAndPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAndPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
