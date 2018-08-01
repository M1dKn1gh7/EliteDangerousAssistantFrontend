import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentSystemComponent } from './current-system.component';

describe('CurrentSystemComponent', () => {
  let component: CurrentSystemComponent;
  let fixture: ComponentFixture<CurrentSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
