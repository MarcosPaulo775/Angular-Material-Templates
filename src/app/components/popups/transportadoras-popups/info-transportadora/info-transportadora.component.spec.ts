import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTransportadoraComponent } from './info-transportadora.component';

describe('InfoTransportadoraComponent', () => {
  let component: InfoTransportadoraComponent;
  let fixture: ComponentFixture<InfoTransportadoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoTransportadoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoTransportadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
