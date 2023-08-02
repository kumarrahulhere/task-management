import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVerifyDialogComponent } from './user-verify-dialog.component';

describe('UserVerifyDialogComponent', () => {
  let component: UserVerifyDialogComponent;
  let fixture: ComponentFixture<UserVerifyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserVerifyDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserVerifyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
