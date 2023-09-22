import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacionesChipsComponent } from './relaciones-chips.component';

describe('RelacionesChipsComponent', () => {
  let component: RelacionesChipsComponent;
  let fixture: ComponentFixture<RelacionesChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelacionesChipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelacionesChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
