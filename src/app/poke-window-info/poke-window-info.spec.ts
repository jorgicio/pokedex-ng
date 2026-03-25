import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeWindowInfo } from './poke-window-info';

describe('PokeWindowInfo', () => {
  let component: PokeWindowInfo;
  let fixture: ComponentFixture<PokeWindowInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokeWindowInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeWindowInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
