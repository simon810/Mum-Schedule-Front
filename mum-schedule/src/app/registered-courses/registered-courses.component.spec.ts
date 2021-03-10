import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredCoursesComponent } from './registered-courses.component';

describe('RegisteredCoursesComponent', () => {
  let component: RegisteredCoursesComponent;
  let fixture: ComponentFixture<RegisteredCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteredCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
