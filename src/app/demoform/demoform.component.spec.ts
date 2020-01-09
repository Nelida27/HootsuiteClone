import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoformComponent } from './demoform.component';

describe('DemoformComponent', () => {
  let component: DemoformComponent;
  let fixture: ComponentFixture<DemoformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
