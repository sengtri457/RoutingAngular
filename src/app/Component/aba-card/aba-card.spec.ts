import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaCard } from './aba-card';

describe('AbaCard', () => {
  let component: AbaCard;
  let fixture: ComponentFixture<AbaCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbaCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbaCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
