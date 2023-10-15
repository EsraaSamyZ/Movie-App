import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendatinsComponent } from './recommendatins.component';

describe('RecommendatinsComponent', () => {
  let component: RecommendatinsComponent;
  let fixture: ComponentFixture<RecommendatinsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecommendatinsComponent]
    });
    fixture = TestBed.createComponent(RecommendatinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
