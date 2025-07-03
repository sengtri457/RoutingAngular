import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HideRow } from './hide-row';

describe('HideRow', () => {
  let component: HideRow;
  let fixture: ComponentFixture<HideRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HideRow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HideRow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
