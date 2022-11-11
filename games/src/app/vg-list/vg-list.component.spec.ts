import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgListComponent } from './vg-list.component';

describe('VgListComponent', () => {
  let component: VgListComponent;
  let fixture: ComponentFixture<VgListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VgListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
