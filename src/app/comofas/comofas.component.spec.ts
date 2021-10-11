import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComofasComponent } from './comofas.component';

describe('ComofasComponent', () => {
  let component: ComofasComponent;
  let fixture: ComponentFixture<ComofasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComofasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComofasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
