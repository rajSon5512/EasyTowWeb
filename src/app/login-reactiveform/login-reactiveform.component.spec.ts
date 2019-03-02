import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginReactiveformComponent } from './login-reactiveform.component';

describe('LoginReactiveformComponent', () => {
  let component: LoginReactiveformComponent;
  let fixture: ComponentFixture<LoginReactiveformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginReactiveformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginReactiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
