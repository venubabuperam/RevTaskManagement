import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewalltasksComponent } from './viewalltasks.component';

describe('ViewalltasksComponent', () => {
  let component: ViewalltasksComponent;
  let fixture: ComponentFixture<ViewalltasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewalltasksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewalltasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
