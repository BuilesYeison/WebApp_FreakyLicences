import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpComponent } from './simp.component';

describe('SimpComponent', () => {
  let component: SimpComponent;
  let fixture: ComponentFixture<SimpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
