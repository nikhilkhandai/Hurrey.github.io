import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JroomComponent } from './jroom.component';

describe('JroomComponent', () => {
  let component: JroomComponent;
  let fixture: ComponentFixture<JroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
