import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooktableFormComponent } from './booktable-form.component';

describe('BooktableFormComponent', () => {
  let component: BooktableFormComponent;
  let fixture: ComponentFixture<BooktableFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooktableFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooktableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
