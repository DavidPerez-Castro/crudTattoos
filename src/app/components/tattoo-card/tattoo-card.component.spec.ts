import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TattooCardComponent } from './tattoo-card.component';

describe('TattooCardComponent', () => {
  let component: TattooCardComponent;
  let fixture: ComponentFixture<TattooCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TattooCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TattooCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
