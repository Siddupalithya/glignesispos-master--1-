import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitscannerComponent } from './exitscanner.component';

describe('ExitscannerComponent', () => {
  let component: ExitscannerComponent;
  let fixture: ComponentFixture<ExitscannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExitscannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExitscannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
