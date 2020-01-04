import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReducerPostComponent } from './reducer-post.component';

describe('ReducerPostComponent', () => {
  let component: ReducerPostComponent;
  let fixture: ComponentFixture<ReducerPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReducerPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReducerPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
