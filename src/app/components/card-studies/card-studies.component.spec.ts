import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStudiesComponent } from './card-studies.component';

describe('CardStudiesComponent', () => {
  let component: CardStudiesComponent;
  let fixture: ComponentFixture<CardStudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardStudiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
