import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsscannerComponent } from './itemsscanner.component';

describe('ItemsscannerComponent', () => {
  let component: ItemsscannerComponent;
  let fixture: ComponentFixture<ItemsscannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsscannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemsscannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
