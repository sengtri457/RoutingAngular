import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Attendent } from './attendent';

describe('Attendent', () => {
  let component: Attendent;
  let fixture: ComponentFixture<Attendent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Attendent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Attendent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
