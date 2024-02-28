import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTattooComponent } from './new-tattoo.component';

describe('NewTattooComponent', () => {
  let component: NewTattooComponent;
  let fixture: ComponentFixture<NewTattooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewTattooComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewTattooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
