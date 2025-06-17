import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usercards } from './usercards';

describe('Usercards', () => {
  let component: Usercards;
  let fixture: ComponentFixture<Usercards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Usercards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Usercards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
