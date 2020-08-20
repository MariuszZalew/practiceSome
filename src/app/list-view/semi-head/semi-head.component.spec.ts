import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiHeadComponent } from './semi-head.component';

describe('SemiHeadComponent', () => {
  let component: SemiHeadComponent;
  let fixture: ComponentFixture<SemiHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemiHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemiHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
