import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTattooComponent } from './list-tattoo.component';

describe('ListTattooComponent', () => {
  let component: ListTattooComponent;
  let fixture: ComponentFixture<ListTattooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListTattooComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListTattooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
