import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprojecttablelistComponent } from './editprojecttablelist.component';

describe('EditprojecttablelistComponent', () => {
  let component: EditprojecttablelistComponent;
  let fixture: ComponentFixture<EditprojecttablelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditprojecttablelistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditprojecttablelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
