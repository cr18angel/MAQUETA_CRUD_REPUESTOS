import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRepuestosComponent } from './card-repuestos.component';

describe('CardRepuestosComponent', () => {
  let component: CardRepuestosComponent;
  let fixture: ComponentFixture<CardRepuestosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRepuestosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardRepuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
