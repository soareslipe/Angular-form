import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFilesCustomComponent } from './input-files-custom.component';

describe('InputFilesCustomComponent', () => {
  let component: InputFilesCustomComponent;
  let fixture: ComponentFixture<InputFilesCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputFilesCustomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputFilesCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
