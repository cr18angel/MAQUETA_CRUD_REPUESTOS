import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRelacionComponent } from './table-relacion.component';

describe('TableRelacionComponent', () => {
  let component: TableRelacionComponent;
  let fixture: ComponentFixture<TableRelacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRelacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableRelacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
