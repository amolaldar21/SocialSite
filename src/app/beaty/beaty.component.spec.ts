import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatyComponent } from './beaty.component';

describe('BeatyComponent', () => {
  let component: BeatyComponent;
  let fixture: ComponentFixture<BeatyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeatyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeatyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
