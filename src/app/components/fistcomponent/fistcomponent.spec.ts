import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fistcomponent } from './fistcomponent';

describe('Fistcomponent', () => {
  let component: Fistcomponent;
  let fixture: ComponentFixture<Fistcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fistcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fistcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
