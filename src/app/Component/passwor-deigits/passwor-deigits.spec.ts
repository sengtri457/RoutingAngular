import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassworDeigits } from './passwor-deigits';

describe('PassworDeigits', () => {
  let component: PassworDeigits;
  let fixture: ComponentFixture<PassworDeigits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassworDeigits]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassworDeigits);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
