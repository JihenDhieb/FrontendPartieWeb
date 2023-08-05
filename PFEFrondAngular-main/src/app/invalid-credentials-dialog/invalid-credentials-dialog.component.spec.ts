import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidCredentialsDialogComponent } from './invalid-credentials-dialog.component';

describe('InvalidCredentialsDialogComponent', () => {
  let component: InvalidCredentialsDialogComponent;
  let fixture: ComponentFixture<InvalidCredentialsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvalidCredentialsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvalidCredentialsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
