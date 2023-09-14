import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepuestoPageComponent } from './repuesto-page.component';

describe('RepuestoPageComponent', () => {
  let component: RepuestoPageComponent;
  let fixture: ComponentFixture<RepuestoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepuestoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepuestoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
