import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersalaryComponent } from './usersalary.component';

describe('UsersalaryComponent', () => {
  let component: UsersalaryComponent;
  let fixture: ComponentFixture<UsersalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersalaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
