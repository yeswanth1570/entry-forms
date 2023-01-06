import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryFormsComponent } from './entry-forms.component';

describe('EntryFormsComponent', () => {
  let component: EntryFormsComponent;
  let fixture: ComponentFixture<EntryFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntryFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
