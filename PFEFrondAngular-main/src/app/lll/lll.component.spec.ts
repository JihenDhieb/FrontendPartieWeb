import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LllComponent } from './lll.component';

describe('LllComponent', () => {
  let component: LllComponent;
  let fixture: ComponentFixture<LllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
