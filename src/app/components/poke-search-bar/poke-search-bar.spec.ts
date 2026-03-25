import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeSearchBar } from './poke-search-bar';

describe('PokeSearchBar', () => {
  let component: PokeSearchBar;
  let fixture: ComponentFixture<PokeSearchBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokeSearchBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeSearchBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
