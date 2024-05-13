import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalSorageDataComponent } from './local-sorage-data.component';

describe('LocalSorageDataComponent', () => {
  let component: LocalSorageDataComponent;
  let fixture: ComponentFixture<LocalSorageDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocalSorageDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocalSorageDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
