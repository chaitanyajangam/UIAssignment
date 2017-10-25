import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersontableComponent } from './persontable.component';

describe('PersontableComponent', () => {
  let component: PersontableComponent;
  let fixture: ComponentFixture<PersontableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersontableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersontableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
