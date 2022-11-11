import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgDetailComponent } from './vg-detail.component';

describe('VgDetailComponent', () => {
  let component: VgDetailComponent;
  let fixture: ComponentFixture<VgDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VgDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
