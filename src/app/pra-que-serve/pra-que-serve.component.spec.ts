import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraQueServeComponent } from './pra-que-serve.component';

describe('PraQueServeComponent', () => {
  let component: PraQueServeComponent;
  let fixture: ComponentFixture<PraQueServeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PraQueServeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PraQueServeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
