import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeInfo } from './poke-info';

describe('PokeInfo', () => {
  let component: PokeInfo;
  let fixture: ComponentFixture<PokeInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokeInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
