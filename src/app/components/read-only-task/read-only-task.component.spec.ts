import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOnlyTaskComponent } from './read-only-task.component';

describe('ReadOnlyTaskComponent', () => {
  let component: ReadOnlyTaskComponent;
  let fixture: ComponentFixture<ReadOnlyTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadOnlyTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadOnlyTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
