import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaijuComponent } from './baiju.component';

describe('BaijuComponent', () => {
  let component: BaijuComponent;
  let fixture: ComponentFixture<BaijuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaijuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaijuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
