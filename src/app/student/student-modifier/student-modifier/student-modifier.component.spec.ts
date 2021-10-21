import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentModifierComponent } from './student-modifier.component';

describe('StudentModifierComponent', () => {
  let component: StudentModifierComponent;
  let fixture: ComponentFixture<StudentModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentModifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
