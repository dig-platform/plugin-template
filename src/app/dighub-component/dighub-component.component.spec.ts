import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DighubComponentComponent } from './dighub-component.component';

describe('DighubComponentComponent', () => {
  let component: DighubComponentComponent;
  let fixture: ComponentFixture<DighubComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DighubComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DighubComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
