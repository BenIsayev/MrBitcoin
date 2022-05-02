import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMovesComponent } from './user-moves.component';

describe('UserMovesComponent', () => {
  let component: UserMovesComponent;
  let fixture: ComponentFixture<UserMovesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMovesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMovesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
